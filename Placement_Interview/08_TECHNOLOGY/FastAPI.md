---
title: FastAPI — REST APIs & Serving Models
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [fastapi, backend, api, level-7, tier-2]
---

# 🌐 FastAPI

> [!important] Why this matters for YOU
> Resume claims FastAPI, and BTracker is a *production* LLM platform — an examiner may ask "how does the frontend talk to your model?" This note: HTTP/REST fundamentals, FastAPI specifics, and the model-serving story.

---

## 1 · HTTP & REST — the substrate

### The verbs (and their contract)

| Verb | Meaning | Idempotent? |
|---|---|---|
| **GET** | read — no side effects | ✅ |
| **POST** | create / submit | ❌ |
| **PUT** | replace in full | ✅ |
| **PATCH** | partial update | ❌ (generally) |
| **DELETE** | remove | ✅ |

- **Idempotent** = repeating the call leaves the same state — why retries are safe on GET/PUT/DELETE and dangerous on POST (duplicate orders!)
- **Status codes you must speak:** 200 OK · 201 Created · 400 Bad Request (client sent garbage) · 401 Unauthorized (who are you?) · 403 Forbidden (I know you — no) · 404 Not Found · 409 Conflict · 422 Unprocessable (validation — FastAPI's default) · 429 Too Many Requests · 500 server error

### REST resource design

```text
GET    /agents                    list
POST   /agents                    create
GET    /agents/{id}               read one
PUT    /agents/{id}               replace
DELETE /agents/{id}               delete
POST   /agents/{id}/tasks         nested action (a "verb" as sub-resource)
```

- Resources are **nouns**; filtering via query params (`?limit=20&offset=40`)
- **Statelessness:** every request carries its auth + context; the server keeps no session — that's what makes horizontal scaling trivial
- JSON request/response everywhere; version early (`/v1/`)

---

## 2 · FastAPI — why it exists

| Feature | What it gives you |
|---|---|
| **Type hints → validation** | request bodies validated automatically; wrong input → 422 with a precise error, before your code runs |
| **Pydantic models** | the schema: parse, validate, serialize, *document* in one declaration |
| **Async-first** | `async def` on ASGI/uvicorn — concurrent I/O without threads |
| **Auto docs** | `/docs` (Swagger UI) + `/redoc` generated from the same type hints |
| **Dependency injection** | `Depends()` — auth, DB sessions, pagination as composable plug-ins |

```python
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, Field

app = FastAPI(title="Demand Forecast API")

class ForecastRequest(BaseModel):
    series_id: str
    horizon: int = Field(28, ge=1, le=56)     # validation, for free
    model: str = "lstm"

class ForecastResponse(BaseModel):
    series_id: str
    predictions: list[float]
    model_used: str

@app.post("/v1/forecast", response_model=ForecastResponse)
async def forecast(req: ForecastRequest, user: str = Depends(get_current_user)):
    if req.series_id not in registry:
        raise HTTPException(404, f"Unknown series {req.series_id}")
    preds = await run_inference(req.series_id, req.horizon, req.model)  # non-blocking I/O
    return ForecastResponse(series_id=req.series_id, predictions=preds, model_used=req.model)
```

### Async — the part people fumble (say it precisely)

> *"Async helps **I/O-bound** work: while one request waits on the database or an LLM API, the event loop serves others — one process, thousands of concurrent waits. It does **not** speed up CPU-bound work (inference!) — that belongs in a worker process or a separate inference service, otherwise the event loop blocks and every request queues."*

---

## 3 · Auth & Security — the trust boundaries

| Mechanism | How |
|---|---|
| **API keys** | simple identification, not strong auth — fine for internal tools |
| **JWT** | signed token: server verifies signature, no session store; carries claims (exp, roles) |
| **OAuth2** | delegated authorization flows (FastAPI has `OAuth2PasswordBearer` built-in) |
| **HTTPS** | always — tokens are credentials |
| **Input validation** | Pydantic as the first wall against injection/malformed payloads |
| **Secrets** | environment variables / secret stores — *never* in code (your BTracker uses env config) |
| **Rate limiting** | per-key/token quotas → 429; protects the backend from abuse and cost spikes |

> [!important] Validation at trust boundaries is non-negotiable
> Every request is hostile until validated: types, ranges, lengths, enum membership — enforced at the Pydantic layer, plus authorization checks *per endpoint* (authentication ≠ authorization: 401 = "who?", 403 = "not you").

---

## 4 · Serving ML Models — the real-world pattern

```text
Client → FastAPI (validation, auth, rate limit)
             → model registry (load once at startup, not per request)
             → inference (CPU/GPU worker)
             → response (predictions + model version + latency)
```

**Design rules to say out loud:**
- **Load the model once** at startup (lifespan event) — per-request loading is the classic latency bug
- **Version your models** in responses — reproducibility of predictions (your SIRP instincts apply)
- **Batching & concurrency:** small requests batched through the model = throughput; async queue in front of the worker
- **Observability:** log latency percentiles (p50/p95), error rates, input drift signals
- **Fallback:** model failure → degrade gracefully (serve last-good forecast + flag stale) rather than 500 on a revenue path

**FastAPI vs Flask — the two-line answer:** *"Flask is sync-first WSGI, minimal, bring-your-own-everything; FastAPI is async ASGI with type-driven validation and auto docs. For ML serving and modern backends, FastAPI is the default choice; Flask for legacy/simple sync apps."*

---

## ⚡ Rapid-Fire Q&A

> **PUT vs PATCH?**
> PUT replaces the whole resource (idempotent); PATCH applies a partial change.

> **What does FastAPI do with my Pydantic model?**
> Validates the request against it (→ 422 on failure), parses types, serializes responses, and generates the OpenAPI schema that powers /docs.

> **When is async useless?**
> CPU-bound handlers — a single heavy inference call blocks the event loop regardless. Use workers/processes or offload to a task queue.

> **How do you prevent duplicate submissions on POST?**
> Idempotency keys: client sends a unique key; server de-duplicates — the standard pattern for payment/task creation.

> **Where do secrets live?**
> Environment variables / secret manager, injected via config — never in the repo (`.gitignore` + env schema validation at startup).

> **What is dependency injection buying you?**
> Composable cross-cutting concerns (auth user, DB session) — one `Depends` per route, testable by overriding the dependency in tests.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The frontend it serves | [[React_JavaScript]] |
| Deploying it | [[Docker_Deployment]] · [[MLOps]] |
| Your production instance | [[Production_Concepts]] · [[../01_AI/MCP/MCP_Architecture]] |

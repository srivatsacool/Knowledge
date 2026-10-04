---
title: Production & Software Engineering Concepts — BTracker Defense
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [production, engineering, security, level-8, tier-3]
---

# 🔐 Production & Software Engineering

> [!important] "Production-grade" invites this grilling
> BTracker is described as production-grade — so expect: *"how do you handle secrets? failures? scaling? what happens when the LLM API is down?"* This note is the whole checklist, in interview-answer form.

---

## 1 · AuthN vs AuthZ — get these two words right

| | Authentication (AuthN) | Authorization (AuthZ) |
|---|---|---|
| Question | **Who are you?** | **What may you do?** |
| Mechanism | password + hash, JWT, OAuth | roles, permissions, quotas |
| Failure code | 401 Unauthorized | 403 Forbidden |

- **Passwords:** never stored — store **salted hashes** (bcrypt/argon2); constant-time comparison
- **JWT:** signed token `{header, payload, signature}` — server verifies signature, no session store; set `exp`, keep payloads small, *never* put secrets in the payload (it's base64, not encrypted)
- **Sessions vs tokens:** sessions = server state, easy to revoke; JWTs = stateless, revocation needs a denylist
- **Principle of least privilege** — the default answer to every AuthZ design question

> [!important] Security non-negotiables (recite these)
> Validate every input at the trust boundary · parameterized queries (SQL injection) · secrets in env vars/secret stores, never in code or Git · HTTPS everywhere · rate-limit public endpoints · least-privilege access · log auth failures · keep dependencies patched.

---

## 2 · Configuration & Secrets

```python
# config via environment — 12-factor style
API_KEY = os.environ["LLM_API_KEY"]          # fail loud at startup if missing
DB_URL  = os.environ.get("DATABASE_URL", "sqlite:///local.db")
DEBUG   = os.environ.get("DEBUG", "false").lower() == "true"
```

| Rule | Why |
|---|---|
| Secrets ≠ code, ≠ Git | Git history is forever; leaks are un-revocable |
| `.env` gitignored; `.env.example` committed | onboarding without leaking |
| Config per environment (dev/stage/prod) | one build, many configs |
| Fail fast on missing config | a service that starts half-configured fails at 3am instead |
| Secret rotation supported | keys expire — design for it |

---

## 3 · Logging & Observability — the difference between blind and informed

| Layer | What it answers |
|---|---|
| **Logging** (structured, leveled) | what happened — `INFO` flow, `WARNING` degraded, `ERROR` failed, with request IDs |
| **Metrics** | how much/how fast — latency p50/p95/p99, error rate, throughput |
| **Tracing** | where time went across services |
| **Alerting** | who must wake up — on symptoms (error rate, latency), not causes |

**Log discipline:** structured JSON logs with a request/correlation ID; **never log secrets, tokens, or raw user data**; log the *inputs summary* and *outcome* of LLM calls (your BTracker's usage quotas are exactly this pattern).

```python
logger.info("forecast.served", extra={
    "req_id": req_id, "model": "lstm-v3", "latency_ms": 412, "series": series_id})
```

---

## 4 · Error Handling & Resilience — design for failure

```python
for attempt in range(3):                          # retry with backoff + jitter
    try:
        return await call_llm(payload)
    except TransientError:
        await asyncio.sleep(2 ** attempt + random.random())
raise ServiceUnavailable("LLM API down after 3 retries")
```

| Pattern | One-liner |
|---|---|
| **Retry + exponential backoff** | transient faults heal — space out retries, add jitter |
| **Timeout** on every external call | a hung dependency must not hang you |
| **Circuit breaker** | after repeated failures, fail fast and probe occasionally — protect yourself *and* the dependency |
| **Graceful degradation** | LLM down → serve cached/last-good response with a "stale" flag (my forecasting fallback pattern) |
| **Idempotency** | retries must not double-charge/double-send — idempotency keys |
| **Dead-letter queue** | failed jobs preserved for inspection, not lost |

> [!tip] The mindset sentence
> *"In production, the question isn't 'will it fail?' but 'what happens when it fails?' — every external call gets a timeout, a retry policy, and a defined degraded mode."*

---

## 5 · Testing — the confidence machine

| Layer | Tests | Example |
|---|---|---|
| **Unit** | one function, fast, deterministic | cost simulator with fixed demand paths |
| **Integration** | components together (API + DB) | POST /forecast writes & reads correctly |
| **End-to-end** | user journey through the system | login → run agent → tool executes |
| **Regression** | the bug that got fixed never returns | test per incident |
| **Load** | behavior at expected peak | quota enforcement under burst |

**Pyramid:** many unit, fewer integration, few E2E. **Test the boundaries:** empty input, extreme values, auth failures, malformed JSON — bugs live at edges. A money/security path without tests is unfinished work.

---

## 6 · Scalability & Deployment Vocabulary

```text
Vertical (bigger box) vs Horizontal (more boxes — needs statelessness)
Stateless services + external state (DB/Redis)  → scale by adding replicas behind a load balancer
Caching (Redis) → cut repeated reads; CDN → static assets
Async queues (Celery/RQ) → heavy jobs off the request path
```

- **CI/CD:** push → CI runs tests/lint → green build → CD deploys (containers); feature flags decouple deploy from release
- **Containers:** the unit of consistent deployment → [[Docker_Deployment]]
- **Monitoring post-deploy:** error rate, latency, saturation — deploy ≠ done until dashboards agree
- **Rate limiting & quotas** (your BTracker literally has these): token-bucket per user/key → protects cost (LLM APIs bill per token!) and fairness — *say that pairing; it's why an LLM product has quotas as a first-class feature*

---

## 7 · BTracker Production Story — assemble it on demand

| Question | Answer shape |
|---|---|
| "What makes it production-grade?" | env-based config & secrets, auth + per-user usage quotas, structured logging, tool-call validation, failure handling on LLM API calls, open-sourced with documented setup |
| "What happens when the LLM API fails?" | timeout + retry/backoff → user-facing error with status, never a silent wrong answer; conversation state preserved client-side |
| "How do you control cost?" | per-user quotas/rate limits, logged token usage, model routing (small model for cheap tasks) |
| "How do you test an agent?" | unit-test tools; integration-test tool-calling loops; eval harness scoring task completion — not vibes |
| "Biggest security risk?" | prompt injection via tool results → treat tool outputs as untrusted input, validate/allowlist actions, human-in-the-loop for destructive operations |

---

## ⚡ Rapid-Fire Q&A

> **401 vs 403?**
> Not authenticated vs authenticated-but-not-allowed.

> **Why hash passwords instead of encrypting?**
> Hashing is one-way — a breach leaks hashes, not passwords; encryption would be reversible with the key you'd have to store.

> **What is an idempotency key?**
> A client-supplied unique key letting the server recognize retries — the fix for double-execution under retry logic.

> **Graceful degradation — example?**
> Recommendation service down → serve popular items with a "bestsellers" label instead of an error page.

> **How do you know your service is healthy?**
> Not by checking the homepage: error rate, latency percentiles, saturation — alerting on user-visible symptoms.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The container it ships in | [[Docker_Deployment]] |
| The API layer | [[FastAPI]] |
| ML-specific production | [[MLOps]] |
| The agent architecture | [[../01_AI/MCP/MCP_Architecture]] |

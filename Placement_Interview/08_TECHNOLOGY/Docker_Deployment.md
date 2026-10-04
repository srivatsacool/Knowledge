---
title: Docker & Deployment — From Notebook to Service
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [docker, deployment, containers, level-8, roadmap]
---

# 🐳 Docker & Deployment

> [!important] The problem it solves (lead with this)
> *"Works on my machine"* — dependency conflicts, OS differences, config drift. A container packages **app + dependencies + runtime** into an immutable, portable image. That's the whole pitch; everything else is vocabulary.

---

## 1 · Images & Containers — the mental model

```text
Dockerfile  (recipe)  ──build──►  IMAGE  (frozen template, layered)
                                      │
                              docker run (instance of)
                                      ▼
                                CONTAINER  (running process, isolated)
```

- **Image** = immutable, layered filesystem snapshot; **container** = a running instance (one process, normally)
- **Layers are cached** — rebuilds only re-run steps after a changed layer (why you copy `requirements.txt` and install *before* copying code)
- **Registry** (Docker Hub / cloud registry) = GitHub for images

### The Dockerfile you should be able to write from memory

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt   # cached unless deps change
COPY . .
ENV API_KEY=""                                        # placeholder only — real value injected at runtime
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

```bash
docker build -t forecast-api:1.4 .
docker run -p 8000:8000 --env-file .env forecast-api:1.4
```

---

## 2 · The Six Docker Concepts — interview minimum

| Concept | One-liner |
|---|---|
| **Ports** | `-p 8000:8000` maps host:container — the container is isolated network-wise |
| **Volumes** | persistent mount (`-v data:/app/data`) — container filesystem dies with the container |
| **Environment variables** | `--env-file` / `-e` — **secrets injected at runtime, never baked into images** |
| **Docker Compose** | multi-container local orchestration in one YAML (app + db + redis) |
| **Tags** | version your images (`:1.4`, not just `:latest`) — reproducibility again |
| **Slim images** | multi-stage builds, `-slim` bases — smaller = faster deploys, smaller attack surface |

```yaml
# docker-compose.yml — the local dev stack
services:
  api:
    build: .
    ports: ["8000:8000"]
    env_file: .env
  db:
    image: postgres:16
    volumes: ["pgdata:/var/lib/postgresql/data"]
volumes: { pgdata: {} }
```

---

## 3 · Deployment Targets — where the image goes

| Target | What | Fit |
|---|---|---|
| **VM / bare server** | docker run + reverse proxy (nginx) | simple, full control |
| **PaaS** (Railway, Render, Cloud Run) | push image, platform scales | fastest to production |
| **Streamlit/HF Spaces** | repo-connected app hosting | data apps (your inventory dashboard) |
| **Kubernetes** | orchestration: scaling, self-healing, rollouts | when many services / real traffic |
| **Serverless** (Lambda/Functions) | event-driven, zero-idle-cost | spiky, short workloads (not long inference) |

> [!tip] The scaling sentence
> *"Containers make instances **identical and disposable** — which is what horizontal scaling needs: add replicas of the same image behind a load balancer, kill and replace unhealthy ones. State lives outside (DB, Redis, volumes), never in the container."* → [[../08_TECHNOLOGY/Production_Concepts]] §6

---

## 4 · The Deployment Checklist — production hygiene

- [ ] Secrets via env/secret manager — never in the image or Git
- [ ] Health endpoint (`/health`) + container healthcheck
- [ ] Structured logs to stdout (the platform collects them)
- [ ] Resource limits (memory/CPU) set — a runaway container must not starve neighbors
- [ ] Image tagged with the build/version — rollback = redeploy previous tag
- [ ] Non-root user inside the container
- [ ] `.dockerignore` (data, `.git`, `.venv`) — small, clean builds

**CI/CD connection:** CI builds and tests the image on every push → CD pushes to registry → deploys the tagged image (→ [[MLOps]] §4).

---

## 5 · Serving ML Specifically — the Docker angle

- Model artifacts: bake into image (simple, big) **or** mount/download from object storage at startup (flexible, versioned — model registry pattern)
- GPU containers: `--gpus all` + CUDA base images (the `nvidia/cuda` layering)
- Batch vs online: same image, different entrypoint (`predict.py --date 2026-09-07` for batch; API server for online) — one artifact, two deployments

---

## ⚡ Rapid-Fire Q&A

> **Image vs container?**
> Frozen template vs running instance — class vs object.

> **Why do containers start in seconds and VMs in minutes?**
> Containers share the host kernel and isolate via namespaces/cgroups (process-level); VMs virtualize a whole guest OS.

> **Where do secrets go?**
> Injected at runtime via env/secret manager — never in Dockerfile layers (layers are inspectable forever).

> **What is Docker Compose for?**
> Declaring and running multi-container local stacks in one file — the dev-scale cousin of Kubernetes.

> **Why does layer order matter in a Dockerfile?**
> Cache: dependency install before code copy means code changes don't reinstall dependencies.

> **Your model needs the same library versions every time — how?**
> Pinned requirements baked into the image; the image tag *is* the environment version. → [[../02_ANALYTICS/Reproducibility]]

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The app being deployed | [[FastAPI]] · [[Streamlit]] |
| Cloud platform services | [[Cloud_Fundamentals]] |
| CI/CD + monitoring around it | [[MLOps]] |

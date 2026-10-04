---
title: MLOps — From Project to Production ML System
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [mlops, level-8, roadmap]
---

# 🔄 MLOps

> [!important] The separating line
> *"MLOps is what separates a **Data Science project** from a **production ML system**"* — your BTracker shows production instincts; this note completes the ML-specific lifecycle: **Data → Train → Validate → Registry → Deploy → Monitor → Retrain**.

---

## 1 · Why ML Engineering ≠ Software Engineering

```text
Code ──► behavior                    (software: deterministic)
Code + DATA + MODEL ──► behavior     (ML: three versioned inputs, all of them move)
```

The extra difficulty is *not the model* — it's **data drift, retraining, and the shadow of stale models**. Say that sentence; it's the definition test.

---

## 2 · The Lifecycle — station by station

```text
1. DATA       versioned, quality-gated          → [[../02_ANALYTICS/Reproducibility]]
2. TRAIN      tracked experiments (params→metrics→artifacts)
3. VALIDATE   offline metrics + business gates  → [[../02_ANALYTICS/Model_Evaluation]]
4. REGISTRY   versioned, approved models        (the model "release")
5. DEPLOY     endpoint / batch / embedded       → [[Docker_Deployment]]
6. MONITOR    serving metrics + DATA DRIFT      (the station everyone skips)
7. RETRAIN    triggered by drift/schedule       → back to 1
```

### Experiment tracking — the lab notebook that scales

```python
import mlflow
with mlflow.start_run():
    mlflow.log_params({"lookback": 28, "hidden": 64, "seed": 20260715})
    mlflow.log_metrics({"mase": 0.82, "inventory_cost": 141_200})
    mlflow.log_artifact("config.yaml")
```

- Every run: params + metrics + artifacts + code version — comparable, searchable, auditable
- Tools: **MLflow** (open standard), W&B, SageMaker Experiments
- This *is* your SIRP's run-log discipline, scaled — say that

### Model & data versioning

| Artifact | Versioned by |
|---|---|
| Code | Git |
| **Data** | DVC / lakehouse snapshots + manifests |
| **Models** | registry (MLflow Model Registry) with stages: staging → production, approval gates |
| Pipelines | versioned DAG definitions |

*"A prediction without its model version and data version is unauditable."*

---

## 3 · Deployment Patterns — the serving vocabulary

| Pattern | Mechanism | Fit |
|---|---|---|
| **Online endpoint** | real-time REST inference | interactive (your forecast API) |
| **Batch scoring** | scheduled job writes predictions to table | daily replenishment plans |
| **Streaming** | events scored in-flight | fraud/alerting |
| **Shadow mode** | new model runs silently beside incumbent; outputs logged, not served | risk-free candidate testing |
| **Canary / blue-green** | % of traffic / instant switchback | controlled rollout + rollback |
| **Embedded/edge** | model ships inside the app | offline needs |

**Rollback is a first-class feature:** models degrade — the *previous registry version* must deploy in minutes, not "retrain from scratch."

---

## 4 · Monitoring — the station that earns the salary

### Service health (software) — latency, errors, throughput

### ML health (the MLOps-specific layer)

| Signal | Meaning | Detection |
|---|---|---|
| **Data drift** | input distribution moves (new promo pattern, new customer mix) | feature-distribution monitoring (PSI, KS tests) |
| **Concept drift** | the X→y relationship moves | live accuracy vs delayed actuals |
| **Prediction drift** | output distribution shifts (more stockouts predicted) | output histograms + alarms |
| **Staleness** | model older than the world it models | age + retraining SLA |

```text
Drift detected ──► alert ──► diagnose (data pipeline? world changed?) ──►
retrain on fresh window ──► offline gates ──► registry ──► canary deploy
```

> [!important] The delayed-labels honesty
> *"For many ML problems the true label arrives late (did the customer churn? did demand materialize?) — so production monitoring needs **proxy metrics** (input drift, prediction distributions) plus a backfilled evaluation loop when actuals land. That's exactly why my SIRP favored rolling-origin evaluation: it simulates this honesty offline."*

---

## 5 · CI/CD for ML — the pipeline that builds pipelines

```text
PR → CI: unit tests + data-quality checks + small-scale training smoke test
Merge → train on full data → validation gates → registry (staging)
Approval → production deploy → monitor → feedback into next cycle
```

- **CT (continuous training)** is the ML addition to CI/CD: pipelines retrain on trigger (schedule/drift/manual)
- **Feature stores** (name-drop): serve consistent features online & offline, kill train-serve skew (→ [[../02_ANALYTICS/Data_Leakage]])

---

## 6 · Your Positioning Statement

> *"I've run the full lifecycle on a research scale — versioned data, tracked runs, validation gates, reproducible evaluation, and a served dashboard. MLOps at scale is the same discipline with orchestration and drift monitoring bolted on; my SIRP's reproducibility layer is the foundation those tools automate."*

---

## ⚡ Rapid-Fire Q&A

> **Data drift vs concept drift?**
> Inputs move (P(X) changes) vs the input→output relationship moves (P(y|X) changes) — different detectors, same alarm path.

> **How do you detect drift without labels?**
> Feature-distribution tests (PSI/KS) per feature, prediction-distribution monitoring, and proxy performance metrics until actuals arrive.

> **What is a model registry for?**
> Versioned, approved, discoverable model artifacts with stage transitions — the release-management layer between training and serving.

> **Shadow mode — why?**
> The candidate model produces predictions in production conditions with zero user risk; you compare offline before any traffic shift.

> **Why does retraining need gates, not just triggers?**
> The world moved, but the fresh data may be worse (pipeline bug, regime anomaly) — the same offline validation must pass before the new model ships.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The reproducibility foundation | [[../02_ANALYTICS/Reproducibility]] |
| Deployment mechanics | [[Docker_Deployment]] · [[Cloud_Fundamentals]] |
| The honest evaluation feeding it | [[../02_ANALYTICS/Model_Validation]] |

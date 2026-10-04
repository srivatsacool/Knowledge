---
title: Data Engineering Fundamentals — Pipelines & Storage
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [data-engineering, etl, level-8, roadmap]
---

# 🏗️ Data Engineering Fundamentals

> [!important] The analyst's boundary
> You're not a DE — but you must understand the pipeline that feeds you: **Source → Extract → Clean → Transform → Store → Serve**. When your dashboard is stale, you should be able to ask the right question.

---

## 1 · The Pipeline — where your work sits

```text
SOURCES            INGEST         STORE              PROCESS         SERVE
─────────          ─────          ─────              ───────         ─────
OLTP databases →  batch / CDC →  Warehouse/Lake →   transforms →    BI · ML · APIs
APIs, files        streaming      Lakehouse          orchestration   notebooks
events, logs       micro-batch    (raw → curated)    (Spark/SQL)     dashboards
```

Your SAP HANA extraction (→ [[SAP_HANA]]) is the *ingest + transform* section of exactly this diagram — say the mapping.

---

## 2 · ETL vs ELT — the architectural fork

| | ETL | ELT |
|---|---|---|
| Order | Extract → **Transform outside** → Load | Extract → **Load raw** → Transform inside the warehouse |
| Compute | dedicated transformation layer | warehouse compute (Snowflake/BigQuery/HANA) |
| Advantage | protects warehouse from junk | flexibility — raw retained, transform re-run, schema-on-read |
| Era | legacy/strict-compliance | modern cloud default |

**Data warehouse vs lake vs lakehouse:**

| Store | Data | Schema | Use |
|---|---|---|---|
| **Warehouse** | structured, curated | schema-on-write | BI, governed reporting |
| **Lake** | everything raw (files) | schema-on-read | ML, exploration — risk: "data swamp" |
| **Lakehouse** | lake storage + warehouse table semantics (Delta/Iceberg) | both | unified — the current convergence |

---

## 3 · Batch vs Streaming

| | Batch | Streaming |
|---|---|---|
| Latency | hours/daily | seconds–minutes |
| Complexity | low | high (exactly-once, state, watermarking) |
| Tech | scheduled SQL/Spark jobs | Kafka + Flink/Spark Streaming |
| Fit | reporting, model retraining | alerts, real-time ops |

> **The judgment line:** *"Most 'real-time' requests are 'fresher than yesterday' — a 15-minute micro-batch is 10× simpler and usually sufficient. Choose latency by the decision it serves."*

**CDC (change data capture):** stream inserts/updates from OLTP (via logs) into the warehouse — how "live ERP data" without killing the transactional system.

---

## 4 · Orchestration — the pipeline's nervous system

```text
Airflow DAG: extract → validate → transform → publish → notify
             each task: retries, timeout, dependencies, backfill
```

- **DAG** = dependency graph of tasks; scheduler runs them on time/trigger
- **Idempotent tasks** — rerunning a day's pipeline produces the same result (the reproducibility habit → [[../02_ANALYTICS/Reproducibility]])
- **Backfill & catch-up:** history reprocessing must be designed, not improvised
- Alternatives worth naming: Prefect, Dagster, cloud-native schedulers

---

## 5 · Data Quality & Modeling for Analytics

### The quality dimensions (your validation-gate vocabulary)

```text
Completeness (no missing expected rows) · Validity (ranges/enums)
Consistency (same entity, same definition across systems)
Timeliness (fresh enough for the decision) · Uniqueness (no dupes)
```

- **Data contracts:** producers commit to schema + semantics; consumers build on it — the fix for silent upstream breakage
- **Dimensional modeling** is the warehouse standard: star schema, facts, dims (→ [[../02_ANALYTICS/Power_BI/Star_Schema]])
- **Medallion layers** (bronze raw → silver cleaned → gold curated): the lakehouse refinement pattern

---

## 6 · Where You Plug In — the honest boundary statement

> *"I'm fluent on the consumption side: I know what makes a good warehouse model, what quality gates should exist, and how to specify what I need upstream. I've built the ingest-transform-serve pattern hands-on (SAP HANA → Python → Excel/BI), and I know enough orchestration and Spark to design and *communicate* with the team that owns production pipelines — [[PySpark]], [[SAP_HANA]], [[Power_Automate]] are my working edges of that stack."*

---

## ⚡ Rapid-Fire Q&A

> **Warehouse vs lake in one line?**
> Structured schema-on-write for governed analytics vs raw schema-on-read everything for exploration; lakehouse = both on one storage layer.

> **ETL vs ELT — why did ELT win?**
> Cloud warehouses made compute elastic and cheap — load raw first, transform with warehouse power, keep raw re-processable.

> **What makes a pipeline idempotent?**
> Rerunning the same execution window yields the same result — overwrite by partition/date-key, no append-without-key.

> **How do you detect a broken upstream feed?**
> Freshness checks, row-count/volume anomaly gates, schema validation — alerting on the *pipeline's* symptoms, not the dashboard's.

> **Batch or stream for daily reporting?**
> Batch. Streaming is for latency-sensitive decisions; daily reporting with a scheduled job is simpler, cheaper, debuggable.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Distributed processing | [[PySpark]] |
| The warehouse model | [[../02_ANALYTICS/Power_BI/Star_Schema]] |
| Orchestrating ML specifically | [[MLOps]] |

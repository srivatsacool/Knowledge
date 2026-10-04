---
title: Cloud Fundamentals — One Cloud, Deep Enough
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [cloud, level-8, roadmap]
---

# ☁️ Cloud Fundamentals

> [!important] The depth calibration
> *"Eventually learn one cloud deeply enough"* — for interviews you need the **mental model** (compute/storage/DB/IAM) plus one cloud's service names. Concepts below are cloud-agnostic; AWS names in brackets (Azure/GCP equivalents noted once).

---

## 1 · Why Cloud Changes the Defaults

```text
On-prem:  buy capacity for peak → idle at trough → slow to provision
Cloud:    rent exactly what you use → elastic scale → global reach
Trade-off: cost model shifts from capex to opex — and misconfiguration becomes the main risk
```

**The five service families (the map that transfers to any provider):**

| Family | Job | AWS [Azure · GCP] |
|---|---|---|
| **Compute** | run code | EC2 (VMs) [VMs · Compute Engine] · Lambda (serverless) [Functions · Cloud Functions] |
| **Storage** | hold files | **S3** (object store) [Blob · Cloud Storage] · EBS (block) |
| **Database** | structured data | RDS (managed SQL) [Azure SQL · Cloud SQL] · DynamoDB (NoSQL) [Cosmos DB · Firestore] |
| **Networking** | connect & expose | VPC [VNet · VPC] · CloudFront/CDN |
| **IAM** | who may do what | IAM [Entra · IAM] |

---

## 2 · The Concepts Interviewers Test

### Object storage (S3) — the data platform's floor

- Infinite, cheap, key-addressed files — *the* landing zone for datasets, model artifacts, backups
- **Data lake on S3:** raw → curated zones; Parquet partitioning (`year=/month=/`) for query pruning
- Versioning + lifecycle rules (archive/delete) — governance primitives

### Managed databases (RDS)

- You manage *nothing* (backups, patching, replicas) except schema, queries, cost
- Read replicas for scaling reads; Multi-AZ for failover — the availability vocabulary

### Serverless (Lambda)

- Function runs on event (HTTP, schedule, upload), billed per ms, scales to zero
- **Fits:** glue code, light APIs, triggers. **Doesn't fit:** long-running, GPU inference, stateful services (timeouts + cold starts)

### IAM & the security posture

- **Principle of least privilege** — every role gets exactly its needed permissions
- Users vs **roles** (assumed by services — the correct pattern: Lambda's role can read one bucket, nothing else)
- Public exposure is the classic cloud breach — S3 buckets and DBs default-private, deliberately opened

> [!important] The cost-awareness flex
> *"Cloud bills punish defaults: forgotten dev instances, chatty cross-AZ traffic, un-lifecycle'd S3. I'd set budgets + alerts on day one — cost governance is part of engineering, not finance's afterthought."*

---

## 3 · The Data/ML Stack on Cloud — your alley

| Capability | AWS | Notes |
|---|---|---|
| Warehouse | Redshift / Athena (query S3 directly) | Athena = serverless SQL on the lake |
| Pipelines | Step Functions, Glue (ETL), EventBridge | orchestration → [[Data_Engineering]] |
| Spark | EMR / Glue | [[PySpark]] managed |
| ML platform | **SageMaker** [Azure ML · Vertex AI] | notebooks, training jobs, registries, endpoints |
| Model serving | SageMaker endpoints / Lambda+container | real-time vs batch inference |
| Scheduling | EventBridge (cron) | daily retraining triggers |

**The ML deployment shape (cloud version of your stack):**

```text
S3 (data + model artifacts) → SageMaker training job → registry →
endpoint (real-time) or batch transform → CloudWatch metrics → alarms
```

---

## 4 · Availability & Reliability Vocabulary

| Term | Meaning |
|---|---|
| **Region / AZ** | geographic cluster / isolated datacenter within it — AZ redundancy survives one datacenter dying |
| Multi-AZ / Multi-region | failover depth vs cost |
| **Auto-scaling** | add instances on load metrics |
| Load balancer | distributes traffic across instances/AZs |
| SLA / SLO | promised / targeted availability ("99.9% ≈ 8.7h downtime/yr") |
| Managed vs self-hosted | who patches at 3am — usually: pay for managed |

---

## 5 · Choosing a Cloud — the answer that shows judgment

> *"The concepts are 90% shared — compute, object storage, IAM, managed DB, a managed ML platform. I'd pick by ecosystem gravity: **Azure** if the employer is Microsoft-shopped (Power BI/Azure ML — natural with my Power BI depth), **AWS** for the widest job market and deepest service catalog, **GCP** for data/ML-forward teams (BigQuery). I can transfer — the family map above is the portable part."*

---

## ⚡ Rapid-Fire Q&A

> **S3 vs a database?**
> Object storage for files (immutable, cheap, key-addressed); databases for queryable structured state. Analytics: land data in S3, query via Athena/warehouse.

> **Serverless pros/cons?**
> Zero-idle cost + auto-scale vs timeout limits, cold starts, statelessness — glue and spikes, not long GPU jobs.

> **What does IAM solve?**
> AuthN/AuthZ for every cloud action — least-privilege roles per service, audited. Misconfigured IAM ≈ most cloud breaches.

> **What's Athena?**
> Serverless SQL over S3 files (Presto-based) — query the lake without loading it anywhere.

> **How do you keep cloud costs sane?**
> Budget alerts, right-sizing, lifecycle rules, shutdown schedules for non-prod, tag-based cost attribution.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The deployment unit | [[Docker_Deployment]] |
| The ML lifecycle on cloud | [[MLOps]] |
| The pipeline it hosts | [[Data_Engineering]] |

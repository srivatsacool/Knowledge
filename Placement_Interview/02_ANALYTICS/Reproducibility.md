---
title: Reproducibility & Data Governance — The SIRP Layer
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [reproducibility, governance, level-8, roadmap]
---

# 🔁 Reproducibility & Data Governance

> [!important] Your underrated differentiator
> Your SIRP has a *real* reproducibility layer — frozen seeds, manifests, run logs, validation gates, traceability of every reported number. Most candidates can define "reproducibility"; you can point at yours. This note makes the vocabulary exact.

---

## 1 · Why Reproducibility Is an Engineering Requirement, Not Virtue

```text
Unreproducible result  =  unauditable  =  untrusted  =  undeployable
```

| Without it | The failure |
|---|---|
| Seeds unset | "the model got worse" — or did sampling change? |
| No data versioning | metrics computed on data that no longer exists |
| No environment pinning | library upgrade silently changes results |
| Manual steps | the pipeline is a person, not a system |

**The one-sentence pitch:** *"Reproducibility is the property that any reported number can be regenerated from code + data + configuration + seed, by someone else, without asking me."*

---

## 2 · The Stack — layer by layer

| Layer | Mechanism | Your SIRP instance |
|---|---|---|
| **Code** | Git, tagged release per result | versioned pipeline → [[../08_TECHNOLOGY/Git_GitHub]] |
| **Data** | frozen dataset snapshots + checksums/manifests | frozen datasets, manifest with hashes |
| **Configuration** | config files (YAML), no magic numbers in code | model configs per run (Annexure B) |
| **Randomness** | seeds for RNG *and* framework (numpy/torch/cuda) | fixed seed = every modelled number regenerable |
| **Environment** | `requirements.txt` / lockfile / container | pinned Python env |
| **Execution** | run logs, timestamps, parameter dumps | run logs per origin/model |
| **Validation** | automated gates that fail loudly | validation gates between stages |
| **Tracking** | experiment registry (params → metrics → artifacts) | stats_summary.json ↔ report reconciliation |

```python
# the seed discipline — everything that can wander, pinned
import random, numpy as np, torch
SEED = 20260715
random.seed(SEED); np.random.seed(SEED)
torch.manual_seed(SEED); torch.cuda.manual_seed_all(SEED)
# + deterministic flags for full bitwise reproducibility (at a speed cost)
```

---

## 3 · Manifests & Provenance — the paper trail

```yaml
# manifest.yaml — what produced report_table_7
dataset: m5_demand_v3          # frozen snapshot id
sha256: a3f1...c9
code: pipeline@v1.4.0          # git tag
config: configs/lstm_28d.yaml
seed: 20260715
outputs:
  - stats_summary.json         # canonical numbers the report quotes
  - forecasts/rolling_origins/ # per-origin predictions
validation_gates: [shape, nulls, chronology]   # all passed 2026-08-18T10:22
```

- **Data lineage:** every number in the report traces backward: report table → stats file → run log → code version → data snapshot
- **Audit trail:** changes append, never overwrite (immutability over convenience)
- **Provenance labeling** — your SIP's discipline: *real / provided / modelled (seed 20260715)* stated wherever magnitudes appear. This is governance applied to honesty.

---

## 4 · Data Governance — the wider frame

| Concept | Meaning |
|---|---|
| **Data quality gates** | automated checks (schema, ranges, nulls, chronology) that block bad data downstream |
| **Data lineage** | source → transformation → consumption, documented |
| **Data catalog** | searchable inventory of datasets with owners and definitions |
| **Access control** | least-privilege reads; PII separated/anonymized |
| **Retention & privacy** | what is kept, where, how long, under which policy |
| **Stewardship** | named owner per dataset — governance without owners is decoration |

**Your confidentiality layer (say it):** *"The Tata report separates real structural data from a disclosed modelled layer — no individual operators identified, no proprietary specifications, seed and calibration published for regeneration. That's governance: provenance, minimization, and honesty about what's real."*

---

## 5 · Validation Gates — catching drift before the report does

```python
def gate_validate(df, schema, source_ts):
    assert set(schema) <= set(df.columns), "schema drift"
    assert df["date"].is_monotonic_increasing, "chronology broken"
    assert df["demand"].isna().sum() == 0, "nulls in target"
    assert df["date"].max() >= source_ts, "stale source"
    # fail LOUD — a gate that warns is a gate ignored
```

Gates between pipeline stages mean the report can only be built from data that passed — traceability by construction.

---

## 6 · MLOps Connection — where this scales up

Reproducibility is the *foundation* layer of MLOps: experiment tracking, model/data versioning, CI for models. → [[../08_TECHNOLOGY/MLOps]] builds directly on this note.

---

## ⚡ Rapid-Fire Q&A

> **Reproducible vs repeatable vs replicable?**
> Repeatable: same team, same setup, same result. Replicable: different team, same code/data. Reproducible (strict): independent implementation reaches the same conclusion. Know which you're claiming.

> **Why do seeds matter if results are "just training noise"?**
> Because comparisons must be paired — two models on different random draws differ by noise, not skill. Fixed seeds make comparisons causal in the engineering sense.

> **How do you version data?**
> Immutable snapshots with content hashes + a manifest referencing them (DVC/lakeFS at scale); never edit in place.

> **What's a validation gate?**
> An automated assertion between pipeline stages that fails the run on schema/quality violations — quality control on the assembly line of data.

> **How does your SIRP prove its numbers?**
> Every statistic in the report reconciles to stats_summary.json, generated by versioned code from frozen datasets under fixed seeds, logged in run manifests — Annexure I is the receipt.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Scaled-up version | [[../08_TECHNOLOGY/MLOps]] |
| The controlled experiment it served | [[Forecasting/Forecast_to_Decision]] |
| Version control mechanics | [[../08_TECHNOLOGY/Git_GitHub]] |

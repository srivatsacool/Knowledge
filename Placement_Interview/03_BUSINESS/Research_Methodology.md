---
title: Research Methodology — PGDM Research Deep-Dive
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [research, methodology, level-2, tier-2]
---

# 🔬 Research Methodology

> [!important] Why this matters for YOU
> Your PGDM is *Research* & Business Analytics, and your SIRP is a methodological showcase — research questions, hypotheses, controlled comparison, statistical validation, sensitivity analysis, reproducibility. Examiners will test whether you *understood* your own research design or merely executed it.

---

## 1 · The Research Arc

```text
Problem → Gap → Question → Hypotheses → Framework → Design → Data → Analysis → Findings → Limitations → Future
```

| Stage | Quality test | Your SIRP instance |
|---|---|---|
| **Research problem** | real decision hanging on it | which forecasting approach to deploy for replenishment |
| **Research gap** | what literature doesn't answer | accuracy benchmarked, downstream inventory cost under-benchmarked |
| **Research question (RQ)** | specific, answerable, falsifiable | "Does higher forecast accuracy imply lower inventory cost across demand archetypes?" |
| **Hypotheses** | stated *before* results, directional where theory supports | H: accuracy gains translate to cost savings — **rejected on dense demand** |
| **Conceptual framework** | variables + expected relationships | forecast quality → policy parameters → inventory cost |
| **Design** | the fairness guarantee | same calendar, rolling origins, 28-day horizon, all models |
| **Data** | provenance + preprocessing documented | two public retail datasets, frozen, seeded |
| **Analysis** | metrics + statistics + robustness | MASE/RMSSE, DM+Holm, cost simulation, sensitivity |
| **Findings** | answers each RQ, owns surprises | LSTM accuracy ≠ cost on dense demand |
| **Limitations** | honest scope boundaries | feature scope, SARIMA sampling, horizon fixed |
| **Future scope** | designed, not executed | LLM-assisted phase, quantile losses |

---

## 2 · Problem & Gap — where research quality is decided

- **Research problem ≠ topic.** "Forecasting in retail" is a topic; *"does improved forecast accuracy translate into improved inventory outcomes under a fixed policy?"* is a problem — it has tension and a decision attached.
- **The gap must be demonstrated:** literature review → thematic synthesis → explicit statement of what no reviewed study answers. Your SIRP's twelve-paper review + thematic clusters exists precisely to earn the gap claim.
- **Frameworks make questions testable:** conceptual model (variables + arrows) → operationalization (how each variable is *measured*) → hypothesis. If a variable can't be operationalized, the framework is decoration.

---

## 3 · Hypotheses — the contract with your reader

| Type | Meaning | Example |
|---|---|---|
| **H₀ / H₁** | no effect / effect (statistical machinery) | H₀: no difference in MASE between LSTM and ARIMA |
| **Directional (one-tailed)** | theory predicts a sign | "LSTM more accurate than seasonal naive" |
| **Null-result honesty** | failing to support a hypothesis is a *finding* | accuracy–cost alignment **fails on dense demand** — the paper's contribution |

> [!tip] The maturity sentence
> *"Hypotheses are stated before analysis and tested with pre-chosen metrics and tests — otherwise every result becomes a post-hoc story. My SIRP pre-registered the model ladder, the metrics, the tests, and the inventory policy before running anything."*

---

## 4 · Research Design — the taxonomy

| Design | Logic | Example |
|---|---|---|
| **Experimental** | manipulate X, randomize, measure Y | A/B test |
| **Quasi-experimental** | manipulation without randomization | policy change in one region |
| **Controlled comparison** | vary *one thing* (the model), hold all else fixed | **your SIRP: identical data, horizon, policy, seeds** |
| **Observational** | measure without intervening | your SIP: skill–defect association (association, not causation!) |
| **Simulation** | generate scenarios under known rules | your inventory-cost layer |

> [!important] The internal-validity sentence (use it in any viva)
> *"In a controlled comparison, every factor except the one under test is held constant — that's what licenses the causal reading of the model ranking. In the observational SIP I made the opposite claim carefully: association, not causation."*
> Knowing which design you're in, and what it permits you to claim, is the heart of research literacy.

**Validity vocabulary:**
- **Internal validity** — did X actually cause Y *in this study*? (controls, leakage prevention, seeds)
- **External validity** — does it generalize? (two datasets ≠ all retail; stated explicitly)
- **Construct validity** — does the measure capture the concept? (MASE as "accuracy"; cost model as "economics")
- **Reliability** — would a rerun reproduce it? (seeds, manifests, run logs → [[../02_ANALYTICS/Reproducibility]])

---

## 5 · Sampling & Data Collection

- **Population vs sample frame:** all M5 series vs the computed sample; SARIMA-on-sample is a *sampling decision* with a documented cost
- **Sampling methods:** random, stratified (by archetype — what your classification enables), systematic, convenience (last resort, name it)
- **Sample size logic:** power analysis for tests; for forecasting benchmarks, series count × origins × horizon = the evidence base
- **Data collection integrity:** provenance (source, version, date), preprocessing pipeline documented, frozen dataset snapshot before analysis begins

---

## 6 · Robustness & Sensitivity — the trust builders

| Check | Question | Your SIRP |
|---|---|---|
| Sensitivity analysis | does the conclusion survive parameter changes? | cost ratios, service levels, review periods |
| Robustness across policies | different rules, same ranking? | policy-robustness section |
| Convergence/feasibility | do numerical methods actually converge? | Annexure H |
| Negative controls | does the method find nothing where there's nothing? | naive-baseline anchoring |

> *"A finding that survives sensitivity analysis is a finding; one that doesn't is a parameter."*

---

## 7 · Limitations & Future Scope — the closing discipline

- **Limitations ≠ confessions of failure; they are scope maps.** Each one says: *here is where the claim stops being licensed.*
- Format that scores: limitation → why it exists → what it threatens → how future work removes it
- Your SIRP's list: dataset scope (2 datasets), series sampling, fixed 28-day horizon, single policy family, no exogenous features, SARIMA sampling, statistical dependence of windows
- **Future scope must be *designed, not executed* honesty:** your LLM-assisted phase is explicitly labeled designed-not-executed — claiming it as done would be fabrication (Rule 9 of the Brain, and Rule 1 of research integrity)

---

## ⚡ Rapid-Fire Q&A

> **Difference between research question and hypothesis?**
> The question opens the inquiry; the hypothesis is the testable provisional answer that the design will confirm or reject.

> **Why a literature review at all?**
> To locate the gap, avoid rediscovering known results, borrow validated methods — and to justify exactly which comparison is novel.

> **Qualitative vs quantitative — where does your work sit?**
> Quantitative core (forecasting, statistics, simulation) *grounded* in qualitative operations insight (archetype meaning, business relevance) — mixed-methods framing.

> **What makes a study reproducible?**
> Fixed seeds, frozen data, versioned code, documented pipeline, published metrics vs logs reconciliation — every reported number regenerable from the manifest.

> **What is the biggest threat to your SIRP's validity?**
> External validity: two retail datasets don't guarantee generalization to other verticals — which is why conclusions are framed per demand archetype, not universally.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The executed research | [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]] |
| Statistical testing layer | [[../02_ANALYTICS/Statistics/Statistical_Tests]] |
| Reproducibility in depth | [[../02_ANALYTICS/Reproducibility]] |
| The observational sibling | [[../07_OPERATIONS/RCA]] |

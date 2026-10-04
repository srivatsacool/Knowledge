---
title: A/B Testing & Experimentation — The Decision Engine
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [experimentation, ab-testing, level-4, roadmap]
---

# 🧪 A/B Testing & Experimentation

> [!important] Your connection
> Your Zomato +10.4% AOV claim *should* be defended experimentally — "how would you prove it wasn't seasonality?" is the expected follow-up. This note gives the full answer: design, power, execution, pitfalls.

---

## 1 · The Logic of the Controlled Experiment

> [!tip] Why randomization is sacred
> Random assignment makes treatment and control populations **statistically equivalent in expectation** — on observed *and* unobserved confounders. That's the only cheap way to license a causal claim. → [[../02_ANALYTICS/Statistics/Statistical_Tests]]'s causation ladder.

```text
Population → randomize → [TREATMENT: new experience]  → measure metric
                       → [CONTROL:   current state  ]  → measure metric
Lift = (treatment − control) / control
```

---

## 2 · Design — before you run anything

### The hypothesis contract

```text
H₀: AOV_treatment = AOV_control
H₁: AOV_treatment > AOV_control        ← direction declared upfront
Primary metric: AOV                    ← ONE. Guardrails: conversion, retention, margin
α = 0.05, power = 0.80, MDE = 5%       ← the agreement, before data exists
```

### Sample size — the calculation everyone skips

$$n \text{ per arm} \approx 16 \cdot \frac{\sigma^2}{\Delta^2} \quad (\alpha=0.05,\ power=0.8)$$

- σ = outcome std, Δ = minimum detectable effect (MDE)
- Small lift + noisy metric + low traffic = **weeks**, sometimes "never run it"
- The honest alternatives: change the metric to a less noisy proxy, increase MDE, or don't run

> [!important] Peeking — the most common A/B sin
> *"Checking significance daily and stopping at the first p < 0.05 inflates false positives dramatically (the sequential-testing problem). Fix: pre-commit the run length, or use proper sequential methods (group-sequential / Bayesian stopping rules)."*

---

## 3 · Execution — the practical checklist

- **Randomization unit:** user (stable, consistent experience) vs session vs page — mismatched units cause contamination
- **SRM check (Sample Ratio Mismatch):** if you expected 50/50 and observe 51/49 with huge n, the experiment is *broken* — check instrumentation first, trust no result after
- **Novelty & primacy effects:** early lift decays as users adapt → run ≥ 2 weeks (full weekly cycles), watch D14+ cohorts
- **Interference/network effects:** marketplace & social products violate independence (treatment affects control via shared pool) → cluster/switchback designs
- **Multiple metrics & variants:** guardrails tested separately; multiple variants → correction (→ Holm logic again, [[../02_ANALYTICS/Statistics/Model_Comparison_DMHolm]])

```python
from statsmodels.stats.proportion import proportions_ztest
# conversion A/B
z, p = proportions_ztest([conv_t, conv_c], [n_t, n_c])
# means (AOV): two-sample t / Welch, or bootstrap the difference → CI on lift
```

---

## 4 · Reading Results Like an Analyst

| Result | Reading |
|---|---|
| Significant, big effect | ship — but verify SRM, novelty decay, guardrails |
| Significant, tiny effect | **practical significance check** — cost of shipping vs gain; "statistically real ≠ worth it" |
| Not significant | "no evidence of effect" ≠ "no effect" — report CI on the lift; underpowered ≠ proven equal |
| Significant on a subsegment only | either a real segment effect or the multiple-comparisons trap — pre-registered segments only |

**The decision memo shape (consulting reflex → [[Consulting_Case_Skills]]):** lift with CI → guardrail status → confidence → ship/iterate/kill → next experiment.

---

## 5 · Beyond the Basic A/B

| Design | When |
|---|---|
| **A/B/n** | multiple variants — correction required |
| **Split-queue / switchback** | marketplace interference (treat by region/time slice) |
| **Factorial** | two independent changes at once + interaction test |
| **Holdback / long-term holdout** | measure *sustained* effect, not launch spike |
| **Quasi-experiments** | can't randomize → diff-in-diff, interrupted time series (state assumptions!) |
| **Bayesian A/B** | posterior on lift, expected-loss stopping — reads better for executives, same rigor needs |

**Your Zomato defense, assembled:** *"Segment-targeted interventions vs matched holdout cohorts, pre-period baseline, lift with CI, weekly-cycle coverage, guardrail on margin — and a practical-significance statement. Without the holdout, '10.4%' is a correlation with my enthusiasm."* ← that last clause is the humility that lands.

---

## ⚡ Rapid-Fire Q&A

> **Why randomize instead of compare before/after?**
> Before/after confounds the change with seasonality, trends, and everything else that moved. Randomization isolates the treatment.

> **How long should an A/B test run?**
> Full weekly cycles (≥ 2 weeks), until the pre-computed sample size is met — not "until significant."

> **What is SRM and why does it kill the test?**
> Sample-Ratio Mismatch: observed split ≠ designed split beyond chance → assignment or logging is broken; all results are suspect.

> **p = 0.04 — do you ship?**
> Check guardrails and SRM, size the effect vs cost, look for novelty decay — the p-value is one input to the ship decision, never the decision.

> **Can't run an experiment — what then?**
> Quasi-experimental designs with stated assumptions (diff-in-diff, interrupted time series), matched cohorts — weaker, but honest if assumptions are explicit.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The tests underneath | [[../02_ANALYTICS/Statistics/Statistical_Tests]] |
| Multiple-comparison corrections | [[../02_ANALYTICS/Statistics/Model_Comparison_DMHolm]] |
| Product-side application | [[Product_Analytics]] |

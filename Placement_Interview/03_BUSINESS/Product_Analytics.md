---
title: Product Analytics — Funnels, Cohorts, A/B, PMF
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [product, analytics, level-2, tier-2]
---

# 🧩 Product Analytics

> [!important] Why this matters for YOU
> BTracker is a *product* you shipped to real users — expect product questions: "how did you know it worked? how did you measure engagement? what would you build next?" This note gives you the product-analytics vocabulary to answer as a builder, not a bystander.

---

## 1 · The User Journey — AARRR as a diagnostic

```text
Acquisition → Activation → Retention → Referral → Revenue
     │             │            │            │          │
  installs     first value   D7/D30      invites    conversion
  signups      reached       return %    sent       to paid
```

- **Activation** = the "aha" moment (e.g., first successful agent task in BTracker) — *define it explicitly*; teams that can't name their activation metric can't move retention
- **Retention** = the gravity of the funnel; curves that flatten = product-market fit signal; curves that decay to zero = leaky bucket
- Work the funnel left-to-right *by biggest leak* (Pareto) — not by whatever feature is fun to build

---

## 2 · Cohort Analysis — the honest retention lens

```text
             Day 1   Day 7   Day 30
Jan cohort    55%     34%      22%
Feb cohort    60%     41%      28%   ← is the product improving, or...
Mar cohort    58%     39%      27%   ← ...did marketing mix change?
```

- **Aggregate totals hide trends**; cohorts (users grouped by start period) separate product improvement from audience change
- **Triangle view:** later cohorts flattening *higher* = retention improving → leading indicator of PMF
- Segment cohorts by channel and persona — blended cohorts blend problems

---

## 3 · Engagement & the Metrics That Matter

| Metric | Definition | Watch out for |
|---|---|---|
| **DAU/MAU (stickiness)** | DAU ÷ MAU | vanity if acquisition-inflated |
| Session depth/duration | actions per session | duration ≠ value |
| **Feature adoption** | % of actives using feature X | adoption ≠ retention impact |
| Funnel conversion | step-to-step % | needs volume to be significant |
| **Cohort retention curve** | return % by cohort | the single most honest chart |
| Churn | users lost ÷ starting users | define "lost" precisely |

> [!tip] The North Star framing
> *"One metric that captures delivered value and predicts revenue — e.g., weekly successful tasks per active user for an agent product. Supporting metrics feed it; vanity metrics (downloads, signups) don't."*

---

## 4 · A/B Testing — the decision engine (deep-dive → [[AB_Testing]])

```text
hypothesis → randomize → run to power → compare → decide (significance AND practicality)
```

- Sample size BEFORE the test (MDE, α, power) — "we ran it for a week and it looked better" is not a test
- **One metric, guardrails** (e.g., improve conversion; don't degrade retention/latency)
- Novelty effects: watch D14+ cohorts, not day-1 excitement

---

## 5 · Feature Adoption & Prioritization

**RICE scoring:**

$$\text{RICE} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence}}{\text{Effort}}$$

- Reach: users/quarter touched · Impact: per-user effect (0.25–3 scale) · Confidence: 50/80/100% · Effort: person-weeks
- Forces the argument onto shared axes — the MECE habit applied to a backlog

**Adoption diagnostics:** funnel within the feature (discovered → tried → retained) — a feature with high discovery, low trial = positioning problem; high trial, low retention = value problem.

---

## 6 · Product-Market Fit — signals over slogans

| Signal | Reads as |
|---|---|
| Retention curves flattening at a sustainable level | the product has gravity |
| Sean Ellis test: >40% "very disappointed if it disappeared" | demand is real |
| Organic/referral share growing | users pull it for you |
| Usage frequency matches the problem's natural cadence | fit with a real habit |

> **For BTracker, be ready to say:** *"PMF evidence for a personal tool: my own sustained usage plus external users adopting the MCP tool-calls workflow. The honest next step is instrumenting activation and cohort retention properly — which is exactly why I built usage quotas and structured logging into it."* Honest scope + the right vocabulary = credibility.

---

## 7 · Your Product Stories — pre-framed

| Question | BTracker answer shape |
|---|---|
| "What did you build?" | LLM agent platform: chat + persistent context + MCP tool integration + quotas/workflows (open-sourced) |
| "How do you know it works?" | task-completion success rate, tool-call failure rate, latency, quota adherence — production instrumentation, not vibes |
| "What would you build next?" | activation instrumentation, cohort retention, agent evaluation harness (success = task completed correctly) |
| "Biggest product risk?" | LLM reliability/hallucination → guardrails: structured outputs, tool validation, human-in-the-loop for destructive actions |

---

## ⚡ Rapid-Fire Q&A

> **Activation vs retention?**
> Activation: reaching first value (one-time threshold). Retention: returning for value repeatedly. Activation predicts retention — tune the first-run experience against the retention curve.

> **How do you know a feature 'worked'?**
> Pre-registered hypothesis + A/B (or cohort comparison if you can't randomize), primary metric + guardrails, effect size with CI, and D14+ follow-up for novelty decay.

> **DAU is up 20% — is that good?**
> Depends: acquisition-driven (fine but fragile) or activation/retention-driven (structural)? Check stickiness (DAU/MAU) and cohort curves before celebrating.

> **Cohort vs segment?**
> Cohort groups by *time of entry* (behavior over lifecycle); segment groups by *attributes/behavior* (who they are). Read retention by both.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The experimentation engine | [[AB_Testing]] |
| GTM-side metrics (CAC/LTV) | [[GTM_Analytics]] |
| Your production product | [[../08_TECHNOLOGY/Production_Concepts]] · [[../01_AI/MCP/MCP_Architecture]] |

---
title: Root Cause Analysis — RCA Deep-Dive
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [operations, rca, level-5, tier-2]
---

# 🔎 Root Cause Analysis

> [!important] Your Tata defense topic
> The examiner's sharpest possible question: *"How did you determine whether workforce skill level was actually related to defects?"* This note turns that from an attack into your best answer — RCA methods + the statistical discipline that separates root cause from coincidence.

---

## 1 · What RCA Actually Is

> [!tip] Definition
> A structured process for finding the **underlying cause** of a problem — the one that, if removed, prevents recurrence — as opposed to treating symptoms.

```text
Symptom → Incident → Direct cause → Contributing causes → ROOT cause → Corrective action
```

**The symptom trap:** a station has high defects → "retrain the operator" → defects return in 3 months. Why? The root cause was *staffing misalignment* (complex stations weren't staffed with skilled operators) — training the wrong person, or without fixing assignment policy, treats the symptom.

---

## 2 · The Toolkit — method by method

### 5 Whys — the drill-down

```text
Bearing shell defect at LB15.
WHY? Shell seated misaligned.              ← direct cause
WHY? Operator missed the visual check.     ← human error
WHY? Operator new to station (skill 1.95). ← contributing: assignment
WHY? Station filled by vacancy, not skill. ← ← ROOT: no skill-based assignment policy
WHY? No skill-matrix-based deployment system.
→ Countermeasure: skill-complexity-aware assignment (the SIP recommendation #1)
```

**Rule:** stop when the answer becomes actionable and recurrence-preventable — not at "human error" (never a root cause; it's where a *system* failed).

### Fishbone / Ishikawa — the breadth sweep

```text
        Man            Machine          Method
          ╲                │               ╱
           ╲─────────[ PROBLEM ]────────╱
           ╱                │              ╲
     Measurement        Material        Environment
```

- Six categories force breadth before depth — an anti-tunnel-vision device
- Brainstorm candidates per bone, then *evidence-rank* them (this is where your data enters)

### Pareto Analysis — the prioritizer

- Ranked bars + cumulative % → the vital few (your SIP: top-30 stations = 44.4% of defects)
- **RCA application:** you cannot root-cause 96 stations — Pareto selects *where to dig*

### Control Charts — signal vs noise

- Points beyond limits / runs / trends = **special-cause** signals (investigate); common-cause variation = adjust the system, not the operator
- The statistical version of "is this real or normal fluctuation?" — Tampering on noise *increases* variation (Deming's funnel — good name-drop)

---

## 3 · The Statistical Discipline — cause vs coincidence

> [!important] The hierarchy of causal evidence (memorize the ladder)
> 1. **Association** — X and Y move together (correlation, regression)
> 2. **Non-spuriousness** — survives controls for confounders (your complexity control!)
> 3. **Temporality & mechanism** — X precedes Y; a plausible causal path exists
> 4. **Experiment** — intervene on X, watch Y respond (the gold standard)

### Your Tata answer, assembled from the ladder

> *"Station skill and defects were associated (r = −0.41, operator level −0.31, both p < 0.001). More importantly, the skill coefficient **survived controlling for station complexity** — so it isn't just 'hard stations have both low skill and high defects.' The mechanism is documented in the process map: judgement-intensive tasks at low-skill stations. And the recommendation is designed as the experimental test: reallocate, then re-run the analysis on the treated stations and compare defect response. Association with a mechanism and a planned intervention — that's how far observational data honestly takes you."*

| Concept | One-liner |
|---|---|
| **Confounder** | a third variable driving both X and Y (complexity!) |
| **Mediator** | X → M → Y on the causal path |
| **Selection bias** | the sample's composition manufactures the effect |
| **Simpson's paradox** | aggregation reverses the sign — check subgroups (your SB/LB split) |
| **Spurious correlation** | shared trend, no mechanism — the reason "correlation ≠ causation" |

---

## 4 · Corrective Action — closing the loop

```text
Find root cause → Countermeasure (fix the SYSTEM) → Assign owner + date →
Verify effectiveness (measure again) → Standardize (SOP/poka-yoke) → Horizontal yoko-narabi
```

| Corrective type | Example | Permanence |
|---|---|---|
| Symptom patch | re-inspect the station | weak — recurrence expected |
| Human fix | train that operator | medium — helps one person |
| **System fix** | skill-based assignment policy | **strong — prevents the class of failure** |
| Poka-yoke | fixture that makes mis-seating impossible | strongest — error becomes impossible |

**Yoko-wake / horizontal deployment (lean vocabulary):** propagate the verified fix to similar stations/processes — the multiplier that makes RCA worth its cost.

---

## 5 · Your RCA Narrative — 60-second version

> *"At Tata, defects concentrated at a Pareto tail of stations. Two distinct risk profiles emerged: high-complexity/moderate-skill stations (complexity-failure — fix with poka-yoke/process hardening) and low-complexity/low-skill stations (skill-failure — fix with training and reallocation). The skill–defect link survived complexity controls, and the root cause of the misalignment was assignment by vacancy rather than by skill matrix. The countermeasures were prioritized accordingly — system fixes first — with a re-measurement plan built in."*

That paragraph demonstrates: Pareto, stratification, confounder control, root-cause vs symptom discipline, and countermeasure hierarchy — the entire note in spoken form.

---

## ⚡ Rapid-Fire Q&A

> **5 Whys vs Fishbone — when each?**
> 5 Whys: depth on a known failure path. Fishbone: breadth when causes are unknown. Real RCA: fishbone to generate candidates, data to rank, 5 Whys to drill the top one.

> **Why is "operator error" never a root cause?**
> It's where a system failed — training, design, or poka-yoke should have made the error impossible or caught. Stopping there guarantees recurrence with a different operator.

> **How do you verify a corrective action worked?**
> Measure the same metric over a comparable window post-intervention (control chart, before/after with seasonality awareness) — and define the success criterion *before* intervening.

> **Correlation between two variables — what would make you claim causation?**
> Strength + significance, survival under controls for plausible confounders, a documented mechanism, temporality — and ideally a planned intervention. Observationally, all but the last.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The process map behind it | [[Process_Mapping]] |
| The full Tata methodology | [[TATA_MOTORS/Methodology]] |
| Statistics under the RCA | [[../02_ANALYTICS/Statistics/Statistical_Tests]] · [[../02_ANALYTICS/Statistics/Causality]] |

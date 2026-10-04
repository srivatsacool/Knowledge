---
title: Causality — Why Correlation Is Not Causation and How to Address Confounders
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
tags: [statistics, causality, confounding, correlation, tata-motors]
---

# Causality — Why Correlation Is Not Causation

> **Definition:** Causality means X *produces* Y. Correlation means X and Y *move together*. They overlap often but not always. Establishing causation requires ruling out alternative explanations (confounders), not just measuring association.

---

## INTUITION

r = -0.41 means skill and defects co-move. But three scenarios could produce this:

```
Scenario A: Skill → Defects (causal)
  More skill causes fewer defects. Training helps.

Scenario B: Complexity → Skill + Defects (confounding)
  Easy stations get assigned low-skill workers AND have fewer defects.
  Skill doesn't cause low defects — station difficulty causes both.

Scenario C: Defects → Skill (reverse causation)
  Stations with high defects get better workers assigned.
  The correlation exists, but defects drove the skill assignment.
```

> **Key insight:** The correlation itself cannot distinguish between these scenarios. You need domain knowledge, study design, or causal inference methods to determine which story is true.

---

## FUNDAMENTALS

### The Causal Hierarchy

```
Level 1: Association     "X and Y are related"          (correlation)
Level 2: Intervention    "If I change X, Y changes"      (experiment)
Level 3: Counterfactual  "If X had been different,       (causal inference)
                          Y would have been different"
```

Correlation lives at Level 1. Causation requires Level 2 or 3.

### Confounders

A **confounder** is a variable that:
1. Is associated with the exposure (X)
2. Is associated with the outcome (Y)
3. Is NOT on the causal pathway between X and Y

```
        Confounder (C)
       ↙            ↘
      X              Y
   (skill)      (defects)

If C = station complexity:
  - Complex stations get higher-skill workers (C → X)
  - Complex stations have more defects (C → Y)
  - The r = -0.41 between X and Y is partly (or wholly) due to C
```

### The SIRP Confounders

[RESUME-SOURCED]

| Confounder | Correlation with Defects | Correlation with Skill | Implication |
|---|---|---|---|
| Station complexity | r = +0.38 | r = +0.18 | Complexity drives both defect rate AND skill assignment |
| Equipment age | Unknown | Unknown | Older machines may need more skilled operators |
| Operator experience | Unknown | Likely positive | Experience ≠ skill rating |
| Material batch | Unknown | Unknown | Batch variation affects defects independently |

### Addressing Confounders

| Method | What it does | Feasibility in SIRP |
|---|---|---|
| **Randomized experiment** | Randomly assign skill to stations | ❌ Not possible (ethical/operational) |
| **Multiple regression** | Control for confounders statistically | ✅ Possible — include complexity as covariate |
| **Stratification** | Analyze within subgroups (e.g., only Short Block stations) | ✅ Possible |
| **Instrumental variables** | Find a variable that affects skill but not defects directly | ❌ Hard to find |
| **Propensity score matching** | Match similar stations with different skill levels | ✅ Possible with larger sample |
| **Natural experiment** | Exploit a random or quasi-random event | ❌ No obvious event |

---

## WORKED EXAMPLE — SIRP Causal Analysis

[RESUME-SOURCED + INFERENCE]

### What the correlation actually shows

```
r = -0.41 (skill vs defects)
r = +0.38 (complexity vs defects)
r = +0.18 (complexity vs skill)

Interpretation:
  1. Skill and defects are negatively correlated (confirmed)
  2. Complexity and defects are positively correlated (confirmed)
  3. Complexity and skill are positively correlated (confirmed — complex stations get higher-skill workers)

This suggests PARTIAL confounding:
  Some of the r = -0.41 is due to complexity, not skill itself.
  But even after accounting for complexity, skill likely has an independent effect.
```

### What multiple regression would show

```
If we ran: Defects = β₀ + β₁×Skill + β₂×Complexity

Expected:
  β₁ (skill) would be SMALLER than -123 (because complexity absorbs some variance)
  β₂ (complexity) would be POSITIVE and significant
  R² would increase (more variance explained)
  But β₁ would likely remain significant (skill has independent effect)

> VERIFY: Check the SIRP paper for whether multiple regression was run.
```

### The honest interpretation

**What we CAN say:**
- Skill and defects are associated (r = -0.41, p < 0.001)
- The relationship is moderate and statistically significant
- Station complexity is a likely confounder
- Even controlling for complexity, skill likely has an independent effect

**What we CANNOT say (from correlation alone):**
- "Increasing skill *causes* defects to decrease"
- "Training will reduce defects by 440 per 1,000"
- "Skill is the most important factor"

**What we CAN say with regression + domain knowledge:**
- "Skill is one of several factors affecting defect rates"
- "Targeted training at low-skill stations is a reasonable intervention"
- "The predicted reduction (~440/1K) is a model estimate, not a guarantee"

---

## WHERE IT APPLIES

| Domain | Causal question |
|---|---|
| Medicine | Does the drug cause recovery? (randomized trial) |
| Policy | Does minimum wage increase cause unemployment? (natural experiment) |
| Marketing | Does the ad cause purchases? (A/B test) |
| Manufacturing | Does skill training reduce defects? (quasi-experiment) |
| Tech | Does the new feature cause engagement? (A/B test) |

---

## RELATIONSHIPS TO BRAIN TOPICS

- [[02_ANALYTICS/Statistics/Correlation.md]] — Correlation measures association; causality requires more
- [[02_ANALYTICS/Statistics/Regression.md]] — Regression can control for confounders but doesn't prove causation
- [[07_OPERATIONS/TATA_MOTORS/Methodology.md]] — The SIRP's causal claims must be carefully qualified
- [[Theory_of_Constraints]] — TOC's bottleneck identification uses correlation-like analysis to find the constraint

---

## COMMON PITFALLS

1. **"Correlation proves causation"** — It never does. Even r = 0.99 could be confounded.

2. **"If I control for confounders, I've proven causation"** — You've reduced confounding, but unmeasured confounders may still exist. "Adjusting for observed confounders" ≠ "proving causation."

3. **"The p-value proves causation"** — p < 0.001 means the association is real, not that it's causal.

4. **Ignoring reverse causation** — Maybe defects cause skill assignment (high-defect stations get better workers), not the other way around.

5. **Ecological fallacy** — Station-level correlation doesn't necessarily apply to individual operators.

---

## SOURCES

- Pearl, J. (2009). *Causality: Models, Reasoning, and Inference* (2nd ed.). Cambridge University Press.
- Greenland, S., Robins, J.M., & Pearl, J. (1999). "Confounding and Collapsibility in Causal Inference." *Statistical Science*, 14(1), 29-41.
- [RESUME-SOURCED] SIRP research paper — discussion of confounders and limitations

---

## INTERVIEW DEFENSE SCRIPTS

### 30-second version
> "Correlation doesn't prove causation — I'm very clear about that. The r = -0.41 shows skill and defects are associated, but station complexity is a confounder. I addressed this by checking the correlations with complexity (r = +0.38 with defects, r = +0.18 with skill) and noting that even after accounting for complexity, skill likely has an independent effect."

### Cross-examination
| Question | Answer |
|---|---|
| "Does -0.41 prove skill causes fewer defects?" | "No. It proves they're associated. Confounders like station complexity could explain part of it. The correlation is a signal that warrants investigation, not proof of causation." |
| "What would you need to prove causation?" | "A randomized experiment — randomly assign skill levels to stations and measure defect rates. That's not feasible in a live production line. The next best option is a quasi-experiment or natural experiment." |
| "What about reverse causation?" | "Good point — high-defect stations might get better workers assigned. The cross-sectional design can't rule this out. A longitudinal study tracking skill assignments over time would help." |
| "So what's the actionable takeaway?" | "Even as an association, the relationship is meaningful. Targeted training at low-skill stations is a low-cost intervention. The regression provides a *predicted* improvement, not a guaranteed one. The prediction should be validated with a pilot." |

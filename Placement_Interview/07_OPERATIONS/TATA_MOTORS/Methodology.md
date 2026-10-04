---
title: Tata Motors SIRP — Full Methodology Defense
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
tags: [tata-motors, sirp, methodology, manufacturing, correlation, regression, seeded-simulation]
---

# Tata Motors SIRP — Full Methodology Defense

> **Purpose:** Complete defense document for the SIRP research paper. Every claim, number, method, and vulnerability in one place. This is the file you study before walking into the interview.
> **Source:** [RESUME-SOURCED] SIRP research paper + SIP extract + resume

---

## 1 — Project Overview

| Field | Detail |
|---|---|
| **Title** | Skill-Defect Correlation Analysis in Engine Assembly |
| **Company** | Tata Motors, Pune facility |
| **Duration** | May–July 2026 (3 months) |
| **Line** | 5L Diesel Engine Assembly |
| **Scope** | 96 stations (31 Short Block + 65 Long Block), 258 operator-station observations, 3+ years of data |
| **Core finding** | r = -0.41 (skill vs defects), ~440 defects/1K reduction predicted |

---

## 2 — Data Sources

[RESUME-SOURCED]

| Data | Source | Grain | Period |
|---|---|---|---|
| Station master | Company database | One row per station | Census (all 96) |
| Defect records | Historical defect database | One row per defect event | 3+ years |
| Workforce skill | Company skill matrix | One row per operator-station | Current snapshot |
| Complexity ratings | Engineering assessment | One row per station | Current snapshot |

### Data volume

| Metric | Value | Source |
|---|---|---|
| Total records | ~1 million | [RESUME-SOURCED] resume + SIP |
| Unique stations | 96 | [RESUME-SOURCED] SIRP |
| Observations (skill-defect pairs) | 258 | [RESUME-SOURCED] SIRP |
| Operators per station | 2–6 | [INFERENCE] 258 obs / 96 stations ≈ 2.7 avg |

> **VERIFY:** Record grain (row = defect event vs row = station-operation vs row = engine) — needs confirmation from source.

---

## 3 — Analytical Pipeline

```text
Raw Data (1M records)
    ↓
Data Cleaning (missing values, duplicates, outliers)
    ↓
Aggregation (defect rate per station: defects / 1,000 engines)
    ↓
Merge (station-level defect rate + operator skill level)
    ↓
EDA (scatterplot, distributions, outlier detection)
    ↓
Correlation (Pearson r, Spearman rho)
    ↓
Regression (OLS: defect rate = β₀ + β₁ × skill)
    ↓
Robustness (Winsorising, Spearman, subset analysis)
    ↓
Prediction (skill gap → defect reduction)
    ↓
Visualization (Power BI dashboards)
```

---

## 4 — Core Results

### 4.1 Correlation

[RESUME-SOURCED]

| Metric | Value | Interpretation |
|---|---|---|
| Pearson r | -0.41 | Moderate negative — higher skill, lower defects |
| p-value | < 0.001 | Highly statistically significant |
| R² | ≈ 17% | Skill explains 17% of defect variance |
| n | 258 | Station-operator observations |

### 4.2 Regression

[RESUME-SOURCED]

| Metric | Value | Interpretation |
|---|---|---|
| Slope (β₁) | ≈ -123 | Each skill unit → 123 fewer defects/1K |
| Intercept (β₀) | ≈ 1,169 | Predicted defects at skill level 0 |
| R² | ≈ 17% | Same as correlation (simple regression) |

### 4.3 Prediction

[RESUME-SOURCED]

| Metric | Value | Source |
|---|---|---|
| Predicted reduction | ~440 defects per 1,000 | SIRP paper |
| 95% CI | 276–598 | SIRP paper |
| Interpretation | Skill gap closure → substantial defect reduction | — |

### 4.4 Robustness

[RESUME-SOURCED]

| Check | Result | What it confirms |
|---|---|---|
| Spearman rho | Similar magnitude | Relationship is monotonic, not just linear |
| Winsorised r | -0.39 | Not driven by outliers |
| Station complexity | r = +0.38 with defects, +0.18 with skill | Confounder identified |

---

## 5 — Confounders and Limitations

[RESUME-SOURCED + INFERENCE]

| Confounder | Evidence | Impact on r = -0.41 |
|---|---|---|
| Station complexity | r = +0.38 with defects | Partially confounds — complex stations get skilled workers AND have more defects |
| Equipment age | Unknown correlation | Possible confounder — older machines may need skilled operators |
| Operator experience | Unknown | Skill rating ≠ experience; may differ |
| Material batch | Unknown | Batch variation affects defects independently |

### Limitations (must disclose in interview)

1. **Cross-sectional design** — Can't establish temporal sequence (did skill precede low defects, or vice versa?)
2. **No randomization** — Observational study, not experiment
3. **Skill data is a rating** — Subjective 1-5 scale, not objective measurement
4. **Single facility** — Results may not generalize to other plants
5. **Seeded Simulation** — Per-station skill and defect rates were modeled, not all observed (see [[07_OPERATIONS/TATA_MOTORS/Seeded_Simulation.md]])

---

## 6 — Business Impact

[RESUME-SOURCED]

```
Priority stations identified: 20 (lowest skill, highest defect rate)

Intervention: Targeted workforce optimization
  - Reallocate skilled operators to highest-need stations
  - Or train operators at low-skill stations

Predicted impact: ~440 fewer defects per 1,000 engines
  - At 20 priority stations
  - Through skill-to-complexity reallocation
  - Lowest-cost lever: training reallocation, not equipment investment
```

### Connection to Theory of Constraints

The 20 priority stations are the *constraint* — the bottleneck in quality. Per [[Theory_of_Constraints]], the five focusing steps apply:

1. **Identify:** 20 stations with lowest skill + highest defects
2. **Exploit:** Reallocate existing skilled operators (zero cost)
3. **Subordinate:** Pace training to these stations first
4. **Evaluate:** If reallocation insufficient, invest in training programs
5. **Repeat:** Monitor if constraint shifts after improvement

---

## 7 — Interview Question Tree

### Layer 1 — Basic ("Tell me about your research")
> "I analyzed 3 years of manufacturing data from Tata Motors' 5L diesel engine assembly line — 96 stations, 258 operator observations. I found a moderate negative correlation between operator skill level and defect rate, and built a regression model to predict how targeted training could reduce defects."

### Layer 2 — Intermediate ("How did you get r = -0.41?")
> "I paired each station's average defect rate with the skill level of operators assigned to it. Using Pearson correlation on 258 observations, I got r = -0.41. The p-value was less than 0.001, and R² was about 17%."

### Layer 3 — Challenge ("Does this prove skill causes fewer defects?")
> "No, and I'm very careful about that claim. It's an observational study — not a randomized experiment. Station complexity is a confounder: complex stations get assigned higher-skill workers AND have more defects. The correlation is a *signal* that skill matters, but it's not proof of causation. I'd need a quasi-experiment or longitudinal study to establish that."

### Layer 4 — Deep ("Walk me through the seeded simulation")
> "Some per-station skill and defect data wasn't directly observed — the station master had full station data, but skill ratings were modeled for stations where direct observation wasn't available. I used a seeded simulation approach: calibrated the model to known benchmarks, used a fixed seed for reproducibility, and clearly documented which inputs were real vs modeled. The correlation of -0.41 holds across both observed and modeled stations."

### Layer 5 — Adversarial ("What if station difficulty, not skill, drives defects?")
> "That's exactly the right question. I measured station complexity and found r = +0.38 with defects and r = +0.18 with skill. This suggests partial confounding — complexity drives both defect rates and skill assignment. A multiple regression controlling for complexity would give a cleaner skill coefficient. The single-predictor model is a conservative starting point, and even accounting for complexity, skill likely has an independent effect."

---

## 8 — What I Can Now Explain

After reading this file and its linked dependencies, you can answer:

- [x] "What data did you have?" → Station master, defect records, skill matrix
- [x] "What is r = -0.41?" → Moderate negative correlation, p < 0.001
- [x] "What is R²?" → 17% of variance explained
- [x] "What is the regression equation?" → Defects = 1,169 - 123 × skill
- [x] "What does ~440/1K mean?" → Predicted defect reduction from skill gap closure
- [x] "What's the CI?" → 276-598, reflects uncertainty in prediction
- [x] "Does this prove causation?" → No, confounders exist
- [x] "What about station complexity?" → r = +0.38 with defects, partial confounding
- [x] "What's seeded simulation?" → Modeled data for unobserved stations
- [x] "What would you do next?" → Multiple regression, quasi-experiment, pilot validation

---

## SOURCES

- [RESUME-SOURCED] SIRP research paper (full 30-page document: `04_Career/Tata Motors Internship/SIRP_30pg_Research_Paper.pdf`)
- [RESUME-SOURCED] SIP extract
- [[02_ANALYTICS/Statistics/Correlation.md]] — Statistical foundation
- [[02_ANALYTICS/Statistics/Regression.md]] — Regression mechanics
- [[02_ANALYTICS/Statistics/Hypothesis_Testing.md]] — Significance testing
- [[02_ANALYTICS/Statistics/Causality.md]] — Confounders and limitations
- [[Theory_of_Constraints]] — Business framework for intervention

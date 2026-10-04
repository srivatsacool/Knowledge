---
title: Statistics Cheat Sheet
type: cheat-sheet
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [statistics, cheat-sheet]
---

# 📐 Statistics Cheat

## p-value — the two sentences

1. NOT the probability H₀ is true — it's P(data this extreme | H₀ true)
2. p > 0.05 = insufficient evidence, NOT proof of no effect

**Type I (α):** false alarm · **Type II (β):** miss · **Power = 1−β** (↑ with n, effect size)

## Test chooser

| Situation | Test |
|---|---|
| Paired (same units, 2 conditions) | **paired t** / Wilcoxon (non-normal) |
| Independent 2 groups | Welch t (default-safe) / Mann-Whitney |
| 3+ groups | ANOVA → post-hoc Tukey / Kruskal-Wallis |
| 2 categoricals | chi-square (expected ≥ 5, else Fisher) |
| Association strength | Pearson r / Spearman ρ |

**My SIRP:** same series under two models → **paired**, errors skewed → Wilcoxon-type logic; 91 pairs → Holm.

## Effect size — because n makes everything significant

Cohen's d: 0.2/0.5/0.8 · r: 0.1/0.3/0.5 · always report CI alongside p.

## Multiple comparisons

91 tests @ 0.05 ≈ 4–5 false "wins". **Holm step-down:** sort p ascending, compare p₍ᵢ₎ ≤ α/(m−i+1), stop at first failure. More power than Bonferroni (α/m flat), same FWER control.

## Diebold-Mariano

DM on pointwise loss differentials d_t, HAC variance handles overlapping-window autocorrelation. H₀: no difference. DM test = accuracy only — inventory cost is a separate referee.

## Distributions — the map

Normal (68/95/99.7) · Binomial (n trials, pass/fail) · **Poisson (counts/interval — defects, demand occasions; breaks when variance > mean)** · Exponential (time between) · CLT: means are ~normal at n≥30 → CIs valid even on skewed data.

## Key formulas

$SE = s/\sqrt{n}$ · $CI = \bar{x} \pm t^* SE$ · $CV = \sigma/\mu$ (→ CV² in SIRP) · $P(A|B) = P(B|A)P(A)/P(B)$ (base rates rule — 99%-accurate test, 0.5% prevalence → ~33% PPV)

## Association ≠ causation — the ladder

Association → survives controls (confounders!) → mechanism + temporality → experiment. *"My SIP: skill–defect association survived complexity controls; the reallocation recommendation is the designed experimental test."*

## Say-cold

- **Welch vs Student:** no equal-variance assumption, negligible cost
- **Why ANOVA not 3 t-tests:** 3 × 0.05 → ~14% familywise error
- **Bootstrap:** resample → percentile CI, no normality needed
- **Practical significance:** real ≠ matters — LSTM's MASE edge didn't reach cost drivers

→ Deep-dive: [[../02_ANALYTICS/Statistics/Statistical_Tests]] · [[../02_ANALYTICS/Statistics/Model_Comparison_DMHolm]] · [[../02_ANALYTICS/Statistics/Distribution_Probability]]

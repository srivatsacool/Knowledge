---
title: Hypothesis Testing — p-value, Confidence Intervals, and Statistical Significance
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
tags: [statistics, hypothesis-testing, p-value, confidence-interval, significance]
---

# Hypothesis Testing — p-value, Confidence Intervals, and Statistical Significance

> **Definition:** Hypothesis testing is a framework for deciding whether an observed pattern in data is likely real or could have occurred by random chance. The p-value measures how surprising the data is if the null hypothesis were true.

---

## INTUITION

You see r = -0.41. But what if there's *actually no relationship* and you just got lucky with your sample? Hypothesis testing answers: "How surprised should I be if this were pure coincidence?"

```
Null hypothesis (H₀): There is NO relationship (r = 0 in the population)
Alternative (H₁): There IS a relationship (r ≠ 0)

If p < 0.05: The data is surprising under H₀ → reject H₀ → "significant"
If p > 0.05: The data is not surprising under H₀ → fail to reject → "not significant"
```

> **Key insight:** p-value is NOT the probability that H₀ is true. It's the probability of seeing data *this extreme* IF H₀ were true. Subtle but critical difference.

---

## FUNDAMENTALS

### The p-value

```
p-value = P(observing data at least as extreme as what you got | H₀ is true)

For r = -0.41, n = 258:
  p < 0.001

Meaning: If there were truly no correlation (ρ = 0), the probability of
seeing |r| ≥ 0.41 in a sample of 258 is less than 0.1%.
```

### Confidence Intervals

A 95% CI means: if you repeated the study 100 times, approximately 95 of the intervals would contain the true population parameter.

```
95% CI for r: [-0.51, -0.30]

This means:
  - We're 95% confident the true correlation is between -0.51 and -0.30
  - The entire interval is negative and away from zero
  - This is consistent with p < 0.001
```

### Significance Levels

| α level | Meaning | When to use |
|---|---|---|
| 0.05 (5%) | Standard | Most social science, business |
| 0.01 (1%) | Strict | Medical, pharmaceutical |
| 0.001 (0.1%) | Very strict | Physics, genomics, high-stakes |
| 0.10 (10%) | Lenient | Exploratory research |

**For the SIRP:** p < 0.001 exceeds even the strictest threshold. The result is highly significant.

### Types of Errors

| | H₀ is true | H₀ is false |
|---|---|---|
| **Reject H₀** | Type I error (false positive) | Correct! |
| **Fail to reject H₀** | Correct! | Type II error (false negative) |

- **Type I (α):** You conclude there's a relationship when there isn't. Controlled by significance level.
- **Type II (β):** You miss a real relationship. Controlled by sample size and effect size.
- **Power = 1 - β:** Probability of detecting a real effect when it exists.

---

## HOW IT WORKS — MECHANICS

### t-test for Correlation

```
H₀: ρ = 0
H₁: ρ ≠ 0

Test statistic:
  t = r × √(n - 2) / √(1 - r²)
  t = -0.41 × √256 / √(1 - 0.1681)
  t = -0.41 × 16 / 0.9121
  t ≈ -7.19

df = n - 2 = 256

Critical value (α = 0.001, two-tailed):
  t_crit ≈ ±3.34

Since |t| = 7.19 > 3.34: reject H₀ → p < 0.001
```

### t-test for Regression Coefficient

```
H₀: β₁ = 0 (skill has no effect on defects)
H₁: β₁ ≠ 0 (skill has some effect)

t = β₁ / SE(β₁) = -123 / 17.1 ≈ -7.19

Same result as the correlation t-test (they're mathematically equivalent in simple regression).
```

### p-value vs Confidence Interval — They Agree

```
If p < 0.05 → 95% CI does NOT contain 0
If p > 0.05 → 95% CI DOES contain 0

For r = -0.41:
  p < 0.001 → 95% CI = [-0.51, -0.30] → does not contain 0 ✓
  Consistent: both say "significant"
```

### Multiple Comparisons Problem

If you test 20 correlations at α = 0.05:
- Expected false positives: 20 × 0.05 = 1
- Bonferroni correction: α_adj = 0.05 / 20 = 0.0025

**For SIRP:** The primary correlation (skill vs defects) is a single planned test. No correction needed. But if you tested skill against 10 different defect types, you'd need correction.

---

## WORKED EXAMPLE — SIRP Significance Analysis

[RESUME-SOURCED]

```
Primary result:
  r = -0.41, n = 258, p < 0.001

Robustness checks:
  Spearman rho: similar magnitude (direction confirmed)
  Winsorised r: -0.39 (outlier-robust)

CI for r: [-0.51, -0.30]

All three tests agree: the relationship is real and robust.
```

### What significance means in context

| Test | Result | Interpretation |
|---|---|---|
| p < 0.001 | Highly significant | Almost certainly not due to chance |
| CI excludes 0 | Confirmed | True effect is definitively negative |
| Winsorised r = -0.39 | Robust | Not driven by outliers |
| Spearman similar | Monotonic | Relationship holds for ranks too |

---

## WHERE IT APPLIES

| Domain | Hypothesis testing use |
|---|---|
| A/B testing | Does the new design convert better? |
| Manufacturing | Is the new process faster? |
| Clinical trials | Does the drug work better than placebo |
| Quality control | Is the batch within spec? |
| Finance | Did the strategy outperform the market? |

---

## RELATIONSHIPS TO BRAIN TOPICS

- [[02_ANALYTICS/Statistics/Correlation.md]] — p-value tests whether r is different from zero
- [[02_ANALYTICS/Statistics/Regression.md]] — p-value tests whether β₁ is different from zero
- [[02_ANALYTICS/Statistics/Causality.md]] — Significance ≠ causation. A significant p-value means the pattern is real, not that X causes Y.

---

## COMMON PITFALLS

1. **"p < 0.05 means the effect is real"** — It means the data is unlikely under H₀. With large samples, trivially small effects become significant. Always report effect size (r, R²) alongside p.

2. **"p > 0.05 means there's no effect"** — It means you didn't have enough evidence. Could be small sample, high noise, or genuine absence. Absence of evidence ≠ evidence of absence.

3. **p-hacking** — Testing many variables and reporting only the significant ones inflates false positive rate. Pre-register your analysis plan.

4. **Confusing p-value with effect size** — r = -0.41 with p < 0.001 is both significant AND meaningful. r = -0.05 with p < 0.05 is significant but probably not meaningful.

5. **"95% CI means 95% probability the true value is in the interval"** — The true value is fixed (not random). The interval is random. 95% of such intervals from repeated studies would contain it.

---

## SOURCES

- Wasserstein, R.L. & Lazar, N.A. (2016). "The ASA Statement on p-Values." *The American Statistician*, 70(2), 129-133.
- Cohen, J. (1994). "The Earth Is Round (p < .05)." *American Psychologist*, 49(12), 997-1003.
- [EXTERNAL RESEARCH] ASA p-value guidance: https://www.amstat.org/pubs/pure/research/P-values/
- [RESUME-SOURCED] SIRP research paper — significance testing section

---

## INTERVIEW DEFENSE SCRIPTS

### 30-second version
> "The p-value was less than 0.001, meaning there's less than a 0.1% chance of seeing a correlation this strong if there were truly no relationship. The 95% confidence interval was approximately -0.51 to -0.30 — entirely negative, entirely away from zero. Both point to the same conclusion: the skill-defect relationship is statistically significant."

### Cross-examination
| Question | Answer |
|---|---|
| "Is p < 0.001 the same as proving the relationship?" | "No. It proves the relationship is unlikely to be zero. It doesn't prove causation — that requires experimental design or causal inference methods." |
| "What about multiple comparisons?" | "This was a single planned hypothesis — skill vs defects. No correction needed. If I'd tested skill against 20 defect types, I'd use Bonferroni or FDR correction." |
| "What's the difference between statistical and practical significance?" | "Statistical significance (p-value) tells you the effect is real. Practical significance (effect size) tells you the effect matters. r = -0.41 with p < 0.001 is both." |

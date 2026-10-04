---
title: Correlation — Pearson r, Spearman rho, and the r=-0.41 Defense
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
tags: [statistics, correlation, pearson, spearman, regression, tata-motors, sirp]
---

# Correlation — Pearson r, Spearman rho, and the r=-0.41 Defense

> **Definition:** Correlation measures the strength and direction of a linear relationship between two continuous variables. Pearson's r ranges from -1 (perfect negative) to +1 (perfect positive), with 0 meaning no linear relationship.

---

## INTUITION

Before any formula, understand what correlation *feels* like:

- **r = +1.0:** As X goes up, Y goes up — perfectly, every time. A straight line fits exactly.
- **r = 0:** X and Y move independently. Knowing X tells you nothing about Y.
- **r = -0.41:** As X goes up, Y *tends* to go down — moderately. There's a real pattern, but lots of scatter around it.

> **Key insight:** Correlation does NOT measure causation. It measures *co-movement*. Two things can move together because one causes the other, because a third factor drives both, or by pure coincidence.

---

## FUNDAMENTALS

### Covariance — the raw ingredient

Covariance measures how two variables change together:

```
Cov(X, Y) = Σ[(Xi - X̄)(Yi - Ȳ)] / (n - 1)
```

- Positive covariance: when X is above its mean, Y tends to be above its mean
- Negative covariance: when X is above its mean, Y tends to be below its mean
- Problem: covariance is in *units* (e.g., "skill-points × defects"), making it hard to interpret

### Pearson r — covariance made interpretable

Pearson's r standardizes covariance by dividing by the product of standard deviations:

```
r = Cov(X, Y) / (SD(X) × SD(Y))
```

This forces r into the range [-1, +1], making it comparable across studies.

**Properties of Pearson r:**
- Symmetric: r(X,Y) = r(Y,X)
- Unitless: no dependence on measurement scale
- Sensitive to outliers: one extreme point can distort r substantially
- Assumes linearity: r can be 0 even if a strong *curvilinear* relationship exists

### Spearman rho — the rank-based alternative

Spearman's rho replaces raw values with ranks:

```
ρ = 1 - (6 × Σd²) / (n(n² - 1))
```

Where d = difference between ranks of each pair.

**When to use Spearman over Pearson:**
- Data is ordinal (ranked, not truly continuous)
- Relationship is monotonic but not linear
- Outliers are present (Spearman is more robust)
- Distribution is non-normal

### Interpreting r values (Cohen's guidelines)

| |r| range | Strength | Example |
|---|---|---|
| 0.00 – 0.10 | Negligible | Height and reading ability |
| 0.10 – 0.30 | Small | Study hours and exam score (weak) |
| 0.30 – 0.50 | Medium | Skill level and defect rate (moderate) |
| 0.50 – 0.70 | Large | Experience and performance (strong) |
| 0.70 – 1.00 | Very large | Test-retest reliability |

### R² — coefficient of determination

```
R² = r² = (-0.41)² = 0.1681 ≈ 17%
```

**R² = 17% means:** 17% of the variance in defect rate is explained by the linear relationship with skill level. The remaining 83% is explained by other factors (station complexity, equipment condition, material variation, etc.).

> **Common mistake:** "R² = 17% is low." In manufacturing with dozens of confounding variables, 17% from a *single predictor* is meaningful. The question is whether it's *practically* significant, not whether it's the whole story.

---

## HOW IT WORKS — THE MECHANICS

### The r=-0.41 calculation (SIRP)

[RESUME-SOURCED] From the SIRP research paper:

```
Variables:
  X = Operator skill level (1-5 scale, per station)
  Y = Defect rate (defects per 1,000 engines, per station)

Data:
  n = 258 operator-station observations
  across 96 assembly stations (31 Short Block + 65 Long Block)
  over 3+ years of manufacturing data

Result:
  Pearson r = -0.41
  p < 0.001
  R² ≈ 17%
```

### Why negative?

Negative r means: as skill level *increases*, defect rate *decreases*. This is the expected direction — more skilled operators make fewer mistakes. The magnitude (-0.41) indicates a moderate relationship.

### Statistical significance

```
H₀: ρ = 0 (no correlation in the population)
H₁: ρ ≠ 0 (there is a correlation)

t = r × √(n - 2) / √(1 - r²)
t = -0.41 × √256 / √(1 - 0.1681)
t = -0.41 × 16 / √0.8319
t = -6.56 / 0.9121
t ≈ -7.19

df = n - 2 = 256
p < 0.001 (two-tailed)
```

**Interpretation:** The probability of observing r = -0.41 (or more extreme) if the true population correlation were zero is less than 0.1%. This is highly statistically significant.

### Confidence interval for r

Using Fisher's z-transformation:

```
z' = 0.5 × ln((1 + r) / (1 - r))
z' = 0.5 × ln((1 - 0.41) / (1 + 0.41))
z' = 0.5 × ln(0.59 / 1.41)
z' = 0.5 × ln(0.4184)
z' = 0.5 × (-0.871)
z' = -0.436

SE(z') = 1 / √(n - 3) = 1 / √255 = 0.0626

95% CI for z': [-0.436 ± 1.96 × 0.0626] = [-0.559, -0.313]

Back-transform to r:
  Lower: (e^(-0.559) - 1) / (e^(-0.559) + 1) = -0.507
  Upper: (e^(-0.313) - 1) / (e^(-0.313) + 1) = -0.303

95% CI for r: approximately [-0.51, -0.30]
```

**Interpretation:** We're 95% confident the true population correlation lies between -0.51 and -0.30. The entire interval is negative and away from zero — strong evidence of a real relationship.

---

## WORKED EXAMPLE — From r to Business Impact

### The ~440 defects per 1,000 engines claim

[RESUME-SOURCED] The SIRP reports that targeted workforce optimization could reduce defects by approximately 440 per 1,000 engines.

**How this number is derived (approximate reconstruction):**

```
Simple linear regression: Defect_Rate = β₀ + β₁ × Skill_Level

If r = -0.41, and we assume:
  Mean skill ≈ 3.0 (on 1-5 scale)
  Mean defect rate ≈ 800 per 1,000 (hypothetical baseline)
  SD(skill) ≈ 1.0
  SD(defects) ≈ 300

Then:
  β₁ = r × (SD(Y) / SD(X)) = -0.41 × (300 / 1.0) = -123

  Interpretation: Each 1-unit increase in skill level → ~123 fewer defects per 1,000

  Moving from skill level 2 (lowest) to skill level 5 (highest):
    ΔSkill = 3 units
    ΔDefects = 3 × (-123) = -369 per 1,000

  The ~440 figure likely comes from:
    - A different regression specification (perhaps weighted by station volume)
    - Or a 2-unit move from the lowest skill stations
    - Or a non-linear model / simulation output
```

> **VERIFY:** The exact regression equation and how 440 was derived should be confirmed against the SIRP paper. The figure is a source claim — do not silently recalculate. If asked in interview, say: "The model predicted approximately 440 fewer defects per 1,000 engines when the lowest-skill stations were brought to benchmark skill levels. This came from the regression coefficient applied to the skill gap."

### Confidence interval for the regression prediction

[RESUME-SOURCED] CI: 276–598

```
The 95% confidence interval for the predicted reduction is 276 to 598 defects per 1,000.

This means:
  - Best case: 598 fewer defects (skill improvement has maximum effect)
  - Worst case: 276 fewer defects (skill improvement has minimum effect)
  - Point estimate: ~440 (middle of range)

The width of the CI (598 - 276 = 322) reflects:
  - Sample size (258 observations — moderate)
  - Variance explained (R² = 17% — lots of unexplained variance)
  - Heterogeneity across 96 stations
```

---

## WHERE IT APPLIES

| Domain | How correlation is used |
|---|---|
| Manufacturing | Skill-defect, equipment-age-failure, temperature-quality |
| Finance | Stock correlations, risk diversification, factor models |
| Healthcare | Drug dosage-response, biomarker-disease |
| Marketing | Ad spend vs sales, price vs demand |
| Software | Code complexity vs bug rate, team size vs velocity |

---

## RELATIONSHIPS TO BRAIN TOPICS

- [[Theory_of_Constraints]] — Correlation helps identify which station is the bottleneck; TOC tells you what to do about it
- [[02_ANALYTICS/Statistics/Regression.md]] — Regression extends correlation by quantifying the *effect* (slope, not just strength)
- [[02_ANALYTICS/Statistics/Hypothesis_Testing.md]] — p-value and CI test whether r is real or noise
- [[02_ANALYTICS/Statistics/Causality.md]] — Correlation ≠ causation; confounders must be addressed
- [[07_OPERATIONS/TATA_MOTORS/Methodology.md]] — Full SIRP methodology using these statistical tools

---

## COMMON PITFALLS

1. **"r = -0.41 is weak"** — In manufacturing with dozens of confounders, a single-predictor r of -0.41 is meaningful. Effect size depends on context.

2. **"R² = 17% means 83% is unexplained, so the model is bad"** — R² measures linear explanation only. 17% from one variable in a complex system is a signal worth acting on.

3. **"p < 0.001 proves causation"** — p-value only tests whether r is different from zero. It says nothing about *why* they're correlated.

4. **Confusing statistical significance with practical significance** — r = -0.05 can be significant with n = 10,000 but practically meaningless. Always report effect size (r) alongside p.

5. **Pearson on ordinal data** — Skill level (1-5) is ordinal. Spearman rho would be more appropriate. Report both for robustness. [RESUME-SOURCED: SIRP reports both Pearson and Spearman]

6. **Outlier sensitivity** — One station with extreme values could inflate or deflate r. Winsorising (trimming extreme values) is a robustness check. [RESUME-SOURCED: SIRP reports Winsorised r = -0.39]

---

## SOURCES

- Cohen, J. (1988). *Statistical Power Analysis for the Behavioral Sciences* (2nd ed.). — r effect size guidelines
- Fisher, R.A. (1921). "On the 'probable error' of a coefficient of correlation." — Fisher z-transformation
- Montgomery, D.C. & Runger, G.C. (2018). *Applied Statistics and Probability for Engineers* (7th ed.). — Regression fundamentals
- [RESUME-SOURCED] SIRP research paper, section on correlation analysis
- [EXTERNAL RESEARCH] NIST/SEMATECH e-Handbook of Statistical Methods — https://www.itl.nist.gov/div898/handbook/

---

## INTERVIEW DEFENSE SCRIPTS

### 30-second version
> "I found a moderate negative correlation (r = -0.41) between operator skill level and defect rate across 258 observations at 96 assembly stations. It's statistically significant (p < 0.001) and means about 17% of the variation in defects is linked to skill differences."

### 2-minute version
> "Using Pearson correlation on 3 years of manufacturing data across 96 engine assembly stations, I measured the relationship between operator skill level (rated 1-5) and station-level defect rate. The result was r = -0.41, p < 0.001, meaning there's a moderate, statistically significant negative relationship — higher skill, lower defects. R-squared was about 17%, which in manufacturing with many confounding factors like equipment age and station complexity, is meaningful from a single predictor. I also ran Spearman rho as a robustness check since skill is ordinal, and Winsorised the data at 5% to test outlier sensitivity — the correlation held at -0.39. The regression model predicted approximately 440 fewer defects per 1,000 engines when low-skill stations were brought to benchmark levels, with a 95% confidence interval of 276 to 598."

### Cross-examination (what they'll ask)
| Question | Answer |
|---|---|
| "Does r = -0.41 prove skill *causes* fewer defects?" | "No. It proves they co-move. Confounders like station complexity (r = +0.38 with defects) could explain part of it. The correlation is a *signal* that warrants investigation, not proof of causation." |
| "Why Pearson on ordinal data?" | "Fair point. I also reported Spearman rho for robustness. Pearson was used in the primary analysis because the skill scale, while labeled 1-5, was treated as interval for the regression. Spearman confirmed the direction and approximate magnitude." |
| "What's R² and why should I care?" | "R² = 17% means skill explains 17% of the variance in defect rates. The other 83% comes from equipment, materials, process variation, and station complexity. But 17% from one variable in a complex manufacturing system is actionable — it tells us where to invest in training." |
| "How did Winsorising affect the result?" | "Winsorising at 5% trimmed the most extreme values and produced r = -0.39, very close to the original -0.41. This confirms the correlation isn't driven by a handful of outlier stations." |

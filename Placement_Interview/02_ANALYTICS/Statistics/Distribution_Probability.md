---
title: Distributions & Probability — Interview Deep-Dive
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [statistics, probability, level-2, critical, tier-1]
---

# 📐 Distributions & Probability

> [!important] Why this matters for YOU
> Your PGDM is **Research & Business Analytics** and your SIRP leans on distributions (right-skewed defect rates, demand variability via CV², normal-theory confidence intervals). Expect statistics to be probed *alongside* your projects, not as an abstract quiz.

---

## 1 · Descriptive Statistics — the vocabulary of your own reports

| Statistic | What it tells | When it lies |
|---|---|---|
| Mean | balance point | sensitive to outliers / skew |
| Median | middle value | robust — use for skewed data |
| Mode | most frequent | categorical peaks |
| Variance (σ²) | average squared spread | squared units — hard to read |
| Std Dev (σ) | spread in original units | still assumes unimodal symmetry |
| IQR | middle-50% spread (Q3−Q1) | the robust spread measure |
| Percentiles | position in distribution | distribution-free |

> [!tip] The skew rule interviewers love
> **Mean > Median → right (positive) skew.** Your SIP's defect distribution is right-skewed (long tail of high-defect stations) — that's why Pareto analysis, not the mean, drives the insight, and why the *median* is the honest "typical station."

**Coefficient of Variation = σ/μ** — spread *relative to* level. This exact statistic (as **CV²**) classifies demand variability in your SIRP. Saying "I used CV² on demand, the same CV logic applies to any relative-dispersion comparison" ties Level 2 to Level 5 in one breath.

**Skewness & kurtosis:** skew = asymmetry; kurtosis = tail weight (heavy tails → more outliers than normal).

---

## 2 · Probability — the rules that matter

| Rule | Statement | Intuition |
|---|---|---|
| Complement | P(not A) = 1 − P(A) | "at least one" = 1 − "none" |
| Addition | P(A∪B) = P(A) + P(B) − P(A∩B) | don't double-count the overlap |
| Multiplication | P(A∩B) = P(A)·P(B\|A) | independent → just multiply |
| Conditional | P(A\|B) = P(A∩B)/P(B) | the Bayes ingredient |
| Expected value | E[X] = Σ x·P(x) | weighted average outcome |

### Bayes' Theorem — the interview favourite

$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

**Classic (say it in base rates):** a defect detector is 99% accurate; 0.5% of engines truly defective. P(defect | flagged) = (0.99 × 0.005) / (0.99 × 0.005 + 0.01 × 0.995) ≈ **33%**.

> **The punchline:** even a very accurate test flags mostly false positives when the base rate is low. The same logic explains why a 99%-accurate fraud model still drowns analysts in false alarms.

---

## 3 · The Distributions You Must Name

| Distribution | Models | Key facts |
|---|---|---|
| **Normal** | symmetric natural variation | ~68/95/99.7 within 1/2/3σ; CLT foundation |
| **Binomial** | # successes in n trials | fixed n, two outcomes, constant p |
| **Bernoulli** | single trial | binomial with n=1 |
| **Poisson** | counts of events per interval | rare, independent events; mean = variance = λ |
| **Exponential** | time *between* Poisson events | memoryless; mean = 1/λ |
| **Uniform** | equal likelihood in range | "no information" baseline |

**Connect each to your world (say these):**
- Normal → the modelled skill distribution clusters near mid-range; CI math assumes normality
- Binomial → pass/fail at PDI inspection
- Poisson → **defect counts per engine/period** (and intermittent demand counts in the SIRP!)
- Exponential → time between line stoppages / between demand arrivals

> [!tip] The demand-forecasting bridge
> Intermittent demand is often modelled as: **Poisson arrival** of demand occasions × **normal/gamma demand size**. Croston's method (your SIRP) is literally exponential smoothing applied to those two components separately. One sentence, three distributions, and your research.

---

## 4 · Sampling & the Central Limit Theorem

- **Population vs sample:** parameters (μ, σ) belong to populations; statistics (x̄, s) to samples. You almost never see the population.
- **Sampling error** shrinks with √n — 4× the data, 2× the precision.
- **Sampling distribution** = the distribution of a statistic across repeated samples.

> [!important] Central Limit Theorem — the most important sentence in applied statistics
> *For a sufficiently large sample, the sampling distribution of the mean is approximately **normal — regardless of the population's shape*** (n ≥ ~30 as a rule of thumb).

**Why you should care:** it's the licence for z-tests, t-tests, and confidence intervals even when the underlying data is skewed (like defect counts). Your SIRP's CI statements lean on it.

**Standard error = s/√n** — the denominator of every CI and t-statistic you'll ever quote.

---

## 5 · Confidence Intervals

$$\bar{x} \pm t^* \cdot \frac{s}{\sqrt{n}}$$

- 95% CI: *if we repeated the study many times, 95% of such intervals would contain the true parameter*
- **Wrong reading (don't say it):** "95% probability the parameter is in THIS interval"
- Narrower CI ← larger n, less noise, lower confidence level

**Your SIRP example:** the SIP regression slope (~440 fewer defects per skill point, 95% CI ≈ 235–639). The CI not containing zero is the same information as p < 0.05 — *two dialects of one fact*. Interviewers love candidates who can say that.

---

## 6 · Expected Value in Business Decisions

```text
EV(intervene)  = P(success) × gain  −  cost
EV(do nothing) = P(failure) × exposure
```

Inventory example (Level 5 preview): **expected cost = holding_cost × E[overstock] + stockout_penalty × E[understock]**. Your SIRP's inventory simulation is expected-value arithmetic run over thousands of simulated demand paths. Probability → money. That's the whole game.

---

## ⚡ Rapid-Fire Q&A

> **Mean vs median — which and when?**
> Median for skewed data (income, defects, demand); mean when symmetric. Report both and the story of their gap.

> **What does the CLT let you do?**
> Treat the sampling distribution of the mean as normal even for non-normal data → CIs and tests without knowing the population's shape.

> **Poisson vs Binomial?**
> Poisson counts events per *interval* (no fixed n); Binomial counts successes in *n fixed trials*.

> **When Poisson breaks:**
> Events clustered/contagious (overdispersion: variance > mean) — exactly the "erratic/lumpy demand" territory in the SIRP.

> **Variance vs standard deviation?**
> σ² is the math; σ is the communication — back in original units.

> **What is a p-value? (short version)**
> Probability of data at least this extreme *if the null hypothesis were true*. Nothing more. (Full treatment → [[Statistical_Tests]].)

> **Why CV and not just σ?**
> σ has units; CV is unit-free — comparable across series with different scales (a slow-moving SKU vs a fast one).

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Tests & inference | [[Statistical_Tests]] |
| Hypothesis testing (existing deep-dive) | [[Hypothesis_Testing]] |
| Model comparison: DM + Holm | [[Model_Comparison_DMHolm]] |
| Demand classification uses CV² | [[../Forecasting/Intermittent_Demand_ADI_CV2]] |

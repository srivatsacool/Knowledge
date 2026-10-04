---
title: Model Comparison — Diebold-Mariano Test & Holm Correction
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [statistics, diebold-mariano, holm, forecasting, tier-2]
---

# ⚖️ Model Comparison — DM Test & Holm Correction

> [!important] Your differentiator
> Most candidates can run a t-test. Very few can explain **why comparing forecast models needs its own test** and **why 91 comparisons need Holm**. Your SIRP did both — this note turns that into interview dominance.

---

## 1 · Why not just compare metrics and pick the winner?

Three reasons a raw MASE table isn't enough:

1. **The difference may be noise.** Two models' errors differ by 0.02 MASE — is that skill or sampling luck on 28-day windows?
2. **Forecast errors are not independent observations** — overlapping windows, shared shocks, autocorrelation. Standard t-tests assume independence and overstate confidence.
3. **Many models × many series** → a grid of comparisons → multiple-testing inflation.

The **Diebold-Mariano (1995) test** answers #1 and #2; **Holm** answers #3.

---

## 2 · The Diebold-Mariano Test — mechanics

### The idea

Compare the two models' **loss differentials** — pointwise, per forecast origin:

$$d_t = L(e_{1t}) - L(e_{2t}), \quad L = \text{squared error (or absolute error)}$$

- If model 1 and 2 are equally good, **E[d_t] = 0** → H₀: mean loss differential = 0
- The DM statistic is the sample mean of d_t, normalized by a **serial-correlation-robust** standard error (Newey-West/HAC with lag h−1, where h = forecast horizon)

$$DM = \frac{\bar{d}}{\sqrt{\widehat{Var}(\bar{d})}} \;\overset{a}{\sim}\; N(0,1)$$

### Why the HAC variance is the whole point

With a 28-day horizon, forecasts from *overlapping origins share error paths* — d_t is autocorrelated. Treating d_t as i.i.d. (a naive t-test) understates the variance and manufactures false significance. DM's long-run variance estimator absorbs that autocorrelation.

```python
# scipy-free sketch (say you know the shape; full impl exists in statsmodels/arch)
d = lstm_losses - arima_losses              # pointwise loss differential
dm = d.mean() / np.sqrt(long_run_variance(d, lag=h-1))
p  = 2 * (1 - stats.norm.cdf(abs(dm)))
```

### Interpretation

| DM < 0 (sig.) | DM > 0 (sig.) | \|DM\| small, p > α |
|---|---|---|
| model 1 significantly better | model 2 significantly better | no evidence of a difference — *say this, don't force a winner* |

> [!tip] The two-line answer for your viva
> *"I used DM because it tests whether a difference in forecast accuracy is **statistically real**, and its HAC variance correctly handles the autocorrelation from overlapping rolling-origin windows — which a plain t-test ignores."*

---

## 3 · The Multiple-Comparisons Problem

### The arithmetic of noise

Every test at α = 0.05 has a 5% false-positive rate *when H₀ is true*. Run a grid:

```text
12 models → C(12,2) = 66 pairs  ×  datasets / loss functions  →  91 comparisons
Expected false positives at naive α = 0.05:   91 × 0.05  ≈  4.5  "significant" results that are noise
```

Uncorrected, your results table *guarantees* star-labelled differences that don't exist. Any examiner who knows this will ask. Your answer: **Holm correction.**

---

## 4 · Holm's Step-Down Procedure — exactly how it runs

**Goal:** familywise error rate (FWER) ≤ α across all m tests — stronger than FDR control (Benjamini-Hochberg), appropriate when you want no false "winner" claims.

**Mechanics (sort p ascending, then walk):**

```text
m = 91, α = 0.05
i=1:  p(1) ≤ α/(m)      = 0.000549  → reject H₀(1), continue
i=2:  p(2) ≤ α/(m−1)    = 0.000556  → reject H₀(2), continue
i=3:  p(3) ≤ α/(m−2)    = 0.000562  → ...
i=k:  p(k) > α/(m−k+1)  → STOP: reject this one and ALL later hypotheses fail to reject
```

```python
from statsmodels.stats.multitest import multipletests
reject, p_adj, _, _ = multipletests(p_values, alpha=0.05, method='holm')
```

### Why Holm over Bonferroni (the question you WILL get)

| | Bonferroni | Holm |
|---|---|---|
| Rule | every p vs α/m | step-down α/(m−i+1) |
| FWER control | ✅ | ✅ (same guarantee) |
| Power | lowest — one brutal cut | **strictly ≥ Bonferroni** — small p-values face *easier* thresholds as the walk proceeds |
| Cost | one line | one line |

*"Same guarantee, more power, one line of statsmodels — that's the entire argument for Holm."*

> [!note] Honest nuance (say it proactively — examiners reward it)
> FWER control at 91 tests is *strict* — some genuinely small improvements get labelled non-significant. That's the price of not endorsing noise, and it aligns with the SIRP's conclusion style: only differences that survive Holm are claimed; everything else is reported as "no evidence of a difference."

---

## 5 · Effect Sizes & CIs — the layer above significance

With 91 pairs, the table that matters is not just "reject / fail to reject":

| Layer | Question | Tool |
|---|---|---|
| p-value (Holm-adjusted) | *is there a difference at all?* | DM test |
| Effect size | *how big?* | e.g. relative MASE improvement %, Cohen's d on loss differentials |
| CI on the difference | *range of plausible improvement* | CI on mean d_t |
| Practical significance | *does it change the decision?* | downstream inventory-cost simulation |

> [!important] The flagship sentence of your SIRP
> *"Statistical significance ranks the models; **practical significance** comes from the inventory simulation — and the two disagree on dense demand, which is the entire point of the research."*

---

## 6 · The Known Caveats — own them before you're asked

1. **DM assumes forecast errors are covariance-stationary** — fine for rolling-origin comparisons; worth naming
2. **Overlapping windows + multi-series pooling** weaken strict independence → the SIRP treats comparisons as **ranking evidence under Holm**, triangulated with effect sizes and the downstream cost simulation (triangulation, not single-test faith)
3. **Harvey-Leybourne-Newbold (HLN) small-sample correction** exists for short samples — mention it; say the study's window count made the asymptotic version serviceable
4. **DM tests accuracy only** — it says nothing about inventory cost; that's a separate evaluation (and where the research's twist lives)

---

## ⚡ Rapid-Fire Q&A

> **What exactly does the DM test compare?**
> The mean pointwise loss differential between two models' forecast errors, with a serial-correlation-robust (HAC) standard error.

> **Why not a paired t-test on the errors?**
> Overlapping forecast horizons make the differentials autocorrelated; a t-test's i.i.d. variance is wrong and overstates significance.

> **What loss function?**
> Squared error (or absolute); squared punishes large misses — itself a business choice about error asymmetry.

> **Why Holm, not Bonferroni?**
> Identical familywise-α guarantee, strictly more power via step-down thresholds.

> **Holm vs Benjamini-Hochberg?**
> Holm controls FWER (no false winners); BH controls FDR (expected false-discovery proportion) — more power, weaker guarantee. For model-selection claims, FWER is the defensible choice.

> **What if nothing survives correction?**
> That's a finding, not a failure: "no model is reliably more accurate" pushes the decision to simplicity and cost — which the SIRP's inventory layer then arbitrates.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The metrics being compared | [[../Forecasting/Forecast_Metrics_MASE]] |
| Where practical significance is decided | [[../Forecasting/Inventory_Optimization]] |
| Test fundamentals | [[Statistical_Tests]] |

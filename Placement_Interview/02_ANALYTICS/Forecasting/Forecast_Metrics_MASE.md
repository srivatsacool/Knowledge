---
title: Forecast Evaluation Metrics — MAE to MASE & RMSSE
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [forecasting, metrics, mase, level-5, critical, tier-1]
---

# 🎯 Forecast Evaluation Metrics

> [!important] The "why MASE" question is coming
> Your SIRP reports **MASE and RMSSE** among others. Interviewers probe metrics because metric choice *is* the business judgment — and your best answer is that you chose scale-free metrics precisely because you compared heterogeneous retail series.

---

## 1 · The Metric Lineup

Let e_t = y_t − ŷ_t, n = number of forecast points, h = horizon.

### Absolute-error family

| Metric | Formula | Reads as |
|---|---|---|
| **MAE** | $\frac{1}{n}\sum \|e_t\|$ | average miss, in units — robust to outliers |
| **RMSE** | $\sqrt{\frac{1}{n}\sum e_t^2}$ | punishes big misses — in units, inflated tail sensitivity |
| **MAPE** | $\frac{100}{n}\sum \left\|\frac{e_t}{y_t}\right\|$ | % error — **dies on zeros** |
| **sMAPE** | $\frac{100}{n}\sum \frac{2\|e_t\|}{\|y_t\|+\|\hat y_t\|}$ | bounded-ish %, but unstable near zero too |

### The scale-free family — your SIRP's picks

| Metric | Formula | Benchmark |
|---|---|---|
| **MASE** | $\dfrac{\text{MAE}}{\text{MAE}_{\text{naive, in-sample}}}$ | **< 1 = beats naive** |
| **RMSSE** | $\sqrt{\dfrac{\frac{1}{n}\sum e_t^2}{\frac{1}{N}\sum (Y_{t}-Y_{t-1})^2_{\text{train}}}}$ | < 1 = beats naive (squared loss) |
| **WAPE** | $\dfrac{\sum\|e_t\|}{\sum y_t}$ | volume-weighted % — zeros-safe MAPE substitute |

---

## 2 · MAPE — why your SIRP (and M5) distrust it

$$\text{MAPE divides by } y_t. \quad y_t = 0 \;\Rightarrow\; \infty.$$

For **intermittent demand**, most y_t are zero — MAPE is literally undefined or explodes on the demand occasions. This is the single cleanest justification for scale-free metrics on retail data:

> *"MAPE is unusable on intermittent series — division by zero. sMAPE mishandles near-zeros too. So I need a denominator that doesn't involve the actual value at all. That's exactly what MASE does: it divides by a **fixed in-sample benchmark**, the naive forecast's MAE on the training data."*

That one answer demonstrates: metric knowledge + intermittent-demand awareness + reasoning about *why*, not just *what*. Three topics, one breath.

---

## 3 · MASE — the deep dive

### Definition (Hyndman & Koehler, 2006)

$$\text{MASE} = \frac{\text{MAE}_{\text{forecast}}}{q}, \qquad q = \frac{1}{N-1}\sum_{t=2}^{N}\left|Y_t - Y_{t-1}\right| \;\;(\text{train data, non-seasonal})$$

For seasonal series the scaling uses **m-step seasonal naive** errors on the training data instead:

$$q = \frac{1}{N-m}\sum_{t=m+1}^{N}\left|Y_t - Y_{t-m}\right|$$

### What MASE < 1 means — and what it doesn't

| Reading | Meaning |
|---|---|
| MASE < 1 | your forecast beats the in-sample naive on out-of-sample data ✅ |
| MASE = 0.6 | your MAE is 40% *lower* than naive's — a real skill signal |
| MASE > 1 | worse than "tomorrow = today" — why deploy a model at all? |
| MASE = 1 exactly | you *are* naive |

> [!warning] Don't over-claim
> MASE < 1 means *beats naive* — **not** "good in absolute terms." A 0.9 MASE still wastes 10% of the naive forecast's error budget. And MASE lets you compare across series, but the *scale* of difficulty still differs (a lumpy SKU's 0.9 ≠ a stable SKU's 0.9).

### Why MASE works across heterogeneous series — the SIRP answer

1. **Scale-free** — a SKU selling 5,000 units and one selling 3 become comparable: the denominator is *each series' own* benchmark
2. **Zero-safe** — denominator never touches y_t (no MAPE catastrophe)
3. **Interpretable anchor** — 1.0 *means* something (naive); no unit-free ambiguity like sMAPE
4. **Aggregable** — mean MASE across hundreds of series is a legitimate portfolio score (this is how M5 winners were ranked)
5. **Symmetric-ish treatment** — unlike MAPE, doesn't punish over-forecasting small actuals disproportionately

### RMSSE — the squared-loss sibling

Same structure with RMSE instead of MAE, scaled by in-sample random-walk variance. Choose by business loss shape: **MAE/MASE when misses cost linearly; RMSE/RMSSE when large misses are disproportionately expensive.** Report both → sensitivity to the loss shape.

---

## 4 · Forecast Bias — the metric nobody reports (and should)

$$\text{Bias} = \frac{1}{n}\sum e_t \quad (\text{signed!})$$

- MAE/MASE/RMSE hide direction: a model **always over-ordering by 20%** can look "accurate" on absolute metrics
- Bias ≠ 0 → systematic error → correctable with a simple offset, or a sign of structural misspecification
- **Inventory translation:** over-forecast bias inflates stock & holding cost; under-forecast bias inflates stockouts. The cost asymmetry is *why* bias belongs in a forecasting-to-inventory study — and your SIRP evaluated forecasts *as inventory inputs*, so bias is not optional there.

> [!tip] The maturity sentence
> *"Accuracy metrics tell me how often the model misses; **bias** tells me which way it misses — and for replenishment, direction is the difference between a warehouse and a stockout."*

---

## 5 · Choosing a Metric — the decision logic

| Business loss shape | Metric |
|---|---|
| Linear in miss size | **MAE / MASE** |
| Quadratic — big misses much worse | **RMSE / RMSSE** |
| Percentage comparisons across volume tiers | WAPE (not MAPE, if zeros exist) |
| Direction matters (replenishment!) | + **Bias** |
| Executive summary | WAPE or MASE — one scale-free number |

**The interview-perfect framing:**

> *"Never choose a metric because it's popular. Choose it from the loss the business actually pays. My SIRP compared heterogeneous retail series, so scale-free metrics were mandatory (MAPE breaks on zeros); I used MASE/RMSSE for ranking with DM+Holm significance, tracked bias for direction — and then checked whether any of it survived contact with the inventory-cost simulation. Sometimes it didn't, and that's the finding."*

---

## 6 · Evaluation Mechanics — metrics done honestly

- **Compute per origin, then aggregate** (rolling-origin) — never pool all horizons blindly; stratify by h if you can
- **Same calendar, same folds for every model** — the comparison framework of your SIRP; a metric on a different fold is not comparable
- **Aggregate hierarchy:** per-series → per-archetype (intermittent classes) → portfolio mean. A portfolio average can hide a class of series the model fails entirely (check per-archetype tables before claiming victory)
- **Pinball/quantile loss** (bonus point): if you forecast quantiles for safety stock, evaluate the *quantile*, not the mean — e.g., pinball loss on the 95th percentile

---

## ⚡ Rapid-Fire Q&A

> **Why is MASE useful for comparing different retail series?**
> Each series' MAE is normalized by its own in-sample naive benchmark — scale-free, zero-safe, interpretable at 1.0.

> **What does MASE < 1 mean?**
> Out-of-sample MAE lower than the in-sample naive's — genuine skill over the no-information baseline.

> **MASE vs MAPE on intermittent demand?**
> MAPE divides by y_t → undefined/explosive at zeros. MASE's denominator is fixed per-series training data — no such failure mode.

> **Why report RMSE at all if MAE is more robust?**
> RMSE weights large misses quadratically; if the business cost of a big miss is super-linear (stockout cascades), RMSE is the honest signal.

> **What is WAPE and when over MAPE?**
> Σ|e| / Σy — volume-weighted error; defined even with zeros, dominated by high-volume series (a feature, not a bug, for aggregate reporting).

> **How do you detect systematic over-forecasting?**
> Signed bias metric (mean of e_t ≠ 0), plus cumulative forecast-vs-actual plots. Absolute metrics hide it.

> **The M5 competition used WRMSSE — why?**
> Weighted RMSSE across aggregation levels (item/store/category…), weighting by dollar value — a portfolio-scale version of exactly the scale-free logic your SIRP applies at series level.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The models being scored | [[Forecast_Model_Ladder]] |
| Making the scores statistically real | [[../Statistics/Model_Comparison_DMHolm]] |
| Where metrics meet money | [[Inventory_Optimization]] |

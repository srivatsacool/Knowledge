---
title: Forecasting Cheat Sheet
type: cheat-sheet
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [forecasting, cheat-sheet]
---

# ⏱️ Forecasting Cheat

## Foundations

**Stationarity** = constant mean/variance/lag-structure. ADF (H₀: unit root — small p = stationary ✅) vs KPSS (opposite). Fix: differencing (d), seasonal differencing (D), log.

**ACF/PACF:** PACF cutoff at p → AR(p) · ACF cutoff at q → MA(q) · both tail → ARMA · slow ACF decay → difference first · spikes at m,2m → seasonality.

**Seasonality vs cyclicality:** fixed known period vs irregular multi-year swings.

## The model ladder (↑ complexity must be earned)

| Rung | Model | Use when |
|---|---|---|
| 1 | Naive / S-Naive / MA | baseline anchor |
| 2 | SES | flat (α = memory) |
| 3 | Holt (DES) | + trend (damp it for h=28) |
| 4 | Holt-Winters (TES) | + season (mult. when swings ∝ level) |
| 5 | ARIMA(p,d,q) | rich autocorrelation |
| 6 | SARIMA | + seasonal terms (per-series cost!) |
| 7 | Croston → SBA → TSB | intermittent (ADI > 1.32) |
| 8 | Global LSTM | many related series, dense demand |

**Croston:** size & interval smoothed on demand occasions only → rate = z/p. **SBA:** ×(1−α/2) debias. **TSB:** P(occurs)×size, updated every period (handles obsolescence).

**ADI/CV² (cut-offs 1.32/0.49):** smooth · intermittent · erratic · lumpy.

## Metrics

$$MASE = \frac{MAE_{forecast}}{MAE_{naive, in-sample}} < 1 \text{ beats naive} \qquad RMSSE = \text{squared version}$$

- MAPE dies at zeros → MASE/RMSSE for heterogeneous intermittent series
- WAPE = Σ|e|/Σy (zeros-safe %) · **Bias = mean(e_t)** — direction of error (over- vs under-stock)
- RMSE when big misses cost super-linearly

## Validation — the only legal design

```text
Rolling origins: [train][28d test] → slide → repeat   (never shuffle!)
```
Leakage controls: history-only scaling · windows within splits, no boundary overlap · origin-available features.

## Statistical layer

91 pairwise **DM tests** (HAC variance for overlap) → **Holm** step-down → effect sizes + CIs → tests are *ranking evidence*, triangulated with cost simulation.

## The flagship finding

> **LSTM lowest MASE on both datasets. M5: cost aligned. Dense Store demand: Moving Average lower inventory cost.** Accuracy ≠ economics: gains live in small misses; cost lives in tails + order smoothness.

## Say-cold

- **28-day lookback:** one monthly cycle of context per series
- **Global vs local LSTM:** pooled training, shared dynamics, one artifact
- **Why not LSTM everywhere:** sparse archetypes → Croston family; dense → cost divergence; plus compute/transparency costs
- **3 more months:** exogenous features, quantile losses, tuning sweep, reconciliation

→ Deep-dives: [[../02_ANALYTICS/Forecasting/Time_Series_Fundamentals]] · [[../02_ANALYTICS/Forecasting/Forecast_Model_Ladder]] · [[../02_ANALYTICS/Forecasting/Forecast_Metrics_MASE]] · [[../02_ANALYTICS/Forecasting/Intermittent_Demand_ADI_CV2]] · [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]]

---
title: The 25 Conceptual Questions — Model Answers
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [defense, conceptual-questions, tier-2]
---

# 🧠 The 25 Conceptual Questions — Model Answers

> [!important] The highest-density revision file in this vault
> Spoken-style answers, each 15–40 seconds. Full depth lives in the linked notes. Rehearse until each answer is automatic.

---

### 1 · Why can a model with better MASE have worse inventory cost? ⭐
*Accuracy gains concentrate in small, everyday misses; inventory cost is driven by tail events and order smoothness. A reactive model (LSTM) chases patterns — its orders whipsaw, its errors vary more where it matters — while a moving average's damped response produces cheaper order sequences. Accuracy metrics average misses; the cost model weights them asymmetrically.* → [[../02_ANALYTICS/Forecasting/Inventory_Optimization]]

### 2 · Why did you use MASE?
*Compared heterogeneous retail series with intermittent zeros — MAPE divides by actual and dies at zero. MASE scales each series by its own in-sample naive benchmark: scale-free, zero-safe, and interpretable at 1.0.* → [[../02_ANALYTICS/Forecasting/Forecast_Metrics_MASE]]

### 3 · Why LSTM?
*Sequence memory with gated cell state solves the vanishing-gradient problem of RNNs; a global network pools thousands of series and learns shared weekly/seasonal dynamics.* → [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]]

### 4 · Why not just use LSTM everywhere?
*It won accuracy but not always economics; it loses on the sparsest archetypes to the Croston family; and it costs training time, transparency, and maintenance. Complexity must be earned rung by rung.* → [[../02_ANALYTICS/Forecasting/Forecast_Model_Ladder]] §6

### 5 · What is intermittent demand?
*Demand at irregular occasions with zero periods between, variable sizes — spare parts, long-tail retail. Ordinary methods average the zeros into a permanent positive forecast.* → [[../02_ANALYTICS/Forecasting/Intermittent_Demand_ADI_CV2]]

### 6 · Why does Croston work for intermittent demand?
*It stops smoothing the zeros: demand *size* and demand *interval* are smoothed separately on demand occasions only; forecast = size/interval as a rate.* → same note §3

### 7 · Croston vs SBA vs TSB?
*SBA = Croston × (1−α/2), debiasing the high rate estimate. TSB = occurrence *probability* × size, updated every period — handles obsolescence where Croston/SBA can't see demand stop.* → same note §§3–5

### 8 · ARIMA vs SARIMA?
*ARIMA = autoregressive + differencing + moving-average terms for non-seasonal structure; SARIMA adds seasonal AR/MA/differencing at period m — "this Monday vs last Monday."* → [[../02_ANALYTICS/Forecasting/Forecast_Model_Ladder]] §3

### 9 · SES vs DES vs TES?
*Level / level+trend / level+trend+seasonality — each adds a smoothed component with its own constant; move up only when the component exists in the data.* → same note §2

### 10 · What is stationarity?
*Constant mean, variance, and lag-structure over time — the future is statistically like the past. ARIMA needs it because its coefficients assume a stable relationship to history; differencing restores it.* → [[../02_ANALYTICS/Forecasting/Time_Series_Fundamentals]] §3

### 11 · Why is time-series CV different from normal CV?
*Random splits train on the future. Time series must walk forward: rolling origins, chronological windows, no boundary overlap.* → [[../02_ANALYTICS/Model_Validation]] §4

### 12 · What is data leakage in LSTM?
*History-only scaling (scaler fit on train only), windows generated within splits with no overlap across the boundary, features available at forecast origin — any violation lets the model peek.* → [[../02_ANALYTICS/Data_Leakage]] §5

### 13 · What is a 28-day lookback?
*The LSTM's input window — one full monthly demand cycle of context per series, long enough for weekly + monthly structure, short enough to train efficiently across thousands of series.* → [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]] §3

### 14 · What is rolling-origin evaluation?
*Slide a forward-in-time cut through the data: train on everything before each origin, forecast 28 days, score, repeat. Multiple origins average over regimes and produce paired scores for statistical testing.* → [[../02_ANALYTICS/Forecasting/Time_Series_Fundamentals]] §6

### 15 · What is MASE?
*MAE of the forecast divided by the in-sample MAE of the naive forecast on that series. Below 1 = beats the no-information baseline; comparable across series of any scale.* → [[../02_ANALYTICS/Forecasting/Forecast_Metrics_MASE]] §3

### 16 · What is the Diebold-Mariano test?
*Tests whether the mean pointwise loss differential between two models' forecast errors is zero, using a serial-correlation-robust variance that handles overlapping rolling-origin windows — which a plain t-test ignores.* → [[../02_ANALYTICS/Statistics/Model_Comparison_DMHolm]] §2

### 17 · Why Holm correction?
*91 comparisons at α=0.05 ≈ 4–5 false positives expected. Holm's step-down controls the familywise error rate with strictly more power than Bonferroni's flat α/91 cut.* → same note §§3–4

### 18 · Statistical vs practical significance?
*Statistical: the difference is real (survives Holm). Practical: it's big enough to change a decision — my SIRP's point: LSTM's accuracy edge was real but didn't reach the cost drivers on dense demand.* → [[../02_ANALYTICS/Statistics/Statistical_Tests]] §4

### 19 · How does a forecast become an inventory decision?
*Forecast mean + error over the exposure window (review period + lead time) set the order-up-to level: S = forecast + z·σ. The mean sets the base order; the error sets the safety stock.* → [[../02_ANALYTICS/Forecasting/Inventory_Optimization]] §3–4

### 20 · What is an order-up-to policy?
*Periodic review: every R periods, order enough to raise inventory position to target S — simple, operationally realistic, and directly forecast-driven.* → same note §3

### 21 · How do holding and stockout costs interact?
*Opposing curves: higher service level buys safety stock (holding ↑) to avoid stockouts (penalty ↓); optimum where marginal holding cost = marginal stockout risk cost — critical ratio p/(p+h).* → same note §6

### 22 · Why might Moving Average beat LSTM economically?
*Its errors are smoother and its orders less reactive: less safety-stock churn, fewer whipsaw swings. On dense demand that smoothness beat LSTM's accuracy edge in rupee terms — and sensitivity analysis showed it wasn't a parameter artifact.* → [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]] §4

### 23 · What makes M5 different from Store Item Demand?
*M5 is intermittent-heavy and hierarchical (many zero-demand SKUs); Store Item Demand is dense and stable with strong weekly cycles. The contrast is deliberate — conclusions must be environment-specific.* → [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]] §2

### 24 · What did you personally build?
*End-to-end: data prep and ADI/CV² archetype classification, all 12 model implementations under one rolling-origin harness, the DM+Holm comparison layer, the inventory-cost simulator, sensitivity analysis, and the Streamlit decision-support dashboard.* → [[../09_RESUME_PROJECTS/PROJECT_STORIES]]

### 25 · What would you change with another 3 months?
*Exogenous features (promos, calendar) into all models; quantile losses aligned to service levels; hyperparameter sweeps on lookback/architecture; hierarchical reconciliation. The LLM-assisted forecasting phase remains designed, not executed — stated honestly.* → [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]]

---

## 🎯 Rehearsal Protocol

1. **Read answer → close file → say it aloud** — if you stall, re-read and repeat
2. **Question 1, 15, 19, 20, 22 are the flagship cluster** — they interlock; master them as one story
3. Practice the **transitions** ("which connects to why I used MASE —") — chained answers sound like mastery, not memorization

---

## 🔗 Navigation

| Need | Go |
|---|---|
| Project narratives | [[../09_RESUME_PROJECTS/PROJECT_STORIES]] |
| Formulas | [[../13_FORMULAS/Formula_Sheet]] |
| Rapid sheets | [[../14_CHEAT_SHEETS/CHEAT_INDEX]] |

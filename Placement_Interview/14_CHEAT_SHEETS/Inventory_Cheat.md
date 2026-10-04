---
title: Inventory Cheat Sheet
type: cheat-sheet
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [inventory, cheat-sheet]
---

# 🏪 Inventory Cheat

## Vocabulary in one block

Lead time L · Review period R · Service level = P(no stockout) · Safety stock SS · Reorder point ROP = μ_L + SS · **Order-up-to S** (periodic review) · Holding cost h (on average inventory) · Stockout penalty p (lost sales)

## The two policies

| | (Q, R) continuous | (R, S) order-up-to ← SIRP |
|---|---|---|
| Trigger | stock hits ROP | every R periods |
| Order | fixed Q (EOQ = √(2DK/h)) | S − inventory position |
| Exposure window | L | **R + L** |

$$S = \mu_{R+L} + z\,\sigma_{R+L}, \quad \sigma_{R+L} = \sqrt{(R+L)\sigma_d^2 + \mu_d^2\sigma_L^2}$$

**Why order-up-to fits a forecasting study:** forecast mean + forecast error *are* the policy parameters.

## The accuracy→cost chain

```text
forecast mean → base order
forecast error σ → safety stock → holding cost
forecast bias → systematic over/under-stock
error SHAPE → order smoothness → whipsaw vs damped
```

## Cost model (SIRP's simulation)

```text
Total = h × avg on-hand  +  p × lost sales        (same demand paths replayed per model)
```
Sensitivity: vary h/p ratio, service z, review period → ranking must survive.

## The trade-off

```text
critical ratio = p/(p+h)  → optimal service level
higher stockout penalty → lean service · higher holding → lean stock
100% service ≈ infinite safety stock — never free
```

## The flagship finding (say verbatim)

> *"LSTM had the lowest MASE on both datasets. On M5 that also meant lowest inventory cost — but on dense Store demand, the moving average beat it on cost despite worse accuracy. Accuracy metrics average misses; inventory cost weights tails and order variability."*

## Extras (name-drop)

Newsvendor critical ratio · ABC/XYZ differentiated policies · risk pooling (√n effect) · bullwhip (smoother forecasts help chain-wide) · MEIO multi-echelon.

→ Deep-dive: [[../02_ANALYTICS/Forecasting/Inventory_Optimization]] · [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]]

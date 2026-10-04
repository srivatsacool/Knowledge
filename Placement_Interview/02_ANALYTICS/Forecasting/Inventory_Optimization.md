---
title: Inventory Optimization — Safety Stock, Policies, Costs
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [inventory, operations, level-5, tier-2, flagship]
---

# 🏪 Inventory Optimization

> [!important] Your differentiation layer
> Forecasting accuracy is a commodity skill. Connecting forecasts to **inventory economics** — and discovering that the best forecaster isn't always the best businessman — is the finding that makes your SIRP memorable. This note makes the inventory half of that argument airtight.

---

## 1 · The Business Problem in One Diagram

```text
          DEMAND (random)                    SUPPLY (delayed)
               │                                   │
               ▼                                   ▼
   ┌─────────────────────────┐        ┌─────────────────────────┐
   │  order too little/late  │        │  order too much/too soon │
   └───────────┬─────────────┘        └───────────┬─────────────┘
               ▼                                  ▼
          📉 STOCKOUT                          📦 OVERSTOCK
     lost sales, penalty,            capital locked, holding cost,
     customer trust damage           obsolescence, storage
               └──────────────┬───────────────────────┘
                              ▼
              The inventory planning problem: balance the two
```

Inventory exists **because** demand is uncertain and supply takes time. Perfect information → zero inventory needed. Your SIRP studies exactly the imperfect-information version.

---

## 2 · Core Vocabulary — define each in one breath

| Term | Definition | Interview one-liner |
|---|---|---|
| **Lead time (L)** | order placement → availability | "the latency of the supply chain" |
| **Review period (R)** | how often ordering decisions occur | continuous vs periodic review |
| **Service level** | P(no stockout in a cycle) | e.g. 95% → z = 1.645 |
| **Safety stock (SS)** | buffer above expected demand | insurance against demand + lead-time noise |
| **Reorder point (ROP)** | level that triggers an order | covers expected demand during L **+ SS** |
| **Order quantity (Q)** | how much per order | EOQ logic |
| **Order-up-to level (S)** | target position after ordering | the periodic-review policy — *your SIRP's choice* |
| **Holding cost (h)** | capital + storage + risk per unit-time | charged on *average* inventory |
| **Stockout penalty (p)** | lost margin / penalty per unsatisfied unit | charged on *missed demand* |
| **Lost sales** | unmet demand vanishes | vs backordering: demand waits (different math) |

---

## 3 · The Two Canonical Policies

### Continuous review (Q, R)

```text
Inventory falls with demand ──► hits ROP = μ_L + SS ──► order Q ──► arrives after L
```

- Check stock continuously; order a fixed Q at the trigger
- **EOQ** for Q: $\sqrt{2DK/h}$ — balances ordering vs holding cost (mention as the classical baseline; realistic systems extend it)

### Periodic review (R, S) — order-up-to — *your SIRP's policy*

```text
Every R periods:  order Q_t = S − (on-hand + on-order)
```

- One decision: push the inventory **position** up to S
- S must cover demand over **R + L** (the full exposure window between reviews and arrival):

$$S = \mu_{R+L} + z \cdot \sigma_{R+L}, \qquad \sigma_{R+L} = \sqrt{(R+L)\,\sigma_d^2 + \mu_d^2 \sigma_L^2} \;(\text{indep. demand \& lead time})$$

- **Why order-up-to fits a forecasting study:** S is computed *directly from the demand forecast* — forecast mean + forecast-driven safety stock. The forecast becomes a policy parameter, not a dashboard decoration. That's the pipeline your SIRP tests.

> [!tip] The comparison sentence
> *"(Q,R) reacts the moment stock crosses a trigger — tighter control, needs continuous monitoring. (R,S) batches decisions into review cycles — operationally simpler, and because the target S inherits the forecast's mean and error, a bad forecast propagates straight into inventory cost."*

---

## 4 · Safety Stock — where forecast quality becomes money

$$SS = z \cdot \sigma_{R+L}$$

The chain your SIRP pulls on:

```text
forecast error (σ of errors) ──► σ over the exposure window ──► safety stock ──► holding cost
```

**The subtle economics (the interview gem):**

- Safety stock is sized by **error variability**, not error level
- A forecast with slightly worse MAE but *different error structure* (smoother, less spiky) can demand **less** safety stock
- And the *asymmetry*: under-forecast → stockout penalty (often ≫ holding cost); over-forecast → capital locked in slow movers. Forecast **bias** therefore has a direct rupee signature → [[../02_ANALYTICS/Forecasting/Forecast_Metrics_MASE]] §4

> [!important] The flagship phenomenon — say it verbatim
> *"LSTM had the best MASE on both datasets. But on the dense Store-demand data, the moving average — with worse accuracy — produced **lower total inventory cost**. Why? Its errors were smoother and its orders less reactive: less safety stock churn, fewer whipsaw swings. Accuracy metrics measure the forecast; cost measures the *decision the forecast drives*. They are correlated, not identical."*

---

## 5 · The Cost Model — what your simulation actually computed

Per review cycle / per period (lost-sales, single-echelon):

```text
Total cost = Holding cost   (h × average on-hand inventory)
           + Stockout cost  (p × unmet demand units)
           + (Ordering cost — often normalized away per unit)
```

Simulation loop (conceptual — matches your SIRP's design):

```python
for each period t:
    demand_t = actual demand                     # historical replay
    on_hand  = max(on_hand + arrivals_t - demand_t, 0)
    lost_t   = max(demand_t - on_hand - arrivals_t, 0)
    holding += h * on_hand;  stockout += p * lost_t
    if t % R == 0:
        S_t = forecast_mean_t + z * forecast_std_t     # ← forecast enters HERE
        order = max(S_t - inventory_position, 0)
```

**Key design choices to be able to defend:**
- **Lost sales** (not backorder) — realistic retail; unmet demand is revenue gone
- **Same demand paths replayed for every model** — paired comparison, identical randomness; differences are *caused by the policy*, not luck
- **Same service-level target z for all models** — the forecast only changes μ̂ and σ̂ inputs
- **Sensitivity analysis** — vary h/p ratio, z, review period → check the ranking isn't an artifact of one cost setting

---

## 6 · Service Level & the Trade-off Curve

```text
cost
 │╲
 │ ╲___  ← total cost
 │     ╲＿＿＿
 │  ╱      ＼＿＿
 │╱  holding    ╲___ stockout cost
 └──────────────────────► service level
      optimal zone (interior)
```

- 100% service ⇒ effectively infinite safety stock ⇒ holding cost explodes
- The optimum sits where marginal holding cost = marginal stockout risk cost
- **Critical ratio** shortcut (newsvendor): optimal in-stock probability = p/(p+h) — the penalty-to-holding ratio *sets* the target. Higher stockout penalty → lean toward service; higher holding → lean toward lean stock

> **The examiner trap:** "Why not just target 99% service?" — *"Because service isn't free: each point of service level buys safety stock, and past the optimum the holding cost rises faster than the stockout risk falls. The right z comes from the cost structure — which is exactly what the sensitivity analysis varies."*

---

## 7 · Beyond the Simulation — the wider toolbox (name-drop fluently)

| Concept | One-liner |
|---|---|
| **Newsvendor model** | single-period order: Q* via critical ratio — the analytic backbone of the trade-off |
| **Multi-echelon (MEIO)** | optimize across DC → store network; inventory at *every* stage buffers variance |
| **ABC/XYZ classification** | value (ABC) × variability (XYZ) → differentiated policies per class |
| **Risk pooling** | centralizing stock cuts total safety stock by √n across locations |
| **Bullwhip effect** | order variance amplifies upstream — a reason smoother forecasts matter chain-wide |
| **Replenishment vs procurement lead times** | forecast horizon must cover R+L, or the policy is flying blind |

---

## ⚡ Rapid-Fire Q&A

> **What is an order-up-to policy?**
> Periodic review: each cycle, order enough to raise the inventory position to S = forecast demand over (R+L) plus safety stock. Simple, forecast-driven, operationally realistic.

> **How does forecast accuracy become inventory cost?**
> Two channels: the mean forecast sets the base order; the forecast *error* sets the safety stock. Better (and better-behaved) errors → smaller buffer → lower holding cost; biased forecasts → systematic over/understock.

> **Why can a better forecaster cost more?**
> Error *shape* matters, not just size: reactive models whipsaw orders; safety stock responds to variability; and cost penalizes tails asymmetrically. Accuracy metrics average misses; the cost model weights them.

> **Holding cost vs stockout cost — typical magnitudes?**
> Holding ~15–30% of item value annually (capital, space, obsolescence); stockout penalty = lost margin + goodwill, often several × the margin — which is why service targets skew high but not to 100%.

> **What did your sensitivity analysis vary?**
> The cost ratio (h vs p), the service-level z, and the review period — verifying the model ranking was robust to the policy settings, not tuned to one scenario.

> **What would you add with real data?**
> Lead-time variability, multi-echelon positions, promos/calendar features in the forecast, and backorder-vs-lost-sales calibration against actual POS data.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The full forecast→decision narrative | [[Forecast_to_Decision]] |
| The forecasts feeding this | [[../Forecasting/Forecast_Model_Ladder]] |
| The metric that failed to predict cost | [[../Forecasting/Forecast_Metrics_MASE]] |
| The stats behind model ranking | [[../Statistics/Model_Comparison_DMHolm]] |

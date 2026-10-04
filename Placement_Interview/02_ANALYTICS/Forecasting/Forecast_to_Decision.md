---
title: Forecast-to-Decision — The Flagship Interview Story
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [forecasting, inventory, flagship, story, tier-2]
---

# 🔄 Forecast-to-Decision — Your Flagship Story

> [!important] What this note is
> The complete narrative chain of your SIRP, told as an *interview story* — 2-minute version, 5-minute version, and every link of the chain with the defense for it. This is the single highest-leverage file in this vault for a technical interview on your research.

---

## 🎬 The 2-Minute Version (memorize the shape)

> *"My SIRP asked a simple question with an uncomfortable answer: **does the best forecast actually make the best inventory decision?**
>
> I ran a controlled experiment on two retail demand datasets — M5 (Walmart-style, intermittent-heavy) and Store Item Demand (dense, stable). Twelve models on a ladder from naive to a global LSTM, all evaluated identically: same calendar, rolling origins, 28-day horizon, scale-free metrics, and Diebold-Mariano tests with Holm correction across 91 pairwise comparisons.
>
> Each model's forecasts then fed an order-up-to inventory policy with explicit holding and stockout costs, and I simulated the downstream economics. The headline: **LSTM won forecast accuracy on both datasets — but on dense demand, a simple moving average delivered lower total inventory cost.** On M5, accuracy and economics aligned; on Store demand they diverged.
>
> The takeaway for practice: evaluate forecasting models on the *decision they drive*, not just the error they make — and for stable dense demand, simplicity can be the economically rational choice."*

---

## 🔗 The Full Chain — every link, every defense

```text
1. BUSINESS PROBLEM
2. DATA + EDA
3. DEMAND ARCHETYPES (ADI · CV²)
4. THE MODEL LADDER (12 models)
5. CONTROLLED EXPERIMENT (rolling origins)
6. METRICS (MASE · RMSSE)
7. STATISTICAL VALIDATION (DM + Holm, 91 tests)
8. INVENTORY POLICY (order-up-to)
9. COST SIMULATION (holding + stockout)
10. SENSITIVITY ANALYSIS
11. FINDINGS & THE TWIST
12. BUSINESS RECOMMENDATION
```

### 1 · Business problem

> **"Which forecasting approach produces the best *business-level inventory outcome*?"** — not "which is most accurate."
- Research questions framed as forecast-accuracy *and* decision-quality; hypotheses stated before results
- Gap: literature benchmarks accuracy; operations pays for decisions (Lit Review chapter's "forecast accuracy versus inventory decision quality")

### 2 · Data + EDA

- **M5** (Walmart Kaggle): intermittent-heavy, hierarchical (item/store/category) — the hard long tail
- **Store Item Demand**: dense daily retail — stable weekly seasonality, few zeros
- Deliberate contrast: **sparse vs dense demand environments** — so conclusions are environment-specific, not universal
- EDA: level/trend/seasonality profiles, zero-demand share, weekly patterns

### 3 · Demand archetypes

- ADI / CV² per series (cut-offs 1.32 / 0.49) → smooth / intermittent / erratic / lumpy classes
- Why: model performance *conditioned on archetype* — "is LSTM losing everywhere, or only on lumpy SKUs?" is answerable

### 4 · The model ladder

Naive · S-Naive · MA · SES · DES · TES · ARIMA · SARIMA · Croston · SBA · TSB · global LSTM
- Each rung must *earn* its complexity → the experimental logic, not a zoo of models
- Per-series stats where applicable; SARIMA on a sample (documented limitation)

### 5 · Controlled experiment

- **Same calendar for every model · rolling origins · 28-day horizon**
- Why it matters: any accuracy difference is attributable to the *model*, not the evaluation window — the fairness guarantee of the whole study
- Reproducibility: fixed seeds, frozen datasets, manifests, run logs, validation gates

### 6 · Metrics

- **MASE / RMSSE** (scale-free, zero-safe) + MAE/RMSE/WAPE + **bias** for direction
- Justification: heterogeneous series + intermittent zeros kill MAPE → [[../02_ANALYTICS/Forecasting/Forecast_Metrics_MASE]]

### 7 · Statistical validation

- **91 pairwise DM tests, Holm-corrected** + effect sizes + CIs
- Honest framing: overlapping windows ⇒ dependence ⇒ tests as *ranking evidence*, triangulated with the downstream cost simulation

### 8–9 · Inventory policy + cost

- Order-up-to (R,S); S from each model's forecast mean + error; same z, same demand paths, lost sales
- Total cost = holding + stockout, simulated per model per dataset → [[Inventory_Optimization]]

### 10 · Sensitivity analysis

- Varied cost ratio h/p, service level z, review period — ranking robustness across policy settings
- Also: robustness across inventory policies (different review structures), convergence/feasibility checks

### 11 · Findings — the twist, stated cleanly

| Dataset | Accuracy winner | Inventory-cost winner | Aligned? |
|---|---|---|---|
| **M5** (intermittent-heavy) | LSTM | LSTM | ✅ |
| **Store** (dense) | LSTM | **Moving Average** | ❌ **diverged** |

**Why the divergence (three-part argument):** accuracy gains concentrate in small misses; inventory cost is tail- and variability-driven; MA's damped ordering smooths the cost drivers. Full mechanics → [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]] §4.

**Also report the negatives (strength signal):** SARIMA's full-population cost infeasibility; LSTM failing to beat Croston-family on the sparsest archetypes; simple models competitive almost everywhere.

### 12 · Recommendation

> *"Deploy simple, forecast-informed order-up-to policies as the default; promote complex models (like the LSTM) only where archetype-level evidence shows the accuracy gain survives the cost simulation — and always A/B the economics, not the MASE."*

---

## 🛡️ The Hard Questions — with your answers

> **"Why compare 12 models? Why not just pick LSTM?"**
> The ladder *is* the experiment: complexity must earn its keep rung by rung. Without baselines, "LSTM wins" is unverifiable — and empirically false on the economic criterion.

> **"Isn't your finding just 'LSTM is bad'?"**
> The opposite: LSTM was the most *accurate* model on both datasets. The finding is about **the mapping from accuracy to economics** — which is dataset-dependent. That's a supply-chain insight, not a model verdict.

> **"Your statistical tests assume independence and your windows overlap."**
> Correct — and disclosed. DM's HAC variance mitigates serial dependence; Holm controls the 91-comparison inflation; and I treat the tests as ranking evidence triangulated with the cost simulation, not as courtroom proof.

> **"How do I know the cost result isn't a parameter artifact?"**
> The sensitivity analysis: the divergence persisted across h/p ratios, service levels, and review periods. It's a structural property of smooth-vs-reactive ordering, not a tuned corner.

> **"What would you change with 3 more months?"**
> Exogenous features (promo/calendar) into all models — especially the LSTM; quantile losses aligned to service levels; hyperparameter sweeps on lookback/architecture; and hierarchical reconciliation. (Mirrors the Future Scope chapter — designed, not executed: the LLM-assisted forecasting phase.)

> **"What did YOU personally build?"**
> The pipeline end-to-end: data prep and archetype classification, all 12 model implementations under a shared rolling-origin harness, the DM+Holm comparison layer, the inventory simulator, the sensitivity analysis — and the Streamlit decision-support dashboard exposing it. *(Point at what's yours; credit the ecosystem where due.)*

---

## 🗣️ The 30-Second Elevator (when time is short)

> *"I compared 12 forecasting models under identical rolling-origin conditions on two retail datasets, then simulated the inventory cost each forecast would cause. The best forecaster wasn't always the cheapest planner — on dense demand, a moving average beat an LSTM on cost. The lesson: score models on decisions, not errors."*

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Inventory mechanics in depth | [[Inventory_Optimization]] |
| The ladder | [[../Forecasting/Forecast_Model_Ladder]] |
| The stats layer | [[../Statistics/Model_Comparison_DMHolm]] |
| The dashboard exposing this | [[../../08_TECHNOLOGY/Streamlit]] |
| The 25 conceptual questions | [[../../16_RESUME_DEFENSE/25_Conceptual_Questions]] |

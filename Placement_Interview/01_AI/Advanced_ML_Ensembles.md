---
title: Advanced ML — Trees, Ensembles, Boosting
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [ml, ensembles, xgboost, level-4, roadmap]
---

# 🌳 Advanced ML — Trees & Ensembles

> [!important] The tabular-workhorse topic
> For structured business data, gradient-boosted trees *are* the state of the art — XGBoost/LightGBM questions are near-certain in DS interviews. This note: trees → bagging → boosting → the tuning vocabulary.

---

## 1 · Decision Trees — the atom

- **Mechanism:** recursive splits choosing the feature/threshold that maximizes purity gain
- Split criteria: **Gini impurity** $= 1 - \sum p_i^2$ (classification), **entropy/information gain**, **variance reduction** (regression)
- **Strengths:** interpretable (drawable rules), no scaling needed, handles mixed types, captures interactions natively
- **Fatal weakness:** high variance — deep trees memorize noise; tiny data change → different tree

> [!tip] The pruning vocabulary
> Pre-pruning: max_depth, min_samples_split/leaf (stop early). Post-pruning: grow fully, cut branches that don't validate (cost-complexity pruning, ccp_alpha). *"A fully grown tree has zero training error and terrible life choices."*

---

## 2 · Bagging & Random Forest — variance reduction

```text
Bootstrap sample 1 → tree 1 ┐
Bootstrap sample 2 → tree 2 ├── average (regression) / majority vote (classification)
...                         ┘
```

- **Bagging** = bootstrap + aggregate: many high-variance trees on resampled data → averaged → variance collapses
- **Random Forest adds feature subsampling** at each split (decorrelates the trees — the crucial upgrade over plain bagging)
- **OOB score:** each tree didn't see ~37% of rows (out-of-bag) → free validation estimate
- **Feature importance:** mean impurity decrease (biased toward high-cardinality features) — prefer permutation importance → [[Explainable_AI]]

**Why averaging works (the interview math):** variance of the mean of k independent estimators = σ²/k → *if* trees were independent. They're not (they share data) → feature subsampling pushes independence closer.

---

## 3 · Boosting — the sequential correction

```text
tree 1 fits y ──► residuals r₁ ──► tree 2 fits r₁ ──► residuals r₂ ──► ...
prediction = Σ (learning_rate × tree_k)
```

- **Gradient Boosting:** each new tree fits the *negative gradient of the loss* — a generalization of residual-fitting to any differentiable loss
- Sequential → errors corrected stepwise → low bias *and* controlled variance (via learning rate + depth limits)
- **Overfits differently than trees:** too many rounds / too-high learning rate → memorizes residuals

### XGBoost / LightGBM / CatBoost — the differences worth naming

| | Contribution |
|---|---|
| **XGBoost** | regularized objective (L1+L2 on leaf weights), second-order optimization, sparsity-aware splits, parallelized |
| **LightGBM** | histogram-based splits + leaf-wise growth → dramatically faster on big data; watch overfitting on small data |
| **CatBoost** | native categorical handling (ordered target statistics — leakage-aware by design), strong out-of-box |

> [!important] The bias-variance signature
> *Bagging (RF) reduces **variance** of unstable learners; boosting reduces **bias** of weak learners sequentially — and adds its own overfitting risk via round count. RF: parallel & robust default. Boosting: tuned, usually wins on tabular. That trade-off is the whole answer.*

---

## 4 · Hyperparameters That Matter (in order)

| Knob | Effect | Typical sweep |
|---|---|---|
| `n_estimators` | rounds | early stopping decides, not you |
| `learning_rate` | step size | 0.01–0.3; lower = needs more rounds |
| `max_depth` / `num_leaves` | complexity per tree | 3–8 depth |
| `subsample` / `colsample_bytree` | stochasticity | 0.7–1.0 |
| `min_child_weight` / `min_samples_leaf` | split damping | regularizer |
| `reg_alpha` / `reg_lambda` | L1/L2 on weights | light touch |

**Tuning protocol:** fixed random seed → early stopping on validation → random/Bayesian search (→ [[ML_Fundamentals]] §6) → nested CV for honest reporting (→ [[../02_ANALYTICS/Model_Validation]]).

---

## 5 · Trees vs Linear vs Neural — the honest chooser

| Situation | Pick |
|---|---|
| Tabular, mixed types, interactions, medium data | **Gradient boosting** |
| Need coefficients & inference | Linear/logistic regression |
| Tiny data, need baseline | Linear, then trees |
| Images/text/sequences | Neural networks |
| Need monotonicity constraints (price ↑ → demand ↓) | XGBoost supports them — a hidden gem worth naming |

> *"The 'neural nets beat everything' narrative is image/text folklore; on tabular business data, boosted trees remain the benchmark — my forecasting work sits in the time-series exception where LSTM earns its place on specific demand classes."* — ties your SIRP's ladder philosophy to the wider ML debate.

---

## ⚡ Rapid-Fire Q&A

> **Gini vs entropy?**
> Both measure impurity; nearly identical splits in practice. Gini slightly cheaper (no log).

> **Why does Random Forest subsample features per split?**
> Decorrelation — without it, strong features dominate every root split and the averaged trees stay correlated, keeping variance high.

> **Bagging vs boosting in one line?**
> Parallel average of strong-ish learners to cut variance vs sequential correction of weak learners to cut bias.

> **What is early stopping in XGBoost?**
> Stop adding rounds when validation loss hasn't improved for N rounds — the principled `n_estimators`.

> **How do trees handle missing values?**
> XGBoost/LightGBM learn a default direction per split — a genuine advantage over models needing imputation.

> **Feature importance — trust it?**
> Impurity importance is biased (high-cardinality, continuous features win). Use permutation importance or SHAP on held-out data. → [[Explainable_AI]]

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The fundamentals beneath | [[ML_Fundamentals]] |
| Explaining the forest | [[Explainable_AI]] |
| Evaluation & tuning discipline | [[../02_ANALYTICS/Model_Evaluation]] · [[../02_ANALYTICS/Model_Validation]] |

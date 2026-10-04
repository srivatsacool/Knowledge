---
title: Model Validation — Splits, Cross-Validation, Time Series
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [validation, cross-validation, level-3, roadmap]
---

# 🧪 Model Validation

> [!important] The organizing distinction
> **Normal ML: randomly split. Time series: respect chronology. Grouped data: respect groups.** Every validation design decision flows from one question: *what does deployment actually look like?*

---

## 1 · The Splits — the cast

```text
TRAIN        fit parameters (weights, coefficients)
VALIDATION   tune hyperparameters, early stopping, model selection
TEST         touch once, at the very end — the unbiased estimate
```

- Sizes: ~70/15/15 or 80/20 + CV inside train — ratio matters less than *discipline*
- **The test set is a sunk resource:** every peek burns it. Hyperparameter tuning on test = the test becomes a second validation set, and your "unbiased estimate" is now optimistic fiction.

---

## 2 · K-Fold Cross-Validation — the workhorse

```text
Fold 1:  [val ][tr ][tr ][tr ][tr ]
Fold 2:  [tr ][val ][tr ][tr ][tr ]     k=5: every row validated exactly once
...
Score = mean ± std across folds
```

- **Why CV:** a single split's score depends on which rows landed where; CV averages over the splits → robust estimate + a variance measure
- **Stratified K-fold:** preserve class proportions per fold (classification default)
- **Leave-One-Out:** k = n — maximal data efficiency, maximal cost, high variance; rarely worth it
- **Repeated K-fold:** shrink the variance of the estimate further

```python
from sklearn.model_selection import cross_val_score, StratifiedKFold
cv = StratifiedKFold(5, shuffle=True, random_state=42)
scores = cross_val_score(pipe, X, y, cv=cv, scoring="roc_auc")
print(f"{scores.mean():.3f} ± {scores.std():.3f}")
```

---

## 3 · When Random Splits Are Illegal

| Data structure | Correct CV | Why |
|---|---|---|
| **Time series** | rolling-origin / walk-forward | the future must never be in training |
| **Grouped entities** (multiple rows per customer/station) | GroupKFold | the same entity in train and test = memorization, inflated score |
| **Imbalanced classes** | StratifiedKFold | a fold with no positives breaks everything |
| **Data with drift** | validate on the *latest* window | the future resembles the recent past, not the average past |

> [!important] The grouped-data insight (frequently tested)
> *"If station LB22's rows appear in both train and test, the model can memorize the station — the score measures the station, not generalization. GroupKFold keeps each entity whole in one fold. My SIP's per-station analysis would require exactly this."*

---

## 4 · Time-Series Validation — the walk-forward family

```text
Rolling origin (expanding window):
[────train────][28d test]
[──────train──────][28d test]
[─────────train─────────][28d test]

Sliding window (fixed train length — when old regimes shouldn't count):
[────train────][28d test]     →  slide forward
      [────train────][28d test]
```

- **Your SIRP used rolling origins:** multiple origins → metrics across regimes → paired DM tests per origin
- **Blocked/purged CV:** when features use windows that overlap folds, *purge* the boundary rows (and optionally *embargo* after) — the finance-grade hygiene
- **Validation set for early stopping must also be chronological** — an LSTM early-stopping on a shuffled validation set is quietly cheating

→ Full mechanics: [[Forecasting/Time_Series_Fundamentals]] §6.

---

## 5 · Nested CV — tuning without lying

```text
Outer loop: estimate generalization (5 folds)
  └── Inner loop: hyperparameter search (per outer-training split)
```

- The problem it solves: *tuning on the same CV you report* inflates the score (selection bias)
- Cost: k_outer × k_inner fits — expensive; worth it when the tuning space is large
- One-line answer: *"Nested CV is how you report an honest score when hyperparameters were tuned — the outer loop never participated in any choice."*

---

## 6 · Diagnosing from the Validation Curve

| Symptom | Diagnosis | Action |
|---|---|---|
| Train high, CV low | overfitting | regularize, more data, simpler model |
| Train low, CV low | underfitting | richer model/features |
| CV score high but variance across folds high | unstable / distribution shift | investigate fold-wise, more data |
| CV good, production bad | leakage, drift, or train-serving skew | audit pipeline (→ [[Data_Leakage]], [[../08_TECHNOLOGY/MLOps]]) |

---

## ⚡ Rapid-Fire Q&A

> **Why hold out a test set at all if CV estimates performance?**
> CV guides *choices* (features, hyperparameters) — repeated use biases it. The untouched test set estimates the final, frozen model once.

> **Stratified vs group vs time split — pick per dataset.**
> Classes imbalanced → stratify; rows per entity → group; ordered → time. Defaults are wrong more often than right.

> **What is data leakage's relationship to validation?**
> Leakage is usually a *validation design failure*: preprocessing outside folds, shuffled time, shared groups. Fix the split design and most leakage dies. → [[Data_Leakage]]

> **How many folds?**
> 5 is the cost/benefit default; 10 for stability when fits are cheap; LOO only with tiny data. Time series → origins count instead.

> **Early stopping uses which set?**
> A chronological validation split — never the test set, never shuffled time.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The leakage catalogue | [[Data_Leakage]] |
| Metrics on the validated model | [[Model_Evaluation]] |
| Your executed design | [[Forecasting/Forecast_to_Decision]] |

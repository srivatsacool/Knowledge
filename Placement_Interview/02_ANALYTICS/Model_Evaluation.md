---
title: Model Evaluation — Metrics by Business Problem
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [model-evaluation, level-3, roadmap]
---

# 📊 Model Evaluation

> [!important] The rule that organizes everything
> **Never choose a metric because it's popular — choose it from the loss the business actually pays.** This note is the metric chooser's map for regression and classification.

---

## 1 · Regression Metrics

| Metric | Formula | Character |
|---|---|---|
| **MAE** | mean\|y − ŷ\| | linear penalty, robust, same units |
| **MSE / RMSE** | mean(y − ŷ)² / √ | quadratic — big misses dominate |
| **R²** | 1 − SS_res/SS_tot | variance explained vs the mean baseline |
| **Adjusted R²** | penalizes extra predictors | honest R² for model comparison |
| **MAPE** | mean \|e/y\| % | dies on zeros (→ [[Forecasting/Forecast_Metrics_MASE]]) |

**The RMSE-vs-MAE decision:** *"Are misses linearly costly (MAE) or does one huge miss cost more than ten small ones (RMSE)? For inventory: stockouts compound — I report both and watch the gap between them; a big gap signals tail-driven error."*

**R² caveats (say one):** R² can be high on a biased model; and R² on validation says nothing about *business* value. It's a sanity metric, not a decision metric.

---

## 2 · Classification Metrics — the full economy

### The confusion matrix as a cost table

```text
                 Predicted +     Predicted −
Actual +         TP              FN ← missed defect: escapes to the field
Actual −         FP ← false alarm: rework      TN
```

| Metric | Formula | Question it answers |
|---|---|---|
| Accuracy | (TP+TN)/all | usable only when classes balanced |
| **Precision** | TP/(TP+FP) | "when I flag it, am I right?" |
| **Recall (sensitivity)** | TP/(TP+FN) | "of all real cases, how many caught?" |
| **Specificity** | TN/(TN+FP) | "of all negatives, how many cleared?" |
| **F1** | harmonic mean(P, R) | balance — punishes imbalance between them |
| **ROC-AUC** | P(score₊ > score₋) | ranking quality across all thresholds |
| **PR-AUC** | area under precision-recall | better signal under heavy imbalance |

### Thresholds — where business enters

- The model outputs *probabilities*; the threshold (default 0.5) is a **decision**
- Move threshold ↓ → recall ↑ precision ↓ (catch more, alarm more)
- **Choose from the cost ratio:** missed-defect cost ≫ alarm cost → low threshold (high recall)
- ROC-AUC evaluates ranking; the operating point still needs a business decision

> [!tip] The imbalanced-data answer
> *"At 1% positives, 'all negative' scores 99% accuracy. I'd report **PR-AUC** (more informative than ROC-AUC under imbalance), precision/recall at a *business-chosen* threshold, and fix training with class weights or SMOTE — while remembering resampling goes inside the CV pipeline only."*

---

## 3 · Calibration — the forgotten half

- A model can rank perfectly (high AUC) but predict wrong probabilities ("0.9 confident" that's right 60% of the time)
- **Reliability curve** (predicted vs actual frequency) + Brier score
- Fix: Platt scaling / isotonic regression on validation data
- **Why it matters:** any downstream *decision math* (expected cost, newsvendor critical ratio) consumes probabilities — miscalibration poisons it silently

---

## 4 · Comparing Models Honestly

1. **Same data, same folds, same split** — paired comparison (your DM+Holm discipline → [[Statistics/Model_Comparison_DMHolm]])
2. **Cross-validation mean ± std** — a single split is an anecdote
3. **Statistical significance + effect size** — is the difference real and does it matter?
4. **Baselines on the table** — beat "predict the mean" / "predict majority" or explain why bother
5. **Slice the metric** — aggregate metrics hide subgroup failures (check per-segment/per-archetype)

```python
from sklearn.model_selection import cross_validate
res = cross_validate(pipe, X, y, cv=5, scoring=["f1", "roc_auc"], return_train_score=True)
# train >> test score inside CV → overfitting signal
```

---

## 5 · The Evaluation Report Template (say this structure)

```text
1. Primary metric (chosen from business loss) + value + CI
2. Secondary/guardrail metrics (calibration, per-slice)
3. Baseline comparison (how much better than dumb?)
4. Statistical test vs incumbent model
5. Failure analysis: WHERE is it wrong? (confusion matrix slices, residual plots)
```

Failure analysis is the most senior step: *"the model's 3% of errors concentrated in promo weeks — that's not noise, that's a missing feature."*

---

## ⚡ Rapid-Fire Q&A

> **Why harmonic mean for F1, not arithmetic?**
> Harmonic punishes imbalance — a model with precision 1.0, recall 0.01 deserves a bad score, not the average of a perfect and a useless number.

> **ROC-AUC vs PR-AUC — when each?**
> ROC-AUC stable and optimistic under imbalance; PR-AUC focuses on the positive class and reveals the real operating difficulty. Heavy imbalance → lead with PR-AUC.

> **Model A better accuracy, model B better recall — which deploys?**
> The one whose *cost profile* wins: write the cost of FP and FN, compute expected cost per model at the chosen threshold, decide on rupees.

> **What does R² = 0.3 mean — is the model bad?**
> It explains 30% of variance — common for noisy human systems (my SIP's R²=0.16 → 0.38 with complexity added). Judge against the baseline and the decision, not an arbitrary bar.

> **Where do predicted probabilities matter most?**
> Any downstream decision math — inventory, credit, triage. Check calibration before feeding them to a cost function.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Validation design (how to split) | [[Model_Validation]] |
| Forecasting-specific metrics | [[Forecasting/Forecast_Metrics_MASE]] |
| Statistical model comparison | [[Statistics/Model_Comparison_DMHolm]] |

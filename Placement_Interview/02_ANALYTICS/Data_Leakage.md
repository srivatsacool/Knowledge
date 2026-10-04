---
title: Data Leakage — The Silent Score Killer
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [leakage, validation, level-3, roadmap]
---

# 🔒 Data Leakage

> [!important] Why this deserves its own note
> Leakage doesn't crash anything — it **inflates your validation score and destroys the model in production**. Interviewers love it because it tests whether you've actually shipped models or only run notebooks. Your SIRP dealt with overlapping-window leakage explicitly — quote it.

---

## 1 · What Leakage Is

> [!tip] Definition
> **Any information in training that would not be available at prediction time.** The model learns patterns that exist only in your pipeline, not in the world — so validation shines and reality bites.

```text
Leaky pipeline:   score looks great ──► deploy ──► performance collapses
Honest pipeline:  score looks modest ──► deploy ──► score holds
```

---

## 2 · The Leakage Catalogue — all the flavours

| Type | Mechanism | Classic example |
|---|---|---|
| **Target leakage** | a feature contains the target (directly or derived) | "number_of_refunds" predicting churn — refunds happen *after* churn decision |
| **Temporal leakage** | future rows in training | shuffle-split on time series |
| **Preprocessing leakage** | statistics fitted on all data | scaler/encoder/imputer fitted before the split |
| **Feature leakage** | aggregation over the prediction period | "average demand in the forecast month" as a feature |
| **Window leakage** | overlapping sequence windows straddle the split | LSTM windows sharing rows across train/valid |
| **Selection leakage** | feature/hyperparameter choices made on full data | selecting features before CV, tuning on test |
| **Duplicate leakage** | near-duplicate rows in train and test | same transaction logged twice |
| **Group leakage** | same entity on both sides | patient/station rows split randomly |

### The famous cautionary tale (tell it)

> *KDD-cup style: a hospital readmission model scored 0.95 AUC in development — one feature ("department, last visit") was a near-proxy for "was readmitted." Deployed: useless. **High accuracy + simple problem = suspect leakage before celebrating.***

---

## 3 · Detection Heuristics — how to smell it

1. **Suspiciously good performance** — accuracy beyond domain plausibility
2. **Feature importance dominated by one variable** — inspect what it actually encodes
3. **Train–production score gap** — the ultimate symptom
4. **The availability test:** freeze a historical timestamp; could every feature have been *computed* then? Rewind the dataset and check
5. **Ablate the suspect feature** — if one feature carries the whole score, interrogate it
6. **Chronological holdout** — revalidate train-past/predict-future only; leakage built on random mixing collapses here

---

## 4 · Prevention — the pipeline discipline

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score

pipe = Pipeline([                 # EVERYTHING data-dependent lives inside
    ("scale", StandardScaler()),                # fit per fold
    ("select", SelectKBest(f_classif, k=20)),   # selection per fold
    ("clf", LogisticRegression(max_iter=1000)),
])
cross_val_score(pipe, X, y, cv=5)   # leakage-free by construction
```

| Rule | Kills |
|---|---|
| Preprocessing inside the pipeline / per-fold | preprocessing leakage |
| Chronological splits for time data | temporal leakage |
| Group-aware splits | group leakage |
| Shift-before-roll on time features | feature leakage |
| Selection & tuning inside CV | selection leakage |
| Deduplicate *before* splitting | duplicate leakage |
| One untouched test set | everything, as backstop |

---

## 5 · Time-Series & LSTM Specifics — your SIRP's case

- **History-only scaling:** scaler fit on the training segment only; validation/test transformed with those statistics — never the reverse
- **Window hygiene:** generate sliding windows *within* each split; windows are 28 rows long, so the first valid test window starts 28 days into the test segment — overlapping windows across the boundary would share observations between train and validation
- **Feature availability:** forecast features (promos, calendar) must be known *at forecast origin* — origin-available data only
- **Model selection leakage:** choosing the LSTM because it won on the validation set is fine; *reporting* the validation score as the result is not — the rolling-origin test estimate is the result

> [!tip] The viva sentence
> *"My SIRP's leakage controls: history-only scaling, windows generated within splits with no boundary overlap, rolling origins so every forecast is strictly out-of-sample, and frozen seeds/data so the pipeline is auditable. The cost is honesty — scores are lower than a leaky notebook's, but they survive production."*

---

## ⚡ Rapid-Fire Q&A

> **What's the most common leakage bug in practice?**
> Fitting preprocessing (scaler/encoder/imputer) on the full dataset before splitting — invisible, everywhere, fixed by pipelines.

> **How is target encoding leaky?**
> Level means computed on rows that include the row being encoded — smuggles y into X. Cross-fit (out-of-fold) encoding fixes it. → [[Feature_Engineering]]

> **Why is random CV illegal for time series?**
> Training on the future. Every downstream metric measures a fiction.

> **A model scores 0.99 AUC immediately — your first reaction?**
> Suspect leakage before celebrating: check feature availability at prediction time, ablate the top feature, revalidate on a chronological holdout.

> **How does leakage differ from overfitting?**
> Overfitting = memorizing noise *within* legitimate training data; leakage = illegitimate information crossing the train/test boundary. Both inflate train/val scores; leakage also breaks deployment specifically.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Validation design | [[Model_Validation]] |
| Feature construction rules | [[Feature_Engineering]] |
| Your leakage-controlled LSTM | [[Forecasting/LSTM_Neural_Forecasting]] |

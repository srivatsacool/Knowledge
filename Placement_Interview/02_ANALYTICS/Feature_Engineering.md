---
title: Feature Engineering & Selection — Raw Data to Model-Ready
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [feature-engineering, level-3, roadmap]
---

# ⚙️ Feature Engineering & Selection

> [!important] The leverage claim
> *"Better features beat better models"* — the most reliable empirical law in applied ML. This note: transform, encode, scale, synthesize, then *select* — without leakage.

---

## 1 · Numerical Transformations

| Transform | Use | Effect |
|---|---|---|
| **Log / log1p** | right-skewed data (revenue, demand) | compresses tails, linearizes multiplicative relations |
| Square root / Box-Cox | variance stabilization | milder than log |
| Yeo-Johnson | Box-Cox variant allowing ≤ 0 | sklearn-ready |
| **Binning / discretization** | continuous → bands | robustness, interpretability (loses granularity) |
| Rank / quantile transform | force-normal-ish, outlier-immune | destroys magnitude info |

> **Why skew matters:** linear models and distance-based methods (KNN, k-means) assume roughly comparable scales; a ₹1,00,000 feature drowns a 0–1 feature.

---

## 2 · Scaling & Normalization — fit on TRAIN only

| Method | Formula | Use |
|---|---|---|
| **Standardization** | (x − μ)/σ | default; keeps outliers visible |
| **Min-Max** | (x − min)/(max − min) | neural nets, bounded [0,1] |
| Robust scaling | (x − median)/IQR | outlier-heavy data |
| Log then scale | skew + scale together | demand/price data |

```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler().fit(X_train)      # fit on TRAIN ONLY
X_train_s = scaler.transform(X_train)
X_test_s  = scaler.transform(X_test)        # test uses train's μ, σ — always
```

> [!warning] The leakage trap, one more time
> Fitting the scaler on the full dataset leaks test-set statistics into training. Pipeline it (`Pipeline([("scale",...),("clf",...)])`) so CV folds fit the scaler on their own train portion. → [[Data_Leakage]]

---

## 3 · Categorical Encoding — pick by cardinality & model

| Method | Idea | Use / Caution |
|---|---|---|
| **One-hot** | one binary column per level | nominal + low cardinality; explodes on high-cardinality (zip codes) |
| **Ordinal** | explicit integer mapping | only for *truly ordered* (skill Level 1–5 — your SIP framework) |
| Label encoding | arbitrary integers | **trees only** — implies fake order for linear models |
| **Target (mean) encoding** | replace level with mean(y | level) | powerful, high-cardinality; *must be cross-fitted or it leaks the target* |
| Frequency encoding | count per level | simple, safe, weak |
| Hashing | fixed-width buckets | streaming/high-cardinality, collisions accepted |

> [!tip] The target-encoding leak
> *"Encoding a category with the mean of the target computed on the same rows smuggles y into X. Fix: compute the mapping on other folds (out-of-fold encoding) or smooth with a prior. This is a favorite senior-level question."*

**Your SIP example:** the 5-level skill framework is *ordinal* — Level 3 means more than Level 2 by construction. Encoding it one-hot would discard the order.

---

## 4 · Synthesized Features — where domain knowledge pays

- **Interactions:** `complexity × skill` (your SIP's risk logic), price × promo
- **Ratios:** defects per 1,000 engines (normalize by exposure!) — always ask "per what?"
- **Aggregates:** group means/max/count joined back (transform trick) — "station's historical mean defect rate"
- **Date decomposition:** day-of-week, month, is_holiday, is_payday — calendar features are free signal
- **Domain flags:** has_torque, is_verification, is_automated (exactly your complexity-index components)

### Time-series features — your specialization

```python
df["lag_1"] = df["demand"].shift(1)          # lags — the memory
df["lag_7"] = df["demand"].shift(7)          # seasonal lag
df["roll_mean_7"] = df["demand"].shift(1).rolling(7).mean()   # ← shift BEFORE rolling!
df["roll_std_28"] = df["demand"].shift(1).rolling(28).std()
df["dow"], df["month"] = df.index.dayofweek, df.index.month
```

> [!warning] The `shift(1)` before rolling detail
> A rolling mean computed *including today* leaks today's value into a feature used to predict today. Shift first, then roll. This single detail separates practitioners from tutorial-followers — and it's exactly the leakage your SIRP guarded against.

---

## 5 · Feature Selection — fewer, better features

| Family | Methods | Idea |
|---|---|---|
| **Filter** (model-free, fast) | variance threshold, correlation filter, mutual information, chi², ANOVA F | rank features statistically |
| **Wrapper** (model-in-loop, costly) | RFE, forward/backward selection | search subsets by validation score |
| **Embedded** (built into training) | L1/Lasso, tree importances, regularization | selection happens during fit |

**Selection must live inside CV** — select on the whole dataset and your validation score is fiction (selection saw the test folds). Pipeline it.

**Redundancy handling:** correlated pairs → keep the more interpretable one, or PCA/combine; VIF check for linear models.

> [!tip] The selection priorities
> 1. Domain-relevance first (would a plant expert use this?)
> 2. Stability across folds (a feature that matters only in one fold is noise)
> 3. Interpretability as a tiebreaker — business users must trust the model

---

## 6 · The Leakage Test for Every Feature

Ask three questions about each candidate feature:
1. **Would this value exist at prediction time?** (availability test)
2. **Does it encode the target directly or via aggregation over the target period?** (target test)
3. **Was it computed using data outside the training window?** (temporal test)

Any "yes" → fix or drop. This triple is the portable version of [[Data_Leakage]].

---

## ⚡ Rapid-Fire Q&A

> **One-hot vs target encoding — decision rule?**
> Low cardinality → one-hot. High cardinality (hundreds+ levels) → target/frequency encoding, cross-fitted. Trees tolerate label encoding; linear models don't.

> **Standardize vs normalize?**
> Standardize (z-score) as default — robust to scale differences; min-max when a bounded input is needed (NNs). Fit on train only.

> **How do you create features from timestamps?**
> Decompose (dow, month, hour, is_holiday), plus cyclical encoding (sin/cos) so Dec→Jan and Sun→Mon are near — a detail most candidates miss.

> **What is data leakage in feature engineering?**
> Any feature or preprocessing step using information unavailable at prediction time — target-derived aggregates, scaling on full data, rolling features without shift.

> **Does feature selection go inside or outside cross-validation?**
> Inside — selection is part of the fitted pipeline; outside means validation folds influenced feature choice.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The leakage discipline | [[Data_Leakage]] |
| Model evaluation | [[Model_Evaluation]] |
| Your applied instance | [[Forecasting/Time_Series_Fundamentals]] |

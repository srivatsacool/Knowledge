---
title: Exploratory Data Analysis — The Interrogation Craft
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [eda, analytics, level-2, tier-3]
---

# 🔬 Exploratory Data Analysis (EDA)

> [!important] Your EDA credentials
> Your SIRP's EDA characterized demand structure *before* model selection, and your SIP's EDA found the defect concentration that drove everything. The interview frame: **EDA is interrogation, not decoration — every plot must answer a question or raise one.**

---

## 1 · The Three Altitudes

| Altitude | Questions | Tools |
|---|---|---|
| **Univariate** | what does each variable look like? | histograms, boxplots, `describe`, value_counts |
| **Bivariate** | how do pairs relate? | scatter, grouped box, crosstab, correlation |
| **Multivariate** | what's the structure & interaction? | correlation matrix, pairplots, segmentation, dimensionality reduction |

**Run them in that order** — bivariate surprises usually trace back to a univariate pathology (a bimodal distribution masquerading as an average).

---

## 2 · The Systematic Checklist

```python
import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns

# ── 0. Structural census — before any plot
df.shape, df.dtypes, df.head()
df.isna().sum().sort_values(ascending=False)          # missing map
df.duplicated().sum()                                  # duplicate census
df.nunique()                                           # cardinality (IDs? constants? flags?)

# ── 1. Univariate
df.describe(percentiles=[.01, .25, .5, .75, .99])      # tails included!
df["category"].value_counts(normalize=True)
df["rate"].hist(bins=50);  sns.boxplot(x=df["rate"])

# ── 2. Bivariate
sns.scatterplot(data=df, x="complexity", y="defect_rate", hue="sub_line")
df.groupby("process_category")["defect_rate"].median().sort_values().plot.barh()
pd.crosstab(df.shift, df.defect_class, normalize="index")
df[["skill","defects","complexity"]].corr()            # Pearson — see caveat below

# ── 3. Multivariate / structure
sns.heatmap(df.select_dtypes("number").corr(), annot=True, cmap="vlag", center=0)
sns.pairplot(df.sample(500), hue="sub_line")
from sklearn.decomposition import PCA                  # only after scaling!
```

### Reading the distributions like an analyst

| Symptom | Suspicion | Follow-up |
|---|---|---|
| Long right tail | skew → use median/IQR; log-transform | outliers: error or event? |
| Two humps (bimodal) | two populations mixed | segment — don't average them away |
| Spike at a value | default/sentinel (-1, 9999, 0-as-missing) | data-quality bug hunt |
| Zero-heavy | intermittent phenomenon | ADI/CV² logic (your SIRP!) |

---

## 3 · Correlation — used honestly

- **Pearson r:** linear association only — r ≈ 0 does *not* mean "no relationship" (U-shapes, threshold effects)
- **Spearman ρ:** rank-based — monotonic but non-linear, robust to outliers; default companion to Pearson
- **Correlation matrix discipline:** n matters (r = 0.2 at n = 100,000 is "real"); correlations near ±1 → multicollinearity warning for linear models
- **Always plot the scatter** — Anscombe's quartet: four wildly different datasets, identical summary stats → [[../Statistics/Correlation]] · [[../Statistics/Causality]]

> [!tip] The sentence that upgrades EDA talk
> *"EDA generates **hypotheses**; the hypothesis tests and the model confirm or kill them. I keep the two phases separate so the test set never influences the exploration."* (Leakage discipline at the EDA stage → [[Data_Leakage]].)

---

## 4 · The Business Interrogation — the seven questions

Before any model, EDA should be able to answer:

1. **What is increasing / decreasing?** (trend, drift)
2. **What is unusual?** (outliers, anomalies — investigate, don't delete)
3. **Which segment matters most?** (Pareto / concentration — your SIP: top-30 = 44%)
4. **What explains the outcome?** (candidate drivers, correlations)
5. **Where is the opportunity?** (under-served segments, high-variance SKUs)
6. **Where is the risk?** (tails, stockout-prone classes)
7. **Is the data even trustworthy?** (missingness patterns, sentinel values, duplicates)

This checklist *is* the difference between EDA as a chapter requirement and EDA as analysis. Your SIP/SIRP both follow it — say so with examples.

---

## 5 · Time-Series EDA — your specialization's variant

```python
ts.plot()                                        # level, trend, outliers
seasonal_decompose(ts, period=7)                  # trend/seasonal/residual split
ts.groupby(ts.index.dayofweek).mean().plot()      # weekly profile
ts.rolling(30).mean().plot()                      # smoothed regime view
(ts.rolling(30).mean()/ts.rolling(30).std()).plot()  # level-dependent volatility?
(ts == 0).mean()                                  # zero share → intermittent?
plot_acf(ts, lags=56)                             # memory structure → model class hints
```

→ Full treatment: [[Forecasting/Time_Series_Fundamentals]] §7.

---

## 6 · Segmentation Preview — EDA's most valuable output

- EDA's clusters become **actionable archetypes**: demand classes (your SIRP), station risk quadrants (your SIP: skill × defect matrix, Quadrant B)
- The hand-off: *unsupervised structure discovered in EDA → supervised decisions conditioned on it* — the cleanest expression of analytics adding value → [[../01_AI/Unsupervised_Learning]]

---

## ⚡ Rapid-Fire Q&A

> **First five things on a new dataset?**
> Shape & dtypes · missing map · duplicates · target distribution · cardinality scan — before a single fancy plot.

> **Histogram vs boxplot?**
> Histogram: full distribution shape. Boxplot: compact quantile comparison *across groups*. Use both.

> **How do you treat outliers found in EDA?**
> Investigate provenance first — data error (fix/drop, documented) vs real event (keep, maybe model separately). Never silent deletion.

> **Why is correlation within a time series treacherous?**
> Shared trends make unrelated series correlate (spurious regression) — difference/detrend first; this is Level-5 territory.

> **What's the deliverable of EDA?**
> Not plots — **hypotheses and decisions**: which features, which segments, which model class, which data-quality fixes. Each with its evidence.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Statistics under the plots | [[../Statistics/Distribution_Probability]] |
| The segmentation engine | [[../01_AI/Unsupervised_Learning]] |
| Your executed EDA stories | [[../Forecasting/Time_Series_Fundamentals]] · [[../07_OPERATIONS/RCA]] |

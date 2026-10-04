---
title: Anomaly Detection — Finding the Strange
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [anomaly, level-4, roadmap]
---

# 🚨 Anomaly Detection

> [!important] Your manufacturing hook
> Quality analytics and anomaly detection are the same instinct: *most observations are normal; the interesting ones are not.* This note gives the method map — statistical, density, isolation, and time-series flavors.

---

## 1 · The Problem Shape

> **No labels (usually), extreme class imbalance, and a moving definition of "normal."**

Three framings:
- **Novelty detection:** training data is clean; flag what doesn't fit
- **Outlier detection:** unsupervised; find the strange *within* the data
- **Supervised rarity:** you have some labeled anomalies → classification with imbalance handling (rare in practice)

**The evaluation honesty:** without labels, "accuracy" is undefined — evaluation = expert review of flagged cases, known-incident replay, and precision@k on the alert queue.

---

## 2 · The Method Map

### Statistical — the classics

| Method | Mechanism | Best for |
|---|---|---|
| **Z-score** | \|x − μ\|/σ > 3 | univariate, roughly normal |
| **Modified Z (MAD)** | 0.6745(x − med)/MAD > 3.5 | univariate with outliers poisoning μ, σ |
| **IQR** | outside [Q1 − 1.5·IQR, Q3 + 1.5·IQR] | robust, distribution-free univariate |

> *"Note the self-undermining problem: outliers contaminate the mean and std that define them — which is why median/MAD versions exist."*

### Multivariate — the workhorses

| Method | Idea | Strength / Limit |
|---|---|---|
| **Isolation Forest** | random splits isolate anomalies in few cuts (they're *isolated* by construction) | fast, scales well, few knobs — the default first pick |
| **One-Class SVM** | learn the boundary enclosing normality | effective in medium dims; kernel tuning; slow at scale |
| **Local Outlier Factor (LOF)** | density relative to neighbors — local anomalies | catches context-specific outliers; O(n²)-ish |
| **Autoencoder** | reconstruction error as anomaly score | high-dim; needs clean training data; opaque |
| **Elliptic Envelope / Mahalanobis** | distance accounting for covariance | correlated Gaussian-ish features |

```python
from sklearn.ensemble import IsolationForest
iso = IsolationForest(contamination=0.02, random_state=42)
scores = iso.fit_predict(X)          # −1 = anomaly
```

### Time-series anomalies — your specialization's variant

| Type | Example | Detection |
|---|---|---|
| **Point** | demand spike (a promo — or a data bug!) | forecast residual beyond tolerance bands |
| **Contextual** | normal value, wrong context (Monday spike) | season-aware residuals |
| **Collective** | sustained level shift | CUSUM / change-point detection (PELT), control charts |

```python
resid = actual - forecast
sigma = resid[train].std()
anomaly = np.abs(resid) > 3 * sigma        # forecast-based anomaly score
```

> [!tip] The forecasting tie-in
> *"A good forecast IS an anomaly detector: the residual stream is the normalized signal, and control-chart logic on it separates special-cause from common-cause variation — the manufacturing SPC idea, restated in ML clothing."*

---

## 3 · The Hard Part — triage, not detection

1. **Alert fatigue:** anomaly detectors flag *many* things; the product is the *ranked queue* (precision@k), not the flag
2. **Anomaly ≠ defect:** an anomaly may be a data error, a genuine incident, *or* the most valuable business event (your "don't auto-delete the outlier" rule → [[../02_ANALYTICS/Python/Pandas_NumPy]] §5)
3. **Concept drift:** "normal" moves — retrain/refresh baselines on schedule (→ [[../08_TECHNOLOGY/MLOps]])
4. **Feedback loop:** route flags to experts, capture verdicts as labels → graduate to supervised rarity detection over time

---

## ⚡ Rapid-Fire Q&A

> **Isolation Forest — why does it work?**
> Random recursive splits isolate *rare, deviant* points in fewer cuts on average — anomaly score = expected isolation depth; fast, parallel, minimal tuning.

> **Z-score vs IQR vs MAD — pick per data.**
> Normal-ish, clean → z-score; skewed/outlier-contaminated → IQR or MAD (robust statistics; contamination breaks the z-score's own parameters).

> **How do you evaluate an unsupervised anomaly detector?**
> Precision@k on expert-reviewed alerts, replay of known incidents, and stability over time — accuracy is meaningless without labels.

> **Detecting a level shift, not just spikes?**
> Change-point detection (CUSUM, PELT) or control-chart run rules — point detectors miss slow drifts.

> **Where does this connect to your work?**
> Tata quality analytics: defect concentration at few stations is an anomaly-structure finding; the SIRP treats demand spikes as signal, not noise — the same don't-delete-the-outlier discipline.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The unsupervised base | [[Unsupervised_Learning]] |
| DL flavor (autoencoders) | [[Deep_Learning_Fundamentals]] |
| The outlier-ethics rule | [[../02_ANALYTICS/Python/Pandas_NumPy]] |

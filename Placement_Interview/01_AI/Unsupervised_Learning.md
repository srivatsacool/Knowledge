---
title: Unsupervised Learning — Clustering, PCA, Segmentation
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [unsupervised, clustering, level-3, roadmap]
---

# 🧩 Unsupervised Learning

> [!important] Your connection
> Your SIRP's demand-archetype classification is unsupervised thinking in practice: discover structure (ADI/CV² archetypes), then *act* on it. This note adds the formal algorithms to that instinct.

---

## 1 · The Job of Unsupervised Learning

> **Find structure without labels** — group similar things (clustering), compress redundancy (dimensionality reduction), flag the strange (anomaly detection → [[Anomaly_Detection]]).

No loss function against truth → evaluation is *indirect*: does the structure stabilize, segment usefully, and survive interpretation? Say that; it's the maturity marker.

---

## 2 · Clustering Algorithms — the chooser's table

| Algorithm | Mechanics | Use | Watch out |
|---|---|---|---|
| **K-means** | minimize within-cluster variance; alternate assign/update | default for numeric, roughly spherical clusters | must choose k; scale features!; assumes convex clusters; init-sensitive (k-means++) |
| **Hierarchical (agglomerative)** | merge nearest clusters; dendrogram | unknown k, small data, taxonomy building | O(n²); link choice (ward/average) changes shape |
| **DBSCAN** | density: core points, ε-radius, minPts | arbitrary shapes, finds noise | ε & minPts tuning; struggles with varying density |
| **Gaussian Mixture (GMM)** | soft assignment via probabilities | overlapping clusters, density estimation | choose k; assumes Gaussians |

```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

Xs = StandardScaler().fit_transform(rfm[["recency", "frequency", "monetary"]])  # ALWAYS scale
inertias = [KMeans(k, n_init=10, random_state=42).fit(Xs).inertia_ for k in range(2, 9)]
# elbow plot + silhouette score → choose k
km = KMeans(n_clusters=4, n_init=10, random_state=42).fit(Xs)
```

### Choosing k — more than the elbow

1. **Elbow (inertia):** where adding a cluster stops paying — visual, blunt
2. **Silhouette score:** cohesion vs separation, ∈ [−1, 1] — comparable across k
3. **Business actionability:** the *winning* criterion — a k that marketing/deployment can actually use beats a marginal silhouette gain

---

## 3 · Dimensionality Reduction

### PCA — the variance compressor

```text
Standardize → covariance matrix → eigenvectors (principal components) → project onto top-k
```

- Components = orthogonal directions of maximal variance; explained-variance ratio → how many to keep (90–95% typical)
- **Assumes linearity, sensitive to scaling** — standardize first, always
- Uses: visualization (2D projection), decorrelation before linear models, noise reduction, speed

| Alternative | Idea | Use |
|---|---|---|
| **t-SNE** | local-neighborhood embedding, 2D/3D | *visualization only* — distances between clusters are not meaningful globally |
| UMAP | faster, preserves more global structure | visualization + as features (carefully) |

> [!warning] The t-SNE trap
> *"Cluster gaps in a t-SNE plot can be artifacts of perplexity. It's a looking glass, not a measurement instrument — never feed t-SNE output into a downstream model."*

---

## 4 · Applications — where this earns money

| Application | Method pairing | Your world |
|---|---|---|
| **Customer segmentation** | RFM features → k-means → named segments | Zomato GTM story |
| **SKU/product segmentation** | ADI/CV²/velocity → clusters → differentiated policies | your SIRP archetypes (rules + clustering mindset) |
| **Anomaly detection** | DBSCAN noise points, isolation forest | defect/quality outliers |
| **Feature engineering** | cluster id / PCA scores as model features | everything downstream |

**The archetype discipline (your SIRP's version):** classify → evaluate models *per class* → decisions conditioned on class. Aggregate averages hide exactly the structure clustering reveals.

---

## ⚡ Rapid-Fire Q&A

> **K-means vs hierarchical vs DBSCAN — pick per situation.**
> Numeric, known-ish k, big data → k-means. Unknown k, taxonomy, small data → hierarchical. Arbitrary shapes + noise → DBSCAN. Overlapping/soft → GMM.

> **Why must you scale before k-means?**
> Distance-based: unscaled, the largest-range feature dominates every cluster assignment.

> **How do you evaluate clustering without labels?**
> Internal: silhouette, Davies-Bouldin. External: stability across resamples. Business: do segments act differently? — the criterion that actually matters.

> **What is PCA doing, conceptually?**
> Rotating axes to directions of maximal variance and keeping the top few — decorrelated, compressed features.

> **How does PCA relate to feature selection?**
> Different: selection *picks* features (interpretable); PCA *synthesizes* new ones (compressed, less interpretable). Use selection for explanation, PCA for compression.

> **Where did you use unsupervised thinking?**
> The SIRP's demand archetypes: series characterized on ADI/CV², grouped into smooth/intermittent/erratic/lumpy classes, then models evaluated per class — structure discovery driving conditioned decisions.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The supervised continuation | [[ML_Fundamentals]] |
| Anomaly flavor | [[Anomaly_Detection]] |
| The demand-archetype application | [[../02_ANALYTICS/Forecasting/Intermittent_Demand_ADI_CV2]] |

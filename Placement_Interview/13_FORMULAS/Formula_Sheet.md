---
title: Formula Sheet — Every Formula Worth Defending
type: index
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [formulas, reference, tier-2]
---

# 📐 Formula Sheet

> [!tip] Usage
> Scan top-to-bottom in ~10 minutes before any interview. Every symbol is defined in the linked deep-dive.

---

## 📊 Statistics

| Quantity | Formula |
|---|---|
| Mean / Variance / SD | $\bar{x} = \frac{\sum x_i}{n}$ · $s^2 = \frac{\sum (x_i-\bar{x})^2}{n-1}$ · $s = \sqrt{s^2}$ |
| Z-score | $z = \frac{x-\mu}{\sigma}$ |
| IQR outlier bounds | $[\,Q_1 - 1.5\,\text{IQR},\; Q_3 + 1.5\,\text{IQR}\,]$ |
| Pearson r | $r = \frac{\text{cov}(X,Y)}{\sigma_X \sigma_Y}$ |
| CV (→ CV² in SIRP) | $CV = \sigma/\mu$ |
| Standard error | $SE = s/\sqrt{n}$ |
| Confidence interval | $\bar{x} \pm t^* \cdot \dfrac{s}{\sqrt{n}}$ |
| Bayes | $P(A\|B) = \dfrac{P(B\|A)P(A)}{P(B)}$ |
| Cohen's d | $\dfrac{\bar{x}_1 - \bar{x}_2}{s_{pooled}}$ |
| Holm threshold (step i) | $p_{(i)} \le \dfrac{\alpha}{m - i + 1}$ |

---

## 📈 Regression (SIP)

| Quantity | Formula |
|---|---|
| OLS slope | $\hat{\beta} = \dfrac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sum (x_i-\bar{x})^2}$ |
| R² | $1 - \dfrac{SS_{res}}{SS_{tot}}$ |
| Adjusted R² | $1 - (1-R^2)\dfrac{n-1}{n-k-1}$ |

**SIP numbers:** slope ≈ −440 defects/skill point (CI 235–639) · R² = 0.16 → 0.38 (skill + complexity)

---

## ⏱️ Forecasting

| Metric | Formula | Benchmark |
|---|---|---|
| MAE | $\frac{1}{n}\sum \|e_t\|$ | — |
| RMSE | $\sqrt{\frac{1}{n}\sum e_t^2}$ | — |
| MAPE | $\frac{100}{n}\sum \left\|\frac{e_t}{y_t}\right\|$ | ⚠️ dies at zeros |
| WAPE | $\dfrac{\sum \|e_t\|}{\sum y_t}$ | zeros-safe |
| **MASE** | $\dfrac{\frac{1}{n}\sum \|e_t\|}{\frac{1}{N-1}\sum_{t=2}^{N}\|Y_t - Y_{t-1}\|_{\text{train}}}$ | **< 1 beats naive** |
| **RMSSE** | $\sqrt{\dfrac{\frac{1}{n}\sum e_t^2}{\frac{1}{N-1}\sum (Y_t - Y_{t-1})^2_{\text{train}}}}$ | < 1 beats naive |
| Bias | $\frac{1}{n}\sum e_t$ | ≠ 0 = systematic |
| SES | $\ell_t = \alpha y_t + (1-\alpha)\ell_{t-1}$ | |
| Holt trend | $b_t = \beta(\ell_t - \ell_{t-1}) + (1-\beta) b_{t-1}$ | |
| Croston | $\hat{y} = z/p$ (size/interval, updated on demand only) | |
| SBA | $\hat{y} = (1-\alpha/2)\, z/p$ | debiased |
| TSB | $\hat{y} = P(\text{occurs}) \times E[\text{size}]$ | P updated every period |
| DM statistic | $DM = \bar{d}/\sqrt{\widehat{Var}_{HAC}(\bar{d})}$, $d_t = L_1 - L_2$ | ~N(0,1) |

**Demand classification:** ADI = periods/non-zero-periods · CV² = (σ_sizes/μ_sizes)² · cut-offs **1.32 / 0.49** → smooth · intermittent · erratic · lumpy

---

## 🏪 Inventory

| Quantity | Formula |
|---|---|
| Safety stock | $SS = z \cdot \sigma_{R+L}$ |
| σ over exposure window | $\sigma_{R+L} = \sqrt{(R+L)\sigma_d^2 + \mu_d^2\sigma_L^2}$ |
| Reorder point | $ROP = \mu_L + SS$ |
| Order-up-to level | $S = \mu_{R+L} + z\sigma_{R+L}$; order $= S - \text{position}$ |
| EOQ | $\sqrt{\dfrac{2DK}{h}}$ |
| **Critical ratio (newsvendor)** | $= \dfrac{p}{p+h}$ → optimal service level |
| Total cost | $h \cdot \overline{inventory} + p \cdot \overline{lost\ sales}$ |

---

## 💰 Finance & GTM

| Quantity | Formula |
|---|---|
| NPV | $\sum \dfrac{CF_t}{(1+r)^t}$ |
| Break-even (units) | $\dfrac{\text{Fixed costs}}{\text{Price} - \text{Variable cost/unit}}$ |
| Contribution margin | Price − variable cost/unit |
| ROI | net gain ÷ investment |
| Payback | investment ÷ annual net inflow |
| SROI | PV(outcomes, net of deadweight/attribution) ÷ investment |
| CAC | spend ÷ new customers |
| LTV | contribution × lifetime (≈ contribution ÷ churn) |
| LTV:CAC | healthy ≈ ≥ 3:1, payback < 12 months |
| AOV | revenue ÷ orders |

---

## 🧪 A/B Testing & Power

| Quantity | Formula |
|---|---|
| Sample size per arm (α=.05, power=.8) | $n \approx 16\,\sigma^2/\Delta^2$ |
| Lift | $(T - C)/C$ |
| Proportion z-test | $z = \dfrac{\hat{p}_t - \hat{p}_c}{\sqrt{\hat{p}(1-\hat{p})(\frac{1}{n_t}+\frac{1}{n_c})}}$ |
| Precision / Recall / F1 | TP/(TP+FP) · TP/(TP+FN) · $\frac{2PR}{P+R}$ |

---

## ⚡ ML Essentials

| Quantity | Formula |
|---|---|
| MSE / MAE | mean$(y-\hat{y})^2$ / mean$\|y-\hat{y}\|$ |
| Sigmoid / Softmax | $1/(1+e^{-z})$ · $e^{z_i}/\sum_j e^{z_j}$ |
| ReLU | max(0, z) |
| Gradient step | $w \leftarrow w - \eta \nabla L$ |
| Attention | $\text{softmax}(QK^\top/\sqrt{d})V$ |
| Cosine similarity | $\dfrac{a \cdot b}{\|a\|\|b\|}$ |
| RICE score | $\dfrac{R \times I \times C}{E}$ |
| RTY | $\prod \text{FPY}_i$ (96 stations @ 99.5% → ≈ 62%) |

---

## 🔗 Navigation

| Need | Go |
|---|---|
| Story behind each metric | [[../02_ANALYTICS/Forecasting/Forecast_Metrics_MASE]] |
| Conceptual answers | [[../16_RESUME_DEFENSE/25_Conceptual_Questions]] |
| Rapid sheets | [[../14_CHEAT_SHEETS/CHEAT_INDEX]] |

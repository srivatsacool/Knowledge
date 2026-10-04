---
title: Explainable AI — SHAP, LIME, Interpretability
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [xai, interpretability, level-4, roadmap]
---

# 💡 Explainable AI (XAI)

> [!important] The business-facing argument
> For analytics roles, explainability isn't academic — it's adoption. *"The model says retrain Station LB15"* gets ignored; *"'skill gap + high defect history' drove 60% of the risk score"* gets a budget. XAI converts predictions into decisions.

---

## 1 · The Two Axes of Interpretability

| Axis | Options |
|---|---|
| **By design vs post-hoc** | interpretable models (linear, trees) vs explaining black boxes (ensembles, NNs) |
| **Global vs local** | how the model behaves *overall* vs *why this one prediction* |

**The trust ladder (say it):** *"Start with the simplest model that's adequate — a linear model is its own explanation. Earn complexity only when performance justifies it, then buy explainability back with post-hoc tools."*

---

## 2 · The Toolkit

### Feature importance — the entry level

| Method | Mechanism | Flaw |
|---|---|---|
| Impurity importance (trees) | total impurity decrease from splits on a feature | biased toward high-cardinality/continuous features |
| **Permutation importance** | shuffle one feature on *held-out data*, measure score drop | model-agnostic, honest; correlated features share credit confusingly |

```python
from sklearn.inspection import permutation_importance
r = permutation_importance(fitted_model, X_test, y_test, n_repeats=10, scoring="neg_mae")
# importance = how much the metric degrades when the feature's information is destroyed
```

### SHAP — the game-theoretic gold standard

- **Idea:** each feature's contribution = its average marginal contribution across *all possible feature orderings* (Shapley values — fair division from cooperative game theory)
- Properties: **additive** (Σ SHAP values = prediction − base value) and **consistent** — the properties that made it the standard
- **Global view:** beeswarm/summary plots (which features matter, direction of effect)
- **Local view:** waterfall for *one prediction* — "why did the model flag this station?"

```python
import shap
explainer = shap.TreeExplainer(xgb_model)          # fast exact for trees
sv = explainer.shap_values(X_test)
shap.summary_plot(sv, X_test)                      # global
shap.plots._waterfall.waterfall_legacy(explainer.expected_value, sv[0], X_test.iloc[0])  # local
```

### LIME — the local surrogate

- Fits a small interpretable model *around one prediction* (perturb the instance, see how output changes)
- Model-agnostic, intuitive; **unstable** across runs (sampling) — SHAP has largely superseded it for rigor; mention both, name the trade

### Partial dependence — the shape of the effect

- PDP: average prediction as one feature varies (marginal effect curve) — "defect rate falls roughly linearly as skill rises" — your SIP's regression story, formalized

---

## 3 · Global vs Local — when each

| Question | Tool |
|---|---|
| "Which features drive the model overall?" | SHAP summary, permutation importance |
| "Why was THIS station flagged high-risk?" | SHAP waterfall / LIME |
| "How does skill affect predictions across its range?" | PDP / ICE curves |
| "Is the model using a legitimate signal or a leak?" | importance audit — *XAI doubles as a leakage detector* → [[../02_ANALYTICS/Data_Leakage]] |

> [!important] The leakage audit trick
> *"Permutation importance that collapses when one feature is shuffled — or a single feature with SHAP dominance — is my prompt to ask what that feature really encodes. XAI is a data-quality instrument, not just a communication tool."*

---

## 4 · Interpretability by Design — sometimes skip the black box

| Model | Built-in explanation |
|---|---|
| Linear/logistic regression | coefficients = marginal effects (sign, size, CI) |
| Decision tree | drawable rules |
| GAM / EBM | shape functions per feature — accuracy near boosting, transparency built-in |
| Scorecards | points-based, industry-standard in credit |

**The regulatory angle:** in credit/insurance/HR, *the right to explanation* and fair-lending scrutiny can make glass-box models mandatory — name EBM/scorecards; it's a differentiator.

---

## 5 · Your Inventory of Explanations — tie to your work

- **SIP:** the OLS coefficient (~440 fewer defects per skill point, CI 235–639) is a *global, by-design* explanation — plus the skill×defect quadrant matrix as decision-facing XAI
- **SIRP:** "why did the model choose this forecast?" is less critical than "why does this *policy* cost less?" — the cost decomposition (holding vs stockout share) is the executive explanation layer
- **BTracker:** agent actions need explanations too — log tool calls + reasoning summaries so users can audit what the agent did and why

---

## ⚡ Rapid-Fire Q&A

> **SHAP vs permutation importance?**
> SHAP: per-prediction additive attributions with fairness guarantees; permutation: global, metric-drop based, simpler. Use SHAP for local + global rigor, permutation for a quick sanity check.

> **What do Shapley values guarantee?**
> Additivity (contributions sum to prediction minus base rate) and consistency (a feature's marginal contribution never decreases when it helps more).

> **Why is LIME less trusted?**
> Local sampling makes explanations unstable run-to-run; SHAP's Shapley framework is deterministic (for tree models) and principled.

> **Global vs local explainability — one example of each?**
> Global: "skill and complexity dominate the defect model." Local: "LB22 was flagged because complexity 0.55 + skill 2.94 pushed its risk up 40%."

> **When would you refuse a black box?**
> Regulated decisions (credit, hiring), or where stakeholder trust requires visible logic — then GAMs/scorecards over maximum accuracy.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The models being explained | [[Advanced_ML_Ensembles]] |
| Fairness & responsibility | [[Responsible_AI]] |
| Your by-design explanations | [[../02_ANALYTICS/Statistics/Regression]] |

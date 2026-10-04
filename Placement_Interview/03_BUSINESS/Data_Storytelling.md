---
title: Data Storytelling — Executive Communication & Visualization
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [storytelling, communication, visualization, level-2, tier-2]
---

# 🎤 Data Storytelling

> [!important] The force multiplier
> Your analysis is worth exactly what your audience understands of it. Data storytelling is the difference between "here are 12 models' MASEs" and "spend nothing this quarter — move six operators." This note covers the narrative craft, chart discipline, and the technical→business translation layer.

---

## 1 · The Narrative Spine — Situation → Complication → Resolution

| Beat | Job | Your SIRP example |
|---|---|---|
| **Situation** | shared, agreed context | "The line runs on layered end-of-line quality checks" |
| **Complication** | the tension, quantified | "No station-level view of skill deployment; top-30 stations carry 44% of defects" |
| **Resolution** | the answer + action | "Rank stations by skill×defect; reallocate before spending on training" |

- SCR opens *every* executive summary, slide, and viva answer
- Lead with the **answer** (pyramid principle → [[Consulting_Case_Skills]]), support with evidence, end with the ask

---

## 2 · Chart Selection — the discipline

| Intent | Chart | Kill it when |
|---|---|---|
| Trend over time | line | > 4–5 series (spaghetti) |
| Compare categories | horizontal bar | pie with > 3 slices |
| Composition | stacked bar (not pie) | many small slices |
| Distribution | histogram / box | n too small |
| Relationship | scatter (+fit) | no story in it |
| One number | big number + context | decorative gauge charts |
| Flow / process | sankey / funnel | overcomplicated |

> [!tip] Chart-choices that betray amateur work
> Dual axes without justification · truncated bar axes · pie charts of trends · rainbow color palettes · 3D anything. Each one says "decorated, not designed."

### The pre-attentive rules

1. **One accent color** — the signal is colored, the context is grey
2. **Direct labeling** beats legends where possible
3. **Annotate the insight on the chart** ("top 30 stations = 44%") — the takeaway travels with the evidence
4. **Sort bars by value**, never alphabetically by default
5. **Baseline honesty:** bars start at zero; lines may zoom

---

## 3 · The Translation Layer — technical → business

| Technical | Intermediate | Executive |
|---|---|---|
| "RMSE decreased 8%" | "typical daily demand miss is ~120 units smaller" | "we'll carry ~1 fewer week of safety stock per SKU" |
| "MASE 0.82 vs 0.91" | "beats the naive benchmark by 18% vs 9%" | "the model pays for its complexity — mostly" |
| "r = 0.41, p < 0.001" | "skill explains a real, measurable share of defect variation" | "training is a genuine quality lever — budget it on evidence" |
| "LSTM won MASE but MA won on cost" | "accuracy gains don't reach the cost drivers" | "don't buy the complex model for the dense SKUs" |

**The rule:** each audience gets the *same truth at different altitudes*. Never strip the caveat while simplifying — "mostly" and "for dense SKUs" are load-bearing words.

---

## 4 · Deck & Dashboard Structure

### The insight hierarchy (every deliverable)

```text
1. The recommendation          ← slide 1, headline, or dashboard title zone
2. The 3 supporting findings   ← each with its one killer chart
3. The evidence appendix       ← tables, methodology, robustness checks
```

- **KPI storytelling:** every dashboard answers a question its owner *repeatedly asks* — not a dump of available charts → [[../02_ANALYTICS/Power_BI/Dashboard_Design]]
- **Executive summary discipline:** ≤ 5 lines, SCR-shaped, decision-ready
- **Recommendation slides:** action + owner + horizon + expected effect + the metric that will confirm it

---

## 5 · Storytelling Under Pressure (viva & interview mode)

| Situation | Move |
|---|---|
| "So what?" from the panel | jump straight to consequence: cost, risk, or decision changed |
| Complex method questioned | explain via the *problem it solves*, not the math (DM test = "is the ranking real or noise?") |
| You don't know | "I don't have that number — here's how I'd get it and what I'd expect" — never invent (Rule 9) |
| Hostile question | agree with the valid core, reframe: "You're right that two datasets are narrow — that's why the claims are per-archetype" |

> [!important] The one thing interviewers remember
> Not your model. The sentence where your analysis changed what the business would *do*. Prepare that sentence for every project you own:
> - SIP: *"Reallocate before you train — the highest-leverage quality move costs nothing."*
> - SIRP: *"Score forecasting models on the decisions they drive — on dense demand the moving average beats the LSTM on money."*

---

## ⚡ Rapid-Fire Q&A

> **Your analysis contradicts the stakeholder's belief — how do you present it?**
> Validate their belief's origin first (it may be true in a segment I haven't cut), present the mechanism not just the number, and co-own the next step — people defend conclusions they helped shape.

> **How do you make a technical audience AND executives happy with one deck?**
> Pyramid for both: answer → evidence. Executives stop at level 1; engineers drill to the appendix. Same truth, two altitudes.

> **Chart of a 12-model comparison — what do you show?**
> Not 12 lines. A ranked bar of MASE (colored by archetype) with the cost-winner highlighted — one picture that carries the accuracy-vs-cost divergence.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Dashboard craft | [[../02_ANALYTICS/Power_BI/Dashboard_Design]] |
| Structuring & pyramid | [[Consulting_Case_Skills]] |
| Communication as production skill | [[../02_ANALYTICS/../08_TECHNOLOGY/Production_Concepts]] |

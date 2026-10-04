---
title: Tableau Fundamentals — Defense-Level Knowledge
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [tableau, bi, level-2, tier-3]
---

# 📊 Tableau Fundamentals

> [!important] The depth calibration
> Resume entry = "fundamental familiarity." You need: the mental model (dimensions/measures), LOD expressions (Tableau's signature), and the Tableau-vs-Power-BI answer. One honest session of Tableau Public before interviews makes this bulletproof.

---

## 1 · The Mental Model — VizQL & the shelf interface

> [!tip] What makes Tableau *Tableau*
> Every drag is a **query** — Tableau translates visual shelf placement (Rows, Columns, Color, Size) into queries against the data source, live. Analysis-first UX: you *see* the data while shaping the view.

```text
Columns shelf │ Rows shelf │ Marks card (type, color, size, label, tooltip)
Filters shelf │ Pages      │ "Show Me" gallery
```

- **Worksheets** (single view) → **Dashboards** (composed, interactive) → **Stories** (narrative sequence)
- Live connection vs extract (`.hyper`, in-memory — Tableau's equivalent of Import mode)

---

## 2 · Dimensions vs Measures — the foundational distinction

| | Dimension | Measure |
|---|---|---|
| What | categorical/discrete context | quantifiable, aggregated |
| Color in UI | blue pills | green pills |
| Behavior | *slices* the view | gets aggregated *within* the slice |
| Examples | station, sub-line, date | defect rate, sales, cost |

> **The one-liner:** *"Dimensions define the level of analysis; measures are the numbers aggregated at that level."* Continuous vs discrete (green vs orange vs blue) is the secondary axis of the same idea — dates can be either (discrete months vs continuous timeline).

### Calculated fields — the formula layer

```text
// row-level calculation (per row, then aggregated)
[Margin] = [Revenue] - [Cost]

// aggregate calculation (after aggregation — respects the view's level)
[Defect Rate] = SUM([Defects]) / SUM([Engines])
```

**Row-level vs aggregate calc is Tableau's version of calculated-column vs measure in Power BI** — say that mapping; it shows the concepts transferred.

---

## 3 · LOD Expressions — Tableau's signature feature

> [!important] Level of Detail — the interview topic
> LOD computes at a *specified* level of detail **independent of the view's current granularity** — the thing plain aggregations can't do.

```text
{FIXED [Store] : SUM([Sales])}              per-store total, regardless of view filters*
{INCLUDE [Item] : AVG([Sales])}             compute at view level + Item, then aggregate up
{EXCLUDE [Region] : SUM([Sales])}           compute ignoring Region in the view
```

**The canonical use case:** *"share of store total"* — numerator aggregates at view level, denominator is FIXED at store:

```text
SUM([Sales]) / SUM({FIXED [Store] : SUM([Sales])})
```

- `FIXED` — locked level (evaluates before dimension filters; context filters apply)
- `INCLUDE` — finer than the view; `EXCLUDE` — coarser than the view
- **Power BI mapping:** LOD ≈ `ALLEXCEPT`/`ALL` inside `CALCULATE` — the same "compute outside the current filter context" concept

---

## 4 · Filters & Parameters

| Concept | Behavior |
|---|---|
| **Filter order of operations** | extract → data source → context → dimension → measure filters — *order changes results* (the classic gotcha) |
| **Context filter** (grey) | creates a temp table first — huge sets filtered before LODs/extracts |
| **Parameter** | a single input value (number/list/date) that can drive calculated fields, reference lines, and **measure swapping** (`CASE [Choose Metric] WHEN … END`) |
| **Actions** | click-to-filter, click-to-highlight across sheets — dashboard interactivity without dropdowns |

**Parameter vs filter — the classic question:** *"A filter restricts data; a parameter is an input *value* the analysis references — parameters enable what-ifs (what discount = target profit?) and dynamic measure selection."*

---

## 5 · Dashboard Craft — same discipline, different tool

- **Layout containers** + floating for pixel control; device previews for responsive
- **Dashboard actions** replace slicer-clutter: filter/highlight/URL actions
- **Performance:** extracts over live where possible, reduce marks (< ~10k per view), LODs sparingly, context filters early
- **Storytelling:** same SCR pyramid as everywhere → [[../03_BUSINESS/Data_Storytelling]]

---

## 6 · Tableau vs Power BI — the honest answer

| | Tableau | Power BI |
|---|---|---|
| Philosophy | visual exploration, analyst freedom | governed enterprise reporting |
| Modeling | relationships (newer, evolving) | mature star-schema + DAX engine |
| Advanced calc | **LOD expressions** | **DAX / CALCULATE** |
| Ecosystem | Tableau Server/Public, Salesforce | Microsoft 365/Azure, cheaper per seat |
| Learning curve | visual-first, intuitive | modeling-first, steeper DAX |

> [!tip] The line to deliver
> *"Both implement the same BI principles — star schemas, measures at the right grain, governed distribution. Tableau leads on visual exploration ergonomics; Power BI on semantic modeling and ecosystem economics. The concepts transfer; I've worked primarily in Power BI (→ my DAX and star-schema depth) and know Tableau's model and LOD mechanics."* — *turns "knows both?" into a strength statement.*

---

## ⚡ Rapid-Fire Q&A

> **Dimension vs measure?**
> Slice vs aggregate — blue/green pills; the view's level of analysis vs the numbers computed at it.

> **What does FIXED LOD do that a normal calculation can't?**
> Aggregates at a locked level independent of the view's dimensions — e.g., a store-level total available on an item-level row.

> **FIXED vs INCLUDE vs EXCLUDE?**
> Locked level / finer than view / coarser than view.

> **Parameter vs filter?**
> Input value vs data restriction — parameters drive what-ifs and dynamic measures.

> **Why does filter order matter?**
> Context filters (and LOD evaluation) happen at different stages — a dimension filter after a FIXED LOD *doesn't* affect it unless promoted to context.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The deeper BI modeling knowledge | [[../02_ANALYTICS/Power_BI/Power_BI_Fundamentals]] · [[../02_ANALYTICS/Power_BI/Star_Schema]] |
| DAX ↔ LOD concepts | [[../02_ANALYTICS/Power_BI/DAX_Advanced]] |
| Dashboard storytelling | [[../03_BUSINESS/Data_Storytelling]] |

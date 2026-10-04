---
title: Power BI Cheat Sheet
type: cheat-sheet
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [power-bi, dax, cheat-sheet]
---

# 📈 Power BI Cheat

## Architecture

```text
Sources → Power Query (M, ETL) → Star Schema model → DAX measures → Report → Service (refresh, RLS)
```

**Import vs DirectQuery:** in-memory fast + scheduled refresh vs pass-through live (fresh but slower). **Query folding:** PQ steps → source SQL; check "View Native Query."

## Star schema — the rules

Facts = events with measures, grain-locked · Dims = slice axis · **1-to-many dim→fact, single-direction** · Date table marked (time intelligence requires it) · conformed dims shared across facts.

*"Flat table = storage bloat + ambiguous paths; the star separates concerns."*

## DAX — measure vs column (the #1 question)

| Measure | Calculated column |
|---|---|
| evaluated at query time in **filter context** | row-by-row at refresh, stored |
| 90% of your DAX | only for slicer categories |

```dax
Total Defects = SUM(Fact[Defects])
Defect Rate   = DIVIDE([Total Defects], [Engines])          -- DIVIDE handles /0
Defects LY    = CALCULATE([Total Defects], SAMEPERIODLASTYEAR(DimDate[Date]))
YoY %         = DIVIDE([Total Defects]-[Defects LY], [Defects LY])
Risk Band     = IF([Defect Rate] > 2000, "HIGH", "NORMAL")
```

**Filter context** = active filters on a cell · **Row context** = current row in iterators (SUMX) · **Context transition** = CALCULATE converts row→filter context — the heart of DAX.

## Visual selection

Trend→line · Compare→horizontal bar · Composition→stacked bar (not pie) · KPI→card · Distribution→histogram · Drivers→decomposition tree.

## Design rules

5-second rule (answer top-left) · one accent color, grey context · annotate the insight on the chart · drill-down (hierarchy) vs drill-through (detail page) distinct · few purposeful slicers.

## Governance

**RLS** = role filters on dimensions · scheduled refresh via **gateway** (on-prem) · workspaces→apps · incremental refresh for big facts.

## Comparisons — one line each

- **vs Tableau:** Tableau = visual exploration; PBI = modeling + ecosystem economics. Concepts transfer (LOD ↔ CALCULATE/ALL)
- **vs Excel:** Excel for touching the model; PBI for governed, refreshed distribution — Power Query is the bridge
- **vs SQL:** push heavy aggregation to the source; keep the semantic layer thin

→ Deep-dives: [[../02_ANALYTICS/Power_BI/Power_BI_Fundamentals]] · [[../02_ANALYTICS/Power_BI/DAX_Fundamentals]] · [[../02_ANALYTICS/Power_BI/Star_Schema]]

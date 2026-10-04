---
title: Dashboard Design — From Data to Business Decisions
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
tags: [power-bi, dashboard, visualization, kpi, storytelling, performance]
---

# Dashboard Design — From Data to Business Decisions

> **Definition:** A dashboard is a focused visual display of key metrics and trends that enables quick understanding and decision-making. Good dashboards answer specific business questions; bad dashboards display everything and explain nothing.

---

## INTUITION

A dashboard is not a report. A report shows everything. A dashboard shows *what matters*.

```
Bad dashboard:  47 charts, 12 tables, 3 pages, no clear narrative
                → User doesn't know where to look

Good dashboard: 5 KPIs, 3 trend charts, 1 drill-through
                → User sees the answer in 5 seconds
```

> **Key insight:** The question "what decision does this dashboard enable?" must be answered before any visual is created. If you can't name the decision, you don't need the dashboard.

---

## FUNDAMENTALS

### Dashboard Hierarchy

```
Level 1: KPI Cards (what's happening NOW?)
  → Single numbers with context (value, target, trend)
  → "Total Defects: 12,500 | Target: 10,000 | ▲ 15% vs last month"

Level 2: Trend Charts (is it getting better or worse?)
  → Line/area charts showing change over time
  → "Defect rate trend over 12 months"

Level 3: Breakdown Charts (WHY is it happening?)
  → Bar/pie/treemap showing composition
  → "Defects by station type: Short Block vs Long Block"

Level 4: Drill-through (show me the DETAILS)
  → Detailed tables for investigation
  → "All defect records for Station_01 in Q1 2026"
```

### Visual Selection Guide

| Question | Best Visual | Why |
|---|---|---|
| "How much?" | KPI card | Single number, immediate |
| "How is it trending?" | Line chart | Shows change over time |
| "What's the comparison?" | Bar chart | Easy side-by-side |
| "What's the composition?" | Pie/donut (≤5 slices) or treemap | Part-of-whole |
| "What's the relationship?" | Scatter plot | Two variables |
| "What's the distribution?" | Histogram | Frequency of values |
| "Where is it?" | Map | Geographic data |
| "What are the details?" | Table/matrix | Raw data |

### Design Principles

| Principle | What it means | Example |
|---|---|---|
| **Focus** | One dashboard = one purpose | Quality dashboard ≠ financial dashboard |
| **Hierarchy** | Most important info first | KPIs at top, details below |
| **Simplicity** | Remove chartjunk | No 3D effects, no unnecessary gridlines |
| **Consistency** | Same colors, fonts, layouts | Red always means "alert" |
| **Context** | Numbers need comparison | "12,500" means nothing without "vs target 10,000" |

---

## HOW IT WORKS — TATA MOTORS DASHBOARD

[RESUME-SOURCED — based on likely dashboard needs]

### Page 1: Quality Overview (executive)

```
┌─────────────────────────────────────────────────────┐
│  Quality KPI Dashboard — 5L Diesel Engine Assembly   │
├──────────┬──────────┬──────────┬──────────┬──────────┤
│ Total    │ Defect   │ Stations │ Top      │ Skill    │
│ Defects  │ Rate     │ Above    │ Station  │ Avg      │
│ 12,500   │ 2.3%     │ Target: 7│ #042: 340│ 3.2     │
│ ▲ 5% MoM │ ▼ 0.2pp  │ ▼ 2      │ ▲ 12%    │ ──       │
├──────────┴──────────┴──────────┴──────────┴──────────┤
│  Defect Rate Trend (12 months)                        │
│  [Line chart: declining from 3.1% to 2.3%]           │
├─────────────────────────┬─────────────────────────────┤
│  Defects by Block Type  │  Defects by Skill Level     │
│  [Bar: SB vs LB]       │  [Bar: skill 1-5 buckets]   │
└─────────────────────────┴─────────────────────────────┘
```

### Page 2: Station Analysis (analyst)

```
┌─────────────────────────────────────────────────────┐
│  Station Performance Matrix                          │
├─────────────────────────────────────────────────────┤
│  [Matrix: Station | Skill | Defects | Rate | Rank]  │
│  Sorted by defect rate, descending                   │
│  Color-coded: red (top 20), yellow (middle), green  │
├─────────────────────────────────────────────────────┤
│  Skill vs Defects Scatter Plot                       │
│  [Scatter: X=Skill, Y=Defects, Size=Volume]         │
│  Shows r = -0.41 visually                            │
├─────────────────────────────────────────────────────┤
│  Drill-through: Click station → detailed records     │
└─────────────────────────────────────────────────────┘
```

### Page 3: Workforce Analytics (HR/operations)

```
┌─────────────────────────────────────────────────────┐
│  Workforce Performance                               │
├─────────────────────────────────────────────────────┤
│  Skill Distribution    │  Skill-Defect Correlation   │
│  [Histogram: skill 1-5]│  [Scatter with trendline]   │
├─────────────────────────────────────────────────────┤
│  Training Recommendations                            │
│  [Table: Station | Current Skill | Gap | Priority]   │
└─────────────────────────────────────────────────────┘
```

---

## PERFORMANCE OPTIMIZATION

| Technique | What it does | Impact |
|---|---|---|
| **Import mode** | Load data into memory | Fastest queries, larger model |
| **DirectQuery** | Query source live | Smaller model, slower queries |
| **Aggregations** | Pre-computed summaries | Fast for overview, details on drill |
| **Bookmarks** | Saved filter states | Quick view switching |
| **Calculation groups** | Reusable DAX patterns | Consistent measures |
| **Row-level security** | Filter by user role | Security + performance |

### 1M Row Performance

[RESUME-SOURCED] Tata dashboard handled ~1M records.

```
For 1M rows:
  Import mode: 2-5 second refresh, instant queries
  DirectQuery: 3-10 second query time
  
Recommendation: Import mode with scheduled refresh (hourly or daily)
  - Data is manufacturing defects — not real-time critical
  - Import gives faster user experience
  - Refresh cadence matches business need
```

---

## WHERE IT APPLIES

| Domain | Dashboard use |
|---|---|
| Executive | KPI overview, strategic metrics |
| Operations | Production, quality, throughput |
| Finance | P&L, cash flow, budget variance |
| Sales | Pipeline, revenue, conversion |
| HR | Headcount, turnover, cost |
| Marketing | Campaign performance, funnel |

---

## RELATIONSHIPS TO BRAIN TOPICS

- [[02_ANALYTICS/Power_BI/Star_Schema]] — Schema design affects dashboard performance
- [[02_ANALYTICS/Power_BI/DAX_Fundamentals]] — Measures power the dashboard visuals
- [[02_ANALYTICS/Power_BI/DAX_Advanced]] — Advanced calculations for complex visuals
- [[07_OPERATIONS/TATA_MOTORS/Methodology]] — SIRP used dashboards for analysis

---

## COMMON PITFALLS

1. **"More charts = better dashboard"** — No. A focused dashboard with 5-7 visuals outperforms a cluttered one with 30. Every chart must earn its space.

2. **"Pie charts are always bad"** — They're bad for >5 slices or similar values. For 2-4 distinct categories, they work fine.

3. **"3D makes it look professional"** — 3D distorts perception. Always use 2D.

4. **"No context needed"** — A number without comparison is meaningless. "12,500 defects" — is that good? Bad? Compared to what? Always include context (target, previous period, benchmark).

5. **"Dashboards are set-and-forget"** — Dashboards need maintenance. As business questions change, the dashboard should evolve. Review quarterly.

---

## SOURCES

- Knaflic, C.N. (2015). *Storytelling with Data*. Wiley.
- [EXTERNAL RESEARCH] Microsoft Power BI dashboard design guidance: https://learn.microsoft.com/en-us/power-bi/

---

## INTERVIEW DEFENSE SCRIPTS

### 30-second version
> "I designed a three-page dashboard: an executive overview with KPIs and trends, a station-level analysis with a scatter plot showing the skill-defect correlation, and a workforce analytics page with training recommendations. The key design choice was starting with the business question — 'which stations need intervention?' — and building backwards to the data."

### Cross-examination
| Question | Answer |
|---|---|
| "What KPIs were on the dashboard?" | "Total defects, defect rate, stations above target, top station by defects, and average skill level. Each KPI had context — target comparison and trend." |
| "How did you handle 1M rows?" | "Import mode with scheduled refresh. Manufacturing defect data doesn't need real-time queries — hourly refresh was sufficient. Import mode gave instant query response for users." |
| "What was the refresh cadence?" | [USER INPUT REQUIRED] — "Likely daily or hourly, depending on business need. The data source was SAP HANA, which supported scheduled extracts." |
| "What decision did the dashboard enable?" | "It identified the 20 priority stations where targeted training would have the most impact. Operations managers could see at a glance which stations needed intervention and what the predicted defect reduction would be." |
| "Who used the dashboard?" | [USER INPUT REQUIRED] — "Operations managers and quality engineers. The executive page was for senior leadership." |

---
title: DAX Fundamentals — Data Analysis Expressions for Power BI
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
tags: [power-bi, dax, measures, calculated-columns, filter-context, row-context]
---

# DAX Fundamentals — Data Analysis Expressions

> **Definition:** DAX (Data Analysis Expressions) is the formula language for Power BI calculations. It operates on the data model (star schema) to create measures, calculated columns, and tables. DAX is Excel-like but far more powerful — it understands relationships, filter context, and time intelligence.

---

## INTUITION

Excel formulas operate on cells. DAX operates on *tables and columns*, with automatic awareness of relationships and filters.

```
Excel:  =SUM(A2:A100)
DAX:    =SUM(fact_defect[defect_count])

Excel:  =SUMIFS(B:B, A:A, "Station_01")
DAX:    =CALCULATE(SUM(fact_defect[defect_count]), dim_station[station_name] = "Station_01")
```

> **Key insight:** DAX formulas are *context-aware*. The same formula produces different results depending on what filters are active. This is called "filter context" — and it's the most important concept in DAX.

---

## FUNDAMENTALS

### Measures vs Calculated Columns

| Aspect | Measure | Calculated Column |
|---|---|---|
| **When calculated** | At query time (dynamic) | At data refresh time (static) |
| **Storage** | Not stored — computed on the fly | Stored in the model (takes memory) |
| **Use case** | Aggregations (SUM, COUNT, AVERAGE) | Row-level calculations |
| **Performance** | Efficient (computed only when needed) | Can be slow with large tables |
| **Example** | Total Defects = SUM(fact_defect[defect_count]) | Defect_Cost = [defect_count] × [unit_cost] |

### When to use which

```
Use a MEASURE when:
  - You need an aggregation (SUM, COUNT, AVERAGE, MAX, MIN)
  - The calculation depends on filter context
  - You want it to respond to slicers and filters
  - Example: Total Defects, Average Skill Level

Use a CALCULATED COLUMN when:
  - You need a row-level value
  - You need to use the value in further calculations or as a filter
  - The calculation doesn't depend on aggregation
  - Example: Full Name = [First Name] & " " & [Last Name]
```

### Core DAX Functions

| Category | Functions | Purpose |
|---|---|---|
| **Aggregation** | SUM, COUNT, AVERAGE, MIN, MAX, DISTINCTCOUNT | Aggregate columns |
| **Filter** | FILTER, ALL, ALLEXCEPT, KEEPFILTERS | Modify filter context |
| **Logical** | IF, SWITCH, AND, OR, NOT | Conditional logic |
| **Iterator** | SUMX, AVERAGEX, COUNTX, MAXX, MINX | Row-by-row aggregation |
| **Time Intelligence** | TOTALYTD, SAMEPERIODLASTYEAR, DATEADD | Time-based calculations |
| **Relationship** | RELATED, RELATEDTABLE | Cross-table access |

---

## HOW IT WORKS — FILTER CONTEXT

### What is filter context?

Every DAX formula executes within a *filter context* — the set of active filters that determine which rows are visible.

```
Without filters:
  Total Defects = SUM(fact_defect[defect_count])
  → 1,000,000 (all rows)

With station filter (user selects "Station_01" in slicer):
  Total Defects = SUM(fact_defect[defect_count])
  → 12,500 (only Station_01 rows)

With date filter (user selects "2026-Q1"):
  Total Defects = SUM(fact_defect[defect_count])
  → 250,000 (only Q1 rows)

With both filters:
  Total Defects = SUM(fact_defect[defect_count])
  → 3,200 (Station_01 AND Q1)
```

### What is row context?

Row context exists in calculated columns — it's the "current row" being calculated.

```
In a calculated column:
  Defect_Cost = fact_defect[defect_count] × fact_defect[unit_cost]
  
  Row context: each row's defect_count × that row's unit_cost
  The formula runs once per row.
```

### Context transition

When a measure is evaluated inside a row context (e.g., in a calculated column), the row context is converted to a filter context. This is called *context transition*.

```
CALCULATE(
    SUM(fact_defect[defect_count]),
    dim_station[complexity] = "High"
)

CALCULATE performs context transition:
  1. Takes the filter arguments
  2. Applies them as new filters
  3. Evaluates the expression with the modified context
```

---

## WORKED EXAMPLE — Tata Motors DAX

[RESUME-SOURCED — based on likely Tata dashboard needs]

### Basic measures

```dax
Total Defects = SUM(fact_defect[defect_count])

Total Stations = DISTINCTCOUNT(fact_defect[station_id])

Average Defect Rate = 
    DIVIDE(
        [Total Defects],
        [Total Engines],
        0  // fallback if division by zero
    )

Average Skill Level = AVERAGE(dim_operator[skill_level])
```

### Station-level analysis

```dax
Defects by Station = 
    CALCULATE(
        [Total Defects],
        ALLEXCEPT(dim_station, dim_station[station_name])
    )

Station Rank by Defects = 
    RANKX(
        ALL(dim_station),
        [Total Defects],
        ,
        DESC,
        DENSE
    )
```

### Skill-defect correlation (for the SIRP)

```dax
// This would typically be done in Python, but DAX can approximate:
Skill Bucket = 
    SWITCH(
        TRUE(),
        dim_operator[skill_level] <= 2, "Low",
        dim_operator[skill_level] <= 3, "Medium",
        "High"
    )

Avg Defects by Skill = 
    AVERAGEX(
        VALUES(dim_operator[skill_level]),
        [Total Defects]
    )
```

---

## WHERE IT APPLIES

| Domain | DAX use case |
|---|---|
| Sales | Revenue, growth, YoY comparison, ranking |
| Manufacturing | Defect rate, OEE, throughput, quality metrics |
| Finance | P&L, ratios, budget vs actual, variance |
| HR | Headcount, turnover, cost per employee |
| Marketing | CAC, LTV, conversion rate, funnel metrics |

---

## RELATIONSHIPS TO BRAIN TOPICS

- [[02_ANALYTICS/Power_BI/Star_Schema]] — DAX operates on the star schema model
- [[02_ANALYTICS/Power_BI/DAX_Advanced]] — CALCULATE, FILTER, context manipulation
- [[02_ANALYTICS/Power_BI/Dashboard_Design]] — DAX measures power the dashboard visuals
- [[07_OPERATIONS/TATA_MOTORS/Methodology]] — SIRP dashboard used DAX for analysis

---

## COMMON PITFALLS

1. **Using SUMX when SUM works** — SUMX iterates row-by-row; SUM is faster for simple aggregations. Use iterators only when needed.

2. **Ignoring DIVIDE** — Never use `/` for division. Use DIVIDE(numerator, denominator, fallback) to handle division by zero.

3. **Overusing calculated columns** — Calculated columns consume memory. Prefer measures for dynamic calculations.

4. **Not understanding context** — The #1 DAX mistake. If your formula returns unexpected results, the filter context is almost always the issue.

5. **Hardcoding values** — `CALCULATE(SUM(...), dim_station[station_name] = "Station_01")` breaks if station names change. Use parameters or slicers instead.

---

## SOURCES

- SQLBI (2024). DAX Guide: https://dax.guide/
- SQLBI (2023). *The Definitive Guide to DAX* (2nd ed.). Microsoft Press.
- [EXTERNAL RESEARCH] Microsoft DAX documentation: https://learn.microsoft.com/en-us/dax/

---

## INTERVIEW DEFENSE SCRIPTS

### 30-second version
> "DAX is Power BI's formula language. I used it to create measures like total defects, average defect rate, and station rankings. The key concept is filter context — the same formula produces different results depending on what slicers and filters are active. For example, 'Total Defects' shows 1 million without filters, but 12,500 when you select a specific station."

### Cross-examination
| Question | Answer |
|---|---|
| "What's the difference between a measure and a calculated column?" | "A measure is computed at query time — it responds to filters dynamically. A calculated column is computed at refresh time and stored. Measures are for aggregations; calculated columns are for row-level values." |
| "What is filter context?" | "It's the set of active filters that determine which rows a formula sees. Slicers, page filters, visual filters, and CALCULATE all modify filter context. It's why the same 'Total Defects' formula shows different numbers in different visuals." |
| "When would you use SUMX vs SUM?" | "SUM is faster for simple column sums. SUMX iterates row-by-row and is needed when the calculation per row is complex — like multiplying defect count by unit cost, then summing the results." |
| "What's DIVIDE and why not use /?" | "DIVIDE handles division by zero gracefully. =10/0 throws an error; =DIVIDE(10, 0, 0) returns 0. Always use DIVIDE for safety." |

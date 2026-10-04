---
title: SQL Interview Patterns — Solved Business Questions
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [sql, interview, level-1, critical, tier-1]
---

# 🎯 SQL Interview Patterns

> [!important] How to use this file
> These are the **solved classics** — six questions that cover ~80% of live SQL rounds. Practice writing each from a blank editor, then read the "what the interviewer is testing" line. Schema used throughout: `employees(emp_id, name, dept, salary, hire_date)`, `orders(order_id, cust_id, order_date, amount)`, `stations(stn_id, sub_line, defect_rate, complexity)`.

---

## Pattern 1 · Second-Highest Value (ranking)

```sql
SELECT DISTINCT salary
FROM   (SELECT salary,
               DENSE_RANK() OVER (ORDER BY salary DESC) AS drk
        FROM employees) t
WHERE  drk = 2;
```

**Testing:** window functions, tie handling. *Follow-up guaranteed:* "Nth?" → change `= 2` to a parameter. "Ties?" → `DENSE_RANK` shares, `ROW_NUMBER` splits.

---

## Pattern 2 · Top-N per Group

```sql
-- Highest earner per department
WITH ranked AS (
    SELECT name, dept, salary,
           ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn
    FROM employees
)
SELECT name, dept, salary FROM ranked WHERE rn = 1;
```

**Testing:** CTE + PARTITION BY. *Follow-up:* "Include ties?" → `RANK()` instead. "Top 3?" → `rn <= 3`. Real-world version: *top-3 defect stations per sub-line*.

---

## Pattern 3 · Consecutive Events (gaps & islands)

```sql
-- Customers who purchased in 3+ consecutive months
WITH t AS (
    SELECT cust_id, month_no,
           month_no - ROW_NUMBER() OVER (PARTITION BY cust_id ORDER BY month_no) AS grp
    FROM   (SELECT DISTINCT cust_id,
                   EXTRACT(YEAR FROM order_date)*12 + EXTRACT(MONTH FROM order_date) AS month_no
            FROM orders) m
)
SELECT cust_id
FROM   t
GROUP BY cust_id, grp
HAVING COUNT(*) >= 3;
```

**Testing:** the elegant trick — `value - ROW_NUMBER()` is **constant within a streak**. Group by it, measure streak length. This is *the* "hard" question of the last five years; knowing it reads as practiced.

---

## Pattern 4 · Moving Average & Growth (time series)

```sql
-- 7-day moving sales + month-over-month growth
SELECT order_date,
       SUM(amount) OVER (ORDER BY order_date
                         ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS ma_7d
FROM   daily_sales;

SELECT month, sales,
       LAG(sales) OVER (ORDER BY month)                    AS prev_m,
       ROUND(100.0*(sales - LAG(sales) OVER (ORDER BY month))
             / NULLIF(LAG(sales) OVER (ORDER BY month),0), 1) AS mom_pct
FROM   monthly_sales;
```

**Testing:** frames, LAG, NULL-safe division. *Follow-up:* "YoY?" → `LAG(sales, 12) OVER (ORDER BY month)` (or self-join on `month − 12`).

---

## Pattern 5 · Retention & Cohorts (product analytics)

```sql
-- Month-1 retention: customers active in their next calendar month
WITH cohorts AS (
    SELECT cust_id,
           EXTRACT(YEAR FROM MIN(order_date)) * 12
         + EXTRACT(MONTH FROM MIN(order_date))                AS cohort
    FROM orders GROUP BY cust_id
),
activity AS (
    SELECT o.cust_id, c.cohort,
           (EXTRACT(YEAR FROM o.order_date)*12
          + EXTRACT(MONTH FROM o.order_date)) - c.cohort      AS month_offset
    FROM orders o JOIN cohorts c ON c.cust_id = o.cust_id
)
SELECT cohort,
       COUNT(DISTINCT CASE WHEN month_offset = 0 THEN cust_id END) AS new_users,
       ROUND(100.0 * COUNT(DISTINCT CASE WHEN month_offset = 1 THEN cust_id END)
             / NULLIF(COUNT(DISTINCT CASE WHEN month_offset = 0 THEN cust_id END), 0), 1) AS retention_m1
FROM   activity
GROUP BY cohort
ORDER BY cohort;
```

**Testing:** cohort construction (first activity → anchor), conditional aggregation, NULL-safe ratios. Bridge line for your profile: *"Same shape as the funnel/retention analysis in product analytics — SQL is the extraction layer, the metric logic is identical in Pandas or Power BI."*

---

## Pattern 6 · Conditional Aggregation (pivot in SQL)

```sql
-- Category counts + share of critical stations per sub-line
SELECT sub_line,
       COUNT(*)                                                     AS stations,
       SUM(CASE WHEN complexity > 0.5 THEN 1 ELSE 0 END)            AS critical,
       ROUND(100.0 * SUM(CASE WHEN complexity > 0.5 THEN 1 ELSE 0 END)
             / COUNT(*), 1)                                         AS critical_pct,
       AVG(defect_rate)                                             AS avg_defects
FROM   stations
GROUP BY sub_line;
```

**Testing:** CASE inside aggregates. *Follow-up:* "percent of grand total?" → divide by `SUM(COUNT(*)) OVER ()`.

---

## Bonus · Deduplication (real-data hygiene)

```sql
-- Keep only the latest record per station (duplicate sensor rows)
WITH latest AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY stn_id
                              ORDER BY updated_at DESC) AS rn
    FROM station_readings
)
DELETE FROM station_readings
WHERE  (stn_id, updated_at) IN (SELECT stn_id, updated_at FROM latest WHERE rn > 1);
```

**Testing:** data engineering instinct — *before* any analysis, establish one row per entity. Mirrors your Tata cleaning step ("each of the 96 stations resolves to one consistent record").

---

## 🧭 How to Answer Live SQL Questions

1. **Restate & clarify** — "Top 3 per category — do ties count as one slot or five?"
2. **Say the shape** — "This is top-N per group, so: CTE, ROW_NUMBER over a partition, filter outside."
3. **Write the skeleton first** (`WITH ranked AS … WHERE rn <= 3`), fill details second
4. **Name the edge cases yourself** — NULLs, ties, empty groups, fan-out joins
5. **Verify out loud** — "I'd sanity-check row counts before/after the join"

> Interviewers score *reasoning visibility* as heavily as syntax. A correct query in silence scores less than a correct query narrated.

---

## ⚡ Rapid-Fire Triggers

| You hear… | You think… |
|---|---|
| "second/third highest" | `DENSE_RANK` |
| "top N per group/category" | `ROW_NUMBER` PARTITION + filter |
| "consecutive days/months" | gaps & islands (`value − ROW_NUMBER()`) |
| "month-over-month" | `LAG` + NULLIF division |
| "running total / cumulative %" | `SUM() OVER (ORDER BY …)` |
| "retention, cohorts" | first-event anchor + month offsets |
| "duplicate records" | `ROW_NUMBER` by latest timestamp |
| "share of total" | `x / SUM(x) OVER ()` |
| "customers who never ordered" | `NOT EXISTS` anti-join |
| "moving average" | frame `ROWS BETWEEN n PRECEDING AND CURRENT ROW` |

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Window function theory | [[SQL_Window_Functions]] |
| The Pandas equivalents | [[../Python/Pandas_NumPy]] |
| Product metrics (retention, funnels) | [[../../03_BUSINESS/Product_Analytics]] |

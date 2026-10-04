---
title: SQL Window Functions — Interview Deep-Dive
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [sql, window-functions, level-1, critical, tier-1]
---

# 🪟 SQL Window Functions

> [!important] The tier-one interview topic
> Window functions are the single most reliable differentiator between "learned SQL" and "can analyze in SQL." Every advanced question — top-N per group, running totals, MoM growth, deduplication — is a window function in disguise.

---

## 1 · The Mental Model

> [!tip] One sentence to internalize
> **A window function computes across a *set of related rows* — without collapsing them.**
> `GROUP BY` crushes 96 stations into 8 category rows; a window function gives every station its category-average *while keeping all 96 rows*.

```sql
SELECT stn_id, sub_line, defect_rate,
       AVG(defect_rate) OVER (PARTITION BY sub_line) AS block_avg,
       defect_rate - AVG(defect_rate) OVER (PARTITION BY sub_line) AS vs_block
FROM   stations;
-- every station row survives; each now carries its block's context
```

**Anatomy:** `fn() OVER (PARTITION BY … ORDER BY … frame)`
- `PARTITION BY` — the "group" (like GROUP BY, but rows survive)
- `ORDER BY` — defines sequence (required for ranking/lags/frames)
- frame — which rows in the partition the aggregate sees (`ROWS BETWEEN …`)

**GROUP BY vs window:** aggregates → fewer rows; windows → same rows + computed column. You *cannot* filter a window function in WHERE (it runs later) — wrap in a CTE and filter outside.

---

## 2 · The Ranking Trio — know the difference *cold*

```sql
SELECT stn_id, defect_rate,
       ROW_NUMBER() OVER (ORDER BY defect_rate DESC) AS rn,   -- 1,2,2,4  (arbitrary tiebreak)
       RANK()       OVER (ORDER BY defect_rate DESC) AS rnk,  -- 1,2,2,4  (gaps after ties)
       DENSE_RANK() OVER (ORDER BY defect_rate DESC) AS drk   -- 1,2,2,3  (no gaps)
FROM   stations;
```

| Function | Ties | Use for |
|---|---|---|
| `ROW_NUMBER()` | broken arbitrarily | **deduplication**, "pick exactly one row" |
| `RANK()` | tie → same rank, gaps follow | competition-style ranking |
| `DENSE_RANK()` | tie → same rank, no gaps | **"Nth highest" questions** |

```sql
-- Second-highest salary (the classic) — DENSE_RANK generalizes to Nth
SELECT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS drk
    FROM employees
) t WHERE drk = 2;
```

---

## 3 · Top-N per Group — the #1 pattern

```sql
-- Top 3 defect stations per process category
WITH ranked AS (
    SELECT stn_id, process_category, defect_rate,
           ROW_NUMBER() OVER (PARTITION BY process_category
                              ORDER BY defect_rate DESC) AS rn
    FROM   stations
)
SELECT * FROM ranked WHERE rn <= 3;
```

**The CTE + ROW_NUMBER + filter-outside shape appears in some form in half of all SQL interviews.** Variation: swap `ROW_NUMBER` for `RANK` when ties should share the slot ("top 3" that might return 5 rows).

---

## 4 · LAG / LEAD — row-over-row comparison

```sql
SELECT month, sales,
       LAG(sales)  OVER (ORDER BY month)                          AS prev_month,
       sales - LAG(sales) OVER (ORDER BY month)                   AS mom_delta,
       ROUND(100.0 * (sales - LAG(sales) OVER (ORDER BY month))
             / NULLIF(LAG(sales) OVER (ORDER BY month), 0), 2)    AS mom_pct,
       LEAD(sales) OVER (ORDER BY month)                          AS next_month
FROM   monthly_sales;
```

- **LAG** = previous row's value; **LEAD** = next row's
- First/last row gets NULL (supply a default: `LAG(x, 1, 0) OVER (…)`)
- **MoM/YoY, consecutive-month detection, funnel drop-offs** — all LAG

> The NULL first row is why the percent-change line uses `NULLIF` — dividing by NULL yields NULL instead of a division error, and a NULL delta is more honest than a fake zero.

---

## 5 · Aggregate Windows — running totals & moving averages

```sql
SELECT order_date, amount,
       SUM(amount) OVER (ORDER BY order_date
                         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total,
       AVG(amount) OVER (ORDER BY order_date
                         ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)        AS ma_7day
FROM   orders;
```

**Frame variants:**
- `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` — running total
- `ROWS BETWEEN 6 PRECEDING AND CURRENT ROW` — 7-day moving average
- `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` — whole partition total

**ROWS vs RANGE:** `ROWS` counts physical rows (predictable); `RANGE` includes peer rows with equal ORDER BY values. Default frame (when ORDER BY present) is `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` — with duplicate timestamps, your "7-day" average silently includes duplicates. Say this; it's a senior-level catch.

---

## 6 · The Full Pattern Library

| Pattern | Window shape |
|---|---|
| Dedup: keep latest record per key | `ROW_NUMBER() OVER (PARTITION BY key ORDER BY updated_at DESC) = 1` |
| Nth highest per group | `DENSE_RANK()` + filter |
| Top-N per group | `ROW_NUMBER()`/`RANK()` + filter |
| MoM / YoY | `LAG(x, 1)` / `LAG(x, 12)` |
| Consecutive events (login streaks) | `DATE - ROW_NUMBER() OVER (ORDER BY dt)` → group by the "streak key" |
| Running total / cumulative % (Pareto) | `SUM() OVER (ORDER BY …)` → cumulative ÷ grand total |
| % share of group | `x / SUM(x) OVER (PARTITION BY grp)` |
| Gap since previous event | `DATEDIFF(day, LAG(dt) OVER (PARTITION BY key ORDER BY dt), dt)` |
| Sessionize (30-min inactivity) | sum of `CASE WHEN gap > 30 THEN 1 ELSE 0 END OVER (ORDER BY dt)` |
| Moving average | `AVG() OVER (… ROWS BETWEEN n PRECEDING …)` |
| First/last value in group | `FIRST_VALUE` / `LAST_VALUE` (mind the frame!) |
| NTILE deciles | `NTILE(10) OVER (ORDER BY amount)` |

```sql
-- Pareto with cumulative % (your SIP defect-concentration analysis, in pure SQL)
WITH ranked AS (
    SELECT stn_id, defect_rate,
           SUM(defect_rate) OVER ()                                AS grand_total,
           SUM(defect_rate) OVER (ORDER BY defect_rate DESC)       AS running
    FROM   stations
)
SELECT stn_id, defect_rate,
       ROUND(100.0 * running / grand_total, 1) AS cum_pct   -- top 30 ≈ 44.4%
FROM   ranked;
```

---

## 7 · Pandas Equivalents — speak both dialects

| SQL window | Pandas |
|---|---|
| `ROW_NUMBER() OVER (PARTITION BY g ORDER BY x)` | `df.sort_values('x').groupby('g').cumcount() + 1` |
| `RANK()` | `df['x'].rank(method='min')` / `'dense'` |
| `LAG(x) OVER (ORDER BY d)` | `df['x'].shift(1)` (after `sort_index`) |
| `SUM() OVER (PARTITION BY g)` | `df.groupby('g')['x'].transform('sum')` |
| Running total | `df['x'].cumsum()` |
| Moving average | `df['x'].rolling(7).mean()` |

*"Same concept — broadcast group context onto rows — implemented once in the database, once in Pandas."* This bridges Level 1 and Level 2 of the roadmap and shows the concepts transferred, not memorized.

---

## ⚡ Rapid-Fire Q&A

> **Why can't I use a window function in WHERE?**
> Logical execution order: WHERE runs before SELECT, windows are computed in SELECT. Wrap the query in a CTE and filter on the window column outside.

> **ROW_NUMBER vs RANK vs DENSE_RANK — when each?**
> Dedup/pick-one → ROW_NUMBER; ranking with ties → RANK; Nth-highest → DENSE_RANK (no gaps).

> **What's the frame for a 7-day moving average?**
> `ROWS BETWEEN 6 PRECEDING AND CURRENT ROW` — and note the default is RANGE-based, which can pull in peer rows with equal sort keys.

> **How do you find consecutive-month customers?**
> `month_number - ROW_NUMBER() OVER (PARTITION BY customer ORDER BY month)` is constant within a streak; group by that key and take streaks ≥ 3.

> **LAG vs self-join?**
> LAG is cleaner and usually faster; a self-join on `month = month - 1` is the pre-window alternative (and still needed for YoY alignment in older dialects).

> **LAST_VALUE surprise?**
> Default frame ends at CURRENT ROW, so `LAST_VALUE` returns the current row unless you add `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Full solved business patterns | [[SQL_Interview_Patterns]] |
| SQL basics if any of this wobbled | [[SQL_Fundamentals]] |
| Pandas mirror | [[../Python/Pandas_NumPy]] |

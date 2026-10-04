---
title: SQL Cheat Sheet
type: cheat-sheet
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [sql, cheat-sheet]
---

# 🗄️ SQL Cheat

## Execution order (explains everything)

```text
FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT
```
Aliases usable in ORDER BY, not WHERE. Window filters need a CTE. Aggregate filters = HAVING.

## Joins

```sql
LEFT JOIN defects d ON d.stn_id = s.stn_id AND d.period = '2026-06'  -- right-table filter HERE
-- anti-join:
WHERE NOT EXISTS (SELECT 1 FROM d WHERE d.stn_id = s.stn_id)
```
Fan-out check: dup keys multiply rows — `GROUP BY key HAVING COUNT(*)>1` first.

## The ranking trio

```sql
ROW_NUMBER() -- 1,2,2,4 · dedup / pick-one
RANK()       -- 1,2,2,4 · ties share, gaps follow
DENSE_RANK() -- 1,2,2,3 · Nth-highest
```

## The 6 solved patterns

```sql
-- 2nd highest
SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) drk FROM emp) t WHERE drk=2;

-- Top-N per group
WITH r AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) rn FROM emp)
SELECT * FROM r WHERE rn <= 3;

-- Consecutive months (gaps & islands): month_no - ROW_NUMBER() OVER (PARTITION BY cust ORDER BY month_no) = streak key

-- MoM
sales - LAG(sales) OVER (ORDER BY month) / NULLIF(LAG(sales) OVER (ORDER BY month),0)

-- Running total / Pareto cumulative %
SUM(x) OVER (ORDER BY v DESC) / SUM(x) OVER ()

-- Dedup keep-latest
ROW_NUMBER() OVER (PARTITION BY key ORDER BY updated_at DESC) = 1
```

## Moving average & frames

```sql
AVG(x) OVER (ORDER BY d ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)   -- 7-day MA
-- default frame is RANGE — duplicate timestamps pull peers in (know this)
```

## NULLs — three laws

1. `NULL = NULL` → NULL (use IS NULL)
2. NULL propagates (`COALESCE` for defaults)
3. `NOT IN` with NULL in list → zero rows

## Performance

SARGable predicates (`dt >= '2026-06-01'`, not `YEAR(dt)=2026`) · index filter/join/sort cols · SELECT named columns · read the EXPLAIN · HANA: columnar + in-memory → server-side aggregation is cheap

## Trigger → pattern

| You hear | You write |
|---|---|
| "2nd/Nth highest" | DENSE_RANK |
| "top N per group" | ROW_NUMBER + filter |
| "consecutive" | gaps & islands |
| "MoM/YoY" | LAG |
| "share of total" | SUM() OVER () |
| "never ordered" | NOT EXISTS |
| "duplicates" | ROW_NUMBER by latest ts |

→ Deep-dive: [[../02_ANALYTICS/SQL/SQL_Fundamentals]] · [[../02_ANALYTICS/SQL/SQL_Window_Functions]] · [[../02_ANALYTICS/SQL/SQL_Interview_Patterns]]

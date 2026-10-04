---
title: SQL Fundamentals — Interview Deep-Dive
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [sql, level-1, critical, tier-1]
---

# 🗄️ SQL Fundamentals

> [!important] Why this matters for YOU
> Your resume claims SQL against **SAP HANA** — an enterprise in-memory columnar database. Interviewers will test whether your SQL is copy-paste-level or analytical-level. "How did you extract the SAP HANA data?" should be your easiest question of the day.

---

## 1 · The Logical Execution Order

> [!tip] Memorize this — it explains 80% of SQL errors
> Queries are *written* SELECT-first but *executed* like this:

```text
FROM / JOIN  →  WHERE  →  GROUP BY  →  HAVING  →  SELECT  →  DISTINCT  →  ORDER BY  →  LIMIT
```

Consequences:
- **Column aliases from SELECT can't be used in WHERE** (WHERE runs first) — but CAN in ORDER BY (runs last)
- **Aggregate filters go in HAVING**, row filters in WHERE
- You can filter on window functions only via a subquery/CTE (windows run after SELECT)

---

## 2 · The Core Toolkit

```sql
-- SELECT with filtering, sorting, limiting
SELECT stn_id, process_category, defect_rate
FROM   stations
WHERE  sub_line = 'LB'
  AND  defect_rate > 2500          -- row-level filter
ORDER BY defect_rate DESC
LIMIT  10;                          -- top-10 defect stations

-- Aggregation
SELECT   process_category,
         COUNT(*)                AS n_stations,
         AVG(defect_rate)        AS avg_defects,
         MAX(complexity)         AS max_cx
FROM     stations
GROUP BY process_category
HAVING   COUNT(*) >= 5;          -- group-level filter (aggregates allowed here)
```

**WHERE vs HAVING, one line:** *WHERE filters rows before grouping; HAVING filters groups after aggregation.*

**COUNT variants:** `COUNT(*)` counts rows; `COUNT(col)` skips NULLs; `COUNT(DISTINCT col)` unique values. "Count of operators per category" vs "count of stations with any defect" — the difference matters.

---

## 3 · JOINs

```sql
SELECT s.stn_id, s.complexity, d.defect_rate
FROM        stations  s
LEFT JOIN   defects   d  ON d.stn_id = s.stn_id
                        AND d.period  = '2026-06';   -- filter the RIGHT table here,
                                                     -- not in WHERE (or you kill the LEFT join)
```

| Join | Result |
|---|---|
| `INNER` | only matched rows |
| `LEFT` | all left + matches (NULL-filled) |
| `RIGHT` | all right + matches |
| `FULL` | everything from both |
| `CROSS` | every pairing (cartesian) |
| `SELF` | table joined to itself (see below) |

### The two join questions interviewers actually ask

**① Find rows in A with no match in B — two ways:**

```sql
-- anti-join via LEFT JOIN + IS NULL
SELECT s.stn_id FROM stations s
LEFT JOIN defects d ON d.stn_id = s.stn_id
WHERE d.stn_id IS NULL;

-- NOT EXISTS (usually better optimized)
SELECT stn_id FROM stations s
WHERE NOT EXISTS (SELECT 1 FROM defects d WHERE d.stn_id = s.stn_id);
```

**② Duplicate rows after a join = fan-out.** If the right table has two rows per key, your counts inflate. Diagnose with `GROUP BY key HAVING COUNT(*) > 1` *before* joining — the SQL mirror of the Pandas `validate="m:1"` habit.

### Self Join — classic: employees & managers

```sql
SELECT e.name AS operator, m.name AS supervisor
FROM   roster e
JOIN   roster m ON m.emp_id = e.supervisor_id;
```

---

## 4 · Subqueries & CTEs

```sql
WITH station_avg AS (                       -- CTE: named, readable, reusable
    SELECT sub_line, AVG(defect_rate) AS avg_rate
    FROM   stations
    GROUP BY sub_line
)
SELECT s.stn_id, s.defect_rate, a.avg_rate,
       s.defect_rate - a.avg_rate AS vs_block_avg
FROM   stations s
JOIN   station_avg a ON a.sub_line = s.sub_line
WHERE  s.defect_rate > a.avg_rate;          -- stations worse than their block average
```

**Why CTEs over inline subqueries:** readable, reusable, and debuggable one-step-at-a-time. Modern engines (including HANA) often inline them anyway — so prefer them for clarity, not performance folklore.

**Correlated subquery** — references the outer row, runs per row (expensive; often a window function in disguise):

```sql
SELECT stn_id, defect_rate
FROM   stations s
WHERE  defect_rate > (SELECT AVG(defect_rate) FROM stations WHERE sub_line = s.sub_line);
```

**EXISTS vs IN:** `IN` materializes a list (careful with NULLs — `NOT IN` with a NULL in the list returns *nothing*); `EXISTS` short-circuits per row. For anti-joins, prefer `NOT EXISTS`.

---

## 5 · CASE — conditional logic anywhere

```sql
SELECT stn_id,
       CASE
           WHEN complexity > 0.5 AND defect_rate > 2500 THEN 'CRITICAL'
           WHEN complexity > 0.5                        THEN 'COMPLEX'
           WHEN defect_rate > 2500                      THEN 'HIGH-DEFECT'
           ELSE 'NORMAL'
       END AS risk_band,
       CASE process_category
            WHEN 'Torque' THEN 1.0
            WHEN 'Verification' THEN 0.8
            ELSE 0.5
       END AS cx_weight
FROM   stations;
```

**Conditional aggregation** — the pivot-in-SQL pattern:

```sql
SELECT sub_line,
       SUM(CASE WHEN process_category = 'Torque'   THEN 1 ELSE 0 END) AS torque_stns,
       SUM(CASE WHEN process_category = 'Fitment'  THEN 1 ELSE 0 END) AS fitment_stns,
       AVG(CASE WHEN defect_rate > 2000 THEN defect_rate END)          AS avg_hot_defects
FROM   stations
GROUP BY sub_line;
```

---

## 6 · Dates & NULLs

```sql
-- Date arithmetic (HANA/ANSI-flavoured)
SELECT ADD_DAYS(CURRENT_DATE, -28)               -- your 28-day horizon
SELECT DATEDIFF(day, start_ts, end_ts)           -- cycle time
SELECT EXTRACT(YEAR FROM order_date)             -- YoY grouping key

-- YoY / MoM via self-alignment (or LAG — see window functions)
SELECT y.month, y.sales, y.sales - p.sales AS yoy_delta
FROM   monthly y JOIN monthly p
       ON  p.month = ADD_MONTHS(y.month, -12);
```

### NULL handling — the three laws

1. `NULL = NULL` is **NULL**, not TRUE → `x = NULL` never matches; use `IS NULL`
2. `NULL` propagates through arithmetic → `salary + NULL = NULL`; wrap with `COALESCE(x, 0)`
3. `NOT IN` with any NULL in the list → returns **zero rows** (law 1 at scale)

```sql
SELECT COALESCE(defect_rate, 0)          -- default value
SELECT NULLIF(actual, 0)                 -- avoid div-by-zero: actual/NULLIF(target,0)
```

> **NULL ≠ 0 ≠ empty string.** "No defect recorded" and "zero defects" are different claims — conflating them is a data-quality bug, and saying this in the interview is a senior signal.

---

## 7 · Schema Foundations

| Concept | One-liner |
|---|---|
| Primary key | uniquely identifies a row; implicitly NOT NULL |
| Foreign key | references another table's PK; enforces referential integrity |
| Normalization | 1NF atomic values → 2NF no partial dependency → 3NF no transitive dependency |
| Denormalization | deliberate duplication for read speed (analytics/BI marts are denormalized) |
| Index | B-tree lookup structure — speeds reads, slows writes |
| View | saved query, no storage; materialized view = stored + refreshable |
| Transaction | ACID unit of work: Atomic, Consistent, Isolated, Durable |

**Why analytics databases lean denormalized (star schema):** joins are the cost; wide fact tables with snapshotted dimensions trade storage for scan speed. This sentence bridges you straight into Power BI modeling.

---

## 8 · Query Performance — think like the optimizer

1. **Index the columns you filter/join/sort on** — but every index taxes writes
2. **SARGable predicates only** — `WHERE dt >= '2026-06-01'` uses an index; `WHERE YEAR(dt) = 2026` wraps the column in a function and scans
3. `SELECT *` drags columns you never use — name them
4. Filter early (subquery → CTE), aggregate at the source
5. `EXPLAIN` / `EXPLAIN PLAN` — *read the plan, don't guess*; look for scans on big tables
6. In **columnar stores like HANA**, aggregation over millions of rows is cheap (column pruning + compression) — a different performance model than row stores

> [!tip] The HANA flex
> *"SAP HANA is in-memory and columnar: columns are compressed and read independently, so aggregate queries over big operational tables are fast without heavy indexing — which is why the extraction queries could group and filter server-side before anything reached Python."*

---

## ⚡ Rapid-Fire Q&A

> **DELETE vs TRUNCATE vs DROP?**
> DELETE = DML, row-by-row, logged, can have WHERE; TRUNCATE = deallocates all rows fast, no WHERE; DROP = removes the table itself.

> **WHERE vs HAVING?**
> Rows before grouping vs groups after aggregation.

> **UNION vs UNION ALL?**
> UNION de-duplicates (sorts/hashes — costs); UNION ALL keeps everything (fast). Use ALL unless dedup is required.

> **Find the second-highest salary?**
> `SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp)` — or `DENSE_RANK() OVER (ORDER BY salary DESC) = 2`. *(Second form generalizes to Nth.)*

> **Primary key vs unique key?**
> Both enforce uniqueness; a table has one PK (never NULL) but many unique constraints (NULLs allowed in most engines).

> **Why is my LEFT JOIN behaving like an INNER JOIN?**
> You put a right-table predicate in WHERE instead of ON — the NULL rows get filtered out.

> **When would you denormalize?**
> Read-heavy analytics: star schemas, reporting marts, pre-joined dashboards.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Window functions (the interview tier) | [[SQL_Window_Functions]] |
| Solved patterns & business queries | [[SQL_Interview_Patterns]] |
| Pandas mirror of these ops | [[../Python/Pandas_NumPy]] |
| HANA context | [[../../08_TECHNOLOGY/SAP_HANA]] |

---
title: Pandas & NumPy — Interview Deep-Dive
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [pandas, numpy, level-1, critical, tier-1]
---

# 🐼 Pandas & NumPy

> [!important] Why this matters for YOU
> Every project on your resume — Tata defect analytics (~1M records), M5/Store demand SIRP, SAP HANA extraction — is a Pandas story. Interviewers know analysts *live* in these libraries; this is where "knows Python" gets separated from "uses Python for data."

---

## 1 · NumPy — the engine underneath

### Arrays vs Lists

```python
import numpy as np
arr = np.array([1.0, 2.0, 3.0])
```

| Property | Python list | NumPy array |
|---|---|---|
| Memory | pointers to objects | contiguous typed buffer |
| Speed | Python-loop slow | C-loop fast (~50–100×) |
| Element-wise ops | needs comprehension | `arr * 2` just works |
| Homogeneity | mixed types OK | one dtype |

### Vectorization & Broadcasting

**Vectorization**: apply the operation to the whole array at once — the loop runs in optimized C.

```python
defects = np.array([3147, 2972, 2914, 2851, 2798])
z = (defects - defects.mean()) / defects.std()     # z-scores, one line, no loop
```

**Broadcasting**: NumPy stretches smaller arrays across bigger ones *without copying*.

```python
rates = np.array([[1500., 2000.],      # shape (2,3) minus shape (3,)
                  [2500., 1000.],
                  [ 900., 3000.]])
baseline = np.array([1000., 1500.])
excess = rates - baseline               # baseline broadcast across rows → shape (3,2)
```

Broadcasting rules: dimensions align from the **right**; a dimension matches if equal or 1; size-1 dims are stretched.

### Core toolkit

```python
a.reshape(3, 4)        a.T                  # shape surgery
a.mean(0), a.std(0)                        # axis-wise stats (0 = down columns)
np.percentile(defects, [25, 50, 75])       # quantiles — IQR outlier logic
np.where(rates > 1500, "high", "low")      # vectorized if/else
boolean_mask = rates[rates > 1500]         # filtering
np.random.default_rng(20260715)            # modern seeded RNG (SIRP reproducibility)
```

**View vs copy — the silent bug:** slicing returns a **view** (shares memory); fancy indexing returns a **copy**. `a[0:3] = 0` changes the original; `a[[0,1,2]] = 0` doesn't.

---

## 2 · Pandas — DataFrame as a way of thinking

### The two objects

- **Series**: one labeled column (Index + values + dtype)
- **DataFrame**: dict of Series sharing one Index — your station-level analytical table

### Creation & inspection ritual

```python
import pandas as pd
df = pd.read_excel("Tata_5L_Diesel_Belt_Data.xlsx", sheet_name="stations")

df.head(), df.shape, df.dtypes, df.memory_usage(deep=True)
df.describe(include="all")            # numeric + categorical summary
df["category"].value_counts(normalize=True)   # e.g. Fitment 44.8%, Torque 20.8%
df.isna().sum().sort_values(ascending=False)  # missing-value census first, always
```

### Selection — `loc` vs `iloc` (asked in nearly every interview)

```python
df.loc[df.complexity > 0.5, ["stn_id", "defect_rate"]]  # label/boolean based
df.iloc[0:5, 0:2]                                        # positional (end-exclusive)
```

> **Don't use chained indexing** `df[df.a>1]["b"] = x` — it may operate on a copy and silently do nothing. One `.loc` call, or it's a bug.

### Filtering & querying

```python
hot = df[(df.complexity > 0.5) & (df.defect_rate > 2500)]      # & | ~ with parentheses!
hot = df.query("complexity > 0.5 and defect_rate > 2500")      # same thing, readable
top10 = df.nlargest(10, "defect_rate")                          # Pareto top-10 stations
```

---

## 3 · The Big Four Operations

### ① groupby — split · apply · combine

```python
# mean complexity by sub-line (SB 0.095 vs LB 0.157 — real SIP number)
df.groupby("sub_line")["complexity"].agg(["mean", "max", "count"])

# multiple named aggregations — interview favourite syntax
df.groupby("process_category").agg(
    n_stations=("stn_id", "count"),
    mean_defects=("defect_rate", "mean"),
    max_complexity=("complexity", "max"),
)
```

**Interview line:** *"groupby follows split-apply-combine: split rows by key, apply a reduction per group, combine results into one Series/DataFrame. `transform` returns the same shape as the input — that's how you broadcast group means back onto every row."*

```python
df["grp_mean"] = df.groupby("sub_line")["defect_rate"].transform("mean")  # same shape
```

### ② merge — SQL joins, Pandas syntax

```python
pd.merge(stations, defects, on="stn_id", how="left", validate="one_to_one")
```

| `how=` | Keeps | Analyst's note |
|---|---|---|
| `inner` | matched keys only | default — can silently drop rows! |
| `left` | all left rows | your stations survive even with no defect record |
| `outer` | everything | union; expect NaNs |
| `cross` | cartesian | pairwise comparisons |

> [!warning] The classic silent-data-loss bug
> Duplicate keys in the right table multiply rows (fan-out). Guard with `validate="m:1"` or check `len(df)` before and after every merge. In a defect pipeline this bug fabricates volumes out of thin air.

Also know: `df.join()` (index-based), `pd.concat([df1, df2], axis=0, ignore_index=True)` (stacking months of data).

### ③ pivot — reshape wide

```python
pd.pivot_table(df, index="process_category", columns="sub_line",
               values="defect_rate", aggfunc="mean", margins=True)
df.pivot_table(...).reset_index()      # back to tidy long form
pd.melt(df, id_vars="stn_id")          # wide → long (the reshape interviewers love)
```

### ④ time-series — your SIRP home turf

```python
df["date"] = pd.to_datetime(df["date"], errors="coerce")
ts = df.set_index("date").sort_index()

ts.resample("MS")["demand"].sum()              # monthly totals
ts["demand"].rolling(7).mean()                  # 7-day moving average
ts["demand"].shift(28)                          # the 28-day lag — lookback/lead features
ts["demand"].diff(365)                          # YoY difference
ts.asfreq("D").interpolate()                    # fill calendar gaps
```

**Why sorting the index first matters:** rolling/shift/diff assume chronological order. Unsorted, they compute over scrambled time — a data-leakage-shaped bug that produces *plausible garbage*.

---

## 4 · Missing Data — a decision, not a default

```python
df.isna().sum() / len(df)                      # per-column missing %
df.dropna(subset=["stn_id"])                   # drop where key is missing
df["skill"].fillna(df["skill"].median())       # numeric imputation
df["category"].fillna(df["category"].mode()[0])
df["demand"] = df["demand"].ffill()            # forward-fill (time series!)
df["demand"] = df["demand"].interpolate(method="time")
```

| Method | When right | When dangerous |
|---|---|---|
| drop rows | missing < 5%, random | biases if missingness is informative |
| drop column | >60% missing, low value | throws away weak signal |
| mean/median | quick, MCAR-ish | shrinks variance; never for time series |
| ffill/bfill | time series | propagates stale values |
| interpolation | smooth, regular series | invents fake dynamics at gaps |
| model-based (KNN/MICE) | large, structured | leak risk — fit on train only |

> [!tip] The interview sentence
> *"First I ask **why** it's missing — MCAR, MAR, or MNAR. A missing defect record might mean 'no defects' or 'no inspection', and those are opposite facts. The treatment follows the reason."*

---

## 5 · Data Cleaning Playbook

```python
df = df.drop_duplicates()                          # exact dupes
df["stn_id"] = df["stn_id"].str.strip().str.upper()   # " lb22 " → "LB22"
df["defect_rate"] = pd.to_numeric(df["defect_rate"], errors="coerce")
df["date"] = pd.to_datetime(df["date"], format="mixed", errors="coerce")
df["category"] = df["category"].replace({"Torque/Verify": "Torque"})   # category harmonization
```

**Outlier detection, three ways:**

```python
q1, q3 = df["rate"].quantile([0.25, 0.75]); iqr = q3 - q1
iqr_out  = df[(df["rate"] < q1 - 1.5*iqr) | (df["rate"] > q3 + 1.5*iqr)]
z_out    = df[np.abs(stats.zscore(df["rate"])) > 3]
biz_out  = df[df["rate"] > df["rate"].quantile(0.99)]
```

> [!important] Never auto-delete an outlier
> An outlier is either a data error **or the most important business event in the dataset** — a line stoppage, a record demand spike. Investigate first; treat second. (This is also exactly the "intermittent demand spike" logic in your SIRP.)

**DTypes matter:** `category` dtype shrinks repeated strings ~10×; `int32`/`float32` halve memory; parse dates at read time. For ~1M rows: `pd.read_excel(..., dtype={...}, parse_dates=[...], usecols=[...])` avoids loading what you'll discard.

---

## 6 · Performance — the interview section

```python
# ❌ row-wise Python loop
for i, row in df.iterrows():
    df.at[i, "risk"] = f(row)

# ✅ vectorized
df["risk"] = np.where(df.complexity > 0.5, df.complexity * df.skill, 0)

# ✅ last resort, row-wise elementwise: still faster than iterrows
df["risk"] = df.apply(lambda r: f(r), axis=1)
```

| Tool | Use |
|---|---|
| vectorization | always first |
| `df.itertuples()` | if you *must* loop (10× faster than `iterrows`) |
| `query`/`eval` | large frames, complex filters |
| `dtype` optimization | memory before speed |
| `pd.read_csv(chunksize=...)` | files bigger than RAM |

**Why is Pandas fast?** Underneath: NumPy contiguous arrays and C loops; operations release the GIL. **Pandas vs SQL?** SQL for the extract/aggregation at the source (your SAP HANA step); Pandas for multi-step exploratory transforms where intermediate inspection matters.

---

## 7 · SIRP / SIP Tie-ins — say these out loud

- **Station cleaning:** reconciling `SB1/LB1` shorthand into one consistent record per station → `str.strip().str.upper()` + `drop_duplicates(subset="stn_id")`
- **Pareto:** `df.nlargest(30, "defect_rate")["defect_rate"].sum() / df["defect_rate"].sum()` → 44.4% from top-30 stations
- **Correlation & OLS:** skill–defect r = 0.41; `np.polyfit` / SciPy for the ~440-defects-per-skill-point slope
- **SIRP demand data:** 28-day lookback windows via `shift()`, rolling statistics via `rolling()`, history-only scaling to avoid leakage
- **Reproducibility:** `np.random.default_rng(seed)` — every modelled number regenerable from the seed

---

## ⚡ Rapid-Fire Q&A

> **`loc` vs `iloc`?**
> `loc` = label/boolean-based, **end-inclusive**; `iloc` = positional, end-exclusive.

> **merge vs concat vs join?**
> `merge` = key-based SQL join; `concat` = stack along an axis; `join` = index-based merge convenience.

> **groupby vs transform?**
> `agg` shrinks to one row per group; `transform` returns same-shape output aligned to original rows.

> **Why did my merge triple my row count?**
> Duplicate join keys in one side — a many-to-many fan-out. Check with `validate=` and length checks.

> **View vs copy?**
> Slices are views (share memory); boolean/fancy indexing copies. Chained assignment writes to a copy and vanishes.

> **How do you handle a 10 GB CSV?**
> `chunksize` streaming, `usecols`/`dtype` to cut load, or move the aggregation into SQL/PySpark — Pandas isn't the right tool past RAM.

> **One-hot vs label encoding in Pandas?**
> `pd.get_dummies` for nominal, ordered `astype("category")` for ordinal — and fit encoding on train data only.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Foundations | [[Python_Fundamentals]] |
| Analytical SQL (the extraction side) | [[../SQL/SQL_Fundamentals]] |
| Statistics on top of this | [[../Statistics/Distribution_Probability]] |
| The SIRP pipeline | [[../Forecasting/Time_Series_Fundamentals]] |

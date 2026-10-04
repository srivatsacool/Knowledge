---
title: PySpark — Distributed Data Processing
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [pyspark, spark, level-8, tier-3]
---

# ⚡ PySpark

> [!important] Don't leave it as a keyword
> Resume lists PySpark — the question is *"when does Pandas stop working and Spark start, and why?"* Know the architecture and the lazy-evaluation story cold.

---

## 1 · The Architecture — driver + executors

```text
        ┌───────────── Driver ─────────────┐
        │ SparkSession · DAG scheduler     │   ← your python process
        └───────┬──────────────┬───────────┘
                ▼              ▼
        ┌────────────┐  ┌────────────┐
        │ Executor 1 │  │ Executor 2 │   ← JVM workers, each with
        │ tasks·cache│  │ tasks·cache│     partitions of the data
        └────────────┘  └────────────┘
```

- **Driver:** builds the execution plan (DAG), splits work into *tasks*, schedules them
- **Executors:** run tasks on data *partitions* in parallel, keep cached blocks
- **Cluster managers:** YARN/Kubernetes/Mesos allocate the resources

> [!tip] The one-sentence definition
> *"Spark is an in-memory distributed compute engine: data is split into partitions across executors, and the driver coordinates a DAG of parallel tasks over them — Pandas parallelism is one core and one machine; Spark is N machines."*

---

## 2 · RDD → DataFrame → Spark SQL

| Layer | What | Use |
|---|---|---|
| **RDD** | low-level distributed collection, no schema | rarely directly — understand for interviews |
| **DataFrame** | distributed, schema'd, Catalyst-optimized | **your default** |
| **Spark SQL** | SQL on DataFrames | analysts + pipelines |

```python
from pyspark.sql import SparkSession, functions as F, Window

spark = SparkSession.builder.appName("defects").getOrCreate()
df = spark.read.parquet("s3://plant/stations")        # lazy — nothing runs yet

result = (df
    .filter(F.col("defect_rate") > 2500)
    .groupBy("process_category")
    .agg(F.count("*").alias("n"), F.avg("complexity").alias("avg_cx"))
    .withColumn("rank", F.rank().over(Window.orderBy(F.desc("avg_cx")))))
result.write.parquet("out/ranked")                     # STILL lazy

result.explain()                                       # show the physical plan
```

**Same operations as Pandas — different execution:** the chain above doesn't compute; it builds a plan. One action (`write`, `collect`, `count`) triggers the whole optimized DAG.

---

## 3 · Transformations vs Actions · Lazy Evaluation

| | Examples | When it runs |
|---|---|---|
| **Transformations** (lazy) | `filter`, `select`, `groupBy`, `withColumn`, `join` | never — build the DAG |
| **Actions** (eager) | `count`, `collect`, `show`, `write`, `first` | trigger execution |

**Why lazy (the interview answer):** the driver sees the *whole* plan before executing → Catalyst optimizer fuses steps, prunes partitions/columns, pushes filters down to storage. Eager Pandas can't do that — each step materializes.

> ⚠️ **`collect()` is the footgun** — it pulls the full distributed dataset to the driver (OOM on real data). Use `take(n)`, `toPandas()` on aggregated results only, or `write`.

---

## 4 · Shuffling & Partitioning — where Spark jobs die

- **Shuffle** = data moves between executors (groupby, join, distinct need it) — the most expensive operation: disk writes + network transfer
- **Narrow vs wide:** `filter`/`map` stay in-partition (narrow, cheap); `groupBy`/`join` cross partitions (wide, shuffle)
- **Partitioning rules of thumb:** aim ~100–200MB per partition; too few → no parallelism, too many → scheduling overhead
- **Mitigations:** pre-partition by key (`repartition("stn_id")`), bucket joins, broadcast small tables:

```python
from pyspark.sql.functions import broadcast
big.join(broadcast(small_lookup), "code")   # lookup table shipped to every executor — no shuffle
```

---

## 5 · The Pandas Bridge — when and why to switch

| Signal | Verdict |
|---|---|
| Data fits in RAM (< a few GB) | Pandas, always — simpler, faster to iterate |
| Multi-GB → TB, cluster available | Spark |
| Pandas slow on *groupby over millions of rows* | first vectorize/optimize dtypes, then Spark |
| One big file | check `polars`/DuckDB first too — knowing these earns points |

**The honest hierarchy:** *Pandas (RAM) → Polars/DuckDB (bigger-than-expected RAM) → Spark (truly distributed).* Saying this shows judgment, not just tool recall.

**Window functions exist here too** — the same `rank/lag` concepts from [[../02_ANALYTICS/SQL/SQL_Window_Functions]], distributed:

```python
w = Window.partitionBy("sub_line").orderBy(F.desc("defect_rate"))
df.withColumn("rn", F.row_number().over(w)).filter("rn <= 3")   # top-3 per group, distributed
```

---

## 6 · Persistence & Tuning Vocabulary

| Knob | Effect |
|---|---|
| `.cache()` / `.persist(StorageLevel.MEMORY_AND_DISK)` | reuse a DataFrame across multiple actions (an action recomputes the DAG otherwise!) |
| `spark.sql.shuffle.partitions` | default 200 — tune to data size |
| Data formats | Parquet (columnar, splittable, predicate pushdown) >> CSV for Spark |
| Skew | one hot key → one giant partition → salting / isolate |
| UDFs | avoid Python UDFs when a built-in exists (serialization cost); pandas UDFs as middle ground |

---

## ⚡ Rapid-Fire Q&A

> **Spark vs Hadoop MapReduce?**
> In-memory DAG vs disk-bound map-shuffle-reduce stages — Spark wins iterative/multi-pass workloads by orders of magnitude.

> **Why is Spark lazy?**
> Defers execution to see the full DAG → Catalyst can optimize the plan globally (fusion, pushdown, pruning). Actions trigger it.

> **What is a shuffle?**
> Redistributing data across executors to satisfy wide dependencies (groupby/join) — network + disk cost; minimize via broadcasting, key partitioning.

> **Driver vs executor?**
> Driver plans and schedules; executors run tasks on partitions and hold cached data.

> **When would you NOT use Spark?**
> Data that fits on one machine — Pandas/DuckDB are simpler and faster. Spark's overhead is only worth it at distributed scale or for scheduled multi-TB pipelines.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The SQL you'd write inside it | [[../02_ANALYTICS/SQL/SQL_Fundamentals]] |
| Data engineering context | [[Data_Engineering]] |
| Pandas skills this extends | [[../02_ANALYTICS/Python/Pandas_NumPy]] |

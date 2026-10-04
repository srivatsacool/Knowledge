---
title: Python Fundamentals — Interview Deep-Dive
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [python, level-1, critical, tier-1]
---

# 🐍 Python Fundamentals

> [!important] Why this is Priority #1
> Your resume claims **5★ Python on HackerRank**. That star is an invitation for the interviewer to go deeper, not a shield. Every other topic on the roadmap — Pandas, LSTM, FastAPI, the SIRP — is built on this language. If you wobble here, everything above it shakes.

---

## 1 · Language Core

### Variables & Data Types

Python is **dynamically typed** — the type attaches to the value, not the name.

```python
x = 42          # int
y = 4.2         # float
s = "engine"    # str
ok = True       # bool
items = None    # NoneType
```

**Interview traps:**
- `10 / 3` → `3.333…` (true division) but `10 // 3` → `3` (floor division)
- `int` is arbitrary precision — no overflow like C/Java
- Floats are binary: `0.1 + 0.2 == 0.3` is **False** → use `math.isclose()` or `decimal.Decimal` for money

### Mutable vs Immutable — *the* classic question

| Immutable (copies on change) | Mutable (changes in place) |
|---|---|
| `int`, `float`, `str`, `tuple`, `bool` | `list`, `dict`, `set` |

```python
def add_item(item, bucket=[]):      # ⚠️ THE classic bug
    bucket.append(item)
    return bucket

add_item(1)   # [1]
add_item(2)   # [1, 2]  ← default list is created ONCE, shared across calls
```

**Why it matters to you:** in your SIRP data pipelines, shared mutable defaults silently corrupt accumulating datasets. Rule: `def f(x, bucket=None)` → `if bucket is None: bucket = []`.

### Control Flow & Comprehensions

```python
# comprehension — the Pythonic loop
squares   = [n**2 for n in range(10)]
evens     = [n for n in nums if n % 2 == 0]
lookup    = {stn: defects for stn, defects in zip(stations, defect_counts)}
unique    = {cat for cat in categories}

# conditional expression
verdict   = "defect" if rate > 1500 else "clean"
```

**Say it like this in the interview:** *"Comprehensions replace append-in-a-loop with a declarative expression — faster to read, and typically faster to run because the loop happens in optimized C."*

### Exception Handling

```python
try:
    df = pd.read_excel(path)
except FileNotFoundError:
    logging.error(f"Missing input: {path}")
    raise
except ValueError as e:
    logging.warning(f"Bad sheet structure: {e}")
    df = pd.DataFrame()
finally:
    cleanup_temp_files()
```

**Key distinction:** `except Exception` catches (nearly) everything; bare `except:` also catches `KeyboardInterrupt` and `SystemExit` — *never* use it. In your Tata data-cleaning scripts, per-file try/except let a single corrupt sheet fail loudly without killing the batch.

---

## 2 · Functions & Functional Tools

```python
def analyze(stations, *, min_rate=0, block="LB"):
    """Keyword-only args prevent silent positional mistakes."""
    return [s for s in stations if s.block == block and s.defect_rate > min_rate]

# lambda — throwaway one-line function, e.g. as sort key
top = sorted(stations, key=lambda s: s.defect_rate, reverse=True)[:10]
```

| Tool | Does | Example |
|---|---|---|
| `map` | apply fn to each item | `map(str.strip, raw_names)` |
| `filter` | keep items where fn is True | `filter(None, values)` |
| `reduce` | fold to single value | `reduce(op.add, counts, 0)` |
| `zip` | pair iterables | `zip(sb_stations, lb_stations)` |
| `enumerate` | index + value | `enumerate(rows, start=1)` |

**Generator vs list — know the difference cold:**

```python
total = sum(d.defect_rate for d in stations)   # generator: O(1) memory, lazy
srt   = sorted((d.defect_rate for d in stations), reverse=True)  # list: needed if reused
```

*"A generator yields one item at a time and forgets it — perfect for the ~1M-row defect log where materializing a list would waste memory. A list is for data you'll iterate repeatedly."*

---

## 3 · Data Structures — pick the right one

| Structure | Backing | Lookup | Use when |
|---|---|---|---|
| `list` | dynamic array | O(n) search | ordered collection, index access |
| `dict` | hash table | **O(1)** | key→value mapping (station → defect rate) |
| `set` | hash table | **O(1)** | membership tests, de-duplication |
| `tuple` | fixed array | O(n) | immutable record (station_id, category) |
| `collections.Counter` | dict | O(1) | frequency counts (defect types) |
| `collections.defaultdict` | dict | O(1) | grouping without key-exists checks |
| `heapq` | binary heap | O(log n) | top-k without full sort |

**The membership gotcha** (asked constantly):

```python
if stn in station_list:    # O(n) — scans the list
if stn in station_set:     # O(1) — hashes it
```

With 96 stations it's irrelevant. With a million defect rows, it's the difference between seconds and hours.

### Shallow vs Deep Copy

```python
import copy
shallow = copy.deepcopy(complex_record)  # nested lists are SHARED in a shallow copy
```

---

## 4 · OOP — enough to defend, not to lecture

```python
class Station:
    def __init__(self, stn_id: str, category: str, complexity: float):
        self.stn_id = stn_id          # instance attribute
        self.category = category
        self.complexity = complexity

    @property
    def is_critical(self) -> bool:    # derived value, reads like an attribute
        return self.complexity > 0.5

    def __repr__(self) -> str:        # debug-friendly printing
        return f"Station({self.stn_id!r}, cx={self.complexity:.2f})"

class VerifiedStation(Station):       # inheritance — extends behaviour
    def __init__(self, *args, check_type: str, **kwargs):
        super().__init__(*args, **kwargs)
        self.check_type = check_type
```

| Concept | One-line definition |
|---|---|
| Encapsulation | state + behaviour live together; underscore prefix signals "internal" |
| Inheritance | subclass reuses/extends parent via `super()` |
| Polymorphism | same interface, different behaviour per class |
| `@property` | computed attribute without changing the call syntax |
| `@classmethod` | alternative constructor (`from_row(row)`) |

**When an interviewer pushes** ("why not just use dicts?"): *"A dict is fine for a row; a class earns its keep when behaviour attaches to the data — like `is_critical` here — and when a type error should crash immediately instead of surfacing three functions later."*

---

## 5 · Files, Modules & the Standard Library

```python
import json, csv
from pathlib import Path

# Path objects beat string concatenation
data_dir = Path("report_data")
for f in data_dir.glob("*.xlsx"):
    process(f)

with open("config.json") as fh:      # context manager: file closes even on error
    cfg = json.load(fh)
```

Standard library you should name-drop naturally: `collections`, `itertools`, `functools`, `datetime`, `pathlib`, `logging`, `random` (seeds!), `statistics`.

**Your SIRP tie-in:** reproducibility — `random.seed(20260715)`-style fixed seeds make every modelled number regenerable. `datetime` for parsing shift/belt timestamps. `logging` over `print` because logs carry timestamps and levels.

---

## 6 · Python for Automation

This is a resume claim — have the story ready:

```python
# SAP HANA extraction → SQL → Excel report pipeline (internship)
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine(f"hana://{user}:{pwd}@{host}:30015")   # credentials from env vars!
query  = "SELECT station, defect_type, COUNT(*) FROM quality_log WHERE dt = :run_date GROUP BY 1, 2"
df     = pd.read_sql(query, engine, params={"run_date": run_date})
with pd.ExcelWriter(out_path, engine="openpyxl") as xw:
    df.to_excel(xw, sheet_name="daily_defects", index=False)
```

Talking points: what was manual before, what the script replaced, error handling for failed connections, secrets **never** in code (environment variables), and the measured time saved.

---

## 7 · Debugging & Performance

**Reading a traceback** — read it *bottom-up*: last line names the exception, the frame above it is where it died, the frames above that are how you got there.

**Systematic debugging:** reproduce → isolate (bisect the input) → instrument (`logging`/`breakpoint()`) → fix → **write the regression test** so it can't return.

**Performance ladder** (in order):

1. Better algorithm / data structure (dict lookup vs list scan)
2. Vectorization — push loops into Pandas/NumPy C code
3. `set`/`dict` membership instead of `in list`
4. Generators for one-pass streams
5. Only then: profiling (`cProfile`, `timeit`) — *measure before optimizing*

```python
# why vectorization wins
%timeit sum(x**2 for x in range(1_000_000))     # ~80 ms  (Python loop)
%timeit (arr**2).sum()                           # ~1 ms   (NumPy, C speed)
```

---

## 8 · Interview Coding Patterns

Memorize the shape of each; practice on HackerRank to keep the 5★ honest.

| Pattern | Signature problem | Key idea |
|---|---|---|
| Hash map count | first unique char, anagrams | `Counter` / dict tally |
| Two pointers | pair-sum in sorted array, palindrome | converge from both ends |
| Sliding window | longest substring without repeat | expand right, shrink left |
| Prefix sum | subarray sum queries | running total array |
| Sorting + greedy | meeting rooms, min platforms | sort by end/start |
| Binary search | rotated array, boundary | halve the search space |
| Stack | matching brackets, next greater | LIFO for nesting |
| Dict for grouping | group anagrams | canonical key → list |

```python
# canonical example: two-sum, O(n)
def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen:
            return [seen[target - n], i]
        seen[n] = i
```

---

## ⚡ Rapid-Fire Q&A

> **List vs tuple?**
> List is mutable, tuple immutable — tuple is hashable so it can be a dict key, and signals "fixed record".

> **`is` vs `==`?**
> `==` compares values; `is` compares identity. Only use `is` for `None` sentinels.

> **How does Python manage memory?**
> Reference counting plus a cyclic garbage collector; small ints/strings are interned.

> **GIL — what is it?**
> The Global Interpreter Lock lets only one thread execute Python bytecode at a time — so threads help I/O-bound work, but CPU-bound parallelism needs `multiprocessing` or native (NumPy) code.

> **Why is your default-arg example a bug?**
> Defaults are evaluated once at definition. A mutable default is shared across every call — the fix is `None` + create inside.

> **Deep vs shallow copy?**
> Shallow copies the outer container; nested mutables are still shared. `copy.deepcopy` clones the full tree.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Data-wrangling layer | [[Pandas_NumPy]] |
| Analytics SQL | [[../SQL/SQL_Fundamentals]] |
| Full roadmap | [[../../00_START_HERE/DS_ROADMAP]] |

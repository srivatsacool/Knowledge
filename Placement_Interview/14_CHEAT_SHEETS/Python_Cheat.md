---
title: Python Cheat Sheet
type: cheat-sheet
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [python, cheat-sheet]
---

# 🐍 Python Cheat

## Language

```python
10/3 → 3.33  ·  10//3 → 3  ·  0.1+0.2 != 0.3 (use math.isclose)
mutable: list/dict/set — immutable: int/str/tuple
def f(x, bucket=None): bucket = bucket or []   # ← the mutable-default fix
comprehensions: [n**2 for n in x if n%2==0] · {k:v} · {v for v}
```

**Data structure choice:** dict/set lookup O(1) · list search O(n) · heapq top-k

**OOP one-liners:** encapsulation = state+behavior together · inheritance = super() · polymorphism = same interface · `@property` = computed attribute

## Pandas — the six moves

```python
df.loc[mask, cols]            # NEVER chained indexing
df.groupby("g").agg(n=("id","count"), m=("x","mean"))
df.groupby("g")["x"].transform("mean")     # broadcast back, same shape
pd.merge(a, b, on="k", how="left", validate="m:1")   # ← fan-out guard
pd.pivot_table(df, index=, columns=, values=, aggfunc=)
ts.shift(28) · ts.rolling(7).mean() · ts.resample("MS").sum()
```

**Missing data:** ask *why* first (MCAR/MAR/MNAR) → drop / median / ffill (TS) / interpolate

**Cleaning:** `str.strip().str.upper()` · `pd.to_numeric(errors="coerce")` · `drop_duplicates()` · outlier = investigate, never auto-delete

**Performance:** vectorize → set/dict membership → generators → profile. `iterrows` = last resort.

## NumPy

```python
(arr - arr.mean())/arr.std()          # vectorized z-scores
np.where(cond, a, b) · np.percentile(x, [25,75])
rng = np.random.default_rng(seed)     # reproducibility
```

**View vs copy:** slices = views (share memory); fancy indexing = copies.

## Patterns (coding round)

| Pattern | Signature problem |
|---|---|
| Hash map count | first unique char, anagrams |
| Two pointers | pair-sum sorted, palindrome |
| Sliding window | longest substring w/o repeat |
| Prefix sum | subarray sums |
| Sort + greedy | min platforms, meeting rooms |

```python
def two_sum(nums, target):           # O(n) canonical
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen: return [seen[target-n], i]
        seen[n] = i
```

## Say-cold answers

- **list vs tuple:** mutable vs immutable/hashable
- **`is` vs `==`:** identity vs value; `is` only for None
- **GIL:** one thread executes bytecode → threads help I/O, not CPU (use multiprocessing)
- **Why vectorize:** loop runs in C — ~50–100×
- **Deep vs shallow copy:** nested mutables shared in shallow

→ Deep-dive: [[../02_ANALYTICS/Python/Python_Fundamentals]] · [[../02_ANALYTICS/Python/Pandas_NumPy]]

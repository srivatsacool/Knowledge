---
title: Theory of Constraints
type: entry
domain: knowledge
status: active
created: 2026-08-26
updated: 2026-08-26
---

# Theory of Constraints

> **Definition:** Every system has at least one constraint — a bottleneck — that limits its total output. Improving anything other than that constraint produces zero improvement in system performance. Developed by Eliyahu M. Goldratt, introduced in *The Goal* (1984).

## The core idea

A system performs like a chain: its strength equals its weakest link. A production line is not a collection of independent machines to be kept busy — it is one pipeline whose output equals the output of its slowest station.

> **Key insight:** An hour lost at the bottleneck is an hour lost by the entire system, forever. An hour saved at a non-bottleneck is a mirage — the surplus capacity was never usable anyway.

Goldratt replaces cost-accounting thinking (maximize local efficiency, keep every machine busy) with **throughput accounting**:

| Measure            | Definition                                                                        | Decision rule |
| ------------------ | --------------------------------------------------------------------------------- | ------------- |
| Throughput (T)     | Rate at which the system generates money through **sales** (revenue minus truly variable costs such as raw material) | Maximize |
| Inventory (I)      | Money invested in things the system intends to sell (raw material, WIP, finished goods)                               | Minimize |
| Operating Expense (OE) | All other spending needed to turn Inventory into Throughput (labour, rent, depreciation, utilities)                   | Minimize |

The goal is not "efficient departments". The goal is **raise T while lowering I and OE** — and the fastest lever is always the constraint.

## The five focusing steps

| #   | Step         | Question it answers                          | Typical action                                                        |
| --- | ------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| 1   | **Identify**   | What actually limits system output?          | Find the station/resource/market with the least capacity relative to demand |
| 2   | **Exploit**    | How do we squeeze more from it right now?    | Zero-cost fixes: no idle time, no defects reaching it, no wrong work   |
| 3   | **Subordinate**| How does the rest of the system support it?  | Pace everything else to the constraint via drum–buffer–rope (below); accept idle time elsewhere |
| 4   | **Elevate**    | If still not enough, do we buy more capacity?| Overtime, extra shift, new machine — only after steps 2–3 are exhausted|
| 5   | **Repeat**     | Where is the next constraint?                | Loop back to step 1; guard against inertia                            |

> **Warning — inertia:** After step 4, yesterday's policies (batch sizes, schedules, KPIs built around the old bottleneck) become today's constraint. Step 5 exists to break them.

## Drum–buffer–rope (DBR)

The scheduling method that executes Step 3. From the hiking analogy in *The Goal*: a scout troop moves at its slowest member's pace, kept together by a rope — not by everyone racing ahead.

| Component | What it physically is                        | Job                                                                     |
| --------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| **Drum**    | The constraint itself (Finishing at 16/day)  | Beats the tempo for the whole system; its capacity *is* the schedule     |
| **Buffer**  | Queue of ready work parked ahead of the constraint, sized in **time** (e.g. half a day) | Absorbs upstream hiccups so the drum never starves — an hour lost there is gone forever |
| **Rope**    | Release rule: new material enters only at the drum's consumption rate   | Stops the rest of the plant from overproducing; converts push to constraint-paced pull |

Buffer depth is watched daily in green / yellow / red zones: frequent red-zone entries mean enlarge the buffer or fix upstream reliability; never touching red means shrink it and pull WIP down further. When demand is below capacity the market is the real constraint, so Simplified DBR (S-DBR) drops the internal drum and releases material against the shipping schedule instead.

## Worked example — a furniture line

A workshop makes tables. Market demand is **20 tables/day**. Measured capacities:

```
                 WIP pile-up
                     ▼
 [Cutting]───▶[Assembly]───▶[Finishing]───▶[Packing]
   22/day       18/day        15/day        25/day
                                 ▲
                       THE CONSTRAINT
```

**Step 1 — Identify.** System output = min(22, 18, 15, 25) = **15/day**, against demand of 20. Finishing is the constraint. Cutting's extra 7 units/day is not achievement — it is inventory piling up in front of Finishing.

**Step 2 — Exploit (zero cost).** Audit the Finishing station: workers take lunch together, so the line stops 30 minutes daily; roughly 5% of units arriving from Assembly are defective and consume Finishing time before being scrapped at final inspection. Fixes: stagger breaks so Finishing never idles, and move inspection **upstream** of the bottleneck so only good units consume its scarce hours. Result: effective output ≈ 15 → **16/day**. Cost: ₹0.

**Step 3 — Subordinate.** Stop releasing material at Cutting's pace. The drum is Finishing at 16/day, the rope releases jobs from Cutting at that same 16/day, and a buffer of half a day of inspected-good work sits in front of Finishing. Output stays ~16/day, but WIP drops sharply, lead time shrinks, and cash previously frozen in inventory is freed. Nothing got faster; the system got healthier.

**Step 4 — Elevate (money).** Add 2 hours of overtime at Finishing: +3 tables/day → **19/day**. With a contribution of ₹600/table, that is ₹1,800/day of added throughput against ₹1,200/day of overtime cost — a clear yes, decided on T/I/OE grounds rather than "machine efficiency".

**Step 5 — Repeat.** At 19/day, Finishing approaches Assembly's 18/day ceiling: the constraint is migrating upstream. Re-audit before buying anything — and revisit the batch-size and scheduling policies written when Finishing was the bottleneck.

## Where the same logic applies

| Domain              | Constraint looks like                                    | TOC application                                  |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------ |
| Projects            | Critical chain of dependent tasks (not individual task estimates) | Critical Chain scheduling; buffers at the end, not per task |
| Software delivery   | Slowest pipeline stage — tests, review, deployment approval | Exploit/automate that stage first; ignore other stage speedups until then |
| Services            | One diagnostic machine, one specialist, one approval desk | Buffer and protect that resource; subordinate arrivals to it |
| Strategy            | Market, not factory, may be the constraint               | When demand < capacity, sell harder — the plant is not the problem |

> **Positioning vs other methods:** Lean removes waste wherever it hides; Six Sigma reduces variation wherever it hurts; TOC concentrates all improvement firepower on the one place that gates the system. They complement — TOC tells you *where*, Lean/Six Sigma tell you *how*.

## Common pitfalls

- **The efficiency trap** — keeping every station busy maximizes WIP and lead time, not profit. Idle time at a non-bottleneck costs nothing.
- **Starving the bottleneck** — no protective buffer means any upstream hiccup stops the whole system.
- **Feeding it defects** — a scrap at the bottleneck consumes capacity twice: once to make it, once to redo it.
- **Forgetting the market** — if demand is below capacity, the constraint is external; the five steps then point at sales, not the shop floor.

## Sources

- Goldratt, E. M. & Cox, J., *The Goal: A Process of Ongoing Improvement*, 1984 (revised ed. 2014).
- Goldratt, E. M., *Theory of Constraints*, 1990.
- Goldratt, E. M., *Critical Chain*, 1997 (project-management application).

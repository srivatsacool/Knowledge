---
title: Process Mapping — SIPOC, Swimlanes, Bottlenecks
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [operations, process-mapping, level-5, tier-2]
---

# 🗺️ Process Mapping

> [!important] Your Tata foundation
> You mapped **96 stations of the 5L Diesel Engine Assembly Line** — Short Block (SB1–31) through Long Block (LB1–65) to PDI. This note gives the formal craft: notation, frameworks, and the analysis that turns a map into improvement.

---

## 1 · Why Map a Process at All

> [!tip] The one-liner
> *"You cannot improve, automate, or analyze what you haven't made explicit."*

| Map gives you | Enables |
|---|---|
| Shared, verified understanding | requirements, automation scoping |
| The data-collection skeleton | which metrics exist at which step |
| Bottleneck & waste visibility | improvement targets |
| Handoff accountability | RACI, ownership of defects |

Your SIP's chain: **observe (Gemba) → map (96 stations) → classify (process categories) → quantify (complexity index) → analyze (defects × skill × complexity)**. Mapping wasn't documentation theater — it was the data architecture.

---

## 2 · The Frameworks — one slide each

### SIPOC — the 50,000-foot view

```text
Suppliers → Inputs → PROCESS (high level, 4–7 steps) → Outputs → Customers
   steel      blocks    SB → LB → test → PDI        engines    OEM/TF
   tooling    operator  ...                          data       QC dept
```

- First map to draw: fixes scope and vocabulary before detail
- Answer first: *who supplies what, what the process produces, who consumes it*

### Flowchart — the step logic

```text
[Start] → (Step) → ◇ Decision? ──yes──→ (Step) → [End]
                        │
                        no → (Rework loop) ──→ back to step
```

- Symbols: rectangle = activity, diamond = decision, oval = start/end, cylinder = data store
- **Rework loops are gold** — every loop is cost, delay, and a defect signal

### Swimlane — who does what

```text
Operator  │──fit shell──┤        ├──torque──┤
Machine   │      ├──camera check──┤         │        ← the verification gate
Supervisor│                ├──escalate──┤
```

- Lanes = actors (or systems); boxes must sit in the *accountable* lane
- **Handoffs between lanes = defect and delay risk** — count them; every one is a candidate for RCA

### Value-Stream Map (VSM) — lean's X-ray

```text
VA  value-added time      customer asks for it, pays for it
NVA  non-value-added      waiting, transport, storage — waste
BVA  business-necessary   inspection, compliance — minimize, can't remove
```

- Timeline along the map: VA vs NVA ratio — the honest efficiency number (in assembly, engines spend most of their existence *waiting* between operations)
- **Cycle time (takt)** vs demand: `available time ÷ demand` — the pace the line *must* keep; any station over takt is the bottleneck

---

## 3 · As-Is → To-Be — the improvement loop

```text
1. AS-IS map      current state, verified on the floor (Gemba truth, not org-chart truth)
2. MEASURE        cycle times, wait times, defect/rework rates per step
3. FIND WASTE     the 7 (+1) wastes: overproduction, waiting, transport, over-processing,
                  inventory, motion, defects, (unused talent)
4. TO-BE map      remove/balance/automate — with measurable targets
5. IMPLEMENT      pilot → verify → standardize (SOP) → propagate (yoko-narabi)
```

> **The verification discipline:** an As-Is map drawn from the desk is fiction. Yours came from walking SB1→LB65 in production sequence — say that; it's the difference between mapping as compliance and mapping as method.

---

## 4 · Bottleneck Analysis

- **Definition:** the step with the least capacity — it sets the line's throughput; all WIP piles behind it
- **Find it:** cycle-time bar chart vs takt; WIP accumulation; queue lengths
- **Theory of Constraints (Goldratt) — the five steps:** ① identify the constraint ② exploit it (no idle time, quality checks *before* it — a defect at the bottleneck is unrecoverable capacity) ③ subordinate everything to it ④ elevate it (add capacity) ⑤ repeat
- **Your line's version:** the most complex stations (LB4, LB21, LB22, LB29 — complexity ≥ 0.55) are where capacity and quality risk concentrate simultaneously — staffing them with the *strongest* operators is both a quality and a throughput play

> [!tip] The interview sentence linking your two worlds
> *"The process map is where operations and analytics meet: every box becomes a row in the dataset — station ID, category, complexity attributes — and the map's bottlenecks become the hypotheses the statistics test."*

---

## 5 · Process Efficiency Metrics

| Metric | Formula | Reads as |
|---|---|---|
| Cycle time | time per unit at a step | pace |
| Takt time | available time ÷ demand | required pace |
| **Process cycle efficiency** | VA time ÷ total lead time | the NVA share — usually shocking (< 10% typical) |
| First-pass yield | units passing without rework ÷ units started | quality at the flow level |
| Rolled throughput yield | product of step FPYs | compound quality across 96 stations! |

**RTY on your line, made vivid:** if every one of 96 stations yields 99.5%, the end-to-end yield is 0.995⁹⁶ ≈ **62%** — this is exactly why *per-station* defect analytics (your SIP) matters more than end-of-line inspection. One sentence, huge credibility.

---

## ⚡ Rapid-Fire Q&A

> **SIPOC vs flowchart vs swimlane — when each?**
> SIPOC: scope & context (before detail). Flowchart: step & decision logic. Swimlane: accountability & handoffs. VSM: time & waste quantification.

> **What's a bottleneck and how do you fix it?**
> The capacity-limiting step; TOC: exploit before elevating — quality-proof its inputs, then add capacity. Everything else subordinates to it.

> **How did you actually build your 96-station map?**
> Ordered Gemba walks in production sequence + station-master/belt data as the documentary source + supervisor validation — triangulated, then cleaned to one consistent record per station.

> **What is takt time?**
> Available production time ÷ customer demand — the metronome; stations exceeding takt are either the bottleneck or accumulating invisible debt.

> **Map a process you automated.** *(link your automation story)*
> As-is: manual extract → format → email. Mapped handoffs and NVA steps → automated with Python + Power Automate; the map itself justified the scope (only the NVA steps were automated, not the whole flow).

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| RCA on the mapped process | [[RCA]] |
| The full Tata story | [[TATA_MOTORS/Methodology]] |
| Business analysis vocabulary | [[../03_BUSINESS/BA_Toolkit]] |
| Lean theory of constraints | [[../../Operations/Theory_of_Constraints]] *(05_Knowledge/Operations — cross-domain reuse)* |

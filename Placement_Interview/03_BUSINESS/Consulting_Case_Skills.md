---
title: Consulting & Case Skills — MECE, Structuring, Communication
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [consulting, case-interview, level-2, tier-2]
---

# 📋 Consulting & Case Skills

> [!important] Why this matters for YOU
> KPMG Data Analytics Consulting certification on your resume = you will be *expected* to structure a fuzzy problem on a whiteboard. These skills also upgrade every other answer you give — the MECE habit is a life skill for interviews.

---

## 1 · MECE — the foundational discipline

> **Mutually Exclusive, Collectively Exhaustive** — buckets that don't overlap, and leave nothing out.

**Why it matters:** overlapping buckets double-count causes ("marketing" and "pricing" both inside "revenue"…); missing buckets leave the real cause unexamined.

```text
"Profit fell 12%." 
MECE at level 1:        Profit = Revenue − Cost        ← definitional, always exhaustive
Revenue:  Volume × Price                               ← arithmetic decomposition
Volume:   by segment / geography / channel            ← MECE market cuts
Cost:     Fixed / Variable                             ← MECE by cost behavior
```

**The pro move:** use *definitional or arithmetic* decompositions first (guaranteed MECE), then behavioral cuts. Every good case framework (below) is a MECE skeleton.

---

## 2 · Hypothesis-Driven Problem Solving

```text
Day 1:  form a lead hypothesis + the analysis that would kill it
Week 1: test → refine or kill → next hypothesis
End:    the surviving hypothesis, with evidence, becomes the recommendation
```

- Start with the answer ("our pricing is out of line in the mid-market") — *then* seek disconfirmation
- **Issue tree:** break the question into MECE branches; attach to each leaf the *analysis* that resolves it

```text
Q: Why is inventory cost rising?
├── Are we holding more?           → inventory trend, by SKU class
│   ├── Forecast error up?         → MASE trend, by archetype        ← your SIRP!
│   ├── Order policy changed?      → policy parameters audit
│   └── Lead times longer?         → supplier OTIF trend
└── Is the cost per unit up?       → h & p parameter drift
```

Notice: your SIRP *is* an issue tree executed end-to-end. Say that.

---

## 3 · The 80/20 Discipline

- 20% of causes → 80% of effect (your Pareto: top-30 stations → 44% of defects; and top SKUs → most volume)
- Analysis budget follows leverage: deep-dive the vital few, screen the trivial many
- In case interviews, *saying "I'd 80/20 this" before diving deep* is explicitly scored

---

## 4 · The Case Interview Skeleton

```text
1. CLARIFY       restate; ask 2–3 scoping questions (objective? constraints? timeframe?)
2. STRUCTURE     MECE framework out loud — get buy-in before analyzing
3. ANALYZE       hypothesis-driven; ask for the data; interpret as it arrives
4. QUANTIFY      size the impact — numbers make recommendations real
5. RECOMMEND     answer first, then support; risks + next steps
```

> [!tip] The scoring rubric interviewers actually use
> Structuring (MECE) · quantitative comfort · business sense · communication (answer-first) · coachability (adjusts when given hints). Structure and communication outweigh perfect answers.

### A compact case framework library

| Case type | Skeleton |
|---|---|
| Profitability | Revenue (vol × price, by segment) − Cost (fixed/variable) |
| Market entry | Market (size/growth) · Competition · Capability · Economics (NPV) · Risk |
| Growth | Volume (segments, channels, geographies) × Price × New offers |
| Cost cutting | Fixed/Variable → people/process/procurement; benchmark per unit |
| Pricing | Value-based · cost-based · competitive; elasticity; segment willingness-to-pay |
| Ops / inventory | Demand uncertainty · policy · capacity · lead time *(your SIRP maps here)* |

---

## 5 · Executive Communication — answer first

### Pyramid principle (Minto)

```text
❌ Bottom-up storytelling:  "First I looked at… then I found… finally therefore…"
✅ Pyramid:                 ANSWER → 3 supporting arguments → evidence per argument
```

> *"We should reallocate certified operators to high-complexity stations before any training spend. Three reasons: it addresses the largest defect carriers immediately, it costs almost nothing, and our data shows complexity and skill are currently uncorrelated. Risks are union/rota constraints — mitigation: phased moves with supervisors."*

### The situation–complication–resolution (SCR) opening

| Part | Your SIRP example |
|---|---|
| Situation | 5L line manages quality through layered end-of-line defenses |
| Complication | no station-level view of skill deployment vs complexity; defects concentrate unseen |
| Resolution | station-level map + prioritized reallocation/training plan, method reusable on real data |

---

## 6 · Data-Backed Recommendation Checklist

- [ ] Answer stated first, in one sentence
- [ ] Quantified impact + the assumption it rests on
- [ ] Evidence tier named (verified data / modelled / directional)
- [ ] Risks + mitigation
- [ ] Next steps with owners and dates
- [ ] What would make me wrong (falsifier) — the credibility move

---

## ⚡ Rapid-Fire Q&A

> **What does MECE mean and why care?**
> Mutually Exclusive, Collectively Exhaustive — no double counting, no blind spots; the precondition for trustworthy prioritization.

> **Hypothesis-driven vs data-driven — aren't they opposed?**
> No: hypotheses *direct* the data collection (issue trees attach analyses to branches); data kills or promotes them. Pure data dredging finds noise.

> **Estimate: how many engines does a line like this produce daily?** *(sizing demo)*
> Two shifts × ~7.5h at a paced takt (~1 engine/3–4 min/station line) → roughly 250–350 engines/day; sanity band 200–400, then refine with real throughput.

> **Client disagrees with your recommendation — what now?**
> Separate the *analysis* (is my data right?) from the *decision* (their risk appetite, constraints I don't see). Adapt the recommendation; never silently bury the evidence.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| KPI & framing depth | [[Business_Analytics]] |
| Storytelling craft | [[Data_Storytelling]] |
| Your executed "case" | [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]] |

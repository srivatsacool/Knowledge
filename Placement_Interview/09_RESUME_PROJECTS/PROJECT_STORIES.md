---
title: Project Interview Stories — Tata, AI Inventory, Competitions
type: index
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [projects, stories, interview, tier-2]
---

# 📂 Project Interview Stories

> [!important] How to use this file
> Every project below has a **2-minute frame**, the **question bank** you must survive, and the **knowledge links** for depth. Source of truth: `04_Career\` (never duplicated here) + the deep-dive notes in this vault.

---

## 🏭 1 · Tata Motors SIP — Workforce Competency Analytics

### The 2-minute frame

> *"At Tata Motors Jamshedpur I analyzed the 5L diesel engine assembly line — 96 stations across Short Block and Long Block, 110 operators. I mapped every station, built a process-complexity index from real station data (torque, verification, fitments, automation), and examined the relationship between workforce skill, complexity, and defects. Three findings: defects concentrate (top-30 stations carry 44% of volume), complexity is a distinct risk factor (r = 0.38), and skill is associated with fewer defects (r = −0.41, surviving complexity controls, ~440 fewer defects per skill point). The actionable gem: skill and complexity were essentially uncorrelated (r = 0.18, n.s.) — the most complex stations weren't the best staffed. Recommendation #1: reallocate certified operators to complex stations — nearly free, immediate."*

### The question bank

| Question | One-line answer | Deep-dive |
|---|---|---|
| "What was the business problem?" | No data-driven map of skill deployment vs station complexity vs defects — decisions by judgement | — |
| "How did you determine skill was *actually* related to defects?" | Association survived complexity controls + mechanism in process map + planned intervention as experimental test | [[../07_OPERATIONS/RCA]] |
| "What was real vs modelled?" | Station structure, complexity index, roster aggregates real; per-station skill/defect magnitudes = seeded modelled layer (seed 20260715), disclosed everywhere | [[../02_ANALYTICS/Reproducibility]] |
| "What was the complexity index?" | Weighted composite: torque 1.0, verification 0.8, fitment 0.5, automation 1.5 → 0–1 scale, from real station data | [[../07_OPERATIONS/Process_Mapping]] |
| "Why Pareto?" | Cannot root-cause 96 stations — concentration tells you where to dig (top-30 = 44.4%) | [[../07_OPERATIONS/RCA]] |
| "Top recommendations?" | Reallocate first (free), Level-3 proficiency floor, targeted training at Quadrant B, poka-yoke complex stations, monitoring report | — |
| "Tools?" | Python (pandas/NumPy/SciPy/matplotlib), Excel — cleaning → stats → figures | [[../02_ANALYTICS/Python/Python_Fundamentals]] |

### Numbers to have at your fingertips

`96 stations (31 SB / 65 LB)` · `110 operators, 36.4% permanent` · `mean skill 2.99/5` · `mean complexity 0.137 (LB 0.157 > SB 0.095)` · `top 5/10/20/30 = 9/17/32/44% of defects` · `skill–defect r = −0.41 (station), −0.31 (operator)` · `complexity–defect r = +0.38` · `skill–complexity r = +0.18 n.s.` · `regression ≈ −440 defects/skill point, CI 235–639` · `multivariate R² = 0.38`

---

## 🏪 2 · SIRP — AI Inventory Optimization (the flagship)

> **Full narrative chain:** [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]] — problem → data → archetypes → ladder → rolling origins → MASE → DM+Holm → order-up-to → cost simulation → sensitivity → the divergence finding.

### The 90-second version

> *"Two retail datasets, 12 forecasting models on a complexity ladder, identical rolling-origin evaluation, 28-day horizon, scale-free metrics with Diebold-Mariano + Holm across 91 comparisons — then each forecast fed an order-up-to inventory policy and I simulated holding + stockout economics. LSTM won accuracy on both datasets; on dense demand a moving average won on cost. Accuracy and business value are correlated, not identical."*

### Killer follow-ups (with pointer)

| Question | Answer home |
|---|---|
| Why MASE? | [[../02_ANALYTICS/Forecasting/Forecast_Metrics_MASE]] |
| Croston vs SBA vs TSB? | [[../02_ANALYTICS/Forecasting/Intermittent_Demand_ADI_CV2]] |
| Why LSTM / why not everywhere? | [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]] §4 |
| What is order-up-to? Why does accuracy ≠ cost? | [[../02_ANALYTICS/Forecasting/Inventory_Optimization]] |
| 91 tests — why Holm? | [[../02_ANALYTICS/Statistics/Model_Comparison_DMHolm]] |
| Leakage controls? | [[../02_ANALYTICS/Data_Leakage]] §5 |
| What would you change with 3 months? | [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]] §"hard questions" |
| What did YOU build? | Same file — pipeline end-to-end + Streamlit dashboard |

---

## 🚀 3 · Competition Stories

### IIT Mandi × Zomato — +10.4% AOV

> *"Behavioral segmentation of order data (RFM-style), segment-matched menu/promo/timing interventions, +10.4% AOV on targeted cohorts. Validity frame: matched holdout cohorts, pre-period baseline, weekly-cycle coverage — and the honesty clause: without the holdout, it's a correlation with my enthusiasm."*
> Depth: [[../03_BUSINESS/GTM_Analytics]] §7 · [[../03_BUSINESS/AB_Testing]]

### IIM Mumbai × PocketJoystick

> Frame: customer problem → product → revenue model → competitive advantage → why investors care (market size, unit economics, moat). Depth: [[../03_BUSINESS/GTM_Analytics]] §3 (sizing), [[../04_FINANCE/Business_Finance_SROI]] §2 (unit economics)

### MICA × UCB

> Frame: target audience → channel mix → campaign funnel → measurement (reach → engagement → conversion → CAC). Depth: [[../03_BUSINESS/Product_Analytics]]

---

## 💼 4 · HavenOS — SROI Defense

> *"₹6.40 social return per ₹1 on a ₹60K/month pilot — stakeholder outcomes valued with documented proxies, adjusted for deadweight and attribution, presented with sensitivity assumptions."*
> Depth: [[../04_FINANCE/Business_Finance_SROI]] §3

---

## 🤖 5 · BTracker — Production AI Agent

### The 60-second frame

> *"BTracker is an open-sourced production-grade AI agent platform: LLM chat with persistent context, task workflows, usage quotas, and **MCP-based tool integration** — the agent discovers and calls external tools through the Model Context Protocol instead of hardcoded integrations."*

| Question | Answer home |
|---|---|
| What is MCP and why? | [[../01_AI/MCP/MCP_Architecture]] |
| Agent loop, memory, failure handling? | [[../01_AI/LLMs/AI_Agents]] |
| What makes it "production-grade"? | [[../08_TECHNOLOGY/Production_Concepts]] §7 |
| Frontend/backend split? | [[../08_TECHNOLOGY/React_JavaScript]] + [[../08_TECHNOLOGY/FastAPI]] |
| Hallucination/prompt-injection guardrails? | [[../01_AI/Responsible_AI]] §4 |

⚠️ **Honesty rule:** SIRP's LLM phase was *designed, not executed* — never claim implementation → [[../03_BUSINESS/Research_Methodology]] §7.

---

## 🧭 The Universal Story Spine (works for any project)

```text
1. PROBLEM     the decision hanging on the answer (not the topic)
2. DATA        what, how much, provenance, cleaning
3. METHOD      why this approach — the alternative you rejected
4. RIGOR       validation, significance, sensitivity (what makes it trustworthy)
5. RESULT      the number AND the business meaning
6. ACTION      what changed / would change because of it
7. HONESTY     limitations offered proactively
```

Every strong answer above is this spine compressed. Practice each story aloud until the spine is automatic.

---

## 🔗 Navigation

| Need | Go |
|---|---|
| The 25 conceptual questions | [[../16_RESUME_DEFENSE/25_Conceptual_Questions]] |
| Rapid revision sheets | [[../14_CHEAT_SHEETS/CHEAT_INDEX]] |
| Formula reference | [[../13_FORMULAS/Formula_Sheet]] |
| Umbrella roadmap | [[../00_START_HERE/DS_ROADMAP]] |

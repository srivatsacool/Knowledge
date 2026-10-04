---
title: Business Analytics — KPIs, Frameworks, Decision-Making
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [business, analytics, level-2, tier-2]
---

# 📊 Business Analytics

> [!important] The bridge topic
> Your PGDM *is* Research & Business Analytics — this isn't a side skill, it's the degree. The interview test: can you move from a vague business complaint to a measurable analytical question and back to a recommendation?

---

## 1 · The Four Levels of Analytics — the canonical frame

| Level | Question | Example (your work) |
|---|---|---|
| **Descriptive** | What happened? | Pareto: top-30 stations carry 44% of defects |
| **Diagnostic** | Why? | skill–defect correlation r = 0.41; complexity r = 0.38 |
| **Predictive** | What will happen? | 28-day demand forecasts; defect-rate regression |
| **Prescriptive** | What should we do? | order-up-to policy; operator reallocation plan |

> [!tip] The sentence to open with
> *"Value compounds as you climb: descriptive tells the story, predictive narrows the future, prescriptive changes it — and each level needs the one below to be trustworthy."*

---

## 2 · Problem Framing — the actual skill

### Vague → measurable (the transformation to demonstrate)

| Vague complaint | Measurable analytical problem |
|---|---|
| "Quality is a problem on the line" | "Which stations drive defect concentration, and is station skill associated with defect rate after controlling for complexity?" |
| "Sales are unpredictable" | "Which demand archetype is this SKU? What MAE can a forecast achieve at 28-day horizon, and what inventory cost results?" |
| "Marketing isn't working" | "Which channel's CAC exceeds LTV contribution, and at what confidence?" |

**The framing checklist:** business objective → analytical question → hypothesis → unit of analysis → decision it informs → what changes if the answer is yes/no. *(If the last item is empty, the analysis is decoration.)*

---

## 3 · KPI Design — metrics that drive behavior

### The good-KPI criteria

- **Measurable** — from available, trustworthy data
- **Actionable** — a decision-maker can move it
- **Linked to strategy** — revenue, cost, risk, or service
- **Owned** — a name attached
- **Paired** — every rate metric needs its volume twin (defect *rate* + defect *count*; conversion % + absolute conversions)

### Classic KPI families (be conversational in all)

| Domain | KPIs |
|---|---|
| Revenue | growth, ARPU, AOV, mix |
| Cost | unit cost, cost-to-serve, holding cost |
| Operations | OEE, throughput, cycle time, defect rate (PPM), first-pass yield |
| Inventory | turns, DSI, fill rate, stockout % |
| Marketing/GTM | CAC, LTV, ROAS, conversion rate |
| Customer | NPS, retention, churn, CSAT |

> [!important] The KPI trap interviewers set
> "Our defect KPI improved" — *while* inspection frequency dropped. **Goodhart's law:** when a measure becomes a target, it ceases to be a good measure. Answer: pair metrics, audit inputs, and prefer outcome KPIs (escaped defects) over activity KPIs (inspections done).

---

## 4 · Data-Driven Decision Making — the discipline

```text
Frame → Measure → Analyze → Decide → Implement → Monitor → Learn
```

- **Decision first, data second:** define what decision the analysis serves — prevents "interesting but useless" findings
- **Expected value framing:** EV = P(outcome) × payoff − cost; analytics narrows the P's
- **Decision quality ≠ outcome quality:** a good call can lose (variance); judge process, not a single roll — say this and you sound like someone who's made real decisions
- **Known unknowns:** state assumptions and confidence explicitly — your SIRP's "statistical vs practical significance" discipline applies verbatim

---

## 5 · Stakeholder Management — the MBA half

| Stakeholder | Cares about | You deliver |
|---|---|---|
| Operations head | feasibility, cost, disruption | ranked, low-cost-first actions (your SIP's priority table) |
| Finance | ROI, payback | quantified trade-offs (holding vs stockout, training budget vs defect cost) |
| Frontline supervisors | workload, fairness | transparent criteria (skill matrix, not politics) |
| Leadership | direction + risk | one-page summary with confidence and caveats |

**The buy-in pattern:** involve the data owners early (your plant mentors), validate findings against their intuition (surprises = either insight or data bug — investigate before presenting), and pre-socialize recommendations so the meeting confirms rather than debates.

---

## 6 · From Analysis to ROI — the closing loop

```text
Insight: skill–complexity misalignment is correctable by reallocation
   ↓
Action: move certified high-skill operators to high-complexity stations (cost ≈ 0)
   ↓
Mechanism: complexity–defect r = 0.38, skill–defect r = −0.41 → expected defect reduction
   ↓
Value: fewer defects → less rework, less warranty exposure
   ↓
Measure: re-run the analysis quarterly → defect response at treated stations
```

That loop — *insight → action → mechanism → value → measurement* — is what separates an analyst from a reporter. Your SIP and SIRP both contain it; use them as your examples.

---

## ⚡ Rapid-Fire Q&A

> **Descriptive vs diagnostic vs predictive vs prescriptive?**
> What happened / why / what will happen / what to do — with your own projects as the examples.

> **What makes a KPI good?**
> Measurable, actionable, strategy-linked, owned — and paired with a counter-metric to prevent gaming.

> **How do you handle a stakeholder who disagrees with your data?**
> First assume I'm wrong: audit the pipeline against their operational knowledge. If the data holds, present the mechanism, not just the number — disagreement with findings is usually disagreement with an implied action.

> **How do you decide what to analyze first?**
> Decision-relevance × feasibility (Pareto of questions): what would change if we knew the answer, and can we answer it credibly?

> **Statistical vs practical significance in business terms?**
> "Real but tiny" — with big n, everything is significant; the decision needs effect size and cost. My SIRP's LSTM-vs-MA divergence is exactly this distinction made monetary.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| BA requirements toolkit | [[BA_Toolkit]] |
| Consulting-grade structuring | [[Consulting_Case_Skills]] |
| Where analytics met operations for you | [[../07_OPERATIONS/RCA]] |
| The flagship business story | [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]] |

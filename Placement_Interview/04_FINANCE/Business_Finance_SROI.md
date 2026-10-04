---
title: Business Finance & SROI — HavenOS Defense
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [finance, sroi, level-2, tier-2]
---

# 💰 Business Finance & SROI

> [!important] Why this matters for YOU
> HavenOS claims **₹6.40 Social Return on Investment per ₹1 on a ₹60K/month pilot**. That number will be probed — and behind it sits the whole financial-analysis vocabulary: unit economics, NPV, payback, sensitivity. This note makes the claim defensible and the vocabulary natural.

---

## 1 · The Foundations

| Concept | Definition | Read as |
|---|---|---|
| **Revenue** | value delivered × price | the top line |
| **Fixed cost** | independent of volume (rent, salaries) | the risk floor |
| **Variable cost** | scales with volume (COGS, delivery) | the per-unit drag |
| **Contribution margin** | price − variable cost per unit | what each sale adds toward fixed costs |
| **Break-even** | fixed costs ÷ contribution margin per unit | the survival threshold |
| **ROI** | net gain ÷ investment | simple, timeless-agnostic |
| **Payback period** | investment ÷ annual net inflow | liquidity speed |
| **NPV** | Σ cash flows discounted at r | the *correct* multi-year lens |
| **Unit economics** | per-customer/per-unit profit story | scalable or not? |

$$NPV = \sum_{t=0}^{n} \frac{CF_t}{(1+r)^t}, \qquad CF_0 < 0$$

**One-liner on NPV vs ROI:** *"ROI ignores when money arrives; NPV discounts future cash flows, so ₹1 next year is worth less than ₹1 today — NPV is the decision-grade metric for multi-year bets."* IRR (the rate where NPV = 0) is its headline cousin.

---

## 2 · Unit Economics — the health check

```text
Contribution per customer  =  ARPU − variable cost per customer
CAC recovery               =  CAC ÷ monthly contribution   (payback months)
LTV                        =  contribution × lifetime      (lifetime ≈ 1/churn)
```

- Positive unit economics + long payback = survives, grows slowly
- Negative unit economics = every customer deepens the hole; growth is accelerant on a fire
- **Sensitivity:** change churn or CAC by ±20% → does the model still hold? *The answer discipline applies to any business case.*

---

## 3 · SROI — Social Return on Investment

### The method (Social Value UK framework)

```text
1. Stakeholders            who experience change
2. Outcomes                what changes for them (not outputs!)
3. Indicators & proxies    how we evidence the change
4. Valuation               ₹ value per outcome (incl. proxies)
5. Impact adjustment       − deadweight, − attribution, − displacement, + drop-off
6. SROI ratio              total present value of outcomes ÷ investment
```

| Adjustment | Meaning |
|---|---|
| **Deadweight** | would the outcome have happened anyway? |
| **Attribution** | how much credit is genuinely ours? |
| **Displacement** | did we just move the problem elsewhere? |
| **Drop-off** | do effects decay over time? |

### Your ₹6.40 — the defense frame

> *"₹60K/month pilot input; monetized outcomes across stakeholder groups — time saved, income enabled, service access — valued with documented proxies, then adjusted for deadweight and attribution before summing. The ratio is 6.40:1."*

> [!tip] The credibility sentence (pre-empt the attack)
> *"SROI's soft spot is proxy valuation — so I state every proxy, every adjustment factor, and present the ratio **with a sensitivity band**. A defensible '4.9–8.1:1 under stated assumptions' beats a fragile single number."* *(If the pilot didn't compute a band, say exactly that and how you'd add it — honesty over polish.)*

**Impact vs output — the distinction examiners test:** output = what you *did* (60K spent, sessions delivered); outcome = what *changed* (income, access); impact = outcome net of what would have happened anyway.

---

## 4 · Scenario & Sensitivity Analysis — the business-case engine

```text
Base case       the plan as designed
Best case       optimistic-but-plausible inputs
Worst case      downside stress — survive this?
Break-even case the inputs where value = 0
```

- **One-variable sensitivity:** tornado chart — which assumption swings the answer most?
- **Scenario analysis:** coherent *combinations* of assumptions (recession = lower revenue AND longer CAC together)
- **Monte Carlo (name-drop):** sample input distributions → distribution of NPV → P(loss)

> [!important] The bridge to your SIRP
> The *exact same discipline* as your forecasting study's sensitivity analysis: conclusions must survive parameter changes, or they're parameters. State that parallel in the interview — it shows methodological transfer, not topic memorization.

---

## 5 · Reading a Business in Five Numbers

1. **Contribution margin %** — the operating leverage story
2. **CAC payback** — growth affordability
3. **Burn vs runway** — survival horizon
4. **NPV at a stated discount rate** — is the bet NPV-positive?
5. **Sensitivity of #4** — which assumption is load-bearing?

---

## ⚡ Rapid-Fire Q&A

> **Fixed vs variable cost — why does the split matter?**
> Operating leverage: high fixed costs = scale wins but downside hurts; high variable = resilient but thinner at scale.

> **Break-even in units?**
> Fixed costs ÷ (price − variable cost per unit) — contribution margin is the numerator's partner.

> **NPV vs IRR — when do they disagree?**
> Non-conventional cash flows (sign flips) or mutually exclusive projects of different scale → IRR misleads; trust NPV.

> **What is SROI and how is it different from ROI?**
> ROI monetizes financial return; SROI monetizes *stakeholder outcomes* with proxies, adjusted for deadweight/attribution/displacement — same arithmetic, wider value boundary, heavier assumption burden.

> **How would you stress-test a business case?**
> Tornado the inputs, build coherent worst/base/best scenarios, and state the break-even combination — then present the band, not the point estimate.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| GTM unit economics (CAC/LTV) | [[../03_BUSINESS/GTM_Analytics]] |
| Experimentation discipline | [[../03_BUSINESS/AB_Testing]] |
| The sensitivity-analysis method (same logic) | [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]] |

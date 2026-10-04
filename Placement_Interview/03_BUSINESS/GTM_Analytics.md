---
title: GTM Analytics — Go-to-Market Metrics & Strategy
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [gtm, marketing, competition, level-2, tier-2]
---

# 🚀 GTM Analytics

> [!important] Your competition ammunition
> The IIT Mandi × Zomato win (10.4% AOV lift via segmentation) makes GTM fair game in any interview. This note gives you the framework fluency to defend that result and handle any market-sizing or growth question.

---

## 1 · What GTM Analytics Answers

```text
WHO do we serve?  →  WHAT do we offer?  →  WHERE do we reach them?
→  HOW do we convert?  →  WHAT does it cost?  →  IS it working?
```

A go-to-market strategy is a *hypothesis about a market*, and analytics is how the hypothesis is formed, sized, and measured.

---

## 2 · Segmentation — the foundation

| Basis | Example cut |
|---|---|
| **Demographic** | age, income, geography |
| **Behavioral** | order frequency, basket size, channel, time-of-day |
| **Psychographic** | lifestyle, values |
| **Firmographic** (B2B) | industry, company size, tech stack |

**The analytics behind it:** RFM (Recency, Frequency, Monetary) scoring → k-means → *named, actionable* segments. The deliverable isn't clusters — it's segments a marketer can *act on* ("weekend family bulk-buyers" vs "late-night single-item convenience orders").

**Your Zomato story in this language:** behavioral segmentation of ordering patterns → matched promos/menus/channel timing per segment → **+10.4% AOV** on targeted cohorts. Be ready for: *"How would you validate that the lift was causal, not seasonality?"* → holdout control group, pre-period baseline, and a significance test on the AOV difference (your statistics layer, reused).

---

## 3 · Market Sizing — TAM / SAM / SOM

```text
TAM  Total Addressable Market      everyone who could buy the category
SAM  Serviceable Addressable        the slice you can actually reach/serve
SOM  Serviceable Obtainable         the slice you can win in the planning horizon
```

**Sizing methods (practice one of each):**

- **Top-down:** TAM = population × penetration × spend (fast, blunt)
- **Bottom-up:** SOM = # target accounts × conversion × ACV (slower, credible — *lead with this in interviews*)
- **Value-theory:** willingness-to-pay × volume at that price

> **Sample sizing question:** *"Zomato in a tier-2 city?"* → bottom-up: population → smartphone + delivery-app penetration → avg monthly order value × order frequency → SAM; apply realistic share ramp for SOM. Always show the arithmetic, state assumptions, and sanity-check against known anchors.

---

## 4 · The Unit-Economics Engine — CAC, LTV, AOV

| Metric | Formula | The line |
|---|---|---|
| **CAC** | sales+marketing spend ÷ new customers | what a customer costs to acquire |
| **AOV** | revenue ÷ orders | basket size — your 10.4% lever |
| **LTV** | ARPU × gross margin × avg lifetime (or margin ÷ churn) | what a customer is worth |
| **LTV:CAC** | ratio | ≥ 3 healthy; < 1 you're buying revenue |
| **Payback** | CAC ÷ monthly contribution | months to recover acquisition |
| **Contribution margin** | revenue − variable costs per unit | what's left to fight fixed costs with |

```text
AOV levers:  bundling · minimum-order free delivery · cross-sell at checkout
             tiered promos (spend-more-save-more) · personalized recommendations
```

> [!important] The trap: growth ≠ health
> *"CAC can be lowered by cutting quality channels, LTV inflated by optimistic churn assumptions. I'd always report LTV:CAC with payback period and cohort-level retention — a ratio without its inputs is a slogan."*

---

## 5 · Funnel & Growth Loops

```text
AARRR:  Acquisition → Activation → Retention → Referral → Revenue
```

- **Funnel analysis:** drop-off per step, by segment; the biggest leak is usually the highest-ROI fix (Pareto applies)
- **Retention is the gravity:** without it, acquisition is a leaking bucket — cohort retention curves first, growth hacks second
- **Growth loops** vs funnels: loops compound (user output → new user input: referrals, UGC, marketplace liquidity); funnels leak downward by design
- **Experimentation:** every GTM claim should be an A/B test — control, lift, p-value, practical significance → [[AB_Testing]]

---

## 6 · Channel & Pricing Vocabulary

| Term | Meaning |
|---|---|
| Channel strategy | where you sell/promote: D2C, marketplace, retail, B2B partnerships — chosen by CAC & control trade-offs |
| Positioning | the claim that wins the category slot in the customer's head ("fastest," "cheapest," "safest") |
| Growth loops vs funnels | compounding vs leaking — design for loops |
| Price elasticity | % demand change per 1% price change — promo sizing needs it |
| Dynamic pricing | price by demand/supply signals (surge, markdown) |
| skimming / penetration | high-entry-then-lower vs low-entry-then-scale |

---

## 7 · Your Competition Stories — the 2-minute defense frames

### IIT Mandi × Zomato (+10.4% AOV)
1. **Problem:** flat AOV in a saturated urban segment
2. **Data:** order-level behavioral data → RFM/k-means segments
3. **Strategy:** segment-matched menu/promo/timing interventions
4. **Result:** +10.4% AOV on targeted cohorts vs baseline
5. **Your contribution + validity:** segmentation design and measurement; holdout logic; significance of the lift

### IIM Mumbai × PocketJoystick
- Business model (customer problem → product → revenue model) · competitive advantage (why *this* team) · investor logic (market size, unit economics, moat)

### MICA × UCB
- Target audience → channel mix → campaign funnel → measurement (reach → engagement → conversion → CAC)

---

## ⚡ Rapid-Fire Q&A

> **How would you raise AOV 10% without hurting margin?**
> Behavioral levers that grow basket *value*, not discount depth: bundling, spend-threshold free delivery, personalized cross-sell — then A/B test, measure margin-adjusted AOV, watch for pull-forward (buying tomorrow's orders today).

> **CAC is rising — diagnose.**
> MECE: audience saturation (frequency up, reach flat) · channel mix shift to expensive channels · creative fatigue · landing/conversion drop · competition bidding up auctions. Check each with channel-level CAC trends.

> **How do you size a market you know nothing about?**
> Bottom-up with stated assumptions, triangulated top-down, anchored to any known comparable; show the arithmetic so assumptions are attackable and refinable.

> **What's a healthy LTV:CAC?**
> ~3:1 with payback < 12 months for consumer; below 2 → unit economics strain, above 5 → you may be under-investing in growth.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Product-side metrics | [[Product_Analytics]] |
| The experimentation engine | [[AB_Testing]] |
| Unit economics & SROI depth | [[../04_FINANCE/Business_Finance_SROI]] |

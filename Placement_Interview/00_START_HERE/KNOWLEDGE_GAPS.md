---
title: Knowledge Gaps — What Is Missing vs What Is Needed
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
---

# Knowledge Gaps — What Is Missing vs What Is Needed

> **Source:** Resume + SIP/SIRP extracts vs 8-domain target
> **Purpose:** Consolidated gaps — what blocks interview defense, what is needed before Phase 2 deep dives
> **Rule:** No fabrication. Every gap marked 🚫 [USER INPUT REQUIRED] until you provide it.

---

## How Gaps Are Classified

| Type | Meaning | Action |
|---|---|---|
| **A — Source Gap** | Resume claims it, but source is fragmented or missing detail | You provide detail |
| **B — Knowledge Gap** | Concept needed to defend claim, not yet built as knowledge note | Phase 2 builds it |
| **C — Evidence Gap** | Claim needs measurement proof (baseline, method, period) | You provide evidence |
| **D — Methodology Gap** | How something was done is unclear | You clarify method |

---

## G01 — Source & Evidence Gaps (Require Your Input)

| # | Gap | Type | Blocks | Question to Resolve |
|---|---|---|---|---|
| G01-01 | 70% baseline (hours, reports, period) | C | N01 defense | What was manual reporting time before/after? Over what window? |
| G01-02 | 60 min/day measurement method + flow architecture | C/D | N02 defense | How measured? Trigger type? Steps? Failure handling? Still running? |
| G01-03 | Power BI dashboard KPIs + data model + refresh latency | A/D | 02.02 defense | Which KPIs? Star schema? Scheduled vs DirectQuery? Latency? Users? |
| G01-04 | Process mapping tool + notation + top inefficiencies | D | 02.05 defense | Visio/Lucidchart/Excel? SIPOC/VSM/flowchart? What inefficiencies found? |
| G01-05 | 1M records grain (engine vs station-op vs defect event) | C | N05 defense | What is one row? How many unique engines? Data model? |
| G01-06 | Healthium Medtech bullets (entire internship scope) | A | P02 defense | Provide 2–3 Healthium bullets or certificate scope |
| G01-07 | ALPR latency/FPS, accuracy, dataset, hardware, EasyOCR rationale | A/C | P03 defense | FPS? Precision/recall? Dataset size? Hardware? Why EasyOCR? |
| G01-08 | BakaTracker LLM provider/model, MCP server/tools, workflow trace, guardrails, scale | A/D | P04 defense | Which LLM? MCP server spec? One NL→action trace? Hallucination handling? |
| G01-09 | HavenOS SROI inputs/proxies, beneficiary count, pilot duration, scheduling AI detail, 20% baseline | A/C/D | P05 defense | SROI model file? Beneficiaries? Duration? AI role? Baseline cost? |
| G01-10 | MICA×UCB UCB identity, problem, strategy, channels, deck | A | P06 defense | UCB = ? Problem statement? Your engine? Deck? |
| G01-11 | Zomato baseline AOV, lever, modeled vs measured, assumptions | C | N16 defense | Baseline? Lever (bundle/promo/upsell)? Modeled or piloted? |
| G01-12 | PocketJoystick product, BMC, GTM, pitch outcomes | A | P08 defense | What product? Business model? GTM? What did VCs say? |
| G01-13 | Global Citizen Leader scope | A | 09.03 defense | What was the program? Your role? |
| G01-14 | Excel automation specifics (features used) | D | Skill defense | Which Excel features for automation? |
| G01-15 | SAP HANA specifics (Studio vs SQL, view types) | D | Skill defense | How did you query HANA? Views? Tables? |
| G01-16 | NLP / FastAPI / JS usage context | A | Skill defense | Where did you use NLP, FastAPI, JS beyond listing? |

---

## G02 — Knowledge Gaps (Phase 2 Must Build — No Input Needed, Just Build Order)

### Priority 1 — Blocks Highest-Risk Claims (Build First)

| Gap | Domain | Why Priority 1 |
|---|---|---|
| Correlation (Pearson/Spearman, r, p-value, CI) | 02_ANALYTICS/Statistics | r=-0.41 defense |
| Regression (OLS, slope, R², residuals, assumptions) | 02_ANALYTICS/Statistics | ~440/1K defense |
| Significance vs causation vs confounding | 02_ANALYTICS/Statistics | Causality attack |
| Winsorising / robustness | 02_ANALYTICS/Statistics | Outlier attack |
| Seeded Simulation disclosure (30s/2m/deep) | 07_OPERATIONS/TATA_MOTORS | Strongest attack vector |
| MCP architecture (client/server/tools vs API vs function calling) | 01_AI/MCP | BakaTracker defense |
| LLMs (tokens, RAG, agents, hallucination, guardrails) | 01_AI | BakaTracker defense |
| Power BI (DAX, star schema, refresh, dashboard storytelling) | 02_ANALYTICS | Tata dashboards |

### Priority 2 — Blocks High-Risk Claims

| Gap | Domain | Why Priority 2 |
|---|---|---|
| Manufacturing (cycle time, throughput, bottleneck, OEE, takt) | 07_OPERATIONS | Tata context |
| Quality (Pareto, Fishbone, 5 Why, DMAIC, Cp/Cpk) | 07_OPERATIONS | RCA defense |
| Process Mapping (SIPOC, VSM, flowcharts) | 07_OPERATIONS | 60+ ops defense |
| Workforce Analytics (skill matrix 1–5, allocation) | 07_OPERATIONS | Skill-defect link |
| KPI Development (leading vs lagging, SMART) | 07_OPERATIONS | Dashboard defense |
| Python/Pandas (cleaning, groupby, merge, pivot) | 02_ANALYTICS | 1M-record handling |
| SQL (JOINs, CTEs, windows, optimization) | 02_ANALYTICS | Extraction defense |
| CV/OCR (OpenCV, EasyOCR, pipeline, lighting) | 01_AI | ALPR defense |
| SROI methodology (6 stages, monetization, attribution) | 04_FINANCE | HavenOS defense |
| GTM (ICP, segmentation, channels, funnel) | 03_BUSINESS | Case comps |

### Priority 3 — Needed for Breadth, Lower Immediate Risk

| Gap | Domain | Why Priority 3 |
|---|---|---|
| Excel (formulas → Power Query → dashboards) | 02_ANALYTICS | Listed skill |
| Tableau vs Power BI | 02_ANALYTICS | Comparison |
| NLP fundamentals | 01_AI | Listed skill |
| FastAPI / APIs / React / Git | 08_TECHNOLOGY | Stack breadth |
| SAP HANA / Power Automate deep dive | 08_TECHNOLOGY | Automation defense |
| Strategy (SWOT, Porter, BMC, TAM/SAM/SOM) | 03_BUSINESS | PocketJoystick |
| Finance (ROI, NPV, IRR, unit econ) | 04_FINANCE | HavenOS + cases |
| Management / Leadership (STAR, delegation) | 06_MANAGEMENT | HR defense |
| HR / General (tell-me-about-yourself, why RBA) | 05_GENERAL | Placement |

---

## G03 — Prerequisite Knowledge Not Explicitly on Resume (But Required to Defend)

These concepts are not named on the resume but are prerequisites for interview defense:

| Prerequisite | Needed For | Why |
|---|---|---|
| Mean, variance, covariance, distributions, sampling, CLT, confidence intervals | r=-0.41 | Interviewer builds from foundations |
| Hypothesis testing, t-test, chi-square, ANOVA | SIRP | "What test would you use if...?" |
| Descriptive stats (mean/median/mode, variance/SD) | All analytics | Foundations |
| Data cleaning (missing, duplicates, outliers) | 1M records | "How did you clean 1M rows?" |
| EDA | Tata Motors | "What did EDA show before correlation?" |
| Bias-variance, overfitting, cross-validation, feature engineering | ML claims | If interviewer probes ML depth |
| Star schema, fact/dim, relationships, DAX evaluation context | Power BI | DAX deep dive |
| HTTP/REST, JSON, auth, status codes | FastAPI/BakaTracker | API fundamentals |
| AOV drivers, CAC/LTV, cohort, payback | Case comps | Business fundamentals |
| SROI vs ROI vs NPV | HavenOS | Finance confusion |
| Theory of Constraints, bottleneck | Operations | Existing note: Theory_of_Constraints.md |

---

## G04 — Source Quality Gaps

| Source Needed | Priority | Current Status |
|---|---|---|
| Official docs: pandas, Power BI/DAX, OpenCV, EasyOCR, MCP spec | P1 | Not yet collected — Phase 2 per-topic SOURCES |
| University: MIT Sloan manufacturing/AI cases, stats textbooks | P1 | Not yet — Phase 2 |
| SIRP full 30-page paper (for deep defense) | P1 | ✅ Available: `04_Career/Tata Motors Internship/SIRP_30pg_Research_Paper.pdf` — needs full parse for Phase 2 Tata deep dive |
| Case decks: MICA×UCB, Zomato, PocketJoystick | P2 | 🚫 [USER INPUT REQUIRED] |
| BakaTracker / ALPR repos | P2 | 🚫 [USER INPUT REQUIRED] |
| HavenOS model | P2 | 🚫 [USER INPUT REQUIRED] |

---

## Unresolved [USER INPUT REQUIRED] — Consolidated Checklist

Provide these **before Phase 2 deep dives** for the affected projects (copy-paste and fill):

```text
[ ] G01-01: 70% baseline (before hrs, after hrs, reports/week, window):
[ ] G01-02: 60 min/day (measurement method, flow trigger, steps, failure handling):
[ ] G01-03: Power BI dashboard (KPIs, data model, refresh method, latency, users):
[ ] G01-04: Process map (tool, notation, top 3 inefficiencies):
[ ] G01-05: 1M records grain (row = ?, unique engines, data model):
[ ] G01-06: Healthium bullets (2–3 bullets):
[ ] G01-07: ALPR (FPS/latency, accuracy, dataset, hardware, why EasyOCR):
[ ] G01-08: BakaTracker (LLM provider/model, MCP server/tools, one workflow trace, guardrails):
[ ] G01-09: HavenOS (SROI inputs/proxies, beneficiaries, pilot duration, AI role, 20% baseline):
[ ] G01-10: MICA×UCB (UCB = ?, problem, strategy, channels, deck):
[ ] G01-11: Zomato (baseline AOV, lever, modeled vs measured, assumptions):
[ ] G01-12: PocketJoystick (product, BMC, GTM, outcomes):
[ ] G01-13: Global Citizen Leader (scope):
[ ] G01-14/15/16: Excel/SAP HANA/NLP/FastAPI/JS specifics:
```

> **You can answer partially** — even 3–4 items unlocks their Phase 2 deep dives. Leave others as [USER INPUT REQUIRED] and they will remain flagged.

---

## What Phase 1 Deliberately Did Not Do

- No deep topic research (no AI, SQL, Power BI, SROI, MCP notes yet)
- No visuals collected (no diagrams, dashboards, architecture images)
- No interview question banks built (only question *stems* per claim)
- No knowledge notes created in 01_AI … 08_TECHNOLOGY
- No resume defense scripts (30s/2m/deep) — those are Phase 2 (16_RESUME_DEFENSE)

Phase 1 is the **map**, not the territory.

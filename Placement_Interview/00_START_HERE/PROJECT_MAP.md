---
title: Project Map — 7 Projects + Internships
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
---

# Project Map — 7 Projects + Internships

> **Source:** Resume + SIP/SIRP extracts
> **Purpose:** One page per project — what it is, what you claimed, what knowledge it requires, what interviewers will attack
> **Cross-refs:** Source material lives in `04_Career/`; deep dives will live in `09_RESUME_PROJECTS/` (Phase 2+)

---

## P01 — TATA MOTORS — AI Research & Business Analytics Intern (SIP: May–Jul 2026)

| Field | Detail |
|---|---|
| **Role** | AI Research & Business Analytics Intern, Engine Manufacturing Division, Jamshedpur |
| **Line** | 5L Diesel Engine, BSVI-compliant — 96 stations (31 Short Block + 65 Long Block), ~60 operations |
| **Data** | 3+ years, ~1M records, 110 operators (258 obs), station master, defect logs, skill matrix |
| **What you did** | Process mapping (60+ ops, Gemba), manufacturing analytics, workforce analytics, KPI dashboards, correlation/regression (96×258), SIP report, SIRP research paper |
| **Claims** | 70% reporting reduction (Python/SQL/Excel/SAP HANA) · Near-real-time Power BI dashboards · 60 min/day Power Automate savings · r=-0.41 (p<0.001) · ~440 defects/1K engines per skill point · 20 priority stations · ~1M records |
| **Methodology** | Correlational design + **Seeded Simulation** (real station structure/complexity/aggregates + modeled skill/defect calibrated to benchmarks, seed=20260715) |
| **Knowledge graph** | ```TATA MOTORS → Manufacturing → Assembly Line → Process Map (SIPOC/VSM) → Workforce Skill (1-5) → Defects/1K → Stats (Pearson→Spearman→OLS→R²→CI→Winsorise) → Complexity (formula) → Dashboard (Power BI/DAX) → Automation (SAP HANA/SQL/Power Automate) → Recommendations``` |
| **Interview risk** | 🔴 **Highest** — Seeded Simulation disclosure, r=-0.41 causality, 440 units, complexity confounding, 60+ vs 96, record grain |
| **Deep dive location** | Phase 2: `07_OPERATIONS/TATA_MOTORS/` + `02_ANALYTICS/Statistics/Correlation/` |
| **Source** | `04_Career/Tata Motors Internship/` (SIP/SIRP PDFs, extracts, data, notebooks) |

**One-line defense:** "96-station census of the 5L line; real structure + transparently modeled skill/defect (seed 20260715); r=-0.41 (p<0.001, R²~17%, robust to Winsorising) suggests skill predicts defects with complexity as a confound — actionable as 20 priority stations for training."

---

## P02 — HEALTHIUM MEDTECH — Business Analyst Intern (Mar–Aug 2023)

| Field | Detail |
|---|---|
| **Role** | Business Analyst Intern |
| **Period** | Mar 2023 – Aug 2023 (6 months; pre-WeSchool) |
| **What you did** | [USER INPUT REQUIRED: specific Healthium bullets — PDF extraction fragmented; Healthium text was interleaved with Tata Motors block] |
| **Inferred stack** | Likely: Excel, SQL, Power BI, business reporting, stakeholder analysis (based on role title + adjacent Tata Motors stack) — do not assume; confirm |
| **Knowledge graph** | ```HEALTHIUM → Business Analysis → Requirements → Reporting → Stakeholders → [USER INPUT REQUIRED]``` |
| **Interview risk** | 🟡 Medium — gap in source; interviewer will ask "What did you actually do at Healthium vs Tata Motors?" |
| **Deep dive location** | Phase 2: `09_RESUME_PROJECTS/HEALTHIUM/` |
| **Source** | `04_Career/` — [USER INPUT REQUIRED: Healthium bullets or internship certificate] |

**Action:** Provide 2–3 Healthium bullet points to map correctly. Without them, this project cannot be defended.

---

## P03 — ALPR — Automatic License Plate Recognition (Python, OpenCV, EasyOCR, Streamlit)

| Field | Detail |
|---|---|
| **What it is** | Real-time vehicle identification from image + video streams — plate localization → crop → OCR → cleaning → validation → output |
| **Stack** | Python, OpenCV, EasyOCR, Streamlit (+ FastAPI if API layer) |
| **Pipeline** | ```IMAGE/VIDEO → Preprocessing (blur, threshold, morphology, hist eq) → Plate Localization (edge/contour or detector) → Crop → OCR (EasyOCR) → Text Cleaning → Validation → Output``` |
| **Claims** | Real-time · Robust across lighting/environmental conditions · Improved detection reliability |
| **Knowledge graph** | ```ALPR → CV Fundamentals (pixels/RGB/grayscale/resolution) → Image Processing (threshold/contour/morphology/blur) → OpenCV → Object Detection/Localization → OCR (EasyOCR vs Tesseract) → Streamlit → Evaluation (precision/recall, lighting test set) → Deployment``` |
| **Interview risk** | 🟠 High — "real-time" latency/FPS, EasyOCR choice, lighting robustness evidence, localization failure modes |
| **Deep dive location** | Phase 2: `01_AI/Computer_Vision/ALPR/` + `08_TECHNOLOGY/` |
| **Source** | Project repo [USER INPUT REQUIRED: GitHub link or codebase location] |

**One-line defense:** "Image → preprocessing (adaptive threshold + morphology for lighting) → contour-based plate localization → EasyOCR → validation; Streamlit for demo; robustness tested across lighting variations."

**Missing to defend:** Latency/FPS, hardware, accuracy (precision/recall), dataset size, EasyOCR vs Tesseract rationale → [USER INPUT REQUIRED]

---

## P04 — BAKATRACKER — AI-Powered Productivity Platform (Python, MCP, React)

| Field | Detail |
|---|---|
| **What it is** | Transforms personal activity data → personalized prioritization, insights, productivity workflows; natural-language task management |
| **Stack** | Python, MCP, React, GenAI/LLMs, (FastAPI, DB [USER INPUT REQUIRED]) |
| **Architecture** | ```USER → React UI → Application → AI Agent → MCP (client/server/tools/resources/prompts) → Tools/Data → Action``` |
| **Claims** | GenAI + MCP workflows · Natural-language task mgmt · Automated actions · Contextual recommendations · AI-assistant integrations |
| **Knowledge graph** | ```BAKATRACKER → Product (problem/user/workflow) → LLMs (tokens/RAG/agents) → MCP (client/server/tools vs API vs function calling) → Agent Workflows → React → FastAPI → Automation → Contextual Recs``` |
| **Interview risk** | 🔴 **Highest (tie with Tata r=-0.41)** — MCP vs API, end-to-end workflow, hallucination guard, tool security, scale (10K users) |
| **Deep dive location** | Phase 2: `01_AI/MCP/` + `09_RESUME_PROJECTS/BAKATRACKER/` + `08_TECHNOLOGY/` |
| **Source** | Project repo [USER INPUT REQUIRED: codebase, LLM provider/model, MCP server spec] |

**One-line defense:** [USER INPUT REQUIRED: cannot craft without LLM provider, MCP server detail, one concrete workflow example]

**Missing to defend:** LLM provider/model, MCP server/tools list, one end-to-end NL → action trace, guardrails, scale story → [USER INPUT REQUIRED]

---

## P05 — HAVENOS — AI-Enabled Inter-Generational Care Ecosystem

| Field | Detail |
|---|---|
| **What it is** | Care ecosystem connecting generations — volunteer scheduling + capacity planning + financial/operational performance models |
| **Claims** | ₹6.40 SROI on ₹60K/month pilot · AI-assisted volunteer scheduling + capacity planning · Up to 20% per-capita cost reduction (projected) |
| **Knowledge graph** | ```HAVENOS → Business Model (users, value prop) → Operations (scheduling, capacity planning) → Finance (SROI methodology: stakeholders→outcomes→monetization→deadweight/attribution/displacement→drop-off→ratio) → AI Scheduling → Unit Economics``` |
| **Interview risk** | 🟠 High — SROI monetization, attribution, double counting, pilot scope (beneficiaries, duration) |
| **Deep dive location** | Phase 2: `04_FINANCE/SROI/` + `09_RESUME_PROJECTS/HAVENOS/` |
| **Source** | Financial model [USER INPUT REQUIRED: model file, pilot details] |

**One-line defense:** [USER INPUT REQUIRED: SROI inputs, beneficiary count, pilot duration]

**Missing to defend:** SROI inputs/proxies, beneficiary count, pilot duration, scheduling AI detail, baseline for 20% → [USER INPUT REQUIRED]

---

## P06 — MICA AHMEDABAD × UCB — National Finalist (Customer Acquisition Engine)

| Field | Detail |
|---|---|
| **What it is** | Customer acquisition engine for UCB (University? Brand? [USER INPUT REQUIRED]) — case competition |
| **Result** | National Finalist |
| **Claim** | "Planned customer acquisition engine" |
| **Knowledge graph** | ```MICA×UCB → Marketing (segmentation/targeting/positioning) → GTM (ICP, value prop, channels, pricing) → Acquisition (funnel, CAC, LTV, conversion, retention, referral, cohort) → Financial impact``` |
| **Interview risk** | 🟡 Medium — what was the engine? Channels? CAC/LTV/payback? |
| **Deep dive location** | Phase 2: `03_BUSINESS/GTM/` + `11_CASE_LIBRARY/MICA_UCB/` |
| **Source** | Case deck [USER INPUT REQUIRED: deck or problem statement] |

**Missing to defend:** UCB full name, problem statement, your strategy, channels, metrics, deck → [USER INPUT REQUIRED]

---

## P07 — IIT MANDI × ZOMATO — National Runner-Up (AOV +10.4% via GTM Analytics)

| Field | Detail |
|---|---|
| **What it is** | GTM analytics to increase Zomato Average Order Value |
| **Result** | National Runner-Up |
| **Claim** | "Increased AOV by 10.4% through GTM analytics" |
| **Levers** | AOV drivers: upselling, cross-selling, bundling, pricing, promotions, minimum-order nudge |
| **Knowledge graph** | ```ZOMATO → AOV (revenue/orders) → GTM → Levers (upsell/bundle/promo) → Analytics → 10.4% attribution → Risks (cannibalization, churn)``` |
| **Interview risk** | 🟠 High — 10.4% baseline, modeled vs measured, lever, causality |
| **Deep dive location** | Phase 2: `03_BUSINESS/GTM/` + `11_CASE_LIBRARY/ZOMATO_AOV/` |
| **Source** | Case deck [USER INPUT REQUIRED: deck, baseline, lever, modeled vs measured] |

**Missing to defend:** Baseline AOV, specific lever, modeled vs measured, assumptions → [USER INPUT REQUIRED]

---

## P08 — POCKETJOYSTICK — Co-Founder (Rank 1 IIM Mumbai, Finalist IIT Madras)

| Field | Detail |
|---|---|
| **What it is** | [USER INPUT REQUIRED: product definition — hardware, software, gaming?] |
| **Result** | Rank 1 IIM Mumbai, National Finalist IIT Madras |
| **Claim** | "Pitched business model and GTM strategy to 20+ VCs & 4 Startup Incubators" |
| **Knowledge graph** | ```POCKETJOYSTICK → Entrepreneurship → Business Model (BMC) → GTM (ICP, channels, pricing) → VC Pitch (deck, TAM/SAM/SOM, unit econ, ask) → Incubator evaluation``` |
| **Interview risk** | 🟡 Medium — outcomes (funding/feedback vs just pitches), business model coherence |
| **Deep dive location** | Phase 2: `03_BUSINESS/Strategy/` + `09_RESUME_PROJECTS/POCKETJOYSTICK/` |
| **Source** | Pitch deck [USER INPUT REQUIRED: deck, product, GTM, outcomes] |

**Missing to defend:** Product, business model, GTM, pitch outcomes/learnings → [USER INPUT REQUIRED]

---

## All Projects — At a Glance

| # | Project | Period | Tech/Business Core | Quant Claim | Risk | Source Status |
|---|---|---|---|---|---|---|
| P01 | Tata Motors SIP | May–Jul 2026 | Mfg analytics, stats, Power BI, automation | 70%, 60m, r=-0.41, 440/1K, 1M, 96 | 🔴 Highest | ✅ Extracted |
| P02 | Healthium | Mar–Aug 2023 | Business analysis | — | 🟡 | ❓ Fragmented |
| P03 | ALPR | Academic | CV, OCR, Streamlit | Real-time, robust | 🟠 High | ❓ No metrics |
| P04 | BakaTracker | Academic | GenAI, MCP, React | — | 🔴 Highest | ❓ No arch detail |
| P05 | HavenOS | Academic | SROI, ops, AI scheduling | ₹6.40, ₹60K, 20% | 🟠 High | ❓ No model |
| P06 | MICA×UCB | Case comp | GTM, acquisition | Finalist | 🟡 | ❓ No deck |
| P07 | Zomato AOV | Case comp | GTM analytics | 10.4% | 🟠 High | ❓ No baseline |
| P08 | PocketJoystick | Co-founder | BMC, GTM, VC pitch | 20+ VCs, 4 incubators | 🟡 | ❓ No deck |

> **Pattern:** Tata Motors is the only project with full source evidence (SIP/SIRP). The other 6 need [USER INPUT REQUIRED] to reach defensible depth. See `KNOWLEDGE_GAPS.md`.

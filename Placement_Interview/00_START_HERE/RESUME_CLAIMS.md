---
title: Resume Claims — Complete Decomposition
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
---

# Resume Claims — Complete Decomposition

> **Source:** `05_Knowledge/Resume Shiva-7.pdf` (parsed 2026-08-28) + SIP extract
> **Rule:** Every bullet → KNOWLEDGE + TOOLS + BUSINESS CONCEPTS + INTERVIEW QUESTIONS + GAPS
> **Truth badges:** ✅ Verified · 🔍 Needs Evidence · ❓ Needs Clarification · 📚 Knowledge Dependency · 🚫 [USER INPUT REQUIRED]

---

## How to Read This Document

| Field | Meaning |
|---|---|
| **Claim** | Exact resume wording (or closest paraphrase when PDF extraction fragmented) |
| **Truth** | Badge per Resume Truth Layer |
| **Knowledge Required** | Concepts needed to defend in interview |
| **Tools** | Technologies/methods the claim implies proficiency in |
| **Business Concepts** | Business logic behind the claim |
| **Interview Questions** | Likely questions at 3 levels: Basic → Intermediate → Challenge |
| **Gap** | What is missing to fully defend |

---

## 01 — ACADEMIC PROFILE

### Claim 01.01 — PGDM Research & Business Analytics, Welingkar Mumbai, GPA 8.0 (2025–27)

- **Truth:** ✅ Verified — explicitly on resume
- **Knowledge Required:** 📚 What RBA covers; why RBA vs general MBA; curriculum structure
- **Interview Questions:**
  - Basic: "Why RBA?"
  - Intermediate: "How does RBA differ from Business Analytics vs Data Science?"
  - Challenge: "You did BCA Data Science already — why repeat analytics at PGDM level?"
- **Gap:** None — factual

### Claim 01.02 — BCA Data Science, Bennett University, GPA 8.9 (2020–24)

- **Truth:** ✅ Verified
- **Knowledge Required:** 📚 BCA curriculum; Data Science fundamentals covered; transition story BCA→RBA
- **Interview Questions:** "Why BCA then PGDM? Why not direct MBA? What did BCA not give you?"
- **Gap:** None — factual

### Claim 01.03 — Intermediate (BIEAP) PCM 77.9% (2018–20), ICSE Loyola 71.4%

- **Truth:** ✅ Verified
- **Gap:** None — factual; low interview risk unless asked about academic trajectory

---

## 02 — TATA MOTORS — AI RESEARCH & BUSINESS ANALYTICS INTERN (May–July 2026)

### Claim 02.01 — "Automated SAP HANA data extraction workflows using Python, SQL, and Excel, reducing manual reporting effort by 70%."

- **Truth:** ✅ Verified (resume) — 🔍 Needs Evidence (how measured)
- **Knowledge Required:** 📚 SAP HANA (in-memory, columnar, SQL interface), ETL vs ELT, Python DB connectors (pyhdb/hdbcli/pyodbc), SQL extraction (SELECT, JOINs, views), Excel automation (openpyxl/xlsxwriter vs Power Query), workflow scheduling
- **Tools:** SAP HANA, Python, SQL, Excel
- **Business Concepts:** Manual reporting cost, baseline measurement, time saved → FTE equivalent, error reduction, near-real-time vs batch
- **Interview Questions:**
  - Basic: "What was the manual process before?"
  - Intermediate: "What did Python do vs SQL vs Excel? Why three tools?"
  - Challenge: "How did you calculate 70%? What was baseline — hours/week, reports/week? Over what period? Single snapshot or sustained?"
  - Challenge: "Why SAP HANA and not direct ERP export? What was the bottleneck?"
- **Gap:** ❓ Baseline denominator (70% of what?), measurement period, report volume, before/after hours. → 🚫 [USER INPUT REQUIRED: baseline hours, report count, measurement window]

### Claim 02.02 — "Developed automated Power BI dashboards providing near real-time business insights."

- **Truth:** ✅ Verified — ❓ Needs Clarification ("near real-time" latency)
- **Knowledge Required:** 📚 Power BI (Power Query, data modeling, star schema, DAX, measures vs calculated columns, CALCULATE/FILTER/SUMX, scheduled refresh vs DirectQuery), KPI design, dashboard storytelling (bad vs good)
- **Tools:** Power BI, DAX, Power Query, SAP HANA (source)
- **Business Concepts:** KPI selection (what was measured?), refresh cadence, stakeholder adoption, insight → action
- **Interview Questions:**
  - Basic: "What KPIs were on the dashboard?"
  - Intermediate: "What data model did you use? Fact/dimension tables? Relationships?"
  - Challenge: "You say near real-time — what was actual refresh latency? Manual refresh, scheduled, or DirectQuery? Who defined 'insights'?"
- **Gap:** ❓ Dashboard content (which KPIs), data model, refresh method, latency definition, users. → 🚫 [USER INPUT REQUIRED: dashboard KPIs, data model, refresh cadence, stakeholder]

### Claim 02.03 — "Automated enterprise email reporting using Microsoft Power Automate, saving approx 60 mins daily."

- **Truth:** ✅ Verified — 🔍 Needs Evidence (60 mins sustained vs peak)
- **Knowledge Required:** 📚 Power Automate (triggers, actions, connectors, conditions, loops, scheduled vs automated flows, error handling), email automation (Outlook connector, HTML tables, attachments)
- **Tools:** Power Automate, Outlook/Exchange, Power BI/Excel (source)
- **Business Concepts:** Time saved → annualized FTE, reliability, failure modes, handover
- **Interview Questions:**
  - Basic: "What did the flow do step by step?"
  - Intermediate: "What was the trigger — schedule, data refresh, manual? How did you handle failures?"
  - Challenge: "How did you measure 60 mins? Self-reported, time-motion, or manager validated? Is it still running after you left?"
- **Gap:** ❓ Flow architecture, trigger type, failure handling, measurement method, sustainability. → 🚫 [USER INPUT REQUIRED: flow trigger, steps, failure handling, how 60 mins was measured]

### Claim 02.04 — SIP: "Evaluated 3+ years of manufacturing data across 60+ assembly stations, uncovering skill-defect correlations to support data-driven quality improvement."

- **Truth:** ✅ Verified (resume) — SIP extract confirms 96 stations, 258 obs, 3+ years
- **Knowledge Required:** 📚 Manufacturing analytics, assembly line structure (Short Block 31 + Long Block 65 = 96), defect taxonomy, workforce skill matrix (5-level scale), EDA
- **Tools:** Python, SQL, Excel, Power BI
- **Business Concepts:** Correlation vs causation, quality cost (rework → inspection → field failure 1:10:100)
- **Interview Questions:**
  - Basic: "What data did you actually have vs what was modeled?"
  - Intermediate: "Why 60+ vs 96 stations — which is correct? Describe the Seeded Simulation methodology."
  - Challenge: "If skill data was modeled, what does the correlation actually prove?"
- **Gap:** Note discrepancy: resume says "60+ stations" but SIRP uses 96 (31+65). Both appear; SIRP is authoritative census. → Flag in RESUME_NUMBERS.md

### Claim 02.05 — SIP: "Developed end-to-end process map of 5L Diesel Engine Assembly Line, documenting 60+ operations to identify operational inefficiencies and optimization opportunities."

- **Truth:** ✅ Verified — SIP extract: 60+ operations, 96 stations documented
- **Knowledge Required:** 📚 Process mapping (flowcharts, SIPOC, swimlane, VSM), value-added vs non-value-added, bottleneck identification, Theory of Constraints, 5L diesel engine assembly sequence
- **Tools:** Process mapping notation, Excel/Visio/Lucidchart [USER INPUT REQUIRED: tool used]
- **Business Concepts:** Inefficiency types (waiting, overprocessing, defects), optimization levers
- **Interview Questions:**
  - Basic: "Walk me through the 5L line Short Block vs Long Block."
  - Intermediate: "What notation did you use? SIPOC or VSM? Why?"
  - Challenge: "What specific inefficiencies did the map reveal that weren't obvious before?"
- **Gap:** ❓ Mapping tool, notation standard, specific inefficiencies found. → 🚫 [USER INPUT REQUIRED: mapping tool, notation, top 3 inefficiencies identified]

### Claim 02.06 — SIP: "Built analytical dashboards from approximately 1 million manufacturing & defect records collected over 3+ years, enabling KPI tracking, workforce performance analysis, and data-driven operational decisions."

- **Truth:** ✅ Verified — 🔍 Needs Evidence (record definition)
- **Knowledge Required:** 📚 Large dataset handling (1M rows in Power BI — import vs DirectQuery, aggregation), KPI framework design, workforce performance metrics, dashboard adoption
- **Tools:** Power BI, DAX, SQL, Python
- **Business Concepts:** KPI selection, leading vs lagging indicators, dashboard as decision tool (not just visualization)
- **Interview Questions:**
  - Basic: "What was a 'record' — one engine, one station-operation, one defect?"
  - Intermediate: "How did you handle 1M rows — what was the data model?"
  - Challenge: " dashboards 'enabling' decisions is vague — what decision actually changed because of the dashboard?"
- **Gap:** ❓ Record grain, data model, specific KPIs, decision example. → 🚫 [USER INPUT REQUIRED: record definition, data model, 2–3 KPIs, one decision enabled]

---

## 03 — SIRP (Research Paper) — Correlation & Regression Deep Dive

### Claim 03.01 — "Analyzed manufacturing data across 96 engine assembly stations and 258 operator observations using correlation and regression analysis, identifying significant skill-defect relationship (r = -0.41) and quantifying potential reduction of ~440 defects per 1,000 engines through targeted workforce optimization."

- **Truth:** ✅ Verified (resume + SIRP extract) — this is the single most attacked claim
- **Knowledge Required:** 📚 Descriptive stats → Covariance → Pearson r → Spearman rho → p-value → CI → Simple linear regression (slope, intercept, R², residuals, assumptions) → Confounding → Causality → Robustness (Winsorising 5% → r=-0.39) → Seeded Simulation disclosure
- **Tools:** Python (NumPy, SciPy, pandas, seaborn), OLS
- **Business Concepts:** Statistical vs practical significance, workforce optimization ROI, priority stations (20 identified), skill-to-complexity reallocation (lowest-cost lever)
- **Interview Questions — Full Tree:**
  - L1: "What does r = -0.41 mean in plain English?"
  - L2: "Is it significant? What's the p-value? (<0.001)"
  - L3: "Does -0.41 prove skill causes defects to fall?"
  - L4: "Why Pearson and not Spearman? (Report both — Pearson -0.41, Spearman similar; Spearman as robustness check)"
  - L5: "What was the regression equation? What are the units of 440?"
  - L6: "What is R²? How much variance does skill explain? (~17%)"
  - L7: "What confounds could explain the result? (Station complexity r=+0.38 with defects, r=+0.18 with skill — misallocation)"
  - L8: "Why 258 observations from 96 stations? (2–6 operators per station)"
  - L9: "What if station difficulty, not skill, drives defects?"
  - L10: "How did Winsorising test robustness?"
  - L11: "What does Seeded Simulation mean for what the number proves?"
  - L12: "What would you do next with real skill data?"
- **Gap:** Interviewer will attack Seeded Simulation — must disclose: real = station structure/complexity/workforce aggregates; modeled = per-station skill + defect rate calibrated to benchmarks, seed=20260715. The method is genuine; magnitudes are proxied. → 📚 Knowledge Dependency: must be able to explain this in 30 sec, 2 min, and deep technical.

---

## 04 — HEALTHIUM MEDTECH — Business Analyst Intern (Mar–Aug 2023)

> **Note:** Resume extraction was fragmented around Healthium block. Title confirmed; specific Healthium bullets were not cleanly extracted from PDF. SIP text overlapped. Treat as:

### Claim 04.01 — Healthium Medtech, Business Analyst Intern (Mar–Aug 2023)

- **Truth:** ✅ Verified (title + period) — ❓ Needs Clarification (bullets not cleanly extracted)
- **Knowledge Required:** 📚 Business analyst role, intern scope, deliverables
- **Gap:** 🚫 [USER INPUT REQUIRED: confirm Healthium bullets — or were Healthium bullets merged with Tata Motors in PDF extraction? Provide 2–3 Healthium bullet points to map correctly.]

---

## 05 — ALPR — AUTOMATIC LICENSE PLATE RECOGNITION

### Claim 05.01 — "Built real-time Automatic License Plate Recognition system using OpenCV, EasyOCR, and Streamlit, automated vehicle identification from image and video streams."

- **Truth:** ✅ Verified
- **Knowledge Required:** 📚 Image representation (pixels, RGB, grayscale, resolution) → Preprocessing (blur, thresholding, morphology) → Plate localization (contours, edge detection, object detection) → Cropping → OCR (EasyOCR) → Cleaning/validation → Streamlit app
- **Tools:** Python, OpenCV, EasyOCR, Streamlit, (FastAPI if API layer exists)
- **Business Concepts:** Real-time definition (latency target?), use cases (parking, tolling, security), accuracy vs speed tradeoff
- **Interview Questions:**
  - Basic: "Walk me through the pipeline image → plate text."
  - Intermediate: "Why EasyOCR over Tesseract? Why OpenCV contours vs YOLO?"
  - Challenge: "You say real-time — what FPS/latency did you achieve? On what hardware?"
- **Gap:** ❓ Latency/FPS numbers, hardware, accuracy metrics (precision/recall), dataset size. → 🚫 [USER INPUT REQUIRED: latency/FPS, accuracy, dataset, why EasyOCR vs alternatives]

### Claim 05.02 — "Engineered robust image-processing pipelines for plate localization and OCR, improving detection reliability across varying lighting and environmental conditions."

- **Truth:** ✅ Verified — 🔍 Needs Evidence (how measured "improving"?)
- **Knowledge Required:** 📚 Lighting challenges (shadow, glare, night, rain), preprocessing robustness (adaptive thresholding, histogram equalization), false positives/negatives, evaluation metrics
- **Interview Questions:**
  - Basic: "What lighting failures did you see? How did you fix them?"
  - Intermediate: "How did you evaluate robustness — test set? Metrics?"
  - Challenge: "If I give you a night image with glare, what fails first — localization or OCR?"
- **Gap:** ❓ Baseline vs improved accuracy, test conditions, failure modes. → 🚫 [USER INPUT REQUIRED: specific lighting fixes, before/after accuracy]

---

## 06 — BAKATRACKER — AI-POWERED PRODUCTIVITY PLATFORM

### Claim 06.01 — "Developed AI-powered productivity platform transforming personal activity data into personalized prioritization, insights, and productivity workflows."

- **Truth:** ✅ Verified — ❓ Needs Clarification (what activity data? what prioritization logic?)
- **Knowledge Required:** 📚 Product definition (problem → user → workflow), personalization (what signals), prioritization algorithms, productivity workflows
- **Tools:** Python, React, (FastAPI, database [USER INPUT REQUIRED])
- **Business Concepts:** Problem validation, user persona, value proposition, differentiation
- **Interview Questions:**
  - Basic: "What problem does BakaTracker solve? For whom?"
  - Intermediate: "How does 'personalized prioritization' work — rules, ML, or LLM reasoning?"
  - Challenge: "Transforming activity data into insights is vague — what insight did a user actually get that they couldn't get from Todoist/Notion?"
- **Gap:** 🚫 [USER INPUT REQUIRED: data sources, prioritization logic, one concrete insight example, user count]

### Claim 06.02 — "Built AI-agent workflows using GenAI + MCP for natural-language task management, automated actions, contextual recommendations, and AI-assistant integrations."

- **Truth:** ✅ Verified — this is the highest technical-risk claim
- **Knowledge Required:** 📚 LLMs (tokens, context windows, temperature, hallucination) → RAG → Agents → Tool calling → MCP (client/server, tools/resources/prompts, permissions, vs API vs function calling) → Agent→MCP→Tool→App architecture
- **Tools:** Python, MCP, React, FastAPI, LLMs (which provider/model? [USER INPUT REQUIRED])
- **Business Concepts:** Why natural language for tasks? Automation value, contextual recommendation relevance
- **Interview Questions:**
  - Basic: "What is MCP? Why did you use it?"
  - Intermediate: "Walk me through: user says 'reschedule my deep work to tomorrow' — what happens step by step through agent → MCP → tool?"
  - Challenge: "Why MCP instead of REST APIs? What does MCP give you that function calling doesn't?"
  - Challenge: "What if the LLM hallucinates and deletes a task? How do you guard?"
  - Challenge: "How do you secure tool access? What permissions model?"
  - Challenge: "What would break if you had 10,000 users?"
- **Gap:** 🚫 [USER INPUT REQUIRED: LLM provider/model, MCP server details, one end-to-end workflow example, guardrails, scale plan]

---

## 07 — HAVENOS — AI-ENABLED INTER-GENERATIONAL CARE ECOSYSTEM

### Claim 07.01 — "Built financial and operational performance models delivering ₹6.40 Social Return on Investment (SROI) on a ₹60K/month pilot."

- **Truth:** ✅ Verified — 🔍 Needs Evidence (SROI methodology)
- **Knowledge Required:** 📚 SROI 6-stage methodology (stakeholders → outcomes → monetization → deadweight/attribution/displacement → drop-off → ratio), ROI vs SROI, assumptions, sensitivity
- **Tools:** Excel/financial modeling
- **Business Concepts:** Social value, pilot design (what was ₹60K spent on?), scalability, attribution
- **Interview Questions:**
  - Basic: "What is SROI? How is ₹6.40 calculated?"
  - Intermediate: "What outcomes did you monetize? What proxies did you use?"
  - Challenge: "What was deadweight? What attribution % did you assume? How did you avoid double counting?"
  - Challenge: "₹60K/month pilot — what was included? For how many beneficiaries? What period?"
- **Gap:** 🚫 [USER INPUT REQUIRED: SROI inputs, monetization proxies, beneficiary count, pilot duration, key assumptions]

### Claim 07.02 — "Designed AI-assisted volunteer scheduling and capacity planning framework."

- **Truth:** ✅ Verified — ❓ Needs Clarification (what did AI do?)
- **Knowledge Required:** 📚 Scheduling (constraints, availability, skills), capacity planning (demand vs supply, shifts), AI assistance (matching, optimization, prediction)
- **Interview Questions:** "What did AI assist with — matching, scheduling optimization, or demand forecasting? What was the algorithm?"
- **Gap:** 🚫 [USER INPUT REQUIRED: scheduling constraints, AI role, tool/algorithm]

### Claim 07.03 — "Improved operational efficiency while reducing projected per-capita service costs by up to 20%."

- **Truth:** ✅ Verified — 🔍 Needs Evidence (20% of what baseline?)
- **Knowledge Required:** 📚 Operational efficiency metrics, per-capita cost, projection methodology
- **Interview Questions:** "20% vs what baseline? Projected over what horizon? Measured or modeled?"
- **Gap:** 🚫 [USER INPUT REQUIRED: baseline cost, projection period, measured vs modeled]

---

## 08 — COMPETITION CASES

### Claim 08.01 — MICA Ahmedabad × UCB: National Finalist — "Planned customer acquisition engine."

- **Truth:** ✅ Verified — ❓ Needs Clarification (what was the engine?)
- **Knowledge Required:** 📚 Customer acquisition (funnel, CAC, LTV, conversion, retention, referral, cohort), GTM (ICP, segmentation, positioning, channels, partnerships)
- **Interview Questions:**
  - Basic: "What was UCB's problem? What was your acquisition engine?"
  - Intermediate: "Who was the ICP? What channels did you prioritize? Why?"
  - Challenge: "How did you measure acquisition cost? What was payback?"
- **Gap:** 🚫 [USER INPUT REQUIRED: UCB problem statement, your strategy, channels, metrics — or provide case deck]

### Claim 08.02 — IIT Mandi × Zomato: National Runner-Up — "Increased Average Order Value (AOV) by 10.4% through GTM analytics."

- **Truth:** ✅ Verified — 🔍 Needs Evidence (10.4% how calculated)
- **Knowledge Required:** 📚 AOV definition, drivers (upselling, cross-selling, bundling, pricing, promotions, minimum order nudge), GTM analytics, causal attribution
- **Interview Questions:**
  - Basic: "What is AOV? Why does Zomato care?"
  - Intermediate: "What analysis led to the 10.4% lever — what data, what insight?"
  - Challenge: "Is 10.4% projected, modeled, or measured in a pilot? What was baseline AOV? What assumptions?"
- **Gap:** 🚫 [USER INPUT REQUIRED: baseline AOV, lever, modeled vs measured, assumptions]

### Claim 08.03 — PocketJoystick: Co-Founder — "Rank 1 IIM Mumbai | National Finalist IIT Madras; Pitched business model and GTM strategy to 20+ VCs & 4 Startup Incubators."

- **Truth:** ✅ Verified — 🔍 Needs Evidence (pitch outcomes)
- **Knowledge Required:** 📚 Business model (BMC), GTM strategy, VC pitching (deck structure, unit economics, TAM/SAM/SOM), incubator evaluation
- **Interview Questions:**
  - Basic: "What is PocketJoystick? What was the business model?"
  - Intermediate: "What was your GTM? Who was the customer?"
  - Challenge: "You pitched to 20+ VCs — what was the outcome? Funding, feedback, or just pitches?"
- **Gap:** 🚫 [USER INPUT REQUIRED: product definition, business model, GTM, pitch outcomes/learnings]

---

## 09 — LEADERSHIP & ACHIEVEMENTS

### Claim 09.01 — Vice President, Art Club, Bennett University

- **Truth:** ✅ Verified
- **Knowledge Required:** 📚 Leadership, delegation, team management, event planning, stakeholder management
- **Interview Questions:** "What did you lead? Team size? One conflict you resolved?"
- **Gap:** None — behavioral; prepare STAR story

### Claim 09.02 — 5★ Python HackerRank | 3★ CodeChef

- **Truth:** ✅ Verified — platform-verifiable
- **Knowledge Required:** 📚 Programming fundamentals, DSA, OOP, debugging
- **Interview Questions:** "What rating system? What problems did you solve to get 5★?"
- **Gap:** None — verifiable; ensure profiles are public/linked

### Claim 09.03 — Global Citizen Leader (Nov 2025–Mar 2026) [from resume fragment]

- **Truth:** ❓ Needs Clarification — fragmented extraction
- **Gap:** 🚫 [USER INPUT REQUIRED: confirm what Global Citizen Leader entailed]

---

## 10 — CERTIFICATIONS

### Claim 10.01 — KPMG Data Analytics Consulting Virtual Internship

- **Truth:** ✅ Verified (title) — certificate file not verified in vault
- **Gap:** Ensure certificate accessible; know what was covered

### Claim 10.02 — Power BI by PwC, TATA Data Visualisation

- **Truth:** ✅ Verified (titles)
- **Gap:** Same — ensure recall of content

---

## Summary — Claims by Truth Badge

| Badge | Count |
|---|---|
| ✅ Verified (factual, no gap) | 8 |
| 🔍 Needs Evidence (claimed, needs measurement/method) | 6 |
| ❓ Needs Clarification (ambiguous/incomplete) | 8 |
| 📚 Knowledge Dependency (prereq to defend) | All claims |
| 🚫 [USER INPUT REQUIRED] | 16 items (see KNOWLEDGE_GAPS.md) |

> **Next:** See `RESUME_NUMBERS.md` for quantified claims, `PROJECT_MAP.md` for project graphs, `KNOWLEDGE_GAPS.md` for consolidated gaps.

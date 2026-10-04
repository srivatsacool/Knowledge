---
title: Current Plan — Viva Prep → Knowledge Build → Study Schedule
type: governance
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
---

# MASTER PLAN — Full Conversation Scope

> One-page execution tracker for: viva prep → DS roadmap knowledge build → 3-day study plan.
> Viva: TOMORROW (2026-09-08). Everything submitted except viva; plagiarism report dropped per user.

## Phase 0 — Viva Prep ⏸️ ON HOLD (user: "no need to do anything for SIP and SIRP yet")

Sources: `05_Knowledge\RBA90 Srivatsa Gorti SIP.docx` (Tata SIP) +
`05_Knowledge\SIRP_AI_Inventory_Optimization_Final.docx` (SIRP, complete: 8 chapters, Annexures A–J).
Output: `05_Knowledge\Placement_Interview\VIVA_PREP\`
Both docx already text-extracted (temp: `sip_text.txt`, `sirp_text.txt`) — resume from there when user reactivates this phase.

- [ ] 0.1 `SIP_Viva_Brief.md` — BRIEF: gemba walk, 5L Diesel line (60+ stations), ~1M records
      defect/workforce analysis, process mapping, RCA, KPIs, SAP HANA→Python+SQL+Excel (70%),
      Power Automate (60 min/day), short Q→A pairs
- [ ] 0.2 `SIRP_Viva_Deep_Dive.md` — DETAILED: problem → M5 + Store data → EDA → ADI/CV² archetypes
      → 12-model ladder (Naive…LSTM) → rolling-origin 28-day design → MASE/RMSSE → 91 DM tests + Holm
      → order-up-to policy → holding/stockout → sensitivity; results; LSTM accuracy ≠ inventory cost
      finding; RQ answers; limitations; "LLM designed-not-executed" honesty point. Numbers from real docx.
- [ ] 0.3 `Viva_QA_Bank.md` — ~30 examiner questions + spoken answers + rapid-fire numbers sheet
- [ ] 0.4 (Optional) ≤12-slide viva deck — PENDING USER: slides needed or talk-track only?

## Phase 1 — Post-Viva Knowledge Build ✅ COMPLETE (2026-09-07)

Umbrella: Data Science Roadmap (40 topics, 8 Levels, DS pipeline) in Placement_Interview.
48 interview topics + existing notes (01_AI LLM/MCP, 02_ANALYTICS Power BI/Statistics,
07_OPERATIONS Tata) nest inside levels — cross-referenced, never duplicated.

- [x] 1.1 `00_START_HERE\DS_ROADMAP.md` — umbrella: pipeline diagram, 40 topics → 8 Levels, links
- [x] 1.2 Batch 1 🔴: Python_Fundamentals, Pandas_NumPy; SQL ×3 (fundamentals, window fns,
      interview patterns); Statistics ×3 (distributions, tests, DM/Holm); Forecasting ×5
      (TS fundamentals, model ladder, metrics/MASE, intermittent demand, LSTM);
      Power_BI_Fundamentals; 01_AI\ML_Fundamentals
- [x] 1.3 Batch 2 🟠: Inventory_Optimization, Forecast_to_Decision; 03_BUSINESS ×7 (Business
      Analytics, BA toolkit, Consulting, GTM, Product, Research Methodology, Storytelling);
      04_FINANCE Business_Finance_SROI; 07_OPERATIONS RCA + Process_Mapping;
      08_TECHNOLOGY FastAPI + Streamlit
- [x] 1.4 Batch 3 🟡: PySpark, Git, SAP_HANA, Power_Automate, React_JS, OpenCV_EasyOCR,
      Production_Concepts, Excel_Toolkit; 01_AI NLP; EDA; 05_GENERAL Tableau
- [x] 1.5 Batch 4 (roadmap-only): Feature Engineering, Model Evaluation, Validation,
      Data Leakage, Unsupervised, Ensembles, Deep Learning, XAI, Anomaly, Responsible AI,
      A/B Testing, Data Engineering, Docker, Cloud, MLOps, Reproducibility
- [x] 1.6 `09_RESUME_PROJECTS\PROJECT_STORIES.md`: Tata Q&A story, AI Inventory flagship
      chain, 3 competition stories, BTracker, HavenOS (cross-ref 04_Career, no duplication)
- [x] 1.7 `16_RESUME_DEFENSE\25_Conceptual_Questions.md` with model answers
- [x] 1.8 `13_FORMULAS\Formula_Sheet.md` + `14_CHEAT_SHEETS\` CHEAT_INDEX + 7 sheets
      (Python, SQL, Stats, Forecasting, Inventory, LSTM, Power BI)
- [x] 1.9 `MASTER_INDEX.md` §09 added + `README.md` status updated + `master_list.md`
      superseded with redirect

## Phase 2 — Study Schedule (3 days, notes are ready) 🟡

- [ ] Day 1 🔴: Python + Pandas → SQL → Statistics → Forecasting + model ladder → metrics/MASE
      → intermittent demand → LSTM; cheat sheets at night
- [ ] Day 2 🔴→🟠: Inventory + forecast-to-decision chain (flagship story) → 25 conceptual
      questions → Power BI + ML → Tata story drill → Business Analytics/BA/GTM/consulting
- [ ] Day 3 🟠→🟡: Finance/SROI, RCA, Process Mapping, FastAPI/Streamlit → 🟡 rapid pass via
      cheat sheets → full self-mock + competition stories → final formula sweep

## Phase 3 — Housekeeping ⚪ (remaining)

- [x] `05_Knowledge\master_list.md` → superseded with link to `DS_ROADMAP.md`
- [ ] SIP: Word field refresh (F9) + final read-through
- [ ] Viva deck from Phase 0 if required

## Decisions Log

| Decision | Choice |
|---|---|
| Location of knowledge notes | Placement_Interview (existing 17-folder system) |
| Depth | Full deep-dives for ALL topics |
| Study timeline | 3 days (post-viva) |
| master_list.md | Supersede with link |
| SIRP canonical | SIRP_AI_Inventory_Optimization_Final.docx (05_Knowledge root) |
| Tata SIP/SIRP lineage fixes | Not needed — submitted; viva 2026-09-08 |
| Plagiarism report | Dropped by user |
| Viva emphasis | SIP brief (gemba walk + main topics) · SIRP detailed (experiment + models) |
| Phase 0 status | ⏸️ ON HOLD — user deferred all SIP/SIRP work (2026-09-07) |

---
title: Skill Map — Tools, Technologies, Methodologies
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
---

# Skill Map — Tools, Technologies, Methodologies

> **Source:** Resume Skills & Tools section + project stacks
> **Purpose:** Every skill → what it means → proficiency implied → interview risk → knowledge dependency → gap
> **Badges:** ✅ Verified · 🔍 Needs Evidence · ❓ Needs Clarification · 📚 Dependency · 🚫 [USER INPUT REQUIRED]

---

## Proficiency Scale (For Self-Assessment — Not on Resume)

| Level | Meaning | Interview Expectation |
|---|---|---|
| **A — Aware** | Used once, can describe | "What is it?" |
| **B — Applied** | Used in a project, can walk through | "How did you use it?" |
| **C — Proficient** | Multiple projects, can compare alternatives | "Why this over X? What are limitations?" |
| **D — Expert** | Can teach, handle edge cases, optimize | "How would you scale/debug this?" |

> Resume listing implies **at least B** for every skill. Interviewers will test at **C**.

---

## 01 — PROGRAMMING

| Skill | Resume Context | Implied Level | Interview Risk | Knowledge Dependency | Gap |
|---|---|---|---|---|---|
| **Python** | Tata Motors (automation), ALPR, BakaTracker, 5★ HackerRank | C | 🔴 High — most asked | Fundamentals → OOP → Packages → Debugging | None — but prepare 5★ story |
| **SQL** | Tata Motors (SAP HANA extraction) | B–C | 🔴 High | SELECT→WHERE→JOIN→CTE→Window→Optimization | [USER INPUT REQUIRED: SQL dialect (HANA SQL vs generic)] |
| **C++** | Listed, 3★ CodeChef | B | 🟡 Medium | Fundamentals, DSA, OOP | Ensure CodeChef profile linkable |
| **JavaScript** | Listed | A–B | 🟡 Medium | Fundamentals, React linkage | [USER INPUT REQUIRED: where used — React only or standalone?] |

**Python deep dive needed:** variables → data types → lists/tuples/sets/dicts → loops/functions/lambda/comprehensions → exceptions/modules/packages → OOP/classes/inheritance/decorators/generators → venv

---

## 02 — ANALYTICS & BI

| Skill | Resume Context | Implied Level | Interview Risk | Knowledge Dependency | Gap |
|---|---|---|---|---|---|
| **Pandas** | Listed; implied in 1M-record analysis | B–C | 🔴 High | Series/DataFrame → Cleaning (missing/dup/outlier) → GroupBy/Merge/Join/Pivot/Apply → Vectorization → Datetime/Reshape/Agg | For each op: Input → Operation → Output → Business interpretation |
| **NumPy** | Listed | B | 🟡 Medium | Arrays, broadcasting, vectorization, aggregation | Overlap with Pandas — know when NumPy vs Pandas |
| **Excel** | Tata Motors (automation) | B–C | 🟠 High | Formulas (IF/SUMIFS/COUNTIFS/XLOOKUP/INDEX-MATCH) → Pivot → Power Query/Pivot → Conditional formatting → Charts/dashboards → Scenario analysis | [USER INPUT REQUIRED: which Excel features used for automation] |
| **Power BI** | Tata Motors (dashboards) | B–C | 🔴 High | Power Query → Data modeling (star schema, fact/dim, relationships) → DAX (CALCULATE/FILTER/SUMX, measures vs calc cols, time intelligence) → KPIs → Dashboard design → Storytelling | [USER INPUT REQUIRED: DAX measures used, data model] |
| **Tableau** | Listed | A–B | 🟡 Medium | Dimensions/measures, calculated fields, filters/params, dashboards, storytelling | Know Tableau vs Power BI comparison |
| **Dashboarding** | Cross-cutting | B–C | 🟠 High | KPI design, visual hierarchy, bad vs good dashboard, insight → action | [USER INPUT REQUIRED: one good vs bad example from your work] |

---

## 03 — AI & DEVELOPMENT

| Skill | Resume Context | Implied Level | Interview Risk | Knowledge Dependency | Gap |
|---|---|---|---|---|---|
| **NLP** | Listed (AI & Development) | A–B | 🟡 Medium | Tokenization → Normalization → Stopwords → Stemming/Lemmatization → BoW/TF-IDF → Embeddings/Word2Vec → Transformers/Attention/BERT → Classification/Sentiment/NER | [USER INPUT REQUIRED: NLP project or coursework?] |
| **LLMs** | BakaTracker (GenAI+MCP) | B–C | 🔴 High | Tokens/embeddings/context → Transformers/attention → Pretraining/fine-tuning/inference → Temperature/hallucination → Prompts (system/user) → Structured output/function calling → RAG → Vector DB → Agents → Memory → Evaluation → Guardrails | [USER INPUT REQUIRED: which LLM/provider] |
| **FastAPI** | Listed | A–B | 🟡 Medium | Routes/endpoints, request/response models, Pydantic, async, validation, error handling | [USER INPUT REQUIRED: where used — BakaTracker or ALPR?] |
| **Streamlit** | ALPR | B | 🟡 Medium | App layout, widgets, file upload, caching, deployment | None — but know Streamlit vs FastAPI vs React tradeoffs |
| **OpenCV** | ALPR | B–C | 🟠 High | Image rep (pixels/RGB/gray/res) → Thresholding → Edge/contour → Morphology → Blur/sharpen → Preprocessing → Detection/localization → OCR prep | Know OpenCV vs deep-learning detectors |
| **EasyOCR** | ALPR | B | 🟠 High | OCR pipeline, EasyOCR vs Tesseract, language models, confidence, cleaning/validation | [USER INPUT REQUIRED: why EasyOCR] |

---

## 04 — ENTERPRISE TOOLS

| Skill | Resume Context | Implied Level | Interview Risk | Knowledge Dependency | Gap |
|---|---|---|---|---|---|
| **SAP HANA** | Tata Motors (extraction) | B | 🟠 High | SAP/ERP, HANA in-memory/columnar, SQL interface, tables/views, extraction, reporting | [USER INPUT REQUIRED: HANA Studio vs SQL, view types used] |
| **Microsoft Power Automate** | Tata Motors (email automation, 60 min/day) | B | 🟠 High | Triggers/actions/connectors, conditions/loops, scheduled vs automated flows, approvals, error handling | [USER INPUT REQUIRED: flow architecture] |
| **Git / GitHub** | Listed | B | 🟡 Medium | Repos/commits/branches, merge/PR, conflicts, rebase, version control | Ensure GitHub profile has ALPR/BakaTracker repos |

---

## 05 — OPERATIONS ANALYTICS

| Skill | Resume Context | Implied Level | Interview Risk | Knowledge Dependency | Gap |
|---|---|---|---|---|---|
| **Manufacturing Analytics** | Tata Motors (core) | B–C | 🔴 High | Assembly lines, workstations, cycle time, throughput, capacity, bottleneck, downtime, defects, yield, scrap, rework, OEE, takt, lead time | Deep dive exists: Theory_of_Constraints.md in Operations/ |
| **Process Mapping** | Tata Motors (60+ ops, 5L line) | B–C | 🟠 High | Flowcharts, SIPOC, swimlane, VSM, value-added vs NVA, bottleneck ID, optimization | [USER INPUT REQUIRED: notation used] |
| **KPI Development** | Tata Motors (dashboards) | B–C | 🟠 High | KPI selection, leading vs lagging, SMART, KPI tree, dashboard linkage | [USER INPUT REQUIRED: which KPIs] |
| **Workforce Analytics** | Tata Motors (skill matrix, r=-0.41) | B–C | 🔴 High | Skill matrix (1–5), operator productivity, allocation, skill gaps, training effectiveness, capacity planning | Must know 1–5 scale definitions |
| **Root Cause Analysis** | Listed | B | 🟡 Medium | Pareto, Fishbone, 5 Why, DMAIC, control charts, Cp/Cpk, variation | Know RCA vs correlation distinction |

---

## 06 — BUSINESS & STRATEGY (Case Competitions + HavenOS)

| Skill | Resume Context | Implied Level | Interview Risk | Knowledge Dependency | Gap |
|---|---|---|---|---|---|
| **GTM Strategy** | MICA×UCB, Zomato, PocketJoystick | B–C | 🟠 High | Market def, ICP, segmentation, positioning, value prop, pricing, channels, sales, partnerships, retention, GTM metrics | [USER INPUT REQUIRED: your frameworks] |
| **Customer Acquisition** | MICA×UCB | B | 🟡 Medium | Funnel, CAC, conversion, LTV, payback, retention, referral, cohort | Know CAC/LTV calculation |
| **Market Sizing** | Implied (TAM/SAM/SOM for PocketJoystick) | B | 🟡 Medium | TAM/SAM/SOM, top-down vs bottom-up, assumptions | [USER INPUT REQUIRED: did you size a market?] |
| **Business Model** | PocketJoystick | B | 🟡 Medium | BMC, revenue streams, cost structure, unit econ | [USER INPUT REQUIRED: PocketJoystick BMC] |
| **A/B Testing** | Implied (Zomato AOV) | A–B | 🟡 Medium | Hypothesis, control/treatment, significance, sample size | [USER INPUT REQUIRED: was Zomato a modeled or tested result?] |

---

## 07 — FINANCE (HavenOS + Case Work)

| Skill | Resume Context | Implied Level | Interview Risk | Knowledge Dependency | Gap |
|---|---|---|---|---|---|
| **SROI** | HavenOS (₹6.40) | B–C | 🔴 High | SROI vs ROI, 6-stage methodology, monetization, deadweight/attribution/displacement/drop-off/double counting | [USER INPUT REQUIRED: full methodology] |
| **ROI / ROAS / NPV / IRR** | Implied | A–B | 🟡 Medium | Revenue/cost, fixed/variable, gross/contribution/EBITDA/EBIT/net, cash flow, CAPEX/OPEX, break-even, unit econ | Know which you can defend |
| **Unit Economics** | HavenOS (per-capita cost), case comps | B | 🟡 Medium | CAC, LTV, payback, contribution margin, break-even | [USER INPUT REQUIRED: HavenOS unit econ] |

---

## 08 — MANAGEMENT & LEADERSHIP

| Skill | Resume Context | Implied Level | Interview Risk | Knowledge Dependency | Gap |
|---|---|---|---|---|---|
| **Leadership** | Art Club VP, Co-Founder, Global Citizen Leader | B | 🟡 Medium | Delegation, team mgmt, accountability, decision making | Prepare STAR stories |
| **Stakeholder Mgmt** | Tata Motors (shop floor + supervisors) | B | 🟡 Medium | Communication, negotiation, conflict resolution | Gemba + supervisor discussion stories |
| **VC Pitching** | PocketJoystick (20+ VCs, 4 incubators) | B | 🟡 Medium | Deck structure, storytelling, handling Q&A, feedback loops | [USER INPUT REQUIRED: outcomes] |

---

## Comparison Tables Needed (Phase 2)

These pairs will be confused in interviews — each needs a comparison table:

| Pair | Domain | Why Confused |
|---|---|---|
| Python vs R | Analytics | Both for data analysis |
| SQL vs Pandas | Analytics | Overlapping data manipulation |
| Power BI vs Tableau | Analytics | Both BI tools |
| Pearson vs Spearman | Statistics | Both correlation |
| Correlation vs Regression | Statistics | Related but distinct |
| Classification vs Regression | ML | Both supervised |
| AI vs ML vs Deep Learning | AI | Hierarchy |
| RAG vs Fine-tuning | GenAI | Both LLM adaptation |
| API vs MCP | Technology | MCP is new; interviewers will probe |
| MCP vs Function Calling | Technology | Subtle distinction |
| FastAPI vs Flask | Technology | Both Python web |
| OCR vs Object Detection | CV | Both vision tasks |
| ROI vs SROI | Finance | Similar names, different scope |
| Six Sigma vs Lean | Operations | Both improvement |
| SIPOC vs VSM | Operations | Both process mapping |

---

## Interview Risk Heatmap

| Risk | Skills |
|---|---|
| 🔴 **Highest** | Python, SQL, Pandas, Power BI, LLMs, MCP, Manufacturing Analytics, Workforce Analytics, SROI, r=-0.41 (stats chain) |
| 🟠 **High** | Excel, Dashboarding, OpenCV, EasyOCR, SAP HANA, Power Automate, Process Mapping, KPI Dev, GTM Strategy |
| 🟡 **Medium** | C++, JS, NumPy, Tableau, NLP, FastAPI, Streamlit, Git, RCA, Customer Acquisition, Market Sizing, Leadership, VC Pitch |
| 🟢 **Low** | Drawing/Painting, Billiards (interests — only if asked) |

> **Rule:** 🔴 skills need 3-level explanations (30 sec / 2 min / deep technical) + comparison tables + 10+ interview questions each. See `KNOWLEDGE_GAPS.md` for build order.

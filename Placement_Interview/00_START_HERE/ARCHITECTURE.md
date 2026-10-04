---
title: Phase 2 Architecture — Knowledge Dependency Graph
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
---

# Phase 2 Architecture — Knowledge Dependency Graph

> **Purpose:** Master map of what depends on what. Every deep dive has prerequisites; this file shows the build order and prevents building topics before their foundations exist.
> **Rule:** Build from bottom up. No file is created before its prerequisites exist.

---

## 1 — Dependency Graph (Bottom → Top)

```text
LAYER 0 — FOUNDATIONS (no prerequisites)
│
├── Descriptive Stats (mean, median, variance, SD, distributions)
├── Data Types & Representation (numeric, categorical, ordinal)
├── HTTP/REST fundamentals
└── Boolean logic / set theory

LAYER 1 — CORE MECHANICS
│
├── Covariance & Correlation          ← Descriptive Stats
├── Probability & Sampling             ← Descriptive Stats
├── LLM Fundamentals                   ← none (standalone)
├── Power Query / ETL                  ← none (standalone)
├── SQL Fundamentals                   ← none (standalone)
└── Python/Pandas Fundamentals         ← none (standalone)

LAYER 2 — APPLIED METHODS
│
├── Pearson r / Spearman rho           ← Covariance & Correlation
├── Simple Linear Regression           ← Pearson r, Descriptive Stats
├── Hypothesis Testing (t, p, CI)      ← Probability & Sampling
├── Prompting & Tool Calling           ← LLM Fundamentals
├── Star Schema / Data Modeling        ← Power Query
├── DAX Fundamentals                   ← Star Schema
├── Pandas GroupBy / Merge / Pivot     ← Python Fundamentals
└── SQL JOINs / CTEs / Windows         ← SQL Fundamentals

LAYER 3 — INTEGRATED METHODS
│
├── Correlation → Regression → Significance (r=-0.41 chain)  ← Layers 1-2
├── RAG / Agents                       ← LLM + Tool Calling
├── MCP Architecture                   ← Agents + Tool Calling
├── DAX Advanced (CALCULATE, FILTER, context)  ← DAX Fundamentals
├── Dashboard Design                   ← Star Schema + DAX
└── Data Cleaning & EDA                ← Pandas + SQL

LAYER 4 — PROJECT-SPECIFIC
│
├── Tata SIRP Methodology              ← Correlation chain + Manufacturing
├── Seeded Simulation Disclosure       ← SIRP Methodology
├── BakaTracker Architecture           ← MCP + LLM + Agents
├── Power BI Dashboards (Tata)         ← Dashboard Design + DAX
├── ALPR Pipeline                      ← CV/OCR + Python
└── Manufacturing Analytics            ← Descriptive Stats + Process Knowledge

LAYER 5 — DEFENSE
│
├── Interview Question Banks           ← All above
├── Resume Defense Scripts             ← All above
└── Cross-Examination Prep             ← All above
```

---

## 2 — Build Order (Phase 2 Scope)

Phase 2 builds Layers 0–4 for P1 topics only. Layer 5 is Phase 3.

| Order | File | Layer | Prerequisites | Status |
|---|---|---|---|---|
| 1 | 02_ANALYTICS/Statistics/Descriptive_Stats.md | 0 | none | 🔨 Build |
| 2 | 02_ANALYTICS/Statistics/Correlation.md | 2 | Descriptive Stats | 🔨 Build |
| 3 | 02_ANALYTICS/Statistics/Regression.md | 2 | Correlation | 🔨 Build |
| 4 | 02_ANALYTICS/Statistics/Hypothesis_Testing.md | 2 | Probability | 🔨 Build |
| 5 | 02_ANALYTICS/Statistics/Causality.md | 3 | Correlation + Regression | 🔨 Build |
| 6 | 07_OPERATIONS/TATA_MOTORS/Methodology.md | 4 | Correlation chain + Manufacturing | 🔨 Build |
| 7 | 01_AI/LLMs/LLM_Fundamentals.md | 1 | none | 🔨 Build |
| 8 | 01_AI/LLMs/Tool_Calling.md | 2 | LLM Fundamentals | 🔨 Build |
| 9 | 01_AI/LLMs/Agents.md | 3 | LLM + Tool Calling | 🔨 Build |
| 10 | 01_AI/MCP/MCP_Architecture.md | 3 | Agents + Tool Calling | 🔨 Build |
| 11 | 02_ANALYTICS/Power_BI/Star_Schema.md | 2 | none | 🔨 Build |
| 12 | 02_ANALYTICS/Power_BI/DAX_Fundamentals.md | 2 | Star Schema | 🔨 Build |
| 13 | 02_ANALYTICS/Power_BI/DAX_Advanced.md | 3 | DAX Fundamentals | 🔨 Build |
| 14 | 02_ANALYTICS/Power_BI/Dashboard_Design.md | 3 | Star Schema + DAX | 🔨 Build |

---

## 3 — Cross-Domain Links

These files bridge multiple knowledge domains:

| File | Bridges | Why it matters |
|---|---|---|
| Correlation.md | Statistics ↔ Tata SIRP ↔ Workforce Analytics | r=-0.41 is the most attacked claim |
| MCP_Architecture.md | AI ↔ Technology ↔ BakaTracker | "Why MCP instead of API?" |
| Dashboard_Design.md | Analytics ↔ Operations ↔ Tata dashboards | "What decisions did dashboards enable?" |
| Methodology.md (Tata) | Statistics ↔ Operations ↔ Resume Defense | Full SIRP defense chain |
| DAX_Advanced.md | Analytics ↔ Power BI ↔ Tata dashboards | CALCULATE, FILTER, context |

---

## 4 — What Each Layer Enables

```text
Layer 0-1: "I understand the building blocks"
  → Can answer: "What is correlation?" "What is a token?"

Layer 2: "I can apply the methods"
  → Can answer: "How do you calculate r?" "What is a star schema?"

Layer 3: "I can explain and defend"
  → Can answer: "Why is r=-0.41 significant?" "How does MCP work?"

Layer 4: "I can connect to my projects"
  → Can answer: "Walk me through your SIRP methodology"
                "Show me where MCP sits in your architecture"

Layer 5: "I can survive cross-examination" (Phase 3)
  → Can answer: "What if station difficulty drives defects?"
                "Why MCP instead of REST APIs?"
```

---

## 5 — Files Created in Phase 2

| # | File | Purpose |
|---|---|---|
| 1 | This file (ARCHITECTURE.md) | Dependency graph + build order |
| 2 | See 2B output | Statistics chain |
| 3 | See 2C output | AI chain |
| 4 | See 2D output | Power BI chain |
| 5 | See 2E output | Seeded Simulation |

---

## 6 — Existing Brain Links

| New File | Links To | Relationship |
|---|---|---|
| Statistics/Correlation.md | [[Theory_of_Constraints]] | TOC uses statistical thinking |
| MCP_Architecture.md | [[Theory_of_Constraints]] | Constraint = MCP server bottleneck |
| All Tata files | 04_Career/Tata Motors Internship/ | Source evidence |
| All files | 00_START_HERE/MASTER_INDEX.md | Phase 1 cross-reference |

---

> **Status:** Architecture complete. Now building P1 deep dives in dependency order.

---
title: Vault Audit — Placement Interview System
type: governance
domain: system
status: active
created: 2026-08-28
updated: 2026-08-28
---

# Vault Audit for Placement Interview Knowledge System

## Existing Structure (D:\Brain)

```
D:\Brain
├── .hermes.md                          # Shared vault rulebook (parent-walk discovery)
├── .hermes/                            # Hermes local config
├── .obsidian/                          # Obsidian config (preserved)
├── .repowise/                          # RepoWise index
├── 00_System/                          # GOVERNANCE (20 files)
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── RULES.md
│   ├── PERMISSIONS.md
│   ├── PROFILES.md
│   ├── FILE_NAMING.md
│   ├── KNOWLEDGE_LIFECYCLE.md
│   ├── INBOX_WORKFLOW.md
│   ├── BAKATRACKER_MCP.md
│   ├── CROSS_DOMAIN_RULES.md
│   ├── CHANGELOG.md
│   ├── INDEX.md
│   ├── FOLDER_PLAN.md
│   ├── PROFILE_CORE.md
│   ├── PROFILE_PERSONAL.md
│   ├── PROFILE_LALITA.md
│   ├── PROFILE_PROJECTS.md
│   ├── PROFILE_CAREER.md
│   ├── PROFILE_KNOWLEDGE.md
│   ├── PROFILE_WESCHOOL.md
│   └── PROFILE_RESEARCH.md
├── 01_Personal/                        # (empty)
├── 02_Lalita_Creations/                # (empty)
├── 03_Projects/                        # (empty)
├── 04_Career/                          # Career materials
│   ├── Applications/
│   ├── Career_Planning/
│   ├── Case_Comps/
│   ├── Companies/
│   ├── Interviews/
│   ├── Research/
│   ├── Resume/
│   ├── Roles/
│   ├── Skills/
│   └── Tata Motors Internship/         # SIP/SIRP docs, data, scripts
├── 05_Knowledge/                       # Knowledge domains (8 folders + resume PDF)
│   ├── AI/
│   ├── Analytics/
│   ├── Business/
│   ├── Finance/
│   ├── General/
│   ├── Management/
│   ├── Operations/
│   │   └── Theory_of_Constraints.md    # Existing (created 2026-08-26)
│   ├── Technology/
│   └── Resume Shiva-7.pdf              # Source resume
├── 06_WeSchool/                        # (empty)
├── 07_Research/                        # (empty)
├── 08_Archive/                         # (empty)
└── 09_Inbox/                           # Staging zone (this file)
```

## Existing Knowledge-System Conventions

| Convention | Status | Details |
|---|---|---|
| **Flat vault** | ✅ Enforced | No nested vault folders (flattened 2026-08-16) |
| **9 domain roots** | ✅ Fixed | `00_System` + `01_Personal` … `09_Inbox` |
| **Governance files** | ✅ 20 files | YAML frontmatter, GFM-first, one H1, no level skips |
| **File naming** | ✅ Documented | `Title_Case_With_Underscores`, dates as `YYYY-MM-DD` prefix/suffix |
| **Profile write scopes** | ✅ Documented | 8 profiles × 1 domain each + Core for system |
| **Runtime enforcement** | ✅ Seeded | `SOUL.md` per profile + `.hermes.md` vault rulebook |
| **BakaTracker MCP** | ❌ Unverified | Documented as not connected (2026-08-16) |
| **Validation script** | ✅ Exists | `scripts/validate-brain.sh` (folders + files + heading integrity) |

## Resume Source Material

**Primary**: `D:\Brain\05_Knowledge\Resume Shiva-7.pdf` (parsed, full text available)

**Supporting** (in `04_Career\Tata Motors Internship\`):
- SIP/SIRP full reports (PDF/DOCX, ~30 pages each)
- `_srivatsa_sip_extract.txt` (1,270 lines extracted)
- `_purva_extract.txt` (69 KB extracted)
- Data folders (`data/`, `report_data/`, `Images/`)
- Python generation scripts (`create_*.py`)
- OLS proof notebook (`RBA90_Srivatsa_SIRP_OLS_Proof.ipynb`)

## Resume Claims Inventory (High-Level)

| Project / Role | Key Quantified Claims | Core Technologies |
|---|---|---|
| **Tata Motors (SIP/SIRP)** | 96 stations, 258 obs, r = -0.41, ~440 defects/1K engines, 3+ years data, ~1M records | Python, SQL, Excel, Power BI, Power Automate, SAP HANA, correlation, regression, process mapping, skill matrix |
| **Healthium Medtech** | 70% reporting reduction, ~60 min/day saved | SAP HANA, Python, SQL, Excel, Power BI, Power Automate |
| **ALPR** | Real-time, robust across lighting | Python, OpenCV, EasyOCR, Streamlit |
| **BakaTracker** | GenAI + MCP, task mgmt, auto actions, contextual recs | Python, MCP, React, FastAPI, LLMs, agents |
| **HavenOS** | ₹6.40 SROI, ₹60K/month pilot, 20% cost reduction | Financial modeling, SROI methodology, AI scheduling |
| **MICA × UCB** | Customer acquisition engine (national finalist) | GTM, acquisition funnel, CAC/LTV |
| **IIT Mandi × Zomato** | 10.4% AOV improvement | GTM analytics, upselling, bundling, pricing |
| **PocketJoystick** | Pitched to 20+ VCs, 4 incubators, Rank 1 IIM Mumbai | Business model, GTM, VC pitching |

## What Can Be Reused

| Asset | Reusable For | Location |
|---|---|---|
| `Theory_of_Constraints.md` | Operations → TOC, DBR, bottleneck concepts | `05_Knowledge/Operations/` |
| SIP/SIRP extracts | Tata Motors deep dive, correlation module, manufacturing analytics | `04_Career/Tata Motors Internship/` |
| Domain folder structure (AI, Analytics, Business, Finance, General, Management, Operations, Technology) | Matches 8 target domains exactly | `05_Knowledge/` |
| Governance conventions | Naming, frontmatter, linking, promotion chains | `00_System/` |
| Profile enforcement | Write-scope discipline for multi-domain build | `SOUL.md` + `.hermes.md` |

## What Should Remain Untouched

| Item | Reason |
|---|---|
| `00_System/` governance files | Canonical system docs — only Core modifies with authorization |
| `04_Career/` existing structure | Career profile owns this; SIP/SIRP are source evidence, not to be restructured |
| `05_Knowledge/` domain folders | Knowledge profile owns; subfolders grow from use (Rule 11: no speculative taxonomy) |
| `08_Archive/` | Empty — reserve for future archival per KNOWLEDGE_LIFECYCLE |
| Resume PDF | Source of truth — never modify |

## Where Placement Interview System Should Live

**Primary recommendation**: `05_Knowledge/Placement_Interview/`

Rationale:
- The 8 knowledge domains (01_AI … 08_TECHNOLOGY) **exactly match** the existing `05_Knowledge` subfolders
- Knowledge profile has write scope to `05_Knowledge`
- Cross-domain references to `04_Career` (resume projects) and `07_Research` (case studies) follow read-broadly rule
- Keeps "durable knowledge" in Knowledge domain, "operational interview prep" can bridge to Career

**Alternative**: `04_Career/Placement_Prep/` — if user prefers interview prep as career activity

**Hybrid**: Knowledge domains in `05_Knowledge/`, project deep-dives in `04_Career/Placement_Projects/`, interview engine in `04_Career/Interview_Engine/`

## Conflicts with Existing Architecture

| Conflict | Severity | Resolution |
|---|---|---|
| Master prompt proposes `09_RESUME_PROJECTS` as top-level | Low | Map to `04_Career/` (existing) or create cross-references |
| Master prompt proposes `10_INTERVIEW_ENGINE` as top-level | Low | Place in `04_Career/Interviews/` or `05_Knowledge/General/Interview_Engine/` |
| Master prompt proposes 8 domains as peer folders | None | Already exist in `05_Knowledge/` — perfect alignment |
| No existing `Placement_Interview` folder | None | Create as new subfolder under chosen parent (Rule 11: grow from use) |

## Proposed Integration Point

```
05_Knowledge/
├── AI/                     ← existing, extend
├── Analytics/              ← existing, extend
├── Business/               ← existing, extend
├── Finance/                ← existing, extend
├── General/                ← existing, extend
├── Management/             ← existing, extend
├── Operations/             ← existing, extend (has Theory_of_Constraints.md)
├── Technology/             ← existing, extend
└── Placement_Interview/    ← NEW: coordination layer
    ├── 00_START_HERE/
    │   ├── README.md
    │   ├── VAULT_AUDIT.md          ← this file
    │   ├── RESUME_KNOWLEDGE_MAP.md
    │   ├── RESUME_CLAIMS.md
    │   ├── RESUME_NUMBERS.md
    │   ├── PROJECT_MAP.md
    │   ├── SKILL_MAP.md
    │   ├── KNOWLEDGE_GAPS.md
    │   └── MASTER_INDEX.md
    ├── 09_RESUME_PROJECTS/         ← cross-ref to 04_Career
    ├── 10_INTERVIEW_ENGINE/
    ├── 11_CASE_LIBRARY/
    ├── 12_GLOSSARY/
    ├── 13_FORMULAS/
    ├── 14_CHEAT_SHEETS/
    ├── 15_SOURCE_LIBRARY/
    └── 16_RESUME_DEFENSE/
```

Cross-references from `Placement_Interview/` to `04_Career/Tata Motors Internship/`, `04_Career/Case_Comps/`, etc. via `[[WikiLinks]]` or relative paths.

---

## Gate Decision Required

**PHASE 0 COMPLETE** — The vault architecture is understood, reusable assets identified, integration point proposed.

**Options for Phase 1**:

1. **Proceed with Phase 1 (Resume Knowledge Map)** — Create the 8 files in `05_Knowledge/Placement_Interview/00_START_HERE/` as mapped above. Requires Knowledge profile write authorization.

2. **Adjust integration point** — Move to `04_Career/Placement_Prep/` or hybrid split. Requires Career profile write authorization.

3. **Modify scope** — Reduce/expand Phase 1 deliverables before building.

**Awaiting explicit approval to proceed to Phase 1 and clarification on integration point.**
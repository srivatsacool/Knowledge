---
title: Placement Interview Knowledge System — Start Here
type: governance
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
---

# Placement Interview Master Knowledge System

> **Phase 1 Complete** — Resume Knowledge Map & Audit
> **Phase 2 Complete (2026-09-07)** — Knowledge Architecture built: ~45 deep-dive notes across 8 Learning Levels → umbrella at `DS_ROADMAP.md`
> **Pending** — Interview engine / mock quizzes / case library (Phase 3)

---

## Purpose

This system is **not a generic interview course**. It is a personalized knowledge base built **from your resume outward** — every technology, methodology, project, number, and claim on your resume becomes a knowledge node, expanded into the prerequisite concepts needed to defend it in a high-pressure placement interview.

**Goal**: Complete interview readiness for *your specific resume*, not a general business analytics curriculum.

---

## System Architecture

```
05_Knowledge/Placement_Interview/
├── 00_START_HERE/                    ← PHASE 1 (this folder)
│   ├── README.md                     ← You are here
│   ├── RESUME_KNOWLEDGE_MAP.md       ← Visual: resume → knowledge dependencies
│   ├── RESUME_CLAIMS.md              ← Every bullet decomposed to required knowledge
│   ├── RESUME_NUMBERS.md             ← Every quantified claim with defense questions
│   ├── PROJECT_MAP.md                ← 7 projects with knowledge graphs
│   ├── SKILL_MAP.md                  ← Tools/technologies → proficiency → interview risk
│   ├── KNOWLEDGE_GAPS.md             ← Missing vs. needed knowledge
│   └── MASTER_INDEX.md               ← Cross-reference index
├── 01_AI/                            ← Phase 2+
├── 02_ANALYTICS/                     ← Phase 2+
├── 03_BUSINESS/                      ← Phase 2+
├── 04_FINANCE/                       ← Phase 2+
├── 05_GENERAL/                       ← Phase 2+
├── 06_MANAGEMENT/                    ← Phase 2+
├── 07_OPERATIONS/                    ← Phase 2+ (has Theory_of_Constraints.md)
├── 08_TECHNOLOGY/                    ← Phase 2+
├── 09_RESUME_PROJECTS/               ← Cross-ref to 04_Career/
├── 10_INTERVIEW_ENGINE/              ← Phase 2+
├── 11_CASE_LIBRARY/                  ← Phase 2+
├── 12_GLOSSARY/                      ← Phase 2+
├── 13_FORMULAS/                      ← Phase 2+
├── 14_CHEAT_SHEETS/                  ← Phase 2+
├── 15_SOURCE_LIBRARY/                ← Phase 2+
└── 16_RESUME_DEFENSE/                ← Phase 2+
```

---

## Source of Truth

| Source | Location | Status |
|---|---|---|
| **Resume (PDF)** | `05_Knowledge/Resume Shiva-7.pdf` | ✅ Parsed |
| **Tata Motors SIP/SIRP** | `04_Career/Tata Motors Internship/` | ✅ Extracted (1,270+ lines) |
| **Case Competition Materials** | `04_Career/Case_Comps/` | ✅ Available |
| **Other Career Docs** | `04_Career/` | ✅ Available |

**Cross-references**: This system links to `04_Career/` as the source/context layer. Do not duplicate — reference.

---

## Resume Truth Layer

Every claim in this system carries a **truth badge**:

| Badge | Meaning |
|---|---|
| ✅ **Verified** | Directly stated in resume or SIP/SIRP with evidence |
| 🔍 **Needs Evidence** | Claimed but needs specific methodology/data source |
| ❓ **Needs Clarification** | Ambiguous or incomplete in source |
| 📚 **Knowledge Dependency** | Prerequisite concept needed to defend |
| 🚫 **[USER INPUT REQUIRED]** | Cannot proceed without your input |

---

## How to Use This System

### Phase 1 (Current) — Map & Audit
- **Read** the 8 artifacts in `00_START_HERE/`
- **Verify** the claims, numbers, and gaps
- **Provide** input on `[USER INPUT REQUIRED]` items
- **Approve** Phase 2 architecture

### Phase 2+ — Build Knowledge
- Deep-dive each domain (Analytics → Operations → AI → Business → Finance → Tech → Management → General)
- Build Tata Motors, AI/MCP, ALPR, BakaTracker, HavenOS deep dives
- Create interview engine, quiz modes, mock interviews

### Daily Use
```text
"Teach me SQL window functions"
"Quiz me on correlation vs causation"
"Interview me on Tata Motors"
"Challenge my BakaTracker architecture"
"Give me a case study on GTM"
```

---

## Phase Gates

**No automatic phase continuation.** At the end of each phase:
1. Report created files
2. Report discoveries
3. Report knowledge gaps
4. Report `[USER INPUT REQUIRED]` items
5. Report source quality
6. Propose next phase
7. **STOP — wait for explicit approval**

---

## Profile & Permissions

- **Knowledge profile** writes to `05_Knowledge/Placement_Interview/`
- **Career profile** owns `04_Career/` (source material)
- **Cross-domain reads** allowed everywhere
- **Never modify** `04_Career/` or `00_System/` without authorization

---

## Quick Navigation

| Need | Go To |
|---|---|
| "What knowledge do I need for my resume?" | `RESUME_KNOWLEDGE_MAP.md` |
| "What are my exact claims and how to defend them?" | `RESUME_CLAIMS.md` |
| "What numbers must I defend?" | `RESUME_NUMBERS.md` |
| "What's in each project?" | `PROJECT_MAP.md` |
| "What tools/skills do I claim?" | `SKILL_MAP.md` |
| "What don't I know yet?" | `KNOWLEDGE_GAPS.md` |
| "Find a concept across the system" | `MASTER_INDEX.md` |

---

## Next Step

**Phase 2** will create the **Knowledge Architecture + Dependency Graph** — converting this map into the actual 8-domain knowledge system with proper cross-references, no duplication, and a learning dependency graph.

**Awaiting your Phase 1 verification and Phase 2 approval.**
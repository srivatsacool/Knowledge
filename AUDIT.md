# Brain Knowledge Hub — Full Repository Audit

**Audit Date**: 2026-10-02  
**Target Repository**: `D:\Brain\05_Knowledge`  
**Auditor**: Lead Software Architect & Systems Implementation Agent  

---

## 1. Executive Summary

This audit establishes the baseline technical and structural state of the **Brain Knowledge Hub**. The repository is designed as a long-term, open-source personal knowledge archive and static publishing portal. The audit confirms that the core publishing architecture is operating with zero external runtime dependencies, 100% preservation of standalone HTML study notebooks, and deterministic build/test cycles.

---

## 2. Current Architecture & Structural Hierarchy

The repository strictly enforces a three-tier separation between knowledge sources, publishing logic, and generated deployment artifacts:

```
D:\Brain\05_Knowledge\                    [TIER 1: CANONICAL SOURCE OF TRUTH]
├── AI\                                  [Subject division: Artificial Intelligence]
├── Analytics\                           [Subject division: Statistics & Data Intelligence]
├── Business\                            [Subject division: Strategy & Product]
├── Finance\                             [Subject division: Corporate Finance & Risk]
├── General\                             [Subject division: Toolkits & Methods]
├── Management\                          [Subject division: Leadership & Execution]
├── Operations\                          [Subject division: SCM, ERP, Logistics]
│   └── Supply Chain\
├── Placement_Interview\                 [Subject division: 17 modules, 94 interview guides]
├── Technology\                          [Subject division: Cloud, MLOps, Development]
├── ERP_Exam_Notebook.html               [Canonical Master Study Notebook]
├── ERP_Exam_Notebook.meta.json          [Explicit metadata specification]
├── _templates\                          [TIER 1: REUSABLE STARTER ASSETS]
│   ├── notebook-template.html           [Standalone HTML notebook binder template]
│   └── notebook-template.meta.json      [JSON Schema for metadata]
├── Website\                             [TIER 2: PUBLISHING APPLICATION]
│   ├── package.json                     [NPM task runners for node scripts]
│   ├── scripts\                         [Publishing engine, QA test suite, preview server]
│   │   ├── build.js
│   │   ├── test.js
│   │   └── dev.js
│   ├── src\                             [Application source templates and styles]
│   │   ├── client\search.js             [Client-side search modal & theme manager]
│   │   ├── styles\main.css              [Editorial academic CSS design system]
│   │   └── templates\                   [layout.html, home.html, subject.html]
│   └── dist\                            [TIER 3: EPHEMERAL GENERATED ARTIFACTS]
│       ├── index.html                   [Generated library homepage]
│       ├── data\                        [Generated search-index.json & notebooks.json]
│       ├── assets\                      [Bundled CSS and JS assets]
│       ├── operations\                  [Generated subject catalog]
│       │   └── erp\index.html           [Published ERP notebook at canonical URL]
│       └── ...                          [Other subject division routes]
├── .gitignore                           [Version control exclusion filters]
└── README.md                            [General documentation]
```

---

## 3. Comprehensive Folder Inventory

| Folder Path | Status | File Count | Current Contents & Role |
| :--- | :--- | :--- | :--- |
| `AI/` | Incubating | 0 | Reserved for AI architectures, LLM notes, prompt engineering. |
| `Analytics/` | Incubating | 0 | Reserved for time-series forecasting, statistical inference. |
| `Business/` | Incubating | 0 | Reserved for market entry, consulting frameworks, product metrics. |
| `Finance/` | Incubating | 0 | Reserved for corporate finance, options pricing, valuation models. |
| `General/` | Incubating | 0 | Reserved for research methods, study systems, productivity tools. |
| `Management/` | Incubating | 0 | Reserved for organizational behavior, leadership, operational execution. |
| `Operations/` | Active | 12 files | Contains `Theory_of_Constraints.md`, `Problem_Solving_in_Services_Case_Studies.pdf`, and `Supply Chain\` presentation slide decks. |
| `Placement_Interview/` | Active | 94 files | 17 structured subfolders (`01_AI`, `02_ANALYTICS`, `08_TECHNOLOGY`, etc.) containing interview preparation markdown notes. |
| `Technology/` | Incubating | 0 | Reserved for cloud computing, Docker, MLOps, FastAPI, React. |
| `Website/` | Production | 10 source files | Complete zero-dependency static publishing engine and frontend code. |
| `_templates/` | Production | 2 files | Master academic notebook binder template and JSON metadata schema. |

---

## 4. Notebook Inventory

### A. Published Standalone HTML Notebooks
1. **ERP Business Applications · Complete FAQ Master Notebook**
   - **Source Path**: `D:\Brain\05_Knowledge\ERP_Exam_Notebook.html`
   - **Companion Metadata**: `D:\Brain\05_Knowledge\ERP_Exam_Notebook.meta.json`
   - **Size**: 226,460 bytes (3,559 lines)
   - **Published URL**: `/operations/erp/` (`Website/dist/operations/erp/index.html`)
   - **Subject**: Operations
   - **Category**: Enterprise Systems
   - **Aesthetic**: Academic spiral binder with lined paper, red margin rule, sticky notes, hand-drawn badges.
   - **Typography**: Google Fonts (`Source Sans 3`, `STIX Two Text`, `Caveat`, `Patrick Hand`).
   - **Interactivity**: Sidebar drawer navigation with study progress checkboxes, 18 detailed question modules, real-time in-page search, calculation models, and embedded exam study countdown timers.
   - **Self-Containment**: 100% self-contained. Inlined CSS and JS; no local external asset dependencies or broken relative links.

### B. Notebook Templates
1. **Academic Binder Template**
   - **Source Path**: `D:\Brain\05_Knowledge\_templates\notebook-template.html`
   - **Companion Metadata Guide**: `D:\Brain\05_Knowledge\_templates\notebook-template.meta.json`
   - **Features**: Exact functional mirror of the ERP notebook architecture with placeholder comments for future AI agents (Orca, Agy CLI, OpenResearch) or human authors.

---

## 5. Website & Pipeline Architecture

### A. Publishing Engine (`Website/scripts/build.js`)
- **Technology**: Native Node.js (v18+ compatible; currently verified on Node v24.15.0).
- **External Dependencies**: 0 npm packages. Uses standard library (`fs`, `path`, `crypto`).
- **Execution Performance**: ~60 to 100 milliseconds for full discovery, compilation, and output generation.
- **Discovery Mechanism**:
  - Recursively traverses all 10 subject folders and the repository root.
  - Automatically identifies `.html` files while strictly excluding directories starting with `_` or named `Website`, `_templates`, `.git`, or `node_modules`.
  - Excludes any notebook with filename prefix `_draft` or `"status": "draft"`.
  - Extracts title, meta description, keywords, and section headings.
  - Merges with explicit companion `<filename>.meta.json` if present.
- **HTML Notebook Transformation**:
  - Copies source HTML notebooks to their canonical clean URL paths (`dist/<subject>/<slug>/index.html`).
  - Injects a discrete, sticky **Portal Return Bar** (`← Return to <Subject> • Library Catalog`) immediately after `<body>`.
  - Leaves all original notebook scripts, styles, and markup 100% unaltered.

### B. Search Pipeline (`Website/src/client/search.js` & `dist/data/search-index.json`)
- **Indexing Phase**: During build, extracts plain-text headings and text snippets, generating a unified search index (`dist/data/search-index.json`).
- **Query Phase**: Client-side fuzzy matching triggered via `Ctrl+K` or `/` shortcut.
- **Scoring**: Weights matches across Title (50 pts), Tags (30 pts), Headings (20 pts), Description (15 pts), Subject (10 pts), and Content Snippets (5 pts).
- **Performance**: Zero external API dependencies, zero server overhead, sub-millisecond query responses in-browser.

### C. Automated QA Suite (`Website/scripts/test.js`)
- Executes 48 distinct assertions covering:
  - Directory and asset generation.
  - Canonical subject catalog routes for all 9 divisions.
  - Clean URL generation and notebook content preservation.
  - Search index validity and structure.
  - Draft exclusion guarantees.
  - Internal link resolution across all generated pages.

---

## 6. Conventions, Naming & Risk Analysis

### A. Established Conventions
- **Clean URLs**: All URLs follow the canonical pattern `/<subject-slug>/<topic-slug>/`.
- **Lowercasing**: All subject slugs and notebook slugs are strictly lowercased and hyphenated.
- **Draft Protection**: The prefix `_draft` in filenames and `"status": "draft"` in metadata are enforced as private working material.
- **Design Consistency**: Off-white & warm cream editorial palette (`#fbf9f4` / `#f2efe7`) paired with serif academic headers and dark mode toggle.

### B. Identified Risks & Hardening Mitigations

| Risk | Impact | Status | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Accidental Overwrite of Source Notebooks** | High | Mitigated | Build pipeline reads from sources and writes strictly to `dist/`. Sources are never modified during builds. |
| **Unversioned Repository State** | Medium | Managed | Git is not yet initialized. `.gitignore` is prepared to prevent accidental commit of `dist/`. Exact Git initialization instructions provided in `GITHUB.md`. |
| **Draft Content Leakage** | High | Verified | Build script filters out drafts; QA suite explicitly verifies that temporary draft files do not leak into the build. |
| **Missing Metadata in Future Notebooks** | Low | Mitigated | Build engine features fallback extraction (`<title>`, `<meta name="description">`), ensuring missing `.meta.json` files do not crash the build. |
| **Path Inconsistencies on Case-Sensitive Hosts (Linux / Cloudflare)** | Medium | Hardened | Enforce strict lowercase slugs across all routes and directory outputs. |
| **External Network Dependencies** | Low | Verified | Zero runtime JavaScript libraries. Google Fonts are preconnected; all CSS and JS scripts are inlined or locally bundled. |

---

## 7. Generated vs Source Files Classification

To prevent data corruption, agents and operators must adhere to this file classification:

```
SOURCE OF TRUTH (Never delete; commit to Git):
- D:\Brain\05_Knowledge\AI\
- D:\Brain\05_Knowledge\Analytics\
- D:\Brain\05_Knowledge\Business\
- D:\Brain\05_Knowledge\Finance\
- D:\Brain\05_Knowledge\General\
- D:\Brain\05_Knowledge\Management\
- D:\Brain\05_Knowledge\Operations\
- D:\Brain\05_Knowledge\Placement_Interview\
- D:\Brain\05_Knowledge\Technology\
- D:\Brain\05_Knowledge\ERP_Exam_Notebook.html
- D:\Brain\05_Knowledge\ERP_Exam_Notebook.meta.json
- D:\Brain\05_Knowledge\_templates\
- D:\Brain\05_Knowledge\Website\package.json
- D:\Brain\05_Knowledge\Website\scripts\
- D:\Brain\05_Knowledge\Website\src\
- D:\Brain\05_Knowledge\README.md
- D:\Brain\05_Knowledge\RULE.md
- D:\Brain\05_Knowledge\AUDIT.md
- D:\Brain\05_Knowledge\DEPLOYMENT.md
- D:\Brain\05_Knowledge\GITHUB.md
- D:\Brain\05_Knowledge\ARCHITECTURE.md
- D:\Brain\05_Knowledge\PRODUCTION_READINESS.md

EPHEMERAL BUILD ARTIFACTS (Ignored by Git; regenerated by build.js):
- D:\Brain\05_Knowledge\Website\dist\
```

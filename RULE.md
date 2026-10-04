# Brain Knowledge Hub — Root Governance & Architectural Rules

> **DOCUMENT ID**: `RULE.md`  
> **SCOPE**: Entire `D:\Brain\05_Knowledge` repository and all sub-systems.  
> **TARGET AUDIENCE**: All human operators, autonomous agents (Orca, Agy CLI, OpenResearch, Antigravity, subagents), and CI/CD pipelines.  
> **ENFORCEMENT**: Absolute. No agent or script may violate these rules.

---

## 1. Repository Purpose

Brain Knowledge Hub is a long-term, open-source personal digital academic archive, study notebook repository, and static publishing system. Its primary objectives are:
1. To serve as the single, authoritative knowledge base for academic curricula, technical frameworks, business architectures, and engineering notes.
2. To publish standalone, interactive HTML study notebooks to the public web via GitHub and Cloudflare Pages.
3. To provide a predictable, safe, and deterministic environment for human researchers and future AI-assisted agent workflows.

---

## 2. Folder Ownership & Responsibilities

Every folder in `D:\Brain\05_Knowledge` has an explicit responsibility. Agents must never place files in arbitrary locations:

| Directory | Ownership & Intended Work |
| :--- | :--- |
| `AI/` | Artificial intelligence, transformer architectures, LLMs, prompt engineering, agentic workflows, and neural research. |
| `Analytics/` | Predictive modeling, time series forecasting, statistics, Power BI, DAX, and analytics engineering. |
| `Business/` | Strategic frameworks, consulting case books, product management, GTM metrics, and market research. |
| `Finance/` | Corporate finance, valuation models, options pricing, derivatives, and financial risk analysis. |
| `General/` | Cross-disciplinary foundations, research methodologies, academic toolkits, and study architectures. |
| `Management/` | Leadership, organizational behavior, process design, agile execution, and change management. |
| `Operations/` | Supply chain management, ERP architectures, Theory of Constraints, logistics, and production modeling. |
| `Placement_Interview/` | Comprehensive interview preparation library: resume defense, case banks, formulas, cheatsheets, and concepts. |
| `Technology/` | Full-stack software engineering, Docker, Kubernetes, cloud platforms, MLOps, FastAPI, and React. |
| `Website/` | **The publishing application layer**. Contains scripts (`build.js`, `test.js`, `dev.js`), templates, CSS, and client-side search logic. |
| `_templates/` | Reusable starter assets, binder templates, and JSON metadata schemas for human authors and AI agents. |

---

## 3. Source of Truth Architecture

The repository enforces a strict, immutable structural hierarchy:

```
[TIER 1: CANONICAL SOURCE OF TRUTH]
  D:\Brain\05_Knowledge\<Subject>\*.html, *.md, *.pdf
  D:\Brain\05_Knowledge\<notebook>.meta.json
        │
        ▼ (read by Website/scripts/build.js)
[TIER 2: PUBLISHING APPLICATION]
  D:\Brain\05_Knowledge\Website\
        │
        ▼ (emitted as ephemeral static output)
[TIER 3: GENERATED BUILD ARTIFACTS]
  D:\Brain\05_Knowledge\Website\dist\
```

- **Rule 3.1**: Source notebooks live strictly outside `Website/dist/`.
- **Rule 3.2**: `Website/dist/` is an ephemeral generated build directory. Agents must **never** manually edit files inside `Website/dist/`. Any change made there will be destroyed on the next build.
- **Rule 3.3**: Never duplicate notebook content across source folders unnecessarily. Source notebooks remain the canonical version of truth.
- **Rule 3.4**: When website layout or styling changes are needed, edit files in `Website/src/`, never the generated files in `Website/dist/`.

---

## 4. Notebook Quality & Formatting Rules

Every standalone HTML notebook published to the hub must adhere to these standards:

- **Rule 4.1 (Naming)**: Use descriptive PascalCase or kebab-case file names (e.g., `ERP_Exam_Notebook.html` or `supply-chain-frameworks.html`). Companion metadata must match the basename: `<basename>.meta.json`.
- **Rule 4.2 (Metadata Standard)**: Every notebook must have companion metadata (or embedded meta tags) defining: `title`, `slug`, `subject`, `category`, `description`, `tags`, `source`, `version`, `updated`, and `status`.
- **Rule 4.3 (Self-Containment)**: Notebooks must be self-contained HTML documents. Scripts, CSS, and SVG icons should be inlined. Never link to brittle local filesystem paths outside the notebook's distribution directory. External links are limited to stable CDNs (e.g. Google Fonts).
- **Rule 4.4 (Preservation of Interactivity)**: The build system must never strip, alter, or break native notebook interactivity (checkboxes, study timers, in-page search, calculation models, dark mode switches).
- **Rule 4.5 (Responsive Design)**: Must include `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` and render cleanly across desktop (1200px+), tablet (768px), and mobile (360px-480px).
- **Rule 4.6 (Print Support)**: Notebooks should include `@media print` rules that automatically expand collapsed sections (`details[open]`) and hide navigation overlays.

---

## 5. Website Application Rules

- **Rule 5.1 (Scope Boundary)**: Agents may enhance, fix, or optimize the publishing application (`Website/scripts/`, `Website/src/`).
- **Rule 5.2 (Non-Destructive Publishing)**: Agents must **never** rewrite or degrade original source notebooks simply to make them easier for the website to render. The publishing pipeline must adapt to the notebooks, not the other way around.
- **Rule 5.3 (Zero Runtime Overhead)**: The publishing pipeline must operate with 0 external npm dependencies using native Node.js APIs (`fs`, `path`, `crypto`, `http`).

---

## 6. Draft & Confidentiality Rules

- **Rule 6.1 (Definition of Draft)**: A file is considered a private working draft if:
  1. Its filename starts with `_draft` (e.g., `_draft_valuation_notes.html`), OR
  2. Its companion `.meta.json` specifies `"status": "draft"`.
- **Rule 6.2 (Strict Leak Prevention)**: Draft materials must **never** be copied into `Website/dist/`, indexed in `search-index.json`, listed in `notebooks.json`, or displayed on subject catalog pages.
- **Rule 6.3 (Automated Verification)**: The test suite (`Website/scripts/test.js`) must continuously verify draft exclusion before any deployment.

---

## 7. Academic Research & Synthesis Rules

When AI agents (or human contributors) generate academic study notebooks:

- **Rule 7.1 (Attribution & Citations)**: Distinguish original curriculum material from external AI synthesis. Preserve all academic citations, formula derivations, and author attributions.
- **Rule 7.2 (No Hallucinated References)**: Never fabricate academic sources, ISBNs, paper titles, or historical authors. If a reference is unknown, state that it is unsourced.
- **Rule 7.3 (Terminology Preservation)**: Maintain the exact nomenclature, variables, and case study conventions present in the foundational source materials (e.g., SAP transaction codes, TOC buffer management terms, statistical notations).
- **Rule 7.4 (External Research Marking)**: If supplementary web search or external papers are utilized, explicitly tag the metadata with `"source": "external-literature"` or include an explicit `## References` section in the document.

---

## 8. Agent Safety & Modification Discipline

All autonomous agents must operate under strict safety guidelines:

- **Rule 8.1 (Inspect Before Editing)**: Always inspect the existing filesystem, git status, and existing tests before creating or editing files.
- **Rule 8.2 (Minimal Surgical Footprint)**: Change only what is strictly required to accomplish the user prompt. Do not conduct broad, unsolicited refactors of working systems.
- **Rule 8.3 (Non-Destructive Policy)**: Never delete, rename, or overwrite user knowledge files, notebooks, or slide decks without explicit user authorization.
- **Rule 8.4 (Verification Mandate)**: An agent must run the build and test suite (`npm test`) after modifying publishing or metadata logic, and verify that all assertions pass.
- **Rule 8.5 (Topic Boundary Check & Multi-Notebook Decomposition)**:
  - Before creating a notebook, the agent must analyze the requested topic to determine appropriate knowledge boundaries.
  - The agent must not silently expand the user's request into adjacent subjects or unilaterally decompose a broad topic into multiple standalone notebooks.
  - If the requested topic naturally contains multiple major independent subjects (e.g. *Supply Chain Management* encompassing *Demand Planning*, *Inventory Management*, *Procurement*, *Logistics*, and *S&OP*), the agent must **STOP and ASK THE USER** for approval before proceeding:
    1. *One comprehensive notebook*
    2. *Separate notebooks for each topic*
    3. *One master notebook linking to separate topic notebooks*
  - **Important Distinction**: A single coherent topic may naturally require many modules and pages (e.g. *ERP Business Applications* with 16 modules). The agent must never ask merely because a notebook will be long, but only when the subject decomposes into multiple independent standalone knowledge units.

---

## 9. Version Control & Git Governance

- **Rule 9.1 (Git Staging Policy)**:
  - Commit all source knowledge, templates, website sources, and governance documents.
  - Strictly ignore `Website/dist/`, `node_modules/`, `.DS_Store`, `Thumbs.db`, and `_draft*` files via `.gitignore`.
- **Rule 9.2 (Branching Model)**:
  - `main`: Production-ready branch deployed to Cloudflare Pages.
  - `content/*`: Feature branch for drafting new subject notebooks.
  - `feature/*`: Development branch for publishing engine enhancements.
  - `research/*`: Experimental literature reviews and agent draft incubations.
  - `fix/*`: Rapid bug fixes and layout repairs.
- **Rule 9.3 (Zero Secrets Policy)**: Never commit `.env` files, API tokens, deployment keys, private credentials, or personal access tokens.
- **Rule 9.4 (Push Authorization)**: Agents must **never** execute `git push` or modify remote GitHub repositories without explicit, affirmative human instruction.

---

## 10. Publishing & Deployment Workflow

The publishing lifecycle follows an unyielding sequential pipeline:

```
[1. Source Authoring]  -->  Create/Edit notebook in subject folder + create .meta.json
         │
[2. Build Generation]  -->  Run: node Website/scripts/build.js
         │
[3. QA Verification]   -->  Run: node Website/scripts/test.js (Verify 0 failures)
         │
[4. Local Preview]     -->  Run: node Website/scripts/dev.js (Verify in browser)
         │
[5. Git Commit]        -->  Stage and commit verified source files
         │
[6. Cloudflare Deploy] -->  Push to GitHub -> Cloudflare Pages auto-builds & deploys
```

- **Rule 10.1 (Truth in Deployment)**: An agent must **never** claim a build or deployment succeeded unless the exact command was run and exited with status code `0`.

---

## 11. Orca Orchestration Compatibility (Future Target)

Orca is designated as the future master orchestration layer. When activated:
- **Role**: Orca will coordinate autonomous specialist agents to research, synthesize, format, test, and publish notebooks.
- **Worker Hierarchy**:
  - `Research Agent`: Discovers sources, queries literature, extracts case studies.
  - `Content Agent`: Drafts long-form study answers and architectural models.
  - `Notebook Agent`: Formats drafts into the standalone HTML binder template.
  - `QA Agent`: Validates HTML syntax, accessibility, links, and runs `Website/scripts/test.js`.
  - `Publishing Agent`: Staged Git commits and triggers deployment.
- **Status**: Architectural target only. Agents must not generate orchestration scaffolding until explicitly instructed.

---

## 12. OpenResearch Subsystem Compatibility (Future Target)

OpenResearch is designated as the deep academic research subsystem:
- **Role**: Literature discovery, preprint indexing, citation graphs, and academic document extraction.
- **Interface Protocol**:
  ```
  User Request -> Orca Orchestrator -> OpenResearch Task ->
  Research Artifacts -> Content Agent -> HTML Notebook -> QA Suite -> Publication
  ```
- **Status**: Future research subsystem. Agents must not pretend this integration exists or attempt to import uninstalled dependencies.

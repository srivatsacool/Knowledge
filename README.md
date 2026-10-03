# Brain Knowledge Hub — Digital Academic Archive & Publishing Portal

> A personal, open-source knowledge platform and static publishing engine for standalone HTML study notebooks, domain frameworks, and architectural blueprints.

---

## 1. Governance & Documentation Index

The repository is governed by explicit operational specifications. All human contributors and AI agents must consult these documents:

| Document | Purpose & Scope |
| :--- | :--- |
| [**RULE.md**](./RULE.md) | **Root Governance**: 12 mandatory rules covering folder ownership, source of truth, draft exclusion, agent safety, and publishing workflows. |
| [**ORCA_KNOWLEDGE_WORKFLOW.md**](./ORCA_KNOWLEDGE_WORKFLOW.md) | **Phase 5 Head Agent**: Conversational interface, 10-step planning, duplicate prevention, and human gates. |
| [**ORCA_AGY_AUDIT.md**](./ORCA_AGY_AUDIT.md) | **Phase 4 Audit**: Interface evaluation, stdout stream purity, error handling, and safe automation boundaries. |
| [**AGENT_CONTRACT.md**](./AGENT_CONTRACT.md) | **Canonical Task Contract**: Strict schema, lifecycle states (`RECEIVED` -> `PUBLISHED`), and standard error codes. |
| [**ORCA_INTEGRATION.md**](./ORCA_INTEGRATION.md) | **Orca Guide**: High-level orchestration, child-process invocation, error recovery, and human sign-off gates. |
| [**AGY_INTEGRATION.md**](./AGY_INTEGRATION.md) | **Agy CLI Handbook**: Worker execution checklists, binder structure standards, and self-healing validation. |
| [**CONTENT_PIPELINE.md**](./CONTENT_PIPELINE.md) | **AI Content Pipeline**: Task contracts, CLI reference, QA validator, draft promotion, and OpenResearch adapter specifications. |
| [**AUDIT.md**](./AUDIT.md) | **Repository Audit**: Baseline assessment of all 10 folders, notebooks, pipelines, conventions, and security mitigations. |
| [**ARCHITECTURE.md**](./ARCHITECTURE.md) | **System Architecture**: Data flow diagrams, three-tier topology, and future Orca / OpenResearch multi-agent roadmap. |
| [**DEPLOYMENT.md**](./DEPLOYMENT.md) | **Cloudflare Pages Handbook**: Step-by-step production deployment, custom domain setup, and edge routing. |
| [**GITHUB.md**](./GITHUB.md) | **GitHub Runbook**: Operator instructions for initializing, committing, and pushing to `srivatsacool/brain-knowledge-hub`. |
| [**PRODUCTION_READINESS.md**](./PRODUCTION_READINESS.md) | **Readiness Verification**: QA test verification, change log, and operational checklist. |

---

## 2. Architecture Overview

The repository separates **canonical source knowledge** (subject divisions) from the **publishing application** (`Website/`) and **ephemeral build output** (`Website/dist/`):

```
D:\Brain\05_Knowledge\
├── AI\                       # Source: Artificial Intelligence & Neural Architectures
├── Analytics\                # Source: Statistics, Forecasting, Data Intelligence
├── Business\                 # Source: Strategy, Consulting Case Frameworks, Product
├── Finance\                  # Source: Valuation, Derivatives, Risk Analysis
├── General\                  # Source: Foundational toolkits, methods, study systems
├── Management\               # Source: Leadership, Strategy, Operational Execution
├── Operations\               # Source: Supply chain, ERP, TOC, Logistics
│   ├── ERP_Exam_Notebook.html      # Representative Master Notebook (canonical source)
│   └── ERP_Exam_Notebook.meta.json # Companion metadata definition
├── Placement_Interview\      # Source: Comprehensive interview library (17 modules)
├── Technology\               # Source: Engineering, Cloud, Docker, MLOps, FastAPI
├── Website\                  # Publishing engine & web application
│   ├── package.json          # Build & test task runner (0 runtime dependencies)
│   ├── scripts\
│   │   ├── build.js          # Discovery, metadata extraction, and static generation
│   │   ├── test.js           # Automated QA validation suite (52+ assertions)
│   │   └── dev.js            # Zero-dependency local preview server
│   ├── src\
│   │   ├── templates\        # layout.html, home.html, subject.html
│   │   ├── styles\           # Off-white & warm cream editorial design system
│   │   └── client\           # Client-side fuzzy search & theme switch engine
│   └── dist\                 # Ephemeral generated output (deployed to Cloudflare)
│       ├── index.html        # Portal homepage
│       ├── data\             # search-index.json and notebooks.json
│       ├── {subject}\        # Subject catalog pages (e.g. /operations/)
│       └── {subject}/{slug}\ # Published notebooks (e.g. /operations/erp/)
├── _templates\               # Reusable binder templates for authors & AI agents
│   ├── notebook-template.html
│   └── notebook-template.meta.json
├── .gitignore
├── README.md
├── RULE.md
├── AUDIT.md
├── ARCHITECTURE.md
├── DEPLOYMENT.md
├── GITHUB.md
└── PRODUCTION_READINESS.md
```

---

## 3. Content Discovery & Clean URL Routing

The build script (`Website/scripts/build.js`) scans subject directories and the root folder for eligible `.html` notebooks:

1. **Automatic Extraction**: In the absence of a `.meta.json` file, the scanner extracts `<title>`, `<meta name="description">`, keywords, and section headings.
2. **Companion Metadata**: If `<notebook_name>.meta.json` exists, its fields explicitly define catalog and search behavior.
3. **Canonical Clean URLs**: Each notebook is published to:
   `/{subject-slug}/{notebook-slug}/index.html`
   (e.g., `ERP_Exam_Notebook.html` -> `/operations/erp/index.html`).
   All URLs are strictly lowercased and URL-safe.
4. **Preservation Guarantee**: Standalone notebooks are preserved with 100% byte fidelity. Inlined styles, interactive JavaScript, Google Fonts, and study timers continue to run natively.
5. **Portal Return Navigation**: A minimal, non-intrusive portal return bar is injected at the top of each notebook, enabling instant return to the parent subject catalog and home library.

---

## 4. Metadata Standard

Every notebook supports a companion `<notebook_name>.meta.json` file following this schema:

```json
{
  "title": "ERP Business Applications",
  "slug": "erp",
  "subject": "Operations",
  "category": "Enterprise Systems",
  "description": "Comprehensive exam revision master notebook covering ERP architecture, SAP 3-tier structure, MRP logic, BOM explosions, inventory control, and calculation models.",
  "file": "ERP_Exam_Notebook.html",
  "tags": ["ERP", "SAP", "MRP", "Operations", "Enterprise Architecture"],
  "status": "published",
  "source": "curriculum/operations",
  "version": "1.0.0",
  "updated": "2026-10-01",
  "featured": true,
  "readTimeMinutes": 45,
  "questionsCount": 18
}
```

### Publication Rules & Draft Protection
- **Published**: `"status": "published"` (default).
- **Draft Exclusion**: Setting `"status": "draft"` in `.meta.json`, or naming the file with a `_draft` prefix (e.g., `_draft_notes.html`), guarantees it will **never** be included in public builds, search indexes, or navigation menus.
- **Reserved Folders**: Directories starting with `_` or named `Website`, `_templates`, `.git`, or `node_modules` are automatically ignored by the discovery engine.

---

## 5. Local Commands & Workflows

Ensure Node.js (v18+) is available. No third-party `npm install` packages are required; everything uses the Node.js standard library.

### Build the Portal
```powershell
cd D:\Brain\05_Knowledge\Website
npm run build
```
*Output*: Generates the complete, self-contained static site inside `Website/dist/` in ~100ms.

### Run Verification & QA Tests
```powershell
cd D:\Brain\05_Knowledge\Website
npm test
```
*Checks*: 52 automated assertions covering output directories, subject routes, canonical URLs, URL slug lowercasing, internal link resolution, search index generation, and draft exclusion.

### Start Local Preview Server
```powershell
cd D:\Brain\05_Knowledge\Website
npm run dev
```
*Preview*: Open `http://localhost:3000/` in your browser. Live file watching automatically rebuilds the portal when templates or notebooks are updated.

### Orca Head Knowledge Agent (Natural Language & /knowledge Interface)
```powershell
# Natural language request with planning, dry-run simulation, and path prediction
node Website/scripts/pipeline/orca-agent.js "Create a comprehensive MBA notebook on Capital Budgeting under Finance" --dry-run

# Execute draft notebook creation via Orca Head Agent
node Website/scripts/pipeline/orca-agent.js "Create a comprehensive MBA notebook on Capital Budgeting under Finance"

# Natural language repository inquiries
node Website/scripts/pipeline/orca-agent.js "What notebooks do I have on operations?"
node Website/scripts/pipeline/orca-agent.js "Do I already have EOQ?"
node Website/scripts/pipeline/orca-agent.js "Which notebooks are currently drafts?"

# Slash command interface
node Website/scripts/pipeline/orca-agent.js /knowledge list --subject Operations
node Website/scripts/pipeline/orca-agent.js /knowledge search "working capital"
node Website/scripts/pipeline/orca-agent.js /knowledge build
```

### AI Notebook Production Pipeline Commands
```powershell
# Simulate creation via dry-run mode (no files written to disk)
node Website/scripts/pipeline/index.js create --topic "Capital Asset Pricing Model" --subject "Finance" --dry-run --json

# Create a new draft notebook via CLI with pure machine JSON output
node Website/scripts/pipeline/index.js create --topic "Capital Asset Pricing Model" --subject "Finance" --category "Valuation" --json

# Create from structured Orca task contract JSON
node Website/scripts/pipeline/index.js create --task _templates/sample-task.json --json

# Validate any notebook with 12-point QA suite
node Website/scripts/pipeline/index.js validate --file Operations/Economic_Order_Quantity_Notebook.html --json

# Safely promote a draft notebook to published (requires human sign-off)
node Website/scripts/pipeline/index.js publish --file Operations/Economic_Order_Quantity_Notebook.html --json

# Run all test suites (Website QA + Pipeline QA + Agent Integration + Orca Head Agent)
npm run test:all --prefix Website
```

---

## 6. GitHub & Cloudflare Pages Deployment

### GitHub Setup (Run by Human Operator)
```powershell
cd D:\Brain\05_Knowledge
git init
git add .
git commit -m "feat: initialize Brain Knowledge Hub publishing system and governance architecture"
git branch -M main
git remote add origin https://github.com/srivatsacool/brain-knowledge-hub.git
git push -u origin main
```
*(For complete branching strategies and pre-push checklists, see [**GITHUB.md**](./GITHUB.md))*

### Cloudflare Pages Configuration
1. Connect Cloudflare Pages to your GitHub repository `srivatsacool/brain-knowledge-hub`.
2. Build settings:
   - **Framework preset**: `None`
   - **Build command**: `node Website/scripts/build.js`
   - **Build output directory**: `Website/dist`
   - **Root directory**: `/`
   - **Environment Variable**: `NODE_VERSION: 20`
3. Deploy. Site will be globally distributed on Cloudflare's edge network.
*(For custom domains and edge routing details, see [**DEPLOYMENT.md**](./DEPLOYMENT.md))*

---

## 7. AI Agent Guidelines (Orca, Agy CLI, OpenResearch)

When an AI agent is instructed to create or update a notebook:

1. **Review Governance**: Read [**RULE.md**](./RULE.md). All 12 rules apply strictly.
2. **Copy the Base Template**: Start from `_templates/notebook-template.html`.
3. **Author the Content**: Place the new `.html` notebook in the appropriate subject directory.
4. **Generate Companion Metadata**: Create `<notebook_name>.meta.json` with required fields.
5. **Rebuild and Validate**: Run `npm run build` and `npm test` inside `Website/`. Verify 0 failures.
6. **Zero-Drift Safety**: Never modify existing subject notebooks or overwrite user material.

# Knowledge

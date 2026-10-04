# Brain Knowledge Hub — AI Knowledge Production Pipeline

**Pipeline Version**: 1.0.0  
**Target Environment**: Node.js v18+ (Zero External Runtime Dependencies)  
**Supported Agents**: Orca Orchestrator, Agy CLI, Antigravity, Human Contributors  

---

## 1. Executive Summary & Philosophy

The **AI Knowledge Production Pipeline** provides a standardized, machine-readable, and deterministic framework for authoring, validating, and publishing academic study notebooks to the **Brain Knowledge Hub**.

### Foundational Principles:
1. **Source of Truth Primacy**: Generated notebooks are placed in their canonical subject directory under `D:\Brain\05_Knowledge\<Subject>/`. `Website/dist/` remains strictly ephemeral build output.
2. **Safety by Default**: All newly generated notebooks default to `"status": "draft"`. Drafts are strictly excluded from static website generation, subject catalogs, and search indexing until explicitly promoted.
3. **100% Preservation**: Existing notebooks (e.g. `ERP_Exam_Notebook.html`) are immutable and never overwritten without explicit `--force` overrides.
4. **Deterministic Validation**: Every notebook must pass a 12-point automated QA validator checking document structure, schema compliance, link integrity, and draft isolation.

---

## 2. End-to-End Workflow Architecture

```
[STAGE A: Task Intake]
  Structured task contract (topic, subject, category, audience, depth, features)
         │
         ▼
[STAGE B: Destination Resolution]
  Resolver maps subject to canonical folder (e.g. Operations/), generates URL-safe slug, checks collisions
         │
         ▼
[STAGE C: Research & Synthesis (Optional)]
  Local curriculum analysis / OpenResearch literature intake; intermediate notes in _research/
         │
         ▼
[STAGE D & E: Content & HTML Generation]
  Generates standalone HTML using _templates/notebook-template.html (lined paper, binder tabs, timers)
         │
         ▼
[STAGE F: Metadata Generation]
  Emits companion <basename>.meta.json (status: "draft", source, version, updated, tags)
         │
         ▼
[STAGE G: Automated QA Validation]
  12-point check: HTML syntax, viewport, schema, internal anchors, draft isolation, build test
         │
         ▼
[STAGE H: Promotion & Publication]
  Explicit promotion command toggles status to "published", triggers build, updates search index
```

---

## 3. Orca Task Contract Specification

Future Orca orchestration passes a machine-readable JSON task contract to the pipeline.

### Input Task Contract Schema (`task.contract.json`)
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "OrcaNotebookTaskContract",
  "type": "object",
  "required": ["topic", "subject"],
  "properties": {
    "task_id": { "type": "string", "description": "Unique task tracking ID" },
    "operation": { "type": "string", "enum": ["create_notebook", "validate_notebook", "publish_notebook"] },
    "topic": { "type": "string", "description": "Title/topic of the notebook" },
    "subject": { 
      "type": "string", 
      "enum": ["AI", "Analytics", "Business", "Finance", "General", "Management", "Operations", "Placement_Interview", "Technology"] 
    },
    "category": { "type": "string", "description": "Sub-domain or course category" },
    "destination_subfolder": { "type": "string", "description": "Optional subfolder within subject (e.g. SCM, Cost_Accounting)" },
    "slug": { "type": "string", "description": "Custom lowercase URL-safe slug" },
    "audience": { "type": "string", "default": "Postgraduate / Professional" },
    "academic_level": { "type": "string", "default": "Advanced" },
    "depth": { "type": "string", "enum": ["foundational", "comprehensive", "exam_revision"] },
    "source_files": { "type": "array", "items": { "type": "string" } },
    "research_enabled": { "type": "boolean", "default": false },
    "desired_features": { 
      "type": "array", 
      "items": { "type": "string", "enum": ["formulas", "worked_examples", "blueprints", "exam_timer", "checklist"] } 
    },
    "publication_status": { "type": "string", "enum": ["draft", "published"], "default": "draft" },
    "author": { "type": "string", "default": "Orca / Agy CLI" },
    "force": { "type": "boolean", "default": false }
  }
}
```

### Output Result Schema (JSON emitted on stdout via `--json`)
```json
{
  "task_id": "task_20261003_eoq_01",
  "status": "success",
  "operation": "create_notebook",
  "output_files": {
    "notebook_html": "D:\\Brain\\05_Knowledge\\Operations\\Economic_Order_Quantity_Notebook.html",
    "metadata_json": "D:\\Brain\\05_Knowledge\\Operations\\Economic_Order_Quantity_Notebook.meta.json"
  },
  "notebook": {
    "title": "Economic Order Quantity (EOQ)",
    "subject": "Operations",
    "slug": "economic-order-quantity",
    "status": "draft"
  },
  "validation_results": {
    "valid": true,
    "checks_passed": 14,
    "checks_failed": 0
  },
  "warnings": [],
  "errors": [],
  "publication_status": "draft"
}
```

---

## 4. CLI Usage & Commands

The unified pipeline runner is located at `Website/scripts/pipeline/index.js` and exposed via npm scripts.

### 1. Create a Notebook

**From a Structured Task JSON file:**
```powershell
node Website/scripts/pipeline/index.js create --task _templates/sample-task.json
```

**Via Command-Line Arguments:**
```powershell
node Website/scripts/pipeline/index.js create `
  --topic "Economic Order Quantity" `
  --subject "Operations" `
  --category "Inventory Management" `
  --status "draft"
```

**Emitting Machine-Readable JSON for Agents:**
```powershell
node Website/scripts/pipeline/index.js create --topic "Capital Asset Pricing Model" --subject "Finance" --json
```

### 2. Validate a Notebook
Runs the 12-point QA validator against any HTML notebook:
```powershell
npm run notebook:validate -- --file Operations/Economic_Order_Quantity_Notebook.html
# Or directly:
node Website/scripts/pipeline/index.js validate --file Operations/Economic_Order_Quantity_Notebook.html
```

### 3. Promote & Publish a Notebook
Safely validates the notebook, flips `"status": "draft"` to `"status": "published"`, rebuilds the site, and verifies indexing:
```powershell
npm run notebook:publish -- --file Operations/Economic_Order_Quantity_Notebook.html
# Or directly:
node Website/scripts/pipeline/index.js publish --file Operations/Economic_Order_Quantity_Notebook.html
```

### 4. Run Automated Pipeline Test Suite
```powershell
npm run test:pipeline --prefix Website
```

---

## 5. Subject Destination Resolution Rules

The destination resolver enforces canonical taxonomy defined in **RULE.md**:

| Domain / Subdomain Input | Canonical Subject | Target Directory |
| :--- | :--- | :--- |
| `Supply Chain`, `Logistics`, `ERP`, `TOC`, `Inventory` | **Operations** | `Operations/` or `Operations/<subfolder>/` |
| `Machine Learning`, `LLMs`, `Transformers`, `Prompting` | **AI** | `AI/` or `AI/<subfolder>/` |
| `Forecasting`, `Statistics`, `Power BI`, `Time Series` | **Analytics** | `Analytics/` or `Analytics/<subfolder>/` |
| `Consulting`, `Case Studies`, `GTM Strategy`, `Product` | **Business** | `Business/` or `Business/<subfolder>/` |
| `Cost Accounting`, `Valuation`, `Derivatives`, `Risk` | **Finance** | `Finance/` or `Finance/<subfolder>/` |
| `Leadership`, `Process Design`, `Agile Execution` | **Management** | `Management/` or `Management/<subfolder>/` |
| `Algorithms`, `Interview Engine`, `Resume Defense` | **Placement_Interview** | `Placement_Interview/` |
| `Cloud`, `Docker`, `Kubernetes`, `FastAPI`, `MLOps` | **Technology** | `Technology/` or `Technology/<subfolder>/` |
| `Research Methods`, `Study Toolkits`, `General` | **General** | `General/` or `General/<subfolder>/` |

**Rule**: Agents are forbidden from creating arbitrary top-level directories in `05_Knowledge`. All notebooks must map to one of the 9 canonical directories.

---

## 6. QA Validation Checklist (12-Point Suite)

The automated validator (`Website/scripts/pipeline/validator.js`) checks:

1. **HTML Document Structure**: Verified presence of `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
2. **Responsive Viewport**: Verified presence of `<meta name="viewport" content="...">`.
3. **Metadata Syntax**: Companion `<name>.meta.json` exists and is valid JSON.
4. **Required Metadata Fields**: `title`, `slug`, `subject`, and `file` are present and non-empty.
5. **Canonical Subject**: Subject is validated against the 9 approved categories.
6. **URL-Safe Slug**: Strictly lowercase alphanumeric with hyphens (`^[a-z0-9]+(-[a-z0-9]+)*$`).
7. **Title & Description Quality**: Title $\ge 3$ characters, description $\ge 10$ characters.
8. **Folder Location**: Notebook is contained within a valid canonical subject tree.
9. **Internal Anchor Integrity**: All navigation links (`href="#sec1"`) match existing section IDs.
10. **Binder Components**: Verified presence of sheet container, sidebar index, and progress bar.
11. **Draft Search Isolation**: For draft notebooks, verified that the notebook slug is **omitted** from `search-index.json`.
12. **Draft Output Isolation**: For draft notebooks, verified that the notebook is **omitted** from `Website/dist/`.

---

## 7. OpenResearch Subsystem Adapter (Specification)

### What is OpenResearch?
[alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) is a local-first workspace for turning coding agents into autonomous research agents. It operates via the `orx` CLI and a local dashboard on `http://127.0.0.1:4791`, executing parallel research runs in isolated Git worktrees and analyzing arXiv literature.

### Architectural Adapter Design
When OpenResearch is enabled in future phases, it will integrate as an optional research subsystem:

```
[User / Orca Prompt]
         │
         ▼
[Orca Orchestrator]
   research_enabled == true
         │
         ▼
[OpenResearch Adapter]
   Executes: orx query "<topic>" OR orx reproduce-paper <arxiv-id>
   Runs in isolated worktree: .openresearch/sessions/<session-id>/
         │
         ▼
[Research Artifact Extraction]
   Emits: _research/<topic>/literature_notes.md
   Emits: _research/<topic>/citations.json
         │
         ▼
[Content Agent (Agy CLI)]
   Ingests literature notes as primary citations
   Generates notebook with ## References and mathematical proofs
         │
         ▼
[Notebook Pipeline]
   Generates HTML + companion .meta.json with "source": "external-literature"
```

### Integration Constraints & Safety Rules:
- **No Unauthorized Binaries**: OpenResearch is not installed or executed in this phase.
- **Strict Separation of Artifacts**: Intermediate literature summaries must live in `_research/` and never directly in public folders.
- **No Hallucinated Citations**: The adapter must pass verbatim arXiv IDs, DOIs, and author lists extracted by `orx`.

---

## 8. Phase 4 Agent Integration Layer

Phase 4 formalizes the machine-readable interfaces between autonomous agents and the Knowledge Hub:

- **Audit & Boundaries**: See [ORCA_AGY_AUDIT.md](file:///D:/Brain/05_Knowledge/ORCA_AGY_AUDIT.md) for interface inventory, stdout stream separation, and safe automation boundaries.
- **Canonical Agent Contract**: See [AGENT_CONTRACT.md](file:///D:/Brain/05_Knowledge/AGENT_CONTRACT.md) for schema definitions, lifecycle state machine (`RECEIVED` -> `PUBLISHED`), and standard error codes.
- **Orca Orchestration Guide**: See [ORCA_INTEGRATION.md](file:///D:/Brain/05_Knowledge/ORCA_INTEGRATION.md) for high-level orchestration, child-process invocation, error recovery, and human sign-off gates.
- **Agy CLI Operational Handbook**: See [AGY_INTEGRATION.md](file:///D:/Brain/05_Knowledge/AGY_INTEGRATION.md) for worker execution procedures, binder structure standards, and self-healing validation.

### CLI Enhancements:
- **Pre-Generation Validation**: `Website/scripts/pipeline/task-validator.js` enforces schema compliance before any filesystem write.
- **Dry-Run Inspection**: `--dry-run` simulates destination resolution, slug derivation, and collision detection without writing files to disk.
- **Pure JSON Stream**: `--json` emits strictly valid JSON on `stdout` with diagnostic and build logs routed to `stderr`.


# Brain Knowledge Hub — Orca Knowledge Workflow & Orchestration Specification

## The Multi-Agent Operational Model for Personal Knowledge Publishing

### 1. Conceptual Architecture & Orchestration Vision

In the **Brain Knowledge Hub** (`D:\Brain\05_Knowledge`), **Orca** operates as the **Head Knowledge Agent**. 

Rather than requiring the human owner or downstream agents to manually interact with raw CLI flags, low-level JSON contract files, directory paths, or static build commands, Orca provides a unified, conversational, and command-driven interface.

```
                         USER / OPERATOR
                               │
                               ▼
                             ORCA
                      (Head Knowledge Agent)
                               │
             ┌─────────────────┼──────────────────┐
             │                 │                  │
             ▼                 ▼                  ▼
          AGY CLI          RESEARCH            PIPELINE
       (Worker Agent)     (Provider)           (Engine)
             │                 │                  │
             │           OpenResearch             │
             │                 │                  │
             └─────────────────┼──────────────────┘
                               ▼
                       KNOWLEDGE ARTIFACT
                     (Draft HTML & Metadata)
                               │
                               ▼
                         12-POINT QA
                               │
                               ▼
                       HUMAN-IN-THE-LOOP
                    (Explicit Sign-Off Gate)
                               │
                               ▼
                            PUBLISH
                    (Canonical Route in dist/)
                               │
                               ▼
                       CLOUDFLARE PAGES
```

---

### 2. The Nine Canonical Orca Operations

Orca unifies repository capabilities into 9 discrete, auditable operations:

| Operation | Trigger Syntax | Description | Automation Level |
| :--- | :--- | :--- | :--- |
| **1. `CREATE_NOTEBOOK`** | `"Create notebook on <Topic> under <Subject>"` or `/knowledge create` | Full lifecycle creation: planning, dry-run, generation, validation, draft isolation | **Autonomous Draft** |
| **2. `RESEARCH_TOPIC`** | `"Research <Topic>"` or `/knowledge research` | Synthesizes literature outline and verified citations | **Autonomous Draft** |
| **3. `UPDATE_NOTEBOOK`** | `"Update <Notebook> with <Material>"` or `/knowledge update` | Controlled in-place section modification without wiping existing markup | **Autonomous Draft** |
| **4. `VALIDATE_NOTEBOOK`** | `"Validate <Notebook>"` or `/knowledge validate` | Runs 12-point QA validator against HTML, anchors, and metadata | **Autonomous** |
| **5. `LIST_KNOWLEDGE`** | `"What notebooks do I have?"` or `/knowledge list` | Filters and inventories knowledge assets by subject or draft status | **Autonomous** |
| **6. `SEARCH_KNOWLEDGE`** | `"Do I already have <Topic>?"` or `/knowledge search` | Multi-field search across titles, slugs, categories, and content snippets | **Autonomous** |
| **7. `BUILD_WEBSITE`** | `"Rebuild website"` or `/knowledge build` | Compiles static site and emits search index | **Autonomous** |
| **8. `PREPARE_PUBLICATION`**| `"Publish <Notebook>"` or `/knowledge publish` | Promotes draft to published status and adds to public search index | **Human Gate Required** |
| **9. `SHOW_STATUS`** | `"Show repository status"` or `/knowledge status` | Summarizes repository health, draft counts, and published assets | **Autonomous** |

---

### 3. Natural Language Translation & Parameter Inference

Orca translates conversational human directives into canonical task contracts conforming to `AGENT_CONTRACT.md`.

#### Ingestion Examples:
- **User**: *"Create a comprehensive MBA notebook on Capital Budgeting under Finance."*
  **Inferred Contract**:
  ```json
  {
    "operation": "create_notebook",
    "topic": "Capital Budgeting",
    "subject": "Finance",
    "academic_level": "graduate",
    "depth": "comprehensive",
    "research_enabled": false,
    "publication_status": "draft"
  }
  ```
- **User**: *"Turn these lecture notes into an exam study guide on Queuing Theory."*
  **Inferred Contract**:
  `research_enabled: false`, `subject: "Operations"`, `publication_status: "draft"`.
- **User**: *"Create a research-backed guide on Autonomous Agent Systems."*
  **Inferred Contract**:
  `research_enabled: true`, `research_provider: "openresearch"`, `subject: "AI"`.

#### Disambiguation Rules:
- If an essential parameter (e.g. subject) cannot safely be determined, Orca asks the user for clarification rather than hallucinating folder locations.
- Canonical subjects are strictly resolved using `CANONICAL_SUBJECTS` and `SUBJECT_ALIASES`.

---

### 4. Knowledge-Aware Behavior & Duplicate Prevention

Before creating any new file, Orca inspects existing repository assets.

If an existing or related notebook is detected (e.g., user asks to create "Economic Order Quantity"):
```json
{
  "status": "warning",
  "action_required": "DUPLICATE_FOUND",
  "message": "An existing notebook 'Economic Order Quantity (EOQ) · Classical Model & Inventory Blueprints' already exists at 'Operations/Economic_Order_Quantity_Notebook.html'.",
  "options": [
    "update: Update the existing notebook with new material",
    "related: Create a differentiated notebook with a unique topic/slug",
    "replace: Overwrite the existing notebook (requires force: true)",
    "cancel: Leave existing notebook unchanged"
  ]
}
```
Orca halts generation and presents the 4 non-destructive options, preserving existing knowledge.

---

### 5. Ten-Step Task Planning

Before executing write operations, Orca formulates an internal 10-step plan visible to the user:

1. **`RESOLVE_DESTINATION`**: Map canonical subject directory and normalize URL-safe slug.
2. **`INSPECT_KNOWLEDGE`**: Check repository for existing assets or slug collisions.
3. **`EVALUATE_RESEARCH`**: Determine research necessity based on input instructions.
4. **`VALIDATE_CONTRACT`**: Enforce pre-generation schema validation.
5. **`DRY_RUN_SIMULATION`**: Simulate path resolution and directory safety without touching disk.
6. **`DELEGATE_WORKER`**: Provide structured work parameters to Agy CLI.
7. **`GENERATE_NOTEBOOK`**: Produce standalone HTML notebook and companion `.meta.json`.
8. **`QA_VALIDATION`**: Run 12-point QA validation suite on generated markup.
9. **`VERIFY_DRAFT_ISOLATION`**: Verify that draft is omitted from static builds and search indexes.
10. **`REPORT_STATUS`**: Emit structured completion card for human review.

---

### 6. Worker Delegation: Agy CLI as Execution Engine

Orca delegates the physical generation and markup assembly to **Agy CLI**.

Orca issues structured work constraints:
- **Topic**: Capital Budgeting
- **Subject**: Finance
- **Status**: draft
- **Template**: `_templates/notebook-template.html`
- **Required Classes**: `.card`, `.blueprint`, `.sticky.blue`, `.sticky.yellow`, `.timer-box`

Agy CLI executes:
1. Reads `RULE.md` to ensure governance compliance.
2. Formats section content with formulas, blueprints, and worked numerical examples.
3. Generates the standalone HTML and companion `.meta.json`.
4. Runs automated QA validation.
5. Returns structured JSON result to Orca.

---

### 7. Research Provider Abstraction

Orca supports research backends via an open adapter interface:

```
[Orca Orchestrator]
       │
       ▼
 [ResearchRequest]
       │
       ├─► Provider: null           --> Uses local corpus / provided notes
       ├─► Provider: "openresearch" --> Delegated to alphaXiv/OpenResearch (future)
       └─► Provider: "future"       --> Pluggable research backends
       │
       ▼
[ResearchArtifact] (_research/<task_id>/summary.md, citations.json)
       │
       ▼
[Agy Content Agent] (Synthesizes verified bibliography section)
```

If `research_enabled: true` and `research_provider: null`, the request is rejected with `MISSING_RESEARCH_PROVIDER`.

---

### 8. Strict Human-in-the-Loop Approval Model

The system enforces an unbreakable boundary between automated drafting and production deployment:

#### Fully Automated by Agents:
- Repository inspection and semantic search.
- Natural-language parsing and task contract formulation.
- Dry-run simulation and collision checks.
- HTML draft notebook and `.meta.json` generation.
- Automated 12-point QA validation.
- Draft isolation verification.

#### Strictly Restricted to Human Sign-Off:
- **Promoting Draft to Published**: Executing `publish` upgrades status in metadata and publishes to `Website/dist/`.
- **Overwriting Existing Knowledge**: Overwriting files with `--force`.
- **Deleting Knowledge**: Removing notebook files.
- **Git Commits & Pushes**: `git commit` and `git push` to remotes.
- **Cloudflare Edge Deployment**: Pushing to production domains.

---

### 9. Structured Status Reports

Orca surfaces results using standardized, human-readable ASCII cards:

#### Completion Card:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE TASK COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━
Topic:
Capital Budgeting

Subject:
Finance

Status:
DRAFT

Notebook:
Finance/Capital_Budgeting_Notebook.html

Validation:
14/14 PASS

Published:
NO

Reason:
Human approval required

Next:
Review → approve publication
━━━━━━━━━━━━━━━━━━━━━━━━━━
```

#### Failure Card:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK FAILED
━━━━━━━━━━━━━━━━━━━━━━━━━━
Phase:
DESTINATION_RESOLUTION

Code:
SUBJECT_NOT_CANONICAL

Message:
Invalid subject 'QuantumPhysics'. Must be one of: AI, Analytics, Business, Finance, General, Management, Operations, Placement_Interview, Technology

Action:
No files modified.
━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 10. Controlled Notebook Update Workflow

When a user requests an update (e.g., *"Update my ERP notebook with new MRP material"*), Orca:
1. Locates the existing notebook.
2. Parses existing section topology and anchors.
3. Formulates a targeted section injection (appends the new section before `</main>` and adds the nav anchor before `</nav>`).
4. Updates `.meta.json` `updated` and `updatedAt` timestamps.
5. Re-runs QA validation to ensure no broken anchors or DOCTYPE truncation.
6. Preserves the publication status (draft remains draft; published remains published).
7. Never destroys existing content or regenerates from scratch.

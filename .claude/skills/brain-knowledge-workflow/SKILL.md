---
name: brain-knowledge-workflow
description: Master orchestration and end-to-end publishing pipeline skill for the BRAIN Knowledge OS. Coordinates raw source intake, research synthesis, canonical MDX notebook authoring, static Astro edge publishing, multi-stage QA, and Cloudflare deployment.
---

# BRAIN Knowledge Workflow: End-to-End Operating Procedure

## Purpose

`brain-knowledge-workflow` governs the end-to-end knowledge authoring, transformation, verification, and deployment lifecycle in the BRAIN Knowledge OS repository (`srivatsacool/Knowledge`).

It enforces the single authoritative publishing sequence:

```text
RAW SOURCES (PDFs, Notes, Transcripts, Exam Papers, Slides)
    ↓
brain-research (Evidence Engineering, Source Triangulation, Formula & PYQ Registers)
    ↓
STRUCTURED KNOWLEDGE (Topic Map, Provenance & Evidence Records)
    ↓
brain-notebook (12-Point Anatomy, Ruled Paper Typesetting, KaTeX, 12-Step Numericals)
    ↓
CANONICAL MDX (domains/<domain>/<subject>/notebooks/<slug>.mdx)
    ↓
HTML NOTEBOOK (Astro Static Edge Publication Artifact)
    ↓
PDF (Printable Paper Edition / Print Stylesheet)
    ↓
OPTIONAL INTERACTIVE BOOK (Papermorph 16:9 Parametric Vector Simulators)
    ↓
11-DIMENSION QA SUITE (Content, Math, Numericals, PYQs, Responsive, Performance)
    ↓
ASTRO WEBSITE COMPILATION (Static Directory Routing)
    ↓
CLOUDFLARE PAGES DEPLOYMENT (https://knowledge-du5.pages.dev/)
```

---

## 1. Architectural Tiers & Source of Truth

Knowledge in BRAIN is strictly tiered:

1. **Tier 1: Canonical Source of Truth**:
   * Stored in `domains/<domain>/<subject>/notebooks/*.mdx`.
   * Companion metadata in `domains/<domain>/domain.md` and `domains/<domain>/<subject>/subject.md`.
   * Authored in structured Markdown/MDX with typed frontmatter adhering to `Website/src/content.config.ts`.
2. **Tier 2: Publishing Application Layer**:
   * Located in `Website/` (Astro 5+ project, Tailwind CSS, paper components, edge routing).
   * Emits static edge assets to ephemeral build targets (`Website/dist/`).
3. **Tier 3: Publication Artifacts**:
   * HTML Notebook Experience (`/<domain>/<subject>/notebooks/<slug>/`).
   * Printable / PDF Edition (`/<domain>/<subject>/notebooks/<slug>/print/`).
   * Derivative Interactive Simulator (`/<domain>/<subject>/interactive/<slug>/`).

---

## 2. Multi-Stage Operational Workflow

### Stage 1: Intake & Boundary Verification
1. Gather user-supplied documents (PDFs, syllabi, lecture transcripts, question papers).
2. Execute **Topic Boundary Check**:
   * If a topic decomposes into multiple independent standalone knowledge units, formulate the modular decomposition before drafting.
   * Verify that no prohibited institutional names (`WeSchool`, `Welingkar`, `MBA`, `B-school`) are present in proposed outputs.

### Stage 2: Research & Evidence Synthesis (`brain-research`)
1. Create research artifact directory `research/<topic-slug>/`.
2. Generate:
   * `research-brief.md`: Scope, learning objectives, domain placement.
   * `topic-map.md`: Hierarchical concept breakdown and prerequisite mapping.
   * `evidence.md`: Triangulated claims with distinction between user sources, academic literature, and synthesis.
   * `formula-register.md`: Verified equations, notation conventions, units, and assumptions.
   * `pyq-map.md`: Past examination questions with verified year, marks, paper, and topic link (Zero Fabrication).
   * `glossary.md`: Canonical nomenclature, acronyms, and transaction codes.
3. Validate research gate: **READY FOR NOTEBOOK**.

### Stage 3: Canonical MDX Authoring (`brain-notebook`)
1. Author canonical MDX document in `domains/<domain>/<subject>/notebooks/<slug>.mdx`.
2. Structure the document with the **12-Point Anatomy** and **9-Section Index**:
   * `START`: YAML frontmatter + High-impact StickyNote thesis.
   * `FOUNDATIONS`: Problem statement, legacy liabilities, and definitions.
   * `CORE CONCEPTS`: Core axioms, taxonomies, and comparison tables.
   * `FRAMEWORKS & MODELS`: Architecture blueprints and deterministic SVG diagrams.
   * `WORKED EXAMPLES`: 12-step professor numerical calculations with explicit arithmetic traces.
   * `CASES & APPLICATIONS`: Real-world corporate mini-cases analyzing business trade-offs.
   * `PYQs`: Solved past examination question bank and frequency matrix.
   * `QUIZ & REVISION`: Active recall flashcards and interactive revealable quiz questions.
   * `APPENDIX`: Full 7-part register (Sources, Citations, Figures, PYQ Provenance, Glossary, Formulas, Change History).

### Stage 4: Interactive Book & Visual Simulators (Derivative Artifacts)
1. For parametric models requiring dynamic parameter exploration (e.g. EOQ sensitivity, Safety Stock curves, INCOTERMS risk frontier):
   * Build responsive 1600x900 SVG parameter stage.
   * Provide client-side range sliders with instant recalculation.
   * Ensure dark mode and light mode parity.

### Stage 5: Static Publishing Generation & Routing
1. Astro content layer loads canonical MDX via `Website/src/content.config.ts`.
2. Generate static routes:
   * Notebook reader: `Website/src/pages/[domain]/[subject]/notebooks/[slug].astro`
   * Printable PDF: `Website/src/pages/[domain]/[subject]/notebooks/[slug]/print.astro`
   * Subject desk: `Website/src/pages/[domain]/[subject]/index.astro`
   * Domain shelf: `Website/src/pages/[domain]/index.astro`
   * Library homepage: `Website/src/pages/index.astro`
   * Global search index: Built statically for shadcn Command dialog.

### Stage 6: The 11-Dimension QA Suite
Before any deployment, verify all 11 quality gates:
1. **Content QA**: Zero prohibited terms (`node Website/scripts/scan-forbidden.js`).
2. **Structural QA**: Typed frontmatter validation (`astro check`).
3. **Visual QA**: Ruled lines, red margin, punch-holes, spiral spine, stamps, and sticky notes intact.
4. **Math QA**: KaTeX equations compile without LaTeX syntax errors (`node Website/scripts/find-math.js`).
5. **Numerical QA**: 12-step calculation trace, intermediate steps shown, sanity checks verified.
6. **PYQ QA**: Zero fabricated questions; verified marks, paper, and model answers.
7. **Quiz QA**: Revealable accordion answers with in-depth justification.
8. **Accessibility QA**: Keyboard navigation, ARIA modal attributes, visible focus rings.
9. **Responsive QA**: Tested across 390px, 768px, 1024px, and 1440px.
10. **Performance QA**: Lightweight SVG, zero unneeded runtime JS, fast edge caching.
11. **Build QA**: `npm run build` exits with code `0`.

### Stage 7: Git Staging & Cloudflare Pages Verification
1. Review Git status (`git status`).
2. Stage and commit verified canonical files and components.
3. Push to `main` branch to trigger Cloudflare Pages automatic edge build.
4. Verify live deployment at `https://knowledge-du5.pages.dev/`.

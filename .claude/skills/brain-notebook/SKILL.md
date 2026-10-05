---
name: brain-notebook
description: Authoritative academic paper notebook authoring skill for BRAIN. Defines the visual, typographic, mathematical, numerical, infographic, examination, and archival standards for canonical MDX notebooks.
---

# Brain Notebook Specification & Authoring Standard

## Purpose

`brain-notebook` is the authoritative skill for transforming structured research from `brain-research` into canonical, publication-ready academic paper study notebooks in BRAIN.

A BRAIN notebook is defined as:
> *"A beautifully typeset academic notebook that became interactive."*  
> Not an HTML page pretending to be a notebook, and not a SaaS dashboard.

---

## 1. Physical Paper Aesthetic & Visual Language

Every notebook must embody physical stationery qualities resting upon a scholar's study desk:

1. **Paper Canvas**: Warm cream paper background (`--paper: #FCF8EE` light, `--paper: #171412` dark).
2. **Horizontal Ruled Lines**: Subtle blue notebook rulings (`--rule: #D6E3EF` light, `--rule: #243049` dark) spaced at 30px line-height.
3. **Vertical Red Margin**: Left red margin demarcation line (`--margin: #E28B8B` light, `--margin: #7F1D1D` dark).
4. **Punch-Holes & Binding Spine**: Authentic three-hole punch radial cutouts and spiral binding teeth on the left edge.
5. **Marginalia & Accents**: Handwritten annotations and washi-tape sticky notes (`Caveat` and `Patrick Hand` fonts).
6. **Rubber Stamps**: Editorial impressions (`VERIFIED`, `EXAM CRITICAL`, `HISTORICAL`, `DATA QUALITY LAW`).
7. **Highlighter Marks**: Semi-transparent yellow (`--hy`), green (`--hg`), pink (`--hp`), and blue (`--hb`) chisel marks.

---

## 2. Typography Standard

The typographic hierarchy must enforce intellectual authority and high legibility:

* **DISPLAY & TITLES**: Editorial serif (`Libre Bodoni` / `Libre Baskerville`).
* **SECTION HEADINGS**: Strong academic serif (`Libre Bodoni`).
* **BODY TEXT**: High-legibility continuous reading sans-serif (`Public Sans` / `Source Sans 3`).
* **MARGINALIA & NOTES**: Handwritten accent cursive (`Caveat` / `Patrick Hand`).
* **FORMULAS & PROOFS**: KaTeX mathematical typography.
* **CODE & METADATA**: Monospace (`JetBrains Mono`).

Typography establishes:
* `COVER` $\to$ Editorial
* `SECTION` $\to$ Academic
* `BODY` $\to$ Extremely readable
* `ANNOTATION` $\to$ Handwritten
* `FORMULA` $\to$ Technical precision

---

## 3. Top Notebook Controls

Every notebook must render a standardized, accessible top control bar:

```text
[ Index ]  [ Search 🔍 ]  [ Focus ]  [ Light/Dark ]  [ Progress ]  [ Print ]
```

* **`[ Index ]`**: Opens the structured 9-section index drawer (Sheet on mobile, sidebar toggle on desktop).
* **`[ Search 🔍 ]`**: Opens the global shadcn Command palette (⌘K) to query headings, paragraphs, formulas, tables, PYQs, quiz questions, and glossary terms.
* **`[ Focus ]`**: Toggles Focus Mode — suppresses distractions, collapses sidebars and toolbars, and expands reading width for deep study.
* **`[ Light/Dark ]`**: Toggles between cream paper notebook (`#FCF8EE`) and dark academic reading mode (`#171412`). Never use a simple inverted filter.
* **`[ Progress ]`**: Real-time reading progress bar and percentage indicator.
* **`[ Print ]`**: Opens clean printable / PDF view (`@media print`) with collapsed elements expanded and toolbars hidden.

---

## 4. Structured 9-Section Notebook Index

The notebook index must NEVER be a flat list of headings. It MUST be organized into these 9 canonical pedagogical divisions:

1. **`START`**: Scope, Course Metadata, and high-impact Sticky Note thesis.
2. **`FOUNDATIONS`**: Core definitions, historical legacy, and theoretical problem context.
3. **`CORE CONCEPTS`**: Fundamental axioms, taxonomies, and distinction cards.
4. **`FRAMEWORKS & MODELS`**: Architectural blueprints, multi-tier topologies, and comparison matrices.
5. **`WORKED EXAMPLES`**: Step-by-step mathematical proofs and 12-step numerical calculation traces.
6. **`CASES & APPLICATIONS`**: Real-world corporate mini-cases and operational impact studies.
7. **`PYQs`**: Past examination questions, marks allocation, frequency heatmap, and model solutions.
8. **`QUIZ & REVISION`**: Active recall flashcards and interactive revealable quiz questions.
9. **`APPENDIX`**: Comprehensive 7-part register (Sources, Citations, Figures, PYQ Provenance, Glossary, Formulas, Change History).

---

## 5. Mathematical Rigor (HARD REQUIREMENT)

Every formula must be typeset with KaTeX (`$` for inline, `$$` for display). Formulas must NEVER appear as plain text, broken HTML, or images.

Every primary formula requires the standard 8-point specification:
1. **Formula**: Display KaTeX equation ($$\dots$$).
2. **Meaning**: Clear conceptual statement of what the equation models.
3. **Variable Table**: Symbol, full name/description, and explicit unit of measurement.
4. **Assumptions & Boundary Conditions**: Operating premises and domain constraints.
5. **Worked Substitution**: Real-world parameter substitution with intermediate calculation steps.
6. **Final Result**: Exact numerical answer with proper units.
7. **Managerial / Operational Interpretation**: What the result means for decision-making.
8. **Sanity Check**: Dimensional analysis and directional sensitivity.

---

## 6. Numerical Explanations: The 12-Step Professor Standard (HARD REQUIREMENT)

Numerical problems must be presented as if a master professor is teaching the calculation at a chalkboard. Never jump directly from "Formula $\to$ Answer".

Every numerical walkthrough must follow the 12-step pedagogy:
```text
1. PROBLEM STATEMENT        --> Real-world business or engineering scenario
2. GIVEN DATA               --> List of known values with notation and units
3. WHAT IS REQUIRED?        --> Explicit target variable to solve
4. FORMULA / MODEL          --> Display KaTeX equation selected
5. WHY THIS FORMULA?        --> Rationale for selecting this specific model
6. VARIABLE DEFINITIONS     --> Table of symbols, descriptions, and values
7. SUBSTITUTION             --> Numeric values substituted into the formula
8. CALCULATION TRACE        --> Step 1, Step 2, Step 3... showing arithmetic
9. FINAL ANSWER             --> Distinct boxed result with explicit units
10. INTERPRETATION          --> Business implication of the calculated number
11. SANITY TEST / CHECK     --> Boundary test, sensitivity check, or alternative verification
12. COMMON MISTAKE / TRAP   --> Typical exam errors (e.g. daily vs annual units)
```

---

## 7. Deterministic SVG Infographics

Every major architectural or process concept must be paired with an explanatory visual.
* **Format**: Deterministic, responsive SVG vector graphics.
* **Color System**: Monochromatic ink lines with paper highlight accents (`#1D3C8C`, `#2F5FC4`, `#E28B8B`, `#1D7A45`, `#B86E00`).
* **Metadata**: Every figure MUST have:
  - Figure ID (`Figure 1.1`, `Figure 2.3`)
  - Title
  - Descriptive Caption
  - Semantic Alt Text
  - Provenance / Source Citation

---

## 8. Past Examination Questions (PYQ) Protocol

1. **Zero Fabrication**: Only genuine questions from verified past exam papers.
2. **Metadata**: Each PYQ must record: Year, Session/Paper, Question Number, Marks Weightage, Exact Wording, and Topic.
3. **Structure**:
   - Examination Frequency & Heatmap Matrix
   - Year-wise & Topic-wise grouping
   - Step-by-step Model Answer
   - 4-Pillar Answer Construction Strategy (Definition, Blueprint, Workflow, Case Evidence)
   - Common Exam Pitfalls & Traps

---

## 9. Active Recall Quiz

Following the PYQ section, include conceptual evaluation:
* **Formats**: Multiple-Choice Questions (MCQs), True/False with justification, Scenario analysis, Numerical quick-fire, and Spot-the-Mistake.
* **Interactivity**: Answers hidden by default using accessible accordion/collapsible controls.
* **Pedagogy**: Every answer MUST explain *why* the correct answer is right and *why* distractors are incorrect.

---

## 10. The 7-Part Appendix

Every canonical notebook ends with a standardized 7-part appendix:
* **A. SOURCE REGISTER**: Formal citation of books, research papers, faculty notes, and official manuals.
* **B. CITATION REGISTER**: Mapping of inline citation keys to bibliography entries.
* **C. FIGURE / DIAGRAM REGISTER**: Catalogue of all figures with provenance.
* **D. PYQ PROVENANCE**: Verification table linking each PYQ to its source exam paper.
* **E. GLOSSARY**: Comprehensive alphabetical definition of terms, acronyms, and transaction codes.
* **F. FORMULA REGISTER**: Master cheat sheet summarizing all equations and units.
* **G. CHANGE HISTORY**: Version log, update timestamps, and author review sign-off.

---

## 11. Strict Compliance Rules

1. **Zero Prohibited Terms**: Never include `WeSchool`, `Welingkar`, `MBA`, `PGDM`, `B-school`, or `business school`.
2. **Canonical Placement**: Notebooks live strictly as MDX files in `domains/<domain>/<subject>/notebooks/<slug>.mdx`.
3. **Companion Print Route**: Every notebook must provide a print companion at `.../notebooks/<slug>/print/`.

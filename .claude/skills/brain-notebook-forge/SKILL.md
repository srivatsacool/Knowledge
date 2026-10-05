---
name: brain-notebook-forge
description: Personal knowledge operating system engine for BRAIN. Ingests raw learning materials (PDFs, faculty notes, scanned PYQs), constructs syllabus graphs, builds editorial exam notebooks, and generates Papermorph-inspired interactive visual books deployed statically to Cloudflare Pages.
---

# Brain Notebook Forge — Knowledge Operating System Engine

`brain-notebook-forge` is the authoritative knowledge engineering engine for **BRAIN**. It translates raw academic and professional materials into structured, multi-tier knowledge systems:
1. **Editorial Master Exam Notebooks** (Comprehensive syllabus coverage, faculty synthesis, exam-ready answers, diagrams, and KaTeX mathematical rigor).
2. **Faculty-Specific Notebooks** (Preserving distinct faculty models, terminology, and slide frameworks).
3. **Papermorph-Inspired Interactive Books** (1600×900 responsive visual stages where concepts are explained through dynamic change, synchronized narration beats, and embedded micro-checks).
4. **Verified PYQ Archives** (Verbatim past papers, frequency matrix, mark distributions, and step-by-step solutions).
5. **Formula Directories** (Rigorous KaTeX notation, variable glossaries, and step-by-step arithmetic walkthroughs).
6. **Last-Minute Revision Guides** (Rapid blitz summaries, 20 core acronyms, and high-frequency exam traps).

---

## 1. Information Architecture & Pipeline

```
Raw Sources (PDFs, Notes, Scans)
            │
            ▼
    [1. INTAKE & HASH]
            │
            ▼
   [2. SOURCE AUDIT] ──► Tier 1: Official Syllabus | Tier 2: Faculty Notes | Tier 3: PYQ Scans | Tier 4: Reference
            │
            ▼
   [3. SYLLABUS MAP] ──► topic-map.md (15 sessions, LOs, core competencies)
            │
            ▼
   [4. PYQ ANALYSIS] ──► pyq-map.md (OCR, verbatim extraction, frequency classification)
            │
            ▼
 [5. KNOWLEDGE MODEL] ──► PROJECT.md (Metadata, prerequisites, taxonomy)
            │
     ┌──────┴─────────────────────────┐
     ▼                                ▼
[6. NOTEBOOK FORGE]          [7. INTERACTIVE BOOK FORGE]
Master & Faculty Notebooks   Papermorph 1600×900 Visual Stage
KaTeX Formulas & Proofs      Storyboard Beats & Narration
Diagrams & Model Answers     Active Parameter Simulators & Quizzes
     │                                │
     └──────┬─────────────────────────┘
            ▼
   [8. REVIEW & QA] ──► review.md (Zero hallucinated PYQs, link integrity, KaTeX checks)
            │
            ▼
   [9. ASTRO REGISTER & DEPLOY] ──► Cloudflare Pages (`https://knowledge-du5.pages.dev`)
```

---

## 2. File-Based State Machine

Every project forged with this skill maintains a deterministic, audit-trailed workspace state in the project root:

| State File | Purpose & Schema |
| :--- | :--- |
| `PROJECT.md` | Core project metadata: title, slug, division, type, status, stats (topics, notebooks, pyqYears, chapters), tags, and related projects. |
| `BOOK.md` | Interactive Book manifest: reading thesis, narrative arc, stage dimensions (1600×900), visual palette, and chapter sequence. |
| `chapters.md` | Detailed chapter outline, pedagogical learning objectives, scene descriptions, and simulation mechanics. |
| `topic-map.md` | Exhaustive syllabus matrix linking official sessions to faculty slides, reference chapters, and core terminology. |
| `pyq-map.md` | Verbatim past examination question database, mark schemes, recurrence frequencies (High/Medium/Low), and solution links. |
| `review.md` | Verification checklist: syllabus completeness, mathematical correctness, formula rendering, asset presence, and accessibility. |

---

## 3. Strict Source Hierarchy & Attribution Rules

All knowledge generation MUST follow this inviolable source precedence:

1. **Tier 1 — Official Course Material** (`COURSE_OUTLINE_*.pdf`):
   - Sets the definitive boundary of what is examinable.
   - Defines session titles, official learning objectives, and recommended references.
   - *Rule*: Never invent topics outside this outline without explicitly labeling them as supplementary context.

2. **Tier 2 — Faculty-Specific Materials** (`01_Ajit_Sir_...`, `02_Manoj_Sir_...`, `03_Praful_Sir_...`):
   - Preserves each professor's distinct vocabulary, proprietary slide frameworks, numerical conventions, and emphasized case studies.
   - *Rule*: Never homogenize faculty viewpoints when they present competing approaches (e.g., contrasting inventory models or logistics design philosophies).

3. **Tier 3 — Previous Year Exam Papers** (`LSCM_2023_2024_2025.pdf`):
   - Scanned, OCR'd, or image-inspected question papers.
   - *Rule*: **STRICTLY ZERO FABRICATION**. Every question must exist in the source papers. Retain exact marks, years, and phrasing.

4. **Tier 4 — Existing Notebooks & Class Transcripts**:
   - Secondary references for layout structures, diagram logic, and initial summaries.

5. **Tier 5 — Verified Model Explanations & Supplementary Context**:
   - Pedagogical bridges, consulting frameworks, and industry examples (e.g., Apple, Amazon, Zara, Toyota) used to enrich the student's conceptual mastery.

---

## 4. Notebook Generation Engine (Academic Paper Edition)

The generated Master Notebook and Faculty Notebooks must embody the **Academic Paper Edition** design system:
- **Paper Palette**: Warm parchment base (`#FAF7F0`), card surfaces (`#FFFFFF` with `#F4EEDD` accents), deep ink body text (`#1C1917`), and muted graphite rules (`#E7E5E4`).
- **Typography Hierarchy**:
  - Headings: Editorial Serif (`Libre Bodoni` or `Playfair Display`).
  - Body Text: High-legibility Sans (`Public Sans` or `Inter`).
  - Math & Code: Monospaced (`JetBrains Mono`).
- **12-Point Topic Architecture**: Every major topic in the Master Notebook answers:
  1. *What is it?* (Crisp, authoritative definition)
  2. *Why does it matter?* (Strategic business rationale & supply chain impact)
  3. *How does it work?* (Step-by-step operational mechanics)
  4. *What are the core components?* (Architectural breakdown)
  5. *What are the strategic trade-offs?* (Cost vs. Responsiveness, Risk vs. Efficiency)
  6. *What is the theoretical framework/model?* (e.g., SCOR, Kraljic, EOQ)
  7. *What is the mathematical formulation?* (Full KaTeX rendering with variable dictionary)
  8. *What is the benchmark industry example?* (Real-world corporate case)
  9. *What does the faculty emphasize?* (Professor-specific exam focus)
  10. *Where has it appeared in PYQs?* (Year, Marks, Question phrasing)
  11. *How should I structure the exam answer?* (High-scoring MBA answer blueprint)
  12. *What diagram should I draw in the exam hall?* (Clean, reproducible visual layout)

---

## 5. Papermorph-Inspired Interactive Book Engine

The Interactive Book is an engaging conceptual visualizer that complements the static exam notebook:

### The Visual Teaching Principle
> **"MAKE THE PICTURE EXPLAIN THE IDEA THROUGH CHANGE."**

Never use passive stock imagery. Visual components must transform dynamically across pedagogical beats:
- **Rearrange**: Transition nodes from decentralized to centralized logistics networks.
- **Split & Merge**: Illustrate multi-echelon inventory decoupling and cross-docking flows.
- **Balance**: Dynamically balance holding costs vs. ordering costs on an interactive EOQ canvas.
- **Simulate**: Expand safety stock uncertainty bands as lead-time standard deviation $\sigma_L$ increases.
- **Shift Risk**: Animate INCOTERMS 2020 cost and risk transfer points across multimodal transport stages.

### Chapter Anatomy (1600×900 Responsive Stage)
Each interactive chapter provides:
1. **Interactive Stage**: Scalable 16:9 visual viewport utilizing clean SVG vector graphics, CSS transforms, and DOM controls.
2. **Storyboard Beats**: Granular narrative steps where each beat synchronizes narration, visual node states, and highlighted parameters.
3. **Parameter Controls**: Sliders, step counters, and toggle switches allowing the student to experiment with variables (e.g., Demand $D$, Setup Cost $S$, Holding Cost $H$).
4. **Embedded Micro-Checks**:
   - Multiple-choice concept gates.
   - Click-to-reveal strategic decision challenges.
   - Interactive numerical verification calculations.
5. **Pedagogical Takeaway**: Summary card linking directly back to the relevant Master Notebook chapter.

---

## 6. Formula & KaTeX Standard

All mathematical expressions MUST be rendered using authentic LaTeX syntax processed by KaTeX:
- **Inline Math**: Wrapped in `$ ... $` (e.g., $EOQ = \sqrt{\frac{2DS}{H}}$).
- **Display Math**: Wrapped in `$$ ... $$`.
- **Variable Table**: Every formula must be followed by a structured definition table explaining each symbol, unit of measure, and economic interpretation.
- **Step-by-Step Arithmetic**: All numerical examples and PYQ solutions must illustrate every substitution step explicitly (never jumping directly from formula to answer).

---

## 7. Quality Assurance Checklist (`review.md`)

Before finalizing and publishing any project:
- [ ] **Syllabus Coverage**: All sessions and learning objectives from Tier 1 are present.
- [ ] **Zero Hallucination**: Every past-year question matches the physical examination scans in the repository.
- [ ] **Mathematical Integrity**: Formulas are verified against standard SCM literature (Chopra & Meindl, Bowersox).
- [ ] **Interactive Mechanics**: Sliders, stage transitions, and check questions respond without JavaScript console errors.
- [ ] **Asset Protection**: Raw examination PDFs and internal materials remain excluded from public deployment bundles via `.gitignore`.
- [ ] **Responsive & Print Fidelity**: Editorial layouts render cleanly across mobile (390px), tablet (768px), desktop (1440px), and print media styles.
- [ ] **Cloudflare Edge Deployment**: Static output is deployed and verified on Cloudflare Pages (`https://knowledge-du5.pages.dev`).

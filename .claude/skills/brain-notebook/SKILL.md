---
name: brain-notebook
description: Deterministic BRAIN Paper notebook generator. Preserves the proven FIN403/ERP HTML interaction model while adding deeper explanations, semantic infographics, diagrams, PYQs, quizzes and a complete appendix.
---

# Brain Notebook

## Purpose

Generate the canonical BRAIN notebook from a validated research package.

The existing FIN403/ERP HTML notebook is the compatibility baseline. Preserve its successful interaction and paper-notebook language rather than inventing a new style for every subject.

The generator improves the knowledge architecture and visual explanation quality.

## 1. Determinism contract

Same:
- validated research;
- metadata;
- source manifest;
- template version;
- design tokens;

must produce the same:
- section order;
- page order;
- component choices;
- figure numbering;
- asset naming;
- index labels;
- quiz order;
- PYQ order;
- appendix structure.

Do not randomly vary fonts, colours, card types, diagrams or layout.

Variation is allowed only through explicit content-driven rules.

## 2. Canonical visual language

Use the reference notebook's paper language:

- warm cream/off-white paper;
- subtle horizontal ruled lines;
- muted red notebook margin;
- spiral/punched-hole illusion;
- restrained paper texture;
- soft physical-paper shadow;
- editorial academic typography;
- restrained handwritten annotations;
- sticky notes, tape, stamps and highlights.

Do not use:
- cyberpunk;
- neon;
- glassmorphism;
- SaaS dashboards;
- childish scrapbook styling;
- excessive animation;
- decorative image walls.

Colour is semantic:
- primary ink;
- secondary ink;
- graphite;
- rule;
- margin;
- yellow/green/blue/pink highlights;
- warning red;
- success green;
- amber.

## 3. Canonical notebook order

Default structure:

~~~text
01 COVER
02 HOW TO USE / STUDY CONTROLS
03 INDEX / NOTEBOOK MAP

04 START / ORIENTATION
05 FOUNDATIONS
06 CORE CONCEPTS
07 FRAMEWORKS & MODELS
08 WORKED EXAMPLES
09 CASES & APPLICATIONS

10 PYQs
11 QUIZ & REVISION
12 QUICK REVISION

13 APPENDIX
   A. Source Register
   B. Citation Register
   C. Figure & Diagram Register
   D. PYQ Provenance
   E. Glossary
   F. Formula Register
   G. Change History
~~~

If a section genuinely has no content, it may be collapsed, but the canonical ordering remains.

## 4. Grouped index

The index must be visibly divided into groups:

- START
- FOUNDATIONS
- CORE CONCEPTS
- FRAMEWORKS & MODELS
- WORKED EXAMPLES
- CASES & APPLICATIONS
- PYQs
- QUIZ & REVISION
- APPENDIX

Every page uses machine-readable metadata:

~~~html
<section
  class="page"
  id="..."
  data-title="..."
  data-group="Core Concepts"
  data-count="yes"
  aria-label="..."
>
~~~

The sidebar is generated from this metadata.

## 5. Required top controls

Retain the reference notebook controls:

### Index/menu
Opens the grouped sidebar.

### Magnifying-glass search
Searches:
- headings;
- paragraphs;
- lists;
- tables;
- formulas;
- PYQs;
- quiz questions;
- glossary;
- appendix;
- figure captions.

Search remains local/static/offline.

### Focus mode
Expands the reading canvas and hides distractions.

### Light/dark mode
Toggle between the cream paper reading mode and a low-strain dark reading mode.

Dark mode is the same design system, not a separate theme.

### Print
Print/export the whole notebook.

### Progress
Display completion percentage and page completion state.

Persist preferences/progress locally in the browser.

## 6. Page interaction

Meaningful pages can contain:
- previous/next;
- mark complete;
- section label;
- page title;
- anchors;
- expandable explanations;
- worked examples;
- formula cards;
- self-checks;
- related concepts.

Interaction must support learning. Do not turn every paragraph into a widget.

## 7. Concept explanation grammar

For every major concept evaluate:

### A. Definition
Authoritative concise explanation.

### B. Intuition
Plain-language mental model.

### C. Why it matters
Strategic/operational/technical significance.

### D. How it works
Step-by-step mechanism.

### E. Anatomy
Components, actors, inputs and outputs.

### F. Visual explanation
Diagram or infographic.

### G. Example
Concrete scenario.

### H. Worked example
Numerical/procedural walkthrough when applicable.

### I. Application/case
Real-world context.

### J. Trade-offs/limitations
What should not be oversimplified.

### K. Common mistakes
Misconceptions and exam/interview traps.

### L. Recall check
Active-recall question.

### M. Answer pattern
How to communicate the concept clearly.

Not every concept requires every block, but every block must be considered.

## 8. Infographics and diagrams

Visual explanation is a core feature.

Prefer:
**SVG > HTML/CSS > raster**

SVG is preferred because it is deterministic, responsive, printable, accessible and lightweight.

Naming:

~~~text
fig-001-topic-slug.svg
fig-002-process-flow.svg
fig-003-framework.svg
~~~

Metadata:

~~~yaml
figure_id: FIG-001
title: "MRP Information Flow"
type: process-flow
concept: mrp
caption: "How demand information becomes planned orders."
source: "Derived from verified research package"
alt: "Flow from master schedule through BOM and inventory records to planned orders."
~~~

Selection rules:

| Content | Visual |
|---|---|
| Definition | annotated concept card |
| Process | flowchart |
| Architecture | layered diagram |
| Sequence | timeline |
| Comparison | matrix |
| Strategy | 2×2 |
| Decision | decision tree |
| Hierarchy | tree |
| Quantitative relationship | chart/curve |
| Formula | formula card + variable map |
| Supply chain | network/flow |
| System | architecture map |
| Case | before/after or operating model |
| Numerical problem | step diagram/table |
| Lifecycle | lifecycle diagram |

A visual must teach something; it must not be decorative filler.

## 9. Image generation policy

When a visual cannot be expressed accurately as SVG/CSS:

1. define its educational purpose;
2. define a stable prompt;
3. record prompt and asset metadata;
4. store it under the notebook asset directory;
5. provide alt text;
6. preserve provenance.

For technical concepts, use precise vector diagrams whenever possible.

## 10. PYQ section

PYQs appear near the end, immediately before Quiz & Revision.

Structure:

~~~text
PYQ Overview
→ Frequency / Recurrence Matrix
→ Year-wise Questions
→ Topic-wise Questions
→ Step-by-step Solutions
→ Answer Frameworks
→ Common PYQ Traps
~~~

Rules:
- exact source wording where available;
- year and marks always shown;
- zero fabricated historical questions;
- recurrence based only on verified PYQs;
- numerical solutions show meaningful steps;
- answer keys may be separate from full solutions;
- each PYQ links back to concept pages.

Use the established PYQ year-card/question-card language from the reference HTML.

## 11. Quiz section

Quiz follows PYQs.

Use:
- MCQ;
- true/false + explanation;
- classification;
- matching;
- numerical checks;
- scenarios;
- diagram interpretation;
- spot-the-mistake;
- short recall.

Metadata:

~~~yaml
question_id:
type:
difficulty:
topic:
question:
options:
answer:
explanation:
source_basis:
~~~

Answers should be revealable.

Quiz questions must test understanding rather than copying notebook sentences.

## 12. Quick revision section

Include, where appropriate:
- one-page concept map;
- key formulas;
- key frameworks;
- high-frequency traps;
- glossary blitz;
- 10–20 key takeaways;
- exam/real-world answer skeletons.

This is a compression layer, not a replacement for the notebook.

## 13. Appendix

The appendix is always the final section.

Include:

### A. Source Register
Every source used.

### B. Citation Register
Canonical citations.

### C. Figure & Diagram Register
Every visual, purpose and provenance.

### D. PYQ Provenance
Year/question/source mapping.

### E. Glossary
Important terms.

### F. Formula Register
Formula, variables, units and source.

### G. Change History
Version and meaningful changes.

The appendix is the notebook's audit trail.

## 14. Metadata

Use frontmatter similar to:

~~~yaml
---
id: erp-foundations
title: Enterprise Resource Planning
slug: enterprise-resource-planning
description: "..."
version: 1.0.0
templateVersion: brain-paper-1.0
status: published
updated: 2026-10-05
tags:
  - ERP
  - Operations

features:
  search: true
  focusMode: true
  darkMode: true
  progressTracking: true
  pyq: true
  quiz: true
  appendix: true
  diagrams: true
  infographics: true
  pdf: true
  interactiveBook: false
---
~~~

## 15. Shared component vocabulary

Use reusable components:

- Notebook
- NotebookCover
- NotebookPage
- NotebookIndex
- NotebookTab
- SectionHeader
- StickyNote
- Tape
- Stamp
- Highlight
- DefinitionCard
- ConceptCard
- FormulaCard
- ComparisonCard
- ProcessDiagram
- ArchitectureDiagram
- TimelineDiagram
- DecisionTree
- Infographic
- WorkedExample
- CaseCard
- PYQCard
- PYQYearCard
- QuizCard
- AnswerReveal
- RecallCard
- GlossaryCard
- SourceCard
- FigureCaption
- AppendixTable
- ProgressControl

Build the visual system once and reuse it.

## 16. Responsive and accessibility requirements

Test:
- 390px mobile;
- 768px tablet;
- 1024px laptop;
- 1440px desktop;
- print/PDF.

Require:
- keyboard navigation;
- visible focus;
- semantic headings;
- labelled controls;
- alt text;
- reduced-motion support;
- sufficient contrast;
- readable line length;
- no unintended horizontal overflow.

## 17. Print/PDF

Print must remove:
- navigation controls;
- search overlay;
- interactive-only chrome.

Print must preserve:
- headings;
- formulas;
- diagrams;
- tables;
- PYQs;
- quizzes;
- appendix;
- citations.

## 18. Deterministic build sequence

1. Validate research package.
2. Load metadata.
3. Load template/design version.
4. Build information architecture.
5. Build grouped index.
6. Build cover.
7. Build content sections.
8. Build diagrams.
9. Build infographics.
10. Build examples.
11. Build cases.
12. Build PYQs.
13. Build quiz.
14. Build quick revision.
15. Build appendix.
16. Build search index.
17. Build progress metadata.
18. Run accessibility QA.
19. Run content QA.
20. Run visual QA.
21. Generate PDF.
22. Hand off to interactive-book workflow if requested.

Never generate the final appendix before the source and figure inventory is complete.

## 19. QA gates

- [ ] reference interaction model works;
- [ ] grouped index works;
- [ ] search works;
- [ ] focus mode works;
- [ ] light/dark mode works;
- [ ] progress works;
- [ ] navigation works;
- [ ] diagrams render;
- [ ] diagrams have captions/alt text;
- [ ] explanations contain genuine conceptual depth;
- [ ] PYQs are source-verified;
- [ ] quiz answers work;
- [ ] appendix is complete;
- [ ] citations resolve;
- [ ] mobile layout works;
- [ ] print layout works;
- [ ] no console errors;
- [ ] no broken internal links.

Final status:

**NOTEBOOK READY**

or

**NOTEBOOK BLOCKED — [reason]**

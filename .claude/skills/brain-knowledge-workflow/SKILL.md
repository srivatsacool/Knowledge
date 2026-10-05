---
name: brain-knowledge-workflow
description: End-to-end BRAIN workflow orchestrating research, deterministic notebook generation, PDF, optional Papermorph interactive books, QA, registration and publication.
---

# Brain Knowledge Workflow

## Purpose

This is the top-level orchestrator for BRAIN.

It coordinates the other skills instead of duplicating their rules.

~~~text
RAW MATERIAL
    ↓
RESEARCH
    ↓
STRUCTURED KNOWLEDGE
    ↓
BRAIN PAPER NOTEBOOK
    ↓
PDF
    ↓
OPTIONAL INTERACTIVE BOOK / PAPERMORPH
    ↓
QA
    ↓
REGISTER
    ↓
PUBLISH
~~~

## 1. Canonical-source rule

Canonical knowledge is structured Markdown/MDX plus research/provenance files.

HTML and PDF are publication artifacts.

Interactive books are derivative artifacts.

Never allow a generated artifact to silently become the canonical source.

Never overwrite canonical research/content merely to satisfy a derivative format.

## 2. Supported input modes

### Topic only
Research from the web, build structured knowledge, generate notebook.

### Topic + files
Inspect supplied material first, then supplement and verify with web research.

### Existing notebook
Audit the notebook, preserve successful interaction patterns, extract content, and rebuild only when requested.

### Existing PDF → interactive book
Skip notebook creation when explicitly requested.

## 3. Intake

Create/update:

~~~text
PROJECT.md
CONTENT_MANIFEST.md
SOURCE_MANIFEST.md
~~~

Capture:
- title;
- slug;
- domain;
- subject;
- purpose;
- audience;
- sources;
- depth;
- PYQ availability;
- diagram requirements;
- quiz requirement;
- PDF requirement;
- interactive-book requirement.

Hash source files when possible.

## 4. Phase 1 — Research

Invoke **brain-research**.

Expected:

~~~text
research/
├── research-brief.md
├── topic-map.md
├── evidence.md
├── source-register.md
├── visual-plan.md
├── formula-register.md
├── pyq-map.md
├── glossary.md
└── research-review.md
~~~

Do not proceed through a critical research failure.

## 5. Phase 2 — Knowledge model

Convert research into structured content.

Each major concept should support:

~~~yaml
id:
title:
section:
definition:
intuition:
why_it_matters:
mechanism:
components:
visuals:
examples:
applications:
tradeoffs:
mistakes:
recall:
pyqs:
sources:
~~~

This is the bridge between evidence and presentation.

## 6. Phase 3 — Notebook

Invoke **brain-notebook**.

The canonical order is:

~~~text
Cover
How to Use
Grouped Index

Start
Foundations
Core Concepts
Frameworks & Models
Worked Examples
Cases & Applications

PYQs
Quiz & Revision
Quick Revision

Appendix
~~~

The reference FIN403/ERP notebook interaction model is the compatibility baseline:

- grouped sidebar;
- local search;
- focus mode;
- theme toggle;
- print;
- progress tracking;
- revealable answers;
- timers where useful;
- paper notebook styling;
- responsive behavior.

Do not remove these merely because the subject changes.

## 7. Phase 4 — Visual explanation pass

Perform a dedicated visual pass.

For every major concept ask:

> Would a diagram make this easier to understand?

If yes, create one.

Priority:

1. deterministic SVG;
2. HTML/CSS infographic;
3. generated visual only when necessary.

Target:
- processes;
- architectures;
- frameworks;
- comparisons;
- timelines;
- formulas;
- decisions;
- numerical mechanics;
- cases.

Avoid decorative image dumping.

## 8. Phase 5 — PYQ intelligence

When PYQs exist:

1. verify against source;
2. classify by topic;
3. calculate recurrence;
4. identify recurring concepts;
5. map to notebook sections;
6. generate full solutions;
7. generate answer structures;
8. generate common traps;
9. build PYQ section;
10. link questions back to concepts.

Never manufacture PYQs.

If there are no PYQs, do not invent a historical section.

## 9. Phase 6 — Quiz

Generate quizzes only from verified notebook content.

Default balance:
- 30% foundational;
- 40% application;
- 20% analytical;
- 10% challenge.

Adjust for subject requirements.

Every answer includes an explanation.

## 10. Phase 7 — Appendix

Build the appendix last:

~~~text
Appendix
├── Source Register
├── Citation Register
├── Figure Register
├── PYQ Provenance
├── Glossary
├── Formula Register
└── Change History
~~~

Cross-check:
- every factual source used is listed;
- every figure has provenance;
- every PYQ has provenance;
- every formula has a source/derivation basis;
- no unused source is falsely presented as evidence.

## 11. Phase 8 — PDF

Generate print-quality PDF from the canonical notebook.

Preserve:
- diagrams;
- formulas;
- tables;
- headings;
- sources.

Remove interactive chrome.

Verify:
- page breaks;
- no clipping;
- readable figures;
- correct formulas;
- complete appendix.

PDF is not the source of truth.

## 12. Phase 9 — Optional interactive book

Only create this when requested or explicitly enabled.

Flow:

~~~text
Canonical Notebook
        ↓
PDF / structured content
        ↓
Papermorph
        ↓
Interactive Book
~~~

Store separately:

~~~text
subject/
├── notebooks/
│   └── topic.mdx
├── pdf/
│   └── topic.pdf
└── interactive/
    └── topic/
~~~

Never replace the notebook with the interactive book.

## 13. Papermorph rules

When enabled:

1. inspect the installed/current Papermorph workflow;
2. verify accepted input;
3. create a derivative input;
4. generate the book;
5. validate scenes/stages;
6. verify responsive behavior;
7. verify navigation;
8. verify controls;
9. record Papermorph/version metadata;
10. register the artifact.

Interactive books should emphasize:
- progressive visual explanation;
- animation;
- parameter manipulation;
- micro-checks;
- concept simulation.

Do not merely turn notebook pages into slides.

## 14. Registration

Update the subject/project manifest:

~~~yaml
notebook:
  path: notebooks/topic.mdx
  status: published
  version: 1.0.0

pdf:
  path: pdf/topic.pdf
  available: true

interactive:
  available: true
  path: interactive/topic/
  engine: papermorph

features:
  diagrams: true
  infographics: true
  pyq: true
  quiz: true
  appendix: true
~~~

Astro should consume this metadata rather than hardcoding individual projects.

## 15. QA pipeline

### Content QA
- source coverage;
- factual accuracy;
- terminology;
- formulas;
- PYQ authenticity;
- solution correctness;
- explanation depth.

### Structural QA
- section order;
- metadata;
- internal anchors;
- grouped index;
- search index.

### Visual QA
Check:
- desktop;
- mobile;
- dark mode;
- focus mode;
- diagrams;
- tables;
- formulas;
- notebook paper;
- sidebar;
- print.

### Accessibility QA
Check:
- headings;
- labels;
- focus states;
- keyboard use;
- alt text;
- contrast;
- reduced motion.

### Technical QA
Check:
- zero console errors;
- zero broken links;
- no missing assets;
- no failed scripts;
- no unnecessary oversized assets;
- no private source files in public bundle.

## 16. Release gate

Publish only when:

~~~text
RESEARCH VERIFIED
        AND
NOTEBOOK VERIFIED
        AND
PDF VERIFIED
        AND
OPTIONAL INTERACTIVE VERIFIED
        AND
SOURCE APPENDIX VERIFIED
        AND
ACCESSIBILITY VERIFIED
        AND
BUILD VERIFIED
~~~

Otherwise:

**BLOCKED — [specific failing gate]**

Never claim deployment without verification.

## 17. Publishing

When publication is requested:

1. build Astro;
2. run static QA;
3. verify routes;
4. verify notebook/PDF/interactive links;
5. commit;
6. push GitHub;
7. deploy Cloudflare Pages;
8. verify public URL;
9. update release/change history.

Never expose private research material or source PDFs unless explicitly intended for publication.

## 18. Failure recovery

Research failure:
- preserve partial evidence;
- mark blocked areas;
- never fabricate.

Notebook failure:
- preserve research;
- repair generator;
- regenerate.

Diagram failure:
- replace with deterministic SVG/HTML;
- do not remove the underlying explanation.

PDF failure:
- repair print CSS;
- do not distort canonical content.

Papermorph failure:
- notebook/PDF remain valid;
- interactive status becomes unavailable;
- retry independently.

Deployment failure:
- preserve build;
- report exact failure;
- do not claim publication.

## 19. Final release report

Produce:

~~~text
QA/release-report.md
~~~

It must state:
- research completed;
- sources used;
- notebook generated;
- diagram/infographic count;
- verified PYQ count;
- quiz count;
- PDF status;
- interactive status;
- QA status;
- publication URL.

Final state:

**BRAIN KNOWLEDGE ARTIFACT READY**

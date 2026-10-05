---
name: brain-interactive-book
description: Guidelines and authoring procedures for building Papermorph-inspired 1600x900 interactive visual chapters and canonical MDX notebooks for the Brain Knowledge Library.
---

# Brain Interactive Book & Canonical Notebook Skill

Use this skill when authoring or upgrading notebooks and interactive simulators in the Brain Knowledge Library.

## 1. Domain & Subject Placement
* Always check `domains/` first.
* Place canonical MDX notebooks under `domains/<domain>/<subject>/notebooks/<slug>.mdx`.
* Ensure every notebook follows the 12-point anatomy:
  1. Frontmatter with version, updated, tags, reading time.
  2. Notebook info & scope with a philosophical StickyNote.
  3. ASCII or text Learning Map.
  4. Core Concepts with clear definitions.
  5. Architecture / Structural deep dive with ComparisonCard.
  6. Execution mechanics & workflows.
  7. Mathematical models with KaTeX FormulaCard components.
  8. Step-by-step worked numerical problem with explicit arithmetic trace.
  9. Mini-case study analyzing business impact.
  10. Past examination questions with model answers.
  11. Flashcards and Quiz components.
  12. RelatedKnowledge graph cross-links.

## 2. Interactive Simulator Architecture
* Aspect Ratio: 16:9 responsive vector stage (1600×900).
* Sliders: Provide range inputs with immediate SVG recalculation.
* Theme: Support both warm off-white paper and dark slate modes.

## 3. Strict Absolute Constraints
* NEVER mention prohibited institutional names (`WeSchool`, `Welingkar`, `B-school`, `business school`).
* NEVER commit broken LaTeX math braces `{}` in raw markdown outside code backticks or FormulaCard attributes.
* Always run `node Website/scripts/scan-forbidden.js` and `npm run build` to verify integrity.

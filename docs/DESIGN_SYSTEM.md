# Brain Paper Design System Specification

## 1. Design Philosophy

The **Brain Paper Design System** replicates the tactile, cognitive, and aesthetic qualities of a physical academic notebook resting upon a scholar's study desk. It avoids generic SaaS dashboard tropes and high-tech gradients in favor of warm, editorial typography, subtle rulings, authentic marginalia, and physical stationery metaphors.

---

## 2. Color Palette & Material Tokens

The palette is anchored in warm off-white paper and natural pigment inks:

| Token | CSS Variable | Light Hex | Dark Hex | Role |
| :--- | :--- | :--- | :--- | :--- |
| **Desk** | `--desk` | `#FAF7F0` | `#0C0A09` | Surrounding desk workspace blotter |
| **Paper** | `--paper` | `#FCF8EE` | `#171412` | Main notebook page background |
| **Card** | `--card` | `#FFFDF7` | `#1C1917` | Inset component cards and dialogs |
| **Ink** | `--ink` | `#1D3C8C` | `#93C5FD` | Primary display headings and emphasis |
| **Ink Secondary** | `--ink2` | `#2F5FC4` | `#60A5FA` | Secondary accents and navigation links |
| **Pencil** | `--pencil` | `#5A5D66` | `#A8A29E` | Secondary body text and marginal notes |
| **Rule Line** | `--rule` | `#D6E3EF` | `#292524` | Horizontal notebook notebook lines |
| **Margin Line** | `--margin` | `#E28B8B` | `#7F1D1D` | Vertical notebook margin demarcation |
| **Chisel Yellow** | `--hy` | `rgba(255,224,61,0.7)` | `rgba(255,224,61,0.3)` | Highlighter mark for core terms |
| **Chisel Green** | `--hg` | `rgba(120,228,156,0.6)`| `rgba(120,228,156,0.25)` | Highlighter mark for verified proofs |

---

## 3. Typography Hierarchy

1. **Display & Headings**: `Libre Baskerville` / `Libre Bodoni` serif font for intellectual authority and editorial elegance.
2. **Body**: `Public Sans` / `Source Sans 3` for high-legibility continuous academic reading.
3. **Monospace & Code**: `JetBrains Mono` for code blocks, mathematical variables, and metadata tags.
4. **Marginalia & Notes**: `Caveat` and `Patrick Hand` for authentic handwritten annotations and post-it remarks.

---

## 4. Paper Component Library (`Website/src/components/paper/`)

1. **`Notebook.astro` & `NotebookSheet`**:
   The primary page canvas with subtle horizontal rules, left margin line, and top tab flag.
2. **`StickyNote.astro`**:
   Realistic square memo pad in 4 paper colors (`yellow`, `pink`, `blue`, `green`) with washi-tape header anchor.
3. **`Stamp.astro`**:
   Rotated rubber stamp impression (`VERIFIED`, `EXAM CRITICAL`, `HISTORICAL`, `DATA QUALITY LAW`) in red, green, amber, and blue.
4. **`FormulaCard.astro`**:
   KaTeX display equation box with detailed variable tables, units, boundary conditions, and arithmetic traces.
5. **`QuestionCard.astro`**:
   Solved examination question container with question type, marks allocation, and collapsible model solution disclosure.
6. **`ComparisonCard.astro`**:
   Architectural comparison container supporting both multi-dimensional comparison tables and side-by-side card views.
7. **`Flashcard.astro`**:
   Interactive flip-card for active recall and self-testing.
8. **`Quiz.astro`**:
   Client-side conceptual evaluation component with instant scoring and explanation feedback.
9. **`RelatedKnowledge.astro`**:
   Knowledge graph connection card linking to upstream foundations and downstream execution notebooks.

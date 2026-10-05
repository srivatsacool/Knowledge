# Brain Canonical Notebook Specification (12-Point Standard)

Every canonical study notebook authored in MDX must conform to the 12-point pedagogical structure to ensure consistency, depth, and examination readiness.

---

## The 12-Point Notebook Anatomy

1. **Frontmatter & Scope**:
   * YAML header declaring title, slug, domain, subject, course, academic lead, version, updated date, and tags.
2. **01 — Notebook Information & Scope**:
   * High-impact `<StickyNote>` capturing the philosophical or strategic thesis of the subject.
   * Explicit metadata defining domain, subject, and reference models.
3. **02 — Learning Map**:
   * Monospace or ASCII flow diagram showing information propagation, dependency ordering, and feedback loops.
4. **03 — Core Concepts & Theoretical Foundations**:
   * Precise academic definitions distinguishing concepts (e.g. Dependent vs Independent demand).
   * Core axioms and foundational literature citations.
5. **04 — Architecture / Structural Deep Dive**:
   * Multi-level breakdowns, BOM structures, 3-tier topologies, or driver taxonomies.
   * `<ComparisonCard>` highlighting architectural trade-offs.
6. **05 — Execution Mechanics & Workflow**:
   * Sequential transaction cycles (e.g., P2P 3-way match, O2C document flow, MRP explosion logic).
7. **06 — Mathematical Models & KaTeX Proofs**:
   * Complete derivations utilizing `<FormulaCard>` components.
   * Explicit variable tables with symbols, descriptions, and units of measurement.
8. **07 — Step-by-Step Numerical Walkthrough**:
   * Comprehensive worked problem with numbered calculation trace and tabular results.
9. **08 — Real-World Industry Case Study**:
   * Concrete corporate mini-case (e.g., Subway, Zara, Titan Industrial, FoxMeyer) analyzing business context, failure modes, and operational turnaround.
10. **09 — Past Examination Questions & Model Solutions**:
    * Verbatim questions categorized by marks and type (theory vs numerical).
    * Collapsible `<QuestionCard>` with high-scoring model answers and step-by-step arithmetic.
11. **10 — Active Recall Flashcards & Conceptual Quiz**:
    * Interactive `<Flashcard>` components testing critical definitions.
    * Interactive `<Quiz>` with instant scoring and detailed explanation feedback.
12. **11/12 — Knowledge Graph & Cross-References**:
    * `<RelatedKnowledge>` card mapping upstream foundational notebooks and downstream execution topics.

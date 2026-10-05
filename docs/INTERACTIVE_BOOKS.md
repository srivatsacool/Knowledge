# Papermorph-Inspired Interactive Book Specification

## 1. Overview

Brain incorporates interactive visual books as an **optional supplementary experience** to the canonical MDX notebooks. Inspired by the architectural principles of `DozenTwelve/Papermorph`, interactive books turn static conceptual diagrams into live, client-side parametric models.

---

## 2. Production Pipeline

```text
Source Curriculum / Scanned Exams
        ↓
Structured Topic Plan (15-Session Syllabus)
        ↓
Storyboard & Visual Script (1600×900 Vector Canvas)
        ↓
Narration & Step-by-Step Logic
        ↓
Interactive Client-Side Model (Live Parametric Sliders)
        ↓
Knowledge Evaluation (Concept Checks & Quizzes)
```

---

## 3. Implementation Patterns

* **Aspect Ratio**: Standardized 16:9 responsive viewport (1600×900 base canvas).
* **Interactivity**: Pure lightweight vanilla JavaScript or reactive islands with zero heavy webgl dependencies.
* **Sliders & Controls**:
  * Users can dynamically adjust parameters (e.g., annual demand $D$, ordering cost $S$, holding cost $H$) and watch the total cost curve, EOQ point, and order cycle recalculate instantaneously in SVG space.
* **Responsive Downscaling**: Scales smoothly on mobile devices via CSS container queries and viewBox preservation.

# Brain Knowledge Hub — Notebook Template 2.0 Component Library
## "Paper Edition" Standardized Component Catalog (38 Modules)

> **Document Status**: Complete HTML5 & CSS Component Catalog for Digital Academic Binders  
> **Aesthetic Foundation**: Physical Paper, Ruled Lines, Washi Tape, Sticky Notes, Rubber Stamps, Handwritten Headings  
> **Target Scope**: Universal Reusable Components for Brain Knowledge Hub  
> **Status**: Architectural Specification

---

## 1. Component Architecture & Paper-First Principles

Every component in Template 2.0 must conform to four paper-first mandates:
1. **Physical Artifact Metaphor**: Components are not generic CSS `div` boxes. They are physical index tabs, pinned study cards, washi-taped dossiers, Canary-yellow post-its, rubber-stamped exam badges, or hand-drawn sketches.
2. **Typography Hierarchy**:
   - Component titles & callouts: Handwritten script (`Caveat` / `Patrick Hand`).
   - Component explanatory body: Clean academic sans-serif (`Source Sans 3` / `Inter`).
   - Formulas & variables: Mathematical serif (`STIX Two Text`).
3. **Zero External Dependencies**: Pure semantic HTML5 (`<article>`, `<aside>`, `<figure>`, `<details>`) styled using `:root` CSS custom properties.
4. **Deterministic Visual Imperfection**: Micro-rotations (`±0.5°` to `±2°`) applied deterministically without `Math.random()`.

---

## 2. Shell & Notebook Binding Components

### 2.1 NotebookCover (`.nb-cover`)
- **Purpose**: Physical front cover of the MBA study binder.
- **Visuals**: Ruled paper texture, rubber stamps (`[ MASTER NOTEBOOK ]`, `[ EXAM READY ]`), handwritten title, student study motto in quotes.

```html
<header class="nb-cover">
  <div class="nb-cover__brand">BRAIN HUB · NOTEBOOK OS</div>
  <div class="nb-cover__stamps">
    <span class="nb-stamp nb-stamp--blue">Master Notebook</span>
    <span class="nb-stamp nb-stamp--green">Exam Ready</span>
    <span class="nb-stamp nb-stamp--amber">Case Frameworks</span>
  </div>
  <h1 class="nb-cover__title">ERP BUSINESS APPLICATIONS</h1>
  <div class="nb-cover__meta">MBA Core Curriculum · Operations & Information Systems</div>
  <div class="nb-cover__motto">"Everything I need to master before the final examination."</div>
</header>
```

---

### 2.2 NotebookHeader (`.nb-topbar`)
- **Purpose**: Fixed top navigation styled as a slim academic header with desk contrast, handwritten brand, and progress meter.

```html
<nav class="nb-topbar" aria-label="Binder Navigation">
  <div class="nb-topbar__inner">
    <button class="nb-topbar__menu" id="menuBtn" aria-label="Open Notebook Index">☰ Index</button>
    <a href="../index.html" class="nb-topbar__brand">📖 Brain Hub</a>
    <div class="nb-topbar__crumb">Operations / <strong>ERP Business Applications</strong></div>
    <div class="nb-topbar__pct" id="pct">25% Done</div>
  </div>
  <div class="nb-topbar__bar"><i id="barfill" style="width: 25%;"></i></div>
</nav>
```

---

### 2.3 NotebookIndex / Sidebar (`.nb-index-sidebar`)
- **Purpose**: Physical notebook index with tab flags, handwritten section labels, and student study checkmarks (`□` → `✓`).

```html
<aside class="nb-index-sidebar" id="sidebar">
  <div class="nb-index-sidebar__head">
    <h2>INDEX</h2>
    <span class="nb-index-sidebar__counter">4 / 16 Mastered</span>
  </div>
  <nav class="nb-index-sidebar__nav">
    <div class="nb-index-sidebar__grp">MODULE 1 · STRATEGY</div>
    <a href="#sec-1" class="nb-index-sidebar__link is-done">
      <span class="nb-index-sidebar__ck">✓</span>
      <span class="nb-index-sidebar__label">01 ERP as Business Strategy</span>
    </a>
    <a href="#sec-2" class="nb-index-sidebar__link is-active">
      <span class="nb-index-sidebar__ck"></span>
      <span class="nb-index-sidebar__label">02 Three-Tier Architecture</span>
    </a>
  </nav>
</aside>
```

---

### 2.4 PageTabFlag (`.nb-tabflag`)
- **Purpose**: Physical colored divider tabs sticking out of the right paper edge, acting as bookmarks.

```html
<div class="nb-tabflag" role="navigation" aria-label="Section Tab">ARCH-02</div>
```

---

## 3. Core Pedagogical & Conceptual Components

### 3.1 LearningObjectives (`.nb-objectives`)
- **Purpose**: Target academic competencies framed in Bloom's Taxonomy, styled as an index card with tape.

```html
<div class="nb-card nb-objectives">
  <div class="nb-tape nb-tape--center"></div>
  <div class="nb-card__eyebrow">Academic Syllabus Alignment</div>
  <h3 class="nb-card__title">Learning Objectives & Course Outcomes</h3>
  <ul class="nb-objectives__list">
    <li><span class="nb-stamp nb-stamp--blue">CO1</span> <strong>Analyze</strong> ERP as an interlocking business and technology strategy.</li>
    <li><span class="nb-stamp nb-stamp--green">CO2</span> <strong>Evaluate</strong> 3-tier client-server architecture against throughput trade-offs.</li>
  </ul>
</div>
```

---

### 3.2 KeyConcept (`.nb-key-concept`)
- **Purpose**: Foundational theoretical principle framed with a hand-drawn margin bracket and handwritten title.

```html
<article class="nb-key-concept">
  <div class="nb-key-concept__num">Concept #04</div>
  <h3 class="nb-key-concept__title nb-hand-underline">George Plossl's First Law of Flow</h3>
  <p>All manufacturing and operational improvements are directly proportional to the rate of <strong>information and material flow</strong> through the enterprise.</p>
  <div class="nb-key-concept__annotation">
    ✏️ <em>Student Note: Plossl argued that lead time control is the single root driver of operational success.</em>
  </div>
</article>
```

---

### 3.3 Definition (`.nb-definition`)
- **Purpose**: Formal definition of technical terms with dictionary-style term, acronym, and business context.

```html
<div class="nb-definition">
  <div class="nb-definition__header">
    <dt class="nb-definition__term">Business Process Re-engineering</dt>
    <span class="nb-stamp nb-stamp--amber">BPR</span>
  </div>
  <dd class="nb-definition__body">
    The radical redesign of core business processes to achieve dramatic improvements in productivity, cycle times, and quality.
  </dd>
</div>
```

---

### 3.4 Highlighter (`.nb-hl`)
- **Purpose**: Translucent highlighter strokes across key phrases.

```html
<span class="nb-hl nb-hl--yellow">Centralized Single Data Repository</span>
<span class="nb-hl nb-hl--green">72% Reduction in Month-End Financial Closing Time</span>
<span class="nb-hl nb-hl--pink">Severe Scope Creep & Custom Code Bloat</span>
<span class="nb-hl nb-hl--blue">SAP Material Type: ROH (Raw Materials)</span>
```

---

## 4. Physical Annotations & Sticky Notes

### 4.1 StickyNote (`.nb-sticky`)
- **Purpose**: Physical paper post-it notes in yellow, blue, green, and coral with washi tape toppers and realistic shadows.

```html
<!-- Canary Yellow Note -->
<aside class="nb-sticky nb-sticky--yellow">
  <h4 class="nb-sticky__title">💡 MBA Core Takeaway</h4>
  <p>Never customize an ERP to match a legacy process. Re-engineer the process to match the ERP vanilla standard.</p>
</aside>

<!-- Coral Pink Note with Pushpin -->
<aside class="nb-sticky nb-sticky--pink nb-sticky--pin">
  <h4 class="nb-sticky__title">🚨 Exam Trap Clarified!</h4>
  <p>ERP does not automatically reduce payroll headcount upon go-live; it redeploys transactional clerks into analytical roles.</p>
</aside>
```

---

### 4.2 MBATakeaway (`.nb-sticky--green`)
- **Purpose**: Standard executive takeaway summarizing managerial decisions, trade-offs, and monitorable KPIs.

```html
<aside class="nb-sticky nb-sticky--green">
  <h4 class="nb-sticky__title">📊 The Executive Decision Matrix</h4>
  <p><strong>Decide:</strong> Standardize on multi-tenant SaaS for commodity HR/Payroll; keep customized on-prem for proprietary auto manufacturing lines.</p>
</aside>
```

---

### 4.3 CommonMistake (`.nb-mistake`)
- **Purpose**: Student error comparison card contrasting wrong assumptions with the authoritative academic position.

```html
<div class="nb-card nb-mistake">
  <div class="nb-tape"></div>
  <h4 class="nb-card__title">❌ Common Exam Mistake</h4>
  <div class="nb-mistake__grid">
    <div class="nb-mistake__wrong">
      <strong>Wrong Student Answer:</strong> "MRP calculates schedules based on real-time machine capacity."
    </div>
    <div class="nb-mistake__right">
      <strong>Correct Master Answer:</strong> "MRP assumes infinite plant capacity. Capacity Requirements Planning (CRP) must validate it."
    </div>
  </div>
</div>
```

---

### 4.4 MemoryTrick / Mnemonic (`.nb-mnemonic`)
- **Purpose**: Cognitive association anchor to aid rapid exam recall.

```html
<div class="nb-mnemonic">
  <span class="nb-stamp nb-stamp--amber">Mnemonic Anchor</span>
  <h4 class="nb-mnemonic__title">Remembering the 5 Pillars: <strong>"P-C-B-R-S"</strong></h4>
  <p class="nb-mnemonic__phrase"><em>"<strong>P</strong>roven <strong>C</strong>orporate <strong>B</strong>uildings <strong>R</strong>equire <strong>S</strong>tructure"</em></p>
  <ul>
    <li><strong>P</strong>rocess Integration · <strong>C</strong>entralized DB · <strong>B</strong>est Practices · <strong>R</strong>eal-Time · <strong>S</strong>calable Architecture</li>
  </ul>
</div>
```

---

## 5. Quantitative & Analytical Components

### 5.1 FormulaBox (`.nb-fbox`)
- **Purpose**: Mathematical formulation framed with drop-shadow highlighter edges and STIX Two Math typography.

```html
<div class="nb-fbox">
  <span class="nb-fbox__label">Economic Order Quantity (EOQ) Formulation</span>
  <div class="nb-fbox__math">EOQ = √ [ (2 · D · S) / H ]</div>
  <dl class="nb-fbox__dict">
    <dt>D</dt><dd>Annual Demand (units)</dd>
    <dt>S</dt><dd>Order Setup Cost ($/order)</dd>
    <dt>H</dt><dd>Annual Holding Cost ($/unit/year)</dd>
  </dl>
</div>
```

---

### 5.2 WorkedExample (`.nb-worked-example`)
- **Purpose**: Step-by-step numeric calculation with numbered badges and student working lines.

```html
<div class="nb-card nb-worked-example">
  <div class="nb-tape nb-tape--right"></div>
  <h4 class="nb-card__title">Step-by-Step Calculation: Bicycle Model A Reorder Point</h4>
  <ol class="nb-method">
    <li><strong>Step 1:</strong> Calculate Lead Time Demand: <code>d × L = 200 × 9 = 1,800 units</code></li>
    <li><strong>Step 2:</strong> Compute Safety Stock at 95% service: <code>SS = 1.65 × 75 = 124 units</code></li>
    <li><strong>Step 3:</strong> Final Reorder Point: <code>ROP = 1,800 + 124 = 1,924 units</code></li>
  </ol>
</div>
```

---

## 6. Business, Strategy & Case Components

### 6.1 CaseStudy (`.nb-case-dossier`)
- **Purpose**: Physical case study dossier card taped to the sheet.

```html
<article class="nb-card nb-case-dossier">
  <div class="nb-tape"></div>
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--green">HBP Case Dossier</span>
    <span class="nb-stamp nb-stamp--blue">Subway Franchise Systems</span>
  </div>
  <h3 class="nb-card__title">Multi-Level Franchise Hierarchy vs Monolithic ERP</h3>
  <p><strong>Context:</strong> Tens of thousands of decentralized restaurants managed regionally by Development Agents (DAs).</p>
  <p><strong>The Dilemma:</strong> Will forcing a rigid corporate ERP cause business failure among independent franchisees?</p>
  <div class="nb-case-dossier__resolution">
    <strong>Resolution:</strong> Deploying store-level cloud POS systems that feed central financial ERP via standardized API bridges.
  </div>
</article>
```

---

### 6.2 ComparisonTable (`.nb-table`)
- **Purpose**: Academic comparison grid with striped ruled lines and handwritten headers.

```html
<div class="nb-table-wrap">
  <table class="nb-table">
    <thead>
      <tr>
        <th>Evaluation Criteria</th>
        <th>SAP S/4HANA</th>
        <th>Oracle Cloud ERP</th>
        <th>Microsoft Dynamics 365</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Target Enterprise Tier</strong></td>
        <td>Tier 1 Multinationals ($1B+)</td>
        <td>Tier 1 & Upper Tier 2</td>
        <td>Mid-Market ($50M–$500M)</td>
      </tr>
      <tr>
        <td><strong>Implementation Risk</strong></td>
        <td><span class="nb-stamp nb-stamp--red">High (18–36 Mo)</span></td>
        <td><span class="nb-stamp nb-stamp--amber">Medium (12–24 Mo)</span></td>
        <td><span class="nb-stamp nb-stamp--green">Moderate (6–14 Mo)</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 7. Exam Preparation & Study Superpowers

### 7.1 ExamAnswer (`.nb-exam-answer`)
- **Purpose**: Model student exam answer card with mark allocation rubric and high-score exam tips.

```html
<article class="nb-card nb-exam-answer">
  <div class="nb-tape nb-tape--right"></div>
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--red">FAQ #01</span>
    <span class="nb-stamp nb-stamp--amber">10 Marks Standard</span>
    <span class="nb-stamp nb-stamp--blue">⏱ 12 Minutes</span>
  </div>
  <h3 class="nb-card__title">"Explain ERP as both a technology strategy and business strategy."</h3>
  <div class="nb-exam-answer__rubric">
    <strong>Marking Rubric:</strong> Tech Strategy (3M) + Business Strategy (3M) + Interlocking Mechanism (4M).
  </div>
  <div class="nb-exam-answer__body">
    <p><strong>1. Technology Strategy (3M):</strong> Unified database, elimination of legacy silos, standardized 3-tier computing protocols.</p>
    <p><strong>2. Business Strategy (3M):</strong> BPR process alignment, real-time executive visibility, corporate benchmark compliance.</p>
    <p><strong>3. Interlocking Mechanism (4M):</strong> Technology provides transaction horsepower; strategy dictates decision logic.</p>
  </div>
</article>
```

---

### 7.2 Quiz (`.nb-quiz`)
- **Purpose**: Active recall self-assessment with revealable explanation and instant score tracking.

```html
<div class="nb-card nb-quiz" data-qid="q1">
  <h4 class="nb-card__title">Q1: Which SAP Item Type denotes raw materials purchased for manufacturing?</h4>
  <div class="nb-quiz__options">
    <button class="nb-quiz__btn" data-correct="false">A. FERT</button>
    <button class="nb-quiz__btn" data-correct="true">B. ROH</button>
    <button class="nb-quiz__btn" data-correct="false">C. HALB</button>
  </div>
  <details class="nb-quiz__exp">
    <summary>View Official Marking Logic</summary>
    <p><strong>Correct: B (ROH).</strong> FERT is finished goods; HALB is semi-finished assemblies.</p>
  </details>
</div>
```

---

### 7.3 Flashcard (`.nb-flashcard`)
- **Purpose**: Physical 3D flip study card for acronyms and terms.

```html
<div class="nb-flashcard" tabindex="0">
  <div class="nb-flashcard__inner">
    <div class="nb-flashcard__front">
      <span class="nb-stamp nb-stamp--blue">Acronym Check</span>
      <h3>BOM</h3>
      <p class="nb-pencil">Click to flip card</p>
    </div>
    <div class="nb-flashcard__back">
      <h4>Bill of Materials</h4>
      <p>Hierarchical list of all raw materials, sub-assemblies, and components required to build a finished product.</p>
    </div>
  </div>
</div>
```

---

### 7.4 RevisionChecklist (`.nb-checklist`)
- **Purpose**: Exam readiness audit checklist synced to `localStorage`.

```html
<div class="nb-card nb-checklist">
  <h3 class="nb-card__title">High-Yield Exam Readiness Audit</h3>
  <ul class="nb-checklist__list">
    <li><label><input type="checkbox" data-chk="item-1"> <span>Can draw and label all 3 tiers of Client-Server architecture from memory.</span></label></li>
    <li><label><input type="checkbox" data-chk="item-2"> <span>Can explain Plossl's First Law of Flow and lead time control.</span></label></li>
  </ul>
</div>
```

---

### 7.5 SourceCard (`.nb-source-card`)
- **Purpose**: Provenance citation card grounding notebook facts in uploaded source files.

```html
<aside class="nb-card nb-source-card">
  <div class="nb-stamps"><span class="nb-stamp nb-stamp--green">Ground Truth Provenance</span></div>
  <dl>
    <dt>Primary Document:</dt><dd><code>ERP FAQs_updated.docx</code> (Parsed via AnyDoc sub-5ms Rust parser)</dd>
    <dt>Syllabus Reference:</dt><dd><code>COURSE_OUTLINE_PDF2026-09-30_20_37_31(1).pdf</code> (CO1–CO3)</dd>
  </dl>
</aside>
```

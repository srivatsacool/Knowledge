# GM 410: Integrative Manager for Analytics — Comprehensive Walkthrough

> **Document Status**: Complete Implementation Walkthrough & Feature Guide  
> **Course**: GM 410 — Integrative Manager for Analytics (PGDM Research & Business Analytics, Welingkar Institute / WeSchool)  
> **Master File**: [`Management/GM410_Strategy_and_Analytics_Notebook_2.0.html`](file:///D:/Brain/05_Knowledge/Management/GM410_Strategy_and_Analytics_Notebook_2.0.html)  
> **Metadata**: [`Management/GM410_Strategy_and_Analytics_Notebook_2.0.meta.json`](file:///D:/Brain/05_Knowledge/Management/GM410_Strategy_and_Analytics_Notebook_2.0.meta.json)  
> **Published Route**: `Website/dist/management/gm410-strategy-and-analytics-notebook-2/index.html`

---

## 1. Visual & Pedagogical Tour

The **GM 410 Notebook 2.0** brings an authoritative academic library aesthetic to master MBA study. It bridges high-level strategic management, data engineering, statistical modeling, governance, and university examination excellence.

### Key Visual Highlights
1. **The Single-Line Ruled Paper Canvas**:
   - Features warm cream/off-white paper (`#fcf8ee` light mode, `#18202e` dark mode) with a subtle grain texture and left margin rule (`#e28b8b` at 58px).
   - Horizontal ruled lines are mathematically locked beneath each text baseline (`line-height: 32px`).
   - The lines terminate cleanly at the end of each content section—no endless lines spilling into empty space.
   - Text descenders (`g`, `j`, `p`, `q`, `y`) enjoy 15px of clearance above the line, preventing any clipping.
   - A dedicated **📏 Ruling Toggle** in the top navigation bar allows students to disable the decorative ruling at any time for clean reading.

2. **Opaque Knowledge Component Shielding (Two-Layer Model)**:
   - Framework cards, comparison tables, mathematical formula boxes, case dossiers, and model answers sit on **opaque Layer-2 cards** (`#fffdf7` / `#1d2636`).
   - Ruled lines never cut across diagrams, tables, or quizzes.

3. **High-Contrast Academic Color Accents**:
   - Oxford Navy (`#1d3c8c`), Scholarly Forest Green (`#1d7a45`), and Academic Burgundy (`#8b1e2f`) provide authoritative visual hierarchy without cyberpunk neon or corporate dashboard clutter.

---

## 2. Interactive Study Capabilities Tour

- **Instant Keyword Search Modal (`/` or `Ctrl+K`)**:
  - Press `/` from anywhere on the page to open the live search modal.
  - Searches through all 10 modules, framework titles, case dossiers, and past examination questions with instant yellow `<mark>` highlighting.
- **15-Minute / 45-Minute Exam Countdown Timer**:
  - Located in the top bar. Features presets for practicing 6-mark questions (15 minutes) or 30-mark compulsory case studies (45 minutes) with start, pause, reset, and audible alerts.
- **Interactive PYQ Bank & Answer Reveals**:
  - Filter past-paper questions dynamically by Year (2025, 2024, 2023) and Marks (5M, 6M, 7M, 8M, 10M, 30M).
  - Practice answering questions with answers collapsed; click to reveal step-by-step model scaffolds, marking checklists, and common pitfalls.
- **Active Recall Flashcard Deck**:
  - Flip cards to review core frameworks (Graham Kenny 3 Steps, Value Innovation, Altman Z vs Beneish M, NVIDIA Moat).
- **Distraction-Free Focus Mode**:
  - Collapse all navigation chrome with one click for sustained deep reading.
- **Theme Persistence**:
  - Seamless toggle between light library paper and dark midnight slate surfaces, persisted across sessions in `localStorage`.

---

## 3. Modular Curriculum Walkthrough

```
[Module 0] Course Orientation & 5-Stage MBA Answer Scaffold
    ├── Integrative Triad: Strategy + Analytics + Governance
    ├── Master 5-Stage Scaffold: Definition → Framework → Evidence → Evaluation → Conclusion
    └── Complete Topic-to-PYQ Index (2023–2025)

[Module 1] Strategic Intent & Goal Architecture
    ├── Strategic Hierarchy: Vision, Mission, Values, Aims, Goals, Objectives, Strategy
    ├── SMART Objectives Formulation with industrial examples
    ├── Graham Kenny (HBR 2023) 3-Step Stakeholder Goal Setting Model
    ├── Mintzberg's 5 Ps of Strategy & Deliberate vs Emergent Strategy
    └── Michael Porter (HBR 1996): Operational Effectiveness vs Strategic Positioning

[Module 2] External Analysis & Competitive Environment
    ├── Porter's Five Forces Model (Full structural economics & SVG diagram)
    ├── PESTEL Environmental Scanning
    ├── Worked Exam Application: Wearable fitness device & tariff shocks (2025 PYQ 1f)
    └── Worked Exam Application: Electric Two-Wheeler opportunity scan (2024 PYQ 1g)

[Module 3] Internal Capabilities, Strategic Positioning & Implementation
    ├── Porter's Generic Strategies (Cost leadership, differentiation, focus & stuck-in-the-middle SVG)
    ├── Resource-Based View (RBV) & Jay Barney's VRIO Decision Hierarchy
    ├── Added Value & Willingness-to-Pay (WTP) vs Cost Wedge (Ghemawat & Rivkin)
    ├── TOWS Strategic Formulation Matrix (SO, WO, ST, WT)
    ├── McKinsey 7S Organizational Alignment Model (Hard Ss vs Soft Ss)
    └── Roger Martin's Integrative Thinking Doctrine (Salience, Causality, Sequencing, Resolution)

[Module 4] Corporate Portfolio Management & SBU Dynamics
    ├── BCG Growth-Share Matrix (Stars, Cash Cows, Question Marks, Dogs SVG)
    ├── Relative Market Share (log scale) & Experience Curve economics
    ├── GE-McKinsey 9-Box Matrix (Industry Attractiveness vs Unit Strength decision rules)
    └── Pioneer–Migrator–Settler (PMS) Map (Blue Ocean portfolio balance)

[Module 5] Blue Ocean Strategy & Value Innovation
    ├── Red Oceans vs Blue Oceans comparison
    ├── Value Innovation dynamic: Breaking the Value-Cost trade-off
    ├── Reaching the Three Tiers of Noncustomers
    ├── Divergent Strategy Canvas SVG (Incumbent vs NVIDIA value curves)
    ├── ERRC Four Actions Grid (Eliminate, Reduce, Raise, Create)
    └── Three Strategy Propositions (Value, Profit, People) & Alignment Moats

[Module 6] Technology for Business Strategy & Applied Analytics
    ├── Customer Data as a Strategic Asset (Netflix & Starbucks personalisation)
    ├── Big Data and the 5 Vs (Volume, Velocity, Variety, Veracity, Value)
    ├── Analytics Maturity Staircase SVG (Descriptive → Diagnostic → Predictive → Prescriptive)
    ├── Predictive Maintenance Case (Resolving the Oilfield asset 2025 PYQ 1b dilemma)
    ├── Traditional Programming vs Machine Learning paradigm inversion
    ├── 8-Stage Machine Learning Lifecycle Pipeline
    ├── Nimbus Bank Classroom Master Case (Evaluating 3 capital proposals under Rs 22 Cr budget)
    └── A/B Testing & Fisher's 3 Principles of Design of Experiments (Randomisation, Replication, Blocking)

[Module 7] Sustainability, Ethics, ESG & Financial Forensics
    ├── Business Ethics as enterprise risk mitigation (2024 PYQ 1a)
    ├── Triple Bottom Line (TBL) Profit, People, Planet Venn diagram SVG (2024 PYQ 1b)
    ├── Archie Carroll's CSR Pyramid SVG (Economic, Legal, Ethical, Philanthropic; 2023 PYQ 2)
    ├── Dunphy, Griffiths & Benn Phase Model (3 waves, 6 steps; 2023 PYQ 5)
    ├── Financial Forensics: Altman Z-Score solvency model (Z < 1.81 distress zone)
    ├── Financial Forensics: Beneish M-Score manipulation detection (M > -1.78 manipulation zone)
    └── Combined forensic analysis workflow for investors and lenders

[Module 8] Master Integrated Case Study Library
    ├── Case A: NVIDIA — Can It Sustain Its Blue Ocean? (INSEAD Case IN2027)
    │   ├── Case Timeline 1993–2025: Gaming GPUs to AI Supercomputing
    │   ├── Architectural Physics: The "Embarrassingly Parallel" matrix multiplication problem
    │   ├── The Software Moat: CUDA & the 5M+ developer ecosystem
    │   ├── Strategic Vulnerabilities: Hyperscaler in-house silicon, DeepSeek inference shifts, TSMC fabless risk
    │   └── Complete INSEAD Teaching Note Poll Question Analysis (ALL 15 Polls Q1–Q15 with Answer Keys & Pedagogy)
    ├── Case B: Microsoft and the Big Data Era (2025 Compulsory Case, 30 Marks)
    │   ├── 2(a) [10M]: Strategic positioning post-mobile defeat (Azure cloud fabric & Office 365 SaaS)
    │   ├── 2(b) [10M]: Kinect sensor and multimodal behavioral telemetry feeding HoloLens & Azure AI
    │   └── 2(c) [10M]: Leveraging enterprise installed base to package Big Data into Power BI & Excel
    ├── Case C: Amazon and Big Data (2024 Compulsory Case, 30 Marks)
    │   ├── 2(a) [10M]: Big data across Retail, Prime, and AWS; global data sovereignty scaling challenges
    │   ├── 2(b) [5M]: Amazon Go 'Just Walk Out' computer vision and physical retail transformation
    │   ├── 2(c) [8M]: Predictive logistics & Anticipatory Shipping patent; supply chain risks
    │   └── 2(d) [7M]: Amazon E-Commerce vs AWS Cloud comparative SWOT and margin disparity
    └── Case D: The Coca-Cola Company: Sustainability, CSR & TBL (2023 Compulsory Case, 60 Marks)
        ├── 1(a) [5M]: Traditional single bottom line vs TBL move
        ├── 1(b) [5M]: Technology enablement for water replenishment and recycling metrics
        ├── 2 [10M]: Carroll's CSR Pyramid evaluation across Coke Global & Coke India
        ├── 3 [10M]: ESG-sensitive investor evaluation: Water neutrality claims vs groundwater controversies
        ├── 4 [10M]: Indian beverage industry competitive benchmarking (PepsiCo, Parle Agro, Dabur, Tata Consumer)
        └── 5 [10M]: Dunphy Corporate Sustainability Phase Model evaluation (Wave 1 to Wave 3)

[Module 9] University Examination Question Bank (2023–2025)
    ├── Multi-dimensional filter engine (Year & Marks)
    ├── Complete 2025 End Term Question Bank (Q1a–g + Q2 Case)
    ├── Complete 2024 End Term Question Bank (Q1a–g + Q2 Case)
    ├── Complete 2023 End Term Question Bank (Q1–Q5 Compulsory Case)
    ├── Step-by-step answer scaffolds, rubrics, word count targets, and examiner pitfalls
    └── 12-Card Active Recall Flashcard Deck
```

---

## 4. Verification & Publishing Confirmation

The notebook has been fully validated:
- Built and published via `node Website/scripts/build.js` in 1701ms.
- 100% internal links verified with zero broken references.
- All 23 past paper questions and all 15 NVIDIA poll questions present and verified.
- Seamlessly accessible at `Website/dist/management/gm410-strategy-and-analytics-notebook-2/index.html`.

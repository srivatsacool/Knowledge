/**
 * Brain Knowledge Hub — Authentic Previous-Year Questions (PYQ) Dataset
 * Source of Truth: WeSchool (Welingkar Institute of Management Development & Research)
 * Program: PGDM / BD / RBA — Trimester IV
 * Course: OPN 419 ERP Business Applications
 * Faculty / Paper Setter: Dr. Rahul V. Altekar (Director Digital Supply Chain Solutions, SAP)
 *
 * Papers Transcribed from Authentic Examination Sheets:
 * - 2025: Date 11-10-2025 (Course Code OPN 419, Batch 2024-2026, 30 Marks, 1.15 Hrs)
 * - 2024: Date 09-10-2024 (Course Code OPN 419, Batch 2023-2025, 30 Marks, 1.15 Hrs)
 * - 2023: Date 11-10-2023 (Batch 2022-2024, 30 Marks, 1.15 Hrs)
 *
 * ZERO FABRICATION: Original questions, wording, marks, bloom levels and COs are 100% authentic.
 */

const erpPyqPapers = [
  {
    id: "pyq-2025",
    year: 2025,
    date: "11-10-2025",
    time: "08:30am to 09:45am",
    duration: "1.15 Hrs (75 Minutes)",
    program: "PGDM / BD / RBA",
    trimester: "Trimester IV",
    batch: "2024–2026",
    courseCode: "OPN 419",
    courseName: "ERP Business Applications",
    maxMarks: 30,
    instructions: [
      "1) Q. 1 is compulsory.",
      "2) Solve any ONE question from the rest of the Questions."
    ],
    bloomKey: "BL: 1 Remembering; 2- Understanding; 3- Applying; 4- Analysing; 5 - Evaluating; 6 - Creating",
    questions: [
      {
        qNum: "Q1",
        marks: 20,
        isCompulsory: true,
        bl: 3,
        blLabel: "Applying",
        cos: "CO1 (8m), CO2 (6m), CO3 (6m)",
        text: "Ms. Vijaya Loki, newly appointed CDO of LPU Ltd, a renowned Chemical company in India, has an immediate charter of ERP implementation for growth support. Vijaya being a seasoned Technical Architect, is thinking ERP as a technology intervention and not quite clear on how it can lead to address organizational operations focusing on growth management. Develop a report on ERP Strategy including goals and implementation method to help her.",
        syllabusLink: "Module 1 & 7 · ERP Fundamentals, Business Strategy vs IT Intervention, Implementation Methodology",
        suggestedTime: "40 mins",
        suggestedLength: "650–850 words + 2 Architecture/Flow Diagrams",
        rubric: [
          "Executive Framing (3m): Clear distinction between ERP as IT tool vs enterprise-wide business operating model.",
          "Value Matrix & Growth Transition (5m): Evolution from production/cost control to customer responsiveness and scalable growth.",
          "Strategic ERP Goals (4m): 5 Cs framework (Complete, Connected, Cognitive, Compliant, Capable) tailored to chemical process manufacturing.",
          "Implementation Methodology & Approach (5m): Evaluation of Big Bang vs Franchising (Phased rollout by business unit/plant) with risk mitigation.",
          "Panćānga Governance (3m): Balancing Client (Industry), User (Culture), Brand (Best practice), Consultant (BPR), and Methodology (Value)."
        ],
        modelAnswerFramework: `
#### 1. Executive Summary & Problem Diagnosis
* **The Core Dilemma**: Ms. Vijaya Loki views ERP as an IT architecture intervention (servers, databases, interfaces). In chemical manufacturing, treating ERP merely as IT causes fatal disconnects: batch processing formulas remain decoupled from financial ledgers, regulatory compliance remains manual, and capacity scaling stalls.
* **The Strategic Reframe**: ERP is **not an IT strategy; it is the operating backbone of corporate growth strategy**. As Dr. Altekar defines, ERP is *"the finest expression of the inseparability of info-tech and business"* and a planning philosophy that binds marketing, manufacturing, supply chain, and financials into a single real-time truth.

#### 2. Strategic Shift via Value Matrix Analysis
* **Historical Position**: Chemical commodity production historically competed on **HCP (High Capability to Produce)** in the 1970s and **Lowest Cost** in the 1980s.
* **Current Growth Imperative**: To support aggressive expansion, LPU Ltd must compete on **Agile Delivery (D)**, **Product Quality (Q)**, and **Regulatory Compliance**. 
* **One-System Imperative**: Transitioning from a *Connected* system (where data is shared but decisions are fragmented) to an *Integrated/Synchronized* system where the ERP automatically enforces batch traceability, hazardous material SOPs, and dynamic inventory re-planning.

#### 3. Strategic ERP Goals for LPU Ltd (The 5 Cs Framework)
1. **Complete**: Full horizontal integration across chemical batch manufacturing, recipe/formula management, quality inspection, logistics, and P&L accounting.
2. **Connected**: Internal integration across plants + external connectivity with raw chemical suppliers and downstream industrial distributors.
3. **Cognitive**: Automated anomaly and pattern detection—preventing equipment downtime, monitoring yield loss, and predicting chemical shelf-life expiration.
4. **Compliant**: Mandatory regulatory enforcement (Good Manufacturing Practices / GMP, pollution control board norms, chemical safety data sheets / MSDS, statutory GST/e-way bills).
5. **Capable**: High-volume, millisecond transactional capability handling fluctuating raw material pricing and multi-plant bulk dispatches without system latency.

#### 4. Implementation Approach: Why Franchising / Phased Trumps Big Bang
* **Big Bang Rejection**: Chemical continuous/batch processing carries high operational risk. A Big Bang launch risks plant shutdown, hazardous mishandling, and catastrophic dispatch failure.
* **Recommended Franchising Strategy**:
  1. *Pilot Phase*: Implement core Finance, Procurement, and Batch Inventory in the flagship manufacturing plant.
  2. *Scale Phase*: Roll out formula management and shop-floor scheduling once master data (Item Master, Signal Codes, Recipes) stabilizes.
  3. *Rollout Phase*: Replicate the standardized template across secondary chemical blending units and regional depots.

#### 5. Implementation Governance: Altekar's ERP Panćānga (The 5 Elements)
* **The Client (Industry Focus)**: Deep chemical domain adaptation (potency variations, hazardous goods handling, excise/environmental rules).
* **The User (Culture Focus)**: Shift shop-floor chemical operators from paper logbooks to digital barcode terminals; intensive change management.
* **The ERP Brand (Best Practice)**: Select an ERP engine with proven process-industry capabilities (e.g., SAP S/4HANA Process Manufacturing or Oracle Chemical).
* **The Consultant (BPR Focus)**: Standardize fragmented plant operating procedures to packaged ERP best practices rather than over-customizing code.
* **The Methodology (Value Focus)**: Track value realization milestones (inventory turn improvement, batch cycle time reduction, compliance audit speed).`
      },
      {
        qNum: "Q2",
        marks: 10,
        isCompulsory: false,
        bl: 3,
        blLabel: "Applying",
        cos: "CO4 (5m), CO6 (5m)",
        text: "How ERP adds value in an ATO & MTO scenario businesses?",
        syllabusLink: "Module 4 & 6 · Five Pillars, Customer Order Decoupling Point (CODP), ATO vs MTO Operations",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + CODP Decoupling Point Diagram",
        rubric: [
          "CODP Positioning (3m): Accurate identification of decoupling points for Assemble-to-Order (SFG) and Make-to-Order (RM/Components).",
          "ERP Value in ATO (3m): Modular BOMs, ATP/CTP calculations, lead-time compression, component forecast aggregation.",
          "ERP Value in MTO (3m): Dynamic shop floor routing, capacity booking (RCCP), engineering data integration (EDM), project costing.",
          "Plossl Synthesis (1m): How ERP eliminates inventory cushions and controls lead time as an active variable."
        ],
        modelAnswerFramework: `
#### 1. Conceptual Foundation & CODP Positioning
* In manufacturing strategy, the **Customer Order Decoupling Point (CODP)** represents the boundary separating forecast-driven push operations from customer-order-driven pull execution.
* **Assemble-to-Order (ATO)**: CODP sits at **Semi-Finished Goods (SFG)** or sub-assembly level. Sub-assemblies are planned and stocked based on forecast, while final product assembly occurs upon receipt of a confirmed customer order.
* **Make-to-Order (MTO)**: CODP sits upstream at the **Raw Materials (RM)** or primary component stage. Manufacturing operations (fabrication, machining, assembly) are triggered strictly by confirmed customer demand.

#### 2. How ERP Delivers Value in ATO Environments
1. **Modular Bill of Materials (BOM) & Configurator**: ERP maintains super-BOMs with configurable options. When a sales order arrives, the configurator instantly generates a valid production order without engineering delay.
2. **Available-to-Promise (ATP) & Capable-to-Promise (CTP)**: The ERP checks current sub-assembly stocks and finite assembly capacity in real time, committing firm delivery dates to customers.
3. **Inventory Minimization at Finished Goods**: Aligns with Plossl's principle—prevents stocking expensive finished products while pooling safety stocks at the cheaper, versatile sub-assembly tier.
4. **Lead-Time Compression**: Reduces customer response time from weeks to hours by executing only the final assembly post-order.

#### 3. How ERP Delivers Value in MTO Environments
1. **Dynamic Routing & Capacity Requirements Planning (CRP)**: MTO orders often have unique routing sequences. ERP dynamically allocates machine work centers, avoiding bottleneck overload.
2. **Closed-Loop Engineering Data Management (EDM)**: Direct bidirectional integration between CAD/PLM systems and the ERP Item Master ensures custom engineering revisions immediately propagate to procurement and shop floor.
3. **Precise Job Costing & Profitability Tracking**: Captures exact direct labor hours, machine overheads, and consumed raw materials against specific sales order lines, preventing margin slippage.
4. **Pegging & Raw Material Reservation**: Tags specific raw material purchase orders to the originating customer contract, ensuring dedicated tracking and zero theft or cannibalization.

#### 4. Comparative Synthesis Matrix
| Dimension | Assemble-to-Order (ATO) | Make-to-Order (MTO) | ERP Mechanism |
| :--- | :--- | :--- | :--- |
| **Decoupling Point** | Semi-Finished Goods (SFG) | Raw Materials (RM) / Parts | CODP Buffer Management |
| **Driver Before CODP** | Forecast / Aggregated S&OP | Safety Stock of Raw Materials | Closed-loop MRP II |
| **Driver After CODP** | Confirmed Customer Sales Order | Confirmed Customer Engineering Specs | Real-time Sales-to-Shop Floor pegging |
| **Primary ERP Value** | Real-time CTP commit & Variant BOM | Dynamic routing & Job Cost Accounting | ATP logic + Shop Floor Control |`
      },
      {
        qNum: "Q3",
        marks: 10,
        isCompulsory: false,
        bl: 4,
        blLabel: "Analysing",
        cos: "CO3 (5m), CO5 (5m)",
        text: "Comment on - BPR & ERP Chicken & egg paradox. What is to be done first? Why?",
        syllabusLink: "Module 9 · Business Process Re-engineering (BPR), ERP Selection & Implementation Fit",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + BPR-ERP Loop Diagram",
        rubric: [
          "Paradox Articulation (3m): Why BPR first advocates argue existing processes are flawed, while ERP first advocates cite standard vendor best practices.",
          "Failure Modes Analysis (3m): Customizing ERP to fit legacy broken processes (the 'paving the cow path' trap) vs blind package adoption causing cultural rejection.",
          "Resolution Strategy (3m): The modern dual-track / concurrent synthesis approach (High-level process streamlining -> Package selection -> Fit-Gap -> Targeted BPR).",
          "Managerial Recommendation (1m): Firm justification on 'What to do first and why' grounded in competitive differentiation."
        ],
        modelAnswerFramework: `
#### 1. Articulating the Chicken & Egg Paradox
* **The Dilemma**: 
  - *Option A (BPR First)*: You cannot implement ERP without first re-engineering your business processes; otherwise, you simply automate existing inefficiencies ("automating a mess creates an automated mess").
  - *Option B (ERP First)*: You cannot re-engineer processes in an abstract vacuum without knowing the technological capabilities and embedded best practices of the target ERP software.
* **The Tension**: If BPR is completed before selecting an ERP, the company may design idealized custom workflows that no commercial off-the-shelf (COTS) ERP software supports—leading to massive, costly customizations that destroy upgradability.

#### 2. Analyzing the Historical Failure Modes
1. **The 'Pave the Cow Paths' Trap (No BPR / Pure IT Automation)**:
   - Organization buys ERP and forces the software through thousands of custom code modifications to mirror legacy siloed forms.
   - *Result*: Skyrocketing implementation costs, upgrade lock-in, and failure to realize any business process optimization.
2. **The 'Ivory Tower Redesign' Trap (BPR in Total Isolation)**:
   - Organization hires consultants who map 200 idealized workflow diagrams over two years.
   - *Result*: The selected ERP package cannot execute the custom models without 80% custom ABAP/code rewrites, rendering the BPR blueprint obsolete.

#### 3. What is to be Done First? The Authoritative Resolution
**Recommendation: A Structured Concurrent / Dual-Track Strategy (High-Level Process Simplification -> Package-Driven Alignment):**

1. **Step 1: First, Conduct High-Level Process Rationalization (Pre-ERP BPR)**:
   - Eliminate redundant approvals, remove duplicate data entry, and establish a process-oriented organizational structure.
   - Clearly delineate **Core Competitive Competencies** (where the business possesses a unique competitive advantage) from **Commodity Non-Differentiating Processes** (e.g., Accounts Payable, General Ledger, Standard Procurement).
2. **Step 2: Second, Adopt Packaged ERP Best Practices for Commodity Processes**:
   - For 80% of standard operations, conform organizational processes to the ERP software's built-in industry workflows (Vanilla Implementation). Hammer & Champy's radical redesign is already pre-coded inside tier-1 ERP engines.
3. **Step 3: Third, Perform Targeted BPR Only for True Differentiators**:
   - For unique value propositions (e.g., proprietary chemical blending or bespoke customer delivery algorithms), engineer tailored workflows and integrate via clean APIs/extensions.

#### 4. Conclusion & Key Takeaway
BPR and ERP must be viewed not as sequential adversaries, but as **symbiotic partners**. The organization must first clean and simplify its process architecture, select the ERP whose best-practice reference models match its industry, and then let the software serve as the change agent to drive final process discipline.`
      },
      {
        qNum: "Q4",
        marks: 10,
        isCompulsory: false,
        bl: 3,
        blLabel: "Applying",
        cos: "CO5 (5m), CO6 (5m)",
        text: "Explain SNOP and ABC Concepts of ERP with examples.",
        syllabusLink: "Module 6 · Global Best Practices in ERP (Sales & Operations Planning, ABC Inventory Governance)",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + SNOP Closed-Loop & ABC Matrix Tables",
        rubric: [
          "SNOP Conceptual Rigor (4m): Cross-functional alignment (Sales, Ops, Finance), unconstrained demand vs capacity constraint reconciliation, closed-loop monthly cycle.",
          "ABC Inventory Analysis (4m): Pareto 80/20 rule, annual consumption value classification, differentiated inventory control policies (A, B, C items).",
          "Concrete Real-World Examples (2m): Practical enterprise application in manufacturing/supply chain ecosystems."
        ],
        modelAnswerFramework: `
#### 1. Sales & Operations Planning (S&OP / SNOP) in ERP
* **Definition**: S&OP is an executive cross-functional decision-making process that balances customer demand with manufacturing and supply chain capacity, harmonizing operational schedules with the corporate financial plan.
* **The ERP Closed-Loop Mechanism**:
  1. *Unconstrained Demand Consensus*: Sales & Marketing input unconstrained forecasts based on market pipeline and promotion data.
  2. *Capacity & Supply Feasibility*: ERP Rough-Cut Capacity Planning (RCCP) checks machine work center hours, labor shifts, and critical supplier constraints against the forecast.
  3. *Reconciliation & Trade-Off Analysis*: Where demand exceeds capacity, ERP simulates trade-offs (overtime, subcontracting, inventory pre-build, or delivery prioritization).
  4. *Executive Sign-Off & Execution*: The approved S&OP plan locks the Master Production Schedule (MPS) and directly feeds the Material Requirements Planning (MRP) engine.
* **Real-World Example**: A consumer electronics manufacturer uses ERP S&OP ahead of Diwali. Sales forecasts 200,000 smartphone units; ERP capacity analysis reveals manufacturing capacity of only 150,000 units. The S&OP committee reconciles by pre-building 50,000 units in August–September, smoothing production without stockouts.

#### 2. ABC Inventory Classification in ERP
* **Definition**: An inventory categorisation technique based on **Pareto's 80/20 Law**, segmenting inventory items based on their annual consumption value (Unit Cost × Annual Demand Volume).
* **The Three Tiers**:
  - **Category A (High Value, Tight Control)**: ~10–15% of total SKU count, accounting for ~70–80% of total inventory expenditure.
  - **Category B (Moderate Value, Standard Control)**: ~20–25% of total SKU count, representing ~15–20% of inventory spend.
  - **Category C (Low Value, Loose Control)**: ~60–70% of total SKU count, but representing only ~5–10% of total expenditure.
* **ERP Operational Policies**:
  | Parameter | Class A Items | Class B Items | Class C Items |
  | :--- | :--- | :--- | :--- |
  | **Control Level** | Strict, real-time tracking | Moderate, periodic | Automated, bulk reorders |
  | **Safety Stock** | Minimal buffer (JIT/lean) | Moderate buffer | Generous buffer (prevents stockouts) |
  | **Cycle Counting** | Daily / Weekly perpetual audit | Monthly audit | Quarterly / Annual physical count |
  | **Procurement** | Long-term contracts, frequent delivery | Standard purchase orders | Two-bin system / Blanket POs |
* **Real-World Example**: In an automobile assembly plant:
  - *Class A*: Engines, lithium-ion battery packs, transmission gearboxes (tracked individually by serial number; zero excess inventory).
  - *Class B*: Headlamps, brake pads, alloy wheels (reordered on bi-weekly lot-sizing).
  - *Class C*: Fasteners, bolts, washers, clips (managed via automated ERP two-bin reorder points; stockouts prevented cheaply).`
      }
    ]
  },
  {
    id: "pyq-2024",
    year: 2024,
    date: "09-10-2024",
    duration: "1.15 Hrs (75 Minutes)",
    program: "PGDM / BD / RBA",
    trimester: "Trimester IV",
    batch: "2023–2025",
    courseCode: "OPN 419",
    courseName: "ERP Business Applications",
    maxMarks: 30,
    instructions: [
      "1) Q. 1 is compulsory.",
      "2) Solve any ONE question from the rest of the Questions."
    ],
    bloomKey: "BL: 1 Remembering; 2- Understanding; 3- Applying; 4- Analysing; 5 - Evaluating; 6 - Creating",
    questions: [
      {
        qNum: "Q1",
        marks: 20,
        isCompulsory: true,
        text: "Ms. Aishwarya, CIO of Prabha Automobiles adopting ERP as customer-centric business strategy. Develop an ERP Strategy report including goals and implementation method to help her.",
        syllabusLink: "Module 1, 4 & 7 · ERP Strategy, Customer-Centricity, Automobile Industry, Implementation Methods",
        suggestedTime: "40 mins",
        suggestedLength: "650–850 words + Strategic Frameworks",
        rubric: [
          "Strategic Context & Paradigm Shift (5m): Shifting automotive manufacturing from internal mass production (Ford FPS) to customer-centric pull (Toyota TPS / Dell DPS).",
          "Customer-Centric Goals (5m): End-to-end dealer integration, vehicle configurator, Available-to-Promise (ATP), after-sales service and telemetry.",
          "Implementation Approach Evaluation (5m): Phased/Franchised approach vs Big Bang; managing multi-plant and dealer network complexities.",
          "Governance & Change Management (5m): Panćānga execution (Client, User, Brand, Consultant, Methodology) and mitigating dealer cultural resistance."
        ],
        modelAnswerFramework: `
#### 1. Strategic Context & Automotive Transformation
* **The Challenge**: Prabha Automobiles historically operated as a traditional product-push manufacturer. Dealer networks suffered from the bullwhip effect: excess inventory of slow-moving variants alongside stockouts of popular trims.
* **The Strategic Shift**: Ms. Aishwarya must lead the transition from an internal manufacturing-centric view to a **Customer-Centric Business Strategy**. In Dr. Altekar's Value Matrix, this represents migrating from the 1980s Cost Reduction focus to 2000s **Agility and Customer Service (D)**.

#### 2. Strategic Goals for Customer-Centric ERP
1. **Synchronized Dealer-to-Plant Pipeline**: Direct integration between dealer management systems (DMS) and the factory Master Production Schedule (MPS), eliminating intermediate communication delays.
2. **Dynamic Vehicle Configurator with Real-Time ATP**: Allow buyers to customize trims, colors, and accessories online or at showrooms with instantaneous confirmation of exact production and delivery dates.
3. **Just-In-Sequence (JIS) Supplier Connectivity**: Transmit real-time assembly line sequencing data to Tier-1 automotive suppliers, ensuring parts arrive at the assembly line in the exact build order.
4. **Lifecycle Customer 360 & After-Sales Service**: Link the vehicle VIN to warranty tracking, predictive service maintenance schedules, and spare parts availability across service bays.

#### 3. Implementation Approach: The Phased Franchising Model
* **Why Big Bang is Fatal for Automotive**: A synchronized automobile plant operates on tight takt times. A Big Bang cutover across assembly, stamping, engine shop, and 500 dealerships invites catastrophic assembly line shutdowns.
* **Recommended Franchising Method**:
  - *Phase 1 (Core Backbone)*: Deploy Financials, Central Procurement, and Centralized Master Data (Vehicle & Part Masters).
  - *Phase 2 (Manufacturing & Supply Chain)*: Implement MRP II, Shop Floor Control, and Tier-1 EDI/API integration in the primary plant.
  - *Phase 3 (Front-Office & Distribution)*: Roll out Dealer Management, ATP configurator, and Spare Parts Distribution network by geographic zone.

#### 4. Executing Altekar's ERP Panćānga
* **The Client (Industry Focus)**: Ensure deep automotive compliance (Automotive Industry Action Group standards, VIN tracking, warranty claim governance).
* **The User (Culture Focus)**: Train dealer sales agents and shop-floor supervisors; overcome resistance from staff accustomed to informal offline workarounds.
* **The ERP Brand (Best Practice)**: Deploy industry-standard automotive solution (e.g., SAP S/4HANA for Automotive with embedded Just-In-Time/Sequence modules).
* **The Consultant (BPR Focus)**: Mandate standard order-to-delivery processes rather than customizing the ERP to legacy dealership ordering habits.
* **The Methodology (Value Focus)**: Set clear performance measurement gates (dealer order fulfillment cycle time, finished vehicle inventory days, warranty claim resolution speed).`
      },
      {
        qNum: "Q2",
        marks: 10,
        isCompulsory: false,
        text: "Discuss the Manufacturing module of ERP. What is Phantom Item?",
        syllabusLink: "Module 5 · Core ERP Modules (Manufacturing, Capacity Planning, Item Control, Phantom BOM)",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + Phantom Explosion Diagram",
        rubric: [
          "Manufacturing Module Architecture (4m): Detailed explanation of Capacity Planning (RCCP, CRP), Item Control, BOM, Routing, and Shop Floor Control.",
          "Phantom Item Concept (4m): Exact definition as a non-stocked, transient sub-assembly blown through during MRP explosion.",
          "Business Justification & Example (2m): Why phantom items are used (simplifies inventory tracking, modular engineering changes) with clear practical example."
        ],
        modelAnswerFramework: `
#### 1. Architecture of the ERP Manufacturing Module
The Manufacturing Module is the operational engine of ERP, structured into three integrated sub-systems:
1. **Master Data Backbone**:
   - *Bill of Materials (BOM)*: Hierarchical list of raw materials, parts, and sub-assemblies needed to construct the finished good.
   - *Routing & Work Centers*: Sequence of manufacturing operations, labor setup times, machine run times, and tooling requirements.
2. **Capacity Planning Engine**:
   - *Rough-Cut Capacity Planning (RCCP)*: High-level check verifying whether critical work centers have the capacity to satisfy the Master Production Schedule (MPS).
   - *Capacity Requirements Planning (CRP)*: Detailed shop-floor load analysis evaluating machine and labor hour loads across every work center for every work order.
3. **Item Control & Shop Floor Execution**:
   - Tracks work order releases, material dispatch slips, WIP movement across operations, scrap tracking, and completion confirmations.

#### 2. What is a Phantom Item?
* **Definition**: A **Phantom Item** (also known as a *transient item*, *blow-through item*, or *pseudo-assembly*) is a sub-assembly in a Bill of Materials that is **physically built during production but is never stocked in the warehouse or inventoried as finished stock**.
* **ERP System Behavior during MRP Explosion**:
  - When the MRP engine runs, it **blows straight through** the phantom item.
  - The ERP generates **zero inventory stock balance** and **zero separate purchase or production orders** for the phantom itself.
  - Instead, the gross requirements of the phantom's parent are passed directly down to the phantom's child components.

#### 3. Why Use Phantom Items? (Business Benefits & Example)
* **Practical Example: Automobile Gearbox Sub-Assembly**:
  - In a car assembly plant, a transmission casing and its internal gear cluster are assembled together on a sub-bench and immediately bolted onto the vehicle chassis on the main line within 10 minutes.
  - It is never routed to a warehouse, never packed in boxes, and never issued a separate goods-receipt note.
* **Key Benefits**:
  1. *Eliminates Unnecessary Inventory Transactions*: Prevents phantom sub-assemblies from bloating the inventory ledger with artificial receipts and issues.
  2. *Engineering Modularity*: Allows product design engineers to group related components together in CAD/PLM without forcing operations to track phantom inventory.`
      },
      {
        qNum: "Q3",
        marks: 10,
        isCompulsory: false,
        text: "Discuss the conceptual model and architectural aspects of ERP with examples.",
        syllabusLink: "Module 3 & 4 · 3-Tier Architecture, Repository, Logic Server, RDBMS, Five Pillars Conceptual Model",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + 3-Tier & 5 Pillars SVG Diagrams",
        rubric: [
          "Conceptual Model / Five Pillars (4m): Process-based Flat Org, ATO/MTO, Empowered Employees, Customer/Supplier Integration, Sophisticated IT.",
          "Architectural Framework (4m): Detailed description of 3-Tier Client-Server (Presentation, Application Logic, Database), Repository, DB Drivers, and OS.",
          "Comparison & Concrete Examples (2m): Why 3-tier scales better than 2-tier architecture with real enterprise examples."
        ],
        modelAnswerFramework: `
#### 1. Conceptual Model: Dr. Altekar's Five Pillars of ERP
The conceptual model of ERP rests upon five structural pillars:
1. **Process-based Flat Organization**: Dismantles rigid functional silos (sales, purchasing, finance), replacing them with integrated horizontal business processes (Order-to-Cash, Procure-to-Pay).
2. **ATO or MTO Philosophy**: Migrates away from speculative mass production toward demand-driven pull execution, positioning inventory buffers at strategic decoupling points.
3. **Empowered Employees**: Shifts operational decision-making to the front lines by equipping workers with complete, transparent enterprise information.
4. **Customer and Supplier Integration**: Extends enterprise visibility beyond the four walls, integrating supply chains via real-time portals and APIs.
5. **Sophisticated IT Systems**: High-performance transaction processing, unified databases, and business logic servers ensuring immediate enterprise-wide synchronization.

#### 2. Architectural Aspects: 3-Tier Client-Server Architecture
ERP systems rely on a distributed multi-tier client-server structure:
1. **Presentation Tier (GUI Driver / Client)**:
   - User interface rendered on desktop browsers, tablets, or mobile clients.
   - Responsible only for formatting screen displays, capturing user inputs, and sending requests to the application layer (thin client model).
2. **Application Tier (Logic Server / Business Process Engine)**:
   - The operational brain of the ERP. Houses all business rules, MRP algorithms, accounting validation routines, and workflow logic.
   - Decoupled from the database, allowing multiple application servers to share compute loads across thousands of simultaneous enterprise transactions.
3. **Database Tier (RDBMS / Repository)**:
   - Central repository holding all relational database tables, master data, transaction documents, and system configuration tables.
   - Enforces ACID (Atomicity, Consistency, Isolation, Durability) properties, guaranteeing that a transaction posted in sales instantly reflects in general ledger accounts.

#### 3. Why 3-Tier Architecture is Superior to 2-Tier
* In 2-Tier systems (Client-Server), application logic resided on the user's desktop, choking network bandwidth and crashing when hundreds of users queried the database simultaneously.
* 3-Tier architecture separates business logic from data storage, offering **horizontal scalability**, **centralized security**, and **seamless zero-downtime updates**.`
      },
      {
        qNum: "Q4",
        marks: 10,
        isCompulsory: false,
        text: "Discuss ERP Best Practices with examples.",
        syllabusLink: "Module 4 & 6 · Global Best Practices, 5 Cs of ERP, CODP, S&OP, ABC Analysis",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + Best Practice Pillars Table",
        rubric: [
          "Definition & Core Philosophy (3m): How best practices leverage the 5 Pillars to create Customer Focus, Minimal Waste, and Value Creation.",
          "Core Best Practice Themes (4m): Customer Order Decoupling Point (CODP), Demand Management to S&OP, ABC Inventory Governance, Flat Org Structures.",
          "The 5 Cs of ERP Best Practice (2m): Complete, Connected, Cognitive, Compliant, Capable.",
          "Real-World Examples (1m): Industrial examples demonstrating measurable performance improvements."
        ],
        modelAnswerFramework: `
#### 1. Definition & Core Philosophy
* According to Dr. Rahul Altekar, an **ERP Best Practice** is defined as an established, proven operational methodology that utilizes the **Five Pillars of ERP** to achieve three fundamental outcomes:
  1. **Customer Focus**: Orienting all enterprise workflows toward market responsiveness and customer satisfaction.
  2. **Minimal Waste of Resources**: Eliminating non-value-adding inventory buffers, idle wait times, and repetitive manual entries.
  3. **Value Creation**: Accelerating cash-to-cash cycles and delivering superior return on invested capital.

#### 2. Core Best Practice Themes in Modern ERP
1. **Customer Order Decoupling Point (CODP) Optimization**:
   - Best-practice ERP configures inventory cushions strictly at the optimal decoupling point (e.g., buffering sub-assemblies in ATO rather than expensive finished goods in MTS).
2. **Closed-Loop S&OP (Sales & Operations Planning)**:
   - Replaces informal department guesses with a disciplined monthly cadence balancing marketing demand forecasts with factory capacity and procurement lead times.
3. **ABC Inventory Categorization & Differentiated Control**:
   - Focusing management attention and daily perpetual cycle counting on Class A SKUs while automating reorder points for Class C bulk items.
4. **Three-Way Matching in Procure-to-Pay**:
   - Automated system reconciliation of Purchase Order, Goods Receipt Note (GRN), and Vendor Invoice before payment release, eradicating procurement fraud and billing errors.

#### 3. The 5 Cs Evaluation Benchmark
* ERP best practices must satisfy the **5 Cs of ERP**:
  - **Complete**: Covering end-to-end business operations without orphaned manual side-systems.
  - **Connected**: Synchronizing internal departments (Integrated) and external supply partners (Connected).
  - **Cognitive**: Detecting pattern failures and operational bottlenecks automatically.
  - **Compliant**: Embedding statutory regulations, GMP, and internal SOPs into transaction gates.
  - **Capable**: Handling enterprise transaction volumes and peak processing speeds flawlessly.`
      }
    ]
  },
  {
    id: "pyq-2023",
    year: 2023,
    date: "11-10-2023",
    duration: "1.15 Hrs (75 Minutes)",
    program: "PGDM / BD / RBA",
    trimester: "Trimester IV",
    batch: "2022–2024",
    courseName: "ERP Business Applications",
    maxMarks: 30,
    instructions: [
      "1) Q. 1 is compulsory.",
      "2) Solve any TWO questions from the rest of the Questions."
    ],
    questions: [
      {
        qNum: "Q1",
        marks: 10,
        isCompulsory: true,
        text: "Ms. Deepika, ERP Head of a Pharma Co adopting ERP as Business Strategy vs IT Strategy. Create an ERP Strategy charter.",
        syllabusLink: "Module 1 & 7 · ERP as Business Strategy vs IT Strategy, Pharma Industry, Strategic Charter",
        suggestedTime: "30 mins",
        suggestedLength: "500–650 words + Charter Canvas",
        rubric: [
          "Pharma Industry Specifics (3m): High regulation, batch traceability, US FDA 21 CFR Part 11, recipe management, cold-chain logistics.",
          "Business Strategy vs IT Strategy (3m): Demonstrating that IT strategy focuses on servers and deployment, while Business Strategy focuses on market expansion, regulatory compliance, and margin defense.",
          "ERP Strategy Charter Components (4m): Executive Vision, Strategic Objectives, Governance, Vanilla Core Mandate, Risk Mitigation."
        ],
        modelAnswerFramework: `
#### 1. Context & Industry Dynamics
* In the pharmaceutical sector, failure in traceability or batch integrity carries catastrophic financial and legal penalties (e.g., FDA import alerts, patient safety hazards).
* Ms. Deepika must position the ERP initiative not as a routine software upgrade managed by IT technicians, but as an **Enterprise Business Transformation Charter** signed by the CEO and Board of Directors.

#### 2. The Core Distinction: IT Strategy vs. Business Strategy
| Dimension | ERP as an IT Strategy | ERP as a Business Strategy |
| :--- | :--- | :--- |
| **Sponsorship** | Chief Information Officer (CIO) alone | CEO, Executive Board & Cross-Functional Heads |
| **Primary Goal** | Replace legacy servers; software rollouts | Regulatory compliance, faster drug launch, margin growth |
| **Process Stance** | Automate existing departmental forms | Standardize processes to global pharma best practices (BPR) |
| **Success Metric** | System uptime, go-live date, IT budget | Batch cycle time reduction, zero audit observations, inventory turns |

#### 3. Ms. Deepika's ERP Strategy Charter
1. **Executive Vision**: Establish a unified, audit-ready global operational platform that accelerates compliant pharmaceutical production and secures end-to-end batch genealogy.
2. **Core Strategic Objectives**:
   - *100% Regulatory Integrity*: Electronic Batch Records (eBR) and automated audit trails compliant with US FDA 21 CFR Part 11.
   - *Inventory Optimization*: Real-time visibility into Active Pharmaceutical Ingredients (APIs) and excipients across plants and temperature-controlled cold-chain depots.
   - *Lead-Time Compression*: Reduce batch release cycle times by integrating Quality Control (LIMS) directly with ERP material master release gates.
3. **Implementation Principles**:
   - *Strict Vanilla Core Doctrine*: Zero customization to core financials and standard distribution workflows; customizations permitted only for proprietary chemical formulation recipes.
   - *Process Owner Accountability*: Business unit leaders (Quality Head, Plant Directors) are designated Process Owners responsible for adoption and change management.
4. **Governance Architecture**: Executive Steering Committee meets bi-weekly; milestone sign-offs tied to business readiness audits rather than IT technical deadlines.`
      },
      {
        qNum: "Q2",
        marks: 10,
        isCompulsory: false,
        text: "Discuss various functional modules of ERP. Explain the application of Item Control in ERP.",
        syllabusLink: "Module 5 · Core ERP Functional Modules, Master Data & Item Control Application",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + Item Control Architecture",
        rubric: [
          "Functional Modules Overview (4m): Manufacturing, Financials, Distribution, Supply Chain, Human Resources.",
          "Item Control Concept & Application (4m): Item Master data, material types (ROH, HALB, FERT), Signal Codes, tracking status, lead-time control.",
          "Plossl Integration (2m): How Item Control prevents inventory cushions and controls lead times as an active managerial variable."
        ],
        modelAnswerFramework: `
#### 1. Core Functional Modules of ERP
Modern ERP systems unify cross-functional enterprise operations through synchronized modules:
1. **Manufacturing Module**: Material Requirements Planning (MRP), Master Production Scheduling (MPS), Capacity Requirements Planning (CRP), Bill of Materials (BOM), and Shop Floor Control.
2. **Distribution & Sales Module**: Order-to-Cash (O2C) processing, customer pricing matrices, credit checking, shipping, Available-to-Promise (ATP), and invoicing.
3. **Financials Module**: General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR), Fixed Assets, Cost Center Accounting, and automated statutory balance sheets.
4. **Procurement & Materials Management**: Procure-to-Pay (P2P), vendor rating, purchase requisitions, three-way matching, and warehouse inventory management.

#### 2. The Application of Item Control in ERP
* **Definition**: Item Control is the master data governance mechanism in ERP that uniquely defines, categorizes, tracks, and manages every physical SKU across its entire lifecycle.
* **Key Components of Item Control**:
  1. **Item Master Taxonomy**:
     - *Material Types*: Standard ERP classification distinguishing Raw Materials (*ROH*), Semi-Finished Assemblies (*HALB*), Finished Products (*FERT*), and Packaging (*VERP*).
     - *Attributes*: Base unit of measure, valuation class, storage conditions, shelf-life expiration date (SLED), and batch management requirements.
  2. **Signal Codes & Planning Parameters**:
     - Embedded signal codes dictate how the MRP engine treats the item: Procurement Type (Make vs. Buy), Lot Sizing Rules (Lot-for-Lot, Fixed Order Quantity, Economic Order Quantity), Reorder Points, and Safety Stock levels.
  3. **Lead Time Governance**:
     - Planned delivery lead times for purchased parts and setup/processing lead times for manufactured items. As Plossl's Theory states, *"Lead times cannot only be monitored and adjusted but can also be controlled"*—Item Control provides the precise operational levers to compress lead times.
  4. **Inventory Valuation & Status Controls**:
     - Real-time valuation (FIFO, Moving Average, Standard Cost) and status flags (Unrestricted, Quality Inspection, Blocked). Prevents contaminated or uninspected materials from being issued to shop-floor work orders.`
      },
      {
        qNum: "Q3",
        marks: 10,
        isCompulsory: false,
        text: "Discuss the conceptual model and architectural aspects of ERP with examples.",
        syllabusLink: "Module 3 & 4 · Five Pillars Conceptual Model & 3-Tier Client-Server Architecture",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + SVG Diagrams",
        rubric: [
          "Conceptual Model / 5 Pillars (4m): Flat organization, ATO/MTO, empowered employees, supplier/customer integration, sophisticated IT.",
          "Architectural Aspects (4m): Client-server tiers, logic server, DB driver, GUI driver, operating systems.",
          "Concrete Industrial Example (2m): End-to-end transaction flow through the architecture."
        ],
        modelAnswerFramework: `
#### 1. The Conceptual Model: Five Pillars of ERP
ERP is conceptually built on five interconnected structural foundations:
- **Pillar 1: Process-Based Flat Organization**: Removes hierarchical departmental walls, replacing functional delays with streamlined end-to-end workflows.
- **Pillar 2: ATO / MTO Philosophy**: Decouples manufacturing at strategic buffer points to eliminate finished goods inventory liabilities while maintaining rapid customer fulfillment.
- **Pillar 3: Empowered Employees**: Democratizes real-time enterprise data, allowing shop-floor and desk workers to resolve issues autonomously.
- **Pillar 4: Customer & Supplier Integration**: Integrates supply chain partners directly into enterprise planning via real-time EDI/API portals.
- **Pillar 5: Sophisticated IT Systems**: Enterprise software, relational databases, and high-speed networks providing instantaneous synchronization.

#### 2. Architectural Framework: Multi-Tier Client-Server
1. **Presentation Layer (Client / GUI Driver)**: Runs on user endpoints, capturing user actions and displaying rendered outputs.
2. **Logic Layer (Application Server)**: Executes business rules, MRP explosion algorithms, validation routines, and cross-module synchronization.
3. **Database Layer (RDBMS / Repository)**: Single centralized relational database storing all enterprise data with strict transactional consistency.
4. **Drivers & Operating Systems**: DB Drivers (ODBC/JDBC) and GUI Drivers abstract underlying hardware and operating systems (Unix, Windows NT/Server), ensuring cross-platform stability.

#### 3. Real-World Architectural Example
When an automotive customer places an online order for an SUV:
- The **Presentation Tier** renders the vehicle configurator in the browser.
- The **Application Tier** calculates Available-to-Promise (ATP), checks BOM rules, reserves assembly line capacity, and verifies dealer credit.
- The **Database Tier** commits the order in a single transaction, locking inventory in the RDBMS and triggering automated purchase orders to component suppliers.`
      },
      {
        qNum: "Q4",
        marks: 10,
        isCompulsory: false,
        text: "How does an Automobile Industry build the MPS Process in an ERP System? Explain with examples.",
        syllabusLink: "Module 8 · Master Production Scheduling (MPS), S&OP Translation, Automobile Discrete Assembly",
        suggestedTime: "25 mins",
        suggestedLength: "450–600 words + Time Fence & Planning Table",
        rubric: [
          "MPS Role & Positioning (3m): How MPS acts as the operational translation bridge between S&OP aggregate plans and detailed MRP shop floor orders.",
          "Automobile MPS Process Steps (4m): Vehicle mix leveling, Planning Time Fences (Frozen, Slushy, Liquid), Rough-Cut Capacity Planning (RCCP).",
          "Real-World Automotive Example (3m): Concrete car assembly line execution with BOM explosion and Just-In-Sequence supplier alignment."
        ],
        modelAnswerFramework: `
#### 1. What is the Master Production Schedule (MPS)?
* In discrete manufacturing environments like the automobile industry, the **Master Production Schedule (MPS)** is the detailed operational plan specifying **what end-products (specific vehicle models, engine types, color variants) will be manufactured, in what exact quantities, and in which specific time buckets**.
* It translates aggregate Sales & Operations Planning (S&OP) volume targets into precise shop-floor assembly schedules, serving as the master demand input driving downstream Material Requirements Planning (MRP).

#### 2. Building the MPS Process in an Automobile ERP System
1. **Demand Aggregation & Disaggregation**:
   - ERP aggregates confirmed dealer orders from the Dealer Management System (DMS) and combines them with regional sales forecasts.
   - De-aggregates family forecasts into specific vehicle model-trim combinations (e.g., SUV Trim-X Petrol vs. Trim-Z Diesel).
2. **Rough-Cut Capacity Planning (RCCP) Validation**:
   - Before finalizing the MPS, the ERP runs RCCP against critical bottleneck work centers: the Stamping Press shop, the automated Robotic Body Welding line, and the Paint Shop bake ovens.
   - If capacity is violated, the ERP prompts the planner to smooth the production mix (Heijunka leveling).
3. **Managing Planning Time Fences (PTF)**:
   - **Frozen Zone (Current Week to Week +1)**: Zero schedule modifications allowed; parts are already staged on the assembly line or in transit via Just-In-Sequence (JIS).
   - **Slushy Zone (Week +2 to Week +4)**: Mix modifications allowed (e.g., swapping vehicle exterior colors), but total volume is locked.
   - **Liquid Zone (Week +5 and beyond)**: Planners can adjust both volume and mix based on updated market forecasts.
4. **BOM Explosion to MRP**:
   - The finalized MPS explodes down through multi-level automotive Bills of Materials, generating daily call-off schedules for Tier-1 component vendors (brake systems, wiring harnesses, instrument panels).

#### 3. Real-World Automotive Assembly Example
* **Automobile Plant Target**: 500 compact SUVs per day across three shifts.
* **ERP MPS Execution**:
  - The ERP schedules a balanced assembly sequence: 3 Petrol White, 1 Diesel Black, 2 Petrol Red, repeating throughout the shift.
  - Broadcasts automated Electronic Data Interchange (EDI) signals to the seat supplier 3 hours before chassis arrival, ensuring car seats arrive at the assembly dock in the exact sequence required for assembly.`
      }
    ]
  }
];

module.exports = {
  erpPyqPapers
};

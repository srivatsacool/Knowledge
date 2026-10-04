/**
 * pyq-answers.js — Comprehensive MBA Model Answers for all 12 Authentic PYQs (2023, 2024, 2025)
 * Grounded in Dr. Rahul V. Altekar's ERP Business Applications curriculum (WeSchool Term IV).
 */

const pyqAnswers = {

  /* ==========================================================================
     2023 - Q1 (10 Marks) — Ms. Deepika / Pharma ERP Strategy Charter
     ========================================================================== */
  '2023-Q1': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Context & Reframe: 2M | Core Strategic Goals: 2M | 5 Pillars Mapping: 2M | Methodology & Readiness: 2M | Value Realization: 2M</div>

    <h4>1. Executive Context & The Strategic Reframe (2 Marks)</h4>
    <p><b>Situational Diagnosis:</b> Ms. Deepika, ERP Head of a pharmaceutical enterprise, correctly recognizes that ERP is fundamentally a <i>business strategy</i> rather than an IT automation exercise. In a highly regulated pharmaceutical environment, treating ERP merely as software installation inevitably results in failure, budget overruns, and severe regulatory exposure.</p>
    <p><b>Strategic vs. Technological Framing:</b>
    Technology automates existing tasks; business strategy restructures how value is created, protected, and delivered. In pharmaceuticals, ERP is the operational backbone ensuring strict compliance with regulatory mandates (US FDA 21 CFR Part 11, cGMP, WHO-GMP), end-to-end forward and backward batch traceability from active pharmaceutical ingredients (API) to patient dosage, and integrated clinical-to-commercial supply synchronization.</p>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Redraw <i>The 5 Pillars of Enterprise Excellence</i> anchored on a foundation of "Zero Compliance Deviation & Customer Trust".
    </div>

    <h4>2. Core Strategic Goals of the ERP Charter (2 Marks)</h4>
    <ul>
      <li><b>Regulatory & Quality Compliance (Zero Defect):</b> Enforce automated electronic batch manufacturing records (eBMR), electronic signatures, and audit trails to guarantee total audit readiness.</li>
      <li><b>End-to-End Batch Traceability:</b> Achieve instant forward recall and backward genealogy tracking across raw materials, excipients, intermediate blends, and finished packaged formulations.</li>
      <li><b>Working Capital & Expiry Optimization:</b> Eliminate scrap and inventory write-offs caused by near-expiry materials through dynamic FEFO (First-Expired, First-Out) inventory allocation.</li>
      <li><b>Integrated Sales & Operations Synchronization:</b> Bridge clinical trial pipeline forecasts, hospital/institutional tenders, and manufacturing campaigns through synchronized demand management.</li>
    </ul>

    <h4>3. Conceptual Model: Mapping the 5 Pillars to Pharmaceuticals (2 Marks)</h4>
    <ul>
      <li><b>Pillar 1: Process-Based Flat Organization:</b> Break functional silos between Quality Assurance (QA), Quality Control (QC), Production, Procurement, and Regulatory Affairs. Cross-functional batch release workflows replace sequential bureaucratic approvals.</li>
      <li><b>Pillar 2: ATO / MTO Philosophy:</b> Standardize intermediate bulk active ingredients while packaging, labeling, and country-specific serialization (track-and-trace barcodes) operate on an Assemble-to-Order (ATO) or Make-to-Order (MTO) basis near the customer order decoupling point.</li>
      <li><b>Pillar 3: Empowered Employees:</b> Floor supervisors and QA officers receive real-time parameter validation and automated quarantine triggers, empowering immediate line stoppages without waiting for executive intervention.</li>
      <li><b>Pillar 4: Customer and Supplier Integration:</b> Establish secure EDI/API portals with API chemical suppliers for Certificates of Analysis (CoA) pre-clearance, and with hospital chains/distributors for consumption-based replenishment.</li>
      <li><b>Pillar 5: Sophisticated IT Systems:</b> Deploy a validated Tier-1 ERP with robust life-sciences industry vertical extensions, tightly interfaced with LIMS (Laboratory Information Management Systems) and MES (Manufacturing Execution Systems).</li>
    </ul>

    <h4>4. Implementation Methodology & Organizational Readiness (2 Marks)</h4>
    <p><b>Approach Selection:</b> Avoid a Big Bang cutover due to catastrophic risks to patient health and GMP validation. Adopt a <b>Phased Rollout by Facility/Value Stream</b> (e.g., pilot in a single formulation plant before enterprise-wide scaling).</p>
    <p><b>Execution Phases:</b>
    1. <i>Readiness Audit:</i> Master data cleansing (BOMs, vendor qualification master, item master validation) and CSV (Computer System Validation) readiness.<br>
    2. <i>BPR & Conference Room Pilots (CRP):</i> Harmonize standard operating procedures (SOPs) with global ERP best practices rather than customizing software to fit legacy inefficiencies.<br>
    3. <i>Change Management & Training:</i> Overcome employee fear of strict accountability through continuous education and user certification.</p>

    <h4>5. Value Measurement & Governance Metrics (2 Marks)</h4>
    <p>To validate the charter, Deepika must establish executive KPIs:</p>
    <ul>
      <li><b>Batch Release Cycle Time:</b> Reduce QA/QC quarantine-to-release duration by 40% via automated exception workflows.</li>
      <li><b>Inventory Holding Days:</b> Compress raw material and API inventory days while improving service level (OTIF &gt; 98%).</li>
      <li><b>Audit Deficiencies:</b> Zero Form 483 / regulatory warning letters attributable to data integrity or documentation gaps.</li>
    </ul>
  `,

  /* ==========================================================================
     2023 - Q2 (10 Marks) — Functional Modules & Item Control Application
     ========================================================================== */
  '2023-Q2': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Functional Modules Overview: 3M | Manufacturing Module Deep-Dive: 3M | Item Control Concept & Definition: 2M | Practical Applications & Examples: 2M</div>

    <h4>1. Overview of ERP Functional Modules (3 Marks)</h4>
    <p>An enterprise resource planning system achieves business process integration through tightly coupled functional modules sharing a single, unified database repository. The faculty curriculum categorizes core ERP modules into three primary operational pillars:</p>
    <ul>
      <li><b>1. Manufacturing & Operations Module:</b> Governs the physical transformation of goods. It encompasses Engineering Master Data (BOM, Routings, Work Centers), Sales & Operations Planning (S&OP), Master Production Scheduling (MPS), Material Requirements Planning (MRP), Rough-Cut and Detailed Capacity Planning (RCCP/CRP), and Shop Floor Control / Production Activity Control (PAC).</li>
      <li><b>2. Distribution & Supply Chain Module:</b> Manages order fulfillment and outbound logistics. Key functions include Sales Order Management, Available-to-Promise (ATP) checking, Warehouse Management (WMS), Transportation Management, Invoicing, and Customer Relationship Management (CRM) touchpoints.</li>
      <li><b>3. Financial Management Module:</b> Acts as the enterprise ledger and fiduciary control engine. It integrates General Ledger (GL), Accounts Receivable (AR), Accounts Payable (AP), Asset Accounting, Cost Center Accounting / Profitability Analysis (CO-PA), and treasury operations. Transactions in manufacturing or distribution instantly generate financial journal entries (e.g., goods receipt immediately credits Accounts Payable and debits Raw Material Inventory).</li>
    </ul>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Draw the <i>ERP Business Process View</i> showing Sales Order &rarr; MPS &rarr; MRP &rarr; Shop Floor / Purchase &rarr; Inventory &rarr; General Ledger.
    </div>

    <h4>2. Manufacturing Module Deep-Dive: Capacity Planning & Item Control (3 Marks)</h4>
    <p>Within the manufacturing umbrella, two engines ensure operational feasibility:</p>
    <ul>
      <li><b>Capacity Planning:</b> Bridges material requirements with physical capability. <i>Rough-Cut Capacity Planning (RCCP)</i> checks critical resource bottlenecks against the Master Production Schedule. <i>Capacity Requirements Planning (CRP)</i> performs detailed machine-hour and labor-hour loading across all work center routings based on planned shop orders.</li>
      <li><b>Item Control:</b> Provides the foundational master data architecture governing every physical and logical entity used across the enterprise. It dictates how items are identified, planned, tracked, valued, and depleted.</li>
    </ul>

    <h4>3. Concept & Definition of Item Control (2 Marks)</h4>
    <p><b>Definition:</b> Item Control is the systematic administrative, logistical, and algorithmic mechanism in ERP that defines item attributes, policies, rules, and tracking parameters across its entire product lifecycle.</p>
    <p>Key parameters managed under Item Control include: Item Identification (SKU/part number), Item Classification (Raw material, WIP, Finished good, MRO, Phantom), Lot-Sizing Rules (Lot-for-Lot, EOQ, Fixed Period), Lead Time Parameters (Procurement lead time, manufacturing cycle time, safety lead time), Inventory Valuation Policies (FIFO, Weighted Average, Standard Costing), and Traceability Profiles (Batch/Lot controlled, Serialized, Non-tracked).</p>

    <h4>4. Practical Applications of Item Control with Industrial Examples (2 Marks)</h4>
    <ul>
      <li><b>Application 1: Batch / Lot Traceability in Regulated Industries:</b> In pharmaceuticals and food processing, Item Control enforces strict lot tracking with expiry dates. The ERP uses First-Expired, First-Out (FEFO) picking rules and enables immediate isolation of defective lots during contamination events.</li>
      <li><b>Application 2: Engineering Change Management (ECM) & Revision Control:</b> In high-tech electronics or automotive manufacturing, Item Control manages effective dates for engineering changes. When a PCB resistor changes from Rev A to Rev B, Item Control ensures MRP stops procuring Rev A on the cutoff date without disrupting work in progress.</li>
      <li><b>Application 3: Phantom Item Structuring:</b> Transient sub-assemblies (e.g., a pre-wired instrument harness in car assembly) are coded as "Phantom Items". Item Control instructs MRP to blow through the assembly to plan component parts directly, without generating unnecessary inventory stocking transactions.</li>
      <li><b>Application 4: Segmented Inventory Strategy (ABC Control):</b> Item Control tags items into ABC categories, automatically applying daily cycle counts and zero-safety-stock rules to Class A items, while automating bulk replenishment (Min-Max/Two-Bin) for Class C fasteners.</li>
    </ul>
  `,

  /* ==========================================================================
     2023 - Q3 & 2024 - Q3 (10 Marks) — Conceptual Model & Architecture
     ========================================================================== */
  '2023-Q3': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Conceptual Model (5 Pillars Analysis): 4M | Architectural Aspects (Client-Server 3-Tier): 4M | Synthesis & Industrial Examples: 2M</div>

    <h4>1. The Conceptual Model: Five Pillars of Enterprise Excellence (4 Marks)</h4>
    <p>The conceptual model of ERP (Dr. Altekar's curriculum) establishes that ERP is not mere technology, but a business management philosophy operating on <b>Five Foundational Pillars</b>:</p>
    <ul>
      <li><b>Pillar 1: Process-Based Flat Organization:</b> Replaces traditional vertical functional silos (Sales, Production, Purchasing, Finance) with seamless end-to-end horizontal processes (e.g., Order-to-Cash, Procure-to-Pay). Decision hierarchies are flattened as information flows freely across functions.
      <br><i>Example:</i> A sales order automatically initiates credit validation, material reservation, and scheduling without departmental handoffs or paper requisitions.</li>
      <li><b>Pillar 2: Assemble-to-Order (ATO) or Make-to-Order (MTO) Philosophy:</b> Shifts operations away from speculative Make-to-Stock (MTS) mass production toward agile, customer-driven postponement strategies. Final product configuration is delayed until actual customer commitment.
      <br><i>Example:</i> Computer manufacturers (like Dell) stock generic chassis and components, assembling tailored configurations only after web orders are confirmed.</li>
      <li><b>Pillar 3: Empowered Employees:</b> Decentralizes operational authority by equipping front-line knowledge workers with enterprise-wide real-time information.
      <br><i>Example:</i> A procurement buyer sees live global inventory across all plants and vendor performance scorecards, authorizing spot buys without seeking multi-tier executive signatures.</li>
      <li><b>Pillar 4: Customer and Supplier Integration:</b> Extends enterprise boundaries through electronic data interchange (EDI), supplier collaboration portals, and customer CRM interfaces.
      <br><i>Example:</i> Automotive OEMs grant Tier-1 suppliers live visibility into plant assembly schedules via Vendor Managed Inventory (VMI), triggering automated dock-to-stock replenishment.</li>
      <li><b>Pillar 5: Sophisticated IT Systems:</b> The technological enabler providing real-time data integrity, transactional speed, security, and algorithmic intelligence (MRP, ATP, predictive maintenance).</li>
    </ul>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Redraw <i>The 3-Tier Client-Server Architecture</i> showing Presentation (GUI) &harr; Logic Server &harr; RDBMS Database Server, supported by the underlying OS and Drivers.
    </div>

    <h4>2. Architectural Aspects of ERP Systems (4 Marks)</h4>
    <p>ERP architecture has evolved from centralized mainframe monolithic architectures into modern <b>Multi-Tier Client-Server Distributed Architectures</b>:</p>
    <ul>
      <li><b>Presentation Tier (GUI Driver / Client Layer):</b> The user-facing interface running on desktop, web browser, or mobile devices. Its sole responsibility is collecting user input, rendering graphical forms, and displaying output. It performs zero heavy business logic, ensuring low client hardware overhead.</li>
      <li><b>Application Tier (Logic Server / Kernel Layer):</b> The computational engine of the ERP. It executes core enterprise business logic, validation rules, scheduling algorithms (MRP calculation, cost rollups, three-way matching), and workflow triggers. It mediates transactions between the client interface and the database. Multiple logic servers can be clustered horizontally to ensure load balancing and high availability.</li>
      <li><b>Database Tier (RDBMS / Enterprise Repository):</b> The centralized transactional repository storing all enterprise data (master data, transactional records, system configuration tables). Managed by enterprise Relational Database Management Systems (Oracle, SAP HANA, Microsoft SQL Server, DB2), it guarantees ACID (Atomicity, Consistency, Isolation, Durability) properties, preventing duplicate or conflicting entries.</li>
      <li><b>Underlying Foundation: Operating System & Drivers:</b> Beneath the 3-tier model sit the OS (UNIX/Linux, Windows NT), DB Drivers (ODBC/JDBC), and Network Protocols, providing hardware abstraction and secure inter-process communication.</li>
    </ul>

    <h4>3. Synthesis: How Architecture Enables the Conceptual Model (2 Marks)</h4>
    <p>The architectural separation of concerns directly operationalizes the conceptual model:</p>
    <p>A centralized RDBMS ensures the "One System" reality (Activity recorded at one place is instantly reflected everywhere). Clustered Application Logic Servers provide the computational horsepower required to run complex MRP explosions across multi-plant supply chains. The ubiquitous GUI client layer delivers live dashboards directly to front-line staff, turning the "Empowered Employee" pillar into daily operational reality.</p>
  `,

  /* Re-use identical model answer for 2024-Q3 */
  '2024-Q3': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Conceptual Model (5 Pillars Analysis): 4M | Architectural Aspects (Client-Server 3-Tier): 4M | Synthesis & Industrial Examples: 2M</div>

    <h4>1. The Conceptual Model: Five Pillars of Enterprise Excellence (4 Marks)</h4>
    <p>The conceptual model of ERP establishes that ERP is not a technology package, but an enterprise management philosophy operating on <b>Five Interdependent Pillars</b>:</p>
    <ul>
      <li><b>Pillar 1: Process-Based Flat Organization:</b> Eliminates vertical silos in favor of cross-functional workflows (e.g., Procure-to-Pay, Order-to-Cash, Issue-to-Resolution). Information latency is destroyed because data moves horizontally across the value stream.</li>
      <li><b>Pillar 2: ATO / MTO Philosophy:</b> Moves the Customer Order Decoupling Point (CODP) upstream, shifting the business from speculative inventory stockpiling to demand-driven responsiveness.</li>
      <li><b>Pillar 3: Empowered Employees:</b> Democratizes information access. Front-line workers have complete operational context, enabling fast, localized decisions that align with global business goals.</li>
      <li><b>Pillar 4: Customer and Supplier Integration:</b> Integrates external value-chain partners through standardized digital touchpoints, turning supply chains into synchronized value networks.</li>
      <li><b>Pillar 5: Sophisticated IT Systems:</b> The core transactional and computational backbone providing ACID-compliant database integrity and automated planning logic.</li>
    </ul>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Redraw <i>The 3-Tier Client-Server Architecture</i> showing Presentation (GUI) &harr; Logic Server &harr; RDBMS Database Server, supported by the underlying OS and Drivers.
    </div>

    <h4>2. Architectural Aspects of ERP Systems (4 Marks)</h4>
    <p>The physical structure of ERP relies on the <b>3-Tier Client-Server Architecture</b>:</p>
    <ul>
      <li><b>Tier 1: Presentation Layer (GUI / User Interface):</b> Provides responsive, user-friendly data entry screens and dashboards. Offloads rendering tasks from enterprise servers.</li>
      <li><b>Tier 2: Application Layer (Logic Server):</b> Encapsulates business rules, algorithmic scheduling, validation checks, and process workflows. Houses the core ERP software modules.</li>
      <li><b>Tier 3: Database Layer (RDBMS Enterprise Repository):</b> Houses relational tables, enforcing referential integrity and transactional consistency across all modules.</li>
    </ul>

    <h4>3. Synthesis: Industrial Application Example (2 Marks)</h4>
    <p>In an automotive enterprise like Tata Motors, when a dealer enters an order on the web portal (Tier 1), the Logic Server (Tier 2) validates credit and explodes the BOM via MRP. The RDBMS (Tier 3) updates inventory balances and supplier schedules in real time, illustrating the complete fusion of 3-tier architecture with the 5 conceptual pillars.</p>
  `,

  /* ==========================================================================
     2023 - Q4 (10 Marks) — Automobile Industry MPS Process in ERP
     ========================================================================== */
  '2023-Q4': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Definition & Role of MPS: 2M | Automotive MPS Complexity & Inputs: 3M | Step-by-Step MPS Building Process: 4M | Benefits & Strategic Impact: 1M</div>

    <h4>1. Definition and Strategic Role of MPS in ERP (2 Marks)</h4>
    <p><b>Definition:</b> The Master Production Schedule (MPS) is the central operational statement specifying <i>what</i> end items the business plans to produce, in <i>what quantities</i>, and <i>in which specific time buckets</i> (typically weekly or daily).</p>
    <p><b>Strategic Decoupling Role:</b> In ERP, MPS acts as the vital shock absorber between volatile commercial marketplace demand and rigid physical factory capacity. It disaggregates the high-level aggregate Sales & Operations Plan (S&OP) into concrete finished product builds, providing the primary operational input driving downstream Material Requirements Planning (MRP).</p>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Draw the <i>MPS Closed-Loop Flow</i>: Demand Inputs (Forecast + Dealer Orders) &rarr; S&OP &rarr; MPS Formulation &harr; Rough-Cut Capacity Planning (RCCP) &rarr; Firm MPS &rarr; MRP Explosion.
    </div>

    <h4>2. Automotive Industry Nuances & Core Inputs to MPS (3 Marks)</h4>
    <p>Building an MPS in automotive manufacturing faces distinct structural challenges:</p>
    <ul>
      <li><b>Mass Customization & Option Explosion:</b> A single vehicle model (e.g., Hyundai Creta) offers multiple engines (petrol, diesel, turbo), transmissions (manual, automatic, DCT), trim lines, and colors, yielding thousands of end-item permutations. Scheduling individual finished car SKUs months ahead is impossible.</li>
      <li><b>Assemble-to-Order (ATO) Environment:</b> Major sub-assemblies (engines, axles, body-in-white stampings) are produced to forecast, while final vehicle trim and paint are executed against confirmed dealer orders.</li>
      <li><b>Core Inputs to the Automotive MPS Engine:</b>
        <br>&bull; <i>Unconstrained Sales Forecast:</i> Regional dealer demand projections.
        <br>&bull; <i>Confirmed Dealer Orders:</i> Actual customer bookings with specific VIN-level option packs.
        <br>&bull; <i>Finished Vehicle & In-Transit Inventory:</i> Stock held at regional distribution yards.
        <br>&bull; <i>Rough-Cut Capacity Constraints:</i> Stamping press strokes, paint shop carrier throughput, assembly line cycle times (Takt time), and key supplier capacity allocations.
      </li>
    </ul>

    <h4>3. Step-by-Step Process: How Automotive ERP Builds MPS (4 Marks)</h4>
    <ol>
      <li><b>Step 1: Two-Level Master Scheduling using Planning BOMs:</b> Rather than scheduling 5,000 finished car permutations, the ERP builds the Level-1 MPS on <i>Product Families and Modular Planning Bills of Materials (BOMs)</i>. The planner schedules aggregate vehicle platforms and percentage option splits (e.g., 60% petrol, 40% diesel; 30% sunroof).</li>
      <li><b>Step 2: Net Requirements Calculation:</b> For each time bucket, the ERP calculates Net Requirements:
      <br>$$\\text{Net Req} = \\text{Gross Demand (Forecast/Orders)} - \\text{On-Hand Inventory} - \\text{Scheduled Receipts} + \\text{Safety Stock}$$</li>
      <li><b>Step 3: Rough-Cut Capacity Planning (RCCP) Validation:</b> The preliminary MPS is evaluated against the <i>Bill of Resources</i> for critical work centers:
        <br>&bull; Stamping Shop (press tonnage hours).
        <br>&bull; Paint Shop (hourly vehicle throughput & color batching limits).
        <br>&bull; Final Trim & Assembly (labor man-hours & line takt pacing).
        <br>If load exceeds capacity, the planner adjusts the MPS or authorizes overtime before releasing the schedule.
      </li>
      <li><b>Step 4: Final Assembly Scheduling (FAS):</b> Once actual dealer vehicle orders are received inside the short-term frozen horizon (e.g., next 7 days), the ERP converts modular MPS lines into a sequenced <i>Final Assembly Schedule</i>, locking in specific chassis broadcast sequences for line-side part feeding (Just-in-Time / Just-in-Sequence).</li>
      <li><b>Step 5: Freezing Horizons & Time Fences:</b> The ERP enforces time fences:
        <br>&bull; <i>Frozen Zone (Days 1–5):</i> Zero changes allowed; parts already staged line-side.
        <br>&bull; <i>Slushy Zone (Days 6–20):</i> Minor mix adjustments permitted; aggregate volume locked.
        <br>&bull; <i>Liquid Zone (Beyond Day 20):</i> Total flexibility to adjust volume and mix based on new sales forecasts.
      </li>
    </ol>

    <h4>4. Strategic Benefits & Impact (1 Mark)</h4>
    <p>A closed-loop MPS in ERP prevents line stoppages, dampens the Bullwhip Effect across Tier-1 and Tier-2 automotive suppliers, slashes finished vehicle inventory holding costs, and delivers accurate Available-to-Promise (ATP) delivery commitments to car dealerships.</p>
  `,

  /* ==========================================================================
     2024 - Q1 (20 Marks) — Ms. Aishwarya / Prabha Automobiles Strategy Report
     ========================================================================== */
  '2024-Q1': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION (CO1: 8M, CO2: 6M, CO3: 6M)</span> Strategic Context & Reframe: 4M | 5 Pillars & 5 Cs Architecture: 4M | Strategic Goals: 4M | Implementation Methodology & Cutover: 5M | Governance & KPIs: 3M</div>

    <h3>REPORT ON ERP STRATEGY: PRABHA AUTOMOBILES</h3>
    <p><b>TO:</b> Board of Directors, Prabha Automobiles<br>
    <b>FROM:</b> Ms. Aishwarya, CIO & Head-ERP<br>
    <b>SUBJECT:</b> Strategic Blueprint: Transitioning ERP from Technological Automation to a Customer-Centric Business Engine</p>

    <hr>

    <h4>1. Executive Summary & Strategic Reframing (CO1 — 4 Marks)</h4>
    <p>Prabha Automobiles stands at a critical strategic crossroad. The historical perception that ERP is a "computerization project" or a backend software installation represents one of the most destructive misconceptions in modern management (ref. Faculty Myth #3 and #4). Technology alone merely speeds up existing processes; if those processes are inefficient or disconnected from customer reality, automation simply produces faster mistakes at higher costs.</p>
    <p><b>The Strategic Paradigm Shift:</b> ERP must be deployed as a <i>Customer-Centric Business Strategy</i>. In automotive markets characterized by intense model competition, dynamic variant demand, and demanding delivery expectations, ERP's true mission is organizing the entire enterprise around the velocity of customer demand. It transforms Prabha Automobiles from an internally focused, push-based manufacturing factory into an agile, demand-driven, synchronized value network.</p>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Redraw <i>The 5 Pillars of Enterprise Excellence</i> supported by <i>The 5 Cs of Integration</i>, emphasizing the shift of CODP to ATO.
    </div>

    <h4>2. Activating the 5 Pillars & The 5 Cs for Customer Centricity (CO1 & CO2 — 4 Marks)</h4>
    <p>To ground this strategy academically, we deploy Dr. Altekar's foundational frameworks:</p>
    <ul>
      <li><b>The 5 Pillars Operationalized:</b>
        <br>&bull; <i>Process-Based Flat Organization:</i> Break down walls between Dealer Sales, Production Scheduling, Quality, and Procurement. Form integrated "Order Fulfillment Value Streams" with end-to-end accountability for customer delivery dates.
        <br>&bull; <i>Assemble-to-Order (ATO) Philosophy:</i> Reposition Prabha's Customer Order Decoupling Point (CODP). Manufacture vehicle engines, chassis, and stampings to forecast, but postpone final painting, interior trim, and accessory configuration until confirmed customer/dealer orders arrive.
        <br>&bull; <i>Empowered Employees:</i> Front-line customer service agents and line managers have real-time visibility into vehicle build status and inventory, enabling instant Available-to-Promise (ATP) date commits without manual escalation.
        <br>&bull; <i>Customer & Supplier Integration:</i> Direct API/EDI integration connecting dealer showroom management systems with tier-1 supplier component schedules. A sale at a showroom immediately signals raw material replenishment upstream.
        <br>&bull; <i>Sophisticated IT Systems:</i> High-performance ERP engine running real-time planning, multi-level BOM explosion, and financial reconciliation.
      </li>
      <li><b>The 5 Cs of Enterprise Excellence:</b>
        <br>&bull; <i>Complete:</i> Full coverage across engineering, manufacturing, logistics, dealer management, and finance.
        <br>&bull; <i>Connected:</i> Internal integration (between departments) paired with external connectivity (dealers and suppliers).
        <br>&bull; <i>Cognitive:</i> AI/analytics detecting quality failure patterns in manufacturing before vehicles leave the plant.
        <br>&bull; <i>Compliant:</i> Strict adherence to automotive safety mandates, AIS norms, and GST invoicing rules.
        <br>&bull; <i>Capable:</i> High-throughput transaction processing during peak festive booking rushes without latency.
      </li>
    </ul>

    <h4>3. Strategic Enterprise Goals for the ERP Program (CO2 — 4 Marks)</h4>
    <table class="tbl">
      <tr><th>Strategic Dimension</th><th>Target Metric</th><th>Operational Mechanism in ERP</th></tr>
      <tr><td>Customer Delivery Responsiveness</td><td>Order-to-Delivery reduced from 45 days to 14 days</td><td>ATO postponement scheduling + live dealer ATP visibility</td></tr>
      <tr><td>Working Capital Efficiency</td><td>28% reduction in finished vehicle holding</td><td>Demand-driven pull scheduling; zero speculative building of unpopular trims</td></tr>
      <tr><td>Supply Chain Synchronization</td><td>OTIF supplier delivery &gt; 96%</td><td>Automated supplier portals + dynamic Kanban schedule broadcast</td></tr>
      <tr><td>Product Quality & First-Time-Right</td><td>Warranty claims reduced by 35%</td><td>Integrated shop-floor quality gates + automated serialization trace</td></tr>
    </table>

    <h4>4. Implementation Methodology & Cutover Architecture (CO3 — 5 Marks)</h4>
    <p>Selecting the correct implementation approach is paramount to prevent catastrophic operational disruption:</p>
    <ul>
      <li><b>Approach Evaluation:</b>
        <br>&bull; <i>The Big Bang:</i> Instant cutover of all plants and modules simultaneously. <b>REJECTED:</b> Massive risk in an automotive OEM; a single data error halts assembly lines costing crores per hour.
        <br>&bull; <i>Slam-Dunk:</i> Fast, out-of-the-box installation for smaller businesses. <b>REJECTED:</b> Prabha has complex multi-tier bill-of-materials and extensive dealer networks.
        <br>&bull; <i>Franchising / Phased Pilot Rollout (RECOMMENDED):</i> Implement core financials and procurement first, followed by a pilot deployment at Prabha's primary manufacturing facility and select regional dealerships. After stabilizing operations and resolving process bottlenecks, franchise the proven template across all remaining plants and distribution hubs.
      </li>
      <li><b>5-Stage Implementation Methodology:</b>
        <ol>
          <li><i>Stage 1: Readiness Audit & Strategic Alignment:</i> Audit data hygiene (cleansing duplicate supplier codes, standardizing part numbers) and assess employee cultural readiness.</li>
          <li><i>Stage 2: Process Reengineering & Conference Room Pilots (CRP):</i> Adopt standard automotive best practices rather than customizing software to preserve obsolete departmental habits.</li>
          <li><i>Stage 3: Integration & System Testing:</i> Stress-test high-volume dealer order entry, EDI EDIFACT messages with suppliers, and real-time financial rollups.</li>
          <li><i>Stage 4: Cutover & Go-Live:</i> Migrate clean master data, establish a 24/7 war room, and transition users during a scheduled plant shutdown.</li>
          <li><i>Stage 5: Post-Go-Live Hypercare & Value Audit:</i> Measure adoption KPIs, refine scheduling parameters, and audit business value realization against target goals.</li>
        </ol>
      </li>
    </ul>

    <h4>5. Risk Management & Debunking ERP Myths (CO3 — 3 Marks)</h4>
    <p>Aishwarya must inoculate executive leadership against prevalent misconceptions:</p>
    <ul>
      <li><i>Countering Myth #1 ("ERP = Everyday Reduction of Profit"):</i> Prove ROI through reduced inventory carrying costs and captured sales gains via faster delivery quotes.</li>
      <li><i>Countering Myth #10 ("ERP is a downsizing tool"):</i> Reassure the workforce that ERP eliminates tedious clerical reconciliations, empowering employees to focus on supplier development and customer experience.</li>
      <li><i>Executing the 3 Truths:</i> Conduct an unsparing <b>Readiness Audit</b> upfront, institute rigorous <b>Performance Measurement</b> dashboards, and treat digital transformation as an <b>Unavoidable</b> imperative for competitive survival.</li>
    </ul>
  `,

  /* ==========================================================================
     2024 - Q2 (10 Marks) — Manufacturing Module & Phantom Item
     ========================================================================== */
  '2024-Q2': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Manufacturing Module Scope: 3M | Capacity Planning vs Item Control: 3M | Phantom Item Definition & Mechanics: 3M | Concrete Industry Example: 1M</div>

    <h4>1. Scope and Core Components of the Manufacturing Module (3 Marks)</h4>
    <p>The Manufacturing Module is the operational engine of ERP, responsible for synchronizing enterprise resources to satisfy market demand while minimizing inventory investment and manufacturing cycle times. Its primary operational components include:</p>
    <ul>
      <li><b>Master Data Management:</b> Maintains Bills of Materials (BOMs), Work Center profiles (machine capabilities, labor capacities, efficiency ratings), and Production Routings (standard operation sequences, setup and run times).</li>
      <li><b>Master Production Scheduling (MPS):</b> Disaggregates aggregate plans into specific production schedules for end products or modular sub-assemblies.</li>
      <li><b>Material Requirements Planning (MRP):</b> Explodes BOMs level by level, calculates gross-to-net requirements, offsets lead times, and generates planned purchase orders for raw materials and planned shop orders for fabricated parts.</li>
      <li><b>Shop Floor Control / Production Activity Control (PAC):</b> Releases shop orders, tracks work-in-progress (WIP) through route sheets, records material issues and labor hours, and monitors scrap rates.</li>
    </ul>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Draw a <i>Multi-Level BOM Explosion</i> comparing a Standard Sub-Assembly (stocked, generates inventory transaction) with a <i>Phantom Item</i> (blow-through, transient, zero stock).
    </div>

    <h4>2. Capacity Planning vs. Item Control within Manufacturing (3 Marks)</h4>
    <p>Within the module, the faculty curriculum highlights two critical pillars:</p>
    <ul>
      <li><b>Capacity Planning:</b> Ensures that material plans generated by MRP are physically executable within factory resource limits. <i>Rough-Cut Capacity Planning (RCCP)</i> checks long-term bottleneck capacities against the MPS. <i>Capacity Requirements Planning (CRP)</i> performs minute-by-minute loading of all operations across specific machine work centers, identifying overloads and underloads.</li>
      <li><b>Item Control:</b> Governs how every individual component, raw material, and intermediate blend is classified, tracked, and managed in the system. It enforces lot sizing, reorder policies, ABC categorization, shelf-life controls, and BOM hierarchy logic.</li>
    </ul>

    <h4>3. Concept and Operational Role of a "Phantom Item" (3 Marks)</h4>
    <p><b>Definition:</b> A Phantom Item (also termed a "Blow-Through", "Transient", or "Pseudo" item) is a physical sub-assembly that exists temporarily during the manufacturing process but is <b>never placed into stock or inventoried</b> as a discrete entity.</p>
    <p><b>How ERP Handles Phantom Items:</b></p>
    <ul>
      <li><i>BOM Identification:</i> The item is assigned a distinct part number in the Bill of Materials for engineering documentation purposes, but flagged with a special attribute: <code>Item Type = Phantom</code>.</li>
      <li><i>MRP Blow-Through:</i> When MRP explodes the BOM, it does <b>not</b> generate a planned order or purchase requisition for the phantom sub-assembly. Instead, the ERP "blows straight through" it, passing gross requirements directly down to its lower-level component parts.</li>
      <li><i>Zero Inventory Accounting:</i> The phantom item does not have a physical bin location in the warehouse, does not generate inventory holding records, and bypasses formal receiving and issuing transactions.</li>
      <li><i>Lead Time Offset:</i> The lead time of a phantom item is treated as zero by the scheduling engine, because it is assembled immediately on the production line as part of the parent item's assembly process.</li>
    </ul>

    <h4>4. Concrete Industrial Example (1 Mark)</h4>
    <p><b>Automotive Wiring Harness Sub-Assembly:</b> During vehicle manufacturing, an instrument panel harness consists of wires, clips, and connectors assembled together on a sub-bench right next to the car assembly line. Once assembled, it is immediately plugged into the car dashboard. Because the harness is never put in a warehouse box or stocked, treating it as a standard inventory item would require unnecessary stock-in and stock-out paperwork. By declaring the harness a <b>Phantom Item</b>, the ERP plans the individual wires and connectors directly, perfectly mirroring shop-floor reality.</p>
  `,

  /* ==========================================================================
     2024 - Q4 (10 Marks) — ERP Best Practices with Examples
     ========================================================================== */
  '2024-Q4': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Definition & Triad Foundation: 2M | Core Theme 1 (CODP): 2M | Core Theme 2 (Demand Mgmt to S&OP): 2M | Core Theme 3 (Org Structure): 2M | Core Theme 4 (ABC Analysis): 2M</div>

    <h4>1. Academic Definition: ERP Best Practices (2 Marks)</h4>
    <p>According to Dr. Altekar's curriculum (Reading Material 01, Slide 10), an ERP Best Practice is defined as:</p>
    <blockquote>"A practice that uses the 5 Pillars of Enterprise Excellence to generate: <b>1) Customer Focus</b>, <b>2) Minimal Waste of Resources</b>, and <b>3) Value Creation</b>."</blockquote>
    <p>Best practices represent proven, battle-tested business processes embedded into tier-1 ERP software. Rather than customizing software to fit legacy corporate bad habits, world-class organizations reengineer their workflows to adopt these built-in best practices.</p>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Draw the <i>Customer Order Decoupling Point (CODP) Spectrum</i> showing MTS &rarr; ATO/CTO &rarr; MTO &rarr; ETO with the decoupling circle moving upstream.
    </div>

    <h4>2. Core Theme 1: Customer Order Decoupling Point (CODP) Optimization (2 Marks)</h4>
    <p><b>Concept:</b> The CODP is the point in the value chain where a product becomes committed to a specific customer order. Upstream of the CODP, operations are forecast-driven (push); downstream of the CODP, operations are customer-order-driven (pull).</p>
    <p><b>Best Practice Application:</b> ERP enables enterprises to strategically shift their CODP upstream from expensive Make-to-Stock (MTS) to agile Assemble-to-Order (ATO) or Configure-to-Order (CTO). By holding inventory in modular component form rather than finished goods, companies slash finished goods obsolescence while providing customized variety.
    <br><i>Example:</i> Paint manufacturers (e.g., Asian Paints) stock uncolored white base paint at retail depots and tint exact color shades in minutes upon customer purchase, radically shrinking finished inventory holding.</p>

    <h4>3. Core Theme 2: Demand Management to S&OP (2 Marks)</h4>
    <p><b>Concept:</b> Replaces disjointed departmental forecasting with a formal, consensus-driven monthly <b>Sales & Operations Planning (S&OP)</b> cadence.</p>
    <p><b>Best Practice Application:</b> The ERP consolidates unconstrained commercial market demand, matches it against manufacturing and supplier capacity limits, and produces a single, synchronized Master Production Schedule.
    <br><i>Example:</i> In FMCG (e.g., Unilever), marketing promotions entered into the ERP automatically adjust factory production schedules and packaging procurement 8 weeks in advance, eliminating promotion stockouts.</p>

    <h4>4. Core Theme 3: Process-Based Flat Organizational Structure (2 Marks)</h4>
    <p><b>Concept:</b> Dismantles functional silos where departments optimize their own metrics at the expense of enterprise goals (e.g., Purchasing buying cheap low-grade steel to meet purchase-price variance goals, causing massive scrap in Manufacturing).</p>
    <p><b>Best Practice Application:</b> Replaces departmental barriers with end-to-end horizontal processes (Procure-to-Pay, Order-to-Cash). ERP enforces three-way matching (PO, Goods Receipt, Vendor Invoice) automatically, removing bureaucratic approval hierarchies and empowering employees with total process visibility.</p>

    <h4>5. Core Theme 4: ABC Stratification & Inventory Control (2 Marks)</h4>
    <p><b>Concept:</b> Applies the Pareto Principle (80/20 rule) to enterprise resource control, recognizing that all inventory items do not deserve equal management attention.</p>
    <p><b>Best Practice Application:</b>
    &bull; <i>Class A Items (Top 10-20% items accounting for 70-80% value):</i> Managed with daily cycle counting, zero safety stock, and tightly coordinated JIT supplier deliveries.<br>
    &bull; <i>Class B Items (Moderate value):</i> Managed via standard periodic review and moderate safety stock buffers.<br>
    &bull; <i>Class C Items (Bottom 50% items representing 5-10% value):</i> Automated replenishment via Min-Max or automated Two-Bin triggers, freeing planners to focus on high-impact items.
    <br><i>Synthesis:</i> Integrating these four core themes creates a high-velocity enterprise that minimizes waste, delights customers, and maximizes shareholder value.</p>
  `,

  /* ==========================================================================
     2025 - Q1 (20 Marks) — Ms. Vijaya Loki / Chemical ERP Strategy Report
     ========================================================================== */
  '2025-Q1': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION (CO1: 8M, CO2: 6M, CO3: 6M)</span> Situational Analysis & Reframe: 4M | 5 Pillars in Process Industry: 4M | Strategic Growth Goals: 4M | Implementation Methodology: 5M | Governance & KPIs: 3M</div>

    <h3>EXECUTIVE REPORT ON ERP STRATEGY: LPU LTD (CHEMICALS)</h3>
    <p><b>TO:</b> Executive Committee & Board of Directors, LPU Ltd<br>
    <b>FROM:</b> Ms. Vijaya Loki, Chief Digital Officer (CDO)<br>
    <b>SUBJECT:</b> ERP Strategy Blueprint: Harnessing Enterprise Systems for Scalable Growth Management</p>

    <hr>

    <h4>1. Situational Analysis & The Growth Reframe (CO1 — 4 Marks)</h4>
    <p>LPU Ltd, a renowned Indian chemical manufacturer, requires an immediate ERP implementation to support aggressive corporate growth. As a seasoned Technical Architect, my natural orientation has been to evaluate ERP through the lens of technology intervention—software modules, database engines, server sizing, and network uptime. However, in an asset-intensive, continuous-process chemical enterprise, <b>ERP as a technology intervention alone will fail to deliver growth</b>.</p>
    <p><b>Reframing ERP for Growth Management:</b> Growth in chemical manufacturing cannot be sustained simply by expanding physical reactors or automating data entry. Uncontrolled growth without process integration leads to catastrophic working capital lockups in toxic inventories, capacity bottlenecks at blending stages, severe regulatory penalties, and declining customer fulfillment. ERP must be chartered as a <i>Holistic Business Strategy</i> that establishes an integrated operating backbone capable of scaling transaction volume without linear headcount expansion.</p>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Redraw <i>The 5 Pillars of Enterprise Excellence</i> adapted to Chemical Process Manufacturing, emphasizing batch control, yield tracking, and multi-site compliance.
    </div>

    <h4>2. Adapting the 5 Pillars to Chemical Process Manufacturing (CO1 & CO2 — 4 Marks)</h4>
    <p>To support scalable growth, LPU Ltd must ground its operational model in Dr. Altekar's Five Pillars:</p>
    <ul>
      <li><b>Pillar 1: Process-Based Flat Organization:</b> Chemical manufacturing spans continuous chemical synthesis, intermediate tank farm storage, quality testing, and drum/bulk packaging. ERP breaks down functional barriers between Production, QC Lab, Hazardous Materials Logistics, and Invoicing, orchestrating a seamless flow from raw bulk chemicals to dispatched shipments.</li>
      <li><b>Pillar 2: ATO / MTO Philosophy in Process Industry:</b> Base chemical intermediates (e.g., standard polymer resins or solvent blends) are manufactured in high-volume campaigns to forecast (MTS/MTO). Final specialty blending, custom additive dosing, and containerized packaging are executed strictly on an Assemble-to-Order (ATO) basis against confirmed customer specs.</li>
      <li><b>Pillar 3: Empowered Employees:</b> Lab chemists and control room operators have direct system authority. Quality parameters entered into the ERP's Quality Management (QM) module automatically release or quarantine intermediate tank storage without physical signatures.</li>
      <li><b>Pillar 4: Customer and Supplier Integration:</b> Direct digital integration with raw petrochemical suppliers (tracking railcar/tanker shipments) and bulk institutional chemical clients via automated telemetry and consumption portals.</li>
      <li><b>Pillar 5: Sophisticated IT Systems:</b> Deploy a specialized process-manufacturing ERP capable of handling recipe/formula management (variable batch sizes, potency adjustments, active ingredient concentration, and variable scrap/yields), integrated with SCADA/DCS shop floor systems.</li>
    </ul>

    <h4>3. Strategic Growth Management Goals (CO2 — 4 Marks)</h4>
    <ul>
      <li><b>Goal 1: Asset Utilization & Yield Optimization:</b> Maximize throughput on expensive chemical reactors and crystallization units by 18% through automated sequence scheduling that minimizes washouts and color changeover downtime.</li>
      <li><b>Goal 2: Strict Regulatory & Environmental Compliance:</b> Automate generation of Safety Data Sheets (SDS), hazardous transport manifests, and environmental pollution audit trails, guaranteeing 100% statutory compliance.</li>
      <li><b>Goal 3: Scalable Working Capital Control:</b> Cut raw material holding days by 25% across all regional bulk storage terminals via automated ABC inventory policies and tank telemetry integration.</li>
      <li><b>Goal 4: Rapid Multi-Site Scalability:</b> Create a standardized "LPU Global Template" enabling new plant acquisitions or brownfield expansions to be integrated within 90 days.</li>
    </ul>

    <h4>4. Implementation Methodology & Execution Architecture (CO3 — 5 Marks)</h4>
    <p>Chemical plants present extreme operational hazards; an implementation error can cause physical plant shutdowns or safety incidents. We select the <b>Franchising / Phased Rollout Approach</b>:</p>
    <ul>
      <li><b>Phase 1: Foundation & Readiness Audit (Months 1–3):</b> Cleanse master data (chemical CAS numbers, standard formula recipes, hazard classifications, vendor master records). Conduct an organizational readiness audit to address workforce anxiety.</li>
      <li><b>Phase 2: Pilot Plant Implementation (Months 4–7):</b> Implement full-suite ERP at LPU's flagship manufacturing facility. Validate recipe management, batch potency scaling, yield variance tracking, and LIMS integration in Conference Room Pilots (CRP).</li>
      <li><b>Phase 3: Stabilization & Template Finalization (Months 8–9):</b> Operate the pilot facility through two month-end financial closings. Resolve system glitches and package the proven configuration as the "LPU Standard Template".</li>
      <li><b>Phase 4: Franchised Enterprise Rollout (Months 10–14):</b> Roll out the standard template across remaining manufacturing units, bulk chemical terminals, and corporate sales offices in structured waves.</li>
    </ul>

    <h4>5. Governance, Value Measurement & The 3 Truths (CO3 — 3 Marks)</h4>
    <p>To guarantee business value realization, LPU Ltd will institutionalize the <b>Three Truths of ERP</b>:</p>
    <ul>
      <li><i>Truth 1: Readiness Audit:</i> No site will go live without passing a mandatory operational readiness gateway (data accuracy &gt; 99%, 100% staff certified in role-based transactions).</li>
      <li><i>Truth 2: Performance Measurement:</i> Executive performance will be tracked via automated digital dashboards: Batch Yield Variance, Plant OEE, Delivery OTIF, and Cash-to-Cash Cycle Time.</li>
      <li><i>Truth 3: Unavoidable:</i> Leadership must communicate that process discipline and integrated ERP operations are not optional administrative burdens, but an unavoidable prerequisite for global competitiveness and enterprise survival.</li>
    </ul>
  `,

  /* ==========================================================================
     2025 - Q2 (10 Marks) — ERP Value in ATO & MTO Scenarios
     ========================================================================== */
  '2025-Q2': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Theoretical Framework (CODP): 2M | ERP Value in Assemble-to-Order (ATO): 3M | ERP Value in Make-to-Order (MTO): 3M | Comparative Synthesis: 2M</div>

    <h4>1. Theoretical Grounding: The CODP Spectrum (2 Marks)</h4>
    <p>The business value delivered by ERP is fundamentally dictated by where an enterprise positions its <b>Customer Order Decoupling Point (CODP)</b>. The CODP divides the organization into two distinct operating zones: upstream activities driven by statistical forecasting (push), and downstream activities driven by actual customer orders (pull).</p>
    <p>In traditional Make-to-Stock (MTS), the CODP sits at Finished Goods, exposing the business to severe finished goods inventory write-offs. In <b>Assemble-to-Order (ATO)</b> and <b>Make-to-Order (MTO)</b>, the CODP is strategically moved upstream, drastically changing how ERP creates business value.</p>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Redraw <i>The Customer Order Decoupling Point Matrix</i> highlighting the location of inventory buffers and lead time boundaries in ATO vs. MTO.
    </div>

    <h4>2. How ERP Adds Value in an Assemble-to-Order (ATO) Business (3 Marks)</h4>
    <p>In ATO environments (e.g., custom personal computers, commercial trucks, modular furniture), sub-assemblies and components are manufactured or procured to forecast, while final assembly occurs only upon receiving a customer order.</p>
    <ul>
      <li><b>Modular BOM & Option Configuration Management:</b> ERP manages super-BOMs and planning bills of materials. When a customer selects specific features (e.g., engine size, cabin color, suspension type), the ERP product configurator validates technical compatibility and dynamically generates the exact assembly bill.</li>
      <li><b>Dynamic Available-to-Promise (ATP) & Capable-to-Promise (CTP):</b> The sales agent can quote an instantaneous, rock-solid delivery commitment. The ERP checks live component stocks (ATP) and available assembly line slot capacity (CTP), eliminating guess-work.</li>
      <li><b>Postponement Strategy & Working Capital Compression:</b> By maintaining inventory as uncommitted modules rather than finished vehicles or computers, ERP slashes finished inventory holding costs by 30-50% while offering customers hundreds of customizable variants.</li>
    </ul>

    <h4>3. How ERP Adds Value in a Make-to-Order (MTO) Business (3 Marks)</h4>
    <p>In MTO environments (e.g., industrial capital equipment, specialty chemical synthesis, bespoke fabrication), raw materials are held in basic stock, but product fabrication and assembly commence only after contract signature.</p>
    <ul>
      <li><b>Engineering & Dynamic Lead Time Management:</b> ERP coordinates engineering releases, long-lead procurement, and manufacturing routings under a unified project schedule. It tracks dynamic critical paths, preventing costly delays.</li>
      <li><b>Accurate Job Costing & Profitability Tracking:</b> Because every customer order is unique, standard costing is insufficient. ERP captures actual direct labor hours, machine time, material issues, and subcontracting expenses directly against the specific sales order or project WBS (Work Breakdown Structure), calculating true order margin upon delivery.</li>
      <li><b>Capacity Requirements Planning (CRP):</b> In MTO, shop floor machine bottlenecks constantly fluctuate depending on the product mix. ERP's CRP engine dynamically balances loads across fabrication, machining, and welding work centers, preventing shop-floor gridlock.</li>
    </ul>

    <h4>4. Comparative Synthesis Matrix (2 Marks)</h4>
    <table class="tbl">
      <tr><th>Dimension</th><th>Assemble-to-Order (ATO)</th><th>Make-to-Order (MTO)</th></tr>
      <tr><td>CODP Location</td><td>Sub-assemblies / Intermediate Components</td><td>Raw Materials / Initial Fabrication</td></tr>
      <tr><td>Primary ERP Planning Challenge</td><td>Forecasting component mix splits & option rules</td><td>Dynamic capacity scheduling & long-lead procurement</td></tr>
      <tr><td>Customer Quoting Engine</td><td>Available-to-Promise (ATP) based on component stock</td><td>Capable-to-Promise (CTP) based on engineering & shop capacity</td></tr>
      <tr><td>Inventory Risk Profile</td><td>Modular obsolescence if component mix shifts</td><td>Zero finished stock risk; raw material holding risk</td></tr>
    </table>
  `,

  /* ==========================================================================
     2025 - Q3 (10 Marks) — BPR & ERP Chicken-and-Egg Paradox
     ========================================================================== */
  '2025-Q3': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Deconstructing the Paradox: 3M | Core Failure Modes (Both Extremes): 3M | The Dual-Loop Strategic Resolution: 3M | Implementation Conclusion: 1M</div>

    <h4>1. Deconstructing the BPR & ERP "Chicken & Egg" Paradox (3 Marks)</h4>
    <p>The relationship between <b>Business Process Reengineering (BPR)</b> and <b>Enterprise Resource Planning (ERP)</b> represents a classic strategic paradox in operations management:</p>
    <blockquote><b>The Dilemma:</b> Should an enterprise reengineer its business processes FIRST and then select/configure ERP software to match those new processes? OR should the enterprise implement an ERP package FIRST and let the software's built-in global best practices force the reengineering of corporate processes?</blockquote>
    <p>Both viewpoints possess passionate academic and practitioner advocates, creating paralyzing implementation gridlock if leadership fails to understand the underlying trade-offs.</p>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Draw the <i>Dual-Loop Iterative Synthesis Framework</i> showing Strategic Process Redesign &rarr; ERP Standard Package Selection &rarr; Iterative Conference Room Pilots (Gap Analysis) &rarr; Harmonized Process.
    </div>

    <h4>2. Analyzing the Risks of Both Extremes (3 Marks)</h4>
    <ul>
      <li><b>Failure Mode 1: Doing BPR in Total Isolation First:</b>
        <br>&bull; Organizations spend 12–18 months designing theoretically "perfect" processes on paper in white-collar workshops.
        <br>&bull; When the ERP software arrives, the team discovers that commercial off-the-shelf (COTS) software cannot execute these idiosyncratic workflows without massive, expensive custom coding.
        <br>&bull; Customizing ERP code breaks software upgradeability, creates software bugs, inflates budgets by 300%, and defeats the core benefit of buying pre-built best practices.
      </li>
      <li><b>Failure Mode 2: Blindly Implementing ERP Without Process Vision:</b>
        <br>&bull; Termed <i>"Paving the Cowpaths"</i>: Automating obsolete, broken, bureaucratic legacy processes simply makes bad processes run faster and costs more.
        <br>&bull; Conversely, blindly forcing an enterprise into rigid generic software templates without strategic alignment destroys unique competitive advantages (e.g., proprietary customer service models).
        <br>&bull; Massive employee resistance, cultural rejection, and project abandonment follow.
      </li>
    </ul>

    <h4>3. What Must Be Done First? The Strategic Resolution (3 Marks)</h4>
    <p><b>Definitive Recommendation:</b> <i>High-Level Strategic Process Visioning & Clean-Up MUST Precede ERP, followed by Iterative Process Alignment During Implementation.</i></p>
    <ol>
      <li><b>Phase 1 (Before ERP Selection) — Strategic BPR & Hygiene:</b>
        <br>&bull; Eliminate obvious waste: Standardize part numbering, eliminate redundant approval signatures, and simplify organizational reporting hierarchies.
        <br>&bull; Identify <i>Core Competencies vs. Commodity Processes</i>. Commodity processes (General Ledger, Payroll, Standard Purchasing) should adopt 100% standard ERP best practices. Proprietary processes that drive market differentiation must be clearly defined so leadership chooses software that supports them.
      </li>
      <li><b>Phase 2 (During ERP Implementation) — Software-Guided BPR via Gap Analysis:</b>
        <br>&bull; During Conference Room Pilots (CRP), adopt the <b>"Vanilla Rule"</b>: Change the business process to match the ERP software standard unless there is an overwhelming, quantified competitive justification to customize.
        <br>&bull; Reengineering becomes an active, interactive dialogue between the software's proven data model and the company's future-state vision.
      </li>
    </ol>

    <h4>4. Conclusion (1 Mark)</h4>
    <p>BPR and ERP are not mutually exclusive sequential hurdles; they are <b>two sides of the same digital transformation coin</b>. Strategic BPR defines <i>where the business must go</i>, while ERP provides the concrete operational rails and best practices that make those redesigned processes permanent and measurable.</p>
  `,

  /* ==========================================================================
     2025 - Q4 (10 Marks) — SNOP & ABC Concepts in ERP
     ========================================================================== */
  '2025-Q4': `
    <div class="rubric"><span class="rubric-pill">ALLOCATION</span> Concept 1: SNOP (Definition, Flow & Example): 5M | Concept 2: ABC Analysis (Definition, Classes & Example): 5M</div>

    <h4>PART 1: SALES & OPERATIONS PLANNING (SNOP / S&OP) IN ERP (5 Marks)</h4>
    <p><b>1. Definition and Strategic Purpose:</b><br>
    Sales & Operations Planning (S&OP / SNOP) is an executive decision-making process in ERP that balances unconstrained market demand with constrained supply chain capacity over an intermediate planning horizon (typically 3 to 18 months). Its primary mission is ensuring that all departments operate from a <b>"Single Operating Plan"</b>, eliminating the historic disconnect where Sales chases unconstrained targets while Manufacturing builds uncoordinated inventory.</p>

    <div class="diagram-rec">
      <b>Recommended Answer Script Diagram:</b> Draw the <i>5-Step S&OP Monthly Cycle</i>: 1. Data Gathering &rarr; 2. Demand Review &rarr; 3. Supply Review &rarr; 4. Pre-S&OP Meeting &rarr; 5. Executive S&OP.
    </div>

    <p><b>2. The Five-Step S&OP Monthly Workflow in ERP:</b></p>
    <ul>
      <li><i>Step 1: Data Gathering:</i> The ERP automatically consolidates prior month actuals: sales shipments, production output, scrap, and ending inventory balances.</li>
      <li><i>Step 2: Demand Planning Review:</i> Sales and Marketing review statistical forecasts generated by ERP analytics, layering on marketing campaigns, pricing promotions, and customer pipeline data to generate an unconstrained demand plan.</li>
      <li><i>Step 3: Supply Planning Review:</i> Manufacturing, Procurement, and Logistics evaluate the demand plan against Rough-Cut Capacity Planning (RCCP) constraints (plant machine hours, warehouse space, supplier raw material allocations). Identified bottlenecks are flagged for resolution.</li>
      <li><i>Step 4: Pre-S&OP Financial Reconciliation:</i> Finance monetizes the operational plans, comparing revenue and margin projections against the annual operating budget.</li>
      <li><i>Step 5: Executive S&OP:</i> Executive leadership resolves remaining demand-supply imbalances, authorizes overtime or supplier capital investments, and signs off on the official Master Production Schedule.</li>
    </ul>
    <p><b>3. Industrial Example:</b> In an air-conditioner manufacturer, S&OP in ERP aligns unconstrained summer demand projections (200,000 units) with plant assembly capacity (150,000 units), triggering planned pre-building during the winter months (MTS) and pre-booking copper tube supplier capacity 4 months ahead.</p>

    <hr>

    <h4>PART 2: ABC ANALYSIS IN ERP INVENTORY MANAGEMENT (5 Marks)</h4>
    <p><b>1. Concept and Theoretical Foundation:</b><br>
    ABC Analysis in ERP operationalizes the <b>Pareto Principle (80/20 Rule)</b>. It establishes that in any multi-item inventory repository, a small percentage of items represents the vast majority of financial expenditure, while the majority of items account for a negligible financial fraction. ERP automates ABC classification based on annual dollar usage (Annual Usage Volume &times; Unit Cost).</p>

    <p><b>2. The Three Stratification Categories:</b></p>
    <table class="tbl">
      <tr><th>Category</th><th>% of Total SKUs</th><th>% of Annual Value</th><th>ERP Inventory Policy & Control Mechanism</th></tr>
      <tr>
        <td><b>Class A Items</b></td>
        <td>10% – 20%</td>
        <td>70% – 80%</td>
        <td><b>Extremely Tight Control:</b> Daily/weekly cycle counting, zero or minimal safety stock buffers, continuous supplier EDI pull replenishment, senior planner oversight.</td>
      </tr>
      <tr>
        <td><b>Class B Items</b></td>
        <td>20% – 30%</td>
        <td>15% – 25%</td>
        <td><b>Moderate Control:</b> Monthly cycle counting, standard safety stock calculations, periodic MRP batch planning.</td>
      </tr>
      <tr>
        <td><b>Class C Items</b></td>
        <td>50% – 60%</td>
        <td>5% – 10%</td>
        <td><b>Simple / Automated Control:</b> High safety stocks to prevent trivial line-stopping stockouts, automated Min-Max or electronic Two-Bin Kanban replenishment, minimal human intervention.</td>
      </tr>
    </table>

    <p><b>3. Industrial Example in Automotive Manufacturing:</b><br>
    In a car assembly plant:
    &bull; <i>Class A Item:</i> Fully dressed Engines and Automatic Transmissions. High cost, tight JIT delivery straight to the assembly line; zero tolerance for excess stock.<br>
    &bull; <i>Class B Item:</i> Headlamp assemblies and instrument clusters. Moderate cost, ordered weekly with 3-day safety stock buffers.<br>
    &bull; <i>Class C Item:</i> Standard bolts, washers, clips, and trim rivets. Low cost, bulk-ordered in 30-day quantities and stored in line-side gravity bins. A shortage of a ₹2 bolt halts the entire ₹15,00,000 vehicle line; hence ERP ensures high availability with zero manual tracking overhead.</p>

    <p><b>Synthesis:</b> S&OP governs aggregate horizontal alignment across the business, while ABC Analysis drives microscopic vertical execution efficiency on the shop floor.</p>
  `
};

module.exports = { pyqAnswers };

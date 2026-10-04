/**
 * ERP Notebook 2.0 — Content Data Engine.
 * Academic Synthesis of WeSchool Term IV ERP Business Applications (OPN 419).
 * Instructor: Dr. Rahul V. Altekar.
 *
 * Source Hierarchy:
 * {S} = Faculty Course Material (Reading Materials 01 & 02, TLP, Authentic PYQs)
 * {E} = Comprehensive MBA Academic Explanation & Operational Analysis
 * {X} = Illustrative Industry Case Application
 * {W} = Verified Web / External Context
 */

const D = require('./diagrams');
const { pyqAnswers } = require('./pyq-answers');

const RM1 = 'Faculty Reading Material 01 (Dr. Rahul V. Altekar)';
const RM2 = 'Faculty Reading Material 02 (Dr. Rahul V. Altekar)';

const modules = [
/* ─────────────────────────────────────────────────────────────────────────
   MODULE 1: Why ERP? Relevance & Concept
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm1', title: 'Why ERP? Relevance & Concept', tlp: '1.0', signal: ['CORE', 'PYQ', 'CASE STUDY'],
  why: 'Every single supplied examination paper opens with a compulsory ERP strategy case study (10 to 20 marks). Mastering this module equips you with the foundational argument required for high-scoring MBA answers: ERP is fundamentally a business strategy and management philosophy, not a computerization project.',
  obj: [
    'Articulate the four macroeconomic and operational relevance drivers from faculty material',
    'Synthesize the three definitive concept statements of ERP (Philosophy, Software, Inseparability)',
    'Deconstruct the fallacy of treating ERP as an IT automation exercise rather than an enterprise business strategy'
  ],
  blocks: [
    { k: 'core', h: 'The Three Definitive Statements of ERP', html:
      `<p>{S} Faculty Reading Material 01 ("Concepts" slide) defines ERP through three authoritative, multi-dimensional statements:</p>
       <ol class="cl">
         <li><b>Management Philosophy:</b> It is a <mark>planning methodology or philosophy</mark> that is based on the seamless integration of all the business processes of an enterprise.</li>
         <li><b>Integrated Software System:</b> It is a <mark>set of software</mark> covering major business areas like finance, logistics, sales, materials, manufacturing, distribution etc., all so tightly integrated with one another that <mark>any business activity recorded at one place is immediately reflected in all other places</mark>.</li>
         <li><b>Fusion of IT & Business:</b> It is the <mark>finest expression of the inseparability of Info-tech and business</mark> — an enterprise-wide system with enabling technology and an effective managerial tool for integrating all the levels and improving reportability.</li>
       </ol>
       <p class="src">Source: ${RM1}, Slide 5 ("Concepts").</p>` },

    { k: 'faculty', h: 'Faculty Terminology — Relevance & Strategic Agenda', html:
      `<p>{S} <b>Relevance Slide (Macroeconomic & Operational Drivers):</b></p>
       <ul>
         <li><b>Changing Business Scenario:</b> Rapid market globalization, collapsing product life cycles, hyper-competition, and mass customization make disconnected legacy systems unviable.</li>
         <li><b>Role of Information in Decision Making:</b> Information replaces speculative inventory. Decisions must transition from backward-looking historical accounting to real-time predictive visibility.</li>
         <li><b>Need to act as "One System":</b> Fragmented functional departments operating on disjointed spreadsheets create catastrophic internal friction and information distortion.</li>
         <li><b>Performance V/S Perceptions:</b> Departmental perceptions of high local efficiency (e.g., procurement buying cheap bulk materials) often mask severe enterprise performance degradation (e.g., massive manufacturing scrap and factory downtime).</li>
       </ul>
       <p>{S} <b>Course Agenda:</b> Introduction &rarr; Conceptual Origination &rarr; Evolution &rarr; Structure & Architecture &rarr; Global Best Practices &rarr; Myths vs Truths.</p>
       <p class="src">Source: ${RM1}, Slides 2–3.</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Explanation: The Three Lenses of ERP', html:
      `<p>{E} To achieve complete mastery, an operations executive must analyze the three concept statements through three distinct managerial lenses:</p>
       <p><b>1. The Managerial / Strategic Lens (Statement 1):</b> ERP begins with a process-oriented operating philosophy. In traditional organizations, business processes are chopped up across vertical functional silos (Sales, Purchasing, Production, Finance). ERP views the enterprise horizontally through end-to-end value streams—such as Order-to-Cash, Procure-to-Pay, and Plan-to-Produce. Without this philosophical commitment to process ownership, purchasing software achieves zero organizational transformation.</p>
       <p><b>2. The Technical / Architectural Lens (Statement 2):</b> The physical reality of ERP is a single, centralized database repository serving all modules. The core operational rule is: <i>"Recorded at one place, immediately reflected in all other places."</i> When a shop-floor operator scans a finished sub-assembly, the ERP simultaneously updates inventory stock records, relieves component requirements, recalculates capacity availability, logs labor variance, and posts work-in-progress (WIP) accounting entries into the general ledger. Data redundancy and batch reconciliations are permanently eliminated.</p>
       <p><b>3. The Executive / Synthesis Lens (Statement 3):</b> Technology and modern business strategy are completely fused. IT is no longer a peripheral support function running back-office payroll; it is the competitive nervous system of the firm. High reportability means executives base capital allocation on verified operational reality rather than political departmental forecasts.</p>` },

    { k: 'visual', h: 'Visual Blueprint: From Fragmented Silos to "One System"', svg: 'oneSystem', cap: 'Original infographic illustrating Faculty Statement 2: Single-point data entry dynamically radiating into Finance, Planning, Warehousing, and Manufacturing.' },

    { k: 'example', h: 'Concrete Industrial Application', html:
      `<p>{X} <b>Pharmaceutical Case Application:</b> In a pharmaceutical formulation enterprise, a customer service representative logs an export sales order for 50,000 vials of an injectable antibiotic. In an integrated ERP environment:</p>
       <ul>
         <li>The system immediately checks Available-to-Promise (ATP) inventory across all distribution warehouses.</li>
         <li>Finding insufficient stock, the system automatically checks intermediate bulk API inventory and triggers a Master Production Schedule (MPS) batch planned order.</li>
         <li>The Quality Management (QM) module checks analytical testing lead times and quarantine holding periods.</li>
         <li>Finance automatically checks the overseas buyer\'s letter of credit (LC) limits and reserves export credit insurance.</li>
         <li>Zero manual emails, phone calls, or duplicate spreadsheet entries occur across the five departments.</li>
       </ul>` },

    { k: 'apply', h: 'Application: Framing the "Business Strategy vs. IT Strategy" Argument', html:
      `<p>{E} When answering case studies where protagonists view ERP as a software project (Ms. Deepika in Pharma, Ms. Aishwarya in Automobiles, Ms. Vijaya Loki in Chemicals), structure your strategic rebuttal around three pillars:</p>
       <ol class="cl">
         <li><b>Business Vision First:</b> Technology is merely an enabler. The strategic vision must articulate clear commercial objectives: market share expansion, customer responsiveness, regulatory compliance, or agile mass customization.</li>
         <li><b>Organizational Alignment:</b> Process integration requires redefining employee roles, authority matrices, and cross-functional performance scorecards. If human workflows and incentives remain trapped in silos, software will be actively sabotaged.</li>
         <li><b>The Inseparability Mandate (Statement 3):</b> Explain that attempting to install ERP as an isolated "IT intervention" violates Statement 3 of the course curriculum. It treats the nervous system as separate from the physical body.</li>
       </ol>` },

    { k: 'exam', h: 'Executive Exam Strategy & Rubrics', html:
      `<p><b>PYQ Intelligence:</b> The ERP-as-business-strategy paradigm is examined in the compulsory Question 1 of <b>all three supplied examination papers</b> (2023, 2024, 2025), carrying 10 to 20 marks (up to two-thirds of the total examination weight). Always open your case report by defining the three statements, citing Dr. Altekar\'s "Inseparability of IT and Business" doctrine, and explicitly contrasting it with the faculty myths list.</p>` },

    { k: 'confusion', h: 'Common Pitfalls & Exam Traps', html:
      `<p><b>Trap:</b> Equating ERP with software packages like SAP S/4HANA or Oracle Cloud. In Dr. Altekar\'s curriculum, <i>"ERP is software system"</i> and <i>"ERP is computerization project of the company"</i> are explicitly categorized as <b>destructive myths</b> (Myths #3 and #4). Software is merely the tool; ERP is the integrated business capability.</p>` },

    { k: 'check', q: 'Which faculty concept statement stresses the "inseparability of Info-tech and business"?', a: 'Statement 3: "It is the finest expression of the inseparability of Info-tech and business — an enterprise-wide system with enabling technology and effective managerial tool for integrating all the levels and improving reportability."' },

    { k: 'pyq', ids: ['2023-Q1', '2024-Q1', '2025-Q1'] },

    { k: 'summary', html:
      `<ul>
         <li><b>Relevance:</b> Changing business scenario &bull; Role of info &bull; Need to act as "One System" &bull; Performance vs Perceptions.</li>
         <li><b>Three Statements:</b> 1) Planning philosophy of process integration &bull; 2) Software where activity recorded once reflects everywhere &bull; 3) Finest expression of inseparability of IT and business.</li>
         <li><b>Exam Rule:</b> Frame ERP as customer-centric business strategy to unlock full marks in Q1 cases.</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 2: System Types, Evolution & Value Matrix
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm2', title: 'System Types, Evolution & Value Matrix', tlp: '1.0', signal: ['CORE', 'DIAGRAM', 'CONCEPTUAL'],
  why: 'Explains the historical necessity of ERP and how corporate IT strategy evolved to mirror changing competitive priorities—from raw production capacity in the 1970s to holistic customer service in the 2000s.',
  obj: [
    'Distinguish rigorously between Connected, Integrated, and Synchronized system architectures',
    'Trace the six-stage evolutionary continuum: SIC &rarr; MRP &rarr; MRP-II &rarr; ERP &rarr; E-ERP &rarr; SCM',
    'Interpret Dr. Altekar\'s Whiteboard Value Matrix: Decades &rarr; Competitive Focus &rarr; Manufacturing Philosophy &rarr; IT Strategy'
  ],
  blocks: [
    { k: 'core', h: 'Three System Types: Connected vs Integrated vs Synchronized', html:
      `<table class="tbl">
         <tr><th>System Type</th><th>Primary Focus</th><th>Decision-Making Architecture</th><th>Faculty Characteristic</th></tr>
         <tr>
           <td><b>Connected</b></td>
           <td>Data Focused</td>
           <td>Common decision making is <b>Choice</b></td>
           <td>Data and information are shared across users, but individual department managers independently choose how to interpret and act on it.</td>
         </tr>
         <tr>
           <td><b>Integrated</b></td>
           <td>Information Focused</td>
           <td>Common decision making is <b>Done by the System</b></td>
           <td>Data is harmonized into business information; the system enforces standardized, industry-specific best practice decision logic automatically.</td>
         </tr>
         <tr>
           <td><b>Synchronized</b></td>
           <td>Knowledge Focused</td>
           <td>Autonomous Collaborative Alignment</td>
           <td>Real-time knowledge flows across extended multi-tier enterprise ecosystems, dynamically synchronizing partner actions.</td>
         </tr>
       </table>
       <p class="src">Source: ${RM1}, Slide 4 ("System Types").</p>` },

    { k: 'faculty', h: 'Faculty Terminology — Evolution & The Value Matrix', html:
      `<p>{S} <b>Evolution Trajectory:</b> Scientific Inventory Control (SIC) &rarr; Material Requirements Planning (MRP) &rarr; Manufacturing Resource Planning (MRP-II) &rarr; Enterprise Resource Planning (ERP) &rarr; Extended ERP (E-ERP) &rarr; Supply Chain Management (SCM).</p>
       <p>{S} <b>The Whiteboard Value Matrix (Slide 9):</b></p>
       <ul>
         <li><b>1970s:</b> Focus = <i>Production Capacity</i> | System = <i>Ford / Mass Production (FPS/MPS)</i> | IT = <i>Scientific Inventory Control (SIC)</i>.</li>
         <li><b>1980s:</b> Focus = <i>Cost Reduction</i> | System = <i>Toyota / Lean Production (TPS)</i> | IT = <i>Material Requirements Planning (MRP)</i>.</li>
         <li><b>1990s:</b> Focus = <i>Customer / Quality</i> | System = <i>Assemble-to-Order (ATO / Dell Production DPS)</i> | IT = <i>MRP-II</i>.</li>
         <li><b>2000s+:</b> Focus = <i>Service / Agility</i> | System = <i>Synchronized Enterprise</i> | IT = <i>Enterprise Resource Planning (ERP)</i>.</li>
       </ul>
       <p class="src">Source: ${RM1}, Slides 6 & 9.</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Explanation: Evolution & Strategic Value Matrix', html:
      `<p>{E} <b>Why the Distinction Between Connected and Integrated is Critical:</b><br>
       In a <i>Connected</i> environment, departments share raw data (e.g., via shared network folders or data lakes), but planning logic remains fragmented. Sales sees inventory numbers, but independently chooses to accept an order without checking machine capacity. In an <i>Integrated</i> system, the business rules are embedded into the software engine itself: the system calculates net requirements, checks rough-cut capacity, validates credit, and reserves inventory according to pre-configured corporate best practices. Decision-making is institutionalized into the system rather than left to individual departmental whim.</p>
       <p>{E} <b>The Evolutionary Logic:</b></p>
       <ul>
         <li><b>1. Scientific Inventory Control (1960s–70s):</b> Relied on statistical reorder point (ROP) and Economic Order Quantity (EOQ) formulas. It assumed independent, uniform demand, resulting in massive component stockpiles and frequent stockouts in complex manufacturing.</li>
         <li><b>2. Material Requirements Planning - MRP (1970s–80s):</b> Recognized that component demand is <i>dependent</i> on finished goods production schedules. It exploded Bills of Materials (BOM) based on master schedules to calculate time-phased component requirements. However, it assumed infinite factory capacity.</li>
         <li><b>3. Manufacturing Resource Planning - MRP-II (1980s–90s):</b> Closed the loop by integrating shop-floor capacity planning (RCCP, CRP), tooling, human labor, and direct cost accounting into material plans.</li>
         <li><b>4. ERP (1990s–2000s):</b> Expanded beyond the manufacturing plant walls to integrate the entire corporate enterprise: financial accounting, distribution logistics, sales order processing, and human resources under a unified relational database.</li>
         <li><b>5. E-ERP & SCM (2000s+):</b> Pushed enterprise boundaries outward via internet protocols, integrating external suppliers, logistics service providers, and multi-tier distribution networks into real-time collaborative value chains.</li>
       </ul>` },

    { k: 'visual', h: 'Visual Blueprint: The System Types Paradigm', svg: 'sysTypes', cap: 'Original diagram illustrating Connected (Data/Choice), Integrated (Information/System), and Synchronized (Knowledge).' },

    { k: 'visual', h: 'Visual Blueprint: The 6-Stage Evolution Continuum', svg: 'evolution', cap: 'Original timeline tracing SIC to SCM as derived from faculty material.' },

    { k: 'visual', h: 'Visual Blueprint: Redrawn Faculty Value Matrix', svg: 'valueMatrix', cap: 'Cleanly redrawn from Dr. Altekar\'s whiteboard sketch (RM01, Slide 9), mapping market eras to IT strategies.' },

    { k: 'example', h: 'Comparative Example: Connected vs Integrated in Practice', html:
      `<p>{X} <b>Connected Scenario:</b> A plant manager and sales director view the same weekly sales report on a cloud portal. The sales manager books an urgent 10,000-unit client order. The plant manager is not notified until Monday morning, discovering that the specific machine required is scheduled for preventive maintenance. Delivery fails.</p>
       <p>{X} <b>Integrated Scenario:</b> The sales order entry screen runs an immediate Capable-to-Promise (CTP) algorithm. The ERP logic server checks machine maintenance calendars, raw material availability, and existing shop floor orders. It automatically informs the salesperson: "Order cannot be fulfilled by Friday without overtime authorization; nearest guaranteed delivery date is next Tuesday." The system governs the decision.</p>` },

    { k: 'apply', h: 'Application: How to Use the Value Matrix in Strategy Answers', html:
      `<p>{E} When analyzing enterprise competitiveness, invoke the Value Matrix to explain that <b>IT strategy is a dependent variable of business focus</b>. If a company aims to compete on Service and Agility in 2026 while running disjointed MRP systems from the 1980s, an insurmountable strategic mismatch occurs. ERP is required because customer expectations have shifted to rapid customization and guaranteed delivery reliability.</p>` },

    { k: 'exam', h: 'Exam Strategy & Recurring Pitfalls', html:
      `<p><b>Exam Angle:</b> Questions frequently ask candidates to explain the origin of ERP or contrast system types. Ensure you emphasize the difference between "Choice" (Connected) and "Done by System" (Integrated). When sketching the evolution timeline, always include all six steps in exact faculty sequence.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Do not confuse <i>Connected</i> with <i>Integrated</i>. A connected system is merely an IT network sharing data pipes; an integrated system is a unified management engine sharing a common data model and coordinated business logic.</p>` },

    { k: 'check', q: 'In an integrated system, how is common decision-making characterized?', a: 'Common decision-making is "Done by the System" using embedded, industry-specific best practices (as opposed to Connected systems where it is a matter of individual "Choice").' },

    { k: 'pyq', ids: ['2023-Q3', '2024-Q3', '2025-Q2'] },

    { k: 'summary', html:
      `<ul>
         <li><b>3 System Types:</b> Connected (Data &bull; Choice) &bull; Integrated (Info &bull; Done by system) &bull; Synchronized (Knowledge).</li>
         <li><b>Evolution Chain:</b> SIC &rarr; MRP &rarr; MRP-II &rarr; ERP &rarr; E-ERP &rarr; SCM.</li>
         <li><b>Value Matrix:</b> \'70s Production/SIC &bull; \'80s Cost/MRP &bull; \'90s Customer/MRP-II &bull; 2K Service/ERP.</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 3: Conceptual Model: Five Pillars & The 5 Cs
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm3', title: 'Conceptual Model: Five Pillars & The 5 Cs', tlp: '1.0', signal: ['CORE', 'HIGH PRIORITY', 'PYQ', 'DIAGRAM'],
  why: 'This module contains the conceptual core of Dr. Altekar\'s curriculum. "Analyse the conceptual model and architectural aspects of ERP with examples" is a repeated 10-mark question appearing across multiple exam papers.',
  obj: [
    'Master and deconstruct the Five Pillars of the ERP Conceptual Model',
    'Examine and apply the "Watch 5 Cs of ERP" operational checklist',
    'Bridge the conceptual model to real-world industrial enterprise architectures'
  ],
  blocks: [
    { k: 'core', h: 'The Five Pillars of the ERP Conceptual Model', html:
      `<p>{S} The conceptual foundation of ERP rests on <b>Five Structural Pillars</b>:</p>
       <ol class="cl">
         <li><b>Process-Based Flat Organization:</b> Dismantling functional hierarchies in favor of horizontal, cross-functional value-creating processes.</li>
         <li><b>Assemble To Order (ATO) or Make To Order (MTO) Philosophy:</b> Moving away from speculative make-to-stock inventories toward agile, customer-driven postponement strategies.</li>
         <li><b>Empowered Employees:</b> Pushing operational decision authority down to front-line knowledge workers equipped with real-time enterprise data.</li>
         <li><b>Customer and Supplier Integration:</b> Extending digital process boundaries outward to encompass external supply chain partners.</li>
         <li><b>Sophisticated IT Systems:</b> Deploying high-performance client-server relational architectures to execute complex planning algorithms and guarantee data integrity.</li>
       </ol>
       <p class="src">Source: ${RM1}, Slide 8 ("Conceptual Model: 5 Pillars").</p>` },

    { k: 'faculty', h: 'Faculty Terminology — "Watch 5 Cs of ERP"', html:
      `<p>{S} Faculty Reading Material 02 (Slide 4) presents the <b>5 Cs of ERP</b> as an executive evaluation framework:</p>
       <table class="tbl">
         <tr><th>The C</th><th>Faculty Slide Scope</th><th>Managerial Meaning</th></tr>
         <tr><td><b>Complete</b></td><td>Business Processes</td><td>Must cover end-to-end organizational operations without requiring external spreadsheets or shadow systems.</td></tr>
         <tr><td><b>Connected</b></td><td>Integrated = internal<br>Connected = external</td><td>Seamless horizontal integration between internal functions, paired with electronic integration to external partners.</td></tr>
         <tr><td><b>Cognitive</b></td><td>Pattern detection for failures</td><td>Advanced analytics identifying quality, yield, or delivery failure patterns before catastrophic breakdown.</td></tr>
         <tr><td><b>Compliant</b></td><td>Legal / Best Practices / GMPs / SOPs</td><td>Automated adherence to statutory regulations, standard operating procedures, and good manufacturing practices.</td></tr>
         <tr><td><b>Capable</b></td><td>Speed & volume handling</td><td>Robust computational throughput handling high transaction volumes without latency or system downtime (accuracy is assumed).</td></tr>
       </table>
       <p class="src">Source: ${RM2}, Slide 4.</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Analysis: The Mechanics of the 5 Pillars', html:
      `<p>{E} <b>Pillar 1: Process-Based Flat Organization:</b><br>
       Traditional organizations are structured vertically into departmental silos (Purchasing, Manufacturing, Quality, Sales, Accounts). Each silo optimizes its own Key Performance Indicators (KPIs), frequently sabotaging other departments. For example, Purchasing buys low-grade steel to claim favorable purchase price variances, causing massive tool breakage in Manufacturing. ERP forces the enterprise to organize around <i>horizontal value streams</i>. Approval hierarchies are flattened because the system provides automated workflow validations, eliminating multi-layered bureaucratic signatures.</p>
       <p>{E} <b>Pillar 2: ATO / MTO Philosophy:</b><br>
       Operating on a Make-to-Stock (MTS) basis forces companies to produce finished goods based on speculative long-range forecasts, leading to high inventory holding costs and severe obsolescence write-offs. ERP shifts the operating philosophy toward Assemble-to-Order (ATO) or Make-to-Order (MTO). Core sub-assemblies are standardized and planned upstream, while final configuration is postponed until actual customer commitment is secured.</p>
       <p>{E} <b>Pillar 3: Empowered Employees:</b><br>
       Information is power. In fragmented firms, front-line employees cannot make decisions because they lack visibility into adjacent departments. ERP democratizes data. A customer support rep can instantly see factory machine loading, inventory in transit, and vendor delivery schedules, resolving customer inquiries on the spot without manual escalation.</p>
       <p>{E} <b>Pillar 4: Customer and Supplier Integration:</b><br>
       An enterprise is only as agile as its weakest supply chain link. ERP integrates customers via CRM, web portals, and EDI, capturing real-time demand. It integrates suppliers via Vendor-Managed Inventory (VMI) portals, broadcasting production schedules line-side to eliminate bullwhip distortions.</p>
       <p>{E} <b>Pillar 5: Sophisticated IT Systems:</b><br>
       The technical backbone that makes the other four pillars operational. It provides 3-tier scalability, high-availability database engines, automated MRP calculations, and enterprise-grade security.</p>` },

    { k: 'visual', h: 'Visual Blueprint: The Five Pillars Conceptual Model', svg: 'pillars', cap: 'Original diagram illustrating the Five Pillars resting upon the bedrock of Customer Focus, Minimal Waste, and Value Creation.' },

    { k: 'example', h: 'Industrial Application: Tata Motors Commercial Vehicles', html:
      `<p>{X} <b>Applying the 5 Pillars to Automotive Assembly:</b></p>
       <ul>
         <li><i>Process-Based Flat Org:</i> Order-to-Delivery teams replace separate sales order processing and dispatch departments.</li>
         <li><i>ATO Philosophy:</i> Standard chassis, cabs, and engines are pre-assembled; custom tipper bodies, paint, and telematics are assembled only after fleet customer orders are finalized.</li>
         <li><i>Empowered Employees:</i> Assembly line workers scan barcode serialized parts; if a quality defect is detected, the ERP authorizes an immediate line stop.</li>
         <li><i>Customer/Supplier Integration:</i> Auto-tier suppliers receive broadcast EDI schedules every 4 hours, staging parts directly at assembly line bays.</li>
         <li><i>Sophisticated IT:</i> Multi-site ERP coordinating five assembly facilities and over 800 authorized dealerships in real time.</li>
       </ul>` },

    { k: 'apply', h: 'Application: Structuring High-Scoring Exam Responses', html:
      `<p>{E} Whenever an exam prompt asks you to <i>"Analyse the conceptual model of ERP"</i>, structure your answer into three distinct sections:</p>
       <ol class="cl">
         <li>Define the conceptual model as a business management paradigm supported by 5 Pillars.</li>
         <li>Dedicate one focused paragraph to each pillar, explaining its operational mechanics and providing a concrete industrial example.</li>
         <li>Reinforce the conceptual model by citing the <b>5 Cs</b> (Complete, Connected, Cognitive, Compliant, Capable) as the operational criteria used to evaluate whether an implementation successfully embodies the pillars.</li>
       </ol>` },

    { k: 'exam', h: 'Exam Strategy & Recurring Patterns', html:
      `<p><b>PYQ Signal:</b> Appeared identically in 2023 Q3 and 2024 Q3 (10 marks, BL4 Analysing). It also provides the theoretical backbone for all Q1 strategy cases. Drawing the 5 Pillars architectural diagram guarantees top-band marks.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Do not confuse the <i>Five Pillars</i> (the core conceptual model) with the <i>5 Cs</i> (the operational evaluation checklist) or the <i>Pancanga</i> concept. Keep their academic definitions clearly distinct.</p>` },

    { k: 'check', q: 'What are the two dimensions of the "Connected" C in the faculty 5 Cs framework?', a: '"Integrated = internal" (seamless process integration between internal departments) and "Connected = external" (electronic integration with external suppliers and customers).' },

    { k: 'pyq', ids: ['2023-Q3', '2024-Q3', '2023-Q1', '2024-Q1', '2025-Q1'] },

    { k: 'summary', html:
      `<ul>
         <li><b>Five Pillars:</b> 1) Process-based Flat Org &bull; 2) ATO/MTO Philosophy &bull; 3) Empowered Employees &bull; 4) Customer & Supplier Integration &bull; 5) Sophisticated IT Systems.</li>
         <li><b>The 5 Cs:</b> Complete (processes) &bull; Connected (internal/external) &bull; Cognitive (failure detection) &bull; Compliant (GMP/SOP) &bull; Capable (speed/volume).</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 4: ERP Structure & Architecture
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm4', title: 'Technology Overview & Architecture', tlp: '2.0', signal: ['CORE', 'DIAGRAM', 'PYQ'],
  why: 'Forms the technical half of the recurring 10-mark question "Analyse the conceptual model and architectural aspects of ERP". Mastering this diagram and its functional layers delivers fast, reliable exam points.',
  obj: [
    'Reproduce and explain the faculty 3-tier client-server architecture diagram',
    'Deconstruct the functional responsibilities of the Presentation, Logic, and Database tiers',
    'Explain the indispensable role of the centralized RDBMS and enterprise repository in preventing data corruption'
  ],
  blocks: [
    { k: 'core', h: 'The Faculty Architecture Model', html:
      `<p>{S} Faculty Reading Material 01 (Slide 7) outlines ERP technology through a <b>Client-Server (2/3/n Tier)</b> architectural blueprint:</p>
       <ul>
         <li><b>Presentation Layer (GUI Driver):</b> Front-end client interface collecting input and rendering visual screens.</li>
         <li><b>Application Layer (Logic Server):</b> High-performance server executing business rules, planning algorithms, and process workflows.</li>
         <li><b>Database Layer (DB Driver & RDBMS):</b> Centralized relational repository storing all enterprise master data and transactional records.</li>
         <li><b>Enterprise Repository:</b> Metadata directory defining system tables, data dictionaries, user authorizations, and validation logic.</li>
         <li><b>Foundation Layer (Operating System):</b> Enterprise OS (UNIX/Linux, Windows NT) providing system-level resource scheduling and hardware abstraction.</li>
       </ul>
       <p class="src">Source: ${RM1}, Slide 7 ("Architecture").</p>` },

    { k: 'faculty', h: 'Faculty Terminology — Architecture & RDBMS', html:
      `<p>{S} Slide components drawn: <b>Repository, Logic Server, GUI Driver, DB Driver, RDBMS, Operating System (Unix, NT)</b>.</p>
       <p>{S} TLP Topic 7.0 explicitly emphasizes: <i>"Importance of RDBMS"</i> and <i>"Architecture"</i>.</p>
       <p class="src">Source: ${RM1}, Slide 7; TLP Topic 7.0.</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Analysis: The 3-Tier Client-Server Architecture', html:
      `<p>{E} <b>Why Modern ERP Relies on 3-Tier Architecture:</b><br>
       Early enterprise systems used monolithic mainframe architectures where presentation, application logic, and data storage resided on a single central machine, causing severe terminal lag and high scaling costs. Two-tier architectures placed business logic on user desktop PCs, creating severe network bottlenecks and administrative nightmares whenever software rules changed.</p>
       <p>The <b>3-Tier Architecture</b> solves these limitations by enforcing strict separation of concerns:</p>
       <ul>
         <li><b>Tier 1: Presentation Tier (GUI / Client Layer):</b> Runs on workstations, web browsers, or mobile handhelds. Its sole task is capturing user keystrokes, displaying graphical forms, and performing basic input syntax checks. Because it contains zero heavy business logic, it requires minimal client processing power.</li>
         <li><b>Tier 2: Application Tier (Logic Server):</b> The operational brain. When a user submits an order, the logic server executes complex multi-table validations: checking credit limits, calculating taxes, exploding BOMs, and triggering inventory reservations. Application servers can be clustered horizontally to balance load across thousands of concurrent global users.</li>
         <li><b>Tier 3: Database Tier (RDBMS / Enterprise Repository):</b> Houses the relational database management system (SAP HANA, Oracle, MS SQL Server). It enforces <b>ACID properties (Atomicity, Consistency, Isolation, Durability)</b>. If a system failure occurs mid-transaction, the RDBMS automatically rolls back the entire entry, ensuring zero corrupted or half-posted accounting records.</li>
       </ul>` },

    { k: 'visual', h: 'Visual Blueprint: Redrawn Client-Server 3-Tier Architecture', svg: 'architecture', cap: 'Cleanly redrawn from Faculty Slide 7, displaying GUI Driver, Logic Server, DB Driver, and RDBMS on the Operating System foundation.' },

    { k: 'example', h: 'Technical Transaction Trace: Processing a Warehouse Receipt', html:
      `<p>{X} <b>Tracing a Purchase Goods Receipt across the 3 Tiers:</b></p>
       <ol class="cl">
         <li><i>Presentation Tier:</i> A warehouse receiving clerk scans an inbound supplier barcode pallet using an RF terminal. The GUI driver packages the part number, batch, and quantity into an encrypted XML/JSON payload.</li>
         <li><i>Application Tier:</i> The Logic Server receives the payload, verifies that the purchase order exists and is currently open, confirms that the quantity does not exceed tolerance limits, and determines the correct put-away bin location.</li>
         <li><i>Database Tier:</i> The DB Driver issues atomic SQL commits to the RDBMS: updating inventory stock tables, creating a material document record, and posting credit/debit entries into Accounts Payable clearing accounts.</li>
       </ol>` },

    { k: 'apply', h: 'Application: Synthesizing Architecture with Business Strategy', html:
      `<p>{E} In exam answers, bridge architecture directly to corporate agility. Explain that <b>3-tier architecture enables multi-site scalability</b>. A growing conglomerate can add new manufacturing plants or distribution depots simply by deploying client browsers and adding application servers, without having to rewrite software or replace the central corporate database.</p>` },

    { k: 'exam', h: 'Exam Strategy & Diagrams to Draw', html:
      `<p><b>Exam Angle:</b> Pair this architecture module directly with Module 3 (The 5 Pillars). When answering 2023 Q3 or 2024 Q3, draw the redrawn architecture diagram clearly, label each tier, and explain how the logic server and RDBMS enforce data integrity across the 5 pillars.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Do not confuse "tiers" with software "modules". Tiers describe physical/logical architectural layers (Presentation, Logic, Database), whereas modules describe business functional areas (Manufacturing, Financials, Distribution).</p>` },

    { k: 'check', q: 'What is the primary role of the RDBMS in the ERP architecture framework?', a: 'To act as the centralized transactional repository enforcing relational data integrity, eliminating data redundancy, and guaranteeing ACID properties across all functional modules.' },

    { k: 'pyq', ids: ['2023-Q3', '2024-Q3'] },

    { k: 'summary', html:
      `<ul>
         <li><b>3-Tier Architecture:</b> Presentation (GUI) &bull; Application (Logic Server) &bull; Database (RDBMS Repository).</li>
         <li><b>Underlying Foundation:</b> Operating System (Unix, NT) and DB Drivers.</li>
         <li><b>Key Business Value:</b> Horizontal scalability, centralized data integrity, and real-time cross-functional transaction processing.</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 5: Theory of ERP: Global Best Practices, CODP, SNOP, ABC
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm5', title: 'Global Best Practices: CODP, SNOP, ABC', tlp: '3.0', signal: ['CORE', 'HIGH PRIORITY', 'PYQ', 'DIAGRAM'],
  why: 'Best practices form a recurring core theme across all three examination years (2024 Q4 on Best Practices, 2025 Q2 on ATO/MTO, and 2025 Q4 on SNOP and ABC Analysis). Mastering this module guarantees full marks on operational planning questions.',
  obj: [
    'Define an ERP Best Practice through Dr. Altekar\'s triadic value framework',
    'Master the Customer Order Decoupling Point (CODP) across MTS, ATO, MTO, and ETO environments',
    'Explain the monthly 5-step Sales & Operations Planning (S&OP) cadence in ERP',
    'Apply ABC inventory analysis to prevent both working capital bloat and factory stockouts'
  ],
  blocks: [
    { k: 'core', h: 'Faculty Definition of ERP Best Practices', html:
      `<p>{S} Faculty Reading Material 01 (Slide 10) provides the authoritative academic definition of an ERP Best Practice:</p>
       <blockquote>"A practice that uses the <b>5 Pillars of Enterprise Excellence</b> to generate:
       <br><b>1. Customer Focus</b>
       <br><b>2. Minimal Waste of Resources</b>
       <br><b>3. Value Creation</b>"</blockquote>
       <p>{S} <b>Core Best Practice Themes Identified by Faculty:</b></p>
       <ul>
         <li><b>Customer Order Decoupling Point (CODP):</b> Strategic positioning of inventory buffers.</li>
         <li><b>Demand Management to SNOP:</b> Consensus-driven sales and operational synchronization.</li>
         <li><b>Organizational Structure:</b> Process-based flat organizational alignment.</li>
         <li><b>ABC Analysis:</b> Stratified resource and inventory control.</li>
       </ul>
       <p class="src">Source: ${RM1}, Slide 10 ("Best Practices").</p>` },

    { k: 'faculty', h: 'Faculty Terminology — Whiteboard CODP Framework', html:
      `<p>{S} Dr. Altekar\'s whiteboard sketch (Slide 11) maps the supply chain continuum across four production environments:</p>
       <ul>
         <li><b>Make-to-Stock (MTS):</b> CODP circle located at <i>Finished Goods (FG)</i>. Products built entirely to speculative forecast.</li>
         <li><b>Assemble-to-Order / Configure-to-Order (ATO/CTO):</b> CODP circle located at <i>Semi-Finished Goods (SFG) / Components</i>. Sub-assemblies built to forecast; final assembly triggered by customer order.</li>
         <li><b>Make-to-Order (MTO):</b> CODP circle located at <i>Raw Materials (RM)</i>. Materials held in stock; fabrication and assembly triggered by customer contract.</li>
         <li><b>Engineer-to-Order (ETO):</b> CODP circle located at the <i>Design / Supplier Stage</i>. Engineering design and procurement commence only after order receipt.</li>
       </ul>
       <p class="src">Source: ${RM1}, Slide 11 ("CODP").</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Explanation: CODP, S&OP, and ABC Analysis', html:
      `<p>{E} <b>1. The Customer Order Decoupling Point (CODP) Mechanics:</b><br>
       The CODP is the strategic frontier separating forecast-driven push operations from customer-driven pull operations.
       <br>&bull; <i>Upstream of the CODP:</i> Materials are planned using statistical demand forecasts, batch lot-sizing algorithms, and push scheduling.
       <br>&bull; <i>Downstream of the CODP:</i> Operations are triggered by actual, confirmed customer sales orders (pull).
       <br>The ultimate goal of ERP best practice is to move the CODP as far upstream as possible (from MTS toward ATO/MTO) without sacrificing customer lead-time expectations. This dramatically lowers finished goods inventory risk while offering mass customization.</p>

       <p>{E} <b>2. Demand Management to Sales & Operations Planning (SNOP / S&OP):</b><br>
       Historically, Sales forecasted aggressively to secure production allocation, while Manufacturing produced according to machine efficiencies, resulting in massive mismatches. S&OP in ERP enforces a monthly five-step cross-functional consensus workflow:
       <br>1) <i>Data Gathering:</i> Consolidating historical sales actuals and inventory positions.
       <br>2) <i>Demand Planning:</i> Sales/Marketing agree on an unconstrained demand plan.
       <br>3) <i>Supply Planning:</i> Manufacturing and Procurement run Rough-Cut Capacity Planning (RCCP) to match plant capacity and vendor limits against demand.
       <br>4) <i>Pre-S&OP Financial Reconciliation:</i> Finance reconciles operating plans against corporate revenue and budget targets.
       <br>5) <i>Executive S&OP:</i> Leadership resolves remaining capacity-demand conflicts and authorizes the official Master Production Schedule (MPS).</p>

       <p>{E} <b>3. ABC Stratification in Inventory Control:</b><br>
       Based on the Pareto Principle (80/20 Rule):
       <br>&bull; <b>Class A (10–20% SKUs, 70–80% Value):</b> Monitored continuously with daily/weekly cycle counts, low safety stocks, and tight JIT deliveries.
       <br>&bull; <b>Class B (20–30% SKUs, 15–25% Value):</b> Managed with standard monthly MRP runs and moderate safety buffers.
       <br>&bull; <b>Class C (50–60% SKUs, 5–10% Value):</b> Automated low-touch replenishment (Two-Bin / Min-Max systems) with large safety buffers to prevent trivial line-stopping shortages.</p>` },

    { k: 'visual', h: 'Visual Blueprint: Redrawn CODP Spectrum & Lead-Time Matrix', svg: 'codp', cap: 'Cleanly redrawn from Faculty Whiteboard Slide 11, illustrating decoupling points across MTS, ATO, MTO, and ETO.' },

    { k: 'example', h: 'Industrial Example: Dell Technologies (ATO) vs Capital Machinery (MTO)', html:
      `<p>{X} <b>ATO Value in Dell:</b> Dell stocks motherboards, processors, and displays based on aggregate S&OP forecasts. When a customer orders a laptop online, ERP runs ATP checks, generates a unique modular BOM, and triggers line assembly. Delivery occurs in 5 days with zero finished goods inventory holding.</p>
       <p>{X} <b>MTO Value in Heavy Equipment:</b> An industrial pump manufacturer stocks stainless steel bar and raw castings. When an oil refinery orders a custom pumping station, ERP tracks engineering design releases, schedules long-lead machining, and captures actual job costs across every work center routing.</p>` },

    { k: 'apply', h: 'Application: Answering Best Practices Exam Prompts', html:
      `<p>{E} When answering questions like 2024 Q4 ("Explain ERP Best Practices with examples"), structure your response around the faculty triad:
       <br>1) Open with the exact faculty definition (5 Pillars &rarr; Customer Focus, Minimal Waste, Value Creation).
       <br>2) Dedicate detailed sub-sections to the 4 Core Themes: CODP, S&OP, Flat Structure, and ABC.
       <br>3) Anchor each theme with a concrete operational example from automotive, FMCG, or electronics.</p>` },

    { k: 'exam', h: 'Exam Strategy & Recurring Trends', html:
      `<p><b>PYQ Intelligence:</b> The Best Practices family represents <b>50% of the entire 2025 examination paper</b> (Q2: ATO/MTO Value, Q4: SNOP & ABC) and Q4 of the 2024 paper. Treat this module as mandatory high-priority study material.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Do not treat CODP as a physical department. The Customer Order Decoupling Point is an abstract operational boundary in the value chain separating forecast-driven push from order-driven pull.</p>` },

    { k: 'check', q: 'In Dr. Altekar\'s CODP diagram, which production scenario has its decoupling point closest to Finished Goods?', a: 'Make-to-Stock (MTS) — where inventory is held at Finished Goods and all upstream operations are driven by forecast.' },

    { k: 'pyq', ids: ['2024-Q4', '2025-Q2', '2025-Q4'] },

    { k: 'summary', html:
      `<ul>
         <li><b>Definition:</b> 5 Pillars &rarr; Customer Focus &bull; Minimal Waste of Resources &bull; Value Creation.</li>
         <li><b>4 Core Themes:</b> CODP &bull; Demand Mgmt to SNOP &bull; Organizational Structure &bull; ABC Analysis.</li>
         <li><b>CODP Spectrum:</b> MTS (FG) &rarr; ATO/CTO (SFG/Components) &rarr; MTO (Raw Materials) &rarr; ETO (Design).</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 6: Plossl’s Theory of Manufacturing
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm6', title: 'Plossl’s Theory of Manufacturing', tlp: '3.0', signal: ['CORE', 'CONCEPTUAL', 'REVISION'],
  why: 'George Plossl\'s 12 principles occupy two full slides in Dr. Altekar\'s reading materials. They provide the fundamental operations management justification for why ERP planning and execution disciplines are non-negotiable.',
  obj: [
    'Memorize and interpret George Plossl\'s 12 Principles of Manufacturing verbatim',
    'Synthesize the 12 principles into four cohesive executive operational themes',
    'Leverage Plossl\'s doctrines to defend inventory reduction, lead-time control, and planning discipline'
  ],
  blocks: [
    { k: 'core', h: 'The Twelve Principles of Manufacturing (Verbatim Faculty Text)', html:
      `<p>{S} Faculty Reading Material 01 (Slides 12–13) reproduces George Plossl\'s classic manufacturing doctrines:</p>
       <ol class="cl plossl">
         <li>Production problems must and can be eliminated. They cannot be covered up successfully with cushions of inventory and time.</li>
         <li>Inventory is more of a liability than an asset, having real value only when it is flowing through operations or used to support them.</li>
         <li>Tolerating some downtime while striving to eliminate their causes is better than preventing idle time by manufacturing items not required immediately.</li>
         <li>More frequent and precise re-planning, such as computing daily, rather than weekly, does not make it more accurate.</li>
         <li>Re-planning is admitting failure; it\'s not a substitute for sound execution.</li>
         <li>Plans impossible to execute are worse than useless.</li>
         <li>Lead times cannot only be monitored and adjusted but can also be controlled.</li>
         <li>Reducing setup time is worth the effort.</li>
         <li>Planning defines resources needed to make what is planned; execution applies available resources to make what customers want now.</li>
         <li>Only resources requiring long periods for actions should be planned ahead; detailed plans should cover only very short horizons.</li>
         <li>There is one manufacturing planning and control system framework common to all types of manufacturing.</li>
         <li>All employees need continuous education.</li>
       </ol>
       <p class="src">Source: ${RM1}, Slides 12–13 ("Theory of Manufacturing").</p>` },

    { k: 'faculty', h: 'Faculty Terminology — Contextual Attribution', html:
      `<p>{S} Slide Heading: <i>"Theory of Manufacturing — Plossl in his theory of manufacturing:"</i></p>
       <p>{S} Spans exactly 12 numbered bullets across two consecutive slides in Reading Material 01.</p>
       <p class="src">Source: ${RM1}, Slides 12–13.</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Analysis: The Four Strategic Plossl Themes', html:
      `<p>{E} To utilize Plossl\'s 12 principles effectively in MBA examinations and executive decision-making, group them into <b>Four Cohesive Operational Themes</b>:</p>
       <table class="tbl">
         <tr><th>Theme</th><th>Governing Principles</th><th>In-Depth Operational & ERP Rationale</th></tr>
         <tr>
           <td><b>1. Inventory & Root Cause Discipline</b></td>
           <td>Principles 1, 2, 3</td>
           <td>Traditional management treats inventory on the balance sheet as an asset. Plossl exposes that unmoving inventory is an operational liability: it conceals machine breakdowns, poor supplier quality, and worker absenteeism like water concealing rocks in a river. Manufacturing unneeded parts merely to keep workers "busy" generates dead capital. ERP enforces flow visibility so underlying root causes are resolved rather than hidden.</td>
         </tr>
         <tr>
           <td><b>2. Planning Discipline vs. Flawless Execution</b></td>
           <td>Principles 4, 5, 6, 9, 10</td>
           <td>Re-planning every hour creates nervous MRP systems, confusing shop-floor operators. High-frequency re-planning admits that the execution engine is out of control. Furthermore, plans that ignore capacity constraints are "worse than useless" because they destroy plant credibility. Long-range plans must address bottleneck capacities; detailed shop scheduling must cover very short, frozen horizons.</td>
         </tr>
         <tr>
           <td><b>3. Lead Time & Setup Control</b></td>
           <td>Principles 7, 8</td>
           <td>Lead times are not exogenous constants dictated by nature; 90% of manufacturing lead time consists of queue and wait time. By applying SMED (Single-Minute Exchange of Die) setup reductions and automated ERP scheduling, lead times can be compressed and actively controlled.</td>
         </tr>
         <tr>
           <td><b>4. Unified Framework & People</b></td>
           <td>Principles 11, 12</td>
           <td>Whether manufacturing pharmaceuticals, airplanes, or processed foods, there is only <i>one universal manufacturing planning and control framework</i> (Demand &rarr; S&OP &rarr; MPS &rarr; MRP &rarr; PAC). Finally, technology achieves nothing without continuous human education.</td>
         </tr>
       </table>` },

    { k: 'visual', h: 'Visual Blueprint: Plossl\'s Flow & Friction Dynamics', svg: 'plosslFlow', cap: 'Original conceptual diagram illustrating Plossl\'s doctrine: Shrinking inventory cushions to expose and eradicate operational rocks.' },

    { k: 'example', h: 'Operational Case Study: Machine Downtime vs. Overproduction', html:
      `<p>{X} <b>Applying Principle 3:</b> A stamping press operator experiences frequent feeder jams. Under traditional metrics, the supervisor instructs the operator to stamp 10,000 unneeded brackets to keep machine utilization high. Under Plossl\'s ERP discipline, the line is stopped, maintenance performs root-cause analysis on the feeder mechanism, and zero unneeded inventory is produced. Machine reliability is permanently fixed.</p>` },

    { k: 'apply', h: 'Application: Citing Plossl in Strategy Charters', html:
      `<p>{E} In case answers (Q1), invoke Plossl Principle 1 and Principle 2 when defending inventory reductions. Cite Principle 6 (<i>"Plans impossible to execute are worse than useless"</i>) to justify why Rough-Cut Capacity Planning (RCCP) must validate the Master Production Schedule before shop orders are released.</p>` },

    { k: 'exam', h: 'Exam Strategy & MCQ Signals', html:
      `<p><b>Exam Angle:</b> Highly fertile ground for multiple-choice questions, conceptual short notes, and interview defense. Memorize the core keywords: <i>"liability than an asset"</i>, <i>"re-planning is admitting failure"</i>, <i>"lead times can be controlled"</i>, and <i>"continuous education"</i>.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Principle 4 does <b>not</b> state that an enterprise should never re-plan. It states that simply increasing the computational frequency (re-running MRP daily instead of weekly) will not correct flawed underlying data or poor execution discipline.</p>` },

    { k: 'check', q: 'Complete the Plossl quote: "Re-planning is admitting failure; it\'s not a substitute for..."', a: '"...sound execution." (Principle 5).' },

    { k: 'pyq', ids: ['2023-Q3', '2024-Q3', '2025-Q2'] },

    { k: 'summary', html:
      `<ul>
         <li><b>12 Principles &bull; 4 Themes:</b> Root Cause &bull; Planning Discipline &bull; Lead Time Control &bull; Unified Framework.</li>
         <li><b>Core Truth:</b> Inventory cushions hide problems; sound execution beats nervous re-planning.</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 7: Functional Modules & Closed-Loop Business Process View
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm7', title: 'Functional Modules & Business Process View', tlp: '4.0', signal: ['CORE', 'HIGH PRIORITY', 'PYQ', 'DIAGRAM', 'APPLICATION'],
  why: 'Functional modules, item control, phantom items, and automotive Master Production Scheduling represent three of the major non-case exam questions across 2023 and 2024. The Business Process View illustrates the actual closed-loop flow of ERP.',
  obj: [
    'Deconstruct the core functional module triad: Manufacturing, Distribution, and Financials',
    'Trace the complete closed-loop business process flow from Sales Order to General Ledger',
    'Master Item Control parameters, lot-sizing mechanics, and the technical definition of Phantom Items'
  ],
  blocks: [
    { k: 'core', h: 'Faculty Classification of Functional Modules', html:
      `<p>{S} Faculty Reading Material 02 (Slide 3) categorizes ERP into three primary functional module groups:</p>
       <ul>
         <li><b>1. Manufacturing:</b> Governs physical transformation, encompassing <b>Capacity Planning</b> (RCCP, CRP) and <b>Item Control</b> (BOM, Part Master, Lot Sizing).</li>
         <li><b>2. Distribution:</b> Governs outbound logistics, including Sales Order Processing, DRP, Warehouse Management, and Shipping.</li>
         <li><b>3. Financial:</b> Governs fiduciary accounting, including General Ledger, Accounts Receivable/Payable, Fixed Assets, and Costing.</li>
       </ul>
       <p class="src">Source: ${RM2}, Slide 3 ("ERP Modules").</p>` },

    { k: 'faculty', h: 'Faculty Terminology — Business Process View', html:
      `<p>{S} Reading Material 01 (Slide 14) displays the end-to-end <b>ERP Business Process View</b>, tracing the transactional linkages between:</p>
       <p>Customers &bull; Sales Order &bull; DRP &bull; Depots/Warehouses &bull; Production Planning &bull; <b>MPS</b> &bull; <b>MRP</b> &bull; BOM &bull; Routings &bull; Shop Floor &bull; Purchase Orders &bull; Suppliers &bull; Inventory Records &bull; Costing &bull; <b>General Ledger</b> &bull; Accounts Receivable/Payable &bull; Financial Statements.</p>
       <p class="src">Source: ${RM1}, Slide 14 ("ERP Business Process View").</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Analysis: The Closed-Loop Flow & Item Control', html:
      `<p>{E} <b>1. The End-to-End Closed-Loop Transactional Flow:</b></p>
       <ol class="cl">
         <li><i>Demand Capture:</i> A customer order is entered in the Distribution module, generating an immediate Available-to-Promise (ATP) inquiry.</li>
         <li><i>Master Scheduling (MPS):</i> Distribution Requirements Planning (DRP) and sales forecasts feed the Master Production Schedule, establishing planned build volumes.</li>
         <li><i>Material Requirements Planning (MRP):</i> The MPS explodes through multi-level Bills of Materials (BOM), subtracting on-hand inventory and open purchase orders to calculate net material requirements.</li>
         <li><i>Execution (Shop Floor & Purchasing):</i> MRP outputs split into Planned Shop Orders (for internal fabrication) and Purchase Requisitions (for external supplier components).</li>
         <li><i>Inventory & Financial Rollup:</i> When raw materials arrive, Goods Receipt creates a credit in Accounts Payable and debits raw material inventory. When shop orders complete, Finished Goods inventory is debited, WIP is cleared, and standard cost variances post directly to the <b>General Ledger</b>.</li>
       </ol>

       <p>{E} <b>2. Item Control Architecture:</b><br>
       Item Control is the central database governance engine defining SKU attributes: part numbers, descriptions, unit of measure, lead times, lot-sizing policies (Lot-for-Lot, EOQ), scrap factors, and inspection protocols.</p>

       <p>{E} <b>3. What is a Phantom Item?</b><br>
       A <b>Phantom Item</b> (Blow-Through or Transient Item) is a physical sub-assembly that exists temporarily during manufacturing but is <b>never placed into stock or inventoried</b>.
       <br>&bull; <i>ERP Behavior:</i> In the BOM, it is flagged as <code>Item Type = Phantom</code>. When MRP runs, it does not create planned orders or inventory records for the phantom item; it "blows straight through" it, planning its component parts directly.
       <br>&bull; <i>Why it is used:</i> It documents engineering structure without burdening warehouse staff with useless stock-in and stock-out accounting transactions.</p>` },

    { k: 'visual', h: 'Visual Blueprint: The Functional Module Triad', svg: 'moduleTriad', cap: 'Original diagram illustrating Manufacturing, Distribution, and Financials operating on a unified relational database.' },

    { k: 'visual', h: 'Visual Blueprint: Redrawn ERP Business Process View', svg: 'processView', cap: 'Cleanly redrawn from Faculty Slide 14, tracing the closed-loop flow from Sales Order to Financial Statements.' },

    { k: 'example', h: 'Concrete Industrial Example: Automotive Wiring Harness Sub-Assembly', html:
      `<p>{X} <b>Phantom Item in Vehicle Assembly:</b> An instrument cluster wiring harness is pre-assembled on a side bench and immediately installed into the vehicle cabin. Because it is never placed in a storage rack or boxed, treating it as an inventory item would require unnecessary material movements. Flagging it as a <b>Phantom Item</b> allows engineering to maintain the harness BOM while MRP orders the constituent wires and connectors directly.</p>` },

    { k: 'apply', h: 'Application: How Automotive OEMs Build MPS (2023 Q4)', html:
      `<p>{E} In an automotive enterprise, building an MPS in ERP requires a <b>Two-Level Master Scheduling Process</b>:</p>
       <ul>
         <li>Level 1: S&OP approves aggregate vehicle family volumes (e.g., 10,000 SUVs/month).</li>
         <li>Level 2: The ERP uses <i>Modular Planning BOMs</i> to calculate option percentages (e.g., 60% petrol, 40% diesel; 30% sunroof).</li>
         <li>Rough-Cut Capacity Planning (RCCP) validates stamping and paint line constraints before freezing the short-term schedule.</li>
       </ul>` },

    { k: 'exam', h: 'Exam Strategy & Recurring Trends', html:
      `<p><b>PYQ Intelligence:</b> Examined in 2023 Q2 (Functional Modules & Item Control, 10M), 2023 Q4 (Automobile MPS, 10M), and 2024 Q2 (Manufacturing Module & Phantom Item, 10M). Knowing the closed-loop process flow and phantom item mechanics secures full marks.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Do not confuse MPS with MRP. The Master Production Schedule plans end items and product families. Material Requirements Planning explodes component parts and raw materials.</p>` },

    { k: 'check', q: 'Why does an ERP system "blow through" a Phantom Item during MRP explosion?', a: 'Because a phantom item is a transient sub-assembly that is never physically stocked in inventory; blowing through it allows MRP to plan component requirements directly without generating artificial inventory stocking transactions.' },

    { k: 'pyq', ids: ['2023-Q2', '2023-Q4', '2024-Q2'] },

    { k: 'summary', html:
      `<ul>
         <li><b>Module Triad:</b> Manufacturing (Capacity, Item Control) &bull; Distribution &bull; Financials.</li>
         <li><b>Closed Loop:</b> Sales &rarr; MPS &rarr; MRP &rarr; Shop/Purchase &rarr; Inventory &rarr; General Ledger.</li>
         <li><b>Phantom Item:</b> Non-stocked sub-assembly; lead time = 0; MRP blows straight through to components.</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 8: ERP Market & Vendors
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm8', title: 'ERP Market & Vendors', tlp: '5.0', signal: ['REVISION', 'CONCEPTUAL'],
  why: 'TLP Topic 5.0 covers the commercial vendor landscape. Understanding vendor evaluation criteria prevents the fatal trap of assuming that ERP concepts change based on software brands.',
  obj: [
    'Identify major enterprise software vendors from faculty material (SAP, Oracle, Microsoft, Infor)',
    'Evaluate ERP vendors using Total Cost of Ownership (TCO) and functional fit criteria',
    'Debunk the myth that ERP concepts vary across software vendors'
  ],
  blocks: [
    { k: 'core', h: 'The Commercial Vendor Landscape', vendors: true },

    { k: 'faculty', h: 'Faculty Terminology — Vendor Myths', html:
      `<p>{S} Faculty Reading Material 02 (Slide 6) explicitly identifies two vendor-related fallacies:</p>
       <ul>
         <li><b>Myth #2:</b> <i>"There are different concepts of ERP based on ERP vendors."</i></li>
         <li><b>Myth #7:</b> <i>"ERP in India must be Indian ERP."</i></li>
       </ul>
       <p class="src">Source: ${RM2}, Slide 6 ("Myths").</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Explanation: Vendor Evaluation & Tier Classification', html:
      `<p>{E} <b>1. The Concept Transcends the Vendor:</b><br>
       Dr. Altekar\'s curriculum teaches that while user interfaces, database technologies, and marketing acronyms vary across commercial software packages, <b>the fundamental operational concept of ERP is universal</b>. Whether deploying SAP S/4HANA, Oracle Cloud ERP, Microsoft Dynamics 365, or Infor CloudSuite, every vendor implements the same core logic: 3-tier client-server architecture, single-point data entry, closed-loop MRP planning, and integrated general ledger postings.</p>

       <p>{E} <b>2. Enterprise Vendor Tiers:</b></p>
       <ul>
         <li><b>Tier-1 Global Vendors (SAP, Oracle):</b> Engineered for multi-national, multi-currency, multi-plant enterprises with highly complex regulatory requirements and massive transaction throughput. High licensing and implementation costs; deep industry-specific vertical templates.</li>
         <li><b>Tier-2 Mid-Market Vendors (Microsoft Dynamics 365, Infor, Epicor, IFS):</b> Geared toward mid-sized manufacturing and distribution firms. Lower implementation complexity, faster deployment cycles, and standard modular configurability.</li>
         <li><b>Tier-3 / Cloud & Open Source (Odoo, ERPNext, NetSuite):</b> Well-suited for rapidly growing small-to-medium businesses (SMBs) requiring rapid time-to-value with lower upfront capital expenditure.</li>
       </ul>

       <p>{E} <b>3. Total Cost of Ownership (TCO) Evaluation Framework:</b><br>
       Software licensing typically accounts for only 15–20% of an enterprise ERP budget. The remaining 80% comprises implementation consulting fees, data migration, infrastructure/hosting, change management training, and post-go-live maintenance.</p>` },

    { k: 'example', h: 'Vendor Selection Pitfall in Practice', html:
      `<p>{X} A mid-sized Indian auto-component supplier selects a low-cost, unproven local accounting package under the mistaken belief that "Indian manufacturing requires Indian software" (Myth #7). Two years later, when global OEMs demand automated EDI schedule sharing and AIAG quality serial traceability, the system collapses, forcing an expensive reimplementation of a proven Tier-1 platform.</p>` },

    { k: 'apply', h: 'Application: Addressing Vendor Selection in Strategy Charters', html:
      `<p>{E} In Q1 case reports, include a brief vendor-evaluation section. Advise protagonists (like Ms. Deepika or Ms. Aishwarya) to select software based on: 1) Industry vertical maturity (e.g., life-sciences validation or automotive EDI support), 2) Local partner implementation ecosystem, and 3) Long-term vendor product roadmaps, rather than sticker price alone.</p>` },

    { k: 'exam', h: 'Exam Strategy & Recurring Trends', html:
      `<p>Vendor questions are rarely asked in isolation but serve as valuable supporting arguments in compulsory case reports. Always highlight that the ERP concept is vendor-independent.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Do not confuse vendor-specific proprietary features with foundational ERP business logic. Master scheduling, lot sizing, and double-entry bookkeeping are identical across all valid ERP packages.</p>` },

    { k: 'check', q: 'True or False: According to the faculty myths list, ERP concepts differ depending on which software vendor is chosen.', a: 'False. It is explicitly categorized as a myth (Myth #2).' },

    { k: 'summary', html:
      `<ul>
         <li><b>Universal Core:</b> The ERP concept is vendor-independent.</li>
         <li><b>Tier Structure:</b> Tier-1 (SAP, Oracle) &bull; Tier-2 (Microsoft, Infor) &bull; Tier-3 (NetSuite, Odoo).</li>
         <li><b>Evaluation Rule:</b> TCO, industry fit, and implementation partner ecosystem beat software brand hype.</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 9: BPR & ERP Value Analysis
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm9', title: 'BPR & ERP Value Analysis', tlp: '6.0', signal: ['PYQ', 'CONCEPTUAL', 'HIGH PRIORITY'],
  why: 'Directly addresses the prominent 2025 examination question (Q3: "Comment on - BPR & ERP Chicken & egg paradox. What is to be done first? Why?"). Mastering this module enables you to construct an unassailable 10-mark analytical argument.',
  obj: [
    'Define Business Process Reengineering (BPR) and explain its symbiotic dependency on ERP',
    'Deconstruct the "Chicken & Egg Paradox" and analyze the fatal risks of both sequential extremes',
    'Defend the Dual-Loop Iterative Synthesis framework: Strategic BPR first, followed by software-guided refinement'
  ],
  blocks: [
    { k: 'core', h: 'The BPR & ERP Chicken-and-Egg Dilemma', html:
      `<p>{S} TLP Topic 6.0: <i>"BPR and ERP Value Analysis"</i>.</p>
       <p>{S} Implementation Methodology Blueprint: <b>The Consultant &mdash; BPR Focus</b>.</p>
       <p>{S} <b>The Classic Paradox Examined in 2025 Q3:</b></p>
       <blockquote>"Should an organization reengineer its business processes FIRST and then select/configure an ERP system to match those processes? OR should the organization implement an ERP system FIRST and let the software's built-in global best practices force the reengineering of its processes?"</blockquote>
       <p class="src">Source: TLP Topic 6.0; 2025 Exam Paper, Q3.</p>` },

    { k: 'faculty', h: 'Faculty Terminology — BPR & Implementation Truths', html:
      `<p>{S} <b>The Consultant's Role:</b> BPR Focus (Reading Material 02, Slide 9).</p>
       <p>{S} <b>The 3 Truths of ERP:</b> 1) Readiness Audit &bull; 2) Performance Measurement &bull; 3) Unavoidable.</p>
       <p class="src">Source: ${RM2}, Slides 7 & 9.</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Analysis: Resolving the Paradox', html:
      `<p>{E} <b>1. Deconstructing the Two Catastrophic Extremes:</b></p>
       <ul>
         <li><b>Extreme 1: Pure BPR in Total Isolation First:</b>
           <br>The organization hires management consultants who spend 18 months designing theoretical "perfect-world" processes on paper. When the ERP software is finally installed, the project team discovers that commercial off-the-shelf (COTS) software cannot execute these idiosyncratic workflows without massive custom programming. Customizing ERP code breaks software upgradeability, introduces bugs, inflates budgets by 300%, and negates the primary benefit of purchasing pre-built best practices.
         </li>
         <li><b>Extreme 2: Blind ERP Implementation Without Process Vision ("Paving the Cowpaths"):</b>
           <br>The enterprise purchases ERP software and simply automates its existing, broken, bureaucratic legacy processes. Automating an inefficient process merely makes bad decisions happen faster at higher operational cost. Conversely, blindly forcing an organization into generic software templates without strategic alignment destroys proprietary competitive differentiators (e.g., unique customer service touchpoints).
         </li>
       </ul>

       <p>{E} <b>2. The Strategic Resolution: The Dual-Loop Iterative Synthesis Framework:</b></p>
       <p>To score top marks, you must take a definitive stand and justify it: <b>High-Level Strategic Process Visioning & Hygiene MUST Precede ERP, followed by Software-Guided Process Refinement during implementation.</b></p>
       <ol class="cl">
         <li><b>Stage 1: Upstream Strategic BPR & Readiness Audit (Before Software Configuration):</b> Cleanse dirty legacy master data, eliminate redundant paper approvals, simplify reporting hierarchies, and distinguish <i>Commodity Processes</i> (Payroll, General Ledger) from <i>Differentiating Processes</i> (Proprietary manufacturing formulations, unique customer delivery channels).</li>
         <li><b>Stage 2: Software-Guided BPR via Gap Analysis (During Implementation):</b> Adopt the <b>"Vanilla Rule"</b>: Change the business process to match the standard ERP software workflow unless an overwhelming, quantified competitive advantage justifies custom code.</li>
       </ol>` },

    { k: 'visual', h: 'Visual Blueprint: The Dual-Loop Synthesis Model', svg: 'chickenEgg', cap: 'Original conceptual diagram illustrating Strategic BPR and ERP Software Alignment operating as an iterative, reinforcing loop.' },

    { k: 'example', h: 'Industrial Case Study: Procurement Reengineering in Chemicals', html:
      `<p>{X} A chemical manufacturer historically required 7 physical management signatures for purchase requisitions above ₹50,000. In Stage 1 BPR, leadership redesigns the policy: single-manager approval based on budget thresholds. In Stage 2 ERP configuration, the standard ERP three-way matching workflow (PO, Goods Receipt, Vendor Invoice) is implemented vanilla, reducing procurement cycle time from 18 days to 4 hours.</p>` },

    { k: 'apply', h: 'Application: Model Exam Structure for 2025 Q3', html:
      `<p>{E} Structure your 10-mark answer into two balanced halves:
       <br>&bull; <i>First 5 Marks:</i> Define BPR and ERP, analyze the chicken-and-egg paradox, and detail the severe risks of both extremes.
       <br>&bull; <i>Second 5 Marks:</i> Defend the Dual-Loop framework. Take a clear stand that strategic process vision must come first, followed by iterative alignment with ERP best practices.</p>` },

    { k: 'exam', h: 'Exam Strategy & Pitfalls', html:
      `<p><b>Common Pitfall:</b> Never write a non-committal answer stating "both are equally important so do whatever you want". Examiners reward candidates who take a firm, defensible managerial position backed by the Dual-Loop methodology.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Do not confuse BPR (radical process transformation) with minor continuous improvement (Kaizen) or mere software parameter configuration.</p>` },

    { k: 'check', q: 'In the faculty Implementation Methodology diagram, which role is specifically assigned the "BPR Focus"?', a: 'The Consultant (Reading Material 02, Slide 9).' },

    { k: 'pyq', ids: ['2025-Q3'] },

    { k: 'summary', html:
      `<ul>
         <li><b>Paradox:</b> BPR first (customization trap) vs ERP first (paving cowpaths).</li>
         <li><b>Resolution:</b> Dual-Loop: Strategic BPR & Readiness Audit first &rarr; Software-Guided BPR during Conference Room Pilots.</li>
         <li><b>Vanilla Rule:</b> Adapt processes to software standards unless proprietary competitive advantage is at stake.</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 10: ERP Implementation: Methodology, Approaches & Myths
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm10', title: 'ERP Implementation: Methodology, Approaches & Myths', tlp: '7.0', signal: ['CORE', 'HIGH PRIORITY', 'CASE STUDY', 'DIAGRAM'],
  why: 'Implementation methodology is an explicit, mandatory requirement in every single Q1 case report (2023, 2024, 2025). Mastering the 5 critical success factors, the 3 cutover approaches, and the 17 myths ensures you deliver comprehensive, executive-level answers.',
  obj: [
    'Reproduce and explain the faculty 5-factor Implementation Methodology framework',
    'Compare and evaluate the three primary cutover approaches: The Big Bang, Franchising, and Slam-Dunk',
    'Analyze the 17 ERP Myths and operationalize the 3 Truths of ERP'
  ],
  blocks: [
    { k: 'core', h: 'The Faculty Implementation Methodology Framework', html:
      `<p>{S} Faculty Reading Material 02 (Slide 9) models ERP implementation success as the harmonious alignment of <b>Five Interdependent Success Factors</b>:</p>
       <ul>
         <li><b>1. The Client &mdash; Industry Focus:</b> Deep domain expertise regarding industry-specific operating dynamics and market realities.</li>
         <li><b>2. The User &mdash; Culture Focus:</b> Managing workforce change, overcoming anxiety, and establishing employee ownership.</li>
         <li><b>3. The ERP Brand &mdash; Best Practice:</b> Pre-configured, globally proven business processes embedded into the software.</li>
         <li><b>4. The Consultant &mdash; BPR Focus:</b> Guiding process reengineering, system configuration, and technical knowledge transfer.</li>
         <li><b>5. The Methodology &mdash; Value Focus:</b> Structured phase-gate project governance focused on measurable business outcomes.</li>
       </ul>
       <p class="src">Source: ${RM2}, Slide 9 ("Implementation Methodology").</p>` },

    { k: 'faculty', h: 'Faculty Terminology — Approaches, 17 Myths & 3 Truths', html:
      `<p>{S} <b>The Three Implementation Approaches (Slide 10):</b> The Big Bang &bull; Franchising &bull; Slam-dunk.</p>
       <p>{S} <b>The 3 Truths of ERP (Slide 7):</b> Readiness Audit &bull; Performance Measurement &bull; Unavoidable.</p>
       <p>{S} <b>The 17 Myths of ERP (Slide 6, Verbatim):</b></p>
       <ol class="cl myths">
         <li>ERP is nothing but Everyday Reduction of Profit or Early Risky Proposition</li>
         <li>There are different concepts of ERP based on ERP vendors</li>
         <li>ERP is computerization project of the company</li>
         <li>ERP is software system</li>
         <li>ERP is advanced legacy system</li>
         <li>ERP modules are individually ERP solution</li>
         <li>ERP in India must be Indian ERP</li>
         <li>Customized ERP is ERP</li>
         <li>ERP is outdated now and ERP II is the right solution</li>
         <li>ERP is a downsizing tool</li>
         <li>ERP is applicable to only manufacturing setups and not for service sectors</li>
         <li>ERP is the panacea to all business problems</li>
         <li>ERP only supports transactional needs</li>
         <li>ERP is white elephant</li>
         <li>ERP is a fad and has already gone away</li>
         <li>More the number of ERP systems you have more the productivity you get</li>
         <li>ERP is not suitable to small scale companies due to costs and implementation time</li>
       </ol>
       <p class="src">Source: ${RM2}, Slides 6, 7 & 10.</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Analysis: Cutover Strategies & The 3 Truths', html:
      `<p>{E} <b>1. Comparative Analysis of Implementation Approaches:</b></p>
       <table class="tbl">
         <tr><th>Implementation Approach</th><th>Operational Mechanics</th><th>Key Advantages</th><th>Primary Risks & Best Fit</th></tr>
         <tr>
           <td><b>The Big Bang</b></td>
           <td>All business modules and physical operating sites cut over to the new ERP simultaneously on a single calendar date.</td>
           <td>Eliminates expensive temporary interfaces with legacy systems; shortest overall implementation duration; forces immediate corporate commitment.</td>
           <td><b>Extreme Catastrophic Risk:</b> A single critical data error halts shipping or factory operations across the entire company. Suitable only for small-to-medium single-site businesses.</td>
         </tr>
         <tr>
           <td><b>Franchising / Phased Pilot Rollout</b></td>
           <td>Core financials and a pilot operational unit (e.g., one manufacturing plant) go live first. The proven template is then "franchised" across remaining sites in successive waves.</td>
           <td>Severely limits enterprise operational risk; allows lessons learned in the pilot to refine subsequent rollouts; builds internal implementation competence.</td>
           <td>Requires temporary dual-entry or data bridges between old and new systems during rollout waves. <b>The recommended strategy for complex multi-plant enterprises.</b></td>
         </tr>
         <tr>
           <td><b>Slam-Dunk</b></td>
           <td>Rapid, out-of-the-box installation of standard core modules with near-zero software customization.</td>
           <td>Extremely low implementation cost, minimal consulting duration, very fast time-to-value.</td>
           <td>Forced conformity to generic workflows; unsuitable for large enterprises with complex, differentiating manufacturing or supply chain operations.</td>
         </tr>
       </table>

       <p>{E} <b>2. Operationalizing the Three Truths of ERP:</b></p>
       <ul>
         <li><b>Truth 1: Readiness Audit:</b> Before spending a single rupee on software licensing, the enterprise must audit its operational readiness: data accuracy (BOMs, routings, inventory counts &gt; 98%), IT network infrastructure, and workforce cultural readiness.</li>
         <li><b>Truth 2: Performance Measurement:</b> Executive leadership must establish quantifiable baseline metrics (Order-to-Cash lead time, inventory carrying days, OTIF delivery rate) and audit value realization post-go-live.</li>
         <li><b>Truth 3: Unavoidable Transformation:</b> Process integration is not an optional luxury. In a digital economy, enterprises running disconnected spreadsheets face inevitable competitive extinction.</li>
       </ul>` },

    { k: 'visual', h: 'Visual Blueprint: Redrawn Implementation Methodology Model', svg: 'implMethod', cap: 'Cleanly redrawn from Faculty Slide 9, illustrating the 5 critical success factors converging on project success.' },

    { k: 'example', h: 'Real-World Cutover Strategy: Prabha Automobiles', html:
      `<p>{X} In the 2024 case study, Ms. Aishwarya must select an approach for Prabha Automobiles. Choosing the Big Bang across all assembly plants and 200 dealerships would be suicidal; a minor glitch halts vehicle production costing crores per hour. The recommended approach is <b>Franchising</b>: implement core finance and pilot the automotive manufacturing module at the primary plant. Once stabilized, franchise the standard template to regional plants and dealer management portals.</p>` },

    { k: 'apply', h: 'Application: Mandatory Section in Every Q1 Strategy Report', html:
      `<p>{E} In every Q1 case report, construct the implementation section using a structured 4-step cadence:
       <br>1) <i>Readiness Gateway:</i> Execute a rigorous Readiness Audit (Truth 1).
       <br>2) <i>Governance Model:</i> Align the 5 critical factors (Client, User, Brand, Consultant, Methodology).
       <br>3) <i>Cutover Selection:</i> Formally evaluate Big Bang vs. Franchising vs. Slam-Dunk, explicitly justifying why Franchising is chosen.
       <br>4) <i>Value Dashboard:</i> Track ongoing operational KPIs (Truth 2).</p>` },

    { k: 'exam', h: 'Exam Strategy & Recurring Trends', html:
      `<p>Explicitly required in <b>all three examination years</b>. Memorizing the 17 myths allows you to quote relevant myths in case analyses to demonstrate mastery of faculty material.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Do not confuse <i>Implementation Methodology</i> (the 5 governing success factors) with the <i>Implementation Approach</i> (the cutover go-live strategy: Big Bang vs Franchising vs Slam-Dunk).</p>` },

    { k: 'check', q: 'What are the three implementation approaches listed on the faculty slide?', a: 'The Big Bang, Franchising, and Slam-dunk (Reading Material 02, Slide 10).' },

    { k: 'pyq', ids: ['2023-Q1', '2024-Q1', '2025-Q1'] },

    { k: 'summary', html:
      `<ul>
         <li><b>5 Methodology Factors:</b> Client (industry) &bull; User (culture) &bull; Brand (best practice) &bull; Consultant (BPR) &bull; Methodology (value).</li>
         <li><b>3 Cutover Approaches:</b> The Big Bang &bull; Franchising (phased pilot) &bull; Slam-dunk.</li>
         <li><b>3 Truths:</b> Readiness Audit &bull; Performance Measurement &bull; Unavoidable.</li>
       </ul>` }
  ]
},

/* ─────────────────────────────────────────────────────────────────────────
   MODULE 11: ERP Strategy Charter & Case Application
   ───────────────────────────────────────────────────────────────────────── */
{
  id: 'm11', title: 'ERP Strategy Charter & Case Application', tlp: '8.0', signal: ['CASE STUDY', 'APPLICATION', 'HIGH PRIORITY', 'PYQ'],
  why: 'TLP Topic 8.0 covers "ERP Case Studies". The three authentic examination papers feature compulsory Q1 case scenarios worth up to two-thirds of total exam marks. This module provides the universal MBA reporting framework to secure full marks.',
  obj: [
    'Master the Universal 6-Step MBA ERP Strategy Reporting Framework',
    'Map examination questions to Course Outcomes (CO1: Concepts, CO2: Strategy/Goals, CO3: Implementation/Value)',
    'Adapt the universal framework seamlessly across Pharmaceuticals (2023), Automobiles (2024), and Chemicals (2025)'
  ],
  blocks: [
    { k: 'core', h: 'The Recurring Compulsory Q1 Case Analysis', html:
      `<p>{S} Across all three examination papers, Question 1 is compulsory and presents a remarkably consistent structural challenge:</p>
       <ul>
         <li><b>2023 Paper (10 Marks):</b> Ms. Deepika, ERP Head, Pharmaceutical Company &mdash; plans to adopt ERP; believes ERP is more business strategy than IT strategy. Task: <i>Develop an ERP Strategy Charter</i>.</li>
         <li><b>2024 Paper (20 Marks):</b> Ms. Aishwarya, CIO & Head-ERP, Prabha Automobiles &mdash; implementing ERP; wonders how to adopt it as a customer-centric strategy rather than mere automation. Task: <i>Develop a report on ERP Strategy including goals and implementation method</i>.</li>
         <li><b>2025 Paper (20 Marks):</b> Ms. Vijaya Loki, CDO, LPU Ltd (Chemical Company) &mdash; seasoned Technical Architect; views ERP as technology intervention rather than growth management. Task: <i>Develop a report on ERP Strategy including goals and implementation method</i>.</li>
       </ul>
       <p class="src">Source: Authentic PYQ Examination Papers (2023, 2024, 2025).</p>` },

    { k: 'faculty', h: 'Faculty Terminology — Course Outcomes & Mark Allocation', html:
      `<p>{S} TLP Course Outcomes defining the academic evaluation rubrics:</p>
       <ul>
         <li><b>CO1 (Foundation / Models):</b> Apply ERP for integrating business functions and processes. (8 Marks in 2024/2025).</li>
         <li><b>CO2 (Strategy / Adoption / Goals):</b> Analyze ERP adoption, implementation strategies and business value. (6 Marks in 2024/2025).</li>
         <li><b>CO3 (BPR / Operations / Evaluation):</b> Evaluate reengineered business processes and ERP-enabled operations. (6 Marks in 2024/2025).</li>
       </ul>
       <p class="src">Source: TLP OPN 419, Course Outcomes.</p>` },

    { k: 'explain', h: 'Comprehensive In-Depth Analysis: The Universal 6-Step Strategy Framework', html:
      `<p>{E} To achieve maximum marks in any 10-mark or 20-mark case study, write your response as a professional executive report structured into <b>Six Concrete Sections</b>:</p>
       <ol class="cl">
         <li><b>Section 1: Executive Context & Strategic Reframe (CO1):</b> Address the protagonist directly (Deepika, Aishwarya, or Vijaya Loki). Reframe ERP from an isolated IT automation tool into a customer-centric business management strategy, citing the "Inseparability of IT and Business" (Faculty Statement 3) and debunking Myth #3 ("computerization project").</li>
         <li><b>Section 2: Conceptual & Architectural Foundation (CO1):</b> Map Dr. Altekar\'s <b>Five Pillars</b> directly to the case company\'s operating environment. Sketch the 5 Pillars diagram. Reinforce with the <b>5 Cs</b> (Complete, Connected, Cognitive, Compliant, Capable).</li>
         <li><b>Section 3: Strategic Enterprise Goals (CO2):</b> Formulate four quantified, multi-dimensional business goals spanning Customer Responsiveness (lead time), Financial Efficiency (working capital/inventory reduction), Operational Quality (scrap reduction), and Regulatory Compliance.</li>
         <li><b>Section 4: Operating Model & Best Practices (CO2):</b> Identify where the Customer Order Decoupling Point (CODP) should sit (transitioning from MTS to ATO/MTO). Detail the Sales & Operations Planning (S&OP) cadence and ABC inventory classification.</li>
         <li><b>Section 5: Implementation Methodology & Cutover Architecture (CO3):</b> Evaluate the 3 approaches (Big Bang vs Franchising vs Slam-Dunk). Justify why Franchising (phased pilot) is chosen. Detail the 5 critical factors (Client, User, Brand, Consultant, Methodology).</li>
         <li><b>Section 6: Governance, Risk Management & The 3 Truths (CO3):</b> Address cultural resistance. Institutionalize the <b>Three Truths</b>: Readiness Audit upfront, Performance Measurement dashboards, and the Unavoidable imperative.</li>
       </ol>` },

    { k: 'visual', h: 'Visual Blueprint: The Universal 6-Step Strategy Architecture', svg: 'charterFlow', cap: 'Original framework illustrating the 6-step reporting journey from Executive Context to Business Value Realization.' },

    { k: 'example', h: 'Industry-Specific Hooks to Customise the Universal Framework', html:
      `<table class="tbl">
         <tr><th>Industry Case</th><th>Protagonist & Role</th><th>Core Strategic Levers to Emphasize</th></tr>
         <tr>
           <td><b>Pharmaceuticals (2023)</b></td>
           <td>Ms. Deepika<br>ERP Head</td>
           <td>US FDA 21 CFR Part 11 electronic batch records (eBMR), full backward/forward API-to-patient batch traceability, FEFO inventory shelf-life allocation, and zero-defect regulatory compliance.</td>
         </tr>
         <tr>
           <td><b>Automobiles (2024)</b></td>
           <td>Ms. Aishwarya<br>CIO & Head-ERP</td>
           <td>Moving CODP to Assemble-to-Order (ATO), dealer management portal integration, two-level Master Production Scheduling (MPS) with modular planning BOMs, and Just-in-Time line-side part feeding.</td>
         </tr>
         <tr>
           <td><b>Chemicals (2025)</b></td>
           <td>Ms. Vijaya Loki<br>Chief Digital Officer</td>
           <td>Continuous-process recipe/formula management, potency scaling, variable yield variance tracking, hazardous materials transport manifests, tank farm telemetry, and rapid multi-site plant scalability.</td>
         </tr>
       </table>` },

    { k: 'apply', h: 'Application: Word and Time Budgeting in the Exam Hall', html:
      `<p>{E} For a 20-mark compulsory case in a 75-minute exam:</p>
       <ul>
         <li>Spend <b>40–45 minutes</b> on Question 1; budget <b>25–30 minutes</b> for the remaining optional questions.</li>
         <li>Allocate approximately 800–1,200 words across the six structured sections. Use clear subheadings, bullet points for lists, and draw at least two clean diagrams (The 5 Pillars and The Implementation Methodology).</li>
       </ul>` },

    { k: 'exam', h: 'Exam Strategy & Evaluation Keys', html:
      `<p>Examiners grade according to the Course Outcome rubric: 8 marks for conceptual/model depth (CO1), 6 marks for strategic goals and adoption methods (CO2), and 6 marks for implementation governance and value metrics (CO3). Structuring your answer along these exact lines ensures complete rubric coverage.</p>` },

    { k: 'confusion', h: 'Common Confusions', html:
      `<p>Never write generic essay paragraphs reciting generic software features. Always name the protagonist, refer to the specific company and industry, and present concrete, quantified operational strategies.</p>` },

    { k: 'check', q: 'What is the recommended cutover approach for large multi-plant enterprises like Prabha Automobiles or LPU Ltd?', a: 'Franchising (Phased Pilot Rollout) — implementing core financials and piloting at a primary plant before rolling out the proven template across remaining units.' },

    { k: 'pyq', ids: ['2023-Q1', '2024-Q1', '2025-Q1'] },

    { k: 'summary', html:
      `<ul>
         <li><b>6-Step Universal Report:</b> Reframe &rarr; 5 Pillars &rarr; Goals &rarr; Best Practices &rarr; Implementation &rarr; Truths.</li>
         <li><b>CO Alignment:</b> CO1 (8M) &bull; CO2 (6M) &bull; CO3 (6M) = 20 Marks.</li>
         <li><b>Execution Rule:</b> Tailor the hooks to the specific industry (Pharma, Auto, Chemical) for maximum score.</li>
       </ul>` }
  ]
}
];

/* ───────── PAPERS ───────── */
const papers = [
  { year: 2023, date: '11-10-2023', program: 'PGDM & RBA – Operations', batch: '2022-2024', trimester: 'IV', time: '3.30 pm to 4.45 pm', duration: '1 Hrs 15 Mins', code: '(blank on paper)', max: 30, instr: '1) Q.1 is compulsory. 2) Solve any TWO questions from the rest of the Questions.', note: 'Photo of paper (WhatsApp image). Course code field is blank.' },
  { year: 2024, date: '09-10-2024', program: 'PGDM R&BA', batch: '2023-2025', trimester: 'IV', time: 'Printed “9.30am to 9.45am” appears struck out and hand-corrected to “9:30 to 10:30 am”', duration: '1 Hrs. 15 Mins', code: 'OPN 419', max: 30, instr: '1) Q.1 is compulsory. 2) Solve any ONE question from the rest of the Questions.', note: 'Time field is handwritten/overwritten — OCR/reading uncertainty flagged.' },
  { year: 2025, date: '11-10-2025', program: 'PGDM/BD/RBA', batch: '2024-2026', trimester: 'IV', time: '08:30am to 09:45am', duration: '1.15 Hrs', code: 'OPN 419', max: 30, instr: '1) Q.1 is compulsory. 2) Solve any ONE question from the rest of the Questions.', note: 'End Term Examination. BL legend printed: 1 Remembering; 2 Understanding; 3 Applying; 4 Analysing; 5 Evaluating; 6 Creating.' }
];

const T = {
  STRAT: 'ERP strategy report / charter',
  CONC: 'Conceptual model (5 pillars)',
  ARCH: 'Architecture',
  MOD: 'Functional / manufacturing modules',
  ITEM: 'Item control / phantom item',
  MPS: 'MPS process',
  BP: 'Best practices family (best practices, ATO/MTO, SNOP, ABC)',
  BPR: 'BPR & ERP'
};

const pyqs = [
  { id: '2023-Q1', year: 2023, qno: 1, marks: 10, bl: 3, co: 'CO1/CO2/CO3 (4/3/3)', compulsory: true, type: 'Case / report', mods: ['m1', 'm3', 'm10', 'm11'], topics: ['STRAT'], diff: 'BL3 Applying',
    text: 'Ms. Deepika, ERP Head of a Pharmaceutical Company currently planning to adopt ERP. She thinks ERP is more as a business strategy than IT Strategy. Develop a ERP Strategy charter to help her.',
    think: ['Who is she and what does she believe? (business strategy > IT)', 'What belongs in a charter: vision, goals, scope, approach, governance, value', 'Pharma hooks: compliance, quality, batch tracking, 21 CFR Part 11'],
    frame: ['Context & Reframe (Business Strategy vs IT) — 2 Marks', 'Strategic Goals (Compliance, Traceability, Working Capital) — 2 Marks', 'Conceptual Model: 5 Pillars mapped to Pharma — 2 Marks', 'Implementation Methodology & Readiness Audit — 2 Marks', 'Value Realization, Governance & Metrics — 2 Marks'] },

  { id: '2023-Q2', year: 2023, qno: 2, marks: 10, bl: 3, co: 'CO2', type: 'Explain', mods: ['m7'], topics: ['MOD', 'ITEM'], diff: 'BL3 Applying',
    text: 'Explain different functional modules of ERP. What is application of Item Control?',
    think: ['Faculty module groups: Manufacturing / Distribution / Financial', 'What is item control and where is it applied? Lot sizing, classification, traceability'],
    frame: ['Functional Modules Overview (Manufacturing, Distribution, Financial) — 3 Marks', 'Manufacturing Module Deep-Dive (Capacity Planning & Item Control) — 3 Marks', 'Item Control Concept & Attributes — 2 Marks', 'Practical Applications (Traceability, ECM, Phantoms, ABC) — 2 Marks'] },

  { id: '2023-Q3', year: 2023, qno: 3, marks: 10, bl: 4, co: 'CO3', type: 'Analyse', mods: ['m3', 'm4'], topics: ['CONC', 'ARCH'], diff: 'BL4 Analysing', rep: 'conc-arch',
    text: 'Analyse the conceptual model and architectural aspects of ERP with examples.',
    think: ['Two halves: concept (5 pillars) + architecture (client-server 3-tier)', '“Analyse” means break down, relate, and illustrate with industrial examples'],
    frame: ['Conceptual Model: Five Pillars Analysis with Examples — 4 Marks', 'Architectural Aspects: 3-Tier Client-Server Breakdown — 4 Marks', 'Synthesis: How 3-Tier Architecture Physically Enables the 5 Pillars — 2 Marks'] },

  { id: '2023-Q4', year: 2023, qno: 4, marks: 10, bl: 3, co: 'CO2', type: 'Apply / explain', mods: ['m7', 'm5'], topics: ['MPS', 'MOD'], diff: 'BL3 Applying',
    text: 'How Automobile Industry builds MPS Process in ERP? Discuss with examples.',
    think: ['What is MPS and where does it sit between demand and MRP?', 'Automobile specifics: mass customization, variant explosion, planning BOMs, ATO, dealer orders'],
    frame: ['Definition & Decoupling Role of MPS — 2 Marks', 'Automotive Complexity & Core Planning Inputs — 3 Marks', 'Step-by-Step MPS Building Process in Automotive ERP — 4 Marks', 'Strategic Benefits & Bullwhip Dampening — 1 Mark'] },

  { id: '2024-Q1', year: 2024, qno: 1, marks: 20, bl: 3, co: 'CO1/CO2/CO3 (8/6/6)', compulsory: true, type: 'Case / report', mods: ['m1', 'm3', 'm5', 'm10', 'm11'], topics: ['STRAT'], diff: 'BL3 Applying',
    text: 'Ms. Aishwarya, CIO and Head-ERP of Prabha Automobiles currently implementing ERP. She is wondering how to adopt ERP as a customer centric strategy than just technological automation. Develop a report on ERP Strategy including goals and implementation method to help her.',
    think: ['Customer-centric strategy: Pillar 4 + CODP to ATO + dealer integration', 'Goals + implementation method are explicit asks', 'Budget 40-45 minutes and 1000+ words'],
    frame: ['Executive Context & Strategic Reframing (CO1) — 4 Marks', 'Activating the 5 Pillars & The 5 Cs for Customer Centricity (CO1/CO2) — 4 Marks', 'Strategic Enterprise Goals & Metric Targets (CO2) — 4 Marks', 'Implementation Methodology & Franchising Cutover (CO3) — 5 Marks', 'Risk Management, Debunking Myths & The 3 Truths (CO3) — 3 Marks'] },

  { id: '2024-Q2', year: 2024, qno: 2, marks: 10, bl: 3, co: 'CO2', type: 'Explain', mods: ['m7'], topics: ['MOD', 'ITEM'], diff: 'BL3 Applying',
    text: 'Explain briefly manufacturing module of ERP. What is Phantom Item?',
    think: ['“Briefly” – structured and authoritative', 'Manufacturing scope: Master data, MPS, MRP, PAC, Capacity', 'Phantom item = transient sub-assembly, BOM device, not stocked'],
    frame: ['Scope & Core Components of Manufacturing Module — 3 Marks', 'Capacity Planning vs Item Control Breakdown — 3 Marks', 'Phantom Item Concept & MRP Blow-Through Mechanics — 3 Marks', 'Concrete Automotive Harness Example — 1 Mark'] },

  { id: '2024-Q3', year: 2024, qno: 3, marks: 10, bl: 4, co: 'CO3', type: 'Analyse', mods: ['m3', 'm4'], topics: ['CONC', 'ARCH'], diff: 'BL4 Analysing', rep: 'conc-arch',
    text: 'Analyse the conceptual model and architectural aspects of ERP with examples.',
    think: ['Identical wording to 2023 Q3 — same high-scoring structure works', 'Use automotive OEM or electronics assembly consistently'],
    frame: ['Conceptual Model: Five Pillars Analysis with Examples — 4 Marks', 'Architectural Aspects: 3-Tier Client-Server Breakdown — 4 Marks', 'Synthesis: Industrial Application Example — 2 Marks'] },

  { id: '2024-Q4', year: 2024, qno: 4, marks: 10, bl: 3, co: 'CO2', type: 'Explain', mods: ['m5'], topics: ['BP'], diff: 'BL3 Applying',
    text: 'Explain ERP Best Practices with examples.',
    think: ['Faculty definition: 5 pillars → customer focus, minimal waste, value creation', 'Core themes: CODP, SNOP, org structure, ABC'],
    frame: ['Academic Definition & Triadic Foundation — 2 Marks', 'Core Theme 1: CODP Optimization & Examples — 2 Marks', 'Core Theme 2: Demand Management to S&OP — 2 Marks', 'Core Theme 3: Process-Based Flat Organizational Structure — 2 Marks', 'Core Theme 4: ABC Stratification & Inventory Control — 2 Marks'] },

  { id: '2025-Q1', year: 2025, qno: 1, marks: 20, bl: 3, co: 'CO1/CO2/CO3 (8/6/6)', compulsory: true, type: 'Case / report', mods: ['m1', 'm3', 'm5', 'm10', 'm11'], topics: ['STRAT'], diff: 'BL3 Applying',
    text: 'Ms. Vijaya Loki, newly appointed CDO of LPU Ltd, a renowned Chemical company in India, has an immediate charter of ERP implementation for growth support. Vijaya being a seasoned Technical Architect, is thinking ERP as a technology intervention and not quite clear on how it can lead to address organizational operations focusing on growth management. Develop a report on ERP Strategy including goals and implementation method to help her.',
    think: ['Technical Architect mindset: broaden to business growth engine', 'Chemical process hooks: recipes, potency scaling, yield tracking, tank farms, hazardous regulations', 'Budget 45 minutes and 1000+ words'],
    frame: ['Situational Analysis & The Growth Reframe (CO1) — 4 Marks', 'Adapting the 5 Pillars to Chemical Process Manufacturing (CO1/CO2) — 4 Marks', 'Strategic Growth Management Goals (CO2) — 4 Marks', 'Implementation Methodology & Phased Plant Rollout (CO3) — 5 Marks', 'Governance, Value Measurement & The 3 Truths (CO3) — 3 Marks'] },

  { id: '2025-Q2', year: 2025, qno: 2, marks: 10, bl: 3, co: 'CO4, CO6 (5/5)', type: 'Explain / apply', mods: ['m5'], topics: ['BP'], diff: 'BL3 Applying',
    text: 'How ERP adds value in an ATO & MTO scenario businesses?',
    think: ['Where is the CODP in ATO vs MTO?', 'Value mechanisms: modular BOMs, ATP/CTP, postponement, job costing, dynamic capacity'],
    frame: ['Theoretical Grounding: The CODP Spectrum — 2 Marks', 'How ERP Adds Value in Assemble-to-Order (ATO) — 3 Marks', 'How ERP Adds Value in Make-to-Order (MTO) — 3 Marks', 'Comparative Synthesis Matrix — 2 Marks'] },

  { id: '2025-Q3', year: 2025, qno: 3, marks: 10, bl: 4, co: 'CO3, CO5 (5/5)', type: 'Comment / argue', mods: ['m9', 'm10'], topics: ['BPR'], diff: 'BL4 Analysing',
    text: 'Comment on - BPR & ERP Chicken & egg paradox. What is to be done first? Why?',
    think: ['Explain the loop, analyze both extreme failure modes, commit to a first step and defend it', 'The Dual-Loop Iterative Synthesis Model'],
    frame: ['Deconstructing the BPR & ERP Paradox — 3 Marks', 'Analyzing the Severe Failure Modes of Both Extremes — 3 Marks', 'The Strategic Resolution: Dual-Loop Synthesis Model — 3 Marks', 'Implementation Conclusion — 1 Mark'] },

  { id: '2025-Q4', year: 2025, qno: 4, marks: 10, bl: 3, co: 'CO5, CO6 (5/5)', type: 'Explain', mods: ['m5'], topics: ['BP'], diff: 'BL3 Applying',
    text: 'Explain SNOP and ABC Concepts of ERP with examples.',
    think: ['Expand SNOP: 5-step monthly cadence, business plan to MPS', 'Explain ABC: Pareto principle, Class A, B, C inventory policies', 'Give distinct automotive or FMCG examples for each'],
    frame: ['Part 1: Sales & Operations Planning (S&OP) in ERP (5 Steps & Example) — 5 Marks', 'Part 2: ABC Analysis in ERP Inventory Control (Classes & Example) — 5 Marks'] }
];

// Attach full MBA model answers to all PYQs
pyqs.forEach(p => {
  if (pyqAnswers[p.id]) {
    p.answerHtml = pyqAnswers[p.id];
  }
});

/* ───────── MCQs (30 Items) ───────── */
const mcqs = [
  { q: 'According to the faculty “Concepts” slide, which statement best captures ERP as a philosophy?', o: ['A planning methodology based on seamless integration of all business processes', 'A set of programming standards for developers', 'A standalone inventory-counting tool', 'A cost-accounting convention'], a: 0, lvl: 'easy', type: 'conceptual', mod: 'm1', e: 'Statement 1 of the faculty slide describes ERP as a planning methodology or philosophy based on seamless integration of all business processes.' },
  { q: 'In an integrated (not merely connected) system, common decision-making is…', o: ['A matter of individual choice', 'Done by the system', 'Delegated to vendors', 'Not required'], a: 1, lvl: 'easy', type: 'conceptual', mod: 'm2', e: 'Faculty: Connected → common decision-making is choice; Integrated → common decision-making is done by the system.' },
  { q: 'Which is the correct order of evolution on the faculty slide?', o: ['MRP → SIC → MRP-II → ERP → SCM → E-ERP', 'SIC → MRP → MRP-II → ERP → E-ERP → SCM', 'ERP → MRP → MRP-II → SIC → E-ERP → SCM', 'SIC → MRP-II → MRP → ERP → SCM → E-ERP'], a: 1, lvl: 'easy', type: 'conceptual', mod: 'm2', e: 'Scientific Inventory Control → MRP → MRP-II → ERP → E-ERP → SCM.' },
  { q: 'On the faculty value matrix, which pairing is correct?', o: ['’80 – customer focus – ERP', '’90 – customer focus – MRP-II', '’70 – service focus – MRP', '2K – cost reduction – SIC'], a: 1, lvl: 'medium', type: 'visual', mod: 'm2', e: 'Matrix: ’70 production/SIC, ’80 cost reduction/MRP, ’90 customer/MRP-II, 2K service/ERP.' },
  { q: 'Which is NOT one of the five pillars of the faculty conceptual model?', o: ['Empowered employees', 'Customer and supplier integration', 'Strict functional silos', 'Sophisticated IT systems'], a: 2, lvl: 'easy', type: 'conceptual', mod: 'm3', e: 'The pillars include a process-based FLAT organisation — silos are the opposite.' },
  { q: 'In the 5 Cs of ERP, “Integrated = internal, Connected = external” belongs to which C?', o: ['Complete', 'Cognitive', 'Connected', 'Capable'], a: 2, lvl: 'medium', type: 'conceptual', mod: 'm3', e: 'Faculty slide 4: Connected — Integrated = internal; Connected = external.' },
  { q: 'Which C refers to GMPs and SOPs on the faculty slide?', o: ['Compliant', 'Complete', 'Capable', 'Cognitive'], a: 0, lvl: 'medium', type: 'conceptual', mod: 'm3', e: 'Compliant: legal / best practices / GMPs / SOPs.' },
  { q: 'The “Cognitive” C is described as…', o: ['Speed and volume handling', 'Pattern detection for failures', 'Legal compliance', 'Business processes coverage'], a: 1, lvl: 'medium', type: 'conceptual', mod: 'm3', e: 'Cognitive — pattern detection for failures.' },
  { q: 'Which component is the base on which the drivers sit in the faculty architecture slide?', o: ['RDBMS', 'Repository', 'Operating System (Unix, NT)', 'Logic Server'], a: 2, lvl: 'easy', type: 'visual', mod: 'm4', e: 'The OS bar underlies GUI driver, logic server and DB driver.' },
  { q: 'A firm separates presentation, business logic and database into distinct layers. This is best described as…', o: ['Single-tier', '3-tier client-server', 'Flat file system', 'Peer-to-peer file sharing'], a: 1, lvl: 'medium', type: 'application', mod: 'm4', e: 'Three separate layers = 3-tier client-server (study explanation of the faculty “2/3/n tier”).' },
  { q: 'Which module group does the faculty slide list Capacity Planning and Item Control under?', o: ['Distribution', 'Financial', 'Manufacturing', 'Human resources'], a: 2, lvl: 'easy', type: 'conceptual', mod: 'm7', e: 'Faculty “ERP Modules” slide: Manufacturing → Capacity Planning, Item Control.' },
  { q: 'On the process-view figure, MPS feeds directly into…', o: ['General Ledger', 'MRP', 'Bank', 'Budgets'], a: 1, lvl: 'medium', type: 'visual', mod: 'm7', e: 'The faculty business-process view shows MPS → MRP.' },
  { q: 'A sub-assembly appears in the BOM but is never stocked, and MRP explodes straight through it. This is a…', o: ['Phantom item', 'Class A item', 'Safety-stock item', 'Finished good'], a: 0, lvl: 'medium', type: 'scenario', mod: 'm7', e: 'Phantom item (general ERP knowledge; not defined on supplied slides).' },
  { q: 'Best practice in the faculty definition uses the 5 pillars to generate…', o: ['Customer focus, minimal waste, value creation', 'Profit, headcount, reach', 'Lowest price only', 'Technology upgrades'], a: 0, lvl: 'easy', type: 'conceptual', mod: 'm5', e: 'Faculty slide 10: customer focus; minimal waste of resources; value creation.' },
  { q: 'In CODP, which scenario has its decoupling point nearest the customer (at FG)?', o: ['ETO', 'MTO', 'ATO/CTO', 'MTS'], a: 3, lvl: 'medium', type: 'visual', mod: 'm5', e: 'Faculty board: MTS circle at FG; ETO at the far manufacturer end.' },
  { q: 'A carmaker stocks engines to forecast but finishes each car to dealer orders. Its CODP is closest to…', o: ['Raw material', 'Semi-finished goods / components', 'Finished goods', 'Not defined'], a: 1, lvl: 'hard', type: 'scenario', mod: 'm5', e: 'Assemble/configure-to-order places the CODP at components/SFG: forecast-driven upstream, order-driven final assembly.' },
  { q: 'SNOP, as listed under “Demand Management to SNOP”, is generally expanded as…', o: ['Sales & Operations Planning', 'Standard Network Operating Procedure', 'Supplier Notification of Purchase', 'Systems & Network Planning'], a: 0, lvl: 'medium', type: 'conceptual', mod: 'm5', e: 'Expansion is not on the slide; S&OP is the standard reading in ERP planning.' },
  { q: 'ABC analysis (as normally read in ERP inventory context) gives tightest control to…', o: ['Many low-value items', 'A few high-value items', 'Items beginning with A', 'Only finished goods'], a: 1, lvl: 'medium', type: 'application', mod: 'm5', e: 'A items = few, high value → tight control.' },
  { q: 'Plossl says inventory is more of a…', o: ['Asset than a liability', 'Liability than an asset', 'Marketing tool', 'Tax shield'], a: 1, lvl: 'easy', type: 'conceptual', mod: 'm6', e: 'Principle 2: inventory is more of a liability than an asset.' },
  { q: 'According to Plossl, re-planning is…', o: ['A sign of agility', 'Admitting failure; not a substitute for sound execution', 'Required daily', 'Free of cost'], a: 1, lvl: 'medium', type: 'conceptual', mod: 'm6', e: 'Principle 5.' },
  { q: 'Which Plossl principle says to plan far ahead only the resources that need long periods for action?', o: ['Reducing set-up time is worth the effort', 'Only resources requiring long periods should be planned ahead; detailed plans only short horizons', 'All employees need continuous education', 'Plans impossible to execute are useless'], a: 1, lvl: 'hard', type: 'conceptual', mod: 'm6', e: 'Principle 10.' },
  { q: 'A plant manager keeps extra stock to hide frequent machine breakdowns. Which Plossl principle is violated?', o: ['Production problems must and can be eliminated, not covered with inventory cushions', 'One MP&C framework fits all', 'Continuous education', 'Daily re-planning is better'], a: 0, lvl: 'hard', type: 'scenario', mod: 'm6', e: 'Principle 1.' },
  { q: 'Which is listed on the faculty slide as an ERP implementation approach?', o: ['Franchising', 'Outsourcing', 'Waterfall only', 'Crowdsourcing'], a: 0, lvl: 'easy', type: 'conceptual', mod: 'm10', e: 'Big Bang, Franchising, Slam-dunk.' },
  { q: 'In the faculty implementation-methodology diagram, “The User” is tied to which focus?', o: ['Value focus', 'Culture focus', 'BPR focus', 'Industry focus'], a: 1, lvl: 'medium', type: 'visual', mod: 'm10', e: 'The User → Culture focus. Client → industry; Consultant → BPR; Methodology → value; ERP brand → best practice.' },
  { q: 'Which statement is listed among the faculty ERP myths?', o: ['ERP is software system', 'ERP integrates business processes', 'A readiness audit is useful', 'ERP supports performance measurement'], a: 0, lvl: 'medium', type: 'conceptual', mod: 'm10', e: 'The myth list includes “ERP is software system”.' },
  { q: 'The faculty “Truth” slide lists…', o: ['Readiness audit, performance measurement, unavoidable', 'Cost, time, scope', 'Plan, do, check', 'Big bang, franchising, slam-dunk'], a: 0, lvl: 'medium', type: 'conceptual', mod: 'm10', e: 'Readiness Audit; Performance Measurement; Unavoidable.' },
  { q: 'A CIO calls ERP “just technological automation”. The best strategic counter-argument is…', o: ['Agree; ERP is IT', 'ERP integrates processes and decisions to deliver customer-centric business outcomes, with IT as enabler', 'Buy the cheapest vendor', 'Delay until the legacy system fails'], a: 1, lvl: 'medium', type: 'scenario', mod: 'm11', e: 'This is the recurring Q1 argument across all three examination papers.' },
  { q: 'In the 2024 and 2025 Q1 cases (20 marks, CO 8/6/6), how many marks map to CO1?', o: ['6', '8', '10', '20'], a: 1, lvl: 'easy', type: 'calculation', mod: 'm11', e: 'CO1 = 8, CO2 = 6, CO3 = 6 → 20 Marks total.' },
  { q: 'A 2023-style paper: Q1 compulsory (10) + any two of three 10-mark questions. Maximum marks attainable?', o: ['20', '30', '40', '50'], a: 1, lvl: 'medium', type: 'calculation', mod: 'm11', e: '10 + 10 + 10 = 30 (Max Marks: 30).' },
  { q: 'A firm must choose between redesigning processes first or configuring ERP first. A defensible faculty-aligned answer is…', o: ['Never reengineer', 'Do vision-level BPR and readiness audit first, then iterate with ERP best practices', 'Install ERP and ignore processes', 'Hire more staff'], a: 1, lvl: 'hard', type: 'scenario', mod: 'm9', e: 'Dual-Loop framework: strategic BPR first, software alignment during implementation.' }
];

/* ───────── Last-Minute 4-Phase Revision Plan ───────── */
const phases = [
  { id: 'p7', t: '7 days before', sub: 'Understand the Course', items: ['Read M1–M5 once; open every native SVG diagram', 'Redraw from memory: System Types, Value Matrix, Five Pillars, 3-Tier Architecture, CODP', 'Read all 12 PYQ questions (Archive) and study the pattern analysis', 'Attempt 2025 Q1 untimed using the 6-step strategy framework'] },
  { id: 'p3', t: '3 days before', sub: 'Revise Core Concepts', items: ['Turn on Revision Mode; review highlighted definitions and distinctions', 'Plossl 12 Principles — rehearse the 4 thematic groupings aloud', 'M7 Closed-Loop Process View: trace Sales Order &rarr; MPS &rarr; MRP &rarr; General Ledger from memory', 'Attempt the 30-Question MCQ test; retry weak topics; review model answers for 2023 and 2024 Q1'] },
  { id: 'n1', t: 'Night before', sub: 'High-Priority Synthesis', items: ['Rehearse the Universal 6-Step Strategy Charter skeleton', '5 Pillars &bull; 5 Cs &bull; 3 System Types &bull; 6-Stage Evolution continuum', 'CODP rows: MTS (FG) &bull; ATO/CTO (SFG) &bull; MTO (RM) &bull; ETO (Design)', '3 Approaches (Big Bang, Franchising, Slam-Dunk) &bull; 5 Methodology Factors &bull; 3 Truths', 'Re-read the model answers for the 3 cases; get 8 hours of sleep'] },
  { id: 'm0', t: 'Exam morning', sub: 'Last-Minute Recall', items: ['Read the "Last-Minute Revision Card" only', 'Q1 Strategy Trap: Immediately widen "technology" to "business strategy", state 4 goals, and justify Franchising', 'Pick non-case questions where you can draw clean SVG-derived diagrams', 'Explicitly cite protagonist name and industry in every case answer'] }
];

/* ───────── Source Inventory & Audit Log ───────── */
const sources = [
  { f: 'COURSE_OUTLINE_PDF2026-09-30_20_37_31.pdf', t: 'Teaching-Learning Plan (TLP)', n: 'Digital PDF; WeSchool Term IV; OPN 419; Topics 1.0–8.0; CO1–CO3; batch 2025–2027.' },
  { f: 'Reading_Materials_01.pdf', t: 'Faculty Slide Deck 1 (15 pp)', n: 'Digital presentation with whiteboard photos; Dr. Rahul V. Altekar; System Types, Concepts, Evolution, Architecture, 5 Pillars, Value Matrix, Best Practices, CODP, Plossl Theory (12 principles), Process View.' },
  { f: 'Reading_Materials_02.pdf', t: 'Faculty Slide Deck 2 (10 pp)', n: 'Digital presentation; Dr. Rahul V. Altekar; Vendors, Modules (Mfg, Dist, Fin), 5 Cs, Myths (17 items), Truths (3 items), Implementation Methodology (5 factors), Approaches (3 items).' },
  { f: 'WhatsApp Image … 5.10.58 / 5.10.59 / 5.11.00 PM.jpeg', t: 'Authentic PYQ Photos (2023, 2024, 2025)', n: 'High-resolution photographs of authentic End-Term examination papers; read and verified directly; all 12 questions transcribed verbatim.' }
];

const ambiguities = [
  'TLP batch is 2025-2027; PYQs cover batches 2022-2024, 2023-2025, 2024-2026.',
  '2023 paper: course code blank. 2024 paper: time field overwritten by hand (“9:30 to 10:30 am” vs printed 9.30–9.45) — flagged.',
  'Value matrix whiteboard: “HCP ?”, “Q”, “D”, “FPS/TPS/DPS” not spelled out on board — interpreted cautiously with explicit disclaimers.',
  'Pancanga (Slide 8, RM2): heading and graphic only, no text provided — recorded as faculty heading without inventing unstated points.'
];

const vendors = [
  'SAP', 'Oracle', 'Microsoft Dynamics', 'Infor', 'Epicor', 'IFS',
  'Ramco', 'Tally', 'BaaN', 'QAD', 'Sage', 'Syspro'
];

const myths = [
  'ERP is nothing but Everyday Reduction of Profit or Early Risky Proposition',
  'There are different concepts of ERP based on ERP vendors',
  'ERP is computerization project of the company',
  'ERP is software system',
  'ERP is advanced legacy system',
  'ERP modules are individually ERP solution',
  'ERP in India must be Indian ERP',
  'Customized ERP is ERP',
  'ERP is outdated now and ERP II is the right solution',
  'ERP is a downsizing tool',
  'ERP is applicable to only manufacturing setups and not for service sectors',
  'ERP is the panacea to all business problems',
  'ERP only supports transactional needs',
  'ERP is white elephant',
  'ERP is a fad and has already gone away',
  'More the number of ERP systems you have more the productivity you get',
  'ERP is not suitable to small scale companies due to costs and implementation time'
];

module.exports = {
  modules,
  papers,
  pyqs,
  mcqs,
  phases,
  sources,
  ambiguities,
  vendors,
  myths,
  T,
  DG: D
};

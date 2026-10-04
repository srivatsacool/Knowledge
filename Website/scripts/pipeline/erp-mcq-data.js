/**
 * Brain Knowledge Hub — ERP Business Applications Comprehensive 30-Question Assessment
 * Mapped to Altekar/Ptak MBA Curriculum & 18 Exam FAQs
 * Cognitive Levels: Recall (7), Understanding (9), Application (7), Analysis (7)
 * Difficulty: Easy (8), Moderate (14), Difficult (8)
 */

const erpQuizQuestions = [
  {
    id: 1,
    modId: "sec-fundamentals",
    modTitle: "01. ERP Fundamentals & Strategy",
    level: "Understanding",
    diff: "Easy",
    text: "In enterprise management, why is ERP fundamentally categorized as a 'Business Strategy enabled by Technology' rather than merely an IT software package?",
    options: [
      "Because ERP software is purchased exclusively out of the corporate IT budget without requiring C-suite approval",
      "Because it mandates cross-functional business process reengineering (BPR) and organizational realignment to unlock competitive value, whereas technology is merely the executing conduit",
      "Because ERP systems do not require databases or servers to execute transactional workflows",
      "Because ERP eliminates all managerial decision-making by replacing human executives with automated heuristics"
    ],
    correct: 1,
    explanation: "Altekar and Davenport emphasize that ERP is a strategic transformation. Without aligning business processes, cross-functional ownership, and corporate strategy, installing software merely automates legacy inefficiencies ('paving the cowpath')."
  },
  {
    id: 2,
    modId: "sec-fundamentals",
    modTitle: "01. ERP Fundamentals & Strategy",
    level: "Recall",
    diff: "Easy",
    text: "Which core architectural characteristic primarily eliminates data duplication and 'islands of information' across enterprise departments?",
    options: [
      "Decentralized spreadsheets managed independently by departmental managers",
      "A single, centralized relational database providing a single version of the truth",
      "Batch processing scripts executed overnight between standalone silo databases",
      "Manual data reconciliation protocols managed by external audit consultants"
    ],
    correct: 1,
    explanation: "The central hallmark of ERP is a unified, single database repository that guarantees real-time data integrity across all business functions simultaneously."
  },
  {
    id: 3,
    modId: "sec-evolution",
    modTitle: "02. Historical Evolution",
    level: "Recall",
    diff: "Easy",
    text: "What was the chronological sequence of manufacturing and enterprise planning systems from the 1960s to the 2000s?",
    options: [
      "ERP → MRP II → ROP → MRP I → ERP II",
      "ROP (Reorder Point) → MRP (Material Requirements Planning) → MRP II (Manufacturing Resource Planning) → ERP → ERP II (Extended SCM/CRM)",
      "MRP II → ROP → ERP → Extended SCM → MRP I",
      "MRP I → ERP → ROP → MRP II → ERP II"
    ],
    correct: 1,
    explanation: "Historical evolution progressed from statistical Reorder Point (1960s) → Material Requirements Planning (1970s) → Closed-loop MRP II with financial integration (1980s) → Enterprise Resource Planning (1990s) → Extended ERP II with web-enabled SCM/CRM (2000s)."
  },
  {
    id: 4,
    modId: "sec-evolution",
    modTitle: "02. Historical Evolution",
    level: "Analysis",
    diff: "Moderate",
    text: "What critical limitation of traditional MRP I (1970s) led directly to the development of MRP II (1980s)?",
    options: [
      "MRP I lacked support for multi-currency transactions in European banks",
      "MRP I assumed infinite plant capacity and excluded labor, machines, shop-floor feedback, and financial accounting",
      "MRP I could only calculate bills of materials for service-sector enterprises",
      "MRP I required web browsers and cloud connectivity which did not exist in the 1970s"
    ],
    correct: 1,
    explanation: "MRP I calculated gross-to-net material requirements under the unrealistic assumption of infinite machine and labor capacity. MRP II introduced Rough-Cut Capacity Planning (RCCP), Capacity Requirements Planning (CRP), shop-floor control, and financial integration."
  },
  {
    id: 5,
    modId: "sec-architecture",
    modTitle: "03. 3-Tier Architecture Selection",
    level: "Understanding",
    diff: "Easy",
    text: "In a standard 3-Tier ERP client/server architecture, which tier is responsible for executing business rules, calculation algorithms, and workflow validations?",
    options: [
      "Presentation Tier (Client GUI)",
      "Application / Logic Tier",
      "Database Tier (RDBMS)",
      "Network Operating System Tier"
    ],
    correct: 1,
    explanation: "The Application Tier hosts business logic, workflow rules, MRP calculations, and authorization algorithms, separating UI rendering (Presentation Tier) from persistent data storage (Database Tier)."
  },
  {
    id: 6,
    modId: "sec-architecture",
    modTitle: "03. 3-Tier Architecture Selection",
    level: "Analysis",
    diff: "Difficult",
    text: "Why did 3-tier client/server architecture replace legacy 2-tier client/server architectures in enterprise ERP deployments?",
    options: [
      "2-tier architectures required expensive mainframe terminals that could not render colors",
      "In 2-tier 'fat client' systems, business logic lived on client desktops, causing severe database connection saturation, high network traffic, and nightmare version upgrades across thousands of PCs",
      "3-tier architecture eliminates the need for database storage by holding all enterprise records in client memory",
      "2-tier systems prevented users from printing purchase orders directly to network printers"
    ],
    correct: 1,
    explanation: "In 2-tier systems, the client PC ran the application logic, causing massive network bandwidth consumption and maintenance headaches. 3-tier decouples application logic to dedicated app servers, providing linear horizontal scalability and centralized maintenance."
  },
  {
    id: 7,
    modId: "sec-pillars",
    modTitle: "04. Five Pillars & Best Practices",
    level: "Recall",
    diff: "Moderate",
    text: "Which set accurately identifies the Five Foundational Pillars of ERP implementation and enterprise governance?",
    options: [
      "Servers, Operating Systems, Hard Drives, Routers, and Monitored Firewalls",
      "Process, People (Culture & Training), Technology (Architecture), Data (Master & Transactional), and Governance (Steering & Change Control)",
      "Marketing, Sales, Public Relations, Advertising, and Branding Campaigns",
      "Procurement, Assembly, Warehousing, Distribution, and Retail Shelving"
    ],
    correct: 1,
    explanation: "The 5 pillars (Process, People, Technology, Data, Governance) ensure that enterprise systems balance human adoption, clean data, robust architecture, standardized workflows, and leadership control."
  },
  {
    id: 8,
    modId: "sec-pillars",
    modTitle: "04. Five Pillars & Best Practices",
    level: "Analysis",
    diff: "Difficult",
    text: "When adopting ERP 'Best Practices', how should an organization distinguish between generic processes and core competencies?",
    options: [
      "Customize the ERP software for 100% of all processes to guarantee total operational uniqueness",
      "Adopt standardized ERP best practices for non-differentiating operational hygiene (e.g. Accounts Payable, General Ledger), while preserving and isolating custom workflows only where genuine competitive advantage exists",
      "Never adopt ERP best practices because they are designed solely by software vendors with no industry relevance",
      "Outsource all business processes to third-party offshore contractors without implementing an internal ERP system"
    ],
    correct: 1,
    explanation: "Standardizing generic processes (P2P, AP, Payroll) reduces cost and implementation risk, while preserving customization only for distinctive, proprietary business capabilities that deliver customer differentiation."
  },
  {
    id: 9,
    modId: "sec-modules",
    modTitle: "05. Functional Modules & KPIs",
    level: "Application",
    diff: "Moderate",
    text: "Which cross-functional KPI measures the exact percentage of customer orders delivered with the correct SKU, full quantity, on schedule, and with accurate documentation?",
    options: [
      "Days Sales Outstanding (DSO)",
      "On-Time In-Full (OTIF) / Perfect Order Index",
      "Overall Equipment Effectiveness (OEE)",
      "Economic Order Quantity (EOQ)"
    ],
    correct: 1,
    explanation: "OTIF (On-Time In-Full) is the quintessential cross-functional ERP KPI, spanning Sales (order accuracy), Production (schedule adherence), Logistics (timely delivery), and Finance (accurate billing)."
  },
  {
    id: 10,
    modId: "sec-modules",
    modTitle: "05. Functional Modules & KPIs",
    level: "Understanding",
    diff: "Easy",
    text: "In an integrated ERP environment, what automatic accounting event occurs immediately upon posting a Goods Receipt (GRN) for raw materials?",
    options: [
      "Cash is immediately deducted from the company bank account via automatic wire transfer",
      "Inventory Account is debited (increasing asset value) and Goods Receipt/Invoice Receipt (GR/IR) clearing account is credited",
      "Accounts Receivable is credited and Sales Revenue is debited",
      "The general ledger remains untouched until the vendor mails a paper invoice 30 days later"
    ],
    correct: 1,
    explanation: "Upon GRN posting, ERP updates inventory valuation in real time: Dr Inventory (Asset), Cr GR/IR Clearing Account (temporary liability pending invoice verification)."
  },
  {
    id: 11,
    modId: "sec-p2p",
    modTitle: "06. Procure-to-Pay (P2P) & 3-Way Match",
    level: "Recall",
    diff: "Moderate",
    text: "What is the standard, chronological sequence of transactional documents in the Procure-to-Pay (P2P) cycle?",
    options: [
      "Payment Execution → Purchase Order → Goods Receipt → Purchase Requisition",
      "Purchase Requisition (PR) → Purchase Order (PO) → Goods Receipt (GRN) → Invoice Verification (3-Way Match) → Vendor Payment",
      "Vendor Invoice → Purchase Requisition → Vendor Selection → Inventory Release",
      "Goods Receipt → Vendor Payment → Purchase Requisition → Purchase Order"
    ],
    correct: 1,
    explanation: "P2P begins with internal demand (PR), formalizes contract (PO), acknowledges physical receipt (GRN), validates tolerances (3-Way Match), and releases financial payment."
  },
  {
    id: 12,
    modId: "sec-p2p",
    modTitle: "06. Procure-to-Pay (P2P) & 3-Way Match",
    level: "Application",
    diff: "Moderate",
    text: "A vendor submits an invoice for 100 units at $50/unit ($5,000). The Purchase Order authorized 100 units at $45/unit ($4,500), and the warehouse Goods Receipt shows 90 units physically delivered. What does the ERP 3-Way Match do?",
    options: [
      "Automatically pays $5,000 to maintain positive vendor relations",
      "Places a payment block on the invoice due to both price variance ($50 vs $45) and quantity variance (100 billed vs 90 received), routing to AP/Procurement for resolution",
      "Deletes the Purchase Order and resets the warehouse inventory balance to zero",
      "Charges the $500 price variance directly to the warehouse manager's salary"
    ],
    correct: 1,
    explanation: "The 3-Way Match automatically compares PO (price & terms), GRN (quantity received), and Invoice (billed amounts). Any variance exceeding configured tolerances triggers an automated payment block."
  },
  {
    id: 13,
    modId: "sec-o2c",
    modTitle: "07. Order-to-Cash (O2C) & ATP",
    level: "Recall",
    diff: "Easy",
    text: "In the Order-to-Cash (O2C) cycle, which transaction triggers the legal reduction of inventory ownership and cost of goods sold (COGS) posting?",
    options: [
      "Customer Sales Quotation",
      "Sales Order Entry",
      "Post Goods Issue (PGI) during outbound shipping",
      "Customer Feedback Survey Submission"
    ],
    correct: 2,
    explanation: "Post Goods Issue (PGI) formally transfers title of goods, debits COGS, credits Inventory, and updates warehouse bin balances."
  },
  {
    id: 14,
    modId: "sec-o2c",
    modTitle: "07. Order-to-Cash (O2C) & ATP",
    level: "Application",
    diff: "Difficult",
    text: "On-hand stock is 200 units. Open confirmed customer orders equal 140 units. An inbound purchase order of 80 units arrives on Friday. What is the Available-to-Promise (ATP) quantity available to commit to a new customer today?",
    options: [
      "280 units",
      "200 units",
      "60 units (On-hand 200 - Confirmed Orders 140)",
      "140 units"
    ],
    correct: 2,
    explanation: "ATP for immediate commitment is On-Hand Physical Stock (200) minus Allocated/Committed Orders (140) = 60 units. The future inbound 80 units can only be promised for deliveries on or after Friday."
  },
  {
    id: 15,
    modId: "sec-mrp",
    modTitle: "08. Closed-Loop MRP & S&OP",
    level: "Understanding",
    diff: "Moderate",
    text: "What is 'BOM Explosion' in Material Requirements Planning?",
    options: [
      "A catastrophic chemical accident inside a manufacturing facility",
      "The recursive calculation breaking down a top-level parent product's Master Production Schedule (MPS) into gross requirements for all sub-assemblies, components, and raw materials using the multi-level Bill of Materials",
      "The spontaneous inflation of material purchasing costs during unexpected supplier price spikes",
      "Deleting all inactive items from the material master file"
    ],
    correct: 1,
    explanation: "BOM Explosion traverses the product hierarchy tree level by level, multiplying parent demand by component usage rates to determine time-phased gross requirements for all subcomponents."
  },
  {
    id: 16,
    modId: "sec-mrp",
    modTitle: "08. Closed-Loop MRP & S&OP",
    level: "Understanding",
    diff: "Moderate",
    text: "What primary executive purpose does the Sales & Operations Planning (S&OP) monthly cadence serve?",
    options: [
      "Calculating daily punch-card attendance for factory hourly workers",
      "Aligning unconstrained sales marketing forecasts with operational production capacity and corporate financial targets across an intermediate 12–24 month rolling horizon",
      "Selecting third-party office cleaning contractors for corporate headquarters",
      "Designing website banner graphics for seasonal promotions"
    ],
    correct: 1,
    explanation: "S&OP is an executive cross-functional governance process that balances market demand with supply capability, ensuring manufacturing schedules do not exceed physical constraints or financial budgets."
  },
  {
    id: 17,
    modId: "sec-bpr",
    modTitle: "09. BPR, Rightsizing vs Downsizing",
    level: "Analysis",
    diff: "Moderate",
    text: "Why is treating ERP primarily as a 'downsizing tool' to terminate workers considered a dangerous management anti-pattern?",
    options: [
      "Because labor unions will permanently seize ownership of company servers",
      "Because ERP creates employee resistance, sabotage, and loss of institutional process knowledge, whereas true ERP value comes from business process reengineering, cycle time compression, and redeploying talent toward growth ('rightsizing')",
      "Because ERP systems require twice as many manual clerical typists as legacy paper systems",
      "Because corporate tax codes forbid reducing headcount following software capital investments"
    ],
    correct: 1,
    explanation: "Viewing ERP as a headcount chopping block induces fear and active resistance. High-performing organizations use BPR to automate clerical routine and redeploy workforce talent toward higher-value analytical and customer-facing activities."
  },
  {
    id: 18,
    modId: "sec-bpr",
    modTitle: "09. BPR, Rightsizing vs Downsizing",
    level: "Understanding",
    diff: "Easy",
    text: "What classic reengineering trap does the phrase 'Paving the Cowpath' describe?",
    options: [
      "Constructing concrete roadways across rural dairy farms",
      "Automating an existing, inefficient, broken legacy process with expensive software without first fundamentally redesigning the process flow",
      "Refusing to update server operating systems every three years",
      "Training factory employees on animal husbandry standards"
    ],
    correct: 1,
    explanation: "Hammer and Champy coined this concept: if you automate an inefficient, convoluted process without reengineering it, you simply produce bad results faster and at greater expense."
  },
  {
    id: 19,
    modId: "sec-matrix",
    modTitle: "10. Value Realization Matrix",
    level: "Analysis",
    diff: "Moderate",
    text: "In Value Realization Matrix Analysis, what characterizes a process or module falling into the 'High Strategic Alignment, High Financial Impact' quadrant?",
    options: [
      "Operational Waste / Divest quadrant: eliminate immediately",
      "Operational Hygiene / Baseline: maintain at lowest possible maintenance cost",
      "Crown Jewels / Core Competitive Driver: prioritize capital allocation, executive governance, and continuous optimization",
      "Speculative Pet Project: conduct small experiments without committing executive time"
    ],
    correct: 2,
    explanation: "High Strategic Alignment + High Financial Impact defines the 'Crown Jewels' of the enterprise (e.g. dynamic pricing, predictive supply chain fulfillment), which must receive top investment priority."
  },
  {
    id: 20,
    modId: "sec-matrix",
    modTitle: "10. Value Realization Matrix",
    level: "Application",
    diff: "Difficult",
    text: "An executive wants to spend $2.5M heavily customizing the Accounts Payable routine in their ERP. AP has Low Strategic Differentiation but High Transaction Volume. Based on Value Matrix principles, what is the correct recommendation?",
    options: [
      "Approve the $2.5M customization immediately to ensure AP staff feel appreciated",
      "Reject the custom build; adopt the ERP vendor's vanilla best-practice workflow for AP to minimize TCO and reallocate capital toward differentiating customer-facing modules",
      "Shut down the Accounts Payable department entirely",
      "Migrate Accounts Payable back to manual handwritten paper ledgers"
    ],
    correct: 1,
    explanation: "AP is commodity operational hygiene. Customizing it adds high maintenance cost and upgrade risk without providing any market differentiation. Vanilla adoption is the textbook strategic choice."
  },
  {
    id: 21,
    modId: "sec-masterdata",
    modTitle: "11. Master Data & Signal Codes",
    level: "Recall",
    diff: "Easy",
    text: "Which entity constitutes 'Master Data' rather than 'Transactional Data'?",
    options: [
      "Purchase Order #98432 created at 10:15 AM today",
      "Customer Master Record containing tax ID, payment terms, and delivery address",
      "Goods Receipt slip timestamped by dock worker John Doe",
      "Sales Invoice #INV-2026-0044 totaling $1,250"
    ],
    correct: 1,
    explanation: "Master data consists of core, slowly changing static reference entities (Customer, Material, Vendor, Chart of Accounts, BOM). Purchase orders and invoices are ephemeral transactional data."
  },
  {
    id: 22,
    modId: "sec-masterdata",
    modTitle: "11. Master Data & Signal Codes",
    level: "Understanding",
    diff: "Moderate",
    text: "What is the operational function of a 'Signal Code' (Material Status Code) configured on a Material Master record in ERP?",
    options: [
      "It controls Wi-Fi signal strength in the manufacturing plant",
      "It enforces system-wide transactional behavior (e.g., Blocked for Procurement, Obsolete, Slow-Moving, or Phase-Out) preventing unauthorized POs or work orders from being created",
      "It calculates the physical weight and shipping dimensions of the palette",
      "It changes the font color of the material name on printed warehouse pick tickets"
    ],
    correct: 1,
    explanation: "Signal Codes govern lifecycle rules: for instance, flagging an item as 'Phase-Out' permits sales order fulfillment from existing inventory while blocking new procurement purchase orders."
  },
  {
    id: 23,
    modId: "sec-subway",
    modTitle: "12. Subway Hierarchy Case",
    level: "Analysis",
    diff: "Difficult",
    text: "In the FAQ case question: 'You are Subway with a multi-level hierarchy, will business fail? Explain' — what is the fundamental managerial hazard of an uncoordinated multi-tier franchise model?",
    options: [
      "Sandwich bread recipes cannot be digitized into relational database schemas",
      "Information distortion, bullwhip effect, decentralized rogue purchasing, and lack of real-time point-of-sale visibility across independent regional development agents and franchisees can cause severe supply stockouts, margin erosion, and brand inconsistency unless governed by a unified ERP backbone",
      "Franchise restaurants are legally prohibited from installing point-of-sale hardware",
      "Subway will fail simply because multi-level organizational charts cannot fit on corporate presentation slides"
    ],
    correct: 1,
    explanation: "Without centralized ERP master data and synchronized POS integration, multi-level hierarchies suffer from localized rogue decisions, inventory hoarding, delayed demand signals, and compromised quality standards."
  },
  {
    id: 24,
    modId: "sec-plossl",
    modTitle: "13. Plossl Manufacturing Theory",
    level: "Understanding",
    diff: "Moderate",
    text: "George Plossl's famous manufacturing insight demonstrated that in conventional job shops, what percentage of total manufacturing lead time is spent in non-value-added 'Queue Time' (waiting)?",
    options: [
      "Less than 5% (over 95% is actual machining and cutting)",
      "Roughly 90% to 95% of lead time is spent waiting in queues between work centers, with only 5% to 10% spent on actual setup and processing",
      "Exactly 50% split equally between cutting and waiting",
      "100% of lead time is instantaneous under standard MRP"
    ],
    correct: 1,
    explanation: "Plossl showed that work-in-progress spends 90-95% of its shop-floor life waiting in queues. Reducing queue times via shop-floor control and WIP regulation yields far greater lead time reduction than speeding up machines."
  },
  {
    id: 25,
    modId: "sec-cloud",
    modTitle: "14. Modern Cloud ERP & Evaluation",
    level: "Understanding",
    diff: "Moderate",
    text: "When evaluating enterprise ERP vendors, what does Total Cost of Ownership (TCO) encompass beyond the initial software license fees?",
    options: [
      "Only the cost of electricity consumed by server racks",
      "Implementation consulting fees, data cleansing, infrastructure, systems integration, customized reporting, ongoing end-user training, annual maintenance, and internal change management (which typically total 3x to 5x the initial license cost)",
      "Only the cost of travel meals submitted by software sales representatives",
      "TCO is strictly equal to the software list price with no other hidden costs"
    ],
    correct: 1,
    explanation: "Software licenses typically account for only 15-25% of true multi-year TCO. Consulting implementation, integrations, data migration, training, and operational change consume the vast majority of investment."
  },
  {
    id: 26,
    modId: "sec-risks",
    modTitle: "15. Failure Modes & Ishikawa Fishbone",
    level: "Recall",
    diff: "Easy",
    text: "According to change management frameworks (e.g. Kurt Lewin, Prosci ADKAR), what is the primary cause of employee resistance during an ERP rollout?",
    options: [
      "Employees preferring computer screens over paper notebooks",
      "Loss of departmental power silos, fear of job obsolescence, lack of transparent communication, and insufficient role-based hands-on training",
      "Software bugs in the database operating system kernel",
      "Excessive free time during the working day"
    ],
    correct: 1,
    explanation: "ERP dismantles private data fiefdoms and alters daily routines. Without proactive change leadership and empathetic training, employees resist what they perceive as loss of autonomy and competence."
  },
  {
    id: 27,
    modId: "sec-risks",
    modTitle: "15. Failure Modes & Ishikawa Fishbone",
    level: "Analysis",
    diff: "Moderate",
    text: "What is the primary danger of customizing ERP core source code (heavy custom ABAP/Java extensions) rather than configuring standard vendor settings?",
    options: [
      "The computer monitors will overheat",
      "Heavy code customization exponentially increases future upgrade costs, introduces untested logic bugs, voids vendor SLAs, and locks the organization into obsolete legacy versions",
      "The database engine refuses to store alphanumeric characters",
      "Vendors will legally seize the enterprise's bank accounts"
    ],
    correct: 1,
    explanation: "Customizing core code breaks standard upgrade paths. Each new vendor release requires expensive code rewrites and extensive regression testing, creating 'technical debt lock-in'."
  },
  {
    id: 28,
    modId: "sec-cloud",
    modTitle: "14. Modern Cloud ERP & Evaluation",
    level: "Application",
    diff: "Moderate",
    text: "What is the strategic trade-off of a 'Big Bang' ERP cutover compared to a 'Phased' rollout?",
    options: [
      "Big Bang requires 10 years to implement while Phased takes 2 weeks",
      "Big Bang achieves instant organizational cutover and avoids temporary interface maintenance, but concentrates catastrophic operational risk into a single weekend go-live event",
      "Big Bang is 100% risk-free because all systems are shut down permanently",
      "Phased rollouts cannot be performed by multinational companies"
    ],
    correct: 1,
    explanation: "Big Bang cuts all modules over simultaneously, eliminating complex legacy bridge interfaces, but if critical flaws arise on Monday morning, the entire business can grind to a halt."
  },
  {
    id: 29,
    modId: "sec-exam-answers",
    modTitle: "16. Complete 18 FAQ Model Answers",
    level: "Understanding",
    diff: "Easy",
    text: "What is the designated operational purpose of the 'Hypercare' stabilization phase immediately following an ERP go-live?",
    options: [
      "Sending the entire project implementation team on mandatory 30-day vacations",
      "Providing dedicated high-touch expert support on the operational floor, rapid ticket triage, daily reconciliation of clearing accounts, and immediate correction of user execution errors",
      "Installing arcade games in factory breakrooms to celebrate completion",
      "Shutting down the customer service hotline to prevent complaints"
    ],
    correct: 1,
    explanation: "Hypercare (typically 30–90 days post-cutover) focuses on rapid bug remediation, clearing transactional bottlenecks, supporting anxious users, and stabilizing month-end financial close."
  },
  {
    id: 30,
    modId: "sec-exam-answers",
    modTitle: "16. Complete 18 FAQ Model Answers",
    level: "Analysis",
    diff: "Difficult",
    text: "What is the definitive synthesis linking ERP implementation success to corporate competitive strategy?",
    options: [
      "ERP success is measured exclusively by whether the project finished under the initial IT budget, regardless of business impact",
      "ERP success occurs when transactional operations are so thoroughly disciplined and unified that management gains real-time visibility to rapidly allocate capital, respond to market fluctuations, and deliver superior customer value",
      "ERP ensures an organization will never need to launch new products or adjust pricing again",
      "Competitive strategy has no relationship with enterprise software operations"
    ],
    correct: 1,
    explanation: "True ERP success transcends IT metrics: it transforms transactional friction into strategic agility, enabling senior executives to steer the business based on verifiable, real-time enterprise truth."
  }
];

const quickChecks = {
  mod1: {
    stamp: "QUICK CHECK · 1 MIN",
    title: "Concept Check: Strategy vs Technology",
    prompt: "Why is ERP fundamentally a business strategy enabled by technology rather than just software?",
    reveal: "<strong>Core Takeaway:</strong> Technology is merely the executing conduit; without business process redesign (BPR), organizational realignment, and executive ownership, installing software merely automates legacy inefficiencies ('paving the cowpath')."
  },
  mod3: {
    stamp: "QUICK CHECK · 1 MIN",
    title: "Architecture Check: 3-Tier Layer Responsibilities",
    prompt: "Which tier hosts the business logic, MRP algorithms, and validation rules in client/server ERP?",
    reveal: "<strong>Core Takeaway:</strong> The Application / Logic Tier. Decoupling application logic from presentation (client GUI) and persistent storage (RDBMS) provides linear horizontal scalability and centralized maintenance."
  },
  mod8: {
    stamp: "QUICK CHECK · 1 MIN",
    title: "Planning Check: What is BOM Explosion?",
    prompt: "How does Closed-Loop MRP calculate component demand from the Master Production Schedule (MPS)?",
    reveal: "<strong>Core Takeaway:</strong> BOM Explosion traverses the product hierarchy tree level by level, multiplying parent finished-goods demand by component usage factors and offsetting lead times to determine time-phased gross requirements."
  }
};

module.exports = {
  erpQuizQuestions,
  quickChecks
};

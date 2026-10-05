export interface LscmTopic {
  id: number;
  title: string;
  faculty: 'Ajit Sir' | 'Manoj Sir' | 'Praful Sir' | 'Consensus';
  session: number;
  category: string;
  summary: string;
  what: string;
  why: string;
  how: string;
  framework: string;
  formulaKatex?: string;
  formulaVariables?: Array<{ symbol: string; meaning: string }>;
  arithmeticExample?: {
    problem: string;
    steps: string[];
    result: string;
  };
  businessExample: string;
  facultyEmphasis: string;
  pyqReference: string;
  examAnswerFormat: string[];
}

export interface SolvedPyq {
  id: string;
  year: number;
  questionNumber: string;
  marks: number;
  topicId: number;
  topicTitle: string;
  questionType: 'Numerical' | 'Case Analysis' | 'Strategic Theory' | 'Short Note';
  frequency: 'High' | 'Medium' | 'Low';
  questionText: string;
  modelAnswer: {
    coreConcept: string;
    stepByStepSolution: string[];
    finalRecommendation: string;
  };
}

export interface FormulaEntry {
  id: string;
  name: string;
  category: 'Inventory' | 'Transportation' | 'Warehousing' | 'Forecasting';
  katex: string;
  description: string;
  variables: Array<{ symbol: string; definition: string; unit: string }>;
  exampleProblem: {
    given: Record<string, string>;
    steps: string[];
    finalAnswer: string;
  };
}

export interface InteractiveChapter {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  concept: string;
  stageAspect: string;
  narrationBeats: Array<{
    beatNumber: number;
    title: string;
    narration: string;
    visualAction: string;
  }>;
  parameters: Array<{
    id: string;
    name: string;
    min: number;
    max: number;
    step: number;
    defaultVal: number;
    unit: string;
  }>;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

// 1. Comprehensive Topics (15 Sessions)
export const LSCM_TOPICS: LscmTopic[] = [
  {
    id: 1,
    title: 'SCM Architecture, Evolution & Value Chain',
    faculty: 'Ajit Sir',
    session: 1,
    category: 'Strategic SCM',
    summary: 'Evolution from fragmented logistics (1960s) to integrated supply networks (2020s), Porter value chain alignment, and competitive advantage.',
    what: 'Supply Chain Management is the systemic, strategic coordination of traditional business functions across the direct supply chain and across businesses within the supply chain, for the purposes of improving long-term performance.',
    why: 'Companies no longer compete in isolation; modern competition is supply network against supply network. Frictionless coordination unlocks cash flow and protects margins.',
    how: 'Align primary activities (Inbound, Operations, Outbound, Marketing, Service) with support infrastructure using synchronous data pipelines.',
    framework: 'Michael Porter Value Chain & Chopra Extended Supply Chain Model.',
    businessExample: 'Dell direct-to-consumer build-to-order paradigm eliminating retail intermediate markups.',
    facultyEmphasis: 'Ajit Sir insists on linking supply chain integration directly to ROCE and Working Capital turnover.',
    pyqReference: 'Appeared in 2024 Q1(a) (10 Marks) & 2025 Q1 (20 Marks case).',
    examAnswerFormat: [
      '1. Define SCM and Porter Value Chain with diagram.',
      '2. Detail the 4 historical evolution eras (Fragmentation, Integration, Globalization, Digitalization).',
      '3. Contrast Cost Leadership vs. Value Advantage matrices.',
      '4. Conclude with working capital financial impact (Cash-to-Cash cycle).',
    ],
  },
  {
    id: 2,
    title: 'Supply Chain Drivers & Fisher Strategic Fit',
    faculty: 'Ajit Sir',
    session: 2,
    category: 'Strategic Fit',
    summary: 'The 6 logistical and cross-functional drivers mapped against Marshall Fisher implied demand uncertainty matrix.',
    what: 'Strategic Fit requires that both the competitive strategy and supply chain strategy have aligned goals. Implied demand uncertainty dictates whether a chain must be lean or agile.',
    why: 'Mismatch causes either excessive inventory write-downs (functional goods in high-cost responsive networks) or customer stockouts (innovative goods in slow lean networks).',
    how: 'Balance 3 Logistical Drivers (Facilities, Inventory, Transportation) and 3 Cross-Functional Drivers (Information, Sourcing, Pricing).',
    framework: "Marshall Fisher's Matrix (Functional vs. Innovative Products matched to Efficient vs. Responsive Supply Chains).",
    businessExample: 'Zara utilizes responsive local European manufacturing for volatile trendy apparel, while sourcing standard white t-shirts from low-cost Asian factories.',
    facultyEmphasis: 'Ajit Sir emphasizes drawing the two-dimensional coordinate zone of strategic fit showing upper and lower boundaries.',
    pyqReference: 'Appeared in 2023 Q3 (10 Marks), 2024 Q1 (Fast-Fashion Case 20 Marks), 2025 Q2 (10 Marks).',
    examAnswerFormat: [
      '1. State Marshall Fisher thesis and draw the 2x2 matrix.',
      '2. Enumerate characteristics of Functional (low margin, predictable, long lifecycle) vs. Innovative (high margin, unpredictable, short lifecycle).',
      '3. Map the 6 Drivers to show how efficiency vs. responsiveness trade-offs are calibrated.',
      '4. Provide real-world case analysis (e.g. Zara vs. Walmart).',
    ],
  },
  {
    id: 3,
    title: 'Supply Chain Performance Metrics & SCOR Framework',
    faculty: 'Ajit Sir',
    session: 3,
    category: 'Metrics & Performance',
    summary: 'The Supply Chain Operations Reference (SCOR) model and financial ratio linkage (ROCE, C2C cycle).',
    what: 'SCOR is a standardized diagnostic tool developed by the Supply Chain Council that spans all customer interactions, physical material transactions, and market interactions.',
    why: 'Provides a unified cross-industry taxonomy to benchmark supply chain reliability, responsiveness, agility, cost, and asset management.',
    how: 'Structured across 6 Level-1 processes: Plan, Source, Make, Deliver, Return, and Enable.',
    framework: 'APICS SCOR Model Level-1 to Level-3 decomposition.',
    businessExample: 'Cisco implemented SCOR Level-1 diagnostic metrics to trim $400M in redundant inventory across tier-1 contract manufacturers.',
    facultyEmphasis: 'Calculate Cash-to-Cash (C2C) cycle formula: Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) - Days Payables Outstanding (DPO).',
    pyqReference: 'Appeared in 2023 Q3 (10 Marks), 2024 Q3(b) (4 Marks).',
    examAnswerFormat: [
      '1. Define SCOR and its 6 macro processes with flowchart.',
      '2. Break down the 5 performance attributes (Reliability, Responsiveness, Agility, Cost, Asset Management).',
      '3. Provide the Cash-to-Cash Cycle formula and explain negative working capital (Apple/Amazon model).',
    ],
  },
  {
    id: 4,
    title: 'Demand Forecasting & Collaborative Planning (CPFR)',
    faculty: 'Ajit Sir',
    session: 4,
    category: 'Forecasting',
    summary: 'Quantitative smoothing, seasonal decomposition, and the 9-step CPFR inter-organizational collaboration framework.',
    what: 'Collaborative Planning, Forecasting, and Replenishment (CPFR) is an industry process model where trading partners share demand visibility to synchronize replenishment.',
    why: 'Independent forecasting generates isolated safety buffers and triggers severe upstream demand distortion (Bullwhip Effect).',
    how: 'Execute CPFR across 4 collaboration phases: Strategy & Planning, Demand & Supply Management, Execution, and Analysis.',
    framework: 'VICS 9-Step CPFR Model.',
    businessExample: 'Walmart and Procter & Gamble live POS data integration for Pampers diapers virtually eliminated stockouts.',
    facultyEmphasis: 'Ajit Sir highlights how CPFR transforms transactional zero-sum vendor negotiations into shared value creation.',
    pyqReference: 'Appeared in 2024 Q4 (10 Marks), 2025 Q3 (10 Marks).',
    examAnswerFormat: [
      '1. Define CPFR and contrast against traditional standalone forecasting.',
      '2. Draw the 4 phases and 9 steps diagram.',
      '3. Detail technological prerequisites: EDI, POS streaming, cloud exception management.',
      '4. Explain Bullwhip damping effect.',
    ],
  },
  {
    id: 5,
    title: 'Sales & Operations Planning (S&OP) & S&OE',
    faculty: 'Ajit Sir',
    session: 5,
    category: 'Planning & Execution',
    summary: 'Monthly strategic executive consensus process (S&OP) contrasted with tactical weekly execution (S&OE).',
    what: 'S&OP is a monthly risk-management business process that provides executive management the ability to strategically direct its business toward competitive advantage.',
    why: 'Sales departments maximize revenue (unconstrained demand), while Operations minimizes production unit cost (level schedule). S&OP unifies them into one financial truth.',
    how: 'Run the sequential 5-step monthly cadence: Data Gathering, Demand Planning, Supply Planning, Pre-S&OP Meeting, and Executive S&OP Meeting.',
    framework: 'Oliver Wight 5-Step S&OP Closed-Loop Hierarchy.',
    businessExample: 'Unilever uses S&OP to balance FMCG trade promotions with multi-factory line conversions.',
    facultyEmphasis: 'Contrast S&OP (3 to 18-month strategic horizon, aggregate units) with S&OE (1 to 8-week granular SKU execution).',
    pyqReference: 'Appeared in 2024 Q4 (10 Marks), 2025 Q4(a) (5 Marks).',
    examAnswerFormat: [
      '1. Define S&OP and explain its cross-functional necessity.',
      '2. Draw the 5-step monthly meeting timeline with required inputs and outputs.',
      '3. Create a comparison table: S&OP vs. S&OE (Horizon, Granularity, Key Stakeholders, Objective).',
      '4. Conclude with Aggregate Planning strategies (Chase vs. Level vs. Mixed).',
    ],
  },
  {
    id: 6,
    title: 'Deterministic Inventory Control: EOQ, EPQ & Discounts',
    faculty: 'Praful Sir',
    session: 6,
    category: 'Quantitative Inventory',
    summary: 'Mathematical formulation of optimal order batch sizes under constant demand, finite production rate, and tiered price breaks.',
    what: 'The Economic Order Quantity (EOQ) is the order quantity that minimizes the total holding costs and ordering costs in a deterministic environment.',
    why: 'Ordering too frequently inflates administrative and delivery setup costs; ordering in massive lots ties up working capital and inflates obsolescence.',
    how: 'Equate first derivative of Total Cost with respect to order size $Q$ to zero: $\\frac{dTC}{dQ} = -\\frac{DS}{Q^2} + \\frac{H}{2} = 0$.',
    framework: 'Ford W. Harris Inventory Model & Economic Production Quantity (EPQ) with simultaneous consumption.',
    formulaKatex: 'Q^* = \\sqrt{\\frac{2DS}{H}}, \\quad Q_{EPQ}^* = \\sqrt{\\frac{2DS}{H\\left(1 - \\frac{d}{p}\\right)}}',
    formulaVariables: [
      { symbol: 'D', meaning: 'Annual demand (units/year)' },
      { symbol: 'S', meaning: 'Order setup / administrative cost per batch' },
      { symbol: 'H', meaning: 'Unit annual inventory carrying cost ($ or ₹ per unit-year)' },
      { symbol: 'd', meaning: 'Daily demand rate (units/day)' },
      { symbol: 'p', meaning: 'Daily production run rate (units/day, where p > d)' },
    ],
    arithmeticExample: {
      problem: 'Demand D = 12,000 units/year, Setup S = ₹1,500, Unit cost C = ₹250, Carrying cost i = 20% (H = 0.20 * 250 = ₹50/unit-year).',
      steps: [
        '1. Compute Unit Holding Cost H: H = 250 * 0.20 = ₹50',
        '2. Apply EOQ Formula: Q* = sqrt((2 * 12,000 * 1,500) / 50)',
        '3. Simplify numerator: 2 * 12,000 * 1,500 = 36,000,000',
        '4. Divide by H: 36,000,000 / 50 = 720,000',
        '5. Take Square Root: sqrt(720,000) = 848.53 -> 849 units',
        '6. Annual Orders: N = 12,000 / 848.53 = 14.14 orders/year',
        '7. Total Annual Inventory Cost: TC = (14.14 * 1,500) + (848.53 / 2 * 50) = 21,213.20 + 21,213.20 = ₹42,426.40',
      ],
      result: 'Optimal Order Quantity Q* = 849 units; Total Annual Management Cost = ₹42,426.40',
    },
    businessExample: 'Maruti Suzuki optimizes sheet metal blank orders across Tier-1 press stamping suppliers using EOQ with quantity break economics.',
    facultyEmphasis: 'Praful Sir requires full algebraic derivation, second-order derivative sufficiency check, and explicit arithmetic steps.',
    pyqReference: 'Appeared in 2023 Q2 (10 Marks), 2024 Q2 (10 Marks Discount Problem), 2025 Q2 (10 Marks EPQ Problem).',
    examAnswerFormat: [
      '1. State model assumptions (constant demand, zero lead time, instant receipt).',
      '2. Show complete algebraic derivation from Total Cost formula.',
      '3. Draw the classic cost curve (Annual Holding, Annual Ordering, Total Cost curve showing minimum).',
      '4. Execute step-by-step arithmetic substitution with explicit units.',
    ],
  },
  {
    id: 7,
    title: 'Stochastic Inventory Models & Safety Stock Optimization',
    faculty: 'Praful Sir',
    session: 7,
    category: 'Quantitative Inventory',
    summary: 'Buffer stock calibration under normal demand distribution and lead-time volatility for target Cycle Service Levels (CSL).',
    what: 'Safety stock is buffer inventory held to protect against stockouts caused by stochastic fluctuations in customer demand and supplier delivery lead time.',
    why: 'Stockouts result in lost sales, expediting freight costs, and brand defection; however, excessive buffers tie up immense working capital.',
    how: 'Set Reorder Point $ROP = \\mu_{DL} + SS$, where safety stock is calibrated using standard normal distribution $Z$-factor.',
    framework: 'Continuous Review (s, Q) and Periodic Review (R, S) policies.',
    formulaKatex: 'SS = Z \\cdot \\sqrt{L \\cdot \\sigma_d^2 + \\bar{d}^2 \\cdot \\sigma_L^2}, \\quad ROP = (\\bar{d} \\cdot L) + SS',
    formulaVariables: [
      { symbol: 'Z', meaning: 'Inverse standard normal factor corresponding to Cycle Service Level' },
      { symbol: 'L', meaning: 'Average supplier lead time (days or weeks)' },
      { symbol: '\\sigma_d', meaning: 'Standard deviation of daily demand' },
      { symbol: '\\bar{d}', meaning: 'Average daily demand rate' },
      { symbol: '\\sigma_L', meaning: 'Standard deviation of supplier lead time' },
    ],
    arithmeticExample: {
      problem: 'Mean daily demand d = 80 units, sigma_d = 12 units, constant lead time L = 9 days, target CSL = 95% (Z = 1.645).',
      steps: [
        '1. Compute Lead Time Demand standard deviation: sigma_DL = sigma_d * sqrt(L) = 12 * sqrt(9) = 12 * 3 = 36 units',
        '2. Compute Safety Stock: SS = Z * sigma_DL = 1.645 * 36 = 59.22 -> 60 units',
        '3. Compute Expected Lead Time Demand: d * L = 80 * 9 = 720 units',
        '4. Compute Reorder Point: ROP = 720 + 59.22 = 779.22 -> 780 units',
        '5. Sensitivity check: For 99% CSL (Z = 2.326), SS = 2.326 * 36 = 83.74 -> 84 units (a 41.4% increase in buffer for a 4% increase in service level).',
      ],
      result: 'Safety Stock = 60 units; Reorder Point ROP = 780 units.',
    },
    businessExample: 'Amazon fulfillment algorithms automatically increase safety stock when weather forecasts indicate impending interstate transport delays.',
    facultyEmphasis: 'Praful Sir warns students that lead-time variance $\\sigma_L^2$ is multiplied by $\\bar{d}^2$, making supplier reliability far more critical than demand predictability.',
    pyqReference: 'Appeared in 2023 Q4 (10 Marks), 2024 Q5 (10 Marks), 2025 Q5 (10 Marks).',
    examAnswerFormat: [
      '1. Define Cycle Service Level vs. Fill Rate.',
      '2. State the combined safety stock formula with complete variable definitions.',
      '3. Graph the normal distribution showing the shaded alpha stockout probability tail.',
      '4. Solve numerical problem with step-by-step substitution.',
      '5. Compare Continuous Review (s, Q) vs. Periodic Review (R, S).',
    ],
  },
  {
    id: 8,
    title: 'Warehouse Operations, Layouts & DC vs. FC Mechanics',
    faculty: 'Manoj Sir',
    session: 8,
    category: 'Warehousing',
    summary: 'Physical flow engineering across 6 warehouse operations, architectural divergence between DCs and FCs, and layout design.',
    what: 'A warehouse is a planned space for the efficient storage, handling, and transshipment of physical goods. Modern operations diverge into pallet-driven Distribution Centers (DC) and piece-driven e-commerce Fulfillment Centers (FC).',
    why: 'Warehousing represents 20-30% of total logistics expense. Layout bottlenecks directly impact vehicle turnaround time and order cycle duration.',
    how: 'Design linear or U-shaped material flows that prevent crossing traffic across Receiving, Put-away, Storage, Picking, Packing, and Dispatch.',
    framework: '6-Stage Warehouse Physical Flow & U-Shaped Flow Layout.',
    businessExample: 'Amazon FCs utilize chaotic storage algorithms managed by Kiva robots to maximize cubic space utilization.',
    facultyEmphasis: 'Manoj Sir emphasizes the exact functional distinction: DC handles full pallet/case bulk movements for B2B stores; FC handles broken-case piece picking for individual D2C parcels.',
    pyqReference: 'Appeared in 2023 Q5 (10 Marks), 2024 Q4(b) (5 Marks), 2025 Q6 (10 Marks).',
    examAnswerFormat: [
      '1. Provide a comprehensive comparison table: DC vs. FC (Order size, SKU count, Flow velocity, Equipment, Picking style).',
      '2. Draw the standard U-Shaped Warehouse Layout showing all dock bays and storage zones.',
      '3. Detail the 6 core operational stages from Inbound Unloading to Outbound Dispatch.',
      '4. Highlight warehouse performance KPIs (Dock-to-Stock time, Order Picking accuracy).',
    ],
  },
  {
    id: 9,
    title: 'Material Handling Equipment & Storage Systems',
    faculty: 'Manoj Sir',
    session: 9,
    category: 'Warehousing',
    summary: 'Aisle geometry, pallet racking architectures (Selective, Drive-in, Push-back, AS/RS), and MHE selection economics.',
    what: 'Material Handling Equipment (MHE) encompasses mechanical equipment used for the movement, storage, control, and protection of materials throughout manufacturing and distribution.',
    why: 'Proper MHE selection optimizes cubic space utilization, slashes labor touches, and eliminates workplace accidents.',
    how: 'Match unit load characteristics (weight, dimensions, turnover velocity) with racking depth and vertical lift capabilities.',
    framework: 'Storage Density vs. Selectivity Trade-off Frontier.',
    businessExample: 'IKEA regional distribution centers use 40-meter-high automated high-bay AS/RS cranes to handle standardized flat-pack furniture pallets.',
    facultyEmphasis: 'Manoj Sir stresses that Selective Pallet Racking provides 100% immediate selectivity but low floor area density (35-40%), whereas Drive-in Racking maximizes density at the expense of FIFO control.',
    pyqReference: 'Appeared in 2024 Q6 (10 Marks), 2025 Short Notes (5 Marks).',
    examAnswerFormat: [
      '1. Explain the fundamental trade-off: Selectivity vs. Storage Density.',
      '2. Compare 4 rack types: Selective, Double Deep, Drive-In, and Automated Storage & Retrieval Systems (AS/RS).',
      '3. Detail MHE categories: Counterbalance Forklifts, Reach Trucks, Very Narrow Aisle (VNA) Turret Trucks, AGVs.',
      '4. Conclude with safety standards and floor maintenance rules.',
    ],
  },
  {
    id: 10,
    title: 'Cross-Docking Workflows & Unitisation Standardization',
    faculty: 'Manoj Sir',
    session: 10,
    category: 'Logistics Execution',
    summary: 'Direct trailer-to-trailer transshipment eliminating storage dwell time, unit load standardization (EUR vs. ISO pallets).',
    what: 'Cross-docking is a logistics technique where inbound shipments from supplier trailers are unloaded, sorted by destination, and directly loaded onto outbound delivery trailers with zero or minimal intermediate dwell time (<24 hours).',
    why: 'Eliminates holding costs, put-away labor, and pick-pack overhead, converting the warehouse into an active flow-through sorting node.',
    how: 'Synchronize inbound carrier schedules with EDI Advanced Shipping Notices (ASN) and automatic barcode scanning sortation conveyors.',
    framework: 'Pre-distribution vs. Post-distribution Cross-Docking Architecture.',
    businessExample: 'Walmart cross-docking network where suppliers deliver full truckloads to regional hubs, broken down immediately for individual store deliveries.',
    facultyEmphasis: 'Manoj Sir demands clear explanation of operational prerequisites: reliable supplier quality (100% inspection-free), synchronized delivery windows, and barcoding/RFID tracking.',
    pyqReference: 'Appeared in 2023 Q6 (10 Marks), 2025 Q4(b) (5 Marks).',
    examAnswerFormat: [
      '1. Define Cross-docking and draw the flow diagram (Inbound trailers -> Staging/Sortation -> Outbound trailers).',
      '2. Differentiate Pre-distribution (supplier-labeled destination) vs. Post-distribution (hub-sorted allocation).',
      '3. List the 5 essential prerequisites for cross-docking success.',
      '4. Explain Unitisation and standard pallet dimensions (EUR 1200x800mm vs. ISO 1200x1000mm).',
    ],
  },
  {
    id: 11,
    title: 'Transportation Economics, Modes & Tapering Principle',
    faculty: 'Ajit Sir',
    session: 11,
    category: 'Transportation',
    summary: 'Modal trade-offs (Road, Rail, Sea, Air, Pipeline), freight cost economies of scale and distance, and intermodal corridors.',
    what: 'Transportation is the physical movement of cargo between geographically separated locations. Transportation economics is governed by two fundamental principles: Economies of Scale and Economies of Distance.',
    why: 'Transportation typically comprises 50-60% of total logistics expense. Modal selection directly impacts lead time, pipeline inventory, and carbon emissions.',
    how: 'Exploit Economies of Scale (larger vehicle capacity lowers cost per ton) and Economies of Distance (tapering rate principle: cost per ton-km decreases as trip distance increases because fixed terminal costs are amortized over longer distances).',
    framework: 'The Tapering Rate Principle & 5-Mode Comparison Matrix.',
    formulaKatex: '\\text{Freight Rate} = F_0 + c \\cdot D^\\alpha \\quad (\\text{where } 0 < \\alpha < 1)',
    formulaVariables: [
      { symbol: 'F_0', meaning: 'Fixed handling, terminal, loading, and administrative charge' },
      { symbol: 'c', meaning: 'Variable line-haul operating cost coefficient per kilometer' },
      { symbol: 'D', meaning: 'Transit haul distance in kilometers' },
      { symbol: '\\alpha', meaning: 'Tapering elasticity exponent (< 1.0 reflects decaying marginal cost)' },
    ],
    businessExample: 'Dedicated Freight Corridors (DFC) in India shifting containerized freight from diesel road trucks to electric double-stack rail.',
    facultyEmphasis: 'Ajit Sir emphasizes drawing the Tapering Curve: Total freight cost rises with distance, but Cost per Ton-Kilometer exhibits a continuous downward decay.',
    pyqReference: 'Appeared in 2023 Q7 (10 Marks), 2024 Q7 (10 Marks), 2025 Q7 (10 Marks).',
    examAnswerFormat: [
      '1. Define Economies of Scale (Weight/Volume) and Economies of Distance (The Tapering Principle).',
      '2. Draw both cost curves (Total Transport Cost vs. Cost per Ton-KM).',
      '3. Create the 5-Mode Comparative Matrix (Road, Rail, Ocean, Air, Pipeline) across Speed, Cost, Capacity, Flexibility, and Reliability.',
      '4. Discuss Indian multimodal initiatives (PM Gati Shakti, DFC).',
    ],
  },
  {
    id: 12,
    title: 'Total Logistics Costing & Network Node Optimization',
    faculty: 'Ajit Sir',
    session: 12,
    category: 'Logistics Design',
    summary: 'The Total Cost Concept, inventory centralization vs. transport costs trade-off, and the Center of Gravity location model.',
    what: 'The Total Logistics Cost concept states that logistics decisions must minimize the sum of all interconnected logistics activities rather than optimizing individual siloed functions.',
    why: 'Sub-optimization trap: cutting freight costs by selecting slow shipping modes explodes inventory carrying costs and pipeline buffers.',
    how: 'Plot Total Cost = Transport Costs + Facility Costs + Inventory Carrying Costs + Lost Sales Stockout Costs as facility count increases.',
    framework: 'Lewis, Culliton, and Steele Total Cost Curve & Center of Gravity Grid Location.',
    formulaKatex: 'X^* = \\frac{\\sum_{i} W_i \\cdot X_i}{\\sum_{i} W_i}, \\quad Y^* = \\frac{\\sum_{i} W_i \\cdot Y_i}{\\sum_{i} W_i}',
    formulaVariables: [
      { symbol: 'X^*, Y^*', meaning: 'Optimal geographical coordinates for the centralized facility' },
      { symbol: 'X_i, Y_i', meaning: 'Geographical coordinates of supply source or market destination i' },
      { symbol: 'W_i', meaning: 'Volume / weight of freight shipped to or from node i' },
    ],
    businessExample: 'Consolidation of post-GST Indian warehouses from 25 fragmented state godowns into 4 large regional mother hubs.',
    facultyEmphasis: 'Ajit Sir requires students to illustrate how increasing warehouse count decreases outbound transportation cost but increases inbound transport cost and inventory safety stock.',
    pyqReference: 'Appeared in 2023 Q1 (Case 20 Marks), 2024 Q3(a) (6 Marks), 2025 Q7 (10 Marks).',
    examAnswerFormat: [
      '1. State the Total Logistics Cost equation and draw the classic U-shaped multi-facility trade-off curve.',
      '2. Break down the components: Inventory carrying cost (Square Root Law), Outbound transport, Inbound transport, Facility overhead.',
      '3. Explain the Center of Gravity mathematical model with grid coordinate formulas.',
      '4. Conclude with real-world qualitative constraints (Highway connectivity, labor availability, tax incentives).',
    ],
  },
  {
    id: 13,
    title: 'SCM Intermediaries: 1PL through 5PL & Strategic Contracting',
    faculty: 'Ajit Sir',
    session: 13,
    category: 'Strategic SCM',
    summary: 'Evolution from asset-owning carriers to digital supply chain orchestrators, 3PL vs. 4PL evaluation, and Service Level Agreements (SLAs).',
    what: 'Logistics intermediaries are third-party entities that perform specialized logistical services for a manufacturing or commercial enterprise.',
    why: 'Outsourcing non-core warehousing and transportation allows firms to focus on core design and branding while converting fixed capital into variable operating expense.',
    how: 'Differentiate based on asset ownership and integration scope: 1PL (Shipper), 2PL (Direct Carrier), 3PL (Bundled Logistics Provider), 4PL (Non-asset-owning Network Integrator), 5PL (E-commerce aggregate orchestrator).',
    framework: 'Intermediary Evolution Ladder & Outsourcing Decision Matrix.',
    businessExample: 'Nike partners with 4PL integrators to manage supply orchestration from independent contract factories across Vietnam and Indonesia to global retailers.',
    facultyEmphasis: 'Ajit Sir emphasizes the core distinction: 3PL is an execution provider that owns physical assets (trucks, warehouses); 4PL is a consultative orchestrator that manages multiple 3PLs using digital control towers.',
    pyqReference: 'Appeared in 2023 Q1(a) (12 Marks), 2024 Q8 Short Note (5 Marks), 2025 Q8(a) (5 Marks).',
    examAnswerFormat: [
      '1. Define and compare 1PL, 2PL, 3PL, 4PL, and 5PL in a structured hierarchy table.',
      '2. Contrast 3PL vs. 4PL across Asset Ownership, Strategic Focus, Technology Scope, and Contract Horizon.',
      '3. Outline key risks of logistics outsourcing (Loss of visibility, vendor lock-in, intellectual property leakage).',
      '4. List essential metrics in a Logistics Service Level Agreement (SLA).',
    ],
  },
  {
    id: 14,
    title: 'Global Logistics, Customs & INCOTERMS 2020 Architecture',
    faculty: 'Ajit Sir',
    session: 14,
    category: 'Global Logistics',
    summary: 'ICC International Commercial Terms 2020: 11 terms categorized by risk and cost transfer, shipping documentation, and port clearing.',
    what: 'INCOTERMS (International Commercial Terms) are standard contractual rules published by the International Chamber of Commerce (ICC) defining the respective obligations, costs, and risks of buyer and seller in international commercial trade.',
    why: 'Eliminates legal ambiguity across different jurisdictions regarding who pays freight, who contracts marine insurance, and who bears cargo loss at each transit leg.',
    how: 'Categorized into 4 groups: E-Group (Departure: EXW), F-Group (Main Carriage Unpaid: FCA, FAS, FOB), C-Group (Main Carriage Paid: CFR, CIF, CPT, CIP), and D-Group (Arrival: DAP, DPU, DDP).',
    framework: 'ICC INCOTERMS 2020 11-Term Matrix & Risk vs. Cost Decoupling.',
    businessExample: 'Apple uses FCA Shanghai for contract manufacturing exports and DDP for direct customer deliveries in consumer markets.',
    facultyEmphasis: 'Ajit Sir stresses the C-Term Paradox: Under CIF and CIP, the seller pays freight and insurance to the destination, BUT risk transfers to the buyer the moment goods are loaded on board the carrier at origin.',
    pyqReference: 'Appeared in 2023 Q8 (10 Marks), 2024 Q8 Short Note (5 Marks).',
    examAnswerFormat: [
      '1. State the purpose of INCOTERMS 2020 and list the 4 groups (E, F, C, D).',
      '2. Draw the corridor diagram illustrating the 11 terms mapped across transit points.',
      '3. Clearly distinguish Point of Cost Transfer vs. Point of Risk Transfer (highlighting CIF/CIP).',
      '4. Compare EXW (Maximum buyer risk) vs. DDP (Maximum seller risk).',
    ],
  },
  {
    id: 15,
    title: 'Reverse Logistics, Closed-Loop SCM & Circular Economy',
    faculty: 'Consensus',
    session: 15,
    category: 'Sustainability',
    summary: 'Reverse flows management, returns processing, the 5 R circular economy framework, and carbon reduction across supply networks.',
    what: 'Reverse logistics is the process of planning, implementing, and controlling the efficient, cost-effective flow of raw materials, in-process inventory, finished goods, and related information from the point of consumption to the point of origin for the purpose of recapturing value or proper disposal.',
    why: 'E-commerce returns hover between 20-30% of sales; environmental regulations (EPR - Extended Producer Responsibility) mandate product take-back.',
    how: 'Establish reverse collection gates, automated return authorization (RMA), diagnostic sorting, and circular processing across the 5 Rs.',
    framework: 'Closed-Loop Supply Chain Architecture & 5 Rs (Reduce, Reuse, Recycle, Remanufacture, Recover).',
    businessExample: 'Caterpillar Remanufacturing (Cat Reman) restores used diesel engine cores to original factory specifications, reducing energy consumption by 85%.',
    facultyEmphasis: 'Faculty highlight the gatekeeping bottleneck: filtering out ineligible or fraudulent returns at the earliest collection point saves up to 40% in reverse logistics costs.',
    pyqReference: 'Appeared in 2024 Short Notes (5 Marks), 2025 Q8(b) (5 Marks).',
    examAnswerFormat: [
      '1. Define Reverse Logistics and contrast Forward vs. Reverse supply chains.',
      '2. Diagram the Closed-Loop Supply Chain flow showing primary returns paths.',
      '3. Explain the 5 Rs framework with corporate sustainability examples.',
      '4. Discuss Extended Producer Responsibility (EPR) regulations and carbon tracking.',
    ],
  },
];

// 2. Verified Solved PYQs Archive (2023–2025)
export const SOLVED_PYQS: SolvedPyq[] = [
  {
    id: 'pyq-2023-q2',
    year: 2023,
    questionNumber: 'Q2',
    marks: 10,
    topicId: 6,
    topicTitle: 'Deterministic Inventory Control (EOQ)',
    questionType: 'Numerical',
    frequency: 'High',
    questionText: 'Annual demand for industrial ball bearings D = 12,000 units. Ordering cost S = ₹1,500 per order. Inventory carrying cost is 20% of purchase price per annum. Unit purchase price C = ₹250. Compute: (i) Economic Order Quantity, (ii) Number of orders per year, (iii) Cycle time in weeks (assume 50 work weeks/year), (iv) Total annual inventory management cost.',
    modelAnswer: {
      coreConcept: 'Ford W. Harris Deterministic EOQ Model minimizing total annual inventory acquisition and holding cost.',
      stepByStepSolution: [
        'Step 1: Calculate Unit Annual Holding Cost H = i * C = 0.20 * 250 = ₹50 per unit-year.',
        'Step 2: Calculate EOQ Q* = sqrt((2 * D * S) / H) = sqrt((2 * 12,000 * 1,500) / 50) = sqrt(36,000,000 / 50) = sqrt(720,000) = 848.53 units -> 849 units.',
        'Step 3: Calculate Annual Order Frequency N = D / Q* = 12,000 / 848.53 = 14.14 orders per year.',
        'Step 4: Calculate Cycle Time T = 50 weeks / N = 50 / 14.14 = 3.54 weeks between orders.',
        'Step 5: Calculate Annual Ordering Cost = N * S = 14.14 * 1,500 = ₹21,210.',
        'Step 6: Calculate Annual Holding Cost = (Q* / 2) * H = (848.53 / 2) * 50 = ₹21,213.25.',
        'Step 7: Total Inventory Management Cost TC = Ordering Cost + Holding Cost = ₹21,210 + ₹21,213.25 = ₹42,423.25.',
      ],
      finalRecommendation: 'The firm should place 14 orders per year of approximately 849 units every 3.5 weeks, achieving a minimal inventory cost of ₹42,423.25.',
    },
  },
  {
    id: 'pyq-2023-q4',
    year: 2023,
    questionNumber: 'Q4',
    marks: 10,
    topicId: 7,
    topicTitle: 'Stochastic Inventory Models & Safety Stock',
    questionType: 'Numerical',
    frequency: 'High',
    questionText: 'Daily demand for an electronic component is normally distributed with mean mu_d = 80 units and standard deviation sigma_d = 12 units. Replenishment lead time is constant at L = 9 days. Determine: (i) Reorder Point for a 95% Cycle Service Level (Z = 1.645), (ii) Safety stock held, (iii) If management increases service level to 99% (Z = 2.326), calculate the percentage increase in safety stock.',
    modelAnswer: {
      coreConcept: 'Safety Stock sizing under normally distributed demand and constant lead time using standard Z-factor.',
      stepByStepSolution: [
        'Step 1: Compute Lead Time Demand Standard Deviation sigma_DL = sigma_d * sqrt(L) = 12 * sqrt(9) = 12 * 3 = 36 units.',
        'Step 2: Compute Safety Stock for 95% CSL: SS_95 = Z_95 * sigma_DL = 1.645 * 36 = 59.22 units -> 60 units.',
        'Step 3: Compute Expected Lead Time Demand: d_bar * L = 80 * 9 = 720 units.',
        'Step 4: Compute Reorder Point for 95% CSL: ROP_95 = 720 + 59.22 = 779.22 units -> 780 units.',
        'Step 5: Compute Safety Stock for 99% CSL: SS_99 = Z_99 * sigma_DL = 2.326 * 36 = 83.74 units -> 84 units.',
        'Step 6: Compute Percentage Increase in Safety Stock: ((83.74 - 59.22) / 59.22) * 100 = (24.52 / 59.22) * 100 = 41.41%.',
      ],
      finalRecommendation: 'A modest 4% increase in service level (95% to 99%) requires a massive 41.4% expansion in buffer inventory, highlighting the non-linear cost curve of safety stock.',
    },
  },
  {
    id: 'pyq-2024-q2',
    year: 2024,
    questionNumber: 'Q2',
    marks: 10,
    topicId: 6,
    topicTitle: 'Deterministic Inventory: All-Units Quantity Discounts',
    questionType: 'Numerical',
    frequency: 'High',
    questionText: 'An automotive OEM requires D = 24,000 radiator assemblies annually. Setup cost S = ₹3,600 per order. Inventory holding cost fraction i = 25% of unit price per year. Supplier discount schedule: 1 <= Q < 1,000 -> ₹600; 1,000 <= Q < 2,500 -> ₹580; Q >= 2,500 -> ₹560. Determine optimal order quantity Q*.',
    modelAnswer: {
      coreConcept: 'All-units quantity discount optimization by testing feasibility of EOQs from lowest price tier upward.',
      stepByStepSolution: [
        'Tier 3 (Price C_3 = ₹560, H_3 = 0.25 * 560 = ₹140): EOQ_3 = sqrt((2 * 24,000 * 3,600) / 140) = sqrt(172,800,000 / 140) = sqrt(1,234,285.7) = 1,111 units. This is INFEASIBLE because discount requires Q >= 2,500.',
        'Evaluate Total Cost at Price Break Q = 2,500: Purchasing = 24,000 * 560 = ₹13,440,000. Ordering = (24,000 / 2,500) * 3,600 = ₹34,560. Holding = (2,500 / 2) * 140 = ₹175,000. TC(2,500) = 13,440,000 + 34,560 + 175,000 = ₹13,649,560.',
        'Tier 2 (Price C_2 = ₹580, H_2 = 0.25 * 580 = ₹145): EOQ_2 = sqrt((2 * 24,000 * 3,600) / 145) = sqrt(1,191,724.1) = 1,091.66 units. This is FEASIBLE since 1,000 <= 1,092 < 2,500.',
        'Evaluate Total Cost at EOQ_2 = 1,092: Purchasing = 24,000 * 580 = ₹13,920,000. Ordering = (24,000 / 1,091.66) * 3,600 = ₹79,145. Holding = (1,091.66 / 2) * 145 = ₹79,145. TC(1,092) = 13,920,000 + 79,145 + 79,145 = ₹14,078,290.',
        'Comparison: TC(2,500) = ₹13,649,560 vs. TC(1,092) = ₹14,078,290. Ordering 2,500 units saves ₹428,730 annually.',
      ],
      finalRecommendation: 'The OEM should order at the price break threshold Q* = 2,500 units at unit price ₹560 to capture total cost savings.',
    },
  },
  {
    id: 'pyq-2025-q2',
    year: 2025,
    questionNumber: 'Q2',
    marks: 10,
    topicId: 6,
    topicTitle: 'Economic Production Quantity (EPQ)',
    questionType: 'Numerical',
    frequency: 'High',
    questionText: 'A packaging plant produces cartons. Annual demand D = 50,000 units. Daily production rate p = 500 units/day. The facility operates 250 working days per year (daily demand d = 200 units/day). Setup cost S = ₹2,500 per run. Unit holding cost H = ₹10/unit-year. Calculate: (i) EPQ, (ii) Maximum inventory level reached, (iii) Total annual setup and holding cost, (iv) Production run length in days.',
    modelAnswer: {
      coreConcept: 'Finite production rate EPQ model where production and consumption occur simultaneously.',
      stepByStepSolution: [
        'Step 1: Compute production-consumption factor (1 - d/p) = (1 - 200/500) = (1 - 0.40) = 0.60.',
        'Step 2: Calculate EPQ Q* = sqrt((2 * D * S) / (H * (1 - d/p))) = sqrt((2 * 50,000 * 2,500) / (10 * 0.60)) = sqrt(250,000,000 / 6) = sqrt(41,666,666.67) = 6,454.97 -> 6,455 units.',
        'Step 3: Calculate Production Run Length t_p = Q* / p = 6,454.97 / 500 = 12.91 days per run.',
        'Step 4: Calculate Maximum Inventory Level I_max = Q* * (1 - d/p) = 6,454.97 * 0.60 = 3,872.98 -> 3,873 units.',
        'Step 5: Calculate Annual Setup Cost = (D / Q*) * S = (50,000 / 6,454.97) * 2,500 = 7.746 * 2,500 = ₹19,364.92.',
        'Step 6: Calculate Annual Holding Cost = (I_max / 2) * H = (3,872.98 / 2) * 10 = ₹19,364.90.',
        'Step 7: Total Annual Management Cost TC = Setup + Holding = ₹19,364.92 + ₹19,364.90 = ₹38,729.82.',
      ],
      finalRecommendation: 'Produce batches of 6,455 units across 13-day production runs approximately 8 times per year.',
    },
  },
];

// 3. Formula Directory Entries
export const SCM_FORMULAS: FormulaEntry[] = [
  {
    id: 'eoq-basic',
    name: 'Economic Order Quantity (EOQ)',
    category: 'Inventory',
    katex: 'Q^* = \\sqrt{\\frac{2DS}{H}}',
    description: 'Finds the exact order batch size that minimizes the sum of annual ordering setup costs and annual inventory holding costs under constant demand.',
    variables: [
      { symbol: 'Q^*', definition: 'Optimal Economic Order Quantity', unit: 'units' },
      { symbol: 'D', definition: 'Annual demand volume', unit: 'units/year' },
      { symbol: 'S', definition: 'Fixed administrative and transport setup cost per order', unit: '₹ or $ per order' },
      { symbol: 'H', definition: 'Annual carrying cost per unit (H = i * C)', unit: '₹ or $ per unit-year' },
    ],
    exampleProblem: {
      given: { D: '12,000 units', S: '₹1,500', C: '₹250', i: '20% (H = ₹50)' },
      steps: [
        'Numerator = 2 * 12,000 * 1,500 = 36,000,000',
        'Divide by H = 36,000,000 / 50 = 720,000',
        'Square root = sqrt(720,000) = 848.53 units',
      ],
      finalAnswer: 'Q* = 849 units',
    },
  },
  {
    id: 'epq-production',
    name: 'Economic Production Quantity (EPQ)',
    category: 'Inventory',
    katex: 'Q_{EPQ}^* = \\sqrt{\\frac{2DS}{H\\left(1 - \\frac{d}{p}\\right)}}',
    description: 'Determines the optimal production run quantity when materials are manufactured internally and consumed simultaneously at daily rates p and d.',
    variables: [
      { symbol: 'Q_{EPQ}^*', definition: 'Optimal production lot size', unit: 'units' },
      { symbol: 'd', definition: 'Daily demand rate', unit: 'units/day' },
      { symbol: 'p', definition: 'Daily manufacturing capacity', unit: 'units/day' },
      { symbol: 'I_{max}', definition: 'Peak inventory accumulated (I_{max} = Q * (1 - d/p))', unit: 'units' },
    ],
    exampleProblem: {
      given: { D: '50,000 units', S: '₹2,500', H: '₹10', d: '200 units/day', p: '500 units/day' },
      steps: [
        '(1 - d/p) = 1 - 200/500 = 0.60',
        'Denominator = 10 * 0.60 = 6.0',
        'Numerator = 2 * 50,000 * 2,500 = 250,000,000',
        'Quotient = 250,000,000 / 6 = 41,666,666.67',
        'Square root = sqrt(41,666,666.67) = 6,455 units',
      ],
      finalAnswer: 'Q_{EPQ}^* = 6,455 units',
    },
  },
  {
    id: 'safety-stock-dual',
    name: 'Safety Stock under Dual Uncertainty',
    category: 'Inventory',
    katex: 'SS = Z \\cdot \\sqrt{\\bar{L} \\cdot \\sigma_d^2 + \\bar{d}^2 \\cdot \\sigma_L^2}',
    description: 'Calculates the necessary buffer stock to maintain a specified Cycle Service Level when both customer demand and vendor lead time are stochastic variables.',
    variables: [
      { symbol: 'Z', definition: 'Standard normal distribution factor for target service level', unit: 'dimensionless' },
      { symbol: '\\bar{L}', definition: 'Average replenishment lead time', unit: 'days' },
      { symbol: '\\sigma_d', definition: 'Standard deviation of daily demand', unit: 'units/day' },
      { symbol: '\\bar{d}', definition: 'Average daily demand rate', unit: 'units/day' },
      { symbol: '\\sigma_L', definition: 'Standard deviation of lead time', unit: 'days' },
    ],
    exampleProblem: {
      given: { d_bar: '150 units', sigma_d: '20 units', L_bar: '16 days', sigma_L: '3 days', CSL: '98% (Z = 2.054)' },
      steps: [
        'Demand variance component = L_bar * sigma_d^2 = 16 * (20)^2 = 16 * 400 = 6,400',
        'Lead time variance component = d_bar^2 * sigma_L^2 = (150)^2 * (3)^2 = 22,500 * 9 = 202,500',
        'Combined variance = 6,400 + 202,500 = 208,900',
        'Standard deviation = sqrt(208,900) = 457.06 units',
        'Safety Stock SS = 2.054 * 457.06 = 938.8 units',
      ],
      finalAnswer: 'Safety Stock = 939 units; ROP = (150 * 16) + 939 = 3,339 units',
    },
  },
  {
    id: 'center-of-gravity',
    name: 'Center of Gravity Facility Location',
    category: 'Transportation',
    katex: 'X^* = \\frac{\\sum W_i X_i}{\\sum W_i}, \\quad Y^* = \\frac{\\sum W_i Y_i}{\\sum W_i}',
    description: 'Calculates the optimal geographical coordinates for a central distribution center or warehouse to minimize total ton-kilometer freight hauling costs.',
    variables: [
      { symbol: 'X^*, Y^*', definition: 'Optimal Cartesian coordinates of new facility', unit: 'grid units / km' },
      { symbol: 'X_i, Y_i', definition: 'Coordinates of customer market or supplier source i', unit: 'grid units / km' },
      { symbol: 'W_i', definition: 'Volume, weight, or annual freight shipments at point i', unit: 'tons/year' },
    ],
    exampleProblem: {
      given: { NodeA: '(100, 200) W=500t', NodeB: '(400, 100) W=800t', NodeC: '(300, 500) W=700t' },
      steps: [
        'Total Weight = 500 + 800 + 700 = 2,000 tons',
        'Sum(W * X) = (500*100) + (800*400) + (700*300) = 50,000 + 320,000 + 210,000 = 580,000',
        'X* = 580,000 / 2,000 = 290',
        'Sum(W * Y) = (500*200) + (800*100) + (700*500) = 100,000 + 80,000 + 350,000 = 530,000',
        'Y* = 530,000 / 2,000 = 265',
      ],
      finalAnswer: 'Optimal DC Coordinates: (290, 265)',
    },
  },
  {
    id: 'c2c-cycle',
    name: 'Cash-to-Cash (C2C) Operating Cycle',
    category: 'Forecasting',
    katex: 'C2C = DIO + DSO - DPO',
    description: 'Measures the time span (in days) required for an enterprise to convert cash invested in raw material procurement back into cash received from customer accounts.',
    variables: [
      { symbol: 'C2C', definition: 'Cash-to-Cash Cycle time', unit: 'days' },
      { symbol: 'DIO', definition: 'Days Inventory Outstanding (Inventory / COGS * 365)', unit: 'days' },
      { symbol: 'DSO', definition: 'Days Sales Outstanding (Accounts Receivable / Revenue * 365)', unit: 'days' },
      { symbol: 'DPO', definition: 'Days Payables Outstanding (Accounts Payable / COGS * 365)', unit: 'days' },
    ],
    exampleProblem: {
      given: { DIO: '45 days', DSO: '30 days', DPO: '60 days' },
      steps: [
        'C2C = DIO + DSO - DPO = 45 + 30 - 60 = 15 days',
        'If company extends vendor payment terms to 80 days: C2C = 45 + 30 - 80 = -5 days (Negative Working Capital)',
      ],
      finalAnswer: 'C2C = 15 days (Standard); C2C = -5 days (Negative Working Capital)',
    },
  },
];

// 4. Interactive Book Chapters (Papermorph Visual Simulator Edition)
export const INTERACTIVE_CHAPTERS: InteractiveChapter[] = [
  {
    id: 'ch01',
    slug: 'ch01-strategic-fit',
    number: 1,
    title: 'The Pulse of Flow',
    subtitle: "Supply Chain Networks & Fisher's Strategic Fit",
    concept: 'Aligning supply chain responsiveness with implied demand uncertainty.',
    stageAspect: '16:9',
    narrationBeats: [
      {
        beatNumber: 1,
        title: 'The Fragile Mismatch',
        narration: 'When an innovative product with short lifecycle is forced into a slow, cost-efficient supply chain, demand surges go unfulfilled, costing up to 45% of potential margin.',
        visualAction: 'Highlight misalignment between demand uncertainty marker and supply capability spectrum.',
      },
      {
        beatNumber: 2,
        title: 'The Zone of Strategic Fit',
        narration: 'Marshall Fisher established that high implied demand uncertainty requires responsive, agile supply chains, while low uncertainty demands lean, cost-efficient networks.',
        visualAction: 'Render golden diagonal band representing the equilibrium zone of strategic fit.',
      },
      {
        beatNumber: 3,
        title: 'Strategic Convergence',
        narration: 'Adjusting sourcing and buffer capacity shifts the firm directly into the zone, maximizing Return on Capital Employed.',
        visualAction: 'Animate product dot snapping into the zone of strategic fit with margin metrics turning green.',
      },
    ],
    parameters: [
      { id: 'uncertainty', name: 'Implied Demand Uncertainty', min: 10, max: 90, step: 5, defaultVal: 75, unit: '%' },
      { id: 'responsiveness', name: 'Supply Chain Responsiveness', min: 10, max: 90, step: 5, defaultVal: 30, unit: 'pts' },
    ],
    quiz: {
      question: 'Which of the following products belongs in a high-efficiency, cost-optimized supply chain?',
      options: [
        'A limited-edition designer sneaker',
        'A generic brand of table salt with 10-year stable consumption',
        'A newly patented biotech cancer therapeutic',
        'A smartphone model during its initial launch month',
      ],
      correctIndex: 1,
      explanation: 'Table salt has predictable, stable demand and low profit margins, making it a classic functional good that thrives under high asset utilization and low-cost logistics.',
    },
  },
  {
    id: 'ch02',
    slug: 'ch02-eoq-dynamics',
    number: 2,
    title: 'The Balance Point',
    subtitle: 'Economic Order Quantity Dynamics & Cost Physics',
    concept: 'Interactive equilibrium of holding costs and setup costs.',
    stageAspect: '16:9',
    narrationBeats: [
      {
        beatNumber: 1,
        title: 'The Two Opposing Forces',
        narration: 'Ordering frequently in small batches keeps inventory low but skyrockets clerical and freight setup charges. Ordering in huge bulk reduces setups but balloons holding costs.',
        visualAction: 'Display competing hyperbolic ordering cost curve and linear holding cost line.',
      },
      {
        beatNumber: 2,
        title: 'The Golden Intersection',
        narration: 'At the exact intersection where annual ordering cost equals annual holding cost, Total Cost reaches its absolute mathematical minimum.',
        visualAction: 'Animate vertical dashed marker pointing to EOQ intersection with glowing minimum point.',
      },
      {
        beatNumber: 3,
        title: 'The Flat Bottom Principle',
        narration: 'Notice how the total cost curve is remarkably flat near the minimum. A 20% deviation in batch size increases total cost by less than 2%, demonstrating high robustness.',
        visualAction: 'Shade tolerance window illustrating cost insensitivity.',
      },
    ],
    parameters: [
      { id: 'demand', name: 'Annual Demand (D)', min: 1000, max: 50000, step: 1000, defaultVal: 12000, unit: 'units' },
      { id: 'setup', name: 'Setup Cost (S)', min: 100, max: 5000, step: 100, defaultVal: 1500, unit: '₹' },
      { id: 'holding', name: 'Holding Cost (H)', min: 5, max: 200, step: 5, defaultVal: 50, unit: '₹/unit' },
    ],
    quiz: {
      question: 'If lean manufacturing reduces order setup cost S to 1/4 of its original value, how will EOQ change?',
      options: [
        'EOQ increases by 100%',
        'EOQ decreases by 50%',
        'EOQ decreases by 75%',
        'EOQ remains completely unchanged',
      ],
      correctIndex: 1,
      explanation: 'Because setup cost S is inside the square root (sqrt(S)), scaling S by 0.25 scales the resulting EOQ by sqrt(0.25) = 0.50, halving the order quantity.',
    },
  },
  {
    id: 'ch03',
    slug: 'ch03-safety-stock',
    number: 3,
    title: 'The Fortress of Uncertainty',
    subtitle: 'Safety Stock & Service Level Volatility',
    concept: 'Stochastic buffering under normal distributed lead-time demand.',
    stageAspect: '16:9',
    narrationBeats: [
      {
        beatNumber: 1,
        title: 'The Deterministic Mirage',
        narration: 'Operating with zero safety stock means you stock out in exactly 50% of your replenishment cycles whenever demand fluctuates normally around the mean.',
        visualAction: 'Show warehouse inventory dropping below zero line into red stockout territory.',
      },
      {
        beatNumber: 2,
        title: 'The Gaussian Shield',
        narration: 'Injecting safety stock cushions the lower tail. Moving from 90% to 95% service level requires a modest buffer increase.',
        visualAction: 'Highlight normal distribution curve with shaded tail probability alpha.',
      },
      {
        beatNumber: 3,
        title: 'The Asymptotic Penalty',
        narration: 'Pushing from 95% to 99.9% service level forces the Z-score from 1.645 to 3.09, doubling holding costs to protect against rare outliers.',
        visualAction: 'Animate exponential rise in total safety stock holding cost curve.',
      },
    ],
    parameters: [
      { id: 'csl', name: 'Target Service Level (CSL)', min: 80, max: 99.9, step: 0.5, defaultVal: 95, unit: '%' },
      { id: 'leadTime', name: 'Supplier Lead Time (L)', min: 1, max: 30, step: 1, defaultVal: 9, unit: 'days' },
      { id: 'sigmaD', name: 'Daily Demand Std Dev', min: 2, max: 50, step: 2, defaultVal: 12, unit: 'units' },
    ],
    quiz: {
      question: 'Which factor exerts the greatest mathematical leverage on safety stock expansion when lead time varies?',
      options: [
        'Daily demand standard deviation (sigma_d)',
        'Average daily demand rate (d_bar) multiplying lead time variance',
        'The purchase cost of the item',
        'The physical weight of the product',
      ],
      correctIndex: 1,
      explanation: 'In the formula SS = Z * sqrt(L * sigma_d^2 + d_bar^2 * sigma_L^2), d_bar is squared, meaning even small lead-time fluctuations get magnified by the square of daily sales.',
    },
  },
  {
    id: 'ch04',
    slug: 'ch04-warehouse-flow',
    number: 4,
    title: 'The Physics of Velocity',
    subtitle: 'Cross-Docking vs. Traditional Storage Racking',
    concept: 'Visualizing material transit velocity, dwell times, and touch elimination.',
    stageAspect: '16:9',
    narrationBeats: [
      {
        beatNumber: 1,
        title: 'The Traditional Storage Burden',
        narration: 'In traditional warehousing, incoming pallets are inspected, moved to reserve storage, restocked, picked, and staged, accumulating high dwell time and labor costs.',
        visualAction: 'Pallet trace path wanders through multi-level storage aisles with 14-day timer.',
      },
      {
        beatNumber: 2,
        title: 'The Cross-Dock Direct Velocity',
        narration: 'Pure cross-docking bypasses storage completely: inbound trailers unload directly onto automated sorting conveyors that transfer pallets to outbound trucks in under 4 hours.',
        visualAction: 'Pallet trace flows straight across central staging arena directly into waiting outbound bay.',
      },
    ],
    parameters: [
      { id: 'dwellTime', name: 'Storage Dwell Time', min: 0, max: 30, step: 1, defaultVal: 14, unit: 'days' },
      { id: 'touches', name: 'Material Handling Touches', min: 2, max: 8, step: 1, defaultVal: 6, unit: 'touches' },
    ],
    quiz: {
      question: 'What is the primary technical requirement for cross-docking without causing dock gridlock?',
      options: [
        'Building taller 50-meter warehouse roofs',
        'Electronic Advanced Shipping Notices (ASN) and barcode automation',
        'Hiring more manual forklift operators',
        'Increasing warehouse inventory safety buffers',
      ],
      correctIndex: 1,
      explanation: 'Cross-docking requires pre-cleared digital shipment visibility (EDI ASN) so inbound cargo can be instantly routed to outbound trailers without waiting for manual inspection.',
    },
  },
  {
    id: 'ch05',
    slug: 'ch05-incoterms-frontier',
    number: 5,
    title: 'The Shifting Frontier',
    subtitle: 'INCOTERMS 2020 Risk & Cost Boundaries',
    concept: 'Demarcating financial freight obligations and cargo risk transfer.',
    stageAspect: '16:9',
    narrationBeats: [
      {
        beatNumber: 1,
        title: 'The Departure Baseline (EXW)',
        narration: 'Under Ex Works, the seller merely makes goods available at their factory floor. The buyer assumes 100% of freight costs, export clearances, and transit risks.',
        visualAction: 'Blue cost bar and red risk bar decouple at seller factory door.',
      },
      {
        beatNumber: 2,
        title: 'The C-Term Decoupling Paradox',
        narration: 'Under CIF and CIP, the seller pays freight to the destination port, BUT risk passes to the buyer the moment goods are loaded on board the vessel at origin.',
        visualAction: 'Animate cost line stretching to destination port while risk marker transfers at origin port loading rail.',
      },
      {
        beatNumber: 3,
        title: 'The Ultimate Arrival (DDP)',
        narration: 'Under Delivered Duty Paid, the seller carries full freight, risk, import duty, and customs clearance until final handover at buyer premises.',
        visualAction: 'Seller cost and risk bars extend across the entire multimodal corridor.',
      },
    ],
    parameters: [
      { id: 'transitDistance', name: 'Corridor Distance', min: 500, max: 15000, step: 500, defaultVal: 8000, unit: 'km' },
    ],
    quiz: {
      question: 'Under INCOTERMS 2020 CIF, who bears financial loss if cargo sinks during ocean transit?',
      options: [
        'The seller, because they purchased the ocean freight',
        'The buyer, because risk transferred when cargo was loaded aboard the origin vessel',
        'The ocean vessel captain personally',
        'The port customs authority',
      ],
      correctIndex: 1,
      explanation: 'Under C-terms (CFR/CIF/CPT/CIP), cost and risk decouple: seller pays freight to destination, but risk transfers to the buyer upon loading at origin.',
    },
  },
  {
    id: 'ch06',
    slug: 'ch06-bullwhip-synchronization',
    number: 6,
    title: 'The Synchronized Horizon',
    subtitle: 'S&OP Collaboration & Bullwhip Damping',
    concept: 'Information distortion upstream in supply echelons and CPFR synchronization.',
    stageAspect: '16:9',
    narrationBeats: [
      {
        beatNumber: 1,
        title: 'The Distortion Wave',
        narration: 'A tiny 5% fluctuation in consumer retail purchases gets amplified into a 15% distributor surge, and explodes into a 45% production swing at the tier-1 factory.',
        visualAction: 'Animate wave swelling exponentially across the 4 supply chain echelons.',
      },
      {
        beatNumber: 2,
        title: 'The Synchronized Smoothing',
        narration: 'Connecting point-of-sale data pipelines and instituting monthly S&OP consensus flattens the bullwhip wave into steady, predictable production flow.',
        visualAction: 'Wave amplitude contracts into smooth, calm laminar flow across all echelons.',
      },
    ],
    parameters: [
      { id: 'batching', name: 'Order Batching Frequency', min: 1, max: 30, step: 1, defaultVal: 14, unit: 'days' },
      { id: 'posSharing', name: 'POS Data Transparency', min: 0, max: 100, step: 10, defaultVal: 20, unit: '%' },
    ],
    quiz: {
      question: 'Which of the following interventions directly suppresses the Bullwhip Effect?',
      options: [
        'Offering quarterly volume discounts that encourage massive forward buying',
        'Increasing minimum order batch sizes',
        'Sharing real-time POS data and shifting to Vendor-Managed Inventory (VMI)',
        'Keeping sales forecasts secret from suppliers',
      ],
      correctIndex: 2,
      explanation: 'Sharing real-time POS data eliminates information distortion and enables upstream suppliers to manufacture based on genuine consumption rather than inflated batch orders.',
    },
  },
];

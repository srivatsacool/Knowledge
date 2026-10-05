# Interactive Book Chapters Specification
**Course**: Logistics & Supply Chain Management | **Project**: `lscm`

---

## Chapter 1: The Pulse of Flow — Supply Networks & Strategic Fit

- **Chapter ID**: `ch01`
- **Slug**: `ch01-strategic-fit`
- **Core Concept**: Aligning supply chain design with customer implied demand uncertainty (Fisher 1997).
- **Target Learning Objectives**:
  1. Contrast Functional Goods (low margin, predictable demand, long lifecycle) with Innovative Goods (high margin, volatile demand, short lifecycle).
  2. Characterize Cost-Efficient Supply Chains (high asset utilization, minimum inventory, lean sourcing) versus Responsive Supply Chains (buffer capacity, fast logistics, modularity).
  3. Recognize the consequences of strategic mismatch: excess inventory markdowns versus stockout penalties.
- **Stage Viewport**: 1600×900 Coordinate Stage.
  - X-Axis: Implied Demand Uncertainty (Low / Certain $\longrightarrow$ High / Volatile).
  - Y-Axis: Supply Chain Responsiveness (Cost-Efficient / Lean $\longrightarrow$ Highly Responsive / Agile).
  - Zone of Strategic Fit: A diagonal golden band running from bottom-left to top-right.
- **Storyboard Beats**:
  - *Beat 1 (The Mismatch Danger)*: Display a functional good (e.g., Campbell Soup) trapped in an ultra-responsive air-freight network. Telemetry displays 28% margin loss to shipping overhead.
  - *Beat 2 (The Stockout Crisis)*: Display an innovative product (e.g., iPhone launch) locked into a slow container ocean vessel. Telemetry displays 45% unsatisfied demand during peak week.
  - *Beat 3 (The Alignment Law)*: User drags product sliders into the Zone of Strategic Fit. Margins stabilize and customer satisfaction reaches 98%.
- **Active Interactive Controls**:
  - `Slider: Product Margin (0% - 60%)`
  - `Slider: Forecast Error Rate (5% - 75%)`
  - `Toggle: Sourcing Mode (Offshore Low-Cost vs. Nearshore Agile)`
- **Micro-Check Question**:
  - *Question*: A company producing high-fashion seasonal ski jackets opts to manufacture 100% of production 9 months in advance in low-cost Asian factories. What strategic failure will occur?
  - *Options*: (A) High transportation cost, (B) Massive post-season markdowns or pre-season stockouts, (C) Excess production capacity, (D) Inventory holding cost is zero.
  - *Correct Answer*: (B) High implied demand uncertainty requires responsive nearshoring or postponement, not static speculative bulk manufacturing.

---

## Chapter 2: The Balance Point — Economic Order Quantity (EOQ) Dynamics

- **Chapter ID**: `ch02`
- **Slug**: `ch02-eoq-dynamics`
- **Core Concept**: Deriving and visualizing the deterministic inventory cost equilibrium where holding cost equals ordering cost.
- **Target Learning Objectives**:
  1. Visualize total cost curve $TC(Q) = \frac{D}{Q}S + \frac{Q}{2}H$.
  2. Understand the inverse relationship between ordering frequency and cycle inventory.
  3. Mathematically prove why $EOQ$ occurs at the precise intersection of annual ordering cost and annual holding cost.
  4. Perform sensitivity analysis: demonstrate why EOQ is robust to small errors in parameter estimation.
- **Stage Viewport**: 1600×900 Cartesian Cost Curve Stage.
  - X-Axis: Order Quantity $Q$ (units).
  - Y-Axis: Annual Cost ($).
  - Hyperbolic Blue Curve: Annual Ordering Cost $C_o = (D/Q) \cdot S$.
  - Linear Red Line: Annual Holding Cost $C_h = (Q/2) \cdot H$.
  - Parabolic Dark Charcoal Curve: Total Annual Cost $TC(Q) = C_o + C_h$.
  - Intersecting Vertical Dashed Guideline: $Q^* = \sqrt{\frac{2DS}{H}}$.
- **Storyboard Beats**:
  - *Beat 1 (The Conflicting Forces)*: Show how small orders minimize holding costs but explode setup/invoice costs.
  - *Beat 2 (The Intersection)*: Highlight the mathematical crossing point where $C_o = C_h$, proving $\frac{DS}{Q} = \frac{QH}{2} \implies Q^2 = \frac{2DS}{H}$.
  - *Beat 3 (The Flat Bottom)*: Drag $Q$ across a $\pm 20\%$ window around $Q^*$ to show that total cost increases by less than $2\%$ (the robustness theorem).
- **Active Interactive Controls**:
  - `Slider: Annual Demand D (1,000 to 50,000 units)`
  - `Slider: Setup / Ordering Cost S ($20 to $500)`
  - `Slider: Unit Holding Cost H ($1 to $50)`
  - `Draggable Marker: Order Quantity Q`
- **Micro-Check Question**:
  - *Question*: If a company implements Lean/SMED and slashes its setup cost $S$ by a factor of 4, how does the Economic Order Quantity $Q^*$ respond?
  - *Options*: (A) Drops by 50%, (B) Drops by 75%, (C) Doubles, (D) Remains unchanged.
  - *Correct Answer*: (A) Since $S$ is inside the square root ($\sqrt{S}$), reducing $S$ to $1/4$ scales $Q^*$ by $\sqrt{1/4} = 0.5$ (a 50% reduction).

---

## Chapter 3: The Fortress of Uncertainty — Safety Stock & Service Level Volatility

- **Chapter ID**: `ch03`
- **Slug**: `ch03-safety-stock`
- **Core Concept**: Stochastic buffering under normally distributed lead-time demand to protect against stockouts.
- **Target Learning Objectives**:
  1. Distinguish Cycle Inventory (replenishment lots) from Safety Stock (shock absorber).
  2. Compute safety stock under combined demand and lead-time variance: $SS = Z \cdot \sqrt{L \cdot \sigma_d^2 + d^2 \cdot \sigma_L^2}$.
  3. Understand the exponential cost curve as Cycle Service Level (CSL) approaches 99.9%.
- **Stage Viewport**: 1600×900 Dual Stage.
  - Left Pane: Gaussian Normal Distribution density curve with highlighted tail probability $\alpha = 1 - CSL$ and shaded $Z$-score buffer.
  - Right Pane: 60-Day Warehouse Inventory Trajectory line chart showing stochastic demand pulls, replenishment spikes, and safety buffer floor.
- **Storyboard Beats**:
  - *Beat 1 (The Deterministic Fallacy)*: Zero safety stock causes stockouts on 50% of replenishment cycles when demand varies.
  - *Beat 2 (The Z-Factor Cost Jump)*: Show $Z$ increasing from 1.65 (95%) to 2.33 (99%) to 3.09 (99.9%). Observe the right pane inventory holding cost curve steepen dramatically.
  - *Beat 3 (The Lead Time Multiplier)*: Increase lead-time uncertainty $\sigma_L$ to show that lead-time variance causes significantly greater buffer inflation than daily demand variance.
- **Active Interactive Controls**:
  - `Slider: Desired Service Level CSL (80% to 99.9%)`
  - `Slider: Daily Demand Std Dev \sigma_d (5 to 100 units)`
  - `Slider: Supplier Lead Time L (3 to 30 days)`
  - `Slider: Lead Time Std Dev \sigma_L (0 to 5 days)`
- **Micro-Check Question**:
  - *Question*: Why does pushing target customer service level from 95% to 99.9% require a disproportionate (often >100%) expansion in safety stock?
  - *Options*: (A) Holding cost per unit doubles, (B) The Gaussian tail flattens asymptotically requiring extreme Z-scores, (C) Lead time automatically increases, (D) Order setup costs rise.
  - *Correct Answer*: (B) Normal distribution inverse CDF ($Z$-score) accelerates non-linearly near 1.0 (Z=1.645 at 95% jumps to Z=3.09 at 99.9%).

---

## Chapter 4: The Physics of Velocity — Cross-Docking vs. Traditional Warehousing

- **Chapter ID**: `ch04`
- **Slug**: `ch04-warehouse-flow`
- **Core Concept**: Minimizing warehouse dwell time and touches through direct transshipment.
- **Target Learning Objectives**:
  1. Contrast traditional put-away/storage/pick workflows with <24hr cross-docking.
  2. Evaluate pre-distribution vs. post-distribution cross-docking models.
  3. Model the velocity and space trade-offs between static racking and dynamic staging docks.
- **Stage Viewport**: 1600×900 Top-Down Warehouse Layout Simulator.
  - Inbound Docks (Left): Receiving bays with arriving supplier trucks.
  - Central Arena: Mode toggle between (A) Deep Pallet High-Bay Storage Racks and (B) Dynamic Conveyor Cross-Dock Sortation.
  - Outbound Docks (Right): Fleet of destination delivery trucks grouped by regional store routes.
- **Storyboard Beats**:
  - *Beat 1 (Traditional Put-Away Dwell)*: Pallet moves from dock to reserve storage, sits for 14 days incurring holding fees, then picked and transferred to staging.
  - *Beat 2 (Cross-Dock Velocity)*: Pallet arrives, barcoded, cross-transferred via automated guided vehicle (AGV) directly to outbound dock in under 45 minutes.
  - *Beat 3 (Prerequisites & Failure Modes)*: Demonstrate what happens when EDI ASN (Advanced Shipping Notice) is missing—pallets bottle-neck at staging.
- **Active Interactive Controls**:
  - `Toggle: Flow Mode (Traditional High-Bay vs. Flow-Through Cross-Dock)`
  - `Slider: Daily Throughput (500 to 5,000 pallets)`
  - `Toggle: EDI Advanced Shipping Notice (Enabled / Disabled)`
- **Micro-Check Question**:
  - *Question*: What is the primary operational prerequisite for pure cross-docking to function without generating massive staging congestion?
  - *Options*: (A) High warehouse ceiling height, (B) EDI Advanced Shipping Notices (ASN) and synchronized inbound/outbound schedules, (C) Triple-deep storage racks, (D) Manual inventory card ledgers.
  - *Correct Answer*: (B) Cross-docking requires real-time information transparency and tight carrier arrival coordination.

---

## Chapter 5: The Shifting Frontier — INCOTERMS 2020 Risk & Cost Boundaries

- **Chapter ID**: `ch05`
- **Slug**: `ch05-incoterms-frontier`
- **Core Concept**: Demarcation of financial obligations, freight contracts, and risk passage under ICC INCOTERMS 2020.
- **Target Learning Objectives**:
  1. Differentiate the 4 basic groups: E (Departure), F (Main Carriage Unpaid), C (Main Carriage Paid), D (Arrival).
  2. Identify the critical difference between point of risk transfer and point of freight cost transfer under C-terms (CIF/CIP).
  3. Avoid common maritime vs. multimodal contract errors.
- **Stage Viewport**: 1600×900 Multimodal Transit Corridor.
  - Stage Stations: Seller Factory $\to$ Origin Truck $\to$ Port of Origin $\to$ Ocean Vessel $\to$ Port of Destination $\to$ Customs Clearance $\to$ Buyer Warehouse.
  - Two Dynamic Color-Coded Ribbon Bars:
    - Upper Ribbon: Cost Allocation (Blue = Seller Pays, Orange = Buyer Pays).
    - Lower Ribbon: Risk & Loss Allocation (Red = Seller Bears Risk, Green = Buyer Bears Risk).
- **Storyboard Beats**:
  - *Beat 1 (EXW - Minimum Seller Burden)*: Risk and cost transfer immediately at seller's factory gate.
  - *Beat 2 (The C-Term Decoupling Paradox)*: Under CIF, seller pays freight all the way to destination port, BUT risk transfers to buyer as soon as the cargo is loaded on the vessel at origin.
  - *Beat 3 (DDP - Maximum Seller Burden)*: Seller bears all freight, risk, import duty, and tax until arrival at buyer's facility.
- **Active Interactive Controls**:
  - `Term Selector Buttons: [EXW] [FOB] [CFR] [CIF] [DAP] [DPU] [DDP]`
  - `Hover Inspector: Inspect station obligations (loading, export clearance, ocean transit, import duty)`
- **Micro-Check Question**:
  - *Question*: Under INCOTERMS 2020 CIF (Cost, Insurance and Freight), if cargo is lost at sea during oceanic transit, who bears the physical financial risk of cargo loss?
  - *Options*: (A) The seller, because they paid the shipping freight, (B) The buyer, because risk passed once goods were loaded on board at origin port, (C) The ocean carrier alone, (D) Both parties equally.
  - *Correct Answer*: (B) Under CIF, cost and risk decouple: seller pays freight & insurance to destination, but risk transfers to buyer once loaded at origin port.

---

## Chapter 6: The Synchronized Horizon — S&OP & Bullwhip Damping

- **Chapter ID**: `ch06`
- **Slug**: `ch06-bullwhip-synchronization`
- **Core Concept**: Information distortion upstream in supply chains (Bullwhip Effect) and collaborative reconciliation via S&OP.
- **Target Learning Objectives**:
  1. Identify the 4 root causes of the Bullwhip Effect (Lee et al.): Demand Forecast Updating, Order Batching, Price Fluctuations, Rationing/Shortage Gaming.
  2. Contrast traditional fragmented departmental planning with the 5-step monthly S&OP consensus cycle.
  3. Quantify how POS data transparency and vendor-managed inventory (VMI) suppress variance amplification.
- **Stage Viewport**: 1600×900 4-Echelon Pulse Visualizer.
  - Tier 1: Retail End-Consumer (demand oscillation curve).
  - Tier 2: Retailer Store Inventory & Orders.
  - Tier 3: Regional Distributor Warehouse.
  - Tier 4: Primary Component Manufacturing Plant.
- **Storyboard Beats**:
  - *Beat 1 (The Amplified Shockwave)*: Small 5% bump in retail sales causes 15% distributor order surge, which turns into a 45% bullwhip surge at the manufacturing plant.
  - *Beat 2 (The Promotion Curse)*: Trigger a 20% trade price discount: forward buying causes a catastrophic surge followed by an order drought.
  - *Beat 3 (The S&OP / VMI Cure)*: Activate Point-of-Sale data streaming and monthly S&OP capacity consensus: order waves flatten into steady, smooth flow.
- **Active Interactive Controls**:
  - `Slider: Consumer Demand Volatility (±2% to ±25%)`
  - `Toggle: Order Batching Frequency (Weekly vs. Monthly)`
  - `Toggle: Promotional Price Discount (Active / Inactive)`
  - `Toggle: Shared POS Transparency / S&OP (Enabled / Disabled)`
- **Micro-Check Question**:
  - *Question*: Which of the following mechanisms directly attacks the "Order Batching" cause of the Bullwhip Effect?
  - *Options*: (A) Imposing higher minimum order quantities, (B) Moving to Electronic Data Interchange (EDI) and smaller, frequent mixed-SKU deliveries, (C) Running quarterly sales promotions, (D) Canceling S&OP meetings.
  - *Correct Answer*: (B) Smaller, frequent replenishment shipments break up large periodic batch shocks.

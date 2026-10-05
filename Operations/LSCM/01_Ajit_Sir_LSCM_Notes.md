# Logistics & Supply Chain Management: Faculty Study Guide — Prof. Ajit M. Maurya
## Architecture, Strategy, Demand Management, Logistics Networks & Reverse Flows
### Welingkar Institute of Management Development & Research (WeSchool) | PGDM Trimester IV

---

## Pedagogical Navigation & Core Modules
* **[Module 1: Supply Chain Architecture, Drivers & Strategic Fit (Session 1)](#module-1-supply-chain-architecture-drivers--strategic-fit)**
  * SCM Historical Evolution & The Strategic Triad
  * The Six Foundational Supply Chain Drivers
  * Marshall Fisher’s Strategic Alignment Matrix (Functional vs. Innovative)
  * Porter’s Value Chain Extended into Supply Networks
  * Supply Chain Analytics, Metrics & Computer Simulation
* **[Module 2: Demand Planning, S&OP Cadence & S&OE Synchronization (Session 2)](#module-2-demand-planning-sop-cadence--soe-synchronization)**
  * Demand Forecasting vs. Demand Management
  * The Three Dimensions of Demand Planning (Time, Geography, Product)
  * Ensuring Consistency in Forecasted Data
  * The 5-Step Monthly S&OP Process vs. Tactical S&OE Execution
* **[Module 3: Logistics System Design & Multi-Echelon Networks (Session 3)](#module-3-logistics-system-design--multi-echelon-networks)**
  * The Fundamental Network Cost Curve (Freight vs. Inventory vs. Facilities)
  * Square Root Law of Safety Stock Centralization
  * Center of Gravity (Gravity Location Model)
  * Multi-Echelon & Multi-Channel Distribution Topologies
* **[Module 4: Transportation Economics, Unitising & Logistics Costing (Session 4)](#module-4-transportation-economics-unitising--logistics-costing)**
  * Primary Transport (Line-Haul / FTL) vs. Secondary Transport (Last-Mile / LTL)
  * The Unit Load Principle & Packaging Standards (ISO Pallets & Containers)
  * Logistics Cost Performance Ratios (% of Sales & % of Value Added)
* **[Module 5: Logistics Information Systems, Reverse Logistics & 3PL/4PL (Session 5)](#module-5-logistics-information-systems-reverse-logistics--3pl4pl)**
  * Integrated LIS Architecture: OMS, ERP, WMS, TMS
  * Reverse Logistics & The 5 Rs Framework (Gatekeeping Doctrine)
  * Outsourced Logistics Continuum: 1PL to 4PL (Lead Logistics Partner)
* **[Module 6: In-Depth Strategic Enterprise Case Analyses](#module-6-in-depth-strategic-enterprise-case-analyses)**
  * Case 1: Amazon — Multi-Tier Fulfillment & Last-Mile Delivery Density
  * Case 2: Apple — Cash Conversion Supremacy & Component Exclusivity
  * Case 3: McDonald’s — Dedicated 3PL Cold Chain Infrastructure
  * Case 4: Toyota — Lean Pull Replenishment & Waste Elimination (*TPS*)
  * Case 5: US Solar — Geopolitical Onshoring & Wafer Chokepoints
* **[Module 7: Model Exam Answers & Verified PYQ Mappings (2023–2025)](#module-7-model-exam-answers--verified-pyq-mappings)**

---

# Module 1: Supply Chain Architecture, Drivers & Strategic Fit

### 1. What is it?
Supply Chain Management (SCM) is the strategic design, planning, execution, control, and monitoring of supply chain activities with the objective of creating net value, building a competitive infrastructure, leveraging worldwide logistics, synchronizing supply with demand, and measuring performance globally.

### 2. Why does it matter?
Modern competition is no longer between individual commercial enterprises; **competition is between entire supply chain networks**. An enterprise with superior manufacturing but an unaligned supply chain suffers from high working capital, frequent stockouts, margin erosion, and brand obsolescence.

### 3. SCM Historical Evolution: The 3 Eras
* **1970s Operational Silos:** Purchasing, warehousing, and transportation functioned as independent, non-communicative departments. Purchasing sought bulk volume discounts (flooding warehouses); transportation waited for full loads (causing delays); sales promised unrealistic delivery dates.
* **1990s Internal Functional Integration:** The advent of Enterprise Resource Planning (ERP) unified finance, sales, and manufacturing. Focus shifted to internal efficiency, Lean manufacturing, and Total Quality Management (TQM).
* **2020s Extended Value-Chain Ecosystems:** Boundaryless synchronization across tier-1, tier-2 suppliers, 3PL partners, and retail channels. Balanced across the **Strategic Triad**:
  * **Cost Efficiency:** Minimizing total landed cost and working capital investment.
  * **Market Responsiveness:** Ability to rapidly detect and fulfill unexpected shifts in customer demand.
  * **Supply Network Resilience:** Ability to anticipate, absorb, and rapidly recover from global systemic shocks (pandemics, wars, port strikes).

```
=================================================================================
THE STRATEGIC TRIAD OF MODERN SCM
=================================================================================
             [COST EFFICIENCY]
             /               \
            /                 \
           /                   \
[MARKET RESPONSIVENESS] ------- [NETWORK RESILIENCE]
=================================================================================
```

### 4. The Six Foundational Supply Chain Drivers
Supply chain capabilities are governed by six operational drivers categorized into logistical and cross-functional pillars:

#### Logistical Drivers:
1. **Facilities:**
   * *Role:* Physical sites where inventory is transformed (manufacturing plants) or stored (warehouses/DCs).
   * *Trade-off:* **Centralization vs. Proximity**. Centralizing in a single mega-facility yields massive economies of scale and low inventory holding, but increases outbound freight costs and customer transit times. Decentralizing across multiple hubs brings inventory closer to consumers (compressing delivery times), but multiplies safety stock requirements and facility overhead.
2. **Inventory:**
   * *Role:* Buffers mismatches between supply and demand. Shapes the Cash-to-Cash cycle and asset turnover.
   * *Trade-off:* **Availability vs. Carrying Cost**. High inventory levels prevent lost sales and stockouts, but tie up cash, incur storage costs, and risk severe obsolescence write-downs.
3. **Transportation:**
   * *Role:* Connects geographic nodes across the network.
   * *Trade-off:* **Speed vs. Freight Cost**. Air freight delivers maximum responsiveness and compresses pipeline inventory, but costs 6–10x more per ton-km than ocean or rail freight. Maritime freight offers minimal unit cost, but requires large pipeline stocks and extends lead times by 30–45 days.

#### Cross-Functional Drivers:
4. **Information:**
   * *Role:* The nervous system of the supply chain; connects enterprise ERPs, warehouse WMSs, and carrier TMSs to provide real-time visibility.
   * *Trade-off:* **Information Accuracy/Investment vs. Operational Fog**. Advanced telematics and digital twins require substantial IT capital investments, but enable demand sensing, dynamic routing, and bullwhip dampening.
5. **Sourcing:**
   * *Role:* Determines which activities are performed in-house (insourcing) versus contracted to external partners (outsourcing/3PL).
   * *Trade-off:* **Control/Core IP vs. Scale/Flexibility**. In-house manufacturing preserves intellectual property and quality, but creates heavy fixed capital commitments. Outsourcing converts fixed costs into variable costs, but introduces supplier risk and loss of direct control.
6. **Pricing:**
   * *Role:* Manages customer demand through pricing structures, discounts, and trade promotions.
   * *Trade-off:* **Demand Stabilization vs. Promotional Surges**. Everyday Low Pricing (EDLP) stabilizes demand and eliminates artificial order spikes; high-low promotional discounts drive temporary volume surges but trigger catastrophic upstream Bullwhip distortions.

---

### 5. Marshall Fisher’s Strategic Alignment Matrix
Marshall Fisher established that the primary cause of supply chain failure is a **mismatch between the product demand profile and the supply chain operating configuration**.

```
=================================================================================
FISHER'S STRATEGIC ALIGNMENT MATRIX
=================================================================================
                            FUNCTIONAL PRODUCTS         INNOVATIVE PRODUCTS
---------------------------------------------------------------------------------
Demand Predictability       High (Predictable)          Low (Unpredictable)
Product Life Cycle          Long (> 2 Years)            Short (3 to 12 Months)
Contribution Margin         Low (5% to 20%)             High (20% to 60%)
Product Variety             Low (10 to 20 SKUs)         High (Thousands of SKUs)
Forecast Error Rate         Low (< 10%)                 High (40% to 100%)
Stockout Rate               Low (1% to 2%)              High (10% to 40%)
End-of-Season Markdown      Virtually 0%                High (10% to 30%)
---------------------------------------------------------------------------------
REQUIRED SUPPLY CHAIN       PHYSICALLY EFFICIENT        MARKET-RESPONSIVE
PRIMARY GOAL                Supply at lowest cost       Respond quickly to demand
MANUFACTURING FOCUS         High capacity utilization   Deploy buffer flexibility
INVENTORY STRATEGY          Minimize inventory / JIT    Forward-deploy safety buffers
LEAD TIME STRATEGY          Shorten if cost neutral     Aggressively compress time
SUPPLIER SELECTION          Cost and low unit price     Speed, agility, flexibility
=================================================================================
```

* **Strategic Insight:**
  * Running an *Innovative Product* through an *Efficient Chain* results in lost sales, retail stockouts, and dissatisfied customers because the chain cannot ramp up production quickly.
  * Running a *Functional Product* through a *Responsive Chain* results in uncompetitive landed costs and compressed margins because the enterprise pays a premium for speed and buffer capacity that the customer is unwilling to finance.

---

### 6. Michael Porter’s Value Chain in SCM
* **Internal Value Chain:** Primary activities (Inbound Logistics &rarr; Operations &rarr; Outbound Logistics &rarr; Marketing & Sales &rarr; Service) supported by secondary infrastructure (Procurement, Technology, HR, Firm Infrastructure).
* **Extended Supply Value Network:** The transformation occurs when internal value chains are digitally interconnected with the upstream value chains of Tier-1/Tier-2 suppliers and downstream value chains of distributors and retailers, converting transactional purchase orders into collaborative value co-creation.

---

### 7. Diagnostic & Financial SCM Metrics
Prof. Ajit Maurya stresses the importance of measuring logistics through financial velocity and operational precision:

1. **Inventory Turnover Ratio (ITR):**
   $$ITR = \frac{\text{Cost of Goods Sold (COGS)}}{\text{Average Inventory Investment}}$$
   * *Interpretation:* Indicates how many times a company's total inventory is completely sold and replaced over a year. A higher ratio indicates superior capital velocity and low holding costs.

2. **Days of Supply (DOS):**
   $$DOS = \frac{365}{ITR} = \left(\frac{\text{Average Inventory}}{\text{COGS}}\right) \times 365$$
   * *Interpretation:* The number of operational days the enterprise can sustain sales without receiving any replenishment stock.

3. **Cash-to-Cash (C2C) Cycle Time:**
   $$C2C = DIO + DSO - DPO$$
   * Where:
     * $DIO = \left(\frac{\text{Average Inventory}}{\text{COGS}}\right) \times 365$ (Days Inventory Outstanding)
     * $DSO = \left(\frac{\text{Accounts Receivable}}{\text{Gross Revenue}}\right) \times 365$ (Days Sales Outstanding)
     * $DPO = \left(\frac{\text{Accounts Payable}}{\text{Cost of Goods Sold}}\right) \times 365$ (Days Payables Outstanding)
   * *Strategic Implication:* When $C2C$ is negative (e.g., Apple, Amazon), the enterprise collects cash from customers weeks before paying its suppliers, using supplier capital to finance corporate growth.

4. **On-Time In-Full (OTIF):**
   $$OTIF (\%) = \left(\frac{\text{Orders Delivered On-Time} \cap \text{Complete In-Full} \cap \text{Undamaged}}{\text{Total Orders Dispatched}}\right) \times 100$$
   * *The Perfect Order Metric:* A failure in any single parameter (e.g., 98% on-time but only 90% complete) results in an OTIF failure, directly impacting retail service scores.

---

# Module 2: Demand Planning, S&OP Cadence & S&OE Synchronization

### 1. Demand Management vs. Demand Forecasting
* **Demand Forecasting:** The statistical estimation of unconstrained future consumer demand using quantitative time-series models (Moving Averages, Exponential Smoothing, ARIMA) and qualitative intelligence (Delphi method, sales force composite).
* **Demand Management:** The active orchestration of customer demand to align with manufacturing capacity and logistics infrastructure through dynamic pricing, planned promotional schedules, lead-time commitments, and customer allocations.

### 2. The Three Dimensions of Demand Planning
1. **Time Horizon:**
   * *Strategic (1–5 Years):* Network topology, factory construction, long-term supplier partnerships.
   * *Tactical (1–18 Months):* Aggregate production planning, seasonal inventory build, S&OP process.
   * *Operational (Daily to 12 Weeks):* Machine scheduling, weekly master production schedule (MPS), S&OE execution.
2. **Geographic Hierarchy:**
   * Global & Continental Allocations &rarr; National Central Hubs &rarr; Regional Warehouses &rarr; Hyperlocal Urban Dark Stores / Retail Stores.
3. **Product Aggregation Level:**
   * Business Unit / Product Family &rarr; Modular Platform &rarr; Finished Good Stock Keeping Unit (SKU).

### 3. The 5-Step Monthly S&OP Cadence vs. S&OE
Sales and Operations Planning (S&OP) is an executive decision-making process that aligns commercial sales plans with operational supply capabilities into a single, financially viable Operating Plan.

```
=================================================================================
THE 5-STEP MONTHLY S&OP CADENCE
=================================================================================
[Step 1: Data Gathering] (Days 1–3)
  • Extract shipment data, clean POS outliers, compile order backlog.
          │
          ▼
[Step 2: Demand Planning] (Days 4–7)
  • Sales & Marketing develop unconstrained commercial demand forecast.
          │
          ▼
[Step 3: Supply Planning] (Days 8–12)
  • Operations, Logistics & Procurement evaluate capacity, tooling, raw materials.
          │
          ▼
[Step 4: Pre-S&OP Meeting] (Days 13–16)
  • Cross-functional reconciliation of demand-supply gaps, inventory build, overtime.
          │
          ▼
[Step 5: Executive S&OP] (Days 17–20)
  • C-Suite approves the binding master operating plan committing corporate capital.
=================================================================================
```

* **S&OE (Sales & Operations Execution):**
  * Operates on a daily to 12-week tactical horizon.
  * Tracks actual orders against the monthly S&OP baseline.
  * Manages daily factory downtime, supplier delivery delays, and short-term demand surges, ensuring the business does not deviate from the monthly executive plan.

---

# Module 3: Logistics System Design & Multi-Echelon Networks

### 1. The Fundamental Network Cost Curve
When designing a distribution network, adding regional warehouse nodes creates conflicting cost dynamics:
* **Transportation Costs:** Inbound line-haul freight costs increase because shipments are split across multiple smaller facilities; however, outbound last-mile delivery costs decrease because delivery trucks operate closer to customer clusters.
* **Facility Fixed Costs:** Increase linearly with each additional leased or constructed distribution facility.
* **Inventory Holding Costs:** Increase significantly due to safety stock decentralization.
* **Total Logistics Cost Curve:** Convex (U-shaped). The optimal network design balances these four costs to identify the lowest total cost node count.

```
=================================================================================
TOTAL LOGISTICS NETWORK COST CURVE
=================================================================================
Cost ($)
  ^                                          / Total Logistics Cost
  |                                         /  (Lowest at N*)
  |             \                          /
  |              \                        /   Facility & Inventory Costs
  |               \                      /    (Increase with N)
  |                \__                  /
  |                   \---____         /
  |                           \_______/
  |                                   \       Outbound Transport Costs
  |                                    \      (Decrease with N)
  +--------------------------------------------> Number of Warehouses (N)
                                  N*
=================================================================================
```

### 2. Square Root Law of Inventory Centralization
When an organization consolidates $N_{\text{old}}$ regional distribution centers into $N_{\text{new}}$ centralized facilities (or vice versa), total safety stock requirements scale with the square root of the facility count ratio:

$$SS_{\text{new}} = SS_{\text{old}} \times \sqrt{\frac{N_{\text{new}}}{N_{\text{old}}}}$$

* **Numerical Proof:**
  * Suppose an enterprise operates 16 regional warehouses holding a total safety stock of 10,000 units.
  * If the network is centralized into 4 regional mega-hubs:
    $$SS_{\text{new}} = 10,000 \times \sqrt{\frac{4}{16}} = 10,000 \times \sqrt{0.25} = 10,000 \times 0.50 = \mathbf{5,000 \text{ units}}$$
  * Centralization cuts required safety stock by **50% (5,000 units)** without reducing customer service levels, freeing up significant working capital.

### 3. Center of Gravity (Gravity Location Model)
A quantitative method used to determine the optimal geographical coordinates $(X^*, Y^*)$ for a central distribution center that minimizes total transportation costs:

$$X^* = \frac{\sum (X_i \cdot W_i \cdot R_i)}{\sum (W_i \cdot R_i)}, \quad Y^* = \frac{\sum (Y_i \cdot W_i \cdot R_i)}{\sum (W_i \cdot R_i)}$$

* Where:
  * $(X_i, Y_i)$ = Spatial coordinates of destination market or supply origin $i$.
  * $W_i$ = Cargo volume/tonnage shipped to or from location $i$.
  * $R_i$ = Freight transportation rate per ton-kilometer for route $i$.

---

# Module 4: Transportation Economics, Unitising & Logistics Costing

### 1. Primary vs. Secondary Transportation
```
=================================================================================
PRIMARY VS. SECONDARY TRANSPORTATION COMPARISON
=================================================================================
DIMENSION               PRIMARY (LINE-HAUL)             SECONDARY (LAST-MILE)
---------------------------------------------------------------------------------
Operational Scope       Plant to Mother DC / Hub        Regional DC to Stores / Doors
Shipment Size           Full Truckload (FTL / FCL)      Less-Than-Truckload (LTL / Milk)
Vehicle Type            Heavy 32-40 Ton Multi-Axle      Light 1-3.5 Ton Vans / EVs
Cost Driver             Cost per Ton-Kilometer          Cost per Drop / Delivery
Key Optimization        Maximizing payload & backhauls  Route sequencing (VRP)
Transit Distance        Long haul (300 to 2,000+ km)    Hyperlocal (5 to 80 km)
=================================================================================
```

### 2. Unitising & The Unit Load Principle
* **Definition:** Consolidating individual items or cartons into a single standardized handling unit (pallet, container) to enable rapid mechanical lifting and prevent cargo damage.
* **Standard Pallet Dimensions:**
  * *ISO / UK / India Pallet:* $1000\text{mm} \times 1200\text{mm}$ ($40 \text{ in} \times 48 \text{ in}$).
  * *Euro Pallet (EUR 1):* $800\text{mm} \times 1200\text{mm}$ ($31.5 \text{ in} \times 47.2 \text{ in}$), optimized for standard European rail cars and truck widths.
* **Ocean Freight Container Standards:**
  * *20ft TEU (Twenty-Foot Equivalent Unit):* Internal volume $\approx 33.2 \text{ CBM}$, payload capacity $\approx 25,000 \text{ kg}$.
  * *40ft FEU (Forty-Foot Equivalent Unit):* Internal volume $\approx 67.7 \text{ CBM}$, ideal for voluminous, low-density cargo.

### 3. Logistics Cost Ratios
Logistics performance should be tracked as a standardized percentage of corporate commercial activity:

$$\text{Logistics Cost \% of Sales} = \left(\frac{\text{Total Annual Logistics Cost}}{\text{Gross Revenue}}\right) \times 100$$

$$\text{Logistics Cost \% of Value Added} = \left(\frac{\text{Total Annual Logistics Cost}}{\text{Gross Revenue} - \text{Purchased Direct Materials}}\right) \times 100$$

---

# Module 5: Logistics Information Systems, Reverse Logistics & 3PL/4PL

### 1. The Integrated LIS Software Stack
* **Order Management System (OMS):** Captures customer orders across all channels, verifies customer credit, determines item fulfillment routing, and tracks order progress.
* **Enterprise Resource Planning (ERP):** Enterprise database managing master bills of material, inventory accounting, general ledgers, accounts payable, and production scheduling.
* **Warehouse Management System (WMS):** Directs put-away slotting, batch and wave picking, cross-dock sequencing, labor standards, and inventory cycle counting.
* **Transportation Management System (TMS):** Optimizes multi-stop route sequencing, carrier rate procurement, freight audit, and electronic Proof of Delivery (e-POD).

### 2. Reverse Logistics & The 5 Rs Framework
Reverse logistics encompasses the planning, implementation, and control of backward flows of raw materials, in-process inventory, packaging, and finished goods from consumption points back to manufacturing nodes for value recovery or disposal.

```
=================================================================================
THE 5 Rs REVERSE LOGISTICS FRAMEWORK
=================================================================================
1. RETURN          • Commercial consumer returns (e-commerce returns, sizing errors).
2. REPAIR          • Warranty service, component replacement, maintenance.
3. REMANUFACTURE   • Disassembling and restoring worn products to OEM specifications.
4. RECYCLE         • Shredding, melting, and reclaiming raw raw materials.
5. RESELL          • Secondary clearance markets, liquidators, factory outlets.
=================================================================================
```

* **The Gatekeeping Doctrine:**
  * Gatekeeping is the critical screening process conducted at the initial point of customer return entry (store counter, courier doorstep pickup).
  * *Objective:* Inspect product authenticity, verify return policy compliance, and reject fraudulent or unserviceable claims **before** the item enters the expensive reverse transportation pipeline, eliminating unnecessary freight and handling costs.

### 3. Outsourced Logistics Spectrum (1PL to 4PL)
```
=================================================================================
OUTSOURCED LOGISTICS SPECTRUM
=================================================================================
LEVEL   TITLE               ASSET BASE          OPERATIONAL SCOPE
---------------------------------------------------------------------------------
1PL     First-Party         100% Owned Fleets   Shipper executes own logistics in-house.
2PL     Second-Party        Asset Carriers      Point-to-point transport (Maersk, FedEx).
3PL     Third-Party         Warehouses & Trucks Bundled warehousing, customs, freight.
4PL     Fourth-Party (LLP)  Non-Asset (Tech)    Lead Logistics Partner orchestrating
                                                multiple 3PLs via a central Control Tower.
=================================================================================
```

---

# Module 6: In-Depth Strategic Enterprise Case Analyses

### Case 1: Amazon — Multi-Tier Fulfillment & Last-Mile Delivery Density
* **Problem / Strategic Focus:** Compressing order fulfillment time from 2 days to same-day delivery while managing millions of diverse SKUs.
* **Architectural Execution:**
  * *Tiered Facility Topology:* Inbound Cross-Dock Facilities (IXDs) &rarr; Massive Outbound Fulfillment Centers (FCs, 1M+ sq. ft.) &rarr; Sortation Centers (sorting packages by zip code) &rarr; Urban Delivery Stations &rarr; End Consumer.
  * *Robotic Goods-to-Person:* Kiva AMRs move entire storage pods to stationary human pickers, cutting picker walking travel by 75% and tripling hourly throughput.
  * *Delivery Density Economics:* By launching its own delivery network (Amazon Logistics / DSP), Amazon captured high drop density in urban corridors, making last-mile delivery cheaper than using commercial carriers like UPS or FedEx.

### Case 2: Apple — Cash Conversion Supremacy & Component Exclusivity
* **Problem / Strategic Focus:** Launching millions of complex smartphones globally on a single day without incurring post-launch obsolescence write-downs.
* **Architectural Execution:**
  * *Air Freight Deployment:* Airfreights new iPhones directly from contract manufacturing hubs in China to global distribution centers in belly holds of commercial flights, compressing lead times to 3 days.
  * *Negative Cash Conversion Cycle:* Apple collects revenue from retail stores and carrier partners in 3–5 days ($DSO$), turns inventory rapidly in 5–8 days ($DIO$), but negotiates 90–120 day payment terms with suppliers ($DPO$). The resulting negative $C2C$ cycle (-80 days) provides billions in free working capital.
  * *Capital Sourcing Exclusivity:* Apple uses its massive cash balances to prepay suppliers for custom CNC milling machines, securing proprietary capacity while locking out competitors.

### Case 3: McDonald’s — Dedicated 3PL Cold Chain Infrastructure
* **Problem / Strategic Focus:** Scaling quick-service restaurant operations across India without compromising food quality in high ambient temperatures.
* **Architectural Execution:**
  * *Dedicated Cold-Chain Partnership:* Partnered with Radhakrishna Foodland as a dedicated 3PL provider.
  * *End-to-End Multi-Temperature Distribution:* Multi-compartment reefer trucks maintain three strict temperature zones: Frozen (-18°C for patties/fries), Chilled (+1°C to +4°C for dairy/produce), and Ambient (buns/packaging).
  * *Strict Cold Chain Discipline:* Automated data loggers track reefer temperatures throughout transit; any load experiencing a temperature deviation is rejected at the restaurant dock door.

### Case 4: Toyota — Lean Pull Replenishment & Waste Elimination (*TPS*)
* **Problem / Strategic Focus:** Eliminating overproduction and warehouse holding costs in automotive manufacturing.
* **Architectural Execution:**
  * *Pull System via Kanban:* Upstream fabrication lines produce components only when triggered by downstream consumption Kanban cards.
  * *Supplier Milk-Runs:* Toyota-operated trucks make scheduled multi-stop milk-runs to tier-1 suppliers located within a 2-hour radius of the assembly plant, picking up small, frequent lot sizes several times per day.
  * *Poka-Yoke & Jidoka:* Mistake-proofing mechanisms and autonomous machine shutoffs ensure defective components never move to downstream assembly stations.

### Case 5: US Solar — Geopolitical Onshoring & Wafer Chokepoints
* **Problem / Strategic Focus:** Re-establishing a domestic solar manufacturing supply chain in the United States amidst heavy dependence on Chinese raw materials.
* **Architectural Execution:**
  * *Upstream Value Chain Disconnect:* While US manufacturers can assemble finished solar panels (modules), 95%+ of global solar ingots and polysilicon wafers are processed in China and Southeast Asia.
  * *Tariff & Subsidy Dynamics:* The US Inflation Reduction Act (IRA) offers production tax credits to incentivize domestic manufacturing; however, establishing domestic wafer fabrication requires massive capital investment and 3–5 years of regulatory permitting.
  * *Strategic Trade-Off:* Balancing short-term module assembly relying on imported tariffed cells against long-term capital investments in domestic polysilicon processing.

---

# Module 7: Model Exam Answers & Verified PYQ Mappings

### Solved PYQ 1: Fisher's Framework & Enterprise Strategies (10 Marks)
* **Exam Appearance:** End-Term 2023 (Q1.4, Q4.f) & 2024.
* **Verbatim Question:** Compare Responsive and Efficient Supply Chains using Marshall Fisher’s Framework. Provide two real-world enterprise examples.
* **Model 10-Mark Answer Structure:**
  1. *Introduction & Core Thesis:* State Fisher's fundamental principle—supply chain strategy must align with the market demand profile of the product.
  2. *Comparative Table:* Draw the full 8-row table comparing Functional vs. Innovative products (Demand predictability, Life cycle, Margin, Forecast error, Stockout rate, Markdowns, Supply chain goal, Supplier selection criteria).
  3. *Enterprise Examples:*
     * *Walmart / P&G (Efficient):* Focuses on everyday staples, uses cross-docking, automated EDI replenishment, and high full-truckload fill rates to minimize unit landed cost.
     * *Zara / Inditex (Responsive):* Operates flexible production in Portugal/Spain, holds buffer capacity, uses air cargo, and delivers new apparel designs from sketch to store shelves in under 15 days.
  4. *Strategic Breakdown Analysis:* Explain the financial consequences of misalignment (stockouts on innovative goods; excessive operational costs on functional goods).

### Solved PYQ 2: High-Tech Electronics Freight vs. Inventory Trade-off & EOQ Math (10 Marks)
* **Exam Appearance:** End-Term 2023, Question 2.
* **Verbatim Problem:**
  A manufacturer faces annual demand $D = 10,000$ units. Ordering cost $S = \$10/\text{order}$, unit purchase cost $C = \$10$, annual holding cost $H = \$5.00/\text{unit/year}$. Transport cost is $\$10.00$ per unit regardless of order size. Calculate EOQ, optimal order frequency, and total annual inventory plus transport cost.
* **Step-by-Step Model Solution:**
  * *1. Calculate Economic Order Quantity ($EOQ$):*
    $$EOQ = \sqrt{\frac{2DS}{H}} = \sqrt{\frac{2 \times 10,000 \times 10}{5}} = \sqrt{\frac{200,000}{5}} = \sqrt{40,000} = \mathbf{200 \text{ units}}$$
  * *2. Calculate Optimal Order Frequency ($N^*$):*
    $$N^* = \frac{D}{Q^*} = \frac{10,000}{200} = \mathbf{50 \text{ orders per year}}$$
  * *3. Calculate Annual Inventory Holding & Ordering Cost:*
    $$\text{Annual Ordering Cost} = \left(\frac{D}{Q^*}\right) S = 50 \times 10 = \$500.00$$
    $$\text{Annual Holding Cost} = \left(\frac{Q^*}{2}\right) H = \left(\frac{200}{2}\right) \times 5 = 100 \times 5 = \$500.00$$
    $$\text{Total Annual Inventory Cost} = \$500 + \$500 = \mathbf{\$1,000.00}$$
  * *4. Calculate Annual Transportation Cost:*
    $$\text{Annual Transport Cost} = D \times \text{Unit Freight} = 10,000 \times \$10.00 = \mathbf{\$100,000.00}$$
  * *5. Total Annual Logistics Cost:*
    $$TC = \$1,000.00 + \$100,000.00 = \mathbf{\$101,000.00 \text{ per year}}$$

# Logistics & Supply Chain Management: Faculty Study Guide — Prof. Praful More
## Quantitative Inventory Theory, Stochastic Models, Sourcing Matrices & Master Quiz Deck
### Welingkar Institute of Management Development & Research (WeSchool) | PGDM Trimester IV

---

## Pedagogical Navigation & Core Modules
* **[Module 1: Inventory Fundamentals, Economics & Cost Topologies](#module-1-inventory-fundamentals-economics--cost-topologies)**
  * Classification & Types of Inventory (Raw, WIP, FG, MRO, Pipeline)
  * Strategic Functions of Inventory
  * The Comprehensive Inventory Cost Structure (Carrying, Ordering, Stockout)
* **[Module 2: Deterministic Inventory Lot-Sizing Models](#module-2-deterministic-inventory-lot-sizing-models)**
  * Classical Economic Order Quantity (EOQ): Formula, Derivation & Total Cost
  * Economic Production Quantity (EPQ / Non-Instantaneous Receipt)
  * Quantity Discount Breakeven Optimization (All-Units Discount Schedule)
* **[Module 3: Managing Uncertainty, Safety Stock & Stochastic Inventory](#module-3-managing-uncertainty-safety-stock--stochastic-inventory)**
  * Safety Stock Formulations (Variable Demand, Variable Lead Time, Dual Uncertainty)
  * Cycle Service Level (CSL) & Normal Distribution $z$-Factor Lookup
  * Continuous Review $(r, Q)$ vs. Periodic Review $(R, S)$ Systems
  * ABC Inventory Classification & Cycle Counting Frequency
* **[Module 4: The Single-Period Stochastic (Newsvendor) Model](#module-4-the-single-period-stochastic-newsvendor-model)**
  * Critical Fractile ($CR$) Mathematical Formulation
  * Optimal Stocking Quantity ($Q^* = \mu + z \cdot \sigma$)
  * The Double Marginalization Dilemma in Decentralized Supply Chains
* **[Module 5: Strategic Sourcing, Kraljic Matrix & Total Cost of Ownership](#module-5-strategic-sourcing-kraljic-matrix--total-cost-of-ownership)**
  * The Kraljic Portfolio Purchasing Matrix (Strategic, Leverage, Bottleneck, Routine)
  * The Supplier Preferencing Model (Core, Development, Exploitable, Nuisance)
  * Total Cost of Ownership (TCO): Pre-Transaction, Transaction & Post-Transaction
* **[Module 6: Master Quiz Deck: Smart Warehousing, ESG & Maritime Chokepoints](#module-6-master-quiz-deck-smart-warehousing-esg--maritime-chokepoints)**
  * Smart Warehouse Technologies & 4-Step Implementation
  * Decarbonization & Scope 1–3 Emissions Accounting
  * Global Maritime Strategic Chokepoints (Red Sea, Suez, Panama, Malacca, Hormuz)
* **[Module 7: Core Case Study Analyses](#module-7-core-case-study-analyses)**
  * Case 1: Stock Up vs. Stock Out (Star Clinic Panadol / Clinical Triage)
  * Case 2: Just Baked (Cupcake Stocking & Double Marginalization)
  * Case 3: VF Corporation (Third-Wave Agile SCM & Dual Sourcing)
  * Case 4: Contrasting Online Grocery Models (Ocado ASRS vs. Instacart)
* **[Module 8: Model Exam Answers & Verified PYQ Mappings (2023–2025)](#module-8-model-exam-answers--verified-pyq-mappings)**

---

# Module 1: Inventory Fundamentals, Economics & Cost Topologies

### 1. Types & Functions of Inventory
* **Types of Inventory:**
  * *Raw Materials:* Unprocessed inputs awaiting production entry.
  * *Work-in-Process (WIP):* Semi-finished goods currently on factory floors or staging bins.
  * *Finished Goods:* Completed goods ready for customer dispatch.
  * *Maintenance, Repair & Operating (MRO):* Consumables (lubricants, spare valves, tooling) that support operations but do not enter finished products.
  * *Pipeline / Transit Inventory:* Stock currently in transit aboard container ships, rail cars, or delivery trucks ($I_{\text{pipe}} = d \times L$).
* **Strategic Functions:**
  1. *Decoupling Operations:* Shields downstream assembly stations from upstream machine breakdowns.
  2. *Seasonal Smoothing:* Absorbs production fluctuations during peak demand periods.
  3. *Capturing Scale Economies:* Enables bulk purchasing discounts and full truckload freight rates.
  4. *Buffering Uncertainty:* Protects customer order fulfillment from erratic demand surges and supplier delivery delays.

### 2. Comprehensive Inventory Cost Structure
```
=================================================================================
TOTAL INVENTORY COST BUCKETS
=================================================================================
1. INVENTORY CARRYING (HOLDING) COST (H = I * C):
   • Capital Cost (Financing interest / WACC hurdle rate: 10% to 18%)
   • Storage Space Cost (Warehouse rent, lighting, HVAC, racking: 3% to 5%)
   • Inventory Service Cost (Taxes and property insurance: 1% to 2%)
   • Inventory Risk Cost (Obsolescence, damage, spoilage, shrinkage: 4% to 10%)
   ------------------------------------------------------------------------------
   Typical Total Annual Carrying Rate (I): 18% to 35% of unit purchase price (C)

2. ORDERING / SETUP COST (S):
   • Procurement administrative labor, purchase order issuance, EDI processing
   • Machine teardown, recalibration, line changeover, tooling cleaning

3. STOCKOUT / SHORTAGE COST:
   • Lost gross margin on unmet demand, expedited emergency freight fees
   • Customer contractual SLA penalties and permanent brand defection
=================================================================================
```

---

# Module 2: Deterministic Inventory Lot-Sizing Models

### 1. Classical Economic Order Quantity (EOQ)
* **Mathematical Derivation:**
  Setting $\frac{d(TC)}{dQ} = 0$:
  $$TC = \left(\frac{D}{Q}\right)S + \left(\frac{Q}{2}\right)H$$
  $$\frac{d(TC)}{dQ} = -\frac{DS}{Q^2} + \frac{H}{2} = 0 \implies \frac{DS}{Q^2} = \frac{H}{2} \implies Q^2 = \frac{2DS}{H}$$
  $$EOQ (Q^*) = \sqrt{\frac{2DS}{H}}$$
* **Core Variables:**
  * $D$: Annual Demand in units.
  * $S$: Fixed ordering/setup cost per replenishment order.
  * $H$: Annual holding cost per unit ($H = I \times C$).
  * $N^*$: Optimal order frequency $= D / Q^*$.
  * $T^*$: Cycle time between orders $= (Q^* / D) \times \text{Working Days}$.
* **Assumptions:** Constant deterministic demand; instantaneous replenishment; zero lead-time stockouts; constant unit price (no discounts); infinite planning horizon.
* **Common Student Mistake:** Failing to convert time units consistently (e.g., using monthly demand with annual holding costs).

---

### 2. Economic Production Quantity (EPQ / Non-Instantaneous Receipt)
* **Operational Setting:** When an enterprise manufactures components in-house, inventory accumulates gradually over a production run while consumption simultaneously occurs at daily rate $d$ from daily production rate $p$ ($p > d$).
* **Formula:**
  $$EPQ (Q^*) = \sqrt{\frac{2DS}{H\left(1 - \frac{d}{p}\right)}}$$
* **Peak Inventory Level ($I_{\max}$):**
  $$I_{\max} = Q^* \left(1 - \frac{d}{p}\right)$$
* **Length of Production Run ($t_1$):**
  $$t_1 = \frac{Q^*}{p}$$

---

### 3. Quantity Discount Breakeven Optimization
* **Step-by-Step Optimization Procedure:**
  1. Compute EOQ for the lowest unit price tier ($C_{\text{lowest}}$).
  2. If calculated EOQ is feasible within that price range, it is the optimal order quantity.
  3. If infeasible, evaluate EOQ for the next higher price tier.
  4. Once a feasible EOQ is found, compute Total Annual Cost ($TC$) at that feasible EOQ and at **every price breakpoint above it**:
     $$TC(Q) = (D \cdot C) + \left(\frac{D}{Q}\right)S + \left(\frac{Q}{2}\right)(I \cdot C)$$
  5. Select the quantity $Q$ yielding the lowest total annual cost.

---

# Module 3: Managing Uncertainty, Safety Stock & Stochastic Inventory

### 1. Safety Stock Mathematical Formulations
```
=================================================================================
SAFETY STOCK & REORDER POINT UNDER UNCERTAINTY
=================================================================================
SCENARIO                                FORMULATION
---------------------------------------------------------------------------------
Case A: Demand Variable, Lead Time Fixed  SS = z * σ_d * sqrt(L)
Case B: Lead Time Variable, Demand Fixed  SS = z * d * σ_L
Case C: Both Variable (Dual Uncertainty)  SS = z * sqrt( L * (σ_d)^2 + d^2 * (σ_L)^2 )
---------------------------------------------------------------------------------
Reorder Point (ROP):                     ROP = (d * L) + SS
=================================================================================
```

### 2. Normal Distribution $z$-Factor Lookup Table
| Cycle Service Level (CSL) | Normal $z$-Factor |
| :---: | :---: |
| **90.0%** | $z = 1.282$ |
| **95.0%** | $z = 1.645$ |
| **97.5%** | $z = 1.960$ |
| **99.0%** | $z = 2.326$ |
| **99.9%** | $z = 3.090$ |

* **Managerial Insight:** As service levels approach 100%, the normal curve asymptotes to infinity, exponentially increasing required safety stock and inventory carrying cost.

---

# Module 4: The Single-Period Stochastic (Newsvendor) Model

### 1. When to Use
Applies to highly perishable, seasonal, or short-lifecycle items (fashion apparel, holiday merchandise, seasonal influenza vaccines) where unsold units at season-end have little or no salvage value.

### 2. Critical Fractile Derivation
* **Cost of Understocking ($C_u$):** Profit margin lost per unit of unmet customer demand ($C_u = P - C$).
* **Cost of Overstocking ($C_o$):** Financial loss incurred per unsold unit discarded or salvaged ($C_o = C - S$).
* **Marginal Analysis:**
  At the optimal stocking quantity $Q^*$, expected marginal benefit equals expected marginal cost:
  $$C_u \cdot P(D > Q^*) = C_o \cdot P(D \le Q^*)$$
  $$C_u \cdot (1 - F(Q^*)) = C_o \cdot F(Q^*)$$
  $$C_u - C_u \cdot F(Q^*) = C_o \cdot F(Q^*)$$
  $$F(Q^*) \cdot (C_u + C_o) = C_u \implies F(Q^*) = \frac{C_u}{C_u + C_o} = CR$$
* **Optimal Stocking Quantity:**
  $$Q^* = \mu + z \cdot \sigma \quad [\text{where } \Phi(z) = CR]$$

### 3. The Double Marginalization Dilemma
* When supply chain members act independently, the downstream retailer orders based on its own profit margin ($C_u^{\text{retailer}} = P - W$), while the entire supply chain earns a larger margin ($C_u^{\text{chain}} = P - C_{\text{mfg}}$).
* Because $CR_{\text{retailer}} < CR_{\text{chain}}$, the decentralized retailer orders significantly fewer units than the system optimum, destroying total channel profitability.

---

# Module 5: Strategic Sourcing, Kraljic Matrix & Total Cost of Ownership

### 1. The Kraljic Portfolio Purchasing Matrix
```
=================================================================================
KRALJIC PORTFOLIO PURCHASING MATRIX
=================================================================================
PROFIT IMPACT ^
              |   [LEVERAGE ITEMS]                 [STRATEGIC ITEMS]
              |   • High Spend, Low Supply Risk    • High Spend, High Supply Risk
              |   • Commodities, Bulk Raw Materials• Microchips, Custom Engines
              |   • Strategy: Reverse auctions,    • Strategy: Strategic alliances,
              |     exploiting buyer scale           co-development, risk-sharing
              |
              |   [ROUTINE ITEMS]                  [BOTTLENECK ITEMS]
              |   • Low Spend, Low Supply Risk     • Low Spend, High Supply Risk
              |   • Office Supplies, Fasteners     • Proprietary Catalysts, Spares
              |   • Strategy: P-Cards, automated   • Strategy: Buffer stocks,
              |     e-procurement catalogs           long-term supply contracts
              +--------------------------------------------------------------->
                                                      SUPPLY MARKET RISK
=================================================================================
```

### 2. Supplier Preferencing Model
Complements Kraljic by evaluating how the supplier views the buyer:
* **Core:** High spend, highly attractive buyer; supplier dedicates executive resources and best engineering talent.
* **Development:** Low spend, high potential attractiveness; supplier invests to expand account size.
* **Exploitable:** High spend, low attractiveness; supplier extracts high prices and will exit when capacity tightens.
* **Nuisance:** Low spend, low attractiveness; supplier provides bare minimum service.

---

# Module 6: Master Quiz Deck: Smart Warehousing, ESG & Maritime Chokepoints

### 1. Smart Warehouse Implementation Roadmap
* Closed-loop architecture: **Sense** (IoT/RFID) &rarr; **Decide** (AI dynamic slotting) &rarr; **Act** (AMRs, AGVs, ASRS) &rarr; **Learn** (ML cycle time feedback).

### 2. ESG & Carbon Accounting in SCM
* **Scope 1:** Direct emissions from company-owned truck fleets and warehouse diesel generators.
* **Scope 2:** Indirect emissions from purchased warehouse electricity and HVAC utilities.
* **Scope 3 (80%+ of total footprint):** Indirect emissions across upstream and downstream networks (contract ocean freight, 3PL trucking, raw material supplier factories).

### 3. Global Maritime Strategic Chokepoints
* **Bab el-Mandeb & Suez Canal:** Houthi missile strikes forced container vessels to bypass the Red Sea and sail around Africa's Cape of Good Hope, adding 10–14 transit days and absorbing 10% of global container capacity.
* **Panama Canal:** Climate-induced freshwater droughts restricted daily vessel transit slots, creating massive queues and driving up bulk shipping rates.
* **Strait of Malacca & Hormuz:** Critical narrow shipping corridors connecting the Indian Ocean to East Asia and Middle Eastern petroleum hubs.

---

# Module 7: Core Case Study Analyses

### Case 1: Stock Up vs. Stock Out (Star Clinic Panadol / Clinical Triage)
* **Dilemma:** Clinical Director wants 100% service level for all items; Finance wants minimal inventory.
* **Resolution:** Medical triage segmentation. Setting non-critical Panadol at 99% CSL ($z = 2.33$) requires holding only 28 more tablets than a 97.5% CSL, adding just **\$2.80 in annual holding cost**, achieving clinical peace of mind without financial bloat.

### Case 2: Just Baked (Cupcake Stocking & Double Marginalization)
* Corporate bakes cupcakes for \$1.20 and sells to franchisees for \$1.50, who retail them for \$3.00. Unsold cupcakes have zero salvage value.
* Franchisee $CR = (3.00 - 1.50) / 3.00 = 50\%$.
* Integrated Chain $CR = (3.00 - 1.20) / 3.00 = 60\%$.
* Franchisee under-orders relative to the channel optimum; resolved via centralized allocations or revenue-sharing contracts.

### Case 3: VF Corporation (Third-Wave Agile SCM & Dual Sourcing)
* VF Corp maintains a hybrid sourcing network: low-cost, long-lead production in Asia (Bangladesh, Vietnam) for predictable base demand, paired with high-speed, flexible nearshore manufacturing in Mexico for volatile in-season fashion replenishment.

### Case 4: Contrasting Online Grocery Models (Ocado ASRS vs. Instacart)
* **Ocado:** High-capex centralized automated customer fulfillment centers utilizing robotic grid hives; high picking speed, near-zero errors, high capital barrier.
* **Instacart:** Asset-light gig-economy shoppers picking from existing third-party supermarket aisles; zero capital expenditure, low picking speed, variable accuracy.

---

# Module 8: Model Exam Answers & Verified PYQ Mappings

### Solved PYQ 1: End-Term 2025 · Question 1 (15 Marks)
* **(a) Deterministic EOQ:** $D = 5,000, S = \$40, H = \$2.00 \implies EOQ = \sqrt{(2 \times 5,000 \times 40)/2} = \mathbf{447 \text{ units}}$. Total Cost $= \mathbf{\$894.43/\text{year}}$.
* **(b) Newsvendor Umbrella:** $D = 1,000, P = \$30, C = \$15, S = \$10 \implies C_u = \$15, C_o = \$5 \implies CR = 15/(15+5) = \mathbf{0.75} \implies \mathbf{z = 0.674}$.
* **(c) Continuous Review Vaccine:** $s = 200, S = 500, \mu_{DL} = 150, \sigma_{DL} = 30 \implies SS = 200 - 150 = \mathbf{50 \text{ doses}}$. $z = 50/30 = 1.67 \implies \mathbf{CSL = 95.25\%}$.

### Solved PYQ 2: End-Term 2024 · Question 2 (15 Marks)
* **ElectroTech Solutions Category A SKU:** $D = 50,000, S = \$100, H = \$2.00 \implies EOQ = \sqrt{(2 \times 50,000 \times 100)/2} = \mathbf{2,236 \text{ units}}$. $N^* = \mathbf{22.36 \text{ orders/yr}}$, Annual Holding Cost $= \mathbf{\$2,236.07/\text{year}}$.

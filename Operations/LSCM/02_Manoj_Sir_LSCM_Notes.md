# Logistics & Supply Chain Management: Faculty Study Guide — Prof. Manoj
## Warehousing Architecture, International Trade, INCOTERMS 2020, EXIM, Case Method, Digital Twins & CPFR
### Welingkar Institute of Management Development & Research (WeSchool) | PGDM Trimester IV

---

## Pedagogical Navigation & Core Modules
* **[Module 1: Warehouse Management Systems & Physical Layouts](#module-1-warehouse-management-systems--physical-layouts)**
  * Core Warehousing Processes (Receiving to Dispatch)
  * Picking Strategies (Batch, Zone, Wave, Goods-to-Person)
  * Layout Engineering: U-Shaped, I-Shaped (Cross-Dock), L-Shaped
  * DC vs. FC, Public vs. Private vs. Bonded Warehouses, Cold Chain
  * Automation & Material Handling (ASRS, AGVs, AMRs)
* **[Module 2: International Trade, Global Sourcing & Regulatory Environment](#module-2-international-trade-global-sourcing--regulatory-environment)**
  * Strategic Drivers of International Sourcing
  * Tariffs, Trade Barriers, CVD vs. ADD (Anti-Dumping)
  * Regional Trading Blocs, Rules of Origin & Free Trade Zones (FTZ / SEZ)
* **[Module 3: The INCOTERMS 2020 Decision Framework](#module-3-the-incoterms-2020-decision-framework)**
  * The 11 Standardized Rules (Multimodal vs. Maritime)
  * Key 2020 Updates (DPU, CIP All-Risk Insurance, FCA Onboard B/L)
  * Cost Transfer vs. Risk Transfer Points
  * Comparative Deep Dive: FOB vs. CIF & Protection for MSME Exporters
* **[Module 4: EXIM Processes, Documentation & Trade Finance](#module-4-exim-processes-documentation--trade-finance)**
  * The 8-Stage End-to-End Export-Import Workflow
  * Shipping Documentation: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin
  * Documentary Letters of Credit (LC): Mechanics, UCP 600 Rules, Confirmed vs. Unconfirmed
* **[Module 5: The SCM Case Study Method & Quantitative Optimization](#module-5-the-scm-case-study-method--quantitative-optimization)**
  * The 6-Step Case Analysis Methodology
  * Mathematical Modeling: Linear Programming (LP) & Transportation Simplex
* **[Module 6: Digital Twins, 9-Step CPFR & Emerging Technologies](#module-6-digital-twins-9-step-cpfr--emerging-technologies)**
  * Supply Chain Digital Twin Architecture & Closed-Loop Simulation
  * The 9-Step VICS CPFR Framework
  * Auto-ID: Barcodes (GS1), RFID (Active vs. Passive), IoT Telematics & AI
* **[Module 7: Model Exam Answers & Verified PYQ Mappings (2023–2025)](#module-7-model-exam-answers--verified-pyq-mappings)**

---

# Module 1: Warehouse Management Systems & Physical Layouts

### 1. What is it?
Warehouse Management is the operational control, coordination, and physical optimization of facilities that store, process, and consolidate inventory between points of origin and points of consumption.

### 2. Core Warehousing Operational Workflow
```
=================================================================================
CORE WAREHOUSE PROCESS FLOW
=================================================================================
[1. Inbound Receiving] &rarr; Check ASN, inspect packaging, verify seal numbers.
          │
          ▼
[2. Put-Away Logic]    &rarr; WMS directs SKU to optimal rack bin based on velocity.
          │
          ▼
[3. Storage & Reserve] &rarr; Bulk pallets stored in high-bay racks; active pick faces replenished.
          │
          ▼
[4. Order Picking]     &rarr; Retrieval of SKUs (ACCOUNTS FOR 55% OF WAREHOUSE LABOR COST).
          │
          ▼
[5. Packing & VAS]     &rarr; Verification, barcode scanning, custom kitting, price tagging.
          │
          ▼
[6. Outbound Dispatch] &rarr; Unitising pallets, staging at dock doors, carrier handover.
=================================================================================
```

### 3. Order Picking Strategies (The 55% Labor Bottleneck)
* **Single-Order Picking (Discrete):** Picker travels through the warehouse collecting items for one customer order at a time. High walking travel; suitable only for low-order volumes.
* **Batch Picking:** Picker collects quantities for multiple orders simultaneously in a single pass, then sorts them at a consolidation packing station. Slashes travel time by up to 50%.
* **Zone Picking:** Warehouse is partitioned into distinct zones; pickers are dedicated to specific zones, picking items for orders passing through their zone (pick-and-pass).
* **Wave Picking:** Orders are released in scheduled time windows ("waves") aligned with outbound truck departure schedules or carrier cutoffs.
* **Goods-to-Person (G2P):** Automated Mobile Robots (AMRs) or ASRS shuttles bring mobile shelving or storage totes directly to stationary human pickers, completely eliminating travel time and tripling pick rates (from 60 to 200+ units/hr).

### 4. Warehouse Physical Layout Engineering
* **U-Shaped Layout:**
  * Inbound receiving and outbound dispatch docks are positioned side-by-side on the same side of the building.
  * *Advantages:* Shared dock doors and material handling equipment (forklifts); excellent cross-dock security; high space utilization. Fast-moving SKUs are stored near the bottom curve close to docks.
* **I-Shaped / Flow-Through Layout:**
  * Receiving docks are on one side; shipping docks are directly opposite on the far side. Material moves in a straight line.
  * *Advantages:* Eliminates congestion and bottleneck cross-traffic; ideal for high-throughput **Cross-Docking** operations and extreme parcel velocity.
* **L-Shaped Layout:**
  * Receiving and shipping docks are positioned on adjacent perpendicular walls. Utilized for oddly shaped land plots.

### 5. Warehouse Classifications
* **Distribution Center (DC) vs. Fulfillment Center (FC):**
  * *DC:* Designed for pallet-in, pallet-out bulk shipments to retail stores; low order velocity, long storage cycles.
  * *FC:* Designed for pallet-in, each-out parcel picking for individual e-commerce consumers; high automation, thousands of daily small parcel drops.
* **Public vs. Private vs. Bonded Warehouses:**
  * *Public Warehouse:* Multi-client commercial facility charging short-term fees on a per-pallet/day basis. Zero fixed capital commitment for the shipper.
  * *Private Warehouse:* Owned or long-term leased facility dedicated to a single enterprise. Maximum control, high fixed capital.
  * *Bonded Warehouse:* Customs-controlled facility where imported merchandise can be stored, cleaned, repacked, or processed **without paying customs duties** until the goods are formally entered into the domestic market. If the goods are re-exported, no domestic duties are ever paid.
* **Cold Chain Warehouses:** Temperature-controlled multi-zone facilities (Frozen at -18°C to -25°C, Chilled at +2°C to +8°C, Ambient at +15°C to +25°C) equipped with hermetically sealed dock shelters and backup power generators.

---

# Module 2: International Trade, Global Sourcing & Regulatory Environment

### 1. Drivers of Global Sourcing
Enterprises procure materials internationally to capture:
1. **Factor Cost Arbitrage:** Lower labor, raw material, or utility costs in emerging markets.
2. **Access to Scarce Resources:** Critical raw materials (e.g., lithium in Chile/Australia, cobalt in DRC, rare earths in China).
3. **Advanced Technical Capabilities:** Specialized precision manufacturing (e.g., semiconductor lithography in Taiwan/Netherlands).
4. **Market Presence:** Establishing local manufacturing to satisfy domestic content laws.

### 2. Trade Barriers & Regulatory Tools
* **Tariffs:** Taxes or customs duties imposed on imported goods. Can be *Ad Valorem* (% of CIF value), *Specific* (fixed amount per kg or unit), or *Compound*.
* **Non-Tariff Barriers (NTBs):** Import quotas, sanitary and phytosanitary (SPS) regulations, complex technical standards, pre-shipment inspection mandates.
* **Countervailing Duty (CVD) vs. Anti-Dumping Duty (ADD):**
  * **Countervailing Duty (CVD):** Imposed by an importing government to neutralize unfair financial subsidies granted by a foreign government to its domestic exporters.
  * **Anti-Dumping Duty (ADD):** Imposed when foreign manufacturers export goods to a foreign market at a price below their normal domestic market value or below their actual cost of production ("dumping"), causing material injury to domestic producers.

### 3. Regional Trading Blocs & Rules of Origin
* **Trading Blocs:** Intergovernmental trade agreements eliminating customs duties among member states:
  * *USMCA:* United States-Mexico-Canada Agreement (replaces NAFTA).
  * *European Union (EU):* Complete customs union and single market with zero internal borders.
  * *ASEAN:* Association of Southeast Asian Nations Free Trade Area.
  * *RCEP:* Regional Comprehensive Economic Partnership (Asia-Pacific mega-bloc).
* **Rules of Origin (RoO):** Criteria used to determine the national source of a product to prevent non-member nations from transshipping goods through a low-tariff bloc member to evade duties.

---

# Module 3: The INCOTERMS 2020 Decision Framework

### 1. Overview & Classification
Published by the International Chamber of Commerce (ICC), INCOTERMS define the precise allocation of costs, operational obligations, and the exact transfer point of physical risk between seller and buyer.

```
=================================================================================
THE 11 INCOTERMS 2020 RULES MATRIX
=================================================================================
TERM    NAME                            MODE            RISK TRANSFER POINT
---------------------------------------------------------------------------------
EXW     Ex Works                        Any Mode        Seller's factory / premises
FCA     Free Carrier                    Any Mode        Loaded on buyer's carrier
CPT     Carriage Paid To                Any Mode        Handed to first carrier
CIP     Carriage & Insurance Paid To    Any Mode        Handed to first carrier
DAP     Delivered at Place              Any Mode        Arrived vehicle, ready to unload
DPU     Delivered at Place Unloaded     Any Mode        Unloaded at destination terminal
DDP     Delivered Duty Paid             Any Mode        Cleared for import at destination
---------------------------------------------------------------------------------
FAS     Free Alongside Ship             Sea / Waterway  Alongside vessel at quay/barge
FOB     Free On Board                   Sea / Waterway  On board vessel at origin port
CFR     Cost and Freight                Sea / Waterway  On board vessel at origin port
CIF     Cost, Insurance & Freight       Sea / Waterway  On board vessel at origin port
=================================================================================
```

### 2. Major Updates in INCOTERMS 2020
1. **DAT Renamed to DPU (Delivered at Place Unloaded):** Clarifies that the seller is obligated to physically unload the cargo at the named destination place or terminal. DPU is the **only Incoterm requiring the seller to unload**.
2. **Differentiated Insurance Levels for CIP vs. CIF:**
   * *CIF (Maritime):* Retains default requirement of Institute Cargo Clauses (C)—basic, minimal marine risk coverage.
   * *CIP (Multimodal):* Elevates default requirement to **Institute Cargo Clauses (A) "All-Risk" coverage**, requiring the seller to procure comprehensive cargo insurance.
3. **FCA with Onboard Bill of Lading Provision:** Allows buyer and seller to agree that the buyer's carrier will issue an on-board Bill of Lading directly to the seller, satisfying strict bank Letter of Credit presentation requirements.

### 3. FOB vs. CIF Comparative Deep Dive
```
=================================================================================
FOB VS. CIF: STRATEGIC COMPARISON
=================================================================================
FEATURE                 FOB (FREE ON BOARD)             CIF (COST, INS. & FREIGHT)
---------------------------------------------------------------------------------
Transport Mode          Sea and Inland Waterway only    Sea and Inland Waterway only
Freight Paid By         BUYER                           SELLER (to destination port)
Marine Insurance        BUYER optional                  SELLER mandatory (Clauses C)
Risk Transfer Point     ON BOARD ship at origin port    ON BOARD ship at origin port
Cost Transfer Point     ON BOARD ship at origin port    DESTINATION PORT of arrival
Ideal User              Experienced global buyers       First-time / MSME Exporters
=================================================================================
```

* **Why FOB Protects a First-Time MSME Exporter:**
  * Protects against volatile international ocean freight rate spikes between contract signing and sailing dates.
  * Eliminates the risk of costly destination port demurrage and container detention disputes.
  * Allows the exporter to complete its operational obligations the moment cargo passes the ship's rail at its domestic home port.

---

# Module 4: EXIM Processes, Documentation & Trade Finance

### 1. The 8-Stage EXIM Operational Process
```
[1. Inquiry & Proforma Invoice] &rarr; Commercial terms, price quote, Incoterm agreed.
          │
          ▼
[2. Commercial Sales Contract] &rarr; Legally binding contract specifying specs, delivery dates.
          │
          ▼
[3. Letter of Credit Opening]  &rarr; Importer's bank issues irrevocable LC to exporter's bank.
          │
          ▼
[4. Export Manufacturing]      &rarr; Production, packaging, and pre-shipment quality inspection.
          │
          ▼
[5. Customs Export Clearance]  &rarr; Shipping Bill filed via ICEGATE; dock inspection completed.
          │
          ▼
[6. Ocean Shipping & B/L]      &rarr; Goods loaded on vessel; carrier issues Clean On-Board B/L.
          │
          ▼
[7. Document Presentation]     &rarr; Exporter presents compliant shipping docs to bank for payment.
          │
          ▼
[8. Customs Import Clearance]  &rarr; Importer pays/accepts draft, retires docs, clears goods.
```

### 2. Essential International Shipping Documentation
* **Commercial Invoice:** Complete financial record showing item descriptions, quantities, unit prices, total value, and Incoterm.
* **Packing List:** Detailed breakdown of package dimensions, gross/net weights, and container packing configuration.
* **Bill of Lading (B/L):** The master legal document issued by the carrier serving 3 roles:
  1. *Receipt for Cargo* handed to carrier.
  2. *Contract of Carriage* between shipper and carrier.
  3. *Document of Title* (negotiable instrument enabling cargo transfer).
* **Certificate of Origin (CoO):** Authenticates the national manufacturing origin to qualify for preferential trading bloc tariff rates.

### 3. Documentary Letters of Credit (LC) & UCP 600 Rules
* **Definition:** A legally binding financial instrument issued by the buyer's issuing bank guaranteeing that payment will be made to the exporter upon presentation of strictly compliant shipping documents.
* **Confirmed Letter of Credit:** A domestic advising bank in the exporter's country adds its independent payment guarantee to the LC. If the foreign issuing bank fails or the buyer's country suffers sovereign default, the confirming bank must still pay the exporter.
* **The Doctrine of Strict Compliance (UCP 600):** Banks deal in documents, not in physical goods. Any typographical error, missing signature, or late presentation beyond the 21-day window constitutes a discrepancy, allowing the issuing bank to refuse payment.

---

# Module 5: The SCM Case Study Method & Quantitative Optimization

### 1. The 6-Step Case Study Methodology
1. **Define Core Problem:** Differentiate underlying root causes from operational symptoms (e.g., late deliveries are symptoms; broken forecasting is the root cause).
2. **Map Stakeholders & Constraints:** Balance conflicting departmental goals (Sales wants high stock; Finance wants low inventory; Operations wants large production batches).
3. **Establish Quantitative Diagnostics:** Compute landed costs, ITR, DOS, Cash-to-Cash cycle, and OTIF metrics.
4. **Formulate Mutually Exclusive Alternatives:** Develop viable strategic options (e.g., Insource vs. 3PL; Centralized DC vs. Distributed Dark Stores).
5. **Evaluate Trade-Offs:** Score alternatives using a weighted Multi-Criteria Decision Matrix.
6. **Construct Implementation Roadmap:** Outline 30-60-90 day quick wins, governance, milestones, and contingency fallback plans.

---

# Module 6: Digital Twins, 9-Step CPFR & Emerging Technologies

### 1. Supply Chain Digital Twin Architecture
A digital twin is a dynamic, real-time virtual simulation model of the physical supply chain network powered by continuous IoT edge telemetry, GPS tracking, and ERP transactions.
* **Use Cases:** Stress-testing disruption scenarios (e.g., simulating Suez Canal closures), predictive machine maintenance, dynamic warehouse slotting, and automated freight rerouting.

### 2. The 9-Step VICS CPFR Framework
Collaborative Planning, Forecasting, and Replenishment (CPFR) is an industry standard that synchronizes retail demand signals with manufacturing production schedules.

```
=================================================================================
THE 9-STEP CPFR FRAMEWORK
=================================================================================
PHASE                   STEP NUMBER & ACTION
---------------------------------------------------------------------------------
I. Strategy & Planning  Step 1: Develop Front-End Collaboration Agreement.
                        Step 2: Create Joint Business Plan.
---------------------------------------------------------------------------------
II. Demand & Supply     Step 3: Create Collaborative Sales Forecast (from POS data).
    Management          Step 4: Identify Sales Forecast Exceptions.
                        Step 5: Resolve Exception Discrepancies into Consensus Plan.
                        Step 6: Create Time-Phased Order Forecast.
                        Step 7: Identify Order Forecast Exceptions.
---------------------------------------------------------------------------------
III. Execution          Step 8: Generate Purchase Orders (EDI 850).
---------------------------------------------------------------------------------
IV. Analysis            Step 9: Assess Order Fulfillment & OTIF Performance.
=================================================================================
```

---

# Module 7: Model Exam Answers & Verified PYQ Mappings

### Solved PYQ 1: End-Term 2025 · Question 2 (10 Marks)
* **Verbatim Matching Question:** Match the 10 INCOTERMS 2020 rules with their definitions.
* **Model Solution:**
  1. **CFR &rarr; (d):** Cost & Freight (Seller pays freight to port; risk transfers onboard ship).
  2. **CIF &rarr; (e):** Cost, Insurance & Freight (Seller pays freight + basic insurance; risk transfers onboard ship).
  3. **CPT &rarr; (f):** Carriage Paid To (Seller pays freight to destination; risk transfers to first carrier).
  4. **CIP &rarr; (g):** Carriage & Insurance Paid To (Seller pays freight + all-risk insurance; risk transfers to first carrier).
  5. **DAP &rarr; (h):** Delivered at Place (Seller delivers ready for unloading at named place).
  6. **DPU &rarr; (i):** Delivered at Place Unloaded (Seller delivers and unloads at destination).
  7. **DDP &rarr; (j):** Delivered Duty Paid (Seller assumes maximum obligation: freight, insurance, and import duties).
  8. **EXW &rarr; (a):** Ex Works (Buyer collects at seller's premises; minimum seller obligation).
  9. **FCA &rarr; (b):** Free Carrier (Seller delivers export-cleared cargo to buyer's carrier).
  10. **FOB &rarr; (c):** Free On Board (Seller places goods on board nominated ship at port of origin).

### Solved PYQ 2: End-Term 2024 · Question 4.d (5 Marks)
* **Verbatim Question:** Cross-Docking vs. Traditional Warehousing.
* **Model 5-Mark Solution:**
  * *Traditional Warehousing:* Inbound goods are unloaded, inspected, stored on racks for days/weeks, and later picked, packed, and shipped; involves heavy holding costs and labor.
  * *Cross-Docking:* Inbound shipments from factories are directly transferred across the warehouse staging dock into outbound delivery trucks in under 24 hours with zero intermediate storage; maximizes inventory velocity and eliminates storage footprint.

---
title: "The Dynamic Architecture of Supply Networks: An Interactive Exploration"
bookId: lscm-interactive
projectSlug: lscm
stageDimensions:
  width: 1600
  height: 900
  aspectRatio: "16:9"
visualStyle: academic-paper
palette:
  paper: "#FAF7F0"
  paperMuted: "#F4EEDD"
  card: "#FFFFFF"
  ink: "#1C1917"
  inkMuted: "#78716C"
  border: "#E7E5E4"
  accentBlue: "#1E3A8A"
  accentAmber: "#B45309"
  accentEmerald: "#047857"
  accentRose: "#BE123C"
chapters:
  - id: "ch01"
    slug: "ch01-strategic-fit"
    title: "The Pulse of Flow: Supply Networks & Fisher's Strategic Fit"
    concept: "Fisher's Matrix & Responsiveness Spectrum"
    interactiveMechanic: "Two-axis Fisher slider balancing demand uncertainty against supply efficiency"
  - id: "ch02"
    slug: "ch02-eoq-dynamics"
    title: "The Balance Point: Economic Order Quantity Dynamics"
    concept: "Deterministic Inventory Cost Minimization"
    interactiveMechanic: "Live EOQ curve balancer with order quantity $Q$, holding cost $H$, and setup cost $S$"
  - id: "ch03"
    slug: "ch03-safety-stock"
    title: "The Fortress of Uncertainty: Safety Stock & Service Levels"
    concept: "Stochastic Lead-Time Demand & Service Level Bands"
    interactiveMechanic: "Normal distribution Gaussian curve with draggable Z-score and lead time sliders"
  - id: "ch04"
    slug: "ch04-warehouse-flow"
    title: "The Physics of Velocity: Cross-Docking vs. High-Density Storage"
    concept: "Warehouse Material Flow & Dwell Time Economics"
    interactiveMechanic: "Animated material path simulation comparing 24-hr cross-dock vs. palletized multi-tier storage"
  - id: "ch05"
    slug: "ch05-incoterms-frontier"
    title: "The Shifting Frontier: INCOTERMS 2020 Risk & Cost Boundaries"
    concept: "Multimodal Risk Decoupling Points"
    interactiveMechanic: "Interactive transport chain slider shifting transfer of risk and freight costs from EXW to DDP"
  - id: "ch06"
    slug: "ch06-bullwhip-synchronization"
    title: "The Synchronized Horizon: S&OP & Bullwhip Damping"
    concept: "Information Distortion & Demand Amplification"
    interactiveMechanic: "Multi-tier echelon slider demonstrating demand distortion amplification vs. POS transparency"
---

# The Dynamic Architecture of Supply Networks
**Papermorph Visual Interactive Edition | Brain Operations Division**

---

## 1. Visual Teaching Philosophy

> **"MAKE THE PICTURE EXPLAIN THE IDEA THROUGH CHANGE."**

Traditional textbooks rely on static line diagrams and abstract algebraic proofs that hide the dynamic, systemic nature of supply chain networks. In this interactive volume, every mathematical formula is paired with an active visual simulator rendered on a standardized **1600×900 responsive stage**:

1. **Rearrange & Route**: Visually reconfigure supply nodes from direct-shipment to hub-and-spoke multi-echelon architectures.
2. **Dynamic Equilibrium**: Demonstrate the exact point where holding cost and ordering cost curves intersect to produce minimum total cost.
3. **Band Expansion**: Show how increasing lead-time standard deviation $\sigma_L$ physically swells the safety stock buffer band.
4. **Risk Hand-off**: Track the exact moment risk and legal custody transfer from seller to buyer across the maritime and multimodal freight corridor.

---

## 2. Chapter Roster & Interactive Mechanics

### Chapter 1: The Pulse of Flow (Strategic Fit)
- **Concept**: Marshall Fisher's 1997 framework connecting Demand Uncertainty (Functional vs. Innovative) to Supply Chain Strategy (Cost-Efficient vs. Highly Responsive).
- **Stage (1600×900)**: A dynamic 2D coordinate plane where students drag product profiles (e.g., Staples vs. Fashion Wear) to observe the zone of strategic fit and cost penalties incurred by mismatch.
- **Embedded Check**: Categorize 4 corporate supply chains (Zara, Walmart, Boeing, Apple) and resolve strategic friction.

### Chapter 2: The Balance Point (EOQ Physics)
- **Concept**: Ford W. Harris deterministic inventory formulation balancing setup cost $S \cdot (D/Q)$ against annual holding cost $H \cdot (Q/2)$.
- **Stage (1600×900)**: Interactive cost curve diagram with live sliders for Demand $D$, Setup Cost $S$, and Holding Unit Cost $H$. Real-time calculation of $EOQ^*$, cycle length $T$, and minimum total annual inventory cost $TC(Q)$.
- **Embedded Check**: Calculate new EOQ under a 50% reduction in setup cost through SMED (Single-Minute Exchange of Die).

### Chapter 3: The Fortress of Uncertainty (Safety Stock Simulator)
- **Concept**: Stochastic inventory buffering under normal distributed demand ($d \sim N(\mu, \sigma_d)$) and lead-time variability ($L \sim N(\mu_L, \sigma_L)$).
- **Stage (1600×900)**: Interactive Gaussian density curve showing $Z$-value cutoffs (90%, 95%, 98%, 99%) and a dynamic warehouse stock level line chart demonstrating stockout risks.
- **Embedded Check**: Multi-choice diagnosis of whether reducing lead-time or demand variance delivers higher inventory savings.

### Chapter 4: The Physics of Velocity (Cross-Docking vs. Storage)
- **Concept**: Material flow velocities, staging docks, dwell-time economics, and SKU velocity Pareto classification (A/B/C).
- **Stage (1600×900)**: A top-down interactive warehouse blueprint animating inbound receiving, staging, sorting, and direct cross-dock loading versus multi-tier narrow-aisle put-away.
- **Embedded Check**: Select optimal put-away routing to minimize forklift transit time.

### Chapter 5: The Shifting Frontier (INCOTERMS 2020)
- **Concept**: The 11 International Commercial Terms governing cargo insurance, carrier contracting, import clearance, and terminal liability.
- **Stage (1600×900)**: A continuous geographical corridor (Factory $\to$ Origin Port $\to$ Ocean Transit $\to$ Destination Terminal $\to$ Customer Dock). As the user clicks between EXW, FOB, CIF, DAP, and DDP, color-coded bars visibly shift risk, freight, and insurance responsibilities between Seller and Buyer.
- **Embedded Check**: Scenario decision on risk liability when container cargo is damaged during high-seas monsoon weather under CIF vs. FOB terms.

### Chapter 6: The Synchronized Horizon (Bullwhip & S&OP)
- **Concept**: Forrester effect, variance amplification across supply echelons, and monthly S&OP consensus reconciliation.
- **Stage (1600×900)**: A 4-echelon wave simulator (Consumer $\to$ Retailer $\to$ Wholesaler $\to$ Factory). Adjusting order batching or price promotions reveals instantaneous wave amplification. Enabling POS data sharing flattens the wave.
- **Embedded Check**: Identify which S&OP milestone resolves executive misalignments between Sales forecasts and Plant capacity.

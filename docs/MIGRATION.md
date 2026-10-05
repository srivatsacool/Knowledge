# Brain Content Migration & Rationalization Plan

## 1. Executive Summary

Historically, the repository contained flat, monolithic HTML files that combined presentation, styling, and content. This transformation modularizes the curriculum into **Canonical MDX Notebooks** located under `domains/`, while retaining historical HTML files as secondary reference artifacts.

---

## 2. ERP Content Rationalization

The three legacy HTML notebooks (`ERP_Exam_Notebook.html`, `Operations/ERP_Business_Applications_Notebook.html`, and `Operations/ERP_Business_Applications_Notebook_2.0.html`) contained redundant copies of the same 16-chapter curriculum.

They are decomposed into 5 modular canonical MDX notebooks:

| Canonical MDX Notebook | Subject / Path | Scope |
| :--- | :--- | :--- |
| `erp-foundations.mdx` | `operations/enterprise-resource-planning` | Siloed legacy evolution, 3-tier architecture, Five Pillars, Value Matrix |
| `mrp-planning.mdx` | `operations/enterprise-resource-planning` | Plossl manufacturing flow, BOM explosion, net requirements arithmetic |
| `sap-architecture.mdx` | `operations/enterprise-resource-planning` | SD, MM, PP, FI/CO integration, P2P 3-way match, O2C cycle |
| `erp-implementation-lifecycle.mdx` | `operations/enterprise-resource-planning` | ASAP methodology, Big Bang vs Phased rollout, BPR, TCO iceberg |
| `master-data-governance.mdx` | `operations/enterprise-resource-planning` | Single source of truth, golden record pipeline, Subway franchise case |

---

## 3. LSCM Content Rationalization

The 4 faculty-specific LSCM notebooks are restructured into 4 thematic canonical notebooks:

| Canonical MDX Notebook | Focus | Scope |
| :--- | :--- | :--- |
| `scm-architecture-drivers.mdx` | Strategic Fit & Alignment | Fisher's matrix, 6 performance drivers, Bullwhip effect |
| `inventory-optimization.mdx` | Quantitative Modeling | Deterministic EOQ/EPQ, stochastic safety stock ($Z \cdot \sigma_d \sqrt{L}$), Newsvendor |
| `warehousing-exim.mdx` | Physical Infrastructure & Trade | U-shaped warehouse layout, cross-docking, Center of Gravity, INCOTERMS 2020 |
| `lscm-master-blueprint.mdx` | Master Synthesis & PYQs | 15-session synthesis, 2023–2025 past exam questions with model answers |

---

## 4. URL Routing & Aliases

To maintain backward compatibility:
* `/operations/logistics-supply-chain/` is the canonical path; `/operations/lscm/` acts as an alias.
* `/operations/enterprise-resource-planning/` is the canonical path; `/operations/erp/` acts as an alias.

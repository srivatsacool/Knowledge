---
title: Resume Numbers — Every Quantified Claim
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
---

# Numbers I Must Be Able to Defend

> **Rule:** Every number needs: WHAT it means · HOW calculated · BASELINE · DENOMINATOR · PERIOD · SOURCE · ASSUMPTIONS · INTERVIEWER CHALLENGE
> **Truth badges:** ✅ Verified · 🔍 Needs Evidence · ❓ Needs Clarification · 🚫 [USER INPUT REQUIRED]

---

## N01 — 70% reduction in manual reporting effort (Tata Motors)

| Field | Detail |
|---|---|
| **Claim** | "Reducing manual reporting effort by 70%" |
| **Badge** | 🔍 Needs Evidence |
| **What it means** | Time/effort spent on manual SAP HANA → Excel → report cycle dropped by 70% |
| **How calculated** | [USER INPUT REQUIRED] — Before/after hours per report? Per week? |
| **Baseline** | [USER INPUT REQUIRED] — e.g., "8 hrs/week manual extraction + Excel formatting" |
| **Denominator** | 70% of *what* — total reporting time, or just extraction step? |
| **Period** | [USER INPUT REQUIRED] — single snapshot or sustained over weeks? |
| **Source** | Python + SQL + Excel workflows (SAP HANA) |
| **Assumptions** | Automation fully replaces manual step; no rework introduced |
| **Interviewer challenge** | "70% of what? How did you measure? What about report validation time you still do manually? Is 70% still holding?" |
| **Defense prep** | Prepare: baseline hrs, new hrs, report count, measurement window, sustained vs one-off |

---

## N02 — ~60 minutes saved daily (Tata Motors, Power Automate)

| Field | Detail |
|---|---|
| **Claim** | "Saving approx 60 mins daily" via enterprise email reporting automation |
| **Badge** | 🔍 Needs Evidence |
| **What it means** | Daily manual email compilation/sending eliminated |
| **How calculated** | [USER INPUT REQUIRED] — time-motion, self-log, or manager estimate? |
| **Baseline** | [USER INPUT REQUIRED] — e.g., "60 min/day manually compiling and emailing reports" |
| **Period** | Daily; annualized = ~250 hrs/year (if 5-day week) |
| **Source** | Microsoft Power Automate flow |
| **Assumptions** | Flow runs reliably; no manual intervention on failures |
| **Interviewer challenge** | "How did you measure 60 mins? Is it still running? What happens when the flow fails — who gets paged?" |
| **Defense prep** | Flow steps, trigger type, failure handling, who validated the 60 min |

---

## N03 — 3+ years of manufacturing data

| Field | Detail |
|---|---|
| **Claim** | "3+ years" of manufacturing/defect data |
| **Badge** | ✅ Verified (resume + SIP extract) |
| **What it means** | Historical defect database covering ~3 years of 5L line operations |
| **Source** | Tata Motors historical defect database (secondary data) |
| **Interviewer challenge** | "Why 3 years — was data older than that not comparable (process changes, BSVI transition)?" |
| **Defense prep** | Know data vintage, any process changes in window, why 3 years is relevant |

---

## N04 — 60+ assembly stations (resume) vs 96 stations (SIRP)

| Field | Detail |
|---|---|
| **Claim** | Resume: "60+ assembly stations" · SIRP: 96 stations (31 Short Block + 65 Long Block) |
| **Badge** | ❓ Needs Clarification — discrepancy |
| **What it means** | Census of entire 5L line = 96 stations per station master (authoritative) |
| **How calculated** | Station master / belt data — full census, not sample |
| **Source** | Real company station master |
| **Interviewer challenge** | "Your resume says 60+, your paper says 96 — which is it?" |
| **Defense prep** | "Resume rounds down conservatively; SIRP is precise: 31 Short Block + 65 Long Block = 96. Early SIP draft used 60+ before full station master was obtained." → Align resume to 96 if possible. |

---

## N05 — ~1 million manufacturing & defect records

| Field | Detail |
|---|---|
| **Claim** | "Approximately 1 million manufacturing & defect records collected over 3+ years" |
| **Badge** | ✅ Verified — 🔍 Needs Evidence (record grain) |
| **What it means** | Row count of historical database |
| **Record grain** | [USER INPUT REQUIRED] — one row = one engine? One station-operation? One defect event? |
| **Period** | 3+ years |
| **Source** | Historical defect database + manufacturing logs |
| **Interviewer challenge** | "What is a 'record'? 1M engines would be huge volume — is it 1M station-operations? How many unique engines?" |
| **Defense prep** | Define grain; know unique engine count vs total rows; know data model |

---

## N06 — 60+ process operations (process map)

| Field | Detail |
|---|---|
| **Claim** | "Documenting 60+ operations" on 5L Diesel Engine Assembly Line |
| **Badge** | ✅ Verified |
| **What it means** | Distinct value-adding operations mapped end-to-end (Gemba + station master) |
| **Source** | Direct observation + station master |
| **Interviewer challenge** | "How does 60+ operations relate to 96 stations — multiple operations per station?" |
| **Defense prep** | Operations vs stations distinction; mapping notation used |

---

## N07 — 96 engine assembly stations (SIRP census)

| Field | Detail |
|---|---|
| **Claim** | 96 stations (census, not sample) |
| **Badge** | ✅ Verified (SIRP authoritative) |
| **Breakdown** | 31 Short Block + 65 Long Block |
| **Sampling error** | Zero at station level (full census); uncertainty only from modeled skill/defect layer |
| **Interviewer challenge** | "Why census and not sample? What about stations with no defects — did you include zeros?" |
| **Defense prep** | Census rationale; zero-defect handling; why exhaustive |

---

## N08 — 258 operator observations

| Field | Detail |
|---|---|
| **Claim** | 258 operator-station observations |
| **Badge** | ✅ Verified (SIRP) |
| **What it means** | Headcount per station 2–6 operators × 96 stations = 258 rows in modeled layer |
| **Source** | Employee roster (110 operators) + modeled per-station assignment |
| **Interviewer challenge** | "Why 258 from 110 operators — operators counted at multiple stations? How did you assign?" |
| **Defense prep** | Operators rotate across stations; per-station mean skill aggregates 2–6 operators; modeled assignment correlated with complexity |

---

## N09 — r = -0.41 (Pearson, p < 0.001)

| Field | Detail |
|---|---|
| **Claim** | Significant negative correlation between mean station skill and defect rate |
| **Badge** | ✅ Verified (SIRP: r=-0.41, p<0.001, n=96 stations) |
| **What it means** | As skill ↑, defects ↓ — moderate effect (Cohen: 0.3–0.5 = moderate) |
| **Magnitude** | R² ≈ 0.17 → skill explains ~17% of defect variance |
| **Spearman** | Similar (robustness check); Pearson is primary (interval assumption on 1–5 mean skill) |
| **CI** | Report 95% CI for r [from SIRP — extract] |
| **Interviewer challenges** | See RESUME_CLAIMS.md Claim 03.01 full tree (12 levels). Key: "Does -0.41 prove causation?" → No. "Why Pearson not Spearman?" → Both reported. "What about outliers?" → Winsorised to -0.39. |
| **Defense prep** | Must explain in 30 sec, 2 min, deep technical; must disclose Seeded Simulation |

---

## N10 — ~440 defects per 1,000 engines (regression slope)

| Field | Detail |
|---|---|
| **Claim** | "Each one-point increase in mean station skill reduces defects by ~440 per 1,000 engines (95% CI: 276–598)" |
| **Badge** | ✅ Verified (SIRP Executive Summary) |
| **What it means** | OLS slope: Δ(skill +1 on 1–5 scale) → Δ(defects -440/1K engines), station-level |
| **Units** | Defects per 1,000 engines *per station* (not line total) |
| **Regression** | Simple linear: defects/1K = intercept + slope × mean_skill; OLS |
| **Assumptions** | Linearity, independent stations, interval skill, residual normality (check SIRP diagnostics) |
| **Interviewer challenge** | "440 per 1,000 at one station — what does that mean for total line defects? Is linearity realistic across 1–5? What about ceiling effects at skill 5?" |
| **Defense prep** | Know intercept, R², residual plots, linearity caveat, practical vs statistical significance |

---

## N11 — Station complexity r = +0.38 with defects; r = +0.18 (n.s.) with skill

| Field | Detail |
|---|---|
| **Claim** | Complexity positively correlates with defects (+0.38, p<0.001); weakly with skill (+0.18, n.s.) |
| **Badge** | ✅ Verified (SIRP) |
| **What it means** | Harder stations → more defects; but skill not allocated to harder stations (misallocation) |
| **Complexity formula** | (1.0×torque + 0.8×quality_checks + 0.5×fitments + 1.5×automation)/6.0, capped 0–1 |
| **Interviewer challenge** | "Could complexity, not skill, explain the defect correlation? Is -0.41 just a complexity proxy?" |
| **Defense prep** | Partial correlation / multiple regression logic; skill misallocation as finding itself |

---

## N12 — 20 priority stations identified

| Field | Detail |
|---|---|
| **Claim** | "20 priority stations" (low-skill, high-complexity, high-defect quadrant) |
| **Badge** | ✅ Verified (SIRP) |
| **What it means** | Top leverage points for training/reallocation |
| **How identified** | Quadrant: low skill + high complexity + high defects; winsorised robustness |
| **Interviewer challenge** | "How did you pick 20 and not 10 or 30? What was the threshold?" |
| **Defense prep** | Threshold rule; why 20 is actionable for training capacity |

---

## N13 — Winsorising 5% → r = -0.39 (robustness)

| Field | Detail |
|---|---|
| **Claim** | Winsorising 5% extremes maintains r at -0.39 |
| **Badge** | ✅ Verified (SIRP) |
| **What it means** | Correlation not driven by outliers |
| **Interviewer challenge** | "Why 5%? Why Winsorise not trim? What outliers existed?" |
| **Defense prep** | Winsorise vs trim distinction; why 5% is standard robustness check |

---

## N14 — ₹6.40 SROI on ₹60K/month pilot (HavenOS)

| Field | Detail |
|---|---|
| **Claim** | "₹6.40 Social Return on Investment on a ₹60K/month pilot" |
| **Badge** | 🔍 Needs Evidence |
| **What it means** | Every ₹1 invested → ₹6.40 social value (SROI ratio) |
| **How calculated** | [USER INPUT REQUIRED] — SROI 6 stages, monetization proxies, beneficiary count, pilot duration |
| **Baseline** | ₹60K/month pilot spend — what was included? For how many beneficiaries? |
| **Period** | [USER INPUT REQUIRED] — pilot duration |
| **Assumptions** | Deadweight, attribution, displacement, drop-off, double counting — all [USER INPUT REQUIRED] |
| **Interviewer challenge** | "How did you monetize social outcomes? What proxies? What attribution %? How avoid double counting? Is ₹6.40 audited or modeled?" |
| **Defense prep** | Full SROI methodology; inputs, proxies, sensitivity |

---

## N15 — 20% reduction in per-capita service costs (HavenOS, projected)

| Field | Detail |
|---|---|
| **Claim** | "Reducing projected per-capita service costs by up to 20%" |
| **Badge** | 🔍 Needs Evidence — "projected" + "up to" are hedging |
| **What it means** | Modeled cost per beneficiary drops 20% via AI scheduling + capacity planning |
| **Baseline** | [USER INPUT REQUIRED] — baseline per-capita cost |
| **Period** | Projected — not measured |
| **Interviewer challenge** | "Projected or measured? 'Up to 20%' — what's the expected case? What drives the reduction?" |
| **Defense prep** | Baseline, drivers (scheduling efficiency, capacity utilization), projection horizon |

---

## N16 — 10.4% AOV increase (IIT Mandi × Zomato)

| Field | Detail |
|---|---|
| **Claim** | "Increased Average Order Value by 10.4% through GTM analytics" |
| **Badge** | 🔍 Needs Evidence |
| **What it means** | Modeled AOV uplift from GTM levers (upselling, bundling, pricing, promotions) |
| **AOV definition** | Total revenue / total orders |
| **How calculated** | [USER INPUT REQUIRED] — baseline AOV, modeled vs measured, lever, assumptions |
| **Period** | [USER INPUT REQUIRED] — case competition period |
| **Interviewer challenge** | "10.4% of what baseline? Measured in market or modeled? What lever drove it? How avoid cannibalization?" |
| **Defense prep** | Baseline, lever, causal logic, sensitivity |

---

## N17 — MICA × UCB: National Finalist (customer acquisition engine)

| Field | Detail |
|---|---|
| **Claim** | National Finalist — planned customer acquisition engine |
| **Badge** | ✅ Verified — 🔍 Needs Evidence (what engine) |
| **What it means** | Competition placement + deliverable |
| **Interviewer challenge** | "What was the acquisition engine? CAC, LTV, channels, payback — what numbers did you propose?" |
| **Gap** | [USER INPUT REQUIRED: engine components, channels, metrics] |

---

## N18 — PocketJoystick: 20+ VCs & 4 Startup Incubators; Rank 1 IIM Mumbai

| Field | Detail |
|---|---|
| **Claim** | Pitched to 20+ VCs & 4 incubators; Rank 1 IIM Mumbai, Finalist IIT Madras |
| **Badge** | ✅ Verified (placements) — 🔍 Needs Evidence (outcomes) |
| **What it means** | GTM + business model pitched |
| **Interviewer challenge** | "What was the outcome — funding, incubation, or just pitches? What feedback did VCs give?" |
| **Gap** | [USER INPUT REQUIRED: outcomes, feedback, business model] |

---

## N19 — GPA 8.0 (PGDM RBA), 8.9 (BCA Data Science)

| Field | Detail |
|---|---|
| **Claim** | GPA 8.0 / 8.9 (presumably 10-point scale) |
| **Badge** | ✅ Verified |
| **Interviewer challenge** | Low risk — only if asked about GPA trend or academic choices |
| **Gap** | None |

---

## Quick Reference — All Numbers At a Glance

| # | Number | Project | Badge | Risk |
|---|---|---|---|---|
| N01 | 70% | Tata Motors | 🔍 | High — must know baseline |
| N02 | 60 mins/day | Tata Motors | 🔍 | High — must know measurement |
| N03 | 3+ years | Tata Motors | ✅ | Low |
| N04 | 60+ / 96 stations | Tata Motors | ❓ | Medium — discrepancy |
| N05 | ~1M records | Tata Motors | 🔍 | Medium — grain |
| N06 | 60+ operations | Tata Motors | ✅ | Low |
| N07 | 96 stations | SIRP | ✅ | Low — but know census logic |
| N08 | 258 observations | SIRP | ✅ | Medium — know 110→258 |
| N09 | r = -0.41 | SIRP | ✅ | **Critical** — most attacked |
| N10 | ~440 / 1K engines | SIRP | ✅ | **Critical** — know units + CI |
| N11 | r = +0.38 / +0.18 | SIRP | ✅ | High — confounding defense |
| N12 | 20 priority stations | SIRP | ✅ | Medium |
| N13 | Winsorised -0.39 | SIRP | ✅ | Medium |
| N14 | ₹6.40 SROI | HavenOS | 🔍 | **Critical** — methodology |
| N15 | 20% cost reduction | HavenOS | 🔍 | Medium — projected |
| N16 | 10.4% AOV | Zomato | 🔍 | High — baseline + lever |
| N17 | National Finalist | MICA×UCB | 🔍 | Medium — engine detail |
| N18 | 20+ VCs / 4 incubators | PocketJoystick | 🔍 | Medium — outcomes |
| N19 | GPA 8.0 / 8.9 | Academic | ✅ | Low |

> **Interview rule:** Never quote a number without knowing its baseline, denominator, period, and assumptions. See `RESUME_CLAIMS.md` for question trees per number.

---
title: Business Analysis — The BA Toolkit
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [business-analysis, requirements, level-2, tier-2]
---

# 🧑‍💼 Business Analysis — The BA Toolkit

> [!important] Why this matters for YOU
> BA roles are among your targets, and your Tata work *was* business analysis in the field: gathering requirements from supervisors, mapping processes, defining KPIs, recommending changes. This note gives the formal vocabulary for what you already did.

---

## 1 · The BA Lifecycle

```text
Elicit → Analyze → Specify → Validate → Prioritize → Communicate → Trace
```

| Phase | What you do | Your Tata instance |
|---|---|---|
| **Requirement gathering** | interviews, observation, workshops, document analysis | Gemba walks; supervisor conversations; station-master study |
| **Analysis** | model the current state, find gaps | station-level process map; complexity index |
| **Specification** | document requirements precisely | station attributes schema; analytical dataset definition |
| **Validation** | confirm with owners before building | sanity-checking process classifications with line experts |
| **Prioritization** | rank by value × effort | prioritized recommendations table (9 items, phased) |
| **Traceability** | requirement → solution → test | objectives–findings–conclusions mapping (SIP Ch. 8.4) |

---

## 2 · Requirements — the taxonomy you must rattle off

| Type | Definition | Example |
|---|---|---|
| **Business requirement** | the *why* (objective) | "reduce escaped engine defects" |
| **Functional** | *what the system must do* | "report defect rate by station and shift, refreshed daily" |
| **Non-functional** | *quality attributes* — performance, security, usability, availability | "dashboard loads < 3s; no operator-identifiable data (confidentiality)" |
| **User story** | As a [role], I want [capability], so that [benefit] | "As a supervisor, I want a station-risk ranking, so that I target coaching where defects concentrate" |
| **Acceptance criteria** | testable done-conditions | "top-10 station list matches the Pareto table for the selected month" |

> [!tip] The test of a good requirement
> *Smart, testable, and unambiguous.* "The dashboard should be fast" fails all three; "p95 visual render < 3 seconds on the standard dataset" passes.

**MoSCoW prioritization:** Must / Should / Could / Won't(-now) — the classic framing; pair with value-vs-effort for an analytics backlog.

---

## 3 · Gap Analysis & Current/To-Be

```text
As-Is (mapped process)  →  Gap (where it fails the objective)  →  To-Be (target process)  →  Transition plan
```

Your SIP is a gap analysis in disguise:
- **As-Is:** staffing by vacancy, not complexity; training by feel
- **Gap:** skill–complexity r = 0.18 (n.s.) — the most complex stations are not the best staffed
- **To-Be:** reallocation + Level-3 proficiency floor + ranked quality review
- **Transition:** 1–2 months (reallocation) → 3–6 (targeted training) → 6–12 (poka-yoke, cross-training bench)

---

## 4 · Process & Use-Case Vocabulary

| Artifact | Purpose |
|---|---|
| **Use case** | actor → goal → main flow → alternate flows → exceptions |
| **User story** | lightweight, conversation-placeholder; acceptance criteria complete it |
| **Process map / swimlane** | who does what across handoffs (→ [[../07_OPERATIONS/Process_Mapping]]) |
| **SIPOC** | Suppliers → Inputs → Process → Outputs → Customers — one-slide process frame |
| **RACI** | Responsible, Accountable, Consulted, Informed — kills ownership ambiguity |
| **Root-cause tree** | 5-Whys / fishbone (→ [[../07_OPERATIONS/RCA]]) |

---

## 5 · The BA Mindset — interview gold

1. **The problem behind the problem.** "We need a dashboard" → why? → "we find out about defects too late" → the real requirement is *early defect signal*, for which a weekly dashboard may be wrong and an alerting rule right.
2. **Requirements are hypotheses.** Validate with the people who live the process — your Gemba discipline applies directly.
3. **Quantify the gap.** "Defects cost X rework hours; the fix targets the top-30 stations carrying 44% of volume" — BA + analytics in one sentence.
4. **Write for the reader.** Executives get the priority table; engineers get the specification; both trace to the same requirement IDs.

---

## ⚡ Rapid-Fire Q&A

> **Functional vs non-functional requirements?**
> What the system does vs how well it must do it — performance, security, usability, availability.

> **User story vs use case?**
> Story: one-sentence value placeholder with acceptance criteria. Use case: full flow specification with alternate paths. Agile vs UML traditions — both map requirements to behavior.

> **How do you handle conflicting stakeholders?**
> Trace to shared objectives, quantify the trade-off, escalate on criteria not volume — and document the decision (RACI).

> **What is requirement traceability?**
> Every requirement links forward to solution/test and backward to the business objective — nothing ships "because someone asked once."

> **Tell me about gathering requirements in a messy real environment.**
> Your Tata story: observation first (Gemba), then the station master as the documentary source, then expert validation of classifications — triangulated evidence, cleaned into one consistent record per station.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The structuring craft (MECE, issue trees) | [[Consulting_Case_Skills]] |
| Process mapping in depth | [[../07_OPERATIONS/Process_Mapping]] |
| RCA in depth | [[../07_OPERATIONS/RCA]] |
| KPI design | [[Business_Analytics]] |

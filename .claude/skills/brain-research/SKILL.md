---
name: brain-research
description: Research and evidence-engineering skill for BRAIN. Combines user-provided source material with verified web research to produce traceable, citation-ready structured knowledge.
---

# Brain Research

## Purpose

Convert a topic, question, supplied PDF/HTML/notes/slides/PYQs/papers, or existing notebook into a verified research package for BRAIN.

Core principle:

> Research first. Explain second. Design third.

This skill produces the evidence-backed knowledge layer. It does not create the final notebook.

## 1. Mandatory research rules

### Web research is required

When this skill is invoked, use the web for external verification unless the user explicitly prohibits web access.

Use external research to:
- verify definitions and terminology;
- verify current facts;
- triangulate important claims;
- locate authoritative frameworks;
- verify formulas and assumptions;
- validate industry examples;
- resolve conflicts between sources.

Never rely only on model memory when web access is available.

### User-provided material is first-class evidence

Inspect supplied:
- course outlines;
- notes;
- slides;
- PDFs;
- textbooks;
- research papers;
- previous notebooks;
- question papers;
- spreadsheets;
- HTML files.

Never silently replace supplied material with web content.

Label evidence as:
- USER SOURCE;
- WEB SOURCE;
- DERIVED EXPLANATION;
- SYNTHESIS.

### PYQ integrity

Never fabricate a past-year question.

For every PYQ retain:
- year;
- paper/session;
- question/sub-question;
- exact wording when available;
- marks;
- source file;
- source page/location;
- topic mapping;
- recurrence frequency.

A generated practice question must never be labelled as a PYQ.

## 2. Source hierarchy

Default precedence:

1. Official syllabus/course outline — scope.
2. User-provided class/faculty material — terminology and emphasis.
3. User-provided PYQs — examination evidence.
4. User-provided textbooks/papers — depth.
5. Primary external sources — verification.
6. High-quality secondary sources — context.
7. General web sources — discovery only.

External research enriches and verifies higher-priority sources; it does not silently override them.

## 3. Research workflow

### Step 1 — Define the research brief

Record:
- topic;
- audience;
- purpose;
- depth;
- constraints;
- source boundary;
- expected outputs.

### Step 2 — Inspect supplied material

Extract:
- headings;
- definitions;
- formulas;
- frameworks;
- examples;
- diagrams;
- terminology;
- PYQs;
- references;
- gaps;
- claims needing verification.

### Step 3 — Build the topic map

For each topic record:
- topic ID;
- title;
- prerequisites;
- learning objective;
- source evidence;
- explanation status;
- visual requirement;
- PYQ relationship;
- quiz potential.

### Step 4 — Search externally

Use targeted searches.

Prefer:
- standards bodies;
- government/regulators;
- official company sources;
- universities;
- peer-reviewed papers;
- original research;
- official technical documentation;
- reputable publishers.

Use general websites mainly for discovery.

### Step 5 — Triangulate

Important claims need either:
- one authoritative primary source, or
- two independent credible sources.

For disputed claims, record the disagreement explicitly.

### Step 6 — Fact-check

For every high-value claim ask:
- Is it directly supported?
- Is the source authoritative?
- Is it current enough?
- Is the wording stronger than the evidence?
- Is it fact, estimate, interpretation or synthesis?
- Is there credible disagreement?

Never convert an estimate into a fact.

## 4. Evidence records

Use a structured record:

~~~yaml
claim_id: CLM-001
claim: "..."
claim_type: definition | fact | formula | interpretation | estimate | synthesis
importance: critical | high | normal
source_type: user | web
source_title: "..."
source_url: "..."
source_date: "..."
source_location: "page 14"
confidence: high | medium | low
supports:
  - topic-id
notes: "..."
~~~

For user files, preserve available file citations/provenance.

For web sources preserve:
- title;
- publisher;
- URL;
- date;
- access date;
- relevant section;
- reason for use.

## 5. Explanation engineering

For each major concept build:

1. What is it?
2. Why does it matter?
3. What problem does it solve?
4. How does it work?
5. What are its components?
6. What is the underlying model?
7. What assumptions apply?
8. What are the trade-offs?
9. Where is it used?
10. What commonly goes wrong?
11. What is a concrete example?
12. How should a learner explain it?

Preferred progression:

**intuition → structure → mechanism → example → application → limitation**

Do not produce definition + disconnected bullets.

## 6. Visual research plan

For every major concept determine whether a visual materially improves understanding.

Possible visual types:
- process flow;
- architecture;
- timeline;
- decision tree;
- comparison matrix;
- lifecycle;
- causal chain;
- hierarchy;
- network;
- 2×2;
- formula visualization;
- numerical walkthrough;
- concept map;
- before/after;
- operating model.

Rule:

> If a diagram explains the concept more clearly than several paragraphs, create the diagram.

Do not add decorative images merely to make the notebook look attractive.

## 7. Visual asset rules

Prefer:
1. deterministic SVG;
2. HTML/CSS infographic;
3. generated vector asset;
4. raster image only when necessary.

Every visual gets:
- figure ID;
- title;
- type;
- concept;
- caption;
- alt text;
- source/provenance.

For technically important concepts, never rely on an imprecise generated image when a precise SVG diagram is possible.

## 8. Mathematics

For every formula:
1. locate authoritative basis;
2. verify notation;
3. verify assumptions;
4. verify units;
5. test numerical examples;
6. define variables;
7. show substitution;
8. interpret the result.

Use KaTeX-compatible notation.

Never invent a formula.

## 9. Required research outputs

Create:

~~~text
research/
├── research-brief.md
├── topic-map.md
├── evidence.md
├── source-register.md
├── visual-plan.md
├── formula-register.md
├── pyq-map.md
├── glossary.md
└── research-review.md
~~~

The package must be sufficient for the notebook skill to work without repeating the full research process.

## 10. Research gate

Before handoff:

- [ ] supplied material inspected;
- [ ] web research performed;
- [ ] important claims triangulated;
- [ ] provenance recorded;
- [ ] PYQs verified;
- [ ] formulas checked;
- [ ] conflicts documented;
- [ ] gaps marked;
- [ ] visual plan created;
- [ ] no unsupported claim presented as fact.

End with:

**READY FOR NOTEBOOK FORGE**

or

**RESEARCH BLOCKED — [reason]**

# Brain Knowledge Hub — Notebook Template 2.0 Design System
## "Paper Edition" Design Tokens, Canvas Engine & Physical Metaphors

> **System Standard**: Centralized CSS Custom Properties, Paper Surface Physics, and Sensory Metaphors  
> **Target Scope**: Notebook Shell, Canvas Grid, Typography Matrix, and Physical Components  
> **Status**: Authoritative Architectural Design Specification

---

## 1. Centralized Design Tokens (CSS Variables)

All colors, dimensions, typography, and rotations are centralized in `:root` and `html[data-theme="dark"]`. No ad-hoc, hardcoded values are permitted across components.

```css
:root {
  /* ==========================================
     1. PAPER & DESK SURFACES (LIGHT THEME)
     ========================================== */
  --paper: #fcf8ee;            /* Warm 80gsm ivory paper sheet */
  --desk: #e9e1cf;             /* Warm oak/maple study desk background */
  --rule: #d6e3ef;             /* Blue ruled notebook lines */
  --margin: #e28b8b;           /* Red vertical notebook margin line */
  --card: #fffdf7;             /* Elevated paper study card */
  --line: #c9bfa8;             /* Muted pencil dividing rule */
  
  /* ==========================================
     2. INK & PENCIL TYPOGRAPHY PALETTE
     ========================================== */
  --ink: #1d3c8c;              /* Deep Oxford fountain-pen blue */
  --ink2: #2f5fc4;             /* Vibrant royal blue for links and active tabs */
  --text: #25262b;             /* Charcoal academic body text (14:1 contrast) */
  --pencil: #5a5d66;           /* Graphite pencil gray for annotations & metadata */
  
  /* ==========================================
     3. PHYSICAL SHADOWS & ELEVATION
     ========================================== */
  --shadow-sheet: 0 1px 2px rgba(60, 45, 20, 0.12), 0 8px 24px rgba(60, 45, 20, 0.14);
  --shadow-card: 0 1px 3px rgba(60, 45, 20, 0.10), 0 4px 12px rgba(60, 45, 20, 0.08);
  --shadow-sticky: 0 2px 4px rgba(0, 0, 0, 0.12), 0 10px 18px -6px rgba(0, 0, 0, 0.22);
  --shadow-tape: 0 1px 2px rgba(0, 0, 0, 0.08);
  
  /* ==========================================
     4. CHISEL HIGHLIGHTER PALETTE (TRANSLUCENT)
     ========================================== */
  --hl-yellow: rgba(255, 224, 61, 0.68);
  --hl-green: rgba(120, 228, 156, 0.62);
  --hl-blue: rgba(110, 196, 255, 0.55);
  --hl-pink: rgba(255, 138, 188, 0.52);

  /* ==========================================
     5. PHYSICAL STICKY NOTE SURFACES
     ========================================== */
  --sticky-y: #fff2a1;         /* Classic yellow canary post-it */
  --sticky-r: #ffd6d3;         /* Soft pastel coral/pink sticky */
  --sticky-b: #d9ecff;         /* Pale sky-blue note */
  --sticky-g: #d8f5dc;         /* Soft mint-green note */
  --sticky-text: #22252a;      /* Deep graphite text on stickies */
  
  /* ==========================================
     6. RUBBER STAMP & CALLOUT ACCENTS
     ========================================== */
  --red: #c2362f;              /* Crimson stamp ink / Exam warnings */
  --green: #1d7a45;            /* Emerald stamp ink / Success milestones */
  --amber: #b86e00;            /* Warm ochre stamp ink / Strategic caveats */
  
  /* ==========================================
     7. TYPOGRAPHY FAMILIES
     ========================================== */
  --font-hand: "Caveat", "Segoe Print", "Bradley Hand", cursive;
  --font-hand2: "Patrick Hand", "Segoe Print", cursive;
  --font-body: "Source Sans 3", "Inter", -apple-system, sans-serif;
  --font-math: "STIX Two Text", "Cambria Math", Georgia, serif;
  --font-mono: "JetBrains Mono", "SF Mono", monospace;
  
  /* ==========================================
     8. NOTEBOOK METRICS & GRID
     ========================================== */
  --lh: 30px;                  /* Horizontal rule line height */
  --sidebar-w: 300px;          /* Table of contents index width */
  --margin-offset: 66px;       /* Distance of red margin from sheet left */
}

/* ==========================================================================
   DARK THEME: NIGHT STUDY DESK PALETTE
   ========================================================================== */
html[data-theme="dark"] {
  --paper: #18202e;            /* Deep midnight navy binder paper */
  --desk: #0f141d;             /* Dark mahogany / slate study desk */
  --rule: #243049;             /* Subdued dark slate ruled lines */
  --margin: #7c3d48;           /* Muted crimson margin line */
  --card: #1d2636;             /* Elevated dark paper card */
  --line: #344058;             /* Muted pencil divider */
  
  --ink: #9cc0ff;              /* Luminous soft cyan-blue ink */
  --ink2: #7fb0ff;             /* Vibrant sky blue */
  --text: #e7e9ef;             /* High contrast parchment white */
  --pencil: #aab3c5;           /* Light graphite silver */
  
  --shadow-sheet: 0 2px 4px rgba(0, 0, 0, 0.45), 0 10px 28px rgba(0, 0, 0, 0.40);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.35), 0 6px 16px rgba(0, 0, 0, 0.30);
  --shadow-sticky: 0 2px 6px rgba(0, 0, 0, 0.45), 0 12px 24px -6px rgba(0, 0, 0, 0.50);
  
  --hl-yellow: rgba(255, 214, 0, 0.32);
  --hl-green: rgba(70, 220, 130, 0.30);
  --hl-blue: rgba(80, 170, 255, 0.32);
  --hl-pink: rgba(255, 105, 170, 0.32);

  --sticky-y: #2d2a1b;         /* Muted deep gold in dark mode */
  --sticky-r: #331f20;         /* Muted dark coral */
  --sticky-b: #1c2738;         /* Muted deep navy */
  --sticky-g: #1c2e22;         /* Muted dark forest */
  --sticky-text: #f0f3f8;
  
  --red: #ff8a80;
  --green: #7be0a4;
  --amber: #ffc266;
}
```

---

## 2. The Paper Canvas Engine

The heart of Template 2.0 is the physical paper sheet (`.nb-sheet`). It synthesizes ruled notebook lines, vertical margins, ring-binder hole punches, and spiral binding coils through lightweight pure CSS.

```
       +-------------------------------------------------------------------------------+
       |                                                                               |
 (---) |   |                                                                           |
 HOLE  |   |   H1: Three-Tier Client-Server Architecture                               |
 PUNCH |   |   =========================================                               |
       |   |   Blue Ruled Line 1 ----------------------------------------------------  |
 (---) |   |   Blue Ruled Line 2 ----------------------------------------------------  |
 HOLE  |   |   Blue Ruled Line 3 ----------------------------------------------------  |
 PUNCH |   |                                                                           |
       |   |                                                                           |
 (---) |   |                                                               [ TAB FLAG] |
 HOLE  |   |                                                                           |
       +---|---------------------------------------------------------------------------+
         ^
         |-- Red Margin Line (66px from sheet edge)
```

### Complete CSS Canvas Implementation
```css
/* Study Desk Canvas */
body {
  margin: 0;
  background: var(--desk);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.65;
  overflow-x: hidden;
}

/* Physical Notebook Sheet Leaf */
.nb-sheet {
  position: relative;
  max-width: 940px;
  margin: 20px auto 40px;
  background: var(--paper);
  border-radius: 6px 14px 14px 6px;
  box-shadow: var(--shadow-sheet);
  padding: 30px 40px 44px 78px;
  
  /* Ruled Blue Notebook Lines + Vertical Red Margin */
  background-image: 
    linear-gradient(90deg, transparent 64px, var(--margin) 64px, var(--margin) 66px, transparent 66px),
    repeating-linear-gradient(transparent 0 calc(var(--lh) - 1px), var(--rule) calc(var(--lh) - 1px) var(--lh));
  background-position: 0 0, 0 54px;
}

/* Tablet & Mobile Margin Insets */
@media (max-width: 760px) {
  .nb-sheet {
    padding: 24px 18px 36px 36px;
    margin: 10px auto 20px;
    background-image: 
      linear-gradient(90deg, transparent 22px, var(--margin) 22px, var(--margin) 24px, transparent 24px),
      repeating-linear-gradient(transparent 0 calc(var(--lh) - 1px), var(--rule) calc(var(--lh) - 1px) var(--lh));
  }
}

/* Punch Holes (Transparent radial gradients cutting through sheet to reveal desk) */
@media (min-width: 760px) {
  .nb-sheet::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 24px;
    bottom: 24px;
    width: 34px;
    background: radial-gradient(circle at 17px 15px, var(--desk) 0 6.5px, transparent 7.5px) 0 0/34px 34px repeat-y;
    pointer-events: none;
    z-index: 2;
  }
  
  /* Spiral Wire Binding Coils */
  .nb-sheet::after {
    content: "";
    position: absolute;
    left: -22px;
    top: 24px;
    bottom: 24px;
    width: 22px;
    background: repeating-linear-gradient(
      transparent 0 8px,
      #8d8f96 8px 11px,
      #c8cad0 11px 13px,
      transparent 13px 34px
    );
    opacity: 0.85;
    border-radius: 4px;
    pointer-events: none;
    z-index: 3;
  }
  
  html[data-theme="dark"] .nb-sheet::after {
    background: repeating-linear-gradient(
      transparent 0 8px,
      #59606e 8px 11px,
      #8a93a6 11px 13px,
      transparent 13px 34px
    );
  }
}

/* Physical Page Divider Tabs (Sticking out of sheet right edge) */
.nb-tabflag {
  position: absolute;
  right: -14px;
  top: 36px;
  background: var(--ink);
  color: #ffffff;
  font-family: var(--font-hand);
  font-weight: 700;
  font-size: 1.25rem;
  padding: 6px 14px 6px 12px;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.18);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 0.04em;
  cursor: pointer;
  user-select: none;
  z-index: 10;
}
```

---

## 3. Controlled Handwritten Imperfection Engine

To avoid the artificial, sterile feel of computer layouts without causing layout jitter or visual chaos, Template 2.0 introduces **Controlled Deterministic Imperfection**.

### 3.1 Deterministic Rotation Tokens
Every element variation is strictly determined by its structural position (`:nth-child`, `:nth-of-type`) or explicit variant class. **Zero runtime `Math.random()`.**

```css
/* Heading Subtle Hand Tilt */
h1.nb-hand-title { transform: rotate(-0.35deg); }
h2.nb-sec-title:nth-of-type(odd) { transform: rotate(0.3deg); }
h2.nb-sec-title:nth-of-type(even) { transform: rotate(-0.25deg); }

/* Sticky Note Physics */
.nb-sticky:nth-child(4n+1) { transform: rotate(-1.2deg); }
.nb-sticky:nth-child(4n+2) { transform: rotate(0.9deg); }
.nb-sticky:nth-child(4n+3) { transform: rotate(-0.6deg); }
.nb-sticky:nth-child(4n+4) { transform: rotate(1.4deg); }

/* Washi Tape Strip Micro-Tilts */
.nb-tape { transform: rotate(-3.5deg); }
.nb-tape.nb-tape--right { transform: rotate(4deg); }
.nb-tape.nb-tape--center { transform: rotate(-1deg); }

/* Rubber Stamp Incline */
.nb-stamp { transform: rotate(-2.5deg); }
.nb-stamp:nth-of-type(even) { transform: rotate(1.8deg); }
```

### 3.2 Wavy Hand-Drawn SVG Underlines
Instead of sterile CSS `border-bottom`, major handwritten headings use a hand-drawn wavy underline rendered via lightweight vector SVG mask:

```css
.nb-hand-underline {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8' preserveAspectRatio='none'%3E%3Cpath d='M1 5 Q 15 1 30 5 T 60 5 T 90 5 T 119 4' fill='none' stroke='%23e0a32a' stroke-width='2.4' stroke-linecap='round'/%3E%3C/svg%3E") left bottom/100% 7px no-repeat;
  padding-bottom: 5px;
}
```

---

## 4. The Chisel Highlighter System

Highlighter strokes mimic real translucent felt-tip highlighter pens drawn across physical paper. They feature soft edges, slight opacity overlap, and multiple semantic color codes.

```css
/* Universal Base Highlighter */
.nb-hl {
  color: inherit;
  padding: 0.1em 0.35em;
  border-radius: 0.35em 0.55em 0.35em 0.65em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* 4 Semantic Highlighter Shades */
.nb-hl--yellow { background: var(--hl-yellow); }
.nb-hl--green  { background: var(--hl-green); }
.nb-hl--blue   { background: var(--hl-blue); }
.nb-hl--pink   { background: var(--hl-pink); }
```

### Semantic Usage Guidelines
- **`.nb-hl--yellow`**: Core definitions, foundational principles, seminal authors.
- **`.nb-hl--green`**: Strategic advantages, high-yield exam answers, cost savings, optimal points.
- **`.nb-hl--pink`**: Implementation risks, common student traps, financial failure modes, red flags.
- **`.nb-hl--blue`**: System architectures, technology terms, database protocols, SAP item types.

---

## 5. Physical Sticky Notes & Washi Tape

### 5.1 Washi Tape Strips (`.nb-tape`)
Semi-transparent textured tape strips anchoring study cards, diagrams, and formulas to the notebook page:

```css
.nb-tape {
  position: absolute;
  width: 86px;
  height: 22px;
  top: -10px;
  left: 20px;
  transform: rotate(-3.5deg);
  background: repeating-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.45) 0 5px,
    rgba(255, 255, 255, 0) 5px 10px
  ), rgba(255, 185, 200, 0.75);
  opacity: 0.92;
  box-shadow: var(--shadow-tape);
  pointer-events: none;
  z-index: 5;
}
.nb-tape--right { left: auto; right: 20px; transform: rotate(4deg); }
.nb-tape--center { left: 50%; transform: translateX(-50%) rotate(-1deg); }
```

### 5.2 Physical Sticky Notes (`.nb-sticky`)
Folded-corner paper notes with realistic drop shadow, pushpins, and handwritten titles:

```css
.nb-sticky {
  position: relative;
  background: var(--sticky-y);
  color: var(--sticky-text);
  font-family: var(--font-hand2);
  font-size: 1.15rem;
  line-height: 1.55;
  padding: 20px 20px 16px;
  margin: 22px 4px;
  border-radius: 2px 2px 14px 2px;
  box-shadow: var(--shadow-sticky);
}

/* Washi tape topper across top edge */
.nb-sticky::before {
  content: "";
  position: absolute;
  top: -11px;
  left: 50%;
  width: 90px;
  height: 22px;
  transform: translateX(-50%) rotate(-2deg);
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.55) 0 6px,
    rgba(255, 255, 255, 0.25) 6px 12px
  ), rgba(160, 200, 230, 0.65);
}

/* Color Variants */
.nb-sticky--pink  { background: var(--sticky-r); }
.nb-sticky--blue  { background: var(--sticky-b); }
.nb-sticky--green { background: var(--sticky-g); }

/* Pushpin Alternative Topper for Red/Pink Warnings */
.nb-sticky--pin::before {
  background: radial-gradient(circle at 35% 35%, #ff8d86, #b4241c);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: -7px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.35);
  transform: translateX(-50%);
}

.nb-sticky__title {
  font-family: var(--font-hand);
  font-weight: 700;
  font-size: 1.55rem;
  margin: 0 0 6px;
  color: var(--ink);
  line-height: 1.15;
}
.nb-sticky--pink .nb-sticky__title { color: #9b1c14; }
```

---

## 6. Rubber Stamps (`.nb-stamp`)

Rubber stamps serve as high-impact visual anchors representing academic certification, exam preparedness, and pedagogical taxonomy.

```css
.nb-stamp {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red);
  border: 2.5px solid currentColor;
  border-radius: 6px;
  padding: 3px 9px;
  transform: rotate(-2.5deg);
  box-shadow: inset 0 0 0 1.5px var(--paper), inset 0 0 0 3px currentColor;
  opacity: 0.92;
  background: transparent;
  line-height: 1.3;
  user-select: none;
}

.nb-stamp--blue  { color: var(--ink2); transform: rotate(1.5deg); }
.nb-stamp--green { color: var(--green); transform: rotate(-1.2deg); }
.nb-stamp--amber { color: var(--amber); transform: rotate(2deg); }
```

---

## 7. Math & Formula Paper Boxes (`.nb-fbox`)

Formulas are displayed in clean mathematical typography (`STIX Two Text`) framed by academic ruled card containers with drop-shadow highlighter edges:

```css
.nb-fbox {
  position: relative;
  border: 2px solid var(--ink);
  border-radius: 4px;
  padding: 16px 20px;
  margin: 18px 0 24px;
  background: var(--card);
  box-shadow: 6px 6px 0 var(--hl-blue);
}
.nb-fbox__label {
  font-family: var(--font-hand2);
  color: var(--pencil);
  font-size: 1.1rem;
  display: block;
  margin-bottom: 6px;
}
.nb-fbox__math {
  font-family: var(--font-math);
  font-size: 1.4rem;
  line-height: 2;
  color: var(--text);
  overflow-x: auto;
}
```

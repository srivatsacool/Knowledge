# builder_gm410/styles.py
# Notebook 2.0 Design Tokens, Typography, Single-Line Ruled Paper Engine, and Component Styles

STYLES_CSS = """
/* Notebook 2.0 Master Academic Library Tokens & Visual Engine */
:root {
  --desk: #e9e1cf;
  --bg: #e9e1cf;
  --paper: #fcf8ee;
  --paper2: #fffdf7;
  --card: #fffdf7;
  --rule: #d8e2ed;
  --margin: #e28b8b;
  --line: #c8bfa8;
  
  --ink: #1d3c8c;
  --ink2: #2a52be;
  --text: #22252a;
  --pencil: #525660;
  
  --shadow-sheet: 0 1px 3px rgba(50, 40, 20, 0.12), 0 8px 24px rgba(50, 40, 20, 0.14);
  --shadow-card: 0 1px 3px rgba(50, 40, 20, 0.08), 0 4px 12px rgba(50, 40, 20, 0.06);
  --shadow-sticky: 0 2px 4px rgba(0, 0, 0, 0.12), 0 10px 18px -6px rgba(0, 0, 0, 0.22);
  --shadow: rgba(50, 40, 20, 0.14);
  
  --hl-yellow: rgba(255, 224, 61, 0.65);
  --hl-green: rgba(120, 228, 156, 0.60);
  --hl-blue: rgba(110, 196, 255, 0.55);
  --hl-pink: rgba(255, 138, 188, 0.50);

  --sticky-y: #fff2a1;
  --sticky-r: #ffd6d3;
  --sticky-b: #d9ecff;
  --sticky-g: #d8f5dc;
  --sticky-text: #22252a;
  
  --red: #8b1e2f;
  --green: #1d7a45;
  --amber: #b86e00;
  --blue: #1d3c8c;
  --navy: #0f2454;
  --burgundy: #7a1526;
  --forest: #165b34;
  
  --serif: "STIX Two Text", "Newsreader", "Georgia", serif;
  --sans: "Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --hand: "Caveat", "Segoe Print", cursive;
  --hand2: "Patrick Hand", "Segoe Print", cursive;
  --math: "STIX Two Text", "Cambria Math", Georgia, serif;
  --mono: "JetBrains Mono", Consolas, Menlo, monospace;
  --ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  
  --top: 0px;
  --bar: 54px;
  --line-height: 32px;
  --grain: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .4  0 0 0 0 .3  0 0 0 0 .1  0 0 0 .06 0'/></filter><rect width='120' height='120' filter='url(%23n)'/></svg>");
}

[data-theme="dark"] {
  --desk: #0f141d;
  --bg: #0f141d;
  --paper: #18202e;
  --paper2: #1d2636;
  --card: #1d2636;
  --rule: #232f46;
  --margin: #7c3d48;
  --line: #344058;
  
  --ink: #9cc0ff;
  --ink2: #7fb0ff;
  --text: #e7e9ef;
  --pencil: #aab3c5;
  
  --shadow-sheet: 0 2px 6px rgba(0, 0, 0, 0.45), 0 10px 28px rgba(0, 0, 0, 0.40);
  --shadow-card: 0 1px 4px rgba(0, 0, 0, 0.35), 0 6px 16px rgba(0, 0, 0, 0.30);
  --shadow-sticky: 0 2px 6px rgba(0, 0, 0, 0.45), 0 12px 24px -6px rgba(0, 0, 0, 0.50);
  --shadow: rgba(0, 0, 0, 0.45);
  
  --hl-yellow: rgba(255, 214, 0, 0.30);
  --hl-green: rgba(70, 220, 130, 0.28);
  --hl-blue: rgba(80, 170, 255, 0.30);
  --hl-pink: rgba(255, 105, 170, 0.30);

  --sticky-y: #2d2a1b;
  --sticky-r: #331f20;
  --sticky-b: #1c2738;
  --sticky-g: #1c2e22;
  --sticky-text: #f0f3f8;
  
  --red: #f87171;
  --green: #4ade80;
  --amber: #fbbf24;
  --blue: #60a5fa;
  --navy: #93c5fd;
  --burgundy: #f87171;
  --forest: #4ade80;
}

/* Scrollbar suppression for clean reading */
html, body, .side, .main, #searchResults, .tblwrap, * {
  scrollbar-width: thin;
  scrollbar-color: var(--line) transparent;
}
*::-webkit-scrollbar { width: 6px; height: 6px; }
*::-webkit-scrollbar-thumb { background: var(--line); border-radius: 3px; }
*::-webkit-scrollbar-track { background: transparent; }

/* Base Reset & Box Sizing */
*, *::before, *::after { box-sizing: border-box; }
html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--top) + var(--bar) + 16px);
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  background: var(--desk) var(--grain);
  color: var(--text);
  font-family: var(--sans);
  font-size: 17px;
  line-height: var(--line-height);
}

a { color: var(--ink2); text-decoration: none; }
a:hover { text-decoration: underline; }
:focus-visible { outline: 3px solid var(--amber); outline-offset: 2px; border-radius: 4px; }
.skip { position: absolute; left: -999px; top: 8px; background: var(--ink); color: #fff; padding: 8px 14px; z-index: 9999; border-radius: 4px; }
.skip:focus { left: 8px; }

/* Top Navigation Bar */
.topbar {
  position: sticky; top: var(--top); z-index: 70; height: var(--bar);
  display: flex; align-items: center; gap: 8px; padding: 0 18px;
  background: var(--paper); border-bottom: 2px solid var(--line);
  font-family: var(--ui); font-size: 14px; box-shadow: 0 2px 4px rgba(0,0,0,0.06);
}
.topbar .brand {
  display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--ink); text-decoration: none;
}
.topbar .badge-inst {
  font-size: 11px; padding: 2px 7px; background: var(--burgundy); color: #fff; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;
}
.topbar .sp { flex: 1; }
.topbar .ttl {
  font-family: var(--serif); font-weight: 700; font-size: 1.15rem; color: var(--ink);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 420px;
}
.btn {
  font: 600 13px var(--ui); background: var(--card); color: var(--text);
  border: 1.5px solid var(--line); border-radius: 6px; padding: 5px 11px;
  cursor: pointer; min-height: 32px; display: inline-flex; align-items: center; gap: 6px;
  transition: all 0.15s ease;
}
.btn:hover { background: var(--hl-yellow); border-color: var(--ink); }
.btn[aria-pressed=true], .btn.on { background: var(--ink); color: #fff; border-color: var(--ink); }
.btn.sm { padding: 3px 8px; min-height: 26px; font-size: 12px; }

.progressWrap { position: absolute; left: 0; right: 0; bottom: -3px; height: 3px; background: transparent; }
#progressBar { height: 3px; width: 0; background: linear-gradient(90deg, var(--green), var(--ink2)); transition: width .2s; }

/* Search Engine Overlay */
.search { position: relative; }
.search input {
  font: 14px var(--ui); padding: 5px 12px; width: 200px;
  background: var(--card); color: var(--text); border: 1.5px solid var(--line);
  border-radius: 6px; min-height: 32px;
}
.search input:focus { border-color: var(--ink); outline: none; width: 240px; transition: width .2s; }
#searchResults {
  position: absolute; right: 0; top: 40px; width: min(540px, 92vw); max-height: 65vh;
  overflow-y: auto; background: var(--paper2); border: 2px solid var(--line);
  border-radius: 8px; box-shadow: var(--shadow-sheet); display: none; font-family: var(--ui); z-index: 100;
}
#searchResults.open { display: block; }
#searchResults a { display: block; padding: 10px 14px; border-bottom: 1px solid var(--line); text-decoration: none; color: var(--text); font-size: 14px; }
#searchResults a:hover, #searchResults a:focus { background: var(--hl-yellow); }
#searchResults small { display: block; color: var(--pencil); font-size: 12px; margin-top: 2px; }
#searchResults mark { background: var(--hl-yellow); color: inherit; padding: 1px 3px; border-radius: 2px; }

/* Timer Panel */
.timerPanel {
  position: absolute; right: 12px; top: calc(var(--bar) + 6px); width: 280px;
  background: var(--paper2); border: 2px solid var(--line); border-radius: 10px;
  padding: 16px; display: none; box-shadow: var(--shadow-sheet); z-index: 100;
}
.timerPanel.open { display: block; }
.timerPanel .clock { font: 700 36px var(--hand); text-align: center; color: var(--ink); margin-bottom: 8px; }
.timerPanel .row { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; }

/* Layout Shell: Sidebar & Main Reading Canvas */
.shell {
  display: grid;
  grid-template-columns: 290px minmax(0, 1fr);
  max-width: 1440px;
  margin: 0 auto;
  gap: 0;
}

.side {
  position: sticky; top: calc(var(--top) + var(--bar)); height: calc(100vh - var(--top) - var(--bar));
  overflow-y: auto; padding: 16px 12px 60px 16px; font-family: var(--ui); font-size: 13.5px;
  background: var(--paper); border-right: 2px solid var(--line);
  background-image: repeating-linear-gradient(transparent 0 31px, var(--rule) 31px 32px);
}
.side h2 {
  font: 700 11.5px var(--ui); letter-spacing: .12em; text-transform: uppercase;
  color: var(--pencil); margin: 18px 8px 6px; border-bottom: 1px solid var(--line); padding-bottom: 4px;
}
.side a {
  display: flex; gap: 8px; align-items: center; padding: 6px 10px; margin: 2px 0;
  text-decoration: none; color: var(--text); border-radius: 6px; border-left: 3px solid transparent;
  transition: all 0.15s ease; line-height: 1.35;
}
.side a:hover { background: var(--hl-yellow); }
.side a.cur {
  background: var(--card); box-shadow: var(--shadow-card);
  border-left-color: var(--ink); font-weight: 700; color: var(--ink);
}
.dot { flex: none; width: 10px; height: 10px; border-radius: 50%; border: 2px solid var(--pencil); }
.st-done { background: var(--green); border-color: var(--green); }
.st-prog { background: var(--amber); border-color: var(--amber); }

/* Main Reading Canvas */
.main { padding: 24px 28px 100px; min-width: 0; }

/* The Single-Line Ruled Paper Sheet Container */
.sheet {
  position: relative;
  background-color: var(--paper);
  background-image:
    var(--grain),
    repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent calc(var(--line-height) - 1px),
      var(--rule) calc(var(--line-height) - 1px),
      var(--rule) var(--line-height)
    );
  background-size: 100% var(--line-height);
  background-position: 0 16px;
  line-height: var(--line-height);
  padding: 38px 44px 44px 80px;
  border: 1px solid var(--line);
  border-radius: 8px 16px 16px 8px;
  box-shadow: var(--shadow-sheet);
  margin: 0 0 40px;
  overflow: hidden; /* Guarantees lines end precisely at content bottom */
}

/* Left Red Margin Line */
.sheet::before {
  content: "";
  position: absolute;
  left: 58px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--margin);
  opacity: 0.8;
  pointer-events: none;
}

/* Notebook Binder Hole Punches */
.sheet::after {
  content: "";
  position: absolute;
  left: 14px;
  top: 40px;
  bottom: 40px;
  width: 16px;
  background: radial-gradient(circle, var(--desk) 5px, transparent 6px) 0 0/16px 72px repeat-y;
  opacity: 0.95;
  pointer-events: none;
}

/* Zero-Ruling Mode Toggle */
[data-ruling="off"] .sheet {
  background-image: var(--grain) !important;
}

/* Editorial Typography */
h1, h2, h3, h4, h5 { font-family: var(--serif); line-height: 1.25; margin: 0; }
h1.hero-title {
  font-size: clamp(2rem, 4.5vw, 2.85rem);
  color: var(--navy);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}
h2.mod-title {
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  color: var(--ink);
  font-weight: 700;
  margin: 6px 0 14px;
  border-bottom: 2px solid var(--ink);
  padding-bottom: 6px;
  display: flex;
  align-items: baseline;
  gap: 12px;
}
h3.sec-title {
  font-size: 1.35rem;
  color: var(--burgundy);
  margin: 28px 0 10px;
  font-weight: 700;
  display: inline-block;
  border-bottom: 1.5px solid var(--burgundy);
  padding-bottom: 3px;
}
h4.sub-title {
  font-size: 1.15rem;
  color: var(--forest);
  margin: 18px 0 6px;
  font-family: var(--serif);
  font-weight: 700;
}
p {
  margin: 0 0 1em;
  color: var(--text);
  font-size: 17px;
}
ul, ol {
  margin: 0 0 1.2em;
  padding-left: 24px;
}
li { margin-bottom: 0.35em; }

mark {
  background: linear-gradient(transparent 40%, var(--hl-yellow) 40%, var(--hl-yellow) 90%, transparent 90%);
  color: inherit;
  padding: 0 2px;
}
.kick {
  font: 700 12px var(--ui);
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--red);
  display: block;
  margin-bottom: 4px;
}

/* ==========================================================================
   LAYER 2: KNOWLEDGE COMPONENTS (Opaque surfaces, zero ruling collision)
   ========================================================================== */
.nb-card, .nb-case-card, .nb-diagram-card, .tblwrap, 
.nb-fbox, .nb-exam-card, .nb-quiz-card, .nb-sticky, .nb-callout, .nb-framework {
  background: var(--paper2) !important;
  border: 1.5px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow-card);
  padding: 20px 24px;
  margin: 24px 0;
  position: relative;
  z-index: 2;
  line-height: 1.6;
}

.nb-card__title {
  font-family: var(--serif);
  font-size: 1.35rem;
  color: var(--ink);
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 700;
}

/* Sticky Note Annotations */
.nb-sticky {
  background: var(--sticky-y) !important;
  color: var(--sticky-text);
  font-family: var(--hand2);
  font-size: 1.15rem;
  line-height: 1.5;
  padding: 18px 22px;
  border-radius: 2px 2px 14px 2px;
  box-shadow: var(--shadow-sticky);
  transform: rotate(-0.7deg);
  border: none;
}
.nb-sticky::before {
  content: ""; position: absolute; top: -10px; left: 50%; width: 90px; height: 20px;
  transform: translateX(-50%) rotate(-1.5deg);
  background: repeating-linear-gradient(45deg, rgba(255,255,255,.5) 0 6px, rgba(255,255,255,.2) 6px 12px), rgba(160,200,230,.65);
}
.nb-sticky--pink { background: var(--sticky-r) !important; transform: rotate(0.8deg); }
.nb-sticky--blue { background: var(--sticky-b) !important; transform: rotate(-0.5deg); }
.nb-sticky--green { background: var(--sticky-g) !important; transform: rotate(0.6deg); }
.nb-sticky__title {
  font-family: var(--hand); font-weight: 700; font-size: 1.4rem; margin: 0 0 6px; color: var(--ink);
}

/* Callout Boxes */
.nb-callout {
  border-left: 6px solid var(--ink);
  background: rgba(240, 246, 255, 0.7) !important;
}
.nb-callout--warn {
  border-left-color: var(--amber);
  background: rgba(255, 248, 225, 0.7) !important;
}
.nb-callout--danger {
  border-left-color: var(--red);
  background: rgba(254, 242, 242, 0.7) !important;
}
.nb-callout--success {
  border-left-color: var(--green);
  background: rgba(240, 252, 244, 0.7) !important;
}
.nb-callout__tag {
  display: inline-block; font: 800 11px var(--ui); text-transform: uppercase;
  letter-spacing: .08em; padding: 2px 8px; border-radius: 4px; margin-bottom: 8px;
  background: var(--ink); color: #fff;
}
.nb-callout--warn .nb-callout__tag { background: var(--amber); }
.nb-callout--danger .nb-callout__tag { background: var(--red); }
.nb-callout--success .nb-callout__tag { background: var(--green); }

/* Stamp Badges */
.nb-stamp {
  display: inline-block; padding: 2px 9px; font-family: var(--ui); font-size: 11px; font-weight: 800;
  text-transform: uppercase; letter-spacing: .08em; border: 1.5px solid var(--ink); border-radius: 4px;
  background: var(--paper); color: var(--ink); transform: rotate(-1.5deg); margin-right: 6px;
}
.nb-stamp--green { border-color: var(--green); color: var(--green); }
.nb-stamp--red { border-color: var(--red); color: var(--red); }
.nb-stamp--amber { border-color: var(--amber); color: var(--amber); }

/* Formula Boxes */
.nb-fbox {
  border: 2px solid var(--ink); border-radius: 6px; padding: 18px 22px;
  background: var(--paper2) !important; box-shadow: 4px 4px 0 var(--ink);
}
.nb-fbox__label { font-family: var(--hand); color: var(--pencil); font-size: 1.2rem; display: block; margin-bottom: 4px; font-weight: 700; }
.nb-fbox__math { font-family: var(--math); font-size: 1.35rem; line-height: 1.8; color: var(--ink); overflow-x: auto; font-weight: 600; }
.nb-fbox__dict { display: grid; grid-template-columns: max-content 1fr; gap: 4px 14px; margin: 12px 0 0; font-size: .95rem; font-family: var(--ui); }
.nb-fbox__dict dt { font-weight: 700; color: var(--ink); }
.nb-fbox__dict dd { margin: 0; color: var(--pencil); }

/* Tables */
.tblwrap {
  overflow-x: auto; padding: 0 !important; border: 1.5px solid var(--line); border-radius: 8px;
}
table.nb-table {
  width: 100%; border-collapse: collapse; font-family: var(--ui); font-size: 14.5px; line-height: 1.5;
}
table.nb-table th, table.nb-table td {
  padding: 10px 14px; border: 1px solid var(--line); text-align: left; vertical-align: top;
}
table.nb-table th {
  background: var(--paper); font-weight: 700; color: var(--ink); text-transform: uppercase; font-size: 12px; letter-spacing: .05em;
}
table.nb-table tr:nth-child(even) td { background: rgba(0,0,0,0.02); }

/* Active Recall Accordion (<details class="rv">) */
details.rv {
  background: var(--paper2); border: 1.5px solid var(--line); border-radius: 6px;
  margin: 16px 0; overflow: hidden; box-shadow: var(--shadow-card);
}
details.rv summary {
  padding: 12px 16px; font-weight: 700; cursor: pointer; font-family: var(--ui);
  display: flex; justify-content: space-between; align-items: center; background: var(--paper);
  color: var(--ink); user-select: none;
}
details.rv summary:hover { background: var(--hl-yellow); }
details.rv .rv-content {
  padding: 18px 20px; border-top: 1px solid var(--line); line-height: 1.6;
}

/* Exam Model Answer Cards */
.nb-exam-card {
  border-left: 6px solid var(--burgundy) !important;
}
.nb-exam-card__header {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
  margin-bottom: 12px; border-bottom: 1px solid var(--line); padding-bottom: 8px;
}
.nb-exam-pill {
  font: 800 11px var(--ui); padding: 3px 8px; border-radius: 4px; text-transform: uppercase;
  background: var(--burgundy); color: #fff; letter-spacing: .06em;
}
.nb-exam-pill--compulsory { background: var(--red); }
.nb-exam-pill--marks { background: var(--ink); }

.nb-exam-scaffold {
  display: grid; gap: 12px; margin: 16px 0;
}
.nb-exam-step {
  background: var(--paper); border: 1px solid var(--line); border-radius: 6px; padding: 12px 16px;
}
.nb-exam-step__badge {
  font: 800 11px var(--ui); color: var(--burgundy); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 4px; display: block;
}

/* Polling Question Card (INSEAD Teaching Note) */
.nb-poll-card {
  border-left: 6px solid var(--forest) !important;
}
.nb-poll-card__header {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;
}
.nb-poll-opt {
  padding: 8px 12px; margin: 6px 0; border: 1px solid var(--line); border-radius: 6px;
  background: var(--paper); font-size: 14.5px;
}
.nb-poll-opt--correct {
  background: rgba(120, 228, 156, 0.25); border-color: var(--green); font-weight: 700;
}
.nb-poll-opt--correct::before {
  content: "✔ CORRECT: "; color: var(--green);
}

/* SVG Vector Diagram Wrappers */
.nb-diagram {
  display: block; width: 100%; max-width: 100%; margin: 16px 0;
}
.nb-diagram text { font-family: var(--ui); }

/* Focus Mode */
body.focus .side { display: none; }
body.focus .shell { grid-template-columns: 1fr; max-width: 920px; }

/* Responsive Media Queries */
#hamb { display: none; }
@media (max-width: 1024px) {
  .shell { grid-template-columns: 1fr; }
  .side {
    position: fixed; left: -320px; top: var(--bar); bottom: 0; width: 300px;
    z-index: 90; transition: left 0.25s ease; box-shadow: var(--shadow-sheet);
  }
  .side.open { left: 0; }
  #hamb { display: inline-flex; }
  .main { padding: 16px 16px 80px; }
  .sheet { padding: 28px 20px 28px 64px; }
}

@media print {
  .topbar, .side, .timerPanel, #searchResults, .btn { display: none !important; }
  .shell { display: block; max-width: 100%; }
  .sheet {
    box-shadow: none !important; border: none !important;
    background-image: none !important; padding: 0 !important;
  }
  .sheet::before, .sheet::after { display: none !important; }
  details.rv { break-inside: avoid; }
  details.rv[open] .rv-content { display: block !important; }
}
"""

/**
 * Brain Knowledge Hub — Compiler for ERP Business Applications Notebook 2.0
 * Generates the complete, master-grade "Brain Hub Notebook OS — Paper Edition"
 * study guide for Operations/ERP_Business_Applications_Notebook.html
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const SVG_DIR = path.join(ROOT_DIR, '_templates', 'v2', 'svg_blueprints');
const TARGET_HTML = path.join(ROOT_DIR, 'Operations', 'ERP_Business_Applications_Notebook.html');
const TARGET_META = path.join(ROOT_DIR, 'Operations', 'ERP_Business_Applications_Notebook.meta.json');
const BENCHMARK_META = path.join(ROOT_DIR, 'ERP_Exam_Notebook.meta.json');

// Read SVG blueprints
function loadSvg(filename) {
  const filePath = path.join(SVG_DIR, filename);
  if (!fs.existsSync(filePath)) return `<!-- Missing ${filename} -->`;
  let svg = fs.readFileSync(filePath, 'utf8');
  // Strip XML declaration if present
  svg = svg.replace(/<\?xml[^>]*\?>/i, '').trim();
  return svg;
}

const svg3Tier = loadSvg('architecture-3tier.svg');
const svgMatrix = loadSvg('matrix-2x2.svg');
const svgProcess = loadSvg('process-flow.svg');
const svgTimeline = loadSvg('timeline.svg');
const svgSystem = loadSvg('system-model.svg');
const svgDecisionTree = loadSvg('decision-tree.svg');
const svgMindMap = loadSvg('mind-map.svg');
const svgHierarchy = loadSvg('hierarchy-tree.svg');
const svgFunnel = loadSvg('funnel.svg');
const svgCycle = loadSvg('cycle.svg');
const svgComparison = loadSvg('comparison-matrix.svg');
const svgFishbone = loadSvg('fishbone-cause-effect.svg');
const svgValueChain = loadSvg('value-chain.svg');
const svgDataFlow = loadSvg('data-flow.svg');
const svgExam = loadSvg('exam-answer-framework.svg');
const svgCalculation = loadSvg('calculation-model.svg');

// Assembling HTML
const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>ERP Business Applications · Brain Hub Notebook OS (Paper Edition)</title>
  <meta name="description" content="Comprehensive postgraduate MBA study guide and exam blueprint covering ERP business and technology strategy, 3-tier architecture, the Five Pillars of ERP, Value Matrix Analysis, Plossl manufacturing theory, Master Data, Subway franchise case study, and 100% model FAQ exam answers.">
  <meta name="keywords" content="Operations, ERP, Enterprise Systems, BPR, Supply Chain, Value Matrix, Plossl, Master Data, MBA Curriculum, Altekar">
  <meta name="author" content="Brain Knowledge Hub / Rahul Altekar Curriculum">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%93%92%3C/text%3E%3C/svg%3E">

  <!-- Handwritten & Academic Typography: Caveat, Patrick Hand, Source Sans 3, STIX Two Text -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=STIX+Two+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       BRAIN HUB NOTEBOOK OS — PAPER EDITION MASTER DESIGN TOKENS
       ========================================================================== */
    :root {
      --paper: #fcf8ee;
      --desk: #e9e1cf;
      --rule: #d6e3ef;
      --margin: #e28b8b;
      --card: #fffdf7;
      --line: #c9bfa8;
      
      --ink: #1d3c8c;
      --ink2: #2f5fc4;
      --text: #25262b;
      --pencil: #5a5d66;
      
      --shadow-sheet: 0 1px 2px rgba(60, 45, 20, 0.12), 0 8px 24px rgba(60, 45, 20, 0.14);
      --shadow-card: 0 1px 3px rgba(60, 45, 20, 0.10), 0 4px 12px rgba(60, 45, 20, 0.08);
      --shadow-sticky: 0 2px 4px rgba(0, 0, 0, 0.12), 0 10px 18px -6px rgba(0, 0, 0, 0.22);
      
      --hl-yellow: rgba(255, 224, 61, 0.68);
      --hl-green: rgba(120, 228, 156, 0.62);
      --hl-blue: rgba(110, 196, 255, 0.55);
      --hl-pink: rgba(255, 138, 188, 0.52);

      --sticky-y: #fff2a1;
      --sticky-r: #ffd6d3;
      --sticky-b: #d9ecff;
      --sticky-g: #d8f5dc;
      --sticky-text: #22252a;
      
      --red: #c2362f;
      --green: #1d7a45;
      --amber: #b86e00;
      
      --font-hand: "Caveat", "Segoe Print", cursive;
      --font-hand2: "Patrick Hand", "Segoe Print", cursive;
      --font-body: "Source Sans 3", "Inter", -apple-system, sans-serif;
      --font-math: "STIX Two Text", "Cambria Math", Georgia, serif;
      
      --lh: 30px;
      --topbar-height: 56px;
      --sidebar-width: 300px;
    }

    html[data-theme="dark"] {
      --paper: #18202e;
      --desk: #0f141d;
      --rule: #243049;
      --margin: #7c3d48;
      --card: #1d2636;
      --line: #344058;
      
      --ink: #9cc0ff;
      --ink2: #7fb0ff;
      --text: #e7e9ef;
      --pencil: #aab3c5;
      
      --shadow-sheet: 0 2px 4px rgba(0, 0, 0, 0.45), 0 10px 28px rgba(0, 0, 0, 0.40);
      --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.35), 0 6px 16px rgba(0, 0, 0, 0.30);
      --shadow-sticky: 0 2px 6px rgba(0, 0, 0, 0.45), 0 12px 24px -6px rgba(0, 0, 0, 0.50);
      
      --hl-yellow: rgba(255, 214, 0, 0.32);
      --hl-green: rgba(70, 220, 130, 0.30);
      --hl-blue: rgba(80, 170, 255, 0.32);
      --hl-pink: rgba(255, 105, 170, 0.32);

      --sticky-y: #2d2a1b;
      --sticky-r: #331f20;
      --sticky-b: #1c2738;
      --sticky-g: #1c2e22;
      --sticky-text: #f0f3f8;
      
      --red: #ff8a80;
      --green: #7be0a4;
      --amber: #ffc266;
    }

    /* Base Reset */
    *, *::before, *::after { box-sizing: border-box; }
    html { -webkit-text-size-adjust: 100%; scroll-padding-top: calc(var(--topbar-height) + 18px); scroll-behavior: smooth; }
    body {
      margin: 0; background: var(--desk); color: var(--text);
      font-family: var(--font-body); font-size: 17px; line-height: 1.65; overflow-x: hidden;
    }
    a { color: var(--ink2); text-decoration: none; }
    a:hover { text-decoration: underline; }
    :focus-visible { outline: 3px solid var(--amber); outline-offset: 2px; border-radius: 4px; }
    img, svg { max-width: 100%; height: auto; }

    /* Topbar Controls */
    .nb-topbar {
      position: fixed; top: 0; left: 0; right: 0; height: var(--topbar-height);
      background: var(--paper); border-bottom: 2px solid var(--line);
      z-index: 50; box-shadow: 0 2px 0 var(--rule);
    }
    .nb-topbar__inner { display: flex; align-items: center; justify-content: space-between; height: 100%; padding: 0 1rem; gap: 0.75rem; }
    .nb-topbar__brand { font-family: var(--font-hand); font-weight: 700; font-size: 1.65rem; color: var(--ink); white-space: nowrap; line-height: 1; }
    .nb-topbar__brand:hover { text-decoration: none; }
    .nb-topbar__crumb {
      flex: 1; min-width: 0; font-family: var(--font-hand2); font-size: 1.08rem; color: var(--pencil);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-left: 0.75rem; border-left: 2px dotted var(--line);
    }
    .nb-topbar__actions { display: flex; align-items: center; gap: 0.4rem; }
    
    .nb-btn-top {
      min-width: 40px; height: 40px; border: 0; background: transparent;
      color: var(--text); border-radius: 8px; font-size: 1.15rem; cursor: pointer;
      display: inline-flex; align-items: center; justify-content: center;
    }
    .nb-btn-top:hover { background: var(--hl-yellow); }
    .nb-btn-search {
      display: inline-flex; align-items: center; gap: 0.4rem; height: 38px; padding: 0 0.75rem;
      background: var(--card); border: 1.5px solid var(--line); border-radius: 6px;
      font-family: var(--font-hand2); font-size: 1.05rem; color: var(--text); cursor: pointer;
    }
    .nb-btn-search:hover { background: var(--hl-yellow); }
    .nb-btn-search kbd { font-family: var(--font-body); font-size: 0.75rem; padding: 0.1rem 0.35rem; border: 1px solid var(--line); border-radius: 4px; background: var(--paper); }
    .nb-topbar__pct { font-family: var(--font-hand); font-weight: 700; font-size: 1.35rem; color: var(--ink); min-width: 3.2em; text-align: right; }
    .nb-topbar__bar { height: 4px; background: var(--rule); }
    .nb-topbar__bar i { display: block; height: 100%; width: 0%; background: linear-gradient(90deg, var(--green), var(--ink2)); transition: width 0.3s; }

    /* Layout & Sidebar */
    .nb-layout { display: flex; padding-top: var(--topbar-height); }
    .nb-sidebar {
      position: fixed; top: var(--topbar-height); bottom: 0; left: 0; width: var(--sidebar-width);
      background: var(--paper); border-right: 2px solid var(--line); overflow-y: auto;
      padding: 1.25rem 1rem 2rem; z-index: 40; transform: translateX(-102%); transition: transform 0.25s ease;
      background-image: repeating-linear-gradient(transparent 0 calc(var(--lh) - 1px), var(--rule) calc(var(--lh) - 1px) var(--lh));
    }
    .nb-sidebar.is-open { transform: none; box-shadow: 4px 0 16px rgba(0, 0, 0, 0.25); }
    .nb-sidebar-shade { position: fixed; inset: 0; background: rgba(10, 12, 18, 0.45); z-index: 35; display: none; }
    .nb-sidebar-shade.is-on { display: block; }

    .nb-sidebar h2 { font-family: var(--font-hand); font-size: 2rem; color: var(--ink); margin: 0 0 4px; }
    .nb-sidebar__grp { font-family: var(--font-hand2); color: var(--pencil); font-size: 1.02rem; margin: 14px 0 4px; }
    .nb-sidebar nav a {
      display: flex; align-items: center; gap: 8px; min-height: 40px; padding: 4px 8px;
      border-radius: 6px; color: var(--text); text-decoration: none; line-height: 1.25; margin-bottom: 2px;
    }
    .nb-sidebar nav a:hover { background: var(--hl-yellow); }
    .nb-sidebar nav a.is-active { background: var(--card); box-shadow: var(--shadow-card); font-weight: 600; color: var(--ink); }
    .nb-sidebar__chip { width: 8px; border-radius: 3px; background: var(--ink); min-height: 24px; flex-shrink: 0; }
    .nb-sidebar__label { flex: 1; font-size: 0.95rem; }
    .nb-sidebar__ck {
      width: 20px; height: 20px; border: 2px solid var(--pencil); border-radius: 4px;
      display: grid; place-items: center; font-size: 0.85rem; color: var(--green); font-weight: 700; flex-shrink: 0;
    }
    .nb-sidebar nav a.is-done .nb-sidebar__ck::after { content: "✓"; }

    .nb-main { flex: 1; min-width: 0; padding: 22px 10px 50px; }

    @media (min-width: 1120px) {
      .nb-sidebar { transform: none; width: var(--sidebar-width); }
      #menuBtn { display: none; }
      .nb-main { margin-left: var(--sidebar-width); }
      body.is-focus .nb-sidebar { display: none; }
      body.is-focus .nb-main { margin-left: 0; }
    }

    /* Paper Canvas */
    .nb-sheet {
      position: relative; max-width: 960px; margin: 0 auto;
      background: var(--paper); border-radius: 6px 14px 14px 6px; box-shadow: var(--shadow-sheet);
      padding: 24px 20px 40px 36px;
      background-image: 
        linear-gradient(90deg, transparent 22px, var(--margin) 22px, var(--margin) 24px, transparent 24px),
        repeating-linear-gradient(transparent 0 calc(var(--lh) - 1px), var(--rule) calc(var(--lh) - 1px) var(--lh));
      background-position: 0 0, 0 54px;
    }

    @media (min-width: 760px) {
      .nb-sheet {
        padding: 34px 54px 44px 92px;
        background-image: 
          linear-gradient(90deg, transparent 66px, var(--margin) 66px, var(--margin) 68px, transparent 68px),
          repeating-linear-gradient(transparent 0 calc(var(--lh) - 1px), var(--rule) calc(var(--lh) - 1px) var(--lh));
      }
      .nb-sheet::before {
        content: ""; position: absolute; left: -15px; top: 18px; bottom: 18px; width: 34px;
        background: radial-gradient(circle at 17px 15px, var(--desk) 0 6.5px, transparent 7.5px) 0 0/34px 34px repeat-y;
        pointer-events: none; z-index: 2;
      }
      .nb-sheet::after {
        content: ""; position: absolute; left: -22px; top: 18px; bottom: 18px; width: 22px;
        background: repeating-linear-gradient(transparent 0 8px, #8d8f96 8px 11px, #c8cad0 11px 13px, transparent 13px 34px);
        opacity: 0.85; border-radius: 4px; pointer-events: none; z-index: 3;
      }
      html[data-theme="dark"] .nb-sheet::after {
        background: repeating-linear-gradient(transparent 0 8px, #59606e 8px 11px, #8a93a6 11px 13px, transparent 13px 34px);
      }
    }

    .nb-tabflag {
      position: absolute; right: -12px; top: 34px; background: var(--ink); color: #fff;
      font-family: var(--font-hand); font-weight: 700; font-size: 1.25rem;
      padding: 6px 14px 6px 12px; border-radius: 0 10px 10px 0;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
      writing-mode: vertical-rl; transform: rotate(180deg); letter-spacing: 0.04em;
      cursor: pointer; user-select: none; z-index: 10;
    }

    /* Typography */
    h1, h2, h3, h4 { font-family: var(--font-hand); color: var(--ink); line-height: 1.15; font-weight: 700; }
    h1 { font-size: clamp(2.3rem, 6vw, 3.1rem); margin: 0.2em 0 0.25em; }
    h2.nb-sec-title { font-size: clamp(1.85rem, 4.6vw, 2.3rem); margin: 2em 0 0.5em; border-bottom: 2px dashed var(--line); padding-bottom: 6px; }
    h3 { font-size: clamp(1.4rem, 3.6vw, 1.75rem); margin: 1.2em 0 0.35em; color: var(--ink); }
    h4 { font-size: 1.28rem; margin: 1em 0 0.2em; color: var(--ink); }
    p { margin: 0.55em 0; }
    strong { font-weight: 700; color: var(--ink); }
    html[data-theme="dark"] strong { color: #b4d2ff; }

    .nb-hand-underline {
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8' preserveAspectRatio='none'%3E%3Cpath d='M1 5 Q 15 1 30 5 T 60 5 T 90 5 T 119 4' fill='none' stroke='%23e0a32a' stroke-width='2.4' stroke-linecap='round'/%3E%3C/svg%3E") left bottom/100% 7px no-repeat;
      padding-bottom: 4px;
    }

    /* Rubber Stamps */
    .nb-stamps { display: flex; flex-wrap: wrap; gap: 8px 12px; margin: 0.5em 0 0.8em; }
    .nb-stamp {
      display: inline-block; font-family: var(--font-body); font-weight: 800; font-size: 0.76rem;
      letter-spacing: 0.08em; text-transform: uppercase; color: var(--red);
      border: 2.5px solid currentColor; border-radius: 6px; padding: 3px 9px;
      transform: rotate(-2.5deg); box-shadow: inset 0 0 0 1.5px var(--paper), inset 0 0 0 3px currentColor;
      opacity: 0.92; background: transparent; line-height: 1.3;
    }
    .nb-stamp--blue  { color: var(--ink2); transform: rotate(1.5deg); }
    .nb-stamp--green { color: var(--green); transform: rotate(-1.2deg); }
    .nb-stamp--amber { color: var(--amber); transform: rotate(2deg); }

    /* Washi Tape & Cards */
    .nb-card {
      background: var(--card); border: 1.5px solid var(--line); border-radius: 8px;
      box-shadow: var(--shadow-card); padding: 18px 20px; margin: 24px 0; position: relative;
    }
    .nb-tape {
      position: absolute; width: 86px; height: 22px; top: -10px; left: 22px;
      transform: rotate(-3.5deg);
      background: repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.45) 0 5px, rgba(255, 255, 255, 0) 5px 10px), rgba(255, 185, 200, 0.75);
      opacity: 0.92; pointer-events: none; z-index: 5;
    }
    .nb-tape--right { left: auto; right: 22px; transform: rotate(4deg); }
    .nb-card__title { font-family: var(--font-hand); font-size: 1.5rem; color: var(--ink); margin-top: 0; margin-bottom: 8px; }

    /* Sticky Notes */
    .nb-sticky {
      position: relative; background: var(--sticky-y); color: var(--sticky-text);
      font-family: var(--font-hand2); font-size: 1.15rem; line-height: 1.55;
      padding: 20px 20px 16px; margin: 22px 4px; border-radius: 2px 2px 14px 2px;
      box-shadow: var(--shadow-sticky); transform: rotate(-0.8deg);
    }
    .nb-sticky::before {
      content: ""; position: absolute; top: -11px; left: 50%; width: 90px; height: 22px;
      transform: translateX(-50%) rotate(-2deg);
      background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.55) 0 6px, rgba(255, 255, 255, 0.25) 6px 12px), rgba(160, 200, 230, 0.65);
    }
    .nb-sticky--pink  { background: var(--sticky-r); transform: rotate(0.6deg); }
    .nb-sticky--blue  { background: var(--sticky-b); transform: rotate(-0.5deg); }
    .nb-sticky--green { background: var(--sticky-g); transform: rotate(0.8deg); }
    .nb-sticky__title { font-family: var(--font-hand); font-weight: 700; font-size: 1.55rem; margin: 0 0 6px; color: var(--ink); line-height: 1.15; }
    .nb-sticky--pink .nb-sticky__title { color: #9b1c14; }

    /* Highlighters */
    .nb-hl { color: inherit; padding: 0.1em 0.35em; border-radius: 0.35em 0.55em 0.35em 0.65em; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
    .nb-hl--yellow { background: var(--hl-yellow); }
    .nb-hl--green  { background: var(--hl-green); }
    .nb-hl--blue   { background: var(--hl-blue); }
    .nb-hl--pink   { background: var(--hl-pink); }

    /* Formulas */
    .nb-fbox { position: relative; border: 2px solid var(--ink); border-radius: 6px; padding: 16px 20px; margin: 20px 0 26px; background: var(--card); box-shadow: 6px 6px 0 var(--hl-blue); }
    .nb-fbox__label { font-family: var(--font-hand2); color: var(--pencil); font-size: 1.08rem; display: block; margin-bottom: 6px; }
    .nb-fbox__math { font-family: var(--font-math); font-size: 1.35rem; line-height: 2; color: var(--text); overflow-x: auto; }
    .nb-fbox__dict { display: grid; grid-template-columns: max-content 1fr; gap: 4px 14px; margin: 12px 0 0; font-size: 0.96rem; }
    .nb-fbox__dict dt { font-family: var(--font-math); font-weight: 700; color: var(--ink); }
    .nb-fbox__dict dd { margin: 0; color: var(--pencil); }

    /* Tables */
    .nb-table-wrap { overflow-x: auto; margin: 20px 0; border: 1.5px solid var(--line); border-radius: 8px; background: var(--card); box-shadow: var(--shadow-card); }
    .nb-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; }
    .nb-table th, .nb-table td { padding: 10px 14px; border: 1px solid var(--line); vertical-align: top; }
    .nb-table thead th { background: var(--desk); font-family: var(--font-hand); font-size: 1.35rem; color: var(--ink); font-weight: 700; }
    .nb-table tbody tr:hover { background: var(--hl-yellow); }

    /* Search Modal */
    .nb-search-modal { position: fixed; inset: 0; background: rgba(10, 12, 18, 0.55); z-index: 100; display: none; align-items: flex-start; justify-content: center; padding-top: 10vh; backdrop-filter: blur(2px); }
    .nb-search-modal.is-active { display: flex; }
    .nb-search-card { background: var(--paper); border: 2px solid var(--ink); border-radius: 12px; width: min(92vw, 580px); box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35); padding: 18px; }
    .nb-search-input { width: 100%; padding: 12px; font-family: var(--font-hand2); font-size: 1.3rem; border: 2px solid var(--line); border-radius: 6px; background: var(--card); color: var(--text); outline: none; }
    .nb-search-results { margin-top: 12px; max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; }
    .nb-search-item { padding: 8px 12px; border-radius: 6px; background: var(--card); border: 1px solid var(--line); color: var(--text); }
    .nb-search-item:hover { background: var(--hl-yellow); text-decoration: none; }
    .nb-search-item b { font-family: var(--font-hand); font-size: 1.25rem; color: var(--ink); display: block; }
    mark { background: var(--hl-yellow); color: inherit; padding: 0 2px; }

    @media print {
      .nb-topbar, .nb-sidebar, .nb-search-modal, #menuBtn, .nb-tabflag { display: none !important; }
      body { background: #fff !important; color: #000 !important; }
      .nb-main { margin: 0 !important; padding: 0 !important; }
      .nb-sheet { box-shadow: none !important; max-width: 100% !important; padding: 0 !important; background: none !important; }
      .nb-sheet::before, .nb-sheet::after { display: none !important; }
    }
  </style>
</head>
<body>

  <!-- Top Global Navigation Bar -->
  <header class="nb-topbar">
    <div class="nb-topbar__inner">
      <button class="nb-btn-top" id="menuBtn" aria-label="Open Notebook Index">☰</button>
      <a href="../index.html" class="nb-topbar__brand">📖 Brain Hub</a>
      <div class="nb-topbar__crumb">Operations / <strong>ERP Business Applications · Master Notebook OS</strong></div>
      <div class="nb-topbar__actions">
        <button class="nb-btn-search" id="searchTrigger" aria-label="Open Search">
          <span>Search Index</span> <kbd>/</kbd>
        </button>
        <button class="nb-btn-top" id="themeToggle" aria-label="Toggle Night/Day Mode">🌙</button>
        <div class="nb-topbar__pct" id="pct">0%</div>
      </div>
    </div>
    <div class="nb-topbar__bar"><i id="barfill" style="width: 0%;"></i></div>
  </header>

  <div class="nb-layout">
    <div class="nb-sidebar-shade" id="shade"></div>
    
    <!-- Notebook Index Sidebar -->
    <aside class="nb-sidebar" id="sidebar">
      <h2>INDEX</h2>
      <div class="nb-sidebar__grp">CURRICULUM MODULES (16)</div>
      <nav id="sidebarNav">
        <a href="#sec-cover" class="is-active">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">Cover · Master Blueprint</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-fundamentals">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">01. ERP Fundamentals & Strategy</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-evolution">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">02. Historical Evolution</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-architecture">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">03. 3-Tier Architecture Selection</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-pillars">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">04. Five Pillars & Best Practices</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-modules">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">05. Functional Modules & KPIs</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-p2p">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">06. Procure-to-Pay (P2P) & 3-Way Match</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-o2c">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">07. Order-to-Cash (O2C) & ATP</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-mrp">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">08. Closed-Loop MRP & S&OP</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-bpr">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">09. BPR, Rightsizing vs Downsizing</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-matrix">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">010. Value Realization Matrix</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-masterdata">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">011. Master Data & Signal Codes</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-plossl">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">012. Plossl Manufacturing Theory</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-subway">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">013. Subway Hierarchy Case</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-risks">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">014. Failure Modes & Ishikawa Fishbone</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-cloud">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">015. Modern Cloud ERP & Evaluation</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-exam-answers">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">016. Complete 18 FAQ Model Answers</span>
          <span class="nb-sidebar__ck"></span>
        </a>
      </nav>
    </aside>

    <!-- Main Reading Content Canvas -->
    <main class="nb-main">
      <div class="nb-sheet" id="notebookSheet">
        
        <div class="nb-tabflag">EXAM BENCHMARK</div>

        <!-- Section 0: Cover Header -->
        <header class="nb-cover" id="sec-cover">
          <div class="nb-stamps">
            <span class="nb-stamp nb-stamp--blue">Master Notebook</span>
            <span class="nb-stamp nb-stamp--green">Operations</span>
            <span class="nb-stamp nb-stamp--amber">MBA Curriculum</span>
            <span class="nb-stamp">100% Exam Mapped</span>
          </div>

          <h1 class="nb-hand-underline">ERP Business Applications</h1>
          <p style="font-family: var(--font-hand2); font-size: 1.35rem; color: var(--pencil); margin-top: 0;">
            <em>"Enterprise Integration, Architecture Selection, Best-Practice Amalgamation &amp; Complete 18 Model Exam Solutions"</em>
          </p>

          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">📖 Academic Syllabus Grounding</div>
            <p>
              Curriculum reference: <strong>Prof. Rahul V. Altekar</strong> (<em>Enterprise Wide Resource Planning: Concepts and Cases</em>, Prentice Hall) and <strong>Carol Ptak</strong> (<em>ERP: Tools, Techniques and Applications for Integrating the Supply Chain</em>).<br>
              Direct alignment with Course Outcomes: <span class="nb-hl nb-hl--yellow">CO1 (Process Integration)</span>, <span class="nb-hl nb-hl--green">CO2 (Adoption & Value Realization)</span>, and <span class="nb-hl nb-hl--pink">CO3 (BPR & Operational Governance)</span>.
            </p>
          </div>
        </header>

        <!-- SECTION 01: ERP Fundamentals & Business vs Technology Strategy -->
        <section class="nb-section" id="sec-fundamentals">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 01</span> ERP Fundamentals &amp; Strategy</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">FAQ Q1 Core Thesis</div>
            <p><strong>Is ERP a Software/Technology Strategy or a Business Strategy?</strong><br>
            Axiom: <span class="nb-hl nb-hl--yellow">ERP is primarily a Business Strategy enabled by technology, NOT a software project.</span> Treating ERP merely as an IT system upgrade is the single greatest cause of multi-million dollar corporate failure.</p>
          </div>

          <p>
            <strong>Enterprise Resource Planning (ERP)</strong> is a comprehensive management system that orchestrates cross-functional operational workflows across an organization through a single unified database. Prior to ERP, organizations operated as isolated <em>"Islands of Information"</em>: Sales operated local CRMs, Manufacturing ran disconnected shop-floor schedulers, Warehouses used standalone inventory logs, and Finance reconciled month-end figures via manual journal vouchers.
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 SYSTEM BOUNDARY &amp; INTEGRATION ENGINE</div>
            <p style="font-family: var(--font-hand2); color: var(--pencil); margin-top:0;">Hand-drawn vector sketch of the organizational ERP boundary and closed-loop feedback engine:</p>
            ${svgSystem}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Dimension</th><th>Technology / IT Viewpoint (Flawed)</th><th>Business Strategy Viewpoint (Robust)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary Objective</strong></td>
                  <td>Replace aging servers, upgrade software packages, standardize relational databases.</td>
                  <td>Reengineer end-to-end value chains, compress order cash-cycles, optimize working capital.</td>
                </tr>
                <tr>
                  <td><strong>Project Leadership</strong></td>
                  <td>Delegated strictly to Chief Information Officer (CIO) and IT infrastructure teams.</td>
                  <td>Championed by CEO, COO, and cross-functional Business Process Owners (BPOs).</td>
                </tr>
                <tr>
                  <td><strong>Customization Mindset</strong></td>
                  <td>Modify software code to accommodate existing idiosyncratic employee habits.</td>
                  <td>Adopt standardized vanilla workflows; adapt organizational behavior to industry best practices.</td>
                </tr>
                <tr>
                  <td><strong>Success Metric</strong></td>
                  <td>On-time technical server cutover and zero software crash reports.</td>
                  <td>Quantifiable ROI, inventory turns expansion, days sales outstanding (DSO) compression.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 02: Historical Evolution of Enterprise Systems -->
        <section class="nb-section" id="sec-evolution">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 02</span> Historical Evolution: From MRP I to Autonomous Cloud ERP</h2>
          
          <p>
            Enterprise systems did not emerge overnight; they evolved through five distinct historical epochs in response to expanding supply chain complexity and computational capabilities:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 EVOLUTIONARY TIMELINE OF ENTERPRISE PLANNING</div>
            ${svgTimeline}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Era</th><th>System Paradigm</th><th>Core Operational Focus</th><th>Technological Architecture</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1960s</strong></td>
                  <td><strong>Inventory Control (IC)</strong></td>
                  <td>Reorder point (ROP) calculators, economic order quantity (EOQ) batch cards.</td>
                  <td>Mainframe batch punchcards, sequential magnetic tapes.</td>
                </tr>
                <tr>
                  <td><strong>1970s</strong></td>
                  <td><strong>Material Requirements Planning (MRP I)</strong></td>
                  <td>BOM explosion, time-phased component gross-to-net scheduling.</td>
                  <td>Centralized corporate mainframes, flat-file record databases.</td>
                </tr>
                <tr>
                  <td><strong>1980s</strong></td>
                  <td><strong>Manufacturing Resource Planning (MRP II)</strong></td>
                  <td>Closed-loop capacity requirements planning (CRP), shop-floor routing, financial tie-in.</td>
                  <td>Minicomputers, early relational database engines.</td>
                </tr>
                <tr>
                  <td><strong>1990s</strong></td>
                  <td><strong>Enterprise Resource Planning (ERP)</strong></td>
                  <td>Total cross-functional integration: P2P, O2C, HR, Plant Maintenance, General Ledger.</td>
                  <td>3-tier Client/Server, SAP R/3, Oracle Applications.</td>
                </tr>
                <tr>
                  <td><strong>2000s–Present</strong></td>
                  <td><strong>Extended ERP &amp; Autonomous Cloud</strong></td>
                  <td>CRM, SCM, Supplier Portals, RESTful APIs, in-memory computing (HANA), AI forecasting.</td>
                  <td>Multi-tenant Cloud SaaS, microservices, mobile UX.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 03: Three-Tier Client-Server Architecture -->
        <section class="nb-section" id="sec-architecture">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 03</span> Three-Tier Client-Server Architecture &amp; Selection</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">FAQ Q3 Core Thesis</div>
            <p><strong>Why is 3-Tier Architecture superior to 2-Tier Architecture in ERP implementations?</strong><br>
            In 2-Tier architecture, business logic is either bloated on client machines ("fat client") or embedded inside database stored procedures. In 3-Tier architecture, the Application Logic is fully decoupled into dedicated application servers, delivering scalability, centralized maintenance, and security isolation.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 SAP R/3 THREE-TIER STRUCTURAL BLUEPRINT</div>
            ${svg3Tier}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Architecture Tier</th><th>Technological Function</th><th>Enterprise Responsibilities</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tier 1: Presentation Layer</strong></td>
                  <td>Thin Client GUI, Web Browser, Mobile Interface (SAP Fiori)</td>
                  <td>Accepts user input, validates field syntax, renders screens, formats reports. Zero business logic execution.</td>
                </tr>
                <tr>
                  <td><strong>Tier 2: Application Layer</strong></td>
                  <td>Clustered Application Servers (e.g., SAP NetWeaver disp+work processes)</td>
                  <td>Executes business logic: credit checks, ATP calculations, BOM explosion, tax calculations, three-way matching.</td>
                </tr>
                <tr>
                  <td><strong>Tier 3: Database Layer</strong></td>
                  <td>Centralized RDBMS / In-Memory Database (e.g., SAP HANA, Oracle DB)</td>
                  <td>Manages ACID transactions, data persistence, referential integrity, record locking, and table indexing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 04: The Five Pillars of ERP & Best-Practice Amalgamation -->
        <section class="nb-section" id="sec-pillars">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 04</span> The Five Pillars of ERP &amp; Best-Practice Amalgamation</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">FAQ Q2 Core Thesis</div>
            <p><strong>What are the Five Pillars of ERP and how do they amalgamate best practices?</strong><br>
            ERP vendors spent decades studying thousands of leading global corporations, crystallizing their most efficient workflows into pre-configured software algorithms. These best practices rest upon 5 interdependent pillars.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 THE FIVE PILLARS OF ERP ARCHITECTURE</div>
            ${svgMindMap}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Pillar</th><th>Enterprise Function</th><th>Best-Practice Amalgamation Mechanism</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Process (Workflows)</strong></td>
                  <td>Standardized cross-functional process execution</td>
                  <td>Pre-configured reference models (e.g. Procure-to-Pay, Order-to-Cash) eliminating redundant manual hand-offs.</td>
                </tr>
                <tr>
                  <td><strong>2. People (Human Capital)</strong></td>
                  <td>Change leadership, role governance, user proficiency</td>
                  <td>Enforces role-based access control (RBAC), segregation of duties (SoD), and cross-training across functional silos.</td>
                </tr>
                <tr>
                  <td><strong>3. Technology (Infrastructure)</strong></td>
                  <td>Robust hardware, network latency, scalable runtime</td>
                  <td>Multi-tier scalability, high-availability disaster recovery clustering, API microservices integration.</td>
                </tr>
                <tr>
                  <td><strong>4. Data (Master Data Backbone)</strong></td>
                  <td>Enterprise taxonomy, single source of truth</td>
                  <td>Strict data dictionary governance: standardized material numbers, universal chart of accounts, single vendor master.</td>
                </tr>
                <tr>
                  <td><strong>5. Governance (Executive Sponsorship)</strong></td>
                  <td>Steering committee, scope control, post-go-live KPI audit</td>
                  <td>Formal PMO change control gate: zero code customizations without verified executive ROI sign-off.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 05: Functional Modules, Industry Scope & Target KPIs -->
        <section class="nb-section" id="sec-modules">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 05</span> Core Modules, Industry Scope &amp; Target KPIs</h2>
          
          <p>
            An ERP system maps directly across Michael Porter's enterprise value chain, providing specialized transactional modules that feed into the general ledger:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 PORTER'S VALUE CHAIN &amp; ERP FUNCTIONAL MODULE MAPPING</div>
            ${svgValueChain}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Module Area</th><th>Industry Operational Scope</th><th>Governing Metrics &amp; KPIs</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Production Planning (PP / MRP)</strong></td>
                  <td>Discrete assembly, process batch manufacturing, job shops</td>
                  <td>Capacity utilization rate (%), schedule adherence (%), scrap rate (%), setup changeover hours.</td>
                </tr>
                <tr>
                  <td><strong>Materials Management (MM / P2P)</strong></td>
                  <td>Strategic sourcing, inventory management, warehouse routing</td>
                  <td>Inventory turnover ratio, purchase order cycle time (days), stock-out rate (%), vendor on-time delivery (OTD %).</td>
                </tr>
                <tr>
                  <td><strong>Sales &amp; Distribution (SD / O2C)</strong></td>
                  <td>Pricing, order fulfillment, export compliance, shipping</td>
                  <td>Order-to-delivery lead time, order fill rate (OTIF %), days sales outstanding (DSO), revenue leakage (%).</td>
                </tr>
                <tr>
                  <td><strong>Financial Accounting &amp; Controlling (FICO)</strong></td>
                  <td>General ledger, AP/AR, asset accounting, cost center variance</td>
                  <td>Month-end financial close duration (days), gross margin per SKU, standard vs. actual cost variance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 06: Procure-to-Pay (P2P) & 3-Way Match -->
        <section class="nb-section" id="sec-p2p">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 06</span> Procure-to-Pay (P2P), 3-Way Matching &amp; Internal Controls</h2>
          
          <p>
            The <strong>Procure-to-Pay (P2P)</strong> process is the foundational purchasing spine of enterprise operations. To prevent financial fraud, overpayment, and phantom inventory, ERP enforces an automated <span class="nb-hl nb-hl--yellow">Three-Way Matching Gate</span> before releasing funds:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 PROCURE-TO-PAY TRANSACTION FLOW &amp; 3-WAY MATCHING GATE</div>
            ${svgProcess}
          </div>

          <div class="nb-fbox">
            <span class="nb-fbox__label">P2P Accounting Balance Verification</span>
            <div class="nb-fbox__math">
              Goods Receipt (GR): Debit Inventory (1400) / Credit GR/IR Clearing (2110)<br>
              Invoice Verification (IR): Debit GR/IR Clearing (2110) / Credit Vendor AP (2000)<br>
              Payment Run: Debit Vendor AP (2000) / Credit Bank Cash (1000)
            </div>
            <dl class="nb-fbox__dict">
              <dt>GR/IR Account</dt>
              <dd>Provisional liability clearing account that ensures company only pays for goods physically received and inspected.</dd>
              <dt>Tolerance Limits</dt>
              <dd>Configurable parameter (e.g. ±2% price variance or ±5 units quantity) beyond which an automated payment block is triggered.</dd>
            </dl>
          </div>
        </section>

        <!-- SECTION 07: Order-to-Cash (O2C) & ATP Verification Engine -->
        <section class="nb-section" id="sec-o2c">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 07</span> Order-to-Cash (O2C) &amp; Available-to-Promise (ATP)</h2>
          
          <p>
            The <strong>Order-to-Cash (O2C)</strong> cycle governs customer demand fulfillment. A cornerstone of ERP excellence is real-time <strong>Available-to-Promise (ATP)</strong> calculation, ensuring sales representatives never confirm orders that production cannot deliver.
          </p>

          <div class="nb-fbox">
            <span class="nb-fbox__label">Available-to-Promise (ATP) Mathematical Logic</span>
            <div class="nb-fbox__math">
              ATP = On-Hand Physical Stock + Scheduled Production Receipts − Committed Customer Orders
            </div>
            <dl class="nb-fbox__dict">
              <dt>On-Hand Stock</dt>
              <dd>Unrestricted physical inventory verified in storage locations.</dd>
              <dt>Scheduled Receipts</dt>
              <dd>Confirmed Purchase Orders (PO) and released Production Orders due before the requested delivery date.</dd>
              <dt>Committed Orders</dt>
              <dd>Existing unfulfilled sales orders already allocated to prior customers.</dd>
            </dl>
          </div>

          <div class="nb-sticky nb-sticky--green">
            <div class="nb-sticky__title">Automated Credit Limit Check Gate</div>
            <p>During sales order entry, the ERP engine calculates: <span class="nb-hl nb-hl--yellow">Total Exposure = Open Invoices + Open Deliveries + Value of Current Sales Order</span>. If Total Exposure &gt; Approved Credit Limit, the system places a mandatory billing block, requiring formal credit committee release.</p>
          </div>
        </section>

        <!-- SECTION 08: Closed-Loop MRP & S&OP -->
        <section class="nb-section" id="sec-mrp">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 08</span> S&amp;OP, Master Production Scheduling &amp; Closed-Loop MRP</h2>
          
          <p>
            Enterprise resource scheduling operates as a hierarchical closed loop connecting high-level corporate revenue strategy down to shop-floor work centers:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 CLOSED-LOOP MANUFACTURING &amp; S&amp;OP PDCA CYCLE</div>
            ${svgCycle}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Planning Level</th><th>Planning Horizon</th><th>Planning Unit</th><th>Governing Business Process</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sales &amp; Operations Planning (S&amp;OP)</strong></td>
                  <td>12 – 24 Months (Rolling)</td>
                  <td>Aggregate Product Families</td>
                  <td>Executive consensus aligning sales forecast with capital and aggregate capacity constraints.</td>
                </tr>
                <tr>
                  <td><strong>Master Production Schedule (MPS)</strong></td>
                  <td>1 – 12 Weeks (Frozen Zone)</td>
                  <td>Finished Goods (SKU Level)</td>
                  <td>Contracted production schedule driving detailed materials planning.</td>
                </tr>
                <tr>
                  <td><strong>Material Requirements Planning (MRP)</strong></td>
                  <td>Daily / Weekly Runs</td>
                  <td>Raw Materials, Subassemblies</td>
                  <td>Explodes Bill of Materials (BOM), offsets component lead times, generates planned orders.</td>
                </tr>
                <tr>
                  <td><strong>Shop Floor Execution &amp; CRP</strong></td>
                  <td>Hours / Shifts / Days</td>
                  <td>Work Centers, Machines, Shifts</td>
                  <td>Dispatches shop-floor travelers, monitors machine uptime, tracks scrap and actual labor hours.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 09: BPR, Rightsizing vs Downsizing -->
        <section class="nb-section" id="sec-bpr">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 09</span> BPR, Rightsizing vs. Downsizing &amp; Standard Fit</h2>
          
          <div class="nb-sticky nb-sticky--pink">
            <div class="nb-sticky__title">FAQ Q4 Core Thesis</div>
            <p><strong>Is ERP an instrument for Downsizing or Rightsizing?</strong><br>
            A common corporate fallacy views ERP as a tool for crude headcount reduction ("downsizing"). In reality, ERP is a <strong>Rightsizing and Capability-Enabling Instrument</strong>: it eliminates low-value transactional bookkeeping to redeploy personnel into strategic analysis, vendor development, and customer service.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 STANDARD FIT VS. CUSTOMIZATION DECISION TREE</div>
            ${svgDecisionTree}
          </div>

          <div class="nb-sticky">
            <div class="nb-sticky__title">The Vanilla ERP Rule (Fit ≥ 80%)</div>
            <p>
              Leading academic literature mandates: <em>"If commercial off-the-shelf ERP software covers 80% or more of organizational requirements, adapt internal company processes to the software (BPR), rather than modifying the software code."</em> Modifying source code destroys upgradeability and creates immense long-term technical debt.
            </p>
          </div>
        </section>

        <!-- SECTION 10: Value Realization Matrix -->
        <section class="nb-section" id="sec-matrix">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 10</span> Value Realization Matrix Analysis</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">FAQ Q5 Core Thesis</div>
            <p><strong>Explain Value Matrix Analysis in ERP Systems.</strong><br>
            The Value Matrix evaluates software capabilities across two axes: <strong>Strategic Business Value</strong> (revenue impact, margin expansion) versus <strong>User Adoption &amp; Usability</strong> (ease of daily operation, compliance).</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 VALUE REALIZATION 2x2 QUADRANT MATRIX</div>
            ${svgMatrix}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Quadrant</th><th>Strategic Value</th><th>Adoption / Usability</th><th>Executive Governance Strategy</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Transformational Core ⭐</strong></td>
                  <td>High</td>
                  <td>High</td>
                  <td><strong>Invest &amp; Govern:</strong> Primary drivers of enterprise agility, real-time S&amp;OP, automated P2P. Protect standard workflows.</td>
                </tr>
                <tr>
                  <td><strong>Under-Leveraged Goldmine</strong></td>
                  <td>High</td>
                  <td>Low</td>
                  <td><strong>Change Management Mandate:</strong> Valuable analytics or automated planning modules under-used due to training gaps. Mandate user training.</td>
                </tr>
                <tr>
                  <td><strong>Operational Hygiene</strong></td>
                  <td>Low</td>
                  <td>High</td>
                  <td><strong>Standardize on SaaS:</strong> Essential compliance tools (e.g. payroll, expense claims) running smoothly. Minimize maintenance expenditure.</td>
                </tr>
                <tr>
                  <td><strong>Value Sink / Execution Pit ⚠️</strong></td>
                  <td>Low</td>
                  <td>Low</td>
                  <td><strong>Ruthlessly Decommission:</strong> Expensive custom reports or bespoke screens delivering zero business value. Eliminate immediately.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 11: Master Data & Signal Codes -->
        <section class="nb-section" id="sec-masterdata">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 11</span> Master Data Taxonomy, Item Types &amp; Signal Codes</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">FAQ Q7 Core Thesis</div>
            <p><strong>Explain Master Data, Item Types, and Signal Codes in ERP.</strong><br>
            Master Data is the non-transactional, permanent foundational data asset of an enterprise. Item Types dictate business rules and financial valuation, while Signal Codes govern replenishment triggering.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 ENTERPRISE DATA HIERARCHY &amp; ORGANIZATIONAL STRUCTURE</div>
            ${svgHierarchy}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>SAP Material Type</th><th>Industry Designation</th><th>Financial Valuation Behavior</th><th>Procurement &amp; Sales Views</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ROH</strong></td>
                  <td>Raw Material</td>
                  <td>Valuated at standard or moving average cost; zero sales view.</td>
                  <td>Purchased externally from vendors; consumed in production BOMs.</td>
                </tr>
                <tr>
                  <td><strong>HALB</strong></td>
                  <td>Semifinished Good (WIP)</td>
                  <td>Valuated at accumulated standard production cost.</td>
                  <td>Manufactured in-house; intermediate assembly item.</td>
                </tr>
                <tr>
                  <td><strong>FERT</strong></td>
                  <td>Finished Product</td>
                  <td>Full absorption cost valuation; mandatory sales &amp; tax views.</td>
                  <td>Produced in-house; sold directly to distributors or customers.</td>
                </tr>
                <tr>
                  <td><strong>HAWA</strong></td>
                  <td>Trading Good</td>
                  <td>Commercial wholesale valuation; both purchase &amp; sales views.</td>
                  <td>Purchased externally and resold directly without manufacturing modification.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 ENTERPRISE DATA PIPELINE: OLTP TO OLAP DECISION INTEL</div>
            ${svgDataFlow}
          </div>
        </section>

        <!-- SECTION 12: Plossl Manufacturing Theory -->
        <section class="nb-section" id="sec-plossl">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 12</span> Plossl's Law of Manufacturing Management</h2>
          
          <div class="nb-sticky nb-sticky--pink">
            <div class="nb-sticky__title">FAQ Q8 Core Thesis (Paraphrased Academic Analysis)</div>
            <p><strong>George Plossl's First Law of Manufacturing:</strong><br>
            <em>"All benefits in manufacturing stem from the speed of flow of materials and information; conversely, all costs and risks increase with lead time and operational stagnation."</em></p>
          </div>

          <p>
            Plossl demonstrated that bloated work-in-process (WIP) inventories do not protect production; they obscure scrap, machine unreliability, and supplier defects. ERP operationalizes Plossl's law by synchronizing information velocity with material velocity, collapsing lead times and optimizing batch sizes.
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 EOQ INVENTORY MATHEMATICAL TRADE-OFF MODEL</div>
            ${svgCalculation}
          </div>

          <div class="nb-fbox">
            <span class="nb-fbox__label">Economic Order Quantity (EOQ) &amp; Total Cost Formula</span>
            <div class="nb-fbox__math">
              TC(Q) = (D / Q) · S + (Q / 2) · H<br>
              Q* = √ [ (2 · D · S) / H ]
            </div>
            <dl class="nb-fbox__dict">
              <dt>D</dt>
              <dd>Annual deterministic demand in units.</dd>
              <dt>S</dt>
              <dd>Fixed setup or procurement ordering cost per batch ($).</dd>
              <dt>H</dt>
              <dd>Annual inventory carrying cost per unit per year ($).</dd>
              <dt>Q*</dt>
              <dd>Optimal lot size where annual ordering cost equals annual holding cost.</dd>
            </dl>
          </div>
        </section>

        <!-- SECTION 13: Subway Franchise Multi-Level Hierarchy Case -->
        <section class="nb-section" id="sec-subway">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 13</span> Subway Franchise Multi-Level Hierarchy Conceptual Case</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">FAQ Q6 Core Exam Question</div>
            <p><strong>"You are Subway with a multi-level hierarchy; will the business fail? Explain."</strong><br>
            A conceptual MBA case analysis evaluating organizational hierarchy, standardization, and decentralized franchise agility.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 MBA CASE ANALYSIS: WILL SUBWAY FAIL UNDER RIGID MULTI-LEVEL HIERARCHY?</div>
            <p><strong>1. Theoretical Diagnosis:</strong> In a fast-food franchise network characterized by thousands of geographically dispersed, owner-operated retail outlets, a rigid bureaucratic multi-level hierarchy causes severe operational latency. Customer tastes, local supply chain shocks (e.g. regional produce shortages), and labor dynamics require immediate store-level responsiveness.</p>
            
            <p><strong>2. Structural Pathology:</strong> If every inventory adjustment, store promotion, or supplier substitution requires multi-level hierarchical corporate sign-off across Regional Managers, Country Directors, and Global Headquarters, store margins collapse due to waste, stock-outs, and customer churn.</p>

            <p><strong>3. The ERP Architectural Solution (Two-Tier Operating Model):</strong>
            <ul style="padding-left: 20px; line-height: 1.8;">
              <li><strong>Centralized Global Core (Corporate Tier 1):</strong> Enforces global master data standards, food safety compliance, brand recipes, and consolidated financial reporting.</li>
              <li><strong>Decentralized Local Cloud POS / ERP (Franchisee Tier 2):</strong> Gives store operators real-time autonomy over daily replenishment, shift scheduling, and local cash reconciliation via lightweight cloud apps.</li>
            </ul>
            </p>

            <div class="nb-sticky nb-sticky--green">
              <div class="nb-sticky__title">Definitive Exam Conclusion</div>
              <p>Subway will <strong>NOT</strong> fail if its multi-level hierarchy is backed by an agile, two-tier ERP system that decouples corporate brand governance from localized store operational decision-making.</p>
            </div>
          </div>
        </section>

        <!-- SECTION 14: Implementation Failure Modes & Ishikawa Fishbone -->
        <section class="nb-section" id="sec-risks">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 14</span> Failure Modes, Risk Mitigation &amp; Ishikawa Root Cause</h2>
          
          <p>
            Historically, over 60% of enterprise ERP implementations exceed their budgets, miss go-live targets, or face catastrophic operational disruption. Kaoru Ishikawa's cause-and-effect framework categorizes these failure modes across 6 root causes:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 ISHIKAWA 6-RIB ROOT CAUSE ANALYSIS OF ERP FAILURE</div>
            ${svgFishbone}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Failure Category</th><th>Observed Corporate Pathology</th><th>Mandatory Mitigation Framework</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>People &amp; Culture</strong></td>
                  <td>Middle management resistance, fear of transparency, lack of training.</td>
                  <td>Prosci ADKAR change management, executive town halls, formal role re-skilling budgets.</td>
                </tr>
                <tr>
                  <td><strong>Data Quality</strong></td>
                  <td>Migrating dirty legacy records (duplicate vendors, unverified BOMs).</td>
                  <td>Strict pre-migration data cleansing audits: "Garbage In, Disaster Out".</td>
                </tr>
                <tr>
                  <td><strong>Scope Creep</strong></td>
                  <td>Uncontrolled customization of core code to preserve outdated habits.</td>
                  <td>Formal PMO change freeze; vanilla adoption doctrine; sidecar API extensions.</td>
                </tr>
                <tr>
                  <td><strong>Cutover &amp; Testing</strong></td>
                  <td>Rushed User Acceptance Testing (UAT) without real-world volume stress testing.</td>
                  <td>Conducting 3 complete end-to-end mock cutover simulations before production release.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 15: Modern Cloud ERP & Evaluation Criteria -->
        <section class="nb-section" id="sec-cloud">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 15</span> Modern Cloud ERP, Multi-Tenant SaaS &amp; Clean Core</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">Modern Cloud Paradigm Shift</div>
            <p>Legacy on-premise ERP resulted in "version lock"—enterprises spent years trapped on 15-year-old releases because custom ABAP/Java code prevented vendor upgrades. Modern cloud ERP enforces the <span class="nb-hl nb-hl--yellow">"Clean Core"</span> paradigm.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 COMPARISON: LEGACY ON-PREMISE VS. MODERN MULTI-TENANT CLOUD SAAS</div>
            ${svgComparison}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Evaluation Dimension</th><th>Legacy On-Premise ERP</th><th>Modern Multi-Tenant Cloud SaaS</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Financial Model</strong></td>
                  <td>Heavy upfront CapEx (servers, perpetual licenses) + 20% annual maintenance.</td>
                  <td>Predictable subscription OpEx; zero hardware amortization; lower 5-year TCO.</td>
                </tr>
                <tr>
                  <td><strong>Upgrade Cadence</strong></td>
                  <td>Major disruption every 5–8 years; costly multi-million dollar migration projects.</td>
                  <td>Continuous bi-annual updates applied automatically by vendor with zero downtime.</td>
                </tr>
                <tr>
                  <td><strong>Extensibility</strong></td>
                  <td>Modifying core source code inside the database engine.</td>
                  <td>Clean core: extensions decoupled via RESTful APIs and sidecar cloud platforms.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 16: Complete 18 FAQ Model Answers -->
        <section class="nb-section" id="sec-exam-answers">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 16</span> Complete 18 FAQ Model Exam Answers &amp; Rubrics</h2>
          
          <div class="nb-sticky nb-sticky--green">
            <div class="nb-sticky__title">Gold Standard 10-Mark Exam Answer Architecture</div>
            <p>Every postgraduate MBA exam answer should follow this four-stage structure: <span class="nb-hl nb-hl--yellow">1. Core Academic Thesis (20%)</span> + <span class="nb-hl nb-hl--blue">2. Diagnostic Framework / Matrix (25%)</span> + <span class="nb-hl nb-hl--pink">3. Strategic Trade-off Analysis (30%)</span> + <span class="nb-hl nb-hl--green">4. Decisive Managerial Action (25%)</span>.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 GOLD STANDARD 10-MARK EXAM ANSWER ARCHITECTURE</div>
            ${svgExam}
          </div>

          <!-- FAQ Answers Container -->
          <div style="display: flex; flex-direction: column; gap: 24px; margin-top: 24px;">
            
            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q1 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q1: Is ERP a Software/Technology Strategy or a Business Strategy?</h3>
              <p><strong>Model Answer:</strong> ERP is an enterprise-wide business strategy executed through technology, not merely a software procurement project. Software provides relational database tables and transaction processing engines, but organizational competitiveness requires reengineering business processes, eliminating functional silos, standardizing master data, and fostering cultural change. Treating ERP as an IT project leads to massive customization, scope creep, and failure.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q2 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q2: What are the Five Pillars of ERP and how do they amalgamate best practices?</h3>
              <p><strong>Model Answer:</strong> The five pillars are: 1) Process (standardized end-to-end flows), 2) People (change leadership and role governance), 3) Technology (multi-tier scalability and integration), 4) Data (single source of truth master records), and 5) Governance (executive steering committee and scope control). Best-practice amalgamation represents decades of distilled operational wisdom from leading global enterprises embedded directly into pre-configured software templates.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q3 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q3: Explain the 3-Tier Architecture of ERP and why it is superior to 2-Tier systems.</h3>
              <p><strong>Model Answer:</strong> 3-tier architecture decouples: 1) Presentation Layer (thin client UI), 2) Application Layer (business logic rules and calculations), and 3) Database Layer (transaction persistence and ACID compliance). It is vastly superior to 2-tier architecture because 2-tier requires either bloated client machines or complex stored procedures, limiting scalability, security, and cloud deployment.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q4 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q4: Is ERP an instrument for Downsizing or Rightsizing?</h3>
              <p><strong>Model Answer:</strong> ERP is an instrument for rightsizing and capacity optimization, not crude downsizing. While ERP automates redundant transactional data entry (e.g. invoice keying and manual reconciliations), high-performing organizations redeploy staff into strategic sourcing, customer experience management, and analytical decision-making.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q5 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q5: Detail the Value Realization Matrix in ERP implementation.</h3>
              <p><strong>Model Answer:</strong> The Value Realization Matrix maps Strategic Business Value (Y-axis) against User Usability &amp; Adoption (X-axis). Quadrants comprise: 1) Transformational Core (High Value, High Adoption — protect and govern), 2) Under-Leveraged Goldmine (High Value, Low Adoption — focus on change management and training), 3) Operational Hygiene (Low Value, High Adoption — standardize on SaaS), and 4) Value Sink (Low Value, Low Adoption — ruthlessly eliminate).</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q6 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q6: You are Subway with a multi-level hierarchy; will the business fail? Explain.</h3>
              <p><strong>Model Answer:</strong> Subway will only fail if it imposes a rigid, centralized bureaucratic hierarchy on localized store operations. In retail food franchising, customer responsiveness and ingredient sourcing vary by region. The winning strategy is a Two-Tier ERP Model: Tier 1 centralized corporate governance for brand standards, global recipes, and financial consolidation; Tier 2 agile decentralized POS and local ordering for store managers.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q7 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q7: Define Master Data, Material Types, and Signal Codes.</h3>
              <p><strong>Model Answer:</strong> Master data represents the core non-transactional entities of an organization (Customer, Vendor, Material, Chart of Accounts). Material types (e.g., ROH Raw Materials, HALB WIP, FERT Finished Goods, HAWA Trading Goods) dictate procurement, inventory valuation, and sales behavior. Signal codes (e.g. 1-9) serve as automated status indicators triggering downstream replenishment, quality holds, or obsolescence workflows.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q8 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q8: Analyze George Plossl's First Law of Manufacturing Management.</h3>
              <p><strong>Model Answer:</strong> Plossl asserted that all benefits in manufacturing stem from the speed of flow of materials and information, while all costs and risks increase with lead time and operational stagnation. ERP operationalizes Plossl's law by eliminating informational delays, synchronizing BOM requirements, and balancing holding costs with setup costs via economic order quantities.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q9 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q9: Compare Leading Global ERP Vendors and their market strengths.</h3>
              <p><strong>Model Answer:</strong> 1) SAP: Global leader in enterprise manufacturing, complex supply chains, and multinational financial consolidation (S/4HANA). 2) Oracle: Dominant in cloud database scalability, enterprise financials, and HCM (Fusion Cloud). 3) Microsoft Dynamics 365: Strong integration with Office 365, Azure, Power Platform, and mid-market agile deployments.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q10 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q10: Explain the 3-Way Matching Process in Procure-to-Pay (P2P).</h3>
              <p><strong>Model Answer:</strong> Three-Way Matching reconciles: 1) Purchase Order (PO) issued to vendor, 2) Goods Receipt (GR) note confirming physical warehouse receipt, and 3) Vendor Invoice (IR). If quantities, prices, and terms match within pre-configured tolerance limits, the invoice clears for automated payment release.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q11 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q11: Detail Available-to-Promise (ATP) calculation in Order-to-Cash.</h3>
              <p><strong>Model Answer:</strong> ATP calculates available inventory for future customer orders by taking on-hand physical stock, adding confirmed scheduled receipts (purchase orders and production runs), and subtracting existing committed customer sales orders across the planning horizon.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q12 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q12: How does Closed-Loop MRP link S&amp;OP to the Shop Floor?</h3>
              <p><strong>Model Answer:</strong> Closed-Loop MRP creates feedback loops between: 1) Long-range S&amp;OP aggregate plans, 2) Master Production Schedule (MPS) for finished goods, 3) Material Requirements Planning (MRP) component explosion, and 4) Capacity Requirements Planning (CRP) validating machine and labor hours at shop-floor work centers.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q13 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q13: Explain Business Process Reengineering (BPR) prior to ERP implementation.</h3>
              <p><strong>Model Answer:</strong> BPR radically redesigns core business processes to achieve dramatic improvements in cost, quality, speed, and service. Implementing ERP without BPR simply automates legacy inefficiencies: "Paving the cow paths". BPR simplifies workflows so that standard off-the-shelf software can be adopted without costly customizations.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q14 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q14: Explain the Ishikawa Fishbone framework for ERP Failure Analysis.</h3>
              <p><strong>Model Answer:</strong> The Ishikawa Fishbone diagram analyzes root causes across six ribs: People (change resistance, poor training), Process (lack of BPR, departmental silos), Technology (unstable APIs, heavy customization), Data (dirty legacy master data), Governance (lack of executive sponsorship, scope creep), and Testing (rushed cutover without stress simulation).</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q15 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q15: What is the "Clean Core" strategy in Cloud ERP?</h3>
              <p><strong>Model Answer:</strong> Clean Core mandates that the standard ERP application source code and data model remain completely unmodified. Any business-specific customizations or sidecars are developed outside the ERP core on platform-as-a-service (PaaS) clouds using standardized RESTful APIs and events, guaranteeing seamless quarterly vendor upgrades.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q16 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q16: Contrast Single-Tenant Hosted ERP with Multi-Tenant Cloud SaaS.</h3>
              <p><strong>Model Answer:</strong> Single-tenant hosted ERP provides a dedicated virtual machine and database instance for one customer, offering deep control but requiring manual maintenance. Multi-tenant SaaS shares a unified infrastructure layer with logically partitioned customer data, delivering elastic scalability, lower TCO, and automated continuous updates.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q17 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q17: Describe the Role of Steering Committees and Executive Sponsorship in ERP.</h3>
              <p><strong>Model Answer:</strong> Executive sponsors provide political air cover, resolve cross-departmental turf wars, and align ERP milestones with corporate strategy. The Steering Committee serves as the supreme decision-making body, reviewing change requests, enforcing budget discipline, and validating go-live readiness.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q18 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q18: What are the Critical Success Factors (CSFs) for Post-Go-Live Stabilization?</h3>
              <p><strong>Model Answer:</strong> 1) Rapid-response helpdesk floor support, 2) Intensive end-user re-training, 3) Daily reconciliation of clearing accounts (e.g. GR/IR), 4) Strict change freeze during first quarter-end financial close, and 5) Regular auditing of Value Realization KPIs against the original business case.</p>
            </div>

          </div>
        </section>

        <!-- Academic References & Grounding -->
        <footer class="nb-card" style="margin-top: 48px;">
          <div class="nb-tape"></div>
          <h3 style="margin-top: 0; font-family: var(--font-hand); font-size: 1.8rem; color: var(--ink);">📚 Academic Provenance &amp; References</h3>
          <ul style="padding-left: 20px; line-height: 1.8; font-size: 1.05rem;">
            <li><strong>Altekar, Rahul V.</strong> (2005). <em>Enterprise Wide Resource Planning: Concepts and Cases</em>. Prentice Hall of India.</li>
            <li><strong>Ptak, Carol A., &amp; Schragenheim, Eli</strong> (2003). <em>ERP: Tools, Techniques, and Applications for Integrating the Supply Chain</em>. CRC Press.</li>
            <li><strong>Plossl, George W.</strong> (1985). <em>Production and Inventory Control: Principles and Techniques</em>. Prentice Hall.</li>
            <li><strong>Davenport, Thomas H.</strong> (1998). <em>"Putting the Enterprise into the Enterprise System"</em>. Harvard Business Review, 76(4), 121–131.</li>
            <li><strong>Hammer, Michael, &amp; Champy, James</strong> (1993). <em>Reengineering the Corporation: A Manifesto for Business Revolution</em>. Harper Business.</li>
          </ul>
        </footer>

      </div>
    </main>
  </div>

  <!-- Library Card Search Modal -->
  <div class="nb-search-modal" id="searchModal" role="dialog" aria-modal="true" aria-label="Search Notebook">
    <div class="nb-search-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
        <span style="font-family: var(--font-hand); font-weight: 700; font-size: 1.5rem; color: var(--ink);">📚 Library Index Card Search</span>
        <button id="closeSearch" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">✕</button>
      </div>
      <input type="search" class="nb-search-input" id="searchInput" placeholder="Type keyword (e.g. 3-tier, P2P, Plossl, subway, ATP)..." autocomplete="off">
      <div class="nb-search-results" id="searchResults">
        <p style="color: var(--pencil); font-family: var(--font-hand2); font-size: 1.1rem;">Type at least 2 letters to search notebook...</p>
      </div>
    </div>
  </div>

  <!-- Client-side Interactive Engine -->
  <script>
    (function() {
      'use strict';

      // Day / Night Theme Toggle
      const root = document.documentElement;
      const themeBtn = document.getElementById('themeToggle');
      function applyTheme(t) {
        root.setAttribute('data-theme', t);
        if (themeBtn) themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
        try { localStorage.setItem('nb-theme', t); } catch {}
      }
      try {
        const saved = localStorage.getItem('nb-theme');
        if (saved) applyTheme(saved);
      } catch {}
      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
          applyTheme(next);
        });
      }

      // Sidebar Mobile Drawer & Shade
      const side = document.getElementById('sidebar');
      const shade = document.getElementById('shade');
      const menuBtn = document.getElementById('menuBtn');
      function toggleSide(open) {
        side.classList.toggle('is-open', open);
        shade.classList.toggle('is-on', open);
      }
      if (menuBtn) menuBtn.addEventListener('click', () => toggleSide(true));
      if (shade) shade.addEventListener('click', () => toggleSide(false));

      // Scroll Progress Indicator
      const bar = document.getElementById('barfill');
      const pct = document.getElementById('pct');
      const sections = Array.from(document.querySelectorAll('.nb-section, .nb-cover'));
      const navLinks = Array.from(document.querySelectorAll('.nb-sidebar nav a'));

      function onScroll() {
        const h = document.documentElement;
        const total = h.scrollHeight - h.clientHeight;
        const current = h.scrollTop || document.body.scrollTop;
        const p = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
        if (bar) bar.style.width = p + '%';
        if (pct) pct.textContent = p + '%';

        // Active section detection
        const scrollMid = current + 120;
        let activeId = '';
        for (const sec of sections) {
          if (sec.offsetTop <= scrollMid) {
            activeId = sec.id;
          }
        }
        if (activeId) {
          navLinks.forEach(link => {
            const match = link.getAttribute('href') === '#' + activeId;
            link.classList.toggle('is-active', match);
            if (match && sec.offsetTop < current) {
              link.classList.add('is-done');
            }
          });
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // Library Card Search Modal
      const modal = document.getElementById('searchModal');
      const openBtn = document.getElementById('searchTrigger');
      const closeBtn = document.getElementById('closeSearch');
      const sInput = document.getElementById('searchInput');
      const resultsDiv = document.getElementById('searchResults');

      // Pre-index sections
      const searchIndex = sections.map(s => {
        const titleEl = s.querySelector('h1, h2');
        const title = titleEl ? titleEl.textContent.trim() : s.id;
        const text = s.textContent.toLowerCase();
        return { id: s.id, title, text };
      });

      function openSearch() {
        modal.classList.add('is-active');
        setTimeout(() => sInput.focus(), 60);
      }
      function closeSearch() {
        modal.classList.remove('is-active');
        sInput.value = '';
      }
      if (openBtn) openBtn.addEventListener('click', openSearch);
      if (closeBtn) closeBtn.addEventListener('click', closeSearch);
      modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });

      document.addEventListener('keydown', (e) => {
        if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          openSearch();
        }
        if (e.key === 'Escape') {
          closeSearch();
          toggleSide(false);
        }
      });

      sInput.addEventListener('input', () => {
        const query = sInput.value.trim().toLowerCase();
        if (query.length < 2) {
          resultsDiv.innerHTML = '<p style="color: var(--pencil); font-family: var(--font-hand2); font-size: 1.1rem;">Type at least 2 letters...</p>';
          return;
        }
        const matches = searchIndex.filter(item => item.text.includes(query));
        if (matches.length === 0) {
          resultsDiv.innerHTML = '<p style="color: var(--pencil); font-family: var(--font-hand2); font-size: 1.1rem;">No matching sections found.</p>';
          return;
        }
        resultsDiv.innerHTML = matches.map(m => {
          return '<a href="#' + m.id + '" class="nb-search-item" onclick="document.getElementById(\\'searchModal\\').classList.remove(\\'is-active\\');">' +
                 '<b>' + m.title + '</b>' +
                 '<span style="font-size: 0.9rem; color: var(--pencil);">Jump to section #' + m.id + ' &rarr;</span>' +
                 '</a>';
        }).join('');
      });

    })();
  </script>
</body>
</html>`;

// Write HTML
fs.writeFileSync(TARGET_HTML, html, 'utf8');
console.log(`✔ Generated Template 2.0 Paper Edition ERP Notebook: ${TARGET_HTML} (${html.length} bytes)`);

// Update Target Metadata
const now = new Date().toISOString().split('T')[0];
const targetMetadata = {
  title: "ERP Business Applications · Master MBA Study Guide & Exam Blueprint",
  slug: "erp",
  subject: "Operations",
  category: "Enterprise Systems",
  description: "Comprehensive postgraduate MBA study guide and exam blueprint covering ERP business and technology strategy, 3-tier architecture, the Five Pillars of ERP, Value Matrix Analysis, Plossl manufacturing theory, Master Data, Subway franchise case study, and 100% model FAQ exam answers.",
  file: "ERP_Business_Applications_Notebook.html",
  tags: [
    "Operations",
    "ERP",
    "Enterprise Systems",
    "BPR",
    "Supply Chain",
    "Value Matrix",
    "Plossl",
    "Master Data",
    "MBA Curriculum",
    "Altekar"
  ],
  status: "published",
  source: "curriculum/weschool-term4-altekar",
  version: "2.0.0",
  templateVersion: "2.0.0",
  updated: now,
  updatedAt: now,
  featured: true,
  readTimeMinutes: 48,
  questionsCount: 18,
  courseContext: {
    course: "ERP Business Applications (Elective)",
    instructor: "Rahul Altekar",
    outcomes: ["CO1", "CO2", "CO3"]
  }
};
fs.writeFileSync(TARGET_META, JSON.stringify(targetMetadata, null, 2), 'utf8');
console.log(`✔ Updated companion metadata: ${TARGET_META} (status: published, slug: erp)`);

// Update Benchmark Metadata (Archived, preserve benchmark file intact)
if (fs.existsSync(BENCHMARK_META)) {
  const bm = JSON.parse(fs.readFileSync(BENCHMARK_META, 'utf8'));
  bm.status = 'archived';
  bm.slug = 'erp-benchmark-v1';
  fs.writeFileSync(BENCHMARK_META, JSON.stringify(bm, null, 2), 'utf8');
  console.log(`✔ Updated benchmark metadata: ${BENCHMARK_META} (status: archived, slug: erp-benchmark-v1)`);
}

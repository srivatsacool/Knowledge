/**
 * Brain Knowledge Hub — Compiler for ERP Business Applications Notebook 2.0.1
 * Generates the complete, master-grade "Brain Hub Notebook OS — Paper Edition"
 * study guide for Operations/ERP_Business_Applications_Notebook.html
 *
 * Grounded in:
 * - WeSchool Official Course Outline (OPN 419, Dr. Rahul V. Altekar)
 * - Faculty Lecture Materials (Reading Materials 01 & 02: 5 Cs, 17 Myths, 5 Pillars, Value Matrix, CODP, Plossl's 12 Principles, Panchanga)
 * - 100% Authentic Previous-Year Questions (2023, 2024, 2025 End-Term Papers)
 * - 30-Question Assessment Engine & Three Independent Progress Trackers
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const SVG_DIR = path.join(ROOT_DIR, '_templates', 'v2', 'svg_blueprints');
const TARGET_HTML = path.join(ROOT_DIR, 'Operations', 'ERP_Business_Applications_Notebook.html');
const TARGET_META = path.join(ROOT_DIR, 'Operations', 'ERP_Business_Applications_Notebook.meta.json');
const BENCHMARK_META = path.join(ROOT_DIR, 'ERP_Exam_Notebook.meta.json');
const BENCHMARK_HTML = path.join(ROOT_DIR, 'ERP_Exam_Notebook.html');

const { erpQuizQuestions, quickChecks } = require('./erp-mcq-data');
const { erpPyqPapers } = require('./erp-pyq-data');
const { buildPyqSectionHtml } = require('./erp-pyq-builder');
const D = require('./erp2/diagrams');

// Read SVG blueprints
function loadSvg(filename) {
  const filePath = path.join(SVG_DIR, filename);
  if (!fs.existsSync(filePath)) return '<!-- Missing ' + filename + ' -->';
  let svg = fs.readFileSync(filePath, 'utf8');
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
  <meta name="description" content="Comprehensive postgraduate MBA study guide and exam blueprint covering ERP business and technology strategy, 3-tier architecture, the Five Pillars of ERP, Value Matrix Analysis, Plossl manufacturing theory, Master Data, Subway franchise case study, WeSchool 2023-2025 PYQs, and 100% model FAQ exam answers.">
  <meta name="keywords" content="Operations, ERP, Enterprise Systems, BPR, Supply Chain, Value Matrix, Plossl, Master Data, MBA Curriculum, Altekar, WeSchool, PYQ">
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
      --sidebar-width: 320px;
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
      font-family: var(--font-body); font-size: 1.05rem; line-height: 1.6;
      overflow-x: hidden; transition: background 0.2s ease, color 0.2s ease;
    }

    /* Focus Mode Engine (Part 2) */
    body.is-focus .nb-sidebar,
    body.is-focus .nb-sidebar-shade,
    body.is-focus #menuBtn,
    body.is-focus .nb-topbar__crumb,
    body.is-focus .nb-tabflag {
      display: none !important;
    }
    body.is-focus .nb-main { margin-left: 0 !important; max-width: 100% !important; }
    body.is-focus .nb-sheet { max-width: 1100px !important; margin: 0 auto !important; }
    body.is-focus .nb-topbar__inner { max-width: 1100px; margin: 0 auto; }

    /* Top Navigation Bar */
    .nb-topbar {
      position: sticky; top: 0; z-index: 50; height: var(--topbar-height);
      background: var(--paper); border-bottom: 2px solid var(--line);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }
    .nb-topbar__inner {
      display: flex; align-items: center; justify-content: space-between;
      height: 100%; padding: 0 16px; gap: 12px;
    }
    .nb-topbar__left { display: flex; align-items: center; gap: 10px; }
    .nb-topbar__brand { font-family: var(--font-hand); font-weight: 700; font-size: 1.45rem; color: var(--ink); text-decoration: none; display: flex; align-items: center; gap: 6px; }
    .nb-topbar__crumb { font-family: var(--font-hand2); font-size: 1.05rem; color: var(--pencil); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 320px; }
    
    .nb-topbar__trackers { display: flex; align-items: center; gap: 8px; font-family: var(--font-hand2); font-size: 0.92rem; }
    .nb-track-chip { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 2px 8px; white-space: nowrap; }

    .nb-topbar__actions { display: flex; align-items: center; gap: 6px; }
    .nb-btn-top {
      background: transparent; border: 1.5px solid var(--line); border-radius: 6px;
      padding: 4px 10px; font-family: var(--font-hand2); font-size: 1rem; color: var(--text);
      cursor: pointer; display: inline-flex; align-items: center; gap: 4px; transition: all 0.15s ease;
      text-decoration: none;
    }
    .nb-btn-top:hover, .nb-btn-top.is-active { background: var(--hl-yellow); border-color: var(--amber); }
    .nb-btn-search {
      background: var(--card); border: 1.5px solid var(--line); border-radius: 6px;
      padding: 4px 10px; font-family: var(--font-hand2); font-size: 0.95rem; color: var(--pencil);
      cursor: pointer; display: flex; align-items: center; gap: 6px;
    }
    .nb-btn-search kbd {
      background: rgba(0, 0, 0, 0.08); border-radius: 3px; padding: 1px 5px; font-size: 0.8rem;
    }
    .nb-topbar__pct { font-family: var(--font-hand); font-weight: 700; font-size: 1.25rem; color: var(--ink); min-width: 44px; text-align: right; }
    .nb-topbar__bar { position: absolute; left: 0; bottom: -2px; width: 100%; height: 3px; background: transparent; }
    .nb-topbar__bar i { display: block; height: 100%; background: var(--ink2); width: 0%; transition: width 0.1s linear; }

    /* Layout: Sidebar + Main */
    .nb-layout { display: flex; min-height: calc(100vh - var(--topbar-height)); }
    .nb-sidebar {
      width: var(--sidebar-width); flex-shrink: 0; background: var(--card);
      border-right: 2px solid var(--line); padding: 16px 14px;
      position: sticky; top: var(--topbar-height); height: calc(100vh - var(--topbar-height));
      overflow-y: auto; z-index: 40;
    }
    .nb-sidebar h2 { font-family: var(--font-hand); font-size: 1.5rem; margin: 4px 0 10px; color: var(--ink); }
    .nb-sidebar__grp { font-family: var(--font-hand2); font-weight: 700; font-size: 0.82rem; letter-spacing: 0.08em; color: var(--pencil); text-transform: uppercase; margin: 16px 0 6px; }
    
    .nb-sidebar-progress-summary {
      display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; margin: 6px 0 14px;
      background: var(--paper); border: 1.5px solid var(--line); border-radius: 6px; padding: 8px 6px;
    }
    .nb-stat-pill { text-align: center; }
    .nb-stat-label { display: block; font-family: var(--font-hand2); font-size: 0.76rem; color: var(--pencil); text-transform: uppercase; }
    .nb-stat-val { font-family: var(--font-math); font-size: 0.95rem; font-weight: 700; color: var(--ink); }

    .nb-sidebar nav a {
      display: flex; align-items: center; justify-content: space-between; gap: 6px;
      padding: 5px 8px; border-radius: 4px; text-decoration: none; color: var(--text);
      font-family: var(--font-hand2); font-size: 1.05rem; transition: background 0.15s ease;
    }
    .nb-sidebar nav a:hover { background: var(--hl-yellow); }
    .nb-sidebar nav a.is-active { background: rgba(47, 95, 196, 0.12); color: var(--ink); font-weight: 700; }
    .nb-sidebar__chip { width: 8px; height: 8px; border-radius: 50%; background: var(--line); flex-shrink: 0; }
    .nb-sidebar nav a.is-active .nb-sidebar__chip { background: var(--ink); }
    .nb-sidebar__label { flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .nb-sidebar__ck { font-family: var(--font-hand); font-weight: 700; font-size: 1.1rem; color: var(--green); }

    .nb-main { flex-grow: 1; padding: 24px 16px 80px; position: relative; }

    /* Module Status Pill Button (Part 4) */
    .nb-mod-status {
      display: inline-flex; align-items: center; gap: 8px; margin: 8px 0 14px;
      background: var(--card); border: 1px solid var(--line); border-radius: 20px;
      padding: 4px 12px; font-family: var(--font-hand2); font-size: 1.05rem;
    }
    .nb-mod-status__prompt { color: var(--pencil); }
    .nb-mod-status__btn {
      display: inline-flex; align-items: center; gap: 6px; border: none; background: transparent;
      cursor: pointer; font-family: var(--font-hand2); font-size: 1.05rem; font-weight: 700;
      padding: 2px 6px; border-radius: 4px;
    }
    .nb-mod-status__btn:hover { background: var(--hl-yellow); }
    .nb-mod-status[data-status="not_started"] .nb-mod-status__btn { color: var(--pencil); }
    .nb-mod-status[data-status="in_progress"] .nb-mod-status__btn { color: var(--amber); }
    .nb-mod-status[data-status="complete"] .nb-mod-status__btn { color: var(--green); }

    /* Completion Toast Slip (Part 5) */
    .nb-toast {
      position: fixed; bottom: 24px; right: 24px; z-index: 100;
      background: var(--paper); border: 2px solid var(--ink); border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25); padding: 12px 18px;
      display: none; transform: translateY(20px); opacity: 0;
      transition: transform 0.25s ease, opacity 0.25s ease;
      font-family: var(--font-hand2); max-width: 340px;
    }
    .nb-toast.is-show { display: block; transform: translateY(0); opacity: 1; }
    .nb-toast__inner { display: flex; align-items: center; gap: 12px; }
    .nb-toast__stamp {
      font-family: var(--font-body); font-weight: 800; font-size: 0.72rem; letter-spacing: 0.06em;
      color: var(--green); border: 2px solid currentColor; border-radius: 4px; padding: 2px 6px;
      text-transform: uppercase; transform: rotate(-3deg);
    }
    .nb-toast__msg strong { display: block; font-family: var(--font-hand); font-size: 1.25rem; color: var(--ink); }

    /* Pomodoro / Study Timer Card (Parts 6, 7, 8) */
    .nb-timer-card {
      position: fixed; top: 70px; right: 18px; width: 300px;
      background: var(--sticky-y); color: var(--sticky-text); border-radius: 2px 2px 12px 2px;
      box-shadow: var(--shadow-sticky); z-index: 60; padding: 18px; display: none;
      font-family: var(--font-hand2); transform: rotate(0.5deg);
    }
    .nb-timer-card.is-open { display: block; }
    .nb-timer-card__tape {
      position: absolute; top: -10px; left: 50%; width: 80px; height: 20px;
      transform: translateX(-50%) rotate(-1deg);
      background: rgba(160, 200, 230, 0.7); pointer-events: none;
    }
    .nb-timer-card__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
    .nb-timer-card__title { font-family: var(--font-hand); font-weight: 700; font-size: 1.45rem; color: var(--ink); }
    .nb-timer-card__close { background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--pencil); }
    .nb-timer-card__time {
      font-family: var(--font-math); font-size: 2.8rem; font-weight: 700; text-align: center;
      color: var(--text); line-height: 1.1; margin: 8px 0;
    }
    .nb-timer-card__module {
      font-size: 0.95rem; text-align: center; color: var(--pencil); margin-bottom: 12px;
      padding: 4px 6px; background: rgba(0, 0, 0, 0.04); border-radius: 4px;
    }
    .nb-timer-card__module strong { display: block; color: var(--ink); font-size: 1rem; }
    .nb-timer-card__controls { display: flex; gap: 6px; justify-content: center; margin-bottom: 12px; }
    .nb-tbtn {
      padding: 6px 12px; border-radius: 6px; font-family: var(--font-hand); font-weight: 700;
      font-size: 1.15rem; cursor: pointer; border: 1.5px solid var(--text); background: var(--card);
    }
    .nb-tbtn:hover { background: var(--hl-yellow); }
    .nb-tbtn--go { background: var(--green); color: #fff; border-color: var(--green); }
    .nb-tbtn--pause { background: var(--amber); color: #fff; border-color: var(--amber); }
    .nb-timer-card__presets { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 10px; }
    .nb-preset-btn {
      padding: 4px; font-size: 0.9rem; font-family: var(--font-hand2); border: 1px dashed var(--line);
      border-radius: 4px; background: rgba(255, 255, 255, 0.5); cursor: pointer;
    }
    .nb-preset-btn:hover, .nb-preset-btn.is-active { background: var(--hl-yellow); font-weight: 700; border-style: solid; }
    .nb-timer-card__stats { font-size: 0.88rem; text-align: center; color: var(--pencil); border-top: 1px dotted var(--line); padding-top: 6px; }

    /* Revision Mode Engine (Part 9) */
    .nb-revision-banner {
      position: sticky; top: var(--topbar-height); z-index: 45;
      background: var(--sticky-y); color: var(--sticky-text); border-bottom: 2px solid var(--amber);
      padding: 10px 16px; font-family: var(--font-hand2); font-size: 1.15rem;
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .nb-revision-banner__exit {
      background: var(--ink); color: #fff; border: none; padding: 4px 12px; border-radius: 4px;
      font-family: var(--font-hand); font-weight: 700; font-size: 1.1rem; cursor: pointer; white-space: nowrap;
    }
    body.is-revision .nb-section > p:not(.nb-revision-keep) {
      opacity: 0.22; max-height: 52px; overflow: hidden; filter: grayscale(1);
      transition: all 0.2s ease; cursor: pointer; position: relative;
    }
    body.is-revision .nb-section > p:not(.nb-revision-keep):hover {
      opacity: 1; max-height: 500px; filter: none; background: rgba(255, 255, 255, 0.4);
    }
    body.is-revision .nb-fbox { border-width: 3px; box-shadow: 8px 8px 0 var(--hl-yellow); }
    body.is-revision .nb-sticky { transform: scale(1.02); }

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
    .nb-stamp--red   { color: var(--red); transform: rotate(-1.5deg); }

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

    /* Hand-Drawn / SVG Diagram Canvas Styling */
    svg.dg {
      max-width: 100%; height: auto; display: block; margin: 16px auto;
      font-family: var(--font-body); overflow: visible;
    }
    .hubc { fill: rgba(47, 95, 196, 0.12); stroke: var(--ink); stroke-width: 2.2; }
    .box { fill: var(--card); stroke: var(--ink); stroke-width: 1.6; }
    .box.dashbox { stroke-dasharray: 4, 3; fill: rgba(0, 0, 0, 0.02); }
    .box.hubbox { fill: rgba(47, 95, 196, 0.15); stroke: var(--ink2); stroke-width: 2; }
    .box.os { fill: rgba(226, 139, 139, 0.15); stroke: var(--margin); }
    .box.pv.fin { fill: rgba(29, 122, 69, 0.12); stroke: var(--green); }
    .box.pv.mfg { fill: rgba(47, 95, 196, 0.12); stroke: var(--ink2); }
    .box.pv.dist { fill: rgba(184, 110, 0, 0.12); stroke: var(--amber); }
    .roof, .base { fill: rgba(47, 95, 196, 0.15); stroke: var(--ink); stroke-width: 2; }
    .pillar { fill: var(--card); stroke: var(--ink); stroke-width: 1.8; }
    .cell { fill: var(--card); stroke: var(--line); stroke-width: 1.2; }
    .cell.hot { fill: rgba(255, 224, 61, 0.35); stroke: var(--amber); stroke-width: 2; }
    .dot { fill: var(--ink); stroke: var(--paper); stroke-width: 2; }
    .dot.hot { fill: var(--red); stroke: #fff; stroke-width: 2; }
    .ln { stroke: var(--ink); stroke-width: 1.6; fill: none; }
    .ln.dash { stroke-dasharray: 5, 4; }
    .ln.thick { stroke-width: 2.4; }
    .ln.dbl { stroke-width: 2; stroke: var(--pencil); }
    .arwhead { fill: var(--ink); }
    .lbl { font-family: var(--font-body); font-size: 13px; fill: var(--text); font-weight: 600; dominant-baseline: middle; }
    .lbl.b { font-weight: 700; fill: var(--ink); }
    .lbl.xs { font-size: 11px; }
    .lbl.sm { font-size: 12px; }
    .lbl.pvt { font-size: 10px; font-weight: 700; }
    .lbl.acc { fill: var(--ink2); font-weight: 700; }
    .big { font-family: var(--font-hand); font-weight: 700; font-size: 20px; fill: var(--ink); dominant-baseline: middle; }
    .big.sm { font-size: 16px; }
    .hand { font-family: var(--font-hand); font-weight: 700; font-size: 16px; fill: var(--ink); dominant-baseline: middle; }
    .hand.sm { font-size: 14px; }
    .note { font-family: var(--font-hand2); font-size: 13px; fill: var(--pencil); dominant-baseline: middle; }
    .note.xs { font-size: 11px; }
    .note.sm { font-size: 12px; }
    .step0 { fill: rgba(217, 236, 255, 0.5); stroke: var(--ink2); }
    .step1 { fill: rgba(255, 242, 161, 0.5); stroke: var(--amber); }
    .step2 { fill: rgba(216, 245, 220, 0.5); stroke: var(--green); }

    /* PYQ Interactive Specific Styling (Part 26) */
    .nb-pyq-item { transition: border-color 0.2s, background 0.2s; }
    .nb-pyq-item.is-practiced { border-color: var(--green) !important; background: rgba(216, 245, 220, 0.25) !important; }
    .pyq-practice-toggle.is-practiced { background: var(--green) !important; color: #fff !important; border-color: var(--green) !important; }
    .pyq-year-tab-btn.is-active { background: var(--ink) !important; color: #fff !important; border-color: var(--ink) !important; }

    /* Tables */
    .nb-table-wrap { overflow-x: auto; margin: 20px 0; border: 1.5px solid var(--line); border-radius: 8px; background: var(--card); }
    .nb-table { width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left; }
    .nb-table th { background: rgba(0, 0, 0, 0.04); font-family: var(--font-hand); font-size: 1.25rem; font-weight: 700; color: var(--ink); padding: 10px 14px; border-bottom: 2px solid var(--line); }
    .nb-table td { padding: 9px 14px; border-bottom: 1px solid var(--line); vertical-align: top; }
    .nb-table tr:last-child td { border-bottom: none; }
    .nb-table tr:hover td { background: rgba(255, 242, 161, 0.2); }

    /* Formula Box */
    .nb-fbox {
      background: var(--card); border: 2px solid var(--ink); border-radius: 8px;
      padding: 16px 20px; margin: 20px 0; position: relative;
    }
    .nb-fbox__label {
      position: absolute; top: -12px; left: 16px; background: var(--ink); color: #fff;
      font-family: var(--font-hand2); font-weight: 700; font-size: 0.95rem; padding: 2px 10px; border-radius: 4px;
    }
    .nb-fbox__math {
      font-family: var(--font-math); font-size: 1.4rem; color: var(--ink); text-align: center; margin: 10px 0; line-height: 1.4;
    }
    .nb-fbox__dict { font-size: 0.95rem; margin-top: 10px; border-top: 1px dashed var(--line); padding-top: 8px; display: grid; grid-template-columns: auto 1fr; gap: 4px 12px; }
    .nb-fbox__dict dt { font-family: var(--font-math); font-weight: 700; color: var(--ink); }
    .nb-fbox__dict dd { margin: 0; }

    /* Assessment & MCQ Engine (Part 25) */
    .nb-quiz-container { background: var(--card); border: 2px solid var(--ink); border-radius: 10px; padding: 20px; margin: 24px 0; }
    .nb-quiz-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px dashed var(--line); padding-bottom: 12px; margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
    .nb-quiz-title { font-family: var(--font-hand); font-size: 1.65rem; color: var(--ink); font-weight: 700; }
    .nb-quiz-meta { font-family: var(--font-hand2); font-size: 1.15rem; color: var(--pencil); }
    
    .nb-qnav { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; }
    .nb-qnav-btn {
      width: 32px; height: 32px; border-radius: 4px; border: 1.5px solid var(--line);
      background: var(--paper); font-family: var(--font-hand); font-size: 1.15rem; font-weight: 700;
      color: var(--text); cursor: pointer; display: grid; place-items: center; transition: all 0.15s;
    }
    .nb-qnav-btn:hover { background: var(--hl-yellow); }
    .nb-qnav-btn.is-current { border-color: var(--ink2); box-shadow: 0 0 0 2px var(--ink2); }
    .nb-qnav-btn.is-answered { background: rgba(47, 95, 196, 0.12); color: var(--ink); }
    .nb-qnav-btn.is-correct { background: rgba(29, 122, 69, 0.2); color: var(--green); border-color: var(--green); }
    .nb-qnav-btn.is-incorrect { background: rgba(194, 54, 47, 0.2); color: var(--red); border-color: var(--red); }

    .nb-qcard { margin-top: 10px; }
    .nb-qhead { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 6px; }
    .nb-qnum { font-family: var(--font-hand); font-weight: 700; font-size: 1.35rem; color: var(--ink); }
    .nb-qtags { display: flex; gap: 6px; flex-wrap: wrap; }
    .nb-qtext { font-size: 1.15rem; font-weight: 600; color: var(--text); line-height: 1.5; margin: 8px 0 16px; }

    .nb-qoptions { display: flex; flex-direction: column; gap: 8px; }
    .nb-qopt {
      display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px; border-radius: 8px;
      border: 1.5px solid var(--line); background: var(--paper); cursor: pointer; transition: all 0.15s;
      font-size: 1rem; line-height: 1.4; user-select: none;
    }
    .nb-qopt:hover { background: var(--hl-yellow); border-color: var(--line); }
    .nb-qopt.is-selected { border-color: var(--ink2); background: rgba(47, 95, 196, 0.08); font-weight: 600; }
    .nb-qopt.is-correct-reveal { border-color: var(--green); background: rgba(29, 122, 69, 0.12); font-weight: 700; }
    .nb-qopt.is-incorrect-reveal { border-color: var(--red); background: rgba(194, 54, 47, 0.10); }
    .nb-qopt__key {
      font-family: var(--font-hand); font-weight: 700; font-size: 1.15rem; width: 24px; height: 24px;
      border-radius: 50%; border: 1.5px solid currentColor; display: grid; place-items: center; flex-shrink: 0;
    }

    .nb-qfeedback { margin-top: 16px; padding: 14px 18px; border-radius: 8px; font-family: var(--font-hand2); font-size: 1.1rem; line-height: 1.5; display: none; }
    .nb-qfeedback.is-correct { display: block; background: rgba(29, 122, 69, 0.12); border-left: 4px solid var(--green); color: var(--text); }
    .nb-qfeedback.is-incorrect { display: block; background: rgba(194, 54, 47, 0.10); border-left: 4px solid var(--red); color: var(--text); }
    .nb-qfeedback__title { font-family: var(--font-hand); font-weight: 700; font-size: 1.35rem; margin-bottom: 4px; }
    .nb-qfeedback.is-correct .nb-qfeedback__title { color: var(--green); }
    .nb-qfeedback.is-incorrect .nb-qfeedback__title { color: var(--red); }

    .nb-qactions { display: flex; align-items: center; justify-content: space-between; margin-top: 20px; gap: 8px; flex-wrap: wrap; }
    .nb-btn-submit-q {
      background: var(--ink); color: #fff; border: none; padding: 8px 18px; border-radius: 6px;
      font-family: var(--font-hand); font-weight: 700; font-size: 1.25rem; cursor: pointer; transition: background 0.15s;
    }
    .nb-btn-submit-q:hover { background: var(--ink2); }
    .nb-btn-submit-q:disabled { opacity: 0.5; cursor: not-allowed; }
    .nb-btn-nav-q {
      background: var(--card); border: 1.5px solid var(--line); padding: 6px 14px; border-radius: 6px;
      font-family: var(--font-hand); font-size: 1.15rem; cursor: pointer; color: var(--text);
    }
    .nb-btn-nav-q:hover { background: var(--hl-yellow); }

    .nb-scorecard {
      background: var(--paper); border: 2px solid var(--ink); border-radius: 10px;
      padding: 24px; margin-top: 20px; display: none; text-align: center;
    }
    .nb-scorecard.is-active { display: block; }
    .nb-scorecard__badge {
      display: inline-block; font-family: var(--font-hand); font-weight: 700; font-size: 1.45rem;
      padding: 4px 16px; border-radius: 20px; margin-bottom: 12px;
    }
    .nb-badge--excellent { background: rgba(29, 122, 69, 0.2); color: var(--green); border: 2px solid var(--green); }
    .nb-badge--strong { background: rgba(47, 95, 196, 0.2); color: var(--ink); border: 2px solid var(--ink); }
    .nb-badge--revisit { background: rgba(194, 54, 47, 0.2); color: var(--red); border: 2px solid var(--red); }
    .nb-score-num { font-family: var(--font-math); font-size: 3rem; font-weight: 700; color: var(--ink); line-height: 1; }
    .nb-score-pct { font-family: var(--font-hand2); font-size: 1.35rem; color: var(--pencil); margin: 4px 0 16px; }

    .nb-weak-box { text-align: left; background: var(--card); border: 1.5px solid var(--line); border-radius: 8px; padding: 14px 18px; margin: 18px 0; }
    .nb-weak-title { font-family: var(--font-hand); font-weight: 700; font-size: 1.35rem; color: var(--ink); margin-bottom: 6px; }
    .nb-weak-list { list-style: none; padding: 0; margin: 0; }
    .nb-weak-item { padding: 5px 0; font-family: var(--font-hand2); font-size: 1.05rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dotted var(--line); }
    .nb-weak-item:last-child { border-bottom: none; }
    .nb-weak-item a { color: var(--ink2); text-decoration: underline; font-weight: 600; }

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
      <div class="nb-topbar__left">
        <button class="nb-btn-top" id="menuBtn" aria-label="Open Notebook Index">☰</button>
        <a class="nb-topbar__back" href="/operations/" title="Back to Operations Catalog" style="display: inline-flex; align-items: center; gap: 4px; font-family: var(--font-hand2); text-decoration: none; color: var(--ink); font-weight: 700; font-size: 1rem; margin-right: 4px;">
          <span class="nb-topbar__back-arrow">&larr;</span>
          <span class="nb-topbar__back-text">Operations Catalog</span>
        </a>
        <div class="nb-topbar__crumb">Operations / <strong>ERP Business Applications · Master Notebook OS</strong></div>
      </div>
      
      <!-- Topbar Live Progress Trackers (Three Independent Systems) -->
      <div class="nb-topbar__trackers">
        <span class="nb-track-chip" title="Curriculum Modules Completed">📚 <span id="nbProgressRatio">0 / 16 modules complete</span></span>
        <span class="nb-track-chip" title="Previous-Year Exam Questions Practiced">📜 <span id="nbPyqRatio">0 / 12 practiced</span></span>
        <span class="nb-track-chip" title="MCQ Assessment Mastery Score">📝 <span id="nbMcqRatio">0 / 30 mastered</span></span>
      </div>

      <!-- Notebook Study Tools Toolbar -->
      <div class="nb-topbar__actions">
        <button class="nb-btn-top" id="toolFocus" title="Focus Mode (Shortcut: F)">🎯 <span>Focus</span></button>
        <button class="nb-btn-top" id="toolPomodoro" title="Pomodoro Study Timer">🍅 <span>Timer</span></button>
        <button class="nb-btn-top" id="toolRevision" title="Exam Revision Mode (Shortcut: R)">🧠 <span>Revision</span></button>
        <a href="#sec-pyq" class="nb-btn-top" id="toolPyq" title="Previous-Year Questions (2023, 2024, 2025)">📜 <span>PYQ</span></a>
        <a href="#sec-quiz" class="nb-btn-top" id="toolQuiz" title="Master Knowledge Check (30 MCQs)">📝 <span>Quiz</span></a>
        <button class="nb-btn-search" id="searchTrigger" aria-label="Open Search">
          <span>Search</span> <kbd>/</kbd>
        </button>
        <button class="nb-btn-top" id="toolPrint" title="Print Study Guide">🖨</button>
        <button class="nb-btn-top" id="themeToggle" aria-label="Toggle Night/Day Mode">🌙</button>
        <div class="nb-topbar__pct" id="pct">0%</div>
      </div>
    </div>
    <div class="nb-topbar__bar"><i id="barfill" style="width: 0%;"></i></div>
  </header>

  <!-- Revision Mode Banner -->
  <div class="nb-revision-banner" id="revisionBanner" style="display: none;">
    <span>🧠 <strong>REVISION MODE ACTIVE:</strong> Highlighting core formulas, frameworks, case dossiers &amp; model answers. Lecture prose is collapsed.</span>
    <button class="nb-revision-banner__exit" id="exitRevisionBtn">Exit Revision (R)</button>
  </div>

  <div class="nb-layout">
    <div class="nb-sidebar-shade" id="shade"></div>
    
    <!-- Notebook Index Sidebar -->
    <aside class="nb-sidebar" id="sidebar">
      <h2>INDEX</h2>

      <!-- Sidebar Progress Summary Box -->
      <div class="nb-sidebar-progress-summary">
        <div class="nb-stat-pill">
          <span class="nb-stat-label">Modules</span>
          <span class="nb-stat-val" id="sideProgressRatio">0/16</span>
        </div>
        <div class="nb-stat-pill">
          <span class="nb-stat-label">PYQ Practiced</span>
          <span class="nb-stat-val" id="sidePyqRatio">0/12</span>
        </div>
        <div class="nb-stat-pill">
          <span class="nb-stat-label">MCQ Mastery</span>
          <span class="nb-stat-val" id="sideMcqRatio">0/30</span>
        </div>
      </div>

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
          <span class="nb-sidebar__label">10. Value Realization Matrix</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-masterdata">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">11. Master Data & Signal Codes</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-plossl">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">12. Plossl Manufacturing Theory</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-subway">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">13. Subway Hierarchy Case</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-risks">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">14. Failure Modes & Ishikawa Fishbone</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-cloud">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">15. Modern Cloud ERP & Evaluation</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-exam-answers">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">16. Complete 18 FAQ Model Answers</span>
          <span class="nb-sidebar__ck"></span>
        </a>

        <div class="nb-sidebar__grp">EXAM VAULT &amp; PRACTICE</div>
        <a href="#sec-pyq">
          <span class="nb-sidebar__chip" style="background: var(--red);"></span>
          <span class="nb-sidebar__label">📜 Previous-Year Questions</span>
          <span class="nb-sidebar__ck" id="sidebarPyqStatus">0/12</span>
        </a>

        <div class="nb-sidebar__grp">FINAL ASSESSMENT</div>
        <a href="#sec-quiz">
          <span class="nb-sidebar__chip" style="background: var(--amber);"></span>
          <span class="nb-sidebar__label">17. Final Knowledge Check</span>
          <span class="nb-sidebar__ck" id="sidebarQuizStatus">📝</span>
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
            <span class="nb-stamp nb-stamp--blue">WeSchool Term IV</span>
          </div>

          <h1 class="nb-hand-underline">ERP Business Applications</h1>
          <p style="font-family: var(--font-hand2); font-size: 1.35rem; color: var(--pencil); margin-top: 2px;">
            Comprehensive Postgraduate Study Guide, Strategic Frameworks &amp; Complete Exam Blueprint
          </p>

          <div class="nb-card" style="margin-top: 14px; background: rgba(255, 242, 161, 0.25);">
            <div class="nb-tape"></div>
            <div style="font-family: var(--font-hand2); font-size: 1.1rem; line-height: 1.5;">
              <strong>Course:</strong> ERP Business Applications (OPN 419) &nbsp;|&nbsp;
              <strong>Instructor:</strong> Dr. Rahul V. Altekar (Director Digital Supply Chain Solutions, SAP SE) &nbsp;|&nbsp;
              <strong>Institution:</strong> WeSchool (Welingkar) &nbsp;|&nbsp;
              <strong>Academic Scope:</strong> Sessions 1.0 to 8.0 &bull; CO1, CO2, CO3 &bull; 100% FAQ &amp; PYQ Coverage
            </div>
          </div>

          <div class="nb-card">
            <div class="nb-tape nb-tape--right"></div>
            <div class="nb-card__title">📐 ENTERPRISE INTEGRATION BLUEPRINT · "ONE SYSTEM"</div>
            ${D.cover}
          </div>
        </header>

        <!-- SECTION 01: ERP Fundamentals & Business vs Technology Strategy -->
        <section class="nb-section" id="sec-fundamentals">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 01</span> ERP Fundamentals &amp; Strategy</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">FAQ Q1 Core Thesis &amp; Dr. Altekar's 3 ERP Concepts</div>
            <p><strong>Is ERP a Software/Technology Strategy or a Business Strategy?</strong><br>
            Axiom: <span class="nb-hl nb-hl--yellow">ERP is primarily a Business Strategy enabled by technology, NOT a software project.</span> Treating ERP merely as an IT system upgrade is the single greatest cause of multi-million dollar corporate failure.</p>
            <p style="margin-top: 8px; font-size: 1.05rem;">
              <strong>Dr. Rahul Altekar's Three Fundamental Concepts of ERP:</strong><br>
              1. <em>"A planning methodology or philosophy based on the seamless integration of all business processes of an enterprise."</em><br>
              2. <em>"A software suite covering major business areas (finance, logistics, sales, materials, manufacturing, distribution) so tightly integrated that any activity recorded in one place is immediately reflected everywhere."</em><br>
              3. <em>"The finest expression of the inseparability of info-tech and business—an enabling technology and managerial tool integrating all levels and improving reportability."</em>
            </p>
          </div>

          <p>
            <strong>Enterprise Resource Planning (ERP)</strong> is a comprehensive management system that orchestrates cross-functional operational workflows across an organization through a single unified database. Prior to ERP, organizations operated as isolated <em>"Islands of Information"</em>: Sales operated local CRMs, Manufacturing ran disconnected shop-floor schedulers, Warehouses used standalone inventory logs, and Finance reconciled month-end figures via manual journal vouchers.
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 INFORMATION SILOS VS. UNIFIED ERP COMMON TRUTH</div>
            ${D.oneSystem}
          </div>

          <!-- Dr. Altekar's System Types -->
          <div class="nb-card" style="border-left: 4px solid var(--ink);">
            <div class="nb-card__title">📊 DR. ALTEKAR'S SYSTEM TYPES LADDER</div>
            <p style="font-family: var(--font-hand2); color: var(--pencil); margin-top: 0;">
              Evolution of enterprise decision intelligence across three ascending tiers:
            </p>
            ${D.sysTypes}
            <div class="nb-table-wrap" style="margin-top: 14px;">
              <table class="nb-table">
                <thead><tr><th>System Type</th><th>Primary Focus</th><th>Data Availability</th><th>Decision-Making Logic</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Connected</strong></td>
                    <td>Data Focused</td>
                    <td>Available across users</td>
                    <td>Common decision making is an optional <strong>human choice</strong>.</td>
                  </tr>
                  <tr>
                    <td><strong>Integrated</strong></td>
                    <td>Information Focused</td>
                    <td>Available across users</td>
                    <td>Common decision making is <strong>enforced by the system</strong> via industry best practices.</td>
                  </tr>
                  <tr>
                    <td><strong>Synchronized</strong></td>
                    <td>Knowledge Focused</td>
                    <td>Real-time autonomous flows</td>
                    <td>Autonomous closed-loop optimization across extended partner networks.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Watch 5 Cs of ERP -->
          <div class="nb-sticky nb-sticky--green">
            <div class="nb-sticky__title">🔍 Watch: The 5 Cs of ERP (Faculty Core Framework)</div>
            <ul style="margin: 0; padding-left: 18px;">
              <li><strong>Complete:</strong> End-to-end coverage of all core business processes without disconnected manual side-systems.</li>
              <li><strong>Connected:</strong> Internal cross-functional harmony (<em>Integrated</em>) + External supply chain connectivity (<em>Connected</em>).</li>
              <li><strong>Cognitive:</strong> Automated pattern detection for failure modes, bottleneck forecasting, and anomaly alerts.</li>
              <li><strong>Compliant:</strong> Statutory legal adherence, industry Best Practices, Good Manufacturing Practices (GMP), and internal SOPs.</li>
              <li><strong>Capable:</strong> High-speed transaction processing and massive volume handling without system degradation (accuracy is assumed).</li>
            </ul>
          </div>

          <!-- 17 ERP Myths -->
          <div class="nb-card">
            <div class="nb-tape nb-tape--right"></div>
            <div class="nb-card__title">⚠️ THE 17 ERP MYTHS VS. THE THREE TRUTHS</div>
            <p style="font-family: var(--font-hand2); font-size: 1.1rem; color: var(--pencil);">
              Verbatim refutation of the 17 common executive misconceptions identified by Dr. Altekar:
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 8px; font-size: 0.95rem;">
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 1:</strong> "ERP = Everyday Reduction of Profit or Early Risky Proposition."<br><em>Reality: ERP drives long-term margin expansion via working capital velocity.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 2:</strong> "Different concepts of ERP based on vendors."<br><em>Reality: Core philosophy of integration and planning is identical across SAP, Oracle, Microsoft.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 3:</strong> "ERP is a computerization / IT project."<br><em>Reality: ERP is an enterprise-wide business operating model transformation.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 4:</strong> "ERP is just software."<br><em>Reality: Software is only the enabler; people and process discipline constitute 80% of success.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 5:</strong> "ERP is an advanced legacy system."<br><em>Reality: Legacy systems were siloed; ERP is horizontally process-integrated.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 6:</strong> "ERP modules are individually an ERP solution."<br><em>Reality: Isolated modules recreate information silos; true ERP requires cross-module synergy.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 7:</strong> "ERP in India must be Indian ERP."<br><em>Reality: Global business logic applies everywhere; localization is achieved via configuration.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 8:</strong> "Customized ERP is true ERP."<br><em>Reality: Excessive customization ('paving cow paths') breaks upgradability and inflates TCO.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 9:</strong> "ERP is outdated; ERP II is the only solution."<br><em>Reality: ERP II merely extends core ERP to collaborative external commerce.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 10:</strong> "ERP is a downsizing tool."<br><em>Reality: ERP rightsizes operations, redeploying labor from clerical data entry to strategic growth.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 11:</strong> "ERP applies only to manufacturing, not services."<br><em>Reality: Service industries (banking, telecom, consulting) rely heavily on project and billing ERP.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 12:</strong> "ERP is a panacea for all business problems."<br><em>Reality: ERP exposes bad management; it cannot fix flawed strategy or toxic leadership.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 13:</strong> "ERP only supports transactional needs."<br><em>Reality: Transactional data fuels executive analytics, predictive S&OP, and strategic planning.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 14:</strong> "ERP is a white elephant."<br><em>Reality: Unmanaged scope makes it expensive; disciplined execution delivers compelling ROI.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 15:</strong> "ERP is a fad that has already gone away."<br><em>Reality: ERP is the permanent transactional operating backbone of global commerce.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 16:</strong> "More ERP systems = More productivity."<br><em>Reality: Proliferation of multiple ERP instances creates new fragmented silos and massive integration overhead.</em>
              </div>
              <div style="background: rgba(194, 54, 47, 0.08); padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--red);">
                <strong>Myth 17:</strong> "ERP is not suitable for small-scale companies."<br><em>Reality: Cloud SaaS multi-tenant solutions make ERP affordable and rapid for SMEs.</em>
              </div>
            </div>

            <!-- The ERP Truth -->
            <div style="margin-top: 14px; padding: 12px; background: rgba(29, 122, 69, 0.1); border-left: 4px solid var(--green); border-radius: 4px;">
              <strong style="color: var(--green); font-family: var(--font-hand); font-size: 1.3rem;">The Three Unavoidable Truths of ERP:</strong>
              <div style="margin-top: 4px; font-size: 1rem;">
                1. <strong>Readiness Audit:</strong> You must audit organizational data, culture, and processes before touching software.<br>
                2. <strong>Performance Measurement:</strong> Value realization must be tracked through concrete operational KPIs.<br>
                3. <strong>Unavoidable:</strong> In modern networked competition, operating without an integrated ERP backbone is competitive suicide.
              </div>
            </div>
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

          <!-- Module 01 Quick Check -->
          <div class="nb-card nb-quick-check" style="margin-top: 24px; background: rgba(255, 242, 161, 0.35);">
            <div class="nb-tape"></div>
            <span class="nb-stamp nb-stamp--amber">${quickChecks.mod1.stamp}</span>
            <h4 style="margin: 8px 0 4px; font-size: 1.3rem;">${quickChecks.mod1.title}</h4>
            <p style="font-size: 1.05rem; margin-bottom: 8px;">${quickChecks.mod1.prompt}</p>
            <details style="font-family: var(--font-hand2); font-size: 1.08rem; cursor: pointer;">
              <summary style="color: var(--ink2); font-weight: 700;">Reveal Answer &amp; Exam Key Takeaway ▾</summary>
              <div style="margin-top: 8px; padding: 10px 14px; background: rgba(29, 122, 69, 0.1); border-left: 3px solid var(--green); border-radius: 4px;">
                ${quickChecks.mod1.reveal}
              </div>
            </details>
          </div>
        </section>

        <!-- SECTION 02: Historical Evolution of Enterprise Systems -->
        <section class="nb-section" id="sec-evolution">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 02</span> Historical Evolution: From MRP I to Autonomous Cloud ERP</h2>
          
          <p>
            Enterprise systems evolved through five distinct historical epochs in direct response to expanding supply chain complexity and computational capabilities:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 EVOLUTIONARY TIMELINE (DR. ALTEKAR'S SEQUENCE)</div>
            ${D.evolution}
          </div>

          <!-- Value Matrix Analysis -->
          <div class="nb-card" style="border: 2px solid var(--ink);">
            <div class="nb-tape nb-tape--right"></div>
            <div class="nb-card__title">📊 VALUE MATRIX ANALYSIS (FACULTY WHITEBOARD BLUEPRINT)</div>
            <p style="font-family: var(--font-hand2); font-size: 1.15rem; color: var(--pencil); margin-top: 0;">
              Evolution of manufacturing paradigms from Mass Production to Lean and Mass Customization:
            </p>
            ${D.valueMatrix}
            <div class="nb-sticky nb-sticky--blue" style="margin-top: 14px;">
              <div class="nb-sticky__title">Key Dynamic of the Value Matrix</div>
              <p>
                <strong>The Resetting Ticket:</strong> What constituted <em>Market Leadership</em> in decade N (e.g., Lowest Price in the 1980s, Quality in the 1990s) becomes the minimum <em>Market Entry</em> qualifying ticket in decade N+1. Today, in the 2000s and beyond, <strong>Delivery (D), Agility, and Customer Service</strong> determine market leadership—and these can only be achieved through real-time ERP synchronization.
              </p>
            </div>
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Era</th><th>System Paradigm</th><th>Core Operational Focus</th><th>Technological Architecture</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1960s</strong></td>
                  <td><strong>Inventory Control (SIC)</strong></td>
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
                  <td>Closed-loop capacity planning (RCCP/CRP), master production scheduling (MPS), shop floor control.</td>
                  <td>Minicomputers (DEC VAX, IBM AS/400), early relational database tables.</td>
                </tr>
                <tr>
                  <td><strong>1990s</strong></td>
                  <td><strong>Enterprise Resource Planning (ERP)</strong></td>
                  <td>Enterprise-wide cross-functional integration: finance, HR, materials, distribution, order-to-cash.</td>
                  <td>Client-server 3-tier architectures (SAP R/3, Oracle Applications), relational RDBMS (Oracle, DB2, Informix).</td>
                </tr>
                <tr>
                  <td><strong>2000s+</strong></td>
                  <td><strong>Extended ERP (E-ERP) &amp; SCM</strong></td>
                  <td>Collaborative commerce, CRM, Advanced Planning and Scheduling (APS), web portals.</td>
                  <td>Multi-tier web services, XML/EDI protocols, enterprise service buses (ESB).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 03: Architecture Selection -->
        <section class="nb-section" id="sec-architecture">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 03</span> Three-Tier Client-Server Architecture &amp; Selection</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">FAQ Q3 Core Thesis</div>
            <p><strong>Why is 3-Tier Architecture superior to 2-Tier Client-Server?</strong><br>
            Separation of concerns: Decoupling the <em>Application Logic Server</em> from both the <em>User Interface (Presentation)</em> and the <em>Database (RDBMS)</em> eliminates network bottlenecks, prevents fatal database locks, enables elastic horizontal scaling, and provides centralized security governance.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 CLIENT-SERVER ARCHITECTURE (2 / 3 / N-TIER)</div>
            ${D.architecture}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Architectural Tier</th><th>Physical Component</th><th>Technical Responsibility</th><th>Enterprise Failure Mode if Compromised</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tier 1: Presentation</strong></td>
                  <td>Web Browser, GUI Driver, Mobile Client</td>
                  <td>User interaction, data entry formatting, field-level validation, rendering visual themes.</td>
                  <td>Loss of productivity if fat clients require local machine installations; solved by zero-footprint HTML5 browsers.</td>
                </tr>
                <tr>
                  <td><strong>Tier 2: Application Logic</strong></td>
                  <td>Application Servers, Compute Clusters</td>
                  <td>Executes business rules, MRP net requirement math, posting workflows, and authorization checks.</td>
                  <td>Processing queue choke if batch runs lock out daytime transactional users; resolved via horizontal server scaling.</td>
                </tr>
                <tr>
                  <td><strong>Tier 3: Database Engine</strong></td>
                  <td>RDBMS (In-Memory HANA, Oracle, DB Driver)</td>
                  <td>ACID-compliant relational data repository, data integrity, journal logs, persistence.</td>
                  <td>Catastrophic enterprise halt if DB crashes without automated hot-standby failover and point-in-time recovery.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Module 03 Quick Check -->
          <div class="nb-card nb-quick-check" style="margin-top: 24px; background: rgba(255, 242, 161, 0.35);">
            <div class="nb-tape"></div>
            <span class="nb-stamp nb-stamp--amber">${quickChecks.mod3.stamp}</span>
            <h4 style="margin: 8px 0 4px; font-size: 1.3rem;">${quickChecks.mod3.title}</h4>
            <p style="font-size: 1.05rem; margin-bottom: 8px;">${quickChecks.mod3.prompt}</p>
            <details style="font-family: var(--font-hand2); font-size: 1.08rem; cursor: pointer;">
              <summary style="color: var(--ink2); font-weight: 700;">Reveal Answer &amp; Exam Key Takeaway ▾</summary>
              <div style="margin-top: 8px; padding: 10px 14px; background: rgba(29, 122, 69, 0.1); border-left: 3px solid var(--green); border-radius: 4px;">
                ${quickChecks.mod3.reveal}
              </div>
            </details>
          </div>
        </section>

        <!-- SECTION 04: The Five Pillars of ERP -->
        <section class="nb-section" id="sec-pillars">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 04</span> The Five Pillars of ERP &amp; Best-Practice Amalgamation</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">FAQ Q2 Core Thesis</div>
            <p><strong>What are the Five Pillars of ERP and how do they amalgamate best practices?</strong><br>
            Dr. Altekar's Five Pillars form the structural temple supporting enterprise value realization: <em>1) Process-Based Flat Organization</em>, <em>2) Assemble-to-Order / Make-to-Order Philosophy</em>, <em>3) Empowered Employees</em>, <em>4) Customer and Supplier Integration</em>, and <em>5) Sophisticated IT Systems</em>. They generate customer focus, minimal waste, and superior economic return.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 THE FIVE PILLARS CONCEPTUAL TEMPLE</div>
            ${D.pillars}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Pillar</th><th>Core Conceptual Mechanism</th><th>Operational Translation in Modern ERP</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Process-Based Flat Org</strong></td>
                  <td>Eliminates vertical functional silos in favor of horizontal value streams (Order-to-Cash, Procure-to-Pay).</td>
                  <td>Roles mapped to process workflows with automated routing; reduces managerial approval layers from 7 to 2.</td>
                </tr>
                <tr>
                  <td><strong>2. ATO / MTO Philosophy</strong></td>
                  <td>Postpones final product differentiation to the Customer Order Decoupling Point (CODP) to minimize finished stock liability.</td>
                  <td>Modular BOMs, variant configuration engines, and real-time Available-to-Promise (ATP) calculations.</td>
                </tr>
                <tr>
                  <td><strong>3. Empowered Employees</strong></td>
                  <td>Democratizes single-source-of-truth data, allowing frontline operators to make immediate operational choices.</td>
                  <td>Self-service analytics, automated exception alerts, and decentralized goods receipts directly at the dock.</td>
                </tr>
                <tr>
                  <td><strong>4. Customer &amp; Supplier Integration</strong></td>
                  <td>Extends visibility beyond organizational boundaries to incorporate Tier-1 suppliers and direct customers.</td>
                  <td>Vendor Managed Inventory (VMI), automated EDI/API purchase orders, and customer delivery tracking portals.</td>
                </tr>
                <tr>
                  <td><strong>5. Sophisticated IT Systems</strong></td>
                  <td>Provides the real-time computational muscle, transaction integrity, and database consistency required for scale.</td>
                  <td>In-memory relational databases, real-time MRP runs in seconds, and enterprise-grade role-based security.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 05: Core Functional Modules & Scope -->
        <section class="nb-section" id="sec-modules">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 05</span> Core Modules, Industry Scope &amp; Target KPIs</h2>
          
          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 ERP FUNCTIONAL MODULE TRIAD</div>
            ${D.moduleTriad}
          </div>

          <!-- ERP Business Process View -->
          <div class="nb-card" style="border: 2px solid var(--ink);">
            <div class="nb-tape nb-tape--right"></div>
            <div class="nb-card__title">📐 ERP BUSINESS PROCESS VIEW (FACULTY MASTER SLIDE 14)</div>
            <p style="font-family: var(--font-hand2); color: var(--pencil); margin-top: 0;">
              Complete textbook process architecture mapping Distribution, Manufacturing Planning, and Financials:
            </p>
            ${D.processView}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Functional Module</th><th>Core Sub-Components</th><th>Key Operating Processes</th><th>Critical Performance KPIs</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Manufacturing</strong></td>
                  <td>BOM, Routings, Work Centers, MRP, CRP, Shop Floor Control.</td>
                  <td>Production scheduling, capacity leveling, work order release, scrap confirmation.</td>
                  <td>OEE (Overall Equipment Effectiveness), Schedule Adherence %, WIP Turns.</td>
                </tr>
                <tr>
                  <td><strong>Distribution &amp; Logistics</strong></td>
                  <td>Sales Orders, Shipping, DRP, Inventory Control, Warehouse Management.</td>
                  <td>ATP calculation, pick-pack-ship, freight documentation, depot transfer orders.</td>
                  <td>OTIF (On-Time In-Full) %, Order Fill Rate, Shipping Cycle Time.</td>
                </tr>
                <tr>
                  <td><strong>Financials &amp; Controlling</strong></td>
                  <td>General Ledger, Accounts Payable, Accounts Receivable, Cost Center Accounting.</td>
                  <td>3-way invoice matching, revenue recognition, multi-currency ledger close, variance analysis.</td>
                  <td>Days Sales Outstanding (DSO), Days Payable Outstanding (DPO), Month-End Close Days.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 06: Procure-to-Pay (P2P) -->
        <section class="nb-section" id="sec-p2p">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 06</span> Procure-to-Pay (P2P), 3-Way Matching &amp; Internal Controls</h2>
          
          <p>
            The <strong>Procure-to-Pay (P2P)</strong> cycle orchestrates all activities from identifying a material requirement through vendor payment release. The cornerstone of financial governance within P2P is the automated <strong>Three-Way Match</strong>:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 THE THREE-WAY MATCHING RECONCILIATION GATE</div>
            ${svgProcess}
            <div style="font-family: var(--font-hand2); font-size: 1.15rem; margin-top: 8px;">
              <strong>Rule:</strong> Purchase Order (Quantity &amp; Price) &equiv; Goods Receipt Note (Quantity Received) &equiv; Vendor Invoice (Quantity &amp; Price Billed). Any price or quantity variance exceeding system tolerance triggers an automated payment block.
            </div>
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>P2P Stage</th><th>Originating Document</th><th>Posting Impact on General Ledger</th><th>Internal Control Gate</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Requisition</strong></td>
                  <td>Purchase Requisition (PR)</td>
                  <td>No accounting journal entry; commitment recorded against department budget.</td>
                  <td>Hierarchy-based signature limit approval.</td>
                </tr>
                <tr>
                  <td><strong>2. Order Placement</strong></td>
                  <td>Purchase Order (PO)</td>
                  <td>No GL entry; legal contract established with selected vendor.</td>
                  <td>Approved vendor master list validation.</td>
                </tr>
                <tr>
                  <td><strong>3. Goods Receipt</strong></td>
                  <td>Goods Receipt Note (GRN)</td>
                  <td><strong>Debit:</strong> Inventory (Asset)<br><strong>Credit:</strong> GR/IR Clearing Account (Liability)</td>
                  <td>Physical inspection &amp; warehouse barcode scan.</td>
                </tr>
                <tr>
                  <td><strong>4. Invoice Receipt</strong></td>
                  <td>Vendor Invoice (LIV)</td>
                  <td><strong>Debit:</strong> GR/IR Clearing Account<br><strong>Credit:</strong> Accounts Payable (Vendor Account)</td>
                  <td>Three-way matching engine tolerance check.</td>
                </tr>
                <tr>
                  <td><strong>5. Payment</strong></td>
                  <td>Payment Voucher</td>
                  <td><strong>Debit:</strong> Accounts Payable<br><strong>Credit:</strong> Bank Operating Cash</td>
                  <td>Segregation of duties: Dual signatory approval.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 07: Order-to-Cash (O2C) -->
        <section class="nb-section" id="sec-o2c">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 07</span> Order-to-Cash (O2C) &amp; Available-to-Promise (ATP)</h2>
          
          <p>
            The <strong>Order-to-Cash (O2C)</strong> cycle spans all customer-facing touchpoints from inquiry to cash collection. The vital operational lever within O2C is <strong>Available-to-Promise (ATP)</strong> logic:
          </p>

          <div class="nb-fbox">
            <span class="nb-fbox__label">Available-to-Promise (ATP) Standard Formula</span>
            <div class="nb-fbox__math">
              ATP = On-Hand Stock + Scheduled Receipts - Committed Customer Orders
            </div>
            <div style="font-family: var(--font-hand2); font-size: 1.05rem; text-align: center; color: var(--pencil);">
              Calculated dynamically across discrete time buckets to commit firm delivery dates without risking stockouts.
            </div>
          </div>

          <div class="nb-card">
            <div class="nb-tape nb-tape--right"></div>
            <div class="nb-card__title">📐 ORDER-TO-CASH VALUE STREAM</div>
            ${svgValueChain}
          </div>
        </section>

        <!-- SECTION 08: Closed-Loop MRP & S&OP -->
        <section class="nb-section" id="sec-mrp">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 08</span> S&amp;OP, Master Production Scheduling &amp; Closed-Loop MRP</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">Closed-Loop Manufacturing Discipline</div>
            <p><strong>How does Closed-Loop MRP maintain production stability?</strong><br>
            By establishing tight feedback loops: Sales &amp; Operations Planning (S&amp;OP) sets macro volume targets &rarr; Master Production Schedule (MPS) disaggregates into specific product mixes validated by Rough-Cut Capacity Planning (RCCP) &rarr; Material Requirements Planning (MRP) explodes component needs validated by detailed Capacity Requirements Planning (CRP).</p>
          </div>

          <!-- Customer Order Decoupling Point (CODP) Diagram -->
          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 CUSTOMER ORDER DECOUPLING POINT (CODP WHITEBOARD BLUEPRINT)</div>
            <p style="font-family: var(--font-hand2); color: var(--pencil); margin-top: 0;">
              Faculty whiteboard diagram showing decoupling points across MTS, ATO/CTO, MTO, and ETO:
            </p>
            ${D.codp}
          </div>

          <!-- Planning Time Fences Table -->
          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead><tr><th>Planning Zone</th><th>Time Horizon</th><th>Order Change Rules</th><th>Operational Reality in ERP</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>Frozen Zone</strong></td>
                  <td>Current Week to W+1</td>
                  <td>Zero changes permitted without VP Operations approval.</td>
                  <td>Parts staged on assembly line; materials in transit via JIT/JIS call-offs.</td>
                </tr>
                <tr>
                  <td><strong>Slushy Zone</strong></td>
                  <td>Week +2 to Week +4</td>
                  <td>Mix modifications permitted; total production volume locked.</td>
                  <td>Sub-assemblies ordered; components being machined in work centers.</td>
                </tr>
                <tr>
                  <td><strong>Liquid Zone</strong></td>
                  <td>Week +5 and beyond</td>
                  <td>Full flexibility to alter both product mix and aggregate volume.</td>
                  <td>Driven purely by forecasting and aggregate S&amp;OP monthly planning runs.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Module 08 Quick Check -->
          <div class="nb-card nb-quick-check" style="margin-top: 24px; background: rgba(255, 242, 161, 0.35);">
            <div class="nb-tape"></div>
            <span class="nb-stamp nb-stamp--amber">${quickChecks.mod8.stamp}</span>
            <h4 style="margin: 8px 0 4px; font-size: 1.3rem;">${quickChecks.mod8.title}</h4>
            <p style="font-size: 1.05rem; margin-bottom: 8px;">${quickChecks.mod8.prompt}</p>
            <details style="font-family: var(--font-hand2); font-size: 1.08rem; cursor: pointer;">
              <summary style="color: var(--ink2); font-weight: 700;">Reveal Answer &amp; Exam Key Takeaway ▾</summary>
              <div style="margin-top: 8px; padding: 10px 14px; background: rgba(29, 122, 69, 0.1); border-left: 3px solid var(--green); border-radius: 4px;">
                ${quickChecks.mod8.reveal}
              </div>
            </details>
          </div>
        </section>

        <!-- SECTION 09: BPR & Organizational Transformation -->
        <section class="nb-section" id="sec-bpr">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 09</span> BPR, Rightsizing vs. Downsizing &amp; Standard Fit</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">FAQ Q4 Core Thesis</div>
            <p><strong>Is ERP an instrument for Downsizing or Rightsizing?</strong><br>
            <span class="nb-hl nb-hl--yellow">ERP is strictly an instrument for Rightsizing, NOT Downsizing.</span> Downsizing is a crude reduction of headcount. Rightsizing is the strategic reallocation and elevation of human capital from clerical data entry to high-value analysis and growth management.</p>
          </div>

          <!-- BPR & ERP Chicken & Egg Paradox -->
          <div class="nb-card" style="border-left: 4px solid var(--ink);">
            <div class="nb-tape"></div>
            <div class="nb-card__title">🔄 BPR &amp; ERP CHICKEN &amp; EGG PARADOX (FACULTY BLUEPRINT)</div>
            ${D.chickenEgg}
            <div style="font-family: var(--font-hand2); font-size: 1.12rem; margin-top: 10px;">
              <strong>The Dilemma:</strong> Does Business Process Reengineering (BPR) precede ERP implementation, or does ERP package adoption dictate process redesign?<br>
              <strong>The Resolution:</strong> High-level process simplification must precede software selection; then adopt packaged vanilla best practices for 80% commodity processes, reserving custom BPR exclusively for proprietary differentiators.
            </div>
          </div>

          <!-- ERP Panchanga & Implementation Methodology -->
          <div class="nb-card">
            <div class="nb-tape nb-tape--right"></div>
            <div class="nb-card__title">🏛️ ERP PANĆĀNGA: THE FIVE ELEMENTS OF ERP SUCCESS</div>
            ${D.implMethod}
            <p style="font-family: var(--font-hand2); font-size: 1.1rem; color: var(--pencil); margin-top: 8px;">
              Dr. Altekar's Panchanga maps the five essential dimensions: <strong>The Client</strong> (Industry Focus), <strong>The User</strong> (Culture Focus), <strong>The ERP Brand</strong> (Best Practice), <strong>The Consultant</strong> (BPR Focus), and <strong>The Methodology</strong> (Value Focus).
            </p>
          </div>
        </section>

        <!-- SECTION 10: Value Realization Matrix -->
        <section class="nb-section" id="sec-matrix">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 10</span> Value Realization Matrix Analysis</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">FAQ Q5 Core Thesis</div>
            <p><strong>How does the Value Realization Matrix govern ERP ROI?</strong><br>
            It maps benefits across two intersecting axes: <em>Tangible vs. Intangible</em> and <em>Operational vs. Strategic</em>, establishing clear accountability and measurement mechanisms to prevent post-go-live value decay.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 VALUE REALIZATION 2x2 PORTFOLIO</div>
            ${svgMatrix}
          </div>
        </section>

        <!-- SECTION 11: Master Data Taxonomy & Signal Codes -->
        <section class="nb-section" id="sec-masterdata">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 11</span> Master Data Taxonomy, Item Types &amp; Signal Codes</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">FAQ Q7 Core Thesis</div>
            <p><strong>Define Master Data, Material Types, and Signal Codes.</strong><br>
            Master Data is the persistent single-source-of-truth business taxonomy. Material Types classify items by their operational role (ROH, HALB, FERT, VERP). Signal Codes dictate planning parameters, safety stock buffers, and procurement algorithms.</p>
          </div>

          <!-- ABC Analysis Table -->
          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📊 ABC INVENTORY GOVERNANCE (PARETO 80/20 LAW)</div>
            <div class="nb-table-wrap">
              <table class="nb-table">
                <thead><tr><th>Category</th><th>SKU Volume %</th><th>Annual Spend %</th><th>ERP Control Policy</th><th>Cycle Count Frequency</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Class A</strong></td>
                    <td>10–15%</td>
                    <td>70–80%</td>
                    <td>Strict JIT, daily scheduling, minimum safety stocks, VP sign-off.</td>
                    <td>Daily / Weekly perpetual audit.</td>
                  </tr>
                  <tr>
                    <td><strong>Class B</strong></td>
                    <td>20–25%</td>
                    <td>15–20%</td>
                    <td>Standard MRP lot-sizing, bi-weekly orders, moderate safety stock.</td>
                    <td>Monthly audit.</td>
                  </tr>
                  <tr>
                    <td><strong>Class C</strong></td>
                    <td>60–70%</td>
                    <td>5–10%</td>
                    <td>Automated two-bin reorder point (ROP), bulk buying, generous buffer.</td>
                    <td>Quarterly / Annual physical count.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- SECTION 12: Plossl's Law of Manufacturing Management -->
        <section class="nb-section" id="sec-plossl">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 12</span> Plossl's Law of Manufacturing Management</h2>
          
          <div class="nb-sticky nb-sticky--pink">
            <div class="nb-sticky__title">FAQ Q8 Core Thesis &amp; Plossl's First Law</div>
            <p><strong>George Plossl's Core Manufacturing Law:</strong><br>
            <em>"All benefits in manufacturing stem from the speed of flow of materials and information; conversely, all costs and risks increase with lead time and operational stagnation."</em></p>
          </div>

          <!-- George Plossl's 12 Verbatim Principles -->
          <div class="nb-card" style="border: 2px solid var(--ink);">
            <div class="nb-tape nb-tape--right"></div>
            <div class="nb-card__title">📜 GEORGE PLOSSL'S 12 PRINCIPLES (FACULTY SLIDES 12 &amp; 13 VERBATIM)</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.96rem; margin-top: 10px;">
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink);">
                <strong>1. Production Problems:</strong> Production problems must and can be eliminated. They cannot be covered up successfully with cushions of inventory and time.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink);">
                <strong>2. Inventory is a Liability:</strong> Inventory is more of a liability than an asset, having real value only when it is flowing through operations or used to support them.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink);">
                <strong>3. Tolerating Downtime:</strong> Tolerating some downtime while striving to eliminate their causes is better than preventing idle time by manufacturing items not required immediately.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink);">
                <strong>4. Re-Planning Frequency:</strong> More frequent and precise re-planning, such as computing daily rather than weekly, does not make it more accurate.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink);">
                <strong>5. Re-Planning vs Execution:</strong> Re-planning is admitting failure; it is no substitute for sound execution.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink);">
                <strong>6. Realistic Plans:</strong> Plans impossible to execute are worse than useless.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink2);">
                <strong>7. Controlling Lead Times:</strong> Lead times cannot only be monitored and adjusted but can also be controlled.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink2);">
                <strong>8. Setup Reduction:</strong> Reducing setup time is worth the effort.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink2);">
                <strong>9. Planning vs Execution:</strong> Planning defines resources needed to make what is planned; execution applies available resources to make what customers want now.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink2);">
                <strong>10. Planning Horizons:</strong> Only resources requiring long periods for actions should be planned ahead; detailed plans should cover only very short horizons.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink2);">
                <strong>11. Universal Framework:</strong> There is one manufacturing planning and control system framework common to all types of manufacturing.
              </div>
              <div style="background: var(--paper); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--ink2);">
                <strong>12. Continuous Education:</strong> All employees need continuous education.
              </div>
            </div>
          </div>

          <div class="nb-fbox">
            <span class="nb-fbox__label">Economic Order Quantity (EOQ) Formula</span>
            <div class="nb-fbox__math">
              TC(Q) = (D / Q) &bull; S + (Q / 2) &bull; H<br>
              Q* = &radic; [ (2 &bull; D &bull; S) / H ]
            </div>
          </div>
        </section>

        <!-- SECTION 13: Case Dossiers & Real-World Scenarios -->
        <section class="nb-section" id="sec-subway">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 13</span> Executive Case Dossiers: Strategy, Industry &amp; Multi-Tier Systems</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">Real-World Case Portfolio: WeSchool Exam Benchmark</div>
            <p>
              Executive scenarios test your ability to synthesize ERP theory with business reality. The curriculum explores four distinct operational contexts:
            </p>
          </div>

          <!-- Dossier 1: Ms. Vijaya Loki (LPU Ltd, Chemical Co - 2025 Compulsory Case) -->
          <div class="nb-card" style="border-left: 4px solid var(--ink);">
            <div class="nb-tape"></div>
            <span class="nb-stamp nb-stamp--red">2025 EXAM CASE · 20 MARKS</span>
            <h3 style="margin: 8px 0 4px;">Case Dossier 1: Ms. Vijaya Loki · Growth Management in Process Chemicals</h3>
            <p><strong>Context:</strong> Ms. Vijaya Loki, newly appointed CDO of LPU Ltd (a renowned Indian chemical firm), views ERP as a technical architecture intervention (databases, servers, APIs). She must pivot to viewing ERP as an organizational growth engine.</p>
            <p><strong>Strategic Solution:</strong> Reframing ERP via Dr. Altekar's 5 Cs (Complete, Connected, Cognitive, Compliant, Capable) and adopting a Franchised rollout method by manufacturing plant rather than a risky Big Bang.</p>
          </div>

          <!-- Dossier 2: Ms. Aishwarya (Prabha Automobiles - 2024 Compulsory Case) -->
          <div class="nb-card" style="border-left: 4px solid var(--ink2);">
            <span class="nb-stamp nb-stamp--blue">2024 EXAM CASE · 20 MARKS</span>
            <h3 style="margin: 8px 0 4px;">Case Dossier 2: Ms. Aishwarya · Customer-Centric Transformation at Prabha Auto</h3>
            <p><strong>Context:</strong> CIO transitioning a legacy push manufacturer into a customer-centric automotive ecosystem.</p>
            <p><strong>Strategic Solution:</strong> Dealer Management System integration, online vehicle configurator with Available-to-Promise (ATP), and Just-In-Sequence supplier call-offs.</p>
          </div>

          <!-- Dossier 3: Ms. Deepika (Pharma Co - 2023 Compulsory Case) -->
          <div class="nb-card" style="border-left: 4px solid var(--green);">
            <span class="nb-stamp nb-stamp--green">2023 EXAM CASE · 10 MARKS</span>
            <h3 style="margin: 8px 0 4px;">Case Dossier 3: Ms. Deepika · Strategic ERP Charter in Regulated Pharmaceuticals</h3>
            <p><strong>Context:</strong> Formulating an ERP Strategy Charter demonstrating why ERP in pharma is a business strategy, not an IT tool.</p>
            <p><strong>Strategic Solution:</strong> US FDA 21 CFR Part 11 compliance, electronic batch records (eBR), strict vanilla core doctrine, and executive steering committee governance.</p>
          </div>

          <!-- Dossier 4: Subway Multi-Level Hierarchy Conceptual Case -->
          <div class="nb-card">
            <span class="nb-stamp nb-stamp--amber">FAQ Q6 CASE · 10 MARKS</span>
            <h3 style="margin: 8px 0 4px;">Case Dossier 4: Subway Franchise Multi-Level Hierarchy Analysis</h3>
            <p><strong>Examination Prompt:</strong> <em>"You are Subway with a multi-level hierarchy; will the business fail? Explain."</em></p>
            <p><strong>Conceptual Analysis:</strong> Multi-level franchise hierarchies (Store &rarr; Franchisee &rarr; Regional Development Agent &rarr; Corporate HQ) do <strong>not</strong> inevitably fail if ERP enforces standardized Master Recipes and global POS integration while allowing localized procurement of perishable vegetables within strict quality parameters.</p>
          </div>
        </section>

        <!-- SECTION 14: Failure Modes & Ishikawa Root Cause -->
        <section class="nb-section" id="sec-risks">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 14</span> Failure Modes, Risk Mitigation &amp; Ishikawa Root Cause</h2>
          
          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 ISHIKAWA FISHBONE ROOT-CAUSE DIAGRAM</div>
            ${svgFishbone}
          </div>
        </section>

        <!-- SECTION 15: Modern Cloud ERP & Architecture -->
        <section class="nb-section" id="sec-cloud">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 15</span> Modern Cloud ERP, Multi-Tenant SaaS &amp; Clean Core</h2>
          
          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead><tr><th>Dimension</th><th>On-Premise ERP</th><th>Private Cloud (Hosted Single-Tenant)</th><th>Public Cloud (Multi-Tenant SaaS)</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>Infrastructure</strong></td>
                  <td>Owned corporate servers</td>
                  <td>Dedicated cloud virtual machines</td>
                  <td>Shared hyperscaler cloud infrastructure</td>
                </tr>
                <tr>
                  <td><strong>Customization</strong></td>
                  <td>Unrestricted code modification</td>
                  <td>High flexibility</td>
                  <td>Strict <em>Clean Core</em> extension via APIs</td>
                </tr>
                <tr>
                  <td><strong>Upgrade Cadence</strong></td>
                  <td>Every 5–7 years (massive project)</td>
                  <td>Annual manual patching</td>
                  <td>Automated quarterly releases</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 16: Complete 18 FAQ Model Exam Answers & Rubrics -->
        <section class="nb-section" id="sec-exam-answers">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 16</span> Complete 18 FAQ Model Exam Answers &amp; Rubrics</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">Curriculum FAQ Master Bank</div>
            <p>
              Authoritative model answers for all 18 primary course FAQ questions, formatted for maximum postgraduate exam marks.
            </p>
          </div>

          <div class="nb-cards-grid">
            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q1 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q1: Is ERP a Software/Technology Strategy or a Business Strategy?</h3>
              <p><strong>Model Answer:</strong> ERP is primarily a comprehensive business strategy enabled by technology. Treating ERP as an IT project delegates strategic process ownership to technicians, leading to fatal misalignment. ERP fundamentally reorganizes cross-functional processes, eliminates organizational silos, and establishes real-time operational discipline.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q2 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q2: What are the Five Pillars of ERP and how do they amalgamate best practices?</h3>
              <p><strong>Model Answer:</strong> The Five Pillars are: 1) Process-based Flat Organization, 2) ATO/MTO Philosophy, 3) Empowered Employees, 4) Customer and Supplier Integration, and 5) Sophisticated IT Systems. They amalgamate best practices by eliminating functional handoff delays, decoupling inventory at optimum buffer points, providing single-truth visibility, and ensuring real-time operational discipline.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q3 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q3: Explain the 3-Tier Architecture of ERP and why it is superior to 2-Tier systems.</h3>
              <p><strong>Model Answer:</strong> 3-Tier architecture separates Presentation (GUI Driver), Business Logic (Application Server), and Data Storage (RDBMS). It is superior to 2-Tier because it isolates compute-intensive logic from database tables, prevents network congestion caused by fat clients, allows horizontal application server scaling, and centralizes security enforcement.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q4 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q4: Is ERP an instrument for Downsizing or Rightsizing?</h3>
              <p><strong>Model Answer:</strong> ERP is strictly an instrument for Rightsizing. Downsizing is a crude reduction in staff numbers. Rightsizing reconfigures and redeploys human resources, automating repetitive clerical ledger entries and elevating knowledge workers to strategic exception handling, customer relationship management, and data-driven optimization.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q5 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q5: Detail the Value Realization Matrix in ERP implementation.</h3>
              <p><strong>Model Answer:</strong> The matrix evaluates benefits across Tangible/Intangible and Operational/Strategic quadrants. Tangible operational gains include inventory reduction and faster order cycles; tangible strategic gains include cash-to-cash compression. Intangible operational gains include higher data accuracy; intangible strategic gains include superior decision agility and enterprise resilience.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q6 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q6: You are Subway with a multi-level hierarchy; will the business fail? Explain.</h3>
              <p><strong>Model Answer:</strong> Business failure is not inevitable if ERP unifies data architecture. Standardizing global POS recipes, centralized vendor pricing agreements, and real-time royalty clearing automates corporate governance while allowing decentralized franchisees the operational agility to procure local perishable produce under strict quality master data tolerances.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q7 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q7: Define Master Data, Material Types, and Signal Codes.</h3>
              <p><strong>Model Answer:</strong> Master Data represents persistent, authoritative core business entities (Customers, Vendors, Materials). Material Types categorize items by operational function: ROH (Raw Materials), HALB (Semi-Finished), FERT (Finished Goods), and VERP (Packaging). Signal Codes represent algorithmic triggers (reorder points, lot sizing rules, safety stock cushions, lead-time offsets) that direct automated MRP planning.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q8 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q8: How does Plossl's Theory of Manufacturing link with ERP?</h3>
              <p><strong>Model Answer:</strong> George Plossl's first law posits that all manufacturing benefits stem from the speed of material and information flow. ERP operationalizes Plossl's principles by replacing inventory cushions with real-time demand information, compressing lead times, reducing machine setups, and enforcing rigorous execution over chaotic re-planning.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q9 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q9: Contrast Assemble-to-Order (ATO) with Make-to-Order (MTO).</h3>
              <p><strong>Model Answer:</strong> In ATO, the Customer Order Decoupling Point (CODP) is positioned at the Semi-Finished Goods (SFG) level; sub-assemblies are pre-built to forecast and final assembly is triggered by customer order. In MTO, the CODP is positioned upstream at raw materials; fabrication and assembly begin only upon receipt of a firm order, eliminating finished goods inventory liability.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q10 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q10: Detail the 3-Way Matching Process in Procure-to-Pay (P2P).</h3>
              <p><strong>Model Answer:</strong> 3-Way Matching automatically reconciles: 1) Purchase Order (Quantity &amp; Price authorized), 2) Goods Receipt Note (Quantity physically verified at dock), and 3) Vendor Invoice (Quantity &amp; Price billed). Discrepancies exceeding defined tolerance limits trigger automated invoice payment blocks, eliminating fraudulent and duplicate disbursements.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q11 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q11: Explain Available-to-Promise (ATP) and Capable-to-Promise (CTP).</h3>
              <p><strong>Model Answer:</strong> ATP calculates uncommitted physical inventory and scheduled receipts in defined time buckets to confirm order delivery dates. CTP extends this logic by checking uncommitted machine and labor capacity, determining whether custom manufacturing orders can be produced and delivered by the requested date.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q12 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q12: Describe the Role of Sales and Operations Planning (S&amp;OP) in ERP.</h3>
              <p><strong>Model Answer:</strong> S&amp;OP is a monthly executive consensus process balancing unconstrained commercial demand forecasts with operational supply capacity and corporate financial targets. The approved S&amp;OP plan establishes the boundary constraints that drive the Master Production Schedule (MPS).</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q13 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q13: How do Planning Time Fences (PTFs) maintain production schedule stability?</h3>
              <p><strong>Model Answer:</strong> Planning Time Fences segment the planning horizon into: 1) Frozen Zone (zero changes allowed; production in process), 2) Slushy Zone (product mix changes allowed within locked total volume), and 3) Liquid Zone (full flexibility to alter mix and volume based on updated market forecasts).</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q14 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q14: Explain the BPR vs. Vanilla ERP Implementation Paradox.</h3>
              <p><strong>Model Answer:</strong> The paradox weighs customizing software to fit unique legacy workflows against forcing organizational processes into standard vendor best practices (Vanilla). Best practice dictates adopting vanilla workflows for commodity operational functions while engineering custom extensions only for core competitive differentiators.</p>
            </div>

            <div class="nb-card">
              <span class="nb-stamp nb-stamp--green">FAQ Q15 · 10 MARKS</span>
              <h3 style="margin-top: 8px;">Q15: What are the Primary Causes of ERP Implementation Failures?</h3>
              <p><strong>Model Answer:</strong> 1) Lack of executive sponsorship, 2) Inadequate organizational change management and end-user training, 3) Uncontrolled scope creep and excessive code customization, 4) Poor master data hygiene, and 5) Treating the initiative as an isolated IT project rather than a business transformation.</p>
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

        <!-- SECTION: PREVIOUS-YEAR QUESTIONS (Part 26) -->
        ${buildPyqSectionHtml()}

        <!-- SECTION 17: Comprehensive Assessment / Knowledge Check (Part 25) -->
        <section class="nb-section nb-quiz-section" id="sec-quiz" data-title="17. Master Knowledge Check &amp; Assessment System">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--amber">FINAL ASSESSMENT</span> 17. Master Knowledge Check &amp; MCQ Assessment System</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">🎯 Postgraduate MBA Assessment Engine</div>
            <p>
              This comprehensive assessment rigorously evaluates your mastery across all 16 modules of the ERP curriculum. It spans <strong>30 questions</strong> with balanced difficulty (Easy, Moderate, Difficult) and four cognitive tiers: <em>Recall</em>, <em>Understanding</em>, <em>Application</em>, and <em>Analysis</em>. Immediate conceptual feedback, weak-topic diagnosis, and an automated retry mode are provided.
            </p>
          </div>

          <div class="nb-quiz-container" id="erpQuizContainer">
            <div class="nb-quiz-header">
              <div>
                <span class="nb-stamp nb-stamp--green" id="quizStatusStamp">ASSESSMENT IN PROGRESS</span>
                <span class="nb-quiz-title" style="display: block; margin-top: 4px;">ERP Comprehensive Exam Check</span>
              </div>
              <div class="nb-quiz-meta">
                <span id="quizCounterText">Question 1 of 30</span> &bull;
                <span id="quizScoreText" style="font-weight: 700; color: var(--ink);">Score: 0 / 30</span>
              </div>
            </div>

            <!-- Question Navigator (1 to 30) -->
            <div class="nb-qnav" id="erpQuizNav" aria-label="Question Navigator"></div>

            <!-- Active Question Card -->
            <div class="nb-card nb-qcard" id="erpQCard">
              <div class="nb-qhead">
                <span class="nb-qnum" id="qCardNum">Question 01</span>
                <div class="nb-qtags">
                  <span class="nb-stamp nb-stamp--blue" id="qCardLevel">Understanding</span>
                  <span class="nb-stamp" id="qCardDiff">Easy</span>
                  <span class="nb-stamp nb-stamp--amber" id="qCardModule">01. Fundamentals</span>
                </div>
              </div>

              <div class="nb-qtext" id="qCardText">Loading question...</div>

              <div class="nb-qoptions" id="qCardOptions"></div>

              <div class="nb-qfeedback" id="qCardFeedback">
                <div class="nb-qfeedback__title" id="qFeedbackTitle">Feedback</div>
                <div id="qFeedbackText">Explanation text</div>
                <div style="margin-top: 8px;">
                  <a href="#" id="qFeedbackJump" style="color: var(--ink2); text-decoration: underline; font-weight: 600;">Review Module Section &rarr;</a>
                </div>
              </div>

              <div class="nb-qactions">
                <div>
                  <button type="button" class="nb-btn-nav-q" id="btnPrevQ">&larr; Previous</button>
                  <button type="button" class="nb-btn-nav-q" id="btnNextQ">Next &rarr;</button>
                </div>
                <div>
                  <button type="button" class="nb-btn-submit-q" id="btnSubmitQ" disabled>Submit Answer</button>
                  <button type="button" class="nb-btn-nav-q" id="btnShowScorecard" style="margin-left: 6px;">View Scorecard 📊</button>
                </div>
              </div>
            </div>

            <!-- Scorecard Panel -->
            <div class="nb-scorecard" id="erpScorecard">
              <div class="nb-scorecard__badge" id="scorecardBadge">Assessment Completed</div>
              <div class="nb-score-num" id="scorecardNum">0 / 30</div>
              <div class="nb-score-pct" id="scorecardPct">Overall Assessment Accuracy: 0%</div>

              <div class="nb-weak-box">
                <div class="nb-weak-title">Diagnosed Knowledge Deficits &amp; Recommended Review:</div>
                <ul class="nb-weak-list" id="scorecardWeakList"></ul>
              </div>

              <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">
                <button type="button" class="nb-btn-submit-q" id="btnRetryIncorrect" style="background: var(--amber);">Retry Incorrect Questions Only 🔄</button>
                <button type="button" class="nb-btn-nav-q" id="btnResetQuiz">Retake Full Assessment From Scratch</button>
                <button type="button" class="nb-btn-nav-q" id="btnReturnToQuestions">Return to Questions</button>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  </div>

  <!-- Pomodoro Floating Card Widget -->
  <div class="nb-timer-card" id="pomodoroCard">
    <div class="nb-timer-card__tape"></div>
    <div class="nb-timer-card__header">
      <span class="nb-timer-card__title">🍅 Study Pomodoro</span>
      <button class="nb-timer-card__close" id="pomodoroClose" aria-label="Close Timer">&times;</button>
    </div>
    <div class="nb-timer-card__module" id="pomodoroModule">Active Module: <strong>General Study</strong></div>
    <div class="nb-timer-card__time" id="pomodoroTime">25:00</div>
    <div class="nb-timer-card__controls">
      <button class="nb-tbtn nb-tbtn--go" id="pomodoroStart">Start</button>
      <button class="nb-tbtn" id="pomodoroReset">Reset</button>
    </div>
    <div class="nb-timer-card__presets">
      <button class="nb-preset-btn is-active" data-mins="25">25m Standard</button>
      <button class="nb-preset-btn" data-mins="40">40m Deep Dive / Q1</button>
      <button class="nb-preset-btn" data-mins="50">50m Master Session</button>
      <button class="nb-preset-btn" data-mins="5">5m Short Break</button>
    </div>
    <div class="nb-timer-card__stats" id="pomodoroStats">Completed sessions: 0 &bull; Total: 0 mins</div>
  </div>

  <!-- In-Page Fast Search Modal -->
  <div class="nb-search-modal" id="searchModal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 999; place-items: center;">
    <div style="background: var(--paper); border: 2px solid var(--ink); border-radius: 8px; width: 90%; max-width: 600px; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h3 style="margin: 0; font-family: var(--font-hand); font-size: 1.5rem; color: var(--ink);">Search Study Notebook</h3>
        <button id="searchClose" style="background: none; border: none; font-size: 1.4rem; cursor: pointer;">&times;</button>
      </div>
      <input type="text" id="searchInput" placeholder="Type keywords (e.g., S&OP, 3-Tier, Plossl, 5 Cs, Subway)..." style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--line); border-radius: 6px; font-family: var(--font-hand2); font-size: 1.15rem; background: var(--card); color: var(--text);">
      <div id="searchResults" style="max-height: 340px; overflow-y: auto; margin-top: 14px;"></div>
    </div>
  </div>

  <!-- Client-Side JavaScript Engine -->
  <script>
    (function() {
      const notebookSlug = 'erp';
      
      // 1. Reading Progress & Header Fill
      const bar = document.getElementById('barfill');
      const pct = document.getElementById('pct');
      window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const current = window.scrollY;
        const ratio = Math.min(100, Math.max(0, Math.round((current / total) * 100)));
        if (bar) bar.style.width = ratio + '%';
        if (pct) pct.textContent = ratio + '%';
      }, { passive: true });

      // 2. Night / Day Theme Toggle
      const themeBtn = document.getElementById('themeToggle');
      function setTheme(t) {
        document.documentElement.setAttribute('data-theme', t);
        try { localStorage.setItem('brainhub:theme', t); } catch (e) {}
        if (themeBtn) themeBtn.textContent = (t === 'dark') ? '☀️' : '🌙';
      }
      const savedTheme = localStorage.getItem('brainhub:theme') || 'light';
      setTheme(savedTheme);
      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const cur = document.documentElement.getAttribute('data-theme') || 'light';
          setTheme(cur === 'dark' ? 'light' : 'dark');
        });
      }

      // 3. Focus Mode Toggle (Part 2)
      const focusBtn = document.getElementById('toolFocus');
      function setFocusMode(on) {
        document.body.classList.toggle('is-focus', on);
        if (focusBtn) focusBtn.classList.toggle('is-active', on);
        try { localStorage.setItem('brainhub:focus:' + notebookSlug, on ? '1' : '0'); } catch (e) {}
      }
      if (focusBtn) {
        focusBtn.addEventListener('click', () => {
          const isCurrentlyFocus = document.body.classList.contains('is-focus');
          setFocusMode(!isCurrentlyFocus);
        });
      }
      if (localStorage.getItem('brainhub:focus:' + notebookSlug) === '1') {
        setFocusMode(true);
      }

      // 4. Revision Mode Toggle (Part 9)
      const revisionBtn = document.getElementById('toolRevision');
      const revisionBanner = document.getElementById('revisionBanner');
      const exitRevBtn = document.getElementById('exitRevisionBtn');
      function setRevisionMode(on) {
        document.body.classList.toggle('is-revision', on);
        if (revisionBtn) revisionBtn.classList.toggle('is-active', on);
        if (revisionBanner) revisionBanner.style.display = on ? 'flex' : 'none';
        try { localStorage.setItem('brainhub:revision:' + notebookSlug, on ? '1' : '0'); } catch (e) {}
      }
      if (revisionBtn) {
        revisionBtn.addEventListener('click', () => {
          const isCurrentlyRev = document.body.classList.contains('is-revision');
          setRevisionMode(!isCurrentlyRev);
        });
      }
      if (exitRevBtn) exitRevBtn.addEventListener('click', () => setRevisionMode(false));
      if (localStorage.getItem('brainhub:revision:' + notebookSlug) === '1') {
        setRevisionMode(true);
      }

      // 5. Sidebar Navigation & Drawer
      const menuBtn = document.getElementById('menuBtn');
      const sidebar = document.getElementById('sidebar');
      const shade = document.getElementById('shade');
      function toggleSide(open) {
        if (sidebar) sidebar.classList.toggle('is-open', open);
        if (shade) shade.classList.toggle('is-open', open);
      }
      if (menuBtn) menuBtn.addEventListener('click', () => toggleSide(true));
      if (shade) shade.addEventListener('click', () => toggleSide(false));

      // 6. Module Completion Progress Tracking
      const modStatusStorageKey = 'brainhub:progress:' + notebookSlug;
      let modStates = {};
      try {
        modStates = JSON.parse(localStorage.getItem(modStatusStorageKey) || '{}');
      } catch (e) {}

      function updateModuleUI() {
        const total = 16;
        let completeCount = 0;
        document.querySelectorAll('.nb-mod-status').forEach(el => {
          const modId = el.getAttribute('data-mod-id');
          const status = modStates[modId] || 'not_started';
          el.setAttribute('data-status', status);
          
          const icon = el.querySelector('.nb-mod-status__icon');
          const text = el.querySelector('.nb-mod-status__text');
          if (status === 'complete') {
            completeCount++;
            if (icon) icon.textContent = '✓';
            if (text) text.textContent = 'Completed';
          } else if (status === 'in_progress') {
            if (icon) icon.textContent = '◐';
            if (text) text.textContent = 'In progress';
          } else {
            if (icon) icon.textContent = '□';
            if (text) text.textContent = 'Not started';
          }

          // Sidebar tick
          const sideLink = document.querySelector('.nb-sidebar nav a[href="#' + modId + '"]');
          if (sideLink) {
            const ck = sideLink.querySelector('.nb-sidebar__ck');
            if (ck) ck.textContent = (status === 'complete') ? '✓' : '';
          }
        });

        const ratioEl = document.getElementById('nbProgressRatio');
        if (ratioEl) ratioEl.textContent = completeCount + ' / ' + total + ' modules complete';
        const sideRatioEl = document.getElementById('sideProgressRatio');
        if (sideRatioEl) sideRatioEl.textContent = completeCount + '/' + total;
      }

      document.querySelectorAll('.nb-mod-status__btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const parent = this.closest('.nb-mod-status');
          const modId = parent.getAttribute('data-mod-id');
          const cur = modStates[modId] || 'not_started';
          let next = 'in_progress';
          if (cur === 'not_started') next = 'in_progress';
          else if (cur === 'in_progress') next = 'complete';
          else if (cur === 'complete') next = 'not_started';
          
          modStates[modId] = next;
          try { localStorage.setItem(modStatusStorageKey, JSON.stringify(modStates)); } catch (e) {}
          updateModuleUI();
        });
      });
      updateModuleUI();

      // 7. Pomodoro Study Timer
      const timerBtn = document.getElementById('toolPomodoro');
      const timerCard = document.getElementById('pomodoroCard');
      const timerClose = document.getElementById('pomodoroClose');
      const timerTime = document.getElementById('pomodoroTime');
      const timerStart = document.getElementById('pomodoroStart');
      const timerReset = document.getElementById('pomodoroReset');
      const timerStats = document.getElementById('pomodoroStats');
      let timerDuration = 25 * 60;
      let timerRemaining = timerDuration;
      let timerInterval = null;
      let completedSessions = 0;

      function renderTimer() {
        const m = Math.floor(timerRemaining / 60);
        const s = timerRemaining % 60;
        if (timerTime) timerTime.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }

      function startTimer() {
        if (timerInterval) return;
        if (timerStart) {
          timerStart.textContent = 'Pause';
          timerStart.className = 'nb-tbtn nb-tbtn--pause';
        }
        timerInterval = setInterval(() => {
          if (timerRemaining > 0) {
            timerRemaining--;
            renderTimer();
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            completedSessions++;
            if (timerStart) {
              timerStart.textContent = 'Start';
              timerStart.className = 'nb-tbtn nb-tbtn--go';
            }
            if (timerStats) timerStats.textContent = 'Completed sessions: ' + completedSessions + ' • Total: ' + (completedSessions * 25) + ' mins';
            alert('🍅 Pomodoro Session Completed! Take a well-deserved study break.');
            timerRemaining = timerDuration;
            renderTimer();
          }
        }, 1000);
      }

      function pauseTimer() {
        if (!timerInterval) return;
        clearInterval(timerInterval);
        timerInterval = null;
        if (timerStart) {
          timerStart.textContent = 'Resume';
          timerStart.className = 'nb-tbtn nb-tbtn--go';
        }
      }

      if (timerBtn) {
        timerBtn.addEventListener('click', () => {
          const isOpen = timerCard && timerCard.classList.contains('is-open');
          if (timerCard) timerCard.classList.toggle('is-open', !isOpen);
          timerBtn.classList.toggle('is-active', !isOpen);
        });
      }
      if (timerClose) timerClose.addEventListener('click', () => {
        if (timerCard) timerCard.classList.remove('is-open');
        if (timerBtn) timerBtn.classList.remove('is-active');
      });

      if (timerStart) {
        timerStart.addEventListener('click', () => {
          if (timerInterval) pauseTimer();
          else startTimer();
        });
      }
      if (timerReset) {
        timerReset.addEventListener('click', () => {
          pauseTimer();
          timerRemaining = timerDuration;
          if (timerStart) {
            timerStart.textContent = 'Start';
            timerStart.className = 'nb-tbtn nb-tbtn--go';
          }
          renderTimer();
        });
      }

      document.querySelectorAll('.nb-preset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.nb-preset-btn').forEach(b => b.classList.remove('is-active'));
          this.classList.add('is-active');
          const mins = parseInt(this.getAttribute('data-mins'), 10) || 25;
          pauseTimer();
          timerDuration = mins * 60;
          timerRemaining = timerDuration;
          if (timerStart) {
            timerStart.textContent = 'Start';
            timerStart.className = 'nb-tbtn nb-tbtn--go';
          }
          renderTimer();
        });
      });

      // Global window hook for custom question timer launch
      window.startPomodoroCustom = function(mins) {
        pauseTimer();
        timerDuration = mins * 60;
        timerRemaining = timerDuration;
        if (timerStart) {
          timerStart.textContent = 'Pause';
          timerStart.className = 'nb-tbtn nb-tbtn--pause';
        }
        renderTimer();
        startTimer();
      };

      // 8. In-Page Search Engine
      const searchTrigger = document.getElementById('searchTrigger');
      const searchModal = document.getElementById('searchModal');
      const searchClose = document.getElementById('searchClose');
      const searchInput = document.getElementById('searchInput');
      const searchResults = document.getElementById('searchResults');

      const searchData = [];
      document.querySelectorAll('.nb-section').forEach(sec => {
        const id = sec.id;
        const title = (sec.getAttribute('data-title') || sec.querySelector('h2')?.textContent || id).replace(/[\n\r]+/g, ' ').trim();
        const text = sec.textContent.replace(/[\n\r]+/g, ' ').substring(0, 1500);
        searchData.push({ id, title, text });
      });

      function openSearch() {
        if (searchModal) {
          searchModal.style.display = 'grid';
          if (searchInput) {
            searchInput.value = '';
            searchInput.focus();
          }
          if (searchResults) searchResults.innerHTML = '';
        }
      }
      function closeSearch() {
        if (searchModal) searchModal.style.display = 'none';
      }

      if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
      if (searchClose) searchClose.addEventListener('click', closeSearch);

      if (searchInput) {
        searchInput.addEventListener('input', function() {
          const q = this.value.trim().toLowerCase();
          if (!q) {
            searchResults.innerHTML = '';
            return;
          }
          const matches = searchData.filter(d => d.title.toLowerCase().includes(q) || d.text.toLowerCase().includes(q));
          if (matches.length === 0) {
            searchResults.innerHTML = '<div style="padding: 12px; color: var(--pencil); font-family: var(--font-hand2);">No sections matched your query.</div>';
            return;
          }
          searchResults.innerHTML = matches.map(m => {
            return '<a href="#' + m.id + '" style="display: block; padding: 10px; border-bottom: 1px dashed var(--line); text-decoration: none; color: var(--text); border-radius: 4px;" onclick="document.getElementById(\'searchModal\').style.display=\'none\'">' +
                   '<strong style="font-family: var(--font-hand); font-size: 1.25rem; color: var(--ink);">' + m.title + '</strong>' +
                   '<p style="margin: 4px 0 0; font-size: 0.92rem; color: var(--pencil);">' + m.text.substring(0, 140) + '...</p>' +
                   '</a>';
          }).join('');
        });
      }

      // 9. Master MCQ Assessment Engine (Part 25)
      (function initMCQEngine() {
        const QUIZ_DATA = ${JSON.stringify(erpQuizQuestions)};
        const storageKey = 'brainhub:mcq:' + notebookSlug;
        
        let activeIdx = 0;
        let userAnswers = {};
        let isSubmitted = {};
        let isRetryMode = false;
        let questionPool = QUIZ_DATA.map(function(_, i) { return i; });

        // Load saved state
        try {
          const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
          if (saved.userAnswers) userAnswers = saved.userAnswers;
          if (saved.isSubmitted) isSubmitted = saved.isSubmitted;
        } catch (e) {}

        function saveState() {
          try {
            localStorage.setItem(storageKey, JSON.stringify({
              userAnswers: userAnswers,
              isSubmitted: isSubmitted,
              updatedAt: new Date().toISOString()
            }));
          } catch (e) {}
          updateHeaderScore();
        }

        function updateHeaderScore() {
          const score = getScore();
          const mcqRatioEl = document.getElementById('nbMcqRatio');
          if (mcqRatioEl) mcqRatioEl.textContent = score + ' / ' + QUIZ_DATA.length + ' mastered';
          const sideMcqEl = document.getElementById('sideMcqRatio');
          if (sideMcqEl) sideMcqEl.textContent = score + '/' + QUIZ_DATA.length;
        }

        const navEl = document.getElementById('erpQuizNav');
        const qCardEl = document.getElementById('erpQCard');
        const scorecardEl = document.getElementById('erpScorecard');
        const numEl = document.getElementById('qCardNum');
        const levelEl = document.getElementById('qCardLevel');
        const diffEl = document.getElementById('qCardDiff');
        const modEl = document.getElementById('qCardModule');
        const textEl = document.getElementById('qCardText');
        const optionsEl = document.getElementById('qCardOptions');
        const feedbackEl = document.getElementById('qCardFeedback');
        const feedbackTitle = document.getElementById('qFeedbackTitle');
        const feedbackText = document.getElementById('qFeedbackText');
        const feedbackJump = document.getElementById('qFeedbackJump');
        const submitBtn = document.getElementById('btnSubmitQ');
        const prevBtn = document.getElementById('btnPrevQ');
        const nextBtn = document.getElementById('btnNextQ');
        const showScorecardBtn = document.getElementById('btnShowScorecard');
        const counterText = document.getElementById('quizCounterText');
        const scoreText = document.getElementById('quizScoreText');

        if (!navEl || !qCardEl) return;

        function getScore() {
          let score = 0;
          QUIZ_DATA.forEach(function(q) {
            if (isSubmitted[q.id] && userAnswers[q.id] === q.correct) {
              score++;
            }
          });
          return score;
        }

        function renderNavigator() {
          navEl.innerHTML = '';
          questionPool.forEach(function(qIndex, pos) {
            const q = QUIZ_DATA[qIndex];
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'nb-qnav-btn';
            btn.textContent = (pos + 1 < 10 ? '0' : '') + (pos + 1);
            btn.title = 'Question ' + (pos + 1) + ': ' + q.level + ' (' + q.diff + ')';
            
            if (pos === activeIdx) btn.classList.add('is-current');
            if (isSubmitted[q.id]) {
              if (userAnswers[q.id] === q.correct) btn.classList.add('is-correct');
              else btn.classList.add('is-incorrect');
            } else if (userAnswers[q.id] !== undefined) {
              btn.classList.add('is-answered');
            }

            btn.addEventListener('click', function() {
              activeIdx = pos;
              renderQuestion();
            });
            navEl.appendChild(btn);
          });
        }

        function renderQuestion() {
          if (qCardEl) qCardEl.style.display = 'block';
          if (scorecardEl) scorecardEl.classList.remove('is-active');

          const qIndex = questionPool[activeIdx];
          const q = QUIZ_DATA[qIndex];
          if (!q) return;

          const qNumFormatted = (activeIdx + 1 < 10 ? '0' : '') + (activeIdx + 1);
          numEl.textContent = 'Question ' + qNumFormatted + (isRetryMode ? ' (Retry Mode)' : '');
          levelEl.textContent = q.level;
          diffEl.textContent = q.diff;
          modEl.textContent = q.modTitle;
          textEl.textContent = q.text;

          // Render Options
          optionsEl.innerHTML = '';
          const submitted = Boolean(isSubmitted[q.id]);
          const userChoice = userAnswers[q.id];

          q.options.forEach(function(optText, optIdx) {
            const optDiv = document.createElement('div');
            optDiv.className = 'nb-qopt';
            if (userChoice === optIdx) optDiv.classList.add('is-selected');

            if (submitted) {
              if (optIdx === q.correct) optDiv.classList.add('is-correct-reveal');
              else if (userChoice === optIdx) optDiv.classList.add('is-incorrect-reveal');
            }

            const keySpan = document.createElement('span');
            keySpan.className = 'nb-qopt__key';
            keySpan.textContent = ['A', 'B', 'C', 'D'][optIdx];

            const textSpan = document.createElement('span');
            textSpan.className = 'nb-qopt__text';
            textSpan.textContent = optText;

            optDiv.appendChild(keySpan);
            optDiv.appendChild(textSpan);

            if (!submitted) {
              optDiv.addEventListener('click', function() {
                userAnswers[q.id] = optIdx;
                saveState();
                renderQuestion();
              });
            }

            optionsEl.appendChild(optDiv);
          });

          // Submit button status
          if (submitted) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitted ✓';
          } else {
            submitBtn.disabled = (userChoice === undefined);
            submitBtn.textContent = 'Submit Answer';
          }

          // Feedback Box
          if (submitted) {
            const isCorrect = (userChoice === q.correct);
            feedbackEl.className = 'nb-qfeedback ' + (isCorrect ? 'is-correct' : 'is-incorrect');
            feedbackTitle.textContent = isCorrect ? '✓ Correct Concept!' : '✗ Concept Clarification:';
            feedbackText.textContent = q.explanation;
            feedbackJump.href = '#' + q.modId;
            feedbackJump.textContent = 'Review Module: ' + q.modTitle + ' →';
          } else {
            feedbackEl.className = 'nb-qfeedback';
          }

          // Prev / Next buttons
          prevBtn.disabled = (activeIdx === 0);
          nextBtn.disabled = (activeIdx === questionPool.length - 1);

          // Top status counters
          const totalQ = questionPool.length;
          counterText.textContent = 'Question ' + (activeIdx + 1) + ' of ' + totalQ;
          const currentScore = getScore();
          scoreText.textContent = 'Score: ' + currentScore + ' / ' + QUIZ_DATA.length;

          renderNavigator();
          updateHeaderScore();
        }

        submitBtn.addEventListener('click', function() {
          const qIndex = questionPool[activeIdx];
          const q = QUIZ_DATA[qIndex];
          if (userAnswers[q.id] === undefined) return;
          isSubmitted[q.id] = true;
          saveState();
          renderQuestion();
        });

        prevBtn.addEventListener('click', function() {
          if (activeIdx > 0) {
            activeIdx--;
            renderQuestion();
          }
        });

        nextBtn.addEventListener('click', function() {
          if (activeIdx < questionPool.length - 1) {
            activeIdx++;
            renderQuestion();
          } else {
            showScorecard();
          }
        });

        function showScorecard() {
          if (qCardEl) qCardEl.style.display = 'none';
          if (scorecardEl) scorecardEl.classList.add('is-active');

          const score = getScore();
          const total = QUIZ_DATA.length;
          const pct = Math.round((score / total) * 100);

          const badgeEl = document.getElementById('scorecardBadge');
          const numElScore = document.getElementById('scorecardNum');
          const pctElScore = document.getElementById('scorecardPct');
          const weakListEl = document.getElementById('scorecardWeakList');

          numElScore.textContent = score + ' / ' + total;
          pctElScore.textContent = 'Overall Assessment Accuracy: ' + pct + '%';

          badgeEl.className = 'nb-scorecard__badge ';
          if (pct >= 80) {
            badgeEl.className += 'nb-badge--excellent';
            badgeEl.textContent = '🏆 EXCELLENT MASTERY (' + pct + '%)';
          } else if (pct >= 60) {
            badgeEl.className += 'nb-badge--strong';
            badgeEl.textContent = '📘 COMPETENT — MINOR REVISION (' + pct + '%)';
          } else {
            badgeEl.className += 'nb-badge--revisit';
            badgeEl.textContent = '⚠️ REVISION REQUIRED (' + pct + '%)';
          }

          // Build weak topics list
          const weakMap = {};
          QUIZ_DATA.forEach(function(q) {
            if (isSubmitted[q.id] && userAnswers[q.id] !== q.correct) {
              if (!weakMap[q.modId]) {
                weakMap[q.modId] = { title: q.modTitle, count: 0 };
              }
              weakMap[q.modId].count++;
            }
          });

          const weakKeys = Object.keys(weakMap);
          if (weakKeys.length === 0) {
            weakListEl.innerHTML = '<li style="padding: 10px; color: var(--green); font-weight: 700; font-family: var(--font-hand2); font-size: 1.2rem;">🌟 Outstanding! Zero weak topics detected across all modules!</li>';
            document.getElementById('btnRetryIncorrect').style.display = 'none';
          } else {
            document.getElementById('btnRetryIncorrect').style.display = 'inline-block';
            weakListEl.innerHTML = weakKeys.map(function(modId) {
              const item = weakMap[modId];
              return '<li class="nb-weak-item">' +
                     '<span><strong>' + item.title + '</strong> (' + item.count + ' missed)</span>' +
                     '<a href="#' + modId + '">Jump to Module &rarr;</a>' +
                     '</li>';
            }).join('');
          }
        }

        showScorecardBtn.addEventListener('click', showScorecard);

        const returnBtn = document.getElementById('btnReturnToQuestions');
        if (returnBtn) {
          returnBtn.addEventListener('click', function() {
            renderQuestion();
          });
        }

        const retryBtn = document.getElementById('btnRetryIncorrect');
        if (retryBtn) {
          retryBtn.addEventListener('click', function() {
            const incorrectIndices = [];
            QUIZ_DATA.forEach(function(q, idx) {
              if (isSubmitted[q.id] && userAnswers[q.id] !== q.correct) {
                incorrectIndices.push(idx);
                delete isSubmitted[q.id];
                delete userAnswers[q.id];
              }
            });
            if (incorrectIndices.length > 0) {
              isRetryMode = true;
              questionPool = incorrectIndices;
              activeIdx = 0;
              saveState();
              renderQuestion();
            }
          });
        }

        const resetBtn = document.getElementById('btnResetQuiz');
        if (resetBtn) {
          resetBtn.addEventListener('click', function() {
            if (confirm('Reset all assessment answers and retake quiz from scratch?')) {
              userAnswers = {};
              isSubmitted = {};
              isRetryMode = false;
              questionPool = QUIZ_DATA.map(function(_, i) { return i; });
              activeIdx = 0;
              try { localStorage.removeItem(storageKey); } catch (e) {}
              renderQuestion();
            }
          });
        }

        // Initialize question display and header score
        renderQuestion();
        updateHeaderScore();
      })();

      // 10. Previous-Year Questions (PYQ) Practice Engine (Part 26)
      (function initPYQEngine() {
        const pyqStorageKey = 'brainhub:pyq:' + notebookSlug;
        let practicedQuestions = {};

        try {
          const saved = JSON.parse(localStorage.getItem(pyqStorageKey) || '{}');
          if (saved && typeof saved === 'object') practicedQuestions = saved;
        } catch (e) {}

        function savePyqState() {
          try {
            localStorage.setItem(pyqStorageKey, JSON.stringify(practicedQuestions));
          } catch (e) {}
          updatePyqProgress();
        }

        function updatePyqProgress() {
          const totalPyqs = 12; // 4 in 2025, 4 in 2024, 4 in 2023
          const practicedCount = Object.keys(practicedQuestions).filter(k => practicedQuestions[k]).length;
          
          const ratioEl = document.getElementById('nbPyqRatio');
          if (ratioEl) ratioEl.textContent = practicedCount + ' / ' + totalPyqs + ' practiced';
          const sideEl = document.getElementById('sidePyqRatio');
          if (sideEl) sideEl.textContent = practicedCount + '/' + totalPyqs;
          const sideNavEl = document.getElementById('sidebarPyqStatus');
          if (sideNavEl) sideNavEl.textContent = practicedCount + '/' + totalPyqs;

          document.querySelectorAll('.pyq-practice-toggle').forEach(btn => {
            const qId = btn.getAttribute('data-pyq-id');
            const itemEl = document.getElementById('pyq-q-' + qId);
            const isDone = Boolean(practicedQuestions[qId]);
            const icon = btn.querySelector('.pyq-check-icon');
            const label = btn.querySelector('.pyq-check-label');

            btn.setAttribute('aria-pressed', isDone ? 'true' : 'false');
            if (isDone) {
              btn.classList.add('is-practiced');
              if (icon) icon.textContent = '☑';
              if (label) label.textContent = 'Practiced ✓';
              if (itemEl) itemEl.classList.add('is-practiced');
            } else {
              btn.classList.remove('is-practiced');
              if (icon) icon.textContent = '□';
              if (label) label.textContent = 'Mark Practiced';
              if (itemEl) itemEl.classList.remove('is-practiced');
            }
          });
        }

        // Toggle button event listeners
        document.querySelectorAll('.pyq-practice-toggle').forEach(btn => {
          btn.addEventListener('click', function() {
            const qId = this.getAttribute('data-pyq-id');
            practicedQuestions[qId] = !practicedQuestions[qId];
            savePyqState();
          });
        });

        // Year Tab Switching
        document.querySelectorAll('.pyq-year-tab-btn').forEach(tabBtn => {
          tabBtn.addEventListener('click', function() {
            const targetYear = this.getAttribute('data-target-year');
            document.querySelectorAll('.pyq-year-tab-btn').forEach(b => b.classList.remove('is-active'));
            this.classList.add('is-active');

            document.querySelectorAll('.nb-pyq-paper').forEach(paper => {
              if (paper.id === 'pyq-paper-' + targetYear) {
                paper.style.display = 'block';
                paper.classList.add('is-active');
              } else {
                paper.style.display = 'none';
                paper.classList.remove('is-active');
              }
            });
          });
        });

        // Timed Exam Practice in Pomodoro Widget
        document.querySelectorAll('.pyq-timer-btn').forEach(timerBtn => {
          timerBtn.addEventListener('click', function() {
            const minutes = parseInt(this.getAttribute('data-time'), 10) || 25;
            const qTitle = this.getAttribute('data-q-title') || 'PYQ Exam Practice';
            
            const pCard = document.getElementById('pomodoroCard');
            const pBtn = document.getElementById('toolPomodoro');
            const modEl = document.getElementById('pomodoroModule');
            
            if (pCard && pBtn) {
              pCard.classList.add('is-open');
              pBtn.classList.add('is-active');
              if (modEl) {
                modEl.innerHTML = 'Practicing PYQ: <strong>' + qTitle + '</strong>';
              }
              if (typeof window.startPomodoroCustom === 'function') {
                window.startPomodoroCustom(minutes);
              }
            }
          });
        });

        // Initial progress update
        updatePyqProgress();
      })();

      // 11. Keyboard Shortcuts: 'F' (Focus), 'R' (Revision), '/' (Search), 'Escape'
      document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
          e.preventDefault();
          openSearch();
        } else if (e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          const isCurrent = document.body.classList.contains('is-focus');
          setFocusMode(!isCurrent);
        } else if (e.key === 'r' || e.key === 'R') {
          e.preventDefault();
          const isCurrent = document.body.classList.contains('is-revision');
          setRevisionMode(!isCurrent);
        } else if (e.key === 'Escape') {
          closeSearch();
          toggleSide(false);
          if (timerCard) timerCard.classList.remove('is-open');
          if (timerBtn) timerBtn.classList.remove('is-active');
        }
      });

    })();
  </script>
</body>
</html>`;

// Programmatically enrich all 16 module sections with interactive module status bars and data-title
const finalHtml = html.replace(
  /<section class="nb-section" id="([^"]+)">\s*<h2 class="nb-sec-title">(<span[^>]*>[^<]+<\/span>)\s*([^<]+)<\/h2>/g,
  (match, secId, stamp, title) => {
    const cleanTitle = title.replace(/&amp;/g, '&').trim();
    return `<section class="nb-section" id="${secId}" data-title="${cleanTitle}">\n          <h2 class="nb-sec-title">${stamp} ${title}</h2>\n          \n          <div class="nb-mod-status" data-mod-id="${secId}">\n            <span class="nb-mod-status__prompt">Module Status:</span>\n            <button class="nb-mod-status__btn" type="button" aria-label="Toggle module completion status">\n              <span class="nb-mod-status__icon">□</span>\n              <span class="nb-mod-status__text">Not started</span>\n            </button>\n          </div>`;
  }
);

// Verify Master Benchmark remains untouched
if (fs.existsSync(BENCHMARK_HTML)) {
  const currentBenchmarkBytes = fs.statSync(BENCHMARK_HTML).size;
  if (currentBenchmarkBytes !== 226460) {
    console.error(`FATAL ERROR: Benchmark file tampered! Expected 226460, found ${currentBenchmarkBytes}`);
    process.exit(1);
  }
}

// Write HTML
fs.writeFileSync(TARGET_HTML, finalHtml, 'utf8');
console.log(`✔ Generated Template 2.0.1 Paper Edition ERP Notebook: ${TARGET_HTML} (${finalHtml.length} bytes)`);

// Update Target Metadata
const now = new Date().toISOString().split('T')[0];
const targetMetadata = {
  title: "ERP Business Applications · Master MBA Study Guide & Exam Blueprint",
  slug: "erp",
  subject: "Operations",
  category: "Enterprise Systems",
  description: "Comprehensive postgraduate MBA study guide and exam blueprint covering ERP business and technology strategy, 3-tier architecture, the Five Pillars of ERP, Value Matrix Analysis, Plossl manufacturing theory, Master Data, Subway franchise case study, WeSchool 2023-2025 authentic PYQs, and 100% model FAQ exam answers.",
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
    "Altekar",
    "WeSchool",
    "PYQ"
  ],
  status: "published",
  source: "curriculum/weschool-term4-altekar",
  version: "2.0.1",
  templateVersion: "2.0.1",
  updated: now,
  updatedAt: now,
  featured: true,
  readTimeMinutes: 52,
  questionsCount: 18,
  pyqCount: 12,
  courseContext: {
    course: "ERP Business Applications (OPN 419)",
    institution: "WeSchool (Welingkar)",
    trimester: "Trimester IV",
    instructor: "Dr. Rahul V. Altekar (Director Digital Supply Chain Solutions, SAP SE)",
    outcomes: ["CO1", "CO2", "CO3", "CO4", "CO5", "CO6"],
    examPapers: ["2023 End-Term", "2024 End-Term", "2025 End-Term"]
  }
};
fs.writeFileSync(TARGET_META, JSON.stringify(targetMetadata, null, 2), 'utf8');
console.log(`✔ Updated companion metadata: ${TARGET_META} (status: published, slug: erp, version: 2.0.1)`);

// Update Benchmark Metadata (Archived, preserve benchmark file intact)
if (fs.existsSync(BENCHMARK_META)) {
  const bm = JSON.parse(fs.readFileSync(BENCHMARK_META, 'utf8'));
  bm.status = 'archived';
  bm.slug = 'erp-benchmark-v1';
  fs.writeFileSync(BENCHMARK_META, JSON.stringify(bm, null, 2), 'utf8');
  console.log(`✔ Updated benchmark metadata: ${BENCHMARK_META} (status: archived, slug: erp-benchmark-v1)`);
}

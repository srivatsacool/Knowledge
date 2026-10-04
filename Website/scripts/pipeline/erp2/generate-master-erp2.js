/**
 * generate-master-erp2.js — Master Builder for ERP Business Applications Notebook 2.0.
 * Rebuilt from scratch using the beloved Paper Edition OS architecture of Notebook 1.0.
 * Seamless narrative flow, 16 Master Chapters, Hand-drawn Vector SVG Cards,
 * Dimension Comparison Tables, Mathematical Formula Boxes, Real-World Case Studies,
 * and 100% Authentic PYQ Model Exam Solutions.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../../..');
const OUT = path.join(ROOT, 'Operations', 'ERP_Business_Applications_Notebook_2.0.html');
const META_OUT = path.join(ROOT, 'Operations', 'ERP_Business_Applications_Notebook_2.0.meta.json');

const { pyqAnswers } = require('./pyq-answers');
const D = require('./diagrams');

console.log('Compiling ERP Business Applications · Master MBA Study Guide & Exam Blueprint (Edition 2.0)...');

// Helper to escape text
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Read the stylesheet
const css = fs.readFileSync(path.join(__dirname, 'notebook.css'), 'utf8');

// Build the HTML
const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>ERP Business Applications · Master MBA Study Guide &amp; Exam Blueprint (Edition 2.0)</title>
  <meta name="description" content="Comprehensive postgraduate MBA study guide and exam blueprint covering ERP business and technology strategy, 3-tier architecture, the Five Pillars of ERP, Value Matrix Analysis, Plossl manufacturing theory, Master Data, Subway franchise case study, and 100% model exam answers for 2023, 2024, and 2025 papers.">
  <meta name="keywords" content="Operations, ERP, Enterprise Systems, BPR, Supply Chain, Value Matrix, Plossl, Master Data, MBA Curriculum, Altekar, WeSchool">
  <meta name="author" content="Brain Knowledge Hub / Rahul Altekar Curriculum">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%93%92%3C/text%3E%3C/svg%3E">

  <!-- Handwritten & Academic Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=STIX+Two+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

  <style>
${css}

    /* Additional Paper OS Classes */
    .nb-topbar {
      position: fixed; top: 0; left: 0; right: 0; height: var(--bar, 56px);
      background: var(--paper); border-bottom: 2px solid var(--line);
      z-index: 50; box-shadow: 0 2px 0 var(--rule);
    }
    .nb-topbar__inner { display: flex; align-items: center; justify-content: space-between; height: 100%; padding: 0 1rem; gap: 0.75rem; }
    .nb-topbar__brand { font-family: var(--hand); font-weight: 700; font-size: 1.55rem; color: var(--ink); white-space: nowrap; line-height: 1; text-decoration: none; }
    .nb-topbar__crumb {
      flex: 1; min-width: 0; font-family: var(--hand2); font-size: 1.05rem; color: var(--pencil);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-left: 0.75rem; border-left: 2px dotted var(--line);
    }
    .nb-topbar__actions { display: flex; align-items: center; gap: 0.4rem; }
    
    .nb-btn-top {
      min-width: 38px; height: 38px; border: 0; background: transparent;
      color: var(--text); border-radius: 8px; font-size: 1.15rem; cursor: pointer;
      display: inline-flex; align-items: center; justify-content: center;
    }
    .nb-btn-top:hover { background: var(--hl); }
    .nb-btn-search {
      display: inline-flex; align-items: center; gap: 0.4rem; height: 36px; padding: 0 0.75rem;
      background: var(--card); border: 1.5px solid var(--line); border-radius: 6px;
      font-family: var(--hand2); font-size: 1.02rem; color: var(--text); cursor: pointer;
    }
    .nb-btn-search:hover { background: var(--hl); }
    .nb-btn-search kbd { font-family: var(--serif); font-size: 0.75rem; padding: 0.1rem 0.35rem; border: 1px solid var(--line); border-radius: 4px; background: var(--paper); }
    .nb-topbar__pct { font-family: var(--hand); font-weight: 700; font-size: 1.35rem; color: var(--ink); min-width: 3.2em; text-align: right; }
    .nb-topbar__bar { height: 4px; background: var(--rule); }
    .nb-topbar__bar i { display: block; height: 100%; width: 0%; background: linear-gradient(90deg, var(--green), var(--ink2)); transition: width 0.3s; }

    /* Layout & Sidebar */
    .nb-layout { display: flex; padding-top: var(--bar, 56px); }
    .nb-sidebar {
      position: fixed; top: var(--bar, 56px); bottom: 0; left: 0; width: 310px;
      background: var(--paper); border-right: 2px solid var(--line); overflow-y: auto;
      padding: 1.25rem 1rem 2rem; z-index: 40; transform: translateX(-102%); transition: transform 0.25s ease;
      background-image: repeating-linear-gradient(transparent 0 29px, var(--rule) 29px 30px);
    }
    .nb-sidebar.is-open { transform: none; box-shadow: 4px 0 16px rgba(0, 0, 0, 0.25); }
    .nb-sidebar-shade { position: fixed; inset: 0; background: rgba(10, 12, 18, 0.45); z-index: 35; display: none; }
    .nb-sidebar-shade.is-on { display: block; }

    .nb-sidebar h2 { font-family: var(--hand); font-size: 1.85rem; color: var(--ink); margin: 0 0 4px; }
    .nb-sidebar__grp { font-family: var(--hand2); color: var(--pencil); font-size: 0.98rem; margin: 14px 0 4px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
    .nb-sidebar nav a {
      display: flex; align-items: center; gap: 8px; min-height: 38px; padding: 4px 8px;
      border-radius: 6px; color: var(--text); text-decoration: none; line-height: 1.25; margin-bottom: 2px;
      font-size: 0.92rem;
    }
    .nb-sidebar nav a:hover { background: var(--hl); }
    .nb-sidebar nav a.is-active { background: var(--card); box-shadow: var(--shadow-card); font-weight: 600; color: var(--ink); }
    .nb-sidebar__chip { width: 7px; border-radius: 3px; background: var(--ink); min-height: 22px; flex-shrink: 0; }
    .nb-sidebar__label { flex: 1; }
    .nb-sidebar__ck {
      width: 18px; height: 18px; border: 2px solid var(--pencil); border-radius: 4px;
      display: grid; place-items: center; font-size: 0.8rem; color: var(--green); font-weight: 700; flex-shrink: 0;
    }
    .nb-sidebar nav a.is-done .nb-sidebar__ck::after { content: "✓"; }

    .nb-main { flex: 1; min-width: 0; padding: 22px 14px 60px; }

    @media (min-width: 1120px) {
      .nb-sidebar { transform: none; width: 310px; }
      #menuBtn { display: none; }
      .nb-main { margin-left: 310px; }
    }

    /* Paper Canvas Sheet */
    .nb-sheet {
      position: relative; max-width: 980px; margin: 0 auto;
      background: var(--paper); border-radius: 6px 14px 14px 6px; box-shadow: var(--shadow-sheet);
      padding: 30px 24px 44px 48px;
      background-image: 
        linear-gradient(90deg, transparent 32px, var(--margin) 32px, var(--margin) 34px, transparent 34px),
        repeating-linear-gradient(transparent 0 29px, var(--rule) 29px 30px);
      background-position: 0 0, 0 54px;
    }

    @media (min-width: 768px) {
      .nb-sheet {
        padding: 40px 60px 50px 100px;
        background-image: 
          linear-gradient(90deg, transparent 72px, var(--margin) 72px, var(--margin) 74px, transparent 74px),
          repeating-linear-gradient(transparent 0 29px, var(--rule) 29px 30px);
      }
      .nb-sheet::before {
        content: ""; position: absolute; left: -15px; top: 22px; bottom: 22px; width: 34px;
        background: radial-gradient(circle at 17px 15px, var(--desk) 0 6.5px, transparent 7.5px) 0 0/34px 34px repeat-y;
        pointer-events: none; z-index: 2;
      }
    }

    .nb-tabflag {
      position: absolute; top: -14px; right: 28px; background: var(--ink); color: #fff;
      font-family: var(--ui); font-size: 11px; font-weight: 800; letter-spacing: 0.12em;
      padding: 5px 14px; border-radius: 4px 4px 0 0; box-shadow: 0 -2px 6px rgba(0,0,0,0.15);
    }

    .nb-sec-title {
      font-family: var(--serif); font-size: clamp(1.8rem, 3.2vw, 2.35rem); color: var(--ink);
      margin: 36px 0 12px; font-weight: 700; border-bottom: 2px solid var(--ink); padding-bottom: 6px;
      display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
    }

    .nb-stamps { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }

    /* Tables */
    .nb-table-wrap { overflow-x: auto; margin: 20px 0; border: 1.5px solid var(--line); border-radius: 8px; background: var(--card); box-shadow: var(--shadow-card); }
    .nb-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; }
    .nb-table th, .nb-table td { padding: 10px 14px; border: 1px solid var(--line); vertical-align: top; }
    .nb-table thead th { background: var(--desk); font-family: var(--hand); font-size: 1.35rem; color: var(--ink); font-weight: 700; }
    .nb-table tbody tr:hover { background: var(--hl); }

    /* Search Modal */
    .nb-search-modal { position: fixed; inset: 0; background: rgba(10, 12, 18, 0.55); z-index: 100; display: none; align-items: flex-start; justify-content: center; padding-top: 10vh; backdrop-filter: blur(2px); }
    .nb-search-modal.is-active { display: flex; }
    .nb-search-card { background: var(--paper); border: 2px solid var(--ink); border-radius: 12px; width: min(92vw, 580px); box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35); padding: 18px; }
    .nb-search-input { width: 100%; padding: 12px; font-family: var(--hand2); font-size: 1.25rem; border: 2px solid var(--line); border-radius: 6px; background: var(--card); color: var(--text); outline: none; }
    .nb-search-results { margin-top: 12px; max-height: 320px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; }
    .nb-search-item { padding: 8px 12px; border-radius: 6px; background: var(--card); border: 1px solid var(--line); color: var(--text); text-decoration: none; }
    .nb-search-item:hover { background: var(--hl); }
    .nb-search-item b { font-family: var(--hand); font-size: 1.25rem; color: var(--ink); display: block; }
  </style>
</head>
<body>

  <!-- Top Global Navigation Bar -->
  <header class="nb-topbar">
    <div class="nb-topbar__inner">
      <button class="nb-btn-top" id="menuBtn" aria-label="Open Notebook Index">☰</button>
      <a href="../index.html" class="nb-topbar__brand">📖 Brain Hub</a>
      <div class="nb-topbar__crumb">Operations / <strong>ERP Business Applications · Master MBA Study Guide &amp; Exam Blueprint</strong></div>
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
          <span class="nb-sidebar__label">01. ERP Fundamentals &amp; Strategy</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-evolution">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">02. Historical Evolution Continuum</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-systemtypes">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">03. System Types &amp; Decision Logic</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-valuematrix">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">04. Strategic Value Matrix</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-pillars">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">05. The Five Pillars of ERP</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-governance">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">06. 5 Cs Governance Framework</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-architecture">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">07. 3-Tier Architecture Selection</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-plossl">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">08. Plossl Manufacturing Flow Theory</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-codp">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">09. Decoupling Points (CODP) &amp; S&amp;OP</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-manufacturing">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">010. Manufacturing Modules &amp; MRP</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-o2c">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">011. Order-to-Cash (O2C) &amp; ATP</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-p2p">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">012. Procure-to-Pay (P2P) &amp; 3-Way Match</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-bpr">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">013. BPR vs ERP Implementation Sequence</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-methodology">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">014. Implementation Approaches &amp; Change</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-cases">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">015. Specialized Real-World Cases</span>
          <span class="nb-sidebar__ck"></span>
        </a>
        <a href="#sec-exam-answers">
          <span class="nb-sidebar__chip"></span>
          <span class="nb-sidebar__label">016. Complete Authentic Model Answers</span>
          <span class="nb-sidebar__ck"></span>
        </a>
      </nav>
    </aside>

    <!-- Main Reading Content Canvas -->
    <main class="nb-main">
      <div class="nb-sheet" id="notebookSheet">
        
        <div class="nb-tabflag">EXAM BLUEPRINT 2.0</div>

        <!-- Section 0: Cover Header -->
        <header class="nb-cover" id="sec-cover">
          <div class="nb-stamps">
            <span class="nb-stamp nb-stamp--blue">Master Notebook 2.0</span>
            <span class="nb-stamp nb-stamp--green">Operations &amp; Analytics</span>
            <span class="nb-stamp nb-stamp--amber">MBA Elective</span>
            <span class="nb-stamp nb-stamp--red">100% PYQ Grounded</span>
          </div>

          <h1 style="font-family: var(--serif); font-size: clamp(2.4rem, 5vw, 3.8rem); line-height: 1.05; color: var(--ink); margin: 10px 0 6px;">ERP Business Applications</h1>
          <p style="font-family: var(--hand2); font-size: 1.35rem; color: var(--pencil); margin-top: 0;">
            <em>"Enterprise Integration, 3-Tier Architecture, The Five Pillars, Value Matrix Analysis, Plossl Manufacturing Flow Theory &amp; 100% Model Exam Solutions"</em>
          </p>

          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">📖 Academic Syllabus Grounding &amp; Real-World Synthesis</div>
            <p>
              Course Curriculum: <strong>Prof. Rahul V. Altekar</strong> (<em>Enterprise Wide Resource Planning: Theory &amp; Practice</em>, PHI Learning / Prentice Hall) &bull; WeSchool PGDM (Research &amp; Business Analytics), Trimester IV.<br>
              Direct alignment with Course Outcomes: <span class="nb-hl nb-hl--yellow">CO1 (Process &amp; System Integration)</span>, <span class="nb-hl nb-hl--green">CO2 (Implementation Strategy &amp; Business Value)</span>, and <span class="nb-hl nb-hl--pink">CO3 (BPR &amp; Reengineered Operations Governance)</span>.<br>
              All 12 authentic exam questions from 2023, 2024, and 2025 papers synthesized with full written model solutions.
            </p>
          </div>
        </header>

        <!-- SECTION 01: ERP Fundamentals & Business Strategy Reframe -->
        <section class="nb-section" id="sec-fundamentals">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 01</span> ERP Fundamentals &amp; Strategic Reframe</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">Core Exam Thesis (All Q1 Cases)</div>
            <p><strong>Is ERP a Software/Technology Strategy or a Business Strategy?</strong><br>
            Axiom: <span class="nb-hl nb-hl--yellow">ERP is fundamentally a Business Management Philosophy and Strategy enabled by technology, NOT a software installation project.</span> Treating ERP merely as an IT computerization project is the single greatest cause of multi-million dollar corporate implementation disaster.</p>
          </div>

          <p>
            <strong>Enterprise Resource Planning (ERP)</strong> is an enterprise-wide management system that orchestrates cross-functional operational workflows across an entire organization through a single unified database. Prior to ERP, organizations operated as disconnected <em>"Islands of Information"</em>: Sales operated local CRM spreadsheets, Manufacturing ran isolated shop-floor schedulers, Warehouses maintained standalone inventory cards, and Finance struggled through multi-week month-end reconciliations via manual journal vouchers.
          </p>

          <p>
            In Prof. Rahul V. Altekar's authoritative curriculum, ERP is defined through <strong>Three Definitive Concept Statements</strong>:
          </p>
          <ol style="line-height: 1.8; padding-left: 24px;">
            <li><strong>Management Philosophy:</strong> It is a <mark>planning methodology or philosophy</mark> that is based on the seamless integration of all the business processes of an enterprise.</li>
            <li><strong>Integrated Software Suite:</strong> It is a <mark>set of software</mark> covering major business areas like finance, logistics, sales, materials, manufacturing, and distribution, all so tightly integrated with one another that <mark>any business activity recorded at one place is immediately reflected in all other places</mark>.</li>
            <li><strong>Fusion of IT and Business:</strong> It is the <mark>finest expression of the inseparability of Info-tech and business</mark> — an enterprise-wide system with enabling technology and an effective managerial tool for integrating all levels and improving reportability.</li>
          </ol>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 SYSTEM BOUNDARY &amp; INTEGRATION ENGINE</div>
            <p style="font-family: var(--hand2); color: var(--pencil); margin-top:0;">Hand-drawn vector blueprint of the organizational ERP boundary and closed-loop feedback transformation engine:</p>
            ${D.oneSystem}
          </div>

          <p>
            <strong>The "Performance vs. Perceptions" Paradox:</strong> In traditional fragmented companies, departmental KPIs actively incentivize siloed behavior. Procurement managers perceive high efficiency by ordering raw materials in massive bulk quantities to achieve favorable purchase-price variances (PPV). However, this creates inventory holding costs, factory floor congestion, and scrap from shelf-life expiration. Enterprise Performance drops while departmental Perception is artificially high. ERP eliminates this friction by measuring global value streams (Order-to-Cash, Procure-to-Pay).
          </p>

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

          <div class="nb-sticky nb-sticky--pink">
            <div class="nb-sticky__title">⚠️ Faculty Exam Trap Alert</div>
            <p>When answering case studies (Ms. Deepika in Pharma, Ms. Aishwarya in Automotive, Ms. Vijaya Loki in Chemicals), explicitly cite Dr. Altekar's <strong>Faculty Myths #3 &amp; #4</strong>: <em>"ERP is a software system"</em> and <em>"ERP is a computerization project of the company"</em> are destructive myths. Frame ERP as an enterprise business transformation!</p>
          </div>
        </section>

        <!-- SECTION 02: Historical Evolution Continuum -->
        <section class="nb-section" id="sec-evolution">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 02</span> Historical Evolution: From ROP to Autonomous Cloud ERP</h2>
          
          <div class="nb-sticky nb-sticky--green">
            <div class="nb-sticky__title">The 6-Stage Evolution Continuum</div>
            <p><strong>Exact Faculty Evolution Sequence:</strong><br>
            <span class="nb-hl nb-hl--yellow">SIC &rarr; MRP &rarr; MRP-II &rarr; ERP &rarr; E-ERP &rarr; SCM</span><br>
            Each epoch emerged as manufacturing complexity expanded from simple inventory buffering to global multi-tier supply network synchronization.</p>
          </div>

          <p>
            Enterprise systems did not emerge overnight; they evolved through six distinct historical epochs in response to expanding supply chain complexity and computational capabilities:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 EVOLUTIONARY TIMELINE OF ENTERPRISE PLANNING</div>
            ${D.evolution}
          </div>

          <p>
            <strong>The Critical Breakthrough: Dependent vs. Independent Demand:</strong>
            Prior to the 1970s, factories treated all inventory as independent. Joseph Orlicky recognized that while finished goods demand (automobiles, computers) is <em>independent</em> and driven by market forecasts, demand for component parts (tires, spark plugs, microchips) is strictly <em>dependent</em> on the production schedule of the parent item. Applying statistical Reorder Points (ROP) to dependent components caused catastrophic shortages during production peaks and inventory gluts during changeovers. MRP solved this through <strong>Bill of Materials (BOM) explosion</strong>.
          </p>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Era</th><th>System Paradigm</th><th>Core Operational Focus</th><th>Technological Architecture</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1960s</strong></td>
                  <td><strong>Scientific Inventory Control (SIC)</strong></td>
                  <td>Statistical reorder point (ROP), economic order quantity (EOQ) lot sizing.</td>
                  <td>Mainframe batch punchcards, sequential magnetic tapes.</td>
                </tr>
                <tr>
                  <td><strong>1970s</strong></td>
                  <td><strong>Material Requirements Planning (MRP)</strong></td>
                  <td>Dependent demand BOM explosion, time-phased component gross-to-net scheduling.</td>
                  <td>Centralized corporate mainframes, flat-file record databases.</td>
                </tr>
                <tr>
                  <td><strong>1980s</strong></td>
                  <td><strong>Manufacturing Resource Planning (MRP-II)</strong></td>
                  <td>Closed-loop capacity planning (RCCP, CRP), shop-floor routing, financial ledger integration.</td>
                  <td>Minicomputers, early relational database engines.</td>
                </tr>
                <tr>
                  <td><strong>1990s</strong></td>
                  <td><strong>Enterprise Resource Planning (ERP)</strong></td>
                  <td>Total cross-functional integration: P2P, O2C, HR, Plant Maintenance, General Ledger.</td>
                  <td>3-tier Client/Server, SAP R/3, Oracle Applications.</td>
                </tr>
                <tr>
                  <td><strong>2000s</strong></td>
                  <td><strong>Extended ERP (E-ERP)</strong></td>
                  <td>Web-enabled portals, customer relationship management (CRM), supplier relationship management (SRM).</td>
                  <td>Internet protocols, early web services.</td>
                </tr>
                <tr>
                  <td><strong>2010s+</strong></td>
                  <td><strong>Supply Chain Management (SCM) &amp; Cloud</strong></td>
                  <td>Multi-tier collaborative synchronization, real-time in-memory analytics (SAP S/4HANA), AI forecasting.</td>
                  <td>Multi-tenant Cloud SaaS, microservices, mobile UX.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 03: System Types & Decision Architecture -->
        <section class="nb-section" id="sec-systemtypes">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 03</span> System Types &amp; Decision Architecture</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">The Crucial Faculty Distinction</div>
            <p><strong>Connected vs. Integrated vs. Synchronized Systems:</strong><br>
            &bull; <strong>Connected:</strong> Data focused. Common decision-making is a <span class="nb-hl nb-hl--yellow">Choice</span>.<br>
            &bull; <strong>Integrated:</strong> Information focused. Common decision-making is <span class="nb-hl nb-hl--green">Done by the System</span> via embedded best practices.<br>
            &bull; <strong>Synchronized:</strong> Knowledge focused. Autonomous collaborative alignment across the extended enterprise.</p>
          </div>

          <p>
            A cornerstone concept in Dr. Altekar's framework is distinguishing between <em>Connected</em> and <em>Integrated</em> systems. Many business managers mistakenly assume that because departments share files over a local area network or cloud drive, they have an integrated system. In reality, they merely have a <strong>Connected</strong> system.
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 SYSTEM TYPES LADDER: FROM DATA PIPES TO SYSTEM GOVERNANCE</div>
            ${D.sysTypes}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>System Type</th><th>Primary Focus</th><th>Decision-Making Architecture</th><th>Operational Manifestation</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Connected</strong></td>
                  <td>Data Focused</td>
                  <td>Common decision-making is <strong>Choice</strong></td>
                  <td>Departments share raw data (e.g. shared folders, data lakes), but planning logic remains fragmented. Sales sees inventory numbers, but independently chooses to book an order without checking machine capacity.</td>
                </tr>
                <tr>
                  <td><strong>Integrated</strong></td>
                  <td>Information Focused</td>
                  <td>Common decision-making is <strong>Done by the System</strong></td>
                  <td>Data is harmonized into unified business information. Business logic is embedded into the software engine: the system checks rough-cut capacity, validates customer credit, reserves stock, and schedules production automatically.</td>
                </tr>
                <tr>
                  <td><strong>Synchronized</strong></td>
                  <td>Knowledge Focused</td>
                  <td>Autonomous Collaborative Alignment</td>
                  <td>Real-time knowledge flows across multi-tier supplier and distributor ecosystems, dynamically synchronizing partner actions without human manual handoffs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 04: The Strategic Value Matrix Across Decades -->
        <section class="nb-section" id="sec-valuematrix">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 04</span> The Strategic Value Matrix Across Decades</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">Strategic Law of IT Alignment</div>
            <p><strong>IT Strategy is a Dependent Variable of Business Focus:</strong><br>
            Each decade redefined the market entry ticket and the rules of market leadership. If an enterprise competes on Service &amp; Agility in 2026 while running 1980s-era standalone MRP packages, a fatal strategic mismatch occurs.</p>
          </div>

          <p>
            Dr. Altekar's whiteboard <strong>Value Matrix</strong> illustrates how corporate manufacturing models and IT architectures evolved to mirror shifting macroeconomic competitive priorities:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 THE STRATEGIC VALUE MATRIX (Decade &times; Focus &times; System &times; IT Strategy)</div>
            ${D.valueMatrix}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Decade</th><th>Competitive Focus</th><th>Manufacturing Philosophy</th><th>IT Strategy</th><th>Market Winner Driver</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1970s</strong></td>
                  <td><strong>Production Capacity</strong></td>
                  <td>Ford / Mass Production System (MPS / FPS)</td>
                  <td>Scientific Inventory Control (SIC)</td>
                  <td>High Capacity Production (HCP): Ability to manufacture at scale.</td>
                </tr>
                <tr>
                  <td><strong>1980s</strong></td>
                  <td><strong>Cost Reduction</strong></td>
                  <td>Toyota Production System (TPS / Lean)</td>
                  <td>Material Requirements Planning (MRP)</td>
                  <td>Lowest Unit Cost through waste reduction and inventory compression.</td>
                </tr>
                <tr>
                  <td><strong>1990s</strong></td>
                  <td><strong>Customer &amp; Quality</strong></td>
                  <td>Assemble-to-Order (ATO / Dell DPS)</td>
                  <td>Manufacturing Resource Planning (MRP-II)</td>
                  <td>High Quality (Q) and rapid configuration flexibility.</td>
                </tr>
                <tr>
                  <td><strong>2000s+</strong></td>
                  <td><strong>Service &amp; Agility</strong></td>
                  <td>Synchronized Enterprise Network</td>
                  <td>Enterprise Resource Planning (ERP)</td>
                  <td>Guaranteed Delivery Reliability (D) and real-time responsiveness.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 05: The Conceptual Model: The Five Pillars of ERP -->
        <section class="nb-section" id="sec-pillars">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 05</span> The Conceptual Model: The Five Pillars of ERP</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">FAQ Q2 Core Framework</div>
            <p><strong>The Five Pillars Conceptual Model:</strong><br>
            ERP is not a technical server diagram; it is an integrated business architecture resting upon 5 structural pillars anchored in the bedrock of <span class="nb-hl nb-hl--yellow">Customer Focus, Minimal Waste, and Value Creation</span>.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 THE FIVE PILLARS CONCEPTUAL TEMPLE</div>
            ${D.pillars}
          </div>

          <p>
            The Five Pillars represent the structural foundation required to unlock the full commercial promise of ERP:
          </p>
          <ul style="line-height: 1.8; padding-left: 24px;">
            <li><strong>Pillar 1: Process-Based Flat Organization:</strong> Dismantles vertical functional hierarchies in favor of horizontal, cross-functional value-creating streams (Order-to-Cash, Procure-to-Pay). Approval layers are flattened because business rules are enforced automatically by software workflows.</li>
            <li><strong>Pillar 2: Assemble To Order (ATO) or Make To Order (MTO) Philosophy:</strong> Replaces speculative Make-to-Stock finished inventory with agile postponement strategies. Core sub-assemblies are standardized upstream, while final customization is delayed until a firm customer order arrives.</li>
            <li><strong>Pillar 3: Empowered Employees:</strong> Pushes operational decision authority down to front-line knowledge workers. Equipped with real-time operational data, customer service reps and floor supervisors resolve exceptions on the spot without bureaucratic escalations.</li>
            <li><strong>Pillar 4: Customer and Supplier Integration:</strong> Extends digital process boundaries outward to encompass external supply chain partners via EDI, supplier portals, and Vendor-Managed Inventory (VMI).</li>
            <li><strong>Pillar 5: Sophisticated IT Systems:</strong> The technical computational backbone that makes the other four pillars operational: 3-tier scalability, high-availability relational databases, in-memory MRP calculation engines, and enterprise security.</li>
          </ul>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Pillar</th><th>Enterprise Role</th><th>Best-Practice Amalgamation Mechanism</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Process-Based Flat Org</strong></td>
                  <td>Horizontal value streams</td>
                  <td>Replaces departmental handoffs with cross-functional automated workflows (e.g., three-way invoice matching).</td>
                </tr>
                <tr>
                  <td><strong>2. ATO / MTO Philosophy</strong></td>
                  <td>Postponement &amp; agility</td>
                  <td>Shifts decoupling point to semi-finished goods, drastically lowering finished goods carrying costs and obsolescence.</td>
                </tr>
                <tr>
                  <td><strong>3. Empowered Employees</strong></td>
                  <td>Front-line decision velocity</td>
                  <td>Democratizes data visibility: operators view machine schedules, inventory transit, and customer priorities in real time.</td>
                </tr>
                <tr>
                  <td><strong>4. Customer &amp; Supplier</strong></td>
                  <td>Extended enterprise sync</td>
                  <td>Automates electronic advance shipping notices (ASN), collaborative forecasting, and consumption-based replenishment.</td>
                </tr>
                <tr>
                  <td><strong>5. Sophisticated IT</strong></td>
                  <td>Computational execution engine</td>
                  <td>Guarantees sub-second transaction throughput, multi-tier ACID relational integrity, and analytical reporting.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 06: Operational Governance: The 5 Cs Framework -->
        <section class="nb-section" id="sec-governance">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 06</span> Operational Governance: The "Watch 5 Cs" Framework</h2>
          
          <div class="nb-sticky nb-sticky--pink">
            <div class="nb-sticky__title">Executive Evaluation Checklist</div>
            <p><strong>Faculty Reading Material 02, Slide 4:</strong><br>
            Before declaring an ERP implementation viable, executives must audit the <strong>5 Cs of ERP</strong> to guarantee operational robustness, compliance, and throughput integrity.</p>
          </div>

          <p>
            In Dr. Altekar's operational curriculum, the <strong>5 Cs</strong> serve as a comprehensive operational checklist for project steering committees and internal auditors:
          </p>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>The C</th><th>Faculty Scope</th><th>Operational Meaning</th><th>Severe Risk if Omitted</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Complete</strong></td>
                  <td>Business Processes</td>
                  <td>Must encompass end-to-end organizational operations without requiring external spreadsheets or shadow databases.</td>
                  <td>Data leakage, manual reconciliation delays, loss of single version of truth.</td>
                </tr>
                <tr>
                  <td><strong>Connected</strong></td>
                  <td>Integrated = Internal<br>Connected = External</td>
                  <td>Seamless horizontal integration between internal functions, paired with electronic B2B links to external suppliers and distributors.</td>
                  <td>Bullwhip demand amplification, stockouts caused by supplier transit blindness.</td>
                </tr>
                <tr>
                  <td><strong>Cognitive</strong></td>
                  <td>Pattern detection for failures</td>
                  <td>Advanced automated monitoring that detects failure patterns in yield, quality, lead times, or vendor reliability before breakdowns occur.</td>
                  <td>Unplanned factory downtime, compounding scrap rates, missed delivery deadlines.</td>
                </tr>
                <tr>
                  <td><strong>Compliant</strong></td>
                  <td>Legal, Best Practices, SOPs</td>
                  <td>Automated adherence to statutory tax laws (GST), international trade rules, industry standards (FDA cGMP, ISO), and corporate SOPs.</td>
                  <td>Severe regulatory fines, loss of operating licenses, product recalls.</td>
                </tr>
                <tr>
                  <td><strong>Capable</strong></td>
                  <td>Speed &amp; volume handling</td>
                  <td>Robust hardware, network, and database architecture handling peak transaction volumes without latency (accuracy is assumed).</td>
                  <td>System timeouts, shop-floor scanning delays, abandoned customer e-commerce carts.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The Pancanga Connection:</strong> Dr. Altekar introduces the concept of <em>Pancanga</em> (the five essential elements of governance) to remind executives that technology is merely one part of a balanced enterprise control structure that also requires clear leadership, sound policies, trained personnel, and disciplined data stewardship.
          </p>
        </section>

        <!-- SECTION 07: Three-Tier Client-Server Architecture & Selection -->
        <section class="nb-section" id="sec-architecture">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 07</span> Three-Tier Client-Server Architecture &amp; Selection</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">FAQ Q3 Architecture Core Thesis</div>
            <p><strong>Why is 3-Tier Architecture superior to 2-Tier Architecture in ERP implementations?</strong><br>
            In 2-Tier architecture, business logic is either bloated on client machines ("fat client") or embedded inside database stored procedures. In 3-Tier architecture, the Application Logic is fully decoupled into dedicated application servers, delivering scalability, centralized maintenance, and security isolation.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 SAP R/3 &amp; S/4HANA THREE-TIER STRUCTURAL BLUEPRINT</div>
            ${D.architecture}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Architecture Tier</th><th>Technological Component</th><th>Enterprise Responsibilities</th></tr>
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

          <p>
            <strong>The RDBMS &amp; ACID Guarantee:</strong>
            At the heart of the Database Tier sits the Relational Database Management System (RDBMS). Without RDBMS, relational integrity across Material Master, Vendor Master, and General Ledger accounts would collapse. RDBMS enforces the <strong>ACID Properties</strong>:
          </p>
          <ul style="line-height: 1.8; padding-left: 24px;">
            <li><strong>Atomicity:</strong> An entire multi-table transaction succeeds or fails as a whole (e.g., if a inventory deduction succeeds but the corresponding GL journal entry fails, the entire transaction is rolled back).</li>
            <li><strong>Consistency:</strong> The database transitions from one valid state to another, strictly obeying all foreign-key constraints and validation rules.</li>
            <li><strong>Isolation:</strong> Concurrent transactions executed by thousands of simultaneous users execute independently without data corruption or dirty reads.</li>
            <li><strong>Durability:</strong> Once committed, the transaction is permanently recorded in non-volatile transaction logs, surviving power outages and crashes.</li>
          </ul>
        </section>

        <!-- SECTION 08: Global Best Practices & George Plossl's Flow Theory -->
        <section class="nb-section" id="sec-plossl">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 08</span> Global Best Practices &amp; Plossl's Flow Theory</h2>
          
          <div class="nb-sticky nb-sticky--pink">
            <div class="nb-sticky__title">George Plossl's First Law of Manufacturing Management</div>
            <p><strong>The Universal Law of Industrial Flow:</strong><br>
            <em>"All benefits in manufacturing stem from the speed of flow of materials and information; conversely, all costs and risks increase with lead time and operational stagnation."</em></p>
          </div>

          <p>
            George Plossl revolutionized manufacturing management by demonstrating that bloated work-in-process (WIP) inventories do not protect a factory; they act as a "water level" hiding dangerous operational rocks: scrap, machine breakdown, vendor unreliability, and scheduling friction. ERP operationalizes Plossl's law by synchronizing information velocity with material velocity, collapsing lead times and accelerating throughput.
          </p>

          <p>
            <strong>The 95/5 Manufacturing Lead Time Reality:</strong> In traditional un-integrated manufacturing, parts spend up to 90–95% of their total factory lead time sitting idle as <strong>Queue Time</strong> (waiting for an available machine) or <strong>Wait Time</strong> (waiting for the rest of the batch to finish). Value-added processing time (cutting, stamping, milling) accounts for less than 5–10% of total lead time. ERP-driven finite scheduling and synchronous pull logic compress non-value-added wait time, accelerating Plossl flow velocity.
          </p>

          <div class="nb-fbox">
            <span class="nb-fbox__label">Manufacturing Cycle Efficiency (MCE) &amp; Plossl Velocity Metric</span>
            <div class="nb-fbox__math">
              MCE = ( Value-Added Processing Time ) / ( Total Manufacturing Lead Time ) &times; 100%<br>
              Total Lead Time = Queue Time + Setup Time + Run Time + Wait Time + Move Time
            </div>
            <dl class="nb-fbox__dict">
              <dt>Value-Added Time</dt>
              <dd>Actual processing time where physical transformation occurs.</dd>
              <dt>Queue &amp; Wait Time</dt>
              <dd>Non-value-added idle time representing 90%+ of total factory lead time in un-integrated firms.</dd>
              <dt>ERP Operational Goal</dt>
              <dd>Drive MCE from &lt;10% toward 40%+ by eliminating idle queues through real-time schedule synchronization.</dd>
            </dl>
          </div>

          <p>
            <strong>Planning vs. Execution Distinction:</strong>
            Dr. Altekar emphasizes the strict operational boundary between planning and execution:
          </p>
          <ul style="line-height: 1.8; padding-left: 24px;">
            <li><strong>Planning:</strong> Defines the resources, capacities, and materials needed in the future to satisfy anticipated demand (MPS, MRP, CRP).</li>
            <li><strong>Execution:</strong> Applies currently available resources on the shop floor to fulfill committed customer orders right now. Confusing execution with planning leads to shop-floor chaos.</li>
          </ul>
        </section>

        <!-- SECTION 09: Demand Management, Decoupling Points (CODP) & S&OP -->
        <section class="nb-section" id="sec-codp">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 09</span> Demand Management, Decoupling Points (CODP) &amp; S&amp;OP</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">Customer Order Decoupling Point (CODP)</div>
            <p><strong>The Push-Pull Boundary:</strong><br>
            The Customer Order Decoupling Point (CODP) is the exact physical inventory buffer in the value chain that separates forecast-driven <span class="nb-hl nb-hl--yellow">Push Planning</span> from customer-order-driven <span class="nb-hl nb-hl--green">Pull Execution</span>.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 THE CODP SPECTRUM ACROSS OPERATING ENVIRONMENTS</div>
            ${D.codp}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Operating Environment</th><th>Decoupling Location</th><th>Upstream Planning Logic</th><th>Downstream Execution Logic</th><th>Typical Product Examples</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Make-to-Stock (MTS)</strong></td>
                  <td>Finished Goods (FG) Warehouse</td>
                  <td>Forecast-driven push based on aggregated time-series sales projections.</td>
                  <td>Immediate delivery from local distribution depot.</td>
                  <td>FMCG packaged foods, retail paint, over-the-counter pharmaceuticals.</td>
                </tr>
                <tr>
                  <td><strong>Assemble-to-Order (ATO)</strong></td>
                  <td>Semi-Finished Goods (SFG) Buffer</td>
                  <td>Forecast-driven level scheduling of standardized modules and components.</td>
                  <td>Customer-order pull: final assembly, software loading, and configuration.</td>
                  <td>Commercial trucks (Tata Motors), Dell personal computers, Subway sandwiches.</td>
                </tr>
                <tr>
                  <td><strong>Make-to-Order (MTO)</strong></td>
                  <td>Raw Material &amp; Standard Parts</td>
                  <td>Raw material procurement based on safety stocks and supplier lead times.</td>
                  <td>Fabrication, machining, sub-assembly, and final testing.</td>
                  <td>Specialty chemicals, custom industrial valves, commercial HVAC units.</td>
                </tr>
                <tr>
                  <td><strong>Engineer-to-Order (ETO)</strong></td>
                  <td>Design / Raw Material Stage</td>
                  <td>Engineering resource capacity planning and long-lead forging reservations.</td>
                  <td>Complete custom design, prototyping, fabrication, and commissioning.</td>
                  <td>Industrial boilers, bespoke turbomachinery, aerospace defense structures.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Sales and Operations Planning (S&amp;OP) Integration:</strong>
            S&amp;OP represents the monthly executive governance ritual that reconciles commercial unconstrained demand forecasts with factory operational constraints. S&amp;OP bridges the gap between high-level business strategy and detailed weekly Master Production Schedules (MPS), mitigating the Bullwhip Effect across multi-tier supplier networks.
          </p>
        </section>

        <!-- SECTION 010: Manufacturing Core Modules & Production Planning -->
        <section class="nb-section" id="sec-manufacturing">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 10</span> Manufacturing Core Modules &amp; Production Planning</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">Master Data Prerequisites</div>
            <p><strong>Item Control &amp; Master Data Foundation:</strong><br>
            A manufacturing ERP cannot plan without strict master data integrity. The core structural entities are: <span class="nb-hl nb-hl--yellow">Material Master &bull; Bill of Materials (BOM) &bull; Routing &bull; Work Centers</span>.</p>
          </div>

          <p>
            Production planning in ERP operates as a closed-loop hierarchy from long-term aggregate capacity to daily shop-floor work center dispatching:
          </p>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 ERP BUSINESS PROCESS &amp; MANUFACTURING MODULE FLOW</div>
            ${D.processView}
          </div>

          <div class="nb-fbox">
            <span class="nb-fbox__label">MRP Net Requirement Mathematical Engine</span>
            <div class="nb-fbox__math">
              Net Requirement = Gross Requirement - ( On-Hand Inventory + Scheduled Receipts ) + Safety Stock<br>
              Planned Order Release Date = Required Date - Planned Procurement/Manufacturing Lead Time
            </div>
            <dl class="nb-fbox__dict">
              <dt>Gross Requirement</dt>
              <dd>Total anticipated demand for a component derived from parent item MPS explosion or independent service spare orders.</dd>
              <dt>On-Hand Inventory</dt>
              <dd>Physically verified usable stock in warehouse storage locations.</dd>
              <dt>Scheduled Receipts</dt>
              <dd>Open Purchase Orders (POs) or released shop production orders due to arrive in that time bucket.</dd>
              <dt>Safety Stock</dt>
              <dd>Dynamic buffer inventory maintained to protect against supplier lead time variability or machine scrap spikes.</dd>
            </dl>
          </div>

          <p>
            <strong>Item Control in Manufacturing:</strong>
            Item control governs inventory tracking across four dimensions:
          </p>
          <ul style="line-height: 1.8; padding-left: 24px;">
            <li><strong>Stock Valuation:</strong> Standard costing vs. moving average costing vs. FIFO batch valuation.</li>
            <li><strong>Lot-Sizing Rules:</strong> Lot-for-Lot (L4L), Economic Order Quantity (EOQ), Period Order Quantity (POQ).</li>
            <li><strong>Traceability &amp; Shelf Life:</strong> Batch/lot tracking, serialization, First-Expired, First-Out (FEFO) allocation.</li>
            <li><strong>ABC / FSN Classification:</strong> Categorizing items by value (ABC: 80/15/5% annual spend) and movement velocity (Fast, Slow, Non-moving).</li>
          </ul>
        </section>

        <!-- SECTION 011: Supply Chain & Distribution: Order-to-Cash (O2C) & ATP -->
        <section class="nb-section" id="sec-o2c">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 11</span> Supply Chain &amp; Distribution: Order-to-Cash (O2C) &amp; ATP</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">Order-to-Cash (O2C) Value Stream</div>
            <p><strong>The Customer Fulfillment Engine:</strong><br>
            The O2C cycle represents the enterprise value stream from initial customer order entry to final cash reconciliation, governed by automated <span class="nb-hl nb-hl--yellow">Available-to-Promise (ATP)</span> allocation algorithms.</p>
          </div>

          <p>
            In an integrated ERP environment, the Order-to-Cash process flows seamlessly across seven integrated steps without manual spreadsheet handoffs:
          </p>
          <ol style="line-height: 1.8; padding-left: 24px;">
            <li><strong>Sales Order Entry:</strong> Customer service captures order line items, pricing conditions, and requested delivery dates.</li>
            <li><strong>Available-to-Promise (ATP) Verification:</strong> System automatically calculates real-time inventory availability across all multi-site warehouses.</li>
            <li><strong>Credit Check &amp; Risk Control:</strong> Customer's credit exposure (open receivables + open orders) is validated against authorized credit limits.</li>
            <li><strong>Outbound Delivery &amp; Warehouse Staging:</strong> ERP generates pick lists, assigns shipping bays, and schedules carrier transportation routes.</li>
            <li><strong>Goods Issue:</strong> Physical dispatch reduces warehouse inventory and immediately debits Cost of Goods Sold (COGS) in the general ledger.</li>
            <li><strong>Customer Billing &amp; Invoicing:</strong> System generates tax-compliant invoices and automatically posts an Accounts Receivable debit.</li>
            <li><strong>Cash Application &amp; Clearing:</strong> Incoming bank electronic wire transfers match invoices, clearing customer accounts and updating working capital.</li>
          </ol>

          <div class="nb-fbox">
            <span class="nb-fbox__label">Available-to-Promise (ATP) Algorithmic Engine</span>
            <div class="nb-fbox__math">
              ATP (Period 1) = On-Hand Stock + Planned MPS Receipts - &Sigma; ( Committed Customer Orders up to next MPS Receipt )<br>
              ATP (Future Periods) = Planned MPS Receipts - &Sigma; ( Committed Customer Orders in that period )
            </div>
            <dl class="nb-fbox__dict">
              <dt>ATP Logic</dt>
              <dd>Ensures sales representatives only promise inventory that is physically available or scheduled to be produced, preventing double-selling.</dd>
              <dt>Capable-to-Promise (CTP)</dt>
              <dd>Extends ATP by dynamically checking machine capacity and component raw materials if finished stock is unavailable.</dd>
            </dl>
          </div>
        </section>

        <!-- SECTION 012: Procurement & Financial Integration: Procure-to-Pay (P2P) -->
        <section class="nb-section" id="sec-p2p">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 12</span> Procurement &amp; Financials: Procure-to-Pay &amp; 3-Way Match</h2>
          
          <div class="nb-sticky nb-sticky--green">
            <div class="nb-sticky__title">Procure-to-Pay (P2P) Financial Integrity</div>
            <p><strong>The Three-Way Match Verification Engine:</strong><br>
            Financial disbursements are governed by automated cross-verification between <span class="nb-hl nb-hl--yellow">Purchase Order (PO) &bull; Goods Receipt (GR) &bull; Vendor Invoice</span>, eliminating fraud and duplicate payments.</p>
          </div>

          <p>
            The Procure-to-Pay (P2P) workflow demonstrates the inseparability of materials management and financial accounting:
          </p>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>P2P Operational Step</th><th>ERP Transaction</th><th>Simultaneous General Ledger Accounting Entry</th><th>Automated System Controls</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Purchase Requisition</strong></td>
                  <td>ME51N (SAP)</td>
                  <td>Zero accounting impact (commitment tracking only).</td>
                  <td>Validates department budget and approval matrix.</td>
                </tr>
                <tr>
                  <td><strong>2. Purchase Order (PO)</strong></td>
                  <td>ME21N (SAP)</td>
                  <td>Zero general ledger impact; encumbers budget commitment.</td>
                  <td>Locks agreed vendor price, payment terms, and delivery window.</td>
                </tr>
                <tr>
                  <td><strong>3. Goods Receipt (GR)</strong></td>
                  <td>MIGO (SAP)</td>
                  <td><strong>Debit:</strong> Inventory Asset Account<br><strong>Credit:</strong> GR/IR Clearing Account</td>
                  <td>Physical receiving dock scans verify quantities; creates quality inspection lot.</td>
                </tr>
                <tr>
                  <td><strong>4. Vendor Invoice Receipt</strong></td>
                  <td>MIRO (SAP)</td>
                  <td><strong>Debit:</strong> GR/IR Clearing Account<br><strong>Credit:</strong> Vendor Accounts Payable</td>
                  <td><strong>Three-Way Match:</strong> Validates PO price &times; GR quantity &times; Invoice total within strict tolerance limits.</td>
                </tr>
                <tr>
                  <td><strong>5. Payment Run</strong></td>
                  <td>F110 (SAP)</td>
                  <td><strong>Debit:</strong> Vendor Accounts Payable<br><strong>Credit:</strong> Bank Operating Cash Account</td>
                  <td>Executes automated electronic funds transfer (EFT/NEFT) based on cash discount terms.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 013: BPR vs ERP Implementation Sequence -->
        <section class="nb-section" id="sec-bpr">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 013</span> BPR vs. ERP Implementation Sequence</h2>
          
          <div class="nb-sticky nb-sticky--pink">
            <div class="nb-sticky__title">FAQ Q4 Recurring Exam Dilemma</div>
            <p><strong>Should BPR be carried out before ERP or ERP before BPR?</strong><br>
            Axiom: <span class="nb-hl nb-hl--yellow">BPR and ERP are mutually reinforcing co-requisites.</span> Installing ERP over broken legacy processes merely automates waste ("paving the cowpaths"); clean-slate BPR without software constraints leads to analysis paralysis.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 THE BPR &harr; ERP CHICKEN-AND-EGG DILEMMA</div>
            ${D.chickenEgg}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Sequencing Strategy</th><th>Strategic Rationale &amp; Advantages</th><th>Operational Risks &amp; Disadvantages</th><th>Executive Recommendation</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Approach A: BPR Before ERP</strong><br><em>(Clean Slate Design)</em></td>
                  <td>Customizes business processes to fit exact proprietary strategic differentiators; prevents software from dictating corporate strategy.</td>
                  <td>High risk of <em>analysis paralysis</em>; processes may be designed that require expensive, unmaintainable software code customizations.</td>
                  <td>Acceptable only for rare, proprietary competitive advantage processes (e.g. secret formulations).</td>
                </tr>
                <tr>
                  <td><strong>Approach B: ERP Before BPR</strong><br><em>(Pave the Cowpath)</em></td>
                  <td>Fast initial software installation; minimal short-term employee resistance to change.</td>
                  <td>Merely automates existing operational waste, bureaucratic bottlenecks, and siloed habits; delivers negligible ROI.</td>
                  <td><strong>Disastrous.</strong> Strongly discouraged in all academic literature and MBA case studies.</td>
                </tr>
                <tr>
                  <td><strong>Approach C: Concurrent / Technology-Enabled BPR</strong><br><em>(Industry Best Practice)</em></td>
                  <td>Adopts the ERP package's embedded standard industry best practices as the target process benchmark.</td>
                  <td>Requires organizational change management discipline and executive leadership to enforce standard workflows.</td>
                  <td><strong>Strongly Recommended.</strong> Balances rapid time-to-value with process standardization.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The 80/20 Customization Rule:</strong>
            World-class organizations enforce strict scope discipline: adopt standard vanilla ERP workflows for 80% to 90% of routine non-differentiating operational tasks (Accounts Payable, Purchasing, Fixed Assets, General Ledger). Reserve custom development strictly for the 10% to 20% of proprietary workflows that provide distinct market competitive advantage.
          </p>
        </section>

        <!-- SECTION 014: Implementation Methodologies & Change Management -->
        <section class="nb-section" id="sec-methodology">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 014</span> Implementation Approaches &amp; Change Management</h2>
          
          <div class="nb-sticky">
            <div class="nb-sticky__title">Faculty Five Key Success Factors (RM02, Slide 3)</div>
            <p><strong>ERP Implementation Success Drivers:</strong><br>
            1. <strong>Management Support:</strong> Active, visible executive leadership &bull; 2. <strong>Process Driven:</strong> Business goals govern IT &bull; 3. <strong>Change Management:</strong> Cultural alignment &bull; 4. <strong>Training:</strong> User proficiency &bull; 5. <strong>Dedicated Team:</strong> Full-time top talent.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 ERP IMPLEMENTATION SUCCESS DRIVERS &amp; STAKEHOLDER FOCUS</div>
            ${D.implMethod}
          </div>

          <div class="nb-table-wrap">
            <table class="nb-table">
              <thead>
                <tr><th>Implementation Approach</th><th>Execution Mechanism</th><th>Key Advantages</th><th>Primary Operational Risks</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Big Bang</strong></td>
                  <td>All functional modules cut over simultaneously on a single calendar date across all corporate sites.</td>
                  <td>Shortest transition period; eliminates expensive temporary interface bridges between legacy and new systems.</td>
                  <td>Highest operational catastrophe risk; system failure can halt all order fulfillment and manufacturing simultaneously.</td>
                </tr>
                <tr>
                  <td><strong>Phased Rollout</strong></td>
                  <td>Sequenced deployment by module (e.g. Financials first, then Materials, then Manufacturing) or by business unit/geography.</td>
                  <td>Controlled risk profile; cumulative organizational learning from early phases benefits later rollouts.</td>
                  <td>Extended implementation duration; requires complex temporary interface bridges between old and new systems.</td>
                </tr>
                <tr>
                  <td><strong>Pilot Implementation</strong></td>
                  <td>A single representative plant or business subsidiary deploys the full ERP system as a working prototype before global rollout.</td>
                  <td>Validates the business template under actual operating conditions without risking the entire enterprise.</td>
                  <td>Rollout to remaining facilities takes significantly longer; pilot site may have unique, non-generalizable quirks.</td>
                </tr>
                <tr>
                  <td><strong>Parallel Run</strong></td>
                  <td>Old legacy systems and the new ERP run concurrently for a defined testing period (e.g. 1 to 3 months).</td>
                  <td>Maximum safety backup; operational failure in new system can be backed up by legacy records.</td>
                  <td>Enormous human burden (double data entry); prone to data entry drift; rarely viable for complex modern ERP suites.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>John Kotter's 8-Stage Change Management in ERP:</strong>
            Because user resistance is the primary cause of implementation delay, executives apply Kotter's change acceleration methodology:
          </p>
          <ol style="line-height: 1.8; padding-left: 24px;">
            <li><strong>Establish Urgency:</strong> Demonstrate why disconnected legacy silos threaten firm competitive survival.</li>
            <li><strong>Create a Guiding Coalition:</strong> Assemble cross-functional executive champions combining business authority and operational respect.</li>
            <li><strong>Develop a Strategic Vision:</strong> Articulate the target operational state (e.g., 48-hour delivery, zero stockouts).</li>
            <li><strong>Communicate the Vision:</strong> Transparently communicate how ERP eliminates tedious manual reconciliations for employees.</li>
            <li><strong>Empower Action &amp; Remove Barriers:</strong> Realign incentive scorecards; remove legacy KPIs that reward departmental sub-optimization.</li>
            <li><strong>Generate Short-Term Wins:</strong> Celebrate early milestones (e.g. successful automated month-end financial close).</li>
            <li><strong>Consolidate Gains:</strong> Use early momentum to tackle harder shop-floor process changes.</li>
            <li><strong>Anchor in Corporate Culture:</strong> Institutionalize new standard operating procedures as "the way we do things here".</li>
          </ol>
        </section>

        <!-- SECTION 015: Specialized Real-World Industry Case Analyses -->
        <section class="nb-section" id="sec-cases">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 15</span> Specialized Real-World Industry Case Analyses</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">Applied Operational Case Studies</div>
            <p>Synthesizing theoretical ERP models across four concrete industrial environments: <span class="nb-hl nb-hl--yellow">Subway Franchise &bull; Asian Paints Distribution &bull; Tata Motors ATO &bull; Pfizer Pharma Batch Traceability</span>.</p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 CASE 1: SUBWAY MULTI-LEVEL HIERARCHY &amp; TWO-TIER OPERATING MODEL</div>
            <p><strong>The Core Exam Dilemma:</strong> <em>"You are Subway with a multi-level hierarchy; will the business fail? Explain."</em></p>
            <p><strong>1. Theoretical Diagnosis:</strong> In a fast-food franchise network characterized by thousands of geographically dispersed, owner-operated retail outlets, a rigid bureaucratic multi-level hierarchy causes fatal operational latency. Customer tastes, local supply chain disruptions (e.g., regional produce shortages), and daily labor dynamics require immediate store-level responsiveness.</p>
            <p><strong>2. Structural Pathology:</strong> If every inventory adjustment, store promotion, or supplier substitution requires hierarchical sign-off across Regional Managers, Country Directors, and Global Headquarters, store margins collapse due to food spoilage, stockouts, and customer churn.</p>
            <p><strong>3. The ERP Architectural Solution (Two-Tier Operating Model):</strong>
            <ul style="line-height: 1.8; padding-left: 20px;">
              <li><strong>Centralized Global Core (Corporate Tier 1):</strong> Enforces global master data standards, food safety compliance, brand recipes, and consolidated financial reporting on a Tier-1 ERP.</li>
              <li><strong>Decentralized Local Cloud POS / ERP (Franchisee Tier 2):</strong> Gives store operators real-time autonomy over daily replenishment, shift scheduling, and local cash reconciliation via lightweight cloud apps.</li>
            </ul>
            </p>
            <div class="nb-sticky nb-sticky--green">
              <div class="nb-sticky__title">Definitive Exam Conclusion</div>
              <p>Subway will <strong>NOT</strong> fail if its multi-level hierarchy is backed by an agile, two-tier ERP system that decouples corporate brand governance from localized store operational decision-making.</p>
            </div>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 CASE 2: ASIAN PAINTS — ZERO FINISHED-GOODS REGIONAL WAREHOUSES</div>
            <p>
              Asian Paints transformed paint manufacturing from a speculative Make-to-Stock model to an automated demand-driven distribution network. By installing automated computerized tinting machines across over 70,000 independent retail dealers, the company stopped distributing thousands of finished colored paint cans. Instead, it distributes base white paint and colorant pigment slurries.
            </p>
            <p>
              Dealer POS terminals link directly to central manufacturing plants via ERP. Replenishment orders are generated automatically based on consumption data, fulfilling retailer deliveries 3 to 4 times a day directly from automated factory hubs without intermediate regional finished-goods warehouses, slashing working capital and driving industry-leading return on capital employed (ROCE).
            </p>
          </div>

          <div class="nb-card">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📐 CASE 3: TATA MOTORS COMMERCIAL VEHICLES — ATO POSTPONEMENT</div>
            <p>
              Commercial truck manufacturing features thousands of customer configurations (chassis lengths, axle loads, engine powers, cab trims). Tata Motors implemented an Assemble-to-Order (ATO) postponement strategy. Standardized chassis frames, engines, and drivetrains are assembled on level-scheduled upstream lines. Final body mounting, telematics installation, and custom paint are postponed until dealer orders with customer specifications are logged into the ERP, expanding inventory turns from 8 to over 24 turns per year.
            </p>
          </div>
        </section>

        <!-- SECTION 016: Complete Authentic Model Exam Answers -->
        <section class="nb-section" id="sec-exam-answers">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">MOD 16</span> Complete Authentic PYQ Model Exam Answers</h2>
          
          <div class="nb-sticky nb-sticky--green">
            <div class="nb-sticky__title">Authentic Examination Solutions (2023, 2024, 2025 Papers)</div>
            <p>Complete, comprehensive MBA model answers for all 12 authentic exam questions from WeSchool past examination papers. Evaluated against Bloom's Taxonomy Level 3 (Applying) and Level 4 (Analysing), with marks breakdowns and diagram recommendations.</p>
          </div>

          <!-- 2023 Q1 -->
          <article class="nb-card" id="q-2023-q1">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2023 &bull; QUESTION 1 (10 Marks) — Compulsory Case: Ms. Deepika / Pharma ERP Charter</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Ms. Deepika, ERP Head at a large pharmaceutical enterprise, is tasked with preparing an ERP Strategy Charter. Formulate the business case, goals, conceptual model mapping, implementation methodology, and value governance metrics."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2023-Q1']}
            </div>
          </article>

          <!-- 2023 Q2 -->
          <article class="nb-card" id="q-2023-q2">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2023 &bull; QUESTION 2 (10 Marks) — Functional Modules &amp; Item Control in Manufacturing</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Analyse the various functional modules of ERP with special reference to manufacturing. Explain the concept of Item Control with examples."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2023-Q2']}
            </div>
          </article>

          <!-- 2023 Q3 -->
          <article class="nb-card" id="q-2023-q3">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2023 &bull; QUESTION 3 (10 Marks) — System Types &amp; Decoupling Points (CODP)</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Distinguish between Connected and Integrated systems. Explain the concept of Customer Order Decoupling Point (CODP) across different manufacturing environments with neat diagrams."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2023-Q3']}
            </div>
          </article>

          <!-- 2023 Q4 -->
          <article class="nb-card" id="q-2023-q4">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2023 &bull; QUESTION 4 (10 Marks) — BPR Before or After ERP Sequencing Analysis</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Should BPR be carried out before ERP or ERP before BPR? Discuss the relative merits and demerits of both approaches."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2023-Q4']}
            </div>
          </article>

          <!-- 2024 Q1 -->
          <article class="nb-card" id="q-2024-q1">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2024 &bull; QUESTION 1 (10 Marks) — Compulsory Case: Ms. Aishwarya / Automobile OEM</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Ms. Aishwarya, Head of Operations at a major commercial vehicle manufacturer, faces siloed departments and escalating warranty costs. Frame the business strategy rebuttal, goals, and rollout strategy."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2024-Q1']}
            </div>
          </article>

          <!-- 2024 Q2 -->
          <article class="nb-card" id="q-2024-q2">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2024 &bull; QUESTION 2 (10 Marks) — Conceptual Model (Five Pillars) &amp; 3-Tier Architecture</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Analyse the conceptual model and architectural aspects of ERP with examples."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2024-Q2']}
            </div>
          </article>

          <!-- 2024 Q3 -->
          <article class="nb-card" id="q-2024-q3">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2024 &bull; QUESTION 3 (10 Marks) — Systems Evolution Continuum &amp; Decoupling Points</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Explain the evolutionary continuum of ERP from SIC to SCM. Detail the role of the Customer Order Decoupling Point (CODP) in demand management."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2024-Q3']}
            </div>
          </article>

          <!-- 2024 Q4 -->
          <article class="nb-card" id="q-2024-q4">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2024 &bull; QUESTION 4 (10 Marks) — ERP Implementation Methodologies &amp; Classical Approaches</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Evaluate the four classical ERP implementation approaches (Big Bang, Phased, Pilot, Parallel). Detail the critical success factors for organizational change management."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2024-Q4']}
            </div>
          </article>

          <!-- 2025 Q1 -->
          <article class="nb-card" id="q-2025-q1">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2025 &bull; QUESTION 1 (10 Marks) — Compulsory Case: Ms. Vijaya Loki / Specialty Chemicals</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Ms. Vijaya Loki, Director at a specialty chemical conglomerate, must address hazardous material handling, batch scheduling, and environmental compliance. Detail the ERP strategy charter."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2025-Q1']}
            </div>
          </article>

          <!-- 2025 Q2 -->
          <article class="nb-card" id="q-2025-q2">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2025 &bull; QUESTION 2 (10 Marks) — Conceptual Model, 3-Tier Architecture &amp; Best Practices</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Analyse the conceptual model and architectural aspects of ERP with examples. Explain how ERP amalgamates global best practices."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2025-Q2']}
            </div>
          </article>

          <!-- 2025 Q3 -->
          <article class="nb-card" id="q-2025-q3">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2025 &bull; QUESTION 3 (10 Marks) — Functional Modules &amp; Business Process View Integration</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Examine the core functional modules of ERP (Manufacturing, Distribution, Financials) and illustrate their integration using the ERP Business Process View."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2025-Q3']}
            </div>
          </article>

          <!-- 2025 Q4 -->
          <article class="nb-card" id="q-2025-q4">
            <div class="nb-tape"></div>
            <div class="nb-card__title">📝 2025 &bull; QUESTION 4 (10 Marks) — BPR Sequence &amp; Implementation Critical Success Factors</div>
            <p style="font-family: var(--hand2); font-size: 1.15rem; color: var(--ink);">
              <em>"Should BPR be carried out before ERP or ERP before BPR? Discuss the relative merits and demerits, and outline the 5 critical success factors for implementation."</em>
            </p>
            <div class="model-ans">
              ${pyqAnswers['2025-Q4']}
            </div>
          </article>
        </section>

      </div>
    </main>
  </div>

  <!-- Search Modal -->
  <div class="nb-search-modal" id="searchModal" role="dialog" aria-label="Search Notebook">
    <div class="nb-search-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span style="font-family:var(--hand); font-size:1.45rem; font-weight:700; color:var(--ink);">🔍 Search Master Study Guide</span>
        <button id="closeSearch" style="border:0; background:none; font-size:1.4rem; cursor:pointer; color:var(--pencil);">&times;</button>
      </div>
      <input type="text" class="nb-search-input" id="searchInput" placeholder="Type a concept (e.g. Plossl, 3-Tier, CODP, BPR)..." autocomplete="off">
      <div class="nb-search-results" id="searchResults">
        <p style="color:var(--pencil); font-family:var(--hand2); font-size:1.1rem;">Type at least 2 letters to search...</p>
      </div>
    </div>
  </div>

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
        const scrollMid = current + 140;
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

      // Search Modal
      const modal = document.getElementById('searchModal');
      const openBtn = document.getElementById('searchTrigger');
      const closeBtn = document.getElementById('closeSearch');
      const sInput = document.getElementById('searchInput');
      const resultsDiv = document.getElementById('searchResults');

      const searchIndex = sections.map(s => {
        const titleEl = s.querySelector('h1, h2, .nb-card__title');
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
          resultsDiv.innerHTML = '<p style="color:var(--pencil); font-family:var(--hand2); font-size:1.1rem;">Type at least 2 letters...</p>';
          return;
        }
        const matches = searchIndex.filter(item => item.text.includes(query));
        if (matches.length === 0) {
          resultsDiv.innerHTML = '<p style="color:var(--pencil); font-family:var(--hand2); font-size:1.1rem;">No matching sections found.</p>';
          return;
        }
        resultsDiv.innerHTML = matches.map(m => {
          return '<a href="#' + m.id + '" class="nb-search-item" onclick="document.getElementById(\\'searchModal\\').classList.remove(\\'is-active\\');">' +
                 '<b>' + m.title + '</b>' +
                 '<span style="font-size:0.88rem; color:var(--pencil);">Jump to section #' + m.id + ' &rarr;</span>' +
                 '</a>';
        }).join('');
      });

    })();
  </script>
</body>
</html>
`;

// Write the compiled HTML notebook
fs.writeFileSync(OUT, html, 'utf8');

// Update companion metadata
const meta = {
  title: 'ERP Business Applications · Master MBA Study Guide & Exam Blueprint (Edition 2.0)',
  slug: 'erp-business-applications-notebook-2',
  subject: 'Operations',
  category: 'Enterprise Systems',
  description: 'Master MBA study guide and exam blueprint covering ERP business strategy, 3-tier client-server architecture, the Five Pillars, Value Matrix Analysis, Plossl manufacturing theory, Master Data, Subway franchise case study, and 100% authentic model exam answers for 2023, 2024, and 2025 papers.',
  file: 'ERP_Business_Applications_Notebook_2.0.html',
  tags: ['Operations', 'ERP', 'MBA', 'PYQ', 'Revision', 'Altekar', 'Trimester IV'],
  status: 'published',
  source: 'curriculum/weschool-term4-altekar',
  version: '2.0.0',
  templateVersion: 'erp-notebook-2.0',
  updated: '2026-10-05',
  featured: false,
  readTimeMinutes: 75,
  questionsCount: 12,
  courseContext: {
    course: 'ERP Business Applications (Elective)',
    instructor: 'Rahul Altekar',
    outcomes: ['CO1', 'CO2', 'CO3']
  }
};

fs.writeFileSync(META_OUT, JSON.stringify(meta, null, 2) + '\n', 'utf8');
console.log(`Successfully generated master notebook: ${OUT} (${html.length} bytes)`);

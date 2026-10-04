/**
 * ERP Notebook 2.0 — generator.
 * Usage: node Website/scripts/pipeline/erp2/build-erp2.js
 * Output: Operations/ERP_Business_Applications_Notebook_2.0.html (+ .meta.json). Never touches the original ERP notebook.
 */
const fs = require('fs');
const path = require('path');
const X = require('./data');
const ROOT = path.resolve(__dirname, '../../../..');
const OUT = path.join(ROOT, 'Operations', 'ERP_Business_Applications_Notebook_2.0.html');
const read = (f) => fs.readFileSync(path.join(__dirname, f), 'utf8');

const TAGS = { S: '<b class="tg s">SOURCE</b>', E: '<b class="tg e">EXPLANATION</b>', X: '<b class="tg x">ILLUSTRATIVE</b>', W: '<b class="tg w">WEB</b>' };
const tag = (s) => String(s).replace(/\{([SEXW])\}/g, (_, k) => TAGS[k]);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const RV = new Set(['core', 'faculty', 'visual', 'confusion', 'pyq', 'summary']);
const LABEL = { core: 'Core concept', faculty: 'Faculty terminology', explain: 'Detailed explanation', visual: 'Visual explanation', example: 'Example', apply: 'Application', exam: 'Exam angle', confusion: 'Common confusion', check: 'Quick check', pyq: 'PYQ connections', summary: 'Revision summary' };
const modTitles = {}; X.modules.forEach((m, i) => modTitles[m.id] = `M${i + 1}: ${m.title}`);
const pyqById = Object.fromEntries(X.pyqs.map(p => [p.id, p]));
const years = X.papers.map(p => p.year);
let diagramCount = 0;

function renderBlock(m, b, i) {
  const id = `${m.id}-b${i}`;
  const h = b.h || LABEL[b.k];
  const sx = `${modTitles[m.id]} › ${h}`;
  let inner = '';
  if (b.k === 'visual') { diagramCount++; inner = `<figure class="fig">${X.DG[b.svg]}<figcaption>${tag(b.cap)}</figcaption></figure>`; }
  else if (b.k === 'check') inner = `<details class="check"><summary>${esc(b.q)}</summary><p>${tag('{E}')} ${esc(b.a)}</p></details>`;
  else if (b.k === 'pyq') {
    inner = '<ul>' + b.ids.map(q => { const p = pyqById[q]; return `<li><a href="#arch-${q}"><b>${p.year} Q${p.qno}</b></a> (${p.marks} marks) — ${esc(p.text.length > 110 ? p.text.slice(0, 107) + '…' : p.text)}</li>`; }).join('') + '</ul>' +
      (b.note ? `<p class="src">${esc(b.note)}</p>` : '') + '<p class="src">PYQ: ERP Business Applications — supplied papers (2023, 2024, 2025).</p>';
  }
  else if (b.vendors) inner = `<p>${tag('{S}')} Names visible on the faculty vendor slide (${'Reading Material 02, slide 2'}):</p><div class="chips">${X.vendors.map(v => `<span class="chip">${esc(v)}</span>`).join('')}</div><p class="src">Slide is cropped at the bottom — list may be incomplete. Only names are recorded; no vendor facts are asserted.</p>`;
  else if (b.myths) inner = `<p>${tag('{S}')} <b>Myths</b> slide (17 statements, verbatim):</p><ol class="myths">${X.myths.map(t => `<li>${esc(t)}</li>`).join('')}</ol><p>${tag('{S}')} <b>Truth</b> slide: Readiness Audit · Performance Measurement · Unavoidable.</p><p class="src">Source: ${'Reading Material 02, slides 6–7'}. Which truth answers which myth is not stated on the slides.</p>`;
  else inner = tag(b.html);
  const wrap = ['explain', 'core', 'faculty', 'apply', 'exam', 'example', 'confusion', 'summary'].includes(b.k) && /<table/.test(inner) ? inner.replace(/<table class="tbl">/g, '<div class="tblwrap"><table class="tbl">').replace(/<\/table>/g, '</table></div>') : inner;
  return `<article class="blk k-${b.k}${RV.has(b.k) ? ' rv' : ''}" id="${id}" data-sx="${esc(sx)}" data-sec="${esc(modTitles[m.id])}"><h4>${esc(h)}</h4>${wrap}</article>`;
}

function pyqYears(m) { return [...new Set(X.pyqs.filter(p => p.mods.includes(m.id)).map(p => p.year))]; }

function renderModule(m, i) {
  const py = pyqYears(m);
  return `<section class="sheet modsheet" id="${m.id}" data-mod="${m.id}" aria-labelledby="${m.id}-h">
<div class="mhead"><div><div class="kick">Module ${i + 1} · TLP topic ${m.tlp}</div><h2 class="mt" id="${m.id}-h" data-sx="${esc(modTitles[m.id])}" data-sec="Module heading">${esc(m.title)}</h2>
<div>${m.signal.map(s => `<span class="sig ${s.replace(/\s/g, '')}">${s}</span>`).join('')}${py.length ? `<span class="sig PYQ">LINKED TO ${py.length} OF ${years.length} PAPERS</span>` : ''}</div></div>
<div><div class="mnum" aria-hidden="true">${String(i + 1).padStart(2, '0')}</div><button type="button" class="btn sm statusBtn" data-mod="${m.id}">● Not started — click to change</button></div></div>
<p class="why" data-sx="Why this matters — ${esc(m.title)}" data-sec="${esc(modTitles[m.id])}"><b>Why this matters.</b> ${esc(m.why)}</p>
<div class="objs"><h4>Learning objectives</h4><ul>${m.obj.map(o => `<li>${esc(o)}</li>`).join('')}</ul></div>
${m.blocks.map((b, j) => renderBlock(m, b, j)).join('\n')}
</section>`;
}

/* PYQ analytics — computed only from supplied papers */
const topicYears = {}; Object.keys(X.T).forEach(k => topicYears[k] = [...new Set(X.pyqs.filter(p => p.topics.includes(k)).map(p => p.year))].sort());
const freqRows = Object.keys(X.T).sort((a, b) => topicYears[b].length - topicYears[a].length).map(k =>
  `<div class="row"><span>${esc(X.T[k])}</span><span class="bar" role="img" aria-label="${topicYears[k].length} of ${years.length} papers"><i style="width:${topicYears[k].length / years.length * 100}%"></i></span><span>${topicYears[k].length} of ${years.length} papers<br><small>${topicYears[k].join(', ')}</small></span></div>`).join('');
const mk = {}; X.pyqs.forEach(p => mk[p.marks] = (mk[p.marks] || 0) + 1);

const archive = X.papers.map(pp => {
  const qs = X.pyqs.filter(p => p.year === pp.year);
  return `<h3 id="arch-${pp.year}">${pp.year} — End-term paper</h3>
<div class="card" data-sx="PYQ paper ${pp.year} details" data-sec="PYQ Archive"><p><b>Date</b> ${pp.date} · <b>Program</b> ${esc(pp.program)} · <b>Batch</b> ${pp.batch} · <b>Trimester</b> ${pp.trimester} · <b>Course</b> ERP Business Applications · <b>Course code</b> ${esc(pp.code)} · <b>Max marks</b> ${pp.max} · <b>Duration</b> ${esc(pp.duration)} · <b>Time</b> ${esc(pp.time)}</p><p><b>Instructions</b> ${esc(pp.instr)}</p><p class="src">${esc(pp.note)}</p></div>
${qs.map(p => `<article class="q" id="arch-${p.id}" data-sx="PYQ ${p.year} Q${p.qno}: ${esc(p.text.slice(0, 70))}" data-sec="PYQ Archive ${p.year}"><div class="meta"><b>${p.year} · Q${p.qno}</b><span>${p.marks} marks</span><span>BL ${p.bl}</span><span>${esc(p.co)}</span>${p.compulsory ? '<span class="rp">compulsory</span>' : ''}${p.rep ? '<span class="rp">same wording in ' + X.pyqs.filter(o => o.rep === p.rep).map(o => o.year).join(' & ') + '</span>' : ''}</div><blockquote>${esc(p.text)}</blockquote><p class="src">Module links: ${p.mods.map(mm => `<a href="#${mm}">${esc(modTitles[mm])}</a>`).join(' · ')} · PYQ: ERP Business Applications — ${p.year}</p></article>`).join('')}`;
}).join('');

const topicMap = `<div class="tblwrap"><table class="tbl"><tr><th>Question</th><th>Modules</th><th>Concept / framework</th><th>Difficulty (BL given)</th><th>Type</th></tr>${X.pyqs.map(p =>
  `<tr><td><a href="#arch-${p.id}">${p.year} Q${p.qno}</a> (${p.marks})</td><td>${p.mods.map(mm => `<a href="#${mm}">${mm.toUpperCase()}</a>`).join(' ')}</td><td>${p.topics.map(t => esc(X.T[t])).join('; ')}</td><td>${esc(p.diff)}</td><td>${esc(p.type)}</td></tr>`).join('')}</table></div>
<p class="src">Mapping to modules/concepts is this notebook’s analysis. Difficulty = Bloom level printed on the paper (BL3 Applying, BL4 Analysing); no other difficulty was supplied.</p>`;

const mapRows = X.modules.map((m, i) => {
  const f = (k) => { const j = m.blocks.findIndex(b => b.k === k); return j < 0 ? null : `${m.id}-b${j}`; };
  const app = f('apply') || f('example') || f('exam');
  const mc = X.mcqs.filter(q => q.mod === m.id).length;
  const pyqId = f('pyq');
  return `<tr><td><a href="#${m.id}">${esc(modTitles[m.id])}</a></td><td><a href="#${f('core')}">concept</a></td><td>${app ? `<a href="#${app}">application</a>` : '<span class="na">—</span>'}</td><td>${pyqId ? `<a href="#${pyqId}">${pyqYears(m).length}/${years.length} papers</a>` : '<span class="na">none</span>'}</td><td><a href="#${f('summary')}">summary</a></td><td>${mc ? `<a href="#mcq">${mc} MCQ</a>` : '<span class="na">—</span>'}</td></tr>`;
}).join('');

const tlpMap = [['1.0', 'ERP: Introduction, Evolution, Conceptual Model', 'm1 m2 m3'], ['2.0', 'ERP: Technology Overview, Structure, Architecture', 'm4'], ['3.0', 'Theory of ERP: Global Best Practices', 'm5 m6'], ['4.0', 'Functional Modules of ERP: Manufacturing, Distribution, Financials etc.', 'm7'], ['5.0', 'ERP Market and Vendors', 'm8'], ['6.0', 'BPR and ERP Value Analysis', 'm9'], ['7.0', 'ERP Implementation Methodology · Introduction to Analytics · Importance of RDBMS', 'm10 m4'], ['8.0', 'ERP Case Studies', 'm11']];

const nav = [['cover', 'Cover'], ['how', 'How to use this notebook'], ['map', 'Course map & objectives'], ['progress', 'My progress']]
  .map(([i, t]) => `<a href="#${i}">${t}</a>`).join('') +
  '<h2>My modules</h2>' + X.modules.map(m => `<a href="#${m.id}" data-mod="${m.id}"><span class="dot"></span><span>${esc(modTitles[m.id])}</span></a>`).join('') +
  '<h2>PYQ intelligence</h2>' + [['archive', 'PYQ archive'], ['analysis', 'Topic map · frequency · patterns'], ['practice', 'PYQ practice mode']].map(([i, t]) => `<a href="#${i}">${t}</a>`).join('') +
  '<h2>Revision system</h2>' + [['revision', 'Revision system'], ['lastmin', 'Last-minute revision'], ['mcq', 'Final MCQ assessment'], ['audit', 'Source audit & ambiguities']].map(([i, t]) => `<a href="#${i}">${t}</a>`).join('');

const distinctions = [['Connected vs Integrated', 'Connected: people choose. Integrated: the system decides with common logic.'], ['Pillars vs 5 Cs vs Pancanga', 'Three separate lists: 5 pillars (model), 5 Cs (watch-list), Pancanga (heading only).'], ['MPS vs MRP', 'MPS plans end items; MRP plans components (explanation).'], ['Methodology vs Approach', 'Methodology = 5 success factors; Approach = Big Bang / Franchising / Slam-dunk.'], ['ATO vs MTO', 'Differ in where the CODP sits (SFG vs components on the faculty board).'], ['Planning vs Execution (Plossl)', 'Planning defines resources needed; execution applies available resources to what customers want now.']];
const mistakes = ['Writing an IT answer to a business-strategy case (all 3 Q1s).', 'Listing without analysing when the verb is “Analyse” (BL4).', 'Quoting definitions of phantom item / MPS / BPR as if they were Sir’s slides — they are explanation-level.', 'Forgetting the case protagonist, company and industry.', 'Answering “both” to the BPR-vs-ERP “what first?”.', 'No diagram on the architecture question.'];

const lastCard = `<ul class="lm"><li><b>Q1 skeleton:</b> Context → Reframe (business &gt; IT) → Goals → Model (5 pillars) → Method (methodology + approach) → Value (readiness audit, performance measurement).</li>
<li><b>ERP:</b> philosophy + integrated software + IT–business inseparability; record once, reflect everywhere.</li>
<li><b>Types:</b> Connected (data, choice) · Integrated (information, system decides) · Synchronized (knowledge).</li>
<li><b>Evolution:</b> SIC → MRP → MRP-II → ERP → E-ERP → SCM.</li>
<li><b>Pillars:</b> process-based flat org · ATO/MTO · empowered employees · customer &amp; supplier integration · sophisticated IT.</li>
<li><b>5 Cs:</b> Complete · Connected · Cognitive · Compliant · Capable.</li>
<li><b>Architecture:</b> client-server 2/3/n tier: Repository, GUI driver, logic server, DB driver, RDBMS, OS.</li>
<li><b>Best practice:</b> 5 pillars → customer focus, minimal waste, value creation; CODP · SNOP · org structure · ABC.</li>
<li><b>CODP:</b> MTS (FG) · ATO/CTO (SFG) · MTO (components) · ETO (start).</li>
<li><b>Modules:</b> Manufacturing (capacity planning, item control) · Distribution · Financial.</li>
<li><b>Implementation:</b> 5 factors (client, user, ERP brand, consultant, methodology); approaches Big Bang · Franchising · Slam-dunk.</li>
<li><b>Plossl:</b> inventory = liability; re-planning = failure; lead times controllable; one framework; continuous education.</li></ul>`;

const DATA = {
  mods: X.modules.map(m => m.id), modTitles, topics: X.T,
  pyqs: X.pyqs.map(({ id, year, qno, marks, type, diff, rep, mods, topics, text, think, frame, answerHtml }) => ({ id, year, qno, marks, type, diff, rep: rep || null, mods, topics, text, think, frame, answerHtml: answerHtml || null })),
  mcqs: X.mcqs
};

const mcqLevels = X.mcqs.reduce((a, q) => (a[q.lvl] = (a[q.lvl] || 0) + 1, a), {});

const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ERP Business Applications — Interactive MBA Study Notebook 2.0</title>
<meta name="description" content="Personal MBA study notebook & exam blueprint covering ERP business strategy, 3-tier architecture, Five Pillars, Value Matrix, Plossl manufacturing theory, BPR, and complete model exam answers.">
<meta name="keywords" content="ERP, ERP Business Applications, MBA, PYQ, Operations, MPS, CODP, BPR">
<meta name="color-scheme" content="light dark">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=STIX+Two+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>${read('notebook.css')}
.flash{animation:fl 1.4s}@keyframes fl{0%,60%{box-shadow:0 0 0 4px var(--hl)}100%{box-shadow:none}}</style>
</head>
<body>
<a class="skip" href="#main">Skip to notebook</a>
<div id="live" class="sr" aria-live="polite" role="status"></div>
<header class="topbar" role="banner">
  <button type="button" class="btn" id="hamb" aria-label="Open contents" aria-expanded="false" aria-controls="sidebar">☰</button>
  <span class="ttl">ERP · My Study Notebook 2.0</span>
  <span class="sp"></span>
  <div class="search" role="search"><label for="q" class="sr">Search the notebook</label><input id="q" type="search" placeholder="Search ( / )" autocomplete="off" aria-controls="searchResults"><div id="searchResults" aria-label="Search results"></div></div>
  <button type="button" class="btn" id="btnFocus" aria-pressed="false" title="Focus mode (f)">Focus</button>
  <button type="button" class="btn" id="btnRev" aria-pressed="false" title="Revision mode (r)">Revision</button>
  <button type="button" class="btn" id="btnTimer" aria-expanded="false" aria-controls="timerPanel">⏱ Timer</button>
  <button type="button" class="btn" id="btnTheme" aria-pressed="false" title="Dark / light (t)">Dark</button>
  <button type="button" class="btn" id="btnPrint" title="Print notebook">Print</button>
  <div class="progressWrap" id="progressWrap" role="progressbar" aria-label="Notebook completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div id="progressBar" class="bar"></div></div>
  <div class="timerPanel" id="timerPanel" role="dialog" aria-label="Study timers"><div class="clock" id="clock" aria-hidden="true">--:--</div><p id="timerLabel" style="text-align:center;margin:0;font:13px var(--ui)">Choose a timer</p><div class="row"><button class="btn sm" data-timer="pomo" type="button">Pomodoro 25/5</button><button class="btn sm" data-timer="10" type="button">10 min</button><button class="btn sm" data-timer="15" type="button">15 min</button><button class="btn sm" data-timer="20" type="button">20 min</button><button class="btn sm" data-timer="stop" type="button">Stop</button></div></div>
</header>
<div class="shell">
<aside class="side" id="sidebar" aria-label="Notebook contents"><nav id="sidebarNav" aria-label="Contents">${nav}</nav></aside>
<main class="main" id="main" tabindex="-1">

<section class="sheet cover nonrv" id="cover" aria-labelledby="cover-h">
  <div class="kick">My personal knowledge archive · My course · My notes</div>
  <h1 id="cover-h" data-sx="Cover — ERP Business Applications" data-sec="Cover">ERP<span>Business Applications</span></h1>
  <p class="hand" style="font-size:22px;margin:4px 0">Interactive MBA Study Notebook</p>
  <p><b>PGDM — Research &amp; Business Analytics</b> · Trimester IV · ERP Business Applications (Elective, 1.5 credits, 8 sessions)</p>
  <p class="src">Built from: course outline (TLP) · faculty reading material 01 &amp; 02 · three supplied PYQ papers (2023, 2024, 2025). Notebook edition 2.0 — rebuilt from scratch.</p>
  <div class="pgrid" style="align-items:center">
    <div>${X.DG.cover}</div>
    <div>
      <div class="card"><div class="kick">Exam intelligence · from supplied papers only</div>
        <p><span class="stat">${X.pyqs.length}</span> questions in <span class="stat">${years.length}</span> papers</p>
        <p>ERP-strategy case: <b>${topicYears.STRAT.length} of ${years.length}</b> papers (compulsory Q1)<br>Conceptual model + architecture: <b>${topicYears.CONC.length} of ${years.length}</b> papers</p>
        <span class="stamp">PYQ-BACKED</span></div>
      <p style="margin-top:12px"><a class="btn" href="#how">Start here →</a> <a class="btn" href="#m1">Module 1</a> <a class="btn" href="#practice">PYQ practice</a> <a class="btn" href="#mcq">MCQ test</a></p>
    </div>
  </div>
</section>

<section class="sheet nonrv" id="how" aria-labelledby="how-h">
  <div class="kick">How to use this notebook</div><h2 class="mt" id="how-h" data-sx="How to use this notebook" data-sec="How to use">Read it like my own notes</h2>
  <div class="phases">${X.phases.map(p => `<div class="card phase" data-sx="Study path: ${esc(p.t)}" data-sec="How to use"><div class="kick">${esc(p.t)}</div><b>${esc(p.sub)}</b><ul>${p.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div>
  <h3>Label legend — where did this come from?</h3>
  <p>${TAGS.S} faculty slide / TLP / PYQ photo. ${TAGS.E} model-generated explanation or study framework (not Sir’s words). ${TAGS.X} invented illustration to make a concept concrete. ${TAGS.W} external web research — <b>none used in this edition</b>; every diagram is drawn from scratch.</p>
  <p class="src">Source hierarchy used: TLP → faculty material → PYQs → web (unused) → general model knowledge (explicitly tagged). Where sources conflict or are unclear, both are shown and nothing is silently “corrected”.</p>
  <details id="keys"><summary><b>Keyboard &amp; tools</b></summary><ul><li><kbd>/</kbd> search · <kbd>j</kbd>/<kbd>k</kbd> next/previous module · <kbd>f</kbd> focus mode · <kbd>r</kbd> revision mode · <kbd>t</kbd> theme · <kbd>Esc</kbd> close panels · <kbd>?</kbd> this list</li><li>Timers: Pomodoro 25/5 and 10/15/20-minute countdowns in the top bar. Progress is stored only in this browser (localStorage).</li></ul></details>
</section>

<section class="sheet nonrv" id="map" aria-labelledby="map-h">
  <div class="kick">Course map</div><h2 class="mt" id="map-h" data-sx="Course map and learning objectives" data-sec="Course map">Course map &amp; learning objectives</h2>
  <p>Instructor <b>Rahul Altekar</b> · ${tag('{S}')} Course outline: <i>To understand ERP concepts, evolution and best practices · To analyze business aspects of ERP systems · To evaluate business cases for ERP implementation.</i></p>
  <div class="tblwrap"><table class="tbl" data-sx="Course outcomes CO1 CO2 CO3" data-sec="Course map"><tr><th>CO</th><th>Outcome (TLP)</th></tr><tr><td>CO1</td><td>Apply ERP for integrating business functions and processes.</td></tr><tr><td>CO2</td><td>Analyze ERP adoption, implementation strategies, and business value.</td></tr><tr><td>CO3</td><td>Evaluate reengineered business processes and ERP-enabled operations.</td></tr></table></div>
  <p class="src">TLP evaluation: Continuous evaluation 40% + End-term 60%. Source: course outline PDF.</p>
  <h3>TLP topics → modules</h3>
  <div class="tblwrap"><table class="tbl"><tr><th>TLP</th><th>Topic</th><th>Modules</th></tr>${tlpMap.map(([n, t, ms]) => `<tr><td>${n}</td><td>${esc(t)}</td><td>${ms.split(' ').map(m => `<a href="#${m}">${m.toUpperCase()}</a>`).join(' ')}</td></tr>`).join('')}</table></div>
  <p class="warn">TLP 7.0 mentions “Introduction to Analytics” and “Importance of RDBMS”, and 8.0 “ERP Case Studies”: no dedicated slides were supplied for analytics or for stand-alone cases, so M10/M11 use only what exists (RDBMS in architecture; PYQ case scenarios).</p>
  <h3>Module → concept → application → PYQ → revision → assessment</h3>
  <div class="tblwrap"><table class="cmap" data-sx="Interactive course map" data-sec="Course map"><thead><tr><th>Module</th><th>Concept</th><th>Application</th><th>PYQ</th><th>Revision</th><th>Assessment</th></tr></thead><tbody>${mapRows}</tbody></table></div>
</section>

<section class="sheet nonrv" id="progress" aria-labelledby="progress-h">
  <div class="kick">My progress</div><h2 class="mt" id="progress-h" data-sx="My progress" data-sec="Progress">Three separate trackers</h2>
  <div class="prog">
    <div class="card"><b>Notebook</b> <small>(completed modules only)</small><div class="meter"><i id="mpNotebookBar"></i></div><div id="mpNotebook" class="hand">0 / ${X.modules.length}</div><small id="mpInProg"></small></div>
    <div class="card"><b>PYQ practice</b><div class="meter"><i id="mpPyqBar"></i></div><div id="mpPyq" class="hand">0 / ${X.pyqs.length}</div></div>
    <div class="card"><b>MCQ performance</b> <small>(not counted in notebook progress)</small><div class="meter"><i id="mpMcqBar"></i></div><div id="mpMcq" class="hand">Not attempted</div></div>
  </div>
  <p class="src">Stored in this browser only. Clearing site data resets it.</p>
</section>

${X.modules.map(renderModule).join('\n')}

<section class="sheet" id="archive" aria-labelledby="archive-h">
  <div class="kick">PYQ intelligence · archive</div><h2 class="mt" id="archive-h" data-sx="PYQ archive" data-sec="PYQ">PYQ archive — ${X.pyqs.length} questions, ${years.length} papers</h2>
  <p>Exact wording as read from the supplied photographs. Nothing here is invented.</p>
  <p class="warn">Reading note: papers are camera photos. The 2024 time field is overwritten by hand; the 2023 course code is blank; the 2025 paper prints CO4–CO6, which are not in the TLP’s CO1–CO3. These are recorded, not reconciled.</p>
  ${archive}
</section>

<section class="sheet" id="analysis" aria-labelledby="analysis-h">
  <div class="kick">PYQ intelligence · analysis of supplied papers</div><h2 class="mt" id="analysis-h" data-sx="PYQ topic map, frequency and patterns" data-sec="PYQ analysis">Topic map · frequency · patterns</h2>
  <h3>Topic map</h3>${topicMap}
  <h3>Frequency (distinct papers among the ${years.length} supplied)</h3>
  <div class="bars" data-sx="PYQ frequency analysis" data-sec="PYQ analysis">${freqRows}</div>
  <p class="src">Recurrence is counted only from the ${years.length} supplied papers (${years.join(', ')}). It describes the past, not a forecast. Best-practices family includes ATO/MTO, SNOP and ABC because the faculty slide lists CODP, SNOP, organisational structure and ABC as best-practice core themes.</p>
  <h3>Pattern analysis</h3>
  <ul data-sx="PYQ pattern analysis" data-sec="PYQ analysis"><li><b>Every paper</b> opens with a compulsory case: ERP Head / CIO / CDO, a named company (pharma · automobile · chemical) who sees ERP as technology; answer = ERP strategy with goals and implementation method (10, 20, 20 marks).</li>
  <li><b>Remaining questions</b> are 10 marks each: ${mk[10]} questions of 10 marks, ${mk[20]} of 20 marks in total; Bloom BL3 (Applying) and BL4 (Analysing) only.</li>
  <li><b>Repeated wording:</b> “Analyse the conceptual model and architectural aspects of ERP with examples” — 2023 Q3 and 2024 Q3.</li>
  <li><b>Module-type questions</b> (functional modules, item control, phantom item, MPS) appear in 2023 and 2024; the 2025 paper shifts to ATO/MTO, BPR-ERP paradox and SNOP/ABC with 5+5 mark splits.</li>
  <li><b>Choice rule varies:</b> 2023 any two of three; 2024 and 2025 any one of three.</li>
  <li><b>Question forms seen:</b> case report · explain · analyse · apply · comment/argue (“what first, why?”). No numerical question appears in the supplied papers.</li></ul>
  <p class="src">This is analysis of supplied papers, not a prediction.</p>
</section>

<section class="sheet nonrv" id="practice" aria-labelledby="practice-h">
  <div class="kick">PYQ practice mode</div><h2 class="mt" id="practice-h" data-sx="PYQ practice mode" data-sec="PYQ practice">Question → think → write → reveal framework</h2>
  <p class="hand" id="pyqCount" aria-live="polite"></p>
  <div id="pyqPractice"><div class="filters" id="pf" role="search" aria-label="PYQ filters"></div><p id="pshown" aria-live="polite" class="src"></p><div id="pl"></div></div>
  <p class="src">Model frameworks are <b>AI-generated study frameworks based on supplied course material</b>, not official answers.</p>
</section>

<section class="sheet" id="revision" aria-labelledby="revision-h">
  <div class="kick">Revision system</div><h2 class="mt" id="revision-h" data-sx="Revision system" data-sec="Revision">Revision mode, distinctions &amp; common mistakes</h2>
  <p>Press <b>Revision</b> in the top bar (or <kbd>r</kbd>) to show only definitions, frameworks, diagrams, key distinctions, PYQ links and common mistakes in every module.</p>
  <h3>Key distinctions</h3><div class="tblwrap"><table class="tbl" data-sx="Key distinctions" data-sec="Revision"><tr><th>Pair</th><th>Remember</th></tr>${distinctions.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</table></div>
  <h3>Common mistakes</h3><ul data-sx="Common exam mistakes" data-sec="Revision">${mistakes.map(m => `<li>${esc(m)}</li>`).join('')}</ul>
  <p class="src">Calculations: the supplied material contains no numerical ERP formulae, so no formula cards are included rather than inventing some.</p>
</section>

<section class="sheet" id="lastmin" aria-labelledby="lastmin-h">
  <div class="kick">Last-minute revision</div><h2 class="mt" id="lastmin-h" data-sx="Last-minute revision card" data-sec="Last-minute">Exam-morning card</h2>
  <div class="note no-print">One page. Read once. Then write.</div>
  <div data-sx="Last-minute revision card contents" data-sec="Last-minute">${lastCard}</div>
</section>

<section class="sheet nonrv mcq" id="mcq" aria-labelledby="mcq-h">
  <div class="kick">Final MCQ assessment</div><h2 class="mt" id="mcq-h" data-sx="Final MCQ assessment" data-sec="MCQ">${X.mcqs.length} questions grounded in this notebook</h2>
  <p class="src">${Object.entries(mcqLevels).map(([k, v]) => `${v} ${k}`).join(' · ')}. Types: conceptual, visual, scenario, application and calculation (marks arithmetic only). Score is separate from notebook progress.</p>
  <div id="mcqApp"></div>
</section>

<section class="sheet nonrv" id="audit" aria-labelledby="audit-h">
  <div class="kick">Source traceability</div><h2 class="mt" id="audit-h" data-sx="Source audit and ambiguities" data-sec="Audit">Source audit &amp; open ambiguities</h2>
  <div class="tblwrap"><table class="tbl" data-sx="Source inventory" data-sec="Audit"><tr><th>File</th><th>Role</th><th>Notes</th></tr>${X.sources.map(s => `<tr><td>${esc(s.f)}</td><td>${esc(s.t)}</td><td>${esc(s.n)}</td></tr>`).join('')}</table></div>
  <h3>Ambiguities &amp; OCR / reading uncertainty</h3><ul data-sx="Ambiguities" data-sec="Audit">${X.ambiguities.map(a => `<li>${esc(a)}</li>`).join('')}</ul>
  <p class="src">External web research: none used. Original source files were read only and not modified.</p>
</section>

</main></div>
<script>window.ERP2_DATA=${JSON.stringify(DATA).replace(/</g, '\\u003c')};</script>
<script>
${['store', 'core', 'search', 'pyq', 'mcq'].map(f => read(`js/${f}.js`)).join('\n')}
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, html, 'utf8');
const meta = {
  title: 'ERP Business Applications · Interactive MBA Study Notebook 2.0',
  slug: 'erp-business-applications-notebook-2',
  subject: 'Operations', category: 'Enterprise Systems',
  description: 'Fresh rebuild from the TLP, faculty reading material and supplied PYQs: 11 modules, redrawn faculty diagrams, PYQ archive/analysis/practice, revision mode, last-minute card and a 30-question MCQ assessment.',
  file: 'ERP_Business_Applications_Notebook_2.0.html',
  tags: ['Operations', 'ERP', 'MBA', 'PYQ', 'Revision', 'MCQ', 'Altekar', 'Trimester IV'],
  status: 'published', source: 'curriculum/weschool-term4-altekar', version: '2.0.0', templateVersion: 'erp-notebook-2.0',
  updated: '2026-10-04', featured: false, readTimeMinutes: 70, questionsCount: X.mcqs.length,
  courseContext: { course: 'ERP Business Applications (Elective)', instructor: 'Rahul Altekar', outcomes: ['CO1', 'CO2', 'CO3'] }
};
fs.writeFileSync(OUT.replace(/\.html$/, '.meta.json'), JSON.stringify(meta, null, 2) + '\n');
console.log(JSON.stringify({ out: OUT, bytes: html.length, modules: X.modules.length, diagrams: diagramCount + 1 + 0, pyqs: X.pyqs.length, mcqs: X.mcqs.length }));

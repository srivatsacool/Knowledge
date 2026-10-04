/**
 * ERP Notebook 2.0 — native SVG diagrams.
 * Every diagram is drawn from scratch (no screenshots). Faculty whiteboard diagrams are redrawn;
 * each caption states what is redrawn and what is interpretation.
 */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function svg(vb, label, body, extra = '') {
  return `<svg class="dg" ${extra} viewBox="${vb}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}
function tx(x, y, s, cls = '', anchor = 'middle') {
  const lines = String(s).split('\n');
  return `<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}">` +
    lines.map((l, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : 15}">${esc(l)}</tspan>`).join('') + `</text>`;
}
function box(x, y, w, h, s, cls = 'box', tcls = 'lbl') {
  const lines = String(s).split('\n').length;
  return `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>` +
    tx(x + w / 2, y + h / 2 + 5 - (lines - 1) * 7.5, s, tcls);
}
const mkDefs = (id) => `<defs>
<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="arwhead"/></marker>
</defs>`;

/* 1. Cover — "One System" hub */
function cover() {
  const mId = 'arw_cov';
  const sats = ['Finance', 'Logistics', 'Sales', 'Materials', 'Manufacturing', 'Distribution'];
  let b = mkDefs(mId) + `<circle class="hubc" cx="200" cy="150" r="52"/>` + tx(200, 146, 'ONE', 'big') + tx(200, 168, 'SYSTEM', 'big');
  sats.forEach((s, i) => {
    const a = (Math.PI * 2 * i) / sats.length - Math.PI / 2;
    const x1 = 200 + Math.cos(a) * 54, y1 = 150 + Math.sin(a) * 54;
    const x2 = 200 + Math.cos(a) * 105, y2 = 150 + Math.sin(a) * 88;
    const xBox = 200 + Math.cos(a) * 118, yBox = 150 + Math.sin(a) * 100;
    b += `<line class="ln dash" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" marker-end="url(#${mId})"/>`;
    b += `<rect class="box" x="${(xBox - 40).toFixed(1)}" y="${(yBox - 13).toFixed(1)}" width="80" height="26" rx="13"/>` + tx(xBox.toFixed(1), (yBox + 4).toFixed(1), s, 'lbl sm');
  });
  return svg('0 0 400 300', 'Hub diagram: finance, logistics, sales, materials, manufacturing and distribution all connected to one ERP system', b);
}

/* 2. Silo vs one system */
function oneSystem() {
  const mId = 'arw_os';
  const names = ['Finance', 'Sales', 'Materials', 'Mfg'];
  let b = mkDefs(mId) + tx(130, 22, 'Separate systems', 'hand') + tx(430, 22, 'ERP: one system', 'hand');
  names.forEach((n, i) => {
    b += box(20 + (i % 2) * 120, 40 + Math.floor(i / 2) * 80, 100, 56, n + '\nown data', 'box dashbox');
  });
  b += tx(130, 220, 'Same event typed many times;\nno common truth', 'note');
  b += `<path class="ln" d="M268 120h60" marker-end="url(#${mId})"/>`;
  b += `<rect class="box hubbox" x="350" y="150" width="160" height="40" rx="6"/>` + tx(430, 175, 'Common database', 'lbl');
  names.forEach((n, i) => {
    const x = 340 + i * 52;
    b += box(x - 6 + (i === 0 ? 0 : 0), 50, 48, 36, n, 'box', 'lbl xs');
    b += `<line class="ln" x1="${x + 18}" y1="86" x2="${x + 18 + (i - 1.5) * 10}" y2="150" marker-end="url(#${mId})" marker-start="url(#${mId})"/>`;
  });
  b += tx(430, 220, 'Record once at one place,\nreflected everywhere', 'note');
  return svg('0 0 560 250', 'Left: four departments with separate data. Right: the same departments connected through one common database.', b);
}

/* 3. System types ladder */
function sysTypes() {
  const mId = 'arw_st';
  const steps = [
    ['CONNECTED', 'Data focused', 'Data / information available across users\nCommon decision-making is a choice'],
    ['INTEGRATED', 'Information focused', 'Data / information available across users\nCommon decision-making done by the system\nBest practices – industry specific'],
    ['SYNCHRONIZED', 'Knowledge focused', 'Faculty slide lists the label only —\nno further detail supplied']
  ];
  let b = mkDefs(mId);
  steps.forEach((s, i) => {
    const x = 20 + i * 190, y = 150 - i * 45;
    b += `<rect class="box step${i}" x="${x}" y="${y}" width="180" height="${190 - (150 - y) + 0}" rx="6"/>`;
    b += tx(x + 90, y + 24, s[0], 'lbl b') + tx(x + 90, y + 44, s[1], 'hand sm');
    b += tx(x + 90, y + 70, s[2], 'note xs');
  });
  b += `<path class="ln" d="M40 308 L560 308" marker-end="url(#${mId})"/>` + tx(300, 328, 'increasing intelligence of the system', 'hand sm');
  return svg('0 0 600 340', 'Three ascending steps: Connected (data focused), Integrated (information focused), Synchronized (knowledge focused)', b);
}

/* 4. Evolution timeline */
function evolution() {
  const mId = 'arw_ev';
  const e = [['Scientific\nInventory\nControl', 'SIC'], ['MRP', ''], ['MRP-II', ''], ['ERP', ''], ['E-ERP', ''], ['SCM', '']];
  let b = mkDefs(mId) + `<line class="ln thick" x1="30" y1="80" x2="690" y2="80" marker-end="url(#${mId})"/>`;
  e.forEach((s, i) => {
    const x = 70 + i * 118;
    b += `<circle class="dot${i === 3 ? ' hot' : ''}" cx="${x}" cy="80" r="9"/>`;
    b += tx(x, i % 2 ? 125 : 45, s[0], 'lbl b');
  });
  b += tx(360, 175, 'Order shown is exactly as listed on the faculty “Evolution” slide', 'note');
  return svg('0 0 720 195', 'Timeline: Scientific Inventory Control, MRP, MRP-II, ERP, E-ERP, SCM', b);
}

/* 5. Value matrix — redrawn */
function valueMatrix() {
  const mId = 'arw_vm';
  const cols = ["'70", "'80", "'90", '2K'];
  const x0 = 130, cw = 130, y0 = 70;
  let b = mkDefs(mId);
  b += tx(x0 + cw * 1, 22, 'FPS ≈ Mass Production System (MPS)', 'hand sm') + tx(x0 + cw * 2.5, 22, '(TPS) Lean Production', 'hand sm') + tx(x0 + cw * 3.5, 40, '(DPS)', 'hand sm');
  b += `<line class="ln" x1="${x0}" y1="48" x2="${x0 + cw * 4}" y2="48" marker-end="url(#${mId})"/>`;
  const rows = [
    ['Market entry', ['Capability\nto produce', '', 'ATO', '']],
    ['Market leadership', ['HCP ?', 'Lowest\nprice', 'Q', 'D']],
    ['Time', cols],
    ['Focus', ['Production', 'Cost\nreduction', 'Customer', 'Service']],
    ['IT strategy', ['SIC', 'MRP', 'MRP-II', 'ERP']]
  ];
  rows.forEach((r, ri) => {
    const y = y0 + ri * 52;
    b += tx(x0 - 10, y + 30, r[0], 'hand sm', 'end');
    r[1].forEach((c, ci) => {
      const hot = ri === 4 && ci === 3;
      b += `<rect class="cell${hot ? ' hot' : ''}" x="${x0 + ci * cw}" y="${y}" width="${cw}" height="52"/>` + tx(x0 + ci * cw + cw / 2, y + 28 - (String(c).includes('\n') ? 7 : 0), c, 'lbl');
    });
  });
  b += `<path class="ln curve" d="M${x0 + 60} 142 Q${x0 + 90} 118 ${x0 + cw + 40} 140" marker-end="url(#${mId})"/>`;
  b += `<path class="ln curve" d="M${x0 + cw + 70} 142 Q${x0 + cw * 2} 112 ${x0 + cw * 2 + 40} 140" marker-end="url(#${mId})"/>`;
  b += `<path class="ln curve" d="M${x0 + cw * 2 + 70} 142 Q${x0 + cw * 3} 112 ${x0 + cw * 3 + 40} 140" marker-end="url(#${mId})"/>`;
  b += tx(x0 + cw * 2, 352, 'Each era: win the market entry ticket → compete for market leadership → next era resets the ticket', 'note');
  return svg('0 0 680 372', 'Value matrix redrawn: 1970s production and SIC, 1980s cost reduction and MRP, 1990s customer and MRP-II, 2000s service and ERP', b);
}

/* 6. Five pillars */
function pillars() {
  const p = ['Process-based\nflat\norganisation', 'Assemble-to-Order\nor Make-to-Order\nphilosophy', 'Empowered\nemployees', 'Customer &\nsupplier\nintegration', 'Sophisticated\nIT systems'];
  let b = `<polygon class="roof" points="20,60 310,15 600,60"/>` + tx(310, 48, 'ERP CONCEPTUAL MODEL', 'lbl b');
  p.forEach((s, i) => {
    const x = 40 + i * 112;
    b += `<rect class="pillar" x="${x}" y="72" width="96" height="150" rx="3"/>` + tx(x + 48, 125, s, 'lbl xs') + tx(x + 48, 92, String(i + 1), 'big sm');
  });
  b += `<rect class="base" x="20" y="224" width="580" height="22" rx="3"/>` + tx(310, 240, 'Best practice → customer focus · minimal waste · value creation', 'lbl xs');
  return svg('0 0 620 262', 'Five pillars: process-based flat organisation, ATO/MTO, empowered employees, customer and supplier integration, sophisticated IT', b);
}

/* 7. Architecture — redrawn */
function architecture() {
  let b = '';
  b += `<ellipse class="box" cx="270" cy="38" rx="62" ry="12"/><path class="box nofill" d="M208 38v34a62 12 0 0 0 124 0V38"/>` + tx(270, 62, 'Repository', 'lbl');
  b += `<line class="ln dbl" x1="270" y1="80" x2="270" y2="108"/>`;
  b += box(110, 108, 100, 40, 'GUI Driver') + box(220, 108, 100, 40, 'Logic Server') + box(330, 108, 100, 40, 'DB Driver');
  b += box(480, 108, 110, 100, 'RDBMS');
  b += `<line class="ln dbl" x1="210" y1="128" x2="220" y2="128"/><line class="ln dbl" x1="320" y1="128" x2="330" y2="128"/><line class="ln dbl" x1="430" y1="128" x2="480" y2="128"/>`;
  b += `<rect class="box os" x="110" y="168" width="320" height="40" rx="6"/>` + tx(270, 193, 'Operating System (Unix, NT)', 'lbl');
  [160, 270, 380].forEach(x => b += `<line class="ln dbl" x1="${x}" y1="148" x2="${x}" y2="168"/>`);
  b += tx(310, 240, 'Client-server architecture: 2 / 3 / n tier', 'hand');
  return svg('0 0 620 256', 'Client-server architecture: repository, GUI driver, logic server, DB driver and RDBMS on an operating system', b);
}

/* 8. CODP */
function codp() {
  const mId = 'arw_cd';
  let b = mkDefs(mId);
  b += tx(70, 24, 'Manufacturer', 'hand sm') + tx(610, 24, 'Customer', 'hand sm');
  const st = [['RM', 110, 54], ['Components', 220, 84], ['SFG', 360, 114], ['FG', 480, 144]];
  b += `<path class="ln thick" d="M40 40V54H${st[0][1]+40}V84H${st[1][1]+60}V114H${st[2][1]+60}V144H590"/>`;
  b += `<path class="ln thick" d="M590 30V280"/><path class="ln thick" d="M40 30V280"/>`;
  st.forEach(s => b += tx(s[1] + 20, s[2] - 6, s[0], 'lbl b sm'));
  const rows = [['MTS', 560, 190], ['ATO / CTO', 440, 214], ['MTO', 340, 238], ['ETO', 170, 262]];
  rows.forEach(r => {
    b += `<line class="ln dash" x1="60" y1="${r[2]}" x2="${r[1]}" y2="${r[2]}"/><line class="ln" x1="${r[1]}" y1="${r[2]}" x2="585" y2="${r[2]}" marker-end="url(#${mId})"/>`;
    b += `<circle class="dot hot" cx="${r[1]}" cy="${r[2]}" r="8"/>` + tx(620, r[2] + 5, r[0], 'lbl b sm', 'start');
  });
  b += tx(150, 300, '- - -  forecast-driven (before CODP)', 'note sm', 'start') + tx(150, 318, '——►  customer-order-driven (after CODP)', 'note sm', 'start');
  return svg('0 0 700 330', 'CODP diagram: customer order decoupling point sits at FG for make-to-stock, SFG for assemble/configure-to-order, components for make-to-order, and at start for engineer-to-order', b);
}

/* 9. ERP business process view — redrawn from faculty slide 14 */
function processView() {
  const mId = 'arw_pv';
  const N = {
    dep: ['Depots', 418, 118, 98, 24], wh: ['Warehouses', 254, 168, 108, 24], tpc: ['Transportation\nPlanning & Control', 410, 185, 136, 40],
    cus: ['Customers', 556, 160, 105, 26], drp: ['DRP', 250, 242, 98, 28], pp: ['Production Planning', 409, 241, 128, 28],
    so: ['Sales Order', 560, 238, 100, 28], ar: ['Accounts\nReceivables', 697, 245, 112, 38], bud: ['Budgets', 838, 168, 96, 26],
    fs: ['Financial\nStatements', 844, 250, 98, 38], edm: ['EDM', 225, 306, 76, 28], bom: ['BOM', 310, 320, 62, 28],
    mps: ['MPS', 425, 294, 62, 24], sr: ['Service\nRequirements', 247, 360, 126, 38], mrp: ['MRP', 410, 349, 90, 28],
    rt: ['Routing', 520, 319, 90, 28], fa: ['Fixed\nAssets', 570, 370, 86, 38], gl: ['General\nLedger', 692, 376, 100, 56],
    cm: ['Cash\nManagement', 845, 372, 110, 50], po: ['Purchase Order', 318, 420, 118, 28], sf: ['Shop Floor', 512, 424, 120, 28],
    co: ['Costing', 662, 455, 100, 30], su: ['Supplier', 221, 494, 96, 24], ir: ['Inventory Records', 418, 494, 160, 28],
    bk: ['Bank', 871, 465, 66, 28], ap: ['Accounts\nPayables', 230, 558, 110, 38]
  };
  const E = [['dep', 'wh'], ['dep', 'cus'], ['wh', 'tpc'], ['wh', 'drp'], ['drp', 'tpc'], ['tpc', 'cus'], ['cus', 'so'], ['cus', 'ar'], ['so', 'tpc'],
    ['drp', 'mps'], ['so', 'mps'], ['pp', 'mps', 1], ['mps', 'mrp', 1], ['edm', 'bom', 1], ['bom', 'mrp'], ['mrp', 'rt'], ['mrp', 'sr'], ['mrp', 'po', 1], ['mrp', 'sf', 1], ['mrp', 'ir'],
    ['po', 'su'], ['po', 'ir'], ['sf', 'ir'], ['sf', 'fa', 1], ['sf', 'co'], ['fa', 'gl'], ['gl', 'co'], ['gl', 'cm'], ['gl', 'ar', 1], ['ar', 'cm'], ['ar', 'fs', 1],
    ['bud', 'fs', 1], ['gl', 'fs', 1], ['cm', 'bk'], ['su', 'ap'], ['ap', 'gl'], ['ap', 'cm'], ['ir', 'gl', 1]];
  const clip = (a, b) => { // point on rect a boundary toward b
    const [, ax, ay, aw, ah] = a, [, bx, by] = b; const dx = bx - ax, dy = by - ay;
    const sx = dx ? (aw / 2) / Math.abs(dx) : Infinity, sy = dy ? (ah / 2) / Math.abs(dy) : Infinity; const s = Math.min(sx, sy);
    return [ax + dx * s, ay + dy * s];
  };
  let b = mkDefs(mId) + `<g transform="translate(-150,-85)">`;
  E.forEach(([f, t, one]) => {
    const A = N[f], B = N[t]; const p = clip(A, B), q = clip(B, A);
    b += `<line class="ln" x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" ${one ? '' : `marker-start="url(#${mId})"`} marker-end="url(#${mId})"/>`;
  });
  Object.entries(N).forEach(([k, v]) => {
    const fin = ['ar', 'bud', 'fs', 'fa', 'gl', 'cm', 'co', 'bk', 'ap'].includes(k);
    const mfg = ['pp', 'mps', 'mrp', 'edm', 'bom', 'rt', 'sr', 'po', 'sf', 'ir'].includes(k);
    b += `<rect class="box pv ${fin ? 'fin' : mfg ? 'mfg' : 'dist'}" x="${v[1] - v[3] / 2}" y="${v[2] - v[4] / 2}" width="${v[3]}" height="${v[4]}" rx="3"/>` +
      tx(v[1], v[2] + 4 - (v[0].includes('\n') ? 7 : 0), v[0], 'lbl pvt');
  });
  b += `</g>`;
  return svg('0 0 780 500', 'ERP business process view redrawn: distribution, manufacturing planning and financial modules connected by two-way data flows', b);
}

/* 10. BPR ↔ ERP loop */
function chickenEgg() {
  const mId = 'arw_ce';
  let b = mkDefs(mId);
  b += box(30, 70, 150, 54, 'BPR\nredesign processes', 'box') + box(300, 70, 150, 54, 'ERP\nsystem configured', 'box');
  b += `<path class="ln curve" d="M180 84 Q240 30 300 84" marker-end="url(#${mId})"/>` + tx(240, 40, '“fit the system?”', 'note xs');
  b += `<path class="ln curve" d="M300 112 Q240 165 180 112" marker-end="url(#${mId})"/>` + tx(240, 165, '“which process to automate?”', 'note xs');
  b += tx(240, 215, 'Chicken-and-egg: each seems to need the other first', 'hand sm');
  return svg('0 0 480 235', 'Loop diagram: BPR and ERP each appear to depend on the other', b);
}

/* 11. Implementation success — redrawn */
function implMethod() {
  const mId = 'arw_im';
  let b = mkDefs(mId);
  const c = (x, y, t, s) => `<rect class="box" x="${x}" y="${y}" width="${160}" height="${50}" rx="4"/>` + tx(x + 80, y + 20, t, 'lbl xs b') + tx(x + 80, y + 38, s, 'lbl xs acc');
  b += c(60, 20, 'THE CLIENT', 'INDUSTRY FOCUS') + c(300, 20, 'THE USER', 'CULTURE FOCUS');
  b += c(0, 120, 'THE ERP BRAND', 'BEST PRACTICE') + c(360, 120, 'THE CONSULTANT', 'BPR FOCUS') + c(180, 215, 'THE METHODOLOGY', 'VALUE FOCUS');
  b += `<rect class="box hubbox" x="190" y="115" width="140" height="56" rx="4"/>` + tx(260, 148, 'ERP SUCCESS', 'lbl b');
  b += `<line class="ln" x1="140" y1="70" x2="215" y2="115" marker-end="url(#${mId})"/><line class="ln" x1="380" y1="70" x2="305" y2="115" marker-end="url(#${mId})"/>`;
  b += `<line class="ln" x1="160" y1="145" x2="190" y2="145" marker-end="url(#${mId})"/><line class="ln" x1="360" y1="150" x2="330" y2="148" marker-end="url(#${mId})"/><line class="ln" x1="260" y1="215" x2="260" y2="171" marker-end="url(#${mId})"/>`;
  return svg('0 0 520 275', 'Five factors lead to ERP success: client (industry focus), user (culture focus), ERP brand (best practice), consultant (BPR focus), methodology (value focus)', b);
}

/* 12. Strategy charter flow */
function charterFlow() {
  const mId = 'arw_cf';
  const s = ['1 Context\nwho / what / pain', '2 Reframe\nbusiness strategy\nnot just IT', '3 Goals\ncustomer · cost · growth', '4 Model\n5 pillars + best practices', '5 Method\nmethodology + approach', '6 Value\nreadiness · measure'];
  let b = mkDefs(mId);
  s.forEach((t, i) => {
    const x = 10 + i * 125;
    b += box(x, 20, 112, 68, t, 'box step' + (i % 3), 'lbl xs');
    if (i < s.length - 1) b += `<line class="ln" x1="${x + 112}" y1="54" x2="${x + 125}" y2="54" marker-end="url(#${mId})"/>`;
  });
  return svg('0 0 760 110', 'Six-step ERP strategy charter: context, reframe, goals, model, method, value', b);
}

/* 13. Module relationship (Manufacturing / Distribution / Financial) */
function moduleTriad() {
  const mId = 'arw_mt';
  let b = mkDefs(mId);
  b += box(20, 20, 150, 60, 'MANUFACTURING\nCapacity planning\nItem control', 'box mfg', 'lbl xs');
  b += box(240, 20, 150, 60, 'DISTRIBUTION', 'box dist', 'lbl xs');
  b += box(130, 140, 160, 50, 'FINANCIAL', 'box fin', 'lbl xs');
  b += `<line class="ln" x1="170" y1="50" x2="240" y2="50" marker-start="url(#${mId})" marker-end="url(#${mId})"/><line class="ln" x1="95" y1="80" x2="170" y2="140" marker-start="url(#${mId})" marker-end="url(#${mId})"/><line class="ln" x1="315" y1="80" x2="250" y2="140" marker-start="url(#${mId})" marker-end="url(#${mId})"/>`;
  b += tx(210, 212, 'Modules as listed on faculty slide “ERP Modules”', 'note xs');
  return svg('0 0 410 225', 'Three module groups: Manufacturing (capacity planning, item control), Distribution, Financial, all linked', b);
}

const D = { cover, oneSystem, sysTypes, evolution, valueMatrix, pillars, architecture, codp, processView, chickenEgg, implMethod, charterFlow, moduleTriad };
module.exports = Object.fromEntries(Object.entries(D).map(([k, f]) => [k, f()]));

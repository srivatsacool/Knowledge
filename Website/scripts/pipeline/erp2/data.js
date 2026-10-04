/**
 * ERP Notebook 2.0 — content data.
 * Markers: {S}=faculty/course SOURCE, {E}=EXPLANATION (model-generated, outside supplied slides),
 *          {X}=ILLUSTRATIVE EXAMPLE, {W}=WEB RESEARCH (none used in this build).
 * Everything tagged {S} is traceable to the three supplied PDFs / the TLP / the PYQ photos.
 */
const D = require('./diagrams');

const RM1 = 'Faculty Reading Material 01';
const RM2 = 'Faculty Reading Material 02';

const modules = [
/* ───────── M1 ───────── */
{
  id: 'm1', title: 'Why ERP? Relevance & Concept', tlp: '1.0', signal: ['CORE', 'PYQ', 'CASE STUDY'],
  why: 'Every one of the three supplied papers opens with a compulsory ERP-strategy case. This module gives you the argument that case answers are built on: ERP is a business philosophy first and software second.',
  obj: ['State the four “relevance” drivers from the faculty slides', 'Reproduce the three concept statements of ERP', 'Argue why ERP is a business strategy, not merely an IT project'],
  blocks: [
    { k: 'core', h: 'Three statements of what ERP is', html:
      `<p>{S} The faculty “Concepts” slide gives three statements:</p><ol class="cl">
      <li>A <mark>planning methodology or philosophy</mark> based on the seamless integration of all the business processes of an enterprise.</li>
      <li>A <mark>set of software</mark> covering finance, logistics, sales, materials, manufacturing, distribution etc., so tightly integrated that <mark>any business activity recorded at one place is immediately reflected in all other places</mark>.</li>
      <li>The <mark>finest expression of the inseparability of Info-tech and business</mark> — an enterprise-wide system with enabling technology and an effective managerial tool for integrating all levels and improving reportability.</li></ol>
      <p class="src">Source: ${RM1}, “Concepts” slide.</p>` },
    { k: 'faculty', h: 'Faculty terminology — Relevance & Agenda', html:
      `<p>{S} <b>Relevance</b> slide: Changing Business Scenario · Role of Information in Decision Making · Need to act as “One System” · Performance V/S Perceptions.</p>
       <p>{S} <b>Agenda</b> slide: Introduction · Conceptual Origination · Evolution · Structure &amp; Architecture · Global Best Practices · Myths.</p>
       <p class="src">Source: ${RM1}, slides 2–3.</p>` },
    { k: 'explain', h: 'Detailed explanation', html:
      `<p>{E} Read the three statements as three <em>lenses</em>: statement 1 = <b>management</b> lens (philosophy), statement 2 = <b>system</b> lens (software), statement 3 = <b>fusion</b> lens (IT and business cannot be separated). An exam answer that only uses lens 2 sounds like an IT answer — that is precisely the trap in all three Q1 cases.</p>
       <p>{E} “Need to act as One System”: departments that plan on their own data make locally sensible but globally inconsistent decisions. “Performance v/s Perceptions” is listed as a heading only; its detailed meaning is not in the supplied slides — treat as <i>source wording unclear</i> and confirm from class notes.</p>` },
    { k: 'visual', h: 'Visual: from separate systems to one system', svg: 'oneSystem', cap: 'Original infographic. Concept per faculty statement 2 (“recorded at one place, reflected in all other places”).' },
    { k: 'example', h: 'Example', html: `<p>{X} Illustrative only: a pharmaceutical company books one customer order. In an integrated system the same entry updates available stock, triggers production/purchase planning and creates the receivable — nobody re-types it.</p>` },
    { k: 'apply', h: 'Application — the “business vs IT” argument', html:
      `<ul><li>{E} Business objective first (growth, customer centricity), technology second.</li><li>{E} Process integration changes <em>how people work and decide</em>, not just where data sits.</li><li>{S} Statement 3: IT and business are inseparable, so the “technology intervention” framing alone is incomplete.</li></ul>` },
    { k: 'exam', h: 'Exam angle', html: `<p>PYQ signal: ERP-as-business-strategy appears in the compulsory Q1 of <b>3 of 3</b> supplied papers (2023, 2024, 2025). Open every strategy answer with statement 1 + 3.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>“ERP = software.” The faculty myths list explicitly contains <i>“ERP is software system”</i> and <i>“ERP is computerization project of the company”</i> as <b>myths</b>.</p>` },
    { k: 'check', q: 'Which concept statement stresses the inseparability of Info-tech and business?', a: 'The third statement — “the finest expression of the inseparability of Info-tech and business”.' },
    { k: 'pyq', ids: ['2023-Q1', '2024-Q1', '2025-Q1'] },
    { k: 'summary', html: `<ul><li>ERP = philosophy + integrated software + inseparability of IT &amp; business.</li><li>Activity recorded once, reflected everywhere.</li><li>Cases reward the <b>business-strategy</b> framing.</li></ul>` }
  ]
},
/* ───────── M2 ───────── */
{
  id: 'm2', title: 'System Types, Evolution & Value Matrix', tlp: '1.0', signal: ['CORE', 'DIAGRAM', 'CONCEPTUAL'],
  why: 'It explains where ERP came from and why each era’s IT strategy followed the business’s competitive focus — the “origin” part of the conceptual story.',
  obj: ['Differentiate connected, integrated and synchronized systems', 'Sequence the evolution SIC → MRP → MRP-II → ERP → E-ERP → SCM', 'Read the faculty value matrix: era → focus → IT strategy'],
  blocks: [
    { k: 'core', h: 'Three system types', html:
      `<table class="tbl"><tr><th>Type</th><th>Focus</th><th>Faculty detail</th></tr>
       <tr><td>Connected</td><td>Data</td><td>Data/information available across users; common decision-making is <b>choice</b></td></tr>
       <tr><td>Integrated</td><td>Information</td><td>Same availability; common decision-making is <b>done by the system</b>; best practices — industry specific</td></tr>
       <tr><td>Synchronized</td><td>Knowledge</td><td><i>Label only on the slide — no sub-points supplied</i></td></tr></table>
       <p class="src">Source: ${RM1}, “System Types” slide.</p>` },
    { k: 'faculty', h: 'Faculty terminology', html: `<p>{S} <b>Choice</b> vs <b>done by system</b> is the faculty’s key discriminator between connected and integrated. {S} Evolution list: Scientific Inventory Control Methods · MRP · MRP–II · ERP · E-ERP · SCM.</p>` },
    { k: 'visual', h: 'Visual: system types', svg: 'sysTypes', cap: 'Original diagram of the faculty “System Types” slide.' },
    { k: 'visual', h: 'Visual: evolution', svg: 'evolution', cap: 'Original timeline; order exactly as on the faculty “Evolution” slide.' },
    { k: 'visual', h: 'Framework: Value Matrix Analysis (redrawn)', svg: 'valueMatrix', cap: 'Redrawn from the whiteboard photo on Reading Material 01, slide 9. Cell labels preserved; “HCP ?” is hard to read in the photo (source wording unclear).' },
    { k: 'explain', h: 'Reading the value matrix', html:
      `<p>{S} Whiteboard rows: Market entry · Market leadership · Time (’70, ’80, ’90, 2K) · Focus (Production, Cost reduction, Customer, Service) · IT strategy (SIC, MRP, MRP-II, ERP). Top labels: “FPS ≈ Mass production system (MPS)”, “(TPS) Lean Production”, “(DPS)”, and “ATO” near the ’90s column.</p>
       <p>{E} Interpretation: the business competes on <em>capability to produce</em> → <em>lowest price</em> → <em>quality</em> → <em>delivery/service</em>, and each shift of focus pulls a richer IT strategy behind it. By 2K the focus is service and the IT strategy is ERP.</p>
       <p class="warn">Ambiguity: the board does not spell out “FPS”, “TPS”, “DPS”, “Q”, “D”. {E} Commonly read as Ford / Toyota / Dell Production System and Quality / Delivery — <b>not confirmed by the supplied material</b>. Check with class notes before quoting.</p>` },
    { k: 'example', h: 'Example', html: `<p>{X} Connected: every department can see the same sales dashboard, but managers decide what to do. Integrated: the system itself proposes/executes the replenishment per built-in best practice.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>Connected ≠ integrated. In a connected system people <i>choose</i>; in an integrated system the <i>system</i> applies common decision logic.</p>` },
    { k: 'check', q: 'In the faculty value matrix, what IT strategy sits under the “Customer” focus era (’90s)?', a: 'MRP-II.' },
    { k: 'pyq', ids: ['2023-Q3', '2024-Q3', '2025-Q2'], note: 'Indirect support: the evolution story is the “origin” for conceptual-model answers.' },
    { k: 'summary', html: `<ul><li>Connected = data/choice; Integrated = information/system decides; Synchronized = knowledge.</li><li>SIC → MRP → MRP-II → ERP → E-ERP → SCM.</li><li>Matrix: ’70 production/SIC · ’80 cost/MRP · ’90 customer/MRP-II · 2K service/ERP.</li></ul>` }
  ]
},
/* ───────── M3 ───────── */
{
  id: 'm3', title: 'Conceptual Model: Five Pillars & the 5 Cs', tlp: '1.0', signal: ['CORE', 'HIGH PRIORITY', 'PYQ', 'DIAGRAM'],
  why: '“Analyse the conceptual model and architectural aspects of ERP with examples” is the same question in two supplied papers. The five pillars are the conceptual half of that answer.',
  obj: ['List and explain the five pillars', 'Apply each pillar to a named business', 'Recall the 5 Cs of ERP and the Pancanga heading'],
  blocks: [
    { k: 'core', h: 'The five pillars', html:
      `<ol class="cl"><li>Process-based Flat Organization</li><li>Assemble To Order or Make To Order Philosophy</li><li>Empowered Employees</li><li>Customer and Supplier Integration</li><li>Sophisticated IT Systems</li></ol><p class="src">Source: ${RM1}, “Conceptual Model: 5 Pillars”.</p>` },
    { k: 'visual', h: 'Visual: ERP conceptual model', svg: 'pillars', cap: 'Original diagram. Pillar names verbatim from the faculty slide; base line from the Best Practices slide (customer focus, minimal waste, value creation).' },
    { k: 'explain', h: 'Pillar-by-pillar explanation', html:
      `<p>{E} The slides list names only; the explanations below are model-generated study aids.</p>
       <table class="tbl"><tr><th>Pillar</th><th>Meaning</th><th>Why ERP needs it</th></tr>
       <tr><td>1 Process-based flat organisation</td><td>Work organised around end-to-end processes with fewer hierarchy layers</td><td>One process spans many functions; ERP records it once</td></tr>
       <tr><td>2 ATO / MTO</td><td>Build/assemble against customer order rather than forecast stock</td><td>Ties production and procurement to real demand (see CODP, M5)</td></tr>
       <tr><td>3 Empowered employees</td><td>Decisions pushed to the person with the information</td><td>Real-time shared data makes this safe</td></tr>
       <tr><td>4 Customer &amp; supplier integration</td><td>Extend the one-system view outside the firm</td><td>Links to “Connected = external” in the 5 Cs</td></tr>
       <tr><td>5 Sophisticated IT</td><td>The enabling technology layer</td><td>Architecture in M4</td></tr></table>` },
    { k: 'faculty', h: 'Faculty terminology — “Watch 5 Cs of ERP”', html:
      `<table class="tbl"><tr><th>C</th><th>Faculty slide wording</th></tr>
       <tr><td>Complete</td><td>Business processes</td></tr>
       <tr><td>Connected</td><td>Integrated = internal · Connected = external</td></tr>
       <tr><td>Cognitive</td><td>Pattern detection for failures</td></tr>
       <tr><td>Compliant</td><td>Legal / Best Practices / GMPs (Good Manufacturing Practices) / SOPs</td></tr>
       <tr><td>Capable</td><td>Speed &amp; volume handling (accuracy is assumed)</td></tr></table>
       <p class="src">Source: ${RM2}, slide 4.</p>
       <p class="warn">“ERP Pancanga (Five Elements) Concept” (${RM2}, slide 8) has a heading and an image only. No explanatory text was supplied, so no mapping is asserted here — confirm what Sir said in class.</p>` },
    { k: 'example', h: 'Example', html: `<p>{X} An automobile maker (as in the 2024 case) running assemble-to-order: dealers (customer integration) and component suppliers (supplier integration) feed one plan; shop-floor staff (empowered) react to the shared schedule.</p>` },
    { k: 'apply', h: 'Application', html: `<p>{E} For any case, write one line per pillar: “How does this company’s organisation / order philosophy / people / partners / IT look today, and what must change?”</p>` },
    { k: 'exam', h: 'Exam angle', html: `<p>PYQ: “Analyse the conceptual model and architectural aspects of ERP with examples” — <b>2 of 3</b> supplied papers (2023 Q3, 2024 Q3, 10 marks, BL4). Use 5 pillars + 5 Cs, then architecture (M4).</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>Pillars (conceptual model) are not the 5 Cs (watch-list) and neither is the Pancanga image. Keep three separate lists.</p>` },
    { k: 'check', q: 'Name the two “C”s whose meaning is “internal vs external”.', a: 'Connected — Integrated = internal, Connected = external.' },
    { k: 'pyq', ids: ['2023-Q3', '2024-Q3', '2023-Q1', '2024-Q1', '2025-Q1'] },
    { k: 'summary', html: `<ul><li>5 pillars: process-based flat org · ATO/MTO · empowered employees · customer &amp; supplier integration · sophisticated IT.</li><li>5 Cs: Complete, Connected, Cognitive, Compliant, Capable.</li></ul>` }
  ]
},
/* ───────── M4 ───────── */
{
  id: 'm4', title: 'Technology Overview & Architecture', tlp: '2.0', signal: ['CORE', 'DIAGRAM', 'PYQ'],
  why: 'The architectural half of the repeated Q3. Short, diagram-based, and easy marks if you can redraw it.',
  obj: ['Redraw the client-server architecture slide', 'Explain 2/3/n-tier', 'Explain why an RDBMS is central'],
  blocks: [
    { k: 'core', h: 'Faculty architecture slide', html: `<p>{S} “Client-Server (2/3/n Tier)”. Components drawn: <b>Repository, GUI Driver, Logic Server, DB Driver, RDBMS</b>, all sitting on <b>Operating System (Unix, NT)</b>.</p><p class="src">Source: ${RM1}, slide 7.</p>` },
    { k: 'visual', h: 'Visual: architecture (redrawn)', svg: 'architecture', cap: 'Redrawn from faculty slide 7. Double lines = connections in the original.' },
    { k: 'explain', h: 'Detailed explanation', html:
      `<p>{E} <b>GUI driver</b> = what the user sees (presentation). <b>Logic server</b> = business rules/processing. <b>DB driver + RDBMS</b> = storing and retrieving the single shared data. <b>Repository</b> = the stored definitions/metadata the system runs on. Operating system hosts all of it.</p>
       <p>{E} 2-tier = client talks directly to the database server; 3-tier = a separate application/logic layer in the middle; n-tier = further layers (e.g., web, integration). More tiers → easier scaling and maintenance.</p>
       <p>{S} The TLP lists “Importance of RDBMS” and “Introduction to Analytics” under topic 7.0; the supplied slides give only the RDBMS box in the architecture. No analytics slide was supplied.</p>` },
    { k: 'example', h: 'Example', html: `<p>{X} A user in a warehouse opens a screen (GUI) → the logic server checks stock rules → the DB driver fetches the item record from the RDBMS.</p>` },
    { k: 'exam', h: 'Exam angle', html: `<p>Pair this with M3 for the 10-mark “conceptual model and architectural aspects” answer; a clean diagram + 3 lines of explanation gains marks quickly.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>“Tier” counts layers of the client-server design — not the number of modules.</p>` },
    { k: 'check', q: 'Which architecture component is named as the base on which all drivers sit?', a: 'Operating System (Unix, NT).' },
    { k: 'pyq', ids: ['2023-Q3', '2024-Q3'] },
    { k: 'summary', html: `<ul><li>Client-server, 2/3/n tier.</li><li>Repository · GUI driver · Logic server · DB driver · RDBMS · OS.</li></ul>` }
  ]
},
/* ───────── M5 ───────── */
{
  id: 'm5', title: 'Global Best Practices: CODP, SNOP, ABC', tlp: '3.0', signal: ['CORE', 'HIGH PRIORITY', 'PYQ', 'DIAGRAM'],
  why: 'Best practices are named directly in a PYQ (2024 Q4), and two of the four questions in the 2025 paper (ATO/MTO; SNOP + ABC) come from this family.',
  obj: ['Define “best practice” the faculty way', 'Place MTS / ATO-CTO / MTO / ETO on the CODP diagram', 'Explain how ERP adds value in ATO & MTO', 'Explain SNOP and ABC with examples'],
  blocks: [
    { k: 'core', h: 'Best practice & core themes', html:
      `<p>{S} Best Practice = a practice that uses the <b>5 pillars</b> to generate <b>Customer Focus · Minimal Waste of Resources · Value Creation</b>.</p>
       <p>{S} Core themes: <b>CODP · Demand Management to SNOP · Organizational Structure · ABC</b>.</p><p class="src">Source: ${RM1}, slide 10.</p>` },
    { k: 'visual', h: 'Visual: CODP (redrawn)', svg: 'codp', cap: 'Redrawn from the whiteboard photo on slide 11 (stages RM → Components → SFG → FG; rows MTS, ATO/CTO, MTO, ETO). The forecast/order shading is {E} explanation, not on the board.' },
    { k: 'explain', h: 'CODP, ATO and MTO', html:
      `<p>{S} Board: stages <b>RM, Components, SFG, FG</b>; scenarios <b>MTS, ATO/CTO, MTO, ETO</b>, each with a circled point on its row.</p>
       <p>{E} CODP = Customer Order Decoupling Point: the stage up to which you plan to forecast and after which the customer order pulls. Further to the right (near FG) = more stock-driven (MTS); further left = more customer-specific (ETO).</p>
       <p>{E} <b>Value of ERP in ATO/MTO</b> (2025 Q2): keeps components/semi-finished goods planned against forecast, then triggers final assembly/manufacture only on the order; gives realistic promise dates from shared stock + capacity; cuts finished-goods inventory; one plan across sales, planning, purchasing.</p>` },
    { k: 'explain', h: 'SNOP & ABC', html:
      `<p>{S} Slide wording: “Demand Management to SNOP”. {E} SNOP is generally expanded as <b>Sales &amp; Operations Planning</b> — the monthly cross-functional process that balances demand (sales plan) against supply (capacity, materials, inventory) and produces one agreed plan that feeds the master schedule. The expansion is not written on the supplied slide.</p>
       <p>{S} Slide wording: “ABC”. <span class="warn-i">Source wording unclear — the abbreviation is not expanded.</span> {E} In an ERP/inventory context it is usually ABC analysis: rank items by annual value so that few <b>A</b> items (high value) get tight control, many <b>C</b> items (low value) get simple control. “ABC” also abbreviates Activity-Based Costing; confirm with Sir.</p>
       <p>{S} “Organizational Structure” is listed as a core theme with no detail; {E} read together with pillar 1 (process-based flat organisation).</p>` },
    { k: 'example', h: 'Example', html: `<p>{X} Automobile (ATO): engines/gearboxes stocked to forecast; the car is finished with the colour/trim/options the dealer ordered. {X} ABC: 10% of SKUs carry most of the value — count them monthly; low-value fasteners — reorder bins.</p>` },
    { k: 'apply', h: 'Application — answer structure', html: `<ol class="cl"><li>Define best practice (5 pillars → customer focus, minimal waste, value creation).</li><li>Take each core theme: CODP → SNOP → organisation → ABC.</li><li>One example each; tie back to the case company.</li></ol>` },
    { k: 'exam', h: 'Exam angle', html: `<p>Best-practices family (best practices, ATO/MTO, SNOP, ABC): 2024 Q4, 2025 Q2, 2025 Q4 — appears in <b>2 of 3</b> supplied papers.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>CODP is a <i>point</i> in the supply chain, not a department. ATO and MTO differ in <i>where</i> the CODP is.</p>` },
    { k: 'check', q: 'In the CODP board, which scenario’s circle sits at FG (nearest the customer)?', a: 'MTS (make-to-stock).' },
    { k: 'pyq', ids: ['2024-Q4', '2025-Q2', '2025-Q4'] },
    { k: 'summary', html: `<ul><li>Best practice = 5 pillars → customer focus, minimal waste, value creation.</li><li>CODP · Demand mgmt → SNOP · Org structure · ABC.</li><li>MTS (FG) → ATO/CTO (SFG) → MTO (components) → ETO (start).</li></ul>` }
  ]
},
/* ───────── M6 ───────── */
{
  id: 'm6', title: 'Plossl’s Theory of Manufacturing', tlp: '3.0', signal: ['CORE', 'CONCEPTUAL', 'REVISION'],
  why: 'Twelve crisp principles on two faculty slides — ideal for definitions, one-liners and MCQs, though it has not yet been asked directly in the supplied papers.',
  obj: ['Recall the twelve principles', 'Group them into four themes', 'Use them to justify ERP-based planning'],
  blocks: [
    { k: 'core', h: 'The twelve principles (faculty wording)', html:
      `<ol class="cl plossl">
       <li>Production problems must and can be eliminated; they cannot be covered up successfully with cushions of inventory and time.</li>
       <li>Inventory is more of a liability than an asset, having real value only when it is flowing through operations or used to support them.</li>
       <li>Tolerating some downtime while striving to eliminate their causes is better than preventing idle time by manufacturing items not required immediately.</li>
       <li>More frequent and precise re-planning (daily rather than weekly) does not make it more accurate.</li>
       <li>Re-planning is admitting failure; it’s not a substitute for sound execution.</li>
       <li>Plans impossible to execute are worse than useless.</li>
       <li>Lead times cannot only be monitored and adjusted but can also be controlled.</li>
       <li>Reducing setup time is worth the effort.</li>
       <li>Planning defines resources needed to make what is planned; execution applies available resources to make what customers want now.</li>
       <li>Only resources requiring long periods for actions should be planned ahead; detailed plans should cover only very short horizons.</li>
       <li>There is one manufacturing planning and control system framework common to all types of manufacturing.</li>
       <li>All employees need continuous education.</li></ol>
       <p class="src">Source: ${RM1}, slides 12–13.</p>` },
    { k: 'explain', h: 'Four themes (study grouping)', html:
      `<table class="tbl"><tr><th>Theme</th><th>Principles</th><th>One-line takeaway</th></tr>
       <tr><td>Inventory &amp; problems</td><td>1, 2, 3</td><td>Fix causes; do not hide them in stock or idle-time avoidance</td></tr>
       <tr><td>Planning discipline</td><td>4, 5, 6, 9, 10</td><td>Plan only what can be executed; keep detail short-horizon</td></tr>
       <tr><td>Lead time &amp; set-up</td><td>7, 8</td><td>Both are controllable, not fixed</td></tr>
       <tr><td>Framework &amp; people</td><td>11, 12</td><td>One MP&amp;C framework; continuous education</td></tr></table>
       <p>{E} The grouping is a memory aid created for this notebook, not Sir’s categorisation.</p>` },
    { k: 'apply', h: 'Application', html: `<p>{E} Link to ERP: shared real-time data supports principle 7 (lead times controlled), principle 9 (plan vs execute) and principle 11 (one framework for every manufacturing type).</p>` },
    { k: 'exam', h: 'Exam angle', html: `<p>Not asked directly in the 3 supplied papers. Faculty slides emphasise it (two full slides); treat as <b>MCQ / short-note material</b>.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>Principle 4 does <i>not</i> say “never re-plan”; it says higher frequency/precision does not equal higher accuracy.</p>` },
    { k: 'check', q: 'Plossl: inventory is more of a ______ than an asset.', a: 'Liability — real value only when flowing through operations or supporting them.' },
    { k: 'summary', html: `<ul><li>12 principles → 4 themes.</li><li>Keywords: liability · re-planning = failure · lead times controllable · set-up reduction · one framework · continuous education.</li></ul>` }
  ]
},
/* ───────── M7 ───────── */
{
  id: 'm7', title: 'Functional Modules & Business Process View', tlp: '4.0', signal: ['CORE', 'HIGH PRIORITY', 'PYQ', 'DIAGRAM', 'APPLICATION'],
  why: 'Modules, item control, phantom item and MPS account for three of the nine non-case PYQs. The business-process diagram shows how the modules actually link.',
  obj: ['List the faculty’s module groups', 'Trace MPS → MRP → shop floor / purchase → inventory → ledger on the process view', 'Explain item control, phantom item and MPS'],
  blocks: [
    { k: 'core', h: 'Faculty module list', html: `<p>{S} <b>Manufacturing</b> (Capacity Planning, Item Control) · <b>Distribution</b> · <b>Financial</b>. TLP topic 4.0: “Functional Modules of ERP: Manufacturing, Distribution, Financials etc.”</p><p class="src">Source: ${RM2} slide 3; TLP.</p>` },
    { k: 'visual', h: 'Visual: module groups', svg: 'moduleTriad', cap: 'Original diagram of the faculty “ERP Modules” slide.' },
    { k: 'visual', h: 'Framework: ERP business process view (redrawn)', svg: 'processView', cap: 'Redrawn from faculty slide 14 (a textbook figure). Colours: blue = distribution/planning interface, amber = manufacturing, green = financial. Arrows simplified; semantic grouping is mine.' },
    { k: 'explain', h: 'Reading the process view', html:
      `<p>{S} Nodes on the figure include Depots, Warehouses, Transportation Planning &amp; Control, DRP, Customers, Sales Order, Production Planning, <b>MPS</b>, <b>MRP</b>, BOM, EDM, Routing, Service Requirements, Purchase Order, Shop Floor, Inventory Records, Supplier, Fixed Assets, Costing, General Ledger, Accounts Receivable/Payable, Cash Management, Bank, Budgets, Financial Statements.</p>
       <p>{E} Story to tell: sales order + distribution requirements + production planning → <b>MPS</b> → <b>MRP</b> (using BOM, routing, inventory records) → purchase orders and shop-floor orders → inventory → costing and <b>General Ledger</b> → financial statements.</p>` },
    { k: 'explain', h: 'Item control, phantom item, MPS, capacity planning', html:
      `<p class="warn">The supplied slides list these terms but do not define them. Definitions below are {E} general model knowledge — verify against your class notes.</p>
       <ul>
       <li>{E} <b>Item control</b>: managing the item master and its data (identity, BOM linkage, lead times, lot-size rules, stock status, ABC class) so that planning and inventory transactions are accurate. <i>Application</i>: control stock by class, trigger replenishment, avoid obsolete/excess stock.</li>
       <li>{E} <b>Phantom item</b>: a sub-assembly that exists in the BOM for structure/costing but is not stocked — MRP explodes straight through it to its components.</li>
       <li>{E} <b>MPS (Master Production Schedule)</b>: the committed plan of what end items to build, how many, when — the link between demand and MRP.</li>
       <li>{E} <b>Capacity planning</b>: checking that the plan fits available work-centre capacity, at master-schedule level (rough-cut) and detailed level.</li></ul>` },
    { k: 'example', h: 'Example — automobile MPS (2023 Q4)', html: `<p>{X} Illustrative: dealer orders + sales forecast for model variants → SNOP-approved volumes → MPS by week/plant → MRP explodes engines, trims and bought-outs → purchase and shop orders → inventory and cost postings. Phantom item: a pre-assembled seat sub-kit that is never stocked.</p>` },
    { k: 'exam', h: 'Exam angle', html: `<p>Seen in <b>2 of 3</b> papers: 2023 Q2 (functional modules + item control), 2023 Q4 (automobile MPS), 2024 Q2 (manufacturing module + phantom item). 10 marks each, BL3, CO2.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>MPS (end items) vs MRP (components). Phantom item is a <i>BOM structure device</i>, not a stocked item.</p>` },
    { k: 'check', q: 'Which two items are listed under the Manufacturing module on the faculty slide?', a: 'Capacity Planning and Item Control.' },
    { k: 'pyq', ids: ['2023-Q2', '2023-Q4', '2024-Q2'] },
    { k: 'summary', html: `<ul><li>Modules: Manufacturing (capacity planning, item control) · Distribution · Financial.</li><li>Flow: Sales order → MPS → MRP → PO/Shop floor → Inventory → GL → Financial statements.</li><li>Phantom item = non-stocked BOM sub-assembly.</li></ul>` }
  ]
},
/* ───────── M8 ───────── */
{
  id: 'm8', title: 'ERP Market & Vendors', tlp: '5.0', signal: ['REVISION', 'CONCEPTUAL'],
  why: 'TLP topic 5.0. The supplied material is a vendor-list slide; no vendor facts or market data were supplied, so none are asserted.',
  obj: ['Recognise the vendors shown on the faculty slide', 'Link vendor landscape to the myths about ERP'],
  blocks: [
    { k: 'core', h: 'Vendors on the faculty slide', vendors: true },
    { k: 'explain', h: 'How to use this', html: `<p>{S} The slide lists names and logos in three columns (partly cut off at the bottom of the slide). {E} Use vendor names as examples of “ERP vendor”; do not attach features or market share unless you have class notes. No web research was used in this build.</p><p>{S} Related myths on the faculty list: “There are different concepts of ERP based on ERP vendors” and “ERP in India must be Indian ERP”.</p>` },
    { k: 'exam', h: 'Exam angle', html: `<p>No supplied PYQ asks about vendors. Low-priority; a one-line vendor-selection argument can help in a case answer.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>Vendor ≠ concept. The faculty myth says ERP’s <i>concept</i> does not change by vendor.</p>` },
    { k: 'check', q: 'True/False (faculty myths): “ERP in India must be Indian ERP.”', a: 'It is listed as a myth.' },
    { k: 'summary', html: `<ul><li>Vendor landscape exists; the concept is vendor-independent.</li></ul>` }
  ]
},
/* ───────── M9 ───────── */
{
  id: 'm9', title: 'BPR & ERP Value Analysis', tlp: '6.0', signal: ['PYQ', 'CONCEPTUAL', 'HIGH PRIORITY'],
  why: 'TLP topic 6.0 and a direct PYQ (2025 Q3: “BPR & ERP Chicken & egg paradox. What is to be done first? Why?”).',
  obj: ['Explain the BPR–ERP dependency', 'Defend one sequence with reasons', 'Link BPR to the implementation methodology'],
  blocks: [
    { k: 'core', h: 'What the supplied material says', html: `<p>{S} TLP 6.0: “BPR and ERP Value Analysis”. {S} Implementation methodology slide: <b>The Consultant — BPR Focus</b>. {S} Value Matrix Analysis (M2) is the faculty’s value lens. {S} Myths “Truth” slide: Readiness Audit · Performance Measurement · Unavoidable.</p><p class="warn">No slide defines BPR or states Sir’s answer to the chicken-and-egg question. The content below is {E} an AI-generated study framework.</p>` },
    { k: 'visual', h: 'Visual: the paradox', svg: 'chickenEgg', cap: 'Original diagram.' },
    { k: 'explain', h: 'Study framework — what first? Why?', html:
      `<ol class="cl"><li>{E} <b>BPR</b> = rethinking and redesigning processes for step-change gains (cost, quality, speed, service).</li>
       <li>{E} <b>Case for BPR first:</b> automating a bad process only makes it faster; a process vision tells you what to configure.</li>
       <li>{E} <b>Case for ERP first:</b> ERP embeds “best practice” processes; adopting them is itself reengineering, and a blank-sheet redesign can ignore what the software can do.</li>
       <li>{E} <b>Defensible conclusion:</b> do a <i>light, vision-level</i> BPR first (readiness audit, target processes), then let ERP best practices and implementation refine it — iterate. State a clear first step and justify it.</li></ol>` },
    { k: 'example', h: 'Example', html: `<p>{X} A chemical firm with manual, multi-approval material issue: first agree the target process (single approval, system-driven), then configure ERP to it.</p>` },
    { k: 'exam', h: 'Exam angle', html: `<p>2025 Q3, 10 marks (5+5), BL4 “Comment on”. A split answer: 5 marks explaining the paradox, 5 marks choosing and justifying the first step. Appears in <b>1 of 3</b> papers.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>Do not answer “both are important”. The question asks <i>what first and why</i>.</p>` },
    { k: 'check', q: 'Which implementation-methodology factor in the faculty diagram carries “BPR focus”?', a: 'The Consultant.' },
    { k: 'pyq', ids: ['2025-Q3'] },
    { k: 'summary', html: `<ul><li>Chicken-and-egg: BPR ↔ ERP.</li><li>Pick a first step + justify; iterate.</li></ul>` }
  ]
},
/* ───────── M10 ───────── */
{
  id: 'm10', title: 'ERP Implementation: Methodology, Approaches & Myths', tlp: '7.0', signal: ['CORE', 'HIGH PRIORITY', 'CASE STUDY', 'DIAGRAM'],
  why: 'The “implementation method” is demanded in every Q1 case (all three papers). Methodology, approach and myths are all on faculty slides.',
  obj: ['Reproduce the implementation-methodology diagram', 'Name the three implementation approaches', 'Recall the myths and the “truth” list'],
  blocks: [
    { k: 'core', h: 'Methodology & approach (faculty)', html: `<p>{S} <b>Implementation Methodology</b>: ERP Success depends on The Client (industry focus), The User (culture focus), The ERP Brand (best practice), The Consultant (BPR focus), The Methodology (value focus).</p><p>{S} <b>ERP Implementation Approach</b>: The Big Bang · Franchising · Slam-dunk.</p><p class="src">Source: ${RM2}, slides 9–10. Slide 5 “ERP Implementation” is a heading-only slide.</p>` },
    { k: 'visual', h: 'Visual: implementation methodology (redrawn)', svg: 'implMethod', cap: 'Redrawn from faculty slide 9.' },
    { k: 'explain', h: 'The three approaches', html:
      `<p class="warn">The slide lists names only. Descriptions are {E} general knowledge; terminology varies by author — confirm with Sir’s lecture.</p>
       <table class="tbl"><tr><th>Approach</th><th>Study description</th><th>Risk / fit</th></tr>
       <tr><td>The Big Bang</td><td>All modules/sites go live together on one date</td><td>Fast benefits, high risk &amp; change load</td></tr>
       <tr><td>Franchising</td><td>Common core, then business units/sites adapt locally in waves</td><td>Balances standardisation with local needs</td></tr>
       <tr><td>Slam-dunk</td><td>Quick, minimal-customisation implementation of essentials</td><td>Low cost/time; limited tailoring</td></tr></table>` },
    { k: 'explain', h: 'Myths & truth (faculty list)', myths: true },
    { k: 'example', h: 'Example', html: `<p>{X} A multi-plant company: one template through franchising; a small trading firm: slam-dunk of finance + sales modules.</p>` },
    { k: 'apply', h: 'Application — implementation section of a Q1 report', html: `<ol class="cl"><li>Readiness audit (faculty “Truth”).</li><li>Five success factors: client, user, ERP brand, consultant, methodology.</li><li>Choose approach (Big Bang / Franchising / Slam-dunk) and justify.</li><li>Performance measurement (faculty “Truth”).</li></ol>` },
    { k: 'exam', h: 'Exam angle', html: `<p>“Implementation method” is explicit in Q1 of <b>2024 and 2025</b> (and “ERP strategy charter” in 2023). Always name an approach and justify it for the case.</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>Methodology (the five-factor frame) vs approach (go-live strategy). Different layers.</p>` },
    { k: 'check', q: 'List the three implementation approaches on the faculty slide.', a: 'The Big Bang, Franchising, Slam-dunk.' },
    { k: 'pyq', ids: ['2023-Q1', '2024-Q1', '2025-Q1'] },
    { k: 'summary', html: `<ul><li>5 success factors · 3 approaches · 17 myths · 3 truths (readiness audit, performance measurement, unavoidable).</li></ul>` }
  ]
},
/* ───────── M11 ───────── */
{
  id: 'm11', title: 'ERP Strategy Charter & Case Application', tlp: '8.0', signal: ['CASE STUDY', 'APPLICATION', 'HIGH PRIORITY', 'PYQ'],
  why: 'TLP topic 8.0 “ERP Case Studies”. No stand-alone case material was supplied, so the cases here are the three PYQ scenarios — the real cases you have been tested on.',
  obj: ['Build a six-step ERP strategy report', 'Map Q1 marks to CO1/CO2/CO3', 'Adapt the skeleton to pharma, automobile and chemical cases'],
  blocks: [
    { k: 'core', h: 'The recurring Q1', html: `<p>{S} 2023: “Develop a ERP Strategy charter”. 2024 &amp; 2025: “Develop a report on ERP Strategy including goals and implementation method”. Each protagonist (ERP Head / CIO / CDO) leans to ERP as technology or automation; the answer must widen it.</p><p class="src">PYQ: ERP Business Applications — 2023, 2024, 2025.</p>` },
    { k: 'visual', h: 'Framework: six-step charter', svg: 'charterFlow', cap: 'Original framework; steps derived from what the three cases ask (strategy, goals, implementation method).' },
    { k: 'explain', h: 'Marks ↔ course outcomes', html:
      `<table class="tbl"><tr><th>Paper</th><th>Marks</th><th>CO split</th></tr><tr><td>2023 Q1</td><td>10</td><td>CO1 4 · CO2 3 · CO3 3</td></tr><tr><td>2024 Q1</td><td>20</td><td>CO1 8 · CO2 6 · CO3 6</td></tr><tr><td>2025 Q1</td><td>20</td><td>CO1 8 · CO2 6 · CO3 6</td></tr></table>
       <p>{S} TLP: CO1 Apply ERP for integrating business functions and processes · CO2 Analyze ERP adoption, implementation strategies and business value · CO3 Evaluate reengineered business processes and ERP-enabled operations.</p>
       <p>{E} Study mapping: CO1 ≈ model/pillars/modules (what ERP integrates) · CO2 ≈ goals, adoption, implementation approach · CO3 ≈ BPR / value / evaluation. This mapping is my inference from the CO text, not stated by the faculty.</p>` },
    { k: 'apply', h: 'Three cases, one skeleton', html:
      `<table class="tbl"><tr><th>Case</th><th>Leaning to correct</th><th>Industry hooks to use</th></tr>
       <tr><td>2023 · Deepika · Pharmaceutical</td><td>“business strategy more than IT”</td><td>{X} Compliance (the faculty 5 Cs mention GMPs/SOPs), batch/traceability, quality</td></tr>
       <tr><td>2024 · Aishwarya · Prabha Automobiles</td><td>“customer-centric strategy, not just automation”</td><td>{X} ATO/CODP, dealer integration (pillar 4), MPS</td></tr>
       <tr><td>2025 · Vijaya Loki · LPU Ltd (Chemical)</td><td>“technology intervention … growth management”</td><td>{X} Process flow, SNOP, ABC, growth scalability</td></tr></table>
       <p class="warn">Industry hooks are illustrative; the PYQs give no company data beyond what is printed in the question.</p>` },
    { k: 'exam', h: 'Exam angle', html: `<p>Case Q1 is compulsory in <b>3 of 3</b> supplied papers and is worth 10, 20, 20 marks (up to two-thirds of a 30-mark paper).</p>` },
    { k: 'confusion', h: 'Common confusion', html: `<p>Do not write generic ERP benefits. Name the person, the company, the industry and each CO-linked section.</p>` },
    { k: 'check', q: 'What are the three parts every Q1 answer must contain?', a: 'ERP as business strategy (not just IT), goals, implementation method (2023: strategy charter).' },
    { k: 'pyq', ids: ['2023-Q1', '2024-Q1', '2025-Q1'] },
    { k: 'summary', html: `<ul><li>Context → Reframe → Goals → Model → Method → Value.</li><li>Use CO split to allocate words.</li></ul>` }
  ]
}
];

/* ───────── PYQs ───────── */
const papers = [
  { year: 2023, date: '11-10-2023', program: 'PGDM & RBA – Operations', batch: '2022-2024', trimester: 'IV', time: '3.30 pm to 4.45 pm', duration: '1 Hrs 15 Mins', code: '(blank on paper)', max: 30, instr: '1) Q.1 is compulsory. 2) Solve any TWO questions from the rest of the Questions.', note: 'Photo of paper (WhatsApp image). Course code field is blank.' },
  { year: 2024, date: '09-10-2024', program: 'PGDM R&BA', batch: '2023-2025', trimester: 'IV', time: 'Printed “9.30am to 9.45am” appears struck out and hand-corrected to “9:30 to 10:30 am”', duration: '1 Hrs. 15 Mins', code: 'OPN 419', max: 30, instr: '1) Q.1 is compulsory. 2) Solve any ONE question from the rest of the Questions.', note: 'Time field is handwritten/overwritten — OCR/reading uncertainty flagged.' },
  { year: 2025, date: '11-10-2025', program: 'PGDM/BD/RBA', batch: '2024-2026', trimester: 'IV', time: '08:30am to 09:45am', duration: '1.15 Hrs', code: 'OPN 419', max: 30, instr: '1) Q.1 is compulsory. 2) Solve any ONE question from the rest of the Questions.', note: 'End Term Examination. BL legend printed: 1 Remembering; 2 Understanding; 3 Applying; 4 Analysing; 5 Evaluating; 6 Creating.' }
];

const T = { STRAT: 'ERP strategy report / charter', CONC: 'Conceptual model (5 pillars)', ARCH: 'Architecture', MOD: 'Functional / manufacturing modules', ITEM: 'Item control / phantom item', MPS: 'MPS process', BP: 'Best practices family (best practices, ATO/MTO, SNOP, ABC)', BPR: 'BPR & ERP' };

const pyqs = [
  { id: '2023-Q1', year: 2023, qno: 1, marks: 10, bl: 3, co: 'CO1/CO2/CO3 (4/3/3)', compulsory: true, type: 'Case / report', mods: ['m1', 'm3', 'm10', 'm11'], topics: ['STRAT'], diff: 'BL3 Applying',
    text: 'Ms. Deepika, ERP Head of a Pharmaceutical Company currently planning to adopt ERP. She thinks ERP is more as a business strategy than IT Strategy. Develop a ERP Strategy charter to help her.',
    think: ['Who is she and what does she believe? (business strategy > IT)', 'What belongs in a charter: vision, goals, scope, approach, governance, value', 'Pharma hooks: compliance, quality'],
    frame: ['Context + reframe (business vs IT) — 2 marks', 'Goals / objectives — 2 marks', 'Conceptual model: 5 pillars mapped to the firm — 2 marks', 'Implementation method + readiness — 2 marks', 'Value measurement + conclusion — 2 marks'] },
  { id: '2023-Q2', year: 2023, qno: 2, marks: 10, bl: 3, co: 'CO2', type: 'Explain', mods: ['m7'], topics: ['MOD', 'ITEM'], diff: 'BL3 Applying',
    text: 'Explain different functional modules of ERP. What is application of Item Control?',
    think: ['Faculty module groups: Manufacturing / Distribution / Financial', 'What is item control and where is it applied?'],
    frame: ['Intro: ERP = integrated modules — 1', 'Manufacturing (capacity planning, item control), Distribution, Financial — 5', 'Item control: definition + application + example — 3', 'Linkage / conclusion — 1'] },
  { id: '2023-Q3', year: 2023, qno: 3, marks: 10, bl: 4, co: 'CO3', type: 'Analyse', mods: ['m3', 'm4'], topics: ['CONC', 'ARCH'], diff: 'BL4 Analysing', rep: 'conc-arch',
    text: 'Analyse the conceptual model and architectural aspects of ERP with examples.',
    think: ['Two halves: concept (5 pillars) + architecture (client-server)', '“Analyse” means break down and relate, not list'],
    frame: ['Intro — 1', '5 pillars with example each — 4', 'Redrawn architecture diagram + explanation — 4', 'Link concept ↔ architecture + conclusion — 1'] },
  { id: '2023-Q4', year: 2023, qno: 4, marks: 10, bl: 3, co: 'CO2', type: 'Apply / explain', mods: ['m7', 'm5'], topics: ['MPS', 'MOD'], diff: 'BL3 Applying',
    text: 'How Automobile Industry builds MPS Process in ERP? Discuss with examples.',
    think: ['What is MPS and where does it sit between demand and MRP?', 'Automobile specifics: variants, ATO, dealers'],
    frame: ['MPS definition — 2', 'Inputs: forecast, orders, SNOP, capacity — 3', 'Steps/flow to MRP with automobile example — 4', 'Benefit + conclusion — 1'] },
  { id: '2024-Q1', year: 2024, qno: 1, marks: 20, bl: 3, co: 'CO1/CO2/CO3 (8/6/6)', compulsory: true, type: 'Case / report', mods: ['m1', 'm3', 'm5', 'm10', 'm11'], topics: ['STRAT'], diff: 'BL3 Applying',
    text: 'Ms. Aishwarya, CIO and Head-ERP of Prabha Automobiles currently implementing ERP. She is wondering how to adopt ERP as a customer centric strategy than just technological automation. Develop a report on ERP Strategy including goals and implementation method to help her.',
    think: ['Customer-centric: pillar 4 + CODP + ATO', 'Goals + implementation method are explicit asks'],
    frame: ['Situation analysis — 3', 'ERP strategy as customer-centric business strategy (pillars) — 5', 'Goals — 4', 'Implementation method + approach — 5', 'Justification + conclusion — 3'] },
  { id: '2024-Q2', year: 2024, qno: 2, marks: 10, bl: 3, co: 'CO2', type: 'Explain', mods: ['m7'], topics: ['MOD', 'ITEM'], diff: 'BL3 Applying',
    text: 'Explain briefly manufacturing module of ERP. What is Phantom Item?',
    think: ['“Briefly” – tight structure', 'Phantom item = BOM structure item, not stocked'],
    frame: ['Manufacturing module scope (capacity planning, item control, MPS/MRP) — 6', 'Phantom item definition + example — 3', 'Conclusion — 1'] },
  { id: '2024-Q3', year: 2024, qno: 3, marks: 10, bl: 4, co: 'CO3', type: 'Analyse', mods: ['m3', 'm4'], topics: ['CONC', 'ARCH'], diff: 'BL4 Analysing', rep: 'conc-arch',
    text: 'Analyse the conceptual model and architectural aspects of ERP with examples.',
    think: ['Identical wording to 2023 Q3 — same answer works', 'Use an automobile or pharma example consistently'],
    frame: ['Intro — 1', '5 pillars with example each — 4', 'Architecture diagram + explanation — 4', 'Conclusion — 1'] },
  { id: '2024-Q4', year: 2024, qno: 4, marks: 10, bl: 3, co: 'CO2', type: 'Explain', mods: ['m5'], topics: ['BP'], diff: 'BL3 Applying',
    text: 'Explain ERP Best Practices with examples.',
    think: ['Faculty: best practice = 5 pillars → customer focus, minimal waste, value creation', 'Core themes: CODP, SNOP, org structure, ABC'],
    frame: ['Define best practice — 2', 'Core themes with example each — 6', 'Link to value + conclusion — 2'] },
  { id: '2025-Q1', year: 2025, qno: 1, marks: 20, bl: 3, co: 'CO1/CO2/CO3 (8/6/6)', compulsory: true, type: 'Case / report', mods: ['m1', 'm3', 'm5', 'm10', 'm11'], topics: ['STRAT'], diff: 'BL3 Applying',
    text: 'Ms. Vijaya Loki, newly appointed CDO of LPU Ltd, a renowned Chemical company in India, has an immediate charter of ERP implementation for growth support. Vijaya being a seasoned Technical Architect, is thinking ERP as a technology intervention and not quite clear on how it can lead to address organizational operations focusing on growth management. Develop a report on ERP Strategy including goals and implementation method to help her.',
    think: ['She is a technical architect → widen to business/growth', 'Growth management: scalability, SNOP, ABC, integration'],
    frame: ['Situation analysis (chemical, growth) — 3', 'ERP as growth strategy, not technology only — 5', 'Goals — 4', 'Implementation method + approach — 5', 'Justification + conclusion — 3'] },
  { id: '2025-Q2', year: 2025, qno: 2, marks: 10, bl: 3, co: 'CO4, CO6 (5/5)', type: 'Explain / apply', mods: ['m5'], topics: ['BP'], diff: 'BL3 Applying',
    text: 'How ERP adds value in an ATO & MTO scenario businesses?',
    think: ['Where is the CODP in ATO vs MTO?', 'Value: inventory, promise dates, one plan'],
    frame: ['CODP + ATO vs MTO — 3', 'ERP value in ATO — 3', 'ERP value in MTO — 3', 'Conclusion — 1'] },
  { id: '2025-Q3', year: 2025, qno: 3, marks: 10, bl: 4, co: 'CO3, CO5 (5/5)', type: 'Comment / argue', mods: ['m9', 'm10'], topics: ['BPR'], diff: 'BL4 Analysing',
    text: 'Comment on - BPR & ERP Chicken & egg paradox. What is to be done first? Why?',
    think: ['Explain the loop, then commit to a first step', 'Justify with process vision vs best-practice template'],
    frame: ['Define BPR and ERP + paradox — 4', 'Argument for first step — 4', 'Iterate / conclusion — 2'] },
  { id: '2025-Q4', year: 2025, qno: 4, marks: 10, bl: 3, co: 'CO5, CO6 (5/5)', type: 'Explain', mods: ['m5'], topics: ['BP'], diff: 'BL3 Applying',
    text: 'Explain SNOP and ABC Concepts of ERP with examples.',
    think: ['Expand SNOP; state ABC clearly (flag ambiguity)', 'One example each'],
    frame: ['SNOP definition + steps + example — 5', 'ABC definition + classes + example — 5'] }
];

/* ───────── MCQs ───────── */
const mcqs = [
  { q: 'According to the faculty “Concepts” slide, which statement best captures ERP as a philosophy?', o: ['A planning methodology based on seamless integration of all business processes', 'A set of programming standards for developers', 'A standalone inventory-counting tool', 'A cost-accounting convention'], a: 0, lvl: 'easy', type: 'conceptual', mod: 'm1', e: 'Statement 1 of the faculty slide describes ERP as a planning methodology or philosophy based on seamless integration of all business processes.' },
  { q: 'In an integrated (not merely connected) system, common decision-making is…', o: ['A matter of individual choice', 'Done by the system', 'Delegated to vendors', 'Not required'], a: 1, lvl: 'easy', type: 'conceptual', mod: 'm2', e: 'Faculty: Connected → common decision-making is choice; Integrated → common decision-making is done by the system.' },
  { q: 'Which is the correct order of evolution on the faculty slide?', o: ['MRP → SIC → MRP-II → ERP → SCM → E-ERP', 'SIC → MRP → MRP-II → ERP → E-ERP → SCM', 'ERP → MRP → MRP-II → SIC → E-ERP → SCM', 'SIC → MRP-II → MRP → ERP → SCM → E-ERP'], a: 1, lvl: 'easy', type: 'conceptual', mod: 'm2', e: 'Scientific Inventory Control → MRP → MRP-II → ERP → E-ERP → SCM.' },
  { q: 'On the faculty value matrix, which pairing is correct?', o: ['’80 – customer focus – ERP', '’90 – customer focus – MRP-II', '’70 – service focus – MRP', '2K – cost reduction – SIC'], a: 1, lvl: 'medium', type: 'visual', mod: 'm2', e: 'Matrix: ’70 production/SIC, ’80 cost reduction/MRP, ’90 customer/MRP-II, 2K service/ERP.' },
  { q: 'Which is NOT one of the five pillars of the faculty conceptual model?', o: ['Empowered employees', 'Customer and supplier integration', 'Strict functional silos', 'Sophisticated IT systems'], a: 2, lvl: 'easy', type: 'conceptual', mod: 'm3', e: 'The pillars include a process-based FLAT organisation — silos are the opposite.' },
  { q: 'In the 5 Cs of ERP, “Integrated = internal, Connected = external” belongs to which C?', o: ['Complete', 'Cognitive', 'Connected', 'Capable'], a: 2, lvl: 'medium', type: 'conceptual', mod: 'm3', e: 'Faculty slide 4: Connected — Integrated = internal; Connected = external.' },
  { q: 'Which C refers to GMPs and SOPs on the faculty slide?', o: ['Compliant', 'Complete', 'Capable', 'Cognitive'], a: 0, lvl: 'medium', type: 'conceptual', mod: 'm3', e: 'Compliant: legal / best practices / GMPs / SOPs.' },
  { q: 'The “Cognitive” C is described as…', o: ['Speed and volume handling', 'Pattern detection for failures', 'Legal compliance', 'Business processes coverage'], a: 1, lvl: 'medium', type: 'conceptual', mod: 'm3', e: 'Cognitive — pattern detection for failures.' },
  { q: 'Which component is the base on which the drivers sit in the faculty architecture slide?', o: ['RDBMS', 'Repository', 'Operating System (Unix, NT)', 'Logic Server'], a: 2, lvl: 'easy', type: 'visual', mod: 'm4', e: 'The OS bar underlies GUI driver, logic server and DB driver.' },
  { q: 'A firm separates presentation, business logic and database into distinct layers. This is best described as…', o: ['Single-tier', '3-tier client-server', 'Flat file system', 'Peer-to-peer file sharing'], a: 1, lvl: 'medium', type: 'application', mod: 'm4', e: 'Three separate layers = 3-tier client-server (study explanation of the faculty “2/3/n tier”).' },
  { q: 'Which module group does the faculty slide list Capacity Planning and Item Control under?', o: ['Distribution', 'Financial', 'Manufacturing', 'Human resources'], a: 2, lvl: 'easy', type: 'conceptual', mod: 'm7', e: 'Faculty “ERP Modules” slide: Manufacturing → Capacity Planning, Item Control.' },
  { q: 'On the process-view figure, MPS feeds directly into…', o: ['General Ledger', 'MRP', 'Bank', 'Budgets'], a: 1, lvl: 'medium', type: 'visual', mod: 'm7', e: 'The faculty business-process view shows MPS → MRP.' },
  { q: 'A sub-assembly appears in the BOM but is never stocked, and MRP explodes straight through it. This is a…', o: ['Phantom item', 'Class A item', 'Safety-stock item', 'Finished good'], a: 0, lvl: 'medium', type: 'scenario', mod: 'm7', e: 'Phantom item (general ERP knowledge; not defined on supplied slides).' },
  { q: 'Best practice in the faculty definition uses the 5 pillars to generate…', o: ['Customer focus, minimal waste, value creation', 'Profit, headcount, reach', 'Lowest price only', 'Technology upgrades'], a: 0, lvl: 'easy', type: 'conceptual', mod: 'm5', e: 'Faculty slide 10: customer focus; minimal waste of resources; value creation.' },
  { q: 'In CODP, which scenario has its decoupling point nearest the customer (at FG)?', o: ['ETO', 'MTO', 'ATO/CTO', 'MTS'], a: 3, lvl: 'medium', type: 'visual', mod: 'm5', e: 'Faculty board: MTS circle at FG; ETO at the far manufacturer end.' },
  { q: 'A carmaker stocks engines to forecast but finishes each car to dealer orders. Its CODP is closest to…', o: ['Raw material', 'Semi-finished goods / components', 'Finished goods', 'Not defined'], a: 1, lvl: 'hard', type: 'scenario', mod: 'm5', e: 'Assemble/configure-to-order places the CODP at components/SFG: forecast-driven upstream, order-driven final assembly.' },
  { q: 'SNOP, as listed under “Demand Management to SNOP”, is generally expanded as…', o: ['Sales & Operations Planning', 'Standard Network Operating Procedure', 'Supplier Notification of Purchase', 'Systems & Network Planning'], a: 0, lvl: 'medium', type: 'conceptual', mod: 'm5', e: 'Expansion is not on the slide; S&OP is the standard reading in ERP planning (flagged explanation).' },
  { q: 'ABC analysis (as normally read in ERP inventory context) gives tightest control to…', o: ['Many low-value items', 'A few high-value items', 'Items beginning with A', 'Only finished goods'], a: 1, lvl: 'medium', type: 'application', mod: 'm5', e: 'A items = few, high value → tight control. (Abbreviation not expanded on slide — flagged.)' },
  { q: 'Plossl says inventory is more of a…', o: ['Asset than a liability', 'Liability than an asset', 'Marketing tool', 'Tax shield'], a: 1, lvl: 'easy', type: 'conceptual', mod: 'm6', e: 'Principle 2: inventory is more of a liability than an asset.' },
  { q: 'According to Plossl, re-planning is…', o: ['A sign of agility', 'Admitting failure; not a substitute for sound execution', 'Required daily', 'Free of cost'], a: 1, lvl: 'medium', type: 'conceptual', mod: 'm6', e: 'Principle 5.' },
  { q: 'Which Plossl principle says to plan far ahead only the resources that need long periods for action?', o: ['Reducing set-up time is worth the effort', 'Only resources requiring long periods should be planned ahead; detailed plans only short horizons', 'All employees need continuous education', 'Plans impossible to execute are useless'], a: 1, lvl: 'hard', type: 'conceptual', mod: 'm6', e: 'Principle 10.' },
  { q: 'A plant manager keeps extra stock to hide frequent machine breakdowns. Which Plossl principle is violated?', o: ['Production problems must and can be eliminated, not covered with inventory cushions', 'One MP&C framework fits all', 'Continuous education', 'Daily re-planning is better'], a: 0, lvl: 'hard', type: 'scenario', mod: 'm6', e: 'Principle 1.' },
  { q: 'Which is listed on the faculty slide as an ERP implementation approach?', o: ['Franchising', 'Outsourcing', 'Waterfall only', 'Crowdsourcing'], a: 0, lvl: 'easy', type: 'conceptual', mod: 'm10', e: 'Big Bang, Franchising, Slam-dunk.' },
  { q: 'In the faculty implementation-methodology diagram, “The User” is tied to which focus?', o: ['Value focus', 'Culture focus', 'BPR focus', 'Industry focus'], a: 1, lvl: 'medium', type: 'visual', mod: 'm10', e: 'The User → Culture focus. Client → industry; Consultant → BPR; Methodology → value; ERP brand → best practice.' },
  { q: 'Which statement is listed among the faculty ERP myths?', o: ['ERP is software system', 'ERP integrates business processes', 'A readiness audit is useful', 'ERP supports performance measurement'], a: 0, lvl: 'medium', type: 'conceptual', mod: 'm10', e: 'The myth list includes “ERP is software system”.' },
  { q: 'The faculty “Truth” slide lists…', o: ['Readiness audit, performance measurement, unavoidable', 'Cost, time, scope', 'Plan, do, check', 'Big bang, franchising, slam-dunk'], a: 0, lvl: 'medium', type: 'conceptual', mod: 'm10', e: 'Readiness Audit; Performance Measurement; Unavoidable.' },
  { q: 'A CIO calls ERP “just technological automation”. The best strategic counter-argument is…', o: ['Agree; ERP is IT', 'ERP integrates processes and decisions to deliver customer-centric business outcomes, with IT as enabler', 'Buy the cheapest vendor', 'Delay until the legacy system fails'], a: 1, lvl: 'medium', type: 'scenario', mod: 'm11', e: 'This is the recurring Q1 argument (all three papers).' },
  { q: 'In the 2024 and 2025 Q1 cases (20 marks, CO 8/6/6), how many marks map to CO1?', o: ['6', '8', '10', '20'], a: 1, lvl: 'easy', type: 'calculation', mod: 'm11', e: 'CO1 = 8, CO2 = 6, CO3 = 6 → 20.' },
  { q: 'A 2023-style paper: Q1 compulsory (10) + any two of three 10-mark questions. Maximum marks attainable?', o: ['20', '30', '40', '50'], a: 1, lvl: 'medium', type: 'calculation', mod: 'm11', e: '10 + 10 + 10 = 30 (Max Marks: 30).' },
  { q: 'A firm must choose between redesigning processes first or configuring ERP first. A defensible faculty-aligned answer is…', o: ['Never reengineer', 'Do vision-level BPR and readiness audit first, then iterate with ERP best practices', 'Install ERP and ignore processes', 'Hire more staff'], a: 1, lvl: 'hard', type: 'scenario', mod: 'm9', e: 'Study framework (AI-generated) that picks a first step and justifies it, as 2025 Q3 demands.' }
];

/* ───────── Last-minute ───────── */
const phases = [
  { id: 'p7', t: '7 days before', sub: 'Understand the course', items: ['Read M1–M5 once; open every diagram', 'Redraw: system types, value matrix, five pillars, architecture, CODP', 'Read all 12 PYQs (Archive) and the pattern analysis', 'Attempt 2025 Q1 untimed using the six-step charter'] },
  { id: 'p3', t: '3 days before', sub: 'Revise concepts', items: ['Turn on Revision Mode; read once end to end', 'Plossl 12 principles — say each headline aloud', 'M7 process view: trace MPS → MRP → GL from memory', 'MCQ test; revisit weak topics; PYQ practice for 2023 and 2024 Q1'] },
  { id: 'n1', t: 'Night before', sub: 'High-priority + PYQs', items: ['Strategy charter skeleton (6 steps)', '5 pillars · 5 Cs · 3 system types · evolution chain', 'CODP rows MTS / ATO-CTO / MTO / ETO', '3 approaches · 5 methodology factors · 3 truths', 'Re-read your own PYQ answers; sleep'] },
  { id: 'm0', t: 'Exam morning', sub: 'Last-minute page', items: ['Read “Last-minute card” only', 'Q1: widen “technology” to “business strategy”, give goals + implementation method', 'Pick 1 (or 2 in 2023-style) question where you can draw a diagram', 'Name the company/person in every case answer'] }
];

const sources = [
  { f: 'COURSE_OUTLINE_PDF2026-09-30_20_37_31.pdf', t: 'TLP / course outline', n: 'Text PDF. Course ERP Business Applications (Elective), 1.5 credits, 8 sessions, instructor Rahul Altekar, batch 2025-2027, Term IV. 8 topics, CO1–CO3, evaluation 40% CE + 60% End term.' },
  { f: 'Reading_Materials_01.pdf', t: 'Faculty slides (15 pp)', n: 'Text PDF with whiteboard photos (value matrix, CODP) and a process-view figure. Slide 15 is blank.' },
  { f: 'Reading_Materials_02.pdf', t: 'Faculty slides (10 pp)', n: 'Text PDF. Vendor list image; “ERP Implementation” slide is heading-only; Pancanga slide is heading + image.' },
  { f: 'Reading_Materials_01_extracted.txt / _02_extracted.txt', t: 'Derived text extracts', n: 'Prior extraction of the two PDFs; used only as cross-check; PDFs treated as authoritative. Contains encoding artefacts (bullet glyphs).' },
  { f: 'WhatsApp Image … 5.10.58 / 5.10.59 / 5.11.00 PM.jpeg', t: 'PYQ photos (2023, 2024, 2025)', n: 'Camera photos of exam papers; read visually; handwritten time field in 2024 flagged.' }
];

const ambiguities = [
  'TLP lists CO1–CO3 only; the 2025 paper prints CO4, CO5, CO6 against Q2–Q4. Source conflict recorded, not reconciled.',
  'TLP batch is 2025-2027; PYQs cover batches 2022-2024, 2023-2025, 2024-2026.',
  '2023 paper: course code blank. 2024 paper: time field overwritten by hand (“9:30 to 10:30 am” vs printed 9.30–9.45) — uncertain.',
  'Value matrix whiteboard: “HCP ?”, “Q”, “D”, “FPS/TPS/DPS” not spelled out.',
  '“ABC” on the Best Practices slide is not expanded (ABC analysis vs Activity-Based Costing).',
  '“SNOP” expansion not printed on the slide.',
  '“Synchronized – Knowledge Focused”, “Performance V/S Perceptions”, “Organizational Structure” have no detail on the slides.',
  'Pancanga (Five Elements) slide has no text; ERP Implementation slide (RM2 s5) is heading-only.',
  'Item control, phantom item, MPS, capacity planning, BPR, and the three implementation approaches are not defined on the supplied slides — notebook definitions are tagged EXPLANATION.',
  'TLP topics 7.0 (Introduction to Analytics) and 8.0 (case studies) have no dedicated supplied material.',
  'Vendor slide is cut at the bottom; the full vendor list was not supplied. No web research was used.'
];

const vendors = ['Infor', 'SAP', 'Acumatica', 'Epicor', 'Microsoft Dynamics 365', 'NetSuite (Oracle)', 'IFS North America', 'Oracle', 'Sage', 'Microsoft', 'Odoo', 'Workday', 'NetSuite ERP', 'Syspro', 'Plex', 'SAP Business One', 'QAD Inc.', 'Sage Intacct', 'Deltek', 'JD Edwards EnterpriseOne', 'Sage X3', 'Comarch', 'Deltek Costpoint', 'ABAS'];

const myths = ['ERP is nothing but Everyday Reduction of Profit or Early Risky Proposition', 'There are different concepts of ERP based on ERP vendors', 'ERP is computerization project of the company', 'ERP is software system', 'ERP is advanced legacy system', 'ERP modules are individually ERP solution', 'ERP in India must be Indian ERP', 'Customized ERP is ERP', 'ERP is outdated now and ERP II is the right solution', 'ERP is a downsizing tool', 'ERP is applicable to only manufacturing setups and not for service sectors', 'ERP is the panacea to all business problems', 'ERP only supports transactional needs', 'ERP is white elephant', 'ERP is a fad and has already gone away', 'More the number of ERP systems you have more the productivity you get', 'ERP is not suitable to small scale companies due to costs and implementation time'];

module.exports = { modules, papers, pyqs, mcqs, phases, sources, ambiguities, vendors, myths, T, DG: D };

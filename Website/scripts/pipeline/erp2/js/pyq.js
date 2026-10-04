/* pyq.js — PYQ practice mode: filters, search, think → write → reveal framework, practiced tracking */
(function (E) {
  'use strict';
  var $ = E.$, $$ = E.$$, S = E.store, D = window.ERP2_DATA;
  var root = $('#pyqPractice'); if (!root) return;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var st = S.get('pyq', { practiced: {}, answers: {} });
  function uniq(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }
  function opts(label, arr, fmt) { return '<option value="">' + label + '</option>' + arr.map(function (v) { return '<option value="' + esc(v) + '">' + esc(fmt ? fmt(v) : v) + '</option>'; }).join(''); }
  var P = D.pyqs;
  $('#pf', root).innerHTML =
    '<label class="sr" for="f_s">Search PYQs</label><input id="f_s" type="search" placeholder="Search questions…">' +
    '<select id="f_y" aria-label="Year">' + opts('All years', uniq(P.map(function (p) { return p.year; })).sort()) + '</select>' +
    '<select id="f_m" aria-label="Marks">' + opts('All marks', uniq(P.map(function (p) { return p.marks; })).sort(function (a, b) { return a - b; }), function (v) { return v + ' marks'; }) + '</select>' +
    '<select id="f_mod" aria-label="Module">' + opts('All modules', D.mods, function (v) { return D.modTitles[v]; }) + '</select>' +
    '<select id="f_t" aria-label="Topic">' + opts('All topics', Object.keys(D.topics), function (v) { return D.topics[v]; }) + '</select>' +
    '<select id="f_q" aria-label="Question type">' + opts('All types', uniq(P.map(function (p) { return p.type; }))) + '</select>' +
    '<select id="f_p" aria-label="Practice status"><option value="">Practiced + unpracticed</option><option value="y">Practiced</option><option value="n">Unpracticed</option></select>' +
    '<select id="f_r" aria-label="Repeated"><option value="">Repeated + unique</option><option value="y">Repeated wording only</option></select>' +
    '<button class="btn sm" id="f_x" type="button">Reset</button>';
  var list = $('#pl', root);
  list.innerHTML = P.map(function (p) {
    return '<article class="q" id="pq-' + p.id + '" data-id="' + p.id + '"><div class="meta"><b>' + p.year + ' · Q' + p.qno + '</b><span>' + p.marks + ' marks</span><span>' + esc(p.type) + '</span><span>' + esc(p.diff) + '</span>' + (p.rep ? '<span class="rp">repeated wording</span>' : '') + '<span>' + p.mods.map(function (m) { return D.modTitles[m].split(':')[0]; }).join(' · ') + '</span></div>' +
      '<blockquote>' + esc(p.text) + '</blockquote>' +
      '<div class="steps"><button class="btn sm th" type="button" aria-expanded="false">1 · Think</button> <button class="btn sm pr" type="button" aria-pressed="false">✔ Mark practiced</button></div>' +
      '<div class="think" hidden><p><b>THINK</b> — prompts only:</p><ul>' + p.think.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' +
      '<label for="a-' + p.id + '"><b>2 · Write your answer</b> (autosaved on this device)</label><textarea id="a-' + p.id + '" placeholder="Write your answer here…"></textarea>' +
      '<button class="btn sm rv" type="button" aria-expanded="false">3 · Reveal full model answer & framework</button>' +
      '<div class="ans" hidden><div class="lbl">MODEL MBA EXAM ANSWER & EXECUTIVE RUBRIC</div>' +
      (p.answerHtml ? '<div class="model-ans">' + p.answerHtml + '</div>' : '<ol>' + p.frame.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ol>') + '</div></article>';
  }).join('');
  $$('.q', list).forEach(function (q) {
    var id = q.dataset.id, ta = $('textarea', q);
    ta.value = st.answers[id] || '';
    ta.addEventListener('input', function () { st.answers[id] = ta.value; S.set('pyq', st); });
    $('.th', q).addEventListener('click', function () { var t = $('.think', q); t.hidden = !t.hidden; this.setAttribute('aria-expanded', String(!t.hidden)); });
    $('.rv', q).addEventListener('click', function () { var t = $('.ans', q); t.hidden = !t.hidden; this.setAttribute('aria-expanded', String(!t.hidden)); });
    $('.pr', q).addEventListener('click', function () { st.practiced[id] = !st.practiced[id]; S.set('pyq', st); paint(); filter(); });
  });
  function paint() {
    var n = 0; $$('.q', list).forEach(function (q) { var on = !!st.practiced[q.dataset.id]; if (on) n++; var b = $('.pr', q); b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on); b.textContent = on ? '✔ Practiced' : '✔ Mark practiced'; });
    var t = P.length; var a = $('#mpPyq'); if (a) { a.textContent = n + ' / ' + t + ' PYQs practiced'; $('#mpPyqBar').style.width = Math.round(n / t * 100) + '%'; }
    var c = $('#pyqCount'); if (c) c.textContent = n + ' of ' + t + ' practiced';
  }
  function filter() {
    var v = function (id) { return $('#' + id, root).value; }, s = v('f_s').toLowerCase(), shown = 0;
    P.forEach(function (p) {
      var ok = (!v('f_y') || p.year == v('f_y')) && (!v('f_m') || p.marks == v('f_m')) && (!v('f_mod') || p.mods.indexOf(v('f_mod')) >= 0) && (!v('f_t') || p.topics.indexOf(v('f_t')) >= 0) && (!v('f_q') || p.type === v('f_q')) &&
        (!v('f_p') || (v('f_p') === 'y') === !!st.practiced[p.id]) && (!v('f_r') || !!p.rep) && (!s || p.text.toLowerCase().indexOf(s) >= 0);
      $('#pq-' + p.id).hidden = !ok; if (ok) shown++;
    });
    $('#pshown').textContent = shown + ' question' + (shown === 1 ? '' : 's') + ' shown';
  }
  $$('select,input', $('#pf', root)).forEach(function (el) { el.addEventListener('input', filter); });
  $('#f_x').addEventListener('click', function () { $$('select,input', $('#pf', root)).forEach(function (el) { el.value = ''; }); filter(); });
  paint(); filter();
  document.addEventListener('erp2:update', paint);
})(window.ERP2);

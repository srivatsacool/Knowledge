/* search.js — instant client-side search across headings, concepts, definitions, PYQs, examples, revision notes */
(function (E) {
  'use strict';
  var $ = E.$, $$ = E.$$;
  var idx = [];
  function esc(s) { return s.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function build() {
    $$('[data-sx]').forEach(function (el, i) {
      if (!el.id) el.id = 'sx' + i;
      var text = el.textContent.replace(/\s+/g, ' ').trim();
      idx.push({ id: el.id, title: el.getAttribute('data-sx'), sec: el.getAttribute('data-sec') || '', text: text, low: (el.getAttribute('data-sx') + ' ' + text).toLowerCase(), tl: el.getAttribute('data-sx').toLowerCase() });
    });
  }
  var box = $('#searchResults'), inp = $('#q'), t;
  function run() {
    var v = inp.value.trim().toLowerCase();
    if (v.length < 2) { box.classList.remove('open'); box.innerHTML = ''; return; }
    var toks = v.split(/\s+/);
    var res = [];
    idx.forEach(function (r) {
      var s = 0;
      for (var i = 0; i < toks.length; i++) { if (r.low.indexOf(toks[i]) < 0) { s = -1; break; } s += (r.tl.indexOf(toks[i]) >= 0 ? 5 : 1); }
      if (s > 0) res.push([s, r]);
    });
    res.sort(function (a, b) { return b[0] - a[0]; });
    if (!res.length) { box.innerHTML = '<a href="#" tabindex="-1">No match for “' + esc(v) + '”</a>'; box.classList.add('open'); return; }
    box.innerHTML = res.slice(0, 12).map(function (p) {
      var r = p[1], pos = r.text.toLowerCase().indexOf(toks[0]); var a = Math.max(0, pos - 50), snip = pos < 0 ? r.text.slice(0, 110) : r.text.slice(a, a + 140);
      snip = esc(snip); toks.forEach(function (k) { snip = snip.replace(new RegExp('(' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); });
      return '<a href="#' + r.id + '"><b>' + esc(r.title) + '</b><small>' + esc(r.sec) + '</small>…' + snip + '…</a>';
    }).join('');
    box.classList.add('open');
  }
  inp.addEventListener('input', function () { clearTimeout(t); t = setTimeout(run, 70); });
  inp.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { var a = $('a', box); if (a) { e.preventDefault(); a.focus(); } } });
  box.addEventListener('keydown', function (e) {
    var a = document.activeElement; if (e.key === 'ArrowDown' && a.nextElementSibling) { e.preventDefault(); a.nextElementSibling.focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); (a.previousElementSibling || inp).focus(); }
  });
  box.addEventListener('click', function (e) {
    var a = e.target.closest('a'); if (!a) return; var h = a.getAttribute('href'); if (h === '#') { e.preventDefault(); return; }
    box.classList.remove('open');
    var el = document.getElementById(h.slice(1));
    if (el) { if (document.body.classList.contains('focus')) { var s = el.closest('.modsheet'); if (s) { $$('.modsheet').forEach(function (x) { x.classList.toggle('cur-mod', x === s); }); } else { document.body.classList.remove('focus'); $('#btnFocus').setAttribute('aria-pressed', 'false'); } }
      if (document.body.classList.contains('revmode') && el.classList.contains('blk') && !el.classList.contains('rv')) { document.body.classList.remove('revmode'); $('#btnRev').setAttribute('aria-pressed', 'false'); }
      var d = el.closest('details'); if (d) d.open = true; setTimeout(function () { el.scrollIntoView({ block: 'start' }); el.classList.add('flash'); setTimeout(function () { el.classList.remove('flash'); }, 1600); }, 30); e.preventDefault(); }
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.search')) box.classList.remove('open'); });
  build();
  E.reindex = function () { idx = []; build(); };
})(window.ERP2);

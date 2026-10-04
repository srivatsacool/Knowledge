/* mcq.js — final MCQ assessment (separate from notebook completion). State in localStorage: erp2.mcq */
(function (E) {
  'use strict';
  var $ = E.$, $$ = E.$$, S = E.store, D = window.ERP2_DATA;
  var root = $('#mcqApp'); if (!root) return;
  var Q = D.mcqs, N = Q.length;
  var st = S.get('mcq', { ans: {}, cur: 0 });
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function counts() { var a = 0, c = 0; for (var i = 0; i < N; i++) if (st.ans[i] != null) { a++; if (st.ans[i] === Q[i].a) c++; } return { a: a, c: c }; }
  function save() { S.set('mcq', st); }
  function render() {
    var q = Q[st.cur], k = counts(), chosen = st.ans[st.cur];
    var nav = Q.map(function (_, i) { var cl = i === st.cur ? 'cur ' : ''; if (st.ans[i] != null) cl += st.ans[i] === Q[i].a ? 'ok' : 'bad'; return '<button type="button" class="' + cl + '" data-i="' + i + '" aria-label="Question ' + (i + 1) + (st.ans[i] != null ? (st.ans[i] === Q[i].a ? ', correct' : ', incorrect') : ', unanswered') + '">' + (i + 1) + '</button>'; }).join('');
    var h = '<div class="hand" aria-live="polite">Answered ' + k.a + ' / ' + N + ' · Score ' + k.c + ' / ' + N + '</div><div class="meter" role="progressbar" aria-label="MCQ progress" aria-valuenow="' + k.a + '" aria-valuemax="' + N + '"><i style="width:' + (k.a / N * 100) + '%"></i></div>' +
      '<div class="nav" role="group" aria-label="Question navigator">' + nav + '</div>' +
      '<div class="card"><div class="meta" style="font:12px var(--ui);color:var(--ink2)">Q' + (st.cur + 1) + ' of ' + N + ' · ' + q.lvl.toUpperCase() + ' · ' + q.type + ' · ' + esc(D.modTitles[q.mod].split(':')[0]) + '</div>' +
      '<p style="font-size:19px;margin:8px 0" id="mq">' + esc(q.q) + '</p><div role="group" aria-labelledby="mq">' +
      q.o.map(function (o, i) { var c = 'opt'; if (chosen != null) { if (i === q.a) c += ' right'; else if (i === chosen) c += ' wrong'; } return '<button type="button" class="' + c + '" data-o="' + i + '"' + (chosen != null ? ' disabled' : '') + '>' + String.fromCharCode(65 + i) + '. ' + esc(o) + '</button>'; }).join('') + '</div>' +
      (chosen != null ? '<div class="expl"><b>' + (chosen === q.a ? 'Correct.' : 'Not quite — answer ' + String.fromCharCode(65 + q.a) + '.') + '</b> ' + esc(q.e) + '</div>' : '') + '</div>' +
      '<div class="filters"><button class="btn sm" id="mPrev" type="button">← Prev</button><button class="btn sm" id="mNext" type="button">Next →</button><button class="btn sm" id="mRetry" type="button">Retry incorrect</button><button class="btn sm" id="mRetake" type="button">Retake all</button></div>';
    if (k.a === N) h += summary(k);
    root.innerHTML = h;
    var m = $('#mpMcq'); if (m) { m.textContent = k.a ? 'Last attempt: ' + k.c + ' / ' + N + ' correct (' + k.a + ' answered)' : 'Not attempted'; $('#mpMcqBar').style.width = (k.a ? Math.round(k.c / N * 100) : 0) + '%'; }
  }
  function summary(k) {
    var by = {}; Q.forEach(function (q, i) { by[q.mod] = by[q.mod] || { t: 0, w: 0 }; by[q.mod].t++; if (st.ans[i] !== q.a) by[q.mod].w++; });
    var weak = Object.keys(by).filter(function (m) { return by[m].w > 0; }).sort(function (a, b) { return by[b].w / by[b].t - by[a].w / by[a].t; });
    return '<div class="card" style="margin-top:14px"><div class="stat">' + k.c + ' / ' + N + '</div><p>Final score ' + Math.round(k.c / N * 100) + '%. This score does not affect notebook completion.</p>' +
      (weak.length ? '<p><b>Weak-topic detection</b> — revisit:</p><ul>' + weak.map(function (m) { return '<li><a href="#' + m + '">' + esc(D.modTitles[m]) + '</a> — ' + by[m].w + ' of ' + by[m].t + ' missed</li>'; }).join('') + '</ul>' : '<p>No weak topics — every question correct.</p>') + '</div>';
  }
  root.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.o != null) { if (st.ans[st.cur] == null) { st.ans[st.cur] = +b.dataset.o; save(); render(); E.say(st.ans[st.cur] === Q[st.cur].a ? 'Correct' : 'Incorrect'); var x = $('.expl', root); if (x) x.scrollIntoView({ block: 'nearest' }); } }
    else if (b.dataset.i != null) { st.cur = +b.dataset.i; save(); render(); }
    else if (b.id === 'mNext') { st.cur = Math.min(N - 1, st.cur + 1); save(); render(); }
    else if (b.id === 'mPrev') { st.cur = Math.max(0, st.cur - 1); save(); render(); }
    else if (b.id === 'mRetake') { st = { ans: {}, cur: 0 }; save(); render(); }
    else if (b.id === 'mRetry') { var first = -1; for (var i = 0; i < N; i++) if (st.ans[i] != null && st.ans[i] !== Q[i].a) { delete st.ans[i]; if (first < 0) first = i; } if (first >= 0) st.cur = first; save(); render(); }
  });
  render();
})(window.ERP2);

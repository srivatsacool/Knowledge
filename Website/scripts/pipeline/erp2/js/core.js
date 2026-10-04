/* core.js — theme, navigation, module progress, focus/revision modes, timers, keyboard, print */
(function (E) {
  'use strict';
  var $ = E.$, $$ = E.$$, S = E.store, D = window.ERP2_DATA;
  var body = document.body;

  /* portal bar offset (hub injects a sticky bar at the top of <body>) */
  function portal() { var p = $('#hub-portal-bar'); document.documentElement.style.setProperty('--top', (p ? p.offsetHeight : 0) + 'px'); }
  portal(); window.addEventListener('resize', portal);

  /* theme */
  function theme(t) { document.documentElement.setAttribute('data-theme', t); var b = $('#btnTheme'); if (b) b.setAttribute('aria-pressed', String(t === 'dark')); }
  var th = S.get('theme', null) || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  theme(th);
  $('#btnTheme').addEventListener('click', function () { th = th === 'dark' ? 'light' : 'dark'; S.set('theme', th); theme(th); });

  /* module status: not started → in progress → completed */
  var LBL = { 0: 'Not started', 1: 'In progress', 2: 'Completed' };
  function status() { return S.get('mods', {}); }
  function paintStatus() {
    var st = status(), done = 0;
    D.mods.forEach(function (m) {
      var v = st[m] || 0; if (v === 2) done++;
      var b = $('.statusBtn[data-mod="' + m + '"]'); if (b) { b.textContent = '● ' + LBL[v] + ' — click to change'; b.setAttribute('aria-label', 'Module status: ' + LBL[v] + '. Activate to change.'); b.classList.toggle('on', v === 2); }
      var a = $('#sidebarNav a[data-mod="' + m + '"] .dot'); if (a) a.className = 'dot' + (v === 1 ? ' st-progress' : v === 2 ? ' st-done' : '');
    });
    var pct = Math.round(done / D.mods.length * 100);
    $('#progressBar').style.width = pct + '%';
    var pb = $('#progressWrap'); if (pb) pb.setAttribute('aria-valuenow', pct);
    var mp = $('#mpNotebook'); if (mp) { mp.textContent = done + ' / ' + D.mods.length + ' modules completed (' + pct + '%)'; $('#mpNotebookBar').style.width = pct + '%'; }
    var ip = D.mods.filter(function (m) { return st[m] === 1; }).length; var ipe = $('#mpInProg'); if (ipe) ipe.textContent = ip + ' in progress';
  }
  $$('.statusBtn').forEach(function (b) {
    b.addEventListener('click', function () {
      var st = status(), m = b.getAttribute('data-mod'); st[m] = ((st[m] || 0) + 1) % 3; S.set('mods', st); paintStatus(); E.say(m + ': ' + LBL[st[m]]);
    });
  });
  document.addEventListener('erp2:update', paintStatus); paintStatus();

  /* current section tracking (sidebar highlight + focus-mode module) */
  var cur = 'cover', curMod = D.mods[0];
  var secs = $$('main section[id]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { cur = e.target.id; if (e.target.dataset.mod) curMod = e.target.dataset.mod; paintNav(); } });
    }, { rootMargin: '-20% 0px -70% 0px' });
    secs.forEach(function (s) { io.observe(s); });
  }
  function paintNav() { $$('#sidebarNav a').forEach(function (a) { a.classList.toggle('cur', a.getAttribute('href') === '#' + cur); if (a.classList.contains('cur')) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); }); }
  $$('#sidebarNav a').forEach(function (a) { a.addEventListener('click', function () { body.classList.remove('navopen'); var id = a.getAttribute('href').slice(1); var s = document.getElementById(id); if (s && s.dataset.mod) { curMod = s.dataset.mod; if (body.classList.contains('focus')) setFocusMod(curMod); } }); });
  $('#hamb').addEventListener('click', function () { var o = body.classList.toggle('navopen'); this.setAttribute('aria-expanded', String(o)); });

  /* focus mode */
  function setFocusMod(m) { $$('.modsheet').forEach(function (s) { s.classList.toggle('cur-mod', s.dataset.mod === m); }); curMod = m; var el = document.getElementById(m); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 70 }); }
  function focus(on) { body.classList.toggle('focus', on); $('#btnFocus').setAttribute('aria-pressed', String(on)); if (on) setFocusMod(curMod); S.set('focus', on); E.say('Focus mode ' + (on ? 'on' : 'off')); }
  $('#btnFocus').addEventListener('click', function () { focus(!body.classList.contains('focus')); });

  /* revision mode */
  function rev(on) { body.classList.toggle('revmode', on); $('#btnRev').setAttribute('aria-pressed', String(on)); S.set('rev', on); E.say('Revision mode ' + (on ? 'on: showing definitions, frameworks, diagrams, distinctions, PYQ links and common mistakes' : 'off')); }
  $('#btnRev').addEventListener('click', function () { rev(!body.classList.contains('revmode')); });
  if (S.get('rev', false)) rev(true);

  /* module stepping */
  function step(d) {
    var i = D.mods.indexOf(curMod); var n = Math.max(0, Math.min(D.mods.length - 1, i + d));
    curMod = D.mods[n];
    if (body.classList.contains('focus')) setFocusMod(curMod); else { var el = document.getElementById(curMod); if (el) { el.scrollIntoView(); el.querySelector('h2').setAttribute('tabindex', '-1'); el.querySelector('h2').focus({ preventScroll: true }); } }
  }

  /* keyboard */
  document.addEventListener('keydown', function (e) {
    var t = e.target, typing = t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable);
    if (e.key === 'Escape') { $('#searchResults').classList.remove('open'); $('#timerPanel').classList.remove('open'); body.classList.remove('navopen'); if (typing) t.blur(); return; }
    if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === '/') { e.preventDefault(); $('#q').focus(); }
    else if (e.key === 'j' || e.key === 'ArrowRight' && e.shiftKey) step(1);
    else if (e.key === 'k' || e.key === 'ArrowLeft' && e.shiftKey) step(-1);
    else if (e.key === 'f') $('#btnFocus').click();
    else if (e.key === 'r') $('#btnRev').click();
    else if (e.key === 't') $('#btnTheme').click();
    else if (e.key === '?') { var h = $('#keys'); h.open = true; h.scrollIntoView(); }
  });

  /* timers */
  var tm = { end: 0, mode: null, work: true, id: null, left: 0 };
  var panel = $('#timerPanel'), clock = $('#clock'), label = $('#timerLabel'), btnT = $('#btnTimer');
  function fmt(s) { s = Math.max(0, Math.round(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
  function beep() { try { var c = new (window.AudioContext || window.webkitAudioContext)(), o = c.createOscillator(), g = c.createGain(); o.connect(g); g.connect(c.destination); g.gain.value = .06; o.frequency.value = 660; o.start(); setTimeout(function () { o.stop(); c.close(); }, 350); } catch (e) { } }
  function tick() {
    var left = (tm.end - Date.now()) / 1000;
    if (left <= 0) {
      beep();
      if (tm.mode === 'pomo') { tm.work = !tm.work; start('pomo', tm.work ? 25 : 5); E.say(tm.work ? 'Break over. Focus session started.' : 'Focus session done. Take a 5 minute break.'); return; }
      stop(); clock.textContent = '00:00'; label.textContent = 'Time is up'; E.say('Timer finished'); return;
    }
    clock.textContent = fmt(left); btnT.textContent = '⏱ ' + fmt(left);
  }
  function start(mode, min) { stop(true); tm.mode = mode; tm.end = Date.now() + min * 60000; label.textContent = mode === 'pomo' ? (tm.work ? 'Pomodoro — focus (25 min)' : 'Pomodoro — break (5 min)') : min + ' minute timer'; tm.id = setInterval(tick, 500); tick(); }
  function stop(keep) { clearInterval(tm.id); tm.id = null; if (!keep) { btnT.textContent = '⏱ Timer'; label.textContent = 'Choose a timer'; clock.textContent = '--:--'; } }
  btnT.addEventListener('click', function () { var o = panel.classList.toggle('open'); btnT.setAttribute('aria-expanded', String(o)); });
  $$('[data-timer]').forEach(function (b) { b.addEventListener('click', function () { var v = b.getAttribute('data-timer'); if (v === 'pomo') { tm.work = true; start('pomo', 25); } else if (v === 'stop') stop(); else start('count', +v); }); });

  /* print: open every collapsible so nothing is hidden on paper */
  window.addEventListener('beforeprint', function () { $$('details').forEach(function (d) { d.setAttribute('data-was', d.open ? '1' : '0'); d.open = true; }); });
  window.addEventListener('afterprint', function () { $$('details').forEach(function (d) { d.open = d.getAttribute('data-was') === '1'; }); });
  $('#btnPrint').addEventListener('click', function () { window.print(); });

  if (S.get('focus', false)) focus(true);
  paintNav();
})(window.ERP2);

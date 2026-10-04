/* store.js — safe localStorage wrapper (falls back to memory when blocked) */
window.ERP2 = window.ERP2 || {};
(function (E) {
  'use strict';
  var mem = {}, ok = true, P = 'erp2.';
  try { localStorage.setItem(P + 't', '1'); localStorage.removeItem(P + 't'); } catch (e) { ok = false; }
  E.store = {
    get: function (k, d) {
      try { var v = ok ? localStorage.getItem(P + k) : mem[k]; return v == null ? d : JSON.parse(v); } catch (e) { return d; }
    },
    set: function (k, v) {
      var s = JSON.stringify(v);
      try { if (ok) localStorage.setItem(P + k, s); else mem[k] = s; } catch (e) { mem[k] = s; }
      document.dispatchEvent(new CustomEvent('erp2:update'));
    }
  };
  E.$ = function (s, r) { return (r || document).querySelector(s); };
  E.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  E.say = function (m) { var l = E.$('#live'); if (l) { l.textContent = ''; setTimeout(function () { l.textContent = m; }, 30); } };
})(window.ERP2);

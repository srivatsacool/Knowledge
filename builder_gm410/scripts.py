# builder_gm410/scripts.py
# Client-side JavaScript Engine for Interactive Study, Search, Timer, Ruling Toggle & PYQ Filters

SCRIPTS_JS = """
// GM 410 Master Interactive Engine
document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Progress & Scrollspy
  const progressBar = document.getElementById('progressBar');
  const sections = document.querySelectorAll('section[id], article[id]');
  const sideLinks = document.querySelectorAll('.side a[href^="#"]');

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';

    // Scrollspy active state
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (winScroll >= top) currentId = sec.getAttribute('id');
    });

    if (currentId) {
      sideLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('cur');
        } else {
          link.classList.remove('cur');
        }
      });
    }
  });

  // 2. Theme Toggle (Light / Dark)
  const themeBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('gm410_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const nxt = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nxt);
      localStorage.setItem('gm410_theme', nxt);
      themeBtn.setAttribute('aria-pressed', nxt === 'dark');
    });
  }

  // 3. Single-Line Ruled Paper Toggle
  const rulingBtn = document.getElementById('rulingToggle');
  const savedRuling = localStorage.getItem('gm410_ruling') || 'on';
  document.documentElement.setAttribute('data-ruling', savedRuling);
  if (rulingBtn) {
    if (savedRuling === 'off') rulingBtn.classList.add('on');
    rulingBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-ruling');
      const nxt = cur === 'off' ? 'on' : 'off';
      document.documentElement.setAttribute('data-ruling', nxt);
      localStorage.setItem('gm410_ruling', nxt);
      rulingBtn.classList.toggle('on', nxt === 'off');
      rulingBtn.setAttribute('aria-pressed', nxt === 'off');
    });
  }

  // 4. Focus / Zen Mode Toggle
  const focusBtn = document.getElementById('focusToggle');
  if (focusBtn) {
    focusBtn.addEventListener('click', () => {
      document.body.classList.toggle('focus');
      const isFocus = document.body.classList.contains('focus');
      focusBtn.setAttribute('aria-pressed', isFocus);
    });
  }

  // 5. Mobile Hamburger Drawer
  const hamb = document.getElementById('hamb');
  const side = document.querySelector('.side');
  if (hamb && side) {
    hamb.addEventListener('click', () => {
      side.classList.toggle('open');
      hamb.setAttribute('aria-expanded', side.classList.contains('open'));
    });
    // Close sidebar on link click on mobile
    side.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 1024) side.classList.remove('open');
      });
    });
  }

  // 6. Exam Countdown Timer (15 min / 45 min)
  const timerBtn = document.getElementById('timerToggle');
  const timerPanel = document.getElementById('timerPanel');
  const clockEl = document.getElementById('timerClock');
  let timerInterval = null;
  let remainingSeconds = 15 * 60;
  let isTimerRunning = false;

  function updateClockDisplay() {
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    if (clockEl) clockEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  if (timerBtn && timerPanel) {
    timerBtn.addEventListener('click', () => {
      timerPanel.classList.toggle('open');
      timerBtn.setAttribute('aria-expanded', timerPanel.classList.contains('open'));
    });

    document.getElementById('timerStart')?.addEventListener('click', () => {
      if (isTimerRunning) return;
      isTimerRunning = true;
      timerInterval = setInterval(() => {
        if (remainingSeconds > 0) {
          remainingSeconds--;
          updateClockDisplay();
        } else {
          clearInterval(timerInterval);
          isTimerRunning = false;
          alert('⏰ Time is up! Exam writing window finished.');
        }
      }, 1000);
    });

    document.getElementById('timerPause')?.addEventListener('click', () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
    });

    document.getElementById('timerReset15')?.addEventListener('click', () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
      remainingSeconds = 15 * 60;
      updateClockDisplay();
    });

    document.getElementById('timerReset45')?.addEventListener('click', () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
      remainingSeconds = 45 * 60;
      updateClockDisplay();
    });
  }

  // 7. Live Keyword Search Engine
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (searchInput && searchResults) {
    // Keyboard shortcut '/' or 'Ctrl+K'
    window.addEventListener('keydown', (e) => {
      if ((e.key === '/' && document.activeElement !== searchInput) || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault();
        searchInput.focus();
        searchResults.classList.add('open');
      } else if (e.key === 'Escape') {
        searchResults.classList.remove('open');
        searchInput.blur();
      }
    });

    // Build searchable index from headings & cards
    const searchIndex = [];
    document.querySelectorAll('.main h2, .main h3, .main h4, .nb-card__title, .nb-exam-card, .nb-poll-card').forEach((el, idx) => {
      const text = el.textContent.trim();
      const parentSection = el.closest('section[id], article[id]') || el;
      const targetId = parentSection.id || el.id || ('sec-' + idx);
      if (!el.id && !parentSection.id) el.id = targetId;

      searchIndex.push({
        title: text,
        id: targetId,
        snippet: (parentSection.querySelector('p')?.textContent || text).substring(0, 110)
      });
    });

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        searchResults.innerHTML = '';
        searchResults.classList.remove('open');
        return;
      }

      const matches = searchIndex.filter(item => item.title.toLowerCase().includes(query) || item.snippet.toLowerCase().includes(query)).slice(0, 8);
      if (matches.length === 0) {
        searchResults.innerHTML = '<div style="padding:12px;font-size:13px;color:var(--pencil);">No matching concepts or exam questions found.</div>';
      } else {
        searchResults.innerHTML = matches.map(m => `
          <a href="#${m.id}">
            <strong>${m.title}</strong>
            <small>${m.snippet}...</small>
          </a>
        `).join('');
      }
      searchResults.classList.add('open');
    });

    searchResults.addEventListener('click', (e) => {
      if (e.target.closest('a')) searchResults.classList.remove('open');
    });
  }

  // 8. Interactive PYQ Bank Filter Engine
  const pyqYearFilter = document.getElementById('pyqYearFilter');
  const pyqModuleFilter = document.getElementById('pyqModuleFilter');
  const pyqMarksFilter = document.getElementById('pyqMarksFilter');
  const pyqCards = document.querySelectorAll('.pyq-item');

  function filterPYQs() {
    const yr = pyqYearFilter ? pyqYearFilter.value : 'all';
    const mod = pyqModuleFilter ? pyqModuleFilter.value : 'all';
    const mrk = pyqMarksFilter ? pyqMarksFilter.value : 'all';

    pyqCards.forEach(card => {
      const cardYr = card.getAttribute('data-year') || '';
      const cardMod = card.getAttribute('data-module') || '';
      const cardMrk = card.getAttribute('data-marks') || '';

      const matchYr = (yr === 'all' || cardYr === yr);
      const matchMod = (mod === 'all' || cardMod === mod);
      const matchMrk = (mrk === 'all' || cardMrk === mrk);

      card.style.display = (matchYr && matchMod && matchMrk) ? 'block' : 'none';
    });
  }

  if (pyqYearFilter) pyqYearFilter.addEventListener('change', filterPYQs);
  if (pyqModuleFilter) pyqModuleFilter.addEventListener('change', filterPYQs);
  if (pyqMarksFilter) pyqMarksFilter.addEventListener('change', filterPYQs);

  // 9. Interactive Quiz Scoring
  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const parent = opt.closest('.quiz-q');
      if (parent.getAttribute('data-answered') === 'true') return;
      parent.setAttribute('data-answered', 'true');
      const isCorrect = opt.getAttribute('data-correct') === 'true';
      opt.style.background = isCorrect ? 'var(--hl-green)' : 'var(--hl-pink)';
      opt.style.fontWeight = 'bold';
      const feedback = parent.querySelector('.quiz-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.innerHTML = isCorrect ? '<strong>✔ Correct!</strong> Well reasoned.' : '<strong>✖ Incorrect.</strong> Review the framework notes above.';
      }
    });
  });

  // 10. Reveal All / Collapse All Model Answers
  document.getElementById('expandAllAnswers')?.addEventListener('click', () => {
    document.querySelectorAll('.main details.rv').forEach(d => d.open = true);
  });
  document.getElementById('collapseAllAnswers')?.addEventListener('click', () => {
    document.querySelectorAll('.main details.rv').forEach(d => d.open = false);
  });
});
"""

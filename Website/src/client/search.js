/**
 * Brain Knowledge Hub — Client Search & Theme Controller
 * Fast, zero-dependency client-side fuzzy search across all study notebooks.
 */
(function() {
  'use strict';

  let searchIndex = null;
  let activeIndex = -1;
  let resultItems = [];

  // DOM Elements
  const searchBackdrop = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('searchModalInput');
  const searchResults = document.getElementById('searchModalResults');
  const searchClose = document.getElementById('searchModalClose');
  const heroSearchInput = document.getElementById('heroSearchInput');
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  const themeToggle = document.getElementById('themeToggleBtn');

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('hub-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('hub-theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark' 
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  // Load Search Index
  async function loadSearchIndex() {
    if (searchIndex) return searchIndex;
    try {
      const basePath = document.body.dataset.basePath || '';
      const response = await fetch(basePath + '/data/search-index.json');
      if (!response.ok) throw new Error('Failed to load search index');
      searchIndex = await response.json();
      return searchIndex;
    } catch (e) {
      console.warn('Search index load failed:', e);
      searchIndex = [];
      return searchIndex;
    }
  }

  // Open & Close Search Modal
  function openSearch(initialQuery = '') {
    if (!searchBackdrop) return;
    loadSearchIndex();
    searchBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (searchInput) {
      searchInput.value = initialQuery;
      setTimeout(() => {
        searchInput.focus();
        if (initialQuery) performSearch(initialQuery);
      }, 50);
    }
  }

  function closeSearch() {
    if (!searchBackdrop) return;
    searchBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    activeIndex = -1;
    resultItems = [];
  }

  // Search Logic & Scoring
  function performSearch(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    
    if (!q) {
      searchResults.innerHTML = '<div style="padding: 1.5rem; text-align: center; color: var(--ink-muted); font-size: 0.9rem;">Type to search titles, concepts, formulas, frameworks, and notes...</div>';
      resultItems = [];
      activeIndex = -1;
      return;
    }

    if (!searchIndex || !searchIndex.length) {
      searchResults.innerHTML = '<div style="padding: 1.5rem; text-align: center; color: var(--ink-muted);">Loading knowledge index...</div>';
      return;
    }

    const matches = [];
    const tokens = q.split(/\s+/).filter(Boolean);

    for (const item of searchIndex) {
      let score = 0;
      const titleLower = (item.title || '').toLowerCase();
      const descLower = (item.description || '').toLowerCase();
      const subjectLower = (item.subject || '').toLowerCase();
      const tagsLower = (item.tags || []).join(' ').toLowerCase();
      const headingsLower = (item.headings || []).join(' ').toLowerCase();
      const contentLower = (item.content || '').toLowerCase();

      // Check all tokens
      let allMatch = true;
      for (const token of tokens) {
        let tokenFound = false;
        if (titleLower.includes(token)) { score += 50; tokenFound = true; }
        if (tagsLower.includes(token)) { score += 30; tokenFound = true; }
        if (headingsLower.includes(token)) { score += 20; tokenFound = true; }
        if (descLower.includes(token)) { score += 15; tokenFound = true; }
        if (subjectLower.includes(token)) { score += 10; tokenFound = true; }
        if (contentLower.includes(token)) { score += 5; tokenFound = true; }
        
        if (!tokenFound) {
          allMatch = false;
          break;
        }
      }

      if (allMatch && score > 0) {
        // Find best snippet
        let snippet = item.description || '';
        if (contentLower.includes(q)) {
          const idx = contentLower.indexOf(q);
          const start = Math.max(0, idx - 40);
          const end = Math.min(item.content.length, idx + q.length + 80);
          snippet = (start > 0 ? '…' : '') + item.content.slice(start, end) + (end < item.content.length ? '…' : '');
        }
        matches.push({ item, score, snippet });
      }
    }

    matches.sort((a, b) => b.score - a.score);

    if (!matches.length) {
      searchResults.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--ink-muted);">No notebooks or topics matching "<strong>${escapeHtml(query)}</strong>" found.</div>`;
      resultItems = [];
      activeIndex = -1;
      return;
    }

    // Render Results
    let html = '';
    resultItems = matches.slice(0, 15);
    activeIndex = 0;

    resultItems.forEach((res, i) => {
      const it = res.item;
      const highlightedTitle = highlightMatch(it.title, tokens);
      const highlightedSnippet = highlightMatch(res.snippet, tokens);
      const isSelected = i === 0 ? 'selected' : '';

      html += `
        <a href="${it.url}" class="search-result-item ${isSelected}" data-index="${i}">
          <div class="search-result-title">${highlightedTitle}</div>
          <div class="search-result-snippet">${highlightedSnippet}</div>
          <div class="search-result-meta">
            <span>${escapeHtml(it.subject)}</span>
            <span>•</span>
            <span>${escapeHtml(it.category || 'General')}</span>
            ${it.tags && it.tags.length ? `<span>•</span><span>${escapeHtml(it.tags.slice(0, 3).join(', '))}</span>` : ''}
          </div>
        </a>
      `;
    });

    searchResults.innerHTML = html;

    // Attach click events
    searchResults.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const idx = parseInt(el.dataset.index, 10);
        setActiveResult(idx);
      });
    });
  }

  function setActiveResult(index) {
    if (!searchResults) return;
    const items = searchResults.querySelectorAll('.search-result-item');
    if (!items.length) return;
    activeIndex = Math.max(0, Math.min(index, items.length - 1));
    items.forEach((item, i) => {
      item.classList.toggle('selected', i === activeIndex);
      if (i === activeIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  function highlightMatch(text, tokens) {
    if (!text) return '';
    let result = escapeHtml(text);
    tokens.forEach(tok => {
      if (!tok || tok.length < 2) return;
      const regex = new RegExp(`(${escapeRegex(tok)})`, 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    });
    return result;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Event Listeners
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    searchTriggers.forEach(btn => {
      btn.addEventListener('click', () => openSearch(''));
    });

    if (heroSearchInput) {
      heroSearchInput.addEventListener('focus', () => {
        const val = heroSearchInput.value;
        heroSearchInput.value = '';
        openSearch(val);
      });
      heroSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          openSearch(heroSearchInput.value);
        }
      });
    }

    if (searchClose) {
      searchClose.addEventListener('click', closeSearch);
    }

    if (searchBackdrop) {
      searchBackdrop.addEventListener('click', (e) => {
        if (e.target === searchBackdrop) closeSearch();
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeSearch();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setActiveResult(activeIndex + 1);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setActiveResult(activeIndex - 1);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const items = searchResults ? searchResults.querySelectorAll('.search-result-item') : [];
          if (items.length && activeIndex >= 0 && items[activeIndex]) {
            items[activeIndex].click();
          }
        }
      });
    }

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchBackdrop && searchBackdrop.classList.contains('active')) {
          closeSearch();
        } else {
          openSearch('');
        }
      }
      // '/' when not inside an input
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        openSearch('');
      }
      // Esc closes search
      if (e.key === 'Escape' && searchBackdrop && searchBackdrop.classList.contains('active')) {
        closeSearch();
      }
    });
  });
})();

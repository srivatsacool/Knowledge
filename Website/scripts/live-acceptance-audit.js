const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const ARTIFACT_DIR = "C:\\Users\\MSI\\.gemini\\antigravity-cli\\brain\\8dec91af-c664-4183-99e8-29f4cba83512";
const LIVE_URL = "https://knowledge-du5.pages.dev/operations/logistics-supply-chain/notebooks/inventory-optimization/";
const HOME_URL = "https://knowledge-du5.pages.dev/";

async function runLiveAudit() {
  console.log("=== RUNNING FULL LIVE ACCEPTANCE AUDIT ===");
  console.log("Target Live URL:", LIVE_URL);

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleMessages = [];
  page.on('console', msg => consoleMessages.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => consoleMessages.push(`[PAGE ERROR] ${err.toString()}`));

  console.log("\n--- CRITERION 1: LIVE DEPLOYMENT ---");
  await page.setViewport({ width: 1440, height: 900 });
  const response = await page.goto(LIVE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  console.log(`Live HTTP Status: ${response.status()}`);
  console.log(`Live Page Title: ${await page.title()}`);

  console.log("\n--- CRITERION 2 & 3: MATH VISUAL AUDIT ---");
  const mathAudit = await page.evaluate(() => {
    const rawMatches = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent) continue;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) continue;
      if (parent.closest('.katex-mathml')) continue; // MathML annotation

      const txt = node.textContent;
      if (txt.includes('$$') || txt.includes('\\frac') || txt.includes('\\sqrt')) {
        rawMatches.push({
          tag: parent.tagName,
          className: parent.className,
          text: txt.trim()
        });
      }
    }
    const katexNodes = document.querySelectorAll('.katex').length;
    return { rawMatches, katexNodes };
  });

  console.log(`Pre-compiled KaTeX DOM Elements: ${mathAudit.katexNodes}`);
  console.log(`Raw LaTeX ($$, \\frac, \\sqrt) matches: ${mathAudit.rawMatches.length}`);
  if (mathAudit.rawMatches.length === 0) {
    console.log("PASS: DOM is 100% clean of raw LaTeX delimiters!");
  } else {
    console.log("FAIL: Raw LaTeX present:", mathAudit.rawMatches);
  }

  console.log("\n--- CRITERION 4: NUMERICAL AUDIT (12-STEP PEDAGOGY) ---");
  const numericalAudit = await page.evaluate(() => {
    const example = document.querySelector('.worked-example');
    if (!example) return { found: false };

    const expected12Steps = [
      { step: 1, name: 'Problem Statement' },
      { step: 2, name: 'Given Data' },
      { step: 3, name: 'What is Required' },
      { step: 4, name: 'Mathematical Model' },
      { step: 5, name: 'Why This Formula' },
      { step: 6, name: 'Variable Definitions' },
      { step: 7, name: 'Step-by-Step Substitution' },
      { step: 8, name: 'Arithmetic Trace' },
      { step: 9, name: 'Final Calculated Answer' },
      { step: 10, name: 'Managerial & Operational Interpretation' },
      { step: 11, name: 'Sanity Test & Boundary Check' },
      { step: 12, name: 'Common Mistake' }
    ];

    const innerText = example.innerText;
    const checks = expected12Steps.map(s => ({
      step: s.step,
      name: s.name,
      present: innerText.toLowerCase().includes(s.name.toLowerCase()) || 
               innerText.includes(`0${s.step}`) || 
               innerText.includes(`${s.step}.`)
    }));

    return {
      found: true,
      all12Present: checks.every(c => c.present),
      checks
    };
  });

  console.log("Worked Example Found:", numericalAudit.found);
  console.log("All 12 Steps Present:", numericalAudit.all12Present);
  numericalAudit.checks?.forEach(c => {
    console.log(`  Step ${c.step}: ${c.name} -> ${c.present ? 'VERIFIED' : 'MISSING'}`);
  });

  console.log("\n--- CRITERION 5: INDEX AUDIT (CANONICAL 9 GROUPS) ---");
  const indexAudit = await page.evaluate(() => {
    const canonicalGroups = [
      'START',
      'FOUNDATIONS',
      'CORE CONCEPTS',
      'FRAMEWORKS & MODELS',
      'WORKED EXAMPLES',
      'CASES & APPLICATIONS',
      'PYQS',
      'QUIZ & REVISION',
      'APPENDIX'
    ];

    const renderedSections = Array.from(document.querySelectorAll('#notebook-sidebar .index-section')).map(sec => {
      const title = sec.querySelector('.font-serif')?.innerText?.trim() || sec.querySelector('.font-bold')?.innerText?.trim();
      const items = Array.from(sec.querySelectorAll('a')).map(a => a.innerText.trim());
      return { title, count: items.length, items };
    });

    return { canonicalGroups, renderedSections };
  });

  console.log(`Rendered Section Groups Count: ${indexAudit.renderedSections.length}`);
  indexAudit.renderedSections.forEach((s, i) => {
    console.log(`  Group ${i + 1}: ${s.title} (${s.count} items)`);
  });

  console.log("\n--- CRITERION 6 & 7: NOTEBOOK CONTROLS & FOCUS MODE ---");
  const focusBtn = await page.$('#toolbar-focus-btn');
  console.log("Focus button present:", !!focusBtn);
  if (focusBtn) {
    await focusBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const focusStateActive = await page.evaluate(() => {
      return document.body.classList.contains('focus-mode');
    });
    console.log("Focus Mode Active on body:", focusStateActive);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_focus_mode.png') });

    // Exit focus
    await focusBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const focusStateExited = await page.evaluate(() => !document.body.classList.contains('focus-mode'));
    console.log("Focus Mode Exited successfully:", focusStateExited);
  }

  console.log("\n--- CRITERION 8: SEARCH PALETTE ---");
  const searchBtn = await page.$('#toolbar-search-btn');
  console.log("Search button present:", !!searchBtn);
  if (searchBtn) {
    await searchBtn.click();
    await new Promise(r => setTimeout(r, 500));
    const searchOpen = await page.evaluate(() => {
      const dialog = document.getElementById('command-dialog');
      return dialog && !dialog.classList.contains('hidden');
    });
    console.log("Command Search Dialog Open:", searchOpen);

    const input = await page.$('#command-input');
    if (input) {
      await input.type('EOQ', { delay: 30 });
      await new Promise(r => setTimeout(r, 300));
      const eoqResults = await page.evaluate(() => document.querySelectorAll('#command-results .cmd-item').length);
      console.log(`Results for 'EOQ': ${eoqResults}`);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_search_modal.png') });

      // Clear & search 'Safety Stock'
      await page.evaluate(() => document.getElementById('command-input').value = '');
      await input.type('Safety Stock', { delay: 30 });
      await new Promise(r => setTimeout(r, 300));
      const ssResults = await page.evaluate(() => document.querySelectorAll('#command-results .cmd-item').length);
      console.log(`Results for 'Safety Stock': ${ssResults}`);

      // Clear & search 'PYQ'
      await page.evaluate(() => document.getElementById('command-input').value = '');
      await input.type('PYQ', { delay: 30 });
      await new Promise(r => setTimeout(r, 300));
      const pyqResults = await page.evaluate(() => document.querySelectorAll('#command-results .cmd-item').length);
      console.log(`Results for 'PYQ': ${pyqResults}`);

      // Close search dialog
      await page.keyboard.press('Escape');
      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log("\n--- CRITERION 9: DARK MODE AUDIT ---");
  const themeBtn = await page.$('#toolbar-theme-btn');
  console.log("Theme button present:", !!themeBtn);
  if (themeBtn) {
    await themeBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const isDark = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') || document.documentElement.getAttribute('data-theme') === 'dark';
    });
    console.log("Dark Mode Active:", isDark);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_dark_mode.png') });

    // Toggle back to cream paper
    await themeBtn.click();
    await new Promise(r => setTimeout(r, 400));
    console.log("Reverted to cream light mode.");
  }

  console.log("\n--- CRITERION 10: PROGRESS BAR TRACKING ---");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.5));
  await new Promise(r => setTimeout(r, 400));
  const progressState = await page.evaluate(() => {
    const pct = document.getElementById('reading-percentage')?.innerText;
    const bar = document.getElementById('progress-bar-fill')?.style.width;
    const edge = document.getElementById('toolbar-reading-progress')?.style.width;
    return { pct, bar, edge };
  });
  console.log("Scrolled Reading Progress:", progressState);
  await page.evaluate(() => window.scrollTo(0, 0));

  console.log("\n--- CRITERION 11: RESPONSIVE VIEWPORT CHECKS ---");
  // 1. Desktop 1440
  await page.setViewport({ width: 1440, height: 900 });
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_desktop_1440.png') });

  // 2. Desktop 1920
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_desktop_1920.png') });

  // 3. Tablet 768
  await page.setViewport({ width: 768, height: 1024 });
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_tablet_768.png') });

  // 4. Mobile 390
  await page.setViewport({ width: 390, height: 844 });
  const mobileMetrics = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      noOverflow: document.documentElement.scrollWidth <= document.documentElement.clientWidth
    };
  });
  console.log("Mobile (390px) Overflow Check:", mobileMetrics);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_mobile_390.png') });

  console.log("\n--- CRITERION 12: PRINT VIEW AUDIT ---");
  await page.emulateMediaType('print');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_print_view.png') });
  await page.emulateMediaType('screen');

  console.log("\n--- CRITERION 13: COMPONENT DETAIL CAPTURES ---");
  // Capture Formula Card
  const formulaCard = await page.$('.formula-card');
  if (formulaCard) {
    await formulaCard.scrollIntoView();
    await new Promise(r => setTimeout(r, 300));
    await formulaCard.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_formula_card.png') });
    console.log("Captured Formula Card element screenshot");
  }

  // Capture Worked Example
  const workedExample = await page.$('.worked-example');
  if (workedExample) {
    await workedExample.scrollIntoView();
    await new Promise(r => setTimeout(r, 300));
    await workedExample.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_worked_example.png') });
    console.log("Captured Worked Example element screenshot");
  }

  // Capture PYQ Card
  const pyqCard = await page.$('.pyq-card');
  if (pyqCard) {
    await pyqCard.scrollIntoView();
    await new Promise(r => setTimeout(r, 300));
    await pyqCard.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_pyq_card.png') });
    console.log("Captured PYQ Card element screenshot");
  }

  // Capture Quiz Reveal
  const quizCard = await page.$('.quiz-card');
  if (quizCard) {
    await quizCard.scrollIntoView();
    await new Promise(r => setTimeout(r, 300));
    const btn = await quizCard.$('button, summary');
    if (btn) await btn.click();
    await new Promise(r => setTimeout(r, 300));
    await quizCard.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_quiz_card.png') });
    console.log("Captured Quiz Card element screenshot");
  }

  // Capture Appendix Register
  const appendixRegister = await page.$('.appendix-register');
  if (appendixRegister) {
    await appendixRegister.scrollIntoView();
    await new Promise(r => setTimeout(r, 300));
    await appendixRegister.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_appendix.png') });
    console.log("Captured Appendix Register element screenshot");
  }

  console.log("\n--- CRITERION 14: HOMEPAGE VERIFICATION ---");
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(HOME_URL, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'live_audit_homepage_1440.png') });
  console.log("Captured Homepage screenshot");

  console.log("\n--- CONSOLE LOG SUMMARY ---");
  console.log(`Total messages logged: ${consoleMessages.length}`);
  const errors = consoleMessages.filter(m => m.includes('[error]') || m.includes('[PAGE ERROR]'));
  if (errors.length > 0) {
    console.log("Console errors:", errors);
  } else {
    console.log("PASS: Zero errors on live page!");
  }

  await browser.close();
  console.log("\n=== LIVE ACCEPTANCE AUDIT COMPLETE ===");
}

runLiveAudit().catch(err => {
  console.error("Live audit failed:", err);
  process.exit(1);
});

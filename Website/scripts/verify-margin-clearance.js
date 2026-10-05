const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST_DIR = path.resolve(__dirname, '../dist');
const ARTIFACT_DIR = "C:\\Users\\MSI\\.gemini\\antigravity-cli\\brain\\8dec91af-c664-4183-99e8-29f4cba83512";

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  let filePath = path.join(DIST_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end();
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

async function runMarginAudit() {
  const PORT = 3599;
  await new Promise(r => server.listen(PORT, r));
  console.log(`Static server listening on port ${PORT}...`);

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const url = `http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`;

  console.log("\n==========================================");
  console.log("TEST 1: DESKTOP 1440px MARGIN CLEARANCE");
  console.log("==========================================");
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0' });

  const desktopMeasurements = await page.evaluate(() => {
    const sheet = document.querySelector('.notebook-sheet');
    if (!sheet) return { error: 'No .notebook-sheet found' };
    const sheetRect = sheet.getBoundingClientRect();

    const selectors = [
      { name: 'H1 Title', selector: 'header h1' },
      { name: 'Header Meta Row', selector: 'header div.flex.flex-wrap' },
      { name: 'Description Paragraph', selector: 'header p' },
      { name: 'Faculty Lead Row', selector: 'header div.border-t' },
      { name: 'Sticky Note', selector: '.sticky-note' },
      { name: 'First Prose H2', selector: '.prose h2' },
      { name: 'First Prose Paragraph', selector: '.prose p' },
      { name: 'Formula Card', selector: '.formula-card' },
      { name: 'Worked Example', selector: '.worked-example' },
      { name: 'PYQ Card', selector: '.pyq-card' }
    ];

    const results = selectors.map(item => {
      const el = document.querySelector(item.selector);
      if (!el) return { name: item.name, found: false };
      const elRect = el.getBoundingClientRect();
      const leftOffset = Math.round(elRect.left - sheetRect.left);
      const redLinePos = 70; // 68px - 70px in CSS
      const clearance = leftOffset - redLinePos;
      return {
        name: item.name,
        found: true,
        leftOffset,
        clearance,
        passed: clearance >= 35 // At least 35px clearance from red margin line
      };
    });

    const sheetPadding = window.getComputedStyle(sheet).paddingLeft;
    return { sheetPadding, results };
  });

  console.log(`Computed Sheet padding-left: ${desktopMeasurements.sheetPadding}`);
  let desktopAllPassed = true;
  desktopMeasurements.results.forEach(r => {
    console.log(`  ${r.name}: leftOffset = ${r.leftOffset}px | clearance from red line = ${r.clearance}px -> ${r.passed ? 'PASS' : 'FAIL'}`);
    if (!r.passed) desktopAllPassed = false;
  });
  console.log(`DESKTOP 1440px STATUS: ${desktopAllPassed ? '100% PASSED' : 'FAILED'}`);

  // Screenshot desktop header zoom
  const headerEl = await page.$('header');
  if (headerEl) {
    await headerEl.screenshot({ path: path.join(ARTIFACT_DIR, 'margin_fix_header_zoom.png') });
  }
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'margin_fix_desktop_1440.png') });

  console.log("\n==========================================");
  console.log("TEST 2: FOCUS MODE MARGIN CLEARANCE");
  console.log("==========================================");
  const focusBtn = await page.$('#toolbar-focus-btn');
  if (focusBtn) {
    await focusBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const focusMeasurements = await page.evaluate(() => {
      const sheet = document.querySelector('.notebook-sheet');
      const h1 = document.querySelector('header h1');
      if (!sheet || !h1) return { error: 'missing' };
      const sheetRect = sheet.getBoundingClientRect();
      const h1Rect = h1.getBoundingClientRect();
      const leftOffset = Math.round(h1Rect.left - sheetRect.left);
      const sheetPadding = window.getComputedStyle(sheet).paddingLeft;
      return { sheetPadding, leftOffset, clearance: leftOffset - 70 };
    });
    console.log(`Focus Mode sheet padding-left: ${focusMeasurements.sheetPadding}`);
    console.log(`Focus Mode H1 clearance from red line: ${focusMeasurements.clearance}px`);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'margin_fix_focus_mode.png') });
    await focusBtn.click(); // Exit focus
    await new Promise(r => setTimeout(r, 400));
  }

  console.log("\n==========================================");
  console.log("TEST 3: MOBILE 390px MARGIN CLEARANCE");
  console.log("==========================================");
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 400));

  const mobileMeasurements = await page.evaluate(() => {
    const sheet = document.querySelector('.notebook-sheet');
    const h1 = document.querySelector('header h1');
    const desc = document.querySelector('header p');
    if (!sheet || !h1) return { error: 'missing' };
    const sheetRect = sheet.getBoundingClientRect();
    const h1Rect = h1.getBoundingClientRect();
    const descRect = desc ? desc.getBoundingClientRect() : null;

    const leftOffsetH1 = Math.round(h1Rect.left - sheetRect.left);
    const leftOffsetDesc = descRect ? Math.round(descRect.left - sheetRect.left) : 0;
    const redLinePos = 26; // 24px-26px on mobile
    const clearance = leftOffsetH1 - redLinePos;
    const sheetPadding = window.getComputedStyle(sheet).paddingLeft;
    const hasHorizontalScroll = document.documentElement.scrollWidth > document.documentElement.clientWidth;

    return {
      sheetPadding,
      leftOffsetH1,
      leftOffsetDesc,
      clearance,
      hasHorizontalScroll,
      passed: clearance >= 20 && !hasHorizontalScroll
    };
  });

  console.log(`Mobile Computed Sheet padding-left: ${mobileMeasurements.sheetPadding}`);
  console.log(`Mobile H1 leftOffset = ${mobileMeasurements.leftOffsetH1}px | clearance from red line = ${mobileMeasurements.clearance}px`);
  console.log(`Mobile Horizontal Scroll: ${mobileMeasurements.hasHorizontalScroll ? 'OVERFLOW (FAIL)' : 'CLEAN (PASS)'}`);
  console.log(`MOBILE 390px STATUS: ${mobileMeasurements.passed ? '100% PASSED' : 'FAILED'}`);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'margin_fix_mobile_390.png') });

  await browser.close();
  server.close();
  console.log("\nMARGIN CLEARANCE VERIFICATION COMPLETE!");
}

runMarginAudit().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});

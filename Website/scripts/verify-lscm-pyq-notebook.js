const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST_DIR = path.resolve(__dirname, '../dist');
const ARTIFACT_DIR = 'C:\\\\Users\\\\MSI\\\\.gemini\\\\antigravity-cli\\\\brain\\\\8dec91af-c664-4183-99e8-29f4cba83512';

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
  if (!fs.existsSync(filePath)) { res.writeHead(404); res.end(); return; }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

async function verify() {
  const PORT = 3995;
  await new Promise(r => server.listen(PORT, r));
  console.log(`Local test server listening on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    executablePath: 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const targetUrl = `http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/lscm-top-pyq-exam-answer-bank/`;
  console.log(`Navigating to ${targetUrl}...`);
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });

  // 1. Math Render Audit
  const mathAudit = await page.evaluate(() => {
    const bodyText = document.body.innerText;
    const rawDollarMatches = bodyText.match(/\$\$[^\$]+\$\$/g) || [];
    const rawFracMatches = bodyText.match(/\\frac\{/g) || [];
    const rawSqrtMatches = bodyText.match(/\\sqrt\{/g) || [];
    const rawBoxedMatches = bodyText.match(/\\boxed\{/g) || [];
    const rawTexMatches = bodyText.match(/```\{=tex\}/g) || [];
    const katexNodes = document.querySelectorAll('.katex');
    return {
      rawDollars: rawDollarMatches.length,
      rawFracs: rawFracMatches.length,
      rawSqrts: rawSqrtMatches.length,
      rawBoxed: rawBoxedMatches.length,
      rawTex: rawTexMatches.length,
      katexElements: katexNodes.length
    };
  });
  console.log('Math Render Audit:', mathAudit);

  // 2. Margin Clearance Audit (44px requirement)
  const marginAudit = await page.evaluate(() => {
    const sheetContent = document.querySelector('.notebook-sheet .sheet-content');
    if (!sheetContent) return { error: 'No .sheet-content found' };
    const style = window.getComputedStyle(sheetContent);
    return {
      paddingLeft: style.paddingLeft,
      marginLeft: style.marginLeft,
      boxSizing: style.boxSizing
    };
  });
  console.log('Margin Clearance Audit:', marginAudit);

  // 3. Structural Content Elements Audit
  const structureAudit = await page.evaluate(() => {
    const h1 = document.querySelector('h1')?.textContent?.trim();
    const h2s = Array.from(document.querySelectorAll('h2')).map(el => el.textContent.trim());
    const pyqCards = document.querySelectorAll('.pyq-card, [data-pyq-number], .border-l-4');
    const workedExamples = document.querySelectorAll('.worked-example, [data-worked-example]');
    return {
      h1,
      h2Count: h2s.length,
      sampleH2s: h2s.slice(0, 8),
      pyqCardsCount: pyqCards.length,
      workedExamplesCount: workedExamples.length
    };
  });
  console.log('Structure Audit:', structureAudit);

  // 4. Capture Desktop 1440x900 Screenshot
  const desktopPath = path.join(ARTIFACT_DIR, 'lscm_pyq_notebook_desktop_1440.png');
  await page.screenshot({ path: desktopPath });
  console.log('Captured:', desktopPath);

  // 5. Header Zoom
  const sheet = await page.$('.notebook-sheet');
  if (sheet) {
    const clip = await sheet.boundingBox();
    const headerZoomPath = path.join(ARTIFACT_DIR, 'lscm_pyq_header_zoom.png');
    await page.screenshot({
      path: headerZoomPath,
      clip: { x: clip.x, y: clip.y, width: Math.min(clip.width, 1050), height: 950 }
    });
    console.log('Captured:', headerZoomPath);
  }

  // 6. Numericals Zoom (Scroll to Worked Example)
  await page.evaluate(() => {
    const el = document.querySelector('.worked-example') || document.querySelector('#05--worked-examples-the-5-part-numerical-master-set-12-step-professor-standard');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  const numericalsZoomPath = path.join(ARTIFACT_DIR, 'lscm_pyq_numericals_zoom.png');
  await page.screenshot({ path: numericalsZoomPath });
  console.log('Captured:', numericalsZoomPath);

  // 7. Dark Mode Screenshot
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
  });
  await new Promise(r => setTimeout(r, 400));
  const darkPath = path.join(ARTIFACT_DIR, 'lscm_pyq_notebook_dark_mode.png');
  await page.screenshot({ path: darkPath });
  console.log('Captured:', darkPath);

  // Reset theme
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
  });

  // 8. Mobile 390x844 Viewport
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });
  const mobilePath = path.join(ARTIFACT_DIR, 'lscm_pyq_notebook_mobile_390.png');
  await page.screenshot({ path: mobilePath });
  console.log('Captured:', mobilePath);

  // 9. Also verify standalone Template 2.0 HTML notebook
  const htmlUrl = `http://localhost:${PORT}/operations/lscm-archive/LSCM_Top_PYQ_Exam_Answer_Bank_2.0.html`;
  console.log(`Navigating to Standalone HTML ${htmlUrl}...`);
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(htmlUrl, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  const standaloneAudit = await page.evaluate(() => {
    const title = document.title;
    const sections = document.querySelectorAll('.nb-section').length;
    const cards = document.querySelectorAll('.nb-card').length;
    const fboxes = document.querySelectorAll('.nb-fbox').length;
    const katexNodes = document.querySelectorAll('.katex').length;
    return { title, sections, cards, fboxes, katexNodes };
  });
  console.log('Standalone HTML Template 2.0 Audit:', standaloneAudit);

  const standalonePath = path.join(ARTIFACT_DIR, 'lscm_pyq_standalone_html_1440.png');
  await page.screenshot({ path: standalonePath });
  console.log('Captured:', standalonePath);

  await browser.close();
  server.close();
  console.log('Verification finished successfully!');
}

verify().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});

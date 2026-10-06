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
  const PORT = 3991;
  await new Promise(r => server.listen(PORT, r));

  const browser = await puppeteer.launch({
    executablePath: 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const targetUrl = `http://localhost:${PORT}/operations/operations-in-services/notebooks/service-operations-management/`;
  console.log(`Navigating to ${targetUrl}...`);
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });

  // 1. Audit Math Rendering
  const mathAudit = await page.evaluate(() => {
    const bodyText = document.body.innerText;
    const rawDollarMatches = bodyText.match(/\$\$[^\$]+\$\$/g) || [];
    const rawFracMatches = bodyText.match(/\\frac\{/g) || [];
    const rawSqrtMatches = bodyText.match(/\\sqrt\{/g) || [];
    const katexNodes = document.querySelectorAll('.katex');
    return {
      rawDollars: rawDollarMatches.length,
      rawFracs: rawFracMatches.length,
      rawSqrts: rawSqrtMatches.length,
      katexElements: katexNodes.length
    };
  });
  console.log('Math Audit:', mathAudit);

  // 2. Audit Diagrams
  const diagramAudit = await page.evaluate(() => {
    const diagrams = document.querySelectorAll('.process-diagram, .diagram-card');
    const svgs = document.querySelectorAll('.process-diagram svg, .diagram-card svg');
    return {
      diagramCards: diagrams.length,
      svgElements: svgs.length
    };
  });
  console.log('Diagram Audit:', diagramAudit);

  // 3. Margin Clearance Audit
  const marginAudit = await page.evaluate(() => {
    const sheetContent = document.querySelector('.notebook-sheet .sheet-content');
    if (!sheetContent) return { error: 'No sheet-content found' };
    const style = window.getComputedStyle(sheetContent);
    return {
      paddingLeft: style.paddingLeft,
      marginLeft: style.marginLeft,
      boxSizing: style.boxSizing
    };
  });
  console.log('Margin Clearance Audit:', marginAudit);

  // 4. Screenshots: Desktop 1440
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'ois_notebook_desktop_1440.png') });
  console.log('Captured ois_notebook_desktop_1440.png');

  // 5. Header Zoom
  const sheet = await page.$('.notebook-sheet');
  if (sheet) {
    const clip = await sheet.boundingBox();
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, 'ois_notebook_header_zoom.png'),
      clip: { x: clip.x, y: clip.y, width: Math.min(clip.width, 1050), height: 950 }
    });
    console.log('Captured ois_notebook_header_zoom.png');
  }

  // 6. Diagrams Zoom (Scroll to Figure 1.1)
  await page.evaluate(() => {
    const fig = document.querySelector('.process-diagram');
    if (fig) fig.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'ois_notebook_diagrams_zoom.png') });
  console.log('Captured ois_notebook_diagrams_zoom.png');

  // 7. Case Study Zoom (Scroll to WorkedExample)
  await page.evaluate(() => {
    const we = document.querySelector('.worked-example');
    if (we) we.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'ois_notebook_case_drill_zoom.png') });
  console.log('Captured ois_notebook_case_drill_zoom.png');

  // 8. Dark Mode
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'ois_notebook_dark_mode.png') });
  console.log('Captured ois_notebook_dark_mode.png');

  // Reset theme
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
  });

  // 9. Focus Mode
  const focusBtn = await page.$('#focus-mode-btn');
  if (focusBtn) {
    await focusBtn.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'ois_notebook_focus_mode.png') });
    console.log('Captured ois_notebook_focus_mode.png');
    await focusBtn.click(); // toggle back
  }

  // 10. Mobile 390
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'ois_notebook_mobile_390.png') });
  console.log('Captured ois_notebook_mobile_390.png');

  await browser.close();
  server.close();
  console.log('Verification finished successfully.');
}

verify().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});

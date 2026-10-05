const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST_DIR = path.resolve(__dirname, '../dist');
const SCREENSHOTS_DIR = path.resolve(__dirname, '../screenshots/audit');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

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

async function captureAll() {
  const PORT = 3499;
  await new Promise(r => server.listen(PORT, r));
  console.log(`Server listening on ${PORT}`);

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  const NOTEBOOK_URL = `http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`;
  const PRINT_URL = `http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/print/`;
  const HOME_URL = `http://localhost:${PORT}/`;

  // 1. Desktop 1440px Baseline
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(NOTEBOOK_URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'baseline_desktop_1440_inventory.png') });
  console.log('Saved baseline_desktop_1440_inventory.png');

  // 2. Desktop 1920px
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(NOTEBOOK_URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'baseline_desktop_1920_inventory.png') });
  console.log('Saved baseline_desktop_1920_inventory.png');

  // 3. Tablet 768px
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto(NOTEBOOK_URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'baseline_tablet_768_inventory.png') });
  console.log('Saved baseline_tablet_768_inventory.png');

  // 4. Mobile 390px
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto(NOTEBOOK_URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'baseline_mobile_390_inventory.png') });
  console.log('Saved baseline_mobile_390_inventory.png');

  // 5. Section: Formula Card
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(NOTEBOOK_URL, { waitUntil: 'networkidle0' });
  const formulaCard = await page.$('.formula-card');
  if (formulaCard) {
    await formulaCard.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -80));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section_formula_card.png') });
    console.log('Saved section_formula_card.png');
  }

  // 6. Section: Worked Example
  const workedExample = await page.$('.worked-example');
  if (workedExample) {
    await workedExample.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -80));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section_worked_example.png') });
    console.log('Saved section_worked_example.png');
  }

  // 7. Section: Cases & Applications
  const caseComparison = await page.$('.comparison-card');
  if (caseComparison) {
    await caseComparison.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -80));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section_cases_application.png') });
    console.log('Saved section_cases_application.png');
  }

  // 8. Section: PYQ Card
  const pyqCard = await page.$('.pyq-card');
  if (pyqCard) {
    await pyqCard.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -80));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section_pyq.png') });
    console.log('Saved section_pyq.png');
  }

  // 9. Dark Mode
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  });
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'dark_mode_desktop.png') });
  console.log('Saved dark_mode_desktop.png');

  // 10. Print View
  await page.goto(PRINT_URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'print_view.png') });
  console.log('Saved print_view.png');

  // 11. Homepage
  await page.goto(HOME_URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'homepage_desktop_1440.png') });
  console.log('Saved homepage_desktop_1440.png');

  await browser.close();
  server.close();
  console.log('All screenshots captured successfully.');
}

captureAll().catch(console.error);

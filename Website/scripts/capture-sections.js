const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST_DIR = path.resolve(__dirname, '../dist');
const SCREENSHOTS_DIR = path.resolve(__dirname, '../screenshots/audit');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
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
    res.end('Not Found');
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

async function captureSections() {
  const PORT = 3457;
  await new Promise(resolve => server.listen(PORT, resolve));
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`, { waitUntil: 'networkidle0' });

  // 1. Scrolled to Formula Card
  const formulaCard = await page.$('.formula-card');
  if (formulaCard) {
    await formulaCard.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -100)); // offset for sticky header
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section_formula_card.png') });
  }

  // 2. Scrolled to Worked Example
  const workedExample = await page.$('.worked-example');
  if (workedExample) {
    await workedExample.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -100));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section_worked_example.png') });
  }

  // 3. Scrolled to PYQ
  const pyq = await page.$('.pyq-section');
  if (pyq) {
    await pyq.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -100));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section_pyq.png') });
  }

  await browser.close();
  server.close();
  console.log('Captured section screenshots.');
}

captureSections().catch(console.error);

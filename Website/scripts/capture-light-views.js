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

async function captureLight() {
  const PORT = 3511;
  await new Promise(r => server.listen(PORT, r));

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`, { waitUntil: 'networkidle0' });

  // Force light mode
  await page.evaluate(() => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
  });

  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'light_mode_desktop_1440.png') });
  console.log('Saved light_mode_desktop_1440.png');

  // Formula card
  const formulaCard = await page.$('.formula-card');
  if (formulaCard) {
    await formulaCard.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -80));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'light_section_formula_card.png') });
    console.log('Saved light_section_formula_card.png');
  }

  // Worked example
  const workedExample = await page.$('.worked-example');
  if (workedExample) {
    await workedExample.scrollIntoView();
    await page.evaluate(() => window.scrollBy(0, -80));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'light_section_worked_example.png') });
    console.log('Saved light_section_worked_example.png');
  }

  // Homepage in light mode
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
  });
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'light_homepage_desktop_1440.png') });
  console.log('Saved light_homepage_desktop_1440.png');

  await browser.close();
  server.close();
}

captureLight().catch(console.error);

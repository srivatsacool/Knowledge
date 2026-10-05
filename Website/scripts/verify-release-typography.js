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
  const PORT = 3988;
  await new Promise(r => server.listen(PORT, r));

  const browser = await puppeteer.launch({
    executablePath: 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`, { waitUntil: 'networkidle0' });

  // 1. Capture 1440px desktop
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'release_desktop_1440.png') });
  console.log('Captured release_desktop_1440.png');

  // 2. Capture Header & Section 01 Zoom
  const targetArea = await page.$('.notebook-sheet');
  if (targetArea) {
    const clip = await targetArea.boundingBox();
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, 'release_header_section01_zoom.png'),
      clip: { x: clip.x, y: clip.y, width: Math.min(clip.width, 1000), height: 1100 }
    });
    console.log('Captured release_header_section01_zoom.png');
  }

  // 3. Scroll to formulas and diagrams
  await page.evaluate(() => window.scrollBy(0, 1400));
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'release_formulas_and_diagrams.png') });
  console.log('Captured release_formulas_and_diagrams.png');

  // 4. Scroll to Worked Example
  await page.evaluate(() => {
    const el = document.querySelector('h1:nth-of-type(5), [id*="worked-example"], .worked-example');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'release_worked_example.png') });
  console.log('Captured release_worked_example.png');

  // 5. Dark Mode
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'release_dark_mode.png') });
  console.log('Captured release_dark_mode.png');

  // 6. Focus Mode
  await page.evaluate(() => {
    document.documentElement.removeAttribute('data-theme');
    document.body.classList.add('focus-mode');
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'release_focus_mode.png') });
  console.log('Captured release_focus_mode.png');

  // 7. Mobile (390px)
  await page.evaluate(() => {
    document.body.classList.remove('focus-mode');
  });
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'release_mobile_390.png') });
  console.log('Captured release_mobile_390.png');

  await browser.close();
  server.close();
}

verify().catch(console.error);

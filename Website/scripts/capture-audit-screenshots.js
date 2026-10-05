const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST_DIR = path.resolve(__dirname, '../dist');
const SCREENSHOTS_DIR = path.resolve(__dirname, '../screenshots/audit');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Simple static server for dist
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  }
  let filePath = path.join(DIST_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

async function runAudit() {
  const PORT = 3456;
  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`Static server running at http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  const auditTargets = [
    {
      name: 'baseline_desktop_1440_inventory',
      url: `http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`,
      viewport: { width: 1440, height: 900 }
    },
    {
      name: 'baseline_desktop_1920_inventory',
      url: `http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`,
      viewport: { width: 1920, height: 1080 }
    },
    {
      name: 'baseline_tablet_768_inventory',
      url: `http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`,
      viewport: { width: 768, height: 1024 }
    },
    {
      name: 'baseline_mobile_390_inventory',
      url: `http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`,
      viewport: { width: 390, height: 844, isMobile: true }
    },
    {
      name: 'baseline_desktop_1440_homepage',
      url: `http://localhost:${PORT}/`,
      viewport: { width: 1440, height: 900 }
    }
  ];

  for (const target of auditTargets) {
    console.log(`Auditing ${target.name} at ${target.url}...`);
    await page.setViewport(target.viewport);
    await page.goto(target.url, { waitUntil: 'networkidle0' });
    const screenshotPath = path.join(SCREENSHOTS_DIR, `${target.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`Captured screenshot: ${screenshotPath}`);
  }

  // Also inspect DOM for math errors or raw LaTeX
  await page.goto(`http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`, { waitUntil: 'networkidle0' });
  const mathAudit = await page.evaluate(() => {
    const text = document.body.innerText;
    const hasRawDoubleDollar = text.includes('$$');
    const hasRawFrac = text.includes('\\frac');
    const hasRawSqrt = text.includes('\\sqrt');
    const katexNodes = document.querySelectorAll('.katex').length;
    const formulaCards = document.querySelectorAll('.formula-card').length;
    const workedExamples = document.querySelectorAll('.worked-example').length;
    const toolbar = !!document.querySelector('.notebook-toolbar');
    const sidebar = !!document.querySelector('#notebook-sidebar');
    const activeHeadings = Array.from(document.querySelectorAll('.index-section')).map(s => s.querySelector('div')?.innerText?.trim());
    return {
      hasRawDoubleDollar,
      hasRawFrac,
      hasRawSqrt,
      katexNodes,
      formulaCards,
      workedExamples,
      toolbar,
      sidebar,
      activeHeadings
    };
  });

  console.log('\n--- LIVE DOM AUDIT RESULTS ---');
  console.log(JSON.stringify(mathAudit, null, 2));

  await browser.close();
  server.close();
  console.log('Audit completed.');
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  server.close();
  process.exit(1);
});

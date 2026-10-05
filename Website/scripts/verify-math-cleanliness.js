const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const DIST_DIR = path.resolve(__dirname, '../dist');
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

async function verify() {
  const PORT = 3488;
  await new Promise(r => server.listen(PORT, r));

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`http://localhost:${PORT}/operations/logistics-supply-chain/notebooks/inventory-optimization/`, { waitUntil: 'networkidle0' });

  const audit = await page.evaluate(() => {
    const rawMatches = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent) continue;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) continue;
      if (parent.closest('.katex-mathml')) continue; // MathML annotation contains raw TeX for accessibility

      const txt = node.textContent;
      if (txt.includes('$$') || txt.includes('\\frac') || txt.includes('\\sqrt')) {
        rawMatches.push({
          parentTag: parent.tagName,
          parentClass: parent.className,
          text: txt.trim()
        });
      }
    }

    const katexCount = document.querySelectorAll('.katex').length;
    const formulaCards = document.querySelectorAll('.formula-card').length;
    const workedExamples = document.querySelectorAll('.worked-example').length;
    const pyqCards = document.querySelectorAll('.pyq-card').length;
    const appendix = document.querySelectorAll('.appendix-register').length;
    const sidebar = document.querySelector('#notebook-sidebar');
    const sections = Array.from(document.querySelectorAll('.index-section')).map(el => {
      const title = el.querySelector('div.font-serif')?.innerText?.trim() || el.querySelector('.font-bold')?.innerText?.trim();
      const count = el.querySelector('span.rounded-full')?.innerText?.trim();
      return { title, count };
    });

    return {
      rawMatchesCount: rawMatches.length,
      rawMatches,
      katexCount,
      formulaCards,
      workedExamples,
      pyqCards,
      appendix,
      hasSidebar: !!sidebar,
      sections
    };
  });

  console.log('--- VERIFICATION REPORT ---');
  console.log('Raw LaTeX Matches in Visible DOM:', audit.rawMatchesCount);
  if (audit.rawMatchesCount > 0) {
    console.log('Matches:', JSON.stringify(audit.rawMatches, null, 2));
  } else {
    console.log('SUCCESS: Zero raw LaTeX ($$, \\frac, \\sqrt) in visible DOM!');
  }
  console.log('Pre-rendered KaTeX Elements:', audit.katexCount);
  console.log('FormulaCards count:', audit.formulaCards);
  console.log('WorkedExamples count:', audit.workedExamples);
  console.log('PYQCards count:', audit.pyqCards);
  console.log('Appendix count:', audit.appendix);
  console.log('Sidebar present:', audit.hasSidebar);
  console.log('Canonical 9 Sections in Sidebar:');
  audit.sections.forEach((s, i) => console.log(`  ${i+1}. ${s.title} (${s.count} items)`));

  await browser.close();
  server.close();
}

verify().catch(console.error);

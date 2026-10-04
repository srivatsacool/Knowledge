/**
 * Brain Knowledge Hub — Automated Verification & QA Suite
 * Validates output structure, link integrity, metadata validity, and draft protection.
 */
const fs = require('fs');
const path = require('path');
const { build, discoverNotebooks, SUBJECTS } = require('./build');

const WEBSITE_DIR = path.resolve(__dirname, '..');
const ROOT_DIR = path.resolve(__dirname, '../..');
const DIST_DIR = path.join(WEBSITE_DIR, 'dist');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    passedTests++;
    console.log(`  ✔ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✖ FAIL: ${message}`);
  }
}

function runTests() {
  console.log('====================================================');
  console.log('Brain Knowledge Hub — QA Test Suite');
  console.log('====================================================\n');

  // Test 1: Run build and verify exit
  console.log('[Test 1] Build execution and directory verification:');
  try {
    build();
    assert(fs.existsSync(DIST_DIR), 'dist/ directory created');
    assert(fs.existsSync(path.join(DIST_DIR, 'index.html')), 'dist/index.html homepage exists');
    assert(fs.existsSync(path.join(DIST_DIR, 'assets/main.css')), 'dist/assets/main.css exists');
    assert(fs.existsSync(path.join(DIST_DIR, 'assets/search.js')), 'dist/assets/search.js exists');
  } catch (e) {
    assert(false, `Build threw error: ${e.message}`);
  }

  // Test 2: Verify subject catalog routes
  console.log('\n[Test 2] Subject catalog routes integrity:');
  SUBJECTS.forEach(sub => {
    const subIndex = path.join(DIST_DIR, sub.slug, 'index.html');
    assert(fs.existsSync(subIndex), `Route /${sub.slug}/index.html exists for ${sub.name}`);
    
    // Check viewport tag and title in subject pages
    if (fs.existsSync(subIndex)) {
      const content = fs.readFileSync(subIndex, 'utf8');
      assert(content.includes('name="viewport"'), `Route /${sub.slug}/ contains responsive viewport meta`);
      assert(content.includes(`${sub.name} Catalog`), `Route /${sub.slug}/ contains subject title`);
    }
  });

  // Test 3: Notebook discovery and canonical URLs
  console.log('\n[Test 3] Notebook discovery and canonical routing:');
  const notebooks = discoverNotebooks();
  assert(notebooks.length >= 1, `Discovered at least 1 published notebook (found: ${notebooks.length})`);
  
  const erpNotebook = notebooks.find(n => n.slug === 'erp');
  assert(Boolean(erpNotebook), 'ERP Exam Notebook is discovered as an eligible notebook');
  if (erpNotebook) {
    assert(erpNotebook.subject === 'Operations', 'ERP Exam Notebook is categorized under Operations');
    assert(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(erpNotebook.slug), `ERP Notebook slug '${erpNotebook.slug}' is strictly lowercase and URL-safe`);
    assert(Boolean(erpNotebook.source), `ERP Notebook has defined source: '${erpNotebook.source}'`);
    assert(Boolean(erpNotebook.version), `ERP Notebook has defined version: '${erpNotebook.version}'`);
    assert(Boolean(erpNotebook.updatedAt), `ERP Notebook has defined update date: '${erpNotebook.updatedAt}'`);

    const erpOutput = path.join(DIST_DIR, 'operations', 'erp', 'index.html');
    assert(fs.existsSync(erpOutput), 'ERP Notebook published at canonical path /operations/erp/index.html');
    
    // Verify notebook content integrity
    const erpContent = fs.readFileSync(erpOutput, 'utf8');
    assert(erpContent.includes('ERP Business Applications'), 'ERP Notebook contains original title');
    assert(erpContent.includes('hub-portal-bar'), 'ERP Notebook contains portal return navigation bar');
    assert(erpContent.includes('Return to Operations'), 'Portal bar links back to Operations subject catalog');
    assert(erpContent.includes('<script>'), 'Preserved embedded JavaScript and interactivity');
    assert(erpContent.includes('data-theme='), 'Preserved theme switching attributes');
  }

  // Test 4: Search Index Integrity
  console.log('\n[Test 4] Search Index validation:');
  const searchIndexPath = path.join(DIST_DIR, 'data', 'search-index.json');
  assert(fs.existsSync(searchIndexPath), 'search-index.json exists');
  try {
    const searchData = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
    assert(Array.isArray(searchData), 'search-index.json is valid JSON array');
    assert(searchData.length > 0, `search-index contains items (count: ${searchData.length})`);
    
    const erpEntry = searchData.find(item => item.slug === 'erp');
    assert(Boolean(erpEntry), 'search-index contains entry for ERP notebook');
    if (erpEntry) {
      assert(Boolean(erpEntry.headings && erpEntry.headings.length), 'search-index contains extracted headings');
      assert(Boolean(erpEntry.content && erpEntry.content.length), 'search-index contains plain-text snippet');
    }
  } catch (e) {
    assert(false, `search-index.json parsing failed: ${e.message}`);
  }

  // Test 5: Draft exclusion testing
  console.log('\n[Test 5] Draft and private content exclusion:');
  const draftTestPath = path.join(ROOT_DIR, 'Operations', '_draft_secret_note.html');
  try {
    fs.writeFileSync(draftTestPath, '<!DOCTYPE html><html><head><title>Secret Draft</title></head><body>Draft</body></html>');
    const postDraftNotebooks = discoverNotebooks();
    const leakedDraft = postDraftNotebooks.find(n => n.filename.includes('secret_note'));
    assert(!leakedDraft, 'Draft notebook prefixed with _draft is NOT published');
  } finally {
    if (fs.existsSync(draftTestPath)) fs.unlinkSync(draftTestPath);
  }

  // Test 6: Internal link resolution across generated site
  console.log('\n[Test 6] Internal link resolution check:');
  const homeContent = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');
  const linkMatches = homeContent.matchAll(/href=["'](\/[^"']+)["']/g);
  let allLinksValid = true;
  for (const m of linkMatches) {
    const rawUrl = m[1];
    // Resolve URL to filesystem path
    let relPath = rawUrl.replace(/^\//, '');
    let targetFile = path.join(DIST_DIR, relPath);
    if (fs.existsSync(targetFile) && fs.statSync(targetFile).isDirectory()) {
      targetFile = path.join(targetFile, 'index.html');
    }
    if (!fs.existsSync(targetFile)) {
      allLinksValid = false;
      assert(false, `Link ${rawUrl} does not resolve to an existing file in dist/`);
    }
  }
  if (allLinksValid) {
    assert(true, 'All internal links on homepage resolve to valid files in dist/');
  }

  console.log('\n====================================================');
  console.log(`Test Results: ${passedTests} passed, ${failedTests} failed.`);
  console.log('====================================================');

  if (failedTests > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  runTests();
}

module.exports = { runTests };

/**
 * Brain Knowledge Hub — Template 2.0 & AnyDoc Integration Test Suite
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { generateNotebook } = require('./pipeline/generator');
const { resolveDestination } = require('./pipeline/resolver');
const { validateNotebook } = require('./pipeline/validator');
const { ingestDocument, getFileHash, getCachedExtraction, CACHE_DIR } = require('./pipeline/anydoc-adapter');

const ROOT_DIR = path.resolve(__dirname, '../..');
const MASTER_BENCHMARK_PATH = path.join(ROOT_DIR, 'ERP_Exam_Notebook.html');
const EXPECTED_BENCHMARK_BYTES = 226460;

console.log('====================================================');
console.log('Brain Knowledge Hub — Template 2.0 & AnyDoc Test Suite');
console.log('====================================================\n');

let passed = 0;
let failed = 0;

function check(desc, fn) {
  try {
    fn();
    console.log(`  ✔ PASS: ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ✖ FAIL: ${desc} — ${err.message}`);
    failed++;
  }
}

// -----------------------------------------------------------------------------
// Test 1: AnyDoc Document Ingestion & Caching
// -----------------------------------------------------------------------------
console.log('[Test 1] AnyDoc Document Ingestion & Deterministic Caching:');
const testDocPath = path.join(ROOT_DIR, 'RULE.md');

let firstIngest = null;
check('Ingests markdown document into _source_cache', () => {
  firstIngest = ingestDocument(testDocPath, { force: true });
  assert.ok(firstIngest);
  assert.strictEqual(firstIngest.cached, false);
  assert.ok(fs.existsSync(firstIngest.mdPath));
  assert.ok(fs.existsSync(firstIngest.jsonPath));
});

check('Second ingestion hits deterministic cache instantly', () => {
  const secondIngest = ingestDocument(testDocPath);
  assert.strictEqual(secondIngest.cached, true);
  assert.strictEqual(secondIngest.hash, firstIngest.hash);
});

// -----------------------------------------------------------------------------
// Test 2: Template 2.0 Paper Edition Generation
// -----------------------------------------------------------------------------
console.log('\n[Test 2] Template 2.0 Generation:');
const testTask = {
  task_id: 'task_qa_template_v2_test',
  topic: 'Total Quality Management',
  subject: 'Operations',
  category: 'Quality Systems',
  subtitle: 'Deming Principles, Six Sigma & Statistical Process Control',
  template_version: '2.0.0',
  publication_status: 'draft',
  author: 'QA Automated Test Suite',
  source_urls: ['https://example.org/tqm-principles']
};

const resolved = resolveDestination(testTask);

let genResult = null;
check('Generates Template 2.0 notebook and companion metadata', () => {
  genResult = generateNotebook(testTask, resolved);
  assert.ok(fs.existsSync(genResult.htmlPath));
  assert.ok(fs.existsSync(genResult.metaPath));
  assert.strictEqual(genResult.metadata.templateVersion, '2.0.0');
  assert.strictEqual(genResult.metadata.status, 'draft');
});

const htmlContent = fs.readFileSync(genResult.htmlPath, 'utf8');

check('Contains Paper Edition canvas classes and elements', () => {
  assert.ok(htmlContent.includes('class="nb-sheet"'), 'Missing nb-sheet class');
  assert.ok(htmlContent.includes('class="nb-topbar"'), 'Missing nb-topbar class');
  assert.ok(htmlContent.includes('id="sidebar"'), 'Missing sidebar id');
  assert.ok(htmlContent.includes('class="nb-tabflag"'), 'Missing tabflag');
  assert.ok(htmlContent.includes('class="nb-stamp'), 'Missing rubber stamp');
  assert.ok(htmlContent.includes('class="nb-hand-underline"'), 'Missing hand underline');
});

// -----------------------------------------------------------------------------
// Test 3: QA Validation Suite on Template 2.0
// -----------------------------------------------------------------------------
console.log('\n[Test 3] QA Validation on Template 2.0:');
const valResult = validateNotebook(genResult.htmlPath, { silent: true });

check('Template 2.0 passes 100% validator assertions', () => {
  assert.strictEqual(valResult.valid, true, `Validation failed: ${valResult.errors.join('; ')}`);
  assert.strictEqual(valResult.checksFailed, 0);
  assert.ok(valResult.checksPassed >= 6);
});

// -----------------------------------------------------------------------------
// Test 4: Master Notebook Protection
// -----------------------------------------------------------------------------
console.log('\n[Test 4] Master Notebook Protection:');
check('Master ERP Exam Notebook exists untouched', () => {
  assert.ok(fs.existsSync(MASTER_BENCHMARK_PATH));
});

check(`Master ERP length is exactly ${EXPECTED_BENCHMARK_BYTES} bytes`, () => {
  const currentLength = fs.statSync(MASTER_BENCHMARK_PATH).size;
  assert.strictEqual(currentLength, EXPECTED_BENCHMARK_BYTES, `Expected ${EXPECTED_BENCHMARK_BYTES}, got ${currentLength}`);
});

// -----------------------------------------------------------------------------
// Cleanup temporary test notebook
// -----------------------------------------------------------------------------
try {
  if (fs.existsSync(genResult.htmlPath)) fs.unlinkSync(genResult.htmlPath);
  if (fs.existsSync(genResult.metaPath)) fs.unlinkSync(genResult.metaPath);
} catch {
  // Ignore cleanup errors
}

console.log('\n====================================================');
console.log(`Template 2.0 Test Results: ${passed} passed, ${failed} failed.`);
console.log('====================================================');

process.exit(failed > 0 ? 1 : 0);

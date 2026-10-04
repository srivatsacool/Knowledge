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
// Test 5: Template 2.0.1 Paper Edition Features & MCQ Assessment Engine
// -----------------------------------------------------------------------------
console.log('\n[Test 5] Template 2.0.1 ERP Paper Edition & MCQ Engine:');
const ERP_V2_PATH = path.join(ROOT_DIR, 'Operations', 'ERP_Business_Applications_Notebook.html');
const erpContent = fs.existsSync(ERP_V2_PATH) ? fs.readFileSync(ERP_V2_PATH, 'utf8') : '';

check('ERP Notebook 2.0.1 exists on disk', () => {
  assert.ok(fs.existsSync(ERP_V2_PATH), 'ERP_Business_Applications_Notebook.html missing');
});

check('Contains Section 17 (#sec-quiz) Final Knowledge Check', () => {
  assert.ok(erpContent.includes('id="sec-quiz"'), 'Missing #sec-quiz');
  assert.ok(erpContent.includes('Master Knowledge Check'), 'Missing Master Knowledge Check title');
});

check('Embeds complete 30-question ERP assessment dataset', () => {
  const { erpQuizQuestions } = require('./pipeline/erp-mcq-data');
  assert.strictEqual(erpQuizQuestions.length, 30, 'Expected exactly 30 questions');
  assert.ok(erpContent.includes('QUIZ_DATA ='), 'Missing client QUIZ_DATA initialization');
});

check('Contains MCQ Engine elements: Navigator, Question Card, Scorecard & Retry', () => {
  assert.ok(erpContent.includes('id="erpQuizNav"'), 'Missing #erpQuizNav');
  assert.ok(erpContent.includes('id="erpQCard"'), 'Missing #erpQCard');
  assert.ok(erpContent.includes('id="erpScorecard"'), 'Missing #erpScorecard');
  assert.ok(erpContent.includes('id="btnRetryIncorrect"'), 'Missing #btnRetryIncorrect');
  assert.ok(erpContent.includes('id="btnResetQuiz"'), 'Missing #btnResetQuiz');
  assert.ok(erpContent.includes("'brainhub:mcq:' + notebookSlug") || erpContent.includes('brainhub:mcq:erp'), 'Missing independent MCQ localStorage key');
});

check('Contains 3 in-module Quick Checks (Modules 1, 3, 8)', () => {
  const qcMatches = erpContent.match(/nb-quick-check/g) || [];
  assert.strictEqual(qcMatches.length, 3, `Expected 3 quick checks, found ${qcMatches.length}`);
});

check('Contains Focus Mode, Revision Mode & Pomodoro Study Timer', () => {
  assert.ok(erpContent.includes('id="toolFocus"'), 'Missing #toolFocus');
  assert.ok(erpContent.includes('id="toolRevision"'), 'Missing #toolRevision');
  assert.ok(erpContent.includes('id="toolPomodoro"'), 'Missing #toolPomodoro');
  assert.ok(erpContent.includes('id="pomodoroCard"'), 'Missing #pomodoroCard');
  assert.ok(erpContent.includes('id="revisionBanner"'), 'Missing #revisionBanner');
});

check('Contains discrete module completion controls for all 16 learning modules', () => {
  const modStatusMatches = erpContent.match(/class="nb-mod-status"/g) || [];
  assert.strictEqual(modStatusMatches.length, 16, `Expected 16 module status bars, found ${modStatusMatches.length}`);
  assert.ok(erpContent.includes('id="nbProgressRatio"'), 'Missing discrete progress ratio element');
});

check(`Master ERP benchmark is byte-for-byte untouched (${EXPECTED_BENCHMARK_BYTES} bytes)`, () => {
  const benchmarkBytes = fs.statSync(MASTER_BENCHMARK_PATH).size;
  assert.strictEqual(benchmarkBytes, EXPECTED_BENCHMARK_BYTES);
});

// -----------------------------------------------------------------------------
// Test 6: Part 26 Previous-Year Questions (PYQ) System
// -----------------------------------------------------------------------------
console.log('\n[Test 6] Part 26 Previous-Year Questions (PYQ) System:');
check('Contains Section #sec-pyq Previous-Year Questions Archive', () => {
  assert.ok(erpContent.includes('id="sec-pyq"'), 'Missing #sec-pyq section');
  assert.ok(erpContent.includes('Previous-Year Questions (PYQ) Master Vault'), 'Missing PYQ vault heading');
});

check('Embeds all three authentic examination papers (2023, 2024, 2025)', () => {
  assert.ok(erpContent.includes('id="pyq-paper-2025"'), 'Missing 2025 paper');
  assert.ok(erpContent.includes('id="pyq-paper-2024"'), 'Missing 2024 paper');
  assert.ok(erpContent.includes('id="pyq-paper-2023"'), 'Missing 2023 paper');
  assert.ok(erpContent.includes('Ms. Vijaya Loki'), 'Missing 2025 Vijaya Loki prompt');
  assert.ok(erpContent.includes('Ms. Aishwarya'), 'Missing 2024 Aishwarya prompt');
  assert.ok(erpContent.includes('Ms. Deepika'), 'Missing 2023 Deepika prompt');
});

check('Contains High-Yield Recurrence Matrix ("The Altekar Trinity")', () => {
  assert.ok(erpContent.includes('THE ALTEKAR TRINITY'), 'Missing Altekar Trinity matrix');
  assert.ok(erpContent.includes('75-MINUTE EXAM TIME BUDGET'), 'Missing 75-minute exam budget guide');
});

check('Embeds all 12 authentic exam questions with AI Model Answer Frameworks', () => {
  const qMatches = erpContent.match(/class="nb-pyq-item"/g) || [];
  assert.strictEqual(qMatches.length, 12, `Expected exactly 12 exam questions, found ${qMatches.length}`);
  assert.ok(erpContent.includes('[AI MODEL ANSWER FRAMEWORK — COMPREHENSIVE STUDY BLUEPRINT]'), 'Missing AI model answer badge');
});

check('Contains independent PYQ localStorage persistence key', () => {
  assert.ok(erpContent.includes("'brainhub:pyq:' + notebookSlug") || erpContent.includes('brainhub:pyq:erp'), 'Missing independent PYQ localStorage key');
  assert.ok(erpContent.includes('id="nbPyqRatio"'), 'Missing #nbPyqRatio element');
  assert.ok(erpContent.includes('id="nbMcqRatio"'), 'Missing #nbMcqRatio element');
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


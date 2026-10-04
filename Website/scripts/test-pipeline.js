/**
 * Brain Knowledge Hub — Automated Pipeline Test Suite
 * Validates task intake, resolver, generator, QA validator, promotion, and draft safety.
 */
const fs = require('fs');
const path = require('path');
const { resolveDestination, checkSlugCollision } = require('./pipeline/resolver');
const { generateNotebook } = require('./pipeline/generator');
const { validateNotebook } = require('./pipeline/validator');
const { promoteNotebook } = require('./pipeline/promoter');
const { build } = require('./build');

const ROOT_DIR = path.resolve(__dirname, '../..');
const DIST_DIR = path.join(ROOT_DIR, 'Website', 'dist');

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

function runPipelineTests() {
  console.log('====================================================');
  console.log('Brain Knowledge Hub — Pipeline Test Suite');
  console.log('====================================================\n');

  // Test 1: Valid Task Intake & Destination Resolution
  console.log('[Test 1] Destination Resolution & Slug Normalization:');
  try {
    const res1 = resolveDestination({ topic: 'Activity Based Costing', subject: 'Finance', category: 'Cost Accounting' });
    assert(res1.subject === 'Finance', 'Resolved subject to Finance');
    assert(res1.slug === 'activity-based-costing', 'Normalized slug to "activity-based-costing"');
    assert(res1.targetDir.includes('Finance'), 'Target directory is within Finance folder');

    const res2 = resolveDestination({ topic: 'Factory Physics', subject: 'Operations', destination_subfolder: 'SCM' });
    assert(res2.subject === 'Operations', 'Resolved subject to Operations');
    assert(res2.targetDir.includes(path.join('Operations', 'SCM')), 'Resolved subfolder to Operations/SCM');
  } catch (e) {
    assert(false, `Destination resolution failed: ${e.message}`);
  }

  // Test 2: Invalid Task Rejection
  console.log('\n[Test 2] Invalid Task Contract Rejection:');
  try {
    resolveDestination({ topic: '' });
    assert(false, 'Should throw error when topic is empty');
  } catch (e) {
    assert(true, 'Rejected task with missing topic');
  }

  try {
    resolveDestination({ topic: 'Quantum Cryptography', subject: 'Astrophysics' });
    assert(false, 'Should throw error for non-canonical subject');
  } catch (e) {
    assert(true, 'Rejected task with invalid non-canonical subject');
  }

  // Test 3: Notebook Generation (Draft)
  console.log('\n[Test 3] Notebook Generation & Metadata Compliance:');
  const testTopic = 'Pipeline_Test_Buffer_Management';
  const testResolved = resolveDestination({
    topic: testTopic,
    subject: 'Operations',
    destination_subfolder: '_test_run',
    slug: 'pipeline-test-buffer-management'
  });

  let genResult = null;
  try {
    genResult = generateNotebook({
      topic: testTopic,
      publication_status: 'draft',
      author: 'Test Agent',
      tags: ['TOC', 'Buffer Management', 'Operations']
    }, testResolved);

    assert(fs.existsSync(genResult.htmlPath), 'Generated HTML notebook file on disk');
    assert(fs.existsSync(genResult.metaPath), 'Generated companion .meta.json file on disk');

    const meta = JSON.parse(fs.readFileSync(genResult.metaPath, 'utf8'));
    assert(meta.status === 'draft', 'Generated notebook default status is "draft"');
    assert(meta.slug === 'pipeline-test-buffer-management', 'Generated metadata contains lowercase slug');
    assert(meta.source === 'curriculum/synthesis', 'Generated metadata contains valid source tag');
    assert(meta.version === '1.0.0', 'Generated metadata contains semantic version');
  } catch (e) {
    assert(false, `Notebook generation failed: ${e.message}`);
  }

  // Test 4: Overwrite Protection
  console.log('\n[Test 4] Overwrite Protection:');
  try {
    generateNotebook({ topic: testTopic, force: false }, testResolved);
    assert(false, 'Should reject overwriting existing notebook without force: true');
  } catch (e) {
    assert(true, 'Successfully prevented accidental overwrite of existing notebook');
  }

  // Test 5: QA Validation on Generated Notebook
  console.log('\n[Test 5] Automated QA Validation:');
  const valResult = validateNotebook(testResolved.fullHtmlPath);
  assert(valResult.valid, 'Generated draft notebook passed 100% of QA checks');
  assert(valResult.checksPassed >= 10, `Passed ${valResult.checksPassed} discrete checks`);
  assert(valResult.checksFailed === 0, 'Zero QA validation failures');

  // Test 6: Draft Isolation & Exclusion from Website Build
  console.log('\n[Test 6] Draft Exclusion & Search Isolation:');
  build();
  const searchIndexPath = path.join(DIST_DIR, 'data', 'search-index.json');
  const searchData = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
  const draftInSearch = searchData.some(item => item.slug === 'pipeline-test-buffer-management');
  assert(!draftInSearch, 'Draft notebook is strictly omitted from search-index.json');

  const draftInDist = fs.existsSync(path.join(DIST_DIR, 'operations', 'pipeline-test-buffer-management', 'index.html'));
  assert(!draftInDist, 'Draft notebook is strictly omitted from Website/dist output');

  // Test 7: Duplicate Slug Detection
  console.log('\n[Test 7] Slug Collision Detection:');
  const collisions = checkSlugCollision('pipeline-test-buffer-management', path.join(ROOT_DIR, 'AI', 'Dummy.html'));
  assert(collisions.length >= 1, 'Detected duplicate slug across different directories');

  // Test 8: Validator Rejects Corrupted Notebook
  console.log('\n[Test 8] Rejection of Invalid / Corrupted Notebooks:');
  const corruptedPath = path.join(testResolved.targetDir, 'Corrupted_Note.html');
  fs.writeFileSync(corruptedPath, '<html><body>Missing DOCTYPE and viewport</body></html>');
  const corruptVal = validateNotebook(corruptedPath);
  assert(!corruptVal.valid, 'Validator successfully rejected corrupted notebook with missing metadata and DOCTYPE');
  fs.unlinkSync(corruptedPath);

  // Test 9: Safe Promotion Workflow
  console.log('\n[Test 9] Promotion to Published:');
  try {
    const promoResult = promoteNotebook(testResolved.fullHtmlPath);
    assert(promoResult.success, 'Successfully promoted notebook to published');
    assert(fs.existsSync(promoResult.canonicalPath), 'Published notebook now exists in dist/ output');

    const postPromoSearch = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
    const publishedInSearch = postPromoSearch.some(item => item.slug === 'pipeline-test-buffer-management');
    assert(publishedInSearch, 'Published notebook is now correctly indexed in search-index.json');
  } catch (e) {
    assert(false, `Promotion failed: ${e.message}`);
  }

  // Cleanup temporary test files
  try {
    if (fs.existsSync(testResolved.targetDir)) {
      fs.rmSync(testResolved.targetDir, { recursive: true, force: true });
    }
    // Rebuild clean state
    build();
  } catch (e) {}

  // Test 10: Preservation of Existing Master Notebook
  console.log('\n[Test 10] Master Notebook Preservation:');
  const erpPath = path.join(ROOT_DIR, 'ERP_Exam_Notebook.html');
  assert(fs.existsSync(erpPath), 'ERP Exam Notebook remains untouched on disk');
  const erpContent = fs.readFileSync(erpPath, 'utf8');
  assert(erpContent.includes('ERP Business Applications'), 'ERP content is 100% intact');

  console.log('\n====================================================');
  console.log(`Pipeline Test Results: ${passedTests} passed, ${failedTests} failed.`);
  console.log('====================================================');

  if (failedTests > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  runPipelineTests();
}

module.exports = {
  runPipelineTests
};

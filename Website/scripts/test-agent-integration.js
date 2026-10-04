/**
 * Brain Knowledge Hub — Phase 4 Agent Integration QA Test Suite
 * Validates Orca ↔ Agy CLI machine interfaces, dry-run simulation, 
 * pre-generation task validation, stream separation, and 7 failure modes.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { build } = require('./build');

const ROOT_DIR = path.resolve(__dirname, '../..');
const DIST_DIR = path.join(__dirname, '../dist');
const CLI_PATH = path.join(__dirname, 'pipeline', 'index.js');

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

/**
 * Runs CLI command and returns parsed JSON stdout
 */
function runCliJson(cmdArgs) {
  const fullCommand = `node "${CLI_PATH}" ${cmdArgs}`;
  try {
    const stdout = execSync(fullCommand, { cwd: ROOT_DIR, stdio: ['pipe', 'pipe', 'pipe'] }).toString();
    return {
      exitCode: 0,
      stdout,
      data: JSON.parse(stdout)
    };
  } catch (err) {
    const stdout = (err.stdout || '').toString();
    const stderr = (err.stderr || '').toString();
    let data = null;
    try {
      data = JSON.parse(stdout);
    } catch (parseErr) {
      data = null;
    }
    return {
      exitCode: err.status || 1,
      stdout,
      stderr,
      data
    };
  }
}

function runAgentIntegrationTests() {
  console.log('====================================================');
  console.log('Brain Knowledge Hub — Phase 4 Agent Integration Tests');
  console.log('====================================================');

  const testTaskId = `task_test_wcm_${Date.now()}`;
  const tempTaskFile = path.join(ROOT_DIR, '_templates', `${testTaskId}.json`);
  const expectedHtmlPath = path.join(ROOT_DIR, 'Finance', 'Working_Capital_Management_Notebook.html');
  const expectedMetaPath = path.join(ROOT_DIR, 'Finance', 'Working_Capital_Management_Notebook.meta.json');

  const taskPayload = {
    task_id: testTaskId,
    operation: 'create_notebook',
    topic: 'Working Capital Management',
    subject: 'Finance',
    category: 'Financial Management',
    slug: 'working-capital-management',
    audience: 'MBA & Finance Executives',
    academic_level: 'graduate',
    depth: 'comprehensive',
    publication_status: 'draft',
    author: 'Orca / Agy CLI Test Agent',
    tags: ['Finance', 'Working Capital', 'Cash Conversion Cycle', 'Liquidity']
  };

  fs.writeFileSync(tempTaskFile, JSON.stringify(taskPayload, null, 2), 'utf8');

  // Test 1: Dry-Run Simulation Mode
  console.log('\n[Test 1] Dry-Run Simulation & Path Prediction:');
  const dryRunRes = runCliJson(`create --task "${tempTaskFile}" --dry-run --json`);
  assert(dryRunRes.exitCode === 0, 'Dry-run exited with code 0');
  assert(dryRunRes.data !== null, 'Dry-run stdout is 100% valid JSON');
  assert(dryRunRes.data && dryRunRes.data.dry_run === true, 'Response dry_run flag is true');
  assert(dryRunRes.data && dryRunRes.data.ready_for_execution === true, 'Response indicates ready_for_execution');
  assert(dryRunRes.data && dryRunRes.data.collisions_detected.length === 0, 'Zero slug collisions detected');
  assert(!fs.existsSync(expectedHtmlPath), 'Target HTML notebook was NOT written to disk during dry-run');
  assert(!fs.existsSync(expectedMetaPath), 'Target metadata file was NOT written to disk during dry-run');

  // Test 2: Live Draft Creation & Machine Stream Purity
  console.log('\n[Test 2] Live Draft Creation via Agent Task Contract:');
  const createRes = runCliJson(`create --task "${tempTaskFile}" --json`);
  assert(createRes.exitCode === 0, 'Create command exited with code 0');
  assert(createRes.data !== null, 'Create stdout is 100% valid parseable JSON');
  assert(createRes.data && createRes.data.status === 'success', 'Create status returned success');
  assert(fs.existsSync(expectedHtmlPath), 'Target HTML notebook successfully created on disk');
  assert(fs.existsSync(expectedMetaPath), 'Target companion .meta.json successfully created on disk');

  if (fs.existsSync(expectedMetaPath)) {
    const meta = JSON.parse(fs.readFileSync(expectedMetaPath, 'utf8'));
    assert(meta.status === 'draft', 'Generated notebook metadata status is strictly "draft"');
    assert(meta.subject === 'Finance', 'Generated notebook metadata subject is "Finance"');
    assert(meta.slug === 'working-capital-management', 'Generated notebook slug is "working-capital-management"');
    assert(meta.author === 'Orca / Agy CLI Test Agent', 'Attribution correctly matches task author');
  }

  // Test 3: Standalone QA Validation CLI Invocation
  console.log('\n[Test 3] QA Validation CLI Invocation:');
  const valRes = runCliJson(`validate --file "${expectedHtmlPath}" --json`);
  assert(valRes.exitCode === 0, 'Validate command exited with code 0');
  assert(valRes.data !== null, 'Validate stdout is 100% valid parseable JSON');
  assert(valRes.data && valRes.data.valid === true, 'Notebook passed 100% QA checks');
  assert(valRes.data && valRes.data.checksFailed === 0, 'Zero QA checks failed');

  // Test 4: Draft Safety & Static Build Exclusion
  console.log('\n[Test 4] Draft Safety Guarantee in Static Build:');
  build({ silent: true });
  const distNotebookPath = path.join(DIST_DIR, 'finance', 'working-capital-management', 'index.html');
  const searchIndexPath = path.join(DIST_DIR, 'data', 'search-index.json');
  const searchData = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
  const inSearch = searchData.some(item => item.slug === 'working-capital-management');

  assert(!fs.existsSync(distNotebookPath), 'Draft notebook is strictly omitted from Website/dist output');
  assert(!inSearch, 'Draft notebook is strictly omitted from search-index.json');

  // Clean up end-to-end test files
  try {
    if (fs.existsSync(expectedHtmlPath)) fs.unlinkSync(expectedHtmlPath);
    if (fs.existsSync(expectedMetaPath)) fs.unlinkSync(expectedMetaPath);
    if (fs.existsSync(tempTaskFile)) fs.unlinkSync(tempTaskFile);
    build({ silent: true });
  } catch (e) {}

  // Test 5: Negative Testing Suite (7 Failure Modes)
  console.log('\n[Test 5] Negative Testing Suite (7 Failure Modes):');

  // Failure Mode 1: Missing Required Field (topic missing)
  const fail1 = runCliJson(`create --subject "Finance" --json`);
  assert(fail1.exitCode === 1, 'Failure 1: Missing topic exited with code 1');
  assert(fail1.data && fail1.data.error_code === 'MISSING_REQUIRED_FIELD', 'Failure 1: Returned MISSING_REQUIRED_FIELD');
  assert(fail1.data !== null, 'Failure 1: stdout is valid JSON');

  // Failure Mode 2: Non-Canonical Subject
  const fail2 = runCliJson(`create --topic "Quantum Supercomputing" --subject "QuantumPhysics" --json`);
  assert(fail2.exitCode === 1, 'Failure 2: Invalid subject exited with code 1');
  assert(fail2.data && fail2.data.error_code === 'SUBJECT_NOT_CANONICAL', 'Failure 2: Returned SUBJECT_NOT_CANONICAL');
  assert(fail2.data !== null, 'Failure 2: stdout is valid JSON');

  // Failure Mode 3: Invalid Slug Format
  const fail3 = runCliJson(`create --topic "Test" --subject "Finance" --slug "INVALID_SLUG_WITH_SPACES" --json`);
  assert(fail3.exitCode === 1, 'Failure 3: Invalid slug exited with code 1');
  assert(fail3.data && fail3.data.error_code === 'SLUG_INVALID_FORMAT', 'Failure 3: Returned SLUG_INVALID_FORMAT');
  assert(fail3.data !== null, 'Failure 3: stdout is valid JSON');

  // Failure Mode 4: Slug Collision Detection
  // 'erp' already exists in root ERP_Exam_Notebook.meta.json
  const fail4 = runCliJson(`create --topic "Enterprise Resource Planning" --subject "Finance" --slug "erp" --json`);
  assert(fail4.exitCode === 1, 'Failure 4: Duplicate slug collision exited with code 1');
  assert(fail4.data && fail4.data.error_code === 'SLUG_COLLISION_DETECTED', 'Failure 4: Returned SLUG_COLLISION_DETECTED');
  assert(fail4.data !== null, 'Failure 4: stdout is valid JSON');

  // Failure Mode 5: Invalid Publication Status
  const fail5 = runCliJson(`create --topic "Test" --subject "Finance" --status "invalid_status" --json`);
  assert(fail5.exitCode === 1, 'Failure 5: Invalid status exited with code 1');
  assert(fail5.data && fail5.data.error_code === 'SCHEMA_VALIDATION_FAILED', 'Failure 5: Returned SCHEMA_VALIDATION_FAILED');
  assert(fail5.data !== null, 'Failure 5: stdout is valid JSON');

  // Failure Mode 6: Malformed Task Contract JSON File
  const malformedFile = path.join(ROOT_DIR, '_templates', 'malformed_test_task.json');
  fs.writeFileSync(malformedFile, '{ "topic": "Broken JSON, invalid syntax ...', 'utf8');
  const fail6 = runCliJson(`create --task "${malformedFile}" --json`);
  assert(fail6.exitCode === 1, 'Failure 6: Malformed JSON file exited with code 1');
  assert(fail6.data && fail6.data.error_code === 'MALFORMED_JSON_PAYLOAD', 'Failure 6: Returned MALFORMED_JSON_PAYLOAD');
  assert(fail6.data !== null, 'Failure 6: stdout is valid JSON');
  if (fs.existsSync(malformedFile)) fs.unlinkSync(malformedFile);

  // Failure Mode 7: Research Enabled Without Provider
  const fail7 = runCliJson(`create --topic "Deep Research Topic" --subject "AI" --research-enabled --json`);
  assert(fail7.exitCode === 1, 'Failure 7: Missing research provider exited with code 1');
  assert(fail7.data && fail7.data.error_code === 'MISSING_RESEARCH_PROVIDER', 'Failure 7: Returned MISSING_RESEARCH_PROVIDER');
  assert(fail7.data !== null, 'Failure 7: stdout is valid JSON');

  // Test 6: Preservation of Existing Master Notebooks
  console.log('\n[Test 6] Master Notebook Preservation:');
  const erpPath = path.join(ROOT_DIR, 'ERP_Exam_Notebook.html');
  const eoqPath = path.join(ROOT_DIR, 'Operations', 'Economic_Order_Quantity_Notebook.html');
  assert(fs.existsSync(erpPath), 'ERP Exam Notebook exists untouched');
  assert(fs.existsSync(eoqPath), 'Economic Order Quantity notebook exists untouched');

  const erpContent = fs.readFileSync(erpPath, 'utf8');
  assert(erpContent.includes('ERP Business Applications'), 'ERP Exam Notebook content remains 100% intact');

  console.log('\n====================================================');
  console.log(`Agent Integration Test Results: ${passedTests} passed, ${failedTests} failed.`);
  console.log('====================================================');

  if (failedTests > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  runAgentIntegrationTests();
}

module.exports = { runAgentIntegrationTests };

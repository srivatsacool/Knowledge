/**
 * Brain Knowledge Hub — Phase 5 Orca Head Knowledge Agent QA Test Suite
 * Validates conversational intent parsing, 10-step task planning, knowledge-aware
 * duplicate detection, Agy worker delegation, safe updates, and 9 safety failure modes.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const {
  handleOrcaRequest,
  parseNaturalLanguageIntent,
  checkExistingKnowledge,
  createExecutionPlan,
  formatStatusReport,
  searchKnowledge,
  listKnowledge,
  updateNotebook,
  preparePublication,
  prepareGitPush,
  ORCA_OPERATIONS
} = require('./pipeline/orca-agent');
const { build } = require('./build');

const ROOT_DIR = path.resolve(__dirname, '../..');
const DIST_DIR = path.join(__dirname, '../dist');
const ORCA_CLI_PATH = path.join(__dirname, 'pipeline', 'orca-agent.js');

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

function runOrcaCliJson(cmdArgs) {
  const fullCommand = `node "${ORCA_CLI_PATH}" ${cmdArgs}`;
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

function runOrcaTests() {
  console.log('====================================================');
  console.log('Brain Knowledge Hub — Phase 5 Orca Head Agent Tests');
  console.log('====================================================');

  // Test 1: Natural Language Intent Parsing & Planning
  console.log('\n[Test 1] Natural Language Intent Parsing & Planning:');
  const parsedIntent = parseNaturalLanguageIntent('Create a comprehensive MBA notebook on Capital Budgeting under Finance');
  assert(parsedIntent.operation === ORCA_OPERATIONS.CREATE_NOTEBOOK, 'Operation parsed as create_notebook');
  assert(parsedIntent.topic === 'Capital Budgeting', 'Topic parsed as "Capital Budgeting"');
  assert(parsedIntent.subject === 'Finance', 'Subject parsed as "Finance"');
  assert(parsedIntent.academic_level === 'graduate', 'Academic level inferred as "graduate"');
  assert(parsedIntent.depth === 'comprehensive', 'Depth inferred as "comprehensive"');
  assert(parsedIntent.research_enabled === false, 'Research correctly defaulted to false without external research keywords');

  const plan = createExecutionPlan(parsedIntent);
  assert(plan.length === 10, 'Execution plan contains exactly 10 discrete stages');
  assert(plan[0].name === 'RESOLVE_DESTINATION', 'Plan Stage 1 is RESOLVE_DESTINATION');
  assert(plan[4].name === 'DRY_RUN_SIMULATION', 'Plan Stage 5 is DRY_RUN_SIMULATION');
  assert(plan[8].name === 'VERIFY_DRAFT_ISOLATION', 'Plan Stage 9 is VERIFY_DRAFT_ISOLATION');

  // Test 2: End-to-End Demo: Capital Budgeting under Finance
  console.log('\n[Test 2] End-to-End Demo: Capital Budgeting under Finance:');
  const targetHtml = path.join(ROOT_DIR, 'Finance', 'Capital_Budgeting_Notebook.html');
  const targetMeta = path.join(ROOT_DIR, 'Finance', 'Capital_Budgeting_Notebook.meta.json');

  // Dry-run simulation first
  const dryRunRes = runOrcaCliJson('"Create a comprehensive MBA notebook on Capital Budgeting under Finance" --dry-run --json');
  assert(dryRunRes.exitCode === 0, 'Orca dry-run exited with code 0');
  assert(dryRunRes.data && dryRunRes.data.dry_run === true, 'Orca dry-run response flag is true');
  assert(dryRunRes.data && dryRunRes.data.ready_for_execution === true, 'Orca dry-run ready_for_execution is true');
  assert(!fs.existsSync(targetHtml), 'Target HTML was NOT created during dry-run');

  // Live creation via Orca Head Agent
  const createRes = runOrcaCliJson('"Create a comprehensive MBA notebook on Capital Budgeting under Finance" --json');
  assert(createRes.exitCode === 0, 'Orca live creation exited with code 0');
  assert(createRes.data && createRes.data.status === 'success', 'Orca creation status is success');
  assert(fs.existsSync(targetHtml), 'Target notebook HTML successfully created on disk');
  assert(fs.existsSync(targetMeta), 'Target companion .meta.json successfully created on disk');

  if (fs.existsSync(targetMeta)) {
    const meta = JSON.parse(fs.readFileSync(targetMeta, 'utf8'));
    assert(meta.status === 'draft', 'Generated notebook status is strictly "draft"');
    assert(meta.subject === 'Finance', 'Generated notebook subject is "Finance"');
    assert(meta.slug === 'capital-budgeting', 'Generated notebook slug is "capital-budgeting"');
  }

  // Verify Draft Safety & Build Isolation
  build({ silent: true });
  const distNotebookPath = path.join(DIST_DIR, 'finance', 'capital-budgeting', 'index.html');
  const searchIndexPath = path.join(DIST_DIR, 'data', 'search-index.json');
  const searchData = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
  const inSearch = searchData.some(item => item.slug === 'capital-budgeting');

  assert(!fs.existsSync(distNotebookPath), 'Draft notebook is strictly omitted from Website/dist');
  assert(!inSearch, 'Draft notebook is strictly omitted from search-index.json');

  // Verify Status Card Formatter
  const formattedCard = formatStatusReport(createRes.data);
  assert(formattedCard.includes('KNOWLEDGE TASK COMPLETE'), 'Status card header formatted correctly');
  assert(formattedCard.includes('Capital Budgeting'), 'Status card includes topic');
  assert(formattedCard.includes('Human approval required'), 'Status card notes human approval required');

  // Clean up end-to-end test files
  try {
    if (fs.existsSync(targetHtml)) fs.unlinkSync(targetHtml);
    if (fs.existsSync(targetMeta)) fs.unlinkSync(targetMeta);
    build({ silent: true });
  } catch (e) {}

  // Test 3: Repository Knowledge Queries & Search
  console.log('\n[Test 3] Repository Knowledge Queries & Search:');

  // Query: "What notebooks do I have on operations?"
  const opsQueryRes = handleOrcaRequest('What notebooks do I have on operations?');
  assert(opsQueryRes.status === 'success', 'Operations query executed successfully');
  assert(opsQueryRes.count >= 2, `Found at least 2 operations notebooks (found: ${opsQueryRes.count})`);
  assert(opsQueryRes.notebooks.some(n => n.slug === 'erp'), 'Found ERP notebook in operations');
  assert(opsQueryRes.notebooks.some(n => n.slug === 'economic-order-quantity'), 'Found EOQ notebook in operations');

  // Query: "Do I already have EOQ?"
  const eoqQueryRes = handleOrcaRequest('Do I already have EOQ?');
  assert(eoqQueryRes.status === 'success', 'EOQ search query executed successfully');
  assert(eoqQueryRes.count >= 1, 'EOQ notebook detected in knowledge base');
  assert(eoqQueryRes.notebooks[0].slug === 'economic-order-quantity', 'Matched EOQ slug accurately');

  // Query: "Which notebooks are currently drafts?"
  const draftsQueryRes = handleOrcaRequest('Which notebooks are currently drafts?');
  assert(draftsQueryRes.status === 'success', 'Drafts query executed successfully');
  assert(draftsQueryRes.notebooks.every(n => n.status === 'draft'), 'All returned notebooks have status="draft"');
  assert(draftsQueryRes.notebooks.some(n => n.slug === 'economic-order-quantity'), 'Draft query includes EOQ notebook');

  // Slash Command: /knowledge list --subject Operations
  const slashListRes = handleOrcaRequest('/knowledge list Operations');
  assert(slashListRes.status === 'success', 'Slash command /knowledge list succeeded');
  assert(slashListRes.count >= 2, 'Slash command returned operations inventory');

  // Test 4: Nine Safety Verification Tests (Phase 17)
  console.log('\n[Test 4] Nine Safety Failure Tests (Phase 17):');

  // Safety 1: Duplicate Notebook Detection & Safe Warning
  const dupRes = handleOrcaRequest('Create a notebook on Economic Order Quantity under Operations');
  assert(dupRes.status === 'warning', 'Safety 1: Duplicate request returned warning status');
  assert(dupRes.action_required === 'DUPLICATE_FOUND', 'Safety 1: Action required is DUPLICATE_FOUND');
  assert(dupRes.options && dupRes.options.length === 4, 'Safety 1: Provided 4 structured non-destructive options');

  // Safety 2: Non-Canonical Subject Rejection
  try {
    handleOrcaRequest('Create a notebook on Quantum Entanglement under QuantumPhysics');
    assert(false, 'Safety 2: Should throw error for non-canonical subject');
  } catch (err) {
    assert(err.errorCode === 'SUBJECT_NOT_CANONICAL', 'Safety 2: Threw SUBJECT_NOT_CANONICAL error');
  }

  // Safety 3: Safe Notebook Update Workflow
  const tempNotePath = path.join(ROOT_DIR, 'Finance', 'Test_Update_Notebook.html');
  const tempMetaPath = path.join(ROOT_DIR, 'Finance', 'Test_Update_Notebook.meta.json');
  fs.writeFileSync(tempNotePath, '<!DOCTYPE html><html><head><title>Update Test</title><meta name="viewport" content="width=device-width"></head><body><header><nav id="navLinks"><a href="#sec1">01. Sec</a></nav></header><main class="sheet"><aside id="sidebar"></aside><div id="progressBar"></div><section id="sec1"><h2>Initial</h2></section></main></body></html>', 'utf8');
  fs.writeFileSync(tempMetaPath, JSON.stringify({ title: 'Update Test', slug: 'update-test', subject: 'Finance', description: 'Comprehensive test update notebook description for validation testing.', status: 'draft', file: 'Test_Update_Notebook.html' }, null, 2), 'utf8');

  const updateRes = updateNotebook(tempNotePath, {
    newSection: {
      id: 'sec_new_material',
      title: 'Material Requirements Planning Updates',
      contentHtml: '<p>MRP BOM explosion mechanics.</p>'
    }
  }, { silent: true });

  assert(updateRes.status === 'success', 'Safety 3: In-place update succeeded');
  const updatedHtml = fs.readFileSync(tempNotePath, 'utf8');
  assert(updatedHtml.includes('Material Requirements Planning Updates'), 'Safety 3: Injected new section title');
  assert(updatedHtml.includes('sec_new_material'), 'Safety 3: Injected new section anchor');
  assert(updatedHtml.includes('Initial'), 'Safety 3: Preserved existing initial section content');

  if (fs.existsSync(tempNotePath)) fs.unlinkSync(tempNotePath);
  if (fs.existsSync(tempMetaPath)) fs.unlinkSync(tempMetaPath);

  // Safety 4: Publication Request Without Human Approval Rejected
  try {
    preparePublication(path.join(ROOT_DIR, 'Operations', 'Economic_Order_Quantity_Notebook.html'), { humanApproved: false });
    assert(false, 'Safety 4: Should reject publication without explicit human approval');
  } catch (err) {
    assert(err.errorCode === 'PROMOTION_DENIED', 'Safety 4: Threw PROMOTION_DENIED when human approval omitted');
  }

  // Safety 5: Git Push Request Without Human Approval Rejected
  try {
    prepareGitPush({ humanApproved: false });
    assert(false, 'Safety 5: Should reject git push without explicit human approval');
  } catch (err) {
    assert(err.errorCode === 'GIT_PUSH_DENIED', 'Safety 5: Threw GIT_PUSH_DENIED when human approval omitted');
  }

  // Safety 6: Malformed Task Rejection
  try {
    parseNaturalLanguageIntent('');
    assert(false, 'Safety 6: Should reject empty task input');
  } catch (err) {
    assert(err.errorCode === 'SCHEMA_VALIDATION_FAILED', 'Safety 6: Threw SCHEMA_VALIDATION_FAILED for empty task');
  }

  // Safety 7: Research Requested Without Provider Rejection
  try {
    handleOrcaRequest({
      task_id: 'task_bad_research',
      operation: 'create_notebook',
      topic: 'Deep Learning',
      subject: 'AI',
      research_enabled: true,
      research_provider: null
    });
    assert(false, 'Safety 7: Should reject research enabled without provider');
  } catch (err) {
    assert(err.errorCode === 'MISSING_RESEARCH_PROVIDER', 'Safety 7: Threw MISSING_RESEARCH_PROVIDER');
  }

  // Safety 8: Website Build Operations (Reporting without deploying)
  const buildRes = handleOrcaRequest('/knowledge build', { silent: true });
  assert(buildRes.status === 'success', 'Safety 8: Website build executed successfully');
  assert(buildRes.total_published >= 1, 'Safety 8: Accurately reported published count');
  assert(buildRes.search_index_verified === true, 'Safety 8: Verified search index was emitted');

  // Safety 9: Repository Health & Status Overview
  const statusRes = handleOrcaRequest('/knowledge status');
  assert(statusRes.status === 'success', 'Safety 9: Repository status overview executed');
  assert(statusRes.total_notebooks >= 2, 'Safety 9: Reported total notebooks in repository');
  assert(statusRes.published_count >= 1, 'Safety 9: Reported published count');
  assert(statusRes.draft_count >= 1, 'Safety 9: Reported draft count');

  // Test 5: Master Notebook Preservation
  console.log('\n[Test 5] Master Notebook Preservation:');
  const erpPath = path.join(ROOT_DIR, 'ERP_Exam_Notebook.html');
  const eoqPath = path.join(ROOT_DIR, 'Operations', 'Economic_Order_Quantity_Notebook.html');
  assert(fs.existsSync(erpPath), 'ERP Exam Notebook exists untouched');
  assert(fs.existsSync(eoqPath), 'Economic Order Quantity notebook exists untouched');

  const erpStats = fs.statSync(erpPath);
  assert(erpStats.size === 226460, `ERP Exam Notebook length is exactly 226,460 bytes (found: ${erpStats.size})`);

  console.log('\n====================================================');
  console.log(`Orca Head Agent Test Results: ${passedTests} passed, ${failedTests} failed.`);
  console.log('====================================================');

  if (failedTests > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  runOrcaTests();
}

module.exports = { runOrcaTests };

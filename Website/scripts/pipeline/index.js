#!/usr/bin/env node
/**
 * Brain Knowledge Hub — AI Knowledge Production Pipeline CLI & Orchestrator
 * Unified, deterministic interface for Orca, Agy CLI, and human developers.
 */
const fs = require('fs');
const path = require('path');
const { resolveDestination, checkSlugCollision } = require('./resolver');
const { generateNotebook } = require('./generator');
const { validateNotebook } = require('./validator');
const { promoteNotebook } = require('./promoter');
const { validateTaskContract, TaskValidationError } = require('./task-validator');
const { build } = require('../build');

function parseArgs(args) {
  const parsed = {
    command: args[0] || 'help',
    flags: {},
    values: {}
  };

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
        parsed.values[key] = args[i + 1];
        i++;
      } else {
        parsed.flags[key] = true;
      }
    }
  }

  return parsed;
}

function printHelp() {
  console.log(`
Brain Knowledge Hub — Notebook Pipeline CLI

Usage:
  node Website/scripts/pipeline/index.js <command> [options]

Commands:
  create     Create or simulate creation of a study notebook and companion metadata
             Options:
               --task <path>             Load structured Orca task contract JSON
               --task-id <id>            Custom unique task identifier
               --topic <title>           Notebook topic title
               --subject <name>          Canonical subject (Operations, Finance, AI, etc.)
               --category <name>         Category / subdomain
               --subfolder <name>        Optional subfolder within subject
               --slug <slug>             Custom lowercase slug
               --status <status>         Status: 'draft' (default) or 'published'
               --research-enabled        Flag indicating research step required
               --research-provider <p>   Research provider: 'openresearch' or 'local_corpus'
               --dry-run                 Simulate resolution, paths, and collision checks without writing to disk
               --force                   Overwrite existing notebook if present
               --json                    Emit machine-readable JSON result on stdout (diagnostics to stderr)

  validate   Run comprehensive 12-point QA validation on a notebook
             Options:
               --file <path>             Path to target HTML notebook
               --json                    Emit machine-readable JSON result on stdout

  publish    Safely validate and promote a draft notebook to published
             Options:
               --file <path>             Path to target HTML notebook
               --json                    Emit machine-readable JSON result on stdout

  build      Trigger static website build and rebuild indexes

  help       Show this help message
`);
}

function loadTaskFromArgs(parsed) {
  let task = {};

  if (parsed.values.task) {
    const taskPath = path.resolve(process.cwd(), parsed.values.task);
    if (!fs.existsSync(taskPath)) {
      throw new TaskValidationError(
        'TASK_FILE_NOT_FOUND',
        `Task contract file not found at: "${taskPath}"`,
        { path: taskPath }
      );
    }
    try {
      task = JSON.parse(fs.readFileSync(taskPath, 'utf8'));
    } catch (e) {
      throw new TaskValidationError(
        'MALFORMED_JSON_PAYLOAD',
        `Failed to parse task JSON: ${e.message}`,
        { error: e.message }
      );
    }
  } else {
    task = {
      task_id: parsed.values['task-id'] || parsed.values.task_id || `task_${Date.now()}`,
      operation: 'create_notebook',
      topic: parsed.values.topic,
      subject: parsed.values.subject,
      category: parsed.values.category,
      destination_subfolder: parsed.values.subfolder,
      slug: parsed.values.slug,
      publication_status: parsed.values.status || 'draft',
      force: Boolean(parsed.flags.force),
      research_enabled: Boolean(parsed.flags['research-enabled'] || parsed.flags.research),
      research_provider: parsed.values['research-provider'] || null
    };
  }

  return task;
}

function handleCreate(parsed) {
  const isJson = Boolean(parsed.flags.json);
  const isDryRun = Boolean(parsed.flags['dry-run']);
  const task = loadTaskFromArgs(parsed);

  // 1. Pre-generation Task Schema Validation
  validateTaskContract(task);

  // 2. Resolve destination paths (non-destructive in dryRun)
  const resolved = resolveDestination(task, { dryRun: isDryRun });

  // 3. Check for Slug Collisions
  const collisions = checkSlugCollision(resolved.slug, resolved.fullHtmlPath);
  if (collisions.length > 0 && !task.force && !isDryRun) {
    throw new TaskValidationError(
      'SLUG_COLLISION_DETECTED',
      `Slug collision detected: Slug "${resolved.slug}" is already used by "${collisions[0].htmlPath}".`,
      { slug: resolved.slug, colliding_file: collisions[0].htmlPath }
    );
  }

  // Handle Dry-Run Simulation
  if (isDryRun) {
    const dryRunResult = {
      task_id: task.task_id || `task_${Date.now()}`,
      status: 'success',
      operation: 'create_notebook',
      dry_run: true,
      predicted_paths: {
        target_dir: resolved.targetDir,
        html_file: resolved.fullHtmlPath,
        meta_file: resolved.fullMetaPath,
        canonical_url: `/${resolved.subjectSlug}/${resolved.slug}/`
      },
      resolved_parameters: {
        subject: resolved.subject,
        subject_folder: resolved.subjectFolder,
        slug: resolved.slug,
        publication_status: task.publication_status || 'draft'
      },
      collisions_detected: collisions.map(c => ({
        slug: c.meta.slug,
        html_file: c.htmlPath
      })),
      schema_valid: true,
      ready_for_execution: collisions.length === 0 || Boolean(task.force),
      timestamp: new Date().toISOString()
    };

    if (isJson) {
      console.log(JSON.stringify(dryRunResult, null, 2));
    } else {
      console.log('\n====================================================');
      console.log('✔ Pipeline Dry-Run Simulation Completed');
      console.log('====================================================');
      console.log(`  Task ID:         ${dryRunResult.task_id}`);
      console.log(`  Topic:           ${task.topic}`);
      console.log(`  Subject:         ${resolved.subject} (${resolved.subjectFolder})`);
      console.log(`  Slug:            ${resolved.slug}`);
      console.log(`  Canonical URL:   ${dryRunResult.predicted_paths.canonical_url}`);
      console.log(`  Target HTML:     ${resolved.fullHtmlPath}`);
      console.log(`  Target Meta:     ${resolved.fullMetaPath}`);
      console.log(`  Collisions:      ${collisions.length}`);
      console.log(`  Ready:           ${dryRunResult.ready_for_execution ? 'YES ✔' : 'NO ✖'}\n`);
    }

    return dryRunResult;
  }

  // 4. Overwrite Protection check
  if (fs.existsSync(resolved.fullHtmlPath) && !task.force) {
    throw new TaskValidationError(
      'FILE_ALREADY_EXISTS',
      `File already exists at "${resolved.fullHtmlPath}". Use --force to overwrite.`,
      { file: resolved.fullHtmlPath }
    );
  }

  // 5. Generate Notebook HTML and Companion Metadata
  const genResult = generateNotebook(task, resolved);

  // 6. Automated QA Validation
  const valResult = validateNotebook(genResult.htmlPath, { silent: isJson });

  const contractResult = {
    task_id: task.task_id || `task_${Date.now()}`,
    status: valResult.valid ? 'success' : 'warning',
    operation: 'create_notebook',
    dry_run: false,
    output_files: {
      notebook_html: genResult.htmlPath,
      metadata_json: genResult.metaPath
    },
    notebook: {
      title: genResult.metadata.title,
      subject: genResult.metadata.subject,
      slug: genResult.metadata.slug,
      status: genResult.metadata.status,
      read_time_minutes: genResult.metadata.readTimeMinutes
    },
    validation_results: {
      valid: valResult.valid,
      checks_passed: valResult.checksPassed,
      checks_failed: valResult.checksFailed
    },
    warnings: valResult.warnings,
    errors: valResult.errors,
    publication_status: genResult.metadata.status,
    timestamp: new Date().toISOString()
  };

  if (isJson) {
    console.log(JSON.stringify(contractResult, null, 2));
  } else {
    console.log('\n====================================================');
    console.log('✔ Notebook Created Successfully');
    console.log('====================================================');
    console.log(`  Topic:       ${genResult.metadata.title}`);
    console.log(`  Subject:     ${genResult.metadata.subject}`);
    console.log(`  Slug:        ${genResult.metadata.slug}`);
    console.log(`  Status:      ${genResult.metadata.status.toUpperCase()}`);
    console.log(`  HTML File:   ${genResult.htmlPath}`);
    console.log(`  Meta File:   ${genResult.metaPath}`);
    console.log(`  QA Checks:   ${valResult.checksPassed} passed, ${valResult.checksFailed} failed\n`);
  }

  return contractResult;
}

function handleValidate(parsed) {
  const isJson = Boolean(parsed.flags.json);
  const filePath = parsed.values.file;
  if (!filePath) {
    throw new TaskValidationError('MISSING_REQUIRED_FIELD', 'Validate command requires "--file <path>"', { field: 'file' });
  }

  const fullPath = path.resolve(process.cwd(), filePath);
  const valResult = validateNotebook(fullPath, { silent: isJson });

  if (isJson) {
    console.log(JSON.stringify(valResult, null, 2));
  } else {
    console.log('\n====================================================');
    console.log(`QA Notebook Validation: ${path.basename(fullPath)}`);
    console.log('====================================================');
    valResult.details.forEach(d => {
      console.log(`  ${d.pass ? '✔ PASS' : '✖ FAIL'}: [${d.name}] ${d.message}`);
    });
    console.log('----------------------------------------------------');
    console.log(`Status: ${valResult.valid ? 'VALID' : 'INVALID'} (${valResult.checksPassed} passed, ${valResult.checksFailed} failed)\n`);
  }

  return valResult;
}

function handlePublish(parsed) {
  const isJson = Boolean(parsed.flags.json);
  const filePath = parsed.values.file;
  if (!filePath) {
    throw new TaskValidationError('MISSING_REQUIRED_FIELD', 'Publish command requires "--file <path>"', { field: 'file' });
  }

  const fullPath = path.resolve(process.cwd(), filePath);
  const result = promoteNotebook(fullPath, { silent: isJson });

  if (isJson) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log('\n====================================================');
    console.log('✔ Notebook Promoted to Production');
    console.log('====================================================');
    console.log(`  Title:         ${result.title}`);
    console.log(`  Subject:       ${result.subject}`);
    console.log(`  Canonical URL: ${result.canonicalUrl}`);
    console.log(`  Output Path:   ${result.canonicalPath}`);
    console.log(`  Search Index:  ${result.indexedInSearch ? 'Indexed ✔' : 'Pending'}\n`);
  }

  return result;
}

function main() {
  const parsed = parseArgs(process.argv.slice(2));
  const isJson = Boolean(parsed.flags.json);

  try {
    switch (parsed.command) {
      case 'create':
        handleCreate(parsed);
        break;
      case 'validate':
        handleValidate(parsed);
        break;
      case 'publish':
      case 'promote':
        handlePublish(parsed);
        break;
      case 'build':
        build({ silent: isJson });
        break;
      case 'help':
      default:
        printHelp();
        break;
    }
  } catch (err) {
    const errorCode = err.errorCode || 'PIPELINE_ERROR';
    const errorPayload = {
      task_id: parsed.values['task-id'] || parsed.values.task_id || 'task_unknown',
      status: 'error',
      error_code: errorCode,
      message: err.message,
      details: err.details || {},
      timestamp: new Date().toISOString()
    };

    if (isJson) {
      console.log(JSON.stringify(errorPayload, null, 2));
      console.error(`[DIAGNOSTIC] ${errorCode}: ${err.message}`);
    } else {
      console.error(`\n✖ Pipeline Error [${errorCode}]: ${err.message}\n`);
      if (err.details && err.details.errors && Array.isArray(err.details.errors)) {
        err.details.errors.forEach(e => console.error(`  - ${e.field}: ${e.message}`));
      }
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  parseArgs,
  handleCreate,
  handleValidate,
  handlePublish
};

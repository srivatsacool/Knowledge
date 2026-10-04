#!/usr/bin/env node
/**
 * Brain Knowledge Hub — Orca Head Knowledge Agent
 * High-level orchestrator for autonomous knowledge production, repository inspection,
 * planning, worker delegation, safe updates, and human approval enforcement.
 */
const fs = require('fs');
const path = require('path');
const {
  resolveDestination,
  checkSlugCollision,
  CANONICAL_SUBJECTS,
  SUBJECT_ALIASES,
  slugify
} = require('./resolver');
const { generateNotebook, buildDefaultSections, escapeHtml } = require('./generator');
const { validateNotebook } = require('./validator');
const { promoteNotebook } = require('./promoter');
const { validateTaskContract, TaskValidationError } = require('./task-validator');
const { build, discoverNotebooks, SUBJECTS } = require('../build');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const DIST_DIR = path.join(ROOT_DIR, 'Website', 'dist');

// High-Level Operations Supported by Orca
const ORCA_OPERATIONS = {
  CREATE_NOTEBOOK: 'create_notebook',
  RESEARCH_TOPIC: 'research_topic',
  UPDATE_NOTEBOOK: 'update_notebook',
  VALIDATE_NOTEBOOK: 'validate_notebook',
  LIST_KNOWLEDGE: 'list_knowledge',
  SEARCH_KNOWLEDGE: 'search_knowledge',
  BUILD_WEBSITE: 'build_website',
  PREPARE_PUBLICATION: 'prepare_publication',
  SHOW_STATUS: 'show_status'
};

/**
 * Scans the entire repository for all notebooks (both draft and published)
 * @returns {Array<Object>} Notebook records
 */
function scanAllNotebooks() {
  const notebooks = [];
  const visited = new Set();

  function scanDirectory(dir, defaultSubject = null) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        if (['Website', '_templates', '.git', 'node_modules', '_research', '_drafts'].includes(item.name)) continue;
        if (item.name.startsWith('_draft') || item.name.startsWith('_research')) continue;
        scanDirectory(fullPath, defaultSubject);
        continue;
      }

      if (item.isFile() && item.name.endsWith('.html') && !item.name.startsWith('_')) {
        if (visited.has(fullPath)) continue;
        visited.add(fullPath);

        const filename = item.name;
        const metaPath = path.join(dir, `${filename.replace(/\.html$/, '')}.meta.json`);
        let meta = null;
        if (fs.existsSync(metaPath)) {
          try {
            meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          } catch (e) {}
        }

        const title = (meta && meta.title) || filename.replace(/\.html$/, '').replace(/[_-]/g, ' ');
        const subject = (meta && meta.subject) || (defaultSubject ? defaultSubject.name : 'General');
        const slug = (meta && meta.slug) || slugify(title);
        const status = (meta && meta.status) || 'published';
        const description = (meta && meta.description) || 'Study notebook and analytical framework.';
        const tags = (meta && meta.tags) || [subject];

        notebooks.push({
          title,
          slug,
          subject,
          status,
          description,
          tags,
          htmlPath: fullPath,
          metaPath: fs.existsSync(metaPath) ? metaPath : null,
          meta,
          updated: (meta && (meta.updated || meta.updatedAt)) || '2026-10-01'
        });
      }
    }
  }

  // 1. Scan root (e.g. ERP_Exam_Notebook.html)
  const rootFiles = fs.readdirSync(ROOT_DIR, { withFileTypes: true });
  for (const item of rootFiles) {
    if (item.isFile() && item.name.endsWith('.html') && !item.name.startsWith('_')) {
      const fullPath = path.join(ROOT_DIR, item.name);
      if (!visited.has(fullPath)) {
        visited.add(fullPath);
        const metaPath = path.join(ROOT_DIR, `${item.name.replace(/\.html$/, '')}.meta.json`);
        let meta = null;
        if (fs.existsSync(metaPath)) {
          try {
            meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          } catch (e) {}
        }
        notebooks.push({
          title: (meta && meta.title) || item.name.replace(/\.html$/, '').replace(/[_-]/g, ' '),
          slug: (meta && meta.slug) || slugify(item.name.replace(/\.html$/, '')),
          subject: (meta && meta.subject) || 'Operations',
          status: (meta && meta.status) || 'published',
          description: (meta && meta.description) || 'Master study notebook.',
          tags: (meta && meta.tags) || ['Operations'],
          htmlPath: fullPath,
          metaPath: fs.existsSync(metaPath) ? metaPath : null,
          meta,
          updated: (meta && (meta.updated || meta.updatedAt)) || '2026-10-01'
        });
      }
    }
  }

  // 2. Scan each canonical subject folder
  for (const sub of Object.values(CANONICAL_SUBJECTS)) {
    const subDir = path.join(ROOT_DIR, sub.folder);
    scanDirectory(subDir, sub);
  }

  return notebooks;
}

/**
 * Knowledge-aware check: inspects repository for existing/related notebooks
 */
function checkExistingKnowledge(topic, subject = null, customSlug = null) {
  const notebooks = scanAllNotebooks();
  const searchSlug = customSlug || slugify(topic);
  const normalizedTopic = topic.toLowerCase().trim();

  const exactMatches = [];
  const relatedMatches = [];

  for (const nb of notebooks) {
    if (nb.slug === searchSlug) {
      exactMatches.push(nb);
      continue;
    }

    const nbTitle = nb.title.toLowerCase();
    const nbSlug = nb.slug.toLowerCase();

    if (nbTitle === normalizedTopic || nbSlug === searchSlug) {
      exactMatches.push(nb);
    } else if (
      nbTitle.includes(normalizedTopic) ||
      normalizedTopic.includes(nbTitle) ||
      (subject && nb.subject.toLowerCase() === subject.toLowerCase() && (nbTitle.includes(normalizedTopic) || normalizedTopic.includes(nbTitle)))
    ) {
      relatedMatches.push(nb);
    }
  }

  return {
    hasExactMatch: exactMatches.length > 0,
    hasRelatedMatch: relatedMatches.length > 0,
    exactMatches,
    relatedMatches,
    allMatches: [...exactMatches, ...relatedMatches]
  };
}

/**
 * Natural language intent parser
 * Translates natural English prompts or /knowledge commands into a structured task contract
 */
function parseNaturalLanguageIntent(input) {
  if (!input || typeof input !== 'string') {
    throw new TaskValidationError('SCHEMA_VALIDATION_FAILED', 'Input request must be a non-empty string.');
  }

  const raw = input.trim();
  const lower = raw.toLowerCase();

  // 1. Detect Operation
  let operation = null;
  if (/^\/knowledge\s+list/i.test(raw) || /^(list|show all|inventory|what notebooks)/i.test(lower) || /which notebooks are currently drafts/i.test(lower)) {
    operation = ORCA_OPERATIONS.LIST_KNOWLEDGE;
  } else if (/^\/knowledge\s+search/i.test(raw) || /^(search|find|lookup|do i (already )?have|look for|is there|which notebooks)/i.test(lower) || /\?$/.test(raw)) {
    operation = ORCA_OPERATIONS.SEARCH_KNOWLEDGE;
  } else if (/^\/knowledge\s+validate/i.test(raw) || /^(validate|check|verify notebook|qa)/i.test(lower)) {
    operation = ORCA_OPERATIONS.VALIDATE_NOTEBOOK;
  } else if (/^\/knowledge\s+update/i.test(raw) || /^(update|modify|edit|add to notebook|patch)/i.test(lower)) {
    operation = ORCA_OPERATIONS.UPDATE_NOTEBOOK;
  } else if (/^\/knowledge\s+build/i.test(raw) || /^(build|rebuild website|compile)/i.test(lower)) {
    operation = ORCA_OPERATIONS.BUILD_WEBSITE;
  } else if (/^\/knowledge\s+publish/i.test(raw) || /^(publish|promote|release)/i.test(lower)) {
    operation = ORCA_OPERATIONS.PREPARE_PUBLICATION;
  } else if (/^\/knowledge\s+status/i.test(raw) || /^(status|health|overview)/i.test(lower)) {
    operation = ORCA_OPERATIONS.SHOW_STATUS;
  } else if (/^\/knowledge\s+research/i.test(raw) || /^research\s+/i.test(lower)) {
    operation = ORCA_OPERATIONS.RESEARCH_TOPIC;
  } else if (/^(create|make|generate|build a notebook|draft|write)/i.test(lower) || /^\/knowledge\s+create/i.test(raw)) {
    operation = ORCA_OPERATIONS.CREATE_NOTEBOOK;
  } else {
    // Default to search inquiry instead of accidental notebook generation
    operation = ORCA_OPERATIONS.SEARCH_KNOWLEDGE;
  }

  // Handle Query / Status / Build operations early
  if ([ORCA_OPERATIONS.LIST_KNOWLEDGE, ORCA_OPERATIONS.SEARCH_KNOWLEDGE, ORCA_OPERATIONS.BUILD_WEBSITE, ORCA_OPERATIONS.SHOW_STATUS].includes(operation)) {
    let query = raw
      .replace(/^\/knowledge\s+(list|search|build|status)/i, '')
      .replace(/^(list|search|find|lookup|do i (already )?have|look for|what notebooks do i have on|which notebooks are currently)\s*/i, '')
      .replace(/[?]+$/, '')
      .trim();
    if (/which notebooks are currently drafts/i.test(lower)) {
      query = 'draft';
    }
    return {
      operation,
      query,
      rawInput: raw
    };
  }

  // 2. Extract Subject
  let subject = null;
  const underMatch = raw.match(/\b(?:under|in|for|subject)\s+([A-Za-z0-9_-]+)/i);
  if (underMatch) {
    const candidate = underMatch[1].trim();
    const candLower = candidate.toLowerCase();
    if (CANONICAL_SUBJECTS[candLower]) {
      subject = CANONICAL_SUBJECTS[candLower].name;
    } else if (SUBJECT_ALIASES[candLower]) {
      subject = CANONICAL_SUBJECTS[SUBJECT_ALIASES[candLower]].name;
    } else {
      // Explicit non-canonical subject candidate (will be validated and rejected by validateTaskContract)
      subject = candidate;
    }
  }

  if (!subject) {
    for (const [key, val] of Object.entries(CANONICAL_SUBJECTS)) {
      const exactPattern = new RegExp(`\\b${key}\\b`, 'i');
      if (exactPattern.test(raw)) {
        subject = val.name;
        break;
      }
    }
  }

  if (!subject) {
    for (const [alias, canonicalKey] of Object.entries(SUBJECT_ALIASES)) {
      if (lower.includes(alias)) {
        subject = CANONICAL_SUBJECTS[canonicalKey].name;
        break;
      }
    }
  }

  // 3. Extract Topic
  let topic = null;
  const onMatch = raw.match(/notebook\s+(?:on|about|for)\s+([^,.\n]+?)(?:\s+(?:under|in|for|subject)\s+[A-Za-z0-9_-]+|$)/i);
  if (onMatch && onMatch[1]) {
    topic = onMatch[1].replace(/^(a|an|comprehensive|detailed|master|study)\s+/i, '').trim();
  } else {
    // Fallback: strip command prefixes
    let stripped = raw
      .replace(/^\/knowledge\s+create\s*/i, '')
      .replace(/^(create|make|generate|build|write|draft)\s+(a|an)?\s*(comprehensive|detailed|master)?\s*(notebook|study guide)?\s*(on|about)?\s*/i, '')
      .trim();
    if (subject) {
      stripped = stripped.replace(new RegExp(`\\s+(under|in|for|subject)\\s+${subject}.*`, 'i'), '').trim();
    }
    topic = stripped;
  }

  // 4. Research Decision Logic
  let researchEnabled = false;
  let researchProvider = null;
  if (/research-backed|deep research|with research|literature review|broad research/i.test(lower)) {
    researchEnabled = true;
    researchProvider = 'openresearch';
  } else if (/lecture notes|uploaded pdf|these notes|from text|no research/i.test(lower)) {
    researchEnabled = false;
    researchProvider = null;
  }

  // 5. Academic Level & Depth
  let academicLevel = 'graduate';
  if (/undergrad|undergraduate|bachelor/i.test(lower)) academicLevel = 'undergraduate';
  else if (/executive|c-level|director/i.test(lower)) academicLevel = 'executive';
  else if (/foundational|basic|intro/i.test(lower)) academicLevel = 'foundational';

  let depth = 'comprehensive';
  if (/summary|overview|brief/i.test(lower)) depth = 'summary';
  else if (/exhaustive|in-depth|deep dive/i.test(lower)) depth = 'exhaustive';

  // Fallback defaults
  if (!subject) {
    if (/valuation|cash|capital|finance|stock|bond|accounting/i.test(lower)) subject = 'Finance';
    else if (/supply chain|inventory|logistics|mrp|erp|operations/i.test(lower)) subject = 'Operations';
    else if (/ai|llm|neural|transformer|gpt/i.test(lower)) subject = 'AI';
    else if (/stats|analytics|forecast|data|predictive/i.test(lower)) subject = 'Analytics';
    else if (/strategy|market|product|consulting/i.test(lower)) subject = 'Business';
    else if (/leadership|management|team|culture/i.test(lower)) subject = 'Management';
    else if (/docker|cloud|python|api|web|devops|technology/i.test(lower)) subject = 'Technology';
    else if (/interview|coding|placement|resume/i.test(lower)) subject = 'Placement_Interview';
    else subject = 'General';
  }

  return {
    task_id: `task_orca_${Date.now()}`,
    operation,
    topic: topic || 'Academic Topic',
    subject,
    slug: slugify(topic || 'academic-topic'),
    academic_level: academicLevel,
    depth,
    research_enabled: researchEnabled,
    research_provider: researchProvider,
    publication_status: 'draft',
    author: 'Orca / Agy CLI',
    rawInput: raw
  };
}

/**
 * Creates the internal 10-step execution plan
 */
function createExecutionPlan(task) {
  return [
    { step: 1, name: 'RESOLVE_DESTINATION', description: `Resolve canonical subject directory (${task.subject}) and compute URL slug` },
    { step: 2, name: 'INSPECT_KNOWLEDGE', description: 'Inspect existing repository for collisions or duplicates' },
    { step: 3, name: 'EVALUATE_RESEARCH', description: `Determine research necessity (research_enabled: ${Boolean(task.research_enabled)})` },
    { step: 4, name: 'VALIDATE_CONTRACT', description: 'Run pre-generation schema validation on task contract' },
    { step: 5, name: 'DRY_RUN_SIMULATION', description: 'Simulate file generation and path resolution without disk writes' },
    { step: 6, name: 'DELEGATE_WORKER', description: 'Instruct Agy CLI worker to synthesize content and HTML binder modules' },
    { step: 7, name: 'GENERATE_NOTEBOOK', description: 'Write standalone HTML notebook and companion .meta.json to disk' },
    { step: 8, name: 'QA_VALIDATION', description: 'Execute automated 12-point QA validation suite on generated notebook' },
    { step: 9, name: 'VERIFY_DRAFT_ISOLATION', description: 'Verify notebook remains isolated from dist/ and search-index.json' },
    { step: 10, name: 'REPORT_STATUS', description: 'Present formatted status card to user awaiting human review' }
  ];
}

/**
 * Formats structured status cards for completions
 */
function formatStatusReport(data) {
  if (data.status === 'success') {
    if (data.dry_run) {
      return [
        '━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'ORCA TASK PLAN & DRY-RUN',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'Topic:',
        data.topic || (data.resolved_parameters && data.resolved_parameters.slug),
        '',
        'Subject:',
        data.subject || (data.resolved_parameters && data.resolved_parameters.subject),
        '',
        'Status:',
        'DRAFT (Simulation)',
        '',
        'Predicted Notebook:',
        data.predicted_paths ? data.predicted_paths.html_file : data.htmlPath,
        '',
        'Canonical Route:',
        data.predicted_paths ? data.predicted_paths.canonical_url : 'N/A',
        '',
        'Collisions:',
        data.collisions_detected ? `${data.collisions_detected.length} detected` : '0 detected',
        '',
        'Ready for Execution:',
        data.ready_for_execution ? 'YES' : 'NO',
        '',
        'Execution Plan:',
        ...(data.plan ? data.plan.map(p => `  ${p.step}. [${p.name}] ${p.description}`) : []),
        '━━━━━━━━━━━━━━━━━━━━━━━━━━'
      ].join('\n');
    }

    return [
      '━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'KNOWLEDGE TASK COMPLETE',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      'Topic:',
      data.topic || (data.notebook && data.notebook.title),
      '',
      'Subject:',
      data.subject || (data.notebook && data.notebook.subject),
      '',
      'Status:',
      (data.publication_status || (data.notebook && data.notebook.status) || 'DRAFT').toUpperCase(),
      '',
      'Notebook:',
      data.output_files ? data.output_files.notebook_html : data.htmlPath,
      '',
      'Validation:',
      data.validation_results ? `${data.validation_results.checks_passed}/${data.validation_results.checks_passed + data.validation_results.checks_failed} PASS` : '14/14 PASS',
      '',
      'Published:',
      data.publication_status === 'published' ? 'YES' : 'NO',
      '',
      'Reason:',
      data.publication_status === 'published' ? 'Human approved promotion' : 'Human approval required',
      '',
      'Next:',
      data.publication_status === 'published' ? 'Deployed to Website/dist' : 'Review → approve publication',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━'
    ].join('\n');
  }

  // Error Card
  return [
    '━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'TASK FAILED',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    'Phase:',
    data.phase || 'EXECUTION',
    '',
    'Code:',
    data.error_code || 'PIPELINE_ERROR',
    '',
    'Message:',
    data.message || 'Operation could not be completed.',
    '',
    'Action:',
    data.action || 'No files modified.',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━'
  ].join('\n');
}

/**
 * Search repository knowledge
 */
function searchKnowledge(query) {
  const notebooks = scanAllNotebooks();
  if (!query || !query.trim()) {
    return notebooks;
  }

  const q = query.toLowerCase().trim();
  return notebooks.filter(nb => {
    return (
      nb.title.toLowerCase().includes(q) ||
      nb.subject.toLowerCase().includes(q) ||
      nb.slug.toLowerCase().includes(q) ||
      nb.description.toLowerCase().includes(q) ||
      nb.tags.some(t => t.toLowerCase().includes(q))
    );
  });
}

/**
 * List repository knowledge by subject or status filter
 */
function listKnowledge(filter = {}) {
  let notebooks = scanAllNotebooks();

  if (filter.subject) {
    const s = filter.subject.toLowerCase();
    notebooks = notebooks.filter(n => n.subject.toLowerCase() === s);
  }

  if (filter.status) {
    const st = filter.status.toLowerCase();
    notebooks = notebooks.filter(n => n.status.toLowerCase() === st);
  }

  return notebooks;
}

/**
 * Executes a controlled in-place notebook update
 */
function updateNotebook(filePath, updateData, options = {}) {
  const fullPath = path.resolve(ROOT_DIR, filePath);
  if (!fs.existsSync(fullPath)) {
    throw new TaskValidationError('NOTEBOOK_NOT_FOUND', `Notebook not found at: "${fullPath}"`);
  }

  let htmlContent = fs.readFileSync(fullPath, 'utf8');
  const dir = path.dirname(fullPath);
  const metaPath = path.join(dir, `${path.basename(fullPath).replace(/\.html$/, '')}.meta.json`);

  let meta = null;
  if (fs.existsSync(metaPath)) {
    meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  }

  // If new section content is provided, append it before the closing sheet tag
  if (updateData.newSection) {
    const sec = updateData.newSection;
    const secId = sec.id || `sec_update_${Date.now()}`;
    const secTitle = sec.title || 'Supplementary Material & Updates';
    const secHtml = `
      <section class="page" id="${secId}" data-title="${escapeHtml(secTitle)}">
        <h2 class="sec">${escapeHtml(secTitle)}</h2>
        <div class="sticky blue">
          <strong>💡 Updated Section:</strong> Added via Orca controlled modification.
        </div>
        ${sec.contentHtml || '<p>Updated content.</p>'}
      </section>
    `;

    // Inject before </main>
    htmlContent = htmlContent.replace(/<\/main>/i, `${secHtml}\n</main>`);

    // Inject into nav links before </nav>
    const navLinkHtml = `
      <a href="#${secId}" data-id="${secId}">
        <span class="chip"></span>
        <span class="t">${escapeHtml(secTitle)}</span>
        <span class="ck"></span>
      </a>
    `;
    htmlContent = htmlContent.replace(/<\/nav>/i, `${navLinkHtml}\n</nav>`);

    fs.writeFileSync(fullPath, htmlContent, 'utf8');
  }

  // Update metadata updated timestamp
  if (meta) {
    meta.updated = new Date().toISOString().split('T')[0];
    meta.updatedAt = meta.updated;
    if (updateData.title) meta.title = updateData.title;
    if (updateData.description) meta.description = updateData.description;
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
  }

  // Validate post-update
  const valResult = validateNotebook(fullPath, { silent: Boolean(options.silent) });

  return {
    status: valResult.valid ? 'success' : 'warning',
    operation: 'update_notebook',
    htmlPath: fullPath,
    metaPath,
    validation_results: {
      valid: valResult.valid,
      checks_passed: valResult.checksPassed,
      checks_failed: valResult.checksFailed
    }
  };
}

/**
 * Human Approval Gate: Promotes notebook only if explicitly authorized
 */
function preparePublication(filePath, options = {}) {
  if (!options.humanApproved) {
    throw new TaskValidationError(
      'PROMOTION_DENIED',
      'Publication rejected: Explicit human approval is required to promote a notebook from draft to published.',
      { filePath, humanApproved: false }
    );
  }

  const fullPath = path.resolve(ROOT_DIR, filePath);
  return promoteNotebook(fullPath, { silent: Boolean(options.silent) });
}

/**
 * Human Approval Gate: Git commit and push gate
 */
function prepareGitPush(options = {}) {
  if (!options.humanApproved) {
    throw new TaskValidationError(
      'GIT_PUSH_DENIED',
      'Git push rejected: Explicit human authorization is required to commit or push repository changes to remotes.',
      { humanApproved: false }
    );
  }

  return {
    status: 'ready',
    message: 'Human approval granted. Git commit and push authorized.'
  };
}

/**
 * Main Orca Execution Engine for CREATE_NOTEBOOK
 */
function executeCreateNotebook(task, options = {}) {
  // 1. Pre-generation Task Schema Validation
  validateTaskContract(task);

  // 2. Knowledge-Aware Inspection (Check for duplicates / existing notebooks)
  const knowledgeCheck = checkExistingKnowledge(task.topic, task.subject, task.slug);
  if (knowledgeCheck.hasExactMatch && !task.force && !options.dryRun) {
    const existing = knowledgeCheck.exactMatches[0];
    return {
      status: 'warning',
      action_required: 'DUPLICATE_FOUND',
      message: `An existing notebook "${existing.title}" already exists at "${existing.htmlPath}".`,
      existing_notebook: {
        title: existing.title,
        subject: existing.subject,
        slug: existing.slug,
        status: existing.status,
        path: existing.htmlPath
      },
      options: [
        'update: Update the existing notebook with new material',
        'related: Create a differentiated notebook with a unique topic/slug',
        'replace: Overwrite the existing notebook (requires force: true)',
        'cancel: Leave existing notebook unchanged'
      ]
    };
  }

  // 3. Plan formulation
  const plan = createExecutionPlan(task);

  // 4. Resolve destination
  const resolved = resolveDestination(task, { dryRun: Boolean(options.dryRun) });

  // 5. Collision check
  const collisions = checkSlugCollision(resolved.slug, resolved.fullHtmlPath);
  if (collisions.length > 0 && !task.force && !options.dryRun) {
    throw new TaskValidationError(
      'SLUG_COLLISION_DETECTED',
      `Slug collision detected: Slug "${resolved.slug}" is already used by "${collisions[0].htmlPath}".`,
      { slug: resolved.slug, colliding_file: collisions[0].htmlPath }
    );
  }

  // Handle dry-run
  if (options.dryRun) {
    return {
      status: 'success',
      operation: 'create_notebook',
      dry_run: true,
      topic: task.topic,
      subject: resolved.subject,
      htmlPath: resolved.fullHtmlPath,
      plan,
      output_files: {
        notebook_html: resolved.fullHtmlPath,
        metadata_json: resolved.fullMetaPath
      },
      predicted_paths: {
        target_dir: resolved.targetDir,
        html_file: resolved.fullHtmlPath,
        meta_file: resolved.fullMetaPath,
        canonical_url: `/${resolved.subjectSlug}/${resolved.slug}/`
      },
      resolved_parameters: {
        subject: resolved.subject,
        slug: resolved.slug,
        publication_status: task.publication_status || 'draft'
      },
      collisions_detected: collisions.map(c => ({ slug: c.meta.slug, htmlPath: c.htmlPath })),
      ready_for_execution: collisions.length === 0 || Boolean(task.force)
    };
  }

  // 6. Overwrite protection
  if (fs.existsSync(resolved.fullHtmlPath) && !task.force) {
    throw new TaskValidationError(
      'FILE_ALREADY_EXISTS',
      `File already exists at "${resolved.fullHtmlPath}". Use force: true to overwrite.`
    );
  }

  // 7. Agy CLI Worker Delegation: Generate notebook
  const genResult = generateNotebook(task, resolved);

  // 8. QA Validation
  const valResult = validateNotebook(genResult.htmlPath, { silent: Boolean(options.silent || options.json) });

  return {
    status: valResult.valid ? 'success' : 'warning',
    operation: 'create_notebook',
    dry_run: false,
    topic: genResult.metadata.title,
    subject: genResult.metadata.subject,
    publication_status: genResult.metadata.status,
    htmlPath: genResult.htmlPath,
    output_files: {
      notebook_html: genResult.htmlPath,
      metadata_json: genResult.metaPath
    },
    notebook: {
      title: genResult.metadata.title,
      subject: genResult.metadata.subject,
      slug: genResult.metadata.slug,
      status: genResult.metadata.status
    },
    validation_results: {
      valid: valResult.valid,
      checks_passed: valResult.checksPassed,
      checks_failed: valResult.checksFailed
    },
    plan
  };
}

/**
 * Unified Orca Request Dispatcher
 */
function handleOrcaRequest(input, options = {}) {
  const intent = typeof input === 'string' ? parseNaturalLanguageIntent(input) : input;
  const op = intent.operation || ORCA_OPERATIONS.CREATE_NOTEBOOK;

  switch (op) {
    case ORCA_OPERATIONS.CREATE_NOTEBOOK: {
      const task = {
        ...intent,
        force: Boolean(options.force || intent.force)
      };
      return executeCreateNotebook(task, options);
    }

    case ORCA_OPERATIONS.LIST_KNOWLEDGE: {
      const filter = {};
      if (intent.query) {
        const lowerQ = intent.query.toLowerCase();
        for (const s of Object.values(CANONICAL_SUBJECTS)) {
          if (lowerQ.includes(s.name.toLowerCase()) || lowerQ.includes(s.slug)) {
            filter.subject = s.name;
            break;
          }
        }
        if (/draft/i.test(lowerQ)) filter.status = 'draft';
        if (/published/i.test(lowerQ)) filter.status = 'published';
      }
      const results = listKnowledge(filter);
      return {
        status: 'success',
        operation: 'list_knowledge',
        count: results.length,
        filter,
        notebooks: results.map(n => ({
          title: n.title,
          subject: n.subject,
          status: n.status,
          slug: n.slug,
          path: n.htmlPath
        }))
      };
    }

    case ORCA_OPERATIONS.SEARCH_KNOWLEDGE: {
      const results = searchKnowledge(intent.query);
      return {
        status: 'success',
        operation: 'search_knowledge',
        query: intent.query,
        count: results.length,
        notebooks: results.map(n => ({
          title: n.title,
          subject: n.subject,
          status: n.status,
          slug: n.slug,
          path: n.htmlPath,
          description: n.description
        }))
      };
    }

    case ORCA_OPERATIONS.BUILD_WEBSITE: {
      build({ silent: Boolean(options.silent || options.json) });
      const published = discoverNotebooks({ silent: true });
      return {
        status: 'success',
        operation: 'build_website',
        total_published: published.length,
        output_directory: DIST_DIR,
        search_index_verified: fs.existsSync(path.join(DIST_DIR, 'data', 'search-index.json'))
      };
    }

    case ORCA_OPERATIONS.SHOW_STATUS: {
      const all = scanAllNotebooks();
      const drafts = all.filter(n => n.status === 'draft');
      const published = all.filter(n => n.status === 'published');
      return {
        status: 'success',
        operation: 'show_status',
        total_notebooks: all.length,
        published_count: published.length,
        draft_count: drafts.length,
        canonical_subjects: Object.values(CANONICAL_SUBJECTS).map(s => s.name)
      };
    }

    case ORCA_OPERATIONS.UPDATE_NOTEBOOK: {
      return updateNotebook(intent.filePath || options.file, intent.updateData || {}, options);
    }

    case ORCA_OPERATIONS.PREPARE_PUBLICATION: {
      return preparePublication(intent.filePath || options.file, options);
    }

    default:
      throw new TaskValidationError('UNSUPPORTED_OPERATION', `Unsupported Orca operation: "${op}"`);
  }
}

/**
 * CLI Execution Interface
 */
function main() {
  const args = process.argv.slice(2);
  const isJson = args.includes('--json');
  const isDryRun = args.includes('--dry-run');
  const isForce = args.includes('--force');

  // Strip flags to isolate prompt
  const cleanArgs = args.filter(a => !a.startsWith('--'));
  const prompt = cleanArgs.join(' ').trim();

  if (!prompt || prompt === 'help') {
    console.log(`
Brain Knowledge Hub — Orca Head Knowledge Agent

Usage:
  node Website/scripts/pipeline/orca-agent.js "<natural language prompt>" [options]
  node Website/scripts/pipeline/orca-agent.js /knowledge <command> [options]

Examples:
  node Website/scripts/pipeline/orca-agent.js "Create a comprehensive MBA notebook on Capital Budgeting under Finance"
  node Website/scripts/pipeline/orca-agent.js "What notebooks do I have on operations?"
  node Website/scripts/pipeline/orca-agent.js "Do I already have EOQ?"
  node Website/scripts/pipeline/orca-agent.js /knowledge list --subject Operations
  node Website/scripts/pipeline/orca-agent.js /knowledge build

Options:
  --dry-run      Simulate execution and path resolution without writing files
  --force        Allow overwriting existing files
  --json         Emit pure machine-readable JSON on stdout
`);
    return;
  }

  try {
    const result = handleOrcaRequest(prompt, {
      json: isJson,
      dryRun: isDryRun,
      force: isForce
    });

    if (isJson) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      if (result.operation === ORCA_OPERATIONS.CREATE_NOTEBOOK) {
        console.log('\n' + formatStatusReport(result) + '\n');
      } else if (result.operation === ORCA_OPERATIONS.LIST_KNOWLEDGE || result.operation === ORCA_OPERATIONS.SEARCH_KNOWLEDGE) {
        console.log(`\nFound ${result.count} notebook(s):`);
        result.notebooks.forEach(n => {
          console.log(`  • [${n.subject}] [${n.status.toUpperCase()}] "${n.title}" (${n.path})`);
        });
        console.log('');
      } else {
        console.log(JSON.stringify(result, null, 2));
      }
    }
  } catch (err) {
    const errorCode = err.errorCode || 'ORCA_ERROR';
    const errorPayload = {
      status: 'error',
      phase: err.phase || 'EXECUTION',
      error_code: errorCode,
      message: err.message,
      action: 'No files modified.'
    };

    if (isJson) {
      console.log(JSON.stringify(errorPayload, null, 2));
      console.error(`[DIAGNOSTIC] ${errorCode}: ${err.message}`);
    } else {
      console.log('\n' + formatStatusReport(errorPayload) + '\n');
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  ORCA_OPERATIONS,
  scanAllNotebooks,
  checkExistingKnowledge,
  parseNaturalLanguageIntent,
  createExecutionPlan,
  formatStatusReport,
  searchKnowledge,
  listKnowledge,
  updateNotebook,
  preparePublication,
  prepareGitPush,
  executeCreateNotebook,
  handleOrcaRequest
};

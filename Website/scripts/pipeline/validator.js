/**
 * Brain Knowledge Hub — Automated QA Notebook Validator
 * Validates notebook HTML, metadata schema, link integrity, and draft safety.
 */
const fs = require('fs');
const path = require('path');
const { CANONICAL_SUBJECTS } = require('./resolver');
const { build } = require('../build');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const DIST_DIR = path.join(ROOT_DIR, 'Website', 'dist');

function validateNotebook(htmlFilePath, options = {}) {
  const results = {
    valid: true,
    htmlPath: htmlFilePath,
    checksPassed: 0,
    checksFailed: 0,
    warnings: [],
    errors: [],
    details: []
  };

  function record(pass, name, message) {
    if (pass) {
      results.checksPassed++;
      results.details.push({ pass: true, name, message });
    } else {
      results.valid = false;
      results.checksFailed++;
      results.errors.push(`[${name}] ${message}`);
      results.details.push({ pass: false, name, message });
    }
  }

  // 1. Check file existence
  if (!fs.existsSync(htmlFilePath)) {
    record(false, 'File Existence', `File does not exist at "${htmlFilePath}"`);
    return results;
  }

  const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
  const filename = path.basename(htmlFilePath);
  const dir = path.dirname(htmlFilePath);

  // Companion metadata check
  const metaFilePath = path.join(dir, `${filename.replace(/\.html$/, '')}.meta.json`);
  let meta = null;

  if (!fs.existsSync(metaFilePath)) {
    record(false, 'Metadata Presence', `Companion metadata file "${metaFilePath}" does not exist.`);
  } else {
    try {
      meta = JSON.parse(fs.readFileSync(metaFilePath, 'utf8'));
      record(true, 'Metadata Syntax', 'Companion .meta.json is valid JSON.');
    } catch (e) {
      record(false, 'Metadata Syntax', `Failed to parse JSON: ${e.message}`);
    }
  }

  // 2. HTML Document Structure
  const hasDoctype = /<!DOCTYPE html>/i.test(htmlContent);
  const hasHtml = /<html[^>]*>/i.test(htmlContent);
  const hasHead = /<head[^>]*>[\s\S]*?<\/head>/i.test(htmlContent);
  const hasBody = /<body[^>]*>[\s\S]*?<\/body>/i.test(htmlContent);
  const hasViewport = /<meta[^>]*name=["']viewport["'][^>]*>/i.test(htmlContent);

  record(hasDoctype && hasHtml && hasHead && hasBody, 'HTML Structure', 'Contains standard DOCTYPE, html, head, and body tags.');
  record(hasViewport, 'Responsive Viewport', 'Contains responsive viewport meta tag.');

  // 3. Metadata Schema Compliance
  if (meta) {
    const hasRequired = meta.title && meta.slug && meta.subject && meta.file;
    record(Boolean(hasRequired), 'Required Metadata Fields', 'Contains title, slug, subject, and file fields.');

    // Valid canonical subject
    const subjectValid = Object.values(CANONICAL_SUBJECTS).some(s => s.name === meta.subject || s.folder === meta.subject);
    record(subjectValid, 'Canonical Subject', `Subject "${meta.subject}" is a valid canonical subject.`);

    // Lowercase slug format
    const slugValid = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(meta.slug);
    record(slugValid, 'URL-Safe Slug', `Slug "${meta.slug}" is strictly lowercase alphanumeric with hyphens.`);

    // Title and description quality
    record(Boolean(meta.title && meta.title.length >= 3), 'Title Quality', 'Title is descriptive and non-empty.');
    record(Boolean(meta.description && meta.description.length >= 10), 'Description Quality', 'Description provides meaningful executive summary.');

    // Status verification
    const statusValid = ['draft', 'published', 'archived'].includes(meta.status || 'draft');
    record(statusValid, 'Status Field', `Status "${meta.status}" is valid.`);
  }

  // 4. Correct Subject Directory Location
  const relPath = path.relative(ROOT_DIR, htmlFilePath);
  const topFolder = relPath.split(path.sep)[0];
  const allowedRoots = Object.values(CANONICAL_SUBJECTS).map(s => s.folder);
  // Root files like ERP_Exam_Notebook.html are permitted if in root
  const inValidSubjectFolder = allowedRoots.includes(topFolder) || relPath.indexOf(path.sep) === -1;
  record(inValidSubjectFolder, 'Folder Location', `Notebook is located within canonical structure ("${topFolder}").`);

  // 5. Internal Navigation & Anchor Integrity
  const navBlocks = htmlContent.match(/<nav[^>]*id=["'](?:navLinks|sidebarNav)["'][^>]*>[\s\S]*?<\/nav>/gi) || [];
  let brokenAnchors = 0;
  for (const block of navBlocks) {
    const linkMatches = block.matchAll(/href="#([^"]+)"/gi);
    for (const match of linkMatches) {
      const targetId = match[1];
      const exists = new RegExp(`id=["']${targetId}["']`, 'i').test(htmlContent);
      if (!exists) {
        brokenAnchors++;
        results.warnings.push(`Nav link "#${targetId}" does not match any section id.`);
      }
    }
  }
  record(brokenAnchors === 0, 'Internal Anchors', 'All navigation sidebar links match valid section IDs.');

  // 6. Required UI Components
  const hasSheet = /class=["'][^"']*sheet[^"']*["']/i.test(htmlContent);
  const hasSidebar = /id=["']sidebar["']|class=["'][^"']*side[^"']*["']/i.test(htmlContent);
  const hasProgress = /id=["']progressBar["']|class=["'][^"']*bar[^"']*["']/i.test(htmlContent);
  record(hasSheet && hasSidebar && hasProgress, 'UI Components', 'Contains standard notebook binder components (sheet, sidebar, progress bar).');

  // 7. Draft Protection Check
  if (meta && meta.status === 'draft') {
    // Run build and verify that this draft note is NOT in dist/
    try {
      build({ silent: Boolean(options.silent) });
      const distSearchPath = path.join(DIST_DIR, 'data', 'search-index.json');
      if (fs.existsSync(distSearchPath)) {
        const searchData = JSON.parse(fs.readFileSync(distSearchPath, 'utf8'));
        const inSearch = searchData.some(item => item.slug === meta.slug);
        record(!inSearch, 'Draft Search Isolation', `Draft notebook "${meta.slug}" is strictly omitted from search-index.json.`);
      }

      const distNotebookPath = path.join(DIST_DIR, meta.subject.toLowerCase(), meta.slug, 'index.html');
      record(!fs.existsSync(distNotebookPath), 'Draft Output Isolation', `Draft notebook "${meta.slug}" is strictly omitted from dist/ output.`);
    } catch (e) {
      record(false, 'Build Execution', `Website build failed during draft check: ${e.message}`);
    }
  }

  return results;
}

module.exports = {
  validateNotebook
};

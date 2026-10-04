/**
 * Brain Knowledge Hub — Notebook Publication & Promotion Controller
 * Validates draft notebooks and safely promotes them to published status.
 */
const fs = require('fs');
const path = require('path');
const { validateNotebook } = require('./validator');
const { build } = require('../build');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const DIST_DIR = path.join(ROOT_DIR, 'Website', 'dist');

function promoteNotebook(htmlFilePath, options = {}) {
  const dir = path.dirname(htmlFilePath);
  const filename = path.basename(htmlFilePath);
  const metaFilePath = path.join(dir, `${filename.replace(/\.html$/, '')}.meta.json`);

  if (!fs.existsSync(metaFilePath)) {
    throw new Error(`Companion metadata file "${metaFilePath}" not found.`);
  }

  // 1. Run full validation suite first
  const valResult = validateNotebook(htmlFilePath, { silent: Boolean(options.silent) });
  if (!valResult.valid) {
    const errorMsg = valResult.errors.join('; ');
    throw new Error(`Cannot promote notebook — validation failed: ${errorMsg}`);
  }

  // 2. Read metadata and update status
  const meta = JSON.parse(fs.readFileSync(metaFilePath, 'utf8'));
  const prevStatus = meta.status;
  meta.status = 'published';
  meta.updated = new Date().toISOString().split('T')[0];
  meta.updatedAt = meta.updated;

  fs.writeFileSync(metaFilePath, JSON.stringify(meta, null, 2), 'utf8');

  // 3. Rebuild website
  try {
    build({ silent: Boolean(options.silent) });
  } catch (e) {
    // Revert status on build failure
    meta.status = prevStatus;
    fs.writeFileSync(metaFilePath, JSON.stringify(meta, null, 2), 'utf8');
    throw new Error(`Website build failed during promotion: ${e.message}`);
  }

  // 4. Verify canonical output and search indexing
  const publishedSub = meta.subject.toLowerCase();
  const publishedSlug = meta.slug;
  const canonicalPath = path.join(DIST_DIR, publishedSub, publishedSlug, 'index.html');
  const searchIndexPath = path.join(DIST_DIR, 'data', 'search-index.json');

  if (!fs.existsSync(canonicalPath)) {
    throw new Error(`Promotion anomaly: Canonical output file was not generated at "${canonicalPath}".`);
  }

  const searchData = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
  const indexed = searchData.some(item => item.slug === publishedSlug);

  return {
    success: true,
    htmlFilePath,
    metaFilePath,
    title: meta.title,
    subject: meta.subject,
    slug: meta.slug,
    canonicalUrl: `/${publishedSub}/${publishedSlug}/`,
    canonicalPath,
    indexedInSearch: indexed
  };
}

module.exports = {
  promoteNotebook
};

/**
 * Brain Knowledge Hub — Destination & Subject Resolver
 * Resolves canonical subject folders, normalizes slugs, and prevents collisions.
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../..');

// Canonical 9 Subjects defined in RULE.md
const CANONICAL_SUBJECTS = {
  'ai': { name: 'AI', folder: 'AI', slug: 'ai' },
  'analytics': { name: 'Analytics', folder: 'Analytics', slug: 'analytics' },
  'business': { name: 'Business', folder: 'Business', slug: 'business' },
  'finance': { name: 'Finance', folder: 'Finance', slug: 'finance' },
  'general': { name: 'General', folder: 'General', slug: 'general' },
  'management': { name: 'Management', folder: 'Management', slug: 'management' },
  'operations': { name: 'Operations', folder: 'Operations', slug: 'operations' },
  'placement_interview': { name: 'Placement_Interview', folder: 'Placement_Interview', slug: 'placement-interview' },
  'placement-interview': { name: 'Placement_Interview', folder: 'Placement_Interview', slug: 'placement-interview' },
  'technology': { name: 'Technology', folder: 'Technology', slug: 'technology' }
};

// Aliases mapping common subdomains to canonical subjects
const SUBJECT_ALIASES = {
  'cost accounting': 'finance',
  'cost_accounting': 'finance',
  'accounting': 'finance',
  'corporate finance': 'finance',
  'supply chain': 'operations',
  'supply_chain': 'operations',
  'inventory': 'operations',
  'logistics': 'operations',
  'production': 'operations',
  'machine learning': 'ai',
  'deep learning': 'ai',
  'llm': 'ai',
  'nlp': 'ai',
  'statistics': 'analytics',
  'forecasting': 'analytics',
  'power bi': 'analytics',
  'strategy': 'business',
  'consulting': 'business',
  'product': 'business',
  'leadership': 'management',
  'interview': 'placement_interview',
  'cloud': 'technology',
  'software': 'technology',
  'devops': 'technology'
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Resolves destination subject directory and file paths
 */
function resolveDestination(task, options = {}) {
  if (!task.topic) {
    throw new Error('Task must specify a "topic".');
  }

  // Determine canonical subject
  let rawSubject = (task.subject || '').trim().toLowerCase();
  if (!rawSubject && task.category) {
    rawSubject = SUBJECT_ALIASES[task.category.toLowerCase()] || '';
  }

  if (SUBJECT_ALIASES[rawSubject]) {
    rawSubject = SUBJECT_ALIASES[rawSubject];
  }

  const subjectInfo = CANONICAL_SUBJECTS[rawSubject];
  if (!subjectInfo) {
    const validNames = Object.values(CANONICAL_SUBJECTS).map(s => s.name).filter((v, i, a) => a.indexOf(v) === i);
    throw new Error(`Invalid subject "${task.subject}". Must be one of: ${validNames.join(', ')}`);
  }

  // Base subject folder
  const subjectDirPath = path.join(ROOT_DIR, subjectInfo.folder);
  if (!options.dryRun && !fs.existsSync(subjectDirPath)) {
    fs.mkdirSync(subjectDirPath, { recursive: true });
  }

  // Optional subfolder (e.g. Operations/Inventory or Finance/Cost_Accounting)
  let targetDirPath = subjectDirPath;
  if (task.destination_subfolder) {
    const safeSub = task.destination_subfolder.replace(/[^a-zA-Z0-9_\-]/g, '_');
    targetDirPath = path.join(subjectDirPath, safeSub);
  }

  // Determine slug
  const slug = slugify(task.slug || task.topic);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Invalid slug "${slug}". Slugs must be strictly lowercase, alphanumeric with single hyphens.`);
  }

  // Determine filename
  let filename = task.filename;
  if (!filename) {
    const formattedTopic = task.topic.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
    filename = `${formattedTopic}_Notebook.html`;
  }
  if (!filename.endsWith('.html')) {
    filename += '.html';
  }

  const metaFilename = filename.replace(/\.html$/, '.meta.json');
  const fullHtmlPath = path.join(targetDirPath, filename);
  const fullMetaPath = path.join(targetDirPath, metaFilename);

  return {
    subject: subjectInfo.name,
    subjectFolder: subjectInfo.folder,
    subjectSlug: subjectInfo.slug,
    targetDir: targetDirPath,
    filename,
    metaFilename,
    fullHtmlPath,
    fullMetaPath,
    slug
  };
}

/**
 * Scans all existing notebooks and metadata to detect slug collision
 */
function checkSlugCollision(slug, targetHtmlPath) {
  const collisions = [];

  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        if (['Website', '_templates', '.git', 'node_modules', '_research', '_drafts'].includes(item.name)) continue;
        if (item.name.startsWith('_draft') || item.name.startsWith('_research')) continue;
        scanDir(full);
      } else if (item.isFile() && item.name.endsWith('.meta.json')) {
        try {
          const meta = JSON.parse(fs.readFileSync(full, 'utf8'));
          if (meta.slug === slug) {
            const companionHtml = full.replace(/\.meta\.json$/, '.html');
            if (path.resolve(companionHtml) !== path.resolve(targetHtmlPath)) {
              collisions.push({ metaPath: full, htmlPath: companionHtml, meta });
            }
          }
        } catch (e) {}
      }
    }
  }

  scanDir(ROOT_DIR);
  return collisions;
}

module.exports = {
  CANONICAL_SUBJECTS,
  SUBJECT_ALIASES,
  slugify,
  resolveDestination,
  checkSlugCollision
};

/**
 * Brain Knowledge Hub — Static Site Generator & Publishing Pipeline
 * Zero external runtime dependencies. Deterministic, fast, and safe.
 */
const fs = require('fs');
const path = require('path');

// Configuration Paths
const ROOT_DIR = path.resolve(__dirname, '../..');
const WEBSITE_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(WEBSITE_DIR, 'dist');
const SRC_DIR = path.join(WEBSITE_DIR, 'src');
const TEMPLATES_DIR = path.join(SRC_DIR, 'templates');

// Subject Taxonomy & Definitions
const SUBJECTS = [
  {
    id: 'operations',
    name: 'Operations',
    folder: 'Operations',
    slug: 'operations',
    description: 'Supply chain management, ERP architectures, Theory of Constraints, logistics, and operational modeling.'
  },
  {
    id: 'ai',
    name: 'AI',
    folder: 'AI',
    slug: 'ai',
    description: 'Artificial intelligence, transformer architectures, LLMs, prompt engineering, and autonomous agent systems.'
  },
  {
    id: 'analytics',
    name: 'Analytics',
    folder: 'Analytics',
    slug: 'analytics',
    description: 'Predictive forecasting, statistical inference, time series modeling, Power BI, and data engineering.'
  },
  {
    id: 'business',
    name: 'Business',
    folder: 'Business',
    slug: 'business',
    description: 'Consulting case frameworks, market entry, product management, GTM metrics, and business analytics.'
  },
  {
    id: 'finance',
    name: 'Finance',
    folder: 'Finance',
    slug: 'finance',
    description: 'Corporate valuation, financial risk management, options & derivatives, and investment frameworks.'
  },
  {
    id: 'general',
    name: 'General',
    folder: 'General',
    slug: 'general',
    description: 'Cross-functional academic foundations, productivity toolkits, research methodology, and study architectures.'
  },
  {
    id: 'management',
    name: 'Management',
    folder: 'Management',
    slug: 'management',
    description: 'Strategic leadership, organizational design, process excellence, and change management frameworks.'
  },
  {
    id: 'placement-interview',
    name: 'Placement & Interview',
    folder: 'Placement_Interview',
    slug: 'placement-interview',
    description: 'Rigorous interview preparation library: resume defense, case banks, formulas, cheatsheets, and concept guides.'
  },
  {
    id: 'technology',
    name: 'Technology',
    folder: 'Technology',
    slug: 'technology',
    description: 'Cloud systems, Docker containerization, MLOps pipelines, FastAPI, React, and software engineering.'
  }
];

// Helper: Ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Helper: Clean directory
function cleanDist() {
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  ensureDir(DIST_DIR);
  ensureDir(path.join(DIST_DIR, 'assets'));
  ensureDir(path.join(DIST_DIR, 'data'));
}

// Helper: Convert text to clean URL slug
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// Helper: Extract plain text snippets from HTML
function stripHtml(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Helper: Extract HTML tags with regex
function extractTagContent(html, tagName) {
  const match = html.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
  return match ? match[1].trim() : '';
}

function extractMetaContent(html, metaName) {
  const match = html.match(new RegExp(`<meta[^>]*name=["']${metaName}["'][^>]*content=["']([^"']*)["']`, 'i')) ||
                html.match(new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*name=["']${metaName}["']`, 'i'));
  return match ? match[1].trim() : '';
}

// Discovery Engine: Scan for HTML notebooks across subject folders & root
function discoverNotebooks(options = {}) {
  const silent = Boolean(options && options.silent);
  const log = silent ? () => {} : (options && options.toStderr ? console.error : console.log);
  const discovered = [];
  const visitedFiles = new Set();

  function scanFolder(dirPath, folderSubject = null) {
    if (!fs.existsSync(dirPath)) return;
    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dirPath, item.name);
      
      // Skip Website, _templates, .git, node_modules, _research, and draft directories
      if (item.isDirectory()) {
        if (['Website', '_templates', '.git', 'node_modules', '_research', '_drafts'].includes(item.name)) continue;
        if (item.name.startsWith('_draft') || item.name.startsWith('_research')) continue;
        scanFolder(fullPath, folderSubject);
        continue;
      }

      if (item.isFile() && item.name.endsWith('.html')) {
        if (item.name.startsWith('_')) continue; // Skip draft / template files
        if (visitedFiles.has(fullPath)) continue;
        visitedFiles.add(fullPath);

        const notebook = processNotebookFile(fullPath, folderSubject, { log });
        if (notebook) {
          discovered.push(notebook);
        }
      }
    }
  }

  // 1. Scan each designated subject folder
  for (const sub of SUBJECTS) {
    const subPath = path.join(ROOT_DIR, sub.folder);
    scanFolder(subPath, sub);
  }

  // 2. Scan root directory for notebooks (like ERP_Exam_Notebook.html)
  const rootFiles = fs.readdirSync(ROOT_DIR, { withFileTypes: true });
  for (const item of rootFiles) {
    if (item.isFile() && item.name.endsWith('.html') && !item.name.startsWith('_')) {
      const fullPath = path.join(ROOT_DIR, item.name);
      if (!visitedFiles.has(fullPath)) {
        visitedFiles.add(fullPath);
        const notebook = processNotebookFile(fullPath, null, { log });
        if (notebook) {
          discovered.push(notebook);
        }
      }
    }
  }

  return discovered;
}

// Extract metadata and prepare notebook record
function processNotebookFile(filePath, inheritedSubject, options = {}) {
  const log = (options && options.log) || console.log;
  const content = fs.readFileSync(filePath, 'utf8');
  const filename = path.basename(filePath);
  const dir = path.dirname(filePath);

  // Check for companion metadata: <filename>.meta.json
  const companionMetaPath = path.join(dir, `${filename.replace(/\.html$/, '')}.meta.json`);
  const altMetaPath = path.join(ROOT_DIR, `${filename.replace(/\.html$/, '')}.meta.json`);
  
  let meta = {};
  if (fs.existsSync(companionMetaPath)) {
    try {
      meta = JSON.parse(fs.readFileSync(companionMetaPath, 'utf8'));
    } catch (e) {
      console.warn(`[WARN] Failed to parse meta json at ${companionMetaPath}:`, e.message);
    }
  } else if (fs.existsSync(altMetaPath)) {
    try {
      meta = JSON.parse(fs.readFileSync(altMetaPath, 'utf8'));
    } catch (e) {
      console.warn(`[WARN] Failed to parse meta json at ${altMetaPath}:`, e.message);
    }
  }

  // Check draft and archive exclusion
  const status = meta.status || 'published';
  if (['draft', 'archived'].includes(status.toLowerCase())) {
    log(`[${status.toUpperCase()}] Skipping ${status.toLowerCase()} notebook: ${filename}`);
    return null;
  }

  // Determine Title
  let rawTitle = meta.title || extractTagContent(content, 'title') || filename.replace(/\.html$/, '').replace(/[_-]/g, ' ');
  // Clean trailing branding like " · Complete FAQ Master Notebook"
  const title = rawTitle.replace(/\s*[·|-]\s*Complete FAQ.*$/i, '').trim();

  // Determine Description
  const description = meta.description || extractMetaContent(content, 'description') || 'Comprehensive academic study notebook and analytical framework.';

  // Determine Subject
  let subjectName = meta.subject;
  if (!subjectName && inheritedSubject) {
    subjectName = inheritedSubject.name;
  }
  if (!subjectName) {
    // Check if filename indicates subject (e.g. ERP -> Operations)
    if (/erp|supply|inventory|manufacturing|operations/i.test(filename)) {
      subjectName = 'Operations';
    } else {
      subjectName = 'General';
    }
  }

  const subjectObj = SUBJECTS.find(s => s.name.toLowerCase() === subjectName.toLowerCase() || s.id === subjectName.toLowerCase()) || SUBJECTS[0];

  // Determine Slug (Guaranteed lowercase, URL-safe, no spaces)
  const slug = slugify(meta.slug || title || filename.replace(/\.html$/, ''));

  // Extract Tags
  let tags = meta.tags || [];
  if (!tags.length) {
    const kw = extractMetaContent(content, 'keywords');
    if (kw) tags = kw.split(',').map(s => s.trim()).filter(Boolean);
  }
  if (!tags.length) tags = [subjectObj.name, 'Notebook'];

  // Extract Section Headings for search index
  const headings = [];
  const headingMatches = content.matchAll(/<h[123][^>]*>([\s\S]*?)<\/h[123]>/gi);
  for (const m of headingMatches) {
    const text = stripHtml(m[1]);
    if (text.length > 2 && !headings.includes(text)) {
      headings.push(text);
    }
  }

  // Read time & modules
  const readTime = meta.readTimeMinutes || 35;
  const questionsCount = meta.questionsCount || headings.filter(h => /^\d+\./.test(h)).length || 10;
  const source = meta.source || 'curriculum';
  const version = meta.version || '1.0.0';
  const updatedAt = meta.updated || meta.updatedAt || '2026-10-01';

  return {
    title,
    rawTitle,
    slug,
    subject: subjectObj.name,
    subjectSlug: subjectObj.slug,
    category: meta.category || 'General Study',
    description,
    filePath,
    filename,
    tags,
    status,
    source,
    version,
    featured: Boolean(meta.featured),
    updatedAt,
    readTime,
    questionsCount,
    headings,
    contentSnippet: stripHtml(content).slice(0, 3000)
  };
}

// Simple Template Engine
function renderTemplate(templateString, data) {
  let output = templateString;

  // 1. Process Conditionals: {{#prop}}...{{/prop}} and {{^prop}}...{{/prop}}
  output = output.replace(/\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (match, key, inner) => {
    const val = data[key];
    if (Array.isArray(val)) {
      return val.map(item => {
        if (typeof item === 'object') {
          return renderTemplate(inner, { ...data, ...item });
        }
        return inner.replace(/\{\{\.\}\}/g, item);
      }).join('');
    }
    return val ? renderTemplate(inner, data) : '';
  });

  output = output.replace(/\{\{\^(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (match, key, inner) => {
    const val = data[key];
    return (!val || (Array.isArray(val) && val.length === 0)) ? renderTemplate(inner, data) : '';
  });

  // 2. Process variable placeholders: {{var}}
  output = output.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] !== undefined ? data[key] : '';
  });

  return output;
}

// Injects the discrete Portal Return Bar at top of published notebook
function injectPortalBar(htmlContent, notebook, basePath = '../..') {
  const portalBarHtml = `
<!-- BRAIN KNOWLEDGE HUB PORTAL NAVIGATION BAR -->
<div id="hub-portal-bar" style="background:#fcf8ee;border-bottom:2px solid #d6e3ef;padding:6px 16px;font-family:system-ui,-apple-system,'Source Sans 3',sans-serif;font-size:13px;display:flex;align-items:center;justify-content:space-between;color:#5a5d66;position:sticky;top:0;z-index:99999;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
  <div style="display:flex;align-items:center;gap:12px;">
    <a href="${basePath}/${notebook.subjectSlug}/" style="color:#1d3c8c;text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:4px;">
      &larr; Return to ${notebook.subject}
    </a>
    <span style="color:#c9bfa8;">&bull;</span>
    <a href="${basePath}/" style="color:#5a5d66;text-decoration:none;">
      Library Catalog
    </a>
  </div>
  <div style="font-weight:600;color:#1d3c8c;display:flex;align-items:center;gap:8px;">
    <span>${notebook.title}</span>
    <span style="text-transform:uppercase;font-size:10px;letter-spacing:0.08em;background:#e9e1cf;color:#1d3c8c;padding:2px 6px;border-radius:4px;font-weight:700;">${notebook.subject}</span>
  </div>
</div>
`;

  // Insert immediately after <body> or <body ...>
  if (/<body[^>]*>/i.test(htmlContent)) {
    return htmlContent.replace(/(<body[^>]*>)/i, `$1\n${portalBarHtml}`);
  }
  return portalBarHtml + htmlContent;
}

// Build Pipeline Execution
function build(options = {}) {
  const silent = Boolean(options && options.silent);
  const log = silent ? () => {} : (options && options.toStderr ? console.error : console.log);

  log('----------------------------------------------------');
  log('Brain Knowledge Hub — Publishing Pipeline');
  log('----------------------------------------------------');
  const startTime = Date.now();

  // 1. Clean output directory
  cleanDist();
  log('[1/6] Cleaned and initialized dist/ directory.');

  // 2. Discover notebooks
  const notebooks = discoverNotebooks(options);
  log(`[2/6] Discovered ${notebooks.length} eligible published notebook(s):`);
  notebooks.forEach(nb => {
    log(`      • [${nb.subject}] "${nb.title}" -> /${nb.subjectSlug}/${nb.slug}/`);
  });

  // 3. Load Templates
  const layoutTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'layout.html'), 'utf8');
  const homeTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'home.html'), 'utf8');
  const subjectTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'subject.html'), 'utf8');

  // 4. Publish Notebooks (Clean URLs: dist/{subject-slug}/{notebook-slug}/index.html)
  notebooks.forEach(nb => {
    const notebookTargetDir = path.join(DIST_DIR, nb.subjectSlug, nb.slug);
    ensureDir(notebookTargetDir);

    const sourceContent = fs.readFileSync(nb.filePath, 'utf8');
    const enrichedContent = injectPortalBar(sourceContent, nb, '../..');
    
    fs.writeFileSync(path.join(notebookTargetDir, 'index.html'), enrichedContent, 'utf8');
    nb.canonicalUrl = `/${nb.subjectSlug}/${nb.slug}/`;
  });
  log('[3/6] Rendered standalone HTML notebooks with clean URLs.');

  // 5. Generate Subject Catalog Pages (dist/{subject-slug}/index.html)
  SUBJECTS.forEach(sub => {
    const subTargetDir = path.join(DIST_DIR, sub.slug);
    ensureDir(subTargetDir);

    const subNotebooks = notebooks.filter(n => n.subjectSlug === sub.slug);
    
    const pageData = {
      basePath: '..',
      title: `${sub.name} Catalog`,
      description: sub.description,
      subjectName: sub.name,
      subjectDescription: sub.description,
      hasNotebooks: subNotebooks.length > 0,
      notebookCount: subNotebooks.length,
      plural: subNotebooks.length === 1 ? '' : 's',
      notebooks: subNotebooks.map(n => ({
        ...n,
        url: `/${n.subjectSlug}/${n.slug}/`
      })),
      activeHome: '',
      activeOperations: sub.slug === 'operations' ? 'active' : '',
      activeAnalytics: sub.slug === 'analytics' ? 'active' : '',
      activeAI: sub.slug === 'ai' ? 'active' : '',
      activeTechnology: sub.slug === 'technology' ? 'active' : '',
      activePlacement: sub.slug === 'placement-interview' ? 'active' : ''
    };

    const renderedContent = renderTemplate(subjectTemplate, pageData);
    const fullHtml = renderTemplate(layoutTemplate, {
      ...pageData,
      content: renderedContent
    });

    fs.writeFileSync(path.join(subTargetDir, 'index.html'), fullHtml, 'utf8');
  });
  log(`[4/6] Generated ${SUBJECTS.length} subject division catalog pages.`);

  // 6. Generate Homepage (dist/index.html)
  const featuredNotebook = notebooks.find(n => n.featured) || notebooks[0];
  const homeData = {
    basePath: '.',
    title: 'Personal Digital Academic Archive · Srivatsa',
    description: 'My personal intellectual repository — rigorous MBA study notebooks, architecture blueprints, and quantitative decision models by Srivatsa.',
    author: 'Srivatsa',
    totalSubjects: SUBJECTS.length,
    totalPublishedNotebooks: notebooks.length,
    totalStudyModules: notebooks.reduce((acc, n) => acc + (n.questionsCount || 0), 0) || 16,
    hasFeatured: Boolean(featuredNotebook),
    featuredTitle: featuredNotebook ? featuredNotebook.title : '',
    featuredSubject: featuredNotebook ? featuredNotebook.subject : '',
    featuredCategory: featuredNotebook ? featuredNotebook.category : '',
    featuredDescription: featuredNotebook ? featuredNotebook.description : '',
    featuredUrl: featuredNotebook ? `/${featuredNotebook.subjectSlug}/${featuredNotebook.slug}/` : '#',
    featuredTags: featuredNotebook ? featuredNotebook.tags : [],
    featuredReadTime: featuredNotebook ? `${featuredNotebook.readTime} min` : '45 min',
    featuredQuestions: featuredNotebook ? featuredNotebook.questionsCount : 18,
    subjects: SUBJECTS.map(s => {
      const count = notebooks.filter(n => n.subjectSlug === s.slug).length;
      return {
        name: s.name,
        description: s.description,
        url: `/${s.slug}/`,
        countLabel: count > 0 ? `${count} Notebook${count === 1 ? '' : 's'}` : 'Incubating',
        badgeClass: count > 0 ? 'subject-count-active' : 'subject-count-incubation',
        statusText: count > 0 ? `${count} published document${count === 1 ? '' : 's'}` : 'Curriculum in incubation'
      };
    }),
    activeHome: 'active',
    activeOperations: '',
    activeAnalytics: '',
    activeAI: '',
    activeTechnology: '',
    activePlacement: ''
  };

  const homeContent = renderTemplate(homeTemplate, homeData);
  const homeHtml = renderTemplate(layoutTemplate, {
    ...homeData,
    content: homeContent
  });
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), homeHtml, 'utf8');
  log('[5/6] Generated portal homepage.');

  // 7. Generate Search Index and Metadata Registry
  const searchIndex = notebooks.map(n => ({
    id: `${n.subjectSlug}-${n.slug}`,
    title: n.title,
    subject: n.subject,
    subjectSlug: n.subjectSlug,
    category: n.category,
    slug: n.slug,
    url: `/${n.subjectSlug}/${n.slug}/`,
    description: n.description,
    tags: n.tags,
    source: n.source,
    version: n.version,
    headings: n.headings,
    content: n.contentSnippet
  }));
  fs.writeFileSync(path.join(DIST_DIR, 'data', 'search-index.json'), JSON.stringify(searchIndex, null, 2), 'utf8');

  const notebooksRegistry = notebooks.map(n => ({
    title: n.title,
    slug: n.slug,
    subject: n.subject,
    subjectSlug: n.subjectSlug,
    category: n.category,
    description: n.description,
    url: `/${n.subjectSlug}/${n.slug}/`,
    tags: n.tags,
    source: n.source,
    version: n.version,
    updated: n.updatedAt,
    updatedAt: n.updatedAt,
    readTime: n.readTime,
    questionsCount: n.questionsCount
  }));
  fs.writeFileSync(path.join(DIST_DIR, 'data', 'notebooks.json'), JSON.stringify(notebooksRegistry, null, 2), 'utf8');

  // 8. Copy Assets
  fs.copyFileSync(path.join(SRC_DIR, 'styles', 'main.css'), path.join(DIST_DIR, 'assets', 'main.css'));
  fs.copyFileSync(path.join(SRC_DIR, 'client', 'search.js'), path.join(DIST_DIR, 'assets', 'search.js'));
  log('[6/6] Emitted search indexes and bundled assets.');

  const duration = Date.now() - startTime;
  log('----------------------------------------------------');
  log(`✔ Build completed successfully in ${duration}ms.`);
  log(`  Output directory: ${DIST_DIR}`);
  log('----------------------------------------------------');
}

// Execute build if run directly
if (require.main === module) {
  build();
}

module.exports = { build, discoverNotebooks, SUBJECTS };

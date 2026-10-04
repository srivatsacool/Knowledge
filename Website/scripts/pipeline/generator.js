/**
 * Brain Knowledge Hub — Notebook Content & Metadata Generator
 * Generates standalone academic HTML notebooks and companion metadata.
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const TEMPLATE_HTML_PATH = path.join(ROOT_DIR, '_templates', 'notebook-template.html');
const TEMPLATE_V2_HTML_PATH = path.join(ROOT_DIR, '_templates', 'v2', 'notebook-template-2.html');

/**
 * Escapes HTML entities
 */
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

/**
 * Formats a default section module if none provided
 */
function buildDefaultSections(task) {
  const topic = task.topic;
  return [
    {
      id: 'sec1',
      number: '01',
      title: `${topic} — Conceptual Overview & Foundations`,
      badge: 'Core Foundation',
      learningObjective: `Understand the foundational principles, core definitions, and operational objectives of ${topic}.`,
      targetMinutes: 15,
      contentHtml: `
        <p>
          <strong>${escapeHtml(topic)}</strong> represents a fundamental framework in contemporary academic theory and operational practice. 
          Its structured methodology establishes rigorous decision-making rules, minimizing total operational friction while optimizing resource allocation.
        </p>
        <div class="card">
          <h3>Essential Definition &amp; Core Axiom</h3>
          <p>
            The formal definition governs the systematic trade-off balance between opposing cost curves, capacity limits, and operational cycle times.
          </p>
        </div>
      `
    },
    {
      id: 'sec2',
      number: '02',
      title: 'Architectural Frameworks & Mathematical Models',
      badge: 'Mathematical Model',
      learningObjective: `Derive the underlying formulation, analyze governing constraints, and review structural blueprints.`,
      targetMinutes: 20,
      contentHtml: `
        <div class="blueprint">
          <h3>Analytical Formulation &amp; Blueprint</h3>
          <p>
            The mathematical formulation optimizes objective function criteria subject to deterministic demand and inventory replenishment constraints.
          </p>
        </div>
        <div class="sticky yellow">
          <strong>⚠️ Exam &amp; Application Note:</strong> Always evaluate sensitivity to parameter variation and boundary condition limits.
        </div>
      `
    },
    {
      id: 'sec3',
      number: '03',
      title: 'Applied Numerical Cases & Comprehensive Solutions',
      badge: 'Case Application',
      learningObjective: `Examine end-to-end worked numerical scenarios with verifiable step-by-step calculations.`,
      targetMinutes: 25,
      contentHtml: `
        <div class="card">
          <h3>Worked Scenario &amp; Sensitivity Analysis</h3>
          <p>
            Evaluate realistic industry inputs, solve step-by-step for key metrics, and formulate actionable recommendations.
          </p>
        </div>
      `
    }
  ];
}

/**
 * Generates the standalone HTML and metadata files
 */
function generateNotebook(task, resolved) {
  // Overwrite safety
  if (fs.existsSync(resolved.fullHtmlPath) && !task.force) {
    throw new Error(`File already exists at "${resolved.fullHtmlPath}". Use force: true to overwrite.`);
  }

  // Ensure target directory exists
  if (!fs.existsSync(resolved.targetDir)) {
    fs.mkdirSync(resolved.targetDir, { recursive: true });
  }

  const isV2 = task.template_version === '2.0.0' || task.templateVersion === '2.0.0';
  const targetTemplatePath = isV2 ? TEMPLATE_V2_HTML_PATH : TEMPLATE_HTML_PATH;

  // Load Base Template
  if (!fs.existsSync(targetTemplatePath)) {
    throw new Error(`Master notebook template not found at "${targetTemplatePath}".`);
  }
  let template = fs.readFileSync(targetTemplatePath, 'utf8');

  // Prepare sections
  const sections = (task.sections && task.sections.length) ? task.sections.slice() : buildDefaultSections(task);

  // Collect bibliographical sources
  const bibItems = [];
  if (task.source_urls) {
    task.source_urls.forEach(url => {
      bibItems.push(`<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(url)}</a></li>`);
    });
  }
  if (task.source_files) {
    task.source_files.forEach(file => {
      bibItems.push(`<li><code>${escapeHtml(file)}</code> (Source Document)</li>`);
    });
  }

  // Append research bibliography if sources provided and no bibliography section exists (Template 1.0)
  if (!isV2 && bibItems.length > 0) {
    const hasBib = sections.some(s => s.id === 'sec_references' || /references|citations|bibliography/i.test(s.title));
    if (!hasBib) {
      sections.push({
        id: `sec${sections.length + 1}`,
        number: sections.length + 1 < 10 ? `0${sections.length + 1}` : `${sections.length + 1}`,
        title: 'Academic References & Research Literature',
        badge: 'Citations',
        learningObjective: 'Examine source literature, foundational academic citations, and reference benchmarks.',
        targetMinutes: 10,
        contentHtml: `
          <div class="card">
            <h3>Verified Academic Citations &amp; Working Sources</h3>
            <ul style="padding-left: 20px; line-height: 1.8;">
              ${bibItems.join('\n')}
            </ul>
          </div>
        `
      });
    }
  }

  const title = task.title || `${task.topic} · Academic Master Study Notebook`;
  const description = task.description || `Comprehensive study notebook on ${task.topic} covering core theories, mathematical formulations, blueprints, and applied numerical models.`;
  const tags = task.tags || [resolved.subject, task.category || 'Academic', task.topic];
  const keywords = tags.join(', ');
  const author = task.author || 'Brain Knowledge Hub / AI Agent';

  if (isV2) {
    // Template 2.0 — Brain Hub Notebook OS (Paper Edition)
    const subtitle = task.subtitle || `MBA Academic Binder · Core Foundations &amp; Problem Sets`;
    const archetypeLabel = task.category || 'Study Notebook';

    const sidebarNavHtml = sections.map((sec, idx) => `
      <a href="#${sec.id}" class="${idx === 0 ? 'is-active' : ''}">
        <span class="nb-sidebar__chip"></span>
        <span class="nb-sidebar__label">${sec.number || `0${idx + 1}`}. ${escapeHtml(sec.title)}</span>
        <span class="nb-sidebar__ck"></span>
      </a>
    `).join('\n');

    const sectionsHtml = sections.map((sec, idx) => `
      <section class="nb-section" id="${sec.id}" data-title="${sec.number || `0${idx + 1}`}. ${escapeHtml(sec.title)}">
        <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">${sec.number || `0${idx + 1}`}</span> ${escapeHtml(sec.title)}</h2>
        
        <div class="nb-mod-status" data-mod-id="${sec.id}">
          <span class="nb-mod-status__prompt">Module Status:</span>
          <button class="nb-mod-status__btn" type="button" aria-label="Toggle module completion status">
            <span class="nb-mod-status__icon">□</span>
            <span class="nb-mod-status__text">Not started</span>
          </button>
        </div>
        
        ${sec.learningObjective ? `
        <div class="nb-sticky nb-sticky--blue">
          <div class="nb-sticky__title">💡 Key Learning Objective</div>
          <p>${escapeHtml(sec.learningObjective)}</p>
        </div>` : ''}

        ${sec.targetMinutes ? `
        <div class="nb-card" style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; margin: 8px 0 16px;">
          <span style="font-family: var(--font-hand); font-weight: 700; font-size: 1.1rem; color: var(--ink);">⏱ Target: ${sec.targetMinutes} min</span>
        </div>` : ''}

        ${sec.contentHtml || '<p>Content in preparation.</p>'}
      </section>
    `).join('\n');

    let citationsHtml = '';
    if (bibItems.length > 0) {
      citationsHtml = `
        <div class="nb-card" style="margin-top: 40px;">
          <div class="nb-tape"></div>
          <h3 style="margin-top: 0; font-family: var(--font-hand); font-size: 1.7rem; color: var(--ink);">📚 Academic References &amp; Grounding</h3>
          <ul style="padding-left: 20px; line-height: 1.8;">
            ${bibItems.join('\n')}
          </ul>
        </div>
      `;
    }

    template = template.replace(/{{TITLE}}/g, escapeHtml(title));
    template = template.replace(/{{SUBTITLE}}/g, escapeHtml(subtitle));
    template = template.replace(/{{DESCRIPTION}}/g, escapeHtml(description));
    template = template.replace(/{{KEYWORDS}}/g, escapeHtml(keywords));
    template = template.replace(/{{SUBJECT}}/g, escapeHtml(resolved.subject));
    template = template.replace(/{{ARCHETYPE_LABEL}}/g, escapeHtml(archetypeLabel));
    template = template.replace(/{{SIDEBAR_GROUPS}}/g, sidebarNavHtml);
    template = template.replace(/{{MODULE_CONTENT}}/g, sectionsHtml);
    template = template.replace(/{{SOURCE_CITATIONS}}/g, citationsHtml);

  } else {
    // Template 1.0 — Legacy Architecture
    const navHtml = sections.map((sec, idx) => `
      <a href="#${sec.id}" data-id="${sec.id}" class="${idx === 0 ? 'on' : ''}">
        <span class="chip"></span>
        <span class="t">${sec.number || `0${idx + 1}`}. ${escapeHtml(sec.title)}</span>
        <span class="ck"></span>
      </a>
    `).join('\n');

    const sheetHtml = sections.map((sec, idx) => `
      <section class="page ${idx === 0 ? 'on' : ''}" id="${sec.id}" data-title="${sec.number || `0${idx + 1}`}. ${escapeHtml(sec.title)}">
        <h${idx === 0 ? '1 class="title"' : '2 class="sec"'}>${escapeHtml(sec.title)}</h${idx === 0 ? '1' : '2'}>
        
        ${sec.learningObjective ? `
        <div class="sticky blue">
          <strong>💡 Key Learning Objective:</strong> ${escapeHtml(sec.learningObjective)}
        </div>` : ''}

        ${sec.targetMinutes ? `
        <div class="timer-box timer" data-dur="${sec.targetMinutes * 60}">
          <span>⏱ Section Target: ${sec.targetMinutes} min</span>
          <span class="clock">${sec.targetMinutes}:00</span>
          <button class="tbtn go">▶ Start</button>
          <button class="tbtn rs">↺ Reset</button>
        </div>` : ''}

        ${sec.contentHtml || '<p>Content in preparation.</p>'}
      </section>
    `).join('\n');

    template = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
    template = template.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${escapeHtml(description)}">`);
    template = template.replace(/<meta name="keywords" content="[^"]*">/i, `<meta name="keywords" content="${escapeHtml(keywords)}">`);
    template = template.replace(/<meta name="author" content="[^"]*">/i, `<meta name="author" content="${escapeHtml(author)}">`);
    template = template.replace(/<nav id="navLinks">[\s\S]*?<\/nav>/i, `<nav id="navLinks">\n${navHtml}\n  </nav>`);
    template = template.replace(/<main class="sheet">[\s\S]*?<\/main>/i, `<main class="sheet">\n${sheetHtml}\n  </main>`);
  }

  // Write HTML Notebook
  fs.writeFileSync(resolved.fullHtmlPath, template, 'utf8');

  // Generate Metadata
  const now = new Date().toISOString().split('T')[0];
  const metadata = {
    title: task.title || task.topic,
    slug: resolved.slug,
    subject: resolved.subject,
    category: task.category || 'General Study',
    description: description,
    file: resolved.filename,
    tags: tags,
    status: task.publication_status || 'draft',
    source: task.source || 'curriculum/synthesis',
    version: task.version || (isV2 ? '2.0.0' : '1.0.0'),
    templateVersion: isV2 ? '2.0.0' : '1.0.0',
    updated: now,
    updatedAt: now,
    featured: Boolean(task.featured),
    readTimeMinutes: task.readTimeMinutes || sections.reduce((acc, s) => acc + (s.targetMinutes || 10), 0) || 35,
    questionsCount: sections.length,
    author: author,
    academicLevel: task.academic_level || 'graduate',
    depth: task.depth || 'comprehensive',
    researchProvider: task.research_provider || null
  };

  fs.writeFileSync(resolved.fullMetaPath, JSON.stringify(metadata, null, 2), 'utf8');

  return {
    htmlPath: resolved.fullHtmlPath,
    metaPath: resolved.fullMetaPath,
    metadata,
    slug: resolved.slug,
    subject: resolved.subject
  };
}

module.exports = {
  generateNotebook,
  buildDefaultSections,
  escapeHtml
};

/**
 * Brain Knowledge Hub — AnyDoc Document Ingestion Adapter
 * Integrates AnyDoc CLI / parser for document ingestion (PDF, DOCX, PPTX, XLSX)
 * with deterministic hashing and local AST caching in _source_cache/
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const CACHE_DIR = path.join(ROOT_DIR, '_source_cache');

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

/**
 * Computes SHA-256 fingerprint of a file
 */
function getFileHash(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 16);
}

/**
 * Checks if a parsed document is already cached
 */
function getCachedExtraction(hash) {
  const jsonPath = path.join(CACHE_DIR, `${hash}.json`);
  const mdPath = path.join(CACHE_DIR, `${hash}.md`);
  if (fs.existsSync(jsonPath) && fs.existsSync(mdPath)) {
    try {
      const metadata = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      const markdown = fs.readFileSync(mdPath, 'utf8');
      return { cached: true, hash, metadata, markdown, jsonPath, mdPath };
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Fallback lightweight text extractor when anydoc is not installed or offline
 */
function fallbackExtract(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath);

  if (['.txt', '.md', '.markdown', '.json', '.html'].includes(ext)) {
    const raw = fs.readFileSync(filePath, 'utf8');
    return {
      title: baseName.replace(ext, ''),
      markdown: raw,
      pageCount: 1,
      format: ext.replace('.', ''),
      sections: [{ heading: 'Content', body: raw }]
    };
  }

  // Generic document representation with file metadata
  const stats = fs.statSync(filePath);
  return {
    title: baseName.replace(ext, '').replace(/[-_]/g, ' '),
    markdown: `# ${baseName}\n\n*Source Document: ${filePath} (${Math.round(stats.size / 1024)} KB)*\n\nDocument ingested into Brain Knowledge Hub.`,
    pageCount: 1,
    format: ext.replace('.', ''),
    sections: [
      {
        heading: 'Source Metadata',
        body: `Ingested ${baseName} with fingerprint size ${stats.size} bytes.`
      }
    ]
  };
}

/**
 * Ingests a source file into GFM Markdown and structured AST cache
 * @param {string} filePath - Absolute path to document
 * @param {object} options - Ingestion options
 */
function ingestDocument(filePath, options = {}) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Source file does not exist: "${filePath}"`);
  }

  const hash = getFileHash(filePath);
  const cached = getCachedExtraction(hash);
  if (cached && !options.force) {
    return cached;
  }

  const ext = path.extname(filePath).toLowerCase();

  // If already a text/markdown format, ingest directly without shelling out
  if (['.txt', '.md', '.markdown', '.json', '.html'].includes(ext)) {
    extracted = fallbackExtract(filePath);
    method = 'direct-text';
  } else {
    // Attempt AnyDoc CLI extraction for binary formats (docx, pdf, pptx, xlsx, etc.)
    try {
      const mdPath = path.join(CACHE_DIR, `${hash}.md`);
      execSync(`npx anydoc "${filePath}" -o "${mdPath}"`, {
        encoding: 'utf8',
        timeout: 25000,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      const markdown = fs.readFileSync(mdPath, 'utf8');
      extracted = {
        title: path.basename(filePath, path.extname(filePath)).replace(/[-_]/g, ' '),
        markdown: markdown,
        pageCount: 1,
        format: ext.replace('.', ''),
        sections: []
      };
      method = 'anydoc-cli';
    } catch {
      // Graceful fallback to local extraction
      extracted = fallbackExtract(filePath);
      method = 'local-fallback';
    }
  }

  // Save to _source_cache
  const mdPath = path.join(CACHE_DIR, `${hash}.md`);
  const jsonPath = path.join(CACHE_DIR, `${hash}.json`);

  const metadata = {
    hash,
    sourceFile: filePath,
    fileName: path.basename(filePath),
    fileSize: fs.statSync(filePath).size,
    extractedAt: new Date().toISOString(),
    method,
    title: extracted.title,
    pageCount: extracted.pageCount,
    format: extracted.format,
    sectionCount: extracted.sections.length
  };

  fs.writeFileSync(mdPath, extracted.markdown, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify(metadata, null, 2), 'utf8');

  return {
    cached: false,
    hash,
    method,
    metadata,
    markdown: extracted.markdown,
    jsonPath,
    mdPath
  };
}

/**
 * Retrieves all cached sources
 */
function listCachedSources() {
  if (!fs.existsSync(CACHE_DIR)) return [];
  const files = fs.readdirSync(CACHE_DIR).filter(f => f.endsWith('.json'));
  return files.map(f => {
    try {
      return JSON.parse(fs.readFileSync(path.join(CACHE_DIR, f), 'utf8'));
    } catch {
      return null;
    }
  }).filter(Boolean);
}

module.exports = {
  ingestDocument,
  getFileHash,
  getCachedExtraction,
  listCachedSources,
  CACHE_DIR
};

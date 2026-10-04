/**
 * Brain Knowledge Hub — Local Development Preview Server & Watcher
 * Zero dependencies. Built with native Node.js HTTP and File System modules.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { build } = require('./build');

const PORT = process.env.PORT || 3000;
const WEBSITE_DIR = path.resolve(__dirname, '..');
const ROOT_DIR = path.resolve(__dirname, '../..');
const DIST_DIR = path.join(WEBSITE_DIR, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8'
};

// Initial Build
build();

// HTTP Request Handler
const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  
  // Normalize clean URLs to index.html
  let filePath = path.join(DIST_DIR, reqPath);

  // If path is directory or ends in '/', serve index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  } else if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>404 Not Found · Brain Knowledge Hub</title></head>
      <body style="font-family: system-ui, sans-serif; text-align: center; padding: 4rem 1rem; background: #fbf9f4; color: #181d26;">
        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem;">404 Not Found</h1>
        <p style="color: #525a6c;">The requested path <code>${reqPath}</code> was not found in the published portal.</p>
        <p style="margin-top: 1.5rem;"><a href="/" style="color: #1a365d; text-decoration: none; font-weight: 600;">&larr; Return to Knowledge Hub</a></p>
      </body>
      </html>
    `);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Server Error: ${err.message}`);
  }
});

// Watcher for live re-build
let rebuildTimer = null;
function triggerRebuild(event, filename) {
  if (rebuildTimer) clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(() => {
    console.log(`\n[WATCH] Change detected (${event} in ${filename || 'file'}). Rebuilding...`);
    try {
      build();
      console.log('[WATCH] Rebuild complete.');
    } catch (e) {
      console.error('[WATCH] Rebuild error:', e.message);
    }
  }, 250);
}

// Watch src/ and templates/
const watchDirs = [
  path.join(WEBSITE_DIR, 'src'),
  path.join(ROOT_DIR, 'Operations'),
  path.join(ROOT_DIR, '_templates')
];

watchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.watch(dir, { recursive: true }, triggerRebuild);
  }
});

server.listen(PORT, () => {
  console.log(`\n🚀 Brain Knowledge Hub local preview running at:`);
  console.log(`   http://localhost:${PORT}/`);
  console.log(`\nPress Ctrl+C to terminate the preview server.\n`);
});

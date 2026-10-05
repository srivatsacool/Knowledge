const fs = require('fs');
const path = require('path');

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('formula=') || line.trim().startsWith('title=') || line.trim().startsWith('explanation=')) continue;
    if (line.includes('description:') || line.includes('symbol:')) continue;
    const withoutBackticks = line.replace(/`[^`]*`/g, '');
    if (/\$[^$]*\\[a-zA-Z]+\{[^}]+\}[^$]*\$/.test(withoutBackticks) || /\$[^$]*_[a-zA-Z0-9]+\{[^}]+\}[^$]*\$/.test(withoutBackticks) || /\$[^$]*\{[^}]+\}[^$]*\$/.test(withoutBackticks)) {
      console.log(`${file}:${i + 1}: ${line.trim()}`);
    }
  }
}

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.mdx')) checkFile(full);
  }
}

walk('domains');

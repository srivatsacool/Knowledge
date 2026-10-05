const fs = require('fs');
const path = require('path');

const forbidden = ['weschool', 'welingkar', 'b-school', 'bschool', 'business school'];
let found = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith('.html') || full.endsWith('.js') || full.endsWith('.json')) {
      // Ignore historical lscm-archive files if present in public folder as reference
      if (full.includes('lscm-archive') || full.includes('notebook_archive.html')) continue;
      const content = fs.readFileSync(full, 'utf8').toLowerCase();
      for (const word of forbidden) {
        if (content.includes(word)) {
          console.log(`[ALERT] Found prohibited term "${word}" in: ${full}`);
          found++;
        }
      }
    }
  }
}

console.log('--- Starting Prohibited Words Audit on Website/dist ---');
walk('Website/dist');
console.log(`--- Audit Complete. Violations: ${found} ---`);

if (found > 0) {
  process.exit(1);
} else {
  console.log('✔ ZERO prohibited institutional words found in public build output.');
  process.exit(0);
}

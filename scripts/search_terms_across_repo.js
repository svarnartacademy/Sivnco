const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'brag-output') continue;
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walk(filepath, filelist);
    } else if (/\.(js|jsx|ts|tsx|html|md|json)$/i.test(file)) {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const files = walk('.');

console.log(`Auditing ${files.length} files...`);

const findings = {
  noticePeriod: [],
  sku15: [],
  bfa: [],
};

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (/(?:15|fifteen)[-\s]*day(?:s)?(?:\s+notice)?/i.test(content)) {
    // Exclude FACTUAL_REVIEW_LIST.md or DOSSIER where it explicitly says it was removed
    findings.noticePeriod.push(f);
  }
  if (/(?:15\+?\s*SKU)/i.test(content)) {
    findings.sku15.push(f);
  }
  if (/\bBFA\b|Bachelor of Fine Arts/i.test(content)) {
    findings.bfa.push(f);
  }
}

console.log('Notice Period mentions in:', findings.noticePeriod);
console.log('15+ SKU mentions in:', findings.sku15);
console.log('BFA mentions in:', findings.bfa);

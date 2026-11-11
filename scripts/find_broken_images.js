const fs = require('fs');
const path = require('path');

function getFiles(dir, exts = ['.js', '.jsx', '.html']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'out') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, exts));
    } else {
      if (exts.includes(path.extname(file))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = ['index.html', ...getFiles('pages'), ...getFiles('components')];
const imgRegex = /(['"])((\/images\/|\/models\/|\/videos\/)[^'"?#\s]+)\1/g;

const broken = [];
const checked = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const assetPath = match[2];
    if (checked.has(assetPath)) continue;
    checked.add(assetPath);

    const localPath = path.join('public', assetPath);
    if (!fs.existsSync(localPath)) {
      broken.push({
        file: f,
        asset: assetPath,
        localPath
      });
    }
  }
});

console.log(`Total unique assets checked: ${checked.size}`);
console.log(`Broken assets found: ${broken.length}`);
broken.forEach(b => {
  console.log(`[BROKEN] in ${b.file}: ${b.asset}`);
});

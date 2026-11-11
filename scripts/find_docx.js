const fs = require('fs');
const path = require('path');

function findDocx(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === 'node_modules' || f === '.git' || f === '.next') continue;
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      findDocx(full);
    } else if (/\.docx$/i.test(f)) {
      console.log('Found docx:', full);
    }
  }
}

findDocx('.');

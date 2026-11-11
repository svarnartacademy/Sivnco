const fs = require('fs');
const content = fs.readFileSync('pages/jusamazin.js', 'utf8');
const lines = content.split('\n');
console.log('Lines 300-450:');
console.log(lines.slice(300, 450).join('\n'));

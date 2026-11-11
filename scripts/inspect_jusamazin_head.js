const fs = require('fs');
const content = fs.readFileSync('pages/jusamazin.js', 'utf8');
const lines = content.split('\n');
console.log('Lines 1-180:');
console.log(lines.slice(0, 180).join('\n'));

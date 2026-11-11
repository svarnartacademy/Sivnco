const fs = require('fs');
const content = fs.readFileSync('pages/jusamazin.js', 'utf8');
const lines = content.split('\n');
console.log('Lines 180-300:');
console.log(lines.slice(180, 300).join('\n'));

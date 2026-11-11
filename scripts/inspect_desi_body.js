const fs = require('fs');
const content = fs.readFileSync('pages/jusamazin/desi-energy-bar.js', 'utf8');
const lines = content.split('\n');
console.log('Lines 121-250:');
console.log(lines.slice(120, 250).join('\n'));

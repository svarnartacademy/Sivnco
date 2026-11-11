const fs = require('fs');
const content = fs.readFileSync('pages/design-systems.js', 'utf8');
const lines = content.split('\n');
console.log('Lines 350-488:');
console.log(lines.slice(350, 488).join('\n'));

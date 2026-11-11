const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');
const lines = content.split('\n');
console.log('Lines 100-220:');
console.log(lines.slice(100, 220).join('\n'));

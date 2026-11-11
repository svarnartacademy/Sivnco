const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');
const lines = content.split('\n');
console.log('Lines 700-820:');
console.log(lines.slice(700, 820).join('\n'));

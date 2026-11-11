const fs = require('fs');
const content = fs.readFileSync('pages/ai-workflow.js', 'utf8');

console.log('Length of ai-workflow.js:', content.length);
// Check claims like 95%, 88%, speedup
const speedMatches = [...content.matchAll(/(\d+%\s*(?:faster|speed|saving|efficiency))/gi)];
console.log('Speed claims in ai-workflow.js:', speedMatches.map(m => m[0]));

const lines = content.split('\n');
console.log('Lines 1-80:');
console.log(lines.slice(0, 80).join('\n'));

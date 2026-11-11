const fs = require('fs');
const content = fs.readFileSync('pages/design-systems.js', 'utf8');

console.log('Length of design-systems.js:', content.length);
// Check for specification buttons or modals
const specMatches = [...content.matchAll(/spec|inspect|modal|token|anatomy/gi)];
console.log('Spec matches count:', specMatches.length);

// Sample lines
const lines = content.split('\n');
console.log('Lines 1-80:');
console.log(lines.slice(0, 80).join('\n'));

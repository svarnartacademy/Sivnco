const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find all BFA occurrences
const bfaMatches = [...html.matchAll(/(.{0,40})(?:BFA|Bachelor of Fine Arts)(.{0,40})/gi)];
console.log('BFA matches in index.html:');
bfaMatches.forEach(m => console.log('...', m[0], '...'));

// Find all 15+ SKU occurrences
const skuMatches = [...html.matchAll(/(.{0,40})(?:15\+?\s*SKU[s]?)(.{0,40})/gi)];
console.log('15+ SKU matches in index.html:');
skuMatches.forEach(m => console.log('...', m[0], '...'));

const fs = require('fs');
const content = fs.readFileSync('pages/jusamazin.js', 'utf8');

// Find mentions of SKU or SKUs
const skuMatches = [...content.matchAll(/(\d+\+?\s*SKU[s]?)/gi)];
console.log('SKU matches in jusamazin.js:', skuMatches.map(m => m[0]));

// Find product tiles / categories
const tileMatches = [...content.matchAll(/title:\s*['"]([^'"]+)['"]/gi)];
console.log('Titles found:', tileMatches.map(m => m[1]).slice(0, 15));

// Find image references in jusamazin.js
const imgMatches = [...content.matchAll(/img(?:Src)?:\s*['"]([^'"]+)['"]/gi)];
console.log('Sample images:', imgMatches.slice(0, 10).map(m => m[1]));

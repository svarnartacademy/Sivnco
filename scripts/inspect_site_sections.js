const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const sections = [...html.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
console.log('Sections in index.html:', sections);

// Check notice period mentions in index.html and other files
const noticeMatches = [...html.matchAll(/(?:15|fifteen)[-\s]*day(?:s)?(?:\s+notice)?/gi)];
console.log('Notice matches in index.html:', noticeMatches.map(m => m[0]));

// Check SKU mentions
const skuMatches = [...html.matchAll(/(\d+\+?\s*SKU)/gi)];
console.log('SKU matches sample:', skuMatches.slice(0, 5).map(m => m[0]));

const fs = require('fs');
const content = fs.readFileSync('pages/web-development.js', 'utf8');

// Check for browser cards or mockups
const browserCards = [...content.matchAll(/browser-card|browser-window|browser-chrome|mac-dots/gi)];
console.log('Browser cards mentions:', browserCards.length);

// Check for image tags in web-development.js
const imgMatches = [...content.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)];
console.log('Images in web-development.js:', imgMatches.map(m => m[1]));

// Sample lines around browser cards
const lines = content.split('\n');
console.log('Lines 1-60:');
console.log(lines.slice(0, 60).join('\n'));

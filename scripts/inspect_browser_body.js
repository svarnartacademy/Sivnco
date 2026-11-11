const fs = require('fs');
const content = fs.readFileSync('pages/web-development.js', 'utf8');

const idx = content.indexOf('className="browser-bar"');
console.log(content.slice(idx, idx + 1500));

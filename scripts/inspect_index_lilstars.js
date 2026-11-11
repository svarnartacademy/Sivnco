const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const idx = html.indexOf('lilstars');
console.log(html.slice(idx - 150, idx + 150));

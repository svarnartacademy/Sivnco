const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const pNav = html.indexOf('<nav');
const pEndNav = html.indexOf('</nav>');

console.log('Nav in index.html:');
console.log(html.slice(pNav, pEndNav + 10));

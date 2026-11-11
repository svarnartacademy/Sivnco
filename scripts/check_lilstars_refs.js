const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const matches = [...html.matchAll(/lilstars[^'\"\s]*/gi)].map(m => m[0]);
console.log('Matches in index.html:', matches);

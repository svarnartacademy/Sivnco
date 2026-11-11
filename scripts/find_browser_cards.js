const fs = require('fs');
const content = fs.readFileSync('pages/web-development.js', 'utf8');

const matches = [...content.matchAll(/class(?:Name)?=["'][^"']*browser[^"']*["']/gi)];
console.log('Browser class matches:', matches.map(m => m[0]));
if (matches.length > 0) {
  const idx = content.indexOf(matches[0][0]);
  console.log(content.slice(idx - 100, idx + 800));
}

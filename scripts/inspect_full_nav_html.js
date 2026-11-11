const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const navMatch = html.match(/<nav[\s\S]*?<\/nav>/i);
if (navMatch) {
  console.log(navMatch[0]);
}

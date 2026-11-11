const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="sx-top"')) {
    console.log(`sx-top found at line ${i + 1}:`);
    console.log(lines.slice(i, i + 50).join('\n'));
    break;
  }
}

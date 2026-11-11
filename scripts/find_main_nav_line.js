const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="mainNav"')) {
    console.log(`mainNav found around line ${i + 1}`);
    console.log(lines.slice(i, i + 40).join('\n'));
    break;
  }
}

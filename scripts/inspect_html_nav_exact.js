const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="mainNav"')) {
    console.log(`Line ${i + 1}:`);
    console.log(lines.slice(Math.max(0, i - 5), i + 45).join('\n'));
    break;
  }
}

const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const tableIdx = content.indexOf('<table');
if (tableIdx !== -1) {
  console.log(content.slice(Math.max(0, tableIdx - 500), tableIdx + 600));
}

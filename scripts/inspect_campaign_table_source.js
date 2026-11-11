const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const tableIdx = content.indexOf('cp-compare-table');
if (tableIdx !== -1) {
  console.log(content.slice(Math.max(0, tableIdx - 800), tableIdx + 1200));
}

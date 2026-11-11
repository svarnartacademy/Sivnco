const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const idx = content.indexOf('className="cp-compare-table"');
if (idx !== -1) {
  console.log(content.slice(Math.max(0, idx - 600), idx + 800));
}

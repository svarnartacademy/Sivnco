const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const tableIdx = content.indexOf('function CampaignCompareTable');
if (tableIdx !== -1) {
  console.log(content.slice(tableIdx, tableIdx + 1200));
}

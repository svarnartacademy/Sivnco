const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const tableIdx = content.indexOf('function CampaignCompareTable');
if (tableIdx !== -1) {
  const endIdx = content.indexOf('// ─── RUNWAY CONFIGS', tableIdx);
  console.log(content.slice(tableIdx, endIdx));
}

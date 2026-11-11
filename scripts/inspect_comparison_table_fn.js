const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const tableFnIdx = content.indexOf('function CampaignComparisonTable');
if (tableFnIdx !== -1) {
  console.log(content.slice(tableFnIdx, tableFnIdx + 1500));
}

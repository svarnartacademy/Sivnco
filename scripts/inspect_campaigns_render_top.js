const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

// Find return statement in export default function Campaigns
const returnIdx = content.indexOf('return (');
if (returnIdx !== -1) {
  console.log('Return statement found around char:', returnIdx);
  console.log(content.slice(returnIdx, returnIdx + 1600));
}

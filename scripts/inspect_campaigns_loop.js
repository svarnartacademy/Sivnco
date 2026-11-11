const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const mainIdx = content.indexOf('export default function Campaigns');
if (mainIdx !== -1) {
  console.log(content.slice(mainIdx + 1200, mainIdx + 2600));
}

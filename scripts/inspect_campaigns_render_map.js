const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const mapIdx = content.indexOf('CAMPAIGNS.map');
if (mapIdx !== -1) {
  console.log(content.slice(mapIdx, mapIdx + 800));
}

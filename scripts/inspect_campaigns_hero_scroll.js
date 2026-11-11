const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const heroIdx = content.indexOf('<div className="cp-hero-scroll cpv">');
if (heroIdx !== -1) {
  console.log(content.slice(heroIdx, heroIdx + 1200));
}

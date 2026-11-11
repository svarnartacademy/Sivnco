const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const pHead = content.indexOf('<header');
const pEndHead = content.indexOf('</header>', pHead);
console.log('Campaigns header in campaigns.js:');
console.log(content.slice(pHead, pEndHead + 20));

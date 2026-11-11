const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const fnIdx = content.indexOf('export default function');
if (fnIdx !== -1) {
  console.log(content.slice(fnIdx + 1000, fnIdx + 3000));
}

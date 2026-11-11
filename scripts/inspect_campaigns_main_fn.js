const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const fnIdx = content.indexOf('export default function');
if (fnIdx !== -1) {
  console.log('export default function found at char:', fnIdx);
  console.log(content.slice(fnIdx, fnIdx + 2000));
}

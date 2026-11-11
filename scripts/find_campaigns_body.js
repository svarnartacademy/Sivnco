const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const pExport = content.indexOf('export default function');
console.log(content.slice(pExport + 1200, pExport + 3000));

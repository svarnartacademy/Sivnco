const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const pExport = content.indexOf('export default function');
console.log(content.slice(pExport, pExport + 1200));

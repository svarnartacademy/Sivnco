const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');
const pTable = content.indexOf('<table className="cp-compare-table">');
const start = content.lastIndexOf('function', pTable);
console.log(content.slice(start, pTable + 600));

const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');
const pExec = content.indexOf('executions:');
console.log('pExec:', pExec);
if (pExec !== -1) {
  console.log(content.slice(pExec - 100, pExec + 1200));
}

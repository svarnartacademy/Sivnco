const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const amIdx = content.indexOf("'almond-milk'");
if (amIdx !== -1) {
  const execIdx = content.indexOf('executions:', amIdx);
  if (execIdx !== -1) {
    console.log(content.slice(execIdx, execIdx + 2000));
  }
}

const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const pProjects = content.indexOf('const CAMPAIGNS =');
console.log('pProjects:', pProjects);
if (pProjects !== -1) {
  console.log(content.slice(pProjects, pProjects + 1200));
}

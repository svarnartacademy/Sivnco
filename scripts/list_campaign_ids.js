const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

const pProjects = content.indexOf('const CAMPAIGNS =');
const end = content.indexOf('// ─── RUNWAY CONFIGS', pProjects);
const snippet = content.slice(pProjects, end);

const ids = [...snippet.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const titles = [...snippet.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

console.log('Campaigns found:', ids.map((id, i) => `${i+1}. [${id}] ${titles[i]}`));

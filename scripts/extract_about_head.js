const { execSync } = require('child_process');
const fs = require('fs');

const headHtml = execSync('git show HEAD:index.html', { maxBuffer: 20 * 1024 * 1024 }).toString('utf8');
const pAbout = headHtml.indexOf('id="about"');
const pPrinciples = headHtml.indexOf('id="principles"');

console.log('pAbout:', pAbout, 'pPrinciples:', pPrinciples);
const aboutBlock = headHtml.slice(pAbout - 50, pPrinciples - 50);
fs.writeFileSync('scripts/about_full_block.html', aboutBlock, 'utf8');
console.log('Saved about_full_block.html (bytes):', aboutBlock.length);

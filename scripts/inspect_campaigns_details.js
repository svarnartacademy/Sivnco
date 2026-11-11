const fs = require('fs');
const content = fs.readFileSync('pages/campaigns.js', 'utf8');

// Find campaign projects in campaigns.js
const projectMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
console.log('Project IDs:', projectMatches.map(m => m[1]).slice(0, 15));

// Find the table section
const tableMatch = content.match(/<table[\s\S]*?<\/table>/i) || content.match(/comparison|funnel|matrix/i);
console.log('Table match found:', !!tableMatch);
if (tableMatch) {
  const tableIdx = content.indexOf('<table');
  if (tableIdx !== -1) {
    console.log('Table snippet:');
    console.log(content.slice(tableIdx, tableIdx + 2000));
  }
}

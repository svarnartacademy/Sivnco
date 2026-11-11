const fs = require('fs');
const content = fs.readFileSync('pages/web-development.js', 'utf8');

const headIdx = content.indexOf('className="proj-head-row"');
if (headIdx !== -1) {
  console.log(content.slice(headIdx - 200, headIdx + 800));
}

const fs = require('fs');
const content = fs.readFileSync('pages/web-development.js', 'utf8');

// Find where PROJECTS are mapped in JSX
const mapIdx = content.indexOf('PROJECTS.map');
if (mapIdx !== -1) {
  console.log('PROJECTS.map found:');
  console.log(content.slice(mapIdx, mapIdx + 1500));
}

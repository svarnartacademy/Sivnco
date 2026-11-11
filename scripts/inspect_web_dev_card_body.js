const fs = require('fs');
const content = fs.readFileSync('pages/web-development.js', 'utf8');

const mapIdx = content.indexOf('PROJECTS.map');
if (mapIdx !== -1) {
  console.log(content.slice(mapIdx, mapIdx + 2000));
}

const fs = require('fs');
const content = fs.readFileSync('pages/artist-educator.js', 'utf8');

console.log('Length of artist-educator.js:', content.length);
// Check for learner or teaching sections
const learnerMatches = [...content.matchAll(/learner|student|pedagogy|teaching|openhouse|svarnart/gi)];
console.log('Learner/Pedagogy matches:', learnerMatches.length);

// Check for artwork images
const artImgs = [...content.matchAll(/painting_\d+\.jpg/gi)];
console.log('Art painting matches:', artImgs.length);

const lines = content.split('\n');
console.log('Lines 1-80:');
console.log(lines.slice(0, 80).join('\n'));

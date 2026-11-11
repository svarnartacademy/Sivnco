const fs = require('fs');

if (fs.existsSync('pages/journal.js')) {
  console.log('=== pages/journal.js ===');
  console.log(fs.readFileSync('pages/journal.js', 'utf8').slice(0, 1500));
} else {
  console.log('pages/journal.js does not exist');
}

if (fs.existsSync('pages/art.js')) {
  console.log('=== pages/art.js ===');
  console.log(fs.readFileSync('pages/art.js', 'utf8').slice(0, 1500));
} else {
  console.log('pages/art.js does not exist');
}

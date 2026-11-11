const fs = require('fs');

const pages = [
  'pages/jusamazin.js',
  'pages/campaigns.js',
  'pages/jusamazin/desi-energy-bar.js',
  'pages/design-systems.js',
  'pages/web-development.js',
  'pages/ai-workflow.js',
  'pages/artist-educator.js'
];

for (const p of pages) {
  if (fs.existsSync(p)) {
    const lines = fs.readFileSync(p, 'utf8').split('\n').length;
    console.log(`${p}: ${lines} lines`);
  } else {
    console.log(`${p}: NOT FOUND`);
  }
}

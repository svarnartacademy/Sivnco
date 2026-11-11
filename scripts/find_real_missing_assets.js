const fs = require('fs');
const path = require('path');

const filesToScan = [
  'index.html',
  'pages/index.js',
  'pages/work.js',
  'pages/visual-diary.js',
  'pages/resume.js',
  'pages/jusamazin.js',
  'pages/jusamazin/desi-energy-bar.js',
  'pages/campaigns.js',
  'pages/design-systems.js',
  'pages/web-development.js',
  'pages/ai-workflow.js',
  'pages/artist-educator.js'
];

const missing = [];

filesToScan.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  // Match src="..." or src: '...' or img: '...'
  const matches = content.match(/(\/images\/[a-zA-Z0-9_\-\.\/]+|\/videos\/[a-zA-Z0-9_\-\.\/]+|\/models\/[a-zA-Z0-9_\-\.\/]+)/g) || [];
  
  const unique = [...new Set(matches)];
  unique.forEach(u => {
    // strip query string like ?v=2
    const clean = u.split('?')[0];
    const diskPath = path.join(process.cwd(), 'public', clean);
    if (!fs.existsSync(diskPath)) {
      missing.push({ file: f, url: u, diskPath });
    }
  });
});

console.log(`Found ${missing.length} missing asset references:`);
missing.forEach(m => {
  console.log(`[${m.file}] ${m.url}`);
});

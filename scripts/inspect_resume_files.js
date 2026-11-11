const fs = require('fs');

const publicFiles = fs.readdirSync('public');
const resumeFiles = publicFiles.filter(f => /resume|cv/i.test(f));
console.log('Resume files in public/:', resumeFiles);

// Also check root directory
const rootFiles = fs.readdirSync('.');
const rootResume = rootFiles.filter(f => /resume|cv/i.test(f));
console.log('Resume files in root:', rootResume);

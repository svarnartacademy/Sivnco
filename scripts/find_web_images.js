const fs = require('fs');
const path = require('path');

function searchImages(dir, results = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      searchImages(full, results);
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(f)) {
      results.push(full.replace('public', '').replace(/\\/g, '/'));
    }
  }
  return results;
}

const allImgs = searchImages('public/images');
console.log('Total images found:', allImgs.length);
const webImgs = allImgs.filter(p => /web|screen|ui|svarnart|interface|app|site|portal/i.test(p));
console.log('Web/UI/Interface images:', webImgs);

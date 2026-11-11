const fs = require('fs');
const path = require('path');

function searchImages(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      res = res.concat(searchImages(p));
    } else if (/\.(jpg|png|webp)$/i.test(f)) {
      if (/web|site|ui|screen|app|portal|lms/i.test(f) || /jusamazin[\\\/]web/i.test(p)) {
        res.push(p);
      }
    }
  });
  return res;
}

console.log(searchImages('public/images'));

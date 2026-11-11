const fs = require('fs');

function listDir(p) {
  if (fs.existsSync(p)) {
    console.log(`=== ${p} ===`);
    fs.readdirSync(p).forEach(f => console.log('  ', f));
  } else {
    console.log(`${p} does not exist`);
  }
}

listDir('public/images/jusamazin/jars');
listDir('public/images/jusamazin/lilstars');
listDir('public/images/jusamazin/desi_bar');
listDir('public/images/jusamazin/bars');

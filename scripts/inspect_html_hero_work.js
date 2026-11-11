const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

function printSection(id) {
  const re = new RegExp(`<section[^>]*id=["']${id}["'][\\s\\S]*?<\\/section>`, 'i');
  const m = html.match(re);
  if (m) {
    console.log(`=== SECTION ${id} (length ${m[0].length}) ===`);
    console.log(m[0].slice(0, 1500));
  } else {
    console.log(`=== SECTION ${id} NOT FOUND ===`);
  }
}

printSection('sx-top');
printSection('roles');
printSection('project-index');
printSection('work');

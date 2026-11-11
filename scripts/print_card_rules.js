const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const pStyle = html.indexOf('<style>');
const pEndStyle = html.indexOf('</style>');
const css = html.slice(pStyle, pEndStyle);

function printRule(selector) {
  const idx = css.indexOf(selector);
  if (idx !== -1) {
    console.log(`=== ${selector} ===`);
    console.log(css.slice(idx, idx + 600));
  }
}

printRule('.editorial-project-card');
printRule('.visual-proof-card');

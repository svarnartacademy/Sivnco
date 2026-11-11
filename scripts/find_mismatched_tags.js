const fs = require('fs');

const lines = fs.readFileSync('index.html', 'utf8').split('\n');

// Find all <h2> occurrences
let h2Depth = 0;
lines.forEach((line, idx) => {
  const lineNum = idx + 1;
  const opens = (line.match(/<h2(\s[^>]*)?>/gi) || []).length;
  const closes = (line.match(/<\/h2>/gi) || []).length;
  if (opens > 0 || closes > 0) {
    h2Depth += opens - closes;
    if (h2Depth < 0) {
      console.log(`EXTRA </h2> at line ${lineNum}: ${line.trim()}`);
      h2Depth = 0;
    }
  }
});

// Let's also check section-by-section div balance
console.log('\n--- CHECKING DIV BALANCE PER SECTION ---');
let curSection = null;
let curStartLine = 0;
let divBalance = 0;

lines.forEach((line, idx) => {
  const lineNum = idx + 1;
  const secMatch = line.match(/<section[^>]*id="([^"]+)"/i);
  if (secMatch) {
    if (curSection) {
      if (divBalance !== 0) {
        console.log(`Section #${curSection} (lines ${curStartLine}-${lineNum-1}): Div balance diff = ${divBalance}`);
      }
    }
    curSection = secMatch[1];
    curStartLine = lineNum;
    divBalance = 0;
  }

  const opens = (line.match(/<div(\s[^>]*)?>/gi) || []).length;
  const closes = (line.match(/<\/div>/gi) || []).length;
  divBalance += opens - closes;

  if (line.includes('</section>')) {
    if (divBalance !== 0) {
      console.log(`Section #${curSection} ends at line ${lineNum}: Div balance diff = ${divBalance}`);
    }
    curSection = null;
  }
});

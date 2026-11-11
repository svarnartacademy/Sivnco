const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Check unclosed or mismatched tags in body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  console.log('No body tag found!');
  process.exit(1);
}

const body = bodyMatch[1];

// Count opening and closing tags for key container elements
const tags = ['div', 'section', 'article', 'main', 'header', 'h1', 'h2', 'h3', 'p', 'span', 'details', 'summary'];

tags.forEach(tag => {
  const openRegex = new RegExp(`<${tag}(\\s[^>]*)?>`, 'gi');
  const closeRegex = new RegExp(`</${tag}>`, 'gi');
  const openCount = (body.match(openRegex) || []).length;
  const closeCount = (body.match(closeRegex) || []).length;
  if (openCount !== closeCount) {
    console.log(`MISMATCH in <${tag}>: ${openCount} open vs ${closeCount} close (Diff: ${openCount - closeCount})`);
  } else {
    console.log(`OK <${tag}>: ${openCount}`);
  }
});

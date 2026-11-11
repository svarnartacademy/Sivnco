const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find the nav element in index.html
const navMatch = html.match(/<nav[\s\S]*?<\/nav>/i);
if (navMatch) {
  console.log('Nav found in index.html (length:', navMatch[0].length, ')');
  console.log(navMatch[0].slice(0, 1000));
} else {
  console.log('No <nav> found in index.html');
}

// Find hero section
const heroMatch = html.match(/<section[^>]*id=["']sx-top["'][\s\S]*?<\/section>/i) || html.match(/<section[^>]*class=["'][^"']*hero[\s\S]*?<\/section>/i);
if (heroMatch) {
  console.log('Hero section preview:');
  console.log(heroMatch[0].slice(0, 1200));
}

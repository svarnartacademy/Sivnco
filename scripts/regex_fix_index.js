const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix desktop nav links
const navRegex = /<div class="nav-links">[\s\S]*?<a href="\/campaigns">Campaigns<\/a>[\s\S]*?<a href="\/artist-educator">Art<\/a>[\s\S]*?<a href="#about">About<\/a>[\s\S]*?<a href="#contact">Contact<\/a>[\s\S]*?<\/div>/i;

const newNav = `<div class="nav-links">
        <a href="/work">Work</a>
        <a href="/visual-diary">Visual Diary</a>
        <a href="#about">About</a>
        <a href="/resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>`;

if (navRegex.test(html)) {
  html = html.replace(navRegex, newNav);
  console.log('Regex matched and replaced desktop nav links');
} else {
  console.log('Desktop nav regex did not match');
}

// 2. Fix mobile nav links
const mobileNavRegex = /<div class="nav-menu-inner">[\s\S]*?<a href="\/campaigns"[^>]*>Campaigns<\/a>[\s\S]*?<a href="\/artist-educator"[^>]*>Art<\/a>[\s\S]*?<a href="#about"[^>]*>About<\/a>[\s\S]*?<a href="#contact"[^>]*>Contact<\/a>[\s\S]*?<\/div>/i;

const newMobileNav = `<div class="nav-menu-inner">
        <a href="/work" class="mobile-nav-link">Work</a>
        <a href="/visual-diary" class="mobile-nav-link">Visual Diary</a>
        <a href="#about" class="mobile-nav-link">About</a>
        <a href="/resume" class="mobile-nav-link">Resume</a>
        <a href="#contact" class="mobile-nav-link">Contact</a>
      </div>`;

if (mobileNavRegex.test(html)) {
  html = html.replace(mobileNavRegex, newMobileNav);
  console.log('Regex matched and replaced mobile nav links');
} else {
  console.log('Mobile nav regex did not match');
}

// 3. Remove stray work header
const strayWorkRegex = /<\/div>\s*<div class="reveal-wrap"><div class="reveal-text t-serif"[^>]*>speaks<\/div><\/div>\s*<div class="reveal-wrap"><div class="reveal-text"><i>first\.<\/i><\/div><\/div>\s*<\/h2>\s*<\/div>\s*<div class="gs-fade"[\s\S]*?<span>CASCADING EDITORIAL<\/span>\s*<\/div>\s*<\/div>/i;

if (strayWorkRegex.test(html)) {
  html = html.replace(strayWorkRegex, '</div>');
  console.log('Regex matched and removed stray work header');
} else {
  console.log('Stray work regex did not match');
}

// 4. Remove stray case study header
const strayCaseRegex = /<\/div>\s*<div class="reveal-wrap"><div class="reveal-text t-serif"[^>]*>Amazin<\/div><\/div>\s*<div class="reveal-wrap"><div class="reveal-text">Brand <i>System<\/i><\/div><\/div>\s*<\/h2>\s*<\/div>\s*<div class="gs-fade"[\s\S]*?<span>END-TO-END VISUAL FUNCTION<\/span>\s*<\/div>\s*<\/div>/i;

if (strayCaseRegex.test(html)) {
  html = html.replace(strayCaseRegex, '</div>');
  console.log('Regex matched and removed stray case study header');
} else {
  console.log('Stray case study regex did not match');
}

// 5. Remove stray gallery header
const strayGalleryRegex = /<\/p>\s*<\/div>\s*<div class="reveal-wrap"><div class="reveal-text t-serif"[^>]*>so far\.<\/div><\/div>\s*<\/h2>\s*<\/div>/i;

if (strayGalleryRegex.test(html)) {
  html = html.replace(strayGalleryRegex, '</p>\n            </div>');
  console.log('Regex matched and removed stray gallery header');
} else {
  console.log('Stray gallery regex did not match');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Regex replacements done!');

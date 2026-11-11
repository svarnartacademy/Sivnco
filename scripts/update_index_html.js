const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Navigation updates in index.html
const oldDesktopNav = `<div class="nav-links">
        <a href="/campaigns">Campaigns</a>
        <a href="/artist-educator">Art</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>`;

const newDesktopNav = `<div class="nav-links">
        <a href="#work">Work</a>
        <a href="/visual-diary">Visual Diary</a>
        <a href="#about">About</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="#contact">Contact</a>
      </div>`;

html = html.replace(oldDesktopNav, newDesktopNav);

const oldMobileNav = `<div class="nav-menu-inner">
        <a href="/campaigns" class="mobile-nav-link">Campaigns</a>
        <a href="/artist-educator" class="mobile-nav-link">Art</a>
        <a href="#about" class="mobile-nav-link">About</a>
        <a href="#contact" class="mobile-nav-link">Contact</a>
      </div>`;

const newMobileNav = `<div class="nav-menu-inner">
        <a href="#work" class="mobile-nav-link">Work — 5 Categories</a>
        <a href="/visual-diary" class="mobile-nav-link">Visual Diary — Creative Record</a>
        <a href="#about" class="mobile-nav-link">About H P Shivaraj</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="mobile-nav-link">Resume (PDF) ↗</a>
        <a href="#contact" class="mobile-nav-link">Contact</a>
      </div>`;

html = html.replace(oldMobileNav, newMobileNav);

// Maya button text
html = html.replace(/it's Maya/g, 'Maya AI');

// 2. Hero direct links in sx-top
const oldHeroActions = `<div class="br-actions">
              <a class="br-button orange" href="#work">Explore the work <span>↘</span></a>
              <a class="br-button line" href="#roles">The person &amp; practice <span>↗</span></a>
            </div>`;

const newHeroActions = `<div class="br-actions">
              <a class="br-button orange" href="#work">Selected Work (5 Categories) <span>↘</span></a>
              <a class="br-button line" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF) ↗</a>
              <a class="br-button line" href="/visual-diary">Visual Diary <span>→</span></a>
            </div>`;

html = html.replace(oldHeroActions, newHeroActions);

// 3. Degree title reconciliation
html = html.replace(/✦ BFA GOLD MEDALIST/g, '✦ BVA GOLD MEDALIST');
html = html.replace(/BFA Applied Arts \(CAVA Mysuru\) &middot; Gold/g, 'BVA Applied Arts (CAVA, University of Mysore, 2019–2023) &middot; Gold');

// 4. Update SKU scope to 85+ SKUs across 7 product families
html = html.replace(/DIELINE \/\/ 15\+ SKUS/g, 'DIELINE // 85+ SKUS');
html = html.replace(/<span>15\+ SKUs Built<\/span>/g, '<span>85+ SKUs Governed</span>');
html = html.replace(/AFTER: UNIFIED 15\+ SKU ARCHITECTURE \(2025\)/g, 'AFTER: UNIFIED 85+ SKU ARCHITECTURE (2025)');
html = html.replace(/15\+ SKUs with coherent colour logic/g, '85+ SKUs across 7 product families with coherent colour logic');
html = html.replace(/ground up across 15\+ SKUs/g, 'ground up across 7 product families and 85+ commercial SKUs');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html!');

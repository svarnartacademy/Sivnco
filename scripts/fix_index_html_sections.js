const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix Nav Links in index.html
const oldNav = `<div class="nav-links">
        <a href="/campaigns">Campaigns</a>
        <a href="/artist-educator">Art</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>`;

const newNav = `<div class="nav-links">
        <a href="/work">Work</a>
        <a href="/visual-diary">Visual Diary</a>
        <a href="#about">About</a>
        <a href="/resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>`;

if (html.includes(oldNav)) {
  html = html.replace(oldNav, newNav);
  console.log('Fixed desktop nav links in index.html');
} else {
  console.log('Desktop nav links pattern not found or already fixed');
}

const oldMobileNav = `<div class="nav-menu-inner">
        <a href="/campaigns" class="mobile-nav-link">Campaigns</a>
        <a href="/artist-educator" class="mobile-nav-link">Art</a>
        <a href="#about" class="mobile-nav-link">About</a>
        <a href="#contact" class="mobile-nav-link">Contact</a>
      </div>`;

const newMobileNav = `<div class="nav-menu-inner">
        <a href="/work" class="mobile-nav-link">Work</a>
        <a href="/visual-diary" class="mobile-nav-link">Visual Diary</a>
        <a href="#about" class="mobile-nav-link">About</a>
        <a href="/resume" class="mobile-nav-link">Resume</a>
        <a href="#contact" class="mobile-nav-link">Contact</a>
      </div>`;

if (html.includes(oldMobileNav)) {
  html = html.replace(oldMobileNav, newMobileNav);
  console.log('Fixed mobile nav links in index.html');
} else {
  console.log('Mobile nav links pattern not found or already fixed');
}

// 2. Remove stray old header remnants in #work
const strayWorkHeader = `              <div class="reveal-wrap"><div class="reveal-text t-serif" style="color:var(--accent)">speaks</div></div>
              <div class="reveal-wrap"><div class="reveal-text"><i>first.</i></div></div>
            </h2>
          </div>
          <div class="gs-fade" style="font-family: var(--f-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: var(--text-muted); display: flex; align-items: center; gap: 0.6rem;">
            <span>5 FLAGSHIP PORTFOLIOS</span>
            <span style="color: var(--accent);">✦</span>
            <span>CASCADING EDITORIAL</span>
          </div>
        </div>`;

if (html.includes(strayWorkHeader)) {
  html = html.replace(strayWorkHeader, '');
  console.log('Removed stray work header remnant');
} else {
  console.log('Stray work header remnant not found');
}

// 3. Remove stray old header remnants in #case-study
const strayCaseHeader = `              <div class="reveal-wrap"><div class="reveal-text t-serif" style="color:var(--accent)">Amazin</div></div>
              <div class="reveal-wrap"><div class="reveal-text">Brand <i>System</i></div></div>
            </h2>
          </div>
          <div class="gs-fade" style="font-family: var(--f-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: var(--text-muted); display: flex; align-items: center; gap: 0.6rem;">
            <span>AUG 2023 &mdash; PRESENT</span>
            <span style="color: var(--accent);">✦</span>
            <span>END-TO-END VISUAL FUNCTION</span>
          </div>
        </div>`;

if (html.includes(strayCaseHeader)) {
  html = html.replace(strayCaseHeader, '');
  console.log('Removed stray case study header remnant');
} else {
  console.log('Stray case study header remnant not found');
}

// 4. Remove stray old header remnants in #gallery
const strayGalleryHeader = `                <div class="reveal-wrap"><div class="reveal-text t-serif" style="color:var(--accent)">so far.</div></div>
              </h2>
            </div>`;

if (html.includes(strayGalleryHeader)) {
  html = html.replace(strayGalleryHeader, '');
  console.log('Removed stray gallery header remnant');
} else {
  console.log('Stray gallery header remnant not found');
}

// 5. Remove duplicate #horizontal-sec
const horizSecRegex = /\s*<!-- HORIZONTAL SCROLL ROLES -->[\s\S]*?<\/section>/i;
if (horizSecRegex.test(html)) {
  html = html.replace(horizSecRegex, '');
  console.log('Removed duplicate #horizontal-sec section');
} else {
  console.log('#horizontal-sec regex did not match');
}

// 6. Fix ticker overflow in CSS
html = html.replace(
  /\.br-ticker\s*\{([^}]+)\}/,
  (match, p1) => {
    return `.br-ticker {${p1} max-width: 100vw !important; overflow: hidden !important; }`;
  }
);

// 7. Ensure CSS guarantees visibility
const safeVisibilityCSS = `
    /* SAFE VISIBILITY GUARANTEE: Never let elements stay opacity 0 */
    .cs-img-slot,
    .cs-ba-side,
    .cinema-theater-frame,
    .editorial-project-card,
    .visual-proof-card,
    .br-block-card,
    .journey-card-step,
    .testi-card {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .main-wrap, body, html {
      max-width: 100vw !important;
      overflow-x: clip !important;
    }
`;

html = html.replace('</style>', `${safeVisibilityCSS}\n  </style>`);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated index.html successfully!');

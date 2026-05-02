const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const additionalCSS = `
/* UI/UX PRO MAX - Aurora & Hover States */
.aurora-bg {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  z-index: -1;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(211,84,0,0.15) 0%, rgba(26,26,26,0) 50%);
}
body.artist-mode .aurora-bg {
  opacity: 1;
}
.p-card {
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.6s cubic-bezier(0.19, 1, 0.22, 1), background 0.6s;
}
.p-card:hover {
  transform: scale(0.98) translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}
.nav-cta {
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1), background 0.4s, color 0.4s;
}
.nav-cta:hover {
  transform: scale(0.96);
}
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* STUDIO NAMMA TYPOGRAPHY BUFF */
.big-h {
  letter-spacing: 0.01em;
  transform: translateY(0);
}
`;

content = content.replace('</style>', additionalCSS + '\n</style>');

// Add the aurora div right after <body>
content = content.replace('<body', '<body');
if (!content.includes('class="aurora-bg"')) {
    content = content.replace('<body>', '<body>\n<div class="aurora-bg" id="auroraBg"></div>');
    content = content.replace('<body class', '<body class'); // fallback
}

// Add mouse tracking for Aurora
const cursorLogic = `
  mx = e.clientX;
  my = e.clientY;
  cDot.style.transform = \`translate(\${mx - 3}px, \${my - 3}px)\`;
`;
const newCursorLogic = `
  mx = e.clientX;
  my = e.clientY;
  cDot.style.transform = \`translate(\${mx - 3}px, \${my - 3}px)\`;
  const aurora = document.getElementById('auroraBg');
  if (aurora) {
    aurora.style.setProperty('--mouse-x', \`\${mx}px\`);
    aurora.style.setProperty('--mouse-y', \`\${my}px\`);
  }
`;
content = content.replace(cursorLogic, newCursorLogic);

fs.writeFileSync('index.html', content, 'utf8');

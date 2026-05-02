const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Replace scramble class with reveal-text
content = content.replace(/\bscramble\b/g, 'reveal-text');

// 2. Remove ScrambleText class and its logic
const scrambleStart = content.indexOf('// --- TEXT SCRAMBLE ---');
const scrambleEnd = content.indexOf('// --- INTERSECTION OBSERVER ---');
const newRevealLogic = `// --- TEXT BLUR REVEAL ---
class BlurReveal {
  constructor(el) {
    this.el = el;
    const text = el.getAttribute('data-text') || el.innerText;
    const lines = text.split('\\n');
    let html = '';
    lines.forEach(line => {
      html += '<span style="display:block; overflow:hidden; padding-bottom: 0.1em; line-height: 1.1;">';
      const words = line.split(' ');
      words.forEach(word => {
        html += '<span class="reveal-word" style="display:inline-block; transform:translateY(110%); filter:blur(10px); opacity:0; transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), filter 0.8s ease-out, opacity 0.8s ease-out; margin-right: 0.2em;">' + word + '</span>';
      });
      html += '</span>';
    });
    this.el.innerHTML = html;
  }
  start() {
    const words = this.el.querySelectorAll('.reveal-word');
    words.forEach((word, index) => {
      setTimeout(() => {
        word.style.transform = 'translateY(0)';
        word.style.filter = 'blur(0px)';
        word.style.opacity = '1';
      }, index * 45); // Stagger by 45ms
    });
  }
}

`;
content = content.substring(0, scrambleStart) + newRevealLogic + content.substring(scrambleEnd);

// 3. Update intersection observer to call BlurReveal
content = content.replace(/new ScrambleText\(entry\.target\)\.start\(\);/g, 'new BlurReveal(entry.target).start();');
content = content.replace(/entry\.target\.classList\.contains\('scramble'\)/g, "entry.target.classList.contains('reveal-text')");

fs.writeFileSync('index.html', content, 'utf8');

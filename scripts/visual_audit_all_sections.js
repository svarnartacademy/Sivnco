const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SECTIONS_DIR = path.resolve('C:/Users/Shiva/.gemini/antigravity/brain/4081f7e0-8a58-4ba7-8df2-80fd1a65b793/section_audits');

async function auditSections() {
  if (!fs.existsSync(SECTIONS_DIR)) {
    fs.mkdirSync(SECTIONS_DIR, { recursive: true });
  }

  const browser = await chromium.launch({
    headless: true,
    args: ['--enable-webgl', '--use-gl=angle', '--no-sandbox']
  });

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(`[Console Error] ${msg.text()}`);
  });
  page.on('pageerror', err => errors.push(`[Page Error] ${err.toString()}`));

  console.log('Navigating to http://localhost:3000/...');
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(3000);

  const sectionIds = [
    'sx-top',
    'sx-map',
    'roles',
    'project-index',
    'reel',
    'work',
    'case-study',
    'studio-realities',
    '3d-pack-studio',
    'about',
    'svarnart',
    'principles',
    'gallery',
    'contact'
  ];

  console.log(`Auditing ${sectionIds.length} sections on homepage...`);

  for (let i = 0; i < sectionIds.length; i++) {
    const id = sectionIds[i];
    const selector = id.match(/^\d/) ? `[id="${id}"]` : `#${id}`;
    const el = await page.$(selector);

    if (!el) {
      console.log(`[SECTION MISSING] ${id}`);
      continue;
    }

    // Scroll section into view
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    const info = await el.evaluate((node, id) => {
      const rect = node.getBoundingClientRect();
      const style = window.getComputedStyle(node);
      const computedBg = style.backgroundColor;
      const opacity = style.opacity;
      const display = style.display;
      const text = node.innerText.trim();
      const imgs = Array.from(node.querySelectorAll('img')).map(img => ({
        src: img.src,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        hidden: window.getComputedStyle(img).display === 'none' || window.getComputedStyle(img).opacity === '0'
      }));

      // Find children with opacity 0
      const hiddenChildren = Array.from(node.querySelectorAll('*')).filter(c => {
        const cs = window.getComputedStyle(c);
        return cs.opacity === '0' && c.getBoundingClientRect().height > 20;
      }).map(c => ({
        tag: c.tagName,
        class: c.className?.substring?.(0, 40),
        id: c.id
      }));

      return {
        id,
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        top: Math.round(rect.top),
        computedBg,
        opacity,
        display,
        textLen: text.length,
        textSnippet: text.substring(0, 80).replace(/\n/g, ' '),
        imgCount: imgs.length,
        brokenImgs: imgs.filter(img => img.naturalWidth === 0),
        hiddenChildrenCount: hiddenChildren.length,
        hiddenChildren: hiddenChildren.slice(0, 5)
      };
    }, id);

    console.log(`\nSection #${id}:`);
    console.log(`  Size: ${info.width}x${info.height}px | Opacity: ${info.opacity} | Display: ${info.display}`);
    console.log(`  Text: "${info.textSnippet}..." (${info.textLen} chars)`);
    if (info.brokenImgs.length > 0) {
      console.log(`  BROKEN IMAGES (${info.brokenImgs.length}):`, info.brokenImgs);
    }
    if (info.hiddenChildrenCount > 0) {
      console.log(`  HIDDEN / INVISIBLE ELEMENTS (opacity:0) (${info.hiddenChildrenCount}):`, info.hiddenChildren);
    }

    const shotPath = path.join(SECTIONS_DIR, `${String(i + 1).padStart(2, '0')}-${id}.png`);
    await el.screenshot({ path: shotPath });
  }

  console.log('\nPage Errors encountered:', errors);
  await browser.close();
  console.log('Section visual audit completed!');
}

auditSections().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});

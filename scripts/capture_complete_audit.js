const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outDir = path.resolve('C:/Users/Shiva/.gemini/antigravity/brain/4081f7e0-8a58-4ba7-8df2-80fd1a65b793/unified_audit');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function captureElement(page, selector, filename) {
  try {
    const el = await page.$(selector);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await el.screenshot({ path: path.join(outDir, filename) });
      console.log(`✓ Captured ${filename} (${selector})`);
    } else {
      console.warn(`! Element not found: ${selector}`);
    }
  } catch (err) {
    console.error(`Error capturing ${selector}:`, err.message);
  }
}

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);

  // 1. Viewport Hero Stage
  console.log('Capturing viewport hero...');
  await page.screenshot({ path: path.join(outDir, '01-hero-stage.png') });

  // 2. Index (Three Ways Through)
  await captureElement(page, '#sx-map', '02-index.png');

  // 3. Roles (The Practice)
  await captureElement(page, '#roles', '03-practice-roles.png');

  // 4. Cinema Reel
  await captureElement(page, '#reel', '04-cinema-reel.png');

  // 5. Selected Work
  await captureElement(page, '#work', '05-selected-work.png');

  // 6. Case Study
  await captureElement(page, '[id="case-study"]', '06-case-study.png');

  // 7. Studio Realities (4 Laws)
  await captureElement(page, '[id="studio-realities"]', '07-studio-realities.png');

  // 8. 3D Pack Studio (using [id="3d-pack-studio"])
  await captureElement(page, '[id="3d-pack-studio"]', '08-3d-pack-studio.png');

  // 9. The Person & Pedigree (#about)
  await captureElement(page, '#about', '09-about-pedigree.png');

  // 10. Working Principles (#principles)
  await captureElement(page, '#principles', '10-principles.png');

  // 11. Career Trajectory (#gallery)
  await captureElement(page, '#gallery', '11-career-trajectory.png');

  // 12. Testimonials (.testi-section)
  await captureElement(page, '.testi-section', '12-testimonials.png');

  // 13. Mobile View (390x844)
  console.log('Switching to mobile viewport (390x844)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1500);

  await page.screenshot({ path: path.join(outDir, '13-mobile-hero.png') });
  await captureElement(page, '#sx-map', '14-mobile-index.png');
  await captureElement(page, '#roles', '15-mobile-roles.png');
  await captureElement(page, '[id="studio-realities"]', '16-mobile-laws.png');

  await browser.close();
  console.log('=== COMPLETE AUDIT FINISHED SUCCESSFULLY! ===');
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

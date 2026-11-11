const { chromium } = require('playwright');
const path = require('path');

const outDir = path.resolve('C:/Users/Shiva/.gemini/antigravity/brain/4081f7e0-8a58-4ba7-8df2-80fd1a65b793/unified_audit');

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const el = await page.$('[id="3d-pack-studio"]');
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    // Pause model viewer auto-rotate so Playwright sees it as stable
    await page.evaluate(() => {
      const mv = document.querySelector('#home3DStudioViewer');
      if (mv) mv.removeAttribute('auto-rotate');
    });
    await page.waitForTimeout(500);
    await el.screenshot({ path: path.join(outDir, '08-3d-pack-studio.png'), animations: 'disabled' });
    console.log('✓ Successfully captured 08-3d-pack-studio.png');
  }

  await browser.close();
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

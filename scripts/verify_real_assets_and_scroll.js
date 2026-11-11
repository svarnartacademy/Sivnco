const { chromium } = require('playwright');

const ROUTES = [
  '/',
  '/work',
  '/visual-diary',
  '/resume',
  '/jusamazin',
  '/jusamazin/desi-energy-bar',
  '/campaigns',
  '/design-systems',
  '/web-development',
  '/ai-workflow',
  '/artist-educator'
];

async function verify() {
  const browser = await chromium.launch({ headless: true });
  const BASE_URL = 'http://localhost:3000';

  for (const route of ROUTES) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const consoleErrors = [];
    const pageErrors = [];

    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', err => pageErrors.push(err.toString()));

    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 15000 });

    // Scroll through the entire page so all lazy images trigger
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let totalHeight = 0;
        const distance = 800;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    await page.waitForTimeout(1000);

    // Now check actual broken images (naturalWidth === 0 after scroll)
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.filter(img => img.naturalWidth === 0).map(img => img.src);
    });

    // Check true page horizontal scroll
    const scrollInfo = await page.evaluate(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasHorizontalScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth
      };
    });

    console.log(`\nROUTE: ${route}`);
    console.log(`  Horizontal Scroll: ${scrollInfo.hasHorizontalScroll ? `YES (${scrollInfo.scrollWidth}px > ${scrollInfo.clientWidth}px)` : 'NO (Clean 100%)'}`);
    console.log(`  Broken Images (${brokenImages.length}):`, brokenImages);
    if (pageErrors.length > 0) console.log(`  Page Errors (${pageErrors.length}):`, pageErrors);
    if (consoleErrors.length > 0) console.log(`  Console Errors (${consoleErrors.length}):`, consoleErrors);

    await page.close();
  }

  await browser.close();
}

verify().catch(console.error);

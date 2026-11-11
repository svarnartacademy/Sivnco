const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

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

async function diagnose() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--enable-webgl', '--use-gl=angle', '--no-sandbox']
  });

  const BASE_URL = 'http://localhost:3000';
  console.log(`Starting comprehensive diagnostic audit on ${BASE_URL}...`);

  for (const route of ROUTES) {
    console.log(`\n========================================`);
    console.log(`CHECKING ROUTE: ${route}`);
    console.log(`========================================`);

    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    const consoleLogs = [];
    const pageErrors = [];
    const failedRequests = [];

    page.on('console', msg => {
      if (msg.type() === 'error' || msg.text().toLowerCase().includes('error')) {
        consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
      }
    });

    page.on('pageerror', err => {
      pageErrors.push(err.toString());
    });

    page.on('requestfailed', req => {
      failedRequests.push(`${req.url()} (${req.failure()?.errorText || 'failed'})`);
    });

    try {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2500);

      // 1. Check broken images
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.filter(img => {
          return !img.complete || img.naturalWidth === 0;
        }).map(img => ({
          src: img.src,
          alt: img.alt,
          outerHTML: img.outerHTML.substring(0, 120)
        }));
      });

      // 2. Check broken links
      const allLinks = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('a[href]'));
        return anchors.map(a => ({
          text: a.innerText.trim().replace(/\n/g, ' ').substring(0, 40),
          href: a.getAttribute('href')
        }));
      });

      // 3. Check section rendering
      const sections = await page.evaluate(() => {
        const secs = Array.from(document.querySelectorAll('section, [id], article, .hero'));
        return secs.map(s => {
          const rect = s.getBoundingClientRect();
          const visible = rect.width > 0 && rect.height > 0 && window.getComputedStyle(s).display !== 'none';
          const opacity = window.getComputedStyle(s).opacity;
          return {
            id: s.id || s.className?.substring(0, 30) || s.tagName,
            tag: s.tagName,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            top: Math.round(rect.top),
            visible,
            opacity
          };
        }).filter(s => s.height === 0 || s.opacity === '0');
      });

      // 4. Check horizontal overflow (breaking scroll)
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const badElements = [];
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > docWidth + 2 && rect.width > 10) {
            badElements.push({
              tag: el.tagName,
              id: el.id,
              class: el.className?.substring?.(0, 40),
              right: Math.round(rect.right),
              docWidth
            });
          }
        });
        return badElements.slice(0, 5);
      });

      console.log(`Page Errors (${pageErrors.length}):`, pageErrors);
      console.log(`Console Errors (${consoleLogs.length}):`, consoleLogs.slice(0, 5));
      console.log(`Failed Network Requests (${failedRequests.length}):`, failedRequests.slice(0, 5));
      console.log(`Broken Images (${brokenImages.length}):`, brokenImages);
      console.log(`Invisible or Zero-Height Sections (${sections.length}):`, sections.slice(0, 5));
      if (overflow.length > 0) {
        console.log(`Horizontal Overflows (${overflow.length}):`, overflow);
      } else {
        console.log(`No horizontal overflow.`);
      }

    } catch (err) {
      console.error(`Failed to audit ${route}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nDiagnostic audit completed.');
}

diagnose().catch(err => {
  console.error('Diagnosis failed:', err);
  process.exit(1);
});

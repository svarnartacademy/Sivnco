import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = 'http://localhost:3100';
const OUT_DIR = 'audit-results';
fs.mkdirSync(OUT_DIR, { recursive: true });

const ROUTES = [
  '/',
  '/work',
  '/resume',
  '/contact',
  '/campaigns',
  '/jusamazin/desi-energy-bar',
  '/jusamazin/core-packaging',
  '/jusamazin/bars',
  '/jusamazin/gifting',
  '/in-house-designs',
  '/art',
  '/artist-educator',
  '/visual-diary'
];

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true
  });

  const auditReport = [];

  for (const viewport of [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 }
  ]) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1
    });

    const page = await context.newPage();

    for (const route of ROUTES) {
      const consoleErrors = [];
      const networkFailures = [];

      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      page.on('requestfailed', req => {
        networkFailures.push({ url: req.url(), failure: req.failure()?.errorText });
      });

      page.on('response', res => {
        if (res.status() >= 400 && !res.url().includes('favicon')) {
          networkFailures.push({ url: res.url(), status: res.status() });
        }
      });

      let response;
      try {
        response = await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 15000 });
      } catch (e) {
        response = await page.goto(BASE + route, { waitUntil: 'domcontentloaded', timeout: 15000 });
      }

      await page.waitForTimeout(1000);

      // Collect DOM inspection data
      const pageAudit = await page.evaluate(({ vw }) => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const hasHorizontalOverflow = docWidth > vw || bodyWidth > vw;

        // Find elements causing overflow
        const overflowingElements = [];
        if (hasHorizontalOverflow) {
          const allElements = document.querySelectorAll('*');
          for (const el of allElements) {
            const rect = el.getBoundingClientRect();
            if (rect.right > vw + 1 || rect.left < -1) {
              overflowingElements.push({
                tag: el.tagName,
                className: (el.className || '').toString().substring(0, 50),
                id: el.id,
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width)
              });
              if (overflowingElements.length >= 5) break;
            }
          }
        }

        // Check broken images
        const brokenImages = [];
        document.querySelectorAll('img').forEach(img => {
          if (img.complete && img.naturalWidth === 0 && img.src && !img.src.startsWith('data:')) {
            brokenImages.push({
              src: img.src,
              alt: img.alt,
              className: img.className
            });
          }
        });

        // Check unstyled or problematic typography
        const typographyIssues = [];
        document.querySelectorAll('h1, h2, h3').forEach(h => {
          const style = window.getComputedStyle(h);
          const rect = h.getBoundingClientRect();
          if (rect.width > vw) {
            typographyIssues.push({
              tag: h.tagName,
              text: h.textContent?.substring(0, 30),
              fontSize: style.fontSize,
              width: rect.width
            });
          }
        });

        // Check contrast / visibility of buttons & links
        const linkIssues = [];
        document.querySelectorAll('a, button').forEach(el => {
          const style = window.getComputedStyle(el);
          if (style.display !== 'none' && style.visibility !== 'hidden') {
            const color = style.color;
            const bg = style.backgroundColor;
            // Check if text is completely invisible (e.g. black text on near black bg)
            if (color === 'rgb(0, 0, 0)' && (bg === 'rgba(0, 0, 0, 0)' || bg === 'rgb(10, 9, 6)' || bg === 'rgb(14, 12, 9)')) {
              linkIssues.push({
                text: el.textContent?.trim().substring(0, 30),
                color,
                bg,
                tag: el.tagName
              });
            }
          }
        });

        return {
          docWidth,
          hasHorizontalOverflow,
          overflowingElements,
          brokenImages,
          typographyIssues,
          linkIssues: linkIssues.slice(0, 5)
        };
      }, { vw: viewport.width });

      const slug = route === '/' ? 'home' : route.replace(/\//g, '_').replace(/^_/, '');
      const screenshotName = `${viewport.name}-${slug}.png`;
      await page.screenshot({ path: path.join(OUT_DIR, screenshotName), fullPage: false });

      auditReport.push({
        viewport: viewport.name,
        route,
        status: response?.status(),
        ...pageAudit,
        consoleErrors: consoleErrors.slice(0, 5),
        networkFailures: networkFailures.slice(0, 5),
        screenshot: screenshotName
      });
    }

    await context.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(OUT_DIR, 'audit-summary.json'), JSON.stringify(auditReport, null, 2));
  console.log(`Audit finished. Results written to ${OUT_DIR}/audit-summary.json`);
})();

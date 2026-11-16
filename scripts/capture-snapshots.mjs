import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = 'C:/Users/Shiva/.gemini/antigravity/brain/76c44e98-d40f-42ed-a2a8-b05a66c1d001/preview-artifacts';
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
fs.mkdirSync('audit-results', { recursive: true });

const ROUTES = [
  { path: '/', slug: 'home' },
  { path: '/work', slug: 'work' },
  { path: '/resume', slug: 'resume' },
  { path: '/contact', slug: 'contact' }
];

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true
  });

  for (const vp of [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 }
  ]) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1
    });

    const page = await context.newPage();

    for (const r of ROUTES) {
      console.log(`Capturing ${vp.name} ${r.slug}...`);
      await page.goto(`http://localhost:3100${r.path}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1500);

      const filename = `${vp.name}-${r.slug}.png`;
      const localPath = path.join('audit-results', filename);
      const artifactPath = path.join(ARTIFACT_DIR, filename);

      await page.screenshot({ path: localPath, fullPage: true });
      fs.copyFileSync(localPath, artifactPath);
      console.log(`Saved ${filename}`);
    }

    await context.close();
  }

  await browser.close();
  console.log('All snapshots captured and saved successfully.');
})();

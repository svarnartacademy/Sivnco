const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = path.resolve('C:/Users/Shiva/.gemini/antigravity/brain/4081f7e0-8a58-4ba7-8df2-80fd1a65b793/verification_screenshots');

async function capture() {
  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({
    headless: true,
    args: ['--enable-webgl', '--use-gl=angle', '--no-sandbox']
  });

  const BASE_URL = 'http://localhost:3000';

  // --- MOBILE VIEWPORT (iPhone 14 / 390 x 844) ---
  console.log('--- CAPTURING MOBILE LAYOUTS (390 x 844) ---');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15'
  });
  const mobilePage = await mobileContext.newPage();

  // 8. Homepage Mobile
  console.log('Capturing: Homepage (Mobile 390px)...');
  await mobilePage.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, '08-mobile-homepage.png') });

  // 9. Work Index Mobile
  console.log('Capturing: Work Index (Mobile 390px)...');
  await mobilePage.goto(`${BASE_URL}/work`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(1500);
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, '09-mobile-work-index.png') });

  // 10. Desi Bar Case Study Mobile
  console.log('Capturing: Desi Bar Case Study (Mobile 390px)...');
  await mobilePage.goto(`${BASE_URL}/jusamazin/desi-energy-bar`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(1500);
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, '10-mobile-case-desi-bar.png') });

  // 11. Visual Diary Mobile
  console.log('Capturing: Visual Diary (Mobile 390px)...');
  await mobilePage.goto(`${BASE_URL}/visual-diary`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(1500);
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, '11-mobile-visual-diary.png') });

  // 12. Campaigns Mobile Result Cards
  console.log('Capturing: Campaigns Mobile Result Cards (Mobile 390px)...');
  await mobilePage.goto(`${BASE_URL}/campaigns#compare`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(1500);
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, '12-mobile-campaigns-cards.png') });

  // 13. Mobile Navigation Menu Open
  console.log('Capturing: Mobile Navigation Menu Open (Mobile 390px)...');
  await mobilePage.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(1000);
  const burgerBtn = await mobilePage.$('.snav-burger');
  if (burgerBtn) {
    await burgerBtn.click();
    await mobilePage.waitForTimeout(600);
    await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, '13-mobile-nav-menu-open.png') });
  }

  console.log('All verification screenshots successfully captured in:', ARTIFACT_DIR);
  await browser.close();
}

capture().catch((err) => {
  console.error('Error capturing verification screenshots:', err);
  process.exit(1);
});

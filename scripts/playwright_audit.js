const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runAudit() {
  const screenshotDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

  const browser = await chromium.launch({
    args: ['--enable-webgl', '--use-gl=angle', '--enable-features=Vulkan']
  });

  console.log('=== AUDITING DESKTOP (1440x900) — REBALANCED ATELIER PALETTE ===');
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await desktopPage.waitForTimeout(2000);

  // 1. Audit #statement (The intentional single warm ivory paper spread)
  const statement = await desktopPage.$('#statement');
  if (statement) {
    await statement.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    const bg = await desktopPage.evaluate(() => {
      const el = document.querySelector('#statement');
      return el ? window.getComputedStyle(el).backgroundColor : null;
    });
    console.log('Statement Spread Background:', bg, '(Expected: rgb(244, 241, 234) #F4F1EA)');
    await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-01-statement-paper-spread.png') });
  }

  // 2. Audit Three Portals (Rebalanced to dark atelier cards with jewel-tone borders)
  const portals = await desktopPage.$('#portals');
  if (portals) {
    await portals.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    const bg = await desktopPage.evaluate(() => {
      const card = document.querySelector('.portal-entry-card');
      return card ? window.getComputedStyle(card).backgroundColor : null;
    });
    console.log('Portal Card Background:', bg, '(Expected: dark obsidian atelier / non-white)');
    await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-02-portals-jewel.png') });
  }

  // 3. Audit Case Study Cascade Deck (Rebalanced to dark obsidian cards)
  const csDeck = await desktopPage.$('.cs-cascade-deck');
  if (csDeck) {
    await csDeck.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    const bg = await desktopPage.evaluate(() => {
      const card = document.querySelector('.cs-deck-card');
      return card ? window.getComputedStyle(card).backgroundColor : null;
    });
    console.log('Case Study Deck Card Background:', bg, '(Expected: dark obsidian rgb(18, 16, 12) / non-white)');
    await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-03-casestudy-deck-dark.png') });
  }

  // 4. Audit Studio Realities Humor Deck
  const jokes = await desktopPage.$('#studio-realities');
  if (jokes) {
    await jokes.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    const bg = await desktopPage.evaluate(() => {
      const card = document.querySelector('.studio-joke-card');
      return card ? window.getComputedStyle(card).backgroundColor : null;
    });
    console.log('Studio Joke Card Background:', bg, '(Expected: dark workshop rgb(20, 18, 14) / non-white)');
    await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-04-studio-realities-dark.png') });
  }

  // 5. Audit Working Principles
  const principles = await desktopPage.$('#principles');
  if (principles) {
    await principles.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    const bg = await desktopPage.evaluate(() => {
      const card = document.querySelector('#principles .glass-card');
      return card ? window.getComputedStyle(card).backgroundColor : null;
    });
    console.log('Working Principles Card Background:', bg, '(Expected: dark atelier rgb(18, 16, 12) / non-white)');
    await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-05-principles-dark.png') });
  }

  // 6. Audit Testimonials
  const testimonials = await desktopPage.$('.testimonials-grid');
  if (testimonials) {
    await testimonials.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-06-testimonials-dark.png') });
  }

  console.log('\n=== AUDITING MOBILE (iPhone 14) ===');
  const iPhone = devices['iPhone 14'];
  const mobilePage = await browser.newPage({ ...iPhone });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(2000);

  const mobStatement = await mobilePage.$('#statement');
  if (mobStatement) {
    await mobStatement.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    await mobilePage.screenshot({ path: path.join(screenshotDir, 'mobile-01-statement-paper.png') });
  }

  const mobPortals = await mobilePage.$('#portals');
  if (mobPortals) {
    await mobPortals.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    await mobilePage.screenshot({ path: path.join(screenshotDir, 'mobile-02-portals-dark.png') });
  }

  const mobJokes = await mobilePage.$('#studio-realities');
  if (mobJokes) {
    await mobJokes.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    await mobilePage.screenshot({ path: path.join(screenshotDir, 'mobile-03-jokes-dark.png') });
  }

  await browser.close();
  console.log('\nAudit complete! All screenshots saved in scripts/screenshots/');
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});

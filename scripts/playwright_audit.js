const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runAudit() {
  const screenshotDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

  const browser = await chromium.launch({
    args: ['--enable-webgl', '--use-gl=angle', '--enable-features=Vulkan']
  });

  console.log('=== AUDITING DESKTOP (1440x900) ===');
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1500);

  // Screenshot Hero
  await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-01-hero.png') });
  console.log('Captured desktop hero screenshot');

  // Test Card Hover Glow
  const projectCard = await desktopPage.$('.glass-card.project-card');
  if (projectCard) {
    const box = await projectCard.boundingBox();
    if (box) {
      await desktopPage.mouse.move(box.x + box.width * 0.4, box.y + box.height * 0.4);
      await desktopPage.waitForTimeout(300);
      const mouseCoords = await projectCard.evaluate(el => ({
        x: el.style.getPropertyValue('--mouse-x'),
        y: el.style.getPropertyValue('--mouse-y')
      }));
      console.log('Hover halo coordinates on project card:', mouseCoords);
    }
  }

  // Scroll to 3D Studio & wait for model load
  const studio3d = await desktopPage.$('#home3DStudioViewer');
  if (studio3d) {
    await studio3d.scrollIntoViewIfNeeded();
    console.log('Waiting for 3D model to load in WebGL...');
    try {
      await desktopPage.waitForFunction(() => {
        const v = document.querySelector('#home3DStudioViewer');
        return v && v.loaded;
      }, { timeout: 12000 });
      console.log('3D model loaded successfully!');
    } catch (e) {
      console.log('3D model wait timed out, proceeding to capture');
    }
    await desktopPage.waitForTimeout(1000);
    await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-02-3dstudio.png') });
    console.log('Captured desktop 3D studio screenshot');
  }

  // Scroll to Testimonials
  const testi = await desktopPage.$('.testi-section');
  if (testi) {
    await testi.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(1000);
    await desktopPage.screenshot({ path: path.join(screenshotDir, 'desktop-03-testimonials.png') });
    console.log('Captured desktop testimonials screenshot');
  }

  await desktopPage.close();

  console.log('\n=== AUDITING MOBILE (iPhone 14 - 390x844) ===');
  const iPhone = devices['iPhone 14'];
  const mobilePage = await browser.newPage({ ...iPhone, hasTouch: true });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1500);

  // Capture Mobile Hero
  await mobilePage.screenshot({ path: path.join(screenshotDir, 'mobile-01-hero.png') });
  console.log('Captured mobile hero screenshot');

  // Mobile 3D Studio
  const mobileStudio = await mobilePage.$('#home3DStudioViewer');
  if (mobileStudio) {
    await mobileStudio.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(2000);
    await mobilePage.screenshot({ path: path.join(screenshotDir, 'mobile-03-3dstudio.png') });
    console.log('Captured mobile 3D studio screenshot');
  }

  // Mobile Testimonials
  const mobileTesti = await mobilePage.$('.testi-section');
  if (mobileTesti) {
    await mobileTesti.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(1000);
    const cardWidths = await mobilePage.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.testimonials-grid .testi-card'));
      return cards.map(c => c.getBoundingClientRect().width);
    });
    console.log('Mobile Testimonial Card Widths (should all be ~358px):', cardWidths);
    await mobilePage.screenshot({ path: path.join(screenshotDir, 'mobile-04-testimonials.png') });
    console.log('Captured mobile testimonials screenshot');
  }

  await mobilePage.close();
  await browser.close();
  console.log('\nAudit completed successfully!');
}

runAudit().catch(err => {
  console.error('Audit error:', err);
  process.exit(1);
});

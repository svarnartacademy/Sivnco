import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = 'http://localhost:3100';
fs.mkdirSync('preview-artifacts', { recursive: true });

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true
  });

  const results = {
    pages: [],
    redirects: [],
    resumeChecks: {},
    downloads: [],
    mobile: [],
    navbar: {},
    passed: true
  };

  const page = await browser.newPage();

  // 1. Pages check
  const routes = [
    '/',
    '/resume',
    '/contact',
    '/campaigns',
    '/jusamazin/desi-energy-bar',
    '/jusamazin/core-packaging',
    '/in-house-designs'
  ];

  for (const r of routes) {
    const res = await page.goto(BASE + r, { waitUntil: 'domcontentloaded' });
    const meta = await page.evaluate(() => ({
      titleCount: document.querySelectorAll('title').length,
      title: document.title,
      descriptionCount: document.querySelectorAll('meta[name="description"]').length,
      description: document.querySelector('meta[name="description"]')?.content,
      canonicalCount: document.querySelectorAll('link[rel="canonical"]').length,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      h1: document.querySelector('h1')?.textContent?.trim()
    }));
    results.pages.push({ route: r, status: res.status(), ...meta });
  }

  // 2. Redirect check (/projects -> /in-house-designs)
  const projRes = await page.goto(BASE + '/projects', { waitUntil: 'domcontentloaded' });
  results.redirects.push({
    from: '/projects',
    finalUrl: page.url(),
    status: projRes.status(),
    success: page.url().includes('/in-house-designs')
  });

  // 3. Resume checks
  await page.goto(BASE + '/resume');
  results.resumeChecks = await page.evaluate(() => {
    const hasTabs = !!document.querySelector('.resume-tabs');
    const pageText = document.body.innerText;
    const hasChooserText = pageText.includes('Choose the resume that matches the opportunity');
    const buttons = Array.from(document.querySelectorAll('button')).map(b => b.textContent?.trim());
    const primaryLink = document.querySelector('.resume-primary');
    return {
      hasTabs,
      hasChooserText,
      buttons,
      primaryText: primaryLink?.textContent?.trim(),
      primaryHref: primaryLink?.getAttribute('href')
    };
  });

  // 4. Download checks
  for (const href of ['/resume.pdf', '/resumes/H_P_Shivaraj_Brand_Packaging_Designer.pdf']) {
    const res = await page.request.get(BASE + href);
    const body = await res.body();
    results.downloads.push({
      href,
      status: res.status(),
      isPdf: body.subarray(0, 5).toString() === '%PDF-',
      bytes: body.length
    });
  }

  // 5. Navbar contact link checks
  await page.goto(BASE + '/');
  const homeNav = await page.evaluate(() => {
    const desktopContact = document.querySelector('.nav-links a[href="/contact"]');
    const mobileContact = document.querySelector('.nav-menu-inner a[href="/contact"]');
    const oldDesktopContact = document.querySelector('.nav-links a[href="#contact"]');
    return {
      desktopContactFound: !!desktopContact,
      mobileContactFound: !!mobileContact,
      oldDesktopContactFound: !!oldDesktopContact
    };
  });

  await page.goto(BASE + '/resume');
  const componentNav = await page.evaluate(() => {
    const desktopContact = document.querySelector('.snav-link-item[href="/contact"]');
    const mobileContact = document.querySelector('.snav-mobile-link[href="/contact"]');
    const oldDesktopContact = document.querySelector('.snav-link-item[href="/#contact"]');
    return {
      componentDesktopFound: !!desktopContact,
      componentMobileFound: !!mobileContact,
      oldComponentDesktopFound: !!oldDesktopContact
    };
  });
  results.navbar = { homeNav, componentNav };

  // 6. Desktop Screenshots
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE + '/');
  await page.screenshot({ path: 'preview-artifacts/desktop-home.png' });

  await page.goto(BASE + '/resume');
  await page.screenshot({ path: 'preview-artifacts/desktop-resume.png' });

  await page.goto(BASE + '/contact');
  await page.screenshot({ path: 'preview-artifacts/desktop-contact.png' });

  // 7. Mobile Viewport & Overflow checks (390px)
  await page.setViewportSize({ width: 390, height: 844 });
  for (const r of ['/', '/resume', '/contact']) {
    await page.goto(BASE + r);
    const scrollInfo = await page.evaluate(() => ({
      viewport: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      noOverflow: document.documentElement.scrollWidth <= window.innerWidth
    }));
    results.mobile.push({ route: r, ...scrollInfo });
    const cleanRoute = r === '/' ? 'home' : r.replace('/', '');
    await page.screenshot({ path: `preview-artifacts/mobile-${cleanRoute}.png`, fullPage: false });
  }

  // Overall passed flag
  results.passed =
    results.pages.every(p => p.status === 200 && p.titleCount === 1 && p.descriptionCount === 1 && p.canonicalCount === 1) &&
    results.redirects.every(r => r.success) &&
    !results.resumeChecks.hasTabs &&
    !results.resumeChecks.hasChooserText &&
    results.resumeChecks.primaryText === 'Download resume PDF' &&
    results.downloads.every(d => d.status === 200 && d.isPdf) &&
    results.navbar.homeNav.desktopContactFound &&
    results.navbar.componentNav.componentDesktopFound &&
    !results.navbar.homeNav.oldDesktopContactFound &&
    !results.navbar.componentNav.oldComponentDesktopFound &&
    results.mobile.every(m => m.noOverflow);

  console.log(JSON.stringify(results, null, 2));
  fs.writeFileSync('preview-artifacts/test-results.json', JSON.stringify(results, null, 2));

  await browser.close();
  if (!results.passed) process.exitCode = 1;
})();

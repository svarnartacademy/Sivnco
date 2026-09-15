import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import StartProjectButton from '@/components/demo'

// Three.js uses browser-only APIs — must skip SSR
const FlowGradientHero = dynamic(
  () => import('../components/ui/flow-gradient-hero-section'),
  { ssr: false }
)

// Mobile-responsive overrides injected directly from Next.js (always fresh, not from index.html)
const MOBILE_CSS = `
  /* ======================================================= */
  /* TEMP GREY TEST - HOMEPAGE OVERRIDE                      */
  /* ======================================================= */
  :root, html, body {
    --bg-color: #4A4A4A !important;
    background-color: #4A4A4A !important;
    background: #4A4A4A !important;
  }
  .main-wrap {
    background-color: #4A4A4A !important;
  }
  .footer-fixed {
    background: #353535 !important;
  }
  .hero-blur-fade {
    background: linear-gradient(to bottom, transparent 0%, rgba(74,74,74,0.3) 30%, rgba(74,74,74,0.75) 60%, #4A4A4A 100%) !important;
  }

  /* ======================================================= */
  /* HOVER GLOW EFFECTS — radial gradient on interactive cards */
  /* ======================================================= */

  .glass-card,
  .role-card,
  .svarnart-chip,
  .etym-part,
  .cs-img-slot,
  .cs-ba-side,
  .etymology-grid {
    position: relative !important;
    overflow: hidden !important;
  }

  .glass-card::after,
  .role-card::after,
  .svarnart-chip::after,
  .etym-part::after,
  .cs-img-slot::after,
  .cs-ba-side::after {
    content: '' !important;
    position: absolute !important;
    inset: 0 !important;
    background: radial-gradient(circle at 50% 0%, rgba(212,96,10,0.12), transparent 70%) !important;
    opacity: 0 !important;
    transition: opacity 0.4s ease !important;
    pointer-events: none !important;
    z-index: 1 !important;
  }

  .glass-card:hover::after,
  .role-card:hover::after,
  .svarnart-chip:hover::after,
  .etym-part:hover::after,
  .cs-img-slot:hover::after,
  .cs-ba-side:hover::after {
    opacity: 1 !important;
  }

  /* Nav CTA glow */
  .nav-cta {
    position: relative !important;
    overflow: hidden !important;
  }
  .nav-cta::after {
    content: '' !important;
    position: absolute !important;
    inset: 0 !important;
    background: radial-gradient(circle at 50% 50%, rgba(212,96,10,0.15), transparent 70%) !important;
    opacity: 0 !important;
    transition: opacity 0.3s ease !important;
    pointer-events: none !important;
    border-radius: 40px !important;
  }
  .nav-cta:hover::after {
    opacity: 1 !important;
  }

  /* Subtle border glow on hover for all cards */
  .glass-card:hover,
  .role-card:hover,
  .svarnart-chip:hover,
  .cs-img-slot:hover {
    border-color: rgba(212,96,10,0.25) !important;
  }

  /* ======================================================= */
  /* FLUIDIC ORGANIC CARDS & METRIC CAPSULES (NO MORE BOXY)  */
  /* ======================================================= */
  .metrics-grid {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 1.2rem !important;
    background: transparent !important;
    border: none !important;
  }

  .metric-card {
    flex: 1 1 200px !important;
    background: rgba(240, 237, 230, 0.03) !important;
    border: 1px solid rgba(240, 237, 230, 0.1) !important;
    border-radius: 9999px !important;
    padding: 1.8rem 2.5rem !important;
    backdrop-filter: blur(24px) !important;
    -webkit-backdrop-filter: blur(24px) !important;
    text-align: center !important;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
  }

  .metric-card:hover {
    transform: translateY(-5px) !important;
    border-color: rgba(212, 96, 10, 0.45) !important;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 24px rgba(212, 96, 10, 0.15) !important;
  }

  .glass-card {
    border-radius: 32px !important;
    backdrop-filter: blur(28px) !important;
    -webkit-backdrop-filter: blur(28px) !important;
    border: 1px solid rgba(240, 237, 230, 0.1) !important;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
  }

  .glass-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6) !important;
  }

  .role-card {
    border-radius: 36px !important;
    backdrop-filter: blur(24px) !important;
    -webkit-backdrop-filter: blur(24px) !important;
    border: 1px solid rgba(240, 237, 230, 0.1) !important;
  }

  .vc-card {
    border-radius: 28px !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(240, 237, 230, 0.1) !important;
  }

  .vc-rejected-card, .vc-ext-card, .testi-card {
    border-radius: 24px !important;
  }

  /* ======================================================= */
  /* SIVNCO MOBILE RESPONSIVE — injected by pages/index.js   */
  /* ======================================================= */

  .hero-section {
    align-items: flex-start !important;
  }
  .hero-split {
    min-height: auto !important;
    align-items: flex-start !important;
    padding-top: 0 !important;
  }
  .hero-left, .hero-right {
    padding-top: 0 !important;
  }

  @media(max-width:1024px) {
    .hero-section { align-items: flex-start !important; }
    .h-massive { font-size: clamp(3.2rem, 10vw, 8rem) !important; line-height: 0.98 !important; }
    .hero-stats-bar { gap: 2rem; }
    .hero-split { grid-template-columns: 1fr !important; gap: 3rem !important; }
    .hero-right { border-left: none !important; border-top: 1px solid var(--glass-border) !important; padding-left: 0 !important; padding-top: 2.5rem !important; }
    .glass-card.project-card { grid-column: span 12 !important; min-height: 320px !important; height: auto !important; padding: 2.4rem 2rem !important; }
    #horizontal-sec { overflow: visible !important; padding: 6vh 0 !important; }
    .h-sticky { height: auto !important; display: block !important; }
    .h-container { display: flex !important; flex-direction: column !important; width: 100% !important; padding: 0 4vw !important; gap: 2rem !important; }
    .h-container > div:first-child { width: 100% !important; }
    .role-card { width: 100% !important; min-height: auto !important; padding: 2.5rem 2rem !important; flex-shrink: unset !important; }
    .role-card h3 { font-size: clamp(1.8rem, 5vw, 2.8rem) !important; }
    .footer-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .testi-card:last-child { grid-column: span 2 !important; }
    .vc-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .vc-rejected-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.2rem !important; }
    .vc-rejected-card:last-child { grid-column: span 2 !important; }
    .vc-campaign-ext { grid-template-columns: repeat(2, 1fr) !important; gap: 1.2rem !important; }
    .vc-ext-card:last-child { grid-column: span 2 !important; }
    #principles .glass-card { padding: 2rem 1.6rem !important; }
    .studio-3d-box { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 1.5rem !important; }

    /* Unpin fixed curtain footer on tablets & mobile to prevent content cutoff */
    .footer-fixed {
      position: relative !important;
      height: auto !important;
      min-height: unset !important;
      bottom: unset !important;
      left: unset !important;
      right: unset !important;
      padding: 4rem 0 3rem !important;
      overflow-y: visible !important;
      display: block !important;
    }
    .main-wrap {
      margin-bottom: 0 !important;
    }
    .nav-chat-panel-body {
      height: min(520px, calc(100dvh - 5.5rem)) !important;
      max-height: 520px !important;
    }
  }

  /* Mobile */
  @media(max-width:768px) {
    /* Top bar */
    .top-bar {
      font-size: 0.55rem !important;
      padding: 0.4rem 3vw !important;
      flex-wrap: wrap !important;
      gap: 0.3rem !important;
      justify-content: center !important;
      text-align: center !important;
    }

    /* Hero */
    .hero-section { height: auto !important; min-height: 100vh !important; padding-bottom: 3rem !important; }
    .h-massive { font-size: clamp(2.4rem, 11vw, 7rem) !important; line-height: 0.98 !important; word-break: break-word !important; }
    .h-large { font-size: clamp(1.8rem, 8vw, 4.2rem) !important; }
    .hero-roles { gap: 0.8rem !important; font-size: 0.6rem !important; margin-top: 1.8rem !important; flex-wrap: wrap !important; }
    .hero-stats-bar { gap: 1.5rem !important; margin-top: 2.5rem !important; flex-direction: column !important; align-items: flex-start !important; }
    .hero-stat-num { font-size: clamp(2rem, 8vw, 3.5rem) !important; }
    .hero-float-tag { display: none !important; }
    .hero-line-h { display: none !important; }
    .hero-pill { font-size: 0.6rem !important; padding: 0.3rem 0.8rem !important; margin-bottom: 1.5rem !important; }

    /* Section spacing */
    .section { padding: 7vh 0 !important; }
    .container { padding: 0 4vw !important; }

    /* Project gallery — single column */
    .glass-card.project-card { grid-column: span 12 !important; min-height: 260px !important; height: auto !important; width: 100% !important; padding: 1.8rem 1.4rem !important; }

    /* Metrics */
    .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }

    /* Mosaic Slots */
    .cs-img-mosaic { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; gap: 0.8rem !important; }
    .cs-img-slot { min-height: 200px !important; }
    .cs-img-slot.tall { grid-row: span 1 !important; }
    .cs-img-slot#csImg_motion { grid-column: span 2 !important; min-height: 200px !important; }

    /* Visual Concepts on Mobile */
    .vc-card { padding: 1.6rem 1.2rem !important; }
    .vc-rejected-card { padding: 1.4rem 1rem !important; }
    .vc-ext-card { padding: 1.4rem 1rem !important; }
    .testi-card { padding: 1.8rem 1.3rem !important; }
    #principles .glass-card { padding: 1.5rem 1.2rem !important; }

    /* -- FOUR ROLES HORIZONTAL SCROLL -> VERTICAL STACK -- */
    #horizontal-sec { overflow: visible !important; padding: 5vh 0 !important; }
    .h-sticky { height: auto !important; display: block !important; }
    .h-container {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      padding: 0 4vw !important;
      gap: 1.6rem !important;
    }
    .h-container > div:first-child { width: 100% !important; }
    .role-card {
      width: 100% !important;
      min-height: auto !important;
      padding: 2rem 1.4rem !important;
      flex-shrink: unset !important;
    }
    .role-card h3 { font-size: clamp(1.5rem, 6vw, 2.2rem) !important; }

    /* -- SVARNART SECTION -- */
    .svarnart-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .svarnart-grid > div:last-child { padding-top: 0 !important; }
    .etymology-grid {
      grid-template-columns: 1fr !important;
      gap: 0 !important;
    }
    .etym-part {
      border-right: none !important;
      border-bottom: 1px solid rgba(240,237,230,0.12) !important;
      padding: 1.2rem 0 !important;
    }
    .etym-part:last-child { border-bottom: none !important; }
    .etym-connector { border-right: none !important; padding: 0.6rem 0 !important; display: none !important; }
    .etym-word { font-size: 1.8rem !important; }
    .svarnart-section::before { font-size: clamp(4rem, 20vw, 12rem) !important; }

    /* -- ART COMMISSION -- */
    .art-comm-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }

    /* Make contact form full width */
    #contactForm {
      width: 100% !important;
    }
    #contactForm > div:first-child {
      grid-template-columns: 1fr !important;
    }
    .footer-fixed h2 {
      font-size: clamp(2.2rem, 9vw, 4.5rem) !important;
      line-height: 1 !important;
    }
    .footer-fixed > div > div:last-child {
      flex-direction: column !important;
      gap: 0.8rem !important;
      text-align: center !important;
    }

    /* Testimonials & pricing */
    .testimonials-grid { grid-template-columns: 1fr !important; }
    .pricing-grid { grid-template-columns: 1fr !important; }

    /* Before/After */
    .cs-before-after { grid-template-columns: 1fr !important; }

    /* Cursor — native touch on mobile */
    #cursor-dot, #dot { display: none !important; }
    body { cursor: auto !important; }
  }

  /* Small phones */
  @media(max-width:480px) {
    .h-massive { font-size: clamp(2.1rem, 11vw, 4.5rem) !important; }
    .h-large { font-size: clamp(1.6rem, 8vw, 3.2rem) !important; }
    .hero-roles { flex-direction: column !important; gap: 0.5rem !important; align-items: flex-start !important; }
    .hero-roles span:not(:last-child)::after { display: none !important; }
    .glass-card.project-card { min-height: 240px !important; height: auto !important; padding: 1.4rem 1.1rem !important; }
    .metric-card { padding: 1.2rem 1.2rem !important; border-radius: 24px !important; }
    .testi-card { padding: 1.4rem 1.1rem !important; }
    .price-card { padding: 1.8rem 1.2rem !important; }
    .role-card { padding: 1.6rem 1.2rem !important; }
    .footer-fixed .h2, .footer-fixed h2 { font-size: clamp(2rem, 9vw, 3.8rem) !important; }
  }
`

export default function Home({ bodyHTML, inlineScript }) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>H P Shivaraj — Brand &amp; Packaging Design Lead | Sivnco</title>
        <meta name="description" content="H P Shivaraj — Brand &amp; Packaging Design Lead. Packaging systems, brand identity, FMCG shelf presence, fine art practice. 176% revenue growth. Bengaluru." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivnco.in/" />
        <meta property="og:title" content="H P Shivaraj — Brand &amp; Packaging Design Lead | Sivnco" />
        <meta property="og:description" content="Brand &amp; Packaging Design Lead, Fine Artist. Packaging systems, FMCG shelf presence, 176% revenue growth. Bengaluru." />
        <meta property="og:image" content="https://sivnco.in/images/thumbnail.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="H P Shivaraj — Brand &amp; Packaging Design Lead | Sivnco" />
        <meta name="twitter:description" content="Brand &amp; Packaging Design Lead, Fine Artist. Packaging systems &amp; FMCG shelf presence. Bengaluru." />
        <meta name="twitter:image" content="https://sivnco.in/images/thumbnail.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        {/* Mobile CSS injected directly — guaranteed fresh on every deploy */}
        <style dangerouslySetInnerHTML={{ __html: MOBILE_CSS }} />
        {/* model-viewer loaded conditionally for 3D model renders */}
        <script type="module" src="https://unpkg.com/@google/model-viewer@3.3.0/dist/model-viewer.min.js" />
      </Head>

      {/* CDN scripts — use afterInteractive (beforeInteractive only works in _document for Pages Router) */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      {/* model-viewer loaded globally via pages/_document.js as proper type="module" */}

      {/* Animated hero background */}
      <FlowGradientHero />

      {/* Full site body */}
      <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />

      {/* Inline site script — waits for GSAP & Lenis to be available */}
      <Script
        id="site-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: `
          (function waitForLibs() {
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof Lenis === 'undefined') {
              setTimeout(waitForLibs, 80);
              return;
            }
            ${inlineScript}
          })();
        ` }}
      />

      {/* Maya nav toggle — runs immediately, no GSAP dependency */}
      <Script
        id="maya-nav"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: `
(function() {
  function initNav() {
    var nav       = document.getElementById('mainNav');
    var mayaBtn   = document.getElementById('mayaToggleBtn');
    var burgerBtn = document.getElementById('menuToggleBtn');
    var iframe    = document.getElementById('mayaFrame');
    if (!nav) return;

    function closeAll() {
      nav.classList.remove('chat-open', 'menu-open');
      if (mayaBtn) mayaBtn.setAttribute('aria-expanded', 'false');
      if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
      document.removeEventListener('pointerdown', outsideClose);
    }

    function openMaya() {
      nav.classList.remove('menu-open');
      if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
      nav.classList.add('chat-open');
      if (mayaBtn) mayaBtn.setAttribute('aria-expanded', 'true');
      if (iframe && iframe.dataset.src && !iframe.src) {
        iframe.src = iframe.dataset.src;
      }
      setTimeout(function() {
        document.addEventListener('pointerdown', outsideClose);
      }, 10);
    }

    function openMenu() {
      nav.classList.remove('chat-open');
      if (mayaBtn) mayaBtn.setAttribute('aria-expanded', 'false');
      nav.classList.add('menu-open');
      if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'true');
      setTimeout(function() {
        document.addEventListener('pointerdown', outsideClose);
      }, 10);
    }

    function outsideClose(e) {
      if (!nav.contains(e.target)) closeAll();
    }

    if (mayaBtn) {
      mayaBtn.addEventListener('click', function() {
        nav.classList.contains('chat-open') ? closeAll() : openMaya();
      });
    }

    if (burgerBtn) {
      burgerBtn.addEventListener('click', function() {
        nav.classList.contains('menu-open') ? closeAll() : openMenu();
      });
    }

    // Auto close mobile menu when link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(function(link) {
      link.addEventListener('click', closeAll);
    });

    // Contact anchor link smooth scroll to footer CTA section
    document.querySelectorAll('a[href="#contact"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        closeAll();
        var targetY = document.body.scrollHeight;
        if (window.lenis && typeof window.lenis.scrollTo === 'function') {
          window.lenis.scrollTo(targetY, { duration: 1.2 });
        } else {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      });
    });

    window.toggleMayaChat = function() {
      nav.classList.contains('chat-open') ? closeAll() : openMaya();
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
        ` }}
      />

      {/* 3D Pack Studio Interaction Script — immediate afterInteractive execution */}
      <Script
        id="studio-3d-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: `
(function() {
  function init3DStudio() {
    var viewer = document.getElementById('home3DStudioViewer');
    var skuButtons = document.querySelectorAll('.studio-sku-btn');
    var lightButtons = document.querySelectorAll('.studio-light-btn');
    if (!viewer || !skuButtons.length) return;

    skuButtons.forEach(function(btn) {
      btn.onclick = function() {
        skuButtons.forEach(function(b) {
          b.classList.remove('active');
          b.style.borderColor = 'var(--glass-border)';
          b.style.background = 'rgba(255,255,255,0.02)';
          b.style.color = 'var(--text-muted)';
          var check = b.querySelector('span:last-child');
          if (check) check.style.display = 'none';
        });
        btn.classList.add('active');
        btn.style.borderColor = 'var(--accent)';
        btn.style.background = 'rgba(212,96,10,0.12)';
        btn.style.color = '#FFF';
        var check = btn.querySelector('span:last-child');
        if (check) check.style.display = 'inline';

        var src = btn.getAttribute('data-src');
        if (src) {
          viewer.src = src;
          viewer.setAttribute('src', src);
        }
      };
    });

    lightButtons.forEach(function(btn) {
      btn.onclick = function() {
        lightButtons.forEach(function(b) {
          b.classList.remove('active');
          b.style.borderColor = 'var(--glass-border)';
          b.style.background = 'rgba(255,255,255,0.02)';
          b.style.color = 'var(--text-muted)';
        });
        btn.classList.add('active');
        btn.style.borderColor = 'var(--accent)';
        btn.style.background = 'rgba(212,96,10,0.2)';
        btn.style.color = '#FFF';

        var mode = btn.getAttribute('data-light');
        if (mode === 'neutral') {
          viewer.setAttribute('environment-image', 'neutral');
          viewer.setAttribute('exposure', '1.0');
          viewer.setAttribute('shadow-intensity', '1.0');
          viewer.setAttribute('shadow-softness', '0.5');
        } else if (mode === 'sun' || mode === 'legacy') {
          viewer.setAttribute('environment-image', 'neutral');
          viewer.setAttribute('exposure', '1.6');
          viewer.setAttribute('shadow-intensity', '1.8');
          viewer.setAttribute('shadow-softness', '0.2');
        } else {
          viewer.removeAttribute('environment-image');
          viewer.setAttribute('exposure', '0.9');
          viewer.setAttribute('shadow-intensity', '0.3');
          viewer.setAttribute('shadow-softness', '1.0');
        }
      };
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init3DStudio);
  } else {
    init3DStudio();
  }
  setTimeout(init3DStudio, 150);
  setTimeout(init3DStudio, 600);
})();
        ` }}
      />
    </>
  )
}

export async function getStaticProps() {
  const htmlPath = path.join(process.cwd(), 'index.html')
  const raw = fs.readFileSync(htmlPath, 'utf8')

  // Extract everything inside <body>...</body>
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  const fullBody = bodyMatch ? bodyMatch[1] : ''

  // Separate the inline <script> block at the end from the HTML
  const lastScriptMatch = fullBody.match(/([\s\S]*)<script>([\s\S]*)<\/script>\s*$/)

  let bodyHTML = fullBody
  let inlineScript = ''

  if (lastScriptMatch) {
    bodyHTML = lastScriptMatch[1]
    inlineScript = lastScriptMatch[2]
  }

  // Strip data-netlify attributes — Next.js plugin v5 cannot assemble prerendered
  // content with these. Form submission is handled via fetch instead (see below).
  bodyHTML = bodyHTML
    .replace(/\s*data-netlify="true"/g, '')
    .replace(/\s*data-netlify-honeypot="[^"]*"/g, '')
    .replace(/<input[^>]*name="form-name"[^>]*>/g, '')

  // Extract the <style> block from <head> and inject it into body
  // Use greedy match to capture the FULL style block (not just the first </style> hit)
  const styleMatch = raw.match(/<style>([\s\S]+)<\/style>/i)
  const inlineCSS = styleMatch ? `<style>${styleMatch[1]}</style>` : ''

  // Append fetch-based Netlify Forms submission (Next.js plugin v5 migration)
  const formFetchScript = `
// Netlify Forms via fetch (Next.js plugin v5 migration)
(function() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var data = new FormData(form);
    data.append('form-name', 'contact');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    }).then(function() {
      var status = document.getElementById('formStatus');
      if (status) { status.style.display = 'block'; }
      form.reset();
    }).catch(function(err) { console.error('Form error:', err); });
  });
})();
`

  // On mobile: kill ONLY the horizontal scroll pin, then force all animated
  // elements to their visible end-state so nothing stays blank.
  const mobileScrollFix = `
(function() {
  function applyMobileFixes() {
    if (window.innerWidth > 1024) return;

    // Kill only the horizontal-scroll pin on tablets/mobile
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.getAll().forEach(function(st) {
        var el = st.trigger;
        if (el && (el.id === 'horizontal-sec' || el.classList.contains('h-container'))) {
          st.kill();
        }
      });
    }

    // Immediately reveal all scroll-animated elements so they are never blank
    document.querySelectorAll('.gs-fade, .gs-reveal, .reveal-text, .metric-card, .testi-card, .price-card, .tl-item, .chip').forEach(function(el) {
      el.style.cssText += ';opacity:1!important;transform:none!important;filter:none!important;';
    });
  }

  applyMobileFixes();
  window.addEventListener('resize', applyMobileFixes, { passive: true });
  window.addEventListener('orientationchange', applyMobileFixes, { passive: true });
})();
`



  return {
    props: {
      bodyHTML: inlineCSS + bodyHTML,
      inlineScript: inlineScript + formFetchScript + mobileScrollFix,
    },
  }
}

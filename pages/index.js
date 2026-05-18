import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import StartProjectButton from '@/components/demo'

// Three.js uses browser-only APIs — must skip SSR
const FlowGradientHero = dynamic(
  () => import('../components/ui/flow-gradient-hero-section'),
  { ssr: false }
)

// Mobile-responsive overrides injected directly from Next.js (always fresh, not from index.html)
const MOBILE_CSS = `
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
  /* SIVNCO MOBILE RESPONSIVE — injected by pages/index.js   */
  /* ======================================================= */

  /* Tablets */
  @media(max-width:1024px) {
    .hero-section { padding-top: 4rem; }
    .h-massive { font-size: clamp(3.5rem, 12vw, 10rem) !important; }
    .hero-stats-bar { gap: 2rem; }
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

    /* Nav */
    .nav { padding: 1.2rem 4vw !important; top: 0 !important; }
    .nav-links { gap: 1rem !important; }
    .nav-links a { font-size: 0.6rem !important; }
    .nav-cta { font-size: 0.65rem !important; padding: 0.6rem 1rem !important; }

    /* Hero */
    .hero-section { height: auto !important; min-height: 100vh !important; padding-top: 8rem !important; padding-bottom: 3rem !important; }
    .h-massive { font-size: clamp(3rem, 14vw, 8rem) !important; }
    .h-large { font-size: clamp(2.2rem, 8vw, 5rem) !important; }
    .hero-roles { gap: 1rem !important; font-size: 0.6rem !important; margin-top: 2rem !important; }
    .hero-stats-bar { gap: 1.5rem !important; margin-top: 2.5rem !important; flex-direction: column !important; align-items: center !important; }
    .hero-stat-num { font-size: clamp(2rem, 8vw, 3.5rem) !important; }
    .hero-float-tag { display: none !important; }
    .hero-line-h { display: none !important; }
    .hero-pill { font-size: 0.6rem !important; padding: 0.3rem 0.8rem !important; margin-bottom: 1.5rem !important; }

    /* Section spacing */
    .section { padding: 8vh 0 !important; }
    .container { padding: 0 5vw !important; }

    /* Project gallery — single column */
    .glass-card.project-card { grid-column: span 12 !important; height: 35vh !important; width: 100% !important; }

    /* Metrics */
    .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }

    /* ── FOUR ROLES HORIZONTAL SCROLL → VERTICAL STACK ── */
    #horizontal-sec { overflow: visible !important; padding: 6vh 0 !important; }
    .h-sticky { height: auto !important; display: block !important; }
    .h-container {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      padding: 0 5vw !important;
      gap: 2rem !important;
    }
    .h-container > div:first-child { width: 100% !important; }
    .role-card {
      width: 100% !important;
      min-height: auto !important;
      padding: 2.5rem 1.8rem !important;
      flex-shrink: unset !important;
    }
    .role-card h3 { font-size: clamp(1.6rem, 6vw, 2.5rem) !important; }

    /* ── SVARNART SECTION ── */
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

    /* ── ART COMMISSION ── */
    .art-comm-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }

    /* ── FOOTER / CONTACT SECTION ── */
    /* Stack the 2-col headline+form grid to single column */
    .footer-grid {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
    /* Unpin the fixed footer — becomes normal block flow on mobile */
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
    /* Remove the 100vh margin-bottom that reserved space for the fixed footer */
    .main-wrap {
      margin-bottom: 0 !important;
    }
    /* Make the contact form full width */
    #contactForm {
      width: 100% !important;
    }
    /* Stack the Name / Email side-by-side row to a single column */
    #contactForm > div:first-child {
      grid-template-columns: 1fr !important;
    }
    /* Footer headline sizing */
    .footer-fixed h2 {
      font-size: clamp(2.5rem, 10vw, 5rem) !important;
      line-height: 1 !important;
    }
    /* Footer footnote row — wrap on mobile */
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

    /* Cursor — no mouse on phones */
    #cursor-dot { display: none !important; }
    body { cursor: auto !important; }
  }

  /* Small phones */
  @media(max-width:480px) {
    .h-massive { font-size: clamp(2.5rem, 16vw, 6rem) !important; }
    .h-large { font-size: clamp(1.8rem, 9vw, 4rem) !important; }
    .hero-roles { flex-direction: column !important; gap: 0.6rem !important; align-items: center !important; }
    .hero-roles span:not(:last-child)::after { display: none !important; }
    .glass-card.project-card { height: 28vh !important; padding: 1.5rem !important; }
    .testi-card { padding: 1.5rem !important; }
    .price-card { padding: 2rem 1.5rem !important; }
    .role-card { padding: 2rem 1.4rem !important; }
    .footer-fixed .h2, .footer-fixed h2 { font-size: clamp(2.5rem, 10vw, 5rem) !important; }
  }
`

export default function Home({ bodyHTML, inlineScript }) {
  const [portalNode, setPortalNode] = useState(null)

  useEffect(() => {
    const node = document.getElementById('start-project-container')
    if (node) setPortalNode(node)
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sivnco — H.P. Shivaraj</title>
        <meta name="description" content="H P Shivaraj — Brand design, packaging, illustration. Bengaluru." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivnco.in/" />
        <meta property="og:title" content="Sivnco — H.P. Shivaraj" />
        <meta property="og:description" content="Cinematic brand design and packaging. Bengaluru." />
        <meta property="og:image" content="https://framerusercontent.com/images/9LvHlrCzJWdgyGii5Gmrp4qI.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        {/* Mobile CSS injected directly — guaranteed fresh on every deploy */}
        <style dangerouslySetInnerHTML={{ __html: MOBILE_CSS }} />
      </Head>

      {/* CDN scripts — use afterInteractive (beforeInteractive only works in _document for Pages Router) */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

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

      {/* Render new React button into the static HTML nav */}
      {portalNode && createPortal(<StartProjectButton />, portalNode)}
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
  if (window.innerWidth > 768) return;

  // Kill only the horizontal-scroll pin (identified by its trigger element)
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(function(st) {
      var el = st.trigger;
      if (el && (el.id === 'horizontal-sec' || el.classList.contains('h-container'))) {
        st.kill();
      }
    });
  }

  // Immediately reveal all scroll-animated elements so they are never blank
  document.querySelectorAll('.gs-fade').forEach(function(el) {
    el.style.cssText += ';opacity:1!important;transform:none!important;filter:none!important;';
  });
  document.querySelectorAll('.gs-reveal').forEach(function(el) {
    el.style.cssText += ';opacity:1!important;transform:none!important;filter:none!important;';
  });
  document.querySelectorAll('.reveal-text').forEach(function(el) {
    el.style.cssText += ';opacity:1!important;transform:none!important;filter:none!important;';
  });
  document.querySelectorAll('.metric-card, .testi-card, .price-card, .tl-item, .chip').forEach(function(el) {
    el.style.cssText += ';opacity:1!important;transform:none!important;filter:none!important;';
  });
})();
`

  return {
    props: {
      bodyHTML: inlineCSS + bodyHTML,
      inlineScript: inlineScript + formFetchScript + mobileScrollFix,
    },
  }
}

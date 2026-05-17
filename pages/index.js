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
  const styleMatch = raw.match(/<style>([\s\S]*?)<\/style>/i)
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

  return {
    props: {
      bodyHTML: inlineCSS + bodyHTML,
      inlineScript: inlineScript + formFetchScript,
    },
  }
}

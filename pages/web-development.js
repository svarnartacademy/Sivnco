import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState, useEffect, useRef } from 'react'
import StartProjectButton from '@/components/demo'
import Navbar from '../components/Navbar'
import { 
  Globe, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Smartphone, 
  CheckCircle2, 
  Lock, 
  ArrowUpRight, 
  Terminal, 
  Cpu, 
  Box,
  CreditCard,
  WifiOff
} from 'lucide-react'

const METRICS = [
  { n: '2', l: 'Full-Stack Sites Shipped', tag: 'Next.js & Vite' },
  { n: 'PWA', l: 'Svarnart — Offline-Ready', tag: 'Zero-SaaS Cost' },
  { n: '<2s', l: 'Target Load Time', tag: 'Lighthouse 95+' },
  { n: '100%', l: 'In-House Built', tag: 'Design to Deploy' },
]

const PROJECTS = [
  {
    id: 'sivnco',
    tag: '01 — Flagship Portfolio',
    name: 'sivnco.in',
    tagline: 'Cinematic Personal Brand & 3D Packaging Platform',
    stack: ['Next.js', 'Netlify', 'GSAP', 'Lenis', 'model-viewer (glTF)', 'Tailwind'],
    href: 'https://www.sivnco.in',
    status: 'PRODUCTION LIVE',
    statusColor: '#10B981',
    problem:
      'Needed a portfolio that felt cinematic, immersive, and conversion-focused — not a sterile template dump. Existing website builders were rigid, looked identical to every other designer\'s site, and couldn\'t support custom scroll physics or the interactive 3D glTF model viewer required to showcase tactile product packaging work.',
    solution:
      'Engineered from scratch in Next.js with a unified warm-dark design system — Doto display font, Urbanist body, and saffron accent (#D4600A). Integrated GSAP scroll-triggered horizontal reveals, Lenis smooth scrolling, and an embedded inline WebGL glTF 3D model viewer for Jus Amazin packaging. Every detail was hand-crafted, from the pinned role cards to the custom liquid cursor.',
    features: [
      {
        title: 'Inline 3D WebGL Model Viewer',
        desc: 'Direct glTF model-viewer embed with 360° orbital controls — zero slow third-party iframes.',
        icon: '3d'
      },
      {
        title: 'GSAP Pinned Horizontal Showcase',
        desc: 'Custom scrollTrigger coordinates pinning the multi-role creative director panel smoothly.',
        icon: 'motion'
      },
      {
        title: 'Lenis Inertia Physics',
        desc: 'Subpixel-interpolated smooth scrolling calibrated across high-refresh trackpads and mobile glass.',
        icon: 'physics'
      }
    ],
    outcomes: [
      'Cinematic digital experience reflecting studio-grade craftsmanship',
      'Horizontal scroll role cards with GSAP-pinned timeline logic',
      '3D GLB model viewer embedded natively with zero iframe overhead',
      'CSP-hardened, mobile-responsive, and continuous Netlify CI/CD pipeline',
      'Fluid saffron cursor dot, ambient liquid aura, and procedural grain overlay',
    ],
  },
  {
    id: 'svarnart',
    tag: '02 — Cultural Academy PWA',
    name: 'svarnart.com',
    tagline: 'Progressive Web App, LMS & Indian Payment Engine',
    stack: ['Vite + React', 'Firebase Auth', 'Firestore', 'Razorpay', 'PWA / SW', 'Cloud Storage'],
    href: 'https://www.svarnart.com',
    status: 'PWA OFFLINE READY',
    statusColor: '#D4600A',
    problem:
      'Co-founding Svarnart Academy with my wife meant we needed an operating platform that could manage student admissions, deliver lesson curriculum, and process Indian payments (UPI, cards, net banking) — all without recurring SaaS subscription fees that would drain a bootstrapped arts studio. No off-the-shelf LMS fit both the brand ethos and budget.',
    solution:
      'Designed and engineered a full Progressive Web App: Vite + React frontend, Firebase Auth + Firestore for student records, Razorpay edge integration for Indian payments, and Firebase Storage for media. Built a customized service worker and manifest allowing students in low-connectivity areas to install the app and cache lesson media offline.',
    features: [
      {
        title: 'Dual-Channel Indian Payment Flow',
        desc: 'Native Razorpay checkout + HMAC-SHA256 webhook verification for instant course unlocking.',
        icon: 'pay'
      },
      {
        title: 'Installable PWA Architecture',
        desc: 'Custom service worker caching lesson videos and notes for offline study on iOS & Android.',
        icon: 'pwa'
      },
      {
        title: 'Zero-Trust Firebase Rules',
        desc: 'Granular role-based Firestore access ensuring complete child data privacy and isolation.',
        icon: 'security'
      }
    ],
    outcomes: [
      'Automated fee settlements via Razorpay with encrypted webhook verification',
      'Firebase Auth (Google One-Tap + email/password) for student & parent accounts',
      'Installable PWA running offline with zero App Store commission overhead',
      'Strict Content Security Policy whitelist covering Firebase, Razorpay & GCS',
      'Editorial typography matching the academy\'s warm Indian classical heritage',
    ],
  },
]

const PILLARS = [
  {
    num: '01',
    title: 'Design System First',
    badge: 'TOKEN ARCHITECTURE',
    desc: 'Both sites start from a hand-crafted token architecture — CSS variables, typographic scales, fluid spacing ladders, and color palettes — before writing components. Every pixel is deliberate and maintainable by a solo engineer.',
    icon: Layers
  },
  {
    num: '02',
    title: 'Performance as UX',
    badge: 'SUB-2S TARGET',
    desc: 'Font preloading, WebP/AVIF asset optimization, deferred script execution, and SSG static generation where possible. A sluggish site destroys trust before a visitor reads a headline. Both sites target sub-2s first paint.',
    icon: Zap
  },
  {
    num: '03',
    title: 'Security by Default',
    badge: 'ZERO WILDCARDS',
    desc: 'Strict Content Security Policy headers restricting script, style, and media origins on every build. Svarnart explicitly whitelists Firebase, Razorpay, and GCS with zero wildcards. Security is never an afterthought.',
    icon: ShieldCheck
  },
]

const STACK_ROW_1 = [
  { name: 'Next.js 14', cat: 'Framework', hi: true },
  { name: 'Vite + React', cat: 'Frontend', hi: true },
  { name: 'Firebase Auth', cat: 'Auth' },
  { name: 'Cloud Firestore', cat: 'Database' },
  { name: 'Firebase Storage', cat: 'Media' },
  { name: 'Razorpay UPI', cat: 'Payments', hi: true },
  { name: 'GSAP ScrollTrigger', cat: 'Motion', hi: true },
  { name: 'Lenis Smooth Scroll', cat: 'Physics' },
]

const STACK_ROW_2 = [
  { name: 'PWA Service Worker', cat: 'Offline', hi: true },
  { name: 'model-viewer (glTF)', cat: '3D WebGL', hi: true },
  { name: 'Content Security Policy', cat: 'Security', hi: true },
  { name: 'Netlify CI/CD', cat: 'DevOps' },
  { name: 'Tailwind CSS', cat: 'Styles' },
  { name: 'Static Generation (SSG)', cat: 'Performance' },
  { name: 'Google Fonts Preload', cat: 'Typography' },
  { name: 'HTML5 Canvas', cat: 'Creative Code' },
]

export default function WebDevelopment() {
  const [activeTabs, setActiveTabs] = useState({ sivnco: 'highlights', svarnart: 'highlights' })
  const canvasRef = useRef(null)

  const handleTabChange = (projId, tab) => {
    setActiveTabs(prev => ({ ...prev, [projId]: tab }))
  }

  // Interactive Fluid Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    let mouse = { x: width * 0.5, y: height * 0.4, tx: width * 0.5, ty: height * 0.4 }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.tx = e.clientX - rect.left
      mouse.ty = e.clientY - rect.top
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    let step = 0

    // Wave parameters
    const waves = [
      { color: 'rgba(212, 96, 10, 0.16)', speed: 0.012, freq: 0.003, amp: 55, yOffset: 0.35 },
      { color: 'rgba(232, 133, 42, 0.11)', speed: 0.009, freq: 0.0022, amp: 75, yOffset: 0.5 },
      { color: 'rgba(20, 43, 34, 0.22)', speed: 0.006, freq: 0.0018, amp: 95, yOffset: 0.65 },
      { color: 'rgba(212, 96, 10, 0.08)', speed: 0.015, freq: 0.0038, amp: 40, yOffset: 0.22 }
    ]

    const render = () => {
      step++
      // Smooth lerp mouse
      mouse.x += (mouse.tx - mouse.x) * 0.05
      mouse.y += (mouse.ty - mouse.y) * 0.05

      ctx.clearRect(0, 0, width, height)

      // Render flowing waves
      waves.forEach((w, idx) => {
        ctx.beginPath()
        const baseY = height * w.yOffset

        ctx.moveTo(0, height)
        ctx.lineTo(0, baseY)

        const points = 18
        const slice = width / points

        for (let i = 0; i <= points; i++) {
          const x = i * slice
          // Distance to mouse influences amplitude
          const distToMouse = Math.abs(x - mouse.x)
          const mouseInfluence = Math.max(0, 1 - distToMouse / 450) * 40

          const y = baseY + 
            Math.sin(x * w.freq + step * w.speed + idx) * w.amp + 
            Math.cos(step * 0.01 + idx) * 15 - 
            mouseInfluence * Math.sin(step * 0.03)

          if (i === 0) {
            ctx.lineTo(x, y)
          } else {
            const prevX = (i - 1) * slice
            const midX = (prevX + x) / 2
            ctx.quadraticCurveTo(prevX, y, midX, y)
          }
        }

        ctx.lineTo(width, height)
        ctx.closePath()

        ctx.fillStyle = w.color
        ctx.fill()
      })

      // Draw subtle interactive ripple at mouse
      const rippleRadius = 80 + Math.sin(step * 0.08) * 15
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, rippleRadius)
      grad.addColorStop(0, 'rgba(212, 96, 10, 0.15)')
      grad.addColorStop(0.5, 'rgba(212, 96, 10, 0.04)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, rippleRadius, 0, Math.PI * 2)
      ctx.fill()

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/web-development" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Full-Stack Web Development — H.P. Shivaraj · Sivnco</title>
        <meta
          name="description"
          content="Full-stack web engineering for sivnco.in (Next.js portfolio) and svarnart.com (Vite + Firebase + Razorpay PWA). Built in-house from design tokens to production deployment."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      <div id="dot" />

      <Navbar />

      {/* HERO SECTION WITH FLUID CANVAS */}
      <div className="hero">
        <canvas ref={canvasRef} className="fluid-canvas" />

        {/* Ambient Morphing Blobs */}
        <div className="blob-container">
          <div className="morph-blob blob-1" />
          <div className="morph-blob blob-2" />
        </div>

        <div className="c hero-content-wrap">
          {/* Eyebrow Pill */}
          <div className="eyebrow-pill hero-anim" style={{ animationDelay: '0.1s' }}>
            <span className="beacon-dot" />
            <span>FULL-STACK ENGINEERING // PRODUCTION CASE STUDY</span>
          </div>

          {/* Fluid Typography Headline */}
          <h1 className="hero-title hero-anim" style={{ animationDelay: '0.25s' }}>
            Web<br />
            <span className="hero-title-accent">Development</span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="hero-sub hero-anim" style={{ animationDelay: '0.45s' }}>
            Two production platforms. Zero off-the-shelf templates. Engineered entirely in-house — marrying fluid 60fps interaction design, zero-trust security, and scalable commerce engines.
          </p>

          {/* Floating Asymmetrical Meta Capsules */}
          <div className="meta-capsules hero-anim" style={{ animationDelay: '0.65s' }}>
            <div className="meta-capsule">
              <Code2 size={13} className="mc-icon" />
              <span className="mc-lbl">SCOPE</span>
              <span className="mc-val">Full-Stack Design + Dev</span>
            </div>
            <div className="meta-capsule">
              <Globe size={13} className="mc-icon" />
              <span className="mc-lbl">PLATFORMS</span>
              <span className="mc-val">sivnco.in · svarnart.com</span>
            </div>
            <div className="meta-capsule">
              <Cpu size={13} className="mc-icon" />
              <span className="mc-lbl">CORE STACK</span>
              <span className="mc-val">Next.js · Vite · Firebase</span>
            </div>
            <div className="meta-capsule highlight">
              <Sparkles size={13} className="mc-icon" />
              <span className="mc-lbl">STATUS</span>
              <span className="mc-val">100% In-House Shipped</span>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Wave Transition */}
        <div className="hero-bottom-curve">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path d="M0,0 C480,70 960,70 1440,0 L1440,80 L0,80 Z" fill="#0A0906" />
          </svg>
        </div>
      </div>

      {/* FLOATING METRICS ISLAND (No 1px Box Grid) */}
      <section className="metrics-section">
        <div className="c">
          <div className="metrics-island">
            {METRICS.map((m, i) => (
              <div key={m.n} className="metric-capsule rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="mc-glow" />
                <div className="m-tag">{m.tag}</div>
                <div className="m-n">{m.n}</div>
                <div className="m-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE SECTION WITH INTERACTIVE BROWSER FRAMES */}
      <section className="projects-section">
        <div className="c">
          <div className="sec-header">
            <div className="s-label rv">01 — The Production Platforms</div>
            <h2 className="s-title rv">
              Real problems.<br />
              <span className="title-italic">Bespoke architectures.</span>
            </h2>
            <p className="body-txt rv2">
              Both platforms were born from a refusal to compromise: no standard builder could showcase 3D packaging with fluid scroll triggers, and no generic LMS could sustain a classical Indian arts academy with zero recurring SaaS overhead.
            </p>
          </div>

          <div className="proj-showcase-list">
            {PROJECTS.map((p, pIdx) => {
              const currentTab = activeTabs[p.id] || 'highlights'

              return (
                <div key={p.id} className="proj-frame rv" style={{ transitionDelay: `${pIdx * 0.15}s` }}>
                  {/* Frosted Browser Chrome Top Bar */}
                  <div className="browser-bar">
                    <div className="traffic-lights">
                      <span className="light red" />
                      <span className="light yellow" />
                      <span className="light green" />
                    </div>

                    <a 
                      href={p.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="url-pill"
                      title="Open live site in new tab"
                    >
                      <Lock size={10} className="lock-icon" />
                      <span>{p.href.replace('https://www.', '').replace('https://', '')}</span>
                      <ArrowUpRight size={11} className="arrow-icon" />
                    </a>

                    <div className="live-badge" style={{ borderColor: `${p.statusColor}40` }}>
                      <span className="badge-pulse" style={{ backgroundColor: p.statusColor }} />
                      <span style={{ color: p.statusColor }}>{p.status}</span>
                    </div>
                  </div>

                  {/* Main Project Card Content */}
                  <div className="card-body">
                    {/* Header Info */}
                    <div className="proj-head-row">
                      <div>
                        <div className="proj-subtag">{p.tag}</div>
                        <h3 className="proj-title">{p.name}</h3>
                        <p className="proj-tagline">{p.tagline}</p>
                      </div>

                      {/* Tech Pills */}
                      <div className="proj-stack-pills">
                        {p.stack.map(s => (
                          <span key={s} className="stack-micro-pill">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Tab Switcher */}
                    <div className="card-tabs">
                      <button 
                        className={`card-tab ${currentTab === 'highlights' ? 'active' : ''}`}
                        onClick={() => handleTabChange(p.id, 'highlights')}
                      >
                        <Sparkles size={13} />
                        <span>Core Innovations</span>
                      </button>
                      <button 
                        className={`card-tab ${currentTab === 'solution' ? 'active' : ''}`}
                        onClick={() => handleTabChange(p.id, 'solution')}
                      >
                        <Terminal size={13} />
                        <span>Architecture & Code</span>
                      </button>
                      <button 
                        className={`card-tab ${currentTab === 'problem' ? 'active' : ''}`}
                        onClick={() => handleTabChange(p.id, 'problem')}
                      >
                        <Layers size={13} />
                        <span>The Problem Solved</span>
                      </button>
                    </div>

                    {/* Tab 1: Innovations & Outcomes */}
                    {currentTab === 'highlights' && (
                      <div className="tab-pane-content fade-in">
                        {/* Feature Cards Grid */}
                        <div className="features-grid">
                          {p.features.map((feat, fIdx) => (
                            <div key={fIdx} className="feature-capsule">
                              <div className="feat-icon-wrap">
                                {feat.icon === '3d' && <Box size={18} />}
                                {feat.icon === 'motion' && <Sparkles size={18} />}
                                {feat.icon === 'physics' && <Zap size={18} />}
                                {feat.icon === 'pay' && <CreditCard size={18} />}
                                {feat.icon === 'pwa' && <Smartphone size={18} />}
                                {feat.icon === 'security' && <ShieldCheck size={18} />}
                              </div>
                              <div className="feat-title">{feat.title}</div>
                              <div className="feat-desc">{feat.desc}</div>
                            </div>
                          ))}
                        </div>

                        {/* Verified Outcomes List */}
                        <div className="outcomes-box">
                          <div className="outcomes-header">VERIFIED OUTCOMES & CAPABILITIES</div>
                          <div className="outcomes-grid">
                            {p.outcomes.map((out, oIdx) => (
                              <div key={oIdx} className="outcome-capsule">
                                <span className="outcome-bullet">◆</span>
                                <span>{out}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Solution & Architecture */}
                    {currentTab === 'solution' && (
                      <div className="tab-pane-content fade-in">
                        <div className="editorial-pane">
                          <div className="pane-label">ENGINEERING ARCHITECTURE</div>
                          <p className="pane-text">{p.solution}</p>
                          <div className="architecture-badges">
                            <div className="arch-badge">
                              <CheckCircle2 size={13} />
                              <span>Zero third-party CMS bloat</span>
                            </div>
                            <div className="arch-badge">
                              <CheckCircle2 size={13} />
                              <span>Sub-2s First Contentful Paint</span>
                            </div>
                            <div className="arch-badge">
                              <CheckCircle2 size={13} />
                              <span>Enterprise CSP Header Whitelisting</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Problem Statement */}
                    {currentTab === 'problem' && (
                      <div className="tab-pane-content fade-in">
                        <div className="editorial-pane">
                          <div className="pane-label">THE CORE BOTTLENECK</div>
                          <p className="pane-text">{p.problem}</p>
                        </div>
                      </div>
                    )}

                    {/* Card Footer Action */}
                    <div className="card-footer-row">
                      <a 
                        href={p.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="launch-btn"
                      >
                        <span>Launch Live Experience</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* THE APPROACH (PILLARS) — ASYMMETRICAL FLOW STREAM */}
      <section className="approach-section">
        <div className="c">
          <div className="sec-header">
            <div className="s-label rv">02 — Engineering Philosophy</div>
            <h2 className="s-title rv">
              Code as a<br />
              <span className="title-italic">craftsperson.</span>
            </h2>
            <p className="body-txt rv2">
              The exact same obsession that goes into bespoke packaging prototypes dictates our codebases. Every decision is intentional — from the token in the CSS variable to the CSP origin whitelist in the HTTP response headers.
            </p>
          </div>

          <div className="pillars-stream">
            {PILLARS.map((pil, idx) => {
              const IconComp = pil.icon
              return (
                <div key={pil.num} className="pillar-capsule rv" style={{ transitionDelay: `${(idx + 1) * 0.12}s` }}>
                  <div className="pil-spotlight" />
                  <div className="pil-top">
                    <div className="pil-icon-box">
                      <IconComp size={20} />
                    </div>
                    <span className="pil-badge">{pil.badge}</span>
                    <span className="pil-num">{pil.num}</span>
                  </div>
                  <h3 className="pil-title">{pil.title}</h3>
                  <p className="pil-desc">{pil.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* KINETIC TECH STACK STREAM */}
      <section className="stack-section">
        <div className="c">
          <div className="sec-header center-align">
            <div className="s-label rv">03 — The Production Ecosystem</div>
            <h2 className="s-title rv">
              Tools chosen<br />
              <span className="title-italic">with purpose.</span>
            </h2>
            <p className="body-txt rv2 center-text">
              Zero framework chasing. Every dependency is vetted against load impact, developer velocity, and long-term autonomy.
            </p>
          </div>
        </div>

        {/* Kinetic Marquee Stream Row 1 */}
        <div className="marquee-wrapper">
          <div className="marquee-track track-left">
            {[...STACK_ROW_1, ...STACK_ROW_1].map((item, idx) => (
              <div key={`${item.name}-${idx}`} className={`stack-capsule ${item.hi ? 'highlight' : ''}`}>
                <span className="stack-dot" />
                <span className="stack-name">{item.name}</span>
                <span className="stack-cat">{item.cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kinetic Marquee Stream Row 2 */}
        <div className="marquee-wrapper" style={{ marginTop: '1.2rem' }}>
          <div className="marquee-track track-right">
            {[...STACK_ROW_2, ...STACK_ROW_2].map((item, idx) => (
              <div key={`${item.name}-${idx}`} className={`stack-capsule ${item.hi ? 'highlight' : ''}`}>
                <span className="stack-dot" />
                <span className="stack-name">{item.name}</span>
                <span className="stack-cat">{item.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="c">
        <div className="pfooter rv">
          <div>
            <div className="pf-brand">
              SIVNCO<span style={{ color: 'var(--wd-accent)' }}>.</span>
            </div>
            <p className="pf-sub">Full-Stack Digital Architecture & Creative Engineering</p>
          </div>
          <StartProjectButton />
        </div>
      </div>

      <Script id="page-init" strategy="afterInteractive">{`
        (function(){
          function revealAll() {
            document.querySelectorAll('.rv, .rv2').forEach(function(el) {
              el.classList.add('vis');
            });
          }

          function initReveals() {
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              });
            }, { threshold: 0.01, rootMargin: '0px 0px 0px 0px' });
            document.querySelectorAll('.rv, .rv2').forEach(function(el) { obs.observe(el); });

            // Hard fallback — reveal everything after 600ms
            setTimeout(revealAll, 600);

            if (window.innerWidth <= 900) { revealAll(); }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initReveals);
          } else {
            initReveals();
          }
          window.addEventListener('load', initReveals);

          // LENIS SMOOTH SCROLL
          (function waitForLenis() {
            if (typeof Lenis === 'undefined') { setTimeout(waitForLenis, 80); return; }
            try {
              var lenis = new Lenis({ duration: 1.2, smooth: true, smoothTouch: false, touchMultiplier: 1.5 });
              function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
              requestAnimationFrame(raf);
            } catch(e) {}
          })();

          // FLUID LIQUID VELOCITY CURSOR
          if (window.innerWidth > 768) {
            var dot = document.getElementById('dot');
            if (dot) {
              var mx = window.innerWidth/2, my = window.innerHeight/2;
              var cx = mx, cy = my;
              var vx = 0, vy = 0;

              document.addEventListener('mousemove', function(e) {
                mx = e.clientX;
                my = e.clientY;
              });

              (function loop() {
                var prevCx = cx, prevCy = cy;
                cx += (mx - cx) * 0.18;
                cy += (my - cy) * 0.18;
                vx = cx - prevCx;
                vy = cy - prevCy;

                var speed = Math.sqrt(vx * vx + vy * vy);
                var angle = Math.atan2(vy, vx);
                var stretch = Math.min(speed * 0.04, 0.7);

                dot.style.left = cx + 'px';
                dot.style.top = cy + 'px';
                dot.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'rad) scale(' + (1 + stretch) + ', ' + (1 - stretch * 0.5) + ')';

                requestAnimationFrame(loop);
              })();

              document.querySelectorAll('a, button, .card-tab, .metric-capsule, .feature-capsule').forEach(function(el) {
                el.addEventListener('mouseenter', function() { dot.classList.add('lg'); });
                el.addEventListener('mouseleave', function() { dot.classList.remove('lg'); });
              });
            }
          }

          // SPOTLIGHT TRACKING ON CARDS
          document.querySelectorAll('.metric-capsule, .proj-frame, .pillar-capsule').forEach(function(card) {
            card.addEventListener('mousemove', function(e) {
              var rect = card.getBoundingClientRect();
              var x = e.clientX - rect.left;
              var y = e.clientY - rect.top;
              card.style.setProperty('--mx', x + 'px');
              card.style.setProperty('--my', y + 'px');
            });
          });

          // METRIC COUNTER ANIMATION
          (function initMetricCounters() {
            var counted = false;
            var metricObs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting && !counted) {
                  counted = true;
                  document.querySelectorAll('.m-n').forEach(function(el) {
                    var raw = el.textContent.trim();
                    var numMatch = raw.match(/\\d+/);
                    if (!numMatch) return;
                    var target = parseInt(numMatch[0], 10);
                    var prefix = raw.slice(0, raw.indexOf(numMatch[0]));
                    var suffix = raw.slice(raw.indexOf(numMatch[0]) + numMatch[0].length);
                    var duration = 1200;
                    var startTime = null;
                    function step(ts) {
                      if (!startTime) startTime = ts;
                      var progress = Math.min((ts - startTime) / duration, 1);
                      var ease = 1 - Math.pow(1 - progress, 3);
                      var current = Math.round(ease * target);
                      el.textContent = prefix + current + suffix;
                      if (progress < 1) requestAnimationFrame(step);
                      else el.textContent = raw;
                    }
                    el.textContent = prefix + '0' + suffix;
                    requestAnimationFrame(step);
                  });
                  metricObs.disconnect();
                }
              });
            }, { threshold: 0.2 });
            var metricsEl = document.querySelector('.metrics-island');
            if (metricsEl) metricObs.observe(metricsEl);
          })();

        })();
      `}</Script>
    </>
  )
}

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --wd-bg:#0A0906;
  --wd-ink:#F0EDE6;
  --wd-muted:rgba(240,237,230,0.5);
  --wd-accent:#D4600A;
  --wd-accent-l:#E8852A;
  --wd-border:rgba(240,237,230,0.08);
  --wd-glass:rgba(240,237,230,0.028);
  --D:'Doto',sans-serif;
  --S:'Urbanist',sans-serif;
  --M:'Instrument Sans',sans-serif;
}

html.lenis{height:auto}
.lenis.lenis-smooth{scroll-behavior:auto!important}
.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}
.lenis.lenis-stopped{overflow:hidden}
.lenis.lenis-scrolling iframe{pointer-events:none}

body{
  background:var(--wd-bg);
  color:var(--wd-ink);
  font-family:var(--S);
  overflow-x:hidden;
  cursor:none;
  -webkit-font-smoothing:antialiased;
}

/* Subtle grain overlay */
body::before{
  content:'';
  position:fixed;
  inset:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity:.035;
  pointer-events:none;
  z-index:9999;
}

/* Fluid Liquid Cursor */
#dot{
  position:fixed;
  width:9px;
  height:9px;
  border-radius:50%;
  background:var(--wd-accent);
  pointer-events:none;
  z-index:99999;
  transform:translate(-50%,-50%);
  transition:width .25s,height .25s,background .25s,opacity .25s;
  box-shadow:0 0 12px rgba(212,96,10,0.55);
}
#dot.lg{
  width:42px;
  height:42px;
  background:transparent;
  border:1.5px solid var(--wd-accent);
  opacity:.8;
  box-shadow:0 0 20px rgba(212,96,10,0.3);
}

a{color:inherit;text-decoration:none}
::selection{background:var(--wd-accent);color:var(--wd-ink)}
.c{max-width:1280px;margin:0 auto;padding:0 5vw}

/* HERO SECTION */
.hero{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:11rem 5vw 6rem;
  position:relative;
  overflow:hidden;
}

.fluid-canvas{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  pointer-events:none;
  z-index:0;
}

.blob-container{
  position:absolute;
  inset:0;
  overflow:hidden;
  pointer-events:none;
  z-index:0;
}
.morph-blob{
  position:absolute;
  border-radius:60% 40% 30% 70% / 60% 30% 70% 40%;
  filter:blur(90px);
  opacity:.22;
  animation:morphBlob 14s ease-in-out infinite;
}
.blob-1{
  width:550px;
  height:550px;
  background:linear-gradient(135deg,var(--wd-accent),var(--wd-accent-l));
  top:-8%;
  right:-5%;
}
.blob-2{
  width:450px;
  height:450px;
  background:linear-gradient(135deg,#142B22,var(--wd-accent));
  bottom:5%;
  left:-5%;
  animation-duration:18s;
  animation-direction:reverse;
}

@keyframes morphBlob{
  0%,100%{border-radius:60% 40% 30% 70% / 60% 30% 70% 40%;transform:rotate(0deg) scale(1)}
  33%{border-radius:30% 60% 70% 40% / 50% 60% 30% 60%;transform:rotate(120deg) scale(1.08)}
  66%{border-radius:70% 30% 50% 50% / 30% 40% 60% 70%;transform:rotate(240deg) scale(0.95)}
}

.hero-content-wrap{
  position:relative;
  z-index:2;
}

/* Eyebrow Pill */
.eyebrow-pill{
  display:inline-flex;
  align-items:center;
  gap:.65rem;
  padding:.42rem 1.1rem;
  border-radius:9999px;
  background:rgba(212,96,10,0.08);
  border:1px solid rgba(212,96,10,0.28);
  backdrop-filter:blur(16px);
  -webkit-backdrop-filter:blur(16px);
  font-family:var(--M);
  font-size:.62rem;
  letter-spacing:.22em;
  color:var(--wd-accent);
  margin-bottom:2.2rem;
  box-shadow:0 8px 24px rgba(0,0,0,0.3);
}
.beacon-dot{
  width:6px;
  height:6px;
  border-radius:50%;
  background:var(--wd-accent);
  box-shadow:0 0 10px var(--wd-accent);
  animation:beaconPulse 2s ease-in-out infinite;
}
@keyframes beaconPulse{
  0%,100%{transform:scale(1);opacity:1}
  50%{transform:scale(1.8);opacity:.4}
}

/* Fluid Hero Title */
.hero-title{
  font-family:var(--D);
  font-weight:900;
  font-size:clamp(4.2rem,11vw,9.5rem);
  line-height:1.02;
  letter-spacing:-0.03em;
  color:var(--wd-ink);
}
.hero-title-accent{
  font-family:var(--S);
  font-style:italic;
  font-weight:300;
  background:linear-gradient(135deg,var(--wd-accent) 0%,var(--wd-accent-l) 45%,#F0EDE6 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  display:block;
  letter-spacing:-0.01em;
}

.hero-sub{
  font-family:var(--S);
  font-size:clamp(1.05rem,1.5vw,1.3rem);
  color:var(--wd-muted);
  max-width:620px;
  line-height:1.85;
  margin-top:2.2rem;
}

/* Meta Floating Capsules */
.meta-capsules{
  display:flex;
  flex-wrap:wrap;
  gap:1rem;
  margin-top:3.5rem;
}
.meta-capsule{
  display:inline-flex;
  align-items:center;
  gap:.65rem;
  padding:.65rem 1.25rem;
  border-radius:9999px;
  background:rgba(240,237,230,0.03);
  border:1px solid rgba(240,237,230,0.08);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  transition:border-color .3s,transform .3s,background .3s;
}
.meta-capsule:hover{
  border-color:rgba(212,96,10,0.4);
  background:rgba(212,96,10,0.06);
  transform:translateY(-3px);
}
.meta-capsule.highlight{
  border-color:rgba(212,96,10,0.3);
  background:rgba(212,96,10,0.05);
}
.mc-icon{color:var(--wd-accent)}
.mc-lbl{
  font-family:var(--M);
  font-size:.56rem;
  letter-spacing:.18em;
  color:var(--wd-accent);
}
.mc-val{
  font-family:var(--S);
  font-size:.88rem;
  font-weight:500;
  color:var(--wd-ink);
}

.hero-bottom-curve{
  position:absolute;
  bottom:-1px;
  left:0;
  width:100%;
  height:40px;
  pointer-events:none;
  z-index:1;
}

/* FLOATING METRICS ISLAND (No 1px box grid!) */
.metrics-section{
  padding:3rem 0 6rem;
  position:relative;
}
.metrics-island{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:1.5rem;
}
.metric-capsule{
  position:relative;
  background:rgba(240,237,230,0.025);
  border:1px solid rgba(240,237,230,0.08);
  backdrop-filter:blur(24px);
  -webkit-backdrop-filter:blur(24px);
  border-radius:30px;
  padding:3.2rem 2rem 2.8rem;
  text-align:center;
  overflow:hidden;
  transition:transform .4s cubic-bezier(.16,1,.3,1),border-color .4s,box-shadow .4s;
  box-shadow:0 16px 36px rgba(0,0,0,0.35);
}
.metric-capsule:hover{
  transform:translateY(-8px) scale(1.02);
  border-color:rgba(212,96,10,0.35);
  box-shadow:0 24px 50px rgba(0,0,0,0.5),0 0 30px rgba(212,96,10,0.15);
}
.mc-glow{
  position:absolute;
  inset:0;
  background:radial-gradient(circle at var(--mx,50%) var(--my,30%),rgba(212,96,10,0.15),transparent 70%);
  opacity:0;
  transition:opacity .35s;
  pointer-events:none;
}
.metric-capsule:hover .mc-glow{opacity:1}
.m-tag{
  font-family:var(--M);
  font-size:.55rem;
  letter-spacing:.18em;
  color:rgba(240,237,230,0.4);
  text-transform:uppercase;
  margin-bottom:.6rem;
}
.m-n{
  font-family:var(--D);
  font-weight:900;
  font-size:clamp(3.2rem,6vw,5.5rem);
  color:var(--wd-accent);
  line-height:1;
  text-shadow:0 0 30px rgba(212,96,10,0.25);
}
.m-l{
  font-family:var(--M);
  font-size:.6rem;
  letter-spacing:.16em;
  color:var(--wd-muted);
  margin-top:1rem;
}

/* SECTION BASE */
section{padding:8rem 0;position:relative}
.sec-header{margin-bottom:4.5rem}
.sec-header.center-align{text-align:center}
.s-label{
  font-family:var(--M);
  font-size:.58rem;
  letter-spacing:.25em;
  color:var(--wd-accent);
  text-transform:uppercase;
  margin-bottom:1.2rem;
  display:inline-flex;
  align-items:center;
  gap:.6rem;
}
.s-label::before{
  content:'';
  width:16px;
  height:1.5px;
  background:var(--wd-accent);
}
.s-title{
  font-family:var(--D);
  font-weight:900;
  font-size:clamp(2.8rem,6.5vw,6.5rem);
  line-height:1.05;
  letter-spacing:-0.02em;
  margin-bottom:2rem;
}
.title-italic{
  font-family:var(--S);
  font-weight:300;
  font-style:italic;
  color:var(--wd-muted);
}
.body-txt{
  font-family:var(--S);
  font-size:1.15rem;
  line-height:1.85;
  color:var(--wd-muted);
  max-width:680px;
}
.center-text{margin:0 auto}

/* CINEMATIC PROJECT SHOWCASE (Interactive Browser Chrome) */
.proj-showcase-list{
  display:flex;
  flex-direction:column;
  gap:4.5rem;
}
.proj-frame{
  background:rgba(240,237,230,0.025);
  border:1px solid rgba(240,237,230,0.09);
  backdrop-filter:blur(30px);
  -webkit-backdrop-filter:blur(30px);
  border-radius:36px;
  overflow:hidden;
  box-shadow:0 30px 80px rgba(0,0,0,0.55);
  transition:border-color .4s,box-shadow .4s;
  position:relative;
}
.proj-frame:hover{
  border-color:rgba(212,96,10,0.3);
  box-shadow:0 35px 90px rgba(0,0,0,0.65),0 0 40px rgba(212,96,10,0.12);
}

/* Browser Chrome Top Bar */
.browser-bar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1.1rem 2rem;
  background:rgba(10,9,6,0.7);
  border-bottom:1px solid rgba(240,237,230,0.06);
  backdrop-filter:blur(20px);
}
.traffic-lights{
  display:flex;
  align-items:center;
  gap:.45rem;
}
.traffic-lights .light{
  width:10px;
  height:10px;
  border-radius:50%;
  display:inline-block;
}
.light.red{background:#FF5F56;box-shadow:0 0 6px rgba(255,95,86,0.5)}
.light.yellow{background:#FFBD2E;box-shadow:0 0 6px rgba(255,189,46,0.5)}
.light.green{background:#27C93F;box-shadow:0 0 6px rgba(39,201,63,0.5)}

.url-pill{
  display:inline-flex;
  align-items:center;
  gap:.45rem;
  padding:.35rem 1.2rem;
  border-radius:9999px;
  background:rgba(240,237,230,0.04);
  border:1px solid rgba(240,237,230,0.08);
  font-family:var(--M);
  font-size:.65rem;
  color:rgba(240,237,230,0.75);
  letter-spacing:.06em;
  transition:border-color .25s,background .25s;
}
.url-pill:hover{
  border-color:var(--wd-accent);
  background:rgba(212,96,10,0.1);
  color:var(--wd-ink);
}
.lock-icon{color:var(--wd-accent)}
.arrow-icon{opacity:.6}

.live-badge{
  display:inline-flex;
  align-items:center;
  gap:.5rem;
  padding:.3rem .85rem;
  border-radius:9999px;
  border:1px solid;
  font-family:var(--M);
  font-size:.56rem;
  letter-spacing:.15em;
  background:rgba(0,0,0,0.4);
}
.badge-pulse{
  width:6px;
  height:6px;
  border-radius:50%;
  animation:beaconPulse 1.8s ease-in-out infinite;
}

/* Card Body */
.card-body{
  padding:3.5rem;
}

.proj-head-row{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:2rem;
  flex-wrap:wrap;
  margin-bottom:2.5rem;
}
.proj-subtag{
  font-family:var(--M);
  font-size:.6rem;
  letter-spacing:.22em;
  color:var(--wd-accent);
  text-transform:uppercase;
  margin-bottom:.5rem;
}
.proj-title{
  font-family:var(--D);
  font-weight:900;
  font-size:clamp(2.5rem,5vw,4.2rem);
  line-height:1.05;
  margin-bottom:.5rem;
}
.proj-tagline{
  font-family:var(--S);
  font-size:1.08rem;
  color:var(--wd-muted);
}

.proj-stack-pills{
  display:flex;
  flex-wrap:wrap;
  gap:.5rem;
  max-width:440px;
}
.stack-micro-pill{
  font-family:var(--M);
  font-size:.58rem;
  letter-spacing:.12em;
  padding:.35rem .9rem;
  border-radius:9999px;
  background:rgba(240,237,230,0.03);
  border:1px solid rgba(240,237,230,0.07);
  color:rgba(240,237,230,0.7);
}

/* Interactive Tab Switcher */
.card-tabs{
  display:inline-flex;
  gap:.6rem;
  padding:.35rem;
  border-radius:9999px;
  background:rgba(240,237,230,0.035);
  border:1px solid rgba(240,237,230,0.07);
  margin-bottom:2.5rem;
  flex-wrap:wrap;
}
.card-tab{
  display:inline-flex;
  align-items:center;
  gap:.5rem;
  padding:.55rem 1.25rem;
  border-radius:9999px;
  background:transparent;
  border:none;
  color:var(--wd-muted);
  font-family:var(--M);
  font-size:.65rem;
  letter-spacing:.12em;
  cursor:pointer;
  transition:color .3s,background .3s,box-shadow .3s;
}
.card-tab:hover{color:var(--wd-ink)}
.card-tab.active{
  background:var(--wd-accent);
  color:#0A0906;
  font-weight:700;
  box-shadow:0 4px 16px rgba(212,96,10,0.35);
}

/* Tab Panes */
.tab-pane-content{
  margin-bottom:3rem;
}
.fade-in{
  animation:fadeInTab .35s ease-out both;
}
@keyframes fadeInTab{
  0%{opacity:0;transform:translateY(8px)}
  100%{opacity:1;transform:translateY(0)}
}

/* Feature Cards Grid */
.features-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:1.5rem;
  margin-bottom:2rem;
}
.feature-capsule{
  background:rgba(240,237,230,0.02);
  border:1px solid rgba(240,237,230,0.06);
  border-radius:24px;
  padding:2rem 1.8rem;
  transition:border-color .3s,transform .3s,background .3s;
}
.feature-capsule:hover{
  border-color:rgba(212,96,10,0.25);
  background:rgba(212,96,10,0.04);
  transform:translateY(-4px);
}
.feat-icon-wrap{
  width:40px;
  height:40px;
  border-radius:14px;
  background:rgba(212,96,10,0.1);
  border:1px solid rgba(212,96,10,0.2);
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--wd-accent);
  margin-bottom:1.2rem;
}
.feat-title{
  font-family:var(--S);
  font-size:1.05rem;
  font-weight:600;
  color:var(--wd-ink);
  margin-bottom:.5rem;
}
.feat-desc{
  font-family:var(--S);
  font-size:.92rem;
  line-height:1.7;
  color:var(--wd-muted);
}

/* Outcomes Box */
.outcomes-box{
  background:rgba(0,0,0,0.35);
  border:1px solid rgba(240,237,230,0.06);
  border-radius:24px;
  padding:2.2rem 2.4rem;
}
.outcomes-header{
  font-family:var(--M);
  font-size:.56rem;
  letter-spacing:.22em;
  color:var(--wd-accent);
  margin-bottom:1.2rem;
}
.outcomes-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1rem 2.5rem;
}
.outcome-capsule{
  display:flex;
  align-items:flex-start;
  gap:.75rem;
  font-family:var(--S);
  font-size:.95rem;
  line-height:1.65;
  color:rgba(240,237,230,0.8);
}
.outcome-bullet{
  color:var(--wd-accent);
  font-size:.6rem;
  margin-top:.4rem;
  flex-shrink:0;
}

/* Editorial Panes */
.editorial-pane{
  background:rgba(240,237,230,0.02);
  border:1px solid rgba(240,237,230,0.07);
  border-radius:24px;
  padding:2.8rem;
}
.pane-label{
  font-family:var(--M);
  font-size:.58rem;
  letter-spacing:.22em;
  color:var(--wd-accent);
  margin-bottom:1rem;
}
.pane-text{
  font-family:var(--S);
  font-size:1.15rem;
  line-height:1.95;
  color:rgba(240,237,230,0.85);
  max-width:850px;
}
.architecture-badges{
  display:flex;
  flex-wrap:wrap;
  gap:1rem;
  margin-top:2rem;
  padding-top:1.8rem;
  border-top:1px solid rgba(240,237,230,0.06);
}
.arch-badge{
  display:inline-flex;
  align-items:center;
  gap:.5rem;
  font-family:var(--M);
  font-size:.65rem;
  letter-spacing:.12em;
  color:var(--wd-accent);
}

/* Card Footer Row */
.card-footer-row{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding-top:2rem;
  border-top:1px solid rgba(240,237,230,0.06);
}
.launch-btn{
  display:inline-flex;
  align-items:center;
  gap:.65rem;
  padding:.75rem 1.8rem;
  border-radius:9999px;
  background:rgba(212,96,10,0.12);
  border:1px solid rgba(212,96,10,0.35);
  color:var(--wd-accent);
  font-family:var(--M);
  font-size:.68rem;
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:600;
  transition:all .3s cubic-bezier(.16,1,.3,1);
}
.launch-btn:hover{
  background:var(--wd-accent);
  color:#0A0906;
  box-shadow:0 8px 24px rgba(212,96,10,0.4);
  transform:translateY(-2px);
}

/* THE APPROACH (PILLARS) — ASYMMETRICAL FLOW STREAM */
.approach-section{
  padding:9rem 0;
  position:relative;
}
.pillars-stream{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2rem;
  position:relative;
}
.pillar-capsule{
  position:relative;
  background:rgba(240,237,230,0.025);
  border:1px solid rgba(240,237,230,0.08);
  backdrop-filter:blur(24px);
  -webkit-backdrop-filter:blur(24px);
  border-radius:32px;
  padding:3.2rem 2.5rem;
  overflow:hidden;
  transition:transform .4s cubic-bezier(.16,1,.3,1),border-color .4s,box-shadow .4s;
  box-shadow:0 16px 40px rgba(0,0,0,0.35);
}
.pillar-capsule:nth-child(2){
  transform:translateY(24px);
}
.pillar-capsule:hover{
  transform:translateY(-8px) scale(1.02);
  border-color:rgba(212,96,10,0.35);
  box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 35px rgba(212,96,10,0.15);
}
.pil-spotlight{
  position:absolute;
  inset:0;
  background:radial-gradient(circle at var(--mx,50%) var(--my,30%),rgba(212,96,10,0.14),transparent 70%);
  opacity:0;
  transition:opacity .35s;
  pointer-events:none;
}
.pillar-capsule:hover .pil-spotlight{opacity:1}

.pil-top{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:2rem;
}
.pil-icon-box{
  width:44px;
  height:44px;
  border-radius:14px;
  background:rgba(212,96,10,0.1);
  border:1px solid rgba(212,96,10,0.22);
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--wd-accent);
}
.pil-badge{
  font-family:var(--M);
  font-size:.52rem;
  letter-spacing:.2em;
  color:var(--wd-accent);
  padding:.3rem .8rem;
  border-radius:9999px;
  background:rgba(212,96,10,0.06);
  border:1px solid rgba(212,96,10,0.18);
}
.pil-num{
  font-family:var(--D);
  font-weight:900;
  font-size:1.8rem;
  color:rgba(240,237,230,0.12);
}
.pil-title{
  font-family:var(--D);
  font-weight:900;
  font-size:1.8rem;
  line-height:1.15;
  color:var(--wd-ink);
  margin-bottom:1.2rem;
}
.pil-desc{
  font-family:var(--S);
  font-size:1.02rem;
  line-height:1.85;
  color:var(--wd-muted);
}

/* KINETIC TECH MARQUEE */
.stack-section{
  padding:8rem 0 10rem;
  overflow:hidden;
}
.marquee-wrapper{
  width:100vw;
  overflow:hidden;
  position:relative;
  mask-image:linear-gradient(to right,transparent 0%,black 12%,black 88%,transparent 100%);
  -webkit-mask-image:linear-gradient(to right,transparent 0%,black 12%,black 88%,transparent 100%);
}
.marquee-track{
  display:flex;
  gap:1.2rem;
  width:max-content;
}
.track-left{
  animation:marqueeLeft 35s linear infinite;
}
.track-right{
  animation:marqueeRight 35s linear infinite;
}
.marquee-wrapper:hover .marquee-track{
  animation-play-state:paused;
}

@keyframes marqueeLeft{
  0%{transform:translateX(0)}
  100%{transform:translateX(-50%)}
}
@keyframes marqueeRight{
  0%{transform:translateX(-50%)}
  100%{transform:translateX(0)}
}

.stack-capsule{
  display:inline-flex;
  align-items:center;
  gap:.75rem;
  padding:.75rem 1.6rem;
  border-radius:9999px;
  background:rgba(240,237,230,0.03);
  border:1px solid rgba(240,237,230,0.08);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  transition:all .3s cubic-bezier(.16,1,.3,1);
  white-space:nowrap;
}
.stack-capsule:hover{
  background:rgba(212,96,10,0.12);
  border-color:var(--wd-accent);
  transform:scale(1.06);
  box-shadow:0 8px 24px rgba(212,96,10,0.25);
}
.stack-capsule.highlight{
  border-color:rgba(212,96,10,0.3);
}
.stack-dot{
  width:6px;
  height:6px;
  border-radius:50%;
  background:var(--wd-accent);
}
.stack-name{
  font-family:var(--S);
  font-weight:600;
  font-size:.95rem;
  color:var(--wd-ink);
}
.stack-cat{
  font-family:var(--M);
  font-size:.56rem;
  letter-spacing:.14em;
  color:rgba(240,237,230,0.4);
  text-transform:uppercase;
}

/* FOOTER */
.pfooter{
  padding:5rem 0 3.5rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-top:1px solid var(--wd-border);
  margin-top:4rem;
  transition:transform 1s cubic-bezier(.16,1,.3,1),opacity 1s;
}
.pf-brand{
  font-family:var(--D);
  font-weight:900;
  font-size:1.6rem;
  letter-spacing:.06em;
}
.pf-sub{
  font-family:var(--M);
  font-size:.62rem;
  letter-spacing:.18em;
  color:var(--wd-muted);
  margin-top:.4rem;
}

/* REVEAL ANIMATIONS */
.rv{
  opacity:0;
  transform:translateY(32px);
  transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1);
}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{
  opacity:0;
  transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s;
}
.rv2.vis{opacity:1}

.hero-anim{
  opacity:0;
  filter:blur(16px);
  transform:translateY(24px);
  animation:fadeBlurIn .95s cubic-bezier(.16,1,.3,1) both;
}
@keyframes fadeBlurIn{
  0%{opacity:0;filter:blur(16px);transform:translateY(24px)}
  100%{opacity:1;filter:blur(0);transform:translateY(0)}
}

/* RESPONSIVE BREAKPOINTS */
@media(max-width:1024px){
  .metrics-island{grid-template-columns:repeat(2,1fr)}
  .pillars-stream{grid-template-columns:1fr;gap:2rem}
  .pillar-capsule:nth-child(2){transform:none}
  .features-grid{grid-template-columns:1fr}
  .outcomes-grid{grid-template-columns:1fr}
}
@media(max-width:768px){
  .hero{padding:9rem 5vw 4rem}
  .hero-title{font-size:clamp(3.2rem,13vw,6.5rem)}
  .card-body{padding:2rem 1.5rem}
  .browser-bar{padding:.9rem 1.2rem}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
  #dot{display:none}
  body{cursor:auto}
}
@media(max-width:480px){
  .metrics-island{grid-template-columns:1fr}
  .card-tabs{border-radius:18px}
  .card-tab{width:100%;justify-content:center}
}
`

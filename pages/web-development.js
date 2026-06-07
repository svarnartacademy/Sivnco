import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'

const METRICS = [
  { n: '2', l: 'Full-Stack Sites Shipped' },
  { n: 'PWA', l: 'Svarnart — Offline-Ready' },
  { n: '<2s', l: 'Target Load Time' },
  { n: '100%', l: 'In-House Built' },
]

const PROJECTS = [
  {
    tag: '01 — Portfolio Site',
    name: 'sivnco.in',
    stack: 'Next.js · Netlify · GSAP · Lenis',
    href: 'https://www.sivnco.in',
    problem:
      'Needed a portfolio that was cinematic and conversion-focused — not a generic template dump. Existing options were too rigid, looked like every other designer\'s site, and couldn\'t support custom scroll animations or the 3D model viewer needed to showcase packaging work.',
    solution:
      'Built from scratch in Next.js with a custom design system — dark warm palette, Doto display font, saffron accent — and layered in GSAP scroll-triggered reveals, Lenis smooth scrolling, and an embedded glTF 3D model viewer (model-viewer) for the Jus Amazin packaging render. Every section is hand-coded, from the horizontal scroll "Four Roles" panel to the curtain-reveal footer.',
    outcomes: [
      'Cinematic portfolio that genuinely reflects the quality of the work',
      'Horizontal scroll role cards with GSAP-pinned logic',
      '3D GLB model viewer embedded inline — no third-party iframe',
      'CSP-hardened, mobile-responsive, Netlify CI/CD deployed',
      'Custom saffron cursor dot, ambient orb, and grain texture overlay',
    ],
  },
  {
    tag: '02 — Academy Platform',
    name: 'svarnart.com',
    stack: 'Vite + React · Firebase · Razorpay · PWA',
    href: 'https://www.svarnart.com',
    problem:
      'Co-founding Svarnart Academy with my wife meant we also needed a platform that could handle student enrolment, course payments, and content delivery — all without paying SaaS fees that would eat into a bootstrapped education studio. No off-the-shelf LMS fit the brand or budget.',
    solution:
      'Designed and built a full Progressive Web App: Vite + React frontend, Firebase Auth + Firestore for student management, Razorpay checkout for Indian payment flows (UPI, cards, net banking), Firebase Storage for media. The PWA manifest and service worker make it installable on mobile — critical for students in low-bandwidth areas who need offline access to lesson materials.',
    outcomes: [
      'Full payment integration — Razorpay checkout with webhook verification',
      'Firebase Auth (Google Sign-In + email/password) for student accounts',
      'PWA — installable on Android/iOS, offline lesson caching',
      'Strict Content Security Policy covering Firebase, Razorpay & GCS origins',
      'Nunito + Sacramento typography to match the academy\'s warm, classical brand',
    ],
  },
]

const PILLARS = [
  {
    title: '01 — Design System First',
    desc: 'Both sites start from a hand-crafted design system — tokens, type scales, spacing, colour palettes — before a single component is written. This means every pixel is intentional and the codebase stays maintainable even when building alone.',
  },
  {
    title: '02 — Performance as UX',
    desc: 'Font preloading, image optimisation, deferred scripts, and SSG where possible. A slow portfolio or academy site kills trust before a visitor even reads the headline. Sub-2s target load on both properties.',
  },
  {
    title: '03 — Security by Default',
    desc: 'Content Security Policy headers restrict script/style/image origins on every deploy. Svarnart covers Firebase, Razorpay, and GCS in its CSP — no wildcard srcs. sivnco.in enforces meta-level CSP for Netlify. Security is not an afterthought.',
  },
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0A0906;--ink:#F0EDE6;--muted:rgba(240,237,230,0.45);--accent:#D4600A;--accent-l:#E8852A;--border:rgba(240,237,230,0.08);--glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html.lenis{height:auto}
.lenis.lenis-smooth{scroll-behavior:auto!important}
.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}
.lenis.lenis-stopped{overflow:hidden}
.lenis.lenis-scrolling iframe{pointer-events:none}
body{background:var(--bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none;-webkit-font-smoothing:antialiased}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--accent);opacity:.7}
a{color:inherit;text-decoration:none}
::selection{background:var(--accent);color:var(--ink)}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5vw;background:rgba(10,9,6,0.75);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.back{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;padding:.6rem 1.5rem;border:1px solid var(--border);border-radius:40px;transition:.3s}
.back:hover{border-color:var(--accent);color:var(--accent)}

/* HERO */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--border);position:relative;overflow:hidden}
.hero-bg{position:absolute;inset:0;width:100%;height:100%;z-index:0}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(212,96,10,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(212,96,10,0.05) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse 70% 60% at 50% 40%,black 30%,transparent 100%)}
.hero-orb{position:absolute;width:500px;height:500px;border-radius:50%;filter:blur(100px);opacity:.18;top:-5%;right:-5%;background:var(--accent)}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.95) 35%,rgba(10,9,6,.6) 65%,rgba(10,9,6,.2) 100%);pointer-events:none;z-index:1}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-size:clamp(4.5rem,12vw,11rem);line-height:.88}
.hero-title i{color:var(--accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--muted);max-width:580px;line-height:1.85;margin-top:2rem}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--border)}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}

/* METRICS */
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border)}
.metric{background:var(--bg);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;transition:background .4s}
.metric:hover{background:rgba(212,96,10,.06)}
.metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s;pointer-events:none}
.metric:hover::before{opacity:1}
.m-n{font-family:var(--D);font-size:clamp(3.5rem,7vw,6.5rem);color:var(--accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--muted);margin-top:.8rem}

/* SECTION */
section{padding:9rem 0;border-bottom:1px solid var(--border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-size:clamp(3rem,7vw,8rem);line-height:.88;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--muted);font-style:normal;font-weight:300}
.body-txt{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--muted);max-width:660px}

/* PROJECT CARDS */
.proj-grid{display:flex;flex-direction:column;gap:4px;background:var(--border);border:1px solid var(--border);margin-top:4rem}
.proj-card{background:var(--bg);padding:4rem 3.5rem;display:grid;grid-template-columns:1fr 1fr;gap:4rem;transition:background .3s;position:relative;overflow:hidden}
.proj-card::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 0% 0%,rgba(212,96,10,0.07),transparent 60%);opacity:0;transition:opacity .4s;pointer-events:none}
.proj-card:hover::before{opacity:1}
.proj-card:hover{background:rgba(20,18,14,1)}
.pc-left{}
.pc-tag{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--accent);margin-bottom:1.2rem;padding-bottom:1rem;border-bottom:1px solid var(--border)}
.pc-name{font-family:var(--D);font-size:clamp(2rem,4vw,3.5rem);line-height:1;margin-bottom:.6rem}
.pc-stack{font-family:var(--M);font-size:.58rem;letter-spacing:.12em;color:var(--muted);margin-bottom:2rem}
.pc-link{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--M);font-size:.62rem;letter-spacing:.18em;color:var(--accent);border:1px solid rgba(212,96,10,0.35);padding:.55rem 1.2rem;border-radius:30px;transition:.3s;margin-top:1.5rem}
.pc-link:hover{background:rgba(212,96,10,0.1);border-color:var(--accent)}
.pc-right{}
.prob-head{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--accent);margin-bottom:.8rem}
.prob-body{font-family:var(--S);font-size:1rem;line-height:1.85;color:var(--muted);margin-bottom:2rem}
.outcomes{margin-top:1.5rem;display:flex;flex-direction:column;gap:.6rem}
.outcome-item{display:flex;align-items:flex-start;gap:.8rem;font-family:var(--S);font-size:.95rem;line-height:1.7;color:rgba(240,237,230,0.7)}
.outcome-item::before{content:'◆';color:var(--accent);font-size:.55rem;flex-shrink:0;margin-top:.4rem}

/* PILLARS */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);margin-top:4rem}
.pillar{background:var(--bg);padding:3rem 2.5rem;transition:background .3s;position:relative;overflow:hidden}
.pillar:hover{background:rgba(212,96,10,.04)}
.pillar::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,0.12),transparent 70%);opacity:0;transition:opacity .4s;pointer-events:none;z-index:1}
.pillar:hover::after{opacity:1}
.pil-h{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--accent);margin-bottom:1.2rem;padding-bottom:1rem;border-bottom:1px solid var(--border)}
.pil-b{font-family:var(--S);font-size:1.05rem;line-height:1.85;color:var(--muted)}

/* STACK BANDS */
.stack-band{display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:3rem}
.stack-tag{font-family:var(--M);font-size:.58rem;letter-spacing:.14em;border:1px solid var(--border);padding:.35rem 1rem;border-radius:20px;color:var(--muted);transition:.3s}
.stack-tag:hover{border-color:var(--accent);color:var(--accent)}
.stack-tag.hi{border-color:rgba(212,96,10,0.4);color:var(--accent)}

/* FOOTER */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-size:1.4rem;letter-spacing:.06em}

/* REVEALS */
.rv{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .8s cubic-bezier(.16,1,.3,1) .12s}
.rv2.vis{opacity:1}
/* Hero content always visible */
.hero .rv,.hero .rv2,.hero-always{opacity:1!important;transform:translateY(0)!important}

@media(max-width:900px){
  .metrics{grid-template-columns:repeat(2,1fr)}
  .proj-card{grid-template-columns:1fr;gap:2.5rem}
  .pillars{grid-template-columns:1fr}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
  .hero-title{font-size:clamp(3.5rem,14vw,10rem)}
  .hero-meta{gap:1.5rem}
  .s-title{font-size:clamp(2.5rem,8vw,6rem)}
  section{padding:6rem 0}
  .proj-card{padding:3rem 2rem}
}
@media(max-width:540px){
  .hero-title{font-size:clamp(3rem,16vw,7rem)}
  .metrics{grid-template-columns:repeat(2,1fr)}
  .m-n{font-size:clamp(2.5rem,10vw,5rem)}
  .s-title{font-size:clamp(2rem,10vw,5rem)}
  .pfooter{padding:3rem 0 2rem}
  .pc-name{font-size:clamp(1.8rem,7vw,3rem)}
  #dot{display:none}
  body{cursor:auto}
}
`

export default function WebDevelopment() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Web Development — H.P. Shivaraj · Sivnco</title>
        <meta
          name="description"
          content="Full-stack web development for sivnco.in (Next.js portfolio) and svarnart.com (Vite + Firebase + Razorpay PWA). Built in-house from design to deployment."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      <div id="dot" />

      <nav>
        <Link href="/" className="logo">SIVNCO<span style={{ color: 'var(--accent)' }}>.</span></Link>
        <Link href="/" className="back">← Portfolio</Link>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb" />
        </div>
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">Case Study · Full-Stack Web Development</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            Web<br /><i>Development</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            Two production sites. Zero templates. Built entirely in-house — from design token to deployment pipeline — to solve real problems for a design studio and a cultural academy.
          </p>
          <div className="hero-meta rv" style={{ transitionDelay: '.4s' }}>
            {[
              ['Scope', 'Full-Stack · Design + Dev'],
              ['Sites', 'sivnco.in · svarnart.com'],
              ['Stack', 'Next.js · Vite · Firebase'],
              ['Timeline', '2025 — Present'],
            ].map(([l, v]) => (
              <div key={l} className="meta"><label>{l}</label><span>{v}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        {METRICS.map((m, i) => (
          <div key={m.n} className="metric rv" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="m-n">{m.n}</div>
            <div className="m-l">{m.l}</div>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — The Sites</div>
          <h2 className="s-title rv">Two problems.<br /><i>Two solutions.</i></h2>
          <p className="body-txt rv2">
            Both sites grew from a simple frustration: no existing tool could present the work at the quality it deserved, or run an art academy at the economics that made sense. So both were built from scratch.
          </p>
        </div>
        <div className="proj-grid" style={{ marginTop: '4rem' }}>
          {PROJECTS.map((p, i) => (
            <div key={i} className="proj-card rv">
              <div className="pc-left">
                <div className="pc-tag">{p.tag}</div>
                <div className="pc-name">{p.name}</div>
                <div className="pc-stack">{p.stack}</div>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="pc-link">
                  Visit Site →
                </a>
              </div>
              <div className="pc-right">
                <div className="prob-head">PROBLEM</div>
                <div className="prob-body">{p.problem}</div>
                <div className="prob-head">SOLUTION</div>
                <div className="prob-body">{p.solution}</div>
                <div className="prob-head" style={{ marginTop: '0.5rem' }}>OUTCOMES</div>
                <div className="outcomes">
                  {p.outcomes.map((o, j) => (
                    <div key={j} className="outcome-item">{o}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section>
        <div className="c">
          <div className="s-label rv">02 — The Approach</div>
          <h2 className="s-title rv">Build as a<br /><i>craftsperson.</i></h2>
          <p className="body-txt rv2">
            The same discipline that goes into a packaging system goes into a codebase. Every decision is deliberate — from the colour token in the CSS variable to the CSP origin allow-list in the HTTP header.
          </p>
          <div className="pillars rv2">
            {PILLARS.map((p, i) => (
              <div key={i} className="pillar">
                <div className="pil-h">{p.title}</div>
                <div className="pil-b">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL STACK BAND */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="c">
          <div className="s-label rv">03 — The Stack</div>
          <h2 className="s-title rv">Tools chosen<br /><i>with intent.</i></h2>
          <p className="body-txt rv2">
            No framework chasing. Each tool was chosen because it solved a specific problem — Next.js for SEO and static generation on the portfolio, Vite for fast dev cycles on the academy app, Firebase because it eliminates a separate backend while keeping costs near-zero for a bootstrapped studio.
          </p>
          <div className="stack-band rv2">
            {[
              { l: 'Next.js', hi: true }, { l: 'Vite + React', hi: true }, { l: 'Firebase Auth' }, { l: 'Firestore' },
              { l: 'Firebase Storage' }, { l: 'Razorpay', hi: true }, { l: 'GSAP' }, { l: 'Lenis' },
              { l: 'PWA / Service Worker' }, { l: 'Netlify CI/CD' }, { l: 'model-viewer (glTF)' },
              { l: 'Content Security Policy' }, { l: 'Google Fonts' }, { l: 'SSG' }, { l: 'Manifest + registerSW' },
            ].map((t) => (
              <span key={t.l} className={`stack-tag${t.hi ? ' hi' : ''}`}>{t.l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="c">
        <div className="pfooter rv">
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--accent)' }}>.</span></div></div>
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
            // Immediately show anything already in viewport
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              });
            }, { threshold: 0.01, rootMargin: '0px 0px 0px 0px' });
            document.querySelectorAll('.rv, .rv2').forEach(function(el) { obs.observe(el); });

            // Hard fallback — reveal everything after 800ms no matter what
            setTimeout(revealAll, 800);

            // Mobile: reveal all immediately
            if (window.innerWidth <= 900) { revealAll(); }
          }

          // Fire as early as possible
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initReveals);
          } else {
            initReveals();
          }
          window.addEventListener('load', initReveals);

          // 2. LENIS
          (function waitForLenis() {
            if (typeof Lenis === 'undefined') { setTimeout(waitForLenis, 80); return; }
            try {
              var lenis = new Lenis({ duration: 1.2, smooth: true, smoothTouch: false, touchMultiplier: 1.5 });
              function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
              requestAnimationFrame(raf);
            } catch(e) {}
          })();

          // 3. CURSOR
          if (window.innerWidth > 768) {
            var dot = document.getElementById('dot');
            if (dot) {
              var tx = window.innerWidth/2, ty = window.innerHeight/2, cx = tx, cy = ty;
              document.addEventListener('mousemove', function(e) { tx = e.clientX; ty = e.clientY; });
              (function loop() {
                cx += (tx-cx)*.15; cy += (ty-cy)*.15;
                dot.style.left = cx+'px'; dot.style.top = cy+'px';
                requestAnimationFrame(loop);
              })();
              document.querySelectorAll('a,button').forEach(function(el) {
                el.addEventListener('mouseenter', function() { dot.classList.add('lg'); });
                el.addEventListener('mouseleave', function() { dot.classList.remove('lg'); });
              });
            }
          }
        })();
      `}</Script>
    </>
  )
}

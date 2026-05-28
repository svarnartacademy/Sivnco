import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'

const METRICS = [
  { n: '90%', l: 'Briefing Phase Speedup' },
  { n: '2.5x', l: 'Creative Efficiency' },
  { n: '2021', l: 'AI Journey Began' },
  { n: '4+', l: 'Custom Agents Built' },
]

const TIMELINE = [
  {
    date: '2026 — Present',
    title: 'Custom AI Assistant Integration',
    org: 'Jus Amazin · Svarnart · Sivnco',
    desc: 'Built custom conversational agents (like the "Ask Shiv\'s AI" widget in this portfolio) to automate customer support, answer design queries, and streamline internal knowledge bases, enhancing operational speed and user engagement.'
  },
  {
    date: '2025',
    title: 'Codebase & Web Integration',
    org: 'Web Systems Development',
    desc: 'Streamlined AI systems directly throughout websites and web applications. Automated code generation, testing pipelines, and layout setups, bringing AI out of the design board and into production systems.'
  },
  {
    date: '2022 — 2024',
    title: 'Office Adaptations & Assets Optimization',
    org: 'Jus Amazin (Full-time)',
    desc: 'Adapted AI tools for voice synthesis and vocal adjustments, video editing/effects, and rapid concept generation. By using generative AI to produce asset drafts and packaging mocks, we reduced the time needed to establish a working design brief from days to hours.'
  },
  {
    date: 'College Days (2021)',
    title: 'AI Workshops & Evangeline',
    org: 'Art & Tech Communities',
    desc: 'Organized and conducted AI implementation workshops for all students and communities, teaching early generative art concepts, prompt design, and AI automation tools during the early phases of LLMs and generative art.'
  }
]

const AI_PILLARS = [
  {
    title: '01 — Voice & Video Editing',
    desc: 'Adapting audio synthesis engines for clean voice changes and using smart timeline tools to isolate vocals and automate pacing. Cuts post-production time for product launches and campaigns by half.'
  },
  {
    title: '02 — Generative Asset Briefs',
    desc: 'Ideating design references and mood boards via AI image synthesis. This allows the team to visually align on layout directions and colors before picking up Illustrator, reducing revision loops by 90%.'
  },
  {
    title: '03 — Custom Automation Agents',
    desc: 'Engineering specialized bots (like Svarnart AI and Sivnco AI) to serve as dedicated helpers. These bots process project details and generate custom briefs and copy, making our design execution highly efficient.'
  }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ai-bg:#0A0906;--ink:#F0EDE6;--ai-muted:rgba(240,237,230,0.45);--ai-accent:#D4600A;--ai-border:rgba(240,237,230,0.08);--ai-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }
body{background:var(--ai-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--ai-accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--ai-accent);opacity:.7}
a{color:inherit;text-decoration:none}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5vw;background:rgba(10,9,6,0.75);backdrop-filter:blur(20px);border-bottom:1px solid var(--ai-border)}
.logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.back{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;padding:.6rem 1.5rem;border:1px solid var(--ai-border);border-radius:40px;transition:.3s}
.back:hover{border-color:var(--ai-accent);color:var(--ai-accent)}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ai-border);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.92) 35%,rgba(10,9,6,.55) 65%,rgba(10,9,6,.25) 100%);pointer-events:none;z-index:0}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ai-accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-size:clamp(4.5rem,12vw,11rem);line-height:.88}
.hero-title i{color:var(--ai-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ai-muted);max-width:540px;line-height:1.85;margin-top:2rem}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ai-border)}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ai-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ai-border)}
.metric{background:var(--ai-bg);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;transition:background .4s}
.metric:hover{background:rgba(212,96,10,.06)}
.metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s}
.metric:hover::before{opacity:1}
.m-n{font-family:var(--D);font-size:clamp(3.5rem,7vw,6.5rem);color:var(--ai-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ai-muted);margin-top:.8rem}
section{padding:9rem 0;border-bottom:1px solid var(--ai-border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ai-accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-size:clamp(3.5rem,7vw,8rem);line-height:.88;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ai-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ai-muted);max-width:660px}

/* Grid of pillars */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--ai-border);border:1px solid var(--ai-border);margin-top:4rem}
.pillar{background:var(--ai-bg);padding:3rem 2.5rem;transition:background .3s;position:relative;overflow:hidden}
.pillar:hover{background:rgba(212,96,10,.04)}
.pillar::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,0.12),transparent 70%);opacity:0;transition:opacity .4s;pointer-events:none;z-index:1}
.pillar:hover::after{opacity:1}
.pil-h{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ai-accent);margin-bottom:1.2rem;padding-bottom:1rem;border-bottom:1px solid var(--ai-border)}
.pil-b{font-family:var(--S);font-size:1.05rem;line-height:1.85;color:var(--ai-muted)}

/* Timeline */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:1.5rem;border-left:1px solid var(--ai-border);padding-left:2.5rem;position:relative}
.tl-item{position:relative;padding-bottom:1.5rem}
.tl-dot{position:absolute;left:-2.85rem;top:0.35rem;width:10px;height:10px;border-radius:50%;background:var(--ai-accent);border:3px solid var(--ai-bg);box-shadow:0 0 0 1px var(--ai-border)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ai-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-size:1.6rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ai-muted);margin-top:.2rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ai-muted);margin-top:1rem;max-width:680px}

/* Footer */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ai-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-size:1.4rem;letter-spacing:.06em}

@media(max-width:900px){
  .pillars{grid-template-columns:1fr}
  .metrics{grid-template-columns:repeat(2,1fr)}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
  .hero-title{font-size:clamp(3.5rem,14vw,10rem)}
  .hero-meta{gap:1.5rem}
  .s-title{font-size:clamp(2.5rem,8vw,6rem)}
  section{padding:6rem 0}
}
@media(max-width:540px){
  .hero-title{font-size:clamp(3rem,16vw,7rem)}
  .metrics{grid-template-columns:repeat(2,1fr)}
  .m-n{font-size:clamp(2.5rem,10vw,5rem)}
  .s-title{font-size:clamp(2rem,10vw,5rem)}
  .pfooter{padding:3rem 0 2rem}
  .timeline{padding-left:1.8rem}
  .tl-dot{left:-2.15rem}
  .tl-title{font-size:1.3rem}
}

.rv{opacity:0;transform:translateY(32px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}
@keyframes heroBgPulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}
.hero .rv{opacity:1;transform:translateY(0)}
`

export default function AIWorkflow() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>AI &amp; Workflow — H.P. Shivaraj · Sivnco</title>
        <meta name="description" content="Implementing AI tools for design, vocal adaptations, video editing, and custom agents at Jus Amazin, Svarnart, and Sivnco." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      <div id="dot" />

      <nav>
        <Link href="/" className="logo">SIVNCO<span style={{ color: 'var(--ai-accent)' }}>.</span></Link>
        <Link href="/" className="back">← Portfolio</Link>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(212,96,10,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(232,133,42,0.1) 0%, transparent 50%), var(--ai-bg)', animation: 'heroBgPulse 8s ease-in-out infinite' }} />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">Operational Systems · Innovation &amp; Speed</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            AI &amp;<br /><i>Workflow</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            Integrating neural engines, synthesis pipelines, and custom conversational agents into the design studio to maximize creation speed and operational efficiency.
          </p>
          <div className="hero-meta rv" style={{ transitionDelay: '.4s' }}>
            {[
              ['Focus', 'Process Engineering'],
              ['Role', 'Systems & AI Integration'],
              ['Impact', 'Reduced Brief Cycles'],
              ['Timeline', '2021 — Present']
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

      {/* ABOUT / PHILOSOPHY SECTION */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — The Method</div>
          <h2 className="s-title rv">Automation as a<br /><i>creative partner.</i></h2>
          <div className="body rv2" style={{ color: 'var(--ai-muted)', fontSize: '1.15rem', lineHeight: '1.9' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              In a fast-paced retail and educational environment, speed-to-market is everything. However, design cycles are often bottlenecked by the initial briefing phase—aligning on the layout concept, generating references, and defining colors.
            </p>
            <p>
              By treating AI as an execution partner, I streamline the entire production pipeline. We use custom prompt models to construct visual references, test color logic on shapes, synthesize high-quality vocal guides, and write automated scripts to compile layouts. This reduces time-to-brief, allowing the core design work to begin with clarity and speed.
            </p>
          </div>

          <div className="pillars rv2">
            {AI_PILLARS.map((p, i) => (
              <div key={i} className="pillar">
                <div className="pil-h">{p.title}</div>
                <div className="pil-b">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ borderBottom: '1px solid var(--ai-border)' }}>
        <div className="c">
          <div className="s-label rv">02 — The Timeline</div>
          <h2 className="s-title rv">Understanding &amp;<br /><i>implementing AI.</i></h2>
          <div className="timeline rv2">
            {TIMELINE.map((item, index) => (
              <div key={index} className="tl-item">
                <div className="tl-dot" />
                <div className="tl-date">{item.date}</div>
                <h3 className="tl-title">{item.title}</h3>
                <div className="tl-org">{item.org}</div>
                <p className="tl-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="c">
        <div className="pfooter rv">
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--ai-accent)' }}>.</span></div></div>
          <StartProjectButton />
        </div>
      </div>

      <Script id="page-init" strategy="lazyOnload">{`
        (function(){
          // 1. SCROLL REVEALS
          function initReveals() {
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              });
            }, { threshold: 0.04, rootMargin: '0px 0px -40px 0px' });

            document.querySelectorAll('.rv, .rv2').forEach(function(el) { obs.observe(el); });

            // Fallback
            setTimeout(function() {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }, 1200);

            // Mobile reveal fallback
            if (window.innerWidth <= 900) {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initReveals);
          } else {
            initReveals();
          }

          // 2. LENIS SMOOTH SCROLL
          (function waitForLenis() {
            if (typeof Lenis === 'undefined') { setTimeout(waitForLenis, 80); return; }
            try {
              var lenis = new Lenis({ duration: 1.2, smooth: true, smoothTouch: false, touchMultiplier: 1.5 });
              function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
              requestAnimationFrame(raf);
            } catch(e) {}
          })();

          // 3. DESKTOP CURSOR
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

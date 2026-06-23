import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'

const METRICS = [
  { n: '3', l: 'Design Systems Built' },
  { n: '15+', l: 'SKU Variations Governed' },
  { n: '100%', l: 'Token-to-Component Coverage' },
  { n: '3', l: 'Brand Identities Systematised' },
]

const SYSTEMS = [
  {
    id: 'jus-amazin',
    number: '01',
    label: 'Brand System — Commercial Client',
    title: 'Jus Amazin',
    subtitle: 'Complete Brand System',
    body: `A design system is the decision you make once so you never have to make it again under deadline pressure. For Jus Amazin — a D2C peanut butter brand scaling from 3 to 15+ SKUs — I built the full system from scratch: token layer, component layer, and governance rules.`,
    layers: [
      { title: 'Token Layer', items: ['Colour system: 6 primary + 12 semantic tokens mapped to retail and digital surfaces', 'Typography scale: 3-level hierarchy (display, body, label) with defined size ramps', 'Spacing grid: 8px base unit across all layout decisions'] },
      { title: 'Component Layer', items: ['Label template system: 15+ SKU variants from one master source', 'Social post templates: feed, story, and ad formats from a single component set', 'Email header system: 4 modular blocks that recompose across campaigns', 'POS display: shelf talker and standee components using shared tokens'] },
      { title: 'Governance', items: ['Visual consistency maintained across 15+ SKU variations without breaking the system', 'Handoff-ready: marketing team could apply system without design oversight', '176% revenue contribution attributable in part to consistent shelf-to-screen identity'] },
    ],
    accent: '#D4600A',
  },
  {
    id: 'svarnart',
    number: '02',
    label: 'Brand System — Co-Founded Institution',
    title: 'Svarnart Academy',
    subtitle: 'Visual Identity System',
    body: `Svarnart Academy needed an identity that could live across a PWA, printed admission forms, performance certificates, and social media — all designed and systematised by me as co-founder. The system had to honour both classical Indian roots and contemporary visual sensibility.`,
    layers: [
      { title: 'Brand Mark Construction', items: ['Custom wordmark built on a modular grid', 'Icon system derived from the letterform geometry', 'Clear space and minimum size rules documented for print and digital'] },
      { title: 'Colour & Type System', items: ['Primary palette: warm deep tones evoking classical arts heritage', 'Typography: two-typeface system — display for identity, body for readability', 'Each colour and type decision rationale documented for future designers'] },
      { title: 'Application System', items: ['Web: applied across the academy PWA (built in-house)', 'Print: admission forms, certificates, and event programmes', 'Social: recurring content templates derived from brand tokens'] },
    ],
    accent: '#8B6914',
  },
  {
    id: 'sivnco',
    number: '03',
    label: 'Brand System — Self Identity',
    title: 'Sivnco Studio',
    subtitle: 'Self-Brand System',
    body: `The site you are on right now is a design system. Sivnco Studio's identity — the Doto logotype, the warm-dark colour palette, the Poppins + Space Mono type pairing, the accent orange — is a system I designed and maintain. Every page on sivnco.in is a component that draws from shared tokens.`,
    layers: [
      { title: 'Identity Tokens', items: ['Colour: --accent (#D4600A), --bg (#0A0906), --ink (#F0EDE6) — consistent across every page', 'Type: Doto (display), Poppins (body), Space Mono (mono labels) — a three-role type system', 'Motion: scroll reveal timings, hover transition durations — all defined and reused'] },
      { title: 'Component System', items: ['Shared nav and footer components', 'Glass card system with hover glow state', 'Metric counter, timeline, and bento grid — reusable across case study pages', 'Custom cursor — consistent interaction signature across the entire site'] },
      { title: 'The Meta-Point', items: ['This portfolio is itself proof of design systems thinking', 'The system scales: each new case study page is a new component, not a new design', 'Maintainable by one person — which is exactly what a good system enables'] },
    ],
    accent: '#D4600A',
  },
]

const PROCESS = [
  { step: 'Step 1', title: 'Audit & Inventory', desc: 'Map every visual decision already made: colours, type, spacing, components in use. Understand what is consistent and what is arbitrary.' },
  { step: 'Step 2', title: 'Token Definition', desc: 'Extract design decisions from specific values into named tokens. A colour is not #D4600A — it is accent. A spacing is not 8px — it is base-unit.' },
  { step: 'Step 3', title: 'Component Architecture', desc: 'Build reusable components from tokens. Define their variants, states, and behaviours. Document what each component is for, and what it is not for.' },
  { step: 'Step 4', title: 'Governance & Handoff', desc: 'Write the rules for how the system grows. What gets added, what gets deprecated, who makes decisions. A system without governance is just a style guide that decays.' },
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0A0906;--ink:#F0EDE6;--muted:rgba(240,237,230,0.45);--accent:#D4600A;--accent-light:rgba(212,96,10,0.7);--border:rgba(240,237,230,0.08);--glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Instrument Sans',sans-serif}
html.lenis{height:auto}
.lenis.lenis-smooth{scroll-behavior:auto!important}
.lenis.lenis-stopped{overflow:hidden}
body{background:var(--bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--accent);opacity:.7}
a{color:inherit;text-decoration:none}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5vw;background:rgba(10,9,6,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.logo{font-family:var(--D);font-weight:900;font-size:1.3rem;letter-spacing:.08em}
.back{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;padding:.6rem 1.5rem;border:1px solid var(--border);border-radius:40px;transition:.3s}
.back:hover{border-color:var(--accent);color:var(--accent)}

/* HERO */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--border);position:relative;overflow:hidden}
.hero-bg-grad{position:absolute;inset:0;background:radial-gradient(ellipse at 20% 80%,rgba(212,96,10,0.18) 0%,transparent 55%),radial-gradient(ellipse at 80% 20%,rgba(212,96,10,0.08) 0%,transparent 50%),var(--bg);z-index:0;animation:heroBgPulse 10s ease-in-out infinite}
@keyframes heroBgPulse{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.03)}}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--accent);margin-bottom:2rem;position:relative;z-index:2}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,12vw,11rem);line-height:1.05;position:relative;z-index:2}
.hero-title i{color:var(--accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.25rem);color:var(--muted);max-width:580px;line-height:1.9;margin-top:2rem;position:relative;z-index:2}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--border);position:relative;z-index:2}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}

/* METRICS BAR */
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border)}
.metric{background:var(--bg);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;transition:background .4s}
.metric:hover{background:rgba(212,96,10,.06)}
.metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s}
.metric:hover::before{opacity:1}
.m-n{font-family:var(--D);font-weight:900;font-size:clamp(3rem,6vw,6rem);color:var(--accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--muted);margin-top:.8rem}

/* SECTIONS */
section{padding:9rem 0;border-bottom:1px solid var(--border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--accent);margin-bottom:1.5rem;display:inline-block;border-right:2px solid var(--accent);padding-right:6px;animation:cursorBlink 1s step-end infinite}
@keyframes cursorBlink{0%,100%{border-right-color:var(--accent)}50%{border-right-color:transparent}}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(3rem,6vw,7.5rem);line-height:1.05;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--muted);font-style:normal;font-weight:300}
.body-text{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--muted);max-width:660px}

/* SYSTEM CARD */
.sys-wrap{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:start;margin-top:4rem}
.sys-intro-num{font-family:var(--D);font-weight:900;font-size:clamp(5rem,10vw,10rem);color:rgba(212,96,10,0.12);line-height:1;margin-bottom:.5rem}
.sys-intro-label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--accent);margin-bottom:.8rem}
.sys-intro-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,4vw,4.5rem);line-height:1;color:var(--ink);margin-bottom:.6rem}
.sys-intro-sub{font-family:var(--M);font-size:.62rem;letter-spacing:.15em;color:var(--muted);margin-bottom:1.5rem}
.sys-intro-body{font-family:var(--S);font-size:1.05rem;line-height:1.85;color:var(--muted)}
.sys-layers{display:flex;flex-direction:column;gap:2rem}
.layer-card{background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:2rem;transition:border-color .35s,background .35s}
.layer-card:hover{border-color:rgba(212,96,10,0.2);background:rgba(212,96,10,0.03)}
.layer-title{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;color:var(--accent);margin-bottom:1rem}
.layer-items{list-style:none;display:flex;flex-direction:column;gap:.65rem}
.layer-items li{font-family:var(--S);font-size:.95rem;line-height:1.7;color:var(--muted);padding-left:1.2rem;position:relative}
.layer-items li::before{content:'—';position:absolute;left:0;color:rgba(212,96,10,0.5);font-family:var(--M)}

/* DIVIDER */
.sys-divider{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(212,96,10,0.3),transparent);margin:2rem 0}

/* DEFINITION BLOCK */
.definition-block{background:rgba(212,96,10,0.05);border:1px solid rgba(212,96,10,0.15);border-left:3px solid var(--accent);border-radius:0 10px 10px 0;padding:2.5rem 3rem;margin:4rem 0;max-width:800px}
.definition-text{font-family:var(--S);font-style:italic;font-size:1.2rem;line-height:1.8;color:var(--ink)}
.definition-attr{font-family:var(--M);font-size:.55rem;letter-spacing:.18em;color:var(--muted);margin-top:1rem}

/* PROCESS TIMELINE */
.process-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;margin-top:4rem}
.proc-card{background:var(--glass);border:1px solid var(--border);border-radius:12px;padding:2.5rem;position:relative;overflow:hidden;transition:border-color .4s,transform .4s,box-shadow .4s}
.proc-card:hover{border-color:rgba(212,96,10,0.2);transform:translateY(-4px);box-shadow:0 20px 50px rgba(0,0,0,0.4)}
.proc-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.08),transparent 70%);opacity:0;transition:.4s}
.proc-card:hover::before{opacity:1}
.proc-step{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--accent);margin-bottom:.8rem}
.proc-title{font-family:var(--D);font-weight:900;font-size:1.8rem;color:var(--ink);margin-bottom:1rem;line-height:1.1}
.proc-desc{font-family:var(--S);font-size:.95rem;line-height:1.8;color:var(--muted)}

/* FOOTER */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.4rem;letter-spacing:.06em}

/* ANIMATIONS */
.rv{opacity:0;transform:translateY(32px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}
.hero .rv{opacity:1;transform:translateY(0)}
@keyframes fadeBlurIn{0%{opacity:0;filter:blur(12px);transform:translateY(20px)}100%{opacity:1;filter:blur(0);transform:translateY(0)}}
.hero .eyebrow{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .2s both}
.hero .hero-title{animation:fadeBlurIn .9s cubic-bezier(.16,1,.3,1) .35s both}
.hero .hero-sub{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .55s both}
.hero .hero-meta{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .7s both}

/* FOOTER ANIMATION */
.pfooter{opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.pfooter.vis{opacity:1;transform:translateY(0)}

/* RESPONSIVE */
@media(max-width:1024px){
  .sys-wrap{grid-template-columns:1fr;gap:3rem}
  .process-grid{grid-template-columns:1fr}
}
@media(max-width:768px){
  nav{padding:1.2rem 4vw}
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(3rem,10vw,6.5rem)}
  .hero-meta{gap:1.5rem;margin-top:3rem}
  .metrics{grid-template-columns:repeat(2,1fr)}
  section{padding:6rem 0}
  .sys-intro-num{font-size:clamp(3rem,15vw,6rem)}
  .definition-block{padding:1.8rem 2rem}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
}
@media(max-width:480px){
  .metrics{grid-template-columns:1fr}
  .hero-title{font-size:clamp(2.5rem,12vw,4.5rem)}
  .process-grid{grid-template-columns:1fr}
}
`

export default function DesignSystems() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Design Systems — H P Shivaraj · Sivnco</title>
        <meta name="description" content="How H P Shivaraj builds brand systems that scale: token layers, component architecture, and governance across Jus Amazin, Svarnart Academy, and Sivnco Studio." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      <div id="dot" />

      {/* NAV */}
      <nav>
        <Link href="/" className="logo">SIVNCO<span style={{ color: 'var(--accent)' }}>.</span></Link>
        <Link href="/" className="back">← Portfolio</Link>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-bg-grad" />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">Systems Design · Brand Architecture</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            Design<br /><i>Systems.</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            A design system is the decision you make once so you never have to make it again under deadline pressure. Here are three systems I&apos;ve built — one for a commercial client, one for a co-founded institution, and one for myself.
          </p>
          <div className="hero-meta rv" style={{ transitionDelay: '.4s' }}>
            {[
              ['Systems Built', '3'],
              ['Approach', 'Token → Component → Governance'],
              ['Clients', 'Jus Amazin · Svarnart · Sivnco'],
              ['Location', 'Bengaluru, IN'],
            ].map(([l, v]) => (
              <div key={l} className="meta"><label>{l}</label><span>{v}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        {METRICS.map((m, i) => (
          <div key={m.l} className="metric rv" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="m-n">{m.n}</div>
            <div className="m-l">{m.l}</div>
          </div>
        ))}
      </div>

      {/* DEFINITION */}
      <section style={{ paddingBottom: '4rem' }}>
        <div className="c">
          <div className="s-label rv">What a Design System Is</div>
          <h2 className="s-title rv">In my<br /><i>practice.</i></h2>
          <div className="definition-block rv2">
            <p className="definition-text">
              &ldquo;A design system is the decision you make once so you never have to make it again under deadline pressure. It&apos;s not a collection of components — it&apos;s a set of principles made executable.&rdquo;
            </p>
            <p className="definition-attr">— H P Shivaraj, Design & Communications Manager · Jus Amazin</p>
          </div>
          <p className="body-text rv2" style={{ marginTop: '2rem' }}>
            Most designers maintain visual consistency through taste and habit. A design system makes consistency mechanical — so that anyone who picks it up maintains quality, even under deadline pressure, even across 15 SKU variations, even when you&apos;re not in the room.
          </p>
        </div>
      </section>

      {/* THREE SYSTEMS */}
      {SYSTEMS.map((sys, idx) => (
        <section key={sys.id} id={sys.id}>
          <div className="c">
            <div className="sys-wrap">
              <div>
                <div className="sys-intro-num rv">{sys.number}</div>
                <div className="sys-intro-label rv">{sys.label}</div>
                <h2 className="sys-intro-title rv">{sys.title}</h2>
                <div className="sys-intro-sub rv">{sys.subtitle}</div>
                <div className="sys-divider" />
                <p className="sys-intro-body rv2">{sys.body}</p>
              </div>
              <div className="sys-layers rv2">
                {sys.layers.map((layer) => (
                  <div key={layer.title} className="layer-card">
                    <div className="layer-title">{layer.title}</div>
                    <ul className="layer-items">
                      {layer.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}


      {/* PROCESS */}
      <section>
        <div className="c">
          <div className="s-label rv">04 — How I Build Systems</div>
          <h2 className="s-title rv">The process,<br /><i>every time.</i></h2>
          <div className="process-grid rv2">
            {PROCESS.map((step) => (
              <div key={step.step} className="proc-card">
                <div className="proc-step">{step.step}</div>
                <h3 className="proc-title">{step.title}</h3>
                <p className="proc-desc">{step.desc}</p>
              </div>
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

      <Script id="ds-init" strategy="afterInteractive">{`
        (function(){
          // SCROLL REVEALS
          function initReveals() {
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              });
            }, { threshold: 0.04, rootMargin: '0px 0px -40px 0px' });
            document.querySelectorAll('.rv, .rv2').forEach(function(el) { obs.observe(el); });
            setTimeout(function() {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }, 1200);
            if (window.innerWidth <= 900) {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initReveals);
          } else {
            initReveals();
          }

          // METRIC COUNTERS
          (function(){
            var obs = new IntersectionObserver(function(entries){
              entries.forEach(function(e){
                if(!e.isIntersecting) return;
                obs.unobserve(e.target);
                var el = e.target;
                var text = el.textContent.trim();
                var m = text.match(/[\d.]+/);
                if(!m) return;
                var target = parseFloat(m[0]);
                var suffix = text.replace(m[0],'');
                var isD = text.indexOf('.')!==-1;
                var start = Date.now(); var dur = 1800;
                (function tick(){
                  var p = Math.min(1,(Date.now()-start)/dur);
                  p = 1-Math.pow(1-p,3);
                  el.textContent = (isD?( target*p).toFixed(1):Math.round(target*p))+suffix;
                  if(p<1) requestAnimationFrame(tick);
                })();
              });
            },{threshold:0.3});
            document.querySelectorAll('.m-n').forEach(function(el){obs.observe(el)});
          })();

          // PARALLAX on section titles
          var sTitles = document.querySelectorAll('.s-title');
          if(sTitles.length && window.innerWidth>768){
            window.addEventListener('scroll',function(){
              sTitles.forEach(function(el){
                var r = el.getBoundingClientRect();
                if(r.top<window.innerHeight && r.bottom>0){
                  var p = (r.top/window.innerHeight - 0.5)*-15;
                  el.style.transform = 'translateY('+p+'px)';
                }
              });
            },{passive:true});
          }

          // FOOTER SLIDE
          var pf = document.querySelector('.pfooter');
          if(pf){
            var pfObs = new IntersectionObserver(function(e){
              if(e[0].isIntersecting){pf.classList.add('vis');pfObs.unobserve(pf);}
            },{threshold:0.1});
            pfObs.observe(pf);
          }

          // LENIS SMOOTH SCROLL
          (function waitForLenis() {
            if (typeof Lenis === 'undefined') { setTimeout(waitForLenis, 80); return; }
            try {
              var lenis = new Lenis({ duration: 1.2, smooth: true, smoothTouch: false, touchMultiplier: 1.5 });
              function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
              requestAnimationFrame(raf);
            } catch(e) {}
          })();

          // DESKTOP CURSOR
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

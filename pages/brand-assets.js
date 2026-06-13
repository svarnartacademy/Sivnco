import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'

const METRICS = [
  { n: '6', l: 'Characters Designed' },
  { n: '15+', l: 'Scenes Illustrated' },
  { n: 'Vector', l: 'Scalable Resolution' },
  { n: 'Unified', l: 'Brand Visual Kit' },
]

const CHARACTERS = [
  { id: 'natasha', name: 'Natasha', role: 'Primary Character Model', img: '/images/illustrations/Natasha.png', size: 'large' },
  { id: 'aria_working', name: 'Aria (Working)', role: 'Interaction Asset', img: '/images/illustrations/Aria_Working.png', size: 'standard' },
  { id: 'boy', name: 'Boy Character', role: 'Family Mascot', img: '/images/illustrations/Boy character .png', size: 'standard' },
  { id: 'father', name: 'Father Character', role: 'Family Mascot', img: '/images/illustrations/Father character .png', size: 'wide' },
  { id: 'girl', name: 'Girl Character', role: 'Family Mascot', img: '/images/illustrations/Girl character .png', size: 'standard' },
  { id: 'aria_eyes_open', name: 'Aria (Eyes Open)', role: 'Alternative Asset', img: '/images/illustrations/Aria_Eyes_Open_Working.png', size: 'standard' },
]

const TIMELINE = [
  { date: 'Step 1', title: 'Sketch & Silhouettes', org: 'Concept Stage', desc: 'Pen and paper layout of proportions, facial features, and apparel design. Finding the right balance between clean shapes and friendly expressions.' },
  { date: 'Step 2', title: 'Vectorization', org: 'Adobe Illustrator', desc: 'Translating concepts into clean vector curves. Constructing uniform stroke systems, color grids, and scalable geometries.' },
  { date: 'Step 3', title: 'Layering & Rigging', org: 'Asset Systemization', desc: 'Structuring source files into modular groups (brows, mouth shapes, posture assets) to make the characters ready for motion graphic animation.' },
  { date: 'Step 4', title: 'Production Release', org: 'Deployment', desc: 'Exporting optimized SVGs, webassets, and transparent high-res PNG layers to be used seamlessly across D2C packaging, websites, and social kits.' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ba-bg:#0A0906;--ink:#F0EDE6;--ba-muted:rgba(240,237,230,0.45);--ba-accent:#D4600A;--ba-border:rgba(240,237,230,0.08);--ba-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Comforter',cursive;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }
body{background:var(--ba-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--ba-accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--ba-accent);opacity:.7}
a{color:inherit;text-decoration:none}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5vw;background:rgba(10,9,6,0.75);backdrop-filter:blur(20px);border-bottom:1px solid var(--ba-border)}
.logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.back{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;padding:.6rem 1.5rem;border:1px solid var(--ba-border);border-radius:40px;transition:.3s}
.back:hover{border-color:var(--ba-accent);color:var(--ba-accent)}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ba-border);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.92) 35%,rgba(10,9,6,.55) 65%,rgba(10,9,6,.25) 100%);pointer-events:none;z-index:0}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ba-accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-size:clamp(4.5rem,12vw,11rem);line-height:.88}
.hero-title i{color:var(--ba-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ba-muted);max-width:540px;line-height:1.85;margin-top:2rem}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ba-border)}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ba-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ba-border)}
.metric{background:var(--ba-bg);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;transition:background .4s}
.metric:hover{background:rgba(212,96,10,.06)}
.metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s}
.metric:hover::before{opacity:1}
.m-n{font-family:var(--D);font-size:clamp(3.5rem,7vw,6.5rem);color:var(--ba-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ba-muted);margin-top:.8rem}
section{padding:9rem 0;border-bottom:1px solid var(--ba-border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ba-accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-size:clamp(3.5rem,7vw,8rem);line-height:.88;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ba-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ba-muted);max-width:660px}

/* Bento Grid */
.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:320px;gap:1.5rem;margin-top:4rem}
.b-card{background:var(--ba-glass);border:1px solid var(--ba-border);border-radius:12px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;transition:transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease}
.b-card:hover{transform:translateY(-5px);border-color:rgba(212,96,10,0.25);box-shadow:0 30px 60px rgba(0,0,0,0.5)}
.b-card img{position:absolute;inset:0;width:100%;height:75%;object-fit:contain;top:5%;left:0;z-index:0;transition:transform 0.8s cubic-bezier(0.19,1,0.22,1)}
.b-card:hover img{transform:scale(1.05)}
.b-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,0.92) 15%,rgba(10,9,6,0.3) 50%,transparent 100%);z-index:1}
.b-content{position:relative;z-index:2}
.b-label{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ba-accent);margin-bottom:.4rem;display:block}
.b-name{font-family:var(--D);font-size:1.6rem;line-height:1.1;letter-spacing:.02em;color:#F0EDE6}
.b-meta{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ba-muted);margin-top:.4rem;display:block}

/* Bento Grid Card Sizes */
.b-card.tall{grid-row:span 2}
.b-card.wide{grid-column:span 2}
.b-card.large{grid-column:span 2;grid-row:span 2}
.b-card.large img{height:78%}
.b-card.large .b-name{font-size:2.2rem}

/* Timeline */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:1.5rem;border-left:1px solid var(--ba-border);padding-left:2.5rem;position:relative}
.tl-item{position:relative;padding-bottom:1.5rem}
.tl-dot{position:absolute;left:-2.85rem;top:0.35rem;width:10px;height:10px;border-radius:50%;background:var(--ba-accent);border:3px solid var(--ba-bg);box-shadow:0 0 0 1px var(--ba-border)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ba-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-size:1.6rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ba-muted);margin-top:.2rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ba-muted);margin-top:1rem;max-width:680px}

/* Footer */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ba-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-size:1.4rem;letter-spacing:.06em}

/* Custom glow tags in cards */
.b-card::after, .tl-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(212,96,10,0.12), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 1;
}
.b-card:hover::after {
  opacity: 1;
}

@media(max-width:1024px){
  .bento{grid-template-columns:repeat(3,1fr);grid-auto-rows:280px}
  .b-card.large{grid-column:span 2;grid-row:span 2}
}
@media(max-width:768px){
  nav{padding:1.2rem 4vw}
  .logo{font-size:1.1rem}
  .back{font-size:.55rem;padding:.5rem 1.2rem}
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(3rem,10vw,6.5rem)}
  .hero-meta{gap:1.5rem;margin-top:3rem}
  .metrics{grid-template-columns:repeat(2,1fr)}
  section{padding:6rem 0}
  .bento{grid-template-columns:repeat(2,1fr);grid-auto-rows:240px;gap:1rem}
  .b-card.large{grid-column:span 2;grid-row:span 2}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
}
@media(max-width:480px){
  .hero-title{font-size:clamp(2.5rem,12vw,4.5rem)}
  .metrics{grid-template-columns:1fr}
  .bento{grid-template-columns:1fr;grid-auto-rows:240px}
  .b-card.large, .b-card.wide{grid-column:span 1;grid-row:span 1}
  .b-card.tall{grid-row:span 1}
  .b-card.large .b-name{font-size:1.4rem}
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

/* HERO ENTRANCE */
@keyframes fadeBlurIn{0%{opacity:0;filter:blur(12px);transform:translateY(20px)}100%{opacity:1;filter:blur(0);transform:translateY(0)}}
@keyframes orbFloat{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(25px,-15px) scale(1.05)}66%{transform:translate(-15px,10px) scale(0.95)}}
@keyframes cursorBlink{0%,100%{border-right-color:var(--ba-accent)}50%{border-right-color:transparent}}
@keyframes heroBgShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

/* Hero entrance stagger */
.hero .eyebrow{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .2s both}
.hero .hero-title{animation:fadeBlurIn .9s cubic-bezier(.16,1,.3,1) .35s both}
.hero .hero-sub{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .55s both}
.hero .hero-meta{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .7s both}

/* Floating orb */
.hero-orb{animation:orbFloat 8s ease-in-out infinite}

/* Gradient bg */
.hero-bg{background:linear-gradient(135deg,#0d1117,#1a1f2e,#0f1922,#0A0906)!important;background-size:300% 300%!important;animation:heroBgShift 12s ease-in-out infinite}

/* Section label typewriter */
.s-label{border-right:2px solid var(--ba-accent);padding-right:6px;animation:cursorBlink 1s step-end infinite;display:inline-block}

/* Link underline */
.pc-link{position:relative}
.pc-link::before{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:var(--ba-accent);transition:width .4s cubic-bezier(.16,1,.3,1)}
.pc-link:hover::before{width:100%}

/* Card tilt ready */
.proj-card{transition:transform .4s cubic-bezier(.19,1,.22,1),box-shadow .4s;will-change:transform}

/* Pillar stagger */
.pillar:nth-child(1) .rv,.pillar:nth-child(1) .rv2{transition-delay:.05s}
.pillar:nth-child(2) .rv,.pillar:nth-child(2) .rv2{transition-delay:.15s}
.pillar:nth-child(3) .rv,.pillar:nth-child(3) .rv2{transition-delay:.25s}

/* Footer slide */
.pfooter{opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.pfooter.vis{opacity:1;transform:translateY(0)}
`

export default function BrandAssets() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Brand Assets &amp; Illustration — H.P. Shivaraj · Sivnco</title>
        <meta name="description" content="Vector art kits, modular character design systems, and storytelling graphics for modern D2C packaging and campaigns." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comforter&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      <div id="dot" />

      <nav>
        <Link href="/" className="logo">SIVNCO<span style={{ color: 'var(--ba-accent)' }}>.</span></Link>
        <Link href="/" className="back">← Portfolio</Link>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(212,96,10,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(232,133,42,0.1) 0%, transparent 50%), var(--ba-bg)', animation: 'heroBgPulse 8s ease-in-out infinite' }} />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">Case Study · Brand Assets &amp; Illustration</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            Brand Assets &amp;<br /><i>Illustration</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            Developing bespoke character systems, storytelling environments, and digital vector illustrations that define modern brand communication and establish authentic, friendly customer connections.
          </p>
          <div className="hero-meta rv" style={{ transitionDelay: '.4s' }}>
            {[
              ['Focus', 'Character Design'],
              ['Role', 'Lead Illustrator'],
              ['Client', 'Jus Amazin Foods'],
              ['Location', 'Bengaluru, IN']
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

      {/* BRIEF */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — The Brief</div>
          <h2 className="s-title rv">Giving the brand<br /><i>a human face.</i></h2>
          <div className="body rv2" style={{ color: 'var(--ba-muted)', fontSize: '1.15rem', lineHeight: '1.9' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Modern D2C brands require visual storytelling that cuts through retail shelf clutter and builds instant empathy. For Jus Amazin, the goal was to introduce a family character system that portrays wholesome eating, transparency, and family values.
            </p>
            <p>
              I designed a complete illustration kit consisting of modular character sheets (representing parents, kids, and food experts). The vector assets were structured with organized layers for interchangeable expressions, postures, and assets, allowing the marketing team to quickly place characters in kitchen layouts, retail POS, or social posts.
            </p>
          </div>
        </div>
      </section>

      {/* BENTO SHOWCASE */}
      <section style={{ paddingTop: 0, borderBottom: '1px solid var(--ba-border)' }}>
        <div className="c">
          <div className="s-label rv">02 — Character Sheet</div>
          <h2 className="s-title rv">Scaling cohesive<br /><i>identities.</i></h2>
          
          <div className="bento rv2">
            {CHARACTERS.map((char) => (
              <div key={char.id} className={`b-card ${char.size}`}>
                <img src={char.img} alt={char.name} />
                <div className="b-overlay" />
                <div className="b-content">
                  <span className="b-label">{char.role}</span>
                  <h3 className="b-name">{char.name}</h3>
                  <span className="b-meta">Vector Illustration · Trans-PNG</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section>
        <div className="c">
          <div className="s-label rv">03 — Creative Process</div>
          <h2 className="s-title rv">How assets are<br /><i>constructed.</i></h2>
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
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--ba-accent)' }}>.</span></div></div>
          <StartProjectButton />
        </div>
      </div>

      <Script id="page-init" strategy="afterInteractive">{`
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
                var obj = {v:0};
                (function tick(){
                  var p = Math.min(1,(Date.now()-start)/dur);
                  p = 1-Math.pow(1-p,3);
                  obj.v = target*p;
                  el.textContent = (isD?obj.v.toFixed(1):Math.round(obj.v))+suffix;
                  if(p<1) requestAnimationFrame(tick);
                })();
              });
            },{threshold:0.3});
            document.querySelectorAll('.m-n').forEach(function(el){obs.observe(el)});
          })();

          // CARD TILT (desktop only)
          if(window.innerWidth>768){
            document.querySelectorAll('.proj-card').forEach(function(card){
              card.addEventListener('mousemove',function(e){
                var r=card.getBoundingClientRect();
                var px=(e.clientX-r.left)/r.width-0.5;
                var py=(e.clientY-r.top)/r.height-0.5;
                card.style.transform='perspective(800px) rotateY('+(px*5)+'deg) rotateX('+(-py*5)+'deg)';
              });
              card.addEventListener('mouseleave',function(){card.style.transform='';});
            });
          }

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

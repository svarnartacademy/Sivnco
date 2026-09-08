import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'
import Navbar from '../components/Navbar'
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas'
import { getAudioEngine } from '../components/ui/TactileAudioEngine'

const METRICS = [
  { n: '6', l: 'Characters Designed' },
  { n: '15+', l: 'Scenes Illustrated' },
  { n: 'Vector', l: 'Infinite Scalability' },
  { n: 'Unified', l: 'Brand Visual Kit' },
]

const CHARACTERS = [
  { id: 'natasha', name: 'Natasha', role: 'Primary Character Model', img: '/images/illustrations/Natasha.png', size: 'large', spec: 'Master rig with 12 facial phonemes and modular limb vectors.' },
  { id: 'aria_working', name: 'Aria (Working)', role: 'Interaction Asset', img: '/images/illustrations/Aria_Working.png', size: 'standard', spec: 'Desk & digital interaction pose mapped to tech onboarding workflows.' },
  { id: 'boy', name: 'Boy Character', role: 'Family Mascot', img: '/images/illustrations/Boy character .png', size: 'standard', spec: 'Youthful energy character model with agile jumping & action curves.' },
  { id: 'father', name: 'Father Character', role: 'Family Mascot', img: '/images/illustrations/Father character .png', size: 'wide', spec: 'Stout grounding figure built with soft curvilinear geometry.' },
  { id: 'girl', name: 'Girl Character', role: 'Family Mascot', img: '/images/illustrations/Girl character .png', size: 'standard', spec: 'High-spirit mascot with dynamic hair arc & expressive eyes.' },
  { id: 'aria_eyes_open', name: 'Aria (Eyes Open)', role: 'Alternative Asset', img: '/images/illustrations/Aria_Eyes_Open_Working.png', size: 'standard', spec: 'Direct eye-contact variant engineered for conversion landing pages.' },
]

const TIMELINE = [
  { date: 'Step 1', title: 'Sketch & Silhouettes', org: 'Concept Stage', desc: 'Pen and paper layout of proportions, facial features, and apparel design. Finding the right balance between clean shapes and friendly expressions.' },
  { date: 'Step 2', title: 'Vectorization', org: 'Adobe Illustrator', desc: 'Translating concepts into clean vector curves. Constructing uniform stroke systems, color grids, and scalable geometries.' },
  { date: 'Step 3', title: 'Layering & Rigging', org: 'Asset Systemization', desc: 'Structuring source files into modular groups (brows, mouth shapes, posture assets) to make the characters ready for motion graphic animation.' },
  { date: 'Step 4', title: 'Production Release', org: 'Deployment', desc: 'Exporting optimized SVGs, webassets, and transparent high-res PNG layers to be used seamlessly across D2C packaging, websites, and social kits.' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ba-bg:#0A0906;--ink:#F0EDE6;--ba-muted:rgba(240,237,230,0.45);--ba-accent:#D4600A;--ba-border:rgba(240,237,230,0.08);--ba-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Instrument Sans',sans-serif}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-stopped { overflow: hidden; }
body{background:var(--ba-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}
.c{max-width:1240px;margin:0 auto;padding:0 5vw}

/* HERO */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ba-border);position:relative;overflow:hidden}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ba-accent);margin-bottom:2rem;position:relative;z-index:2}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,12vw,11rem);line-height:1.05;position:relative;z-index:2}
.hero-title i{color:var(--ba-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ba-muted);max-width:560px;line-height:1.85;margin-top:2rem;position:relative;z-index:2}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ba-border);position:relative;z-index:2}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ba-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}

/* FLOATING GLASS METRIC CAPSULES */
.metrics-stream{display:flex;flex-wrap:wrap;gap:1.4rem;justify-content:center;padding:4.5rem 0;position:relative;z-index:2}
.metric-capsule{flex:1 1 230px;max-width:280px;background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.12);border-radius:9999px;padding:2.2rem 2.4rem;text-align:center;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:0 10px 30px rgba(0,0,0,0.4);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),border-color 0.4s ease,box-shadow 0.4s ease}
.metric-capsule:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.5);box-shadow:0 20px 45px rgba(0,0,0,0.6),0 0 25px rgba(212,96,10,0.2)}
.m-n{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,5vw,5rem);color:var(--ba-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ba-muted);margin-top:.6rem}

/* SECTIONS */
section{padding:8rem 0;border-bottom:1px solid var(--ba-border);position:relative}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ba-accent);margin-bottom:1.5rem;display:inline-block}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(3rem,6vw,7rem);line-height:1.05;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ba-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ba-muted);max-width:660px}

/* INTERACTIVE STUDIO CONTROLS */
.studio-header{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:2rem;margin-bottom:3rem}
.studio-toggles{display:flex;gap:.8rem;flex-wrap:wrap}
.mode-pill{font-family:var(--M);font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;padding:.6rem 1.4rem;border-radius:999px;border:1px solid rgba(240,237,230,0.15);background:rgba(255,255,255,0.03);color:var(--ink);cursor:pointer;transition:all .3s ease}
.mode-pill.active{background:rgba(212,96,10,0.2);border-color:#D4600A;color:#FFF;box-shadow:0 0 16px rgba(212,96,10,0.3)}

/* ORGANIC BENTO GRID */
.bento{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:360px;gap:2rem;margin-top:2rem}
.b-card{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.12);border-radius:32px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:2.5rem;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);cursor:pointer;transition:transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s ease, box-shadow 0.4s ease}
.b-card:hover{transform:translateY(-8px) scale(1.01);border-color:rgba(212,96,10,0.45);box-shadow:0 30px 60px rgba(0,0,0,0.7), 0 0 35px rgba(212,96,10,0.15)}
.b-card.selected{border-color:#D4600A;box-shadow:0 0 40px rgba(212,96,10,0.35)}
.b-card img{position:absolute;inset:0;width:100%;height:80%;object-fit:contain;top:5%;left:0;z-index:1;transition:transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.4s ease}
.b-card:hover img{transform:scale(1.06)}
.b-card.wireframe img{filter:grayscale(1) invert(0.8) contrast(200%);opacity:0.75}
.b-card.wireframe::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(212,96,10,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,96,10,0.06) 1px, transparent 1px);background-size:20px 20px;z-index:0}

.b-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,0.95) 15%,rgba(10,9,6,0.2) 60%,transparent 100%);z-index:2}
.b-content{position:relative;z-index:3}
.b-label{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ba-accent);margin-bottom:.4rem;display:block}
.b-name{font-family:var(--D);font-weight:900;font-size:1.8rem;line-height:1.1;color:#F0EDE6}
.b-meta{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ba-muted);margin-top:.4rem;display:block}
.b-spec{font-family:var(--S);font-size:.82rem;color:rgba(240,237,230,0.7);line-height:1.5;margin-top:.6rem;display:none}
.b-card.selected .b-spec{display:block}

/* Card sizes */
.b-card.wide{grid-column:span 2}
.b-card.large{grid-column:span 2;grid-row:span 2}
.b-card.large img{height:82%}
.b-card.large .b-name{font-size:2.4rem}

/* TIMELINE STREAM */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:2rem;position:relative}
.tl-item{position:relative;background:rgba(240,237,230,0.025);border:1px solid rgba(240,237,230,0.1);border-radius:28px;padding:2.5rem 3rem;backdrop-filter:blur(20px);transition:transform .3s ease, border-color .3s ease}
.tl-item:hover{transform:translateX(8px);border-color:rgba(212,96,10,0.35)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ba-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-weight:900;font-size:1.8rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ba-muted);margin-top:.3rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ba-muted);margin-top:1rem;max-width:720px}

/* FOOTER */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ba-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.4rem;letter-spacing:.06em}

.rv{opacity:0;transform:translateY(28px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}

@media(max-width:1024px){
  .bento{grid-template-columns:repeat(2,1fr)}
  .b-card.wide{grid-column:span 1}
  .b-card.large{grid-column:span 2;grid-row:span 1}
}
@media(max-width:768px){
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(3rem,10vw,6.5rem)}
  .bento{grid-template-columns:1fr;grid-auto-rows:320px}
  .b-card.large{grid-column:span 1}
  .metrics-stream{gap:1rem}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
}
`

export default function BrandAssets() {
  const [wireframeMode, setWireframeMode] = useState(false)
  const [selectedChar, setSelectedChar] = useState('natasha')

  const toggleMode = (mode) => {
    setWireframeMode(mode)
    getAudioEngine()?.playTabShift()
  }

  const handleCardClick = (id) => {
    setSelectedChar(selectedChar === id ? null : id)
    getAudioEngine()?.playTick(820)
  }

  return (
    <>
      <Head>
        <title>Brand Assets &amp; Illustrations — H P Shivaraj | Sivnco</title>
        <meta name="description" content="Vector character systems, asset pipelines, and illustrations built for digital surfaces and physical packaging." />
      </Head>

      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* HERO WITH FLUID CANVAS */}
      <div className="hero">
        <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.18)" secondaryColor="rgba(180, 100, 30, 0.08)" />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow">CASE STUDY — 03 // DISCIPLINE: BRAND ASSETS</div>
          <h1 className="hero-title">
            BRAND<i>ASSETS</i>
          </h1>
          <p className="hero-sub">
            Modular character systems and vector illustrations engineered for high-velocity FMCG packaging, digital commerce, and motion rigging.
          </p>
          <div className="hero-meta">
            <div className="meta">
              <label>CLIENT</label>
              <span>Jus Amazin</span>
            </div>
            <div className="meta">
              <label>ROLE</label>
              <span>Lead Illustrator &amp; Asset Lead</span>
            </div>
            <div className="meta">
              <label>DELIVERABLES</label>
              <span>6 Characters · 15+ Scenes</span>
            </div>
            <div className="meta">
              <label>PIPELINE</label>
              <span>Illustrator → Rigging → SVG</span>
            </div>
          </div>
        </div>
      </div>

      {/* METRICS STREAM CAPSULES */}
      <div className="c">
        <div className="metrics-stream">
          {METRICS.map((m) => (
            <div key={m.l} className="metric-capsule">
              <div className="m-n">{m.n}</div>
              <div className="m-l">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — The Strategy</div>
          <h2 className="s-title rv">Characters as<br /><i>infrastructure.</i></h2>
          <p className="body rv">
            Illustrations for consumer brands fail when they treat characters as mere decoration. A true character asset is a visual interface: scalable across 15mm retail seals or 4K billboards, easily rigged for 15-second social motion clips, and instantly recognizable in under 200 milliseconds on a crowded supermarket shelf.
          </p>
        </div>
      </section>

      {/* INTERACTIVE CHARACTER STUDIO */}
      <section>
        <div className="c">
          <div className="studio-header rv">
            <div>
              <div className="s-label">02 — INTERACTIVE CHARACTER STUDIO</div>
              <h2 className="s-title" style={{ marginBottom: 0 }}>Model Sheets &amp; <i>Blueprints.</i></h2>
            </div>
            <div className="studio-toggles">
              <button
                className={`mode-pill ${!wireframeMode ? 'active' : ''}`}
                onClick={() => toggleMode(false)}
              >
                Full Color Artwork
              </button>
              <button
                className={`mode-pill ${wireframeMode ? 'active' : ''}`}
                onClick={() => toggleMode(true)}
              >
                Vector Blueprint Spec
              </button>
            </div>
          </div>

          <div className="bento rv2">
            {CHARACTERS.map((char) => (
              <div
                key={char.id}
                className={`b-card ${char.size} ${wireframeMode ? 'wireframe' : ''} ${selectedChar === char.id ? 'selected' : ''}`}
                onClick={() => handleCardClick(char.id)}
              >
                <img src={char.img} alt={char.name} />
                <div className="b-overlay" />
                <div className="b-content">
                  <span className="b-label">{char.role}</span>
                  <div className="b-name">{char.name}</div>
                  <span className="b-meta">Click to inspect technical rigging notes</span>
                  <p className="b-spec">{char.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STREAM */}
      <section>
        <div className="c">
          <div className="s-label rv">03 — Creative Process</div>
          <h2 className="s-title rv">How assets are<br /><i>constructed.</i></h2>
          <div className="timeline rv2">
            {TIMELINE.map((item, index) => (
              <div key={index} className="tl-item">
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

      <Script id="ba-init" strategy="afterInteractive">{`
        (function(){
          function initReveals() {
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              });
            }, { threshold: 0.04, rootMargin: '0px 0px -40px 0px' });
            document.querySelectorAll('.rv, .rv2').forEach(function(el) { obs.observe(el); });
            setTimeout(function() {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }, 1000);
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initReveals);
          } else {
            initReveals();
          }

          var numObs = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(!e.isIntersecting) return;
              numObs.unobserve(e.target);
              var el = e.target;
              var text = el.textContent.trim();
              var m = text.match(/[\\d.]+/);
              if(!m) return;
              var target = parseFloat(m[0]);
              var suffix = text.replace(m[0],'');
              var isD = text.indexOf('.')!==-1;
              var start = Date.now(); var dur = 1600;
              (function tick(){
                var p = Math.min(1,(Date.now()-start)/dur);
                p = 1-Math.pow(1-p,3);
                el.textContent = (isD?(target*p).toFixed(1):Math.round(target*p))+suffix;
                if(p<1) requestAnimationFrame(tick);
              })();
            });
          },{threshold:0.3});
          document.querySelectorAll('.m-n').forEach(function(el){numObs.observe(el)});
        })();
      `}</Script>
    </>
  )
}

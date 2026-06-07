import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'

const METRICS = [
  { n: '2', l: 'In-House Projects' },
  { n: '2', l: 'Interactive 3D GLBs' },
  { n: '10+', l: 'High-Res Renders' },
  { n: '100%', l: 'Visual Coherence' },
]

const OG_MITHAI_ASSETS = [
  { id: 'front', name: 'Premium Box Front Render', role: 'Main Package Showcase', img: '/images/og_mithai/ogmitai_camera_front.png', size: 'large' },
  { id: 'far', name: 'Perspective Mockup', role: 'Package Geometry & Depth', img: '/images/og_mithai/ogmitai_camera_far.png', size: 'wide' },
  { id: 'front_alt', name: 'Alternate Front Layout', role: 'Typography Variations', img: '/images/og_mithai/ogmitai_camera_front_alt.png', size: 'standard' },
  { id: 'mithai_3', name: 'Textured Box Print Detail', role: 'Close-Up Texture & Finish', img: '/images/og_mithai/ogmitai_3.png', size: 'standard' },
  { id: 'whatsapp', name: 'WIP Production Phase', role: 'Factory Validation Check', img: '/images/og_mithai/ogmitai_whatsapp.jpg', size: 'wide' },
]

const VEDIC_TREATS_ASSETS = [
  { id: 'logo', name: 'Vedic Treats Logo Identity', role: 'Signature Mark', img: '/images/vedic_treats/logo.png', size: 'standard' },
  { id: 'asset_1', name: 'Primary Package Asset', role: 'Earthy Illustration Elements', img: '/images/vedic_treats/asset_1.png', size: 'standard' },
  { id: 'asset_2', name: 'Pattern Asset', role: 'Geometric Print Rationale', img: '/images/vedic_treats/asset_2.png', size: 'standard' },
  { id: 'asset_3', name: 'Back Label Rationale', role: 'Ingredient Transparency Layout', img: '/images/vedic_treats/asset_3.png', size: 'standard' },
]

const TIMELINE_OG = [
  { date: 'Conceptualization', title: 'Street Sweets Redefined', org: 'Sivnco Lab', desc: 'Merging traditional Mithai heritage with bold contemporary street typography. Setting the aesthetic foundation using strong colors and premium gold foil layouts.' },
  { date: 'Material & Scale', title: 'Packaging Geometry', org: 'Structural Design', desc: 'Sizing the boxes for modular sweet arrangements (assortments of 12/24 sweets) and ensuring rigid board strength for retail display.' }
]

const TIMELINE_VEDIC = [
  { date: 'Identity System', title: 'Ayurvedic Minimal Luxury', org: 'Wellness Branding', desc: 'Defining an understated packaging hierarchy with clean serif typography and hand-drawn organic elements representing clean, Ayurvedic ingredients.' },
  { date: '3D Pack Validation', title: 'GLB Production Modeling', org: 'Interactive Design', desc: 'Creating accurate 3D mockups of the protein/energy bars for pre-launch validation, rendering precise folds, paper texture, and material finishes.' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ih-bg:#0A0906;--ink:#F0EDE6;--ih-muted:rgba(240,237,230,0.45);--ih-accent:#D4600A;--ih-border:rgba(240,237,230,0.08);--ih-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }
body{background:var(--ih-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--ih-accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--ih-accent);opacity:.7}
a{color:inherit;text-decoration:none}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5vw;background:rgba(10,9,6,0.75);backdrop-filter:blur(20px);border-bottom:1px solid var(--ih-border)}
.logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.back{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;padding:.6rem 1.5rem;border:1px solid var(--ih-border);border-radius:40px;transition:.3s}
.back:hover{border-color:var(--ih-accent);color:var(--ih-accent)}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ih-border);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.92) 35%,rgba(10,9,6,.55) 65%,rgba(10,9,6,.25) 100%);pointer-events:none;z-index:0}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ih-accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-size:clamp(4.5rem,12vw,11rem);line-height:.88}
.hero-title i{color:var(--ih-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ih-muted);max-width:540px;line-height:1.85;margin-top:2rem}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ih-border)}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ih-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ih-border)}
.metric{background:var(--ih-bg);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;transition:background .4s}
.metric:hover{background:rgba(212,96,10,.06)}
.metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s}
.metric:hover::before{opacity:1}
.m-n{font-family:var(--D);font-size:clamp(3.5rem,7vw,6.5rem);color:var(--ih-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ih-muted);margin-top:.8rem}
section{padding:9rem 0;border-bottom:1px solid var(--ih-border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ih-accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-size:clamp(3.5rem,7vw,8rem);line-height:.88;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ih-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ih-muted);max-width:660px}

/* Bento Grid */
.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:280px;gap:1.5rem;margin-top:4rem}
.b-card{background:var(--ih-glass);border:1px solid var(--ih-border);border-radius:12px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;transition:transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease}
.b-card:hover{transform:translateY(-5px);border-color:rgba(212,96,10,0.25);box-shadow:0 30px 60px rgba(0,0,0,0.5)}
.b-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;transition:transform 0.8s cubic-bezier(0.19,1,0.22,1)}
.b-card:hover img{transform:scale(1.05)}
.b-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,0.92) 15%,rgba(10,9,6,0.3) 50%,transparent 100%);z-index:1}
.b-content{position:relative;z-index:2}
.b-label{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ih-accent);margin-bottom:.4rem;display:block}
.b-name{font-family:var(--D);font-size:1.6rem;line-height:1.1;letter-spacing:.02em;color:#F0EDE6}
.b-meta{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ih-muted);margin-top:.4rem;display:block}

/* Bento Sizes */
.b-card.tall{grid-row:span 2}
.b-card.wide{grid-column:span 2}
.b-card.large{grid-column:span 2;grid-row:span 2}
.b-card.large .b-name{font-size:2.2rem}

/* 3D Showcase Grid */
.three-d-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:4rem}
.three-d-card{background:var(--ih-glass);border:1px solid var(--ih-border);border-radius:12px;overflow:hidden;height:450px;position:relative;display:flex;flex-direction:column}
.viewer-container{flex-grow:1;width:100%;height:320px;position:relative;background:#100F0B}
.viewer-caption{padding:1.5rem;border-top:1px solid var(--ih-border);background:var(--ih-bg)}
.viewer-title{font-family:var(--D);font-size:1.4rem;color:#F0EDE6}
.viewer-sub{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ih-muted);margin-top:0.2rem}

/* Timeline */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:1.5rem;border-left:1px solid var(--ih-border);padding-left:2.5rem;position:relative}
.tl-item{position:relative;padding-bottom:1.5rem}
.tl-dot{position:absolute;left:-2.85rem;top:0.35rem;width:10px;height:10px;border-radius:50%;background:var(--ih-accent);border:3px solid var(--ih-bg);box-shadow:0 0 0 1px var(--ih-border)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ih-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-size:1.6rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ih-muted);margin-top:.2rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ih-muted);margin-top:1rem;max-width:680px}

/* PDF Download Banner */
.pdf-banner{background:rgba(212,96,10,0.04);border:1px solid rgba(212,96,10,0.15);padding:3rem;border-radius:12px;margin-top:4rem;display:flex;align-items:center;justify-content:space-between;gap:2rem;position:relative;overflow:hidden}
.pdf-banner::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 80% 0%,rgba(212,96,10,0.08),transparent 60%);pointer-events:none}
.pdf-info{max-width:600px}
.pdf-title{font-family:var(--D);font-size:2rem;color:#F0EDE6;line-height:1.2}
.pdf-desc{font-family:var(--S);font-size:1.02rem;color:var(--ih-muted);margin-top:0.6rem;line-height:1.6}
.pdf-btn{font-family:var(--M);font-size:.65rem;letter-spacing:.18em;border:1px solid var(--ih-accent);color:var(--ih-accent);padding:.9rem 2.2rem;border-radius:40px;transition:.3s;background:transparent;flex-shrink:0}
.pdf-btn:hover{background:var(--ih-accent);color:#fff;box-shadow:0 10px 20px rgba(212,96,10,0.2)}

/* Footer */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ih-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-size:1.4rem;letter-spacing:.06em}

/* Custom glow tags in cards */
.b-card::after, .three-d-card::after, .tl-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(212,96,10,0.12), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 1;
}
.b-card:hover::after, .three-d-card:hover::after {
  opacity: 1;
}

@media(max-width:1024px){
  .bento{grid-template-columns:repeat(3,1fr);grid-auto-rows:240px}
  .b-card.large{grid-column:span 2;grid-row:span 2}
  .three-d-grid{grid-template-columns:1fr;gap:2rem}
  .three-d-card{height:420px}
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
  .bento{grid-template-columns:repeat(2,1fr);grid-auto-rows:220px;gap:1rem}
  .b-card.large{grid-column:span 2;grid-row:span 2}
  .pdf-banner{flex-direction:column;align-items:flex-start;padding:2rem}
  .pdf-btn{width:100%;text-align:center}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
}
@media(max-width:480px){
  .hero-title{font-size:clamp(2.5rem,12vw,4.5rem)}
  .metrics{grid-template-columns:1fr}
  .bento{grid-template-columns:1fr;grid-auto-rows:220px}
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
`

export default function InHouseDesigns() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>In-House Designs — H.P. Shivaraj · Sivnco</title>
        <meta name="description" content="Explore OG Mithai and Vedic Treats in-house projects. Traditional roots reimagined through bold modern branding, premium packaging layouts, and interactive 3D models." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/@google/model-viewer@3.3.0/dist/model-viewer.min.js" strategy="afterInteractive" type="module" />

      <div id="dot" />

      <nav>
        <Link href="/" className="logo">SIVNCO<span style={{ color: 'var(--ih-accent)' }}>.</span></Link>
        <Link href="/" className="back">← Portfolio</Link>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(212,96,10,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(232,133,42,0.1) 0%, transparent 50%), var(--ih-bg)', animation: 'heroBgPulse 8s ease-in-out infinite' }} />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">In-House Lab · Brand Packaging &amp; Renders</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            In-House<br /><i>Designs</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            A dedicated playground for testing design ideas, tactile packaging materials, and detailed 3D models. Synthesizing regional roots with high-end digital presentation.
          </p>
          <div className="hero-meta rv" style={{ transitionDelay: '.4s' }}>
            {[
              ['Scope', 'Branding · Packaging'],
              ['Renders', 'Tactile & 3D Interactive'],
              ['Concepts', 'OG Mithai & Vedic Treats'],
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

      {/* INTRODUCTION */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — The Studio Lab</div>
          <h2 className="s-title rv">Testing lines,<br /><i>shapes &amp; textures.</i></h2>
          <div className="body rv2" style={{ color: 'var(--ih-muted)', fontSize: '1.15rem', lineHeight: '1.9' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Design at Sivnco is not just about client deliverables; it is about building deep, exploratory design frameworks. In our in-house lab, we construct mockups and test how traditional branding symbols translate to physical packaging and modern digital interfaces.
            </p>
            <p>
              This subpage showcases two contrasting design projects: **OG Mithai**, a study on bold street sweets culture with heritage packaging; and **Vedic Treats**, an exploration of clean, understated Ayurvedic luxury with 3D product simulation.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY 1: OG MITHAI */}
      <section style={{ borderBottom: '1px solid var(--ih-border)' }}>
        <div className="c">
          <div className="s-label rv">02 — Case Study I</div>
          <h2 className="s-title rv">OG Mithai:<br /><i>Bold sweets culture.</i></h2>
          
          <div className="body rv" style={{ marginBottom: '3rem' }}>
            <p style={{ color: 'var(--ih-muted)' }}>
              OG Mithai is a conceptual brand reimagining classic Indian sweets for a contemporary audience. The design balances authentic street-level nostalgia with a premium gifting visual language. Bold typography colliding with clean grids, golden foil highlights, and vivid colors makes this packaging design stand out immediately.
            </p>
          </div>

          <div className="bento rv2">
            {OG_MITHAI_ASSETS.map((asset) => (
              <div key={asset.id} className={`b-card ${asset.size}`}>
                <img src={asset.img} alt={asset.name} />
                <div className="b-overlay" />
                <div className="b-content">
                  <span className="b-label">{asset.role}</span>
                  <h3 className="b-name">{asset.name}</h3>
                  <span className="b-meta">Rendering Mockup</span>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline rv2" style={{ marginTop: '5rem' }}>
            {TIMELINE_OG.map((item, index) => (
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

      {/* CASE STUDY 2: VEDIC TREATS */}
      <section>
        <div className="c">
          <div className="s-label rv">03 — Case Study II</div>
          <h2 className="s-title rv">Vedic Treats:<br /><i>Ayurvedic wellness.</i></h2>
          
          <div className="body rv" style={{ marginBottom: '3rem' }}>
            <p style={{ color: 'var(--ih-muted)' }}>
              Vedic Treats presents a clean, minimal design aesthetic built for an premium Ayurvedic wellness brand. Prioritizing pure ingredients like cow ghee, organic jaggery, and dry fruits, the packaging is structured around earthy color palettes, delicate botanical elements, and luxury serif typography. To validate the packaging files before print production, we developed high-fidelity 3D GLB packaging models.
            </p>
          </div>

          {/* Interactive 3D Mockup Showcase */}
          <h3 className="s-label rv" style={{ marginTop: '4rem', marginBottom: '-2rem' }}>Interactive 3D Pack Renders</h3>
          <div className="three-d-grid rv2">
            <div className="three-d-card">
              <div className="viewer-container">
                <model-viewer 
                  src="/models/pc_bar.glb" 
                  alt="Vedic Treats Protein Bar Package 3D Model" 
                  auto-rotate 
                  camera-controls 
                  shadow-intensity="1" 
                  environment-image="neutral" 
                  style={{ width: '100%', height: '100%', background: 'transparent' }}>
                </model-viewer>
              </div>
              <div className="viewer-caption">
                <h4 className="viewer-title">PC Bar Front Render</h4>
                <p className="viewer-sub">Interactive 3D GLB Model · Auto-Rotate enabled</p>
              </div>
            </div>

            <div className="three-d-card">
              <div className="viewer-container">
                <model-viewer 
                  src="/models/pc_bar_2.glb" 
                  alt="Vedic Treats Protein Bar Package Alternate 3D Model" 
                  auto-rotate 
                  camera-controls 
                  shadow-intensity="1" 
                  environment-image="neutral" 
                  style={{ width: '100%', height: '100%', background: 'transparent' }}>
                </model-viewer>
              </div>
              <div className="viewer-caption">
                <h4 className="viewer-title">PC Bar Alternate Angle</h4>
                <p className="viewer-sub">Interactive 3D GLB Model · Drag to rotate</p>
              </div>
            </div>
          </div>

          {/* 2D Assets Bento Grid */}
          <h3 className="s-label rv" style={{ marginTop: '5rem', marginBottom: '-2rem' }}>Brand &amp; Packaging Elements</h3>
          <div className="bento rv2">
            {VEDIC_TREATS_ASSETS.map((asset) => (
              <div key={asset.id} className={`b-card ${asset.size}`}>
                <img src={asset.img} alt={asset.name} />
                <div className="b-overlay" />
                <div className="b-content">
                  <span className="b-label">{asset.role}</span>
                  <h3 className="b-name">{asset.name}</h3>
                  <span className="b-meta">Asset Rationale</span>
                </div>
              </div>
            ))}
          </div>

          {/* PDF Download Banner */}
          <div className="pdf-banner rv2">
            <div className="pdf-info">
              <h3 className="pdf-title">Complete Design Brief PDF</h3>
              <p className="pdf-desc">
                Review the comprehensive brand deck and design blueprint for Vedic Treats, including visual guidelines, printing materials logic, and target audience research.
              </p>
            </div>
            <a href="/images/vedic_treats/brief.pdf" target="_blank" download className="pdf-btn">
              Download PDF (3.9 MB)
            </a>
          </div>

          {/* Process Timeline */}
          <div className="timeline rv2" style={{ marginTop: '5rem' }}>
            {TIMELINE_VEDIC.map((item, index) => (
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
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--ih-accent)' }}>.</span></div></div>
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

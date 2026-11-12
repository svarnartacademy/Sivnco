import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    num: "01",
    h: "Taking the Brand Beyond the Pack",
    t: "SPATIAL_IDENTITY",
    b: "My physical-brand work included free-standing display concepts, exhibition graphics, signage and delivery-vehicle branding. Each format asked the identity to work at a different scale and in a different setting."
  },
  {
    num: "02",
    h: "Moving Between Model and Site",
    t: "COORDINATION_RIGOR",
    b: "I developed display renders and large-format artwork, coordinated with operations and sales colleagues, and worked with fabrication and print partners. For the delivery vehicle, the scope extended to on-site coordination of vinyl application."
  },
  {
    num: "03",
    h: "Retail Floor Displays (FSUs)",
    t: "3D_RETAIL_MODELING",
    b: "Engineered 3D models and graphic dielines for 5ft × 2ft Free-Standing Display Units (FSUs), balancing shelf-loading capacities with high-visibility brand crowns and educational side panels."
  },
  {
    num: "04",
    h: "Exhibitions & Fleet Logistics",
    t: "LARGE_FORMAT_SCALE",
    b: "Translated 2D brand tokens into large-format exhibition canopies (AAHAR, Dubai, National Millet Expo) and delivery-vehicle vinyl decals, ensuring unified recognition in physical space."
  }
]

const METRICS = [
  { n: "3 Chapters", l: "Retail Displays, Trade Expos & Fleet Branding" },
  { n: "5ft × 2ft", l: "Standalone Retail FSU Structural Concepts" },
  { n: "3D Spatial", l: "Blender CAD Environmental Modeling & Renders" },
  { n: "In-House", l: "Visual Direction, Graphics & Prepress Production" }
]

const GALLERY = [
  {
    id: "fsu_front",
    title: "5ft × 2ft Free-Standing Merchandising Unit (FSU)",
    desc: "3D visualization of the standalone retail display unit, balancing shelf weight-load capacities with bold brand crown visibility.",
    src: "/images/jusamazin/pos/fsu_retail_display.png"
  },
  {
    id: "fsu_side",
    title: "FSU Side-Panel Category Architecture",
    desc: "Side-view render showcasing category educational hierarchy and clean nutrition certification badges.",
    src: "/images/jusamazin/pos/fsu_retail_side.png"
  },
  {
    id: "condo_carnival",
    title: "Experiential Pavilion — Outdoor Setup",
    desc: "Comprehensive 3D environment layout for outdoor consumer festivals, integrating sampling bars, canopies, and retail checkout.",
    src: "/images/jusamazin/pos/condo_carnival_booth.png"
  },
  {
    id: "trade_photo_01",
    title: "Consumer Sampling Pavilion",
    desc: "Live field exhibition photograph demonstrating real-world brand canopy presence and active consumer tasting counters.",
    src: "/images/jusamazin/pos/trade_event_photo_01.jpg"
  },
  {
    id: "trade_photo_02",
    title: "Live Retail Exhibition Counter",
    desc: "Tiered countertop product displays showing clean-label nut butters, superfoods, and festive gift boxes in high-traffic trade environment.",
    src: "/images/jusamazin/pos/trade_event_photo_02.jpg"
  },
  {
    id: "trade_photo_03",
    title: "Physical Market Tasting Booth",
    desc: "On-site consumer feedback booth evaluating purchase intent and taste reception for new FMCG product launches.",
    src: "/images/jusamazin/pos/trade_event_photo_03.jpg"
  }
]

const PRODUCTION_CRITERIA = [
  {
    n: "Large-Format Resolution",
    r: "Environmental Prepress",
    q: "Prepared vector artwork and high-DPI raster assets for multi-meter trade canopies, backdrops, and vehicle side wraps with strict color fidelity."
  },
  {
    n: "3D Spatial Sightlines",
    r: "Display Prototyping",
    q: "Modeled retail FSUs and exhibition pavilions in 3D to evaluate shopper eye-level sightlines and lighting reflection prior to physical fabrication."
  },
  {
    n: "Fleet Application Rigor",
    r: "Logistics Decals",
    q: "Coordinated on-site vinyl installation on delivery fleet vehicles, ensuring seam alignment across doors, handles, and vehicle contours."
  },
  {
    n: "Creative vs Fabrication Scope",
    r: "Role Boundary",
    q: "Maintained clear distinction between visual direction, graphic design, and 3D modeling versus third-party specialist fabrication engineering."
  }
]

const NAV = [
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Lil\'Stars (Kids)', h: '/jusamazin/lilstars' },
  { l: 'Mom2B (Maternal)', h: '/jusamazin/mom2b' },
  { l: 'Snacks & Canisters', h: '/jusamazin/snacks' },
  { l: 'Core Packaging', h: '/jusamazin/core-packaging' },
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Bars', h: '/jusamazin/bars' },
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --pos-bg:#0A0906;--pos-white:#F0EDE6;--pos-emerald:#2B9348;--pos-emerald-light:#55A630;
  --pos-muted:rgba(240,237,230,0.65);--pos-border:rgba(240,237,230,0.1);
  --D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth;overflow-x:clip!important;max-width:100vw!important}
body{background:var(--pos-bg);color:var(--pos-white);font-family:var(--S);overflow-x:clip!important;max-width:100vw!important}
a{color:inherit;text-decoration:none}

.pos-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--pos-border)}
.pos-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 75% 25%,rgba(43,147,72,0.22),transparent 60%),radial-gradient(ellipse at 25% 75%,rgba(85,166,48,0.12),transparent 55%),var(--pos-bg);animation:posPulse 12s ease-in-out infinite}
@keyframes posPulse{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}}
.pos-hero-inner{position:relative;z-index:2;padding:0 5vw 6rem;width:100%}
.pos-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4rem,11vw,11.5rem);line-height:0.95;letter-spacing:-0.03em}
.pos-hero h1 span{color:var(--pos-emerald-light)}
.pos-hero h1 em{font-style:normal;color:var(--pos-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.6;max-width:680px}

.pos-s{padding:7rem 0;border-bottom:1px solid var(--pos-border)}
.pos-c{max-width:1280px;margin:0 auto;padding:0 5vw}
.pos-label{font-family:var(--M);font-size:.65rem;letter-spacing:.25em;color:var(--pos-emerald-light);margin-bottom:1.5rem;text-transform:uppercase}
.pos-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,5.5vw,5.5rem);line-height:1.05;margin-bottom:2rem}
.pos-title em{font-style:normal;color:var(--pos-muted);font-family:var(--S);font-weight:300}
.pos-body{font-size:1.1rem;line-height:1.9;color:var(--pos-muted);max-width:720px}

.pos-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:4rem}
.pos-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--pos-border);border-radius:28px;padding:3rem;position:relative;overflow:hidden;transition:border-color .3s}
.pos-pill-card:hover{border-color:rgba(85,166,48,0.4)}
.pos-pill-num{font-family:var(--D);font-weight:900;font-size:3rem;color:rgba(85,166,48,0.25);margin-bottom:1rem}
.pos-pill-tag{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--pos-emerald-light);margin-bottom:.8rem}
.pos-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.6rem;margin-bottom:1rem;color:var(--pos-white)}
.pos-pill-card p{font-size:1rem;line-height:1.8;color:var(--pos-muted)}

.pos-metrics-strip{display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:3rem}
.pos-metric-card{flex:1 1 calc(25% - 1.5rem);min-width:200px;background:rgba(240,237,230,0.02);border:1px solid var(--pos-border);border-radius:20px;padding:2rem;text-align:center}
.pos-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2rem,3.8vw,3.2rem);color:var(--pos-emerald-light);line-height:1}
.pos-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.16em;color:var(--pos-muted);margin-top:.8rem;line-height:1.6}

.pos-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem}
.pos-item{background:rgba(240,237,230,0.02);border:1px solid var(--pos-border);border-radius:32px;overflow:hidden;transition:border-color .3s,transform .3s}
.pos-item:hover{border-color:rgba(85,166,48,0.4);transform:scale(1.015)}
.pos-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.pos-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.pos-item:hover .pos-img-wrap img{transform:scale(1.05)}
.pos-info{padding:2rem 2.2rem;display:flex;flex-direction:column;gap:.6rem}
.pos-item-title{font-family:var(--D);font-weight:900;font-size:1.3rem}
.pos-item-desc{font-size:.92rem;line-height:1.75;color:var(--pos-muted)}

.pos-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--pos-border)}
.pos-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(85,166,48,0.1),transparent 65%)}
.pos-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.pos-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.pos-soul-q strong{color:var(--pos-white);font-weight:500}

.pos-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.pos-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--pos-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.pos-fb-q{font-size:1.02rem;line-height:1.85;color:var(--pos-muted);font-style:italic;flex:1}
.pos-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.pos-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--pos-emerald-light);margin-top:.2rem}

.pos-footer{padding:5rem 0 3rem;border-top:1px solid var(--pos-border)}
.pos-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.pos-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--pos-muted);transition:color .3s}
.pos-footer-link:hover{color:var(--pos-emerald-light)}

.posv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.posv.vis{opacity:1;transform:translateY(0)}

@media(max-width:1100px){
  .pos-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:900px){
  .pos-pillars,.pos-grid,.pos-fb-grid{grid-template-columns:1fr}
  .pos-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .pos-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function RetailPosPage() {
  return (
    <>
      <Head>
        <title>Brand in Physical Space — Retail POS, Trade Expos &amp; Fleet | SIVNCO</title>
        <meta name="description" content="Retail-display development, exhibition graphics and fleet branding across physical brand touchpoints by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/retail-pos" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/work" backLabel="← Work Directory" />

      <div className="pos-hero">
        <div className="pos-hero-bg" />
        <div className="pos-hero-inner">
          <div className="br-label acid mb-3">■ 10 // BRAND IN PHYSICAL SPACE &middot; SPATIAL &amp; ENVIRONMENTAL</div>
          <h1>
            Physical<br /><span>Space</span>
            <em>
              Retail-display development, exhibition graphics and fleet branding across physical touchpoints. Taking the brand beyond the pack.
            </em>
          </h1>
        </div>
      </div>

      <section className="pos-s">
        <div className="pos-c">
          <div className="pos-label posv">Strategic Intent</div>
          <div className="pos-title posv">
            Taking the Brand<br /><em>Beyond the Pack.</em>
          </div>
          <p className="pos-body posv">
            My physical-brand work included free-standing display concepts, exhibition graphics, signage and delivery-vehicle branding. Each format asked the identity to work at a different scale and in a different setting.
          </p>

          <div className="pos-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="pos-pill-card posv">
                <div className="pos-pill-num">{p.num}</div>
                <div className="pos-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pos-s">
        <div className="pos-c">
          <div className="pos-label posv">Scope &amp; Credits</div>
          <div className="pos-title posv">
            Moving Between<br /><em>Model and Site.</em>
          </div>
          <div className="pos-body posv" style={{marginBottom:'2.5rem'}}>
            <p><strong>Project Credit:</strong> Visual direction, graphic design, 3D display development and production coordination &mdash; H P Shivaraj. Fabrication and installation involved specialist partners.</p>
            <p style={{marginTop:'0.8rem'}}><strong>Context:</strong> Jus’Amazin &middot; A collection of spatial and environmental projects presented across three chapters: retail floor displays, trade exhibition environments, and delivery vehicle fleet branding.</p>
          </div>

          <div className="pos-metrics-strip posv">
            {METRICS.map((m) => (
              <div key={m.l} className="pos-metric-card">
                <div className="pos-metric-n">{m.n}</div>
                <div className="pos-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pos-s">
        <div className="pos-c">
          <div className="pos-label posv">Environmental Gallery</div>
          <div className="pos-title posv">
            Spatial Models &amp;<br /><em>Field Installations.</em>
          </div>
          <p className="pos-body posv">
            I developed display renders and large-format artwork, coordinated with operations and sales colleagues, and worked with fabrication and print partners.
          </p>

          <div className="pos-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="pos-item posv">
                <div className="pos-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="pos-info">
                  <div className="pos-item-title">{g.title}</div>
                  <div className="pos-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pos-c">
        <div className="pos-soul posv">
          <div className="pos-soul-inner">
            <blockquote className="pos-soul-q">
              &ldquo;Moving from <strong>scale model to physical site</strong>, translating brand tokens into <strong>impactful environmental structures</strong>.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="pos-s">
        <div className="pos-c">
          <div className="pos-label posv">Production Standards</div>
          <div className="pos-title posv">
            Large-Format &amp;<br /><em>Installation Rigor.</em>
          </div>
          <div className="pos-fb-grid">
            {PRODUCTION_CRITERIA.map((crit, i) => (
              <div key={i} className="pos-fb-card posv">
                <div className="pos-fb-q">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="pos-fb-n">{crit.n}</div>
                  <div className="pos-fb-r">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pos-c" style={{marginTop:'3rem', marginBottom:'3rem'}}>
        <div className="pos-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="pos-label">Category Directories {'>>>'}</div>
          <div className="pos-footer-links" style={{marginTop:'1rem', marginBottom:'0'}}>
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="pos-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <Script id="pos-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.posv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.posv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.posv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
    </>
  )
}

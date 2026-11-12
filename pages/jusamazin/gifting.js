import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    num: "01",
    h: "Designing the Gift as a Whole",
    t: "PRODUCT_&_PACKAGING_INTEGRATION",
    b: "The gifting work brought together products, presentation and packaging across several formats. I developed red and blue ethnic directions, a deep-purple contemporary direction, and yellow E-flute packaging, working across jar combinations, trays, sleeves and supporting components."
  },
  {
    num: "02",
    h: "From Graphic Surface to Physical Experience",
    t: "STRUCTURAL_DEVELOPMENT",
    b: "The scope included slipcases, E-flute boxes and sliding rigid trays. Working across these structures required the graphics to respond to the shape of the package, the arrangement of its contents and the way it would be presented."
  },
  {
    num: "03",
    h: "Directing the Product Image",
    t: "3D_VISUALISATION",
    b: "I also created composite 3D presentations for gifting combinations. The work involved composing boxes, jars and pouches together, and adapting those compositions into separate product assets where required."
  },
  {
    num: "04",
    h: "What the Project Demonstrates",
    t: "ART_DIRECTION_SYSTEM",
    b: "Art direction across connected physical and visual elements: packaging graphics, structural formats, product arrangement and rendered presentation. Concept development, dielines, and production coordination."
  }
]

const METRICS = [
  { n: "4 Directions", l: "Red & Blue Ethnic, Royal Purple & Yellow E-Flute" },
  { n: "3 Structures", l: "Sliding Rigid Trays, Slipcases & E-Flute Boxes" },
  { n: "3D Models", l: "Composite Blender Visualizations & Form Studies" },
  { n: "Production", l: "Dieline Prepress & Factory Color Approvals" }
]

const GALLERY = [
  {
    id: "purple_tray",
    title: "Contemporary Sliding Tray (Royal Purple)",
    desc: "3D presentation of the contemporary Royal Purple sliding gift tray featuring recessed jar compartments and gold foil accents.",
    src: "/images/jusamazin/gifting/purple_contemporary_tray.png"
  },
  {
    id: "red_ethnic_tray",
    title: "Ethnic Heritage Tray (Crimson & Gold)",
    desc: "Festive collection tray celebrating Indian traditional craftsmanship through gold mandala line-art balanced with clean typographic structure.",
    src: "/images/jusamazin/gifting/red_ethnic_tray.png"
  },
  {
    id: "yellow_box",
    title: "Modern Contemporary Box (Amber Yellow)",
    desc: "High-contrast E-flute gift box engineered for modern celebratory hampers and corporate gifting.",
    src: "/images/jusamazin/gifting/yellow_funky_box.png"
  },
  {
    id: "red_mini",
    title: "Miniature Festive Hamper Box",
    desc: "Compact dual-jar rigid gift box engineered for lightweight logistics and high-volume corporate presentation.",
    src: "/images/jusamazin/gifting/red_mini_box.png"
  },
  {
    id: "windowed_box",
    title: "Windowed Pouch Gift Presentation",
    desc: "Structural carton with precision die-cut aperture displaying assorted snack pouches (Salted Almonds, Cashews, Seed Mixes).",
    src: "/images/jusamazin/gifting/windowed_pouch_box.png"
  },
  {
    id: "final_all",
    title: "Complete 2024–2025 Gifting Ecosystem",
    desc: "The full architectural portfolio spanning rigid boxes, slider trays, artisanal chocolates, and pouch presentation units.",
    src: "/images/jusamazin/gifting/final_all_gifting.png"
  }
]

const PRODUCTION_CRITERIA = [
  {
    n: "Rigid Board Fold Tolerances",
    r: "Structural Engineering",
    q: "Calibrated fold allowances and corner relief for heavy GSM rigid boxes and sliding trays, ensuring smooth drawer action without jamming."
  },
  {
    n: "Spot Gold Foil Density",
    r: "Prepress Finishing",
    q: "Gold foil detailing was calibrated to catch ambient festival lighting without appearing ostentatious, preserving clean-label brand cues."
  },
  {
    n: "Modular Inner Cavities",
    r: "Packaging Operations",
    q: "Engineered die-cut inner trays to snugly hold diverse combinations of jars and snacking pouches across corporate and festive runs."
  },
  {
    n: "Soft-Touch Substrate",
    r: "Material Precision",
    q: "Balanced deep jewel tones (crimson, royal purple, warm amber) with matte soft-touch lamination to prevent fingerprint marks in unboxing."
  }
]

const NAV = [
  { l: 'Lil\'Stars (Kids)', h: '/jusamazin/lilstars' },
  { l: 'Mom2B (Maternal)', h: '/jusamazin/mom2b' },
  { l: 'Retail POS & Spatial', h: '/jusamazin/retail-pos' },
  { l: 'Snacks & Canisters', h: '/jusamazin/snacks' },
  { l: 'Core Packaging', h: '/jusamazin/core-packaging' },
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Bars', h: '/jusamazin/bars' },
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --gf-bg:#0A0906;--gf-white:#F0EDE6;--gf-gold:#D4AF37;--gf-gold-dark:#AA820A;
  --gf-muted:rgba(240,237,230,0.65);--gf-border:rgba(240,237,230,0.1);
  --D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth;overflow-x:clip!important;max-width:100vw!important}
body{background:var(--gf-bg);color:var(--gf-white);font-family:var(--S);overflow-x:clip!important;max-width:100vw!important}
a{color:inherit;text-decoration:none}

.gf-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--gf-border)}
.gf-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 70% 30%,rgba(212,175,55,0.18),transparent 60%),radial-gradient(ellipse at 20% 80%,rgba(170,130,10,0.12),transparent 50%),var(--gf-bg);animation:gfPulse 12s ease-in-out infinite}
@keyframes gfPulse{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}}
.gf-hero-inner{position:relative;z-index:2;padding:0 5vw 6rem;width:100%}
.gf-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4rem,11vw,11.5rem);line-height:0.95;letter-spacing:-0.03em}
.gf-hero h1 span{color:var(--gf-gold)}
.gf-hero h1 em{font-style:normal;color:var(--gf-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.6;max-width:680px}

.gf-s{padding:7rem 0;border-bottom:1px solid var(--gf-border)}
.gf-c{max-width:1280px;margin:0 auto;padding:0 5vw}
.gf-label{font-family:var(--M);font-size:.65rem;letter-spacing:.25em;color:var(--gf-gold);margin-bottom:1.5rem;text-transform:uppercase}
.gf-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,5.5vw,5.5rem);line-height:1.05;margin-bottom:2rem}
.gf-title em{font-style:normal;color:var(--gf-muted);font-family:var(--S);font-weight:300}
.gf-body{font-size:1.1rem;line-height:1.9;color:var(--gf-muted);max-width:720px}

.gf-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:4rem}
.gf-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--gf-border);border-radius:28px;padding:3rem;position:relative;overflow:hidden;transition:border-color .3s}
.gf-pill-card:hover{border-color:rgba(212,175,55,0.4)}
.gf-pill-num{font-family:var(--D);font-weight:900;font-size:3rem;color:rgba(212,175,55,0.25);margin-bottom:1rem}
.gf-pill-tag{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--gf-gold);margin-bottom:.8rem}
.gf-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.6rem;margin-bottom:1rem;color:var(--gf-white)}
.gf-pill-card p{font-size:1rem;line-height:1.8;color:var(--gf-muted)}

.gf-metrics-strip{display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:3rem}
.gf-metric-card{flex:1 1 calc(25% - 1.5rem);min-width:200px;background:rgba(240,237,230,0.02);border:1px solid var(--gf-border);border-radius:20px;padding:2rem;text-align:center}
.gf-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2rem,3.8vw,3.2rem);color:var(--gf-gold);line-height:1}
.gf-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.16em;color:var(--gf-muted);margin-top:.8rem;line-height:1.6}

.gf-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2.2rem;margin-top:4rem}
.gf-item{background:rgba(240,237,230,0.02);border:1px solid var(--gf-border);border-radius:32px;overflow:hidden;transition:border-color .3s,transform .3s}
.gf-item:hover{border-color:rgba(212,175,55,0.4);transform:scale(1.015)}
.gf-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.gf-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.gf-item:hover .gf-img-wrap img{transform:scale(1.05)}
.gf-info{padding:2rem 2.2rem;display:flex;flex-direction:column;gap:.6rem}
.gf-item-title{font-family:var(--D);font-weight:900;font-size:1.4rem}
.gf-item-desc{font-size:.92rem;line-height:1.75;color:var(--gf-muted)}

.gf-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--gf-border)}
.gf-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(212,175,55,0.1),transparent 65%)}
.gf-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.gf-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.gf-soul-q strong{color:var(--gf-white);font-weight:500}

.gf-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.gf-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--gf-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.gf-fb-q{font-size:1.02rem;line-height:1.85;color:var(--gf-muted);font-style:italic;flex:1}
.gf-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.gf-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--gf-gold);margin-top:.2rem}

.gf-footer{padding:5rem 0 3rem;border-top:1px solid var(--gf-border)}
.gf-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.gf-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--gf-muted);transition:color .3s}
.gf-footer-link:hover{color:var(--gf-gold)}

.gfv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.gfv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .gf-pillars,.gf-grid,.gf-fb-grid{grid-template-columns:1fr}
  .gf-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .gf-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function GiftingPage() {
  return (
    <>
      <Head>
        <title>Festive Gifting — A Family of Celebrations | SIVNCO</title>
        <meta name="description" content="Coordinated gifting directions spanning pattern, colour, packaging formats and product presentation by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/gifting" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/work" backLabel="← Work Directory" />

      <div className="gf-hero">
        <div className="gf-hero-bg" />
        <div className="gf-hero-inner">
          <div className="br-label acid mb-3">■ 03 // FESTIVE GIFTING &middot; A FAMILY OF CELEBRATIONS</div>
          <h1>
            Festive<br /><span>Gifting</span>
            <em>
              Coordinated gifting directions spanning pattern, colour, packaging formats and product presentation across red, blue, contemporary purple, and yellow E-flute structures.
            </em>
          </h1>
        </div>
      </div>

      <section className="gf-s">
        <div className="gf-c">
          <div className="gf-label gfv">Strategic Intent</div>
          <div className="gf-title gfv">
            Designing the Gift<br /><em>as a Whole.</em>
          </div>
          <p className="gf-body gfv">
            The gifting work brought together products, presentation and packaging across several formats. I developed red and blue ethnic directions, a deep-purple contemporary direction, and yellow E-flute packaging, working across jar combinations, trays, sleeves and supporting components.
          </p>

          <div className="gf-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="gf-pill-card gfv">
                <div className="gf-pill-num">{p.num}</div>
                <div className="gf-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gf-s">
        <div className="gf-c">
          <div className="gf-label gfv">Project Context &amp; Scope</div>
          <div className="gf-title gfv">
            Execution &amp;<br /><em>Form Factors.</em>
          </div>
          <div className="gf-body gfv" style={{marginBottom:'2.5rem'}}>
            <p><strong>Project Credit:</strong> Art direction, packaging design, structural development, 3D visualisation and production coordination &mdash; H P Shivaraj.</p>
            <p style={{marginTop:'0.8rem'}}><strong>Context:</strong> Jus’Amazin &middot; Festive and corporate gifting &middot; Multiple project phases across 2024&ndash;2025.</p>
          </div>

          <div className="gf-metrics-strip gfv">
            {METRICS.map((m, i) => (
              <div key={i} className="gf-metric-card">
                <div className="gf-metric-n">{m.n}</div>
                <div className="gf-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gf-s">
        <div className="gf-c">
          <div className="gf-label gfv">Architectural Gallery</div>
          <div className="gf-title gfv">
            Structural Form &amp;<br /><em>3D Visualisation.</em>
          </div>
          <p className="gf-body gfv">
            Boxes, jars, and pouches were modeled and rendered in composite 3D presentations to evaluate structural proportion and physical lighting prior to dieline finalization and industrial press runs.
          </p>

          <div className="gf-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="gf-item gfv">
                <div className="gf-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="gf-info">
                  <div className="gf-item-title">{g.title}</div>
                  <div className="gf-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gf-c">
        <div className="gf-soul gfv">
          <div className="gf-soul-inner">
            <blockquote className="gf-soul-q">
              &ldquo;Art direction across connected physical and visual elements: <strong>packaging graphics</strong>, <strong>structural formats</strong>, product arrangement and <strong>rendered presentation</strong>.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="gf-s">
        <div className="gf-c">
          <div className="gf-label gfv">Production &amp; Prepress</div>
          <div className="gf-title gfv">
            Technical &amp;<br /><em>Finishing Standards.</em>
          </div>
          <div className="gf-fb-grid">
            {PRODUCTION_CRITERIA.map((crit, i) => (
              <div key={i} className="gf-fb-card gfv">
                <div className="gf-fb-q">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="gf-fb-n">{crit.n}</div>
                  <div className="gf-fb-r">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gf-c" style={{marginTop:'3rem', marginBottom:'3rem'}}>
        <div className="gf-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="gf-label">Category Directories {'>>>'}</div>
          <div className="gf-footer-links" style={{marginTop:'1rem', marginBottom:'0'}}>
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="gf-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <Script id="gf-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.gfv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.gfv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.gfv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
    </>
  )
}

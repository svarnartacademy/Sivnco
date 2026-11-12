import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    num: "01",
    h: "Establishing a Separate Identity",
    t: "SUB_BRAND_CREATION",
    b: "My Mom2B work developed a dedicated product identity across almond, seed and peanut spreads. The project extended into product-information imagery and packaging presentations for different container formats."
  },
  {
    num: "02",
    h: "Working Across Physical and Digital Formats",
    t: "OMNI_CHANNEL_CONTINUITY",
    b: "The case connects the pack artwork with Glass and PET product presentations, showing how the range was communicated across packaging and e-commerce assets."
  },
  {
    num: "03",
    h: "Grounded Informational Hierarchy",
    t: "TRANSPARENT_NUTRITION",
    b: "Engineered front-of-pack claim hierarchies that immediately communicate essential maternal nutritional benefits with calming warmth and transparent credibility."
  },
  {
    num: "04",
    h: "Savory & Regional Variant Extension",
    t: "PORTFOLIO_DIVERSITY",
    b: "Extended the visual language beyond sweet nut butters into traditional Indian savory profiles (such as Peanut & Flax Chutney), preserving clean-label certifications across distinct flavor categories."
  }
]

const METRICS = [
  { n: "4+ Spreads", l: "Almond, Seed, Peanut & Savory Variants" },
  { n: "2 Formats", l: "Glass Jars (Retail) & PET Containers (D2C)" },
  { n: "Commercial", l: "Commercial Clean-Label Product Line" },
  { n: "In-House", l: "Identity, Dieline Artwork & Listing Imagery" }
]

const GALLERY = [
  {
    id: "mom_bar_front",
    title: "The Mom Bar — Front Packaging",
    desc: "Flow-wrap format featuring serene pastel tones and immediate clean nutrient badging.",
    src: "/images/jusamazin/mom2b/mom_bar_front.png"
  },
  {
    id: "mom_bar_back",
    title: "The Mom Bar — Regulatory Back of Pack",
    desc: "Structured typographic information grid balancing FSSAI compliance with effortless readability.",
    src: "/images/jusamazin/mom2b/mom_bar_back.png"
  },
  {
    id: "almond_seed_butter",
    title: "Mom2B Almond & Seed Butter (200g)",
    desc: "Maternal nutrition jar formulated with nutrient-dense seeds and almonds.",
    src: "/images/jusamazin/mom2b/almond_seed_butter_m2b.png"
  },
  {
    id: "peanut_flax_chutney",
    title: "Mom2B Peanut & Flax Chutney (200g)",
    desc: "Savory functional spread delivering omega-3s with traditional Indian culinary versatility.",
    src: "/images/jusamazin/mom2b/peanut_flax_chutney_m2b.png"
  },
  {
    id: "seed_butter_mix",
    title: "Mom2B High-Protein Seed Butter Mix (200g)",
    desc: "Multi-seed spread engineered for postpartum recovery and maternal energy stability.",
    src: "/images/jusamazin/mom2b/seed_butter_mix_m2b.png"
  },
  {
    id: "spicy_seed_butter",
    title: "Mom2B Spicy Almond & Seed Spread (200g)",
    desc: "Regional savory variant created for mothers seeking authentic flavor profiles without synthetic additives.",
    src: "/images/jusamazin/mom2b/spicy_seed_butter_m2b.png"
  }
]

const PRODUCTION_CRITERIA = [
  {
    n: "Empathetic Visual Tone",
    r: "Front-of-Pack Direction",
    q: "Avoided both sterile medical cues and casual dessert aesthetics, establishing an atmosphere of quiet authority, reassurance, and clean nutrition."
  },
  {
    n: "Dual-Substrate Calibration",
    r: "Packaging Materials",
    q: "Calibrated label opacity and color saturation to maintain chromatic equivalence across clear glass jars and lightweight PET containers."
  },
  {
    n: "Regulatory Grid Rigor",
    r: "Information Design",
    q: "Structured mandatory FSSAI declarations, ingredient breakdowns, and allergen panels into clean tabular sections with effortless readability."
  },
  {
    n: "Digital Asset Integration",
    r: "Collaborative Production",
    q: "Adapted physical pack dielines into high-resolution marketplace product listings (selected 2024 infographics developed in collaboration with Juhi Singh)."
  }
]

const NAV = [
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Lil\'Stars (Kids)', h: '/jusamazin/lilstars' },
  { l: 'Retail POS & Spatial', h: '/jusamazin/retail-pos' },
  { l: 'Snacks & Canisters', h: '/jusamazin/snacks' },
  { l: 'Core Packaging', h: '/jusamazin/core-packaging' },
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Bars', h: '/jusamazin/bars' },
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --m2b-bg:#0A0906;--m2b-white:#F0EDE6;--m2b-violet:#9B5DE5;--m2b-violet-dark:#7209B7;
  --m2b-muted:rgba(240,237,230,0.65);--m2b-border:rgba(240,237,230,0.1);
  --D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth;overflow-x:clip!important;max-width:100vw!important}
body{background:var(--m2b-bg);color:var(--m2b-white);font-family:var(--S);overflow-x:clip!important;max-width:100vw!important}
a{color:inherit;text-decoration:none}

.m2b-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--m2b-border)}
.m2b-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 75% 25%,rgba(155,93,229,0.22),transparent 60%),radial-gradient(ellipse at 25% 75%,rgba(114,9,183,0.12),transparent 55%),var(--m2b-bg);animation:m2bPulse 12s ease-in-out infinite}
@keyframes m2bPulse{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}}
.m2b-hero-inner{position:relative;z-index:2;padding:0 5vw 6rem;width:100%}
.m2b-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4rem,11vw,11.5rem);line-height:0.95;letter-spacing:-0.03em}
.m2b-hero h1 span{color:var(--m2b-violet)}
.m2b-hero h1 em{font-style:normal;color:var(--m2b-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.6;max-width:680px}

.m2b-s{padding:7rem 0;border-bottom:1px solid var(--m2b-border)}
.m2b-c{max-width:1280px;margin:0 auto;padding:0 5vw}
.m2b-label{font-family:var(--M);font-size:.65rem;letter-spacing:.25em;color:var(--m2b-violet);margin-bottom:1.5rem;text-transform:uppercase}
.m2b-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,5.5vw,5.5rem);line-height:1.05;margin-bottom:2rem}
.m2b-title em{font-style:normal;color:var(--m2b-muted);font-family:var(--S);font-weight:300}
.m2b-body{font-size:1.1rem;line-height:1.9;color:var(--m2b-muted);max-width:720px}

.m2b-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:4rem}
.m2b-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--m2b-border);border-radius:28px;padding:3rem;position:relative;overflow:hidden;transition:border-color .3s}
.m2b-pill-card:hover{border-color:rgba(155,93,229,0.4)}
.m2b-pill-num{font-family:var(--D);font-weight:900;font-size:3rem;color:rgba(155,93,229,0.25);margin-bottom:1rem}
.m2b-pill-tag{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--m2b-violet);margin-bottom:.8rem}
.m2b-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.6rem;margin-bottom:1rem;color:var(--m2b-white)}
.m2b-pill-card p{font-size:1rem;line-height:1.8;color:var(--m2b-muted)}

.m2b-metrics-strip{display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:3rem}
.m2b-metric-card{flex:1 1 calc(25% - 1.5rem);min-width:200px;background:rgba(240,237,230,0.02);border:1px solid var(--m2b-border);border-radius:20px;padding:2rem;text-align:center}
.m2b-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2rem,3.8vw,3.2rem);color:var(--m2b-violet);line-height:1}
.m2b-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.16em;color:var(--m2b-muted);margin-top:.8rem;line-height:1.6}

.m2b-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem}
.m2b-item{background:rgba(240,237,230,0.02);border:1px solid var(--m2b-border);border-radius:32px;overflow:hidden;transition:border-color .3s,transform .3s}
.m2b-item:hover{border-color:rgba(155,93,229,0.4);transform:scale(1.015)}
.m2b-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.m2b-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.m2b-item:hover .m2b-img-wrap img{transform:scale(1.05)}
.m2b-info{padding:2rem 2.2rem;display:flex;flex-direction:column;gap:.6rem}
.m2b-item-title{font-family:var(--D);font-weight:900;font-size:1.3rem}
.m2b-item-desc{font-size:.92rem;line-height:1.75;color:var(--m2b-muted)}

.m2b-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--m2b-border)}
.m2b-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(155,93,229,0.1),transparent 65%)}
.m2b-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.m2b-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.m2b-soul-q strong{color:var(--m2b-white);font-weight:500}

.m2b-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.m2b-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--m2b-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.m2b-fb-q{font-size:1.02rem;line-height:1.85;color:var(--m2b-muted);font-style:italic;flex:1}
.m2b-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.m2b-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--m2b-violet);margin-top:.2rem}

.m2b-footer{padding:5rem 0 3rem;border-top:1px solid var(--m2b-border)}
.m2b-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.m2b-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--m2b-muted);transition:color .3s}
.m2b-footer-link:hover{color:var(--m2b-violet)}

.m2bv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.m2bv.vis{opacity:1;transform:translateY(0)}

@media(max-width:1100px){
  .m2b-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:900px){
  .m2b-pillars,.m2b-grid,.m2b-fb-grid{grid-template-columns:1fr}
  .m2b-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .m2b-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function Mom2BPage() {
  return (
    <>
      <Head>
        <title>Mom2B — A Dedicated Product Identity | SIVNCO</title>
        <meta name="description" content="Packaging and product communication for a maternal-nutrition sub-brand by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/mom2b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/work" backLabel="← Work Directory" />

      <div className="m2b-hero">
        <div className="m2b-hero-bg" />
        <div className="m2b-hero-inner">
          <div className="br-label acid mb-3">■ 07 // MOM2B &middot; A DEDICATED PRODUCT IDENTITY</div>
          <h1>
            Mom<span>2B</span>
            <em>
              Packaging and product communication for a maternal-nutrition sub-brand. Developed across almond, seed and peanut spreads, Glass and PET formats.
            </em>
          </h1>
        </div>
      </div>

      <section className="m2b-s">
        <div className="m2b-c">
          <div className="m2b-label m2bv">Strategic Intent</div>
          <div className="m2b-title m2bv">
            Establishing a<br /><em>Separate Identity.</em>
          </div>
          <p className="m2b-body m2bv">
            My Mom2B work developed a dedicated product identity across almond, seed and peanut spreads. The project extended into product-information imagery and packaging presentations for different container formats.
          </p>

          <div className="m2b-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="m2b-pill-card m2bv">
                <div className="m2b-pill-num">{p.num}</div>
                <div className="m2b-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m2b-s">
        <div className="m2b-c">
          <div className="m2b-label m2bv">Scope &amp; Credits</div>
          <div className="m2b-title m2bv">
            Multi-Format<br /><em>Execution Scope.</em>
          </div>
          <div className="m2b-body m2bv" style={{marginBottom:'2.5rem'}}>
            <p><strong>Project Credit:</strong> Art direction and packaging design &mdash; H P Shivaraj. Listing-image credits specified per displayed asset (selected 2024 e-commerce infographics developed in collaboration with Juhi Singh).</p>
            <p style={{marginTop:'0.8rem'}}><strong>Context:</strong> Jus’Amazin &middot; Maternal-nutrition product range.</p>
          </div>

          <div className="m2b-metrics-strip m2bv">
            {METRICS.map((m) => (
              <div key={m.l} className="m2b-metric-card">
                <div className="m2b-metric-n">{m.n}</div>
                <div className="m2b-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m2b-s">
        <div className="m2b-c">
          <div className="m2b-label m2bv">Packaging Range Gallery</div>
          <div className="m2b-title m2bv">
            Physical &amp; Digital<br /><em>Format Presentations.</em>
          </div>
          <p className="m2b-body m2bv">
            The case connects the pack artwork with Glass and PET product presentations, showing how the range was communicated across retail packaging and e-commerce assets.
          </p>

          <div className="m2b-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="m2b-item m2bv">
                <div className="m2b-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="m2b-info">
                  <div className="m2b-item-title">{g.title}</div>
                  <div className="m2b-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="m2b-c">
        <div className="m2b-soul m2bv">
          <div className="m2b-soul-inner">
            <blockquote className="m2b-soul-q">
              &ldquo;Connecting the pack artwork with <strong>Glass and PET product presentations</strong>, communicating the range across <strong>physical packaging and e-commerce assets</strong>.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="m2b-s">
        <div className="m2b-c">
          <div className="m2b-label m2bv">Production Standards</div>
          <div className="m2b-title m2bv">
            Technical &amp;<br /><em>Prepress Rigor.</em>
          </div>
          <div className="m2b-fb-grid">
            {PRODUCTION_CRITERIA.map((crit, i) => (
              <div key={i} className="m2b-fb-card m2bv">
                <div className="m2b-fb-q">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="m2b-fb-n">{crit.n}</div>
                  <div className="m2b-fb-r">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="m2b-c" style={{marginTop:'3rem', marginBottom:'3rem'}}>
        <div className="m2b-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="m2b-label">Category Directories {'>>>'}</div>
          <div className="m2b-footer-links" style={{marginTop:'1rem', marginBottom:'0'}}>
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="m2b-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <Script id="m2b-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.m2bv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.m2bv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.m2bv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
    </>
  )
}

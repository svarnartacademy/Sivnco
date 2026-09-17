import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'

const PILLARS = [
  {
    num: "01",
    h: "Material Splitting",
    t: "DUAL_SUBSTRATE_ENGINEERING",
    b: "Managing design parameters across two completely distinct packaging lines: Glass Jars for high-end premium physical retail (Nature's Basket, Foodhall) and PET Plastic Jars engineered for zero-breakage, lightweight D2C and quick-commerce delivery."
  },
  {
    num: "02",
    h: "Demographic Sub-Brands",
    t: "LILSTARS_AND_MOM2B",
    b: "Integrating specialized sub-brands into the jar architecture: Lil'Stars (kids nut butters with organic jaggery and crunchy cocoa in 200g/325g) and Mom2B (maternal galactagogue spreads including savory Peanut & Flax Chutney)."
  },
  {
    num: "03",
    h: "1KG High-Volume Tubs",
    t: "BULK_FITNESS_ARCHITECTURE",
    b: "Designed the large-format 1KG tub packaging for high-velocity fitness and family consumption (All-Natural Peanut Butter and Almond Butter, Smooth & Crunchy). Maintained brand authority at bulk scale while optimizing label dielines for fast manual floor application."
  },
  {
    num: "04",
    h: "System Font & Data Sync",
    t: "GOVERNANCE_AND_COMPLIANCE",
    b: "Maintained strict typography, regulatory FSSAI layouts, and Pantone matching across both digital asset pipelines and physical press runs, ensuring zero color drifting between glass and plastic production batches."
  }
]

const METRICS = [
  { n: "2 Lines", l: "Dual Substrates (Glass & PET Plastic)" },
  { n: "4 Sizes", l: "55g, 125g, 200g, 325g & 1KG Formats" },
  { n: "100%", l: "Visual Sync Across Shared Production Pipelines" },
  { n: "0%", l: "Breakage Rate in D2C Lightweight Shipping" }
]

const GALLERY = [
  {
    id: "mom2b_jar",
    title: "Mom2B Almond & Seed Butter (200g)",
    desc: "Prenatal functional nutrition jar render engineered with calming earth tones and clean claim hierarchy.",
    src: "/images/jusamazin/mom2b/almond_seed_butter_m2b.png"
  },
  {
    id: "lilstars_jar",
    title: "Lil'Stars PB Crunchy Dark Chocolate (325g)",
    desc: "Kids high-energy spread jar combining clean organic jaggery with real dark cocoa nibs.",
    src: "/images/jusamazin/lilstars/pb_dark_chocolate_jar.png"
  },
  {
    id: "glass_lifestyle",
    title: "Glass Jar Premium Retail Architecture",
    desc: "High-end glass jar presentation capturing optical refraction and premium shelf presence in gourmet retail.",
    src: "/images/jusamazin/jars/glass_lifestyle.jpg"
  },
  {
    id: "mom2b_infographic",
    title: "Nutritional Science Infographic",
    desc: "Comprehensive digital infographic breaking down macronutrients, healthy fats, and galactagogue benefits.",
    src: "/images/jusamazin/jars/mom2b_infographic.jpg"
  }
]

const FEEDBACK = [
  {
    n: "Juhi Singh",
    r: "Visual Design Colleague",
    q: "Splitting the infographic workflows into distinct directory tracks allowed us to optimize the material stories for both the glass and plastic packaging without overlapping files."
  },
  {
    n: "Roshan Kulranjan",
    r: "Logistics & Operations Head",
    q: "The asset segregation matched our physical inventory models perfectly, making platform uploads quick and predictable."
  }
]

const NAV = [
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Lil\'Stars (Kids)', h: '/jusamazin/lilstars' },
  { l: 'Mom2B (Maternal)', h: '/jusamazin/mom2b' },
  { l: 'Retail POS & Spatial', h: '/jusamazin/retail-pos' },
  { l: 'Snacks & Canisters', h: '/jusamazin/snacks' },
  { l: 'Core Packaging', h: '/jusamazin/core-packaging' },
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Bars', h: '/jusamazin/bars' },
  { l: 'Brand Guidelines', h: '/jusamazin/brand-guidelines' },
  { l: 'Marketing', h: '/jusamazin/marketing' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --jr-bg:#0A0906;--jr-white:#F0EDE6;--jr-accent:#C0A060;--jr-silver:#A0AEB8;
  --jr-muted:rgba(240,237,230,0.5);--jr-border:rgba(240,237,230,0.08);
  --jr-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--jr-bg);color:var(--jr-white);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}

.jr-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--jr-border)}
.jr-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 80%,rgba(192,160,96,0.18),transparent 55%),radial-gradient(ellipse at 75% 25%,rgba(160,174,184,0.1),transparent 55%),var(--jr-bg);animation:jrPulse 10s ease-in-out infinite}
@keyframes jrPulse{0%,100%{opacity:.85}50%{opacity:1}}
.jr-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%;max-width:1400px;margin:0 auto}
.jr-hero-tag{font-family:var(--M);font-size:.62rem;letter-spacing:.28em;color:var(--jr-accent);margin-bottom:2rem;display:flex;align-items:center;gap:1rem}
.jr-hero-tag::before{content:'';width:32px;height:1px;background:var(--jr-accent)}
.jr-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,13vw,13rem);line-height:.95;margin-bottom:1.5rem}
.jr-hero h1 span{color:var(--jr-accent)}
.jr-hero h1 em{font-style:normal;color:var(--jr-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.7;max-width:680px}

.jr-c{max-width:1400px;margin:0 auto;padding:0 5vw}
.jr-s{padding:8rem 0;border-bottom:1px solid var(--jr-border)}
.jr-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;color:var(--jr-accent);margin-bottom:1.5rem}
.jr-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}
.jr-title em{font-style:normal;color:var(--jr-muted);font-family:var(--S);font-weight:300}
.jr-body{font-size:1.12rem;line-height:1.95;color:var(--jr-muted);max-width:680px}

.jr-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.jr-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--jr-border);border-radius:32px;padding:3rem 2.5rem;backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.jr-pill-card:hover{transform:translateY(-6px);border-color:rgba(192,160,96,0.45);box-shadow:0 20px 45px rgba(0,0,0,0.5)}
.jr-pill-num{font-family:var(--D);font-size:3rem;line-height:1;opacity:.06;position:absolute;top:1.5rem;right:1.5rem}
.jr-pill-tag{font-family:var(--M);font-size:.48rem;letter-spacing:.2em;opacity:.35;margin-bottom:.8rem;color:var(--jr-accent)}
.jr-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.8rem;margin-bottom:1rem;line-height:1.2}
.jr-pill-card p{font-size:.95rem;line-height:1.85;color:var(--jr-muted)}

.jr-lanes{display:grid;grid-template-columns:1fr 1fr;gap:1.8rem;margin-top:4rem}
.jr-lane{background:rgba(240,237,230,0.025);border:1px solid var(--jr-border);border-radius:28px;padding:3rem;position:relative;overflow:hidden;transition:border-color .4s}
.jr-lane:hover{border-color:rgba(192,160,96,0.4)}
.jr-lane-icon{font-size:2.5rem;margin-bottom:1rem;opacity:.5}
.jr-lane h4{font-family:var(--D);font-weight:900;font-size:1.5rem;margin-bottom:1rem}
.jr-lane p{font-size:.95rem;line-height:1.8;color:var(--jr-muted)}
.jr-lane-badge{font-family:var(--M);font-size:.52rem;color:var(--jr-accent);background:rgba(192,160,96,0.1);padding:.35rem .8rem;border-radius:20px;display:inline-block;margin-top:1.2rem}

.jr-metrics{display:flex;flex-wrap:wrap;gap:1.4rem;margin-top:4rem}
.jr-metric-card{flex:1 1 220px;padding:2.2rem 2.4rem;border:1px solid var(--jr-border);border-radius:9999px;background:rgba(240,237,230,0.03);backdrop-filter:blur(24px);text-align:center;transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s ease, box-shadow .35s ease}
.jr-metric-card:hover{transform:translateY(-6px);border-color:rgba(192,160,96,0.45);box-shadow:0 18px 40px rgba(0,0,0,0.5)}
.jr-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2.2rem,4.5vw,3.8rem);color:var(--jr-accent);line-height:1}
.jr-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--jr-muted);margin-top:.6rem}

.jr-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;margin-top:4rem}
.jr-item{border-radius:28px;overflow:hidden;border:1px solid var(--jr-border);background:rgba(240,237,230,0.02);display:flex;flex-direction:column;transition:border-color .4s, transform .4s}
.jr-item:hover{border-color:rgba(192,160,96,0.4);transform:scale(1.015)}
.jr-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.jr-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.jr-item:hover .jr-img-wrap img{transform:scale(1.05)}
.jr-info{padding:2rem 2.2rem;display:flex;flex-direction:column;gap:.6rem}
.jr-item-title{font-family:var(--D);font-weight:900;font-size:1.4rem}
.jr-item-desc{font-size:.92rem;line-height:1.75;color:var(--jr-muted)}

.jr-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--jr-border)}
.jr-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(192,160,96,0.1),transparent 65%)}
.jr-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.jr-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.jr-soul-q strong{color:var(--jr-white);font-weight:500}

.jr-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.jr-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--jr-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.jr-fb-q{font-size:1.02rem;line-height:1.85;color:var(--jr-muted);font-style:italic;flex:1}
.jr-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.jr-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--jr-accent);margin-top:.2rem}

.jr-footer{padding:5rem 0 3rem;border-top:1px solid var(--jr-border)}
.jr-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.jr-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--jr-muted);transition:color .3s}
.jr-footer-link:hover{color:var(--jr-accent)}

.jrv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.jrv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .jr-pillars,.jr-lanes,.jr-grid,.jr-fb-grid{grid-template-columns:1fr}
  .jr-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .jr-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function Jars() {
  return (
    <>
      <Head>
        <title>Nut Butter Jars &amp; Sub-Brand Spreads — Sivnco</title>
        <meta name="description" content="Dual-material asset pipelines: Glass Jars for gourmet retail, PET Plastic Jars for D2C shipping, and demographic sub-brands by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/jars" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/jusamazin" backLabel="← Jus'Amazin Suite" />

      <div className="jr-hero">
        <div className="jr-hero-bg" />
        <div className="jr-hero-inner">
          <div className="jr-hero-tag">Nut Butter Systems · Dual-Material Pipelines · 55g to 1KG</div>
          <h1>
            Almond &amp;<br />Seed Butter <span>Jars</span>
            <em>
              Managing dual-material asset pipelines: Glass Jars for gourmet physical retail,
              PET Plastic Jars for high-speed D2C fulfillment, and sub-brand expansions.
            </em>
          </h1>
        </div>
      </div>

      <section className="jr-s">
        <div className="jr-c">
          <div className="jr-label jrv">Strategy</div>
          <div className="jr-title jrv">
            Variant<br /><em>Symmetry.</em>
          </div>
          <p className="jr-body jrv">
            A packaging system must adapt fluidly to physical constraints. Designing for glass requires appreciation
            for premium weight, optical refraction, and tactile prestige; designing for plastic demands immediate clarity,
            rugged durability, and transactional optimization.
          </p>

          <div className="jr-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="jr-pill-card jrv">
                <div className="jr-pill-num">{p.num}</div>
                <div className="jr-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jr-s">
        <div className="jr-c">
          <div className="jr-label jrv">Infrastructure</div>
          <div className="jr-title jrv">
            Dual Material<br /><em>Pipeline.</em>
          </div>
          <div className="jr-lanes jrv">
            <div className="jr-lane">
              <div className="jr-lane-icon">🧴</div>
              <h4>Plastic PET Pipeline</h4>
              <p>
                Lighter D2C shipping workflows optimized for fast-commerce and direct home delivery.
                Calibrated against scuffing during transit with high-durability BOPP synthetic labels.
              </p>
              <div className="jr-lane-badge">Fast-Commerce &amp; Courier Optimized</div>
            </div>
            <div className="jr-lane">
              <div className="jr-lane-icon">🫙</div>
              <h4>Glass Jar Pipeline</h4>
              <p>
                Targeted at premium physical retail chains (Nature&apos;s Basket, Foodhall).
                Weight and clarity demand calibrated metallic foil bands and rich color saturation.
              </p>
              <div className="jr-lane-badge">Gourmet Trade &amp; Shelf Optics</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jr-s">
        <div className="jr-c">
          <div className="jr-label jrv">Jar Portfolio</div>
          <div className="jr-title jrv">
            Selected Jar<br /><em>Renders.</em>
          </div>
          <p className="jr-body jrv">
            Renders across core nut butters and demographic sub-brands (Mom2B and Lil&apos;Stars).
          </p>

          <div className="jr-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="jr-item jrv">
                <div className="jr-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="jr-info">
                  <div className="jr-item-title">{g.title}</div>
                  <div className="jr-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="jr-c">
        <div className="jr-soul jrv">
          <div className="jr-soul-inner">
            <div className="jr-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>The Material Truth</div>
            <blockquote className="jr-soul-q">
              &ldquo;A visual system must adapt fluidly to <strong>physical constraints</strong>. Designing for glass requires
              appreciation for premium weight and light refraction; designing for plastic demands
              <strong>immediate clarity, rugged speed</strong>, and transactional optimization.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="jr-s">
        <div className="jr-c">
          <div className="jr-label jrv">Tracking</div>
          <div className="jr-title jrv">
            Pipeline<br /><em>Metrics.</em>
          </div>
          <div className="jr-metrics jrv">
            {METRICS.map((m) => (
              <div key={m.l} className="jr-metric-card">
                <div className="jr-metric-n">{m.n}</div>
                <div className="jr-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jr-s">
        <div className="jr-c">
          <div className="jr-label jrv">Voices</div>
          <div className="jr-title jrv">
            Feedback<br /><em>Matrix.</em>
          </div>
          <div className="jr-fb-grid">
            {FEEDBACK.map((fb, i) => (
              <div key={i} className="jr-fb-card jrv">
                <div className="jr-fb-q">&ldquo;{fb.q}&rdquo;</div>
                <div>
                  <div className="jr-fb-n">{fb.n}</div>
                  <div className="jr-fb-r">{fb.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="jr-c">
        <div className="jr-footer">
          <div className="jr-label">Category Directories {'>>>'}</div>
          <div className="jr-footer-links">
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="jr-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Script id="jr-init" strategy="lazyOnload">{`
        (function(){
          function init(){
            var obs = new IntersectionObserver(function(entries){
              entries.forEach(function(e){
                if(e.isIntersecting){
                  e.target.classList.add('vis');
                  obs.unobserve(e.target);
                }
              });
            },{threshold: 0.05});
            document.querySelectorAll('.jrv').forEach(function(el){ obs.observe(el); });
            setTimeout(function(){
              document.querySelectorAll('.jrv').forEach(function(el){ el.classList.add('vis'); });
            }, 1800);
          }
          if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
          else init();
          (function w(){
            if(typeof Lenis === 'undefined'){ setTimeout(w, 80); return; }
            try {
              var l = new Lenis({duration: 1.2, smooth: true, smoothTouch: false});
              function r(t){ l.raf(t); requestAnimationFrame(r); }
              requestAnimationFrame(r);
            } catch(e){}
          })();
        })();
      `}</Script>
    </>
  )
}

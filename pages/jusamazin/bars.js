import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    h: "Designing Two Connected Views",
    b: "For Mom Bar, I developed the packaging from its initial concept through wrapper and counter-display artwork. The project considered the individual product and the larger retail unit as connected parts of the same identity."
  },
  {
    h: "Carrying Direction Through Production",
    b: "My work included packaging layouts, structural artwork and prepress coordination. I worked with the product and quality teams on supplied product information, then with print partners on the visual and technical artwork."
  },
  {
    h: "From Wrapper to Counter",
    b: "Engineered the retail dispenser carton to house individual flow-wrapped bars, balancing compact shelf footprint with high-contrast front-of-pack retail impact."
  },
  {
    h: "What the Project Demonstrates",
    b: "Original packaging direction carried across two formats, with a clear relationship between the graphic idea and its physical retail presentation. Concept, illustration, and production coordination."
  }
]

const PRODUCTION_CRITERIA = [
  {
    n: "Dieline & Crimp Tolerances",
    r: "Prepress Engineering",
    q: "Calibrated horizontal flow-wrap margins and vertical crimp seal bleed to ensure nutritional information never wraps over thermal seams."
  },
  {
    n: "Carton-to-Pack Continuity",
    r: "Retail Architecture",
    q: "Aligned the visual center-point of the retail dispenser face with the individual bar facing, maintaining chromatic recognition across units."
  },
  {
    n: "Substrate Density",
    r: "Print Production",
    q: "Supervised metallic foil opaque white underprint density to preserve pastel tone saturation under modern trade fluorescent lighting."
  },
  {
    n: "Regulatory Legibility",
    r: "Information Design",
    q: "Structured FSSAI compliance declarations, ingredient percentages, and allergen callouts within micro-typography margins without crowding."
  }
]

const METRICS = [
  { n: "2 Formats", l: "Flow-Wrap Wrapper & Retail Counter Carton" },
  { n: "100%", l: "Production-Ready Dielines & Press Proofing" },
  { n: "Commercial", l: "Retail Modern Trade & E-Commerce Deployment" },
  { n: "In-House", l: "Concept Development, Artwork & Prepress Coordination" }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--br-bg:#0A0906;--br-white:#F0EDE6;--br-accent:#FF3366;--br-muted:rgba(240,237,230,0.65);--br-border:rgba(240,237,230,0.08);--br-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif}
html{scroll-behavior:smooth}body{background:var(--br-bg);color:var(--br-white);font-family:var(--S);overflow-x:hidden}a{color:inherit;text-decoration:none}

.br-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--br-border)}
.br-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 75%,rgba(255,51,102,0.18),transparent 55%),radial-gradient(ellipse at 75% 25%,rgba(255,51,102,0.06),transparent 55%),var(--br-bg);animation:brPulse 10s ease-in-out infinite}
@keyframes brPulse{0%,100%{opacity:.85}50%{opacity:1}}
.br-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.br-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--br-accent);margin-bottom:2rem}
.br-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4rem,12vw,12rem);line-height:1.05;}.br-hero h1 span{color:var(--br-accent)}
.br-hero h1 em{font-style:normal;color:var(--br-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1rem;line-height:1.6;max-width:620px}
.br-c{max-width:1200px;margin:0 auto;padding:0 5vw}.br-s{padding:8rem 0;border-bottom:1px solid var(--br-border)}
.br-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--br-accent);margin-bottom:1.5rem}
.br-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}.br-title em{font-style:normal;color:var(--br-muted);font-family:var(--S);font-weight:300}
.br-body{font-size:1.1rem;line-height:1.9;color:var(--br-muted);max-width:640px}
.br-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--br-border);min-height:80vh}
.br-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--br-bg)}
.br-pill-right{display:flex;flex-direction:column}
.br-pill-card{background:var(--br-bg);padding:4rem;border-bottom:1px solid var(--br-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.br-pill-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(255,51,102,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.br-pill-card:hover::after{opacity:1}
.br-pill-card h3{font-family:var(--D);font-weight:900;font-size:clamp(2rem,4vw,3.5rem);margin-bottom:1.5rem}.br-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--br-muted);max-width:520px}
.br-dash{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
.br-kpi{background:var(--br-glass);border:1px solid var(--br-border);padding:2rem;margin-bottom:1rem;position:relative;overflow:hidden}.br-kpi::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(255,51,102,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.br-kpi:hover::after{opacity:1}.br-kpi p{font-size:.95rem;line-height:1.8;color:var(--br-muted)}
.br-metric-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.br-metric-card{background:var(--br-bg);border:1px solid var(--br-border);padding:2rem;text-align:center;position:relative;overflow:hidden}
.br-metric-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(255,51,102,0.08),transparent 70%)}
.br-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2rem,4vw,3rem);color:var(--br-accent);line-height:1;position:relative}.br-metric-l{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--br-muted);margin-top:.8rem;position:relative;line-height:1.7}
.br-soul{background:rgba(255,51,102,0.02);padding:10rem 0;text-align:center}
.br-soul-q{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--br-muted);max-width:780px;margin:0 auto;font-weight:300}.br-soul-q strong{color:var(--br-white);font-weight:500}
.br-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--br-border)}.br-gal-item{background:var(--br-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-weight:900;font-size:.7rem;letter-spacing:.12em;color:rgba(240,237,230,0.08);transition:background .3s}.br-gal-item:hover{background:rgba(255,51,102,0.06)}
.br-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--br-border);border:1px solid var(--br-border)}.br-fb-card{background:var(--br-bg);padding:2.5rem;display:flex;flex-direction:column;gap:1.2rem;position:relative;overflow:hidden}.br-fb-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(255,51,102,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.br-fb-card:hover::after{opacity:1}
.br-fb-q{font-size:1rem;line-height:1.85;color:var(--br-muted);font-style:italic;flex:1}.br-fb-n{font-family:var(--D);font-weight:900;font-size:1.1rem}.br-fb-r{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--br-accent);margin-top:.15rem}
.br-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--br-border)}.br-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}.br-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.4rem,3vw,2.2rem);color:var(--br-muted);transition:color .3s}.br-footer-link:hover{color:var(--br-accent)}
.br-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:rgba(240,237,230,0.25);padding-top:2rem;border-top:1px solid var(--br-border)}
.brv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}.brv.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){.br-pillars{grid-template-columns:1fr}.br-pill-left{position:relative;height:auto;padding:3rem 2rem}.br-pill-card{padding:3rem 2rem;min-height:auto}.br-dash{grid-template-columns:1fr;gap:2rem}.br-gallery{grid-template-columns:1fr 1fr}.br-fb-grid{grid-template-columns:1fr}.br-footer-meta{flex-direction:column;gap:.8rem}}
@media(max-width:540px){.br-hero h1{font-size:clamp(2.2rem,11vw,4.5rem)}.br-s{padding:4rem 0}.br-soul{padding:5rem 0}.br-gallery{grid-template-columns:1fr}.br-metric-grid{grid-template-columns:1fr}}
`

const NAV = [
  { l: 'Desi Energy Bar', h: '/jusamazin/desi-energy-bar' },
  { l: 'Core Packaging', h: '/jusamazin/core-packaging' },
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Lil\'Stars', h: '/jusamazin/lilstars' },
  { l: 'Mom2B', h: '/jusamazin/mom2b' },
  { l: 'Snacks', h: '/jusamazin/snacks' },
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Retail POS', h: '/jusamazin/retail-pos' }
]

export default function Bars() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/jusamazin/bars" />
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Mom Bar &amp; Snacking Bars — From Wrapper to Counter | SIVNCO</title>
        <meta name="description" content="Mom Bar packaging case study: concept development, wrapper design, retail carton, and production coordination by H P Shivaraj."/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html:CSS}}/>
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
      <Navbar backLink="/work" backLabel="← Work Directory" />

      <div className="br-hero">
        <div className="br-hero-bg"/>
        <div className="br-hero-inner">
          <div className="br-label acid mb-3">■ 06 // MOM BAR &middot; FROM WRAPPER TO COUNTER</div>
          <h1>Mom<br/><span>Bar</span><em>An original packaging project spanning the individual bar wrapper and retail display box. Concept development, art direction, and production coordination.</em></h1>
        </div>
      </div>

      <section className="br-s" style={{padding:0,borderBottom:'none'}}>
        <div className="br-pillars">
          <div className="br-pill-left">
            <div className="br-label brv">Strategy</div>
            <div className="br-title brv">Two Connected<br/><em>Views.</em></div>
            <p className="br-body brv">Designing the single-serve flow wrap and the multi-unit retail counter box as unified parts of one visual identity.</p>
          </div>
          <div className="br-pill-right">
            {PILLARS.map((p,i)=>(
              <div key={i} className="br-pill-card brv">
                <div className="br-label">{`0${i+1}`}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="br-s">
        <div className="br-c">
          <div className="br-label brv">Production Scope</div>
          <div className="br-title brv">Execution &amp;<br/><em>Standards.</em></div>
          <div className="br-dash">
            <div>
              <p className="br-body brv" style={{marginBottom:'2rem'}}>
                Working across the creative and production stages meant verifying how illustration, typography, and color translated onto physical packaging. Layouts, structural artwork, and prepress coordination were developed in direct alignment with product teams and print partners.
              </p>
              <div className="br-kpi brv">
                <p><strong>Project Credit:</strong> Concept development, art direction, wrapper design, retail-carton design and production coordination &mdash; H P Shivaraj.</p>
              </div>
              <div className="br-kpi brv">
                <p><strong>Context:</strong> Jus’Amazin &middot; Commercial packaging project spanning individual bar wrappers and multi-pack dispenser units.</p>
              </div>
            </div>
            <div className="br-metric-grid brv">
              {METRICS.map((m, idx) => (
                <div key={idx} className="br-metric-card">
                  <div className="br-metric-n">{m.n}</div>
                  <div className="br-metric-l">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="br-soul">
        <div className="br-c">
          <div className="br-label brv" style={{textAlign:'center'}}>Design Thesis</div>
          <blockquote className="br-soul-q brv">
            &ldquo;An original packaging direction carried across two formats, establishing a <strong>clear relationship between the graphic idea</strong> and its <strong>physical retail presentation</strong>.&rdquo;
          </blockquote>
        </div>
      </div>

      <section className="br-s" style={{padding:0}}>
        <div className="br-gallery">
          {[
            {id:'mom_bar_hero',alt:'Mom Bar Hero Pack',src:'/images/jusamazin/bars/mom_bar_hero.jpg'},
            {id:'mom_bar_pouch_hand',alt:'Physical MOM Bar Pouch Prototype',src:'/images/jusamazin/bars/mom_bar_pouch_hand.jpg'},
            {id:'shelf_display',alt:'Retail Shelf Display Box',src:'/images/jusamazin/bars/shelf_display.jpg'},
            {id:'store_placement',alt:'Store Placement Vantage Point',src:'/images/jusamazin/bars/store_placement.jpg'},
            {id:'amazon_campaign',alt:'Amazon Digital Listing Assets',src:'/images/jusamazin/bars/amazon_campaign.jpg'},
            {id:'studio_macro',alt:'Studio Macro Detail',src:'/images/jusamazin/bars/studio_macro.jpg'}
          ].map(g=>(
            <div key={g.id} className="br-gal-item brv" style={{position:'relative',overflow:'hidden'}}>
              <img loading="lazy" src={g.src} alt={g.alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
            </div>
          ))}
        </div>
      </section>

      <section className="br-s">
        <div className="br-c">
          <div className="br-label brv">Production &amp; Prepress</div>
          <div className="br-title brv">Technical<br/><em>Standards.</em></div>
          <div className="br-fb-grid">
            {PRODUCTION_CRITERIA.map((crit,i)=>(
              <div key={i} className="br-fb-card brv">
                <div className="br-fb-q">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="br-fb-n">{crit.n}</div>
                  <div className="br-fb-r">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="br-c" style={{marginTop:'3rem', marginBottom:'3rem'}}>
        <div className="br-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="br-label">Case Studies Index {'>>>'}</div>
          <div className="br-footer-links" style={{marginTop:'1rem', marginBottom:'0'}}>
            {NAV.map(n=>(<Link key={n.l} href={n.h} className="br-footer-link">{n.l}</Link>))}
          </div>
        </div>
      </div>

      <Footer />
      <Script id="br-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.brv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.brv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.brv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
    </>
  )
}

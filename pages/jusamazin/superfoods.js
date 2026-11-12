import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    num: "01",
    h: "Designing the Constant and the Variable",
    b: "The universal pouch project combined a common illustrated package with product-specific label overlays. I developed the shared visual direction and the system through which individual products could be identified within it. A common pouch established the visual world; the overlays carried the changing SKU information."
  },
  {
    num: "02",
    h: "Designing for Application",
    b: "Pre-printed corner alignment marks helped guide label placement. These small details connected the graphic system to the practical task of applying labels on the packing floor."
  },
  {
    num: "03",
    h: "A System Carried into Production",
    b: "I worked across the visual concept, artwork, label system and vendor proofs. Operations and packing colleagues contributed to its implementation. The result is a case about design as both visual expression and a repeatable working system."
  },
  {
    num: "04",
    h: "What the Project Demonstrates",
    b: "Design judgement within technical and operational constraints: creating a rich, illustrative brand world while establishing modular production efficiencies for ongoing factory deployment."
  }
]

const SPEC_ROWS = [
  { param: 'Body Font Color', prev: 'Mixed / Low Contrast', target: 'Solid Black for clean shelf legibility' },
  { param: 'Nomenclature Logic', prev: 'Unstructured Casing', target: 'Unified casing: "Flax seed", "dietary fiber", "omega-3"' },
  { param: 'Alignment System', prev: 'Unindexed Manual Placement', target: 'Pre-printed corner alignment marks for packing floor' },
  { param: 'Substrate Strategy', prev: 'Standalone Low-Run Pouches', target: 'Universal illustrated rotogravure base + digital overlays' }
]

const NUTRITION = [
  { label: 'Energy', value: '567.4 Kcal', note: '8.5% RDA per 30g serving' },
  { label: 'Protein', value: '25.9 g', note: 'Clean plant protein' },
  { label: 'Total Carbs', value: '40.0 g', note: 'Complex carbohydrate sources' },
  { label: 'Dietary Fiber', value: '24.1 g', note: 'High natural prebiotic fiber' },
  { label: 'Total Fat', value: '26.1 g', note: 'Saturated: 7.0 g' },
  { label: 'Added Sugar', value: '0.0 g', note: 'Zero refined sugars' }
]

const PRODUCTION_CRITERIA = [
  {
    n: "Corner Alignment Notches",
    r: "Packaging Operations",
    q: "Pre-printed corner alignment marks on the master rotogravure pouch guide fast, repeatable manual label application on the packing floor without visual drift."
  },
  {
    n: "Shared Base vs Variable Overlay",
    r: "Modular Architecture",
    q: "Separating consistent brand world graphics from variable SKU data allows specialty products to share one high-quality illustrated base package."
  },
  {
    n: "Dieline & Seam Tolerances",
    r: "Industrial Prepress",
    q: "Calibrated horizontal and vertical seal bleed tolerances across 500g and 1kg flexible pouch sizes, ensuring text never overlaps thermal welds."
  },
  {
    n: "Regulatory Grid Rigor",
    r: "Typography & Legal",
    q: "Structured FSSAI compliance declarations, allergen callouts, and nutritional panels into clean tabular sections with high-contrast legibility."
  }
]

const METRICS = [
  { n: "1 Common", l: "Master Illustrated Rotogravure Pouch" },
  { n: "Corner Marks", l: "Engineered Alignment Guides for Packing Floor" },
  { n: "Multi-SKU", l: "Flexible Deployment Across Seeds & Snacking" },
  { n: "In-House", l: "Concept Development, System Design & Prepress" }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--sf-bg:#0A0906;--sf-white:#F0EDE6;--sf-accent:#2D6A4F;--sf-light:#52B788;--sf-muted:rgba(240,237,230,0.65);--sf-border:rgba(240,237,230,0.08);--sf-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif}
html{scroll-behavior:smooth}body{background:var(--sf-bg);color:var(--sf-white);font-family:var(--S);overflow-x:hidden}a{color:inherit;text-decoration:none}

.sf-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--sf-border)}
.sf-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 80%,rgba(45,106,79,0.22),transparent 55%),radial-gradient(ellipse at 75% 25%,rgba(82,183,136,0.1),transparent 55%),var(--sf-bg)}
.sf-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.sf-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--sf-light);margin-bottom:2rem}
.sf-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4rem,11vw,11.5rem);line-height:1.02;}.sf-hero h1 span{color:var(--sf-light)}
.sf-hero h1 em{font-style:normal;color:var(--sf-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1rem;line-height:1.6;max-width:680px}
.sf-c{max-width:1200px;margin:0 auto;padding:0 5vw}.sf-s{padding:8rem 0;border-bottom:1px solid var(--sf-border)}
.sf-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--sf-light);margin-bottom:1.5rem}
.sf-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}.sf-title em{font-style:normal;color:var(--sf-muted);font-family:var(--S);font-weight:300}
.sf-body{font-size:1.1rem;line-height:1.9;color:var(--sf-muted);max-width:640px}
.sf-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--sf-border);min-height:80vh}
.sf-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--sf-bg)}
.sf-pill-right{display:flex;flex-direction:column}
.sf-pill-card{background:var(--sf-bg);padding:4rem;border-bottom:1px solid var(--sf-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.sf-pill-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(82,183,136,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.sf-pill-card:hover::after{opacity:1}
.sf-pill-card h3{font-family:var(--D);font-weight:900;font-size:clamp(1.8rem,3.5vw,3rem);margin-bottom:1.5rem}.sf-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--sf-muted);max-width:520px}
.sf-spec-table{width:100%;border-collapse:collapse;margin-top:3rem;border:1px solid var(--sf-border)}
.sf-spec-table th,.sf-spec-table td{padding:1.2rem 1.5rem;text-align:left;border:1px solid var(--sf-border);font-size:.95rem}
.sf-spec-table th{font-family:var(--M);font-size:.55rem;letter-spacing:.18em;color:var(--sf-light);background:rgba(45,106,79,0.1)}
.sf-spec-table td{color:var(--sf-muted)}.sf-spec-table td:last-child{color:var(--sf-white)}
.sf-nutrition{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--sf-border);border:1px solid var(--sf-border);margin-top:3rem}
.sf-nut-cell{background:var(--sf-bg);padding:2rem;text-align:center;position:relative;overflow:hidden}
.sf-nut-cell::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(82,183,136,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.sf-nut-cell:hover::after{opacity:1}
.sf-nut-val{font-family:var(--D);font-weight:900;font-size:clamp(1.8rem,3.5vw,3rem);color:var(--sf-light);line-height:1}.sf-nut-label{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--sf-muted);margin-top:.5rem}.sf-nut-note{font-family:var(--M);font-size:.4rem;color:var(--sf-light);margin-top:.3rem;letter-spacing:.1em}
.sf-soul{background:rgba(45,106,79,0.04);padding:10rem 0;text-align:center}
.sf-soul-q{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--sf-muted);max-width:780px;margin:0 auto;font-weight:300}.sf-soul-q strong{color:var(--sf-white);font-weight:500}
.sf-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--sf-border)}.sf-gal-item{background:var(--sf-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-weight:900;font-size:.7rem;letter-spacing:.12em;color:rgba(240,237,230,0.08);transition:background .3s}.sf-gal-item:hover{background:rgba(82,183,136,0.06)}
.sf-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--sf-border);border:1px solid var(--sf-border);margin-top:3rem}
.sf-fb-card{background:var(--sf-bg);padding:2.5rem;display:flex;flex-direction:column;gap:1.2rem;position:relative;overflow:hidden}.sf-fb-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(82,183,136,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.sf-fb-card:hover::after{opacity:1}
.sf-fb-q{font-size:1rem;line-height:1.85;color:var(--sf-muted);font-style:italic;flex:1}.sf-fb-n{font-family:var(--D);font-weight:900;font-size:1.1rem}.sf-fb-r{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--sf-light);margin-top:.15rem}
.sf-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--sf-border)}.sf-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}.sf-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.4rem,3vw,2.2rem);color:var(--sf-muted);transition:color .3s}.sf-footer-link:hover{color:var(--sf-light)}
.sfv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}.sfv.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){.sf-pillars{grid-template-columns:1fr}.sf-pill-left{position:relative;height:auto;padding:3rem 2rem}.sf-pill-card{padding:3rem 2rem;min-height:auto}.sf-nutrition{grid-template-columns:repeat(2,1fr)}.sf-gallery{grid-template-columns:1fr 1fr}.sf-fb-grid{grid-template-columns:1fr}.sf-spec-table{font-size:.85rem}}
@media(max-width:540px){.sf-hero h1{font-size:clamp(2.2rem,11vw,4.2rem)}.sf-s{padding:4rem 0}.sf-soul{padding:5rem 0}.sf-gallery{grid-template-columns:1fr}.sf-nutrition{grid-template-columns:1fr 1fr}}
`

const NAV = [
  { l: 'Core Packaging', h: '/jusamazin/core-packaging' },
  { l: 'Lil\'Stars', h: '/jusamazin/lilstars' },
  { l: 'Mom2B', h: '/jusamazin/mom2b' },
  { l: 'Bars', h: '/jusamazin/bars' },
  { l: 'Snacks', h: '/jusamazin/snacks' },
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Retail POS', h: '/jusamazin/retail-pos' }
]

export default function Superfoods() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/jusamazin/superfoods" />
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Universal Pouch — One World, Many Products | SIVNCO</title>
        <meta name="description" content="A shared illustrated pouch system with product-specific labels and practical alignment guides by H P Shivaraj."/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html:CSS}}/>
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
      <Navbar backLink="/work" backLabel="← Work Directory" />

      <div className="sf-hero">
        <div className="sf-hero-bg"/>
        <div className="sf-hero-inner">
          <div className="sf-hero-tag">■ 04 // UNIVERSAL POUCH &middot; ONE WORLD, MANY PRODUCTS</div>
          <h1>Universal<br/><span>Pouch</span><em>A shared illustrated pouch system with product-specific labels and practical alignment guides. Concept development, art direction, and packaging-system design.</em></h1>
        </div>
      </div>

      <section className="sf-s" style={{padding:0,borderBottom:'none'}}>
        <div className="sf-pillars">
          <div className="sf-pill-left">
            <div className="sf-label sfv">Strategy</div>
            <div className="sf-title sfv">Constant &amp;<br/><em>Variable.</em></div>
            <p className="sf-body sfv">Separating what remains consistent across the range from what needs to change by product. A common pouch establishes the visual world; overlays carry SKU information.</p>
          </div>
          <div className="sf-pill-right">
            {PILLARS.map((p,i)=>(
              <div key={i} className="sf-pill-card sfv">
                <div className="sf-label">{`0${i+1}`}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sf-s">
        <div className="sf-c">
          <div className="sf-label sfv">System Architecture</div>
          <div className="sf-title sfv">System<br/><em>Specifications.</em></div>
          <div className="sf-body sfv" style={{marginBottom:'2rem'}}>
            <p><strong>Project Credit:</strong> Concept development, art direction, packaging-system design and production coordination &mdash; H P Shivaraj.</p>
            <p style={{marginTop:'0.8rem'}}><strong>Context:</strong> Jus’Amazin &middot; Commercial shared-packaging system.</p>
          </div>
          <table className="sf-spec-table sfv">
            <thead>
              <tr><th>Parameter</th><th>Previous</th><th>Target Standard</th></tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((r,i)=>(
                <tr key={i}>
                  <td>{r.param}</td>
                  <td>{r.prev}</td>
                  <td>{r.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="sf-s">
        <div className="sf-c">
          <div className="sf-label sfv">Information Rigor</div>
          <div className="sf-title sfv">Nutritional<br/><em>Blueprint.</em></div>
          <p className="sf-body sfv" style={{marginBottom:'1rem'}}>Per 100g standard — structured regulatory panel designed for high-density clarity.</p>
          <div className="sf-nutrition sfv">
            {NUTRITION.map((n,i)=>(
              <div key={i} className="sf-nut-cell">
                <div className="sf-nut-val">{n.value}</div>
                <div className="sf-nut-label">{n.label}</div>
                {n.note&&<div className="sf-nut-note">{n.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sf-soul">
        <div className="sf-c">
          <div className="sf-label sfv" style={{textAlign:'center'}}>Design Thesis</div>
          <blockquote className="sf-soul-q sfv">
            &ldquo;In consumer goods packaging, <strong>accuracy is an aesthetic priority</strong>. The result is a case about design as both <strong>visual expression</strong> and a <strong>repeatable working system</strong>.&rdquo;
          </blockquote>
        </div>
      </div>

      <section className="sf-s" style={{padding:0}}>
        <div className="sf-gallery">
          {[
            {id:'pouch_front_500g',alt:'Shared Master Pouch Front 500g',src:'/images/jusamazin/superfoods/pouch_front_500g.jpg'},
            {id:'pouch_front_oats',alt:'Label Overlay Applied with Alignment Marks',src:'/images/jusamazin/superfoods/pouch_front_oats.jpg'},
            {id:'seam_detail',alt:'Dieline Seam Margin & Cylinder Tolerances',src:'/images/jusamazin/superfoods/seam_detail.jpg'},
            {id:'typography_macro',alt:'Back-of-Pack Regulatory Typography',src:'/images/jusamazin/superfoods/typography_macro.jpg'},
            {id:'pouch_front_flax',alt:'Flaxseed SKU Variant Display',src:'/images/jusamazin/superfoods/pouch_front_flax.jpg'},
            {id:'shelf_lineup',alt:'Shelf Lineup Across Specialty Range',src:'/images/jusamazin/superfoods/shelf_lineup.jpg'}
          ].map(g=>(
            <div key={g.id} className="sf-gal-item sfv" style={{position:'relative',overflow:'hidden'}}>
              <img loading="lazy" src={g.src} alt={g.alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
            </div>
          ))}
        </div>
      </section>

      <section className="sf-s">
        <div className="sf-c">
          <div className="sf-label sfv">Production Standards</div>
          <div className="sf-title sfv">Execution<br/><em>Criteria.</em></div>
          <div className="sf-fb-grid">
            {PRODUCTION_CRITERIA.map((crit,i)=>(
              <div key={i} className="sf-fb-card sfv">
                <div className="sf-fb-q">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="sf-fb-n">{crit.n}</div>
                  <div className="sf-fb-r">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sf-c" style={{marginTop:'3rem', marginBottom:'3rem'}}>
        <div className="sf-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="sf-label">System Directories {'>>>'}</div>
          <div className="sf-footer-links" style={{marginTop:'1rem', marginBottom:'0'}}>
            {NAV.map(n=>(<Link key={n.l} href={n.h} className="sf-footer-link">{n.l}</Link>))}
          </div>
        </div>
      </div>

      <Footer />
      <Script id="sf-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.sfv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.sfv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.sfv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
    </>
  )
}

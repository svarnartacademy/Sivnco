import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import ComparisonSlider from '../../components/ui/ComparisonSlider'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    num: "01",
    h: "Working with What Already Existed",
    b: "This project began with an existing product range and inherited design files. I rebuilt and standardised artwork across multiple variants and sizes, working within the brand’s established product communication."
  },
  {
    num: "02",
    h: "Bringing Consistency to the Range",
    b: "My work addressed the relationship between visual areas, colour, typography and product information. It extended across container sizes and Glass/PET presentations, with print-ready masters maintained for ongoing production."
  },
  {
    num: "03",
    h: "40/60 Proportional Architecture",
    b: "Restructured the front-of-pack layout into a disciplined 40/60 proportion: 40% visual identity and chromatic variant markers, 60% structured product information, allergen callouts, and clean-nutrition seals."
  },
  {
    num: "04",
    h: "What the Project Demonstrates",
    b: "Design judgement within an established brand: deciding what to retain, what to standardise and how to carry a coherent system across a large family. Redesign, artwork development, and production coordination."
  }
]

const PRODUCTION_CRITERIA = [
  {
    n: "40/60 Layout Geometry",
    r: "Grid Architecture",
    q: "Rebuilt label geometry with a disciplined 40/60 proportion between brand visual identity and mandatory regulatory/nutritional information."
  },
  {
    n: "Dual-Substrate Parity",
    r: "Material Strategy",
    q: "Standardized artwork layouts across cylindrical glass jars (modern trade distribution) and wide-mouth PET tubs (quick commerce and D2C)."
  },
  {
    n: "Color-Coded Variant Logic",
    r: "Visual Direction",
    q: "Established clear hue separations across almonds, peanuts, cashews, and seeds, enabling immediate shopper navigation on crowded shelves."
  },
  {
    n: "Vector Master Maintenance",
    r: "Prepress Ops",
    q: "Consolidated fragmented inherited files into verified, print-ready Illustrator vector masters with standardized dielines and color separations."
  }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--cp-bg:#0A0906;--cp-white:#F0EDE6;--cp-accent:#0066FF;--cp-muted:rgba(240,237,230,0.65);--cp-border:rgba(240,237,230,0.08);--cp-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif}
html{scroll-behavior:smooth}body{background:var(--cp-bg);color:var(--cp-white);font-family:var(--S);overflow-x:hidden}a{color:inherit;text-decoration:none}

.cp-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--cp-border)}
.cp-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 75%,rgba(0,102,255,0.18),transparent 55%),radial-gradient(ellipse at 80% 20%,rgba(160,160,160,0.08),transparent 55%),var(--cp-bg);animation:cpShift 10s ease-in-out infinite}
@keyframes cpShift{0%,100%{opacity:.85}50%{opacity:1}}
.cp-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.cp-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--cp-accent);margin-bottom:2rem}
.cp-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,13vw,13rem);line-height:1.05;}.cp-hero h1 span{color:var(--cp-accent)}
.cp-hero h1 em{font-style:normal;color:var(--cp-muted);font-family:var(--S);font-weight:300;display:block;font-size:.35em;margin-top:1rem;line-height:1.6;max-width:640px}
.cp-c{max-width:1200px;margin:0 auto;padding:0 5vw}.cp-s{padding:8rem 0;border-bottom:1px solid var(--cp-border)}
.cp-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--cp-accent);margin-bottom:1.5rem}
.cp-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}.cp-title em{font-style:normal;color:var(--cp-muted);font-family:var(--S);font-weight:300}
.cp-body{font-size:1.1rem;line-height:1.9;color:var(--cp-muted);max-width:640px}
.cp-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--cp-border);min-height:80vh}
.cp-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--cp-bg)}
.cp-pill-right{display:flex;flex-direction:column}
.cp-pill-card{background:var(--cp-bg);padding:4rem;border-bottom:1px solid var(--cp-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.cp-pill-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.cp-pill-card:hover::after{opacity:1}
.cp-pill-card h3{font-family:var(--D);font-weight:900;font-size:clamp(2rem,4vw,3.5rem);margin-bottom:1.5rem}.cp-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--cp-muted);max-width:520px}
.cp-ba{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--cp-border);border:1px solid var(--cp-border);margin-top:3rem}
.cp-ba-side{background:var(--cp-bg);padding:3rem;position:relative;overflow:hidden}.cp-ba-side.after{background:rgba(0,102,255,0.03)}
.cp-ba-side::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.cp-ba-side:hover::after{opacity:1}
.cp-ba-tag{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;padding:.35rem 1rem;border:1px solid var(--cp-border);display:inline-block;border-radius:20px;margin-bottom:1.5rem}
.cp-ba-side.after .cp-ba-tag{border-color:var(--cp-accent);color:var(--cp-accent)}
.cp-ba-text{font-size:1.05rem;line-height:1.85;color:var(--cp-muted)}
.cp-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--cp-border);margin-top:3rem}
.cp-metric{background:var(--cp-bg);padding:3rem 2rem;text-align:center;position:relative;overflow:hidden}.cp-metric::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.1),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.cp-metric:hover::after{opacity:1}
.cp-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,5vw,4.5rem);color:var(--cp-accent);line-height:1}.cp-metric-l{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--cp-muted);margin-top:.6rem}
.cp-soul{background:rgba(0,102,255,0.02);padding:10rem 0;text-align:center}
.cp-soul-q{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--cp-muted);max-width:780px;margin:0 auto;font-weight:300}.cp-soul-q strong{color:var(--cp-white);font-weight:500}
.cp-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--cp-border)}
.cp-gal-item{background:var(--cp-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-weight:900;font-size:.7rem;letter-spacing:.12em;color:rgba(240,237,230,0.08);transition:background .3s}.cp-gal-item:hover{background:rgba(0,102,255,0.06)}
.cp-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--cp-border);border:1px solid var(--cp-border)}
.cp-fb-card{background:var(--cp-bg);padding:2.5rem;display:flex;flex-direction:column;gap:1.2rem;position:relative;overflow:hidden}
.cp-fb-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.cp-fb-card:hover::after{opacity:1}
.cp-fb-q{font-size:1rem;line-height:1.85;color:var(--cp-muted);font-style:italic;flex:1}
.cp-fb-n{font-family:var(--D);font-weight:900;font-size:1.1rem}.cp-fb-r{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--cp-accent);margin-top:.15rem}
.cp-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--cp-border)}
.cp-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}.cp-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.4rem,3vw,2.2rem);color:var(--cp-muted);transition:color .3s}.cp-footer-link:hover{color:var(--cp-accent)}
.cp-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:rgba(240,237,230,0.25);padding-top:2rem;border-top:1px solid var(--cp-border)}
.cpv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}.cpv.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){.cp-pillars{grid-template-columns:1fr}.cp-pill-left{position:relative;height:auto;padding:3rem 2rem}.cp-pill-card{padding:3rem 2rem;min-height:auto}.cp-ba{grid-template-columns:1fr}.cp-metrics{grid-template-columns:repeat(2,1fr)}.cp-gallery{grid-template-columns:1fr 1fr}.cp-fb-grid{grid-template-columns:1fr}.cp-footer-meta{flex-direction:column;gap:.8rem}}
@media(max-width:540px){.cp-hero h1{font-size:clamp(2.2rem,11vw,4.2rem)}.cp-s{padding:4rem 0}.cp-soul{padding:5rem 0}.cp-gallery{grid-template-columns:1fr}}
`

const NAV = [
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Lil\'Stars', h: '/jusamazin/lilstars' },
  { l: 'Mom2B', h: '/jusamazin/mom2b' },
  { l: 'Bars', h: '/jusamazin/bars' },
  { l: 'Snacks', h: '/jusamazin/snacks' },
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Retail POS', h: '/jusamazin/retail-pos' }
]

export default function CorePackaging() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/jusamazin/core-packaging" />
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Core Jars — Bringing a Range Together | SIVNCO</title>
        <meta name="description" content="A redesign and standardisation project across an existing nut-butter packaging range by H P Shivaraj."/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html:CSS}}/>
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
      <Navbar backLink="/work" backLabel="← Work Directory" />

      <div className="cp-hero">
        <div className="cp-hero-bg"/>
        <div className="cp-hero-inner">
          <div className="br-label acid mb-3">■ 09 // CORE JARS &middot; BRINGING A RANGE TOGETHER</div>
          <h1>Core<br/><span>Jars</span><br/>Range<em>A redesign and standardisation project across an existing nut-butter packaging range. Standardising 38+ jar variants under one coherent visual architecture.</em></h1>
        </div>
      </div>

      <section className="cp-s" style={{padding:0,borderBottom:'none'}}>
        <div className="cp-pillars">
          <div className="cp-pill-left">
            <div className="cp-label cpv">Strategy</div>
            <div className="cp-title cpv">System<br/><em>Architecture.</em></div>
            <p className="cp-body cpv">The strategic framework behind standardising an inherited range into a consistent, recognizable retail presence.</p>
          </div>
          <div className="cp-pill-right">
            {PILLARS.map((p,i)=>(
              <div key={i} className="cp-pill-card cpv">
                <div className="cp-label">{`0${i+1}`}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-s">
        <div className="cp-c">
          <div className="cp-label cpv">Transformation</div>
          <div className="cp-title cpv">Before<br/><em>and after.</em></div>
          <div className="cpv" style={{marginBottom:'2.5rem'}}>
            <ComparisonSlider beforeImage="/images/before/before_jar.jpg" afterImage="/images/jusamazin/bars/amazon_campaign.jpg" beforeLabel="BEFORE: UNLINKED LABELS (AUG 2023)" afterLabel="AFTER: UNIFIED PACKAGING ARCHITECTURE" aspectRatio="16/9" />
          </div>
          <div className="cp-ba cpv">
            <div className="cp-ba-side">
              <div className="cp-ba-tag">Before — Inherited Files (Aug 2023)</div>
              <p className="cp-ba-text">No unified system. Inconsistent label layouts between SKUs, uneven font hierarchies, and missing production dieline standards.</p>
            </div>
            <div className="cp-ba-side after">
              <div className="cp-ba-tag">After — Redesign &amp; Standardisation</div>
              <p className="cp-ba-text">Standardised across 38+ core jar variants in Glass and PET. Programmatic color logic, 40/60 layout split, and print-ready masters maintained for ongoing factory runs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cp-s">
        <div className="cp-c">
          <div className="cp-label cpv">Scope &amp; Credits</div>
          <div className="cp-title cpv">Project<br/><em>Context.</em></div>
          <div className="cp-body cpv" style={{marginBottom:'2.5rem'}}>
            <p><strong>Project Credit:</strong> Packaging-system redesign, artwork development and production coordination &mdash; H P Shivaraj. Original brand and inherited artwork pre-date this phase.</p>
            <p style={{marginTop:'0.8rem'}}><strong>Context:</strong> Jus’Amazin &middot; Existing-range redesign and adaptation across 38+ core jar variants.</p>
          </div>
          <div className="cp-metrics cpv">
            <div className="cp-metric"><div className="cp-metric-n">38+</div><div className="cp-metric-l">Core Jar Variants Restructured</div></div>
            <div className="cp-metric"><div className="cp-metric-n">40/60</div><div className="cp-metric-l">Layout Proportion (Visual vs Info)</div></div>
            <div className="cp-metric"><div className="cp-metric-n">Dual</div><div className="cp-metric-l">Glass &amp; PET Substrate Standards</div></div>
            <div className="cp-metric"><div className="cp-metric-n">In-House</div><div className="cp-metric-l">Vector Masters &amp; Prepress Alignment</div></div>
          </div>
        </div>
      </section>

      <div className="cp-soul">
        <div className="cp-c">
          <div className="cp-label cpv" style={{textAlign:'center'}}>Design Thesis</div>
          <blockquote className="cp-soul-q cpv">
            &ldquo;Design judgement within an established brand: <strong>deciding what to retain</strong>, <strong>what to standardise</strong>, and how to carry a coherent system across a large family.&rdquo;
          </blockquote>
        </div>
      </div>

      <section className="cp-s" style={{padding:0}}>
        <div className="cp-gallery">
          {[
            {id:'hero_lineup',alt:'Core Jars Hero Lineup',src:'/images/jusamazin/core/hero_lineup.jpg'},
            {id:'shelf_array',alt:'Supermarket Shelf Alignment',src:'/images/jusamazin/core/shelf_array.jpg'},
            {id:'variant_matrix',alt:'Variant Color Logic Matrix',src:'/images/jusamazin/core/variant_matrix.jpg'},
            {id:'label_detail',alt:'Typography & Regulatory Detail',src:'/images/jusamazin/core/label_detail.jpg'},
            {id:'lifestyle',alt:'Commercial Catalog Photography',src:'/images/jusamazin/core/lifestyle.jpg'},
            {id:'glass_front',alt:'Glass Front Label Substrate Contrast',src:'/images/jusamazin/jars/glass_front.jpg'}
          ].map(g=>(
            <div key={g.id} className="cp-gal-item cpv" style={{position:'relative',overflow:'hidden'}}>
              <img loading="lazy" src={g.src} alt={g.alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
            </div>
          ))}
        </div>
      </section>

      <section className="cp-s">
        <div className="cp-c">
          <div className="cp-label cpv">Production Standards</div>
          <div className="cp-title cpv">System<br/><em>Criteria.</em></div>
          <div className="cp-fb-grid">
            {PRODUCTION_CRITERIA.map((crit,i)=>(
              <div key={i} className="cp-fb-card cpv">
                <div className="cp-fb-q">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="cp-fb-n">{crit.n}</div>
                  <div className="cp-fb-r">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cp-c" style={{marginTop:'3rem', marginBottom:'3rem'}}>
        <div className="cp-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="cp-label">Explore Systems {'>>>'}</div>
          <div className="cp-footer-links" style={{marginTop:'1rem', marginBottom:'0'}}>
            {NAV.map(n=>(<Link key={n.l} href={n.h} className="cp-footer-link">{n.l}</Link>))}
          </div>
        </div>
      </div>

      <Footer />
      <Script id="cp-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.cpv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.cpv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.cpv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
    </>
  )
}

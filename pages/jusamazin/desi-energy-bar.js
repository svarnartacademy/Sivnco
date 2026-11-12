import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    h: "A Familiar Snack, Different Energy",
    b: "For Desi Energy Bar, I developed a visual direction that brought Indian childhood references into contemporary snack packaging. The work connected a bold blue field with hand-drawn characters and familiar street-play imagery, giving the product a recognisable personality across its wrapper and counter display."
  },
  {
    h: "Finding the Direction",
    b: "The project included a 25-store Bengaluru retail observation study and exploration of alternative packaging directions. The selected approach, Structured Chaos, combined expressive illustration with a more ordered information hierarchy. The character and colour carried the personality; the layout kept the product information legible."
  },
  {
    h: "Taking Idea onto the Pack",
    b: "I developed the wrapper and retail dispenser artwork, then carried the design through dieline preparation, colour proofing and vendor prepress review. Working on both the creative and production stages meant checking how illustration, type and colour translated onto the physical packaging."
  },
  {
    h: "What It Demonstrates",
    b: "An original visual idea carried through research, illustration, packaging and commercial production. My contribution was the creative and design work and its production coordination. Product formulation, commercial approvals, distribution and sales involved the wider team."
  }
]

const KPIS = [
  "25-Store Retail Observation Study — Field study across Bengaluru snack aisles informing the high-contrast chromatic direction.",
  "Structured Chaos Approach — Expressive hand-drawn gully cricket illustration anchored by a disciplined legal information grid.",
  "Commercial Production Coordination — Dieline preparation, spot-color press proofing, and commercial rotogravure vendor reviews."
]

const PRODUCTION_CRITERIA = [
  {
    n: "Substrate Chromatic Density",
    r: "Prepress Calibration",
    q: "The electric cyan field was proofed across metallic foil and matte laminates to prevent chromatic desaturation under supermarket lighting.",
    c: "production"
  },
  {
    n: "Information Hierarchy",
    r: "Packaging Typography",
    q: "Character illustration was balanced with an uncompromising legal grid, ensuring FSSAI declarations and allergen warnings remained crisp.",
    c: "design"
  },
  {
    n: "Wrapper & Dispenser Unity",
    r: "Retail Architecture",
    q: "The single-serve bar wrapper and the multi-unit counter dispenser box were designed to reinforce each other when stacked on physical shelves.",
    c: "structure"
  },
  {
    n: "Character Vector Detailing",
    r: "Visual Illustration",
    q: "Hand-drawn gully cricket, cycle, and street-play figures were vectorized directly from sketchbook explorations with minimal geometric abstraction.",
    c: "design"
  }
]

const NAV_LINKS = [
  { l: 'Bars', h: '/jusamazin/bars' },
  { l: 'Jars', h: '/jusamazin/jars' },
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Snacks', h: '/jusamazin/snacks' },
  { l: 'Marketing', h: '/jusamazin/marketing' },
  { l: 'Management', h: '/jusamazin/management' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --deb-bg:#0A0906;--deb-white:#F0EDE6;--deb-accent:#0066FF;--deb-ochre:#D4960A;
  --deb-muted:rgba(240,237,230,0.65);--deb-border:rgba(240,237,230,0.1);
  --deb-glass:rgba(240,237,230,0.04);--deb-charcoal:#12100C;
  --D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth; overflow-x: clip !important; max-width: 100vw !important;}
body{background:var(--deb-bg);color:var(--deb-white);font-family:var(--S);overflow-x:clip !important; max-width: 100vw !important;}
a{color:inherit;text-decoration:none}

/* HERO */
.deb-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--deb-border)}
.deb-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 20% 80%,rgba(0,102,255,0.2),transparent 55%),radial-gradient(ellipse at 80% 20%,rgba(212,150,10,0.12),transparent 55%),var(--deb-bg);animation:heroShift 10s ease-in-out infinite}
@keyframes heroShift{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.03)}}
.deb-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%;display:grid;grid-template-columns:auto 1fr;gap:3rem;align-items:end}
.deb-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--deb-accent);writing-mode:vertical-rl;text-orientation:mixed;padding-bottom:1rem;border-left:2px solid var(--deb-accent);padding-left:.8rem}
.deb-hero-text h1{font-family:var(--D);font-weight:900;font-size:clamp(5rem,14vw,14rem);line-height:1.05;letter-spacing:-.02em}
.deb-hero-text h1 span{color:var(--deb-accent)}
.deb-hero-text h1 em{font-style:normal;color:var(--deb-ochre);font-family:var(--S);font-weight:300;display:block;font-size:.45em;margin-top:.5rem}

/* SECTIONS */
.deb-section{padding:8rem 0;border-bottom:1px solid var(--deb-border)}
.deb-c{max-width:1200px;margin:0 auto;padding:0 5vw}
.deb-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--deb-accent);margin-bottom:1.5rem}
.deb-title{font-family:var(--D);font-weight:900;font-size:clamp(3rem,6vw,7rem);line-height:1.05;margin-bottom:2.5rem}
.deb-title em{font-style:normal;color:var(--deb-muted);font-family:var(--S);font-weight:300}
.deb-body{font-size:1.1rem;line-height:1.9;color:var(--deb-muted);max-width:640px}

/* PILLARS */
.deb-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--deb-border);min-height:100vh}
.deb-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--deb-bg)}
.deb-pill-right{display:flex;flex-direction:column}
.deb-pill-card{background:var(--deb-bg);padding:4rem;border-bottom:1px solid var(--deb-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center}
.deb-pill-card h3{font-family:var(--D);font-weight:900;font-size:clamp(2rem,4vw,3.5rem);margin-bottom:1.5rem;color:var(--deb-white)}
.deb-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--deb-muted);max-width:520px}
.deb-pill-num{font-family:var(--D);font-weight:900;font-size:clamp(8rem,15vw,16rem);color:rgba(0,102,255,0.08);line-height:1;position:absolute;right:2rem;bottom:2rem}

/* CAROUSEL */
.deb-runway{background:var(--deb-charcoal);border:1px solid var(--deb-border);padding:3rem 0;position:relative;overflow:hidden;background-image:linear-gradient(rgba(0,102,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.04) 1px,transparent 1px);background-size:40px 40px}
.deb-runway-scroll{display:flex;gap:1.5rem;overflow-x:auto;padding:2rem 5vw;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.deb-runway-scroll::-webkit-scrollbar{display:none}
.deb-runway-card{flex-shrink:0;width:320px;height:240px;background:var(--deb-glass);border:1px solid var(--deb-border);border-radius:4px;display:flex;align-items:center;justify-content:center;font-family:var(--M);font-size:.6rem;letter-spacing:.15em;color:var(--deb-muted);scroll-snap-align:start;transition:border-color .3s}
.deb-runway-card:hover{border-color:var(--deb-accent)}

/* SOUL BLOCK */
.deb-soul{background:var(--deb-charcoal);padding:10rem 0;text-align:center}
.deb-soul-quote{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.8rem);line-height:2;color:var(--deb-muted);max-width:800px;margin:0 auto;font-weight:300}
.deb-soul-quote strong{color:var(--deb-white);font-weight:500}

/* DASHBOARD */
.deb-dash{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
.deb-kpi{background:var(--deb-glass);border:1px solid var(--deb-border);padding:2rem;margin-bottom:1rem;transition:border-color .3s}
.deb-kpi:hover{border-color:var(--deb-accent)}
.deb-kpi p{font-size:.95rem;line-height:1.8;color:var(--deb-muted)}
.deb-metric-card{background:var(--deb-bg);border:2px solid var(--deb-accent);padding:2.5rem;text-align:center;position:relative;overflow:hidden}
.deb-metric-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.1),transparent 70%)}
.deb-metric-num{font-family:var(--D);font-weight:900;font-size:clamp(3.5rem,7vw,6rem);color:var(--deb-accent);line-height:1;position:relative}
.deb-metric-label{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--deb-muted);margin-top:1rem;position:relative;line-height:1.7}

/* GALLERY */
.deb-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--deb-border)}
.deb-gal-item{background:var(--deb-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-weight:900;font-size:.7rem;letter-spacing:.12em;color:rgba(250,250,250,0.08);transition:background .3s}
.deb-gal-item:nth-child(2){aspect-ratio:3/4}
.deb-gal-item:nth-child(5){aspect-ratio:3/4}
.deb-gal-item:hover{background:rgba(0,102,255,0.06)}

/* STANDARDS */
.deb-filters{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:2.5rem}
.deb-pill{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;padding:.5rem 1.25rem;border:none;border-radius:40px;cursor:pointer;transition:all .3s cubic-bezier(0.16,1,0.3,1);background:rgba(255,255,255,0.04);box-shadow:0 2px 8px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.06);color:var(--deb-white)}
.deb-pill:hover{background:rgba(0,102,255,0.12);box-shadow:0 0 14px rgba(0,102,255,0.3);color:#FFF}
.deb-pill.active{background:radial-gradient(circle at 50% 50%,rgba(0,102,255,0.4) 0%,rgba(0,102,255,0.15) 100%);border:none;color:#FFF;box-shadow:0 0 22px 3px rgba(0,102,255,0.55),inset 0 1px 0 rgba(255,255,255,0.3)}
.deb-pill:active{transform:scale(0.96)}
.deb-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--deb-border);border:1px solid var(--deb-border)}
.deb-fb-card{background:var(--deb-bg);padding:2.5rem;display:flex;flex-direction:column;gap:1.2rem;transition:.3s}
.deb-fb-card.hidden{display:none}
.deb-fb-card:hover{background:rgba(0,102,255,0.03)}
.deb-fb-quote{font-family:var(--S);font-size:1rem;line-height:1.85;color:var(--deb-muted);font-style:italic;flex:1}
.deb-fb-name{font-family:var(--D);font-weight:900;font-size:1.1rem;color:var(--deb-white)}
.deb-fb-role{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--deb-accent);margin-top:.15rem}

/* FOOTER */
.deb-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--deb-border)}
.deb-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}
.deb-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.5rem,3vw,2.5rem);color:var(--deb-muted);transition:color .3s;letter-spacing:.03em}
.deb-footer-link:hover{color:var(--deb-accent)}

/* ANIMATION CLASS */
.drv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(0.16,1,0.3,1),transform .8s cubic-bezier(0.16,1,0.3,1)}
.drv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .deb-hero-inner{grid-template-columns:1fr;gap:1.5rem}
  .deb-hero-tag{writing-mode:horizontal-tb;border-left:none;border-bottom:2px solid var(--deb-accent);padding-left:0;padding-bottom:.4rem}
  .deb-pillars{grid-template-columns:1fr}
  .deb-pill-left{position:relative;height:auto;padding:3rem 2rem}
  .deb-pill-card{padding:3rem 2rem;min-height:auto}
  .deb-dash{grid-template-columns:1fr;gap:2rem}
  .deb-gallery{grid-template-columns:1fr 1fr}
  .deb-fb-grid{grid-template-columns:1fr}
}
@media(max-width:540px){
  .deb-hero-text h1{font-size:clamp(2.5rem,13vw,5rem)}
  .deb-section{padding:5rem 0}
  .deb-soul{padding:6rem 0}
  .deb-gallery{grid-template-columns:1fr}
}
`

export default function DesiEnergyBar() {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/jusamazin/desi-energy-bar" />
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Desi Energy Bar — Structured Chaos | SIVNCO</title>
        <meta name="description" content="A character-led identity for a traditional snack, developed across illustration, wrapper design and retail packaging by H P Shivaraj."/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html:CSS}}/>
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
      <Navbar backLink="/work" backLabel="← Work Directory" />

      {/* HERO */}
      <div className="deb-hero">
        <div className="deb-hero-bg"/>
        <div className="deb-hero-inner">
          <div className="deb-hero-tag">■ 01 // DESI ENERGY BAR &middot; STRUCTURED CHAOS</div>
          <div className="deb-hero-text">
            <h1>Desi Energy<br/><span>Bar</span><em>A familiar snack with a different visual energy. Character-led identity across illustration, wrapper design, and retail dispenser packaging.</em></h1>
          </div>
        </div>
      </div>

      {/* S1: PILLARS */}
      <section className="deb-section" style={{padding:0,borderBottom:'none'}}>
        <div className="deb-pillars">
          <div className="deb-pill-left">
            <div className="deb-label drv">Project Framework</div>
            <div className="deb-title drv">Structured<br/><em>Chaos.</em></div>
            <p className="deb-body drv">Connecting a bold blue field with hand-drawn characters and familiar street-play imagery, giving the product a recognisable personality across wrapper and counter display.</p>
          </div>
          <div className="deb-pill-right">
            {PILLARS.map((p,i)=>(
              <div key={i} className="deb-pill-card drv" style={{position:'relative',overflow:'hidden'}}>
                <div className="deb-label">0{i+1}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
                <div className="deb-pill-num">0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S2: RUNWAY CAROUSEL */}
      <section className="deb-runway">
        <div className="deb-c" style={{marginBottom:'1rem'}}>
          <div className="deb-label drv" style={{color:'var(--deb-ochre)'}}>Design Process &amp; Progression</div>
        </div>
        <div className="deb-runway-scroll">
          {[
            {id:'step1',text:'1. Bengaluru Retail Study (25 Stores)',src:'/images/jusamazin/desi_bar/runway_handdrawn.jpg'},
            {id:'step2',text:'2. Street Game Sketches (Gully Cricket)',src:'/images/jusamazin/desi_bar/runway_vector.jpg'},
            {id:'step3',text:'3. Structured Chaos Vector Geometry',src:'/images/jusamazin/desi_bar/pantone_proofing.jpg'},
            {id:'step4',text:'4. Press Calibration & Proofing',src:'/images/jusamazin/desi_bar/pack_array.jpg'},
            {id:'step5',text:'5. Finished Commercial Wrapper Pack',src:'/images/jusamazin/desi_bar/runway_final.jpg'},
          ].map((item)=>(
            <div key={item.id} className="deb-runway-card" style={{position:'relative',overflow:'hidden'}}>
              <img loading="lazy" src={item.src} alt={item.text} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'0.8rem',background:'rgba(10,9,6,0.85)',fontFamily:'var(--M)',fontSize:'0.55rem',letterSpacing:'0.1em',color:'var(--deb-white)'}}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* S4: EDITORIAL SOUL */}
      <div className="deb-soul">
        <div className="deb-c">
          <div className="deb-label drv" style={{textAlign:'center'}}>Design Thesis</div>
          <blockquote className="deb-soul-quote drv">
            &ldquo;An original visual idea carried through <strong>research</strong>, <strong>illustration</strong>, <strong>packaging</strong> and <strong>commercial production</strong>. Character and colour carry the personality; layout keeps the product information legible.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* S5: PERFORMANCE DASHBOARD */}
      <section className="deb-section">
        <div className="deb-c">
          <div className="deb-label drv">Project Scope</div>
          <div className="deb-title drv">Execution &amp;<br/><em>Context.</em></div>
          <div className="deb-dash">
            <div>
              <p className="deb-body drv" style={{marginBottom:'2rem'}}>
                <strong>Project Credit:</strong> Concept development, art direction, illustration, packaging design and production coordination &mdash; H P Shivaraj.
                <br/><br/>
                <strong>Context:</strong> Jus’Amazin &middot; Commercial packaging project &middot; Development and production across 2024&ndash;2026.
              </p>
              {KPIS.map((k,i)=>(
                <div key={i} className="deb-kpi drv"><p>{k}</p></div>
              ))}
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
              <div className="deb-metric-card drv">
                <div className="deb-metric-num">25</div>
                <div className="deb-metric-label">Stores audited across Bengaluru retail observation study to map shelf visibility</div>
              </div>
              <div className="deb-metric-card drv">
                <div className="deb-metric-num">2 Formats</div>
                <div className="deb-metric-label">Commercial production across single bar wrappers and retail dispenser boxes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S6: GALLERY */}
      <section className="deb-section" style={{padding:0}}>
        <div className="deb-gallery">
          {[
            {id:'studio_render_a',alt:'Studio Render A',src:'/images/jusamazin/desi_bar/studio_render_a.jpg'},
            {id:'retail_shelf',alt:'Supermarket Retail Shelf Placement',src:'/images/jusamazin/process/draft_packaging_02.jpg'},
            {id:'close_up_texture',alt:'Close-up Texture',src:'/images/jusamazin/desi_bar/close_up_texture.jpg'},
            {id:'lifestyle_shot',alt:'Real-World Lifestyle Stall',src:'/images/jusamazin/desi_bar/lifestyle_market.jpg'},
            {id:'pack_array',alt:'Retail Display Rack & Pack Array',src:'/images/jusamazin/process/proof_print_03.jpg'},
            {id:'print_detail',alt:'Real-World Pantone Print Proofing',src:'/images/jusamazin/desi_bar/pantone_proofing.jpg'}
          ].map(g=>(
            <div key={g.id} className="deb-gal-item drv" style={{position:'relative',overflow:'hidden'}}><img loading="lazy" src={g.src} alt={g.alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
          ))}
        </div>
      </section>

      {/* S7: PRODUCTION CRITERIA */}
      <section className="deb-section">
        <div className="deb-c">
          <div className="deb-label drv">Production Standards</div>
          <div className="deb-title drv">Prepress &amp;<br/><em>Design Criteria.</em></div>
          <div className="deb-filters drv">
            {['all','design','production','structure'].map(f=>(
              <button key={f} className={`deb-pill${filter===f?' active':''}`} onClick={()=>setFilter(f)}>
                {f==='all'?'Show All':f.charAt(0).toUpperCase()+f.slice(1)}
              </button>
            ))}
          </div>
          <div className="deb-fb-grid">
            {PRODUCTION_CRITERIA.map((crit,i)=>(
              <div key={i} className={`deb-fb-card drv${filter!=='all'&&crit.c!==filter?' hidden':''}`}>
                <div className="deb-fb-quote">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="deb-fb-name">{crit.n}</div>
                  <div className="deb-fb-role">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S8: PROJECTS NAVIGATION */}
      <div className="deb-c" style={{marginTop:'4rem', marginBottom:'4rem'}}>
        <div className="deb-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="deb-label" style={{color:'var(--deb-ochre)', letterSpacing:'0.2em'}}>Related Packaging Case Studies {'>>>'}</div>
          <div className="deb-footer-links" style={{marginTop:'1.2rem', marginBottom:'0'}}>
            {NAV_LINKS.map(n=>(
              <Link key={n.l} href={n.h} className="deb-footer-link">{n.l}</Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <Script id="deb-init" strategy="lazyOnload">{`
        (function(){
          function init(){
            var obs=new IntersectionObserver(function(entries){
              entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});
            },{threshold:0.05});
            document.querySelectorAll('.drv').forEach(function(el){obs.observe(el);});
            setTimeout(function(){
              document.querySelectorAll('.drv').forEach(function(el){el.classList.add('vis');});
            },1500);
            if(window.innerWidth<=900){
              document.querySelectorAll('.drv').forEach(function(el){el.classList.add('vis');});
            }
          }
          if(document.readyState==='loading'){
            document.addEventListener('DOMContentLoaded',init);
          } else {
            init();
          }
          (function waitForLenis(){
            if(typeof Lenis==='undefined'){
              setTimeout(waitForLenis,80);
              return;
            }
            try{
              var lenis=new Lenis({duration:1.2,smooth:true,smoothTouch:false});
              function raf(time){
                lenis.raf(time);
                requestAnimationFrame(raf);
              }
              requestAnimationFrame(raf);
            }catch(e){}
          })();
        })();
      `}</Script>
    </>
  )
}

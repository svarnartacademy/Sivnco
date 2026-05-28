import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

const PRODUCTS = [
  {id:1,name:'200g Jars',cat:'Glass Jars',desc:'Compact glass jar format designed for premium spreads. Structural features include a wide mouth for easy access, custom neck thread heights for airtight metal lug caps, and optimized label wrapper dimensions.'},
  {id:2,name:'325g Jars',cat:'Glass Jars',desc:'The retail volume benchmark. Perfect balance of shelf presence and hand ergonomics. Designed with a clear visual window to showcase product consistency and a smooth surface area for premium matte-finish paper labels.'},
  {id:3,name:'500g Jars',cat:'Glass Jars',desc:'Large family-sized glass jar. Engineered for durability on retail shelves and during transit. The cylindrical structure provides a massive canvas for front-of-pack brand storytelling and clear nutrition panel grids.'},
  {id:4,name:'1kg Tub',cat:'Tubs',desc:'Industrial and bulk consumer format. Heavy-duty molded HDPE construction with tamper-evident snap-on lids. Features wrap-around in-mold labeling (IML) to resist kitchen humidity and rough handling.'},
  {id:5,name:'250g Pillow Pouch',cat:'Pouches',desc:'Flexible packaging format optimized for high-speed form-fill-seal (FFS) lines. Laminated multilayer film provides high moisture and oxygen barrier properties, finished with a smooth matte lacquer.'},
  {id:6,name:'1kg Standy Pouch',cat:'Pouches',desc:'Premium stand-up pouch (doypack) with gusseted bottom. Features a reclosable zipper lock for consumer convenience and a tear-notch for easy initial opening. Maximizes shelf footprint and billboard space.'},
  {id:7,name:'500g Standy Pouch',cat:'Pouches',desc:'Mid-size stand-up barrier pouch. Features durable side seals and bottom gusset design that stays upright even as product is consumed. Offers excellent gas barrier protection for roasted superfoods.'},
  {id:8,name:'30g Pillow Pouch',cat:'Pouches',desc:'Single-serve impulse pouch format. Designed for trial sizes and travel convenience. Engineered with easy-tear serrated edges and high-tensile seals to prevent accidental bursting in transit.'},
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --pr-bg:#0A0906;--pr-white:#F0EDE6;--pr-accent:#7B61FF;--pr-accent2:#D4600A;
  --pr-muted:rgba(240,237,230,0.45);--pr-border:rgba(240,237,230,0.08);
  --pr-glass:rgba(240,237,230,0.03);
  --D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace;
}
html{scroll-behavior:smooth}
body{background:var(--pr-bg);color:var(--pr-white);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}

.pr-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5vw;background:rgba(10,9,6,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--pr-border)}
.pr-logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.pr-back{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;padding:.55rem 1.4rem;border:1px solid var(--pr-border);border-radius:40px;transition:.3s}
.pr-back:hover{border-color:var(--pr-accent);color:var(--pr-accent)}

.pr-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--pr-border)}
.pr-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 80%,rgba(123,97,255,0.18),transparent 55%),radial-gradient(ellipse at 75% 20%,rgba(212,96,10,0.1),transparent 55%),var(--pr-bg);animation:prShift 12s ease-in-out infinite}
@keyframes prShift{0%,100%{opacity:.8;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}}
.pr-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.pr-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--pr-accent);margin-bottom:2rem}
.pr-hero h1{font-family:var(--D);font-size:clamp(4.5rem,13vw,13rem);line-height:.85;letter-spacing:-.02em}
.pr-hero h1 span{color:var(--pr-accent)}
.pr-hero h1 em{font-style:normal;color:var(--pr-muted);font-family:var(--S);font-weight:300;display:block;font-size:.35em;margin-top:1rem;line-height:1.6;max-width:600px}

.pr-c{max-width:1300px;margin:0 auto;padding:0 5vw}
.pr-section{padding:8rem 0;border-bottom:1px solid var(--pr-border)}
.pr-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--pr-accent);margin-bottom:1.5rem}
.pr-title{font-family:var(--D);font-size:clamp(2.8rem,6vw,6.5rem);line-height:.9;margin-bottom:2.5rem}
.pr-title em{font-style:normal;color:var(--pr-muted);font-family:var(--S);font-weight:300}

.pr-intro{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.pr-intro-text{font-size:1.1rem;line-height:1.9;color:var(--pr-muted)}
.pr-intro-stats{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--pr-border);border:1px solid var(--pr-border)}
.pr-stat{background:var(--pr-bg);padding:2.5rem;text-align:center;position:relative;overflow:hidden}
.pr-stat::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(123,97,255,0.1),transparent 70%);opacity:0;transition:.4s;pointer-events:none}
.pr-stat:hover::after{opacity:1}
.pr-stat-n{font-family:var(--D);font-size:clamp(2.5rem,5vw,4.5rem);color:var(--pr-accent);line-height:1}
.pr-stat-l{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--pr-muted);margin-top:.6rem}

.pr-grid{display:flex;flex-direction:column;gap:0;border:1px solid var(--pr-border)}
.pr-product{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--pr-border);min-height:70vh;position:relative;overflow:hidden}
.pr-product:last-child{border-bottom:none}
.pr-product:nth-child(even){direction:rtl}
.pr-product:nth-child(even)>*{direction:ltr}
.pr-product::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(123,97,255,0.06),transparent 60%);opacity:0;transition:.5s;pointer-events:none}
.pr-product:hover::after{opacity:1}

.pr-viewer{background:var(--pr-glass);display:flex;align-items:center;justify-content:center;position:relative;border-right:1px solid var(--pr-border);min-height:400px}
.pr-product:nth-child(even) .pr-viewer{border-right:none;border-left:1px solid var(--pr-border)}
.pr-viewer model-viewer{width:100%;height:100%;min-height:400px}
.pr-viewer-placeholder{font-family:var(--D);font-size:.8rem;letter-spacing:.12em;color:rgba(240,237,230,0.08);text-align:center;padding:2rem}
.pr-viewer-badge{position:absolute;top:1.5rem;left:1.5rem;font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--pr-accent);background:rgba(123,97,255,0.1);border:1px solid rgba(123,97,255,0.2);padding:.35rem .8rem;border-radius:20px;z-index:2}
.pr-viewer-hint{position:absolute;bottom:1.5rem;left:50%;transform:translateX(-50%);font-family:var(--M);font-size:.45rem;letter-spacing:.15em;color:var(--pr-muted);opacity:.6;z-index:2}

.pr-info{padding:4rem;display:flex;flex-direction:column;justify-content:center;gap:1.5rem}
.pr-info-num{font-family:var(--D);font-size:clamp(5rem,10vw,9rem);color:rgba(123,97,255,0.06);line-height:1;position:absolute;right:2rem;top:2rem}
.pr-info-cat{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--pr-accent)}
.pr-info h3{font-family:var(--D);font-size:clamp(1.8rem,3vw,3rem);line-height:1;letter-spacing:.02em}
.pr-info p{font-size:1.05rem;line-height:1.9;color:var(--pr-muted);max-width:480px}
.pr-info-tag{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--pr-muted);margin-top:.5rem}
.pr-info-tag::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--pr-accent)}

.pr-process{padding:10rem 0;background:rgba(123,97,255,0.02);text-align:center}
.pr-process-quote{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--pr-muted);max-width:780px;margin:0 auto;font-weight:300}
.pr-process-quote strong{color:var(--pr-white);font-weight:500}

.pr-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--pr-border)}
.pr-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}
.pr-footer-link{font-family:var(--D);font-size:clamp(1.4rem,3vw,2.2rem);color:var(--pr-muted);transition:color .3s}
.pr-footer-link:hover{color:var(--pr-accent)}
.pr-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:rgba(240,237,230,0.25);padding-top:2rem;border-top:1px solid var(--pr-border)}

.prv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.prv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .pr-intro{grid-template-columns:1fr;gap:2.5rem}
  .pr-product{grid-template-columns:1fr;min-height:auto}
  .pr-product:nth-child(even){direction:ltr}
  .pr-viewer{min-height:320px;border-right:none!important;border-left:none!important;border-bottom:1px solid var(--pr-border)}
  .pr-info{padding:2.5rem}
  .pr-info-num{font-size:5rem;right:1rem;top:1rem}
  .pr-footer-meta{flex-direction:column;gap:.8rem}
}
@media(max-width:540px){
  .pr-hero h1{font-size:clamp(3rem,14vw,7rem)}
  .pr-section{padding:5rem 0}
  .pr-viewer{min-height:260px}
  .pr-info{padding:2rem}
  .pr-intro-stats{grid-template-columns:1fr}
}
`

export default function PackRender3D() {
  const [loaded, setLoaded] = useState({})
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>3D Pack Render — Case Study · Sivnco</title>
        <meta name="description" content="Interactive 3D product renders for Jus Amazin. 10 SKUs visualized in real-time WebGL."/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
        <style dangerouslySetInnerHTML={{__html:CSS}}/>
      </Head>

      {/* model-viewer web component — loads GLTF/GLB natively */}
      <Script src="https://unpkg.com/@google/model-viewer@3.3.0/dist/model-viewer.min.js" strategy="afterInteractive" type="module"/>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>

      {/* NAV */}
      <nav className="pr-nav">
        <Link href="/" className="pr-logo">SIVNCO<span style={{color:'var(--pr-accent)'}}>.</span></Link>
        <Link href="/jusamazin" className="pr-back">← Case Study</Link>
      </nav>

      {/* HERO */}
      <div className="pr-hero">
        <div className="pr-hero-bg"/>
        <div className="pr-hero-inner">
          <div className="pr-hero-tag">Interactive 3D Showcase</div>
          <h1>3D Pack<br/><span>Render</span><em>10 product SKUs rendered in real-time WebGL. Rotate, zoom, and inspect every detail of the packaging system — from label typography to cap threading.</em></h1>
        </div>
      </div>

      {/* INTRO */}
      <section className="pr-section">
        <div className="pr-c">
          <div className="pr-label prv">The Approach</div>
          <div className="pr-title prv">From flat<br/><em>to spatial.</em></div>
          <div className="pr-intro">
            <div className="pr-intro-text prv">
              Every packaging design begins as a 2D file — Illustrator artboards, print-ready PDFs. But the shelf is three-dimensional. The consumer picks up, rotates, reads the back panel. 3D rendering bridges the gap between design intent and retail reality. These renders serve as the final validation layer before committing to print production, catching issues that flat proofs can never reveal.
            </div>
            <div className="pr-intro-stats prv">
              <div className="pr-stat"><div className="pr-stat-n">10</div><div className="pr-stat-l">Products Rendered</div></div>
              <div className="pr-stat"><div className="pr-stat-n">360°</div><div className="pr-stat-l">Full Rotation</div></div>
              <div className="pr-stat"><div className="pr-stat-n">WebGL</div><div className="pr-stat-l">Real-time Engine</div></div>
              <div className="pr-stat"><div className="pr-stat-n">PBR</div><div className="pr-stat-l">Material Shading</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <div className="pr-grid">
        {PRODUCTS.map((p,i) => (
          <div key={p.id} className="pr-product prv" style={{transitionDelay:`${i*0.05}s`}}>
            <div className="pr-viewer">
              <div className="pr-viewer-badge">{`0${p.id}`}</div>
              {p.id === 1 ? (
                <model-viewer
                  src={`/models/product-${p.id}.glb`}
                  alt={p.name}
                  auto-rotate
                  camera-controls
                  shadow-intensity="1"
                  environment-image="neutral"
                  style={{width:'100%',height:'100%',minHeight:'400px',background:'transparent'}}
                />
              ) : (
                <div className="pr-viewer-placeholder">
                  <div style={{fontSize:'3rem',marginBottom:'1rem',opacity:.15,fontFamily:'var(--D)'}}>◇</div>
                  {p.name.toUpperCase()}<br/>
                  <span style={{fontSize:'.45rem',opacity:.5,marginTop:'.5rem',display:'block'}}>
                    Drop .glb file in /public/models/product-{p.id}.glb
                  </span>
                </div>
              )}
              <div className="pr-viewer-hint">DRAG TO ROTATE · SCROLL TO ZOOM</div>
            </div>
            <div className="pr-info">
              <div className="pr-info-num">{String(p.id).padStart(2,'0')}</div>
              <div className="pr-info-cat">{p.cat}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="pr-info-tag">3D Interactive Render</div>
            </div>
          </div>
        ))}
      </div>

      {/* PROCESS QUOTE */}
      <div className="pr-process">
        <div className="pr-c">
          <div className="pr-label prv" style={{textAlign:'center'}}>The Process</div>
          <blockquote className="pr-process-quote prv">
            &ldquo;Each render starts from the <strong>production-ready dieline</strong> — the exact file that goes to print. It gets mapped onto a geometrically accurate 3D model of the jar, bar wrapper, or box. <strong>PBR materials</strong> simulate real-world paper stock, matte lamination, metallic foil, and glossy varnish. The result isn't just a pretty picture — it's a <strong>functional preview</strong> of the final retail product.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* FOOTER */}
      <div className="pr-c">
        <div className="pr-footer">
          <div className="pr-label">Projects {'>>>'}</div>
          <div className="pr-footer-links">
            {['Bars','Jars','Superfoods','Snacks','Marketing','Management'].map(l=>(
              <Link key={l} href="/jusamazin" className="pr-footer-link">{l}</Link>
            ))}
          </div>
          <div className="pr-footer-meta">
            <span>© 2023–2026</span>
            <span>My Journey @ Jus&apos;Amazin</span>
          </div>
        </div>
      </div>

      <Script id="pr-init" strategy="lazyOnload">{`
        (function(){
          function init(){
            var obs=new IntersectionObserver(function(entries){
              entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});
            },{threshold:0.05});
            document.querySelectorAll('.prv').forEach(function(el){obs.observe(el);});
            setTimeout(function(){document.querySelectorAll('.prv').forEach(function(el){el.classList.add('vis');});},2000);
            if(window.innerWidth<=900){document.querySelectorAll('.prv').forEach(function(el){el.classList.add('vis');});}
          }
          if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
          (function waitL(){if(typeof Lenis==='undefined'){setTimeout(waitL,80);return;}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r);}requestAnimationFrame(r);}catch(e){}})();
        })();
      `}</Script>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

const PILLARS = [
  {h:"A 'Why'?",b:"The concept was born from a simple question: Why should health bars feel foreign? This project explores the intersection of Western wellness trends and traditional Indian snacking. The 'Why' behind this design was to bridge that gap — creating a visual and conceptual fusion that honors 'Desi' roots while meeting modern standards of performance nutrition. It's not just an energy bar; it's a fresh, localized take on a global category."},
  {h:"Approach",b:"The objective was to disrupt the saturated health-bar market by pivoting away from 'clinical' western aesthetics and leaning into Indian cultural heritage. My approach centered on Visual Fusion: synthesizing the nostalgic textures of traditional Chikki with the clean, functional cues of modern performance nutrition."},
  {h:"Implementation",b:"In a fast-moving retail landscape, the primary goal was 'Shelf Presence.' I intentionally pivoted away from rigid grid systems to embrace a more fluid, maximalist aesthetic. This 'organized chaos' wasn't a rejection of design principles, but rather a strategic application of Contrast and Color Theory to cut through market noise and create an instant connection with the consumer."},
  {h:"Outcome",b:"The final design resulted in an 'Organized Chaos' — a vibrant, high-energy aesthetic that effectively captured consumer attention within seconds of shelf exposure. By prioritizing emotional connection over rigid design conventions, we created a brand personality that felt both 'Premium' and 'Playful.'"},
]
const KPIS = [
  "Exponential Sales Growth — Following the visual overhaul, the snacking range saw a 70% increase in sales.",
  "Scalability at its best — Monthly volume surged from an initial 250 units to 3,000 units within the first month. Currently, the product maintains a high-velocity growth rate, reaching 8,000 units per month.",
  "Brand Halo Effect — The success of the Desi Energy Bar increased overall brand equity, driving significant demand and discovery for other product lines within the company portfolio.",
]
const FEEDBACK = [
  {n:"Jitin Munjal",r:"CEO & Co-Founder",q:"I've loved the design as it was our dream to have this product in our portfolio as a charmer and this design has held true for all the ideology we wanted for the product",c:"leadership"},
  {n:"Shilpa Moglishetty",r:"CEO & Co-Founder",q:"Well it is a series of nostalgia that we looked for out of which this design styling worked the best for us as it was the most relevant and connecting to all of us.",c:"leadership"},
  {n:"Roshan Kulranjan",r:"Business Operations Head",q:"I wasn't sure about the color blue with nostalgia, but surprisingly it works as blue grasps attention and the nostalgia keeps the attention span long enough for them to make the purchase",c:"team"},
  {n:"Manoj",r:"Production Head",q:"Its so fun and out of blue, I don't find it as a typical but it works great as it sells in the market",c:"team"},
  {n:"Juhi Singh",r:"Colleague",q:"He has a good understanding of emotions so that grasp of gully cricket was expected, but the fusion of electric blue is what works as a punch",c:"team"},
  {n:"Arun",r:"Customer",q:"Its hard to see kids not choosing healthy stuff due to their plain packaging and when kids are attracted to healthy stuff like this, it's good.",c:"consumers"},
  {n:"Dwani Trivedi",r:"Customer",q:"Its a weird story, I wanted to eat something as I was feeling dizzy due to low sugar on a mall, this captured my eyes even in the brink of collapse, but then the cartoons made me smile, its a fun packaging that really grabs attention",c:"consumers"},
  {n:"Samuel",r:"Customer",q:"Crazy colors and abstract visual appearance, so its an easy eye grabber for sure.",c:"consumers"},
  {n:"Gagan",r:"Customer",q:"Well its too overloaded but that's what is out of the box from the market.",c:"consumers"},
]
const GALLERY = ['Studio Render A','Retail Shelf Setup','Close-up Texture','Lifestyle Shot','Pack Array','Print Detail']
const NAV_LINKS = ['Bars','Jars','Superfoods','Snacks','Marketing','Management']

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --deb-bg:#0D0D0D;--deb-white:#FAFAFA;--deb-accent:#0066FF;--deb-ochre:#D4960A;
  --deb-muted:rgba(250,250,250,0.45);--deb-border:rgba(250,250,250,0.1);
  --deb-glass:rgba(250,250,250,0.04);--deb-charcoal:#161616;
  --D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace;
}
html{scroll-behavior:smooth}
body{background:var(--deb-bg);color:var(--deb-white);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}

/* NAV */
.deb-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5vw;background:rgba(13,13,13,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--deb-border)}
.deb-logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.deb-back{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;padding:.55rem 1.4rem;border:1px solid var(--deb-border);border-radius:40px;transition:.3s}
.deb-back:hover{border-color:var(--deb-accent);color:var(--deb-accent)}

/* HERO */
.deb-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--deb-border)}
.deb-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 20% 80%,rgba(0,102,255,0.2),transparent 55%),radial-gradient(ellipse at 80% 20%,rgba(212,150,10,0.12),transparent 55%),var(--deb-bg);animation:heroShift 10s ease-in-out infinite}
@keyframes heroShift{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.03)}}
.deb-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%;display:grid;grid-template-columns:auto 1fr;gap:3rem;align-items:end}
.deb-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--deb-accent);writing-mode:vertical-rl;text-orientation:mixed;padding-bottom:1rem;border-left:2px solid var(--deb-accent);padding-left:.8rem}
.deb-hero-text h1{font-family:var(--D);font-size:clamp(5rem,14vw,14rem);line-height:.85;letter-spacing:-.02em}
.deb-hero-text h1 span{color:var(--deb-accent)}
.deb-hero-text h1 em{font-style:normal;color:var(--deb-ochre);font-family:var(--S);font-weight:300;display:block;font-size:.45em;margin-top:.5rem}

/* SECTIONS */
.deb-section{padding:8rem 0;border-bottom:1px solid var(--deb-border)}
.deb-c{max-width:1200px;margin:0 auto;padding:0 5vw}
.deb-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--deb-accent);margin-bottom:1.5rem}
.deb-title{font-family:var(--D);font-size:clamp(3rem,6vw,7rem);line-height:.9;margin-bottom:2.5rem}
.deb-title em{font-style:normal;color:var(--deb-muted);font-family:var(--S);font-weight:300}
.deb-body{font-size:1.1rem;line-height:1.9;color:var(--deb-muted);max-width:640px}

/* PILLARS — sticky scroll */
.deb-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--deb-border);min-height:100vh}
.deb-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--deb-bg)}
.deb-pill-right{display:flex;flex-direction:column}
.deb-pill-card{background:var(--deb-bg);padding:4rem;border-bottom:1px solid var(--deb-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center}
.deb-pill-card h3{font-family:var(--D);font-size:clamp(2rem,4vw,4.5rem);margin-bottom:1.5rem;color:var(--deb-white)}
.deb-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--deb-muted);max-width:520px}
.deb-pill-num{font-family:var(--D);font-size:clamp(8rem,15vw,16rem);color:rgba(0,102,255,0.08);line-height:1;position:absolute;right:2rem;bottom:2rem}

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
.deb-metric-num{font-family:var(--D);font-size:clamp(4rem,8vw,7rem);color:var(--deb-accent);line-height:1;position:relative}
.deb-metric-label{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--deb-muted);margin-top:1rem;position:relative;line-height:1.7}

/* GALLERY */
.deb-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--deb-border)}
.deb-gal-item{background:var(--deb-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-size:.7rem;letter-spacing:.12em;color:rgba(250,250,250,0.08);transition:background .3s}
.deb-gal-item:nth-child(2){aspect-ratio:3/4}
.deb-gal-item:nth-child(5){aspect-ratio:3/4}
.deb-gal-item:hover{background:rgba(0,102,255,0.06)}

/* FEEDBACK */
.deb-filters{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:2.5rem}
.deb-pill{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;padding:.5rem 1.2rem;border:1px solid var(--deb-border);border-radius:40px;cursor:pointer;transition:.3s;background:transparent;color:var(--deb-white)}
.deb-pill:hover,.deb-pill.active{border-color:var(--deb-accent);color:var(--deb-accent);background:rgba(0,102,255,0.08)}
.deb-fb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--deb-border);border:1px solid var(--deb-border)}
.deb-fb-card{background:var(--deb-bg);padding:2.5rem;display:flex;flex-direction:column;gap:1.2rem;transition:.3s}
.deb-fb-card.hidden{display:none}
.deb-fb-card:hover{background:rgba(0,102,255,0.03)}
.deb-fb-quote{font-family:var(--S);font-size:1rem;line-height:1.85;color:var(--deb-muted);font-style:italic;flex:1}
.deb-fb-name{font-family:var(--D);font-size:1.1rem;color:var(--deb-white)}
.deb-fb-role{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--deb-accent);margin-top:.15rem}

/* FOOTER */
.deb-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--deb-border)}
.deb-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}
.deb-footer-link{font-family:var(--D);font-size:clamp(1.5rem,3vw,2.5rem);color:var(--deb-muted);transition:color .3s;letter-spacing:.03em}
.deb-footer-link:hover{color:var(--deb-accent)}
.deb-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:rgba(250,250,250,0.3);padding-top:2rem;border-top:1px solid var(--deb-border)}

/* REVEALS */
.drv{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.drv.vis{opacity:1;transform:translateY(0)}

/* MOBILE */
@media(max-width:900px){
  .deb-hero-inner{grid-template-columns:1fr;gap:1rem}
  .deb-hero-tag{writing-mode:horizontal-tb;border-left:none;border-bottom:2px solid var(--deb-accent);padding-left:0;padding-bottom:.5rem;margin-bottom:1rem}
  .deb-pillars{grid-template-columns:1fr}
  .deb-pill-left{position:relative;height:auto;padding:3rem 2rem}
  .deb-pill-card{padding:3rem 2rem;min-height:auto}
  .deb-pill-num{display:none}
  .deb-dash{grid-template-columns:1fr;gap:2rem}
  .deb-gallery{grid-template-columns:1fr 1fr}
  .deb-gal-item,.deb-gal-item:nth-child(2),.deb-gal-item:nth-child(5){aspect-ratio:4/3}
  .deb-fb-grid{grid-template-columns:1fr}
  .deb-footer-meta{flex-direction:column;gap:.8rem}
}
@media(max-width:540px){
  .deb-gallery{grid-template-columns:1fr}
  .deb-hero-text h1{font-size:clamp(3.5rem,16vw,8rem)}
  .deb-section{padding:5rem 0}
  .deb-soul{padding:6rem 0}
}
`

export default function DesiEnergyBar() {
  const [filter, setFilter] = useState('all')
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Desi Energy Bar — Case Study · Sivnco</title>
        <meta name="description" content="Structured Chaos: A D2C energy bar design case study. 70% sales increase."/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
        <style dangerouslySetInnerHTML={{__html:CSS}}/>
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>

      {/* NAV */}
      <nav className="deb-nav">
        <Link href="/" className="deb-logo">SIVNCO<span style={{color:'var(--deb-accent)'}}>.</span></Link>
        <Link href="/jusamazin" className="deb-back">← Case Study</Link>
      </nav>

      {/* S1: HERO */}
      <div className="deb-hero">
        <div className="deb-hero-bg"/>
        <div className="deb-hero-inner">
          <div className="deb-hero-tag">Overview of</div>
          <div className="deb-hero-text">
            <h1>Desi<br/><span>Energy</span><br/>Bar<em>Structured Chaos — A Design Manifesto</em></h1>
          </div>
        </div>
      </div>

      {/* S2: STRATEGY PILLARS */}
      <section className="deb-section" style={{padding:0,borderBottom:'none'}}>
        <div className="deb-pillars">
          <div className="deb-pill-left">
            <div className="deb-label drv">Strategy</div>
            <div className="deb-title drv">Four<br/><em>Pillars.</em></div>
            <p className="deb-body drv">The strategic framework that guided every design decision — from concept to retail shelf.</p>
            <div className="deb-pill-num">01</div>
          </div>
          <div className="deb-pill-right">
            {PILLARS.map((p,i)=>(
              <div key={i} className="deb-pill-card drv">
                <div className="deb-label">{`0${i+1}`}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: CONCEPT RUNWAY */}
      <section className="deb-section">
        <div className="deb-c">
          <div className="deb-label drv">Ideation</div>
          <div className="deb-title drv">Where everything<br/><em>started…</em></div>
        </div>
        <div className="deb-runway drv">
          <div className="deb-runway-scroll">
            {['INITIAL SKETCH A','HAND-DRAWN CONCEPT','VECTOR OUTLINE','COLOR EXPLORATION','TYPOGRAPHY STUDY','LAYOUT ITERATION','FINAL COMP'].map(t=>(
              <div key={t} className="deb-runway-card">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* S4: EDITORIAL SOUL */}
      <div className="deb-soul">
        <div className="deb-c">
          <div className="deb-label drv" style={{textAlign:'center'}}>My View On This</div>
          <blockquote className="deb-soul-quote drv">
            &ldquo;The core of this project was to capture a specific sensory memory: the post-play <strong>'evening snack'</strong> where Chikki was our primary source of energy. While the design evolved to meet rigorous brand requirements, the <strong>'soul'</strong> of the product remained unchanged. To me, a successful product isn't just about pixel perfection; it's about the <strong>Idea</strong> and the <strong>Intent</strong>. I chose to lean into the 'imperfections' and the meaningful chaos of real life, creating a visual language that feels <strong>human, nostalgic, and authentic</strong>.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* S5: PERFORMANCE DASHBOARD */}
      <section className="deb-section">
        <div className="deb-c">
          <div className="deb-label drv">Impact</div>
          <div className="deb-title drv">Project<br/><em>Impact.</em></div>
          <div className="deb-dash">
            <div>
              <p className="deb-body drv" style={{marginBottom:'2rem'}}>While design creates the first impression, the synergy between the product&apos;s quality and its visual identity is what drives retention. By collaborating closely with the production and sales teams, we ensured the brand story reached a diverse audience with maximum impact.</p>
              {KPIS.map((k,i)=>(
                <div key={i} className="deb-kpi drv"><p>{k}</p></div>
              ))}
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
              <div className="deb-metric-card drv">
                <div className="deb-metric-num">34%</div>
                <div className="deb-metric-label">Was the overall contribution of this product in revenue in the year 2024-25</div>
              </div>
              <div className="deb-metric-card drv">
                <div className="deb-metric-num">58%</div>
                <div className="deb-metric-label">Of the retail brand recognition was increased by this product in Q3 & Q4 of year 2024-25</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S6: GALLERY */}
      <section className="deb-section" style={{padding:0}}>
        <div className="deb-gallery">
          {GALLERY.map(g=>(
            <div key={g} className="deb-gal-item drv">{g.toUpperCase()}</div>
          ))}
        </div>
      </section>

      {/* S7: FEEDBACK MATRIX */}
      <section className="deb-section">
        <div className="deb-c">
          <div className="deb-label drv">Voices</div>
          <div className="deb-title drv">The Feedback<br/><em>Matrix.</em></div>
          <div className="deb-filters drv">
            {['all','leadership','team','consumers'].map(f=>(
              <button key={f} className={`deb-pill${filter===f?' active':''}`} onClick={()=>setFilter(f)}>
                {f==='all'?'Show All':f.charAt(0).toUpperCase()+f.slice(1)}
              </button>
            ))}
          </div>
          <div className="deb-fb-grid">
            {FEEDBACK.map((fb,i)=>(
              <div key={i} className={`deb-fb-card drv${filter!=='all'&&fb.c!==filter?' hidden':''}`}>
                <div className="deb-fb-quote">&ldquo;{fb.q}&rdquo;</div>
                <div>
                  <div className="deb-fb-name">{fb.n}</div>
                  <div className="deb-fb-role">{fb.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S8: FOOTER */}
      <div className="deb-c">
        <div className="deb-footer">
          <div className="deb-label">Projects {'>>>'}</div>
          <div className="deb-footer-links">
            {NAV_LINKS.map(l=>(
              <Link key={l} href="/jusamazin" className="deb-footer-link">{l}</Link>
            ))}
          </div>
          <div className="deb-footer-meta">
            <span>© 2023–2026</span>
            <span>My Journey @ Jus&apos;Amazin</span>
          </div>
        </div>
      </div>

      <Script id="deb-init" strategy="lazyOnload">{`
        (function(){
          function init(){
            var obs=new IntersectionObserver(function(entries){
              entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});
            },{threshold:0.05});
            document.querySelectorAll('.drv').forEach(function(el){obs.observe(el);});
            setTimeout(function(){document.querySelectorAll('.drv').forEach(function(el){el.classList.add('vis');});},2000);
            if(window.innerWidth<=900){document.querySelectorAll('.drv').forEach(function(el){el.classList.add('vis');});}
          }
          if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
          (function waitL(){if(typeof Lenis==='undefined'){setTimeout(waitL,80);return;}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r);}requestAnimationFrame(r);}catch(e){}})();
        })();
      `}</Script>
    </>
  )
}

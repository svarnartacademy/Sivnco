import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {h:"A 'Why'?",b:"The concept was born from a simple question: Why should health bars feel foreign? This project explores the intersection of Western wellness trends and traditional Indian snacking. The 'Why' behind this design was to bridge that gap — creating a visual and conceptual fusion that honors 'Desi' roots while meeting modern standards of performance nutrition. It's not just an energy bar; it's a fresh, localized take on a global category."},
  {h:"Approach",b:"The objective was to disrupt the saturated health-bar market by pivoting away from 'clinical' western aesthetics and leaning into Indian cultural heritage. My approach centered on Visual Fusion: synthesizing the nostalgic textures of traditional Chikki with the clean, functional cues of modern performance nutrition."},
  {h:"Implementation",b:"In a fast-moving retail landscape, the primary goal was 'Shelf Presence.' I intentionally pivoted away from rigid grid systems to embrace a more fluid, maximalist aesthetic. This 'organized chaos' wasn't a rejection of design principles, but rather a strategic application of Contrast and Color Theory to cut through market noise and create an instant connection with the consumer."},
  {h:"Outcome",b:"The final design resulted in an 'Organized Chaos' — a vibrant, high-energy aesthetic that effectively captured consumer attention within seconds of shelf exposure. By prioritizing emotional connection over rigid design conventions, we created a brand personality that felt both 'Premium' and 'Playful.'"},
]
const KPIS = [
  "Commercial Context — Internal records report product growth following rollout. Sales outcomes are shared across product, sales, operations and design.",
  "Product Volume — Internal records report monthly volume progressing from approximately 250 to 8,000 units following rollout; this is a shared business outcome.",
  "Brand Halo Effect — The success of the Desi Energy Bar increased overall brand equity, driving significant demand and discovery for other product lines within the company portfolio.",
]
const FEEDBACK = [
  {n:"Jitin Munjal",r:"Co-Founder & CEO, Jus'Amazin",q:"I've loved the design as it was our dream to have this product in our portfolio as a charmer and this design has held true for all the ideology we wanted for the product",c:"leadership"},
  {n:"Shilpa Moglishetty",r:"Co-Founder, Jus'Amazin",q:"Well it is a series of nostalgia that we looked for out of which this design styling worked the best for us as it was the most relevant and connecting to all of us.",c:"leadership"},
  {n:"Roshan Kulranjan",r:"Business Operations Head",q:"I wasn't sure about the color blue with nostalgia, but surprisingly it works as blue grasps attention and the nostalgia keeps the attention span long enough for them to make the purchase",c:"team"},
  {n:"Manoj",r:"Production Head",q:"Its so fun and out of blue, I don't find it as a typical but it works great as it sells in the market",c:"team"},
  {n:"Juhi Singh",r:"Colleague",q:"He has a good understanding of emotions so that grasp of gully cricket was expected, but the fusion of electric blue is what works as a punch",c:"team"},
  {n:"Arun",r:"Customer",q:"Its hard to see kids not choosing healthy stuff due to their plain packaging and when kids are attracted to healthy stuff like this, it's good.",c:"consumers"},
  {n:"Dwani Trivedi",r:"Customer",q:"Its a weird story, I wanted to eat something as I was feeling dizzy due to low sugar on a mall, this captured my eyes even in the brink of collapse, but then the cartoons made me smile, its a fun packaging that really grabs attention",c:"consumers"},
  {n:"Samuel",r:"Customer",q:"Crazy colors and abstract visual appearance, so its an easy eye grabber for sure.",c:"consumers"},
  {n:"Gagan",r:"Customer",q:"Well its too overloaded but that's what is out of the box from the market.",c:"consumers"},
]
const NAV_LINKS = [{l:'Bars',h:'/jusamazin/bars'},{l:'Jars',h:'/jusamazin/jars'},{l:'Superfoods',h:'/jusamazin/superfoods'},{l:'Snacks',h:'/jusamazin/snacks'},{l:'Marketing',h:'/jusamazin/marketing'},{l:'Management',h:'/jusamazin/management'}]

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

/* PILLARS — sticky scroll */
.deb-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--deb-border);min-height:100vh}
.deb-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--deb-bg)}
.deb-pill-right{display:flex;flex-direction:column}
.deb-pill-card{background:var(--deb-bg);padding:4rem;border-bottom:1px solid var(--deb-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center}
.deb-pill-card h3{font-family:var(--D);font-weight:900;font-size:clamp(2rem,4vw,4.5rem);margin-bottom:1.5rem;color:var(--deb-white)}
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
.deb-metric-num{font-family:var(--D);font-weight:900;font-size:clamp(4rem,8vw,7rem);color:var(--deb-accent);line-height:1;position:relative}
.deb-metric-label{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--deb-muted);margin-top:1rem;position:relative;line-height:1.7}

/* GALLERY */
.deb-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--deb-border)}
.deb-gal-item{background:var(--deb-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-weight:900;font-size:.7rem;letter-spacing:.12em;color:rgba(250,250,250,0.08);transition:background .3s}
.deb-gal-item:nth-child(2){aspect-ratio:3/4}
.deb-gal-item:nth-child(5){aspect-ratio:3/4}
.deb-gal-item:hover{background:rgba(0,102,255,0.06)}

/* FEEDBACK */
.deb-filters{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:2.5rem}
.deb-pill{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;padding:.5rem 1.25rem;border:none;border-radius:40px;cursor:pointer;transition:all .3s cubic-bezier(0.16,1,0.3,1);background:rgba(255,255,255,0.04);box-shadow:0 2px 8px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.06);color:var(--deb-white)}
.deb-pill:hover{background:rgba(0,102,255,0.12);box-shadow:0 0 14px rgba(0,102,255,0.3);color:#FFF}
.deb-pill.active{background:radial-gradient(circle at 50% 50%,rgba(0,102,255,0.4) 0%,rgba(0,102,255,0.15) 100%);border:none;color:#FFF;box-shadow:0 0 22px 3px rgba(0,102,255,0.55),inset 0 1px 0 rgba(255,255,255,0.3)}
.deb-pill:active{transform:scale(0.96)}
.deb-fb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--deb-border);border:1px solid var(--deb-border)}
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
  .deb-hero-text h1{font-size:clamp(2.2rem,11vw,4.5rem)}
  .deb-section{padding:4rem 0}
  .deb-soul{padding:5rem 0}
}
`


export default function DesiEnergyBar() {
  const [filter, setFilter] = useState('all')
  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/jusamazin/desi-energy-bar" />
        <meta charSet="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Desi Energy Bar — Case Study · Sivnco</title>
        <meta name="description" content="Desi Energy Bar packaging: retail research, illustration and production rollout."/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html:CSS}}/>
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>

      {/* NAV */}
      <Navbar backLink="/jusamazin" backLabel="← Case Study" />

      {/* S1: HERO — LEADING WITH FINAL PACKAGING & CONTRIBUTION */}
      <div className="deb-hero" style={{minHeight:'auto', padding:'8rem 5vw 4rem'}}>
        <div className="deb-hero-bg"/>
        <div style={{position:'relative', zIndex:2, maxWidth:'1240px', margin:'0 auto', width:'100%'}}>
          
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:'4rem', alignItems:'center'}}>
            {/* Left: Metadata & Contribution */}
            <div>
              <div className="br-label acid mb-3">
                ■ 01 // FLAGSHIP PACKAGING ARCHITECTURE · JUS'AMAZIN (2024)
              </div>
              <h1 style={{fontFamily:'var(--D)', fontWeight:900, fontSize:'clamp(3rem, 6.5vw, 6.5rem)', lineHeight:1.05, marginBottom:'1rem'}}>
                Desi<br/><span style={{color:'var(--deb-accent)'}}>Energy</span><br/>Bar
              </h1>
              <p style={{fontFamily:'var(--S)', fontSize:'1.2rem', color:'var(--deb-ochre)', fontWeight:400, marginBottom:'2rem'}}>
                Structured Chaos — A Cultural Packaging Architecture
              </p>

              <div style={{display:'flex', flexDirection:'column', gap:'1.2rem', fontSize:'0.92rem', color:'var(--deb-muted)', lineHeight:'1.75', marginBottom:'2rem'}}>
                <div>
                  <strong style={{color:'#FFF'}}>My Role &amp; Contribution: </strong>
                  Sole design ownership: conducted field audits across 25 retail stores in Bengaluru, illustrated custom nostalgic characters (Gully Cricket, Lagori, Atlas Bicycle), calibrated the electric cyan wrapper substrate for long-range shelf stop, and supervised industrial rotogravure print proofing.
                </div>
                <div>
                  <strong style={{color:'#FFF'}}>The Commercial Context: </strong>
                  Repositioned traditional Indian chikki against saturated Western clinical gym bars. Status: High-velocity commercial star in modern trade and quick commerce.
                </div>
                <div style={{padding:'0.9rem 1.2rem', borderRadius:'14px', background:'rgba(0,102,255,0.1)', border:'1px solid rgba(0,102,255,0.3)', color:'#FFF'}}>
                  <strong style={{color:'var(--deb-accent)'}}>Supported Outcome: </strong>
                  Internal records report monthly volume moving from approximately 250 to 8,000 units; a shared business outcome per month.
                </div>
              </div>

              <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
                <a href="#progression" style={{fontFamily:'var(--M)', fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', padding:'0.75rem 1.6rem', borderRadius:'999px', background:'var(--deb-accent)', color:'#FFF', fontWeight:700}}>
                  Inspect 4-Step Progression ↘
                </a>
                <Link href="/visual-diary?discipline=rejected" style={{fontFamily:'var(--M)', fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', padding:'0.75rem 1.6rem', borderRadius:'999px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.15)', color:'#FFF'}}>
                  Rejected Directions in Diary ↗
                </Link>
              </div>
            </div>

            {/* Right: Final Output Early (Physical Pack Hero) */}
            <div style={{position:'relative'}}>
              <div style={{borderRadius:'28px', overflow:'hidden', border:'1px solid rgba(0,102,255,0.4)', boxShadow:'0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(0,102,255,0.2)', background:'#000'}}>
                <img
                  src="/images/jusamazin/desi_bar/runway_final.jpg"
                  alt="Desi Energy Bar Final Physical Packaging"
                  style={{width:'100%', height:'auto', display:'block', objectFit:'cover'}}
                />
              </div>
              <div style={{marginTop:'0.8rem', display:'flex', justifyContent:'space-between', fontFamily:'var(--M)', fontSize:'0.52rem', letterSpacing:'0.15em', color:'rgba(250,250,250,0.5)', textTransform:'uppercase'}}>
                <span>FINAL PRODUCTION PACK</span>
                <span style={{color:'var(--deb-accent)'}}>ELECTRIC CYAN ON BOPP FOIL</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* S1B: THE 4-STEP PRODUCTION PROGRESSION */}
      <section id="progression" className="deb-section" style={{background:'rgba(250,250,250,0.015)'}}>
        <div className="deb-c">
          <div className="deb-label drv">End-to-End Progression</div>
          <div className="deb-title drv">From Sketch to<br/><em>Physical Shelf.</em></div>
          <p className="deb-body drv" style={{marginBottom:'3.5rem'}}>
            A transparent four-stage breakdown showing how cultural intuition was translated into industrial manufacturing reality.
          </p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1.8rem'}}>
            
            {/* Step 1: Initial Sketch */}
            <div style={{background:'rgba(250,250,250,0.03)', border:'1px solid var(--deb-border)', borderRadius:'24px', overflow:'hidden', display:'flex', flexDirection:'column'}}>
              <div style={{aspectRatio:'4/3', overflow:'hidden', background:'#000', borderBottom:'1px solid var(--deb-border)'}}>
                <img src="/images/jusamazin/desi_bar/runway_handdrawn.jpg" alt="Initial Sketch of Desi Energy Bar" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <div style={{padding:'1.6rem', flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                  <div style={{fontFamily:'var(--M)', fontSize:'0.52rem', letterSpacing:'0.2em', color:'var(--deb-accent)', textTransform:'uppercase', marginBottom:'0.4rem'}}>
                    Step 01 // Cultural Memory
                  </div>
                  <h3 style={{fontFamily:'var(--D)', fontSize:'1.25rem', color:'#FFF', marginBottom:'0.6rem'}}>
                    Hand-Drawn Sketches
                  </h3>
                  <p style={{fontSize:'0.88rem', color:'var(--deb-muted)', lineHeight:'1.7'}}>
                    Pencil exploration of local nostalgia: neighborhood games of Lagori, chaotic gully cricket matchups, and the vintage Atlas bicycle.
                  </p>
                </div>
                <div style={{marginTop:'1rem', fontFamily:'var(--M)', fontSize:'0.48rem', color:'rgba(250,250,250,0.4)', textTransform:'uppercase'}}>
                  Medium: Graphite &amp; Ink on Paper
                </div>
              </div>
            </div>

            {/* Step 2: Vector Artwork */}
            <div style={{background:'rgba(250,250,250,0.03)', border:'1px solid var(--deb-border)', borderRadius:'24px', overflow:'hidden', display:'flex', flexDirection:'column'}}>
              <div style={{aspectRatio:'4/3', overflow:'hidden', background:'#000', borderBottom:'1px solid var(--deb-border)'}}>
                <img src="/images/jusamazin/desi_bar/runway_vector.jpg" alt="Vector Artwork and Typography" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <div style={{padding:'1.6rem', flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                  <div style={{fontFamily:'var(--M)', fontSize:'0.52rem', letterSpacing:'0.2em', color:'var(--deb-accent)', textTransform:'uppercase', marginBottom:'0.4rem'}}>
                    Step 02 // Typographic Rigor
                  </div>
                  <h3 style={{fontFamily:'var(--D)', fontSize:'1.25rem', color:'#FFF', marginBottom:'0.6rem'}}>
                    Vector Architecture
                  </h3>
                  <p style={{fontSize:'0.88rem', color:'var(--deb-muted)', lineHeight:'1.7'}}>
                    Balancing the loose, human character drawings with rigorous FSSAI legal tables, barcode margins, and spot color separation layers.
                  </p>
                </div>
                <div style={{marginTop:'1rem', fontFamily:'var(--M)', fontSize:'0.48rem', color:'rgba(250,250,250,0.4)', textTransform:'uppercase'}}>
                  Tool: Adobe Illustrator Vectors
                </div>
              </div>
            </div>

            {/* Step 3: Print Proof */}
            <div style={{background:'rgba(250,250,250,0.03)', border:'1px solid var(--deb-border)', borderRadius:'24px', overflow:'hidden', display:'flex', flexDirection:'column'}}>
              <div style={{aspectRatio:'4/3', overflow:'hidden', background:'#000', borderBottom:'1px solid var(--deb-border)'}}>
                <img src="/images/jusamazin/desi_bar/pantone_proofing.jpg" alt="Pantone and Press Proofing" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <div style={{padding:'1.6rem', flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                  <div style={{fontFamily:'var(--M)', fontSize:'0.52rem', letterSpacing:'0.2em', color:'var(--deb-accent)', textTransform:'uppercase', marginBottom:'0.4rem'}}>
                    Step 03 // Prepress Rigor
                  </div>
                  <h3 style={{fontFamily:'var(--D)', fontSize:'1.25rem', color:'#FFF', marginBottom:'0.6rem'}}>
                    Industrial Press Proof
                  </h3>
                  <p style={{fontSize:'0.88rem', color:'var(--deb-muted)', lineHeight:'1.7'}}>
                    Calibrating ink opacity and spot cyan density on factory floor cylinders to prevent dulling on metallic BOPP foil substrates.
                  </p>
                </div>
                <div style={{marginTop:'1rem', fontFamily:'var(--M)', fontSize:'0.48rem', color:'rgba(250,250,250,0.4)', textTransform:'uppercase'}}>
                  Output: Pantone Press Calibration
                </div>
              </div>
            </div>

            {/* Step 4: Physical Pack */}
            <div style={{background:'rgba(250,250,250,0.03)', border:'1px solid var(--deb-border)', borderRadius:'24px', overflow:'hidden', display:'flex', flexDirection:'column'}}>
              <div style={{aspectRatio:'4/3', overflow:'hidden', background:'#000', borderBottom:'1px solid var(--deb-border)'}}>
                <img src="/images/jusamazin/desi_bar/pack_array.jpg" alt="Final Physical Sealed Pack Array" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <div style={{padding:'1.6rem', flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                  <div style={{fontFamily:'var(--M)', fontSize:'0.52rem', letterSpacing:'0.2em', color:'var(--deb-accent)', textTransform:'uppercase', marginBottom:'0.4rem'}}>
                    Step 04 // Retail Reality
                  </div>
                  <h3 style={{fontFamily:'var(--D)', fontSize:'1.25rem', color:'#FFF', marginBottom:'0.6rem'}}>
                    Physical Retail Shelf
                  </h3>
                  <p style={{fontSize:'0.88rem', color:'var(--deb-muted)', lineHeight:'1.7'}}>
                    Sealed foil flow-wrap packs stopping modern trade shoppers from 10 feet away. Instant visual recognition and repeat purchase velocity.
                  </p>
                </div>
                <div style={{marginTop:'1rem', fontFamily:'var(--M)', fontSize:'0.48rem', color:'rgba(250,250,250,0.4)', textTransform:'uppercase'}}>
                  Deployment: 8,000 Units/Month
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
            {[
              {t:'INITIAL SKETCH A',src:'/images/jusamazin/desi_bar/runway_sketch_a.jpg'},
              {t:'HAND-DRAWN CONCEPT',src:'/images/jusamazin/desi_bar/runway_handdrawn.jpg'},
              {t:'VECTOR OUTLINE',src:'/images/jusamazin/desi_bar/runway_vector.jpg'},
              {t:'COLOR EXPLORATION',src:'/images/jusamazin/desi_bar/runway_color.jpg'},
              {t:'TYPOGRAPHY STUDY',src:'/images/jusamazin/desi_bar/runway_typo.jpg'},
              {t:'LAYOUT ITERATION',src:'/images/jusamazin/desi_bar/runway_layout.jpg'},
              {t:'FINAL COMP',src:'/images/jusamazin/desi_bar/runway_final.jpg'}
            ].map(g=>(
              <div key={g.t} className="deb-runway-card" style={{position:'relative',overflow:'hidden'}}><img loading="lazy" src={g.src} alt={g.t} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
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
                <div className="deb-metric-label">Product share of company revenue · FY24–25 internal records; shared business outcome</div>
              </div>
              <div className="deb-metric-card drv">
                <div className="deb-metric-num">25</div>
                <div className="deb-metric-label">Stores in the Bengaluru retail study</div>
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

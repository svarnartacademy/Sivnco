
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'


const METRICS = [
  {n:'176%', l:'Revenue Growth FY24–25'},
  {n:'40%', l:'Production Efficiency'},
  {n:'15+', l:'SKUs Designed'},
  {n:'3D', l:'Render-based Presence'},
]
const DELIVERABLES = [
  'Packaging Design (15+ SKUs)','3D Product Renders','Brand Guidelines Document',
  'Social Media Templates','Retail POS Materials','Energy Bar Range',
  'Superfoods Packaging','Snack Pack Range','Design Process System',
]
const RESULTS = [
  '176% revenue growth in FY 2024–25 — directly from improved brand visibility and packaging coherence at retail.',
  'Production efficiency up 40% — even as 80% remains manual, the design pipeline is significantly leaner.',
  'Visual presence elevated as product presentation shifted from photo-based to 3D render-based.',
  'Streamlined process: drawing board → iterations → final design → proofing → print & production.',
  'Product portfolio structured across all SKUs with a master brand document guiding future extensions.',
]
const TEAM_A = [{i:'JM',n:'Jitin Munjal',r:'Co-founder & CEO'},{i:'SH',n:'Shilpa',r:'Co-founder & CEO'}]
const TEAM_B = [{i:'RK',n:'Roshan Kulranjan',r:'Vice President'},{i:'AS',n:'Amarjit Singh',r:'Sales Head'},{i:'SG',n:'Siddharth G',r:'Production Executive'},{i:'BH',n:'Bhoomika',r:'Quality Analyst'}]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0A0906;--ink:#F0EDE6;--muted:rgba(240,237,230,0.45);--accent:#D4600A;--border:rgba(240,237,230,0.08);--glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Bebas Neue',sans-serif;--S:'Cormorant Garamond',serif;--M:'DM Mono',monospace}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--accent);opacity:.7}
a{color:inherit;text-decoration:none}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5vw;background:rgba(10,9,6,0.75);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.back{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;padding:.6rem 1.5rem;border:1px solid var(--border);border-radius:40px;transition:.3s}
.back:hover{border-color:var(--accent);color:var(--accent)}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--border);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.92) 35%,rgba(10,9,6,.55) 65%,rgba(10,9,6,.25) 100%);pointer-events:none;z-index:0}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;text-transform:uppercase;color:var(--accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-size:clamp(6rem,16vw,15rem);line-height:.88;text-transform:uppercase}
.hero-title i{color:var(--accent);font-style:italic;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--muted);max-width:540px;line-height:1.85;margin-top:2rem}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--border)}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border)}
.metric{background:var(--bg);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;transition:background .4s}
.metric:hover{background:rgba(212,96,10,.06)}
.metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s}
.metric:hover::before{opacity:1}
.m-n{font-family:var(--D);font-size:clamp(3.5rem,7vw,6.5rem);color:var(--accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-top:.8rem}
section{padding:9rem 0;border-bottom:1px solid var(--border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;text-transform:uppercase;color:var(--accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-size:clamp(3.5rem,7vw,8rem);line-height:.88;text-transform:uppercase;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--muted);font-style:italic}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--muted);max-width:660px}
.three{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);margin-top:4rem}
.col{background:var(--bg);padding:2.5rem;transition:background .3s}
.col:hover{background:rgba(212,96,10,.04)}
.col-h{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:1.2rem;padding-bottom:1rem;border-bottom:1px solid var(--border)}
.col-b{font-family:var(--S);font-size:1.05rem;line-height:1.85;color:var(--muted)}
.mosaic{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:320px 220px;gap:1px;background:var(--border);border:1px solid var(--border);margin-top:4rem}
.slot{background:var(--glass);position:relative;overflow:hidden;display:flex;align-items:flex-end;padding:1.5rem;transition:background .3s}
.slot:hover{background:rgba(212,96,10,.06)}
.slot.tall{grid-row:span 2}
.slot.wide{grid-column:span 2}
.slot-ghost{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.07;font-family:var(--D);font-size:.9rem;letter-spacing:.12em}
.slot-cap{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);position:relative;z-index:2}
.ba{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);border:1px solid var(--border);margin-top:4rem}
.ba-side{background:var(--bg);padding:3rem}
.ba-side.a{background:rgba(212,96,10,.03)}
.ba-tag{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;text-transform:uppercase;padding:.35rem 1rem;border:1px solid var(--border);display:inline-block;border-radius:20px;margin-bottom:1.5rem}
.ba-side.a .ba-tag{border-color:var(--accent);color:var(--accent)}
.ba-b{font-family:var(--S);font-size:1.05rem;line-height:1.85;color:var(--muted)}
.dels{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);margin-top:4rem}
.del{background:var(--bg);padding:1.8rem 2rem;display:flex;align-items:center;gap:1rem;transition:background .3s}
.del:hover{background:rgba(212,96,10,.04)}
.del-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);flex-shrink:0}
.del-t{font-family:var(--M);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink)}
.forest{background:var(--forest);border-top:1px solid rgba(240,237,230,.06);border-bottom:1px solid rgba(240,237,230,.06)}
.team-g{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(212,96,10,.7);margin-bottom:1.5rem;margin-top:3rem}
.team-g:first-child{margin-top:3.5rem}
.tgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:rgba(240,237,230,.06);border:1px solid rgba(240,237,230,.06)}
.tcard{background:var(--forest);padding:2rem;display:flex;align-items:center;gap:1.4rem;transition:background .3s}
.tcard:hover{background:rgba(30,58,47,.6)}
.av{width:48px;height:48px;border-radius:50%;background:rgba(240,237,230,.05);border:1px solid rgba(240,237,230,.1);display:flex;align-items:center;justify-content:center;font-family:var(--D);font-size:1rem;color:var(--accent);flex-shrink:0}
.t-name{font-family:var(--D);font-size:1.2rem;letter-spacing:.02em;color:#F0EDE6}
.t-role{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(240,237,230,.4);margin-top:.2rem}
.rlist{list-style:none;margin-top:4rem;display:flex;flex-direction:column;gap:1px;background:var(--border);border:1px solid var(--border)}
.ritem{background:var(--bg);padding:2.5rem;display:flex;gap:2.5rem;align-items:flex-start;transition:background .3s}
.ritem:hover{background:rgba(212,96,10,.04)}
.r-n{font-family:var(--D);font-size:3rem;color:var(--accent);line-height:1;width:36px;flex-shrink:0}
.r-t{font-family:var(--S);font-size:1.08rem;line-height:1.85;color:var(--muted)}
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border)}
.pf-brand{font-family:var(--D);font-size:1.4rem;letter-spacing:.06em}
.cta{font-family:var(--M);font-size:.65rem;letter-spacing:.18em;text-transform:uppercase;border:1px solid var(--accent);color:var(--accent);padding:.9rem 2.2rem;border-radius:40px;transition:.3s}
.cta:hover{background:var(--accent);color:#fff}
@media(max-width:900px){.three,.ba,.tgrid{grid-template-columns:1fr}.metrics{grid-template-columns:repeat(2,1fr)}.mosaic{grid-template-columns:1fr 1fr;grid-template-rows:auto}.slot.tall{grid-row:span 1}.dels{grid-template-columns:1fr 1fr}.pfooter{flex-direction:column;gap:2rem;text-align:center}}
.rv{opacity:0;transform:translateY(32px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}
@keyframes heroBgPulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}
.hero .rv{opacity:1;transform:translateY(0)}
`

export default function JusAmazin() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Jus Amazin — Case Study · Sivnco</title>
        <meta name="description" content="End-to-end brand system for Jus Amazin. 176% revenue growth." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <div id="dot" />

      <nav>
        <Link href="/" className="logo">SIVNCO<span style={{color:'var(--accent)'}}>.</span></Link>
        <Link href="/" className="back">← Portfolio</Link>
      </nav>

      {/* HERO */}
      <div className="hero" style={{position:'relative', overflow:'hidden'}}>
        {/* Animated gradient background replacing LiquidMetalBg */}
        <div style={{position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0, background:'radial-gradient(ellipse at 30% 70%, rgba(212,96,10,0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(232,133,42,0.15) 0%, transparent 50%), var(--bg)', animation:'heroBgPulse 8s ease-in-out infinite'}} />
        <div className="c" style={{position:'relative', zIndex:2}}>
          <div className="eyebrow rv">Case Study · Brand Identity · 2022 — Present</div>
          <h1 className="hero-title rv" style={{transitionDelay:'.1s'}}>
            Jus<br/><i>Amazin</i>
          </h1>
          <p className="hero-sub rv" style={{transitionDelay:'.25s'}}>
            End-to-end brand system for a D2C peanut butter brand — packaging across 15+ SKUs, social media systems, retail POS, and guidelines that scaled with the company.
          </p>
          <div className="hero-meta rv" style={{transitionDelay:'.4s'}}>
            {[['Client','Jus Amazin Pvt. Ltd.'],['Role','Design & Comms Manager'],['Year','2022 — Present'],['Type','Brand · Packaging · Social']].map(([l,v])=>(
              <div key={l} className="meta"><label>{l}</label><span>{v}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        {METRICS.map((m,i)=>(
          <div key={m.n} className="metric rv" style={{transitionDelay:`${i*0.08}s`}}>
            <div className="m-n">{m.n}</div>
            <div className="m-l">{m.l}</div>
          </div>
        ))}
      </div>

      {/* BRIEF */}
      <section><div className="c">
        <div className="s-label rv">01 — The Brief</div>
        <h2 className="s-title rv">Strong product.<br/><i>No identity.</i></h2>
        <div className="three rv2">
          {[['01 — Challenge','Strong product quality, zero coherent visual identity. Every SKU looked different. Retail shelf pickup was weak. No consistent brand story.'],['02 — Approach','Built a complete visual system from scratch — packaging logic, variant colour codes, photo→3D migration, social templates, POS, and a brand guidelines doc.'],['03 — Outcome','176% revenue growth in FY 2024–25. Streamlined pipeline from drawing board to production. Cohesive portfolio across all SKUs and retail touchpoints.']].map(([h,b])=>(
            <div key={h} className="col"><div className="col-h">{h}</div><div className="col-b">{b}</div></div>
          ))}
        </div>
      </div></section>

      {/* MOSAIC */}
      <section style={{paddingTop:0,borderBottom:'1px solid var(--border)'}}><div className="c">
        <div className="s-label rv">02 — Visual System</div>
        <h2 className="s-title rv">Packaging<br/><i>at scale.</i></h2>
        <div className="mosaic rv2">
          <div className="slot tall"><div className="slot-ghost">HERO PRODUCT SHOT</div><span className="slot-cap">Core Packaging Range</span></div>
          <div className="slot"><div className="slot-ghost">3D RENDER</div><span className="slot-cap">3D Pack Render</span></div>
          <div className="slot"><div className="slot-ghost">SUPERFOODS</div><span className="slot-cap">Superfoods Range</span></div>
          <div className="slot wide"><div className="slot-ghost">BRAND GUIDELINES</div><span className="slot-cap">Brand Guidelines Document</span></div>
        </div>
      </div></section>

      {/* BEFORE / AFTER */}
      <section><div className="c">
        <div className="s-label rv">03 — Transformation</div>
        <h2 className="s-title rv">Before<br/><i>and after.</i></h2>
        <div className="ba rv2">
          <div className="ba-side"><div className="ba-tag">Before — 2021</div><p className="ba-b">Generic label printing. No system. Each SKU looked like a different brand. Photo imagery that didn't translate to small pack sizes. No shelf-ready files, no rationale document.</p></div>
          <div className="ba-side a"><div className="ba-tag">After — 2022 onwards</div><p className="ba-b">Unified visual language. 15+ SKUs with coherent colour logic, typography, and 3D-render direction. A brand guidelines document the entire team uses daily. Design is now proactive and scalable.</p></div>
        </div>
      </div></section>

      {/* DELIVERABLES */}
      <section><div className="c">
        <div className="s-label rv">04 — Deliverables</div>
        <h2 className="s-title rv">Full<br/><i>system.</i></h2>
        <div className="dels rv2">
          {DELIVERABLES.map(d=>(
            <div key={d} className="del"><div className="del-dot"/><div className="del-t">{d}</div></div>
          ))}
        </div>
      </div></section>

      {/* TEAM */}
      <section className="forest"><div className="c">
        <div className="s-label rv" style={{color:'rgba(212,96,10,.65)'}}>05 — The People</div>
        <h2 className="s-title rv">Who we<br/><i>worked with.</i></h2>
        <div className="rv2">
          <div className="team-g">Founders &amp; Leadership</div>
          <div className="tgrid">
            {TEAM_A.map(t=><div key={t.i} className="tcard"><div className="av">{t.i}</div><div><div className="t-name">{t.n}</div><div className="t-role">{t.r}</div></div></div>)}
          </div>
          <div className="team-g">Colleagues &amp; Collaborators</div>
          <div className="tgrid">
            {TEAM_B.map(t=><div key={t.i} className="tcard"><div className="av">{t.i}</div><div><div className="t-name">{t.n}</div><div className="t-role">{t.r}</div></div></div>)}
          </div>
        </div>
      </div></section>

      {/* RESULTS */}
      <section><div className="c">
        <div className="s-label rv">06 — Results</div>
        <h2 className="s-title rv">What the<br/><i>numbers say.</i></h2>
        <ul className="rlist rv2">
          {RESULTS.map((r,i)=>(
            <li key={i} className="ritem"><span className="r-n">0{i+1}</span><span className="r-t">{r}</span></li>
          ))}
        </ul>
      </div></section>

      {/* FOOTER */}
      <div className="c">
        <div className="pfooter rv">
          <div><div className="pf-brand">SIVNCO<span style={{color:'var(--accent)'}}>.</span></div></div>
          <Link href="/#contact" className="cta">Start a Project →</Link>
        </div>
      </div>

      <Script id="page-init" strategy="afterInteractive">{`
        (function(){
          // Lerp cursor
          var dot=document.getElementById('dot');
          if(dot){
            var tx=window.innerWidth/2,ty=window.innerHeight/2,cx=tx,cy=ty;
            document.addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY});
            (function loop(){cx+=(tx-cx)*.15;cy+=(ty-cy)*.15;dot.style.left=cx+'px';dot.style.top=cy+'px';requestAnimationFrame(loop)})();
            document.querySelectorAll('a,button').forEach(function(el){
              el.addEventListener('mouseenter',function(){dot.classList.add('lg')});
              el.addEventListener('mouseleave',function(){dot.classList.remove('lg')});
            });
          }
          // Scroll reveals via IntersectionObserver
          var obs=new IntersectionObserver(function(entries){
            entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});
          },{threshold:0.06});
          document.querySelectorAll('.rv,.rv2').forEach(function(el){obs.observe(el)});
        })();
      `}</Script>
    </>
  )
}

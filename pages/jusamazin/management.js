import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

const PILLARS = [
  {h:"Design Ops Leadership",b:"Transitioning from individual creative production to cross-functional brand leadership. Appointed Manager of Communication Design to command end-to-end visual and print media workflows."},
  {h:"Strategic Alignment",b:"Aligning day-to-day visual output with executive fundraising targets and short-to-medium-term commercial milestones."},
  {h:"Consumer Infrastructure",b:"Constructing advanced consumer insights frameworks, highlighted by the Project Almond Milk (30 SAM) digital survey system."},
  {h:"Data-Driven Iteration",b:"Using real consumer survey data to guide design updates, balancing visual elegance with informative layout hierarchies to optimize market pickup."},
]
const SURVEY = [
  {label:'Demographics',desc:'Tracking regional consumer profiles, age brackets, and target locations across Bengaluru.'},
  {label:'Visuals vs Value',desc:"Data-driven design parsing — analyzing user preferences regarding 'Class over Chaos' or 'Information over Visuals'."},
  {label:'Perception Logic',desc:'Measuring brand trust drivers to refine future iterations of the premium Almond Milk (30 SAM) system.'},
]
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--mg-bg:#0A0906;--mg-white:#F0EDE6;--mg-accent:#334155;--mg-gold:#C0A060;--mg-muted:rgba(240,237,230,0.45);--mg-border:rgba(240,237,230,0.08);--mg-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html{scroll-behavior:smooth}body{background:var(--mg-bg);color:var(--mg-white);font-family:var(--S);overflow-x:hidden}a{color:inherit;text-decoration:none}
.mg-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5vw;background:rgba(10,9,6,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--mg-border)}
.mg-logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}.mg-back{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;padding:.55rem 1.4rem;border:1px solid var(--mg-border);border-radius:40px;transition:.3s}.mg-back:hover{border-color:var(--mg-gold);color:var(--mg-gold)}
.mg-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--mg-border)}
.mg-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 80%,rgba(51,65,85,0.2),transparent 55%),radial-gradient(ellipse at 75% 25%,rgba(192,160,96,0.08),transparent 55%),var(--mg-bg)}
.mg-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.mg-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--mg-gold);margin-bottom:2rem}
.mg-hero h1{font-family:var(--D);font-size:clamp(4rem,12vw,12rem);line-height:.85}.mg-hero h1 span{color:var(--mg-gold)}
.mg-hero h1 em{font-style:normal;color:var(--mg-muted);font-family:var(--S);font-weight:300;display:block;font-size:.35em;margin-top:1rem;line-height:1.6;max-width:600px}
.mg-c{max-width:1200px;margin:0 auto;padding:0 5vw}.mg-s{padding:8rem 0;border-bottom:1px solid var(--mg-border)}
.mg-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--mg-gold);margin-bottom:1.5rem}
.mg-title{font-family:var(--D);font-size:clamp(2.8rem,6vw,6.5rem);line-height:.9;margin-bottom:2.5rem}.mg-title em{font-style:normal;color:var(--mg-muted);font-family:var(--S);font-weight:300}
.mg-body{font-size:1.1rem;line-height:1.9;color:var(--mg-muted);max-width:640px}
.mg-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--mg-border);min-height:80vh}
.mg-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--mg-bg)}
.mg-pill-right{display:flex;flex-direction:column}
.mg-pill-card{background:var(--mg-bg);padding:4rem;border-bottom:1px solid var(--mg-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.mg-pill-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(192,160,96,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.mg-pill-card:hover::after{opacity:1}
.mg-pill-card h3{font-family:var(--D);font-size:clamp(2rem,4vw,4rem);margin-bottom:1.5rem}.mg-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--mg-muted);max-width:520px}
.mg-role-card{background:var(--mg-glass);border:1px solid var(--mg-border);padding:3rem;margin-top:3rem;position:relative;overflow:hidden}
.mg-role-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(192,160,96,0.06),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.mg-role-card:hover::after{opacity:1}
.mg-role-title{font-family:var(--D);font-size:1.6rem;margin-bottom:.5rem}.mg-role-period{font-family:var(--M);font-size:.55rem;letter-spacing:.18em;color:var(--mg-gold);margin-bottom:1.5rem}.mg-role-desc{font-size:1.05rem;line-height:1.8;color:var(--mg-muted)}
.mg-comp{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--mg-border);border:1px solid var(--mg-gold);margin-top:2rem}
.mg-comp-cell{background:var(--mg-bg);padding:2rem;text-align:center;position:relative;overflow:hidden}
.mg-comp-cell::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(192,160,96,0.08),transparent 70%)}
.mg-comp-val{font-family:var(--D);font-size:clamp(1.8rem,3vw,2.8rem);color:var(--mg-gold);line-height:1;position:relative}.mg-comp-label{font-family:var(--M);font-size:.45rem;letter-spacing:.15em;color:var(--mg-muted);margin-top:.6rem;position:relative;line-height:1.6}
.mg-survey{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--mg-border);border:1px solid var(--mg-border);margin-top:3rem}
.mg-survey-part{background:var(--mg-bg);padding:2.5rem;position:relative;overflow:hidden}
.mg-survey-part::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(192,160,96,0.06),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.mg-survey-part:hover::after{opacity:1}
.mg-survey-part h4{font-family:var(--D);font-size:1.2rem;margin-bottom:1rem;color:var(--mg-gold)}.mg-survey-part p{font-size:.95rem;line-height:1.8;color:var(--mg-muted)}
.mg-soul{background:rgba(51,65,85,0.05);padding:10rem 0;text-align:center}
.mg-soul-q{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--mg-muted);max-width:780px;margin:0 auto;font-weight:300}.mg-soul-q strong{color:var(--mg-white);font-weight:500}
.mg-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--mg-border)}.mg-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}.mg-footer-link{font-family:var(--D);font-size:clamp(1.4rem,3vw,2.2rem);color:var(--mg-muted);transition:color .3s}.mg-footer-link:hover{color:var(--mg-gold)}
.mg-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:rgba(240,237,230,0.25);padding-top:2rem;border-top:1px solid var(--mg-border)}
.mgv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}.mgv.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){.mg-pillars{grid-template-columns:1fr}.mg-pill-left{position:relative;height:auto;padding:3rem 2rem}.mg-pill-card{padding:3rem 2rem;min-height:auto}.mg-comp{grid-template-columns:1fr}.mg-survey{grid-template-columns:1fr}.mg-footer-meta{flex-direction:column;gap:.8rem}}
@media(max-width:540px){.mg-hero h1{font-size:clamp(3rem,14vw,7rem)}.mg-s{padding:5rem 0}.mg-soul{padding:6rem 0}}
`
const NAV = ['Core Packaging','Superfoods','Brand Guidelines','Bars','Jars','Snacks','Marketing']
export default function Management(){return(<>
<Head><meta charSet="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Management & Design Ops — Sivnco</title><meta name="description" content="Executive intel — design operations leadership and consumer insight infrastructure."/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/><style dangerouslySetInnerHTML={{__html:CSS}}/></Head>
<Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
<nav className="mg-nav"><Link href="/" className="mg-logo">SIVNCO<span style={{color:'var(--mg-gold)'}}>.</span></Link><Link href="/jusamazin" className="mg-back">← Case Study</Link></nav>
<div className="mg-hero"><div className="mg-hero-bg"/><div className="mg-hero-inner"><div className="mg-hero-tag">Creative Governance / Design Operations</div><h1>Management<br/>&amp; Design<br/><span>Ops</span><em>From standalone creative production to cross-functional strategic leadership. Directing comprehensive visual and print workflows.</em></h1></div></div>
<section className="mg-s" style={{padding:0,borderBottom:'none'}}><div className="mg-pillars"><div className="mg-pill-left"><div className="mg-label mgv">Leadership</div><div className="mg-title mgv">The Director&apos;s<br/><em>Desk.</em></div><p className="mg-body mgv">Strategic design management — aligning creative talent with executive roadmaps and commercial milestones.</p></div><div className="mg-pill-right">{PILLARS.map((p,i)=>(<div key={i} className="mg-pill-card mgv"><div className="mg-label">{`0${i+1}`}</div><h3>{p.h}</h3><p>{p.b}</p></div>))}</div></div></section>
<section className="mg-s"><div className="mg-c"><div className="mg-label mgv">Role</div><div className="mg-title mgv">Governance<br/><em>Metrics.</em></div><div className="mg-role-card mgv"><div className="mg-role-title">Manager of Communication Design</div><div className="mg-role-period">Dec 2024 — Present</div><div className="mg-role-desc">Directing all visual and print media processes from creative brief to final retail execution. Aligning creative talent with executive fundraising roadmaps.</div></div><div className="mg-comp mgv"><div className="mg-comp-cell"><div className="mg-comp-val">₹37K</div><div className="mg-comp-label">Post-Deductions Net / Month</div></div><div className="mg-comp-cell"><div className="mg-comp-val">₹40.9K</div><div className="mg-comp-label">Total CTC / Month</div></div><div className="mg-comp-cell"><div className="mg-comp-val">₹4.44L</div><div className="mg-comp-label">Annualized Net</div></div><div className="mg-comp-cell"><div className="mg-comp-val">ESOP</div><div className="mg-comp-label">Employee Stock Ownership Plan Eligible</div></div></div></div></section>
<section className="mg-s"><div className="mg-c"><div className="mg-label mgv">Consumer Intel</div><div className="mg-title mgv">30 SAM<br/><em>Survey.</em></div><p className="mg-body mgv" style={{marginBottom:'1rem'}}>Advanced consumer insights framework for the premium Almond Milk system.</p><div className="mg-survey mgv">{SURVEY.map((s,i)=>(<div key={i} className="mg-survey-part"><h4>{s.label}</h4><p>{s.desc}</p></div>))}</div></div></section>
<div className="mg-soul"><div className="mg-c"><div className="mg-label mgv" style={{textAlign:'center'}}>The Governance Philosophy</div><blockquote className="mg-soul-q mgv">&ldquo;Design operations at scale requires <strong>strategic clarity</strong>, not just creative talent. The transition from maker to manager demands a new language — one that speaks in <strong>milestones, KPIs, and cross-functional alignment</strong> rather than pixels and pantones.&rdquo;</blockquote></div></div>
<div className="mg-c"><div className="mg-footer"><div className="mg-label">Master Governance Index {'>>>'}</div><div className="mg-footer-links">{NAV.map(l=>(<Link key={l} href="/jusamazin" className="mg-footer-link">{l}</Link>))}</div><div className="mg-footer-meta"><span>© 2023–2026</span><span>My Journey @ Jus&apos;Amazin</span></div></div></div>
<Script id="mg-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.mgv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.mgv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.mgv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
</>)}

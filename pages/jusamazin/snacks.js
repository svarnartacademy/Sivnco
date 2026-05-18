import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

const PILLARS = [
  {h:"The ₹10 Experiment",b:"Reimagining traditional regional Indian snacking structures for mass-market commercial accessibility. Designing a high-impact packaging blueprint for the entry-level ₹10 Crushed Peanut Chikki."},
  {h:"Lamination Strategy",b:"Coordinating with packaging engineers to execute the signature premium 'Just WOW' lamination process to stand out on traditional retail shelves."},
  {h:"Portfolio Expansion",b:"Managing parallel digital asset stabilization for extended lines, including Multi-Seed Crackers and the vibrant Pancake Mix Berry Blast range."},
  {h:"Market Placement",b:"Optimizing product assets for high-volume quick-commerce integration and direct marketplace search discovery."},
]
const FEEDBACK = [
  {n:"Shilpa Moglishetty",r:"Co-Founder",q:"The ₹10 Chikki layout captured exactly the cultural nostalgia we wanted, proving that affordable products can look premium."},
  {n:"Amarjit Singh",r:"Retail Distribution Head",q:"The 'Just WOW' lamination process gave us immediate leverage in store onboarding, creating standout visibility on the racks."},
  {n:"Manoj",r:"Production Head",q:"Its so fun and out of blue, I don't find it as a typical but it works great as it sells in the market."},
]
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--sn-bg:#0A0906;--sn-white:#F0EDE6;--sn-accent:#D4960A;--sn-blue:#0066FF;--sn-muted:rgba(240,237,230,0.45);--sn-border:rgba(240,237,230,0.08);--sn-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html{scroll-behavior:smooth}body{background:var(--sn-bg);color:var(--sn-white);font-family:var(--S);overflow-x:hidden}a{color:inherit;text-decoration:none}
.sn-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5vw;background:rgba(10,9,6,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--sn-border)}
.sn-logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}.sn-back{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;padding:.55rem 1.4rem;border:1px solid var(--sn-border);border-radius:40px;transition:.3s}.sn-back:hover{border-color:var(--sn-accent);color:var(--sn-accent)}
.sn-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--sn-border)}
.sn-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 75%,rgba(212,150,10,0.18),transparent 55%),radial-gradient(ellipse at 80% 25%,rgba(0,102,255,0.08),transparent 55%),var(--sn-bg);animation:snPulse 10s ease-in-out infinite}
@keyframes snPulse{0%,100%{opacity:.85}50%{opacity:1}}
.sn-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.sn-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--sn-accent);margin-bottom:2rem}
.sn-hero h1{font-family:var(--D);font-size:clamp(5rem,14vw,14rem);line-height:.85}.sn-hero h1 span{color:var(--sn-accent)}
.sn-hero h1 em{font-style:normal;color:var(--sn-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1rem;line-height:1.6;max-width:580px}
.sn-c{max-width:1200px;margin:0 auto;padding:0 5vw}.sn-s{padding:8rem 0;border-bottom:1px solid var(--sn-border)}
.sn-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--sn-accent);margin-bottom:1.5rem}
.sn-title{font-family:var(--D);font-size:clamp(2.8rem,6vw,6.5rem);line-height:.9;margin-bottom:2.5rem}.sn-title em{font-style:normal;color:var(--sn-muted);font-family:var(--S);font-weight:300}
.sn-body{font-size:1.1rem;line-height:1.9;color:var(--sn-muted);max-width:640px}
.sn-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--sn-border);min-height:80vh}
.sn-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--sn-bg)}
.sn-pill-right{display:flex;flex-direction:column}
.sn-pill-card{background:var(--sn-bg);padding:4rem;border-bottom:1px solid var(--sn-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.sn-pill-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,150,10,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.sn-pill-card:hover::after{opacity:1}
.sn-pill-card h3{font-family:var(--D);font-size:clamp(2rem,4vw,4rem);margin-bottom:1.5rem}.sn-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--sn-muted);max-width:520px}
.sn-stack{display:flex;flex-direction:column;gap:1px;background:var(--sn-border);border:1px solid var(--sn-border);margin-top:3rem}
.sn-stack-item{background:var(--sn-bg);padding:2rem 2.5rem;display:flex;gap:1.5rem;align-items:center;position:relative;overflow:hidden}
.sn-stack-item::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,150,10,0.06),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.sn-stack-item:hover::after{opacity:1}
.sn-stack-dot{width:8px;height:8px;border-radius:50%;background:var(--sn-accent);flex-shrink:0}
.sn-stack-text h4{font-family:var(--D);font-size:1.2rem;margin-bottom:.3rem}.sn-stack-text p{font-size:.9rem;color:var(--sn-muted);line-height:1.6}
.sn-metrics{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--sn-border);margin-top:3rem}
.sn-metric{background:var(--sn-bg);padding:3rem;text-align:center;border:2px solid var(--sn-accent);position:relative;overflow:hidden}
.sn-metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,150,10,0.1),transparent 70%)}
.sn-metric-n{font-family:var(--D);font-size:clamp(2.5rem,5vw,4.5rem);color:var(--sn-accent);line-height:1;position:relative}.sn-metric-l{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--sn-muted);margin-top:.8rem;position:relative;line-height:1.7}
.sn-soul{background:rgba(212,150,10,0.02);padding:10rem 0;text-align:center}
.sn-soul-q{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--sn-muted);max-width:780px;margin:0 auto;font-weight:300}.sn-soul-q strong{color:var(--sn-white);font-weight:500}
.sn-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--sn-border)}.sn-gal-item{background:var(--sn-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-size:.7rem;letter-spacing:.12em;color:rgba(240,237,230,0.08);transition:background .3s}.sn-gal-item:hover{background:rgba(212,150,10,0.06)}
.sn-fb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--sn-border);border:1px solid var(--sn-border)}.sn-fb-card{background:var(--sn-bg);padding:2.5rem;display:flex;flex-direction:column;gap:1.2rem;position:relative;overflow:hidden}.sn-fb-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,150,10,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.sn-fb-card:hover::after{opacity:1}
.sn-fb-q{font-size:1rem;line-height:1.85;color:var(--sn-muted);font-style:italic;flex:1}.sn-fb-n{font-family:var(--D);font-size:1.1rem}.sn-fb-r{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--sn-accent);margin-top:.15rem}
.sn-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--sn-border)}.sn-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}.sn-footer-link{font-family:var(--D);font-size:clamp(1.4rem,3vw,2.2rem);color:var(--sn-muted);transition:color .3s}.sn-footer-link:hover{color:var(--sn-accent)}
.sn-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:rgba(240,237,230,0.25);padding-top:2rem;border-top:1px solid var(--sn-border)}
.snv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}.snv.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){.sn-pillars{grid-template-columns:1fr}.sn-pill-left{position:relative;height:auto;padding:3rem 2rem}.sn-pill-card{padding:3rem 2rem;min-height:auto}.sn-metrics{grid-template-columns:1fr}.sn-gallery{grid-template-columns:1fr 1fr}.sn-fb-grid{grid-template-columns:1fr}.sn-footer-meta{flex-direction:column;gap:.8rem}}
@media(max-width:540px){.sn-hero h1{font-size:clamp(3.5rem,16vw,8rem)}.sn-s{padding:5rem 0}.sn-soul{padding:6rem 0}.sn-gallery{grid-template-columns:1fr}}
`
const NAV = ['Core Packaging','Superfoods','Brand Guidelines','Bars','Jars','Marketing','Management']
export default function Snacks(){return(<>
<Head><meta charSet="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Snacks Category — Sivnco</title><meta name="description" content="Mass-market disruption — ₹10 Chikki experiment and snack portfolio scaling."/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/><style dangerouslySetInnerHTML={{__html:CSS}}/></Head>
<Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
<nav className="sn-nav"><Link href="/" className="sn-logo">SIVNCO<span style={{color:'var(--sn-accent)'}}>.</span></Link><Link href="/jusamazin" className="sn-back">← Case Study</Link></nav>
<div className="sn-hero"><div className="sn-hero-bg"/><div className="sn-hero-inner"><div className="sn-hero-tag">Mass-Market Experiments / Regional Snacking</div><h1><span>Snacks</span><br/>Category<em>Gully culture meets corporate scale. Bringing premium design architecture to ₹10 price points and mass-market retail shelves.</em></h1></div></div>
<section className="sn-s" style={{padding:0,borderBottom:'none'}}><div className="sn-pillars"><div className="sn-pill-left"><div className="sn-label snv">Strategy</div><div className="sn-title snv">Mass-Market<br/><em>Disruption.</em></div><p className="sn-body snv">Proving that premium design language can thrive at any price point — from ₹10 Chikki to multi-seed crackers.</p></div><div className="sn-pill-right">{PILLARS.map((p,i)=>(<div key={i} className="sn-pill-card snv"><div className="sn-label">{`0${i+1}`}</div><h3>{p.h}</h3><p>{p.b}</p></div>))}</div></div></section>
<section className="sn-s"><div className="sn-c"><div className="sn-label snv">Repository</div><div className="sn-title snv">Asset<br/><em>Hub.</em></div><div className="sn-stack snv"><div className="sn-stack-item"><div className="sn-stack-dot"/><div className="sn-stack-text"><h4>Multi-Seed Crackers</h4><p>E-commerce asset synchronization pipeline</p></div></div><div className="sn-stack-item"><div className="sn-stack-dot"/><div className="sn-stack-text"><h4>Pancake Mix Berry Blast</h4><p>Core packaging asset alignment across fast-commerce networks</p></div></div><div className="sn-stack-item"><div className="sn-stack-dot"/><div className="sn-stack-text"><h4>₹10 Crushed Peanut Chikki</h4><p>Mass-market packaging with premium &apos;Just WOW&apos; lamination</p></div></div></div></div></section>
<div className="sn-soul"><div className="sn-c"><div className="sn-label snv" style={{textAlign:'center'}}>The Democratization of Design</div><blockquote className="sn-soul-q snv">&ldquo;Premium design shouldn&apos;t be locked behind high prices. Bringing clean visual architecture and <strong>superior lamination to a ₹10 product</strong> shifts consumer expectations and <strong>disrupts mass-market retail conventions</strong>.&rdquo;</blockquote></div></div>
<section className="sn-s"><div className="sn-c"><div className="sn-label snv">Metrics</div><div className="sn-title snv">Category<br/><em>Acceleration.</em></div><div className="sn-metrics snv"><div className="sn-metric"><div className="sn-metric-n">₹10</div><div className="sn-metric-l">Price point entry for Crushed Peanut Chikki</div></div><div className="sn-metric"><div className="sn-metric-n">3 SKUs</div><div className="sn-metric-l">Core systems stabilized across snack repository</div></div></div></div></section>
<section className="sn-s" style={{padding:0}}><div className="sn-gallery">{['CHIKKI VECTOR','LAMINATION DETAIL','CRACKER LISTING','PANCAKE MIX','SHELF PLACEMENT','PACKAGING FILM'].map(g=>(<div key={g} className="sn-gal-item snv">{g}</div>))}</div></section>
<section className="sn-s"><div className="sn-c"><div className="sn-label snv">Voices</div><div className="sn-title snv">Feedback<br/><em>Matrix.</em></div><div className="sn-fb-grid">{FEEDBACK.map((fb,i)=>(<div key={i} className="sn-fb-card snv"><div className="sn-fb-q">&ldquo;{fb.q}&rdquo;</div><div><div className="sn-fb-n">{fb.n}</div><div className="sn-fb-r">{fb.r}</div></div></div>))}</div></div></section>
<div className="sn-c"><div className="sn-footer"><div className="sn-label">Category Directories {'>>>'}</div><div className="sn-footer-links">{NAV.map(l=>(<Link key={l} href="/jusamazin" className="sn-footer-link">{l}</Link>))}</div><div className="sn-footer-meta"><span>© 2023–2026</span><span>My Journey @ Jus&apos;Amazin</span></div></div></div>
<Script id="sn-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.snv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.snv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.snv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
</>)}

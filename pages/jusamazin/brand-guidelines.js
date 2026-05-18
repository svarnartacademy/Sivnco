import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

const PILLARS = [
  {h:"Coherent Team Deployment",b:"Building a brand identity system is ineffective if internal teams cannot deploy assets accurately. This master document was engineered to decentralize creative production across the entire Jus'Amazin ecosystem."},
  {h:"Token Logic",b:"Defining exact color system allocations. High-voltage Electric Blue handles technical digital focus points, while Nostalgic Ochre brings in heritage design textures."},
  {h:"Corporate Architecture",b:"Integrating corporate entities into standard document designs. Codifying legal identities and business details into an immutable corporate style guide."},
  {h:"System Scalability",b:"Providing direct layout models that allow product marketing leads and remote design partners to output completely cohesive assets independently without quality loss."},
]
const TOKENS = [
  {label:'Primary Accent',color:'#0066FF',desc:'Digital focus lines, UI elements, structural focus blocks'},
  {label:'Secondary Accent',color:'#D4960A',desc:'Traditional Indian snack heritage textures'},
  {label:'Typography — Display',color:'#F0EDE6',desc:'Massive Grotesque Sans-Serif with intentional overlap'},
  {label:'Typography — Body',color:'#7F8C8D',desc:'Geometric Sans-Serif for dense regulatory layouts'},
]
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg-bg:#0A0906;--bg-white:#F0EDE6;--bg-accent:#0066FF;--bg-ochre:#D4960A;--bg-muted:rgba(240,237,230,0.45);--bg-border:rgba(240,237,230,0.08);--bg-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html{scroll-behavior:smooth}body{background:var(--bg-bg);color:var(--bg-white);font-family:var(--S);overflow-x:hidden}a{color:inherit;text-decoration:none}
.bg-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5vw;background:rgba(10,9,6,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--bg-border)}
.bg-logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}.bg-back{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;padding:.55rem 1.4rem;border:1px solid var(--bg-border);border-radius:40px;transition:.3s}.bg-back:hover{border-color:var(--bg-accent);color:var(--bg-accent)}
.bg-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--bg-border)}
.bg-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 80%,rgba(0,102,255,0.15),transparent 55%),radial-gradient(ellipse at 80% 30%,rgba(212,150,10,0.1),transparent 55%),var(--bg-bg)}
.bg-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.bg-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--bg-accent);margin-bottom:2rem}
.bg-hero h1{font-family:var(--D);font-size:clamp(4rem,12vw,12rem);line-height:.85}.bg-hero h1 span{color:var(--bg-accent)}
.bg-hero h1 em{font-style:normal;color:var(--bg-muted);font-family:var(--S);font-weight:300;display:block;font-size:.35em;margin-top:1rem;line-height:1.6;max-width:600px}
.bg-c{max-width:1200px;margin:0 auto;padding:0 5vw}.bg-s{padding:8rem 0;border-bottom:1px solid var(--bg-border)}
.bg-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--bg-accent);margin-bottom:1.5rem}
.bg-title{font-family:var(--D);font-size:clamp(2.8rem,6vw,6.5rem);line-height:.9;margin-bottom:2.5rem}.bg-title em{font-style:normal;color:var(--bg-muted);font-family:var(--S);font-weight:300}
.bg-body{font-size:1.1rem;line-height:1.9;color:var(--bg-muted);max-width:640px}
.bg-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--bg-border);min-height:80vh}
.bg-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--bg-bg)}
.bg-pill-right{display:flex;flex-direction:column}
.bg-pill-card{background:var(--bg-bg);padding:4rem;border-bottom:1px solid var(--bg-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.bg-pill-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.bg-pill-card:hover::after{opacity:1}
.bg-pill-card h3{font-family:var(--D);font-size:clamp(2rem,4vw,4rem);margin-bottom:1.5rem}.bg-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--bg-muted);max-width:520px}
.bg-tokens{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--bg-border);border:1px solid var(--bg-border);margin-top:3rem}
.bg-token{background:var(--bg-bg);padding:2.5rem;text-align:center;position:relative;overflow:hidden}
.bg-token::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.bg-token:hover::after{opacity:1}
.bg-token-swatch{width:48px;height:48px;border-radius:50%;margin:0 auto 1rem;border:2px solid var(--bg-border)}
.bg-token-label{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--bg-accent);margin-bottom:.5rem}.bg-token-desc{font-size:.9rem;line-height:1.6;color:var(--bg-muted)}
.bg-corp{background:var(--bg-glass);border:1px solid var(--bg-border);padding:3rem;margin-top:3rem;font-family:var(--M);font-size:.7rem;line-height:2.2;color:var(--bg-muted);letter-spacing:.05em}
.bg-corp strong{color:var(--bg-white);font-weight:600}
.bg-metrics{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--bg-border);margin-top:3rem}
.bg-metric{background:var(--bg-bg);padding:3rem;text-align:center;position:relative;overflow:hidden;border:2px solid var(--bg-accent)}
.bg-metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.1),transparent 70%)}
.bg-metric-n{font-family:var(--D);font-size:clamp(3rem,7vw,6rem);color:var(--bg-accent);line-height:1;position:relative}.bg-metric-l{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--bg-muted);margin-top:.8rem;position:relative}
.bg-soul{background:rgba(0,102,255,0.02);padding:10rem 0;text-align:center}
.bg-soul-q{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--bg-muted);max-width:780px;margin:0 auto;font-weight:300}.bg-soul-q strong{color:var(--bg-white);font-weight:500}
.bg-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--bg-border)}.bg-gal-item{background:var(--bg-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-size:.7rem;letter-spacing:.12em;color:rgba(240,237,230,0.08);transition:background .3s}.bg-gal-item:hover{background:rgba(0,102,255,0.06)}
.bg-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--bg-border)}.bg-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}.bg-footer-link{font-family:var(--D);font-size:clamp(1.4rem,3vw,2.2rem);color:var(--bg-muted);transition:color .3s}.bg-footer-link:hover{color:var(--bg-accent)}
.bg-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:rgba(240,237,230,0.25);padding-top:2rem;border-top:1px solid var(--bg-border)}
.bgv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}.bgv.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){.bg-pillars{grid-template-columns:1fr}.bg-pill-left{position:relative;height:auto;padding:3rem 2rem}.bg-pill-card{padding:3rem 2rem;min-height:auto}.bg-tokens{grid-template-columns:repeat(2,1fr)}.bg-metrics{grid-template-columns:1fr}.bg-gallery{grid-template-columns:1fr 1fr}.bg-footer-meta{flex-direction:column;gap:.8rem}}
@media(max-width:540px){.bg-hero h1{font-size:clamp(3rem,14vw,7rem)}.bg-s{padding:5rem 0}.bg-soul{padding:6rem 0}.bg-gallery{grid-template-columns:1fr}.bg-tokens{grid-template-columns:1fr}}
`
const NAV = ['Core Packaging','Superfoods','Bars','Jars','Snacks','Marketing','Management']
export default function BrandGuidelines(){return(<>
<Head><meta charSet="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Brand Guidelines — Sivnco</title><meta name="description" content="The System Rulebook — comprehensive brand guidelines for Jus Amazin."/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/><style dangerouslySetInnerHTML={{__html:CSS}}/></Head>
<Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
<nav className="bg-nav"><Link href="/" className="bg-logo">SIVNCO<span style={{color:'var(--bg-accent)'}}>.</span></Link><Link href="/jusamazin" className="bg-back">← Case Study</Link></nav>
<div className="bg-hero"><div className="bg-hero-bg"/><div className="bg-hero-inner"><div className="bg-hero-tag">System Governance / Corporate Architecture</div><h1>Brand<br/><span>Guide</span>lines<em>The System Rulebook — a living brand bible engineered to decentralize creative execution across the entire organization.</em></h1></div></div>
<section className="bg-s" style={{padding:0,borderBottom:'none'}}><div className="bg-pillars"><div className="bg-pill-left"><div className="bg-label bgv">Framework</div><div className="bg-title bgv">The Brand<br/><em>Bible.</em></div><p className="bg-body bgv">A dynamic master system document that allows every team member to deploy brand-aligned assets independently.</p></div><div className="bg-pill-right">{PILLARS.map((p,i)=>(<div key={i} className="bg-pill-card bgv"><div className="bg-label">{`0${i+1}`}</div><h3>{p.h}</h3><p>{p.b}</p></div>))}</div></div></section>
<section className="bg-s"><div className="bg-c"><div className="bg-label bgv">Tokens</div><div className="bg-title bgv">Color &amp;<br/><em>Type Matrix.</em></div><div className="bg-tokens bgv">{TOKENS.map((t,i)=>(<div key={i} className="bg-token"><div className="bg-token-swatch" style={{background:t.color}}/><div className="bg-token-label">{t.label}</div><div className="bg-token-desc">{t.desc}</div></div>))}</div></div></section>
<section className="bg-s"><div className="bg-c"><div className="bg-label bgv">Corporate Identity</div><div className="bg-title bgv">Blueprint<br/><em>Parameters.</em></div><div className="bg-corp bgv"><strong>Corporate Entity:</strong> Jus Amazin Foods and Beverages Pvt. Ltd<br/><strong>CIN:</strong> U15499KA2017PTC099255<br/><strong>Registered HQ:</strong> No. 3/1, Chikkapanna Road, Prakruthi Layout, Hennur Village, Kalyan Nagar Post, Bangalore - 560043</div></div></section>
<div className="bg-soul"><div className="bg-c"><div className="bg-label bgv" style={{textAlign:'center'}}>Governance Philosophy</div><blockquote className="bg-soul-q bgv">&ldquo;Good design is <strong>programmatic</strong>. Exceptional design rules allow any cross-functional stakeholder to launch assets that look like they were <strong>handcrafted by the design director</strong> themselves.&rdquo;</blockquote></div></div>
<section className="bg-s"><div className="bg-c"><div className="bg-label bgv">Impact</div><div className="bg-title bgv">Design Ops<br/><em>Acceleration.</em></div><div className="bg-metrics bgv"><div className="bg-metric"><div className="bg-metric-n">40%</div><div className="bg-metric-l">Design Operations Efficiency Gain</div></div><div className="bg-metric"><div className="bg-metric-n">0</div><div className="bg-metric-l">Brand alignment errors post-integration</div></div></div></div></section>
<section className="bg-s" style={{padding:0}}><div className="bg-gallery">{['BRAND BOOK COVER','TYPOGRAPHY HIERARCHY','TEMPLATE RULES','COLOR SYSTEM','LOGO SAFETY ZONES','LAYOUT GRIDS'].map(g=>(<div key={g} className="bg-gal-item bgv">{g}</div>))}</div></section>
<div className="bg-c"><div className="bg-footer"><div className="bg-label">Master Index {'>>>'}</div><div className="bg-footer-links">{NAV.map(l=>(<Link key={l} href="/jusamazin" className="bg-footer-link">{l}</Link>))}</div><div className="bg-footer-meta"><span>© 2023–2026</span><span>My Journey @ Jus&apos;Amazin</span></div></div></div>
<Script id="bg-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.bgv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.bgv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.bgv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
</>)}

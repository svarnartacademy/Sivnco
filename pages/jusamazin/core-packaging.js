import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

const PILLARS = [
  {h:"The Challenge",b:"Jus'Amazin possessed high-quality products but zero coherent visual language across retail channels. Packaging was completely inconsistent between SKUs, causing near-zero shelf presence and poor visual authority."},
  {h:"Approach",b:"Pivoting towards an exhaustive master system design. Establishing programmatic structural elements that tie all future products into a unified brand family while maintaining instant category recall."},
  {h:"Implementation",b:"Developing a scalable design framework using explicit typographic hierarchies, geometric grids, and high-contrast color tags to command physical retail shelves."},
  {h:"Outcome",b:"A complete system turnaround that established unmistakable presence across fast-commerce networks and traditional hypermarkets alike."},
]
const FEEDBACK = [
  {n:"Jitin Kochhar",r:"Co-Founder, Jus'Amazin",q:"Shiv doesn't just design — he builds systems. The Jus'Amazin packaging is one of the most coherent brand rollouts I've seen for a D2C brand at our scale.",c:"leadership"},
  {n:"Shilpa Rao",r:"Brand Consultant",q:"What sets Shiv apart is his ability to blend art sensibility with commercial clarity. He understands the brief, then exceeds it — every single time.",c:"experts"},
]
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--cp-bg:#0A0906;--cp-white:#F0EDE6;--cp-accent:#0066FF;--cp-muted:rgba(240,237,230,0.45);--cp-border:rgba(240,237,230,0.08);--cp-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html{scroll-behavior:smooth}body{background:var(--cp-bg);color:var(--cp-white);font-family:var(--S);overflow-x:hidden}a{color:inherit;text-decoration:none}
.cp-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5vw;background:rgba(10,9,6,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--cp-border)}
.cp-logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}.cp-back{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;padding:.55rem 1.4rem;border:1px solid var(--cp-border);border-radius:40px;transition:.3s}.cp-back:hover{border-color:var(--cp-accent);color:var(--cp-accent)}
.cp-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--cp-border)}
.cp-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 75%,rgba(0,102,255,0.18),transparent 55%),radial-gradient(ellipse at 80% 20%,rgba(160,160,160,0.08),transparent 55%),var(--cp-bg);animation:cpShift 10s ease-in-out infinite}
@keyframes cpShift{0%,100%{opacity:.85}50%{opacity:1}}
.cp-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.cp-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--cp-accent);margin-bottom:2rem}
.cp-hero h1{font-family:var(--D);font-size:clamp(4.5rem,13vw,13rem);line-height:.85}.cp-hero h1 span{color:var(--cp-accent)}
.cp-hero h1 em{font-style:normal;color:var(--cp-muted);font-family:var(--S);font-weight:300;display:block;font-size:.35em;margin-top:1rem;line-height:1.6;max-width:600px}
.cp-c{max-width:1200px;margin:0 auto;padding:0 5vw}.cp-s{padding:8rem 0;border-bottom:1px solid var(--cp-border)}
.cp-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--cp-accent);margin-bottom:1.5rem}
.cp-title{font-family:var(--D);font-size:clamp(2.8rem,6vw,6.5rem);line-height:.9;margin-bottom:2.5rem}.cp-title em{font-style:normal;color:var(--cp-muted);font-family:var(--S);font-weight:300}
.cp-body{font-size:1.1rem;line-height:1.9;color:var(--cp-muted);max-width:640px}
.cp-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--cp-border);min-height:80vh}
.cp-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--cp-bg)}
.cp-pill-right{display:flex;flex-direction:column}
.cp-pill-card{background:var(--cp-bg);padding:4rem;border-bottom:1px solid var(--cp-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.cp-pill-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.cp-pill-card:hover::after{opacity:1}
.cp-pill-card h3{font-family:var(--D);font-size:clamp(2rem,4vw,4rem);margin-bottom:1.5rem}.cp-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--cp-muted);max-width:520px}
.cp-ba{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--cp-border);border:1px solid var(--cp-border);margin-top:3rem}
.cp-ba-side{background:var(--cp-bg);padding:3rem;position:relative;overflow:hidden}.cp-ba-side.after{background:rgba(0,102,255,0.03)}
.cp-ba-side::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.cp-ba-side:hover::after{opacity:1}
.cp-ba-tag{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;padding:.35rem 1rem;border:1px solid var(--cp-border);display:inline-block;border-radius:20px;margin-bottom:1.5rem}
.cp-ba-side.after .cp-ba-tag{border-color:var(--cp-accent);color:var(--cp-accent)}
.cp-ba-text{font-size:1.05rem;line-height:1.85;color:var(--cp-muted)}
.cp-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--cp-border);margin-top:3rem}
.cp-metric{background:var(--cp-bg);padding:3rem 2rem;text-align:center;position:relative;overflow:hidden}.cp-metric::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.1),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.cp-metric:hover::after{opacity:1}
.cp-metric-n{font-family:var(--D);font-size:clamp(3rem,6vw,5.5rem);color:var(--cp-accent);line-height:1}.cp-metric-l{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--cp-muted);margin-top:.6rem}
.cp-soul{background:rgba(0,102,255,0.02);padding:10rem 0;text-align:center}
.cp-soul-q{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--cp-muted);max-width:780px;margin:0 auto;font-weight:300}.cp-soul-q strong{color:var(--cp-white);font-weight:500}
.cp-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--cp-border)}
.cp-gal-item{background:var(--cp-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-size:.7rem;letter-spacing:.12em;color:rgba(240,237,230,0.08);transition:background .3s}.cp-gal-item:hover{background:rgba(0,102,255,0.06)}
.cp-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--cp-border);border:1px solid var(--cp-border)}
.cp-fb-card{background:var(--cp-bg);padding:2.5rem;display:flex;flex-direction:column;gap:1.2rem;position:relative;overflow:hidden}
.cp-fb-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(0,102,255,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.cp-fb-card:hover::after{opacity:1}
.cp-fb-q{font-size:1rem;line-height:1.85;color:var(--cp-muted);font-style:italic;flex:1}.cp-fb-n{font-family:var(--D);font-size:1.1rem}.cp-fb-r{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;color:var(--cp-accent);margin-top:.15rem}
.cp-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--cp-border)}
.cp-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}.cp-footer-link{font-family:var(--D);font-size:clamp(1.4rem,3vw,2.2rem);color:var(--cp-muted);transition:color .3s}.cp-footer-link:hover{color:var(--cp-accent)}
.cp-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:rgba(240,237,230,0.25);padding-top:2rem;border-top:1px solid var(--cp-border)}
.cpv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}.cpv.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){.cp-pillars{grid-template-columns:1fr}.cp-pill-left{position:relative;height:auto;padding:3rem 2rem}.cp-pill-card{padding:3rem 2rem;min-height:auto}.cp-ba{grid-template-columns:1fr}.cp-metrics{grid-template-columns:repeat(2,1fr)}.cp-gallery{grid-template-columns:1fr 1fr}.cp-fb-grid{grid-template-columns:1fr}.cp-footer-meta{flex-direction:column;gap:.8rem}}
@media(max-width:540px){.cp-hero h1{font-size:clamp(3rem,14vw,7rem)}.cp-s{padding:5rem 0}.cp-soul{padding:6rem 0}.cp-gallery{grid-template-columns:1fr}}
`
const NAV = ['Superfoods','Brand Guidelines','Bars','Jars','Snacks','Marketing','Management']
export default function CorePackaging(){return(<>
<Head><meta charSet="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Core Packaging Range — Sivnco</title><meta name="description" content="Rebuilding a D2C identity system across 15+ SKUs. 176% revenue growth."/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/><style dangerouslySetInnerHTML={{__html:CSS}}/></Head>
<Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
<nav className="cp-nav"><Link href="/" className="cp-logo">SIVNCO<span style={{color:'var(--cp-accent)'}}>.</span></Link><Link href="/jusamazin" className="cp-back">← Case Study</Link></nav>
<div className="cp-hero"><div className="cp-hero-bg"/><div className="cp-hero-inner"><div className="cp-hero-tag">Master Project / 2022–2026</div><h1>Core<br/><span>Packaging</span><br/>Range<em>Rebuilding a D2C identity system from scratch. 15+ SKUs unified under one visual architecture for unmistakable shelf presence.</em></h1></div></div>
<section className="cp-s" style={{padding:0,borderBottom:'none'}}><div className="cp-pillars"><div className="cp-pill-left"><div className="cp-label cpv">Strategy</div><div className="cp-title cpv">System<br/><em>Architecture.</em></div><p className="cp-body cpv">The strategic framework behind rebuilding an entire product ecosystem from zero visual coherence to unified retail dominance.</p></div><div className="cp-pill-right">{PILLARS.map((p,i)=>(<div key={i} className="cp-pill-card cpv"><div className="cp-label">{`0${i+1}`}</div><h3>{p.h}</h3><p>{p.b}</p></div>))}</div></div></section>
<section className="cp-s"><div className="cp-c"><div className="cp-label cpv">Transformation</div><div className="cp-title cpv">Before<br/><em>and after.</em></div><div className="cp-ba cpv"><div className="cp-ba-side"><div className="cp-ba-tag">Before — 2021</div><p className="cp-ba-text">No unified system. Every SKU looked like it belonged to a different brand. Complete lack of shelf-ready files and zero brand rationale documentation.</p></div><div className="cp-ba-side after"><div className="cp-ba-tag">After — 2022 Onwards</div><p className="cp-ba-text">15+ SKUs bound tightly by programmatic color logic, strict corporate typographic rules, and premium art directed lifestyle photography.</p></div></div></div></section>
<section className="cp-s"><div className="cp-c"><div className="cp-label cpv">Impact</div><div className="cp-title cpv">Commercial<br/><em>Validation.</em></div><div className="cp-metrics cpv"><div className="cp-metric"><div className="cp-metric-n">176%</div><div className="cp-metric-l">Revenue Growth</div></div><div className="cp-metric"><div className="cp-metric-n">2.5×</div><div className="cp-metric-l">Brand Recall Increase</div></div><div className="cp-metric"><div className="cp-metric-n">40%</div><div className="cp-metric-l">Design Ops Efficiency</div></div><div className="cp-metric"><div className="cp-metric-n">15+</div><div className="cp-metric-l">SKUs Deployed</div></div></div></div></section>
<div className="cp-soul"><div className="cp-c"><div className="cp-label cpv" style={{textAlign:'center'}}>The Design Thesis</div><blockquote className="cp-soul-q cpv">&ldquo;A brand cannot scale through standalone assets; it survives through <strong>rigorous systemic consistency</strong>. Rebuilding the core range wasn't about decorative styling — it was about constructing an <strong>unshakeable visual architecture</strong> that represents structural reliability and premium clean nutrition.&rdquo;</blockquote></div></div>
<section className="cp-s" style={{padding:0}}><div className="cp-gallery">{['HERO LINEUP','SHELF ARRAY','VARIANT MATRIX','LABEL DETAIL','LIFESTYLE SHOT','FULL PORTFOLIO'].map(g=>(<div key={g} className="cp-gal-item cpv">{g}</div>))}</div></section>
<section className="cp-s"><div className="cp-c"><div className="cp-label cpv">Voices</div><div className="cp-title cpv">The Feedback<br/><em>Matrix.</em></div><div className="cp-fb-grid">{FEEDBACK.map((fb,i)=>(<div key={i} className="cp-fb-card cpv"><div className="cp-fb-q">&ldquo;{fb.q}&rdquo;</div><div><div className="cp-fb-n">{fb.n}</div><div className="cp-fb-r">{fb.r}</div></div></div>))}</div></div></section>
<div className="cp-c"><div className="cp-footer"><div className="cp-label">Explore Systems {'>>>'}</div><div className="cp-footer-links">{NAV.map(l=>(<Link key={l} href="/jusamazin" className="cp-footer-link">{l}</Link>))}</div><div className="cp-footer-meta"><span>© 2023–2026</span><span>My Journey @ Jus&apos;Amazin</span></div></div></div>
<Script id="cp-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.cpv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.cpv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.cpv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
</>)}

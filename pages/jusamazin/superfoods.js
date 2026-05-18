import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

const PILLARS = [
  {h:"SFBP Inception",b:"The Superfood Back of Pack (SFBP) project targeted the complete re-engineering of the 500g and 1kg flexible pouch product lines. The mandate was to merge intense informational density with premium visual cleanliness."},
  {h:"Typography Rule",b:"Pivoting away from unstructured mixed casing. Implementing a strict design logic using lowercase nomenclature for ingredient variables and clean ampersand symbols to guarantee visual rhythm."},
  {h:"Regulatory Logic",b:"Meticulous parsing of typographic space — removing stray punctuation marks from headers like 'Ingredients' and 'Allergen Info' to eliminate visual clutter and ensure absolute compliance."},
  {h:"Compliance Scaling",b:"Optimizing layout parameters to successfully integrate updated commercial directives, extending certified shelf life from 9 months to a full 12 months."},
]
const SPEC_ROWS = [
  {param:'Body Font Color',prev:'Mixed / Gray',target:'Solid Black for clear shelf legibility'},
  {param:'Text Spacing',prev:'"Super Food"',target:'Unified "Superfood" — single word'},
  {param:'Key Typographic Casing',prev:'Heavily Capitalized',target:'Lowercase: "Flax seed", "dietary fiber", "omega-3"'},
  {param:'Shelf Life Certification',prev:'9 Months',target:'Upgraded to 12 Months'},
]
const NUTRITION = [
  {label:'Energy',value:'567.4 Kcal',note:'8.5% RDA per 30g serving'},
  {label:'Protein',value:'25.9 g',note:''},
  {label:'Total Carbs',value:'40.0 g',note:''},
  {label:'Dietary Fiber',value:'24.1 g',note:''},
  {label:'Total Fat',value:'26.1 g',note:'Saturated: 7.0 g'},
  {label:'Cholesterol',value:'0.0 mg',note:''},
  {label:'Added Sugar',value:'0.0 g',note:''},
]
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--sf-bg:#0A0906;--sf-white:#F0EDE6;--sf-accent:#7F8C8D;--sf-red:#E74C3C;--sf-muted:rgba(240,237,230,0.45);--sf-border:rgba(240,237,230,0.08);--sf-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html{scroll-behavior:smooth}body{background:var(--sf-bg);color:var(--sf-white);font-family:var(--S);overflow-x:hidden}a{color:inherit;text-decoration:none}
.sf-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5vw;background:rgba(10,9,6,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--sf-border)}
.sf-logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}.sf-back{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;padding:.55rem 1.4rem;border:1px solid var(--sf-border);border-radius:40px;transition:.3s}.sf-back:hover{border-color:var(--sf-accent);color:var(--sf-white)}
.sf-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--sf-border)}
.sf-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 80%,rgba(127,140,141,0.15),transparent 55%),radial-gradient(ellipse at 75% 25%,rgba(231,76,60,0.08),transparent 55%),var(--sf-bg)}
.sf-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%}
.sf-hero-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--sf-accent);margin-bottom:2rem}
.sf-hero h1{font-family:var(--D);font-size:clamp(4.5rem,13vw,13rem);line-height:.85}.sf-hero h1 span{color:var(--sf-accent)}
.sf-hero h1 em{font-style:normal;color:var(--sf-muted);font-family:var(--S);font-weight:300;display:block;font-size:.35em;margin-top:1rem;line-height:1.6;max-width:600px}
.sf-c{max-width:1200px;margin:0 auto;padding:0 5vw}.sf-s{padding:8rem 0;border-bottom:1px solid var(--sf-border)}
.sf-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--sf-accent);margin-bottom:1.5rem}
.sf-title{font-family:var(--D);font-size:clamp(2.8rem,6vw,6.5rem);line-height:.9;margin-bottom:2.5rem}.sf-title em{font-style:normal;color:var(--sf-muted);font-family:var(--S);font-weight:300}
.sf-body{font-size:1.1rem;line-height:1.9;color:var(--sf-muted);max-width:640px}
.sf-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--sf-border);min-height:80vh}
.sf-pill-left{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;padding:4rem;background:var(--sf-bg)}
.sf-pill-right{display:flex;flex-direction:column}
.sf-pill-card{background:var(--sf-bg);padding:4rem;border-bottom:1px solid var(--sf-border);min-height:50vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.sf-pill-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(127,140,141,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.sf-pill-card:hover::after{opacity:1}
.sf-pill-card h3{font-family:var(--D);font-size:clamp(2rem,4vw,4rem);margin-bottom:1.5rem}.sf-pill-card p{font-size:1.05rem;line-height:1.9;color:var(--sf-muted);max-width:520px}
.sf-spec-table{width:100%;border-collapse:collapse;margin-top:3rem;border:1px solid var(--sf-border)}
.sf-spec-table th,.sf-spec-table td{padding:1.2rem 1.5rem;text-align:left;border:1px solid var(--sf-border);font-size:.95rem}
.sf-spec-table th{font-family:var(--M);font-size:.55rem;letter-spacing:.18em;color:var(--sf-accent);background:rgba(127,140,141,0.05)}
.sf-spec-table td{color:var(--sf-muted)}.sf-spec-table td:last-child{color:var(--sf-white)}
.sf-nutrition{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--sf-border);border:1px solid var(--sf-border);margin-top:3rem}
.sf-nut-cell{background:var(--sf-bg);padding:2rem;text-align:center;position:relative;overflow:hidden}
.sf-nut-cell::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(127,140,141,0.08),transparent 70%);opacity:0;transition:.4s;pointer-events:none}.sf-nut-cell:hover::after{opacity:1}
.sf-nut-val{font-family:var(--D);font-size:clamp(2rem,4vw,3.5rem);color:var(--sf-accent);line-height:1}.sf-nut-label{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:var(--sf-muted);margin-top:.5rem}.sf-nut-note{font-family:var(--M);font-size:.4rem;color:var(--sf-red);margin-top:.3rem;letter-spacing:.1em}
.sf-soul{background:rgba(127,140,141,0.02);padding:10rem 0;text-align:center}
.sf-soul-q{font-family:var(--S);font-size:clamp(1.15rem,2vw,1.7rem);line-height:2;color:var(--sf-muted);max-width:780px;margin:0 auto;font-weight:300}.sf-soul-q strong{color:var(--sf-white);font-weight:500}
.sf-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--sf-border)}.sf-gal-item{background:var(--sf-glass);aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-size:.7rem;letter-spacing:.12em;color:rgba(240,237,230,0.08);transition:background .3s}.sf-gal-item:hover{background:rgba(127,140,141,0.06)}
.sf-footer{padding:4rem 0 2.5rem;border-top:1px solid var(--sf-border)}.sf-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3rem}.sf-footer-link{font-family:var(--D);font-size:clamp(1.4rem,3vw,2.2rem);color:var(--sf-muted);transition:color .3s}.sf-footer-link:hover{color:var(--sf-accent)}
.sf-footer-meta{display:flex;justify-content:space-between;font-family:var(--M);font-size:.5rem;letter-spacing:.15em;color:rgba(240,237,230,0.25);padding-top:2rem;border-top:1px solid var(--sf-border)}
.sfv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}.sfv.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){.sf-pillars{grid-template-columns:1fr}.sf-pill-left{position:relative;height:auto;padding:3rem 2rem}.sf-pill-card{padding:3rem 2rem;min-height:auto}.sf-nutrition{grid-template-columns:repeat(2,1fr)}.sf-gallery{grid-template-columns:1fr 1fr}.sf-footer-meta{flex-direction:column;gap:.8rem}.sf-spec-table{font-size:.85rem}}
@media(max-width:540px){.sf-hero h1{font-size:clamp(3rem,14vw,7rem)}.sf-s{padding:5rem 0}.sf-soul{padding:6rem 0}.sf-gallery{grid-template-columns:1fr}.sf-nutrition{grid-template-columns:1fr 1fr}}
`
const NAV = ['Core Packaging','Brand Guidelines','Bars','Jars','Snacks','Marketing','Management']
export default function Superfoods(){return(<>
<Head><meta charSet="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Superfoods Range — Sivnco</title><meta name="description" content="Technical packaging specification for Jus Amazin Superfoods flexible pouch range."/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/><style dangerouslySetInnerHTML={{__html:CSS}}/></Head>
<Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive"/>
<nav className="sf-nav"><Link href="/" className="sf-logo">SIVNCO<span style={{color:'var(--sf-accent)'}}>.</span></Link><Link href="/jusamazin" className="sf-back">← Case Study</Link></nav>
<div className="sf-hero"><div className="sf-hero-bg"/><div className="sf-hero-inner"><div className="sf-hero-tag">Packaging Spec / Flexible Pouches</div><h1>Super<span>foods</span><br/>Range<em>Re-engineering the 500g and 1kg flexible pouch product lines. Merging dense nutritional data with premium visual cleanliness.</em></h1></div></div>
<section className="sf-s" style={{padding:0,borderBottom:'none'}}><div className="sf-pillars"><div className="sf-pill-left"><div className="sf-label sfv">Strategy</div><div className="sf-title sfv">Technical<br/><em>Precision.</em></div><p className="sf-body sfv">The regulatory and typographic framework that governs every millimeter of the superfood packaging system.</p></div><div className="sf-pill-right">{PILLARS.map((p,i)=>(<div key={i} className="sf-pill-card sfv"><div className="sf-label">{`0${i+1}`}</div><h3>{p.h}</h3><p>{p.b}</p></div>))}</div></div></section>
<section className="sf-s"><div className="sf-c"><div className="sf-label sfv">Corrections</div><div className="sf-title sfv">Spec<br/><em>Adjustments.</em></div><table className="sf-spec-table sfv"><thead><tr><th>Parameter</th><th>Previous</th><th>Target</th></tr></thead><tbody>{SPEC_ROWS.map((r,i)=>(<tr key={i}><td>{r.param}</td><td>{r.prev}</td><td>{r.target}</td></tr>))}</tbody></table></div></section>
<section className="sf-s"><div className="sf-c"><div className="sf-label sfv">Data</div><div className="sf-title sfv">Nutritional<br/><em>Blueprint.</em></div><p className="sf-body sfv" style={{marginBottom:'1rem'}}>Per 100g standard — verified nutritional artifact panel.</p><div className="sf-nutrition sfv">{NUTRITION.map((n,i)=>(<div key={i} className="sf-nut-cell"><div className="sf-nut-val">{n.value}</div><div className="sf-nut-label">{n.label}</div>{n.note&&<div className="sf-nut-note">{n.note}</div>}</div>))}</div></div></section>
<div className="sf-soul"><div className="sf-c"><div className="sf-label sfv" style={{textAlign:'center'}}>The Technical Standard</div><blockquote className="sf-soul-q sfv">&ldquo;In consumer goods packaging, <strong>accuracy is an aesthetic priority</strong>. If a layout lacks structural precision, consumer trust breaks down <strong>instantly on the shelf</strong>. Every font weight, every casing decision, every regulatory line — it all compounds into either credibility or chaos.&rdquo;</blockquote></div></div>
<section className="sf-s" style={{padding:0}}><div className="sf-gallery">{['POUCH FRONT 500G','POUCH BACK PANEL','SEAM DETAIL','TYPOGRAPHY MACRO','NUTRITION LABEL','SHELF LINEUP'].map(g=>(<div key={g} className="sf-gal-item sfv">{g}</div>))}</div></section>
<div className="sf-c"><div className="sf-footer"><div className="sf-label">System Directories {'>>>'}</div><div className="sf-footer-links">{NAV.map(l=>(<Link key={l} href="/jusamazin" className="sf-footer-link">{l}</Link>))}</div><div className="sf-footer-meta"><span>© 2023–2026</span><span>My Journey @ Jus&apos;Amazin</span></div></div></div>
<Script id="sf-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.sfv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.sfv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.sfv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
</>)}

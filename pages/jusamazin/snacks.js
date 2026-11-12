import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    num: "01",
    h: "Making Individual Packs Work Together",
    t: "FAMILY_ARCHITECTURE",
    b: "The snack-packaging work brought several products into a coordinated family. I developed artwork across nuts, chikki and millet snacks, working with different product names, pack sizes and information requirements."
  },
  {
    num: "02",
    h: "Protecting the System Through Production",
    t: "PREPRESS_COORDINATION",
    b: "Beyond the initial artwork, I worked on format adaptations, vendor proofs and corrections before print release. The case shows the relationship between family-level visual decisions and the detail required to reproduce them consistently."
  },
  {
    num: "03",
    h: "Cylindrical Composite Canisters",
    t: "ROTATIONAL_LABEL_DESIGN",
    b: "Engineered rotational 360° label architecture for composite cans and canisters across Multi-Seed Crackers, 5G Seed Trail Mix, Cookies, and Baked Nippat, establishing strong shelf authority."
  },
  {
    num: "04",
    h: "The ₹10 Commercial Format",
    t: "DEMOCRATIZING_CLEAN_DESIGN",
    b: "Reimagined traditional regional Indian snacking structures for mass-market commercial accessibility, designing high-impact packaging for the entry-level ₹10 Crushed Peanut Chikki."
  }
]

const METRICS = [
  { n: "₹10", l: "Accessible Price Point for Crushed Peanut Chikki" },
  { n: "4 Formats", l: "Canisters, Stand-Up Pouches, Sachets & Chikki Wrappers" },
  { n: "Commercial", l: "Retail Modern Trade & Quick-Commerce Deployments" },
  { n: "In-House", l: "Artwork Adaptation, Prepress Proofing & Vendor Approvals" }
]

const GALLERY = [
  {
    id: "cracker_can",
    title: "Multi-Seed Cracker Canister (120g)",
    desc: "360° cylindrical composite canister render with airtight freshness seal and structured claim badges.",
    src: "/images/jusamazin/cans/multiseed_cracker_can.png"
  },
  {
    id: "trail_mix_can",
    title: "5G Seed Trail Mix Canister (175g)",
    desc: "High-protein daily seed blend in rigid canister format engineered for desk and pantry snacking.",
    src: "/images/jusamazin/cans/trail_mix_can.png"
  },
  {
    id: "dont_be_hangry",
    title: "Don't Be Hangry — Impulse Snack Pouch",
    desc: "Vibrant checkout impulse packaging designed to arrest hunger triggers with bold clean-label typography.",
    src: "/images/jusamazin/cans/dont_be_hangry_pouch.png"
  },
  {
    id: "jowar_puffs",
    title: "Jowar Puffs Magic Masala (35g)",
    desc: "Roasted ancient grain puff snacking pouch with high-contrast color blocking and spice visual hierarchy.",
    src: "/images/jusamazin/cans/jowar_puffs_magic_masala.png"
  },
  {
    id: "millet_mixture",
    title: "Millet Mixture Magic Masala (30g)",
    desc: "Traditional Indian mixture snack reinvented with roasted millets and clean cold-pressed oils.",
    src: "/images/jusamazin/cans/millet_mixture_magic_masala.png"
  },
  {
    id: "chikki_proof",
    title: "Rotogravure ₹10 Chikki Wrapper Proof",
    desc: "Production press proof sheet verifying lamination density, barcode scan tolerances, and legal nutritional grids.",
    src: "/images/jusamazin/snacks/chikki_print_proof.jpg"
  }
]

const PRODUCTION_CRITERIA = [
  {
    n: "360° Rotational Seam Alignment",
    r: "Canister Engineering",
    q: "Calibrated composite canister dielines to prevent seam overlap on nutritional declarations and mandatory brand badges."
  },
  {
    n: "Rotogravure Prepress Review",
    r: "Print Production",
    q: "Supervised cylinder proofs and color separation cards for flexible film packaging, verifying legal text legibility and registration."
  },
  {
    n: "Family-Level System Coherence",
    r: "Visual Direction",
    q: "Maintained recognizable brand tokens and color hierarchies across disparate formats ranging from tiny wrappers to tall canisters."
  },
  {
    n: "Substrate & Foil Density",
    r: "Material Calibration",
    q: "Proofed white underprint densities on metallic substrate films to ensure colors retain brilliance under store fluorescent lights."
  }
]

const NAV = [
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Lil\'Stars (Kids)', h: '/jusamazin/lilstars' },
  { l: 'Mom2B (Maternal)', h: '/jusamazin/mom2b' },
  { l: 'Retail POS & Spatial', h: '/jusamazin/retail-pos' },
  { l: 'Core Packaging', h: '/jusamazin/core-packaging' },
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Bars', h: '/jusamazin/bars' },
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --sn-bg:#0A0906;--sn-white:#F0EDE6;--sn-orange:#E76F51;--sn-orange-dark:#C85A3F;
  --sn-muted:rgba(240,237,230,0.65);--sn-border:rgba(240,237,230,0.1);
  --D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth;overflow-x:clip!important;max-width:100vw!important}
body{background:var(--sn-bg);color:var(--sn-white);font-family:var(--S);overflow-x:clip!important;max-width:100vw!important}
a{color:inherit;text-decoration:none}

.sn-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--sn-border)}
.sn-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 75% 25%,rgba(231,111,81,0.22),transparent 60%),radial-gradient(ellipse at 25% 75%,rgba(200,90,63,0.12),transparent 55%),var(--sn-bg);animation:snPulse 12s ease-in-out infinite}
@keyframes snPulse{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}}
.sn-hero-inner{position:relative;z-index:2;padding:0 5vw 6rem;width:100%}
.sn-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4rem,11vw,11.5rem);line-height:0.95;letter-spacing:-0.03em}
.sn-hero h1 span{color:var(--sn-orange)}
.sn-hero h1 em{font-style:normal;color:var(--sn-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.6;max-width:680px}

.sn-s{padding:7rem 0;border-bottom:1px solid var(--sn-border)}
.sn-c{max-width:1280px;margin:0 auto;padding:0 5vw}
.sn-label{font-family:var(--M);font-size:.65rem;letter-spacing:.25em;color:var(--sn-orange);margin-bottom:1.5rem;text-transform:uppercase}
.sn-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,5.5vw,5.5rem);line-height:1.05;margin-bottom:2rem}
.sn-title em{font-style:normal;color:var(--sn-muted);font-family:var(--S);font-weight:300}
.sn-body{font-size:1.1rem;line-height:1.9;color:var(--sn-muted);max-width:720px}

.sn-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:4rem}
.sn-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--sn-border);border-radius:28px;padding:3rem;position:relative;overflow:hidden;transition:border-color .3s}
.sn-pill-card:hover{border-color:rgba(231,111,81,0.4)}
.sn-pill-num{font-family:var(--D);font-weight:900;font-size:3rem;color:rgba(231,111,81,0.25);margin-bottom:1rem}
.sn-pill-tag{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--sn-orange);margin-bottom:.8rem}
.sn-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.6rem;margin-bottom:1rem;color:var(--sn-white)}
.sn-pill-card p{font-size:1rem;line-height:1.8;color:var(--sn-muted)}

.sn-metrics-strip{display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:3rem}
.sn-metric-card{flex:1 1 calc(25% - 1.5rem);min-width:200px;background:rgba(240,237,230,0.02);border:1px solid var(--sn-border);border-radius:20px;padding:2rem;text-align:center}
.sn-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2rem,3.8vw,3.2rem);color:var(--sn-orange);line-height:1}
.sn-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.16em;color:var(--sn-muted);margin-top:.8rem;line-height:1.6}

.sn-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem}
.sn-item{background:rgba(240,237,230,0.02);border:1px solid var(--sn-border);border-radius:32px;overflow:hidden;transition:border-color .3s,transform .3s}
.sn-item:hover{border-color:rgba(231,111,81,0.4);transform:scale(1.015)}
.sn-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.sn-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.sn-item:hover .sn-img-wrap img{transform:scale(1.05)}
.sn-info{padding:2rem 2.2rem;display:flex;flex-direction:column;gap:.6rem}
.sn-item-title{font-family:var(--D);font-weight:900;font-size:1.3rem}
.sn-item-desc{font-size:.92rem;line-height:1.75;color:var(--sn-muted)}

.sn-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--sn-border)}
.sn-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(231,111,81,0.1),transparent 65%)}
.sn-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.sn-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.sn-soul-q strong{color:var(--sn-white);font-weight:500}

.sn-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.sn-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--sn-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.sn-fb-q{font-size:1.02rem;line-height:1.85;color:var(--sn-muted);font-style:italic;flex:1}
.sn-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.sn-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--sn-orange);margin-top:.2rem}

.sn-footer{padding:5rem 0 3rem;border-top:1px solid var(--sn-border)}
.sn-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.sn-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--sn-muted);transition:color .3s}
.sn-footer-link:hover{color:var(--sn-orange)}

.snv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.snv.vis{opacity:1;transform:translateY(0)}

@media(max-width:1100px){
  .sn-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:900px){
  .sn-pillars,.sn-grid,.sn-fb-grid{grid-template-columns:1fr}
  .sn-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .sn-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function SnacksPage() {
  return (
    <>
      <Head>
        <title>Savoury Snacks — A Family Built to Scale | SIVNCO</title>
        <meta name="description" content="A coordinated packaging family across savoury snacks and chikki, developed through artwork and production proofing by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/snacks" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/work" backLabel="← Work Directory" />

      <div className="sn-hero">
        <div className="sn-hero-bg" />
        <div className="sn-hero-inner">
          <div className="br-label acid mb-3">■ 08 // SAVOURY SNACKS &middot; A FAMILY BUILT TO SCALE</div>
          <h1>
            Savoury<br /><span>Snacks</span>
            <em>
              A coordinated packaging family across savoury snacks and chikki, developed through artwork, multi-format adaptation, and production proofing.
            </em>
          </h1>
        </div>
      </div>

      <section className="sn-s">
        <div className="sn-c">
          <div className="sn-label snv">Strategic Intent</div>
          <div className="sn-title snv">
            Making Individual Packs<br /><em>Work Together.</em>
          </div>
          <p className="sn-body snv">
            The snack-packaging work brought several products into a coordinated family. I developed artwork across nuts, chikki and millet snacks, working with different product names, pack sizes and information requirements.
          </p>

          <div className="sn-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="sn-pill-card snv">
                <div className="sn-pill-num">{p.num}</div>
                <div className="sn-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sn-s">
        <div className="sn-c">
          <div className="sn-label snv">Scope &amp; Credits</div>
          <div className="sn-title snv">
            Multi-Product<br /><em>Commercial Packaging.</em>
          </div>
          <div className="sn-body snv" style={{marginBottom:'2.5rem'}}>
            <p><strong>Project Credit:</strong> Art direction, packaging-family design, artwork adaptation and prepress coordination &mdash; H P Shivaraj.</p>
            <p style={{marginTop:'0.8rem'}}><strong>Context:</strong> Jus’Amazin &middot; Multi-product commercial packaging across canister, pouch, and wrapper formats.</p>
          </div>

          <div className="sn-metrics-strip snv">
            {METRICS.map((m) => (
              <div key={m.l} className="sn-metric-card">
                <div className="sn-metric-n">{m.n}</div>
                <div className="sn-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sn-s">
        <div className="sn-c">
          <div className="sn-label snv">Product Lineup Gallery</div>
          <div className="sn-title snv">
            Formats &amp;<br /><em>Execution Gallery.</em>
          </div>
          <p className="sn-body snv">
            Beyond initial artwork, format adaptations, vendor proofs, and corrections were carried out prior to print release, maintaining family-level consistency across materials.
          </p>

          <div className="sn-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="sn-item snv">
                <div className="sn-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="sn-info">
                  <div className="sn-item-title">{g.title}</div>
                  <div className="sn-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sn-c">
        <div className="sn-soul snv">
          <div className="sn-soul-inner">
            <blockquote className="sn-soul-q">
              &ldquo;The relationship between <strong>family-level visual decisions</strong> and the <strong>detail required to reproduce them consistently</strong> across factory runs.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="sn-s">
        <div className="sn-c">
          <div className="sn-label snv">Production Standards</div>
          <div className="sn-title snv">
            Prepress &amp;<br /><em>Vendor Approvals.</em>
          </div>
          <div className="sn-fb-grid">
            {PRODUCTION_CRITERIA.map((crit, i) => (
              <div key={i} className="sn-fb-card snv">
                <div className="sn-fb-q">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="sn-fb-n">{crit.n}</div>
                  <div className="sn-fb-r">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sn-c" style={{marginTop:'3rem', marginBottom:'3rem'}}>
        <div className="sn-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="sn-label">Category Directories {'>>>'}</div>
          <div className="sn-footer-links" style={{marginTop:'1rem', marginBottom:'0'}}>
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="sn-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <Script id="sn-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.snv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.snv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.snv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PILLARS = [
  {
    num: "01",
    h: "Giving the Range Its Own Identity",
    t: "SUB_BRAND_ARCHITECTURE",
    b: "My Lil’Stars work covered a children’s range spanning spreads and millet pancake mixes. I developed a distinct visual identity across different product types while maintaining relationships between the individual packs."
  },
  {
    num: "02",
    h: "Working Across the Family",
    t: "VARIANT_RELATIONSHIPS",
    b: "The scope included four spreads and three pancake-mix variants. The case brings those packs together to show how the sub-brand works across a family, with close views of typography, illustration and variant relationships visible in the finished artwork."
  },
  {
    num: "03",
    h: "Exploring Movement",
    t: "MOTION_TREATMENTS",
    b: "The project also included promotional-video development. Presented alongside the packaging, the motion work shows an additional exploration of the sub-brand’s visual expression through AI-assisted workflows under human creative direction."
  },
  {
    num: "04",
    h: "What the Project Demonstrates",
    t: "DUAL_AUDIENCE_BALANCE",
    b: "Art direction that balances whimsical, child-friendly front-of-pack appeal with clear, uncompromising parental reassurance on clean nutrition declarations."
  }
]

const METRICS = [
  { n: "4 Spreads", l: "Nut Butter Jars (200g & 325g Variants)" },
  { n: "3 Mixes", l: "Millet & Quinoa Pancake Mix Pouches" },
  { n: "Commercial", l: "Packaging Released Across Modern Trade & Quick Commerce" },
  { n: "Conceptual", l: "Motion Exploration Presented as Design Study" }
]

const GALLERY = [
  {
    id: "pancake_choco",
    title: "Pancake Mix — Choco Delight (250g)",
    desc: "Clean-label stand-up pouch featuring bold 'NO' claims hierarchy and rich chocolate cacao visual tone.",
    src: "/images/jusamazin/lilstars/pancake_choco_delight.png"
  },
  {
    id: "pancake_berry",
    title: "Pancake Mix — Berry Blast (250g)",
    desc: "Vibrant berry chromatic palette engineered to stand out on quick-commerce detail carousels (Blinkit & Zepto).",
    src: "/images/jusamazin/lilstars/pancake_berry_blast.png"
  },
  {
    id: "pancake_natural",
    title: "Pancake Mix — Classic Natural (250g)",
    desc: "Foundational whole-grain millet & quinoa mix with clean cream tones communicating pure morning nutrition.",
    src: "/images/jusamazin/lilstars/pancake_natural.png"
  },
  {
    id: "pb_dark_choco",
    title: "Lil'Stars PB Crunchy Dark Chocolate (325g)",
    desc: "3D render of the 325g kids nut butter jar balancing clean jaggery sweetness with real cocoa nib crunch.",
    src: "/images/jusamazin/lilstars/pb_dark_chocolate_jar.png"
  },
  {
    id: "pb_jaggery",
    title: "Lil'Stars PB with Organic Jaggery (325g)",
    desc: "Nutrient-dense childhood daily spread replacing refined sugar with traditional organic jaggery.",
    src: "/images/jusamazin/lilstars/pb_jaggery_jar.png"
  },
  {
    id: "hazelnut_milk",
    title: "Lil'Stars Hazelnut Milk Spread (200g)",
    desc: "Clean-label hazelnut spread formulated without palm oil, wrapped in warm approachable graphics.",
    src: "/images/jusamazin/lilstars/hazelnut_milk_jar.png"
  }
]

const SCRIPT_EXCERPT = [
  { scene: "01", time: "0:00 – 1:50s", visual: "Pouch slides into frame; ceramic plate with fluffy chocolate pancake slides from right; tiny mini chocolate chips rain down naturally.", vo: "\"No Maida...\" — warm, confident maternal delivery." },
  { scene: "02", time: "1:50 – 2:50s", visual: "Macro push-in on pancake stack. Kinetic typography animates in: NO Maida · NO Refined Sugar · NO Baking Soda.", vo: "\"No Refined Sugar... No Baking Soda.\"" },
  { scene: "03", time: "2:50 – 6:00s", visual: "Food beauty shot: maple syrup drizzling over fresh berries, banana slices, and chocolate curls. Slow orbit parallax.", vo: "\"Made with 5 whole grains and complete protein — breakfast kids love.\"" },
  { scene: "04", time: "6:50 – 8:00s", visual: "Reverse transition snapping cleanly back to the centered product pack with clean-nutrition seal.", vo: "\"Make the switch to clean superfoods.\"" }
]

const PRODUCTION_CRITERIA = [
  {
    n: "Front-of-Pack Claim Hierarchy",
    r: "Packaging Typography",
    q: "Positioned prominent clean-label declarations ('NO Maida · NO Refined Sugar · NO Baking Soda') directly below the flavor banner to give parents immediate reassurance."
  },
  {
    n: "Chromatic Flavor-Coding",
    r: "Visual Systems",
    q: "Calibrated distinctive flavor hues (Choco Delight, Berry Blast, Natural) to ensure clear product differentiation in quick-commerce thumbnail grids."
  },
  {
    n: "Cross-Format Lineage",
    r: "Sub-Brand Continuity",
    q: "Maintained character illustration style, typography, and clean nutrition badges consistently across flexible pouches (250g) and jars (325g)."
  },
  {
    n: "Motion Exploration Separation",
    r: "Process Rigor",
    q: "Promotional video generation workflows were developed as conceptual explorations, explicitly separated from commercial packaging production releases."
  }
]

const NAV = [
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Mom2B (Maternal)', h: '/jusamazin/mom2b' },
  { l: 'Retail POS & Spatial', h: '/jusamazin/retail-pos' },
  { l: 'Snacks & Canisters', h: '/jusamazin/snacks' },
  { l: 'Core Packaging', h: '/jusamazin/core-packaging' },
  { l: 'Superfoods', h: '/jusamazin/superfoods' },
  { l: 'Bars', h: '/jusamazin/bars' },
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ls-bg:#0A0906;--ls-white:#F0EDE6;--ls-coral:#FF6F59;--ls-coral-dark:#D9452F;
  --ls-muted:rgba(240,237,230,0.65);--ls-border:rgba(240,237,230,0.1);
  --D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth;overflow-x:clip!important;max-width:100vw!important}
body{background:var(--ls-bg);color:var(--ls-white);font-family:var(--S);overflow-x:clip!important;max-width:100vw!important}
a{color:inherit;text-decoration:none}

.ls-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--ls-border)}
.ls-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 80% 20%,rgba(255,111,89,0.22),transparent 60%),radial-gradient(ellipse at 20% 80%,rgba(217,69,47,0.12),transparent 55%),var(--ls-bg);animation:lsPulse 12s ease-in-out infinite}
@keyframes lsPulse{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}}
.ls-hero-inner{position:relative;z-index:2;padding:0 5vw 6rem;width:100%}
.ls-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4rem,11vw,11.5rem);line-height:0.95;letter-spacing:-0.03em}
.ls-hero h1 span{color:var(--ls-coral)}
.ls-hero h1 em{font-style:normal;color:var(--ls-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.6;max-width:680px}

.ls-s{padding:7rem 0;border-bottom:1px solid var(--ls-border)}
.ls-c{max-width:1280px;margin:0 auto;padding:0 5vw}
.ls-label{font-family:var(--M);font-size:.65rem;letter-spacing:.25em;color:var(--ls-coral);margin-bottom:1.5rem;text-transform:uppercase}
.ls-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,5.5vw,5.5rem);line-height:1.05;margin-bottom:2rem}
.ls-title em{font-style:normal;color:var(--ls-muted);font-family:var(--S);font-weight:300}
.ls-body{font-size:1.1rem;line-height:1.9;color:var(--ls-muted);max-width:720px}

.ls-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:4rem}
.ls-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--ls-border);border-radius:28px;padding:3rem;position:relative;overflow:hidden;transition:border-color .3s}
.ls-pill-card:hover{border-color:rgba(255,111,89,0.4)}
.ls-pill-num{font-family:var(--D);font-weight:900;font-size:3rem;color:rgba(255,111,89,0.25);margin-bottom:1rem}
.ls-pill-tag{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--ls-coral);margin-bottom:.8rem}
.ls-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.6rem;margin-bottom:1rem;color:var(--ls-white)}
.ls-pill-card p{font-size:1rem;line-height:1.8;color:var(--ls-muted)}

.ls-metrics-strip{display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:3rem}
.ls-metric-card{flex:1 1 calc(25% - 1.5rem);min-width:200px;background:rgba(240,237,230,0.02);border:1px solid var(--ls-border);border-radius:20px;padding:2rem;text-align:center}
.ls-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2rem,3.8vw,3.2rem);color:var(--ls-coral);line-height:1}
.ls-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.16em;color:var(--ls-muted);margin-top:.8rem;line-height:1.6}

.ls-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem}
.ls-item{background:rgba(240,237,230,0.02);border:1px solid var(--ls-border);border-radius:32px;overflow:hidden;transition:border-color .3s,transform .3s}
.ls-item:hover{border-color:rgba(255,111,89,0.4);transform:scale(1.015)}
.ls-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.ls-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.ls-item:hover .ls-img-wrap img{transform:scale(1.05)}
.ls-info{padding:2rem 2.2rem;display:flex;flex-direction:column;gap:.6rem}
.ls-item-title{font-family:var(--D);font-weight:900;font-size:1.3rem}
.ls-item-desc{font-size:.92rem;line-height:1.75;color:var(--ls-muted)}

.ls-script-strip{display:flex;flex-direction:column;gap:1.2rem;margin-top:3rem}
.ls-script-card{background:rgba(240,237,230,0.025);border:1px solid var(--ls-border);border-radius:20px;padding:2rem;display:grid;grid-template-columns:80px 140px 1fr 1fr;gap:1.5rem;align-items:center}
.ls-script-num{font-family:var(--D);font-weight:900;font-size:1.8rem;color:var(--ls-coral)}
.ls-script-time{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ls-muted)}
.ls-script-vis{font-size:.9rem;line-height:1.7;color:var(--ls-white)}
.ls-script-vo{font-size:.9rem;line-height:1.7;color:var(--ls-coral);font-style:italic}

.ls-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--ls-border)}
.ls-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(255,111,89,0.1),transparent 65%)}
.ls-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.ls-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.ls-soul-q strong{color:var(--ls-white);font-weight:500}

.ls-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.ls-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--ls-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.ls-fb-q{font-size:1.02rem;line-height:1.85;color:var(--ls-muted);font-style:italic;flex:1}
.ls-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.ls-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--ls-coral);margin-top:.2rem}

.ls-footer{padding:5rem 0 3rem;border-top:1px solid var(--ls-border)}
.ls-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.ls-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--ls-muted);transition:color .3s}
.ls-footer-link:hover{color:var(--ls-coral)}

.lsv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.lsv.vis{opacity:1;transform:translateY(0)}

@media(max-width:1100px){
  .ls-grid{grid-template-columns:repeat(2,1fr)}
  .ls-script-card{grid-template-columns:1fr;gap:.8rem}
}
@media(max-width:900px){
  .ls-pillars,.ls-grid,.ls-fb-grid{grid-template-columns:1fr}
  .ls-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .ls-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function LilstarsPage() {
  return (
    <>
      <Head>
        <title>Lil’Stars — A Distinct World for Kids | SIVNCO</title>
        <meta name="description" content="A children’s product identity developed across spreads, pancake mixes and motion exploration by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/lilstars" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/work" backLabel="← Work Directory" />

      <div className="ls-hero">
        <div className="ls-hero-bg" />
        <div className="ls-hero-inner">
          <div className="br-label acid mb-3">■ 05 // LIL’STARS &middot; A DISTINCT WORLD FOR KIDS</div>
          <h1>
            Lil’<br /><span>Stars</span>
            <em>
              A children’s product identity developed across spreads, pancake mixes and motion exploration. Packaging: Commercial Line &middot; Motion: Conceptual Design Study.
            </em>
          </h1>
        </div>
      </div>

      <section className="ls-s">
        <div className="ls-c">
          <div className="ls-label lsv">Strategic Intent</div>
          <div className="ls-title lsv">
            Giving the Range<br /><em>Its Own Identity.</em>
          </div>
          <p className="ls-body lsv">
            My Lil’Stars work covered a children’s range spanning spreads and millet pancake mixes. I developed a distinct visual identity across different product types while maintaining relationships between the individual packs.
          </p>

          <div className="ls-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="ls-pill-card lsv">
                <div className="ls-pill-num">{p.num}</div>
                <div className="ls-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ls-s">
        <div className="ls-c">
          <div className="ls-label lsv">Scope &amp; Credits</div>
          <div className="ls-title lsv">
            Family Architecture &amp;<br /><em>Execution Scope.</em>
          </div>
          <div className="ls-body lsv" style={{marginBottom:'2.5rem'}}>
            <p><strong>Project Credit:</strong> Art direction and packaging design &mdash; H P Shivaraj. Motion exploration used AI-assisted workflows with human creative direction.</p>
            <p style={{marginTop:'0.8rem'}}><strong>Context:</strong> Jus’Amazin &middot; Kids sub-brand packaging; motion work presented separately as design study.</p>
          </div>

          <div className="ls-metrics-strip lsv">
            {METRICS.map((m) => (
              <div key={m.l} className="ls-metric-card">
                <div className="ls-metric-n">{m.n}</div>
                <div className="ls-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ls-s">
        <div className="ls-c">
          <div className="ls-label lsv">Product Range Gallery</div>
          <div className="ls-title lsv">
            Pack Family &amp;<br /><em>Variant Lineup.</em>
          </div>
          <p className="ls-body lsv">
            The scope included four spreads and three pancake-mix variants. The lineup shows how the sub-brand works across a family, with close views of typography, illustration, and variant relationships.
          </p>

          <div className="ls-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="ls-item lsv">
                <div className="ls-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="ls-info">
                  <div className="ls-item-title">{g.title}</div>
                  <div className="ls-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ls-s">
        <div className="ls-c">
          <div className="ls-label lsv">Conceptual Motion Study</div>
          <div className="ls-title lsv">
            Exploring Movement &amp;<br /><em>Storyboard Script.</em>
          </div>
          <p className="ls-body lsv">
            Promotional video exploration designed to test kinetic product storytelling. Scene-by-scene script detailing pancake texture, ingredient callouts, and clean-label messaging.
          </p>

          <div className="ls-script-strip lsv">
            {SCRIPT_EXCERPT.map((s) => (
              <div key={s.scene} className="ls-script-card">
                <div className="ls-script-num">{s.scene}</div>
                <div className="ls-script-time">{s.time}</div>
                <div className="ls-script-vis">{s.visual}</div>
                <div className="ls-script-vo">{s.vo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ls-c">
        <div className="ls-soul lsv">
          <div className="ls-soul-inner">
            <blockquote className="ls-soul-q">
              &ldquo;Balancing <strong>whimsical front-of-pack appeal</strong> for children with <strong>uncompromising parental reassurance</strong> on clean ingredients.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="ls-s">
        <div className="ls-c">
          <div className="ls-label lsv">Production Standards</div>
          <div className="ls-title lsv">
            Design &amp;<br /><em>Prepress Standards.</em>
          </div>
          <div className="ls-fb-grid">
            {PRODUCTION_CRITERIA.map((crit, i) => (
              <div key={i} className="ls-fb-card lsv">
                <div className="ls-fb-q">&ldquo;{crit.q}&rdquo;</div>
                <div>
                  <div className="ls-fb-n">{crit.n}</div>
                  <div className="ls-fb-r">{crit.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ls-c" style={{marginTop:'3rem', marginBottom:'3rem'}}>
        <div className="ls-footer" style={{borderTop:'none', padding:'0'}}>
          <div className="ls-label">Category Directories {'>>>'}</div>
          <div className="ls-footer-links" style={{marginTop:'1rem', marginBottom:'0'}}>
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="ls-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <Script id="ls-init" strategy="lazyOnload">{`(function(){function init(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.05});document.querySelectorAll('.lsv').forEach(function(e){obs.observe(e)});setTimeout(function(){document.querySelectorAll('.lsv').forEach(function(e){e.classList.add('vis')})},2000);if(window.innerWidth<=900)document.querySelectorAll('.lsv').forEach(function(e){e.classList.add('vis')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();(function w(){if(typeof Lenis==='undefined'){setTimeout(w,80);return}try{var l=new Lenis({duration:1.2,smooth:true,smoothTouch:false});function r(t){l.raf(t);requestAnimationFrame(r)}requestAnimationFrame(r)}catch(e){}})()})();`}</Script>
    </>
  )
}

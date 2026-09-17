import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'

const PILLARS = [
  {
    num: "01",
    h: "The ₹10 Mass-Market Experiment",
    t: "DEMOCRATIZING_CLEAN_DESIGN",
    b: "Reimagining traditional regional Indian snacking structures for mass-market commercial accessibility. Designing a high-impact packaging blueprint for the entry-level ₹10 Crushed Peanut Chikki, proving premium design belongs at every price point."
  },
  {
    num: "02",
    h: "Cylindrical Composite Canisters",
    t: "CANISTER_PACKAGING_SYSTEM",
    b: "Engineered rotational 360° label architecture for composite cans and canisters across Multi-Seed Crackers, 5G Seed Trail Mix, Cookies, and Baked Nippat (traditional South Indian savory snack reimagined as a clean-label FMCG staple)."
  },
  {
    num: "03",
    h: "\"Don't Be Hangry\" Impulse Pouch",
    t: "CHECKOUT_CONVERSION_DESIGN",
    b: "Developed a high-contrast, punchy typographic impulse pouch format ('DBH') engineered for supermarket checkout counters, impulse hangars, and fast-commerce basket add-ons."
  },
  {
    num: "04",
    h: "Clean Roasted Millets",
    t: "ANCIENT_GRAINS_MODERN_SHELF",
    b: "Designed the multi-format packaging system (12g, 35g, 60g) for roasted Jowar Puffs and Millet Mixture across high-velocity flavor profiles (Magic Masala, Chat Masala, Pudina Chaat)."
  }
]

const METRICS = [
  { n: "₹10", l: "Entry Price Point for Crushed Peanut Chikki" },
  { n: "4 Formats", l: "Canisters, Stand-Up Pouches, Sachets & Chikki Wraps" },
  { n: "10+ SKUs", l: "Snacking & Roasted Grain System" },
  { n: "100%", l: "Clean-Label FMCG Snacking Architecture" }
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
    desc: "Traditional Indian mixture snack reinvented with 100% roasted millets and clean cold-pressed oils.",
    src: "/images/jusamazin/cans/millet_mixture_magic_masala.png"
  },
  {
    id: "chikki_proof",
    title: "Rotogravure ₹10 Chikki Wrapper Proof",
    desc: "Production press proof sheet verifying 'Just WOW' lamination, barcode scan tolerances, and legal nutritional grids.",
    src: "/images/jusamazin/snacks/chikki_print_proof.jpg"
  }
]

const FEEDBACK = [
  {
    n: "Shilpa Moglishetty",
    r: "Co-Founder, Jus'Amazin",
    q: "The ₹10 Chikki layout captured exactly the cultural nostalgia we wanted, proving that affordable products can look premium without alienating everyday buyers."
  },
  {
    n: "Amarjit Singh",
    r: "Retail Distribution Head",
    q: "The canister range gave us instant shelf authority in modern trade, while the 'Don't Be Hangry' impulse packs dominated the checkout counters."
  },
  {
    n: "Manoj",
    r: "Production Head",
    q: "Moving from loose snack packaging to cylindrical composite cans required strict dieline precision. The prints came out perfectly aligned with zero seam drift."
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
  { l: 'Jars', h: '/jusamazin/jars' },
  { l: 'Brand Guidelines', h: '/jusamazin/brand-guidelines' },
  { l: 'Marketing', h: '/jusamazin/marketing' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --sn-bg:#0A0906;--sn-white:#F0EDE6;--sn-accent:#D4960A;--sn-blue:#0066FF;
  --sn-muted:rgba(240,237,230,0.5);--sn-border:rgba(240,237,230,0.08);
  --sn-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--sn-bg);color:var(--sn-white);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}

.sn-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--sn-border)}
.sn-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 75%,rgba(212,150,10,0.18),transparent 55%),radial-gradient(ellipse at 80% 25%,rgba(0,102,255,0.08),transparent 55%),var(--sn-bg);animation:snPulse 10s ease-in-out infinite}
@keyframes snPulse{0%,100%{opacity:.85}50%{opacity:1}}
.sn-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%;max-width:1400px;margin:0 auto}
.sn-hero-tag{font-family:var(--M);font-size:.62rem;letter-spacing:.28em;color:var(--sn-accent);margin-bottom:2rem;display:flex;align-items:center;gap:1rem}
.sn-hero-tag::before{content:'';width:32px;height:1px;background:var(--sn-accent)}
.sn-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,13vw,13rem);line-height:.95;margin-bottom:1.5rem}
.sn-hero h1 span{color:var(--sn-accent)}
.sn-hero h1 em{font-style:normal;color:var(--sn-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.7;max-width:680px}

.sn-c{max-width:1400px;margin:0 auto;padding:0 5vw}
.sn-s{padding:8rem 0;border-bottom:1px solid var(--sn-border)}
.sn-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;color:var(--sn-accent);margin-bottom:1.5rem}
.sn-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}
.sn-title em{font-style:normal;color:var(--sn-muted);font-family:var(--S);font-weight:300}
.sn-body{font-size:1.12rem;line-height:1.95;color:var(--sn-muted);max-width:680px}

.sn-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.sn-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--sn-border);border-radius:32px;padding:3rem 2.5rem;backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.sn-pill-card:hover{transform:translateY(-6px);border-color:rgba(212,150,10,0.45);box-shadow:0 20px 45px rgba(0,0,0,0.5)}
.sn-pill-num{font-family:var(--D);font-size:3rem;line-height:1;opacity:.06;position:absolute;top:1.5rem;right:1.5rem}
.sn-pill-tag{font-family:var(--M);font-size:.48rem;letter-spacing:.2em;opacity:.35;margin-bottom:.8rem;color:var(--sn-accent)}
.sn-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.8rem;margin-bottom:1rem;line-height:1.2}
.sn-pill-card p{font-size:.95rem;line-height:1.85;color:var(--sn-muted)}

.sn-metrics{display:flex;flex-wrap:wrap;gap:1.4rem;margin-top:4rem}
.sn-metric-card{flex:1 1 220px;padding:2.2rem 2.4rem;border:1px solid var(--sn-border);border-radius:9999px;background:rgba(240,237,230,0.03);backdrop-filter:blur(24px);text-align:center;transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s ease, box-shadow .35s ease}
.sn-metric-card:hover{transform:translateY(-6px);border-color:rgba(212,150,10,0.45);box-shadow:0 18px 40px rgba(0,0,0,0.5)}
.sn-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2.2rem,4.5vw,3.8rem);color:var(--sn-accent);line-height:1}
.sn-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--sn-muted);margin-top:.6rem}

.sn-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.8rem;margin-top:4rem}
.sn-item{border-radius:28px;overflow:hidden;border:1px solid var(--sn-border);background:rgba(240,237,230,0.02);display:flex;flex-direction:column;transition:border-color .4s, transform .4s}
.sn-item:hover{border-color:rgba(212,150,10,0.4);transform:scale(1.015)}
.sn-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.sn-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.sn-item:hover .sn-img-wrap img{transform:scale(1.05)}
.sn-info{padding:1.8rem;display:flex;flex-direction:column;gap:.6rem}
.sn-item-title{font-family:var(--D);font-weight:900;font-size:1.25rem}
.sn-item-desc{font-size:.88rem;line-height:1.75;color:var(--sn-muted)}

.sn-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--sn-border)}
.sn-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(212,150,10,0.1),transparent 65%)}
.sn-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.sn-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.sn-soul-q strong{color:var(--sn-white);font-weight:500}

.sn-fb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.8rem;margin-top:4rem}
.sn-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--sn-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.sn-fb-q{font-size:1.02rem;line-height:1.85;color:var(--sn-muted);font-style:italic;flex:1}
.sn-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.sn-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--sn-accent);margin-top:.2rem}

.sn-footer{padding:5rem 0 3rem;border-top:1px solid var(--sn-border)}
.sn-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.sn-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--sn-muted);transition:color .3s}
.sn-footer-link:hover{color:var(--sn-accent)}

.snv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.snv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .sn-pillars,.sn-grid,.sn-fb-grid{grid-template-columns:1fr}
  .sn-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .sn-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function Snacks() {
  return (
    <>
      <Head>
        <title>Snacks &amp; Canisters — Sivnco</title>
        <meta name="description" content="Mass-market disruption: cylindrical composite canisters, Baked Nippat, Don't Be Hangry impulse pouches, and the ₹10 Chikki experiment by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/snacks" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/jusamazin" backLabel="← Jus'Amazin Suite" />

      <div className="sn-hero">
        <div className="sn-hero-bg" />
        <div className="sn-hero-inner">
          <div className="sn-hero-tag">Snack Architecture · Composite Cans · Impulse Packaging</div>
          <h1>
            Snacks &amp; <span>Canisters</span><br />Category
            <em>
              From cylindrical composite canisters and regional heritage snacks like Baked Nippat to the ₹10
              Chikki experiment and the high-contrast &apos;Don&apos;t Be Hangry&apos; impulse pouch system.
            </em>
          </h1>
        </div>
      </div>

      <section className="sn-s">
        <div className="sn-c">
          <div className="sn-label snv">Strategic Strategy</div>
          <div className="sn-title snv">
            Mass-Market<br /><em>Disruption.</em>
          </div>
          <p className="sn-body snv">
            Indian snacking is split between loose traditional snacks and ultra-processed commercial chips.
            We engineered a modern FMCG snacking ecosystem that honors authentic Indian food culture (Millets, Seeds, Baked Nippat)
            packaged with high-velocity shelf impact across multiple substrates — from rigid composite cans to flow-wrap chikki bars.
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
          <div className="sn-label snv">Snacking Gallery</div>
          <div className="sn-title snv">
            Canisters &amp; Impulse<br /><em>Packaging.</em>
          </div>
          <p className="sn-body snv">
            360° cylindrical label engineering for composite cans alongside flexible pouch impulse formats.
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
            <div className="sn-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Democratization of Design</div>
            <blockquote className="sn-soul-q">
              &ldquo;Premium design should not be locked behind high prices. Bringing clean visual architecture,
              <strong>360° canister dielines, and superior lamination to everyday snacks</strong> shifts consumer expectations
              and disrupts mass-market retail conventions.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="sn-s">
        <div className="sn-c">
          <div className="sn-label snv">Category Acceleration</div>
          <div className="sn-title snv">
            Performance<br /><em>Metrics.</em>
          </div>
          <div className="sn-metrics snv">
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
          <div className="sn-label snv">Voices</div>
          <div className="sn-title snv">
            Feedback<br /><em>Matrix.</em>
          </div>
          <div className="sn-fb-grid">
            {FEEDBACK.map((fb, i) => (
              <div key={i} className="sn-fb-card snv">
                <div className="sn-fb-q">&ldquo;{fb.q}&rdquo;</div>
                <div>
                  <div className="sn-fb-n">{fb.n}</div>
                  <div className="sn-fb-r">{fb.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sn-c">
        <div className="sn-footer">
          <div className="sn-label">Category Directories {'>>>'}</div>
          <div className="sn-footer-links">
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="sn-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Script id="sn-init" strategy="lazyOnload">{`
        (function(){
          function init(){
            var obs = new IntersectionObserver(function(entries){
              entries.forEach(function(e){
                if(e.isIntersecting){
                  e.target.classList.add('vis');
                  obs.unobserve(e.target);
                }
              });
            },{threshold: 0.05});
            document.querySelectorAll('.snv').forEach(function(el){ obs.observe(el); });
            setTimeout(function(){
              document.querySelectorAll('.snv').forEach(function(el){ el.classList.add('vis'); });
            }, 1800);
          }
          if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
          else init();
          (function w(){
            if(typeof Lenis === 'undefined'){ setTimeout(w, 80); return; }
            try {
              var l = new Lenis({duration: 1.2, smooth: true, smoothTouch: false});
              function r(t){ l.raf(t); requestAnimationFrame(r); }
              requestAnimationFrame(r);
            } catch(e){}
          })();
        })();
      `}</Script>
    </>
  )
}

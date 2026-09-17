import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'

const PILLARS = [
  {
    num: "01",
    h: "The Maternal Trust Imperative",
    t: "EMPATHIC_INFORMATION_DESIGN",
    b: "Expectant and nursing mothers face intense dietary anxiety and ingredient scrutiny. Packaging in this space too often defaults to either sterile medical clinic aesthetics or generic baby imagery. Mom2B replaces both with grounded, reassuring warmth — clean typography, calming earth tones, and transparent clinical credibility."
  },
  {
    num: "02",
    h: "Functional Nutritional Hierarchy",
    t: "TRANSPARENT_SCIENCE",
    b: "Engineered front-of-pack claim hierarchies that immediately communicate essential maternal benefits — natural galactagogues for lactation support, high iron, plant-based calcium, and omega-3 fatty acids — without triggering regulatory friction or overpromising."
  },
  {
    num: "03",
    h: "Savory Functional Spreads",
    t: "REGIONAL_TASTE_INNOVATION",
    b: "Extended the line beyond sweet nut butters into traditional Indian savory profiles, including Peanut & Flax Chutney and Spicy Seed Butter. Designed label structures that convey savory culinary depth while preserving clean-nutrition certifications."
  },
  {
    num: "04",
    h: "The Mom Bar Format",
    t: "CONVENIENCE_UNDER_FATIGUE",
    b: "Designed the dedicated flow-wrap packaging for the Mom Bar — an energy and lactation bar engineered for the intense time constraints of new motherhood. Clean structural grid, prominent nutrient callouts, and tactile matte wrapper finishing."
  }
]

const METRICS = [
  { n: "5+ SKUs", l: "Targeted Maternal Nutrition Systems" },
  { n: "100%", l: "Natural Galactagogue & Clean-Label Integrity" },
  { n: "2 Formats", l: "Spreads (200g Jars) & On-the-Go Snack Bars" },
  { n: "Dual", l: "Material Deployment (Glass Retail & D2C Plastic)" }
]

const GALLERY = [
  {
    id: "mom_bar_front",
    title: "The Mom Bar — Front Packaging",
    desc: "2000px render of the flow-wrap lactation bar featuring serene pastel tones and immediate clean nutrient badging.",
    src: "/images/jusamazin/mom2b/mom_bar_front.png"
  },
  {
    id: "mom_bar_back",
    title: "The Mom Bar — Regulatory Back of Pack",
    desc: "Clean typographic information grid balancing FSSAI compliance with effortless readability during daily consumption.",
    src: "/images/jusamazin/mom2b/mom_bar_back.png"
  },
  {
    id: "almond_seed_butter",
    title: "Mom2B Almond & Seed Butter (200g)",
    desc: "Flagship prenatal jar formulated with nutrient-dense seeds and almonds for balanced lactation support.",
    src: "/images/jusamazin/mom2b/almond_seed_butter_m2b.png"
  },
  {
    id: "peanut_flax_chutney",
    title: "Mom2B Peanut & Flax Chutney (200g)",
    desc: "Savory functional spread delivering essential omega-3s with traditional Indian culinary versatility.",
    src: "/images/jusamazin/mom2b/peanut_flax_chutney_m2b.png"
  },
  {
    id: "seed_butter_mix",
    title: "Mom2B High-Protein Seed Butter Mix (200g)",
    desc: "Galactagogue-rich multi-seed spread engineered for postpartum recovery and maternal energy stability.",
    src: "/images/jusamazin/mom2b/seed_butter_mix_m2b.png"
  },
  {
    id: "spicy_seed_butter",
    title: "Mom2B Spicy Almond & Seed Spread (200g)",
    desc: "Regional spicy variant created for mothers craving authentic flavor profiles without synthetic additives.",
    src: "/images/jusamazin/mom2b/spicy_seed_butter_m2b.png"
  }
]

const FEEDBACK = [
  {
    n: "Shilpa Moglishetty",
    r: "Co-Founder, Jus'Amazin",
    q: "Mom2B required deep empathy. The packaging couldn't look like prescription medicine, nor could it look like casual dessert. Shivaraj crafted an aesthetic of quiet authority and care that mothers immediately trust."
  },
  {
    n: "Bhoomika",
    r: "Quality & Formulation Analyst",
    q: "The back-of-pack regulatory alignment on Mom2B was our smoothest compliance audit. Shivaraj's structured typography and clean table grids made complex nutritional data completely transparent."
  }
]

const NAV = [
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Lil\'Stars (Kids)', h: '/jusamazin/lilstars' },
  { l: 'Retail POS & Spatial', h: '/jusamazin/retail-pos' },
  { l: 'Snacks & Canisters', h: '/jusamazin/snacks' },
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
  --mb-bg:#0A0906;--mb-white:#F0EDE6;--mb-accent:#E76F51;--mb-rose:#F4A261;
  --mb-sage:#2A9D8F;--mb-muted:rgba(240,237,230,0.5);--mb-border:rgba(240,237,230,0.08);
  --mb-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--mb-bg);color:var(--mb-white);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}

.mb-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--mb-border)}
.mb-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 75%,rgba(231,111,81,0.2),transparent 55%),radial-gradient(ellipse at 80% 25%,rgba(42,157,143,0.12),transparent 55%),var(--mb-bg);animation:mbPulse 10s ease-in-out infinite}
@keyframes mbPulse{0%,100%{opacity:.85}50%{opacity:1}}
.mb-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%;max-width:1400px;margin:0 auto}
.mb-hero-tag{font-family:var(--M);font-size:.62rem;letter-spacing:.28em;color:var(--mb-rose);margin-bottom:2rem;display:flex;align-items:center;gap:1rem}
.mb-hero-tag::before{content:'';width:32px;height:1px;background:var(--mb-rose)}
.mb-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,13vw,13rem);line-height:.95;margin-bottom:1.5rem}
.mb-hero h1 span{color:var(--mb-rose)}
.mb-hero h1 em{font-style:normal;color:var(--mb-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.7;max-width:680px}

.mb-c{max-width:1400px;margin:0 auto;padding:0 5vw}
.mb-s{padding:8rem 0;border-bottom:1px solid var(--mb-border)}
.mb-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;color:var(--mb-rose);margin-bottom:1.5rem}
.mb-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}
.mb-title em{font-style:normal;color:var(--mb-muted);font-family:var(--S);font-weight:300}
.mb-body{font-size:1.12rem;line-height:1.95;color:var(--mb-muted);max-width:680px}

.mb-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.mb-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--mb-border);border-radius:32px;padding:3rem 2.5rem;backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.mb-pill-card:hover{transform:translateY(-6px);border-color:rgba(231,111,81,0.45);box-shadow:0 20px 45px rgba(0,0,0,0.5)}
.mb-pill-num{font-family:var(--D);font-size:3rem;line-height:1;opacity:.06;position:absolute;top:1.5rem;right:1.5rem}
.mb-pill-tag{font-family:var(--M);font-size:.48rem;letter-spacing:.2em;opacity:.35;margin-bottom:.8rem;color:var(--mb-rose)}
.mb-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.8rem;margin-bottom:1rem;line-height:1.2}
.mb-pill-card p{font-size:.95rem;line-height:1.85;color:var(--mb-muted)}

.mb-metrics{display:flex;flex-wrap:wrap;gap:1.4rem;margin-top:4rem}
.mb-metric-card{flex:1 1 220px;padding:2.2rem 2.4rem;border:1px solid var(--mb-border);border-radius:9999px;background:rgba(240,237,230,0.03);backdrop-filter:blur(24px);text-align:center;transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s ease, box-shadow .35s ease}
.mb-metric-card:hover{transform:translateY(-6px);border-color:rgba(231,111,81,0.45);box-shadow:0 18px 40px rgba(0,0,0,0.5)}
.mb-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2.2rem,4.5vw,3.8rem);color:var(--mb-rose);line-height:1}
.mb-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--mb-muted);margin-top:.6rem}

.mb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.8rem;margin-top:4rem}
.mb-item{border-radius:28px;overflow:hidden;border:1px solid var(--mb-border);background:rgba(240,237,230,0.02);display:flex;flex-direction:column;transition:border-color .4s, transform .4s}
.mb-item:hover{border-color:rgba(231,111,81,0.4);transform:scale(1.015)}
.mb-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.mb-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.mb-item:hover .mb-img-wrap img{transform:scale(1.05)}
.mb-info{padding:1.8rem;display:flex;flex-direction:column;gap:.6rem}
.mb-item-title{font-family:var(--D);font-weight:900;font-size:1.25rem}
.mb-item-desc{font-size:.88rem;line-height:1.75;color:var(--mb-muted)}

.mb-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--mb-border)}
.mb-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(231,111,81,0.1),transparent 65%)}
.mb-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.mb-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.mb-soul-q strong{color:var(--mb-white);font-weight:500}

.mb-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.mb-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--mb-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.mb-fb-q{font-size:1.02rem;line-height:1.85;color:var(--mb-muted);font-style:italic;flex:1}
.mb-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.mb-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--mb-rose);margin-top:.2rem}

.mb-footer{padding:5rem 0 3rem;border-top:1px solid var(--mb-border)}
.mb-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.mb-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--mb-muted);transition:color .3s}
.mb-footer-link:hover{color:var(--mb-rose)}

.mbv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.mbv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .mb-pillars,.mb-grid,.mb-fb-grid{grid-template-columns:1fr}
  .mb-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .mb-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function Mom2BPage() {
  return (
    <>
      <Head>
        <title>Mom2B Maternal &amp; Prenatal Nutrition — Sivnco</title>
        <meta name="description" content="Dedicated maternal wellness line, Mom Bar packaging, galactagogue functional spreads, and high-trust typography by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/mom2b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/jusamazin" backLabel="← Jus'Amazin Suite" />

      <div className="mb-hero">
        <div className="mb-hero-bg" />
        <div className="mb-hero-inner">
          <div className="mb-hero-tag">Maternal &amp; Prenatal Wellness · Functional Packaging</div>
          <h1>
            Mom2B <span>Care</span><br />Systems
            <em>
              Designing for obstetric trust: replacing medical sterility with grounded, reassuring warmth.
              Targeted galactagogue functional spreads and the on-the-go Mom Bar.
            </em>
          </h1>
        </div>
      </div>

      <section className="mb-s">
        <div className="mb-c">
          <div className="mb-label mbv">Category Architecture</div>
          <div className="mb-title mbv">
            The Trust<br /><em>Imperative.</em>
          </div>
          <p className="mb-body mbv">
            Mothers navigating pregnancy and postpartum recovery are bombarded with conflicting nutritional advice and synthetic supplements.
            Mom2B provides an uncompromisingly clean, food-first alternative. The design system focuses on visual calm,
            transparent claims, and effortless nutrient comprehension.
          </p>

          <div className="mb-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="mb-pill-card mbv">
                <div className="mb-pill-num">{p.num}</div>
                <div className="mb-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-s">
        <div className="mb-c">
          <div className="mb-label mbv">Product Lineup</div>
          <div className="mb-title mbv">
            Functional Jars &amp;<br /><em>The Mom Bar.</em>
          </div>
          <p className="mb-body mbv">
            A unified design language applied across 200g glass jars for premium trade, lightweight D2C containers,
            and the on-the-go Mom Bar lactation bar.
          </p>

          <div className="mb-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="mb-item mbv">
                <div className="mb-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="mb-info">
                  <div className="mb-item-title">{g.title}</div>
                  <div className="mb-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-c">
        <div className="mb-soul mbv">
          <div className="mb-soul-inner">
            <div className="mb-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Empathic Packaging</div>
            <blockquote className="mb-soul-q">
              &ldquo;When a woman is pregnant or feeding a newborn, design is not an abstract exercise.
              Every line of typography must deliver <strong>absolute clarity, emotional safety, and physical ease</strong>.
              Clarity is the ultimate act of empathy.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="mb-s">
        <div className="mb-c">
          <div className="mb-label mbv">Category Metrics</div>
          <div className="mb-title mbv">
            System<br /><em>Metrics.</em>
          </div>
          <div className="mb-metrics mbv">
            {METRICS.map((m) => (
              <div key={m.l} className="mb-metric-card">
                <div className="mb-metric-n">{m.n}</div>
                <div className="mb-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-s">
        <div className="mb-c">
          <div className="mb-label mbv">Voices</div>
          <div className="mb-title mbv">
            Internal<br /><em>Feedback.</em>
          </div>
          <div className="mb-fb-grid">
            {FEEDBACK.map((fb, i) => (
              <div key={i} className="mb-fb-card mbv">
                <div className="mb-fb-q">&ldquo;{fb.q}&rdquo;</div>
                <div>
                  <div className="mb-fb-n">{fb.n}</div>
                  <div className="mb-fb-r">{fb.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-c">
        <div className="mb-footer">
          <div className="mb-label">Category Directories {'>>>'}</div>
          <div className="mb-footer-links">
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="mb-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Script id="mb-init" strategy="lazyOnload">{`
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
            document.querySelectorAll('.mbv').forEach(function(el){ obs.observe(el); });
            setTimeout(function(){
              document.querySelectorAll('.mbv').forEach(function(el){ el.classList.add('vis'); });
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

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'

const PILLARS = [
  {
    num: "01",
    h: "The Dual-Audience Dilemma",
    t: "STAKEHOLDER_PSYCHOLOGY",
    b: "Designing for children is one of FMCG's toughest strategic challenges. If packaging looks clinical or medicinal, the child immediately rejects it. If it looks like junk candy, the parent scrutinizes the back of pack and leaves it on the shelf. Lil'Stars solves both simultaneously: whimsical, friendly front-of-pack appeal paired with uncompromising parental reassurance."
  },
  {
    num: "02",
    h: "Millet Pancake Architecture",
    t: "CLEAN_LABEL_POUCH_SYSTEM",
    b: "Engineered the packaging hierarchy for the 250g Millet & Quinoa Pancake Mix range (Natural, Choco Delight, and Berry Blast). Centered bold, authoritative proof points — 'NO Maida · NO Refined Sugar · NO Baking Soda' — directly below the flavor banner to instantly disarm parental skepticism."
  },
  {
    num: "03",
    h: "Kids Functional Spreads",
    t: "NUT_BUTTER_EXPANSION",
    b: "Extended the Lil'Stars visual language across 200g and 325g jars, including Peanut Butter Crunchy Dark Chocolate, Peanut Butter & Jaggery, and Hazelnut Milk Chocolate Spread. Used warm chromatic flavor-coding and soft typography to bridge indulgent taste with nutrient density."
  },
  {
    num: "04",
    h: "AI & Motion Direction",
    t: "QUICK_COMMERCE_CONVERSION",
    b: "Authored and directed scene-by-scene video generation scripts for Blinkit and Instagram Reels. Coordinated physics-realistic pancake flips, cascading chocolate chips, and kinetic claim roll-ins in Veo and After Effects to prove product fluffiness and appeal in under 8 seconds."
  }
]

const METRICS = [
  { n: "3 SKUs", l: "Millet & Quinoa Pancake Mix Range" },
  { n: "0%", l: "Maida, Refined Sugar & Chemical Soda" },
  { n: "9g", l: "Complete Protein per Serving" },
  { n: "8 Sec", l: "Q-Commerce Video Asset Conversion Window" }
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
    desc: "Vibrant berry chromatic palette engineered to pop on quick-commerce detail carousels (Blinkit & Zepto).",
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
    desc: "Clean-label Nutella challenger formulated without palm oil or excessive sugar, wrapped in warm playful graphics.",
    src: "/images/jusamazin/lilstars/hazelnut_milk_jar.png"
  }
]

const SCRIPT_EXCERPT = [
  { scene: "01", time: "0:00 – 1:50s", visual: "Pouch slides into frame; ceramic plate with fluffy chocolate pancake slides from right; tiny mini chocolate chips rain down naturally.", vo: "\"No Maida...\" — warm, confident maternal delivery." },
  { scene: "02", time: "1:50 – 2:50s", visual: "Macro push-in on pancake stack. Kinetic typography animates in: NO Maida · NO Refined Sugar · NO Baking Soda.", vo: "\"No Refined Sugar... No Baking Soda.\"" },
  { scene: "03", time: "2:50 – 6:00s", visual: "Food beauty shot: maple syrup drizzling over fresh berries, banana slices, and chocolate curls. Slow orbit parallax.", vo: "\"Made with 5 whole grains and 9g complete protein — breakfast kids love.\"" },
  { scene: "04", time: "6:50 – 8:00s", visual: "Reverse transition snapping cleanly back to the centered product pack with clean-nutrition seal.", vo: "\"Make the switch to clean superfoods.\"" }
]

const FEEDBACK = [
  {
    n: "Shilpa Moglishetty",
    r: "Co-Founder, Jus'Amazin",
    q: "Lil'Stars needed to feel gentle yet exciting. Shivaraj found the sweet spot between what makes a 6-year-old smile at breakfast and what gives a mother peace of mind when reading the ingredient list."
  },
  {
    n: "Jitin Munjal",
    r: "Co-Founder & CEO, Jus'Amazin",
    q: "The pancake mix videos developed for quick commerce simplified consumer education instantly. Showing the pancake texture alongside the 'NO' claims directly lifted our add-to-cart rate on Blinkit."
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
  { l: 'Jars', h: '/jusamazin/jars' },
  { l: 'Brand Guidelines', h: '/jusamazin/brand-guidelines' },
  { l: 'Marketing', h: '/jusamazin/marketing' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ls-bg:#0A0906;--ls-white:#F0EDE6;--ls-accent:#FF9F1C;--ls-coral:#FF4D6D;
  --ls-blue:#4CC9F0;--ls-muted:rgba(240,237,230,0.5);--ls-border:rgba(240,237,230,0.08);
  --ls-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--ls-bg);color:var(--ls-white);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}

.ls-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--ls-border)}
.ls-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 20% 75%,rgba(255,159,28,0.2),transparent 55%),radial-gradient(ellipse at 80% 25%,rgba(255,77,109,0.12),transparent 55%),var(--ls-bg);animation:lsPulse 10s ease-in-out infinite}
@keyframes lsPulse{0%,100%{opacity:.85}50%{opacity:1}}
.ls-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%;max-width:1400px;margin:0 auto}
.ls-hero-tag{font-family:var(--M);font-size:.62rem;letter-spacing:.28em;color:var(--ls-accent);margin-bottom:2rem;display:flex;align-items:center;gap:1rem}
.ls-hero-tag::before{content:'';width:32px;height:1px;background:var(--ls-accent)}
.ls-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,13vw,13rem);line-height:.95;margin-bottom:1.5rem}
.ls-hero h1 span{color:var(--ls-accent)}
.ls-hero h1 em{font-style:normal;color:var(--ls-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.7;max-width:680px}

.ls-c{max-width:1400px;margin:0 auto;padding:0 5vw}
.ls-s{padding:8rem 0;border-bottom:1px solid var(--ls-border)}
.ls-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;color:var(--ls-accent);margin-bottom:1.5rem}
.ls-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}
.ls-title em{font-style:normal;color:var(--ls-muted);font-family:var(--S);font-weight:300}
.ls-body{font-size:1.12rem;line-height:1.95;color:var(--ls-muted);max-width:680px}

.ls-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.ls-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--ls-border);border-radius:32px;padding:3rem 2.5rem;backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.ls-pill-card:hover{transform:translateY(-6px);border-color:rgba(255,159,28,0.45);box-shadow:0 20px 45px rgba(0,0,0,0.5)}
.ls-pill-num{font-family:var(--D);font-size:3rem;line-height:1;opacity:.06;position:absolute;top:1.5rem;right:1.5rem}
.ls-pill-tag{font-family:var(--M);font-size:.48rem;letter-spacing:.2em;opacity:.35;margin-bottom:.8rem;color:var(--ls-accent)}
.ls-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.8rem;margin-bottom:1rem;line-height:1.2}
.ls-pill-card p{font-size:.95rem;line-height:1.85;color:var(--ls-muted)}

.ls-metrics{display:flex;flex-wrap:wrap;gap:1.4rem;margin-top:4rem}
.ls-metric-card{flex:1 1 220px;padding:2.2rem 2.4rem;border:1px solid var(--ls-border);border-radius:9999px;background:rgba(240,237,230,0.03);backdrop-filter:blur(24px);text-align:center;transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s ease, box-shadow .35s ease}
.ls-metric-card:hover{transform:translateY(-6px);border-color:rgba(255,159,28,0.45);box-shadow:0 18px 40px rgba(0,0,0,0.5)}
.ls-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2.2rem,4.5vw,3.8rem);color:var(--ls-accent);line-height:1}
.ls-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--ls-muted);margin-top:.6rem}

.ls-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.8rem;margin-top:4rem}
.ls-item{border-radius:28px;overflow:hidden;border:1px solid var(--ls-border);background:rgba(240,237,230,0.02);display:flex;flex-direction:column;transition:border-color .4s, transform .4s}
.ls-item:hover{border-color:rgba(255,159,28,0.4);transform:scale(1.015)}
.ls-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.ls-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.ls-item:hover .ls-img-wrap img{transform:scale(1.05)}
.ls-info{padding:1.8rem;display:flex;flex-direction:column;gap:.6rem}
.ls-item-title{font-family:var(--D);font-weight:900;font-size:1.25rem}
.ls-item-desc{font-size:.88rem;line-height:1.75;color:var(--ls-muted)}

.ls-script-box{background:rgba(240,237,230,0.02);border:1px solid var(--ls-border);border-radius:32px;padding:3rem;margin-top:4rem}
.ls-script-item{display:grid;grid-template-columns:80px 140px 1fr 1fr;gap:1.5rem;padding:1.5rem 0;border-bottom:1px solid var(--ls-border);align-items:center}
.ls-script-item:last-child{border-bottom:none}
.ls-sc-num{font-family:var(--D);font-size:1.8rem;color:var(--ls-accent)}
.ls-sc-time{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;opacity:.4}
.ls-sc-vis{font-size:.9rem;line-height:1.7;color:var(--ls-muted)}
.ls-sc-vo{font-size:.9rem;line-height:1.7;color:var(--ls-white);font-style:italic}

.ls-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--ls-border)}
.ls-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(255,159,28,0.1),transparent 65%)}
.ls-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.ls-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.ls-soul-q strong{color:var(--ls-white);font-weight:500}

.ls-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.ls-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--ls-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.ls-fb-q{font-size:1.02rem;line-height:1.85;color:var(--ls-muted);font-style:italic;flex:1}
.ls-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.ls-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--ls-accent);margin-top:.2rem}

.ls-footer{padding:5rem 0 3rem;border-top:1px solid var(--ls-border)}
.ls-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.ls-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--ls-muted);transition:color .3s}
.ls-footer-link:hover{color:var(--ls-accent)}

.lsv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.lsv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .ls-pillars,.ls-grid,.ls-fb-grid{grid-template-columns:1fr}
  .ls-script-item{grid-template-columns:1fr;gap:.5rem}
  .ls-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .ls-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function LilStarsPage() {
  return (
    <>
      <Head>
        <title>Lil&apos;Stars Kids Clean Nutrition &amp; Motion — Sivnco</title>
        <meta name="description" content="Sub-brand architecture, millet pancake mix packaging, functional kids nut butters, and Veo motion scripting by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/lilstars" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/jusamazin" backLabel="← Jus'Amazin Suite" />

      <div className="ls-hero">
        <div className="ls-hero-bg" />
        <div className="ls-hero-inner">
          <div className="ls-hero-tag">Sub-Brand Identity · Packaging Architecture · Motion Direction</div>
          <h1>
            Lil&apos;<span>Stars</span><br />Nutrition
            <em>
              Solving the dual-audience dilemma in children&apos;s food: disarming parental skepticism
              with pediatric transparency while captivating young kids through cheerful visual energy.
            </em>
          </h1>
        </div>
      </div>

      <section className="ls-s">
        <div className="ls-c">
          <div className="ls-label lsv">Sub-Brand Strategy</div>
          <div className="ls-title lsv">
            The Dual-Audience<br /><em>Puzzle.</em>
          </div>
          <p className="ls-body lsv">
            Children&apos;s food is scrutinized twice: first by the parent checking for hidden sugars and chemical additives,
            and then by the child who demands excitement and instant appetite appeal. Lil&apos;Stars bridges this divide through
            a disciplined two-tier information architecture.
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
          <div className="ls-label lsv">Product System</div>
          <div className="ls-title lsv">
            Multi-SKU<br /><em>Architecture.</em>
          </div>
          <p className="ls-body lsv">
            From 250g flexible stand-up pouches to 200g and 325g jars, the visual system maintains clear brand markers
            across diverse packaging geometries and substrate materials.
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
          <div className="ls-label lsv">Motion Concept &amp; Storyboarding</div>
          <div className="ls-title lsv">
            Veo AI &amp; Motion<br /><em>Direction.</em>
          </div>
          <p className="ls-body lsv">
            To drive immediate sales on quick commerce (Blinkit and Zepto), I scripted and art-directed an 8-second
            video campaign. By coupling physics-accurate pancake movement with rapid claim roll-ins, the creative demonstrated
            taste and nutritional integrity within the first 3 seconds.
          </p>

          <div className="ls-script-box lsv">
            <div style={{ fontFamily: 'var(--M)', fontSize: '.58rem', letterSpacing: '.2em', color: 'var(--ls-accent)', marginBottom: '1.5rem' }}>
              SCENE-BY-SCENE PRODUCTION SCRIPT BREAKDOWN (V2 REVISED)
            </div>
            {SCRIPT_EXCERPT.map((sc) => (
              <div key={sc.scene} className="ls-script-item">
                <div className="ls-sc-num">{sc.scene}</div>
                <div className="ls-sc-time">{sc.time}</div>
                <div className="ls-sc-vis">{sc.visual}</div>
                <div className="ls-sc-vo">{sc.vo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ls-c">
        <div className="ls-soul lsv">
          <div className="ls-soul-inner">
            <div className="ls-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>The Principle</div>
            <blockquote className="ls-soul-q">
              &ldquo;You don&apos;t need cartoon gimmicks to make food attractive to kids. When you pair
              <strong>honest ingredients with pure visual energy</strong> and bold clarity, you respect the intelligence
              of both the mother buying the pack and the child enjoying it.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="ls-s">
        <div className="ls-c">
          <div className="ls-label lsv">Performance Metrics</div>
          <div className="ls-title lsv">
            Category<br /><em>Metrics.</em>
          </div>
          <div className="ls-metrics lsv">
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
          <div className="ls-label lsv">Voices</div>
          <div className="ls-title lsv">
            Feedback<br /><em>Matrix.</em>
          </div>
          <div className="ls-fb-grid">
            {FEEDBACK.map((fb, i) => (
              <div key={i} className="ls-fb-card lsv">
                <div className="ls-fb-q">&ldquo;{fb.q}&rdquo;</div>
                <div>
                  <div className="ls-fb-n">{fb.n}</div>
                  <div className="ls-fb-r">{fb.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ls-c">
        <div className="ls-footer">
          <div className="ls-label">Category Directories {'>>>'}</div>
          <div className="ls-footer-links">
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="ls-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Script id="ls-init" strategy="lazyOnload">{`
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
            document.querySelectorAll('.lsv').forEach(function(el){ obs.observe(el); });
            setTimeout(function(){
              document.querySelectorAll('.lsv').forEach(function(el){ el.classList.add('vis'); });
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

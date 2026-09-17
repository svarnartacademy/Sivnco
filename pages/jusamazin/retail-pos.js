import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'

const PILLARS = [
  {
    num: "01",
    h: "Physical Shelf Physics",
    t: "2_SECOND_INTERCEPTION",
    b: "A brand that exists only on flat digital mockups fails in the wild. Under harsh retail fluorescent lights and surrounded by 40 competitor facings, packaging has under 2 seconds to arrest shopper gaze. I directed the visual system to function at three distinct focal ranges: 10 meters (color-blocking), 2 meters (category icon clarity), and 30 centimeters (nutritional trust)."
  },
  {
    num: "02",
    h: "5ft × 2ft FSU Engineering",
    t: "FREE_STANDING_UNITS",
    b: "Engineered complete 3D models and production specifications for our standalone 5ft × 2ft retail Free-Standing Display Units (FSUs). Calculated structural shelf-loading for heavy glass jars, designed modular header brand crowns, and integrated side-panel category education that turns passive floor displays into active sales ambassadors."
  },
  {
    num: "03",
    h: "Category Parasite Strips",
    t: "HIGH_VELOCITY_CROSS_SELLING",
    b: "Designed high-impact parasite clip strips engineered for aisle ends and cross-category merchandising in modern supermarkets. These units placed our 30-Sec Almond Milk sachets and snack packs right beside legacy coffee and tea aisles, generating spontaneous impulse adoption."
  },
  {
    num: "04",
    h: "Global Trade Fair Pavilions",
    t: "EXHIBITION_ARCHITECTURE",
    b: "Translated 2D brand tokens into physical pavilion environments across premier trade expos — including AAHAR International Food Fair (Mar 2024), Dubai Expo (Oct 2024), Bengaluru Habba (Dec 2024), and the National Millet Expo (Jan 2025). Designed sampling counters, large-format fabric canopies, and lighting grids that funneled thousands of attendees directly into our product experience."
  }
]

const METRICS = [
  { n: "5ft × 2ft", l: "Custom Retail FSU Units Engineered" },
  { n: "6+", l: "Major International & National Expos (Dubai, AAHAR, Habba)" },
  { n: "100+", l: "Modern Trade In-Store Touchpoints" },
  { n: "3D", l: "Spatial CAD & Blender Environmental Modeling" }
]

const GALLERY = [
  {
    id: "fsu_front",
    title: "5ft × 2ft Free-Standing Merchandising Unit (FSU)",
    desc: "Photorealistic 3D render of the standalone retail display unit, balancing shelf weight-load capacities with bold brand crown visibility.",
    src: "/images/jusamazin/pos/fsu_retail_display.png"
  },
  {
    id: "fsu_side",
    title: "FSU Side-Panel Category Architecture",
    desc: "Side-view render showcasing category educational hierarchy and clean nutrition certification badges.",
    src: "/images/jusamazin/pos/fsu_retail_side.png"
  },
  {
    id: "condo_carnival",
    title: "Experiential Pavilion — Condo Festival Setup",
    desc: "Comprehensive 3D environment layout for outdoor consumer festivals, integrating sampling bars, canopies, and retail checkout.",
    src: "/images/jusamazin/pos/condo_carnival_booth.png"
  },
  {
    id: "trade_photo_01",
    title: "Bengaluru Habba — Consumer Sampling Pavilion",
    desc: "Live field trial photograph demonstrating real-world brand canopy presence, product facings, and active consumer tasting crowds.",
    src: "/images/jusamazin/pos/trade_event_photo_01.jpg"
  },
  {
    id: "trade_photo_02",
    title: "Live Retail Exhibition Counter",
    desc: "Tiered countertop product displays showing clean-label nut butters, superfoods, and festive gift boxes in high-traffic trade environment.",
    src: "/images/jusamazin/pos/trade_event_photo_02.jpg"
  },
  {
    id: "trade_photo_03",
    title: "Physical Market Tasting Booth",
    desc: "On-site consumer feedback booth measuring purchase intent and taste conversion for new FMCG product launches.",
    src: "/images/jusamazin/pos/trade_event_photo_03.jpg"
  }
]

const FEEDBACK = [
  {
    n: "Amarjit Singh",
    r: "Sales Head & Retail Distribution Lead",
    q: "The FSU units designed by Shivaraj were a game-changer for getting prominent floor placement in modern retail. Supermarket managers loved how sturdy and eye-catching the display was, and it immediately drove higher unit sales per square foot."
  },
  {
    n: "Jitin Munjal",
    r: "Co-Founder & CEO, Jus'Amazin",
    q: "At AAHAR and Dubai, our stalls didn't look like an indie startup; they commanded the visual authority of a multi-crore FMCG player. That physical presence opened distribution dialogues across both domestic and export markets."
  }
]

const NAV = [
  { l: 'Festive Gifting', h: '/jusamazin/gifting' },
  { l: 'Lil\'Stars (Kids)', h: '/jusamazin/lilstars' },
  { l: 'Mom2B (Maternal)', h: '/jusamazin/mom2b' },
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
  --pos-bg:#0A0906;--pos-white:#F0EDE6;--pos-accent:#0066FF;--pos-amber:#FFB703;
  --pos-muted:rgba(240,237,230,0.5);--pos-border:rgba(240,237,230,0.08);
  --pos-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--pos-bg);color:var(--pos-white);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}

.pos-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--pos-border)}
.pos-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 75%,rgba(0,102,255,0.2),transparent 55%),radial-gradient(ellipse at 80% 25%,rgba(255,183,3,0.12),transparent 55%),var(--pos-bg);animation:posPulse 10s ease-in-out infinite}
@keyframes posPulse{0%,100%{opacity:.85}50%{opacity:1}}
.pos-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%;max-width:1400px;margin:0 auto}
.pos-hero-tag{font-family:var(--M);font-size:.62rem;letter-spacing:.28em;color:var(--pos-accent);margin-bottom:2rem;display:flex;align-items:center;gap:1rem}
.pos-hero-tag::before{content:'';width:32px;height:1px;background:var(--pos-accent)}
.pos-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,13vw,13rem);line-height:.95;margin-bottom:1.5rem}
.pos-hero h1 span{color:var(--pos-accent)}
.pos-hero h1 em{font-style:normal;color:var(--pos-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.7;max-width:680px}

.pos-c{max-width:1400px;margin:0 auto;padding:0 5vw}
.pos-s{padding:8rem 0;border-bottom:1px solid var(--pos-border)}
.pos-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;color:var(--pos-accent);margin-bottom:1.5rem}
.pos-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}
.pos-title em{font-style:normal;color:var(--pos-muted);font-family:var(--S);font-weight:300}
.pos-body{font-size:1.12rem;line-height:1.95;color:var(--pos-muted);max-width:680px}

.pos-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.pos-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--pos-border);border-radius:32px;padding:3rem 2.5rem;backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.pos-pill-card:hover{transform:translateY(-6px);border-color:rgba(0,102,255,0.45);box-shadow:0 20px 45px rgba(0,0,0,0.5)}
.pos-pill-num{font-family:var(--D);font-size:3rem;line-height:1;opacity:.06;position:absolute;top:1.5rem;right:1.5rem}
.pos-pill-tag{font-family:var(--M);font-size:.48rem;letter-spacing:.2em;opacity:.35;margin-bottom:.8rem;color:var(--pos-accent)}
.pos-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.8rem;margin-bottom:1rem;line-height:1.2}
.pos-pill-card p{font-size:.95rem;line-height:1.85;color:var(--pos-muted)}

.pos-metrics{display:flex;flex-wrap:wrap;gap:1.4rem;margin-top:4rem}
.pos-metric-card{flex:1 1 220px;padding:2.2rem 2.4rem;border:1px solid var(--pos-border);border-radius:9999px;background:rgba(240,237,230,0.03);backdrop-filter:blur(24px);text-align:center;transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s ease, box-shadow .35s ease}
.pos-metric-card:hover{transform:translateY(-6px);border-color:rgba(0,102,255,0.45);box-shadow:0 18px 40px rgba(0,0,0,0.5)}
.pos-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2.2rem,4.5vw,3.8rem);color:var(--pos-accent);line-height:1}
.pos-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--pos-muted);margin-top:.6rem}

.pos-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.8rem;margin-top:4rem}
.pos-item{border-radius:28px;overflow:hidden;border:1px solid var(--pos-border);background:rgba(240,237,230,0.02);display:flex;flex-direction:column;transition:border-color .4s, transform .4s}
.pos-item:hover{border-color:rgba(0,102,255,0.4);transform:scale(1.015)}
.pos-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.pos-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.pos-item:hover .pos-img-wrap img{transform:scale(1.05)}
.pos-info{padding:1.8rem;display:flex;flex-direction:column;gap:.6rem}
.pos-item-title{font-family:var(--D);font-weight:900;font-size:1.25rem}
.pos-item-desc{font-size:.88rem;line-height:1.75;color:var(--pos-muted)}

.pos-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--pos-border)}
.pos-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(0,102,255,0.1),transparent 65%)}
.pos-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.pos-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.pos-soul-q strong{color:var(--pos-white);font-weight:500}

.pos-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.pos-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--pos-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.pos-fb-q{font-size:1.02rem;line-height:1.85;color:var(--pos-muted);font-style:italic;flex:1}
.pos-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.pos-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--pos-accent);margin-top:.2rem}

.pos-footer{padding:5rem 0 3rem;border-top:1px solid var(--pos-border)}
.pos-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.pos-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--pos-muted);transition:color .3s}
.pos-footer-link:hover{color:var(--pos-accent)}

.posv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.posv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .pos-pillars,.pos-grid,.pos-fb-grid{grid-template-columns:1fr}
  .pos-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .pos-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function RetailPOSPage() {
  return (
    <>
      <Head>
        <title>Retail POS &amp; Spatial Exhibition Design — Sivnco</title>
        <meta name="description" content="5ft Free-Standing Merchandising Units (FSU), category parasite clip strips, and trade show pavilion architecture by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/retail-pos" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/jusamazin" backLabel="← Jus'Amazin Suite" />

      <div className="pos-hero">
        <div className="pos-hero-bg" />
        <div className="pos-hero-inner">
          <div className="pos-hero-tag">Spatial Branding · 3D Retail POS Engineering · Exhibition Architecture</div>
          <h1>
            Retail <span>POS</span><br />&amp; Spaces
            <em>
              From 2D artboards to high-traffic physical retail floors: 5ft Free-Standing Units,
              cross-merchandising parasite strips, and trade fair pavilion architecture across India and Dubai.
            </em>
          </h1>
        </div>
      </div>

      <section className="pos-s">
        <div className="pos-c">
          <div className="pos-label posv">Physical Grounding</div>
          <div className="pos-title posv">
            The Physics of<br /><em>the Aisle.</em>
          </div>
          <p className="pos-body posv">
            Brand identity is tested most brutally in physical retail. When a customer walks down an aisle with 50 competing options,
            design must overcome lighting glare, shelf overcrowding, and distance. I direct brand systems to claim physical authority
            across spatial dimensions — from standalone supermarket displays to international exhibition pavilions.
          </p>

          <div className="pos-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="pos-pill-card posv">
                <div className="pos-pill-num">{p.num}</div>
                <div className="pos-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pos-s">
        <div className="pos-c">
          <div className="pos-label posv">Environmental Portfolio</div>
          <div className="pos-title posv">
            Retail Units &amp;<br /><em>Pavilion Setups.</em>
          </div>
          <p className="pos-body posv">
            Showcasing 3D CAD modeling, retail renders, and on-ground field deployments across commercial supermarkets and trade fairs.
          </p>

          <div className="pos-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="pos-item posv">
                <div className="pos-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="pos-info">
                  <div className="pos-item-title">{g.title}</div>
                  <div className="pos-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pos-c">
        <div className="pos-soul posv">
          <div className="pos-soul-inner">
            <div className="pos-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>The Spatial Rule</div>
            <blockquote className="pos-soul-q">
              &ldquo;Great packaging draws the hand; <strong>great spatial engineering commands the entire room</strong>.
              When your display stands tall, distributes load effortlessly, and tells a clear story from 10 paces away,
              you don&apos;t just sell products — you establish permanent brand real estate.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="pos-s">
        <div className="pos-c">
          <div className="pos-label posv">Execution Metrics</div>
          <div className="pos-title posv">
            Spatial<br /><em>Metrics.</em>
          </div>
          <div className="pos-metrics posv">
            {METRICS.map((m) => (
              <div key={m.l} className="pos-metric-card">
                <div className="pos-metric-n">{m.n}</div>
                <div className="pos-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pos-s">
        <div className="pos-c">
          <div className="pos-label posv">Voices</div>
          <div className="pos-title posv">
            Stakeholder<br /><em>Feedback.</em>
          </div>
          <div className="pos-fb-grid">
            {FEEDBACK.map((fb, i) => (
              <div key={i} className="pos-fb-card posv">
                <div className="pos-fb-q">&ldquo;{fb.q}&rdquo;</div>
                <div>
                  <div className="pos-fb-n">{fb.n}</div>
                  <div className="pos-fb-r">{fb.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pos-c">
        <div className="pos-footer">
          <div className="pos-label">Category Directories {'>>>'}</div>
          <div className="pos-footer-links">
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="pos-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Script id="pos-init" strategy="lazyOnload">{`
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
            document.querySelectorAll('.posv').forEach(function(el){ obs.observe(el); });
            setTimeout(function(){
              document.querySelectorAll('.posv').forEach(function(el){ el.classList.add('vis'); });
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

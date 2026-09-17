import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'

const PILLARS = [
  {
    num: "01",
    h: "The Luxury Pivot",
    t: "BEYOND_PANTRY_CONVENTIONS",
    b: "Everyday FMCG packaging fights for functional shelf efficiency; festive gifting demands emotional elevation and unboxing theater. We shifted Jus'Amazin from a daily pantry staple into a high-perceived-value celebratory choice, designing multi-tier presentation boxes that compete directly with legacy luxury confectionery."
  },
  {
    num: "02",
    h: "Modular Rigid Architecture",
    t: "PRODUCTION_EFFICIENCY",
    b: "Developed a versatile box architecture: sliding rigid trays in signature Royal Purple, deep crimson ethnic boxes with subtle gold-embossed mandalas, and contemporary yellow gift packs. This modularity allowed the operations team to assemble custom B2B and festive corporate hampers in minutes without re-engineering base dielines."
  },
  {
    num: "03",
    h: "Tactile Substrate Rigor",
    t: "MATERIAL_FINISH_PRECISION",
    b: "Engineered dielines with precision fold tolerances for heavy GSM rigid board, soft-touch matte lamination, and selective spot UV finishes. The gold foil detailing was calibrated to catch ambient festival lighting without appearing ostentatious, preserving the clean-label brand ethos."
  },
  {
    num: "04",
    h: "Windowed Pouch Ecosystem",
    t: "DYNAMIC_ASSORTMENTS",
    b: "To scale beyond heavy glass jars, designed the Windowed Presentation Box for high-protein seed and nut snack pouches. The die-cut aperture showcases the vibrant chromatic packaging inside while maintaining structural rigidity during pan-India courier transit."
  }
]

const METRICS = [
  { n: "100%", l: "Bespoke Structural Packaging System" },
  { n: "5+", l: "Gift Box & Tray Architectures Engineered" },
  { n: "3000px", l: "Blender 3D Photorealistic Visualizations" },
  { n: "0", l: "External Agency Dependency for Gifting" }
]

const GALLERY = [
  {
    id: "purple_tray",
    title: "Contemporary Sliding Tray (Royal Purple)",
    desc: "3000px photorealistic 3D render of the flagship Royal Purple gift tray featuring gold foil accents and recessed jar compartments.",
    src: "/images/jusamazin/gifting/purple_contemporary_tray.png"
  },
  {
    id: "red_ethnic_tray",
    title: "Ethnic Heritage Tray (Crimson & Gold)",
    desc: "Festive collection tray celebrating Indian traditional craftsmanship through gold mandala line-art balanced with clean typographic structure.",
    src: "/images/jusamazin/gifting/red_ethnic_tray.png"
  },
  {
    id: "yellow_box",
    title: "Modern Contemporary Box (Amber Yellow)",
    desc: "Vibrant high-contrast gift box designed for youth, corporate onboarding kits, and modern celebratory gifting.",
    src: "/images/jusamazin/gifting/yellow_funky_box.png"
  },
  {
    id: "red_mini",
    title: "Miniature Festive Hamper Box",
    desc: "Compact dual-jar rigid gift box engineered for lightweight logistics and high-volume corporate giveaways.",
    src: "/images/jusamazin/gifting/red_mini_box.png"
  },
  {
    id: "windowed_box",
    title: "Windowed Pouch Gift Presentation",
    desc: "Structural carton with precision die-cut window displaying assorted snack pouches (Salted Almonds, Cashews, Seed Mixes).",
    src: "/images/jusamazin/gifting/windowed_pouch_box.png"
  },
  {
    id: "final_all",
    title: "Complete 2024–2025 Gifting Ecosystem",
    desc: "The full architectural portfolio spanning rigid boxes, slider trays, artisanal chocolates, and pouch presentation units.",
    src: "/images/jusamazin/gifting/final_all_gifting.png"
  }
]

const FEEDBACK = [
  {
    n: "Jitin Munjal",
    r: "Co-Founder & CEO, Jus'Amazin",
    q: "The gifting line elevated how corporate clients and consumers see our brand. Moving to rigid trays with custom gold finishes opened up high-margin festive revenue that our everyday jars simply couldn't touch."
  },
  {
    n: "Roshan Kulranjan",
    r: "Head of Operations & Logistics",
    q: "The modularity Shivaraj built into the gift box dielines saved our fulfillment team during Diwali. We could swap jar configurations in seconds without damaging the outer sleeves or needing custom inserts."
  }
]

const NAV = [
  { l: 'Lil\'Stars (Kids)', h: '/jusamazin/lilstars' },
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
  --gf-bg:#0A0906;--gf-white:#F0EDE6;--gf-accent:#D4600A;--gf-purple:#7B2CBF;
  --gf-gold:#D4AF37;--gf-muted:rgba(240,237,230,0.5);--gf-border:rgba(240,237,230,0.08);
  --gf-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--gf-bg);color:var(--gf-white);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}

.gf-hero{min-height:100vh;display:flex;align-items:flex-end;position:relative;overflow:hidden;border-bottom:1px solid var(--gf-border)}
.gf-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 75%,rgba(123,44,191,0.22),transparent 55%),radial-gradient(ellipse at 80% 25%,rgba(212,175,55,0.12),transparent 55%),var(--gf-bg);animation:gfPulse 10s ease-in-out infinite}
@keyframes gfPulse{0%,100%{opacity:.85}50%{opacity:1}}
.gf-hero-inner{position:relative;z-index:2;padding:0 5vw 5rem;width:100%;max-width:1400px;margin:0 auto}
.gf-hero-tag{font-family:var(--M);font-size:.62rem;letter-spacing:.28em;color:var(--gf-gold);margin-bottom:2rem;display:flex;align-items:center;gap:1rem}
.gf-hero-tag::before{content:'';width:32px;height:1px;background:var(--gf-gold)}
.gf-hero h1{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,13vw,13rem);line-height:.95;margin-bottom:1.5rem}
.gf-hero h1 span{color:var(--gf-gold)}
.gf-hero h1 em{font-style:normal;color:var(--gf-muted);font-family:var(--S);font-weight:300;display:block;font-size:.32em;margin-top:1.5rem;line-height:1.7;max-width:680px}

.gf-c{max-width:1400px;margin:0 auto;padding:0 5vw}
.gf-s{padding:8rem 0;border-bottom:1px solid var(--gf-border)}
.gf-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;color:var(--gf-gold);margin-bottom:1.5rem}
.gf-title{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,6vw,6.5rem);line-height:1.05;margin-bottom:2.5rem}
.gf-title em{font-style:normal;color:var(--gf-muted);font-family:var(--S);font-weight:300}
.gf-body{font-size:1.12rem;line-height:1.95;color:var(--gf-muted);max-width:680px}

.gf-pillars{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.gf-pill-card{background:rgba(240,237,230,0.025);border:1px solid var(--gf-border);border-radius:32px;padding:3rem 2.5rem;backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.gf-pill-card:hover{transform:translateY(-6px);border-color:rgba(212,175,55,0.45);box-shadow:0 20px 45px rgba(0,0,0,0.5)}
.gf-pill-num{font-family:var(--D);font-size:3rem;line-height:1;opacity:.06;position:absolute;top:1.5rem;right:1.5rem}
.gf-pill-tag{font-family:var(--M);font-size:.48rem;letter-spacing:.2em;opacity:.35;margin-bottom:.8rem;color:var(--gf-gold)}
.gf-pill-card h3{font-family:var(--D);font-weight:900;font-size:1.8rem;margin-bottom:1rem;line-height:1.2}
.gf-pill-card p{font-size:.95rem;line-height:1.85;color:var(--gf-muted)}

.gf-metrics{display:flex;flex-wrap:wrap;gap:1.4rem;margin-top:4rem}
.gf-metric-card{flex:1 1 220px;padding:2.2rem 2.4rem;border:1px solid var(--gf-border);border-radius:9999px;background:rgba(240,237,230,0.03);backdrop-filter:blur(24px);text-align:center;transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s ease, box-shadow .35s ease}
.gf-metric-card:hover{transform:translateY(-6px);border-color:rgba(212,175,55,0.45);box-shadow:0 18px 40px rgba(0,0,0,0.5)}
.gf-metric-n{font-family:var(--D);font-weight:900;font-size:clamp(2.2rem,4.5vw,3.8rem);color:var(--gf-gold);line-height:1}
.gf-metric-l{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--gf-muted);margin-top:.6rem}

.gf-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;margin-top:4rem}
.gf-item{border-radius:28px;overflow:hidden;border:1px solid var(--gf-border);background:rgba(240,237,230,0.02);display:flex;flex-direction:column;transition:border-color .4s, transform .4s}
.gf-item:hover{border-color:rgba(212,175,55,0.4);transform:scale(1.015)}
.gf-img-wrap{aspect-ratio:4/3;position:relative;overflow:hidden;background:#050505}
.gf-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(0.16,1,0.3,1)}
.gf-item:hover .gf-img-wrap img{transform:scale(1.05)}
.gf-info{padding:2rem 2.2rem;display:flex;flex-direction:column;gap:.6rem}
.gf-item-title{font-family:var(--D);font-weight:900;font-size:1.4rem}
.gf-item-desc{font-size:.92rem;line-height:1.75;color:var(--gf-muted)}

.gf-soul{background:#050505;padding:9rem 5vw;text-align:center;border-radius:36px;margin:6rem 0;position:relative;overflow:hidden;border:1px solid var(--gf-border)}
.gf-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(212,175,55,0.1),transparent 65%)}
.gf-soul-inner{max-width:880px;margin:0 auto;position:relative;z-index:2}
.gf-soul-q{font-family:var(--S);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:2;color:rgba(240,237,230,0.8);font-style:italic;font-weight:300}
.gf-soul-q strong{color:var(--gf-white);font-weight:500}

.gf-fb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.8rem;margin-top:4rem}
.gf-fb-card{background:rgba(240,237,230,0.025);border:1px solid var(--gf-border);border-radius:28px;padding:2.5rem;display:flex;flex-direction:column;gap:1.5rem}
.gf-fb-q{font-size:1.02rem;line-height:1.85;color:var(--gf-muted);font-style:italic;flex:1}
.gf-fb-n{font-family:var(--D);font-weight:900;font-size:1.15rem}
.gf-fb-r{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;color:var(--gf-gold);margin-top:.2rem}

.gf-footer{padding:5rem 0 3rem;border-top:1px solid var(--gf-border)}
.gf-footer-links{display:flex;flex-wrap:wrap;gap:2rem;margin:2rem 0 3.5rem}
.gf-footer-link{font-family:var(--D);font-weight:900;font-size:clamp(1.2rem,2.5vw,2rem);color:var(--gf-muted);transition:color .3s}
.gf-footer-link:hover{color:var(--gf-gold)}

.gfv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.gfv.vis{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .gf-pillars,.gf-grid,.gf-fb-grid{grid-template-columns:1fr}
  .gf-metric-card{flex:1 1 calc(50% - 1.4rem)}
  .gf-hero h1{font-size:clamp(3.2rem,11vw,6rem)}
}
`

export default function GiftingPage() {
  return (
    <>
      <Head>
        <title>Festive &amp; Corporate Luxury Gifting — Sivnco</title>
        <meta name="description" content="Structural rigid packaging, contemporary sliding trays, ethnic gold-embossed collections, and 3D product visualizations by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/jusamazin/gifting" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      <Navbar backLink="/jusamazin" backLabel="← Jus'Amazin Suite" />

      <div className="gf-hero">
        <div className="gf-hero-bg" />
        <div className="gf-hero-inner">
          <div className="gf-hero-tag">Festive &amp; Corporate Gifting Architecture · 2023–2025</div>
          <h1>
            The <span>Gifting</span><br />Suite
            <em>
              Elevating clean-label organic nutrition into high-perceived-value celebratory gifting.
              Rigid presentation boxes, contemporary sliding trays, and gold-foil craftsmanship.
            </em>
          </h1>
        </div>
      </div>

      <section className="gf-s">
        <div className="gf-c">
          <div className="gf-label gfv">Strategic Intent</div>
          <div className="gf-title gfv">
            The Unboxing<br /><em>Theater.</em>
          </div>
          <p className="gf-body gfv">
            In FMCG, everyday pantry items fight for transactional shelf utility. But festive and corporate gifting
            demands emotional elevation, structural theater, and tactile luxury. We engineered a modular gifting ecosystem
            that enabled Jus&apos;Amazin to compete head-to-head with heritage luxury chocolatiers during peak Diwali and New Year cycles.
          </p>

          <div className="gf-pillars">
            {PILLARS.map((p) => (
              <div key={p.num} className="gf-pill-card gfv">
                <div className="gf-pill-num">{p.num}</div>
                <div className="gf-pill-tag">{p.t}</div>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gf-s">
        <div className="gf-c">
          <div className="gf-label gfv">Architectural Gallery</div>
          <div className="gf-title gfv">
            Structural Form &amp;<br /><em>3D Visualisation.</em>
          </div>
          <p className="gf-body gfv">
            Every box was modeled and rendered in Blender prior to tooling and press runs. This allowed our B2B sales teams
            to pre-book corporate orders months before festival production kicked off.
          </p>

          <div className="gf-grid">
            {GALLERY.map((g) => (
              <div key={g.id} className="gf-item gfv">
                <div className="gf-img-wrap">
                  <img src={g.src} alt={g.title} loading="lazy" />
                </div>
                <div className="gf-info">
                  <div className="gf-item-title">{g.title}</div>
                  <div className="gf-item-desc">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gf-c">
        <div className="gf-soul gfv">
          <div className="gf-soul-inner">
            <div className="gf-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>The Craft Philosophy</div>
            <blockquote className="gf-soul-q">
              &ldquo;You cannot simply drop everyday jars into a standard shipper carton and call it a gift hamper.
              True gifting design begins with <strong>the tactile ritual of opening</strong> — the resistance of the sleeve,
              the gleam of calibrated foil, and the architectural reveal of clean nutrition celebrated as luxury.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <section className="gf-s">
        <div className="gf-c">
          <div className="gf-label gfv">Operational Impact</div>
          <div className="gf-title gfv">
            Performance<br /><em>Metrics.</em>
          </div>
          <div className="gf-metrics gfv">
            {METRICS.map((m) => (
              <div key={m.l} className="gf-metric-card">
                <div className="gf-metric-n">{m.n}</div>
                <div className="gf-metric-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gf-s">
        <div className="gf-c">
          <div className="gf-label gfv">Voices</div>
          <div className="gf-title gfv">
            Leadership<br /><em>Feedback.</em>
          </div>
          <div className="gf-fb-grid">
            {FEEDBACK.map((fb, i) => (
              <div key={i} className="gf-fb-card gfv">
                <div className="gf-fb-q">&ldquo;{fb.q}&rdquo;</div>
                <div>
                  <div className="gf-fb-n">{fb.n}</div>
                  <div className="gf-fb-r">{fb.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gf-c">
        <div className="gf-footer">
          <div className="gf-label">Category Directories {'>>>'}</div>
          <div className="gf-footer-links">
            {NAV.map((n) => (
              <Link key={n.l} href={n.h} className="gf-footer-link">
                {n.l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Script id="gf-init" strategy="lazyOnload">{`
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
            document.querySelectorAll('.gfv').forEach(function(el){ obs.observe(el); });
            setTimeout(function(){
              document.querySelectorAll('.gfv').forEach(function(el){ el.classList.add('vis'); });
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

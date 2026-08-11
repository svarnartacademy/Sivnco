import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ae-bg:#0A0906;--ink:#F0EDE6;--ae-muted:rgba(240,237,230,0.45);--ae-accent:#D4600A;--ae-border:rgba(240,237,230,0.08);--ae-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Instrument Sans',sans-serif}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
body{background:var(--ae-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--ae-accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--ae-accent);opacity:.7}
a{color:inherit;text-decoration:none}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5vw;background:rgba(10,9,6,0.75);backdrop-filter:blur(20px);border-bottom:1px solid var(--ae-border)}
.logo{font-family:var(--D);font-weight:900;font-size:1.3rem;letter-spacing:.08em}
.back{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;padding:.6rem 1.5rem;border:1px solid var(--ae-border);border-radius:40px;transition:.3s}
.back:hover{border-color:var(--ae-accent);color:var(--ae-accent)}
.hero{min-height:90vh;display:flex;flex-direction:column;justify-content:center;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ae-border);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.92) 35%,rgba(10,9,6,.55) 65%,rgba(10,9,6,.25) 100%);pointer-events:none;z-index:0}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ae-accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(3.2rem,8vw,7.5rem);line-height:1.05;}
.hero-title i{color:var(--ae-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ae-muted);max-width:580px;line-height:1.85;margin-top:2rem}
section{padding:9rem 0;border-bottom:1px solid var(--ae-border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ae-accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,5vw,5.5rem);line-height:1.05;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ae-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ae-muted);max-width:660px}
.comm-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem}
.comm-card{background:var(--ae-glass);border:1px solid var(--ae-border);border-radius:12px;padding:3rem 2.5rem;transition:all 0.4s ease}
.comm-card:hover{transform:translateY(-5px);border-color:rgba(212,96,10,0.25);box-shadow:0 30px 60px rgba(0,0,0,0.4)}
.comm-num{font-family:var(--D);font-size:1.5rem;color:var(--ae-accent);margin-bottom:1.5rem;display:block}
.comm-h{font-family:var(--D);font-weight:900;font-size:1.6rem;line-height:1.2;margin-bottom:1rem;color:#F0EDE6}
.comm-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ae-muted)}
.cta-sec{background:linear-gradient(to bottom, var(--ae-bg), rgba(212,96,10,0.03))}
.cta-btn{font-family:var(--M);font-size:.65rem;letter-spacing:.2em;padding:1rem 2.2rem;border:1.5px solid var(--ae-accent);border-radius:40px;color:#F0EDE6;display:inline-block;transition:all 0.3s ease;text-transform:uppercase;margin-top:2rem}
.cta-btn:hover{background:var(--ae-accent);color:var(--ae-bg);transform:translateY(-2px)}
.pfooter{display:flex;justify-content:space-between;align-items:center;padding:4rem 0 3rem;border-top:1px solid var(--ae-border)}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.3rem;letter-spacing:.08em}
.rv{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease}.rv2.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){
  nav{padding:1rem 5vw}
  .hero{padding-top:10rem}
  .comm-grid{grid-template-columns:1fr}
  section{padding:6rem 0}
  .pfooter{flex-direction:column;gap:1.5rem;text-align:center}
}
`

import Navbar from '../../components/Navbar';

export default function Commissions() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/artist-educator/commissions" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>For Art &amp; Design — H P Shivaraj</title>
        <meta name="description" content="Custom art and design commissions, subject to scheduling availability. original acrylic paintings, custom illustrations, and heritage art." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      {/* CUSTOM CURSOR DOT */}
      <div id="dot" />

      {/* NAVIGATION */}
      <Navbar backLink="/artist-educator" backLabel="← Art & Educator" />

      {/* HERO */}
      <div className="hero">
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(212,96,10,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(232,133,42,0.08) 0%, transparent 50%), var(--ae-bg)' }} />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">On-Demand Fine Art &amp; Design</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            For Art &amp;<br /><i>Design.</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            Handcrafted paintings, visual sketches, and editorial illustrations executed outside commercial constraints. Available select periods of the year, subject to schedule and alignment of intent.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — Creative Formats</div>
          <h2 className="s-title rv">Available on<br /><i>demand.</i></h2>
          <div className="body rv" style={{ marginBottom: '4rem' }}>
            <p>
              I maintain a highly selective commission practice to protect the integrity of my studio focus. I do not mass-produce prints or accept bulk commercial contracts. Every accepted commission is worked directly by my hand from observation to finished form.
            </p>
          </div>

          <div className="comm-grid rv2">
            <div className="comm-card">
              <span className="comm-num">01</span>
              <h3 className="comm-h">Original Paintings</h3>
              <p className="comm-desc">
                Handcrafted watercolor, acrylic, and mixed-media works on canvas or paper. Focus areas include semi-abstract landscapes, studies of classical Indian iconography, and heritage-inspired themes.
              </p>
            </div>
            <div className="comm-card">
              <span className="comm-num">02</span>
              <h3 className="comm-h">Portrait Commissions</h3>
              <p className="comm-desc">
                Observational portrait studies drawing from a fine art foundation. Executed with emphasis on physical structure, value weight, and structural authenticity over digital hyper-realism.
              </p>
            </div>
            <div className="comm-card">
              <span className="comm-num">03</span>
              <h3 className="comm-h">Custom Illustration</h3>
              <p className="comm-desc">
                Editorial illustrations, customized book covers, and identity assets for founder-led cultural brands that value high-craft visual expression and painting sensibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULING STATUS */}
      <section className="cta-sec">
        <div className="c" style={{ textAlign: 'center' }}>
          <div className="s-label rv">02 — Studio Status</div>
          <h2 className="s-title rv">Subject to availability<br /><i>based on schedule.</i></h2>
          <div className="body rv" style={{ margin: '0 auto 2rem', float: 'none' }}>
            <p>
              Due to my active full-time commitments as an Art Director, new projects are scheduled quarterly. If you have a concept that aligns with a traditional-contemporary fine art perspective, let&apos;s talk.
            </p>
          </div>
          <a href="/#contact" className="cta-btn rv2">Enquire for Project</a>
        </div>
      </section>

      {/* FOOTER */}
      <div className="c">
        <div className="pfooter rv">
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--ae-accent)' }}>.</span></div></div>
          <div style={{ fontSize: '0.8rem', color: 'var(--ae-muted)' }}>© {new Date().getFullYear()} My Journey @ Jus&apos;Amazin</div>
        </div>
      </div>

      <Script id="commissions-init" strategy="afterInteractive">{`
        (function(){
          // 1. SCROLL REVEALS
          function initReveals() {
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              });
            }, { threshold: 0.04, rootMargin: '0px 0px -40px 0px' });

            document.querySelectorAll('.rv, .rv2').forEach(function(el) { obs.observe(el); });

            // Fallback
            setTimeout(function() {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }, 1200);

            if (window.innerWidth <= 900) {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initReveals);
          } else {
            initReveals();
          }

          // 2. CURSOR DOT ANIMATION
          var dot = document.getElementById('dot');
          var dotLg = false;

          document.addEventListener('mousemove', function(e) {
            if (!dot) return;
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
          });

          document.addEventListener('mousedown', function() {
            if (dot) dot.classList.add('lg');
          });

          document.addEventListener('mouseup', function() {
            if (dot) dot.classList.remove('lg');
          });

          // Add hover listeners to links and buttons
          function addCursorHovers() {
            document.querySelectorAll('a, button, input[type="submit"]').forEach(function(el) {
              el.addEventListener('mouseenter', function() { if (dot) dot.classList.add('lg'); });
              el.addEventListener('mouseleave', function() { if (dot) dot.classList.remove('lg'); });
            });
          }
          addCursorHovers();

          // 3. LENIS SMOOTH SCROLLING
          (function w(){
            if(typeof Lenis==='undefined'){
              setTimeout(w, 80);
              return;
            }
            try {
              var l = new Lenis({ duration: 1.2, smooth: true, smoothTouch: false });
              function r(t) { l.raf(t); requestAnimationFrame(r); }
              requestAnimationFrame(r);
            } catch(e) {}
          })();
        })();
      `}</Script>
    </>
  )
}

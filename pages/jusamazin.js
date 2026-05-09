import Head from 'next/head'
import Link from 'next/link'

export default function JusAmazin() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jus Amazin — Case Study · Sivnco</title>
        <meta name="description" content="End-to-end brand system for Jus Amazin — packaging across 15+ SKUs, 176% revenue growth." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{
          --bg:#0A0906;--ink:#F0EDE6;--muted:rgba(240,237,230,0.5);
          --accent:#D4600A;--glass:rgba(240,237,230,0.04);--border:rgba(240,237,230,0.1);
          --forest:#1E3A2F;
          --f-display:'Bebas Neue',sans-serif;
          --f-serif:'Cormorant Garamond',serif;
          --f-mono:'DM Mono',monospace;
        }
        html{scroll-behavior:smooth}
        body{background:var(--bg);color:var(--ink);font-family:var(--f-serif);cursor:none;overflow-x:hidden}
        body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");opacity:.035;pointer-events:none;z-index:9999}
        #cursor{position:fixed;width:10px;height:10px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .2s,height .2s,background .2s}
        #cursor.big{width:32px;height:32px;background:transparent;border:1.5px solid var(--accent)}
        a{color:inherit;text-decoration:none}
        .container{max-width:1200px;margin:0 auto;padding:0 4rem}
        /* NAV */
        nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.5rem 4rem;border-bottom:1px solid var(--border);background:rgba(10,9,6,0.85);backdrop-filter:blur(12px)}
        .nav-logo{font-family:var(--f-display);font-size:1.4rem;letter-spacing:0.05em}
        .nav-back{font-family:var(--f-mono);font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;border:1px solid var(--border);padding:0.6rem 1.4rem;border-radius:40px;transition:all .3s}
        .nav-back:hover{border-color:var(--accent);color:var(--accent)}
        /* HERO */
        .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:10rem 4rem 6rem;position:relative;border-bottom:1px solid var(--border)}
        .hero-eyebrow{font-family:var(--f-mono);font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:2rem}
        .hero-title{font-family:var(--f-display);font-size:clamp(5rem,14vw,14rem);line-height:0.88;text-transform:uppercase}
        .hero-title em{font-family:var(--f-serif);color:var(--accent);font-style:italic;display:block}
        .hero-sub{font-family:var(--f-serif);font-size:clamp(1.1rem,2vw,1.4rem);color:var(--muted);max-width:560px;line-height:1.8;margin-top:2.5rem}
        .hero-meta{display:flex;gap:4rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--border)}
        .meta-item label{font-family:var(--f-mono);font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);display:block;margin-bottom:0.5rem}
        .meta-item span{font-family:var(--f-serif);font-size:1rem;color:var(--ink)}
        /* METRICS */
        .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
        .metric{background:var(--bg);padding:3rem 2.5rem;text-align:center}
        .metric-n{font-family:var(--f-display);font-size:clamp(3rem,6vw,6rem);color:var(--accent);line-height:1}
        .metric-l{font-family:var(--f-mono);font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);margin-top:0.75rem}
        /* SECTIONS */
        section{padding:8rem 0;border-bottom:1px solid var(--border)}
        .label{font-family:var(--f-mono);font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:1.5rem}
        .section-title{font-family:var(--f-display);font-size:clamp(3rem,6vw,7rem);line-height:0.9;text-transform:uppercase;margin-bottom:2rem}
        .section-title em{font-family:var(--f-serif);color:var(--muted);font-style:italic}
        .body-text{font-family:var(--f-serif);font-size:1.15rem;line-height:1.9;color:var(--muted);max-width:680px}
        /* 3-COL GRID */
        .three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem}
        .col-card{border:1px solid var(--border);padding:2.5rem;border-radius:4px}
        .col-head{font-family:var(--f-mono);font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--accent);margin-bottom:1.2rem;padding-bottom:1rem;border-bottom:1px solid var(--border)}
        .col-body{font-family:var(--f-serif);font-size:1.05rem;line-height:1.85;color:var(--muted)}
        /* IMAGE MOSAIC */
        .mosaic{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:300px 220px;gap:1rem;margin-top:4rem}
        .mosaic-slot{background:var(--glass);border:1px solid var(--border);border-radius:4px;position:relative;overflow:hidden;display:flex;align-items:flex-end;padding:1.5rem}
        .mosaic-slot.tall{grid-row:span 2}
        .mosaic-slot.wide{grid-column:span 2}
        .mosaic-label{font-family:var(--f-mono);font-size:0.6rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);position:relative;z-index:2}
        .mosaic-ghost{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.1;font-family:var(--f-display);font-size:1rem;letter-spacing:0.1em}
        /* BEFORE AFTER */
        .ba-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);margin-top:4rem;border:1px solid var(--border)}
        .ba-side{background:var(--bg);padding:3rem}
        .ba-side.after{background:rgba(212,96,10,0.04)}
        .ba-tag{font-family:var(--f-mono);font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:1.5rem;padding:0.4rem 1rem;border:1px solid var(--border);display:inline-block;border-radius:20px}
        .ba-side.after .ba-tag{border-color:var(--accent);color:var(--accent)}
        .ba-body{font-family:var(--f-serif);font-size:1.05rem;line-height:1.85;color:var(--muted)}
        /* DELIVERABLES */
        .deliverables{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:3rem}
        .del-item{border:1px solid var(--border);padding:1.5rem 2rem;border-radius:4px;display:flex;align-items:center;gap:1rem}
        .del-icon{font-family:var(--f-display);font-size:1.5rem;color:var(--accent)}
        .del-name{font-family:var(--f-mono);font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink)}
        /* TEAM */
        .team-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;margin-top:3rem}
        .team-group-label{font-family:var(--f-mono);font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:1.5rem;grid-column:span 2}
        .team-card{border:1px solid var(--border);padding:2rem;border-radius:4px;display:flex;align-items:center;gap:1.5rem}
        .team-avatar{width:52px;height:52px;border-radius:50%;background:var(--glass);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--f-display);font-size:1.2rem;color:var(--accent);flex-shrink:0}
        .team-name{font-family:var(--f-display);font-size:1.3rem;letter-spacing:0.02em}
        .team-role{font-family:var(--f-mono);font-size:0.6rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);margin-top:0.2rem}
        /* RESULTS */
        .results-list{list-style:none;margin-top:3rem;display:flex;flex-direction:column;gap:1.5rem}
        .results-list li{display:flex;gap:2rem;align-items:flex-start;padding:2rem;border:1px solid var(--border);border-radius:4px}
        .result-num{font-family:var(--f-display);font-size:2.5rem;color:var(--accent);line-height:1;flex-shrink:0;width:40px}
        .result-text{font-family:var(--f-serif);font-size:1.05rem;line-height:1.8;color:var(--muted)}
        /* FOREST SECTION */
        .forest-section{background:var(--forest);border-top:1px solid rgba(240,237,230,0.08);border-bottom:1px solid rgba(240,237,230,0.08)}
        /* FOOTER NAV */
        .page-footer{padding:6rem 0 4rem;display:flex;align-items:center;justify-content:space-between}
        .footer-brand{font-family:var(--f-display);font-size:1.5rem;letter-spacing:0.05em}
        .footer-note{font-family:var(--f-mono);font-size:0.6rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted)}
        .cta-btn{font-family:var(--f-mono);font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;border:1px solid var(--accent);color:var(--accent);padding:0.9rem 2.2rem;border-radius:40px;transition:all .3s;display:inline-block}
        .cta-btn:hover{background:var(--accent);color:#fff}
        /* RESPONSIVE */
        @media(max-width:900px){
          .container{padding:0 1.5rem}
          nav{padding:1.2rem 1.5rem}
          .hero{padding:8rem 1.5rem 4rem}
          .metrics{grid-template-columns:repeat(2,1fr)}
          .three-col{grid-template-columns:1fr}
          .mosaic{grid-template-columns:1fr 1fr;grid-template-rows:auto}
          .mosaic-slot.tall{grid-row:span 1}
          .ba-grid{grid-template-columns:1fr}
          .deliverables{grid-template-columns:1fr 1fr}
          .team-grid{grid-template-columns:1fr}
          .hero-meta{flex-wrap:wrap;gap:2rem}
          .page-footer{flex-direction:column;gap:2rem;text-align:center}
        }
      `}</style>

      <div id="cursor"></div>

      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">SIVNCO<span style={{color:'var(--accent)'}}>.</span></Link>
        <Link href="/" className="nav-back">← Back to Portfolio</Link>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="container">
          <div className="hero-eyebrow">Case Study · Brand Identity · 2022 — Present</div>
          <h1 className="hero-title">
            Jus<br/>
            <em>Amazin</em>
          </h1>
          <p className="hero-sub">
            End-to-end visual identity for a D2C peanut butter brand — packaging design across 15+ SKUs, social media systems, retail POS, and a brand guidelines document that scaled with the company.
          </p>
          <div className="hero-meta">
            <div className="meta-item"><label>Client</label><span>Jus Amazin Pvt. Ltd.</span></div>
            <div className="meta-item"><label>Role</label><span>Design &amp; Communications Manager</span></div>
            <div className="meta-item"><label>Year</label><span>2022 — Present</span></div>
            <div className="meta-item"><label>Category</label><span>Brand · Packaging · Social</span></div>
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        <div className="metric"><div className="metric-n">176%</div><div className="metric-l">Revenue Growth</div></div>
        <div className="metric"><div className="metric-n">40%</div><div className="metric-l">Production Efficiency</div></div>
        <div className="metric"><div className="metric-n">15+</div><div className="metric-l">SKUs Designed</div></div>
        <div className="metric"><div className="metric-n">3D</div><div className="metric-l">Render-based Presence</div></div>
      </div>

      {/* BRIEF */}
      <section>
        <div className="container">
          <div className="label">01 — The Brief</div>
          <h2 className="section-title">Strong product.<br/><em>No identity.</em></h2>
          <div className="three-col">
            <div className="col-card">
              <div className="col-head">01 — Challenge</div>
              <div className="col-body">A D2C peanut butter brand with great product quality but no coherent visual identity. Every SKU looked different. Retail shelf pickup was weak. The brand had no consistent story.</div>
            </div>
            <div className="col-card">
              <div className="col-head">02 — Approach</div>
              <div className="col-body">Built a complete visual system from scratch — packaging logic, colour codes per variant, photography to 3D render migration, social media templates, POS materials, and a brand guidelines document.</div>
            </div>
            <div className="col-card">
              <div className="col-head">03 — Outcome</div>
              <div className="col-body">176% revenue growth in FY 2024–25. Streamlined design process from drawing board to production. Cohesive product portfolio across all SKUs and retail touchpoints.</div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE MOSAIC */}
      <section style={{paddingTop:0}}>
        <div className="container">
          <div className="label">02 — Visual System</div>
          <h2 className="section-title">Packaging<br/><em>at scale.</em></h2>
          <div className="mosaic">
            <div className="mosaic-slot tall">
              <div className="mosaic-ghost">HERO PRODUCT SHOT</div>
              <span className="mosaic-label">Core Packaging Range</span>
            </div>
            <div className="mosaic-slot">
              <div className="mosaic-ghost">3D RENDER</div>
              <span className="mosaic-label">3D Pack Render</span>
            </div>
            <div className="mosaic-slot">
              <div className="mosaic-ghost">SUPERFOODS</div>
              <span className="mosaic-label">Superfoods Range</span>
            </div>
            <div className="mosaic-slot wide">
              <div className="mosaic-ghost">BRAND GUIDELINES SPREAD</div>
              <span className="mosaic-label">Brand Guidelines Document</span>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section>
        <div className="container">
          <div className="label">03 — Transformation</div>
          <h2 className="section-title">Before<br/><em>and after.</em></h2>
          <div className="ba-grid">
            <div className="ba-side before">
              <div className="ba-tag">Before — 2021</div>
              <p className="ba-body">Generic label printing. No system. Each SKU was a different brand. Photo-based imagery that didn't translate well to small pack sizes. No shelf-ready files, no brand rationale document. Design was reactive, not strategic.</p>
            </div>
            <div className="ba-side after">
              <div className="ba-tag">After — 2022 onwards</div>
              <p className="ba-body">Unified visual language. 15+ SKUs with coherent colour logic, typography, and photography direction migrated to 3D renders. A brand guidelines document the entire team uses daily. Design is now proactive and scalable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section>
        <div className="container">
          <div className="label">04 — What Was Delivered</div>
          <h2 className="section-title">Full<br/><em>system.</em></h2>
          <div className="deliverables">
            {[
              ['◆','Packaging Design','15+ SKUs across all variants'],
              ['◆','3D Product Renders','Replacing photo-based imagery'],
              ['◆','Brand Guidelines','Complete document for team use'],
              ['◆','Social Media System','Templates &amp; content direction'],
              ['◆','Retail POS Materials','Shelf &amp; display materials'],
              ['◆','Energy Bar Range','Desi Energy Bar packaging'],
              ['◆','Superfoods Range','Packaging solution 2024'],
              ['◆','Snack Pack Range','Packaging design 2024'],
              ['◆','Design Process','Drawing board to production flow'],
            ].map(([icon, name, sub]) => (
              <div key={name} className="del-item">
                <span className="del-icon">{icon}</span>
                <div>
                  <div className="del-name" dangerouslySetInnerHTML={{__html: name}} />
                  <div style={{fontFamily:'var(--f-serif)',fontSize:'0.85rem',color:'var(--muted)',marginTop:'0.2rem'}}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — forest bg */}
      <section className="forest-section">
        <div className="container">
          <div className="label" style={{color:'rgba(240,237,230,0.5)'}}>05 — The People</div>
          <h2 className="section-title">Who we<br/><em>worked with.</em></h2>
          <div className="team-grid">
            <div className="team-group-label">Founders &amp; Leadership</div>
            {[
              ['JM','Jitin Munjal','Co-founder &amp; CEO'],
              ['SH','Shilpa','Co-founder &amp; CEO'],
            ].map(([init, name, role]) => (
              <div key={init} className="team-card">
                <div className="team-avatar">{init}</div>
                <div>
                  <div className="team-name">{name}</div>
                  <div className="team-role" dangerouslySetInnerHTML={{__html: role}} />
                </div>
              </div>
            ))}
            <div className="team-group-label" style={{marginTop:'2rem'}}>Colleagues &amp; Collaborators</div>
            {[
              ['RK','Roshan Kulranjan','Vice President'],
              ['AS','Amarjit Singh','Sales Head'],
              ['SG','Siddharth G','Production Executive'],
              ['BH','Bhoomika','Quality Analyst'],
            ].map(([init, name, role]) => (
              <div key={init} className="team-card">
                <div className="team-avatar" style={{fontSize:'0.9rem'}}>{init}</div>
                <div>
                  <div className="team-name">{name}</div>
                  <div className="team-role">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section>
        <div className="container">
          <div className="label">06 — The Results</div>
          <h2 className="section-title">What the<br/><em>numbers say.</em></h2>
          <ul className="results-list">
            <li><span className="result-num">01</span><span className="result-text">176% revenue growth in the financial year 2024–25 — directly attributable to improved brand visibility and packaging coherence at retail.</span></li>
            <li><span className="result-num">02</span><span className="result-text">Increased production efficiency by 40% — even as 80% of production remains manual due to operational constraints, the design pipeline is significantly leaner.</span></li>
            <li><span className="result-num">03</span><span className="result-text">Brand visual presence increased overall as product presentation switched from photo-based to 3D render-based — sharper, more scalable, and more premium on shelf.</span></li>
            <li><span className="result-num">04</span><span className="result-text">Streamlined design process from drawing board → design iterations → final design → proofing → print &amp; production. Every step now has a clear owner and output standard.</span></li>
            <li><span className="result-num">05</span><span className="result-text">Product portfolio structured proficiently — all SKUs organised by variant, size, and market segment, with a master brand document guiding all future extensions.</span></li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <div className="container">
        <div className="page-footer">
          <div>
            <div className="footer-brand">SIVNCO<span style={{color:'var(--accent)'}}>.</span></div>
            <div className="footer-note" style={{marginTop:'0.5rem'}}>Bengaluru · Remote · International</div>
          </div>
          <Link href="/#contact" className="cta-btn">Start a Project →</Link>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html:`
        // Cursor
        var c=document.getElementById('cursor');
        document.addEventListener('mousemove',function(e){c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'});
        document.querySelectorAll('a,button').forEach(function(el){
          el.addEventListener('mouseenter',function(){c.classList.add('big')});
          el.addEventListener('mouseleave',function(){c.classList.remove('big')});
        });
        // Animate metrics on scroll
        var observer=new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)'}
          });
        },{threshold:0.1});
        document.querySelectorAll('.metric,.col-card,.del-item,.team-card,.results-list li').forEach(function(el){
          el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity 0.6s ease, transform 0.6s ease';
          observer.observe(el);
        });
      `}} />
    </>
  )
}

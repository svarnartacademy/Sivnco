import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'

const METRICS = [
  { n: '200+', l: 'Mentored Students' },
  { n: '12', l: 'Portfolio Selections' },
  { n: '23', l: 'Original Paintings' },
  { n: '6+', l: 'Years Teaching' },
]

const ARTWORKS = [
  { id: 1, title: 'Rhythm of the Veena', medium: 'Oil & Acrylic on Canvas', year: '2024', size: 'large', img: '/images/paintings/painting_1.jpg' },
  { id: 2, title: 'Bengaluru Mornings', medium: 'Watercolor on Paper', year: '2023', size: 'tall', img: '/images/paintings/painting_2.jpg' },
  { id: 3, title: 'Form & Void', medium: 'Acrylic on Canvas', year: '2024', size: 'standard', img: '/images/paintings/painting_3.jpg' },
  { id: 4, isText: true, text: '“Art is the synthesis of patient observation and intuitive expression.”', author: 'H.P. Shivaraj', size: 'standard' },
  { id: 5, title: 'Namma Streets', medium: 'Ink & Wash on Paper', year: '2023', size: 'wide', img: '/images/paintings/painting_4.jpg' },
  { id: 6, title: 'Silence of the Hills', medium: 'Oil on Canvas', year: '2024', size: 'standard', img: '/images/paintings/painting_5.jpg' },
  { id: 7, title: 'Duality of Light', medium: 'Charcoal on Paper', year: '2022', size: 'standard', img: '/images/paintings/painting_6.jpg' },
  { id: 8, title: 'Traditional Roots', medium: 'Gesso & Acrylic', year: '2023', size: 'tall', img: '/images/paintings/painting_7.jpg' },
  { id: 9, title: 'Resonance', medium: 'Mixed Media on Wood', year: '2024', size: 'standard', img: '/images/paintings/painting_8.jpg' },
  { id: 10, title: 'Abstract Flight', medium: 'Acrylic on Canvas', year: '2023', size: 'wide', img: '/images/paintings/painting_9.jpg' },
  { id: 11, isText: true, text: '“Visual pedagogy is about training the eye to perceive relationships before training the hand to render lines.”', author: 'Pedagogical Note', size: 'standard' },
  { id: 12, title: 'Inner Sanctuary', medium: 'Acrylic on Canvas', year: '2024', size: 'standard', img: '/images/paintings/painting_10.jpg' },
  { id: 13, title: 'Metropolis Glow', medium: 'Acrylic on Canvas', year: '2024', size: 'wide', img: '/images/paintings/painting_11.jpg' },
  { id: 14, title: 'Echoes of the Past', medium: 'Tempera on Panel', year: '2023', size: 'tall', img: '/images/paintings/painting_12.jpg' },
  { id: 15, title: 'Vibrant Earth', medium: 'Acrylic on Canvas', year: '2024', size: 'standard', img: '/images/paintings/painting_13.jpg' },
  { id: 16, title: 'Devotional Study', medium: 'Ink on Paper', year: '2022', size: 'standard', img: '/images/paintings/painting_14.jpg' },
  { id: 17, title: 'Harmonic Convergence', medium: 'Acrylic on Canvas', year: '2024', size: 'wide', img: '/images/paintings/painting_15.jpg' },
  { id: 18, isText: true, text: '“Every child is an artist. The problem is how to remain an artist once we grow up.”', author: 'Pablo Picasso', size: 'standard' }
]

const TIMELINE = [
  { date: '2024 — Present', title: 'Annual Academy Showcases', org: 'Svarnart Academy', desc: 'Curating student exhibitions showing over 120+ artworks by young minds to parents and local curators. Fosters confidence and real-world exposure for kids.' },
  { date: '2023 — Present', title: 'Portfolio Development Mentor', org: 'Independent / Svarnart', desc: 'Guiding high-schoolers through composition, design thinking, and technical drawing to build portfolios for NID, NIFT, and Srishti.' },
  { date: '2021 — Present', title: 'Art & Design Teacher', org: 'Openhouse · Bengaluru', desc: 'Teaching drawing, values, and color theory to students across age groups. Keeping curriculum active, hands-on, and focused on creative thinking.' },
  { date: '2020 — Present', title: 'Co-Founder & Curriculum Lead', org: 'Svarnart Academy · Bengaluru', desc: 'Co-founded with my wife. Developed a structured fine art pedagogy that bridges traditional roots (Carnatic music, classical forms) with modern visual design.' },
  { date: '2018 — Present', title: 'Active Painting Practice', org: 'Sivnco Studio', desc: 'Exhibiting personal work, focusing on semi-abstract acrylic landscapes and mixed-media representations of Indian classical art and heritage.' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ae-bg:#0A0906;--ink:#F0EDE6;--ae-muted:rgba(240,237,230,0.45);--ae-accent:#D4600A;--ae-border:rgba(240,237,230,0.08);--ae-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }
body{background:var(--ae-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--ae-accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--ae-accent);opacity:.7}
a{color:inherit;text-decoration:none}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5vw;background:rgba(10,9,6,0.75);backdrop-filter:blur(20px);border-bottom:1px solid var(--ae-border)}
.logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.back{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;padding:.6rem 1.5rem;border:1px solid var(--ae-border);border-radius:40px;transition:.3s}
.back:hover{border-color:var(--ae-accent);color:var(--ae-accent)}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ae-border);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.92) 35%,rgba(10,9,6,.55) 65%,rgba(10,9,6,.25) 100%);pointer-events:none;z-index:0}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ae-accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-size:clamp(4.5rem,12vw,11rem);line-height:.88}
.hero-title i{color:var(--ae-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ae-muted);max-width:540px;line-height:1.85;margin-top:2rem}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ae-border)}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ae-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ae-border)}
.metric{background:var(--ae-bg);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;transition:background .4s}
.metric:hover{background:rgba(212,96,10,.06)}
.metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s}
.metric:hover::before{opacity:1}
.m-n{font-family:var(--D);font-size:clamp(3.5rem,7vw,6.5rem);color:var(--ae-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ae-muted);margin-top:.8rem}
section{padding:9rem 0;border-bottom:1px solid var(--ae-border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ae-accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-size:clamp(3.5rem,7vw,8rem);line-height:.88;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ae-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ae-muted);max-width:660px}

/* Bento Grid */
.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:280px;gap:1.5rem;margin-top:4rem}
.b-card{background:var(--ae-glass);border:1px solid var(--ae-border);border-radius:12px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;transition:transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease}
.b-card:hover{transform:translateY(-5px);border-color:rgba(212,96,10,0.25);box-shadow:0 30px 60px rgba(0,0,0,0.5)}
.b-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;transition:transform 0.8s cubic-bezier(0.19,1,0.22,1)}
.b-card:hover img{transform:scale(1.05)}
.b-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,0.92) 15%,rgba(10,9,6,0.3) 50%,transparent 100%);z-index:1}
.b-content{position:relative;z-index:2}
.b-label{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ae-accent);margin-bottom:.4rem;display:block}
.b-name{font-family:var(--D);font-size:1.6rem;line-height:1.1;letter-spacing:.02em;color:#F0EDE6}
.b-meta{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ae-muted);margin-top:.4rem;display:block}

/* Sizes */
.b-card.tall{grid-row:span 2}
.b-card.wide{grid-column:span 2}
.b-card.large{grid-column:span 2;grid-row:span 2}
.b-card.large .b-name{font-size:2.2rem}

/* Text card specific */
.b-card.text-only{justify-content:center;background:rgba(212,96,10,0.02);border:1px solid rgba(212,96,10,0.08);align-items:center;text-align:center;padding:2.5rem}
.b-card.text-only::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(212,96,10,0.05),transparent 70%)}
.b-quote{font-family:var(--S);font-size:1.1rem;line-height:1.7;color:#F0EDE6;font-style:italic;position:relative;z-index:2}
.b-author{font-family:var(--M);font-size:.55rem;letter-spacing:.18em;color:var(--ae-accent);margin-top:1.2rem;position:relative;z-index:2;display:block}

/* Student progress showcase */
.progress-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:4rem}
.prog-card{background:var(--ae-glass);border:1px solid var(--ae-border);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
.prog-img-slot{height:380px;position:relative;overflow:hidden;background:#13120E;border-bottom:1px solid var(--ae-border)}
.prog-img-slot img{width:100%;height:100%;object-fit:cover;transition:transform 0.6s cubic-bezier(0.19,1,0.22,1)}
.prog-card:hover .prog-img-slot img{transform:scale(1.03)}
.prog-tag{position:absolute;top:1.5rem;left:1.5rem;z-index:2;font-family:var(--M);font-size:.55rem;letter-spacing:.2em;padding:.4rem 1rem;background:rgba(10,9,6,0.85);backdrop-filter:blur(10px);border:1px solid var(--ae-border);border-radius:20px}
.prog-tag.after{border-color:var(--ae-accent);color:var(--ae-accent)}
.prog-body{padding:2.5rem;display:flex;flex-direction:column;flex-grow:1;justify-content:center}
.prog-h{font-family:var(--D);font-size:1.8rem;line-height:1.2;margin-bottom:1rem;color:#F0EDE6}
.prog-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ae-muted)}

/* Timeline */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:1.5rem;border-left:1px solid var(--ae-border);padding-left:2.5rem;position:relative}
.tl-item{position:relative;padding-bottom:1.5rem}
.tl-dot{position:absolute;left:-2.85rem;top:0.35rem;width:10px;height:10px;border-radius:50%;background:var(--ae-accent);border:3px solid var(--ae-bg);box-shadow:0 0 0 1px var(--ae-border)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ae-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-size:1.6rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ae-muted);margin-top:.2rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ae-muted);margin-top:1rem;max-width:680px}

/* Footer */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ae-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-size:1.4rem;letter-spacing:.06em}

/* Custom glow tags in cards */
.b-card::after, .prog-card::after, .tl-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(212,96,10,0.12), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 1;
}
.b-card:hover::after, .prog-card:hover::after {
  opacity: 1;
}

@media(max-width:1024px){
  .bento{grid-template-columns:repeat(3,1fr);grid-auto-rows:240px}
  .b-card.large{grid-column:span 2;grid-row:span 2}
}
@media(max-width:768px){
  nav{padding:1.2rem 4vw}
  .logo{font-size:1.1rem}
  .back{font-size:.55rem;padding:.5rem 1.2rem}
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(3rem,10vw,6.5rem)}
  .hero-meta{gap:1.5rem;margin-top:3rem}
  .metrics{grid-template-columns:repeat(2,1fr)}
  section{padding:6rem 0}
  .bento{grid-template-columns:repeat(2,1fr);grid-auto-rows:220px;gap:1rem}
  .b-card.large{grid-column:span 2;grid-row:span 2}
  .progress-grid{grid-template-columns:1fr;gap:2rem}
  .prog-img-slot{height:300px}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
}
@media(max-width:480px){
  .hero-title{font-size:clamp(2.5rem,12vw,4.5rem)}
  .metrics{grid-template-columns:1fr}
  .bento{grid-template-columns:1fr;grid-auto-rows:220px}
  .b-card.large, .b-card.wide{grid-column:span 1;grid-row:span 1}
  .b-card.tall{grid-row:span 1}
  .b-card.large .b-name{font-size:1.4rem}
  .b-quote{font-size:0.95rem}
  .timeline{padding-left:1.8rem}
  .tl-dot{left:-2.15rem}
  .tl-title{font-size:1.3rem}
}

.rv{opacity:0;transform:translateY(32px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}
@keyframes heroBgPulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}
.hero .rv{opacity:1;transform:translateY(0)}
`

export default function ArtistEducator() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Artist &amp; Art Educator — H.P. Shivaraj · Sivnco</title>
        <meta name="description" content="Synthesizing fine art practice and visual pedagogy. Artworks, journey, and student progress by H.P. Shivaraj." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      <div id="dot" />

      <nav>
        <Link href="/" className="logo">SIVNCO<span style={{ color: 'var(--ae-accent)' }}>.</span></Link>
        <Link href="/" className="back">← Portfolio</Link>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(212,96,10,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(232,133,42,0.1) 0%, transparent 50%), var(--ae-bg)', animation: 'heroBgPulse 8s ease-in-out infinite' }} />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">Personal Practice · Fine Art &amp; Pedagogy</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            Artist &amp;<br /><i>Art Educator</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            A dual practice bridging classical Indian roots and contemporary visual craft. Guiding the next generation of creative minds while cultivating a personal fine art practice in Bengaluru.
          </p>
          <div className="hero-meta rv" style={{ transitionDelay: '.4s' }}>
            {[
              ['Focus', 'Fine Art & Pedagogy'],
              ['Role', 'Artist / Art Teacher'],
              ['Academy', 'Svarnart / Openhouse'],
              ['Location', 'Bengaluru, IN']
            ].map(([l, v]) => (
              <div key={l} className="meta"><label>{l}</label><span>{v}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        {METRICS.map((m, i) => (
          <div key={m.n} className="metric rv" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="m-n">{m.n}</div>
            <div className="m-l">{m.l}</div>
          </div>
        ))}
      </div>

      {/* ABOUT ME SECTION */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — Philosophy</div>
          <h2 className="s-title rv">Synthesizing sight<br /><i>and expression.</i></h2>
          <div className="body rv2" style={{ color: 'var(--ae-muted)', fontSize: '1.15rem', lineHeight: '1.9' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              My work as an artist is a dialogue with heritage, texture, and light. Living and working in Bengaluru, I translate the city's organic chaos and classical roots into textured paintings, expressive sketches, and digital illustrations.
            </p>
            <p>
              In teaching, I believe art is not a gift for the few but a discipline of looking. At Svarnart Academy and Openhouse, I guide children to look past symbolic formulas (like drawing a generic outline of an eye or tree) and learn to observe weight, value, perspective, and relationship. We train the mind to think visually, empowering children to render their world with confidence and original intention.
            </p>
          </div>
        </div>
      </section>

      {/* BENTO GRID SHOWCASE */}
      <section style={{ paddingTop: 0, borderBottom: '1px solid var(--ae-border)' }}>
        <div className="c">
          <div className="s-label rv">02 — Selected Artworks</div>
          <h2 className="s-title rv">A gallery of<br /><i>original works.</i></h2>
          
          <div className="bento rv2">
            {ARTWORKS.map((art) => {
              if (art.isText) {
                return (
                  <div key={art.id} className={`b-card text-only ${art.size}`}>
                    <span className="b-quote">{art.text}</span>
                    <span className="b-author">— {art.author}</span>
                  </div>
                )
              }
              return (
                <div key={art.id} className={`b-card ${art.size}`}>
                  <img src={art.img} alt={art.title} />
                  <div className="b-overlay" />
                  <div className="b-content">
                    <span className="b-label">Medium: {art.medium}</span>
                    <h3 className="b-name">{art.title}</h3>
                    <span className="b-meta">Year: {art.year} · Frame {art.id}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY & ACHIEVEMENTS */}
      <section>
        <div className="c">
          <div className="s-label rv">03 — The Journey</div>
          <h2 className="s-title rv">Milestones &amp;<br /><i>achievements.</i></h2>
          <div className="timeline rv2">
            {TIMELINE.map((item, index) => (
              <div key={index} className="tl-item">
                <div className="tl-dot" />
                <div className="tl-date">{item.date}</div>
                <h3 className="tl-title">{item.title}</h3>
                <div className="tl-org">{item.org}</div>
                <p className="tl-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHILDREN EDUCATED & PROGRESS SHOWCASE */}
      <section style={{ background: 'rgba(212,96,10,0.02)' }}>
        <div className="c">
          <div className="s-label rv">04 — Pedagogy Impact</div>
          <h2 className="s-title rv">Showcasing student<br /><i>progression.</i></h2>
          <div className="body rv" style={{ marginBottom: '3rem' }}>
            <p style={{ color: 'var(--ae-muted)' }}>
              True art education shifts a child from drawing abstract "symbols" of things (concept-based representation) to capturing actual light, form, and relationships (observation-based representation). Below is a typical progress arc of a young student over an 8-month period.
            </p>
          </div>

          <div className="progress-grid rv2">
            {/* Before Card */}
            <div className="prog-card">
              <div className="prog-img-slot">
                <span className="prog-tag">Early Phase — Month 1</span>
                <img src="/images/student_art_before.png" alt="Early student drawing" />
              </div>
              <div className="prog-body">
                <h3 className="prog-h">Symbolic Flat Rendering</h3>
                <p className="prog-desc">
                  Age 7. Flat, concept-driven drawing. The student draws what they think a house looks like: primary shapes, lack of depth, flat color application, and standard proportions. Focus is purely symbolic rather than observational.
                </p>
              </div>
            </div>

            {/* After Card */}
            <div className="prog-card">
              <div className="prog-img-slot">
                <span className="prog-tag after">Advanced Phase — Month 8</span>
                <img src="/images/student_art_after.png" alt="Advanced student painting" />
              </div>
              <div className="prog-body">
                <h3 className="prog-h">Spatial Composition &amp; Light</h3>
                <p className="prog-desc">
                  Age 8 (8 months of guidance). Acrylic on canvas. Introduction of structural drawing: vanishing points, perspective alignments, layered colors, and shadow values. Transitioned from drawing symbols to translating real depth and environmental light.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="c">
        <div className="pfooter rv">
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--ae-accent)' }}>.</span></div></div>
          <StartProjectButton />
        </div>
      </div>

      <Script id="page-init" strategy="lazyOnload">{`
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

            // Mobile reveal fallback
            if (window.innerWidth <= 900) {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initReveals);
          } else {
            initReveals();
          }

          // 2. LENIS SMOOTH SCROLL
          (function waitForLenis() {
            if (typeof Lenis === 'undefined') { setTimeout(waitForLenis, 80); return; }
            try {
              var lenis = new Lenis({ duration: 1.2, smooth: true, smoothTouch: false, touchMultiplier: 1.5 });
              function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
              requestAnimationFrame(raf);
            } catch(e) {}
          })();

          // 3. DESKTOP CURSOR
          if (window.innerWidth > 768) {
            var dot = document.getElementById('dot');
            if (dot) {
              var tx = window.innerWidth/2, ty = window.innerHeight/2, cx = tx, cy = ty;
              document.addEventListener('mousemove', function(e) { tx = e.clientX; ty = e.clientY; });
              (function loop() {
                cx += (tx-cx)*.15; cy += (ty-cy)*.15;
                dot.style.left = cx+'px'; dot.style.top = cy+'px';
                requestAnimationFrame(loop);
              })();
              document.querySelectorAll('a,button').forEach(function(el) {
                el.addEventListener('mouseenter', function() { dot.classList.add('lg'); });
                el.addEventListener('mouseleave', function() { dot.classList.remove('lg'); });
              });
            }
          }
        })();
      `}</Script>
    </>
  )
}

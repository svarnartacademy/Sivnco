import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'



const SVARNART_MODULES = [
  {
    num: '01',
    title: 'Procedural Web Audio Engine',
    desc: 'Engineered an algorithmic sound synthesizer using the native browser Web Audio API (<4KB footprint). Generates arpeggios, coin dings, frequency buzzers, and victory fanfares on the fly with zero external audio downloads or network latency.',
    tag: 'Web Audio API'
  },
  {
    num: '02',
    title: 'Gamified Art Theory Suite',
    desc: 'Interactive learning modules including Color Alchemist (subtractive/additive pigment mixing), Warm/Cool Rush (timed temperature reflex sorting), and Light Zones (chiaroscuro & value scales on 3D geometric forms).',
    tag: 'Canvas & Gamification'
  },
  {
    num: '03',
    title: 'WebRTC Virtual Classroom',
    desc: 'Low-latency live video rooms integrated via Jitsi Meet WebRTC bridge. Features single-document Firestore broadcast beacons, instant student join chimes, and live sketchbook critique without app downloads.',
    tag: 'WebRTC & Real-Time'
  },
  {
    num: '04',
    title: 'Multi-Tenant Portals & Reporting',
    desc: 'Student & parent dashboards tracking attendance, syllabus milestones, and digital artwork portfolios. Dynamically generates verifiable public report cards with QR codes and one-click WhatsApp sharing.',
    tag: 'LMS & Public Dossiers'
  },
  {
    num: '05',
    title: 'Dynamic Indian Payment Engine',
    desc: 'Dual-channel payment model: standard Razorpay checkout alongside dynamically constructed 1-click UPI Intent deep links (upi://pay) pre-filling student roll numbers, verified with HMAC-SHA256 edge functions.',
    tag: 'Razorpay & UPI Intent'
  },
  {
    num: '06',
    title: 'Two-Tier Child Safety & Moderation',
    desc: 'Layer 1 instant client-side lexical sanitization paired with Layer 2 serverless OpenAI omni-moderation to safeguard children from inappropriate text or artwork uploads, backed by zero-trust Firestore rules.',
    tag: 'OpenAI Safety AI'
  },
]

const TIMELINE_SVARNART = [
  { date: 'Venture Genesis', title: 'Single-Ecosystem Architecture', org: 'Svarnart Studio Lab', desc: 'Eliminating tool fragmentation across Zoom, WhatsApp, and spreadsheets by engineering a unified real-time education operating system with React 19, Firebase, and PWA capabilities.' },
  { date: 'Audio & Virtual Labs', title: 'Web Audio API & WebRTC Bridge', org: 'Interactive Pedagogy', desc: 'Developing zero-asset procedural audio synthesis (<4KB) for gamified color theory simulators, paired with instant live video classrooms with real-time student sync.' },
  { date: 'Operations & Scaling', title: 'Automated Indian Financial Engine', org: 'Cloud ERP & Payments', desc: 'Building serverless dynamic 1-click UPI intent deep links, Razorpay verification, automated WhatsApp fee billing, and public verifiable student report cards.' }
]

const OG_MITHAI_ASSETS = [
  { id: 'front', name: 'Premium Box Front Render', role: 'Main Package Showcase', img: '/images/og_mithai/ogmitai_camera_front.jpg', size: 'large' },
  { id: 'far', name: 'Perspective Mockup', role: 'Package Geometry & Depth', img: '/images/og_mithai/ogmitai_camera_far.jpg', size: 'wide' },
  { id: 'front_alt', name: 'Alternate Front Layout', role: 'Typography Variations', img: '/images/og_mithai/ogmitai_camera_front_alt.jpg', size: 'standard' },
  { id: 'mithai_3', name: 'Textured Box Print Detail', role: 'Close-Up Texture & Finish', img: '/images/og_mithai/ogmitai_3.jpg', size: 'standard' },
  { id: 'whatsapp_mock', name: 'WhatsApp Quick Commerce Asset', role: 'D2C Direct Ordering Workflow', img: '/images/og_mithai/ogmitai_whatsapp.jpg', size: 'standard' },
]

const VEDIC_TREATS_ASSETS = [
  { id: 'logo', name: 'Vedic Treats Logo Identity', role: 'Signature Mark', img: '/images/vedic_treats/logo.png', size: 'standard' },
  { id: 'asset_1', name: 'Primary Package Asset', role: 'Earthy Illustration Elements', img: '/images/vedic_treats/asset_1.png', size: 'standard' },
  { id: 'asset_2', name: 'Pattern Asset', role: 'Geometric Print Rationale', img: '/images/vedic_treats/asset_2.png', size: 'standard' },
  { id: 'asset_3', name: 'Back Label Rationale', role: 'Ingredient Transparency Layout', img: '/images/vedic_treats/asset_3.png', size: 'standard' },
  { id: 'dielines', name: 'Adobe Illustrator Vector Dielines', role: 'Production Packaging Specifications & Layer Architecture', img: '/images/vedic_treats/vedic_treats_dieline.jpg', size: 'wide' },
]

const TIMELINE_OG = [
  { date: 'Conceptualization', title: 'Street Sweets Redefined', org: 'Sivnco Lab', desc: 'Merging traditional Mithai heritage with bold contemporary street typography. Setting the aesthetic foundation using strong colors and premium gold foil layouts.' },
  { date: 'Material & Scale', title: 'Packaging Geometry', org: 'Structural Design', desc: 'Sizing the boxes for modular sweet arrangements (assortments of 12/24 sweets) and ensuring rigid board strength for retail display.' }
]

const TIMELINE_VEDIC = [
  { date: 'Identity System', title: 'Ayurvedic Minimal Luxury', org: 'Wellness Branding', desc: 'Defining an understated packaging hierarchy with clean serif typography and hand-drawn organic elements representing clean, Ayurvedic ingredients.' },
  { date: '3D Pack Validation', title: 'GLB Production Modeling', org: 'Interactive Design', desc: 'Creating accurate 3D mockups of the protein/energy bars for pre-launch validation, rendering precise folds, paper texture, and material finishes.' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ih-bg:#0A0906;--ink:#F0EDE6;--ih-muted:rgba(240,237,230,0.45);--ih-accent:#D4600A;--ih-border:rgba(240,237,230,0.08);--ih-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Instrument Sans',sans-serif}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }
body{background:var(--ih-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden;cursor:none}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.03;pointer-events:none;z-index:9999}
#dot{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--ih-accent);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,opacity .25s}
#dot.lg{width:36px;height:36px;background:transparent;border:1.5px solid var(--ih-accent);opacity:.7}
a{color:inherit;text-decoration:none}
.c{max-width:1200px;margin:0 auto;padding:0 5vw}

.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ih-border);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.92) 35%,rgba(10,9,6,.55) 65%,rgba(10,9,6,.25) 100%);pointer-events:none;z-index:0}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ih-accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,12vw,11rem);line-height:1.05;}
.hero-title i{color:var(--ih-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ih-muted);max-width:540px;line-height:1.85;margin-top:2rem}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ih-border)}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ih-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ih-border)}
.metric{background:var(--ih-bg);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;transition:background .4s}
.metric:hover{background:rgba(212,96,10,.06)}
.metric::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s}
.metric:hover::before{opacity:1}
.m-n{font-family:var(--D);font-weight:900;font-size:clamp(3.5rem,7vw,6.5rem);color:var(--ih-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ih-muted);margin-top:.8rem}
section{padding:9rem 0;border-bottom:1px solid var(--ih-border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ih-accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(3.5rem,7vw,8rem);line-height:1.05;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ih-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ih-muted);max-width:660px}

/* Bento Grid */
.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:280px;gap:1.5rem;margin-top:4rem}
.b-card{background:var(--ih-glass);border:1px solid var(--ih-border);border-radius:12px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;transition:transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease}
.b-card:hover{transform:translateY(-5px);border-color:rgba(212,96,10,0.25);box-shadow:0 30px 60px rgba(0,0,0,0.5)}
.b-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;transition:transform 0.8s cubic-bezier(0.19,1,0.22,1)}
.b-card:hover img{transform:scale(1.05)}
.b-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,0.92) 15%,rgba(10,9,6,0.3) 50%,transparent 100%);z-index:1}
.b-content{position:relative;z-index:2}
.b-label{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ih-accent);margin-bottom:.4rem;display:block}
.b-name{font-family:var(--D);font-weight:900;font-size:1.6rem;line-height:1.1;letter-spacing:.02em;color:#F0EDE6}
.b-meta{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ih-muted);margin-top:.4rem;display:block}

/* Bento Sizes */
.b-card.tall{grid-row:span 2}
.b-card.wide{grid-column:span 2}
.b-card.large{grid-column:span 2;grid-row:span 2}
.b-card.large .b-name{font-size:2.2rem}

/* 3D Showcase Grid */
.three-d-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:4rem}
.three-d-card{background:var(--ih-glass);border:1px solid var(--ih-border);border-radius:12px;overflow:hidden;height:450px;position:relative;display:flex;flex-direction:column}
.viewer-container{flex-grow:1;width:100%;height:320px;position:relative;background:#100F0B}
.viewer-caption{padding:1.5rem;border-top:1px solid var(--ih-border);background:var(--ih-bg)}
.viewer-title{font-family:var(--D);font-weight:900;font-size:1.4rem;color:#F0EDE6}
.viewer-sub{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ih-muted);margin-top:0.2rem}

/* Timeline */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:1.5rem;border-left:1px solid var(--ih-border);padding-left:2.5rem;position:relative}
.tl-item{position:relative;padding-bottom:1.5rem}
.tl-dot{position:absolute;left:-2.85rem;top:0.35rem;width:10px;height:10px;border-radius:50%;background:var(--ih-accent);border:3px solid var(--ih-bg);box-shadow:0 0 0 1px var(--ih-border)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ih-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-weight:900;font-size:1.6rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ih-muted);margin-top:.2rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ih-muted);margin-top:1rem;max-width:680px}

/* PDF Download Banner */
.pdf-banner{background:rgba(212,96,10,0.04);border:1px solid rgba(212,96,10,0.15);padding:3rem;border-radius:12px;margin-top:4rem;display:flex;align-items:center;justify-content:space-between;gap:2rem;position:relative;overflow:hidden}
.pdf-banner::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 80% 0%,rgba(212,96,10,0.08),transparent 60%);pointer-events:none}
.pdf-info{max-width:600px}
.pdf-title{font-family:var(--D);font-weight:900;font-size:2rem;color:#F0EDE6;line-height:1.2}
.pdf-desc{font-family:var(--S);font-size:1.02rem;color:var(--ih-muted);margin-top:0.6rem;line-height:1.6}
.pdf-btn{font-family:var(--M);font-size:.65rem;letter-spacing:.18em;border:1px solid var(--ih-accent);color:var(--ih-accent);padding:.9rem 2.2rem;border-radius:40px;transition:.3s;background:transparent;flex-shrink:0}
.pdf-btn:hover{background:var(--ih-accent);color:#fff;box-shadow:0 10px 20px rgba(212,96,10,0.2)}

/* Footer */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ih-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.4rem;letter-spacing:.06em}

/* Custom glow tags in cards */
.b-card::after, .three-d-card::after, .tl-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(212,96,10,0.12), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 1;
}
.b-card:hover::after, .three-d-card:hover::after {
  opacity: 1;
}

@media(max-width:1024px){
  .bento{grid-template-columns:repeat(3,1fr);grid-auto-rows:240px}
  .b-card.large{grid-column:span 2;grid-row:span 2}
  .three-d-grid{grid-template-columns:1fr;gap:2rem}
  .three-d-card{height:420px}
}
@media(max-width:768px){

  .logo{font-size:1.1rem}
  .back{font-size:.55rem;padding:.5rem 1.2rem}
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(3rem,10vw,6.5rem)}
  .hero-meta{gap:1.5rem;margin-top:3rem}
  .metrics{grid-template-columns:repeat(2,1fr)}
  section{padding:6rem 0}
  .bento{grid-template-columns:repeat(2,1fr);grid-auto-rows:220px;gap:1rem}
  .b-card.large{grid-column:span 2;grid-row:span 2}
  .pdf-banner{flex-direction:column;align-items:flex-start;padding:2rem}
  .pdf-btn{width:100%;text-align:center}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
}
@media(max-width:480px){
  .hero-title{font-size:clamp(2.5rem,12vw,4.5rem)}
  .metrics{grid-template-columns:1fr}
  .bento{grid-template-columns:1fr;grid-auto-rows:minmax(220px, auto);gap:1.2rem}
  .b-card{min-height:220px}
  .b-card.large, .b-card.wide{grid-column:span 1;grid-row:span 1}
  .b-card.tall{grid-row:span 1}
  .b-card.large .b-name{font-size:1.4rem}
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

/* HERO ENTRANCE */
@keyframes fadeBlurIn{0%{opacity:0;filter:blur(12px);transform:translateY(20px)}100%{opacity:1;filter:blur(0);transform:translateY(0)}}
@keyframes orbFloat{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(25px,-15px) scale(1.05)}66%{transform:translate(-15px,10px) scale(0.95)}}
@keyframes cursorBlink{0%,100%{border-right-color:var(--ih-accent)}50%{border-right-color:transparent}}
@keyframes heroBgShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

/* Hero entrance stagger */
.hero .eyebrow{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .2s both}
.hero .hero-title{animation:fadeBlurIn .9s cubic-bezier(.16,1,.3,1) .35s both}
.hero .hero-sub{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .55s both}
.hero .hero-meta{animation:fadeBlurIn .8s cubic-bezier(.16,1,.3,1) .7s both}

/* Floating orb */
.hero-orb{animation:orbFloat 8s ease-in-out infinite}

/* Gradient bg */
.hero-bg{background:linear-gradient(135deg,#0d1117,#1a1f2e,#0f1922,#0A0906)!important;background-size:300% 300%!important;animation:heroBgShift 12s ease-in-out infinite}

/* Section label typewriter */
.s-label{border-right:2px solid var(--ih-accent);padding-right:6px;animation:cursorBlink 1s step-end infinite;display:inline-block}

/* Link underline */
.pc-link{position:relative}
.pc-link::before{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:var(--ih-accent);transition:width .4s cubic-bezier(.16,1,.3,1)}
.pc-link:hover::before{width:100%}

/* Card tilt ready */
.proj-card{transition:transform .4s cubic-bezier(.19,1,.22,1),box-shadow .4s;will-change:transform}

/* Pillar stagger */
.pillar:nth-child(1) .rv,.pillar:nth-child(1) .rv2{transition-delay:.05s}
.pillar:nth-child(2) .rv,.pillar:nth-child(2) .rv2{transition-delay:.15s}
.pillar:nth-child(3) .rv,.pillar:nth-child(3) .rv2{transition-delay:.25s}

/* Footer slide */
.pfooter{opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.pfooter.vis{opacity:1;transform:translateY(0)}
.ih-pill{display:inline-flex;align-items:center;gap:.5rem;border:1px solid rgba(240,237,230,0.15);color:var(--ink);padding:.6rem 1.2rem;border-radius:40px;font-family:var(--M);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;transition:all .3s ease;background:var(--ih-glass);margin-top:2.5rem;position:relative;z-index:10}
.ih-pill:hover{border-color:var(--ih-accent);color:var(--ih-accent);transform:translateY(-2px)}

/* SVARNART EDTECH PLATFORM SHOWCASE */
.sv-banner{background:rgba(212,96,10,0.05);border:1px solid rgba(212,96,10,0.22);border-radius:16px;padding:3rem;margin-top:3rem;position:relative;overflow:hidden}
.sv-banner::before{content:'';position:absolute;top:-80px;right:-60px;width:320px;height:320px;background:radial-gradient(circle,rgba(212,96,10,0.18),transparent 70%);pointer-events:none}
.sv-top-row{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1.5rem;margin-bottom:1.5rem;position:relative;z-index:2}
.sv-live-badge{display:inline-flex;align-items:center;gap:0.5rem;font-family:var(--M);font-size:0.62rem;letter-spacing:0.16em;text-transform:uppercase;color:#00E5FF;background:rgba(0,229,255,0.08);border:1px solid rgba(0,229,255,0.3);padding:0.55rem 1.2rem;border-radius:999px;text-decoration:none;transition:all 0.3s ease}
.sv-live-badge:hover{background:rgba(0,229,255,0.18);transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,229,255,0.25);color:#fff}
.sv-live-dot{width:6px;height:6px;border-radius:50%;background:#00E5FF;box-shadow:0 0 8px #00E5FF;animation:heroBgPulse 2s infinite ease-in-out}
.sv-tag-list{display:flex;flex-wrap:wrap;gap:0.5rem;margin:1.5rem 0 2rem;position:relative;z-index:2}
.sv-tag{font-family:var(--M);font-size:0.55rem;letter-spacing:0.14em;text-transform:uppercase;padding:0.35rem 0.8rem;border-radius:999px;background:rgba(240,237,230,0.05);border:1px solid rgba(240,237,230,0.12);color:var(--ink)}
.sv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.sv-card{background:var(--ih-glass);border:1px solid var(--ih-border);border-radius:12px;padding:2.2rem 1.8rem;display:flex;flex-direction:column;position:relative;overflow:hidden;transition:transform 0.4s ease,border-color 0.4s ease,box-shadow 0.4s ease}
.sv-card:hover{transform:translateY(-5px);border-color:rgba(212,96,10,0.3);box-shadow:0 20px 45px rgba(0,0,0,0.4)}
.sv-card-num{font-family:var(--M);font-size:0.58rem;letter-spacing:0.2em;color:var(--ih-accent);margin-bottom:0.8rem;display:block}
.sv-card-title{font-family:var(--D);font-weight:900;font-size:1.4rem;color:#F0EDE6;line-height:1.2;margin-bottom:0.8rem}
.sv-card-body{font-family:var(--S);font-size:0.98rem;line-height:1.75;color:var(--ih-muted);flex-grow:1}
.sv-card-tag{display:inline-block;font-family:var(--M);font-size:0.5rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--ih-accent);margin-top:1.2rem}
.sv-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ih-border);border:1px solid var(--ih-border);border-radius:12px;overflow:hidden;margin:3rem 0}
.sv-stat-cell{background:var(--ih-bg);padding:2rem 1.5rem;text-align:center;transition:background 0.3s}
.sv-stat-cell:hover{background:rgba(212,96,10,0.06)}
.sv-stat-val{font-family:var(--D);font-weight:900;font-size:clamp(1.8rem,3.5vw,3rem);color:var(--ih-accent);line-height:1}
.sv-stat-lbl{font-family:var(--M);font-size:0.52rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--ih-muted);margin-top:0.6rem}
@media(max-width:1024px){.sv-grid{grid-template-columns:repeat(2,1fr)}.sv-stats{grid-template-columns:repeat(2,1fr)}.sv-banner{padding:2.2rem}}
@media(max-width:640px){.sv-grid{grid-template-columns:1fr}.sv-stats{grid-template-columns:1fr}.sv-banner{padding:1.6rem}.sv-card{padding:1.6rem 1.2rem}}
`

import Navbar from '../components/Navbar';

export default function InHouseDesigns() {
  return (
    <>
      <Head>
        <script type="module" src="https://unpkg.com/@google/model-viewer@3.3.0/dist/model-viewer.min.js" />
        <link rel="canonical" href="https://sivnco.in/in-house-designs" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>In-House Projects — H.P. Shivaraj · Sivnco</title>
        <meta name="description" content="Explore Svar'n'Art Academy (Full-Stack EdTech & Cloud ERP), OG Mithai, and Vedic Treats in-house projects. Full-stack engineering, brand packaging, and 3D interactive renders." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />
      {/* model-viewer loaded globally via pages/_document.js as proper type="module" */}

      <div id="dot" />

      <Navbar />

      {/* HERO */}
      <div className="hero">
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(212,96,10,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(232,133,42,0.1) 0%, transparent 50%), var(--ih-bg)', animation: 'heroBgPulse 8s ease-in-out infinite' }} />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">In-House Lab · Ventures, Systems &amp; 3D Renders</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            In-House<br /><i>Projects</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            Where I test ideas and build proprietary systems. From the full-stack Svar&apos;n&apos;Art Academy operating system to packaging concepts, typographic experiments, and interactive 3D simulations.
          </p>
          <div className="hero-meta rv" style={{ transitionDelay: '.4s' }}>
            {[
              ['Scope', 'Ventures · Systems · Packaging'],
              ['Tech & 3D', 'React 19, Firebase & GLB Renders'],
              ['Projects', 'Svarnart, OG Mithai & Vedic Treats'],
              ['Location', 'Bengaluru, IN']
            ].map(([l, v]) => (
              <div key={l} className="meta"><label>{l}</label><span>{v}</span></div>
            ))}
          </div>
          <div className="rv" style={{ transitionDelay: '.55s' }}>
            <Link href="/artist-educator/commissions" className="ih-pill">
              For Art &amp; Design (Subject to availability based on schedule) &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — The Studio Lab</div>
          <h2 className="s-title rv">Testing systems,<br /><i>shapes &amp; textures.</i></h2>
          <div className="body rv2" style={{ color: 'var(--ih-muted)', fontSize: '1.15rem', lineHeight: '1.9' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Some of the most useful design and systems thinking I&apos;ve done has been on internal projects we created ourselves. Without legacy client constraints or arbitrary briefs, we engineer real, high-leverage solutions — from full-stack software architecture to multi-SKU retail packaging.
            </p>
            <p>
              Three in-house projects featured here: Svar&apos;n&apos;Art Academy, an end-to-end EdTech LMS and cloud ERP built from scratch; OG Mithai, a packaging concept exploring Indian sweets heritage and bold street typography; and Vedic Treats, an Ayurvedic wellness brand with interactive 3D product simulation.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY 1: SVARNART ACADEMY */}
      <section style={{ borderBottom: '1px solid var(--ih-border)' }}>
        <div className="c">
          <div className="s-label rv">02 — Case Study I (In-House Venture)</div>
          <h2 className="s-title rv">Svar&apos;n&apos;Art Academy:<br /><i>Full-Stack EdTech &amp; Cloud ERP.</i></h2>
          
          <div className="body rv" style={{ marginBottom: '2.5rem' }}>
            <p style={{ color: 'var(--ih-muted)', marginBottom: '1rem' }}>
              A modern, production-grade education operating system and learning management platform designed for visual arts, music, and cultural pedagogy. Built from scratch to digitize and scale our physical academy, eliminating fragmented tools (Zoom, WhatsApp groups, spreadsheets, paper ledgers) into a cohesive, real-time platform.
            </p>
          </div>

          {/* Banner card with live demo and quick badges */}
          <div className="sv-banner rv2">
            <div className="sv-top-row">
              <div>
                <span className="sv-card-num">REAL-TIME ACADEMY OPERATING SYSTEM</span>
                <h3 style={{ fontFamily: 'var(--D)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#F0EDE6', lineHeight: 1.15, marginTop: '0.4rem' }}>
                  svarnart.com
                </h3>
              </div>
              <a href="https://www.svarnart.com" target="_blank" rel="noopener noreferrer" className="sv-live-badge">
                <span className="sv-live-dot" />
                Launch Live Platform &rarr;
              </a>
            </div>

            <p style={{ fontFamily: 'var(--S)', fontSize: '1.05rem', color: 'var(--ih-muted)', lineHeight: '1.8', maxWidth: '780px' }}>
              Consolidates interactive digital curricula, algorithmic audio-synthesized theory games, Jitsi WebRTC video classrooms, automated student progress dossiers, dynamic 1-click UPI payments, and zero-trust Firestore security.
            </p>

            <div className="sv-tag-list">
              {['React 19', 'Vite', 'Firebase Auth', 'Firestore v12', 'WebRTC (Jitsi)', 'Razorpay API', 'Dynamic UPI Intent', 'Web Audio API', 'PWA Offline', 'OpenAI Omni-Moderation'].map(tag => (
                <span key={tag} className="sv-tag">{tag}</span>
              ))}
            </div>

            {/* Metrics highlight grid */}
            <div className="sv-stats">
              <div className="sv-stat-cell">
                <div className="sv-stat-val">React 19</div>
                <div className="sv-stat-lbl">Concurrent UI Core</div>
              </div>
              <div className="sv-stat-cell">
                <div className="sv-stat-val">&lt;4 KB</div>
                <div className="sv-stat-lbl">Zero-Asset Audio Synthesis</div>
              </div>
              <div className="sv-stat-cell">
                <div className="sv-stat-val">WebRTC</div>
                <div className="sv-stat-lbl">Zero-Cost Video Bridge</div>
              </div>
              <div className="sv-stat-cell">
                <div className="sv-stat-val">1-Click</div>
                <div className="sv-stat-lbl">Dynamic UPI Fee Intent</div>
              </div>
            </div>
          </div>

          {/* 6 Feature Modules Bento Grid */}
          <h3 className="s-label rv" style={{ marginTop: '5rem', marginBottom: '-2rem' }}>Core Modules &amp; Functional Innovations</h3>
          <div className="sv-grid rv2">
            {SVARNART_MODULES.map((m) => (
              <div key={m.num} className="sv-card">
                <span className="sv-card-num">MODULE {m.num}</span>
                <h4 className="sv-card-title">{m.title}</h4>
                <p className="sv-card-body">{m.desc}</p>
                <span className="sv-card-tag">{m.tag}</span>
              </div>
            ))}
          </div>

          {/* Svarnart Process Timeline */}
          <div className="timeline rv2" style={{ marginTop: '5rem' }}>
            {TIMELINE_SVARNART.map((item, index) => (
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

      {/* CASE STUDY 2: OG MITHAI */}
      <section style={{ borderBottom: '1px solid var(--ih-border)' }}>
        <div className="c">
          <div className="s-label rv">03 — Case Study II</div>
          <h2 className="s-title rv">OG Mithai:<br /><i>Bold sweets culture.</i></h2>
          
          <div className="body rv" style={{ marginBottom: '3rem' }}>
            <p style={{ color: 'var(--ih-muted)' }}>
              OG Mithai is a concept for reimagining Indian sweets as a premium gifting product that still feels rooted in street culture. The tension was to make it feel high-end without losing the boldness of a mithai shop — rich typography, gold foil, vivid color — the kind of packaging that can sit at a wedding table but also remind you of a busy market lane.
            </p>
          </div>

          <div className="bento rv2">
            {OG_MITHAI_ASSETS.map((asset) => (
              <div key={asset.id} className={`b-card ${asset.size}`}>
                <img loading="lazy" src={asset.img} alt={asset.name} />
              </div>
            ))}
          </div>

          <div className="timeline rv2" style={{ marginTop: '5rem' }}>
            {TIMELINE_OG.map((item, index) => (
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

      {/* CASE STUDY 3: VEDIC TREATS */}
      <section>
        <div className="c">
          <div className="s-label rv">04 — Case Study III</div>
          <h2 className="s-title rv">Vedic Treats:<br /><i>Ayurvedic wellness.</i></h2>
          
          <div className="body rv" style={{ marginBottom: '3rem' }}>
            <p style={{ color: 'var(--ih-muted)' }}>
              Vedic Treats presents a clean, minimal design aesthetic built for a premium Ayurvedic wellness brand. Prioritizing pure ingredients like cow ghee, organic jaggery, and dry fruits, the packaging is structured around earthy color palettes, delicate botanical elements, and luxury serif typography. To validate the packaging files before print production, we developed high-fidelity 3D GLB packaging models.
            </p>
          </div>

          {/* Interactive 3D Mockup Showcase */}
          <h3 className="s-label rv" style={{ marginTop: '4rem', marginBottom: '-2rem' }}>Interactive 3D Pack Renders</h3>
          <div className="three-d-grid rv2">
            <div className="three-d-card">
              <div className="viewer-container">
                <model-viewer 
                  src="/models/pc_bar.glb" 
                  alt="Vedic Treats Protein Bar Package 3D Model" 
                  auto-rotate 
                  camera-controls 
                  shadow-intensity="1" 
                  environment-image="neutral" 
                  style={{ width: '100%', height: '100%', background: 'transparent' }}>
                </model-viewer>
              </div>
              <div className="viewer-caption">
                <h4 className="viewer-title">PC Bar Front Render</h4>
                <p className="viewer-sub">Interactive 3D GLB Model · Auto-Rotate enabled</p>
              </div>
            </div>

            <div className="three-d-card">
              <div className="viewer-container">
                <model-viewer 
                  src="/models/pc_bar_2.glb" 
                  alt="Vedic Treats Protein Bar Package Alternate 3D Model" 
                  auto-rotate 
                  camera-controls 
                  shadow-intensity="1" 
                  environment-image="neutral" 
                  style={{ width: '100%', height: '100%', background: 'transparent' }}>
                </model-viewer>
              </div>
              <div className="viewer-caption">
                <h4 className="viewer-title">PC Bar Alternate Angle</h4>
                <p className="viewer-sub">Interactive 3D GLB Model · Drag to rotate</p>
              </div>
            </div>
          </div>

          {/* 2D Assets Bento Grid */}
          <h3 className="s-label rv" style={{ marginTop: '5rem', marginBottom: '-2rem' }}>Brand &amp; Packaging Elements</h3>
          <div className="bento rv2">
            {VEDIC_TREATS_ASSETS.map((asset) => (
              <div key={asset.id} className={`b-card ${asset.size}`}>
                <img loading="lazy" src={asset.img} alt={asset.name} />
              </div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="timeline rv2" style={{ marginTop: '5rem' }}>
            {TIMELINE_VEDIC.map((item, index) => (
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

      {/* FOOTER */}
      <div className="c">
        <div className="pfooter rv">
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--ih-accent)' }}>.</span></div></div>
          <StartProjectButton />
        </div>
      </div>

      <Script id="page-init" strategy="afterInteractive">{`
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

          // METRIC COUNTERS
          (function(){
            var obs = new IntersectionObserver(function(entries){
              entries.forEach(function(e){
                if(!e.isIntersecting) return;
                obs.unobserve(e.target);
                var el = e.target;
                var text = el.textContent.trim();
                var m = text.match(/[\\d.]+/);
                if(!m) return;
                var target = parseFloat(m[0]);
                var suffix = text.replace(m[0],'');
                var isD = text.indexOf('.')!==-1;
                var start = Date.now(); var dur = 1800;
                var obj = {v:0};
                (function tick(){
                  var p = Math.min(1,(Date.now()-start)/dur);
                  p = 1-Math.pow(1-p,3);
                  obj.v = target*p;
                  el.textContent = (isD?obj.v.toFixed(1):Math.round(obj.v))+suffix;
                  if(p<1) requestAnimationFrame(tick);
                })();
              });
            },{threshold:0.3});
            document.querySelectorAll('.m-n').forEach(function(el){obs.observe(el)});
          })();

          // CARD TILT (desktop only)
          if(window.innerWidth>768){
            document.querySelectorAll('.proj-card').forEach(function(card){
              card.addEventListener('mousemove',function(e){
                var r=card.getBoundingClientRect();
                var px=(e.clientX-r.left)/r.width-0.5;
                var py=(e.clientY-r.top)/r.height-0.5;
                card.style.transform='perspective(800px) rotateY('+(px*5)+'deg) rotateX('+(-py*5)+'deg)';
              });
              card.addEventListener('mouseleave',function(){card.style.transform='';});
            });
          }

          // PARALLAX on section titles
          var sTitles = document.querySelectorAll('.s-title');
          if(sTitles.length && window.innerWidth>768){
            window.addEventListener('scroll',function(){
              sTitles.forEach(function(el){
                var r = el.getBoundingClientRect();
                if(r.top<window.innerHeight && r.bottom>0){
                  var p = (r.top/window.innerHeight - 0.5)*-15;
                  el.style.transform = 'translateY('+p+'px)';
                }
              });
            },{passive:true});
          }

          // FOOTER SLIDE
          var pf = document.querySelector('.pfooter');
          if(pf){
            var pfObs = new IntersectionObserver(function(e){
              if(e[0].isIntersecting){pf.classList.add('vis');pfObs.unobserve(pf);}
            },{threshold:0.1});
            pfObs.observe(pf);
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

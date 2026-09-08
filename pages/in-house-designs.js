import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'
import Interactive3DStudio from '@/components/3d-pack-studio/Interactive3DStudio'
import Navbar from '../components/Navbar'
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas'
import { getAudioEngine } from '../components/ui/TactileAudioEngine'

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

const SYNTH_KEYS = [
  { key: '1', note: 'Sa', freq: 261.63, sub: 'C4' },
  { key: '2', note: 'Re', freq: 293.66, sub: 'D4' },
  { key: '3', note: 'Ga', freq: 329.63, sub: 'E4' },
  { key: '4', note: 'Pa', freq: 392.00, sub: 'G4' },
  { key: '5', note: 'Dha', freq: 440.00, sub: 'A4' },
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
.lenis.lenis-stopped { overflow: hidden; }
body{background:var(--ih-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}
.c{max-width:1240px;margin:0 auto;padding:0 5vw}

/* HERO */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ih-border);position:relative;overflow:hidden}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ih-accent);margin-bottom:2rem;position:relative;z-index:2}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,12vw,11rem);line-height:1.05;position:relative;z-index:2}
.hero-title i{color:var(--ih-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ih-muted);max-width:560px;line-height:1.85;margin-top:2rem;position:relative;z-index:2}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ih-border);position:relative;z-index:2}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ih-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}

/* SECTIONS */
section{padding:8rem 0;border-bottom:1px solid var(--ih-border);position:relative}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ih-accent);margin-bottom:1.5rem;display:inline-block}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(3rem,6vw,7rem);line-height:1.05;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ih-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ih-muted);max-width:660px}

/* SVARNART EDTECH PLATFORM SHOWCASE */
.sv-banner{background:rgba(212,96,10,0.05);border:1px solid rgba(212,96,10,0.22);border-radius:32px;padding:3.5rem;margin-top:3rem;position:relative;overflow:hidden;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
.sv-banner::before{content:'';position:absolute;top:-80px;right:-60px;width:320px;height:320px;background:radial-gradient(circle,rgba(212,96,10,0.18),transparent 70%);pointer-events:none}
.sv-top-row{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1.5rem;margin-bottom:1.5rem;position:relative;z-index:2}
.sv-live-badge{display:inline-flex;align-items:center;gap:0.5rem;font-family:var(--M);font-size:0.62rem;letter-spacing:0.16em;text-transform:uppercase;color:#00E5FF;background:rgba(0,229,255,0.08);border:1px solid rgba(0,229,255,0.3);padding:0.55rem 1.2rem;border-radius:999px;text-decoration:none;transition:all 0.3s ease}
.sv-live-badge:hover{background:rgba(0,229,255,0.18);transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,229,255,0.25);color:#fff}
.sv-live-dot{width:6px;height:6px;border-radius:50%;background:#00E5FF;box-shadow:0 0 8px #00E5FF;animation:heroBgPulse 2s infinite ease-in-out}
.sv-tag-list{display:flex;flex-wrap:wrap;gap:0.5rem;margin:1.5rem 0 2.5rem;position:relative;z-index:2}
.sv-tag{font-family:var(--M);font-size:0.55rem;letter-spacing:0.14em;text-transform:uppercase;padding:0.35rem 0.8rem;border-radius:999px;background:rgba(240,237,230,0.05);border:1px solid rgba(240,237,230,0.12);color:var(--ink)}

/* FLOATING FROSTED STAT CAPSULES */
.sv-stats{display:flex;flex-wrap:wrap;gap:1.2rem;margin:2.5rem 0}
.sv-stat-cell{flex:1 1 200px;background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.12);border-radius:9999px;padding:1.6rem 2rem;text-align:center;backdrop-filter:blur(24px);transition:transform 0.3s ease, border-color 0.3s ease}
.sv-stat-cell:hover{transform:translateY(-4px);border-color:rgba(212,96,10,0.4)}
.sv-stat-val{font-family:var(--D);font-weight:900;font-size:clamp(1.6rem,3vw,2.4rem);color:var(--ih-accent);line-height:1}
.sv-stat-lbl{font-family:var(--M);font-size:0.52rem;letter-spacing:.15em;text-transform:uppercase;color:var(--ih-muted);margin-top:0.4rem}

/* PLAYABLE WEB AUDIO SYNTHESIZER (INTERACTIVE UX) */
.synth-studio-box{background:rgba(18,17,14,0.7);border:1px solid rgba(240,237,230,0.14);border-radius:36px;padding:3.5rem;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:0 30px 70px rgba(0,0,0,0.7);margin-top:4rem}
.synth-header{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1.5rem;margin-bottom:2.5rem}
.waveform-selector{display:flex;gap:.6rem}
.wave-pill{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;text-transform:uppercase;padding:.4rem 1rem;border-radius:999px;border:1px solid rgba(240,237,230,0.15);background:rgba(255,255,255,0.03);color:var(--ink);cursor:pointer;transition:all .3s ease}
.wave-pill.active{background:rgba(212,96,10,0.25);border-color:#D4600A;color:#FFF}

.synth-keys-rack{display:grid;grid-template-columns:repeat(5,1fr);gap:1.2rem}
.synth-key{background:rgba(240,237,230,0.04);border:1px solid rgba(240,237,230,0.12);border-radius:24px;padding:2.5rem 1rem;display:flex;flex-direction:column;align-items:center;justify-content:space-between;min-height:180px;cursor:pointer;user-select:none;transition:all .2s cubic-bezier(0.16,1,0.3,1)}
.synth-key:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.45);background:rgba(212,96,10,0.08)}
.synth-key.playing{transform:translateY(2px) scale(0.98);background:#D4600A;border-color:#D4600A;box-shadow:0 0 30px rgba(212,96,10,0.6)}
.synth-key.playing .key-note, .synth-key.playing .key-sub, .synth-key.playing .key-num{color:#FFF!important}
.key-num{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:rgba(240,237,230,0.4);border:1px solid rgba(240,237,230,0.15);width:22px;height:22px;display:flex;align-items:center;justify-content:center;border-radius:50%}
.key-note{font-family:var(--D);font-size:2.2rem;font-weight:900;color:var(--ih-accent);line-height:1}
.key-sub{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;color:var(--ih-muted)}

/* MODULE CARDS */
.sv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.8rem;margin-top:3.5rem}
.sv-card{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.1);border-radius:32px;padding:2.5rem 2.2rem;display:flex;flex-direction:column;position:relative;overflow:hidden;backdrop-filter:blur(20px);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),border-color 0.4s ease,box-shadow 0.4s ease}
.sv-card:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.45);box-shadow:0 24px 50px rgba(0,0,0,0.5)}
.sv-card-num{font-family:var(--M);font-size:0.58rem;letter-spacing:0.2em;color:var(--ih-accent);margin-bottom:0.8rem;display:block}
.sv-card-title{font-family:var(--D);font-weight:900;font-size:1.5rem;color:#F0EDE6;line-height:1.2;margin-bottom:0.8rem}
.sv-card-body{font-family:var(--S);font-size:1rem;line-height:1.8;color:var(--ih-muted);flex-grow:1}
.sv-card-tag{display:inline-block;font-family:var(--M);font-size:0.52rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--ih-accent);margin-top:1.2rem}

/* BENTO ASSETS */
.bento{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:320px;gap:1.8rem;margin-top:3.5rem}
.b-card{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.12);border-radius:32px;position:relative;overflow:hidden;backdrop-filter:blur(20px);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s ease, box-shadow 0.4s ease}
.b-card:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.4);box-shadow:0 24px 50px rgba(0,0,0,0.6)}
.b-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.6s cubic-bezier(0.16,1,0.3,1)}
.b-card:hover img{transform:scale(1.05)}
.b-card.wide{grid-column:span 2}
.b-card.large{grid-column:span 2;grid-row:span 2}

/* TIMELINE */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:2rem}
.tl-item{position:relative;background:rgba(240,237,230,0.025);border:1px solid rgba(240,237,230,0.1);border-radius:28px;padding:2.5rem 3rem;backdrop-filter:blur(20px);transition:transform .3s ease, border-color .3s ease}
.tl-item:hover{transform:translateX(8px);border-color:rgba(212,96,10,0.35)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ih-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-weight:900;font-size:1.8rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ih-muted);margin-top:.3rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ih-muted);margin-top:1rem;max-width:720px}

/* FOOTER */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ih-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.4rem;letter-spacing:.06em}

.rv{opacity:0;transform:translateY(28px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}

@media(max-width:1024px){
  .sv-grid{grid-template-columns:repeat(2,1fr)}
  .synth-keys-rack{grid-template-columns:repeat(5,1fr);gap:.6rem}
  .bento{grid-template-columns:repeat(2,1fr)}
  .b-card.large{grid-column:span 2;grid-row:span 1}
}
@media(max-width:768px){
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(3rem,10vw,6.5rem)}
  .sv-grid{grid-template-columns:1fr}
  .synth-keys-rack{grid-template-columns:repeat(3,1fr)}
  .bento{grid-template-columns:1fr}
  .b-card.wide, .b-card.large{grid-column:span 1}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
}
`

export default function InHouseDesigns() {
  const [activeWaveform, setActiveWaveform] = useState('sine')
  const [playingKey, setPlayingKey] = useState(null)

  const triggerNote = (item) => {
    setPlayingKey(item.key)
    const audio = getAudioEngine()
    if (audio) {
      audio.playSynthNote(item.freq, activeWaveform, 0.45)
    }
    setTimeout(() => setPlayingKey(null), 250)
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      const match = SYNTH_KEYS.find(k => k.key === e.key)
      if (match) {
        triggerNote(match)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeWaveform])

  return (
    <>
      <Head>
        <script type="module" src="https://unpkg.com/@google/model-viewer@3.3.0/dist/model-viewer.min.js" />
        <title>In-House Projects — H P Shivaraj | Sivnco</title>
        <meta name="description" content="Explore Svar'n'Art Academy EdTech Platform, OG Mithai packaging, and Vedic Treats 3D GLB interactive models." />
      </Head>

      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* HERO WITH FLUID CANVAS */}
      <div className="hero">
        <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.2)" secondaryColor="rgba(0, 229, 255, 0.08)" />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow">IN-HOUSE LAB · VENTURES, SYSTEMS &amp; 3D RENDERS</div>
          <h1 className="hero-title">
            In-House<br /><i>Projects</i>
          </h1>
          <p className="hero-sub">
            Where I test ideas and build proprietary systems. From the full-stack Svar&apos;n&apos;Art Academy operating system to packaging concepts, typographic experiments, and interactive 3D simulations.
          </p>
          <div className="hero-meta">
            <div className="meta">
              <label>FEATURED VENTURE</label>
              <span>Svar&apos;n&apos;Art Academy</span>
            </div>
            <div className="meta">
              <label>FULL-STACK CORE</label>
              <span>React 19 · Web Audio · WebRTC</span>
            </div>
            <div className="meta">
              <label>PACKAGING &amp; 3D</label>
              <span>OG Mithai · Vedic Treats GLB</span>
            </div>
            <div className="meta">
              <label>STATUS</label>
              <span>Live in Production</span>
            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDY 1: SVARNART ACADEMY */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — Case Study I (In-House Venture)</div>
          <h2 className="s-title rv">Svar&apos;n&apos;Art Academy:<br /><i>Full-Stack EdTech Platform.</i></h2>
          
          <div className="body rv" style={{ marginBottom: '2.5rem' }}>
            <p style={{ color: 'var(--ih-muted)', marginBottom: '1rem' }}>
              A modern, production-grade education operating system and learning management platform designed for visual arts, music, and cultural pedagogy. Built from scratch to digitize and scale our physical academy, eliminating fragmented tools into a cohesive, real-time platform.
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

            {/* Floating frosted stat capsules */}
            <div className="sv-stats">
              <div className="sv-stat-cell">
                <div className="sv-stat-val">React 19</div>
                <div className="sv-stat-lbl">Concurrent UI Core</div>
              </div>
              <div className="sv-stat-cell">
                <div className="sv-stat-val">&lt;4 KB</div>
                <div className="sv-stat-lbl">Procedural Web Audio</div>
              </div>
              <div className="sv-stat-cell">
                <div className="sv-stat-val">WebRTC</div>
                <div className="sv-stat-lbl">Live Video Bridge</div>
              </div>
              <div className="sv-stat-cell">
                <div className="sv-stat-val">1-Click</div>
                <div className="sv-stat-lbl">Dynamic UPI Intent</div>
              </div>
            </div>
          </div>

          {/* PLAYABLE PROCEDURAL WEB AUDIO SYNTHESIZER (INTERACTIVE UX) */}
          <div className="synth-studio-box rv2">
            <div className="synth-header">
              <div>
                <span className="s-label" style={{ marginBottom: '0.5rem', display: 'block' }}>MODULE 01 LIVE DEMO // WEB AUDIO API</span>
                <h3 style={{ fontFamily: 'var(--D)', fontSize: '1.8rem', color: '#FFF', fontWeight: 900 }}>
                  Playable Procedural Synthesizer
                </h3>
                <p style={{ fontFamily: 'var(--S)', fontSize: '.95rem', color: 'var(--ih-muted)', marginTop: '.4rem' }}>
                  Click keys or press numbers <strong style={{ color: '#FFF' }}>1 — 5</strong> on your keyboard to test the real-time procedural audio engine.
                </p>
              </div>
              <div className="waveform-selector">
                {['sine', 'triangle', 'sawtooth'].map((w) => (
                  <button
                    key={w}
                    onClick={() => {
                      setActiveWaveform(w)
                      getAudioEngine()?.playTabShift()
                    }}
                    className={`wave-pill ${activeWaveform === w ? 'active' : ''}`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <div className="synth-keys-rack">
              {SYNTH_KEYS.map((k) => (
                <div
                  key={k.key}
                  className={`synth-key ${playingKey === k.key ? 'playing' : ''}`}
                  onClick={() => triggerNote(k)}
                >
                  <span className="key-num">{k.key}</span>
                  <div className="key-note">{k.note}</div>
                  <span className="key-sub">{k.sub} · {k.freq}Hz</span>
                </div>
              ))}
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
      <section>
        <div className="c">
          <div className="s-label rv">02 — Case Study II</div>
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
                <div className="tl-date">{item.date}</div>
                <h3 className="tl-title">{item.title}</h3>
                <div className="tl-org">{item.org}</div>
                <p className="tl-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY 3: VEDIC TREATS WITH 3D PACK STUDIO */}
      <section>
        <div className="c">
          <div className="s-label rv">03 — Case Study III</div>
          <h2 className="s-title rv">Vedic Treats:<br /><i>Ayurvedic wellness.</i></h2>
          
          <div className="body rv" style={{ marginBottom: '3rem' }}>
            <p style={{ color: 'var(--ih-muted)' }}>
              Vedic Treats presents a clean, minimal design aesthetic built for a premium Ayurvedic wellness brand. Prioritizing pure ingredients like cow ghee, organic jaggery, and dry fruits, the packaging is structured around earthy color palettes, delicate botanical elements, and luxury serif typography. To validate the packaging files before print production, we developed high-fidelity 3D GLB packaging models.
            </p>
          </div>

          {/* Interactive 3D Mockup Showcase */}
          <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <Interactive3DStudio
              title="Vedic Treats 3D Pack Studio"
              eyebrow="IN-HOUSE AYURVEDIC WELLNESS SPEC"
              description="Interact with active Vedic Treats protein bar 3D models. Inspect wrapper geometry, lighting reflections, and typography alignment before committing to production rolls."
              models={[
                { name: 'PC Bar Front Wrapper', path: '/models/pc_bar.glb' },
                { name: 'PC Bar Alternate Wrapper', path: '/models/pc_bar_2.glb' },
                { name: 'Product Pack Model 3', path: '/models/product-3.glb' }
              ]}
            />
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

      <Script id="ih-init" strategy="afterInteractive">{`
        (function(){
          function initReveals() {
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              });
            }, { threshold: 0.04, rootMargin: '0px 0px -40px 0px' });
            document.querySelectorAll('.rv, .rv2').forEach(function(el) { obs.observe(el); });
            setTimeout(function() {
              document.querySelectorAll('.rv, .rv2').forEach(function(el) { el.classList.add('vis'); });
            }, 1000);
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initReveals);
          } else {
            initReveals();
          }
        })();
      `}</Script>
    </>
  )
}

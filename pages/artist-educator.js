import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'

const UNIQUE_PAINTINGS = [
  { id: 1, plate: '01', title: 'Wildlife Study', medium: 'Realism & Fur Texture · CAVA Mysore', img: '/images/paintings/painting_1.jpg' },
  { id: 2, plate: '02', title: 'Mountain Lake Pier', medium: 'Perspective & Atmospheric Depth', img: '/images/paintings/painting_2.jpg' },
  { id: 3, plate: '03', title: 'Elder Couple Portrait', medium: 'Observational Portraiture · Watercolors', img: '/images/paintings/painting_3.jpg' },
  { id: 4, plate: '04', title: 'Studio Life Study', medium: 'Portraiture on Easel · Studio Lighting', img: '/images/paintings/painting_4.jpg' },
  { id: 6, plate: '05', title: 'Classical Form & Sari', medium: 'Traditional Indian Form & Drapery Study', img: '/images/paintings/painting_6.jpg' },
  { id: 7, plate: '06', title: 'Contemplation', medium: 'Charcoal & Wash · Expressive Tone', img: '/images/paintings/painting_7.jpg' },
  { id: 8, plate: '07', title: 'Bengaluru Streetlife', medium: 'Plein Air Watercolor · City Sunlight', img: '/images/paintings/painting_8.jpg' },
  { id: 9, plate: '08', title: 'Bust & Drapery', medium: 'Academic Still Life · Value & Chiaroscuro', img: '/images/paintings/painting_9.jpg' },
  { id: 10, plate: '09', title: 'Foundational Geometry', medium: 'Planar Anatomy & Volume Construction', img: '/images/paintings/painting_10.jpg' },
  { id: 11, plate: '10', title: 'Rail Transit', medium: 'Landscape & Industrial Heritage', img: '/images/paintings/painting_11.jpg' },
  { id: 12, plate: '11', title: 'Urban Architecture', medium: 'Linear Ink Study · Vanishing Points', img: '/images/paintings/painting_12.jpg' },
  { id: 13, plate: '12', title: 'Ascetic Portrait', medium: 'Figurative Light & Atmospheric Texture', img: '/images/paintings/painting_13.jpg' },
  { id: 14, plate: '13', title: 'Child Expression', medium: 'Observational Watercolor · Facial Structure', img: '/images/paintings/painting_14.jpg' },
  { id: 16, plate: '14', title: 'Sacred Diya & Vessel', medium: 'Traditional Brass Reflections & Still Life', img: '/images/paintings/painting_16.jpg' },
  { id: 17, plate: '15', title: 'Glass Reflections', medium: 'Hermitage Bottle Study · Transparency & Color', img: '/images/paintings/painting_17.jpg' },
  { id: 18, plate: '16', title: 'Teal Monochrome Portrait', medium: 'Expressive Watercolor Wash · Signed by Artist', img: '/images/paintings/painting_18.jpg' },
  { id: 20, plate: '17', title: 'Cloud Formations', medium: 'Atmospheric Skies · Volume & Luminescence', img: '/images/paintings/painting_20.jpg' },
  { id: 22, plate: '18', title: 'Studio Chair & Pot', medium: 'Wood Grain, Terracotta & Cast Shadow Study', img: '/images/paintings/painting_22.jpg' },
  { id: 23, plate: '19', title: 'Anatomy of Feet', medium: 'Academic Life Study · Bone & Tendon Structure', img: '/images/paintings/painting_23.jpg' }
];

const METRICS = [
  { n: '200+', l: 'Mentored Students' },
  { n: '12', l: 'Portfolio Selections' },
  { n: '19', l: 'Original Paintings' },
  { n: '3', l: 'Years Teaching' },
]

const TIMELINE = [
  { date: '2025 — Present', title: 'Annual Academy Showcases', org: 'Svarnart Academy', desc: 'Curating student exhibitions showing over 120+ artworks by young minds to parents and local curators. Fosters confidence and real-world exposure for kids.' },
  { date: '2023 — Present', title: 'Portfolio Development Mentor', org: 'Independent Practice', desc: 'Guiding high-schoolers through composition, design thinking, and technical drawing to build portfolios for NID, NIFT, and Srishti.' },
  { date: 'Apr 2025 — Apr 2026', title: 'Art & Design Teacher', org: 'Openhouse · Bengaluru', desc: 'Teaching drawing, values, and color theory to students across age groups. Keeping curriculum active, hands-on, and focused on creative thinking.' },
  { date: '2025 — Present', title: 'Co-Founder & Curriculum Lead', org: 'Svarnart Academy · Bengaluru', desc: 'Co-founded with my wife. Developed a structured fine art pedagogy that bridges traditional roots (Carnatic music, classical forms) with modern visual design.' },
  { date: '2025 — Present', title: 'Active Painting Practice', org: 'Sivnco Studio', desc: 'Exhibiting personal work, focusing on semi-abstract acrylic landscapes and mixed-media representations of Indian classical art and heritage.' }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ae-bg:#0A0906;--ink:#F0EDE6;--ae-muted:rgba(240,237,230,0.45);--ae-accent:#D4600A;--ae-border:rgba(240,237,230,0.08);--ae-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Instrument Sans',sans-serif}
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

.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ae-border);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,6,.92) 35%,rgba(10,9,6,.55) 65%,rgba(10,9,6,.25) 100%);pointer-events:none;z-index:0}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ae-accent);margin-bottom:2rem}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,12vw,11rem);line-height:1.05;}
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
.m-n{font-family:var(--D);font-weight:900;font-size:clamp(3.5rem,7vw,6.5rem);color:var(--ae-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ae-muted);margin-top:.8rem}
section{padding:9rem 0;border-bottom:1px solid var(--ae-border)}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ae-accent);margin-bottom:1.5rem}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(3.5rem,7vw,8rem);line-height:1.05;margin-bottom:3rem}
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
.b-name{font-family:var(--D);font-weight:900;font-size:1.6rem;line-height:1.1;letter-spacing:.02em;color:#F0EDE6}
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
.prog-h{font-family:var(--D);font-weight:900;font-size:1.8rem;line-height:1.2;margin-bottom:1rem;color:#F0EDE6}
.prog-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ae-muted)}

/* Timeline */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:1.5rem;border-left:1px solid var(--ae-border);padding-left:2.5rem;position:relative}
.tl-item{position:relative;padding-bottom:1.5rem}
.tl-dot{position:absolute;left:-2.85rem;top:0.35rem;width:10px;height:10px;border-radius:50%;background:var(--ae-accent);border:3px solid var(--ae-bg);box-shadow:0 0 0 1px var(--ae-border)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ae-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-weight:900;font-size:1.6rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ae-muted);margin-top:.2rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ae-muted);margin-top:1rem;max-width:680px}

/* Footer */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ae-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.4rem;letter-spacing:.06em}

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

/* HERO ENTRANCE */
@keyframes fadeBlurIn{0%{opacity:0;filter:blur(12px);transform:translateY(20px)}100%{opacity:1;filter:blur(0);transform:translateY(0)}}
@keyframes orbFloat{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(25px,-15px) scale(1.05)}66%{transform:translate(-15px,10px) scale(0.95)}}
@keyframes cursorBlink{0%,100%{border-right-color:var(--ae-accent)}50%{border-right-color:transparent}}
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
.s-label{border-right:2px solid var(--ae-accent);padding-right:6px;animation:cursorBlink 1s step-end infinite;display:inline-block}

/* Link underline */
.pc-link{position:relative}
.pc-link::before{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:var(--ae-accent);transition:width .4s cubic-bezier(.16,1,.3,1)}
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
.ae-pill{display:inline-flex;align-items:center;gap:.5rem;border:1px solid rgba(240,237,230,0.15);color:var(--ink);padding:.6rem 1.2rem;border-radius:40px;font-family:var(--M);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;transition:all .3s ease;background:var(--ae-glass);margin-top:2.5rem;position:relative;z-index:10}
.ae-pill:hover{border-color:var(--ae-accent);color:var(--ae-accent);transform:translateY(-2px)}

/* HORIZONTAL GSAP GALLERY STYLING */
.gallery-h-sec {
  background: var(--ae-bg);
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  border-bottom: 1px solid var(--ae-border);
  padding: 0 !important;
}
.gallery-h-sticky {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem 0 2rem;
  box-sizing: border-box;
}
.gallery-card-item {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.gallery-card-item:hover {
  transform: translateY(-6px);
}
.gallery-card-frame {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: #0D0C09;
  border: 1px solid rgba(240, 237, 230, 0.12);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: clamp(380px, 56vh, 580px);
  width: auto;
  min-width: 360px;
  max-width: 72vw;
  box-sizing: border-box;
}
.gallery-card-img {
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.gallery-card-item:hover .gallery-card-img {
  transform: scale(1.02);
}
.gallery-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 9, 6, 0.4);
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  pointer-events: none;
}
.gallery-card-item:hover .gallery-card-overlay {
  opacity: 1;
}
.gallery-card-zoom-pill {
  font-family: var(--M);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #FFF;
  background: rgba(10, 9, 6, 0.9);
  border: 1px solid var(--ae-accent);
  padding: 0.45rem 1rem;
  border-radius: 30px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.8);
}
.gallery-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  font-family: var(--M);
}
.gallery-card-plate {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--ae-accent);
  font-weight: 700;
}
.gallery-card-desc {
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: var(--ae-muted);
}
.gallery-nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--ae-border);
  background: var(--ae-glass);
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: var(--M);
  font-size: 0.85rem;
  transition: all 0.2s ease;
}
.gallery-nav-btn:hover {
  border-color: var(--ae-accent);
  color: var(--ae-accent);
  background: rgba(212, 96, 10, 0.1);
  transform: scale(1.05);
}

@media(max-width: 1024px) {
  .gallery-card-frame {
    height: clamp(340px, 52vh, 480px);
    min-width: 320px;
    max-width: 80vw;
    padding: 0.85rem;
  }
}
@media(max-width: 768px) {
  .gallery-h-sec {
    height: auto !important;
    padding: 4rem 0 !important;
  }
  .gallery-h-sticky {
    height: auto !important;
    padding: 0 !important;
  }
  .gallery-card-frame {
    height: clamp(320px, 48vh, 420px);
    min-width: 270px;
    max-width: 85vw;
    padding: 0.75rem;
    border-radius: 14px;
  }
  .gallery-card-desc {
    display: none;
  }
}
`

import Navbar from '../components/Navbar';
import ComparisonSlider from '../components/ui/ComparisonSlider';

export default function ArtistEducator() {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/artist-educator" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Fine Art &amp; Education — H P Shivaraj · Art Director | Sivnco</title>
        <meta name="description" content="Synthesizing fine art practice and visual pedagogy. Artworks, journey, and student progress by H.P. Shivaraj." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      <div id="dot" />

      <Navbar />

      {/* HERO */}
      <div className="hero">
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(212,96,10,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(232,133,42,0.1) 0%, transparent 50%), var(--ae-bg)', animation: 'heroBgPulse 8s ease-in-out infinite' }} />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow rv">Personal Practice · Fine Art &amp; Pedagogy</div>
          <h1 className="hero-title rv" style={{ transitionDelay: '.1s' }}>
            Artist &amp;<br /><i>Art Educator</i>
          </h1>
          <p className="hero-sub rv" style={{ transitionDelay: '.25s' }}>
            I paint. I teach. Both inform each other. My fine art practice keeps the observation sharp — and that sharpness is what I pass on to my art students at Svarnart Academy, carrying forward my teaching foundation from Openhouse.
          </p>
          <div className="hero-meta rv" style={{ transitionDelay: '.4s' }}>
            {[
              ['Focus', 'Fine Art & Pedagogy'],
              ['Role', 'Artist / Art Teacher'],
              ['Academy', 'Svarnart Academy'],
              ['Location', 'Bengaluru, IN']
            ].map(([l, v]) => (
              <div key={l} className="meta"><label>{l}</label><span>{v}</span></div>
            ))}
          </div>
          <div className="rv" style={{ transitionDelay: '.55s' }}>
            <Link href="/artist-educator/commissions" className="ae-pill">
              For Art &amp; Design (Subject to availability based on schedule) &rarr;
            </Link>
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
              In teaching, I believe art is not a gift for the few but a discipline of looking. At Svarnart Academy, building on my teaching achievements at Openhouse, I guide children to look past symbolic formulas (like drawing a generic outline of an eye or tree) and learn to observe weight, value, perspective, and relationship. We train the mind to think visually, empowering children to render their world with confidence and original intention.
            </p>
          </div>
        </div>
      </section>

      {/* HORIZONTAL GSAP GALLERY SHOWCASE */}
      <section className="gallery-h-sec" id="gallery-h-sec">
        <div className="gallery-h-sticky">
          
          {/* Section Header */}
          <div className="c gallery-h-header" style={{ width: '100%', marginBottom: '1rem', flexShrink: 0 }}>
            <div className="s-label rv" style={{ marginBottom: '0.5rem' }}>02 — Selected Artworks</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 className="s-title rv" style={{ margin: 0, fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)', lineHeight: 1.05 }}>
                  A gallery of<br /><i>original works.</i>
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                <div style={{ fontFamily: 'var(--M)', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--ae-muted)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span>19 ORIGINAL CAVA PLATES</span>
                  <span style={{ color: 'var(--ae-accent)' }}>✦</span>
                  <span style={{ color: 'var(--ae-accent)' }}>SCROLL HORIZONTALLY</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button id="galleryScrollLeft" aria-label="Scroll Left" className="gallery-nav-btn">
                    ←
                  </button>
                  <button id="galleryScrollRight" aria-label="Scroll Right" className="gallery-nav-btn">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Track Wrap */}
          <div className="gallery-h-track-wrap" style={{ width: '100%', overflow: 'hidden', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <div className="gallery-h-track" id="galleryHTrack" style={{ display: 'flex', gap: '2.5vw', paddingLeft: '5vw', paddingRight: '15vw', width: 'max-content', alignItems: 'center' }}>
              {UNIQUE_PAINTINGS.map((art) => (
                <div
                  key={art.id}
                  className="gallery-card-item"
                  onClick={() => setSelectedArt(art.img)}
                >
                  <div className="gallery-card-frame">
                    <img loading="lazy" src={art.img} alt={`Painting ${art.title}`} className="gallery-card-img" />
                    <div className="gallery-card-overlay">
                      <span className="gallery-card-zoom-pill">Click to Inspect ⤢</span>
                    </div>
                  </div>
                  <div className="gallery-card-meta">
                    <div className="gallery-card-plate">PLATE #{art.plate} · {art.title}</div>
                    <div className="gallery-card-desc">{art.medium}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Progress Scrub Bar */}
          <div className="c" style={{ width: '100%', marginTop: '1rem', flexShrink: 0 }}>
            <div style={{ width: '100%', height: '3px', background: 'rgba(240,237,230,0.08)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
              <div id="galleryProgressBar" style={{ height: '100%', width: '0%', background: 'var(--ae-accent)', transition: 'width 0.1s ease' }} />
            </div>
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
              Most kids come in drawing what they think things look like — a house is a box with a triangle on top, a face is two dots and a curved line. The real shift happens when they start drawing what they actually see. Below is a typical 8-month arc from one of our students.
            </p>
          </div>
          <div className="rv2" style={{ marginBottom: '3rem' }}>
            <ComparisonSlider
              beforeImage="/images/student_art_before.jpg"
              afterImage="/images/student_art_after.jpg"
              beforeLabel="EARLY PHASE: SYMBOLIC (MONTH 1)"
              afterLabel="ADVANCED: SPATIAL & LIGHT (MONTH 8)"
              aspectRatio="16/9"
            />
          </div>

          <div className="progress-grid rv2">
            {/* Before Card */}
            <div className="prog-card">
              <div className="prog-img-slot">
                <span className="prog-tag">Early Phase — Month 1</span>
                <img loading="lazy" src="/images/student_art_before.jpg" alt="Early student drawing" />
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
                <img loading="lazy" src="/images/student_art_after.jpg" alt="Advanced student painting" />
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
                var m = text.match(/[\d.]+/);
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

          // DESKTOP CURSOR
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

          // 2. SYNCHRONIZED LENIS & GSAP SCROLLTRIGGER
          (function initLenisAndGSAP() {
            function boot() {
              if (typeof Lenis === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
                setTimeout(boot, 50);
                return;
              }

              gsap.registerPlugin(ScrollTrigger);

              var lenis = new Lenis({
                duration: 1.2,
                easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
                smooth: true,
                smoothTouch: false,
                touchMultiplier: 1.5
              });
              window.lenis = lenis;

              lenis.on('scroll', ScrollTrigger.update);

              gsap.ticker.add(function(time) {
                lenis.raf(time * 1000);
              });
              gsap.ticker.lagSmoothing(0, 0);

              // Gallery Horizontal Scroll
              var hSec = document.getElementById('gallery-h-sec');
              var hTrack = document.getElementById('galleryHTrack');
              var progressBar = document.getElementById('galleryProgressBar');

              if (hSec && hTrack) {
                if (window.innerWidth > 768) {
                  function getScrollDistance() {
                    return -(hTrack.scrollWidth - window.innerWidth + (window.innerWidth * 0.12));
                  }

                  gsap.to(hTrack, {
                    x: getScrollDistance,
                    ease: "none",
                    scrollTrigger: {
                      trigger: hSec,
                      start: "top top",
                      end: function() {
                        return "+=" + (hTrack.scrollWidth - window.innerWidth + 200);
                      },
                      pin: true,
                      scrub: 1,
                      invalidateOnRefresh: true,
                      anticipatePin: 1,
                      onUpdate: function(self) {
                        if (progressBar) {
                          progressBar.style.width = (self.progress * 100) + '%';
                        }
                      }
                    }
                  });
                } else {
                  // Mobile Touch Carousel
                  var wrap = document.querySelector('.gallery-h-track-wrap');
                  if (wrap) {
                    wrap.style.overflowX = 'auto';
                    wrap.style.scrollSnapType = 'x mandatory';
                    wrap.style.webkitOverflowScrolling = 'touch';
                    wrap.addEventListener('scroll', function() {
                      var maxScroll = wrap.scrollWidth - wrap.clientWidth;
                      if (maxScroll > 0 && progressBar) {
                        var p = (wrap.scrollLeft / maxScroll) * 100;
                        progressBar.style.width = p + '%';
                      }
                    }, { passive: true });
                  }
                }

                // Nav buttons
                var btnLeft = document.getElementById('galleryScrollLeft');
                var btnRight = document.getElementById('galleryScrollRight');

                if (btnLeft && btnRight) {
                  btnLeft.addEventListener('click', function() {
                    if (window.innerWidth > 768) {
                      var curX = gsap.getProperty(hTrack, "x") || 0;
                      var newX = Math.min(0, curX + 450);
                      gsap.to(hTrack, { x: newX, duration: 0.5, ease: "power2.out" });
                    } else {
                      var wrap = document.querySelector('.gallery-h-track-wrap');
                      if (wrap) wrap.scrollBy({ left: -300, behavior: 'smooth' });
                    }
                  });

                  btnRight.addEventListener('click', function() {
                    if (window.innerWidth > 768) {
                      var curX = gsap.getProperty(hTrack, "x") || 0;
                      var minX = -(hTrack.scrollWidth - window.innerWidth + 100);
                      var newX = Math.max(minX, curX - 450);
                      gsap.to(hTrack, { x: newX, duration: 0.5, ease: "power2.out" });
                    } else {
                      var wrap = document.querySelector('.gallery-h-track-wrap');
                      if (wrap) wrap.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                  });
                }
              }
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', boot);
            } else {
              boot();
            }
          })();
        })();
      `}</Script>

      {/* FULL-RES LIGHTBOX MODAL */}
      {selectedArt && (
        <div
          onClick={() => setSelectedArt(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(5, 4, 3, 0.95)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'zoom-out'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '90vh',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.9)'
            }}
          >
            <img
              src={selectedArt}
              alt="Enlarged Artwork Plate"
              style={{ width: '100%', height: '100%', maxHeight: '86vh', objectFit: 'contain', display: 'block' }}
            />
            <button
              onClick={() => setSelectedArt(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0,0,0,0.7)',
                color: '#FFF',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--M)',
                fontSize: '1rem'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

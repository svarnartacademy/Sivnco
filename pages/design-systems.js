import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'
import Navbar from '../components/Navbar'
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas'
import { getAudioEngine } from '../components/ui/TactileAudioEngine'

const METRICS = [
  { n: '3', l: 'Design Systems Built' },
  { n: '15+', l: 'SKU Variations Governed' },
  { n: '100%', l: 'Token Coverage' },
  { n: '3', l: 'Brand Systems' },
]

const SYSTEMS = [
  {
    id: 'jus-amazin',
    number: '01',
    label: 'Brand System — Commercial Client',
    title: 'Jus Amazin',
    subtitle: 'Complete Brand System',
    body: `A design system is the decision you make once so you never have to make it again under deadline pressure. For Jus Amazin — a D2C peanut butter brand scaling from 3 to 15+ SKUs — I built the full system from scratch: token layer, component layer, and governance rules.`,
    layers: [
      { title: 'Token Layer', items: ['Colour system: 6 primary + 12 semantic tokens mapped to retail and digital surfaces', 'Typography scale: 3-level hierarchy (display, body, label) with defined size ramps', 'Spacing grid: 8px base unit across all layout decisions'] },
      { title: 'Component Layer', items: ['Label template system: 15+ SKU variants from one master source', 'Social post templates: feed, story, and ad formats from a single component set', 'Email header system: 4 modular blocks that recompose across campaigns', 'POS display: shelf talker and standee components using shared tokens'] },
      { title: 'Governance', items: ['Visual consistency maintained across 15+ SKU variations without breaking the system', 'Handoff-ready: marketing team could apply system without design oversight', '176% revenue contribution attributable in part to consistent shelf-to-screen identity'] },
    ],
    accent: '#D4600A',
  },
  {
    id: 'svarnart',
    number: '02',
    label: 'Brand System — Co-Founded Institution',
    title: 'Svarnart Academy',
    subtitle: 'Visual Identity System',
    body: `Svarnart Academy needed an identity that could live across a PWA, printed admission forms, performance certificates, and social media — all designed and systematised by me as co-founder. The system had to honour both classical Indian roots and contemporary visual sensibility.`,
    layers: [
      { title: 'Brand Mark Construction', items: ['Custom wordmark built on a modular grid', 'Icon system derived from the letterform geometry', 'Clear space and minimum size rules documented for print and digital'] },
      { title: 'Colour & Type System', items: ['Primary palette: warm deep tones evoking classical arts heritage', 'Typography: two-typeface system — display for identity, body for readability', 'Each colour and type decision rationale documented for future designers'] },
      { title: 'Application System', items: ['Web: applied across the academy PWA (built in-house)', 'Print: admission forms, certificates, and event programmes', 'Social: recurring content templates derived from brand tokens'] },
    ],
    accent: '#8B6914',
  },
  {
    id: 'sivnco',
    number: '03',
    label: 'Brand System — Self Identity',
    title: 'Sivnco Studio',
    subtitle: 'Self-Brand System',
    body: `The site you are on right now is a design system. Sivnco Studio's identity — the Doto logotype, the warm-dark colour palette, the Poppins + Space Mono type pairing, the accent orange — is a system I designed and maintain. Every page on sivnco.in is a component that draws from shared tokens.`,
    layers: [
      { title: 'Identity Tokens', items: ['Colour: --accent (#D4600A), --bg (#0A0906), --ink (#F0EDE6) — consistent across every page', 'Type: Doto (display), Poppins (body), Space Mono (mono labels) — a three-role type system', 'Motion: scroll reveal timings, hover transition durations — all defined and reused'] },
      { title: 'Component System', items: ['Shared nav and footer components', 'Glass card system with hover glow state', 'Metric counter, timeline, and bento grid — reusable across case study pages', 'Custom cursor — consistent interaction signature across the entire site'] },
      { title: 'The Meta-Point', items: ['This portfolio is itself proof of design systems thinking', 'The system scales: each new case study page is a new component, not a new design', 'Maintainable by one person — which is exactly what a good system enables'] },
    ],
    accent: '#D4600A',
  },
]

const PROCESS = [
  { step: 'Step 1', title: 'Audit & Inventory', desc: 'Map every visual decision already made: colours, type, spacing, components in use. Understand what is consistent and what is arbitrary.' },
  { step: 'Step 2', title: 'Token Definition', desc: 'Extract design decisions from specific values into named tokens. A colour is not #D4600A — it is accent. A spacing is not 8px — it is base-unit.' },
  { step: 'Step 3', title: 'Component Architecture', desc: 'Build reusable components from tokens. Define their variants, states, and behaviours. Document what each component is for, and what it is not for.' },
  { step: 'Step 4', title: 'Governance & Handoff', desc: 'Write the rules for how the system grows. What gets added, what gets deprecated, who makes decisions. A system without governance is just a style guide that decays.' },
]

const PRESETS = [
  { id: 'jusamazin', name: "Jus Amazin", accent: '#D4600A', radius: 18, borderOpacity: 0.15, font: 'Instrument Sans' },
  { id: 'svarnart', name: 'Svarnart Academy', accent: '#C89B3C', radius: 32, borderOpacity: 0.22, font: 'Urbanist' },
  { id: 'sivnco', name: 'Sivnco Studio', accent: '#E8852A', radius: 40, borderOpacity: 0.12, font: 'Doto' },
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ds-bg:#0A0906;--ds-ink:#F0EDE6;--ds-muted:rgba(240,237,230,0.45);--ds-accent:#D4600A;--ds-accent-light:rgba(212,96,10,0.7);--ds-border:rgba(240,237,230,0.08);--ds-glass:rgba(240,237,230,0.03);--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Instrument Sans',sans-serif}
html.lenis{height:auto}
.lenis.lenis-smooth{scroll-behavior:auto!important}
.lenis.lenis-stopped{overflow:hidden}
body{background:var(--ds-bg);color:var(--ds-ink);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}
.c{max-width:1240px;margin:0 auto;padding:0 5vw}

/* HERO */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ds-border);position:relative;overflow:hidden}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ds-accent);margin-bottom:2rem;position:relative;z-index:2}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,12vw,11rem);line-height:1.05;position:relative;z-index:2;color:var(--ds-ink)}
.hero-title i{color:var(--ds-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.25rem);color:var(--ds-muted);max-width:580px;line-height:1.9;margin-top:2rem;position:relative;z-index:2}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ds-border);position:relative;z-index:2}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ds-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ds-ink)}

/* FLOATING FROSTED GLASS METRIC CAPSULES */
.metrics-stream{display:flex;flex-wrap:wrap;gap:1.4rem;justify-content:center;padding:4.5rem 0;position:relative;z-index:2}
.metric-capsule{flex:1 1 230px;max-width:280px;background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.12);border-radius:9999px;padding:2.2rem 2.4rem;text-align:center;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:0 10px 30px rgba(0,0,0,0.4);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),border-color 0.4s ease,box-shadow 0.4s ease}
.metric-capsule:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.5);box-shadow:0 20px 45px rgba(0,0,0,0.6),0 0 25px rgba(212,96,10,0.2)}
.m-n{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,5vw,5rem);color:var(--ds-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ds-muted);margin-top:.6rem}

/* SECTIONS */
section{padding:8rem 0;border-bottom:1px solid var(--ds-border);position:relative}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ds-accent);margin-bottom:1.5rem;display:inline-block}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(3rem,6vw,7rem);line-height:1.05;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ds-muted);font-style:normal;font-weight:300}
.body-text{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ds-muted);max-width:660px}

/* LIVE TOKEN PLAYGROUND */
.playground-box{background:rgba(18,17,14,0.7);border:1px solid rgba(240,237,230,0.14);border-radius:36px;padding:3.5rem;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:0 30px 70px rgba(0,0,0,0.7);display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;margin-top:3.5rem}
.token-controls{display:flex;flex-direction:column;gap:2rem}
.token-preset-pills{display:flex;gap:.8rem;flex-wrap:wrap}
.preset-pill{font-family:var(--M);font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;padding:.55rem 1.2rem;border-radius:999px;border:1px solid rgba(240,237,230,0.15);background:rgba(255,255,255,0.03);color:var(--ds-ink);cursor:pointer;transition:all .3s ease}
.preset-pill.active{background:rgba(212,96,10,0.2);border-color:#D4600A;color:#FFF;box-shadow:0 0 15px rgba(212,96,10,0.3)}
.slider-group{display:flex;flex-direction:column;gap:.6rem}
.slider-header{display:flex;justify-content:space-between;font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ds-muted)}
.token-range{width:100%;accent-color:#D4600A;cursor:pointer}
.color-swatches{display:flex;gap:1rem}
.color-swatch{width:32px;height:32px;border-radius:50%;cursor:pointer;border:2px solid transparent;transition:transform .2s ease,border-color .2s ease}
.color-swatch.active{border-color:#FFF;transform:scale(1.15)}

/* LIVE PREVIEW CARD */
.live-component-canvas{display:flex;flex-direction:column;gap:1.5rem;align-items:center;justify-content:center}
.preview-card{width:100%;max-width:440px;background:rgba(240,237,230,0.04);border:1px solid rgba(240,237,230,0.15);padding:2.5rem;backdrop-filter:blur(20px);box-shadow:0 20px 50px rgba(0,0,0,0.5);transition:all .3s cubic-bezier(0.16,1,0.3,1)}
.preview-badge{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem .85rem;border-radius:999px;font-family:var(--M);font-size:.55rem;letter-spacing:.15em;text-transform:uppercase;margin-bottom:1.5rem}
.preview-title{font-family:var(--D);font-size:1.8rem;font-weight:900;margin-bottom:.8rem;line-height:1.1}
.preview-desc{font-family:var(--S);font-size:.92rem;line-height:1.7;color:var(--ds-muted);margin-bottom:1.8rem}
.preview-cta{font-family:var(--M);font-size:.65rem;letter-spacing:.18em;text-transform:uppercase;padding:.75rem 1.6rem;border-radius:999px;border:none;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}

/* SYSTEM CARDS */
.sys-wrap{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:start;margin-top:4rem}
.sys-intro-num{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,8vw,8rem);color:rgba(212,96,10,0.14);line-height:1;margin-bottom:.5rem}
.sys-intro-label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ds-accent);margin-bottom:.8rem}
.sys-intro-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,4vw,4.5rem);line-height:1;color:var(--ds-ink);margin-bottom:.6rem}
.sys-intro-sub{font-family:var(--M);font-size:.62rem;letter-spacing:.15em;color:var(--ds-muted);margin-bottom:1.5rem}
.sys-intro-body{font-family:var(--S);font-size:1.05rem;line-height:1.85;color:var(--ds-muted)}
.sys-layers{display:flex;flex-direction:column;gap:1.8rem}
.layer-card{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.1);border-radius:28px;padding:2.2rem;backdrop-filter:blur(20px);transition:border-color .35s,background .35s,transform .35s}
.layer-card:hover{border-color:rgba(212,96,10,0.4);background:rgba(212,96,10,0.04);transform:translateY(-3px)}
.layer-title{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ds-accent);margin-bottom:1rem}
.layer-items{list-style:none;display:flex;flex-direction:column;gap:.65rem}
.layer-items li{font-family:var(--S);font-size:.95rem;line-height:1.7;color:var(--ds-muted);padding-left:1.2rem;position:relative}
.layer-items li::before{content:'—';position:absolute;left:0;color:rgba(212,96,10,0.6);font-family:var(--M)}

/* DEFINITION BLOCK */
.definition-block{background:rgba(212,96,10,0.05);border:1px solid rgba(212,96,10,0.2);border-left:4px solid var(--ds-accent);border-radius:0 28px 28px 0;padding:2.8rem 3.2rem;margin:4rem 0;max-width:840px;backdrop-filter:blur(20px)}
.definition-text{font-family:var(--S);font-style:italic;font-size:1.25rem;line-height:1.8;color:var(--ds-ink)}
.definition-attr{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ds-muted);margin-top:1.2rem}

/* PROCESS TIMELINE */
.process-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;margin-top:4rem}
.proc-card{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.1);border-radius:32px;padding:3rem;position:relative;overflow:hidden;backdrop-filter:blur(20px);transition:border-color .4s,transform .4s,box-shadow .4s}
.proc-card:hover{border-color:rgba(212,96,10,0.45);transform:translateY(-5px);box-shadow:0 24px 50px rgba(0,0,0,0.5)}
.proc-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(212,96,10,.12),transparent 70%);opacity:0;transition:.4s;pointer-events:none}
.proc-card:hover::before{opacity:1}
.proc-step{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--ds-accent);margin-bottom:.8rem}
.proc-title{font-family:var(--D);font-weight:900;font-size:1.8rem;color:var(--ds-ink);margin-bottom:1rem;line-height:1.1}
.proc-desc{font-family:var(--S);font-size:.95rem;line-height:1.8;color:var(--ds-muted)}

/* FOOTER */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ds-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.4rem;letter-spacing:.06em}

.rv{opacity:0;transform:translateY(28px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}
.hero .rv{opacity:1;transform:translateY(0)}

@media(max-width:1024px){
  .playground-box{grid-template-columns:1fr;gap:3rem;padding:2.5rem}
  .sys-wrap{grid-template-columns:1fr;gap:3rem}
  .process-grid{grid-template-columns:1fr}
}
@media(max-width:768px){
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(3rem,10vw,6.5rem)}
  .metrics-stream{gap:1rem}
  .definition-block{padding:1.8rem 2rem}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
}
`

export default function DesignSystems() {
  const [accent, setAccent] = useState('#D4600A')
  const [radius, setRadius] = useState(28)
  const [activePreset, setActivePreset] = useState('jusamazin')

  const applyPreset = (preset) => {
    setActivePreset(preset.id)
    setAccent(preset.accent)
    setRadius(preset.radius)
    getAudioEngine()?.playTabShift()
  }

  const handleSliderChange = (e) => {
    setRadius(parseInt(e.target.value))
    getAudioEngine()?.playTick(600 + parseInt(e.target.value) * 10)
  }

  return (
    <>
      <Head>
        <title>Design Systems — H P Shivaraj | Sivnco</title>
        <meta name="description" content="Design systems built and maintained by H P Shivaraj — token layers, component governance, FMCG packaging scale." />
      </Head>

      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* HERO WITH FLUID CANVAS */}
      <div className="hero">
        <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.2)" secondaryColor="rgba(200, 155, 60, 0.1)" />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow">CASE STUDY — 02 // DISCIPLINE: DESIGN SYSTEMS</div>
          <h1 className="hero-title">
            DESIGN<i>SYSTEMS</i>
          </h1>
          <p className="hero-sub">
            The decision made once so it never has to be debated under deadline pressure. How I built, scaled, and governed design systems across commercial FMCG, education, and studio identity.
          </p>
          <div className="hero-meta">
            <div className="meta">
              <label>SYSTEMS BUILT</label>
              <span>3 Systems</span>
            </div>
            <div className="meta">
              <label>GOVERNANCE</label>
              <span>15+ SKU Variations</span>
            </div>
            <div className="meta">
              <label>ROLE</label>
              <span>Systems Architect</span>
            </div>
            <div className="meta">
              <label>COVERAGE</label>
              <span>Tokens to Packaging</span>
            </div>
          </div>
        </div>
      </div>

      {/* METRICS STREAM CAPSULES */}
      <div className="c">
        <div className="metrics-stream">
          {METRICS.map((m) => (
            <div key={m.l} className="metric-capsule">
              <div className="m-n">{m.n}</div>
              <div className="m-l">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LIVE DESIGN TOKEN PLAYGROUND (INTERACTIVE UX) */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — INTERACTIVE STUDIO</div>
          <h2 className="s-title rv">Live Design Token<br /><i>Playground.</i></h2>
          <p className="body-text rv">
            Test how atomic design tokens govern surfaces dynamically. Adjust component radius, brand chromatic hues, or choose a system preset to watch the component adapt in real-time.
          </p>

          <div className="playground-box rv2">
            <div className="token-controls">
              <div>
                <span className="s-label" style={{ marginBottom: '0.8rem', display: 'block' }}>BRAND SYSTEM PRESETS</span>
                <div className="token-preset-pills">
                  {PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => applyPreset(p)}
                      className={`preset-pill ${activePreset === p.id ? 'active' : ''}`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="slider-group">
                <div className="slider-header">
                  <span>BORDER RADIUS TOKEN</span>
                  <span style={{ color: accent, fontWeight: 'bold' }}>{radius}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="48"
                  value={radius}
                  onChange={handleSliderChange}
                  className="token-range"
                />
              </div>

              <div className="slider-group">
                <div className="slider-header">
                  <span>CHROMATIC ACCENT TOKEN</span>
                  <span style={{ color: accent, fontWeight: 'bold' }}>{accent}</span>
                </div>
                <div className="color-swatches">
                  {['#D4600A', '#C89B3C', '#E8852A', '#4F46E5', '#10B981'].map((c) => (
                    <div
                      key={c}
                      onClick={() => {
                        setAccent(c)
                        getAudioEngine()?.playTick(750)
                      }}
                      className={`color-swatch ${accent === c ? 'active' : ''}`}
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="live-component-canvas">
              <div
                className="preview-card"
                style={{
                  borderRadius: `${radius}px`,
                  borderColor: `${accent}40`,
                  boxShadow: `0 20px 45px rgba(0,0,0,0.6), 0 0 30px ${accent}25`
                }}
              >
                <div
                  className="preview-badge"
                  style={{
                    background: `${accent}20`,
                    borderColor: `${accent}50`,
                    border: '1px solid',
                    color: '#FFF'
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />
                  Live Token Output
                </div>
                <h4 className="preview-title">Adaptive Component</h4>
                <p className="preview-desc">
                  This component dynamically reflects live design tokens. Spacing, radius curvature, and chromatic highlights remain unified across digital and print surfaces.
                </p>
                <button
                  className="preview-cta"
                  style={{
                    background: accent,
                    color: '#FFF',
                    boxShadow: `0 8px 20px ${accent}45`
                  }}
                  onClick={() => getAudioEngine()?.playTick(900)}
                >
                  Inspect Component Spec
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section style={{ paddingBottom: '4rem' }}>
        <div className="c">
          <div className="s-label rv">02 — The Philosophy</div>
          <h2 className="s-title rv">In my<br /><i>practice.</i></h2>
          <div className="definition-block rv2">
            <p className="definition-text">
              &ldquo;A design system is the decision you make once so you never have to make it again under deadline pressure. It&apos;s not a collection of components — it&apos;s a set of principles made executable.&rdquo;
            </p>
            <p className="definition-attr">— H P Shivaraj, Design & Communications Manager · Jus Amazin</p>
          </div>
          <p className="body-text rv2" style={{ marginTop: '2rem' }}>
            Most designers maintain visual consistency through taste and habit. A design system makes consistency mechanical — so that anyone who picks it up maintains quality, even under deadline pressure, even across 15 SKU variations, even when you&apos;re not in the room.
          </p>
        </div>
      </section>

      {/* THREE SYSTEMS */}
      {SYSTEMS.map((sys) => (
        <section key={sys.id} id={sys.id}>
          <div className="c">
            <div className="sys-wrap">
              <div>
                <div className="sys-intro-num rv">{sys.number}</div>
                <div className="sys-intro-label rv">{sys.label}</div>
                <h2 className="sys-intro-title rv">{sys.title}</h2>
                <div className="sys-intro-sub rv">{sys.subtitle}</div>
                <p className="sys-intro-body rv2">{sys.body}</p>
              </div>
              <div className="sys-layers rv2">
                {sys.layers.map((layer) => (
                  <div key={layer.title} className="layer-card">
                    <div className="layer-title">{layer.title}</div>
                    <ul className="layer-items">
                      {layer.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PROCESS */}
      <section>
        <div className="c">
          <div className="s-label rv">03 — How I Build Systems</div>
          <h2 className="s-title rv">The process,<br /><i>every time.</i></h2>
          <div className="process-grid rv2">
            {PROCESS.map((step) => (
              <div key={step.step} className="proc-card">
                <div className="proc-step">{step.step}</div>
                <h3 className="proc-title">{step.title}</h3>
                <p className="proc-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="c">
        <div className="pfooter rv">
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--ds-accent)' }}>.</span></div></div>
          <StartProjectButton />
        </div>
      </div>

      <Script id="ds-init" strategy="afterInteractive">{`
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

          // Counter animation for metrics
          var numObs = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(!e.isIntersecting) return;
              numObs.unobserve(e.target);
              var el = e.target;
              var text = el.textContent.trim();
              var m = text.match(/[\\d.]+/);
              if(!m) return;
              var target = parseFloat(m[0]);
              var suffix = text.replace(m[0],'');
              var isD = text.indexOf('.')!==-1;
              var start = Date.now(); var dur = 1600;
              (function tick(){
                var p = Math.min(1,(Date.now()-start)/dur);
                p = 1-Math.pow(1-p,3);
                el.textContent = (isD?(target*p).toFixed(1):Math.round(target*p))+suffix;
                if(p<1) requestAnimationFrame(tick);
              })();
            });
          },{threshold:0.3});
          document.querySelectorAll('.m-n').forEach(function(el){numObs.observe(el)});
        })();
      `}</Script>
    </>
  )
}

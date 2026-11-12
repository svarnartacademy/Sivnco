import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import FluidAmbientCanvas from '../../components/ui/FluidAmbientCanvas'
import { getAudioEngine } from '../../components/ui/TactileAudioEngine'

const METRICS = [
  { n: '10×', l: 'Concept Exploration Breadth' },
  { n: '100%', l: 'Human Prepress Verification' },
  { n: '2022', l: 'Applied AI Adoption' },
  { n: '4+', l: 'Custom Studio Agents Deployed' },
]

const PIPELINE_STAGES = [
  {
    step: '01',
    name: 'Brief Ingestion',
    tool: 'Custom LLM Agent',
    timeTraditional: 'Days of alignment',
    timeAI: 'Same-day synthesis',
    savings: 'Structured Brief',
    details: 'Pulls unstructured Slack notes, stakeholder audio transcripts, and retail guidelines into an explicit typographic and structural brief with key regulatory constraints.'
  },
  {
    step: '02',
    name: 'Conceptual Synthesis',
    tool: 'Midjourney / Flux / Veo',
    timeTraditional: '2–3 days manual comps',
    timeAI: 'Rapid visual iteration',
    savings: 'Direction Alignment',
    details: 'Generates diverse photographic lighting directions, visual textures, and dynamic motion prompts to align leadership on atmosphere before vector drafting begins.'
  },
  {
    step: '03',
    name: 'Vector Dieline Grid',
    tool: 'Illustrator & Scripted Rigs',
    timeTraditional: 'Repetitive manual setup',
    timeAI: 'Parametric dieline setup',
    savings: 'Precision Geometry',
    details: 'Converts packaging layout variables into exact Illustrator dieline layers with automated barcode positioning and nutrition table alignment based on FSSAI guidelines.'
  },
  {
    step: '04',
    name: 'Human Judgment & Pre-Flight',
    tool: 'Manual Prepress Verification',
    timeTraditional: 'Non-negotiable manual audit',
    timeAI: 'Critical human governance',
    savings: '100% Print Compliance',
    details: 'Strict human verification: checks CMYK ink separation tolerances, font point minimums for FSSAI compliance (>= 1.5mm), barcode scan verification, and substrate calibration.'
  }
]

const CONCRETE_EXAMPLE = {
  title: 'Concrete Case Study: From Generative Prompt to Retail Shelf',
  subtitle: 'Lil\'Stars Kids Snack Packaging — How human judgment bridges raw AI output into commercial reality.',
  steps: [
    {
      num: '01',
      phase: 'Client Brief & Input Constraints',
      desc: 'The brief called for Lil\'Stars kids nut-butter pouches: playful energy, clear allergen callouts, zero refined sugar, and high shelf pop in modern retail aisles. Key constraint: Must comply with FSSAI front-of-pack labeling standards and fit standard rotogravure cylinder repeats.',
      tags: ['Retail Brief', 'FSSAI Standards', 'Allergen Cues'],
      visual: '/images/jusamazin/web/Lilstars.webp',
      visualCaption: 'Initial conceptual moodboard and product positioning constraints.'
    },
    {
      num: '02',
      phase: 'Raw Generative Synthesis (AI Draft)',
      desc: 'Prompted generative image and video models (Midjourney, Google Veo) to explore dynamic splash physics, playful character dynamics, and fruit-nut collision textures. While visually striking, raw AI output produced anatomically warped characters, illegible nutrition panels, and non-printable fantasy colors.',
      tags: ['Midjourney', 'Google Veo', 'Exploratory Drafts'],
      visual: '/images/jusamazin/lilstars/pancake_berry_blast.png',
      visualCaption: 'Raw generative explorations for dynamic splash physics and energy.'
    },
    {
      num: '03',
      phase: 'Human Judgment & Prepress Corrections',
      desc: 'What I personally audited and corrected: 1) Redrew character mascot vectors by hand to fix anatomy and posture; 2) Stripped hallucinated nutrition text and typeset genuine FSSAI-compliant tables with >= 1.5mm font sizes; 3) Replaced unprintable RGB gradients with calibrated CMYK + spot Pantone inks; 4) Aligned bleed margins (3mm) and barcode quiet zones for cylinder engraving.',
      tags: ['Vector Redraw', 'Spot Pantone Calibration', 'FSSAI Compliance', '3mm Bleed'],
      visual: '/images/jusamazin/lilstars/pancake_choco_delight.png',
      visualCaption: 'Technical corrections: vector linework, spot ink separations, and dieline alignment.'
    },
    {
      num: '04',
      phase: 'Final Production Asset on Shelf',
      desc: 'Final press-ready artwork files delivered to converters for rotogravure cylinder engraving. Produced 10,000+ commercial units shipped to retail shelves across India, achieving zero printing defects and complete regulatory clearance.',
      tags: ['Rotogravure Print', 'Retail Distribution', 'Zero Defects'],
      visual: '/images/jusamazin/lilstars/pb_jaggery_jar.png',
      visualCaption: 'Approved final packaging asset manufactured and live on retail shelves.'
    }
  ]
}

const TIMELINE = [
  {
    date: '2026 — Present',
    title: 'Custom AI Assistant Integration',
    org: 'Jus Amazin · Svarnart · Sivnco',
    desc: 'Built custom AI studio assistants (including the Maya AI assistant on this portfolio) that answer design questions, pull factual context from verified archives, and automate administrative briefing overhead so craft remains front and center.'
  },
  {
    date: '2025',
    title: 'Codebase & Web Integration',
    org: 'Web Systems Development',
    desc: 'Brought generative tooling into production front-end codebases. Automated test scaffolds, accessibility checks, and interactive component prototypes, validating responsive behavior across screen sizes.'
  },
  {
    date: '2023 — Present',
    title: 'Office Adaptations & Prepress Concepting',
    org: 'Jus Amazin (Full-time)',
    desc: 'Used AI for conceptual storyboarding, video motion drafting, and early packaging moodboards. Exploring 20+ visual directions in hours allowed cross-functional alignment before opening Adobe Illustrator for high-precision vectorization.'
  },
  {
    date: 'College Days (2022)',
    title: 'AI Workshops & Studio Experiments',
    org: 'CAVA Mysore / Art Communities',
    desc: 'During visual arts training at CAVA, experimented with early diffusion and language models, hosting hands-on workshops exploring how algorithmic tools could augment traditional printmaking and composition.'
  }
]

const AI_PILLARS = [
  {
    title: '01 — Generative Concept Acceleration',
    desc: 'Using AI image and video models to rapidly test 30+ visual textures, color palettes, and lighting setups before committing to vector execution. Teams align early on concrete visuals rather than vague verbal briefs.'
  },
  {
    title: '02 — Strict Human Governance & Prepress',
    desc: 'AI cannot replace prepress physics. Every commercial asset undergoes rigorous human audit: verifying FSSAI typography minimums, Pantone spot ink separations, barcode readability, and converter substrate tolerances.'
  },
  {
    title: '03 — Custom Studio Agents',
    desc: 'Built specialized agents for Sivnco and Svarnart that summarize client inputs, query internal design documentation, and draft initial specifications, protecting valuable creative focus for core design work.'
  }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ai-bg:#0A0906;--ink:#F0EDE6;--ai-muted:rgba(240,237,230,0.65);--ai-accent:#D4600A;--ai-border:rgba(240,237,230,0.12);--ai-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Urbanist',sans-serif}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-stopped { overflow: hidden; }
body{background:var(--ai-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}
.c{max-width:1240px;margin:0 auto;padding:0 5vw}

/* HERO */
.hero{min-height:90vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ai-border);position:relative;overflow:hidden}
.eyebrow{font-family:var(--M);font-size:.68rem;letter-spacing:.25em;color:var(--ai-accent);margin-bottom:2rem;position:relative;z-index:2;font-weight:700}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,11vw,9.5rem);line-height:1.05;position:relative;z-index:2}
.hero-title i{color:var(--ai-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1.05rem,1.6vw,1.35rem);color:var(--ai-muted);max-width:640px;line-height:1.8;margin-top:2rem;position:relative;z-index:2}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ai-border);position:relative;z-index:2}
.meta label{font-family:var(--M);font-size:.65rem;letter-spacing:.2em;color:var(--ai-accent);display:block;margin-bottom:.4rem;font-weight:700}
.meta span{font-family:var(--S);font-size:1.05rem;color:var(--ink);font-weight:500}

/* FLOATING GLASS METRICS CAPSULES */
.metrics-stream{display:flex;flex-wrap:wrap;gap:1.4rem;justify-content:center;padding:4.5rem 0;position:relative;z-index:2}
.metric-capsule{flex:1 1 230px;max-width:280px;background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.14);border-radius:28px;padding:2.2rem 2.4rem;text-align:center;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:0 10px 30px rgba(0,0,0,0.4);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),border-color 0.4s ease,box-shadow 0.4s ease}
.metric-capsule:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.5);box-shadow:0 20px 45px rgba(0,0,0,0.6),0 0 25px rgba(212,96,10,0.2)}
.m-n{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,5vw,4.5rem);color:var(--ai-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.65rem;letter-spacing:.16em;color:var(--ai-muted);margin-top:.8rem;text-transform:uppercase;font-weight:600}

/* SECTIONS */
section{padding:7rem 0;border-bottom:1px solid var(--ai-border);position:relative}
.s-label{font-family:var(--M);font-size:.68rem;letter-spacing:.22em;color:var(--ai-accent);margin-bottom:1.5rem;display:inline-block;font-weight:700}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(2.5rem,5.5vw,5.5rem);line-height:1.1;margin-bottom:2.5rem}
.s-title i{font-family:var(--S);color:var(--ai-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.15rem;line-height:1.9;color:var(--ai-muted);max-width:720px}

/* CONCRETE CASE STUDY SECTION */
.case-study-box{background:rgba(240,237,230,0.02);border:1px solid rgba(240,237,230,0.14);border-radius:32px;padding:3.5rem;margin-top:3.5rem;backdrop-filter:blur(24px)}
.step-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2.5rem;margin-top:3rem}
.step-card{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.1);border-radius:24px;padding:2.2rem;display:flex;flex-direction:column;gap:1.5rem;transition:border-color .3s ease, transform .3s ease}
.step-card:hover{border-color:rgba(212,96,10,0.5);transform:translateY(-4px)}
.step-header{display:flex;align-items:center;gap:1.2rem}
.step-num{font-family:var(--D);font-weight:900;font-size:2rem;color:var(--ai-accent)}
.step-phase{font-family:var(--S);font-size:1.25rem;font-weight:700;color:#F0EDE6}
.step-img-wrap{width:100%;height:220px;border-radius:16px;overflow:hidden;background:#151412;border:1px solid rgba(240,237,230,0.08);position:relative}
.step-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}
.step-card:hover .step-img-wrap img{transform:scale(1.04)}
.step-caption{font-family:var(--M);font-size:.65rem;color:var(--ai-muted);letter-spacing:.05em;margin-top:.4rem;line-height:1.5}
.step-text{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ai-muted)}
.step-tags{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:auto}
.step-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.1em;padding:.3rem .8rem;border-radius:999px;background:rgba(212,96,10,0.12);color:var(--ai-accent);border:1px solid rgba(212,96,10,0.3);text-transform:uppercase}

/* INTERACTIVE PIPELINE SIMULATOR */
.pipeline-box{background:rgba(18,17,14,0.7);border:1px solid rgba(240,237,230,0.14);border-radius:36px;padding:3.5rem;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:0 30px 70px rgba(0,0,0,0.7);margin-top:3.5rem}
.pipeline-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-bottom:3rem}
.pipe-step-card{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.1);border-radius:24px;padding:1.8rem;cursor:pointer;transition:all .3s cubic-bezier(0.16,1,0.3,1);text-align:left}
.pipe-step-card:hover{transform:translateY(-4px);border-color:rgba(212,96,10,0.4)}
.pipe-step-card.active{background:rgba(212,96,10,0.15);border-color:#D4600A;box-shadow:0 0 25px rgba(212,96,10,0.25)}
.pipe-num{font-family:var(--D);font-size:1.8rem;color:var(--ai-accent);font-weight:900;margin-bottom:.4rem}
.pipe-title{font-family:var(--S);font-size:1.15rem;font-weight:700;color:#FFF;margin-bottom:.3rem}
.pipe-tool{font-family:var(--M);font-size:.6rem;letter-spacing:.15em;color:var(--ai-muted);text-transform:uppercase}

.pipeline-stage-detail{background:rgba(240,237,230,0.02);border:1px solid rgba(240,237,230,0.1);border-radius:28px;padding:2.5rem 3rem;display:grid;grid-template-columns:1.5fr 1fr;gap:3rem;align-items:center}
.stage-desc{font-family:var(--S);font-size:1.15rem;line-height:1.85;color:rgba(240,237,230,0.9)}
.stage-stats{display:flex;flex-direction:column;gap:1.2rem;border-left:1px solid rgba(240,237,230,0.12);padding-left:2.5rem}
.stat-row{display:flex;justify-content:space-between;align-items:center}
.stat-label{font-family:var(--M);font-size:.65rem;letter-spacing:.15em;color:var(--ai-muted);text-transform:uppercase}
.stat-val{font-family:var(--S);font-size:1.1rem;color:#FFF;font-weight:600}
.stat-savings{color:var(--ai-accent);font-weight:800;font-size:1.3rem;font-family:var(--S)}

/* ASYMMETRIC PILLARS */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem}
.pillar{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.1);border-radius:32px;padding:3rem 2.5rem;backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.pillar:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.45);box-shadow:0 24px 50px rgba(0,0,0,0.5)}
.pil-h{font-family:var(--M);font-size:.7rem;letter-spacing:.2em;color:var(--ai-accent);margin-bottom:1.2rem;font-weight:700}
.pil-b{font-family:var(--S);font-size:1.05rem;line-height:1.85;color:var(--ai-muted)}

/* TIMELINE STREAM */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:2rem}
.tl-item{position:relative;background:rgba(240,237,230,0.025);border:1px solid rgba(240,237,230,0.1);border-radius:28px;padding:2.5rem 3rem;backdrop-filter:blur(20px);transition:transform .3s ease, border-color .3s ease}
.tl-item:hover{transform:translateX(8px);border-color:rgba(212,96,10,0.35)}
.tl-date{font-family:var(--M);font-size:.68rem;letter-spacing:.2em;color:var(--ai-accent);margin-bottom:.4rem;font-weight:700}
.tl-title{font-family:var(--D);font-weight:900;font-size:1.8rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.65rem;letter-spacing:.15em;color:var(--ai-muted);margin-top:.3rem}
.tl-desc{font-family:var(--S);font-size:1.08rem;line-height:1.8;color:var(--ai-muted);margin-top:1rem;max-width:740px}

/* FOOTER */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ai-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.4rem;letter-spacing:.06em}

.rv{opacity:0;transform:translateY(28px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}

@media(max-width:1024px){
  .step-grid{grid-template-columns:1fr}
  .pipeline-steps{grid-template-columns:repeat(2,1fr)}
  .pipeline-stage-detail{grid-template-columns:1fr;gap:2rem}
  .stage-stats{border-left:none;border-top:1px solid rgba(240,237,230,0.12);padding-left:0;padding-top:1.5rem}
  .pillars{grid-template-columns:1fr}
}
@media(max-width:768px){
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(2.5rem,10vw,6rem)}
  .pipeline-steps{grid-template-columns:1fr}
  .metrics-stream{gap:1rem}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
  .case-study-box{padding:2rem 1.5rem}
}
@media(max-width:480px){
  .hero-title{font-size:clamp(2.1rem,11vw,4.2rem)}
  .s-title{font-size:clamp(1.8rem,8vw,3.2rem)}
  .metric-capsule{flex:1 1 100%;max-width:none;padding:1.5rem 1.2rem;border-radius:24px}
  .pipeline-stage-detail{padding:1.5rem 1.2rem;border-radius:20px}
}
`

export default function AIWorkflow() {
  const [activeStage, setActiveStage] = useState(0)

  const handleStageSelect = (idx) => {
    setActiveStage(idx)
    getAudioEngine()?.playTabShift()
  }

  const current = PIPELINE_STAGES[activeStage]

  return (
    <>
      <Head><meta name="robots" content="noindex,follow"/>
        <title>AI Workflow &amp; Studio Tooling — H P Shivaraj | Sivnco</title>
        <meta name="description" content="AI tools integrated into commercial packaging pipelines, generative briefs, and autonomous studio agents with strict human prepress governance." />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Navbar />

      {/* HERO WITH FLUID CANVAS */}
      <div className="hero">
        <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.2)" secondaryColor="rgba(140, 80, 220, 0.08)" />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="br-label acid mb-3">■ 05 // AI WORKFLOW &amp; PRODUCTION PREPRESS</div>
          <h1 className="hero-title">
            AI<span className="accent">WORKFLOW.</span>
          </h1>
          <p className="hero-sub">
            Moving beyond novelty prompts into disciplined studio workflows. How I use custom AI agents, automated moodboarding, and strict human prepress verification to test more ideas without compromising print production integrity.
          </p>
          <div className="hero-meta">
            <div className="meta">
              <label>PRACTICE ERA</label>
              <span>2022 — Present</span>
            </div>
            <div className="meta">
              <label>CORE PRINCIPLE</label>
              <span>Human-in-the-Loop Prepress</span>
            </div>
            <div className="meta">
              <label>STUDIO AGENTS</label>
              <span>4+ Custom Bots</span>
            </div>
            <div className="meta">
              <label>CORE TOOLING</label>
              <span>LLMs · Flux · Veo · Illustrator Prepress</span>
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

      {/* PHILOSOPHY */}
      <section>
        <div className="c">
          <div className="s-label rv">01 — The Approach</div>
          <h2 className="s-title rv">AI as leverage,<br /><i>human craft as governor.</i></h2>
          <p className="body rv">
            I do not use AI to generate final logos or print-ready packaging artwork in one shot. Generative models cannot understand rotogravure cylinder tolerances, FSSAI regulatory type scales, or the tactile physics of a laminate pouch. I use AI to automate early exploration and administrative friction: synthesizing unstructured client transcripts into actionable creative briefs, generating 30 visual mood directions in an afternoon, and building test scaffolds so my energy remains focused on typographic hierarchy, color calibration, and prepress accuracy.
          </p>
        </div>
      </section>

      {/* CONCRETE 4-STEP CASE STUDY: FROM PROMPT TO SHELF */}
      <section style={{ background: 'rgba(212, 96, 10, 0.03)' }}>
        <div className="c">
          <div className="s-label rv">02 — CONCRETE PRODUCTION CASE STUDY</div>
          <h2 className="s-title rv">From Generative Prompt<br /><i>to Retail Shelf.</i></h2>
          <p className="body rv">
            A real-world walkthrough of the Lil&apos;Stars kids nutrition line: demonstrating how a brief becomes a generative draft, how human design judgment audits the output, and how clean vector files reach the physical printing press.
          </p>

          <div className="case-study-box rv2">
            <div style={{ borderBottom: '1px solid rgba(240,237,230,0.1)', paddingBottom: '1.5rem', marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--D)', fontSize: '1.8rem', fontWeight: 900, color: '#F0EDE6' }}>{CONCRETE_EXAMPLE.title}</h3>
              <p style={{ fontFamily: 'var(--S)', fontSize: '1.1rem', color: 'var(--ai-muted)', marginTop: '.5rem' }}>{CONCRETE_EXAMPLE.subtitle}</p>
            </div>

            <div className="step-grid">
              {CONCRETE_EXAMPLE.steps.map((s) => (
                <div key={s.num} className="step-card">
                  <div className="step-header">
                    <span className="step-num">{s.num}</span>
                    <span className="step-phase">{s.phase}</span>
                  </div>
                  <div className="step-img-wrap">
                    <img src={s.visual} alt={s.phase} />
                  </div>
                  <div className="step-caption">{s.visualCaption}</div>
                  <p className="step-text">{s.desc}</p>
                  <div className="step-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="step-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(240,237,230,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ fontFamily: 'var(--S)', fontSize: '1.05rem', color: 'var(--ai-muted)' }}>
                Want to explore the motion prompts and AI experiments?
              </span>
              <Link href="/visual-diary?discipline=Motion,%203D%20&%20AI" style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', fontFamily: 'var(--M)', fontSize: '.75rem', letterSpacing: '.12em', color: 'var(--ai-accent)', textTransform: 'uppercase', fontWeight: 700, border: '1px solid rgba(212,96,10,0.4)', padding: '.7rem 1.4rem', borderRadius: '999px' }}>
                View AI &amp; Motion Diary &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE STAGES OVERVIEW */}
      <section>
        <div className="c">
          <div className="s-label rv">03 — PRODUCTION PIPELINE ARCHITECTURE</div>
          <h2 className="s-title rv">Accelerated Studio<br /><i>Workflow.</i></h2>
          <p className="body rv">
            Select a production stage to inspect how AI tools and structured scripts support each phase of the commercial packaging lifecycle.
          </p>

          <div className="pipeline-box rv2">
            <div className="pipeline-steps">
              {PIPELINE_STAGES.map((s, idx) => (
                <div
                  key={s.step}
                  className={`pipe-step-card ${activeStage === idx ? 'active' : ''}`}
                  onClick={() => handleStageSelect(idx)}
                >
                  <div className="pipe-num">{s.step}</div>
                  <div className="pipe-title">{s.name}</div>
                  <div className="pipe-tool">{s.tool}</div>
                </div>
              ))}
            </div>

            <div className="pipeline-stage-detail">
              <div className="stage-desc">
                <p>{current.details}</p>
              </div>
              <div className="stage-stats">
                <div className="stat-row">
                  <span className="stat-label">Traditional Workflow:</span>
                  <span className="stat-val">{current.timeTraditional}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Augmented Pipeline:</span>
                  <span className="stat-val">{current.timeAI}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Workflow Impact:</span>
                  <span className="stat-val stat-savings">{current.savings}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC PILLARS */}
      <section>
        <div className="c">
          <div className="s-label rv">04 — Core Pillars</div>
          <h2 className="s-title rv">Three rules for AI<br /><i>in my studio.</i></h2>
          <div className="pillars rv2">
            {AI_PILLARS.map((p) => (
              <div key={p.title} className="pillar">
                <div className="pil-h">{p.title}</div>
                <div className="pil-b">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE STREAM */}
      <section>
        <div className="c">
          <div className="s-label rv">05 — Evolution</div>
          <h2 className="s-title rv">Four years of<br /><i>practical iteration.</i></h2>
          <div className="timeline rv2">
            {TIMELINE.map((item, index) => (
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
      <Footer />

      <Script id="ai-init" strategy="afterInteractive">{`
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

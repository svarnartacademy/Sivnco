import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import StartProjectButton from '@/components/demo'
import Navbar from '../components/Navbar'
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas'
import { getAudioEngine } from '../components/ui/TactileAudioEngine'

const METRICS = [
  { n: '90%', l: 'Briefing Phase Speedup' },
  { n: '2.5x', l: 'Creative Efficiency' },
  { n: '2022', l: 'AI Journey Began' },
  { n: '4+', l: 'Custom Agents Built' },
]

const PIPELINE_STAGES = [
  {
    step: '01',
    name: 'Brief Ingestion',
    tool: 'Custom LLM Agent',
    timeTraditional: '6 Hours',
    timeAI: '12 Mins',
    savings: '95% Speedup',
    details: 'Pulls unstructured Slack notes, PDF meeting transcripts, and retail guidelines into an explicit typographic and structural brief.'
  },
  {
    step: '02',
    name: 'Moodboard Synthesis',
    tool: 'Midjourney / Flux',
    timeTraditional: '16 Hours',
    timeAI: '45 Mins',
    savings: '88% Speedup',
    details: 'Generates 30+ photographic light directions and packaging concepts to align leadership before vector work begins.'
  },
  {
    step: '03',
    name: 'Vector Dieline Grid',
    tool: 'Scripted Scripts & Auto-Rig',
    timeTraditional: '12 Hours',
    timeAI: '1.5 Hours',
    savings: '82% Speedup',
    details: 'Converts packaging layout variables into Illustrator dieline layers with automated barcode positioning and nutrition table alignment.'
  },
  {
    step: '04',
    name: 'Production Pre-Flight',
    tool: 'OpenAI Omni-Moderator',
    timeTraditional: '8 Hours',
    timeAI: '20 Mins',
    savings: '92% Speedup',
    details: 'Checks CMYK ink separation tolerances, font point minimums for FSSAI compliance, and asset contrast accessibility.'
  }
]

const TIMELINE = [
  {
    date: '2026 — Present',
    title: 'Custom AI Assistant Integration',
    org: 'Jus Amazin · Svarnart · Sivnco',
    desc: 'Built custom AI agents (like the "Ask Shiv\'s AI" widget on this portfolio) that can handle customer queries, answer design questions, and pull from a knowledge base — things that used to eat up time I should have spent creating.'
  },
  {
    date: '2025',
    title: 'Codebase & Web Integration',
    org: 'Web Systems Development',
    desc: 'Took the AI tools off the mood board and put them into actual production pipelines. Automated parts of the code generation, testing, and layout process — which sounds less exciting than it is, but it\'s what separates a working system from a prototype.'
  },
  {
    date: '2023 — Present',
    title: 'Office Adaptations & Assets Optimization',
    org: 'Jus Amazin (Full-time)',
    desc: 'Used AI for voice work, video editing, and early concept generation. The biggest win was using generative tools to build rough visual references and packaging mocks before opening Illustrator — it cut briefing time from days to a few hours, and it meant the team was aligning on a direction, not still debating one.'
  },
  {
    date: 'College Days (2022)',
    title: 'AI Workshops & Evangelism',
    org: 'Art & Tech Communities',
    desc: 'Back in college when generative AI was just becoming something people could actually use, I was already running workshops — showing other students what these tools could do for art and design work. It was early, a bit experimental, but that\'s how I got comfortable with the space.'
  }
]

const AI_PILLARS = [
  {
    title: '01 — Voice & Video Editing',
    desc: 'Using AI audio tools to clean up voice work and get the pacing right, rather than spending hours in post. For product launches and campaigns, this alone cuts the post-production timeline significantly.'
  },
  {
    title: '02 — Generative Asset Briefs',
    desc: 'Using AI image tools to generate rough visual references and mood boards before the actual design work starts. It\'s not about the output being final — it\'s about the team seeing a direction before the argument starts. Cuts revision loops considerably.'
  },
  {
    title: '03 — Custom Automation Agents',
    desc: 'Built specific bots for Svarnart and Sivnco that handle common queries, pull from our knowledge base, and generate initial briefs. The goal is always to protect design time — less admin, more creating.'
  }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ai-bg:#0A0906;--ink:#F0EDE6;--ai-muted:rgba(240,237,230,0.45);--ai-accent:#D4600A;--ai-border:rgba(240,237,230,0.08);--ai-glass:rgba(240,237,230,0.03);--forest:#142B22;--D:'Doto',sans-serif;--S:'Urbanist',sans-serif;--M:'Instrument Sans',sans-serif}
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-stopped { overflow: hidden; }
body{background:var(--ai-bg);color:var(--ink);font-family:var(--S);overflow-x:hidden}
a{color:inherit;text-decoration:none}
.c{max-width:1240px;margin:0 auto;padding:0 5vw}

/* HERO */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:12rem 5vw 5rem;border-bottom:1px solid var(--ai-border);position:relative;overflow:hidden}
.eyebrow{font-family:var(--M);font-size:.62rem;letter-spacing:.25em;color:var(--ai-accent);margin-bottom:2rem;position:relative;z-index:2}
.hero-title{font-family:var(--D);font-weight:900;font-size:clamp(4.5rem,12vw,11rem);line-height:1.05;position:relative;z-index:2}
.hero-title i{color:var(--ai-accent);font-style:normal;font-weight:300;font-family:var(--S);display:block}
.hero-sub{font-family:var(--S);font-size:clamp(1rem,1.6vw,1.3rem);color:var(--ai-muted);max-width:560px;line-height:1.85;margin-top:2rem;position:relative;z-index:2}
.hero-meta{display:flex;flex-wrap:wrap;gap:3rem;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--ai-border);position:relative;z-index:2}
.meta label{font-family:var(--M);font-size:.58rem;letter-spacing:.2em;color:var(--ai-accent);display:block;margin-bottom:.4rem}
.meta span{font-family:var(--S);font-size:1rem;color:var(--ink)}

/* FLOATING GLASS METRICS CAPSULES */
.metrics-stream{display:flex;flex-wrap:wrap;gap:1.4rem;justify-content:center;padding:4.5rem 0;position:relative;z-index:2}
.metric-capsule{flex:1 1 230px;max-width:280px;background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.12);border-radius:9999px;padding:2.2rem 2.4rem;text-align:center;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:0 10px 30px rgba(0,0,0,0.4);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),border-color 0.4s ease,box-shadow 0.4s ease}
.metric-capsule:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.5);box-shadow:0 20px 45px rgba(0,0,0,0.6),0 0 25px rgba(212,96,10,0.2)}
.m-n{font-family:var(--D);font-weight:900;font-size:clamp(2.8rem,5vw,5rem);color:var(--ai-accent);line-height:1}
.m-l{font-family:var(--M);font-size:.58rem;letter-spacing:.18em;color:var(--ai-muted);margin-top:.6rem}

/* SECTIONS */
section{padding:8rem 0;border-bottom:1px solid var(--ai-border);position:relative}
.s-label{font-family:var(--M);font-size:.58rem;letter-spacing:.22em;color:var(--ai-accent);margin-bottom:1.5rem;display:inline-block}
.s-title{font-family:var(--D);font-weight:900;font-size:clamp(3rem,6vw,7rem);line-height:1.05;margin-bottom:3rem}
.s-title i{font-family:var(--S);color:var(--ai-muted);font-style:normal;font-weight:300}
.body{font-family:var(--S);font-size:1.12rem;line-height:1.9;color:var(--ai-muted);max-width:660px}

/* INTERACTIVE PIPELINE SIMULATOR */
.pipeline-box{background:rgba(18,17,14,0.7);border:1px solid rgba(240,237,230,0.14);border-radius:36px;padding:3.5rem;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:0 30px 70px rgba(0,0,0,0.7);margin-top:3.5rem}
.pipeline-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-bottom:3rem}
.pipe-step-card{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.1);border-radius:24px;padding:1.8rem;cursor:pointer;transition:all .3s cubic-bezier(0.16,1,0.3,1);text-align:left}
.pipe-step-card:hover{transform:translateY(-4px);border-color:rgba(212,96,10,0.4)}
.pipe-step-card.active{background:rgba(212,96,10,0.15);border-color:#D4600A;box-shadow:0 0 25px rgba(212,96,10,0.25)}
.pipe-num{font-family:var(--D);font-size:1.8rem;color:var(--ai-accent);font-weight:900;margin-bottom:.4rem}
.pipe-title{font-family:var(--S);font-size:1.1rem;font-weight:600;color:#FFF;margin-bottom:.3rem}
.pipe-tool{font-family:var(--M);font-size:.52rem;letter-spacing:.15em;color:var(--ai-muted);text-transform:uppercase}

.pipeline-stage-detail{background:rgba(240,237,230,0.02);border:1px solid rgba(240,237,230,0.1);border-radius:28px;padding:2.5rem 3rem;display:grid;grid-template-columns:1.5fr 1fr;gap:3rem;align-items:center}
.stage-desc{font-family:var(--S);font-size:1.15rem;line-height:1.85;color:rgba(240,237,230,0.85)}
.stage-stats{display:flex;flex-direction:column;gap:1.2rem;border-left:1px solid rgba(240,237,230,0.12);padding-left:2.5rem}
.stat-row{display:flex;justify-content:space-between;align-items:center}
.stat-label{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ai-muted);text-transform:uppercase}
.stat-val{font-family:var(--D);font-size:1.4rem;color:#FFF;font-weight:700}
.stat-savings{color:var(--ai-accent);font-weight:900;font-size:1.8rem}

/* ASYMMETRIC PILLARS */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:4rem}
.pillar{background:rgba(240,237,230,0.03);border:1px solid rgba(240,237,230,0.1);border-radius:32px;padding:3rem 2.5rem;backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.pillar:hover{transform:translateY(-6px);border-color:rgba(212,96,10,0.45);box-shadow:0 24px 50px rgba(0,0,0,0.5)}
.pil-h{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ai-accent);margin-bottom:1.2rem}
.pil-b{font-family:var(--S);font-size:1.05rem;line-height:1.85;color:var(--ai-muted)}

/* TIMELINE STREAM */
.timeline{margin-top:4rem;display:flex;flex-direction:column;gap:2rem}
.tl-item{position:relative;background:rgba(240,237,230,0.025);border:1px solid rgba(240,237,230,0.1);border-radius:28px;padding:2.5rem 3rem;backdrop-filter:blur(20px);transition:transform .3s ease, border-color .3s ease}
.tl-item:hover{transform:translateX(8px);border-color:rgba(212,96,10,0.35)}
.tl-date{font-family:var(--M);font-size:.62rem;letter-spacing:.2em;color:var(--ai-accent);margin-bottom:.4rem}
.tl-title{font-family:var(--D);font-weight:900;font-size:1.8rem;color:#F0EDE6;line-height:1.2}
.tl-org{font-family:var(--M);font-size:.58rem;letter-spacing:.15em;color:var(--ai-muted);margin-top:.3rem}
.tl-desc{font-family:var(--S);font-size:1.05rem;line-height:1.8;color:var(--ai-muted);margin-top:1rem;max-width:720px}

/* FOOTER */
.pfooter{padding:5rem 0 3.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--ai-border);margin-top:4rem}
.pf-brand{font-family:var(--D);font-weight:900;font-size:1.4rem;letter-spacing:.06em}

.rv{opacity:0;transform:translateY(28px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:translateY(0)}
.rv2{opacity:0;transition:opacity .85s cubic-bezier(.16,1,.3,1) .15s}
.rv2.vis{opacity:1}

@media(max-width:1024px){
  .pipeline-steps{grid-template-columns:repeat(2,1fr)}
  .pipeline-stage-detail{grid-template-columns:1fr;gap:2rem}
  .stage-stats{border-left:none;border-top:1px solid rgba(240,237,230,0.12);padding-left:0;padding-top:1.5rem}
  .pillars{grid-template-columns:1fr}
}
@media(max-width:768px){
  .hero{padding-top:10rem;padding-bottom:4rem}
  .hero-title{font-size:clamp(3rem,10vw,6.5rem)}
  .pipeline-steps{grid-template-columns:1fr}
  .metrics-stream{gap:1rem}
  .pfooter{flex-direction:column;gap:2rem;text-align:center}
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
      <Head>
        <title>AI Workflow &amp; Modern Tooling — H P Shivaraj | Sivnco</title>
        <meta name="description" content="AI tools integrated into production packaging pipelines, generative briefs, and autonomous studio agents." />
      </Head>

      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* HERO WITH FLUID CANVAS */}
      <div className="hero">
        <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.2)" secondaryColor="rgba(140, 80, 220, 0.08)" />
        <div className="c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow">CASE STUDY — 05 // DISCIPLINE: AI WORKFLOW</div>
          <h1 className="hero-title">
            AI<i>WORKFLOW</i>
          </h1>
          <p className="hero-sub">
            Moving beyond curiosity into high-velocity production pipelines. How I use custom AI agents, automated moodboarding, and generative tooling to collapse briefing times and scale output.
          </p>
          <div className="hero-meta">
            <div className="meta">
              <label>PRACTICE ERA</label>
              <span>2022 — Present</span>
            </div>
            <div className="meta">
              <label>EFFICIENCY GAIN</label>
              <span>2.5× Output Scale</span>
            </div>
            <div className="meta">
              <label>CUSTOM AGENTS</label>
              <span>4+ Deployed Bots</span>
            </div>
            <div className="meta">
              <label>CORE TOOLING</label>
              <span>LLMs · ComfyUI · Web Audio</span>
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
          <h2 className="s-title rv">AI as leverage,<br /><i>not replacement.</i></h2>
          <p className="body rv">
            I do not use AI to generate final logos or packaging illustrations in one shot — because automated generic output lacks brand soul and retail nuance. I use AI to automate the administrative friction of commercial design: summarizing meeting transcripts into structured briefs, generating 40 packaging concept directions in 30 minutes, and accelerating handoff so 90% of my energy stays on craft.
          </p>
        </div>
      </section>

      {/* INTERACTIVE PIPELINE SIMULATOR */}
      <section>
        <div className="c">
          <div className="s-label rv">02 — INTERACTIVE WORKFLOW SIMULATOR</div>
          <h2 className="s-title rv">Production Speedup<br /><i>Pipeline.</i></h2>
          <p className="body rv">
            Select a production stage to simulate how custom agents and generative models collapse traditional turnaround times across client projects.
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
                  <span className="stat-label">Traditional Time:</span>
                  <span className="stat-val" style={{ textDecoration: 'line-through', opacity: 0.5 }}>{current.timeTraditional}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">AI Pipeline Time:</span>
                  <span className="stat-val">{current.timeAI}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Velocity Factor:</span>
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
          <div className="s-label rv">03 — Core Pillars</div>
          <h2 className="s-title rv">Three ways AI runs<br /><i>in my studio.</i></h2>
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
          <div className="s-label rv">04 — Timeline</div>
          <h2 className="s-title rv">Four years of<br /><i>AI iteration.</i></h2>
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
      <div className="c">
        <div className="pfooter rv">
          <div><div className="pf-brand">SIVNCO<span style={{ color: 'var(--ai-accent)' }}>.</span></div></div>
          <StartProjectButton />
        </div>
      </div>

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

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

const CAMPAIGNS = [
  {
    id: 'almond-milk',
    num: '01',
    label: 'Campaign · Motion · Q-Commerce',
    title: 'Almond Milk',
    subtitle: '30-Second Revolution',
    accent: '#D4600A',
    brand: 'Jus Amazin — 100% Almond Milk Paste',
    brief: 'Break into the dairy-free milk alternative category on quick-commerce platforms where decisions happen in under 3 seconds.',
    insight: 'Urban health-conscious consumers don\'t distrust almond milk — they distrust the 8-hour ritual of making it. The overnight soak, the blending, the straining. The process was the barrier, not the product.',
    concept: 'Make the inconvenience disappear on screen. Not through claim — through demonstration. One split screen, two worlds: the exhausting traditional method vs. 30 seconds with Jus Amazin paste dissolved in water. The campaign idea is not "convenience." The campaign idea is liberation from a ritual that was never necessary.',
    executions: [
      {
        num: '01',
        channel: 'Q-Commerce PDP',
        title: '30-Sec Comparison Film',
        src: '/videos/jusamazin/30-sec-almond-milk-compare.mp4',
        isVideo: true,
        adNote: 'Split-screen tension at 1:1 aspect ratio — the left side shows the traditional overnight process compressing 8 hours into 10 seconds, the right shows the paste dissolving in real time. No voiceover needed. The visual does the persuasion.',
        channels: 'Blinkit PDP · Zepto Product Carousel · Amazon A+ Content'
      },
      {
        num: '02',
        channel: 'Social / Paid',
        title: '30-Sec Kinetic Typography',
        src: '/videos/jusamazin/30sad-typewriter-final.mp4',
        isVideo: true,
        adNote: 'Built for sound-off vertical scrolling. Kinetic typewriter animation delivers proof points — "100% Almonds", "No Emulsifiers" — in the first 3 seconds. Type is the visual idea here, not decoration.',
        channels: 'Instagram Stories · Reels · Meta Paid Acquisition'
      },
      {
        num: '03',
        channel: 'Brand / YouTube',
        title: 'Full Campaign Launch Film',
        src: '/videos/jusamazin/full-sam-final.mp4',
        isVideo: true,
        adNote: 'Long-form brand film combining macro ingredient photography with lifestyle integration. Positions "30-Second Almond Milk" as a clean, sustainable dietary upgrade — not a convenience hack. Trust-building for health-conscious families.',
        channels: 'YouTube Pre-Roll · Brand Website · Amazon Storefront'
      }
    ],
    reflection: 'If I were to redo this, I\'d develop an OOH version — a single visual of the paste jar next to a clock showing "8 Hours vs. 30 Seconds." The idea is strong enough to work on a billboard at 60kmph. The campaign proved the concept; the next step is extending it beyond digital.',
    results: ['3 formats across Q-commerce, social, and brand channels', 'Deployed on Blinkit, Zepto, Amazon, Instagram', 'Kinetic type version optimized for sound-off environments']
  },
  {
    id: 'desi-energy-bar',
    num: '02',
    label: 'Campaign · Packaging · Retail',
    title: 'Desi Energy Bar',
    subtitle: 'Structured Chaos',
    accent: '#0066FF',
    brand: 'Jus Amazin — Desi Energy Bar Range',
    brief: 'Launch a new energy bar into a saturated health snacking category dominated by clinical, Western-aesthetic brands. Stand out on shelf and create emotional connection with Indian consumers.',
    insight: 'Indian consumers don\'t identify with the sterile, gym-focused energy bar aesthetic. They grew up on Chikki — the after-play snack, the evening ritual, the grandmother\'s hand. Health doesn\'t have to look foreign to be trusted.',
    concept: 'Structured Chaos. A visual language that deliberately breaks the grid — maximalist, vibrant, nostalgic — but underpinned by rigorous color theory and compositional logic. The "chaos" signals cultural authenticity. The "structure" signals quality. Neither works without the other. This isn\'t a rejection of design principles. It\'s the strategic application of Contrast Theory to manufacture an emotional shortcut to memory.',
    executions: [
      {
        num: '01',
        channel: 'Retail Packaging',
        title: 'Primary Pack Design',
        src: '/images/jusamazin/desi_bar/studio_render_a.png',
        isVideo: false,
        adNote: 'Electric blue base chosen deliberately against the amber/earth-tone health category. The nostalgic cartoon illustration anchors the "Desi" claim without using the word. Shelf presence over brand consistency — the rule was broken intentionally.',
        channels: 'Retail shelf · Modern trade · Quick commerce'
      },
      {
        num: '02',
        channel: 'Ideation Process',
        title: 'Design Runway — Sketch to Final',
        src: '/images/jusamazin/desi_bar/runway_final.png',
        isVideo: false,
        adNote: 'Seven stages from initial sketch to print-ready file. The concept direction changed twice — early versions were too clean, too "health brand." The breakthrough came when we leaned into the imperfection of hand-drawn illustration as a feature, not a limitation.',
        channels: 'Internal brand review · Production handoff'
      },
      {
        num: '03',
        channel: 'Retail Environment',
        title: 'Shelf Placement & Pack Array',
        src: '/images/jusamazin/desi_bar/pack_array.png',
        isVideo: false,
        adNote: 'The array test proved the hypothesis: at retail exposure distance, the electric blue cuts through the competitive set in under 2 seconds. Adjacent products — muted amber, white, green — recede. The chaos creates a visual anchor.',
        channels: 'Physical retail · Amazon listing photography'
      }
    ],
    reflection: 'The design solved shelf presence brilliantly. What I\'d extend: a 15-second social video where the cartoon character "comes alive" — reinforcing the nostalgia claim in motion. The packaging created the idea; the next campaign is animating it.',
    results: ['70% increase in snacking range sales post-launch', '34% revenue contribution to total brand in FY24-25', '250 units to 8,000 units/month within one year', '58% retail brand recognition increase in Q3-Q4']
  },
  {
    id: 'superfoods',
    num: '03',
    label: 'Campaign · Typography · Compliance',
    title: 'Superfoods',
    subtitle: 'Precision as Design',
    accent: '#2ECC71',
    brand: 'Jus Amazin — Superfood Pouch Range (500g / 1kg)',
    brief: 'Redesign the back-of-pack information system for the superfood pouch line — achieve premium visual cleanliness while increasing information density and passing regulatory compliance.',
    insight: 'In the clean-label category, the back of pack is not a regulatory obligation — it\'s the second sales pitch. Consumers who flip the pack have already made a provisional decision to trust. What they see next either confirms that trust or collapses it.',
    concept: 'Typography as brand argument. Every typographic decision — casing, spacing, punctuation, hierarchy — is an implicit claim about the brand\'s relationship with transparency. "Flax seed" in lowercase says: we are precise, not performative. Removing stray punctuation from "Ingredients:" says: we have nothing to hide. The visual system is the message.',
    executions: [
      {
        num: '01',
        channel: 'Back of Pack',
        title: 'Typography System Overhaul',
        src: '/images/jusamazin/superfoods/typography_macro.png',
        isVideo: false,
        adNote: 'Strict lowercase nomenclature for all ingredient variables. Unified "Superfood" as single word — eliminating the confusion of "Super Food" spacing. The change is invisible to the casual reader and decisive for the engaged one.',
        channels: 'Flexible pouch 500g · 1kg format'
      },
      {
        num: '02',
        channel: 'Shelf System',
        title: 'Lineup Architecture',
        src: '/images/jusamazin/superfoods/shelf_lineup.png',
        isVideo: false,
        adNote: 'Color-coded SKU differentiation with a consistent structural grid across the lineup. Each variant is immediately distinct, yet unmistakably the same brand. The shelf reads as a system, not a collection.',
        channels: 'Modern trade shelf · Online product listing photography'
      },
      {
        num: '03',
        channel: 'Label Detail',
        title: 'Nutrition Panel & Compliance',
        src: '/images/jusamazin/superfoods/nutrition_label.png',
        isVideo: false,
        adNote: 'Integrated 12-month shelf life certification update while maintaining visual hierarchy. Regulatory compliance became a design opportunity — the extended certification was presented as a quality signal, not a legal footnote.',
        channels: 'Print production · FSSAI compliance · Retailer submission'
      }
    ],
    reflection: 'This project taught me that the most powerful design decisions are often invisible — the ones that make something feel right without the viewer knowing why. I\'d take this further by applying the same precision to front-of-pack, making the typographic confidence visible on shelf.',
    results: ['Strict lowercase nomenclature system implemented across 500g and 1kg SKUs', 'Shelf life certification extended from 9 to 12 months', 'sRGB color profile compliance resolved across all platform listings', 'Visual rhythm achieved across full pouch lineup']
  }
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --cp-bg:#0A0906;--cp-white:#F0EDE6;--cp-accent:#D4600A;
  --cp-muted:rgba(240,237,230,0.45);--cp-border:rgba(240,237,230,0.08);
  --cp-glass:rgba(240,237,230,0.03);
  --D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace;
}
html{scroll-behavior:smooth}
body{background:var(--cp-bg);color:var(--cp-white);font-family:var(--S);overflow-x:hidden;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}

/* NAV */
.cp-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5vw;background:rgba(10,9,6,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--cp-border)}
.cp-logo{font-family:var(--D);font-size:1.3rem;letter-spacing:.08em}
.cp-back{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;padding:.55rem 1.4rem;border:1px solid var(--cp-border);border-radius:40px;transition:.3s}
.cp-back:hover{border-color:var(--cp-accent);color:var(--cp-accent)}
.cp-nav-links{display:flex;gap:2.5rem;align-items:center}
.cp-nav-links a{font-family:var(--M);font-size:.65rem;letter-spacing:.15em;opacity:.6;transition:opacity .3s}
.cp-nav-links a:hover{opacity:1}

/* HERO */
.cp-hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;border-bottom:1px solid var(--cp-border);padding-top:6rem}
.cp-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 15% 50%,rgba(212,96,10,0.12),transparent 55%),radial-gradient(ellipse at 85% 20%,rgba(212,96,10,0.06),transparent 55%),var(--cp-bg)}
.cp-hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px);background-size:80px 80px;mask-image:radial-gradient(ellipse 60% 70% at 50% 50%,black 20%,transparent 100%)}
.cp-hero-inner{position:relative;z-index:2;padding:0 5vw;width:100%;max-width:1400px;margin:0 auto}
.cp-hero-tag{font-family:var(--M);font-size:.62rem;letter-spacing:.28em;color:var(--cp-accent);margin-bottom:2.5rem;display:flex;align-items:center;gap:1rem}
.cp-hero-tag::before{content:'';width:32px;height:1px;background:var(--cp-accent)}
.cp-hero h1{font-family:var(--D);font-size:clamp(4rem,12vw,12rem);line-height:.85;margin-bottom:2rem}
.cp-hero h1 em{font-style:normal;color:var(--cp-muted);font-family:var(--S);font-weight:300;display:block;font-size:.3em;margin-top:1.5rem;line-height:1.8;max-width:620px;letter-spacing:0}
.cp-hero-pov{margin-top:4rem;border-left:2px solid var(--cp-accent);padding-left:2rem;max-width:680px}
.cp-hero-pov p{font-family:var(--S);font-size:1.2rem;line-height:1.9;color:var(--cp-muted);font-style:italic}
.cp-hero-pov strong{color:var(--cp-white);font-style:normal}
.cp-hero-scroll{display:flex;gap:3rem;margin-top:4rem;flex-wrap:wrap}
.cp-hero-count{text-align:center}
.cp-hero-count-num{font-family:var(--D);font-size:clamp(2rem,4vw,3.5rem);color:var(--cp-accent);line-height:1}
.cp-hero-count-label{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--cp-muted);margin-top:.4rem}

/* CAMPAIGN ANCHOR NAV */
.cp-campaign-nav{position:sticky;top:64px;z-index:50;background:rgba(10,9,6,0.95);backdrop-filter:blur(20px);border-bottom:1px solid var(--cp-border);padding:1rem 5vw}
.cp-campaign-nav-inner{display:flex;gap:3rem;max-width:1400px;margin:0 auto;overflow-x:auto;scrollbar-width:none}
.cp-campaign-nav-inner::-webkit-scrollbar{display:none}
.cp-cam-link{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;opacity:.5;transition:.3s;white-space:nowrap;padding:.3rem 0;border-bottom:1px solid transparent}
.cp-cam-link:hover,.cp-cam-link.active{opacity:1;border-bottom-color:var(--cp-accent)}

/* CAMPAIGN SECTION */
.cp-campaign{padding:12rem 0;border-bottom:1px solid var(--cp-border);position:relative}
.cp-c{max-width:1400px;margin:0 auto;padding:0 5vw}

/* Campaign header */
.cp-cam-header{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:start;margin-bottom:6rem}
.cp-cam-num{font-family:var(--D);font-size:clamp(8rem,16vw,18rem);line-height:.85;opacity:.06;position:absolute;top:8rem;right:3vw;pointer-events:none;letter-spacing:-.04em}
.cp-cam-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;margin-bottom:1.5rem}
.cp-cam-title{font-family:var(--D);font-size:clamp(4rem,9vw,10rem);line-height:.85;margin-bottom:.8rem}
.cp-cam-sub{font-family:var(--S);font-size:clamp(1.2rem,2.5vw,1.8rem);font-weight:300;opacity:.4;margin-bottom:3rem}

/* Story columns */
.cp-story-col{display:flex;flex-direction:column;gap:2.5rem}
.cp-story-block{position:relative}
.cp-story-block-label{font-family:var(--M);font-size:.55rem;letter-spacing:.22em;margin-bottom:.8rem;display:flex;align-items:center;gap:.8rem}
.cp-story-block-label::before{content:'';width:20px;height:1px;flex-shrink:0}
.cp-story-block-body{font-size:1.05rem;line-height:1.9;color:var(--cp-muted);max-width:540px}
.cp-story-block-body strong{font-weight:500}

/* Executions */
.cp-execs-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;margin-bottom:3rem}
.cp-exec-item{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;margin-bottom:5rem;padding-bottom:5rem;border-bottom:1px solid var(--cp-border)}
.cp-exec-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.cp-exec-media{position:relative;border-radius:8px;overflow:hidden;border:1px solid var(--cp-border);background:rgba(240,237,230,0.03);aspect-ratio:16/9;transition:border-color .4s}
.cp-exec-media:hover{border-color:rgba(212,96,10,0.3)}
.cp-exec-media video,.cp-exec-media img{width:100%;height:100%;object-fit:cover;display:block}
.cp-exec-info{display:flex;flex-direction:column;gap:1.5rem;padding-top:1rem}
.cp-exec-num{font-family:var(--D);font-size:clamp(3rem,6vw,6rem);line-height:1;opacity:.08}
.cp-exec-channel{font-family:var(--M);font-size:.55rem;letter-spacing:.22em;margin-bottom:.3rem}
.cp-exec-title{font-family:var(--D);font-size:clamp(1.5rem,3vw,2.5rem);line-height:1;margin-bottom:.5rem}
.cp-exec-adnote-label{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;opacity:.5;margin-bottom:.4rem}
.cp-exec-adnote{font-size:.95rem;line-height:1.8;color:var(--cp-muted);font-style:italic}
.cp-exec-channels-label{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;opacity:.5;margin-top:.5rem;margin-bottom:.3rem}
.cp-exec-channels{font-family:var(--M);font-size:.6rem;letter-spacing:.1em;color:var(--cp-accent)}

/* Results */
.cp-results-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--cp-border);margin-bottom:4rem}
.cp-result-item{background:var(--cp-bg);padding:2rem;font-size:.95rem;line-height:1.7;color:var(--cp-muted)}
.cp-result-item::before{content:'→';font-family:var(--M);font-size:.7rem;color:var(--cp-accent);display:block;margin-bottom:.5rem}

/* Reflection */
.cp-reflection{background:rgba(240,237,230,0.03);border:1px solid var(--cp-border);padding:3rem;border-left:3px solid var(--cp-accent);margin-top:4rem}
.cp-reflection-label{font-family:var(--M);font-size:.55rem;letter-spacing:.22em;margin-bottom:1rem;opacity:.6}
.cp-reflection-body{font-size:1rem;line-height:1.9;color:var(--cp-muted);font-style:italic;max-width:680px}

/* FOOTER CTA */
.cp-footer{padding:10rem 0 4rem;text-align:center;border-top:1px solid var(--cp-border)}
.cp-footer-tag{font-family:var(--M);font-size:.6rem;letter-spacing:.25em;color:var(--cp-accent);margin-bottom:2rem}
.cp-footer-headline{font-family:var(--D);font-size:clamp(3rem,8vw,8rem);line-height:.85;margin-bottom:3rem}
.cp-footer-cta{display:inline-flex;gap:1.5rem;align-items:center;flex-wrap:wrap;justify-content:center}
.cp-cta-btn{font-family:var(--M);font-size:.7rem;letter-spacing:.15em;border:1px solid var(--cp-border);padding:.9rem 2rem;border-radius:40px;transition:.3s}
.cp-cta-btn:hover{border-color:var(--cp-accent);color:var(--cp-accent)}
.cp-cta-btn.primary{background:var(--cp-accent);border-color:var(--cp-accent);color:#fff}
.cp-cta-btn.primary:hover{background:transparent;color:var(--cp-accent)}

/* REVEALS */
.cpv{opacity:0;transform:translateY(24px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1)}
.cpv.vis{opacity:1;transform:translateY(0)}

@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
}

/* MOBILE */
@media(max-width:900px){
  .cp-cam-header{grid-template-columns:1fr;gap:3rem}
  .cp-exec-item{grid-template-columns:1fr;gap:2rem}
  .cp-results-grid{grid-template-columns:1fr}
  .cp-cam-num{display:none}
  .cp-nav-links{display:none}
  .cp-hero h1{font-size:clamp(3.5rem,14vw,8rem)}
}
@media(max-width:540px){
  .cp-campaign{padding:7rem 0}
  .cp-cam-title{font-size:clamp(3rem,12vw,7rem)}
  .cp-hero-pov p{font-size:1rem}
}
`

export default function Campaigns() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Campaigns — Advertising Concepts · H P Shivaraj · Art Director</title>
        <meta name="description" content="Art direction for advertising campaigns — Almond Milk motion campaign, Desi Energy Bar retail launch, Superfoods typography system. H P Shivaraj, Art Director, Bengaluru." />
        <meta property="og:title" content="Campaigns — H P Shivaraj · Art Director" />
        <meta property="og:description" content="Advertising campaigns: Almond Milk, Desi Energy Bar, Superfoods. Insight to execution across digital, retail, and social." />
        <meta property="og:url" content="https://sivnco.in/campaigns" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      {/* NAV */}
      <nav className="cp-nav">
        <Link href="/" className="cp-logo">SIVNCO<span style={{ color: 'var(--cp-accent)' }}>.</span></Link>
        <div className="cp-nav-links">
          {CAMPAIGNS.map(c => (
            <a key={c.id} href={`#${c.id}`} className="cp-cam-link">{c.num} {c.title}</a>
          ))}
        </div>
        <Link href="/" className="cp-back">← All Work</Link>
      </nav>

      {/* HERO */}
      <div className="cp-hero">
        <div className="cp-hero-bg" />
        <div className="cp-hero-grid" />
        <div className="cp-hero-inner">
          <div className="cp-hero-tag cpv">Art Direction · Campaign Thinking</div>
          <h1 className="cpv">
            Campaigns
            <em>
              Every brief is a question. Every campaign is a point of view.
              Three advertising campaigns — across motion, retail, and typography — built
              on consumer insight, not aesthetic preference.
            </em>
          </h1>
          <div className="cp-hero-pov cpv">
            <p>
              <strong>I believe design that moves product isn&apos;t different from design that moves people</strong> —
              it&apos;s the same instinct applied to different contexts. The campaigns here started with
              a human truth and worked backwards to the visual form that best carries it.
            </p>
          </div>
          <div className="cp-hero-scroll cpv">
            <div className="cp-hero-count">
              <div className="cp-hero-count-num">3</div>
              <div className="cp-hero-count-label">Campaigns</div>
            </div>
            <div className="cp-hero-count">
              <div className="cp-hero-count-num">176%</div>
              <div className="cp-hero-count-label">Revenue Growth</div>
            </div>
            <div className="cp-hero-count">
              <div className="cp-hero-count-num">8K</div>
              <div className="cp-hero-count-label">Units/Month</div>
            </div>
          </div>
        </div>
      </div>

      {/* CAMPAIGN ANCHOR NAV */}
      <div className="cp-campaign-nav">
        <div className="cp-campaign-nav-inner">
          {CAMPAIGNS.map(c => (
            <a key={c.id} href={`#${c.id}`} className="cp-cam-link">
              {c.num} — {c.title}: {c.subtitle}
            </a>
          ))}
        </div>
      </div>

      {/* CAMPAIGNS */}
      {CAMPAIGNS.map((cam, ci) => (
        <section key={cam.id} id={cam.id} className="cp-campaign">
          <div className="cp-cam-num cpv">{cam.num}</div>
          <div className="cp-c">

            {/* Campaign Header */}
            <div className="cp-cam-header">
              <div>
                <div className="cp-cam-label cpv" style={{ color: cam.accent }}>{cam.label}</div>
                <div className="cp-cam-title cpv">{cam.title}</div>
                <div className="cp-cam-sub cpv">{cam.subtitle}</div>

                {/* Story: Brand + Brief */}
                <div className="cp-story-col">
                  <div className="cp-story-block cpv">
                    <div className="cp-story-block-label" style={{ color: cam.accent }}>
                      The Brand
                    </div>
                    <div className="cp-story-block-body">{cam.brand}</div>
                  </div>
                  <div className="cp-story-block cpv">
                    <div className="cp-story-block-label" style={{ color: cam.accent }}>
                      The Brief
                    </div>
                    <div className="cp-story-block-body">{cam.brief}</div>
                  </div>
                </div>
              </div>

              {/* Story: Insight + Concept */}
              <div className="cp-story-col" style={{ paddingTop: '4rem' }}>
                <div className="cp-story-block cpv">
                  <div className="cp-story-block-label" style={{ color: cam.accent }}>
                    The Consumer Insight
                  </div>
                  <div className="cp-story-block-body" style={{ fontSize: '1.1rem' }}>
                    {cam.insight}
                  </div>
                </div>
                <div className="cp-story-block cpv">
                  <div className="cp-story-block-label" style={{ color: cam.accent }}>
                    The Concept
                  </div>
                  <div className="cp-story-block-body" style={{ fontSize: '1.05rem' }}>
                    {cam.concept}
                  </div>
                </div>
              </div>
            </div>

            {/* Executions */}
            <div className="cpv">
              <div className="cp-execs-label" style={{ color: cam.accent }}>Execution — Across Touchpoints</div>
              {cam.executions.map((ex, ei) => (
                <div key={ex.num} className="cp-exec-item cpv">
                  {/* Media first on odd, info first on even */}
                  {ei % 2 === 0 ? (
                    <>
                      <div className="cp-exec-media">
                        {ex.isVideo ? (
                          <video src={ex.src} controls playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        ) : (
                          <img src={ex.src} alt={ex.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        )}
                      </div>
                      <div className="cp-exec-info">
                        <div className="cp-exec-num">{ex.num}</div>
                        <div>
                          <div className="cp-exec-channel" style={{ color: cam.accent }}>{ex.channel}</div>
                          <div className="cp-exec-title">{ex.title}</div>
                        </div>
                        <div>
                          <div className="cp-exec-adnote-label">Art Direction Note</div>
                          <div className="cp-exec-adnote">{ex.adNote}</div>
                        </div>
                        <div>
                          <div className="cp-exec-channels-label">Channels</div>
                          <div className="cp-exec-channels">{ex.channels}</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="cp-exec-info">
                        <div className="cp-exec-num">{ex.num}</div>
                        <div>
                          <div className="cp-exec-channel" style={{ color: cam.accent }}>{ex.channel}</div>
                          <div className="cp-exec-title">{ex.title}</div>
                        </div>
                        <div>
                          <div className="cp-exec-adnote-label">Art Direction Note</div>
                          <div className="cp-exec-adnote">{ex.adNote}</div>
                        </div>
                        <div>
                          <div className="cp-exec-channels-label">Channels</div>
                          <div className="cp-exec-channels">{ex.channels}</div>
                        </div>
                      </div>
                      <div className="cp-exec-media">
                        {ex.isVideo ? (
                          <video src={ex.src} controls playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        ) : (
                          <img src={ex.src} alt={ex.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="cpv">
              <div className="cp-execs-label" style={{ color: cam.accent, marginTop: '4rem' }}>Results</div>
              <div className="cp-results-grid">
                {cam.results.map((r, ri) => (
                  <div key={ri} className="cp-result-item">{r}</div>
                ))}
              </div>
            </div>

            {/* Reflection */}
            <div className="cp-reflection cpv" style={{ borderLeftColor: cam.accent }}>
              <div className="cp-reflection-label" style={{ color: cam.accent }}>What I&apos;d Do Differently</div>
              <div className="cp-reflection-body">{cam.reflection}</div>
            </div>

          </div>
        </section>
      ))}

      {/* FOOTER CTA */}
      <div className="cp-footer">
        <div className="cp-c">
          <div className="cp-footer-tag cpv">Available for Art Direction</div>
          <div className="cp-footer-headline cpv">Let&apos;s build<br /><span style={{ color: 'var(--cp-accent)' }}>something<br />real.</span></div>
          <div className="cp-footer-cta cpv">
            <a href="mailto:sivnco.in@gmail.com" className="cp-cta-btn primary">sivnco.in@gmail.com</a>
            <Link href="/jusamazin" className="cp-cta-btn">View Full Case Study</Link>
            <Link href="/" className="cp-cta-btn">Back to Portfolio</Link>
          </div>
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--cp-border)', fontFamily: 'var(--M)', fontSize: '.55rem', letterSpacing: '.15em', color: 'rgba(240,237,230,0.3)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <span>SIVNCO<span style={{ color: 'var(--cp-accent)' }}>.</span></span>
            <span>In-house · Agency · Project Engagements · Bengaluru · Remote</span>
          </div>
        </div>
      </div>

      <Script id="cp-init" strategy="lazyOnload">{`
        (function() {
          function init() {
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              });
            }, { threshold: 0.05 });
            document.querySelectorAll('.cpv').forEach(function(el) { obs.observe(el); });
            setTimeout(function() {
              document.querySelectorAll('.cpv').forEach(function(el) { el.classList.add('vis'); });
            }, 2500);
            if (window.innerWidth <= 900) {
              document.querySelectorAll('.cpv').forEach(function(el) { el.classList.add('vis'); });
            }
            // Highlight active campaign in sticky nav on scroll
            var links = document.querySelectorAll('.cp-cam-link');
            var sections = document.querySelectorAll('.cp-campaign[id]');
            var obs2 = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) {
                  links.forEach(function(l) { l.classList.remove('active'); });
                  var active = document.querySelector('.cp-cam-link[href="#' + e.target.id + '"]');
                  if (active) active.classList.add('active');
                }
              });
            }, { threshold: 0.3 });
            sections.forEach(function(s) { obs2.observe(s); });
          }
          if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
          (function waitL() {
            if (typeof Lenis === 'undefined') { setTimeout(waitL, 80); return; }
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

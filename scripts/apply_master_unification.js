const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

console.log('>>> RUNNING MASTER UNIFICATION SCRIPT <<<');

// -------------------------------------------------------------
// 1. INJECT MASTER BRUTALIST CSS OVERRIDES INTO <head><style>
// -------------------------------------------------------------
const masterCss = `
    /* ==========================================================================
       MASTER UNIFIED BRUTALIST EDITORIAL DESIGN SYSTEM
       Single coherent visual hierarchy, structural grids, and typography
       ========================================================================== */

    :root {
      --acid: #d8fc71;
      --paper: #f4f0e6;
      --line: rgba(244, 240, 230, 0.22);
      --accent: #D4600A;
      --f-display: 'Doto', sans-serif;
      --f-serif: 'Urbanist', sans-serif;
      --f-mono: 'Urbanist', sans-serif;
    }

    /* Unified Section Header Architecture */
    .br-section-head {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      align-items: flex-end;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    .br-section-head h2 {
      font-family: var(--f-display) !important;
      font-weight: 900 !important;
      font-size: clamp(34px, 5.2vw, 84px) !important;
      line-height: 0.98 !important;
      letter-spacing: -0.05em !important;
      margin: 14px 0 0 !important;
      color: #FFFFFF !important;
    }
    .br-section-head h2 em,
    .br-section-head h2 span.accent {
      font-style: normal;
      color: var(--accent) !important;
    }
    .br-section-head p {
      max-width: 440px !important;
      font-family: var(--f-serif) !important;
      font-size: 1.08rem !important;
      line-height: 1.75 !important;
      color: rgba(240, 237, 230, 0.78) !important;
      margin: 0 !important;
    }

    /* Unified Brutalist Connected Grid Tokens */
    .br-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border: 2px solid var(--paper);
    }
    .br-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border: 2px solid var(--paper);
    }
    .br-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border: 2px solid var(--paper);
    }
    .br-block-card {
      padding: 30px;
      background: #0A0906;
      color: var(--paper);
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .br-block-card + .br-block-card {
      border-left: 2px solid var(--paper);
    }
    @media (max-width: 1024px) {
      .br-grid-4, .br-grid-3, .br-grid-2 {
        grid-template-columns: 1fr !important;
      }
      .br-block-card + .br-block-card {
        border-left: 0 !important;
        border-top: 2px solid var(--paper) !important;
      }
    }

    /* Universal Brutalist Container Normalization (Zero soft bubble radius) */
    .editorial-project-card,
    .visual-proof-card,
    .journey-card-step,
    .testi-card,
    .cs-img-slot,
    .studio-3d-box,
    .cinema-theater-frame,
    .glass-card,
    .vc-card,
    .vc-rejection-deck-card {
      border-radius: 0 !important;
      border: 2px solid var(--paper) !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
    }

    .editorial-project-card:hover,
    .visual-proof-card:hover,
    .journey-card-step:hover {
      border-color: var(--accent) !important;
      transform: translateY(-2px) !important;
    }

    /* Standardized mono tags, chips & buttons */
    .chip,
    .journey-step-tag,
    .journey-prog-pill,
    .svarnart-chip,
    .nav-cta,
    .t-mono-label,
    .br-label {
      border-radius: 0 !important;
      font-family: var(--f-mono) !important;
      font-weight: 700 !important;
      letter-spacing: 0.1em !important;
      text-transform: uppercase !important;
    }

    /* High contrast text everywhere */
    .visual-proof-info h4 {
      color: #FFFFFF !important;
    }
    .visual-proof-info p {
      color: rgba(240, 237, 230, 0.85) !important;
    }
    .testi-body {
      color: rgba(240, 237, 230, 0.9) !important;
    }
    .testi-name {
      color: #FFFFFF !important;
    }

    /* Fixed Architectural Navigation Bar */
    .nav {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      max-width: none !important;
      transform: none !important;
      border-radius: 0 !important;
      border: 0 !important;
      border-bottom: 2px solid var(--paper) !important;
      background: rgba(10, 9, 6, 0.96) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      z-index: 9999 !important;
    }
    .nav-row {
      padding: 12px 3vw !important;
      min-height: 60px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
    }
    .nav-logo {
      font-family: var(--f-display) !important;
      font-size: 24px !important;
      font-weight: 900 !important;
      letter-spacing: -0.04em !important;
      color: var(--paper) !important;
    }
    .nav-logo span {
      color: var(--accent) !important;
    }
    .nav-links a {
      font-family: var(--f-mono) !important;
      font-size: 11px !important;
      font-weight: 700 !important;
      letter-spacing: 0.1em !important;
      text-transform: uppercase !important;
      color: var(--paper) !important;
      text-decoration: none !important;
    }
    .nav-links a:hover {
      color: var(--accent) !important;
    }
    .nav-chat-btn, .nav-cta {
      border-radius: 0 !important;
      border: 1px solid var(--paper) !important;
      background: var(--paper) !important;
      color: #10100e !important;
      font-family: var(--f-mono) !important;
      font-size: 11px !important;
      font-weight: 800 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
      padding: 8px 16px !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
    }
    .nav-chat-btn:hover, .nav-cta:hover {
      background: var(--acid) !important;
      border-color: var(--acid) !important;
      color: #10100e !important;
    }
`;

if (!html.includes('/* MASTER UNIFIED BRUTALIST EDITORIAL DESIGN SYSTEM */')) {
  html = html.replace('</style>', `${masterCss}\n  </style>`);
  console.log('✓ Injected Master CSS Overrides');
}

// -------------------------------------------------------------
// 2. UNIFY #work SECTION HEADER
// -------------------------------------------------------------
const oldWorkHeadRegex = /<div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1\.5rem; margin-bottom: 2rem;">\s*<div>\s*<div class="t-mono-label gs-fade">Selected Gallery \/\/ Visual Direction<\/div>[\s\S]*?<\/div>\s*<\/div>/;
const unifiedWorkHead = `<div class="br-section-head">
          <div>
            <div class="br-label acid">■ 06 // SELECTED COMMERCIAL WORK</div>
            <h2>Work that speaks.<br><em class="accent">Proof on the shelf.</em></h2>
          </div>
          <p>
            Commercial packaging architecture, multi-format design systems, and shelf differentiation engineered across 15+ product families.
          </p>
        </div>`;

if (oldWorkHeadRegex.test(html)) {
  html = html.replace(oldWorkHeadRegex, unifiedWorkHead);
  console.log('✓ Unified #work section header');
}

// -------------------------------------------------------------
// 3. UNIFY #case-study SECTION HEADER & CASCADE DECK
// -------------------------------------------------------------
const oldCaseHeadRegex = /<div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1\.5rem; margin-bottom: 2\.5rem;">\s*<div>\s*<div class="t-mono-label gs-fade">Master Case Study \/\/ In-House Brand Leadership<\/div>[\s\S]*?<\/div>\s*<\/div>/;
const unifiedCaseHead = `<div class="br-section-head">
          <div>
            <div class="br-label acid">■ 07 // MASTER CASE STUDY</div>
            <h2>Jus’Amazin.<br><em class="accent">Brand system.</em></h2>
          </div>
          <p>
            From fragmented labels to an end-to-end multi-format packaging architecture across 15+ SKUs, industrial dielines, and retail POS.
          </p>
        </div>`;

if (oldCaseHeadRegex.test(html)) {
  html = html.replace(oldCaseHeadRegex, unifiedCaseHead);
  console.log('✓ Unified #case-study section header');
}

const oldDeckRegex = /<div class="cs-cascade-deck gs-fade">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const unifiedDeck = `<div class="br-grid-3 gs-fade" style="margin-bottom: 3.5rem;">
          <!-- 01 Challenge -->
          <div class="br-block-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
              <span class="br-label" style="color: var(--accent);">01 / CHALLENGE</span>
              <span style="font-size: 0.8rem; color: var(--accent);">✦</span>
            </div>
            <h3 style="font-family: var(--f-display); font-size: 1.5rem; margin-bottom: 1rem; color: #FFFFFF; font-weight: 800;">Fragmented Identity</h3>
            <p style="font-family: var(--f-serif); font-size: 1.05rem; line-height: 1.8; color: rgba(240,237,230,0.85); margin: 0;">
              A D2C peanut butter brand with strong product quality but no coherent visual identity. Packaging was inconsistent across SKUs, social presence lacked direction, and retail shelf visibility was weak against established competitors.
            </p>
          </div>

          <!-- 02 Approach -->
          <div class="br-block-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
              <span class="br-label" style="color: #0284C7;">02 / APPROACH</span>
              <span style="font-size: 0.8rem; color: #0284C7;">✦</span>
            </div>
            <h3 style="font-family: var(--f-display); font-size: 1.5rem; margin-bottom: 1rem; color: #FFFFFF; font-weight: 800;">Modular Architecture</h3>
            <p style="font-family: var(--f-serif); font-size: 1.05rem; line-height: 1.8; color: rgba(240,237,230,0.85); margin: 0;">
              Built a complete brand system from scratch — starting with packaging logic for 15+ SKUs, then extending into social media templates, retail POS materials, and a brand guidelines document the team could use independently.
            </p>
          </div>

          <!-- 03 Outcome (High-Contrast Archival Paper Spread) -->
          <div class="br-block-card" style="background: var(--paper); color: #10100e;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
              <span class="br-label" style="color: #C2410C; font-weight: 900;">03 / PROVEN IMPACT</span>
              <span style="font-size: 0.8rem; color: #C2410C;">★</span>
            </div>
            <h3 style="font-family: var(--f-display); font-size: 1.5rem; margin-bottom: 1rem; color: #10100e; font-weight: 900;">+176% Revenue Growth</h3>
            <p style="font-family: var(--f-serif); font-size: 1.05rem; line-height: 1.8; color: #322E26; margin: 0;">
              Contributed alongside sales, product, and operations to a high-growth period (+176% reported company revenue, Aug 2023–2025). Significant improvement in shelf pickup rates, clean-label trust, and multi-channel asset creation.
            </p>
          </div>
        </div>`;

if (oldDeckRegex.test(html)) {
  html = html.replace(oldDeckRegex, unifiedDeck);
  console.log('✓ Unified .cs-cascade-deck to brutalist connected 3-column grid');
}

// -------------------------------------------------------------
// 4. INSERT #studio-realities (THE 4 LAWS OF THE WORKSHOP)
// -------------------------------------------------------------
const studioRealitiesBlock = `
    <!-- ======================================================= -->
    <!-- STUDIO REALITIES // FOUR LAWS OF THE PACKAGING WORKSHOP  -->
    <!-- ======================================================= -->
    <section class="section" id="studio-realities" style="padding: clamp(6rem, 12vh, 10rem) 0; border-top: 2px solid var(--paper); background: #0A0906;">
      <div class="container-wide">
        <div class="br-section-head">
          <div>
            <div class="br-label acid">■ 08 // STUDIO REALITY CHECK</div>
            <h2>Design is a discipline.<br><em class="accent">Production is a comedy.</em></h2>
          </div>
          <p>
            Four unfiltered laws of the packaging workshop forged across press inspections, substrate tolerances, and client feedback loops.
          </p>
        </div>

        <div class="br-grid-4 gs-fade">
          <!-- LAW 01 -->
          <div class="br-block-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
              <span class="br-label" style="color: #FFA366; font-size: 10px;">LAW 01 // FSSAI VS EGO</span>
              <span style="font-size: 0.8rem; color: #FFA366;">✦</span>
            </div>
            <h4 style="font-family: var(--f-display); font-size: 1.2rem; color: #FFF; margin: 0 0 0.8rem; line-height: 1.2; font-weight: 800;">"Can we make the logo 25% bigger?"</h4>
            <p style="font-family: var(--f-serif); font-size: 0.98rem; line-height: 1.7; color: rgba(240,237,230,0.78); margin: 0 0 1.5rem;">
              Sure! As long as we shrink the mandatory nutritional table, remove the allergen warning, and print the manufacturer address in 2pt font that only electron microscopes can decipher.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--line); font-family: var(--f-mono); font-size: 0.65rem; color: #FFA366; letter-spacing: 0.12em; font-weight: 700;">
              VERDICT: FSSAI WON. LOGO STAYED 18MM.
            </div>
          </div>

          <!-- LAW 02 -->
          <div class="br-block-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
              <span class="br-label" style="color: #6EE7B7; font-size: 10px;">LAW 02 // ATELIER SANITY</span>
              <span style="font-size: 0.8rem; color: #6EE7B7;">✦</span>
            </div>
            <h4 style="font-family: var(--f-display); font-size: 1.2rem; color: #FFF; margin: 0 0 0.8rem; line-height: 1.2; font-weight: 800;">Why paint oils after 45 hrs in Figma?</h4>
            <p style="font-family: var(--f-serif); font-size: 0.98rem; line-height: 1.7; color: rgba(240,237,230,0.78); margin: 0 0 1.5rem;">
              Because oil paint on raw linen doesn't send WhatsApp voice notes on Sunday morning asking for "just one small tweak". Also, linseed oil smells significantly better than vector panic.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--line); font-family: var(--f-mono); font-size: 0.65rem; color: #6EE7B7; letter-spacing: 0.12em; font-weight: 700;">
              PEDIGREE: CAVA MYSURU GOLD MEDALIST
            </div>
          </div>

          <!-- LAW 03 -->
          <div class="br-block-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
              <span class="br-label" style="color: #FCD34D; font-size: 10px;">LAW 03 // THE BRIEF PARADOX</span>
              <span style="font-size: 0.8rem; color: #FCD34D;">✦</span>
            </div>
            <h4 style="font-family: var(--f-display); font-size: 1.2rem; color: #FFF; margin: 0 0 0.8rem; line-height: 1.2; font-weight: 800;">"We want pure Scandinavian minimalism"</h4>
            <p style="font-family: var(--f-serif); font-size: 0.98rem; line-height: 1.7; color: rgba(240,237,230,0.78); margin: 0 0 1.5rem;">
              Deliverable: 1 jar loaded with 14 organic seals, 5 recycling arrows, 2 QR codes, barcode, batch number, Net Wt, MRP, and a miniature brand logo hiding in shame behind the lid.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--line); font-family: var(--f-mono); font-size: 0.65rem; color: #FCD34D; letter-spacing: 0.12em; font-weight: 700;">
              REALITY: CLUTTER ELIMINATED BY GRIDS
            </div>
          </div>

          <!-- LAW 04 -->
          <div class="br-block-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
              <span class="br-label" style="color: #93C5FD; font-size: 10px;">LAW 04 // THE DISSOLVE TIME</span>
              <span style="font-size: 0.8rem; color: #93C5FD;">✦</span>
            </div>
            <h4 style="font-family: var(--f-display); font-size: 1.2rem; color: #FFF; margin: 0 0 0.8rem; line-height: 1.2; font-weight: 800;">How fast does 30-Sec Almond Milk dissolve?</h4>
            <p style="font-family: var(--f-serif); font-size: 0.98rem; line-height: 1.7; color: rgba(240,237,230,0.78); margin: 0 0 1.5rem;">
              Exactly 30 seconds in warm water. Getting the typography weight, kerning, and dissolve video approved across 3 internal review loops took approximately 6 weeks.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--line); font-family: var(--f-mono); font-size: 0.65rem; color: #93C5FD; letter-spacing: 0.12em; font-weight: 700;">
              OUTCOME: BESTSELLING CAMPAIGN FILM
            </div>
          </div>
        </div>
      </div>
    </section>
`;

const p3DDivider = html.indexOf('<!-- INTERACTIVE 3D PACK STUDIO -->');
if (p3DDivider !== -1 && !html.includes('id="studio-realities"')) {
  html = html.slice(0, p3DDivider) + studioRealitiesBlock + '\n\n    ' + html.slice(p3DDivider);
  console.log('✓ Successfully inserted #studio-realities between #case-study and #3d-pack-studio');
}

// -------------------------------------------------------------
// 5. UNIFY #3d-pack-studio HEADER & CONTAINER
// -------------------------------------------------------------
const old3DHeadRegex = /<div style="display: flex; flex-direction: column; gap: 1\.2rem; margin-bottom: 2\.5rem;">\s*<div class="t-mono-label"[\s\S]*?<\/h2>\s*<p style="font-family: var\(--f-mono\);[\s\S]*?<\/p>\s*<\/div>\s*<\/div>/;
const unified3DHead = `<div class="br-section-head">
          <div>
            <div class="br-label acid">■ 09 // REAL-TIME 3D PACKAGING STUDIO</div>
            <h2>Touch the substrate.<br><em class="accent">Spatial GLB renders.</em></h2>
          </div>
          <p>
            Interactive 3D pack viewer with calibrated rotogravure substrates, specular reflections, and physical dieline scale inspection.
          </p>
        </div>`;

if (old3DHeadRegex.test(html)) {
  html = html.replace(old3DHeadRegex, unified3DHead);
  console.log('✓ Unified #3d-pack-studio section header');
}

// -------------------------------------------------------------
// 6. UNIFY #about SECTION
// -------------------------------------------------------------
const oldAboutRegex = /<!-- ABOUT \(Widescreen 2-Column Editorial Spread\) -->\s*<section class="section" id="about"[\s\S]*?<\/section>/;
const unifiedAbout = `<!-- ======================================================= -->
    <!-- ABOUT SECTION — THE PERSON & PEDIGREE (UNIFIED BRUTALIST) -->
    <!-- ======================================================= -->
    <section class="section" id="about" style="padding: clamp(6rem, 12vh, 10rem) 0; border-top: 2px solid var(--paper); background: #0A0906;">
      <div class="container-wide">
        <div class="br-section-head">
          <div>
            <div class="br-label acid">■ 10 // THE PERSON &amp; THE PEDIGREE</div>
            <h2>Design is how I think.<br><em class="accent">Art is how I feel.</em></h2>
          </div>
          <p>
            Bridging classical academic draftsmanship from CAVA Mysore with high-velocity FMCG commercial brand systems.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 4rem; align-items: flex-start;" class="about-grid-wrap">
          
          <!-- LEFT COLUMN: Philosophy & Bio -->
          <div>
            <p style="font-family: var(--f-serif); font-size: 1.12rem; line-height: 1.85; color: rgba(240, 237, 230, 0.88); margin-bottom: 1.4rem;">
              I’m a Bengaluru-based Art Director with a Fine Arts foundation and more than four years of commercial design leadership. At Jus’Amazin, I lead the complete visual function across brand architecture, packaging dielines, retail trade POS, multi-channel marketing, photography direction, and industrial production.
            </p>
            <p style="font-family: var(--f-serif); font-size: 1.12rem; line-height: 1.85; color: rgba(240, 237, 230, 0.88); margin-bottom: 1.4rem;">
              My core capability is connecting conceptual strategy directly to production reality: defining the visual grammar, building the modular design tokens, preparing prepress artwork, and making sure the physical package survives ink densities, substrates, and real retail lighting without compromise.
            </p>
            <p style="font-family: var(--f-serif); font-size: 1.12rem; line-height: 1.85; color: rgba(240, 237, 230, 0.88); margin-bottom: 1.4rem;">
              My <strong>Bachelor of Visual Arts (BVA) in Applied Arts</strong> from CAVA, University of Mysore (2019–2023) — where I graduated as the University Gold Medalist &amp; Topper — grounds the instinctive way I handle typography weight, color harmony, and visual composition across all commercial work.
            </p>
            <p style="font-family: var(--f-serif); font-size: 1.12rem; line-height: 1.85; color: rgba(240, 237, 230, 0.88); margin-bottom: 2rem;">
              Alongside commercial design, I co-founded <strong>Svarnart Academy</strong>, teach visual pedagogy, and maintain an active studio oil-painting practice. Those disciplines keep my observation sharp, human, and emotionally specific.
            </p>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
              <a href="/resume.pdf" download="HP_Shivaraj_Resume_2026.pdf"
                 class="br-button orange">
                <span>Download CV (PDF)</span>
                <span>↓</span>
              </a>
              <a href="#contact" class="br-button line">
                <span>Available for Opportunities</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <!-- RIGHT COLUMN: Visual Heritage & Influences in Brutalist Card -->
          <div style="border: 2px solid var(--paper); background: #12100C; padding: 2.4rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.8rem; padding-bottom: 0.8rem; border-bottom: 1px solid var(--line);">
              <span class="br-label" style="color: var(--accent);">✦ VISUAL HERITAGE &amp; PROVENANCE</span>
              <span style="font-family: var(--f-mono); font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.1em;">CANONICAL INFLUENCES</span>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div style="border-bottom: 1px solid var(--line); padding-bottom: 1.2rem;">
                <span style="font-family: var(--f-display); font-size: 1.15rem; color: #FFF; font-weight: 800; display: block; margin-bottom: 0.35rem;">Raja Ravi Varma</span>
                <span style="font-family: var(--f-serif); font-size: 0.98rem; line-height: 1.7; color: rgba(240, 237, 230, 0.78); display: block;">Color density, narrative weight, and the proof that Indian visual language can be simultaneously classical and commercially commanding.</span>
              </div>
              <div style="border-bottom: 1px solid var(--line); padding-bottom: 1.2rem;">
                <span style="font-family: var(--f-display); font-size: 1.15rem; color: #FFF; font-weight: 800; display: block; margin-bottom: 0.35rem;">Saul Bass</span>
                <span style="font-family: var(--f-serif); font-size: 0.98rem; line-height: 1.7; color: rgba(240, 237, 230, 0.78); display: block;">Structure that carries emotion — simplicity as a deliberate decision, not a default absence.</span>
              </div>
              <div style="border-bottom: 1px solid var(--line); padding-bottom: 1.2rem;">
                <span style="font-family: var(--f-display); font-size: 1.15rem; color: #FFF; font-weight: 800; display: block; margin-bottom: 0.35rem;">Herb Lubalin</span>
                <span style="font-family: var(--f-serif); font-size: 0.98rem; line-height: 1.7; color: rgba(240, 237, 230, 0.78); display: block;">Typography that functions as image — understanding that letterforms are never neutral.</span>
              </div>
              <div>
                <span style="font-family: var(--f-display); font-size: 1.15rem; color: #FFF; font-weight: 800; display: block; margin-bottom: 0.35rem;">Indian Vernacular Graphics</span>
                <span style="font-family: var(--f-serif); font-size: 0.98rem; line-height: 1.7; color: rgba(240, 237, 230, 0.78); display: block;">Shelf-confidence, vivid palette choices, and visual trust built by understanding the regional culture from the inside.</span>
              </div>
            </div>

            <!-- Provenance Badge -->
            <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--line); display: flex; align-items: center; gap: 1rem;">
              <div style="width: 44px; height: 44px; border: 1px solid var(--paper); background: var(--accent); color: #10100e; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; flex-shrink: 0;">
                ★
              </div>
              <div>
                <div style="font-family: var(--f-mono); font-size: 0.68rem; letter-spacing: 0.12em; color: var(--acid); font-weight: 800;">CAVA MYSURU GOLD MEDALIST &amp; TOPPER</div>
                <div style="font-family: var(--f-serif); font-size: 0.88rem; color: var(--paper); margin-top: 0.2rem;">Bachelor of Visual Arts (B.V.A.) &middot; Applied Arts Specialisation (2019&ndash;2023)</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>`;

if (oldAboutRegex.test(html)) {
  html = html.replace(oldAboutRegex, unifiedAbout);
  console.log('✓ Unified #about section');
}

// -------------------------------------------------------------
// 7. CLEAN UP REDUNDANT #horizontal-sec AND #svarnart
// -------------------------------------------------------------
const oldHorizRegex = /<!-- FOUR ROLES HORIZONTAL SCROLL -->[\s\S]*?<\/section>\s*<!-- SVARNART SECTION -->[\s\S]*?<\/section>/;
if (oldHorizRegex.test(html)) {
  html = html.replace(oldHorizRegex, '');
  console.log('✓ Cleaned up redundant #horizontal-sec and #svarnart');
}

// -------------------------------------------------------------
// 8. UNIFY #principles (WORKING PRINCIPLES)
// -------------------------------------------------------------
const oldPrinciplesRegex = /<!-- WORKING PRINCIPLES[\s\S]*?<\/section>/;
const unifiedPrinciples = `<!-- WORKING PRINCIPLES — UNIFIED BRUTALIST GRID -->
    <section class="section" id="principles" style="border-top: 2px solid var(--paper); border-bottom: 2px solid var(--paper); padding: clamp(6rem, 12vh, 10rem) 0; background: #0A0906;">
      <div class="container-wide">
        <div class="br-section-head">
          <div>
            <div class="br-label acid">■ 11 // CORE METHODOLOGY</div>
            <h2>Working principles.<br><em class="accent">Four convictions.</em></h2>
          </div>
          <p>
            Forged across FMCG brand rollouts, press proof inspections, and classical studio training at CAVA.
          </p>
        </div>

        <div class="br-grid-4 gs-fade">
          <div class="br-block-card">
            <div class="br-label" style="color: #D4600A; margin-bottom: 1rem; font-weight: 800;">01 / SCALABILITY</div>
            <h3 style="font-family: var(--f-display); font-size: 1.35rem; margin-bottom: 0.8rem; color: #FFF; font-weight: 800;">Systems over one-off assets</h3>
            <p style="font-family: var(--f-serif); font-size: 1.02rem; line-height: 1.75; color: rgba(240,237,230,0.8); margin: 0;">
              A strong visual system lets the brand stay coherent when the product range, channel or deadline changes.
            </p>
          </div>

          <div class="br-block-card">
            <div class="br-label" style="color: #0284C7; margin-bottom: 1rem; font-weight: 800;">02 / IMPACT</div>
            <h3 style="font-family: var(--f-display); font-size: 1.35rem; margin-bottom: 0.8rem; color: #FFF; font-weight: 800;">Shelf presence with reason</h3>
            <p style="font-family: var(--f-serif); font-size: 1.02rem; line-height: 1.75; color: rgba(240,237,230,0.8); margin: 0;">
              Distinctive packaging should attract attention first, then make the product easier to understand and trust.
            </p>
          </div>

          <div class="br-block-card">
            <div class="br-label" style="color: #059669; margin-bottom: 1rem; font-weight: 800;">03 / RIGOR</div>
            <h3 style="font-family: var(--f-display); font-size: 1.35rem; margin-bottom: 0.8rem; color: #FFF; font-weight: 800;">Production is part of design</h3>
            <p style="font-family: var(--f-serif); font-size: 1.02rem; line-height: 1.75; color: rgba(240,237,230,0.8); margin: 0;">
              A concept is only complete when it survives substrates, ink densities, dielines, printing, and real retail light.
            </p>
          </div>

          <div class="br-block-card">
            <div class="br-label" style="color: #D97706; margin-bottom: 1rem; font-weight: 800;">04 / INTUITION</div>
            <h3 style="font-family: var(--f-display); font-size: 1.35rem; margin-bottom: 0.8rem; color: #FFF; font-weight: 800;">Art brings the point of view</h3>
            <p style="font-family: var(--f-serif); font-size: 1.02rem; line-height: 1.75; color: rgba(240,237,230,0.8); margin: 0;">
              Fine art keeps the work observant, human, and emotionally specific. Order in the system, chaos in the sketchbook.
            </p>
          </div>
        </div>
      </div>
    </section>`;

if (oldPrinciplesRegex.test(html)) {
  html = html.replace(oldPrinciplesRegex, unifiedPrinciples);
  console.log('✓ Unified #principles to connected brutalist 4-column grid');
}

// -------------------------------------------------------------
// 9. UNIFY #gallery (CAREER TRAJECTORY) HEADER
// -------------------------------------------------------------
const oldGalleryHeadRegex = /<div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 1\.2rem;">\s*<div>\s*<div class="t-mono-label gs-fade">Career Trajectory \/\/ Progressive Growth<\/div>[\s\S]*?<\/div>\s*<\/div>/;
const unifiedGalleryHead = `<div class="br-section-head">
              <div>
                <div class="br-label acid">■ 12 // CAREER TRAJECTORY &amp; GROWTH</div>
                <h2>The journey so far.<br><em class="accent">Six progressive milestones.</em></h2>
              </div>
              <p>
                From academic mastery at CAVA Mysore to commercial FMCG packaging leadership and creative direction.
              </p>
            </div>`;

if (oldGalleryHeadRegex.test(html)) {
  html = html.replace(oldGalleryHeadRegex, unifiedGalleryHead);
  console.log('✓ Unified #gallery career trajectory header');
}

// -------------------------------------------------------------
// 10. UNIFY TESTIMONIALS SECTION
// -------------------------------------------------------------
const oldTestiRegex = /<!-- TESTIMONIALS -->\s*<section class="section testi-section"[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const unifiedTesti = `<!-- TESTIMONIALS — UNIFIED BRUTALIST 3-COLUMN GRID -->
    <section class="section testi-section" style="padding: clamp(6rem, 12vh, 10rem) 0; background: #0A0906; border-bottom: 2px solid var(--paper);">
      <div class="container-wide">
        <div class="br-section-head">
          <div>
            <div class="br-label acid">■ 13 // COLLABORATOR PERSPECTIVES</div>
            <h2>In their words.<br><em class="accent">Verified partnerships.</em></h2>
          </div>
          <p>
            Perspectives from founders, corporate leaders, and education partners on systems, brand coherence, and craft.
          </p>
        </div>

        <div class="br-grid-3 gs-fade">
          <!-- Testi 01: Jitin Munjal -->
          <div class="br-block-card">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="width: 44px; height: 44px; border: 1px solid var(--paper); display: flex; align-items: center; justify-content: center; font-family: var(--f-display); font-weight: 900; color: var(--accent); background: #181510;">JM</div>
              <div>
                <div style="font-family: var(--f-serif); font-weight: 700; color: #FFFFFF; font-size: 1.1rem;">Jitin Munjal</div>
                <div style="font-family: var(--f-mono); font-size: 0.72rem; color: var(--text-muted); letter-spacing: 0.05em;">Co-Founder &amp; CEO, Jus’Amazin</div>
              </div>
            </div>
            <div style="font-family: var(--f-display); font-size: 2rem; color: var(--accent); line-height: 1; margin-bottom: 0.5rem;">“</div>
            <p style="font-family: var(--f-serif); font-size: 1.05rem; line-height: 1.8; color: rgba(240,237,230,0.88); margin: 0;">
              Shiv doesn’t just design — he builds systems. The Jus Amazin packaging is one of the most coherent brand rollouts I’ve seen for a D2C brand at our scale. Every SKU told the same story.
            </p>
          </div>

          <!-- Testi 02: Shilpa Moglishetty -->
          <div class="br-block-card">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="width: 44px; height: 44px; border: 1px solid var(--paper); display: flex; align-items: center; justify-content: center; font-family: var(--f-display); font-weight: 900; color: #0284C7; background: #101518;">SM</div>
              <div>
                <div style="font-family: var(--f-serif); font-weight: 700; color: #FFFFFF; font-size: 1.1rem;">Shilpa Moglishetty</div>
                <div style="font-family: var(--f-mono); font-size: 0.72rem; color: var(--text-muted); letter-spacing: 0.05em;">Co-Founder &amp; CEO, Jus’Amazin</div>
              </div>
            </div>
            <div style="font-family: var(--f-display); font-size: 2rem; color: #0284C7; line-height: 1; margin-bottom: 0.5rem;">“</div>
            <p style="font-family: var(--f-serif); font-size: 1.05rem; line-height: 1.8; color: rgba(240,237,230,0.88); margin: 0;">
              What sets Shiv apart is his ability to blend art sensibility with commercial clarity. He understands the brief, then exceeds it — every single time.
            </p>
          </div>

          <!-- Testi 03: Openhouse Leadership -->
          <div class="br-block-card">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="width: 44px; height: 44px; border: 1px solid var(--paper); display: flex; align-items: center; justify-content: center; font-family: var(--f-display); font-weight: 900; color: #10B981; background: #101814;">OH</div>
              <div>
                <div style="font-family: var(--f-serif); font-weight: 700; color: #FFFFFF; font-size: 1.1rem;">Openhouse Team</div>
                <div style="font-family: var(--f-mono); font-size: 0.72rem; color: var(--text-muted); letter-spacing: 0.05em;">Learning Hub, Bengaluru</div>
              </div>
            </div>
            <div style="font-family: var(--f-display); font-size: 2rem; color: #10B981; line-height: 1; margin-bottom: 0.5rem;">“</div>
            <p style="font-family: var(--f-serif); font-size: 1.05rem; line-height: 1.8; color: rgba(240,237,230,0.88); margin: 0;">
              Our students love Shiv’s classes. He brings a calm, observational approach to teaching that makes even complex concepts feel intuitive and joyful.
            </p>
          </div>
        </div>
      </div>
    </section>`;

if (oldTestiRegex.test(html)) {
  html = html.replace(oldTestiRegex, unifiedTesti);
  console.log('✓ Unified testimonials section');
}

// -------------------------------------------------------------
// 11. UNIFY CONTACT FOOTER HEADER
// -------------------------------------------------------------
const oldContactHeadRegex = /<!-- LEFT: Headline -->\s*<div>\s*<div class="t-mono-label" style="color: var\(--accent\); margin-bottom: 1rem;">Available for Art Direction &amp; Brand Roles<\/div>\s*<h2 style="font-family: var\(--f-display\); font-size: clamp\(3rem, 6vw, 7rem\); line-height: 0\.9; text-transform: uppercase; margin-bottom: 1\.5rem;">[\s\S]*?<\/h2>/;
const unifiedContactHead = `<!-- LEFT: Headline -->
        <div>
          <div class="br-label acid" style="margin-bottom: 1rem;">■ 14 // INITIATE A DIALOGUE</div>
          <h2 style="font-family: var(--f-display); font-weight: 900; font-size: clamp(3rem, 5.5vw, 6.5rem); line-height: 0.95; letter-spacing: -0.05em; color: #FFFFFF; margin-bottom: 1.5rem;">
            Let’s build<br>
            something<br>
            <span style="color: var(--accent);">that earns<br>its place.</span>
          </h2>`;

if (oldContactHeadRegex.test(html)) {
  html = html.replace(oldContactHeadRegex, unifiedContactHead);
  console.log('✓ Unified #contact section header');
}

fs.writeFileSync(file, html, 'utf8');
console.log('>>> MASTER UNIFICATION COMPLETE! <<<');

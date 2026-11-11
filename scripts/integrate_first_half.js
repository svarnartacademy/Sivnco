const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Prepare the CSS rules
const brCss = `
    /* ======================================================= */
    /* BRUTALIST EDITORIAL FIRST-HALF DESIGN SYSTEM           */
    /* (Adapted from http://127.0.0.1:4173/ Ideology)        */
    /* ======================================================= */
    :root {
      --acid: #d8fc71;
      --paper: #f4f0e6;
      --line: rgba(244, 240, 230, 0.22);
    }

    .br-hero {
      position: relative;
      overflow: hidden;
      border-bottom: 2px solid var(--paper);
    }

    .br-meta, .br-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 17px 3vw;
      border-bottom: 1px solid var(--line);
      font-family: var(--f-mono);
      font-size: 11px;
      letter-spacing: 0.09em;
      text-transform: uppercase;
    }

    .br-dot {
      display: inline-block;
      width: 7px;
      height: 7px;
      background: var(--acid);
      margin-right: 8px;
    }

    .br-word {
      font-family: var(--f-display);
      font-size: clamp(80px, 19.5vw, 300px);
      font-weight: 900;
      line-height: 0.95;
      letter-spacing: -0.065em;
      margin: 0 2.6vw;
      white-space: nowrap;
      position: relative;
      z-index: 2;
      color: var(--paper);
    }

    .br-word span {
      color: var(--accent);
    }

    .br-hero-grid {
      display: grid;
      grid-template-columns: 1fr 1.08fr;
      border-top: 2px solid var(--paper);
      min-height: 440px;
    }

    .br-intro {
      padding: 36px 3vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 24px;
      border-right: 2px solid var(--paper);
    }

    .br-label {
      font-family: var(--f-mono);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .br-label.acid {
      color: var(--acid);
    }

    .br-intro h2 {
      font-family: var(--f-display);
      font-size: clamp(34px, 4.2vw, 68px);
      line-height: 1.02;
      letter-spacing: -0.04em;
      margin: 18px 0;
      font-weight: 900;
      color: #FFFFFF;
    }

    .br-intro h2 em {
      font-style: normal;
      color: var(--accent);
      display: block;
    }

    .br-intro p {
      font-family: var(--f-serif);
      font-size: 1.12rem;
      line-height: 1.75;
      max-width: 460px;
      color: rgba(240, 237, 230, 0.85);
      margin: 0;
    }

    .br-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 24px;
    }

    .br-button {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      padding: 14px 22px;
      background: var(--paper);
      color: #10100e;
      border: 1px solid var(--paper);
      font-family: var(--f-mono);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.25s ease;
    }

    .br-button.orange {
      background: var(--accent);
      border-color: var(--accent);
      color: #10100e;
    }

    .br-button.line {
      background: none;
      color: var(--paper);
      border-color: rgba(240, 237, 230, 0.4);
    }

    .br-button:hover {
      background: var(--acid);
      color: #10100e;
      border-color: var(--acid);
    }

    .br-stage {
      position: relative;
      min-height: 450px;
      background: var(--accent);
      isolation: isolate;
      overflow: hidden;
      color: #10100e;
    }

    .br-stage-grid {
      position: absolute;
      inset: 0;
      background-image: linear-gradient(rgba(16, 16, 14, 0.12) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 16, 14, 0.12) 1px, transparent 1px);
      background-size: 36px 36px;
    }

    .br-stage-word {
      position: absolute;
      top: 20px;
      left: 24px;
      right: 24px;
      font-family: var(--f-display);
      font-weight: 900;
      font-size: clamp(45px, 6vw, 98px);
      line-height: 1.05;
      letter-spacing: -0.04em;
      color: rgba(16, 16, 14, 0.18);
      pointer-events: none;
    }

    .br-model {
      position: absolute;
      inset: 15px 18%;
      width: 64%;
      height: calc(100% - 30px);
      z-index: 3;
      --poster-color: transparent;
    }

    .br-model img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      mix-blend-mode: multiply;
    }

    .br-cutout {
      position: absolute;
      margin: 0;
      border: 2px solid #10100e;
      box-shadow: 7px 7px #10100e;
      background: var(--paper);
      padding: 6px;
      z-index: 4;
      width: 136px;
      transform: rotate(-11deg);
      left: 24px;
      bottom: 36px;
      transition: transform 0.3s ease;
    }

    .br-cutout:hover {
      transform: rotate(-7deg) scale(1.05);
      z-index: 7;
    }

    .br-cutout img {
      display: block;
      width: 100%;
      height: 123px;
      object-fit: cover;
    }

    .br-cutout figcaption {
      font-family: var(--f-mono);
      font-size: 9px;
      font-weight: 800;
      padding: 7px 2px 3px;
      color: #10100e;
      letter-spacing: 0.05em;
    }

    .br-cutout.pack {
      left: auto;
      right: 22px;
      top: 100px;
      bottom: auto;
      transform: rotate(11deg);
      width: 155px;
    }

    .br-cutout.pack:hover {
      transform: rotate(7deg) scale(1.05);
      z-index: 7;
    }

    .br-stamp {
      position: absolute;
      right: 23px;
      bottom: 30px;
      border: 2px solid #10100e;
      background: var(--acid);
      color: #10100e;
      font-family: var(--f-serif);
      font-weight: 900;
      font-size: 19px;
      line-height: 0.95;
      padding: 16px;
      transform: rotate(5deg);
      z-index: 5;
      box-shadow: 4px 4px 0 #10100e;
    }

    .br-stage-caption {
      position: absolute;
      left: 20px;
      top: 16px;
      font-family: var(--f-mono);
      font-size: 10px;
      font-weight: 800;
      z-index: 6;
      letter-spacing: 0.07em;
      color: #10100e;
    }

    .br-stage-bottom {
      position: absolute;
      bottom: 12px;
      left: 25%;
      font-family: var(--f-mono);
      font-size: 9px;
      font-weight: 800;
      z-index: 6;
      color: rgba(16, 16, 14, 0.7);
      letter-spacing: 0.08em;
    }

    .br-bottom {
      border-top: 2px solid var(--paper);
      border-bottom: 0;
      padding: 15px 3vw;
    }

    .br-bottom span:nth-child(2) {
      color: var(--text-muted);
    }

    .br-bottom a {
      color: var(--acid);
      text-decoration: none;
      font-weight: 700;
    }

    .br-ticker {
      display: flex;
      overflow: hidden;
      background: var(--acid);
      color: #10100e;
      border-block: 2px solid #10100e;
      transform: rotate(-1.4deg);
      width: 104%;
      margin: 12px -2% 8px;
      padding: 14px 0;
      position: relative;
      z-index: 4;
    }

    .br-ticker-track {
      display: flex;
      white-space: nowrap;
      animation: brTicker 25s linear infinite;
      will-change: transform;
    }

    @keyframes brTicker {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }

    .br-ticker:hover .br-ticker-track {
      animation-play-state: paused;
    }

    .br-ticker span {
      font-family: var(--f-serif);
      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      padding-right: 25px;
      letter-spacing: 0.04em;
    }

    .br-index {
      padding: 80px 3vw 0;
    }

    .br-section-head {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      align-items: flex-end;
      margin-bottom: 32px;
      flex-wrap: wrap;
    }

    .br-section-head h2 {
      font-family: var(--f-display);
      font-weight: 900;
      font-size: clamp(38px, 6.4vw, 96px);
      line-height: 0.95;
      letter-spacing: -0.055em;
      margin: 14px 0 0;
      color: #FFFFFF;
    }

    .br-section-head p {
      max-width: 360px;
      font-family: var(--f-serif);
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--text-muted);
    }

    .br-paths {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border: 2px solid var(--paper);
    }

    .br-path {
      padding: 28px;
      display: flex;
      flex-direction: column;
      min-height: 250px;
      position: relative;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      background: var(--bg-color);
      color: var(--paper);
    }

    .br-path + .br-path {
      border-left: 2px solid var(--paper);
    }

    .br-path:nth-child(2) {
      background: var(--accent);
      color: #10100e;
    }

    .br-path:nth-child(2) .br-label,
    .br-path:nth-child(2) strong,
    .br-path:nth-child(2) p,
    .br-path:nth-child(2) .br-arrow {
      color: #10100e !important;
    }

    .br-path:nth-child(3) {
      background: var(--paper);
      color: #10100e;
    }

    .br-path:nth-child(3) .br-label,
    .br-path:nth-child(3) strong,
    .br-path:nth-child(3) p,
    .br-path:nth-child(3) .br-arrow {
      color: #10100e !important;
    }

    .br-path:hover {
      transform: translateY(-4px);
      z-index: 3;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
    }

    .br-path strong {
      font-family: var(--f-display);
      font-weight: 900;
      font-size: clamp(34px, 4vw, 63px);
      line-height: 1;
      letter-spacing: -0.04em;
      margin: 35px 0 17px;
    }

    .br-path p {
      font-family: var(--f-serif);
      font-size: 1.05rem;
      line-height: 1.6;
      max-width: 320px;
      margin: 0;
    }

    .br-path .br-arrow {
      position: absolute;
      top: 20px;
      right: 22px;
      font-size: 32px;
    }

    .br-structure {
      margin: 20px 0 0;
      border: 1px solid var(--line);
      padding: 20px 24px;
      background: rgba(240, 237, 230, 0.02);
    }

    .br-structure summary {
      font-family: var(--f-serif);
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--paper);
    }

    .br-structure p {
      line-height: 1.85;
      font-size: 1.05rem;
      max-width: 850px;
      padding-top: 16px;
      color: var(--text-muted);
    }

    .br-role-section {
      padding: 90px 3vw 0;
    }

    .br-role-grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr 1fr;
      border: 2px solid var(--paper);
    }

    .br-role {
      padding: 28px;
      min-height: 320px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: var(--bg-color);
      color: var(--paper);
    }

    .br-role + .br-role {
      border-left: 2px solid var(--paper);
    }

    .br-role:first-child {
      background: var(--paper);
      color: #10100e;
    }

    .br-role:first-child p {
      color: #38342D;
    }

    .br-role:first-child .br-role-status,
    .br-role:first-child h3,
    .br-role:first-child footer {
      color: #10100e;
    }

    .br-role h3 {
      font-family: var(--f-display);
      font-size: clamp(24px, 2.2vw, 32px);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.04em;
      margin: 0;
    }

    .br-role p {
      font-family: var(--f-serif);
      font-size: 1.02rem;
      line-height: 1.7;
      color: var(--text-muted);
      margin: 0;
    }

    .br-role footer {
      margin-top: auto;
      font-family: var(--f-mono);
      font-size: 11px;
      line-height: 1.6;
      font-weight: 600;
    }

    .br-role footer a {
      border-bottom: 1px solid currentColor;
      text-decoration: none;
    }

    .br-role-status {
      font-family: var(--f-mono);
      font-size: 10px;
      letter-spacing: 0.1em;
      display: flex;
      justify-content: space-between;
    }

    .br-availability {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
      padding: 24px 0;
      border-bottom: 1px solid var(--paper);
      font-family: var(--f-mono);
      font-size: 13px;
      line-height: 1.65;
      flex-wrap: wrap;
    }

    .br-archive {
      padding: 80px 3vw 0;
    }

    .br-archive details {
      border-top: 1px solid var(--line);
      padding: 24px 0;
    }

    .br-archive details:last-child {
      border-bottom: 1px solid var(--line);
    }

    .br-archive summary {
      display: grid;
      grid-template-columns: 40px 1fr auto;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      list-style: none;
    }

    .br-archive summary::-webkit-details-marker {
      display: none;
    }

    .br-archive summary span:first-child {
      font-family: var(--f-display);
      font-size: 1.3rem;
      color: var(--accent);
      font-weight: 900;
    }

    .br-archive summary strong {
      font-family: var(--f-serif);
      font-size: 1.6rem;
      font-weight: 600;
      color: #FFFFFF;
    }

    .br-archive summary span:last-child {
      font-family: var(--f-mono);
      font-size: 11px;
      color: var(--acid);
      letter-spacing: 0.1em;
    }

    .br-archive p {
      padding: 16px 0 16px 60px;
      color: var(--text-muted);
      font-family: var(--f-serif);
      font-size: 1.05rem;
      line-height: 1.7;
      max-width: 800px;
      margin: 0;
    }

    .br-archive-links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding-left: 60px;
    }

    .br-archive-links a {
      display: inline-block;
      padding: 6px 12px;
      background: rgba(240, 237, 230, 0.05);
      border: 1px solid rgba(240, 237, 230, 0.12);
      border-radius: 4px;
      font-family: var(--f-mono);
      font-size: 11px;
      color: var(--paper);
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .br-archive-links a:hover {
      background: var(--acid);
      color: #10100e;
      border-color: var(--acid);
    }

    @media (max-width: 1000px) {
      .br-hero-grid {
        grid-template-columns: 1fr;
      }
      .br-intro {
        border-right: 0;
        border-bottom: 2px solid var(--paper);
      }
      .br-paths {
        grid-template-columns: 1fr;
      }
      .br-path + .br-path {
        border-left: 0;
        border-top: 2px solid var(--paper);
      }
      .br-role-grid {
        grid-template-columns: 1fr;
      }
      .br-role + .br-role {
        border-left: 0;
        border-top: 2px solid var(--paper);
      }
    }
    @media (max-width: 700px) {
      .br-word {
        font-size: 19vw;
      }
      .br-intro h2 {
        font-size: 38px;
      }
      .br-archive summary {
        grid-template-columns: 30px 1fr;
      }
      .br-archive summary span:last-child {
        grid-column: 2;
      }
      .br-archive p,
      .br-archive-links {
        padding-left: 0;
      }
    }
`;

// Insert the CSS before </style>
if (!html.includes('.br-hero {')) {
  html = html.replace('</style>', `${brCss}\n  </style>`);
  console.log('✓ Injected .br- CSS into index.html');
}

// 2. Prepare the new brutalist first half HTML
const newFirstHalf = `
    <!-- ======================================================= -->
    <!-- BRUTALIST EDITORIAL FIRST-HALF (ADAPTED ARCHITECTURE)  -->
    <!-- ======================================================= -->
    <section class="br-hero" id="sx-top">
      <div class="br-meta">
        <span><span class="br-dot"></span>H P SHIVARAJ — A CREATIVE RECORD</span>
        <span>BENGALURU, IN / INDEPENDENT IN SPIRIT</span>
      </div>

      <h1 class="br-word">SIVNCO<span>✳</span></h1>

      <div class="br-hero-grid">
        <!-- LEFT: Manifesto & Personal Direction -->
        <div class="br-intro">
          <div>
            <div class="br-label acid">ART DIRECTOR / DESIGNER / ARTIST / EDUCATOR</div>
            <h2>Order in the system.<br><em>Chaos in the sketchbook.</em></h2>
            <p>I’m Shiv. I build brand worlds, make things by hand, and document the decisions in between. This is my portfolio—and the record behind it.</p>
            <div class="br-actions">
              <a class="br-button orange" href="#work">Explore the work <span>↘</span></a>
              <a class="br-button line" href="#roles">The person &amp; practice <span>↗</span></a>
            </div>
          </div>
          <div class="br-label" style="color: var(--text-muted); letter-spacing: 0.15em;">
            BRAND + PACKAGING + CAMPAIGNS + ART + CODE
          </div>
        </div>

        <!-- RIGHT: Physical Packaging & Art Stage -->
        <div class="br-stage" id="sx-stage">
          <div class="br-stage-grid" aria-hidden="true"></div>
          <div class="br-stage-word" aria-hidden="true">ART<br>MEETS<br>SYSTEM.</div>
          <span class="br-stage-caption">OBJECT 001 / JUS’AMAZIN / PISTACHIO BUTTER</span>

          <model-viewer class="br-model" id="sx-hero-model" src="/models/200g_jar_pistachio.glb" poster="/images/hero_packaging.jpg" alt="Interactive pistachio butter jar designed for Jus’Amazin" camera-controls auto-rotate rotation-per-second="14deg" camera-orbit="-25deg 75deg auto" shadow-intensity="1.3" exposure="1.1" interaction-prompt="none" touch-action="pan-y">
            <img slot="poster" src="/images/hero_packaging.jpg" alt="Jus’Amazin packaging while the interactive jar loads">
          </model-viewer>

          <figure class="br-cutout">
            <img src="/images/paintings/painting_18.jpg" alt="An original painting from Shiv’s art archive">
            <figcaption>THE OBSERVING EYE / ART ARCHIVE</figcaption>
          </figure>

          <figure class="br-cutout pack">
            <img src="/images/jusamazin/bars/amazon_campaign.jpg" alt="Jus’Amazin bars campaign">
            <figcaption>THE MAKING HAND / CAMPAIGN</figcaption>
          </figure>

          <span class="br-stamp">BUILT.<br>DRAWN.<br>DOCUMENTED.</span>
          <span class="br-stage-bottom" id="model-status">DRAG TO ROTATE / SCROLL TO EXPLORE</span>
        </div>
      </div>

      <div class="br-bottom">
        <span>01 / A PORTFOLIO WITH A MEMORY</span>
        <span>FINISHED WORK. UNFINISHED QUESTIONS.</span>
        <a href="#sx-map">CHOOSE YOUR WAY IN ↓</a>
      </div>
    </section>

    <!-- TILTED ACID-LIME MARQUEE TICKER -->
    <div class="br-ticker" aria-hidden="true">
      <div class="br-ticker-track">
        <span>ART DIRECTION ✳ PACKAGING SYSTEMS ✳ PERSONAL OBSERVATIONS ✳ MADE TO MEAN SOMETHING ✳ </span>
        <span>ART DIRECTION ✳ PACKAGING SYSTEMS ✳ PERSONAL OBSERVATIONS ✳ MADE TO MEAN SOMETHING ✳ </span>
        <span>ART DIRECTION ✳ PACKAGING SYSTEMS ✳ PERSONAL OBSERVATIONS ✳ MADE TO MEAN SOMETHING ✳ </span>
        <span>ART DIRECTION ✳ PACKAGING SYSTEMS ✳ PERSONAL OBSERVATIONS ✳ MADE TO MEAN SOMETHING ✳ </span>
      </div>
    </div>

    <!-- THE INDEX / THREE WAYS THROUGH (PROOF · PROCESS · PERSON) -->
    <section class="br-index" id="sx-map">
      <div class="br-section-head">
        <div>
          <div class="br-label acid">THE INDEX / THREE WAYS THROUGH</div>
          <h2>Proof. Process.<br>Person.</h2>
        </div>
        <p>For the quick introduction, the deep read, or the unplanned detour. Each is part of the same practice.</p>
      </div>

      <div class="br-paths">
        <a class="br-path" href="#work">
          <span class="br-label" style="font-size: 11px; letter-spacing: 0.15em; color: var(--accent);">01 / THE PORTFOLIO</span>
          <span class="br-arrow">↗</span>
          <strong>SEE.</strong>
          <p>Brand identities, packaging, campaigns, 3D and digital systems. The work in the world.</p>
        </a>

        <a class="br-path" href="/journal">
          <span class="br-label" style="font-size: 11px; letter-spacing: 0.15em;">02 / THE DESIGN JOURNAL</span>
          <span class="br-arrow">↗</span>
          <strong>UNPACK.</strong>
          <p>Briefs, material choices, rejected directions, production proofs. The reasoning stays with the work.</p>
        </a>

        <a class="br-path" href="/art">
          <span class="br-label" style="font-size: 11px; letter-spacing: 0.15em;">03 / ART &amp; PERSONAL DIARY</span>
          <span class="br-arrow">↗</span>
          <strong>WANDER.</strong>
          <p>Paintings, studies, visual observations and my own words. A practice that keeps becoming.</p>
        </a>
      </div>

      <details class="br-structure">
        <summary>Why I structure this site this way</summary>
        <p>The portfolio leads with visual proof. The project pages carry the full thinking: context, constraints, visual rationale, experiments, production and outcomes. The design journal connects those decisions; the art archive and personal diary keep room for the person making them. Commercial work, teaching and independent practice overlap, so the role map shows them as parallel parts of a life rather than one inflated job title.</p>
      </details>
    </section>

    <!-- THE PRACTICE / ROLES WITH THEIR CONTEXT -->
    <section class="br-role-section" id="roles">
      <div class="br-section-head">
        <div>
          <div class="br-label acid">THE PRACTICE / ROLES WITH THEIR CONTEXT</div>
          <h2>One person.<br>Different hats.</h2>
        </div>
        <p>My employed role, independent studio and academy work each have a distinct purpose and scope.</p>
      </div>

      <div class="br-role-grid">
        <!-- Role 01: Primary Employment -->
        <article class="br-role">
          <div class="br-role-status">
            <span style="font-weight: 700;">01 / PRIMARY EMPLOYMENT</span>
            <span>DEC 2024—NOW</span>
          </div>
          <h3>Design &amp;<br>Communications Manager.</h3>
          <p>Jus’Amazin Foods &amp; Beverages. Functional art direction across brand identity, packaging architecture, print, retail, campaigns, photography direction and 3D visualization—from brief to production.</p>
          <footer>
            Earlier: Visual Communicator / Packaging Designer<br>
            AUG 2023—NOV 2024 · <a href="/jusamazin">Explore the complete brand system ↗</a>
          </footer>
        </article>

        <!-- Role 02: Independent Practice -->
        <article class="br-role">
          <div class="br-role-status">
            <span style="font-weight: 700; color: var(--accent);">02 / INDEPENDENT PRACTICE</span>
            <span>2025—NOW</span>
          </div>
          <h3>Founder &amp;<br>Creative Director.</h3>
          <p>Sivnco Studio. A selective part-time practice alongside my in-house role: brand identity, packaging, art direction and visualization for FMCG, D2C and founder-led brands.</p>
          <footer>
            <a href="/in-house-designs">Independent projects ↗</a><br>
            OG Mithai · Vedic Treats · Digital experiments
          </footer>
        </article>

        <!-- Role 03: Academy & Education -->
        <article class="br-role">
          <div class="br-role-status">
            <span style="font-weight: 700; color: #10B981;">03 / ACADEMY &amp; EDUCATION</span>
            <span>JAN 2026—NOW</span>
          </div>
          <h3>Co-founder &amp;<br>Curriculum Lead.</h3>
          <p>Svarnart Academy of Music and Visual Arts. Curriculum architecture, learning experience, visual identity and digital systems connecting art, design education and Carnatic music.</p>
          <footer>
            <a href="#about">Inside the academy work ↗</a><br>
            <a href="https://svarnart.com" target="_blank" rel="noopener">Visit Svarnart ↗</a>
          </footer>
        </article>
      </div>

      <!-- Opportunities Strip -->
      <div class="br-availability">
        <div>
          <strong style="color: var(--acid);">OPEN TO THE NEXT CHAPTER.</strong><br>
          Art Director · Brand Design Lead · Packaging Design Lead
        </div>
        <div style="color: var(--text-muted);">
          Full-time onsite in Bengaluru / regional &amp; international remote / selected contracts
        </div>
        <a class="br-button orange" href="mailto:sivnco.in@gmail.com">Let’s talk ↗</a>
      </div>
    </section>

    <!-- FULL PROJECT DIRECTORY (NOTHING LOST IN THE EDIT) -->
    <section class="br-archive" id="project-index">
      <div class="br-section-head">
        <div>
          <div class="br-label acid">THE FULL DIRECTORY / NOTHING LOST IN THE EDIT</div>
          <h2>Go deeper.</h2>
        </div>
        <p>Every existing project chapter remains here: imagery, process, materials, execution and the decisions that shaped it.</p>
      </div>

      <details open>
        <summary>
          <span>01</span>
          <strong>Jus’Amazin / A complete brand world</strong>
          <span>BRAND + PACKAGING + PRODUCTION ↘</span>
        </summary>
        <p>A multi-format visual system with its own material reality: jars, pouches, cartons, bars, gifting and retail. Explore the individual product families and the operations behind them.</p>
        <div class="br-archive-links">
          <a href="/jusamazin">Complete case study ↗</a>
          <a href="/jusamazin/core-packaging">Core packaging ↗</a>
          <a href="/jusamazin/jars">Jars ↗</a>
          <a href="/jusamazin/bars">Bars ↗</a>
          <a href="/jusamazin/desi-energy-bar">Desi energy bars ↗</a>
          <a href="/jusamazin/lilstars">Lil’Stars ↗</a>
          <a href="/jusamazin/mom2b">Mom2B ↗</a>
          <a href="/jusamazin/snacks">Snacks ↗</a>
          <a href="/jusamazin/superfoods">Superfoods ↗</a>
          <a href="/jusamazin/gifting">Gifting ↗</a>
          <a href="/jusamazin/retail-pos">Retail &amp; POS ↗</a>
          <a href="/jusamazin/brand-guidelines">Brand guidelines ↗</a>
          <a href="/jusamazin/marketing">Marketing ↗</a>
          <a href="/jusamazin/management">Design management ↗</a>
          <a href="/jusamazin/3d-pack-render">3D pack studio ↗</a>
        </div>
      </details>

      <details>
        <summary>
          <span>02</span>
          <strong>Campaigns / Brand in motion</strong>
          <span>CONCEPT + DIRECTION + EXECUTION ↘</span>
        </summary>
        <p>Full campaign narratives, film and motion work, retail and ecommerce touchpoints. See how the same brand logic travels across formats.</p>
        <div class="br-archive-links">
          <a href="/campaigns">Full campaign archive ↗</a>
          <a href="/brand-assets">Brand assets ↗</a>
          <a href="/design-systems">Design systems ↗</a>
        </div>
      </details>

      <details>
        <summary>
          <span>03</span>
          <strong>Independent work / Objects &amp; systems</strong>
          <span>STUDIO + DIGITAL + EXPLORATION ↘</span>
        </summary>
        <p>Svarnart’s learning platform, OG Mithai’s packaging, Vedic Treats visualization, web development and AI-assisted concept development.</p>
        <div class="br-archive-links">
          <a href="/in-house-designs">All independent projects ↗</a>
          <a href="/web-development">Web &amp; digital systems ↗</a>
          <a href="/ai-workflow">AI workflow ↗</a>
        </div>
      </details>

      <details>
        <summary>
          <span>04</span>
          <strong>Fine art / A way of seeing</strong>
          <span>PAINTING + TEACHING + REFLECTION ↘</span>
        </summary>
        <p>The complete painting archive and education practice. My BVA in Applied Arts at CAVA, University of Mysore (2019–2023, Gold Medalist), grounds the way I approach composition, colour and visual thinking. Openhouse teaching ran from April 2025 to April 2026.</p>
        <div class="br-archive-links">
          <a href="/artist-educator">Art &amp; education archive ↗</a>
          <a href="/artist-educator/commissions">Commissioned work ↗</a>
          <a href="/art">Personal art journal ↗</a>
        </div>
      </details>
    </section>

    <!-- EXECUTIVE CINEMA THEATER SHOWCASE (60s REEL) -->
    <section class="section" id="reel" style="padding: clamp(5rem, 10vh, 7rem) 0 4rem; border-bottom: 2px solid var(--paper); background: #0A0906;">
      <div class="container-wide">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2.5rem;">
          <div>
            <div class="t-mono-label" style="color: var(--accent); letter-spacing: 0.25em; font-weight: 800;">
              [ WORK IN MOTION // 60-SECOND SHOWCASE REEL ]
            </div>
            <h2 class="h-large" style="margin: 0; font-size: clamp(2.2rem, 4.5vw, 4rem); line-height: 1.05;">
              The craft, <span class="t-serif kinetic-draw-line" style="color: var(--accent); font-style: italic;">frame by frame.</span>
            </h2>
          </div>
          <div style="font-family: var(--f-mono); font-size: 0.72rem; color: var(--text-muted); letter-spacing: 0.15em;">
            1080P SHOWCASE &middot; 30 FPS &middot; ART &middot; PACKAGING &middot; SYSTEMS
          </div>
        </div>

        <!-- Cinema Theater Frame -->
        <div style="position: relative; border-radius: 18px; overflow: hidden; border: 1px solid rgba(240,237,230,0.15); box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(212,96,10,0.15); background: #000;">
          <video id="heroRecruiterVideo"
                 poster="/images/recruiter_reel_poster.jpg"
                 playsinline
                 loop
                 muted
                 controls
                 preload="metadata"
                 style="width: 100%; aspect-ratio: 16/9; display: block; object-fit: cover;">
            <source src="/videos/recruiter_reel.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
`;

// Replace from <div class="main-wrap">\n    <!-- HERO SECTION to before <!-- SELECTED GALLERY -->
const pMainWrap = html.indexOf('<div class="main-wrap">');
const pWork = html.indexOf('<!-- SELECTED GALLERY -->');

if (pMainWrap !== -1 && pWork !== -1) {
  html = html.slice(0, pMainWrap + '<div class="main-wrap">'.length) + '\n' + newFirstHalf + '\n\n    ' + html.slice(pWork);
  console.log('✓ Successfully replaced old first half with brutalist editorial first half!');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('✓ Wrote updated index.html');

import { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas';

export const WORK_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'packaging', label: '1. Brand & Packaging' },
  { id: 'campaigns', label: '2. Campaigns & Storytelling' },
  { id: 'production', label: '3. Production & Design Ops' },
  { id: 'digital', label: '4. Digital Products & Experiences' },
  { id: 'art-edu', label: '5. Art & Education' },
];

export const WORK_PROJECTS = [
  {
    id: 'jusamazin-system',
    title: "Jus’Amazin Multi-SKU Architecture",
    subtitle: 'Building a Coherent Brand and Packaging System Across 85+ SKUs',
    client: "Jus’Amazin Foods & Beverages",
    timeframe: 'Aug 2023 — Present',
    status: 'Live Nationwide / Modern Trade & Quick Commerce',
    role: 'Design & Communications Manager (Art Direction)',
    categories: ['packaging', 'production'],
    categoryLabels: ['Brand & Packaging', 'Production & Design Ops'],
    accentColor: '#D4600A',
    heroImage: '/images/hero_packaging.jpg',
    brief: 'Direct the end-to-end visual overhaul of an Indian clean-label nutrition company. Standardize label architecture across glass jars, PET tubs, flexible pouches, and impulse bars with zero external agency retainers.',
    contribution: 'Directing the end-to-end visual function across 7 product families and 85+ commercial SKUs. Authored master brand guidelines that reduced turnaround by ~40% (internal estimate). Supervised industrial prepress color calibrations on factory runs up to 200,000+ units.',
    supportedOutcome: 'Contributed alongside product, sales, and operations to a high-growth FY24–25 period (+176% reported company revenue) by establishing unmistakable retail visibility and packaging coherence.',
    measurementPeriod: 'FY 2024–2025 Financial Year',
    visuals: [
      { src: '/images/jusamazin/jars/glass_front.jpg', caption: 'Glass front label architecture: clean weight callouts, allergen markers, and substrate contrast.' },
      { src: '/images/jusamazin/process/proof_print_06.jpg', caption: 'Industrial rotogravure cylinder proofing layout checked for seam margins and barcode scannability.' },
      { src: '/images/jusamazin/bars/shelf_display.jpg', caption: 'Retail shelf visibility trial across modern trade displays in Bengaluru.' },
      { src: '/images/jusamazin/management/almond_milk.jpg', caption: '3D spatial render pipeline for quick-commerce catalog assets.' }
    ],
    caseLink: '/jusamazin',
    diaryLink: '/visual-diary?discipline=sketches'
  },
  {
    id: 'desi-energy-bar',
    title: 'Desi Energy Bar — Structured Chaos',
    subtitle: 'Repositioning Traditional Chikki as an Authentic Modern Energy Ritual',
    client: "Jus’Amazin Foods & Beverages",
    timeframe: '2024',
    status: 'Live Commercial Star in Snacking Line',
    role: 'Concept, Illustration & Packaging Architect',
    categories: ['packaging', 'campaigns'],
    categoryLabels: ['Brand & Packaging', 'Campaigns & Visual Storytelling'],
    accentColor: '#0066FF',
    heroImage: '/images/jusamazin/desi_bar/runway_final.jpg',
    brief: 'Disrupt the sterile, imported Western gym aesthetics dominating the Indian health-snack aisle. Create a culturally grounded identity that celebrates childhood street nostalgia while commanding attention on supermarket shelves.',
    contribution: 'Conducted retail visits across 25 Bengaluru stores. Hand-illustrated kinetic characters (Gully Cricket, Lagori, Atlas Bicycle). Calibrated the electric cyan/blue background substrate to cut through muted health-aisle palettes in under 2 seconds.',
    supportedOutcome: 'Demonstrated documented sales momentum with a +70% reported increase in the snacking category post-launch; scaled from 250 to 8,000 units per month.',
    measurementPeriod: 'Q3–Q4 Post-Launch Window',
    visuals: [
      { src: '/images/jusamazin/desi_bar/runway_handdrawn.jpg', caption: 'Initial pencil sketches capturing neighborhood street games and vintage bicycle geometry.' },
      { src: '/images/jusamazin/desi_bar/runway_vector.jpg', caption: 'Translating hand-drawn sketches to production-ready Illustrator vectors with legal text hierarchy.' },
      { src: '/images/jusamazin/desi_bar/pantone_proofing.jpg', caption: 'On-site press proofing verifying electric cyan density on metallic foil substrates.' },
      { src: '/images/jusamazin/desi_bar/pack_array.jpg', caption: 'Final retail pack facings demonstrating long-range chromatic stopping power.' }
    ],
    caseLink: '/jusamazin/desi-energy-bar',
    diaryLink: '/visual-diary?discipline=rejected'
  },
  {
    id: '30-second-almond-milk',
    title: '30-Second Almond Milk (30 SAM)',
    subtitle: 'Weaponizing Ingredient Transparency in Quick Commerce',
    client: "Jus’Amazin Foods & Beverages",
    timeframe: '2024',
    status: 'Omni-Channel Campaign & Modern Trade POS',
    role: 'Campaign Art Director, Video Scriptwriter & Editor',
    categories: ['campaigns', 'packaging'],
    categoryLabels: ['Campaigns & Visual Storytelling', 'Brand & Packaging'],
    accentColor: '#5A189A',
    heroImage: '/images/jusamazin/bars/amazon_campaign.jpg',
    brief: 'Expose the 1–4% real almond content in mass-market carton milks. Launch a clean single-serve 100% almond paste sachet through digital comparison films and high-impact retail POS.',
    contribution: 'Pioneered the Royal Purple chromatic pivot on sachet packaging for thumbnail recall on Blinkit and Zepto. Scripted, storyboarded, and edited the 30-second split-screen demonstration video. Designed retail countertop shaker displays.',
    supportedOutcome: '20,000 top-funnel burst impressions, 6,000+ intent conversions, and 11,000+ cumulative sachet orders over the 45-day campaign launch window.',
    measurementPeriod: '45-Day Campaign Launch Attribution Window',
    visuals: [
      { src: '/images/jusamazin/30sad/30sad-all-set.png', caption: 'Split-screen packaging visualization showing 100% paste dissolution in 30 seconds.' },
      { src: '/images/jusamazin/process/retail_trial_02.jpg', caption: 'Physical countertop FSU holding shaker bottles and single-serve sachet packs.' },
      { src: '/images/jusamazin/30sad/almond-drink-bottle-liquid.png', caption: 'Liquid simulation and 3D studio render detailing clean ingredient credentials.' }
    ],
    caseLink: '/campaigns#almond-milk',
    diaryLink: '/visual-diary?discipline=experiments'
  },
  {
    id: 'superfoods-system',
    title: 'Superfoods Master Pouch & Modular Token System',
    subtitle: 'Capital Efficiency and Supply Chain Speed via Modular Packaging',
    client: "Jus’Amazin Foods & Beverages",
    timeframe: '2024 — 2025',
    status: 'Deployed Across 11 Snacking & Seed SKUs',
    role: 'Production Architect & Packaging Designer',
    categories: ['production', 'packaging'],
    categoryLabels: ['Production & Design Ops', 'Brand & Packaging'],
    accentColor: '#2D6A4F',
    heroImage: '/images/jusamazin/web/snack-tile.png',
    brief: 'Resolve the inventory bottleneck of printing bespoke rotogravure cylinders for low-volume specialty SKUs without sacrificing the tactile quality of a printed stand-up pouch.',
    contribution: 'Engineered a universal scenic rotogravure base pouch combined with high-precision digital overlay sticker labels. Calibrated visual alignment notches and FSSAI regulatory compliance templates.',
    supportedOutcome: 'Boosted factory labeling throughput from 100 to 400–500 pouches/hour (4x–5x gain) while drastically reducing upfront cylinder tooling capital.',
    measurementPeriod: 'Full Production Cycle 2024–2025',
    visuals: [
      { src: '/images/jusamazin/process/draft_packaging_04.jpg', caption: 'Prepress test cards validating sticker label position and allergen text legibility.' },
      { src: '/images/jusamazin/process/proof_print_06.jpg', caption: 'Master dieline specification with bleed, fold, and rotogravure registration marks.' },
      { src: '/images/jusamazin/process/proof_print_01.jpg', caption: 'Logistics fleet decals and cross-channel visual identity standards.' }
    ],
    caseLink: '/design-systems',
    diaryLink: '/visual-diary?discipline=sketches'
  },
  {
    id: 'svarnart-platform',
    title: 'Svarnart Academy PWA & Sivnco Digital Platform',
    subtitle: 'In-House Engineered Educational & Creative Web Platforms',
    client: 'Svarnart Academy & Sivnco Studio',
    timeframe: '2025 — 2026',
    status: 'Live in Production',
    role: 'Co-Founder, UI/UX Architect & Full-Stack Developer',
    categories: ['digital', 'production'],
    categoryLabels: ['Digital Products & Experiences', 'Production & Design Ops'],
    accentColor: '#C89B3C',
    heroImage: '/images/jusamazin/web/1-for-web.webp',
    brief: 'Design and build an offline-capable Progressive Web App for classical art students and parents with zero recurring SaaS dependencies, alongside an immersive 3D packaging showcase portfolio.',
    contribution: 'Crafted the full design system (tokens, components, typography). Built the Next.js frontend with Tailwind CSS, custom GSAP scroll coordinates, Lenis physics, interactive WebGL glTF 3D model viewer, and UPI/Razorpay payment intent.',
    supportedOutcome: 'Achieved Lighthouse 95+ performance scores, <1.8s mobile load times, zero SaaS hosting costs, and self-hosted 360° interactive 3D model inspection.',
    measurementPeriod: 'Continuous Live Deployment',
    visuals: [
      { src: '/images/jusamazin/web/web-brand-intro.webp', caption: 'Responsive e-commerce storefront structure highlighting brand world and ingredient philosophy.' },
      { src: '/images/jusamazin/web/web-food-intro.webp', caption: 'Food catalog with category filtering and clear nutritional breakdowns.' },
      { src: '/images/jusamazin/web/about-us-in-website.webp', caption: 'Interactive story layout detailing company origins and clean-label standards.' }
    ],
    caseLink: '/web-development',
    diaryLink: '/visual-diary?discipline=experiments'
  },
  {
    id: 'art-pedagogy',
    title: 'Classical Foundation, Pedagogy & 19 CAVA Art Plates',
    subtitle: 'Academic Fine Art Rigor Informing Commercial Design Systems',
    client: 'CAVA, University of Mysore / Openhouse / Svarnart Academy',
    timeframe: '2019 — Present',
    status: 'Ongoing Fine Art & Pedagogical Practice',
    role: 'Artist, Educator & Gold Medalist',
    categories: ['art-edu'],
    categoryLabels: ['Art & Education'],
    accentColor: '#D4600A',
    heroImage: '/images/paintings/painting_1.jpg',
    brief: 'Maintain an active fine art and teaching practice that grounds commercial packaging in authentic anatomical observation, chiaroscuro lighting, and pedagogical clarity.',
    contribution: 'Graduated as Gold Medalist & University Topper from CAVA (BVA Applied Arts, 2019–2023). Mentored 200+ students across age groups at Openhouse and Svarnart Academy. Authored fine art curriculum linking Carnatic music and visual geometry.',
    supportedOutcome: 'University Gold Medalist & Topper; 19 master CAVA academic plates preserved; annual student showcases exhibiting 120+ artworks in Bengaluru.',
    measurementPeriod: '2019–Present Academic & Teaching Record',
    visuals: [
      { src: '/images/paintings/painting_1.jpg', caption: 'Wildlife Fur & Texture Study: Micro-textural rendering and hair follicle volume.' },
      { src: '/images/paintings/painting_6.jpg', caption: 'Classical Form & Sari Study: Drapery tension, weight, and anatomical mass.' },
      { src: '/images/paintings/painting_8.jpg', caption: 'Bengaluru Streetlife: Plein air watercolor capturing tropical midday light and shadow.' },
      { src: '/images/paintings/painting_9.jpg', caption: 'Classical Plaster Cast: Subtle plane changes and chiaroscuro value scales.' }
    ],
    caseLink: '/artist-educator',
    diaryLink: '/visual-diary?discipline=fine-art'
  }
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return WORK_PROJECTS;
    return WORK_PROJECTS.filter(p => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <Head>
        <title>Selected Work &amp; Case Studies (5 Categories) — H P Shivaraj | SIVNCO</title>
        <meta name="description" content="Commercial packaging architecture, brand design systems, campaigns, digital products, and fine art by H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/work" />
      </Head>

      <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.18)" secondaryColor="rgba(216, 252, 113, 0.08)" />
      <Navbar />

      <main className="min-h-screen bg-[#0A0906] text-[#F0EDE6] pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto font-sans relative z-10">
        
        {/* Header */}
        <header className="br-section-head border-b border-white/10 pb-10 mb-10">
          <div>
            <div className="br-label acid mb-3">
              ■ 01 // PORTFOLIO DIRECTORY &middot; THE 5 WORK CATEGORIES
            </div>

            <h1 style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)', fontWeight: 900, fontSize: 'clamp(38px, 6.4vw, 88px)', lineHeight: 0.96, letterSpacing: '-0.05em', color: '#FFFFFF', margin: '12px 0 0' }}>
              Work that speaks.<br />
              <span className="accent">Proof on the shelf.</span>
            </h1>
          </div>

          <p style={{ maxWidth: '520px', color: 'rgba(240,237,230,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Every project presented here reflects actual ownership: briefs unpacked, prototypes cut, press proofs calibrated, 
            code committed, and verified commercial or pedagogical outcomes. Use the 5 category filters below to explore specific disciplines.
          </p>

          <div className="w-full flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/08 text-xs font-mono text-[#F0EDE6]/50 uppercase tracking-widest">
            <span>5 Core Disciplines</span>
            <span>✦</span>
            <span>85+ Commercial SKUs</span>
            <span>✦</span>
            <span>Final Output Displayed Early</span>
          </div>
        </header>

        {/* 5-Category Filter Tabs */}
        <div className="mb-12">
          <div className="text-[11px] font-mono tracking-widest uppercase text-[#D4600A] mb-3">
            Select Discipline Filter:
          </div>
          <div className="flex flex-wrap gap-2.5">
            {WORK_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#D4600A] text-[#0A0906] font-bold shadow-[0_0_18px_rgba(212,96,10,0.5)]'
                    : 'bg-white/5 text-[#F0EDE6]/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List — Canonical Case Studies */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="bg-[#0F0E0B] border border-white/12 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:border-white/25"
            >
              {/* Project Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/08 text-xs font-mono">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#D4600A] font-bold">CASE 0{idx + 1}</span>
                  <span className="text-[#F0EDE6]/30">/</span>
                  <span className="text-[#F0EDE6]/80">{project.client}</span>
                  <span className="text-[#F0EDE6]/30">/</span>
                  <span className="text-[#F0EDE6]/60">{project.timeframe}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.categoryLabels.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase bg-white/5 text-[#D8FC71] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Row: Final Output Hero + Core Information */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
                {/* 1. Final Output Early (Hero Visual) */}
                <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/15 bg-black/50 aspect-16/10 relative group">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#F0EDE6]/80 flex items-center justify-between">
                    <span>Status: {project.status}</span>
                    <span className="text-[#D4600A]">Verified Output ✓</span>
                  </div>
                </div>

                {/* 2. Context & Contribution Breakdown */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#D4600A]">
                    {project.role}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#D8FC71] font-medium leading-relaxed">
                    {project.subtitle}
                  </p>
                  
                  <div className="pt-2 text-sm text-[#F0EDE6]/75 leading-relaxed space-y-3">
                    <div>
                      <strong className="text-white font-semibold">Context &amp; Brief: </strong>
                      {project.brief}
                    </div>
                    <div>
                      <strong className="text-white font-semibold">My Contribution: </strong>
                      {project.contribution}
                    </div>
                  </div>

                  {/* 5. Supported Outcome */}
                  <div className="p-4 rounded-xl bg-[#D4600A]/10 border border-[#D4600A]/30 text-xs sm:text-sm">
                    <div className="font-mono text-[10px] text-[#D4600A] uppercase tracking-widest font-bold mb-1">
                      Supported Outcome ({project.measurementPeriod}):
                    </div>
                    <div className="text-[#F0EDE6]/90 font-medium">
                      {project.supportedOutcome}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Selected 3 to 6 Visuals with Informative Captions */}
              <div className="border-t border-white/08 pt-8 mb-8">
                <div className="text-xs font-mono uppercase tracking-widest text-[#F0EDE6]/50 mb-4">
                  Selected Production &amp; Execution Visuals ({project.visuals.length} Views):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.visuals.map((vis, vIdx) => (
                    <div
                      key={vIdx}
                      className="rounded-xl overflow-hidden border border-white/10 bg-black/40 flex flex-col"
                    >
                      <div className="aspect-4/3 overflow-hidden bg-black/60">
                        <img
                          src={vis.src}
                          alt={vis.caption}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 text-[11px] text-[#F0EDE6]/70 leading-relaxed font-sans flex-1 bg-[#0A0906]">
                        {vis.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Case Study & Diary Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/08">
                <div className="flex items-center gap-3">
                  <Link
                    href={project.caseLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4600A] text-[#0A0906] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#D8FC71] transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <span>→</span>
                  </Link>

                  {project.diaryLink && (
                    <Link
                      href={project.diaryLink}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F0EDE6] border border-white/10 font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>View Diary &amp; Process</span>
                      <span>↗</span>
                    </Link>
                  )}
                </div>

                <div className="text-[11px] font-mono text-[#F0EDE6]/40 uppercase">
                  Canonical Case Reference
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

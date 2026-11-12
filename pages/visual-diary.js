import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas';
import { ART_PLATES, JOURNAL_RECORDS } from '../lib/site-data';

// ─── VISUAL DIARY DATA ENTRIES ───────────────────────────────────────────────

const DIARY_ITEMS = [
  // ── 01. SKETCHES & CONCEPTS ──
  {
    id: 'sketch-desi-bar-gully',
    discipline: 'sketches',
    badge: 'CONCEPT',
    badgeColor: '#D4600A',
    year: '2024',
    title: 'Desi Energy Bar — Hand-Drawn Gully Cricket & Nostalgia Ideation',
    medium: 'Graphite Pencil on Paper & Digital Inking',
    dimensions: 'A4 Sketchbook',
    img: '/images/jusamazin/desi_bar/runway_handdrawn.jpg',
    summary: 'Initial spontaneous ideation capturing post-school street play in Indian neighborhoods: raw games of Lagori, Gully Cricket, and the iconic vintage Atlas bicycle silhouette.',
    reflection: 'Western energy bars rely on sterile gym vectors. To create genuine emotional pull, the packaging needed to evoke the scent of evening chikki and neighborhood street cricket before the consumer reads a single calorie statistic.',
    caseLink: '/jusamazin/desi-energy-bar',
    caseTitle: 'Desi Energy Bar Case Study'
  },
  {
    id: 'sketch-claims-icons',
    discipline: 'sketches',
    badge: 'CONCEPT',
    badgeColor: '#D4600A',
    year: '2024',
    title: 'Claim Icon Explorations — No Liquid Glucose & Zero Refined Sugar',
    medium: 'Ink Marker on Graph Layout Pad',
    dimensions: 'Field Sketch Pad',
    img: '/images/jusamazin/process/draft_packaging_05.jpg',
    summary: 'Iterative explorations structuring the front-of-pack trust hierarchy. Exploring geometric circular badges vs. dynamic ribbon callouts.',
    reflection: 'Indian consumers are bombarded by misleading "healthy" claims. The iconography had to look authoritative and medical without losing its warmth.',
    caseLink: '/jusamazin',
    caseTitle: 'Jus’Amazin Packaging System'
  },
  {
    id: 'sketch-geometric-foundations',
    discipline: 'sketches',
    badge: 'FINE ART STUDY',
    badgeColor: '#10B981',
    year: '2019',
    title: 'Planar Anatomy & Volume Construction Foundations',
    medium: 'Graphite & Charcoal on Cartridge Sheet',
    dimensions: 'Imperial (22 × 30 in)',
    img: '/images/paintings/painting_10.jpg',
    summary: 'CAVA academic foundation exercise breaking down organic anatomical contours into faceted planar geometric blocks.',
    reflection: 'The discipline of reducing complex human curves into structural planes during my first year at CAVA directly informed how I model 3D packaging meshes in Blender and WebGL today.',
    caseLink: '/#3d-pack-studio',
    caseTitle: '3D Pack Studio'
  },
  {
    id: 'sketch-urban-ink',
    discipline: 'sketches',
    badge: 'FINE ART STUDY',
    badgeColor: '#10B981',
    year: '2021',
    title: 'Urban Architecture Multi-Point Vanishing Grid',
    medium: 'Linear Archival Ink on Textured Board',
    dimensions: '16 × 20 in',
    img: '/images/paintings/painting_12.jpg',
    summary: 'Field perspective study of heritage Mysuru street architecture examining foreshortening, iron railings, and vanishing lines.',
    reflection: 'Strict linear perspective teaches you that every angle has an origin. I apply the same vanishing grid discipline when structuring 5-foot retail FSU units for trade expos.',
    caseLink: '/campaigns#retail-spatial',
    caseTitle: 'Retail POS & Spatial Display'
  },

  // ── 02. REJECTED DIRECTIONS & ITERATIONS ──
  {
    id: 'rejected-desi-sterile-tech',
    discipline: 'rejected',
    badge: 'REJECTED DIRECTION',
    badgeColor: '#EF4444',
    year: '2024',
    title: 'The Bold Tech Direction — Rejected Clinical Wellness Route',
    medium: 'Digital Vector Mockup',
    dimensions: '100% Scale Packaging Proof',
    img: '/images/jusamazin/desi_bar/runway_layout.jpg',
    summary: 'An early iteration exploring high-contrast minimalist typography, sans-serif Swiss grids, and gym-supplement aesthetics.',
    reflection: 'Why it was rejected: It looked like every other protein bar imported from the West. It solved readability but failed cultural resonance. Killing this direction cleared the way for the nostalgic "Structured Chaos" thesis.',
    caseLink: '/jusamazin/desi-energy-bar',
    caseTitle: 'Desi Energy Bar Case Study'
  },
  {
    id: 'rejected-white-pouch-system',
    discipline: 'rejected',
    badge: 'REJECTED DIRECTION',
    badgeColor: '#EF4444',
    year: '2024',
    title: 'Minimal White Pouch Base — Superfoods Field Test Failure',
    medium: 'Physical Sample Mockup on Stand-Up Foil',
    dimensions: '500g Stand-Up Pouch',
    img: '/images/jusamazin/process/draft_packaging_06.jpg',
    summary: 'Initial attempt at clean minimalism using an unprinted white pouch base with pastel adhesive label overlays.',
    reflection: 'Why it was rejected: During retail audits in Bengaluru modern trade, the white pouch washed out completely under harsh fluorescent supermarket lighting and picked up warehouse handling scuffs. We pivoted to rich scenic rotogravure flood-coats.',
    caseLink: '/campaigns#superfoods',
    caseTitle: 'Superfoods Universal Pouch'
  },
  {
    id: 'rejected-lilstars-palette',
    discipline: 'rejected',
    badge: 'REJECTED DIRECTION',
    badgeColor: '#EF4444',
    year: '2025',
    title: 'Muted Earth Tones for Kids Nutrition — Rejection & Pivot',
    medium: 'CMYK Proof Print',
    dimensions: 'Carton Box Flat Layout',
    img: '/images/jusamazin/lilstars/pancake_berry_blast.png',
    summary: 'Early prototype utilizing soft muted pastels to signal "organic cleanliness" to parents.',
    reflection: 'Why it was rejected: Focus groups with children showed immediate indifference. Children buy with immediate optic dopamine; parents buy with ingredient facts. We pivoted to the dual-tier system: electric berry and sunny yellow for kids, clinical certified claim boxes for parents.',
    caseLink: '/campaigns#lilstars-nutrition',
    caseTitle: 'Lil’Stars Kids Campaign'
  },

  // ── 03. CREATIVE INFLUENCES & REFLECTIONS ──
  {
    id: 'influence-ravi-varma',
    discipline: 'influences',
    badge: 'FINE ART STUDY',
    badgeColor: '#10B981',
    year: '2022',
    title: 'Raja Ravi Varma & Classical Form: Drapery & Saree Tension',
    medium: 'Academic Oil & Tempera on Canvas Board',
    dimensions: '20 × 28 in',
    img: '/images/paintings/painting_6.jpg',
    summary: 'Rigorous CAVA study examining how classical Indian artists anchored divine myth in tangible European academic chiaroscuro.',
    reflection: 'Ravi Varma understood that to make an Indian story revered, you must render the fabric with absolute physical honesty. That lesson applies directly to packaging: Indian heritage products don’t need kitsch; they need uncompromising production finish.',
    caseLink: '/artist-educator',
    caseTitle: 'Art & Academic Pedigree'
  },
  {
    id: 'influence-street-typography',
    discipline: 'influences',
    badge: 'CONCEPT',
    badgeColor: '#D4600A',
    year: '2023',
    title: 'Lubalin Simplicity Meets Vernacular Indian Signboards',
    medium: 'Vector Typography & Hand Lettering',
    dimensions: 'Digital Typographic Spec',
    img: '/images/jusamazin/desi_bar/runway_typo.jpg',
    summary: 'Synthesis of Herb Lubalin’s tight ligatures and the bold hand-painted letterforms found on South Indian highway truck tails and chai kiosks.',
    reflection: 'Western design schools preach neutral whitespace. But Indian visual culture has always communicated through chromatic saturation and dense, rhythmic letterforms. Good design respects the visual grammar of the land it speaks to.',
    caseLink: '/jusamazin/desi-energy-bar',
    caseTitle: 'Desi Energy Bar Case Study'
  },
  {
    id: 'influence-pigment-substrate',
    discipline: 'influences',
    badge: 'FINE ART STUDY',
    badgeColor: '#10B981',
    year: '2020',
    title: 'Studio Still Life: Clay Porosity, Wood Grain & Ambient Bounce',
    medium: 'Academic Oil Study on Canvas',
    dimensions: '18 × 24 in',
    img: '/images/paintings/painting_22.jpg',
    summary: 'Study in the tactile contrast between unglazed terracotta pots, aged studio wood, and directional shadow decay.',
    reflection: 'How an earthen pot absorbs light is identical to how uncoated unbleached kraft board absorbs PMS inks. Understanding physical material absorption in painting prevents catastrophic color shifts on factory press runs.',
    caseLink: '/design-systems',
    caseTitle: 'Production & Design Operations'
  },

  // ── 04. FINE ART & COMMISSIONS (19 CAVA PLATES) ──
  ...ART_PLATES.map(plate => ({
    id: `art-plate-${plate.id}`,
    discipline: 'fine-art',
    badge: 'FINE ART STUDY',
    badgeColor: '#10B981',
    year: plate.year,
    title: `Plate ${plate.plate}: ${plate.title}`,
    medium: plate.medium,
    dimensions: 'Original Fine Art Work — CAVA Mysuru',
    img: plate.img,
    summary: plate.notes,
    reflection: `Academic fine arts foundation under CAVA (Chamarajendra Academy of Visual Arts), University of Mysore. University Gold Medalist & Topper (2019–2023). Every observational technique directly informs commercial prepress and 3D lighting.`,
    caseLink: '/artist-educator',
    caseTitle: 'Art & Academic Practice'
  })),

  // ── 05. MOTION, 3D & AI EXPERIMENTS ──
  {
    id: 'exp-3d-glb-jar',
    discipline: 'experiments',
    badge: 'EXPERIMENT',
    badgeColor: '#8B5CF6',
    year: '2025',
    title: 'Procedural Glass Caustics & Normal-Mapped 3D Packaging',
    medium: 'Blender 3D, Substance 3D & WebGL glTF',
    dimensions: 'Interactive Real-Time GLB',
    img: '/images/hero_packaging.jpg',
    summary: 'Interactive real-time 3D model of the 200g Pistachio Butter jar with calibrated refractive index, inner nut paste displacement, and gold foil lid reflection.',
    reflection: 'Quick-commerce listings on Blinkit and Zepto require 1:1 photorealism at thumbnail scale. Eliminating slow photography photo-shoots by establishing a procedural 3D model asset library cut marketing asset turnaround by days.',
    caseLink: '/#3d-pack-studio',
    caseTitle: '3D Pack Studio'
  },
  {
    id: 'exp-veo-motion',
    discipline: 'experiments',
    badge: 'EXPERIMENT',
    badgeColor: '#8B5CF6',
    year: '2025',
    title: 'Prompt-Engineered Generative Animation with Google Veo',
    medium: 'Generative Video AI Pipeline + Frame-by-Frame Touchups',
    dimensions: '1080 × 1920 9:16 Social Reels',
    img: '/images/jusamazin/lilstars/pancake_choco_delight.png',
    summary: 'Cinematic prompt engineering directing playful animal characters pouring clean batter and flipping golden millet pancakes for Lil’Stars.',
    reflection: 'AI is not a replacement for creative judgment; it is a hyper-speed storyboard engine. 80% of generated frames contain anatomical glitches or brand inconsistencies. My job was editing, color-correcting, and ensuring brand fidelity.',
    caseLink: '/ai-workflow',
    caseTitle: 'AI Workflow Pipeline'
  },
  {
    id: 'exp-press-run-footage',
    discipline: 'experiments',
    badge: 'WORK IN PROGRESS',
    badgeColor: '#3B82F6',
    year: '2025',
    title: 'Factory Press Proofing & Rotogravure Cylinder Tolerances',
    medium: '1080p Industrial Factory Press Video',
    dimensions: 'Rotogravure Production Run',
    img: '/images/jusamazin/process/retail_trial_02.jpg',
    summary: 'Live factory documentation of high-speed rotogravure dieline proofing, ink viscosity checks, and substrate tension on industrial runs exceeding 200,000 units.',
    reflection: 'A digital mockup is a hypothesis. The factory floor is the truth. Watching ink shear under cylinder rollers at 180 meters per minute is where design becomes real.',
    caseLink: '/jusamazin',
    caseTitle: 'Jus’Amazin Packaging Architecture'
  },

  // ── 06. TEACHING & CURRICULUM DEVELOPMENT ──
  {
    id: 'pedagogy-svarnart-curriculum',
    discipline: 'pedagogy',
    badge: 'PEDAGOGY',
    badgeColor: '#0EA5E9',
    year: '2026',
    title: 'Svarnart Academy Interdisciplinary Pedagogy: Rhythm & Form',
    medium: 'Curriculum Architecture & Pedagogical Syllabus',
    dimensions: 'Structured Learning Modules',
    img: '/images/paintings/painting_16.jpg',
    summary: 'Co-founded with my wife in Bengaluru. Bridges Carnatic musical rhythm with traditional fine art and contemporary visual design fundamentals.',
    reflection: 'Teaching forces you to articulate the intuition you normally take for granted. Explaining tonal contrast to a 10-year-old makes you a significantly clearer Art Director when briefing packaging printers.',
    caseLink: '/artist-educator',
    caseTitle: 'Art & Pedagogy Portfolio'
  },
  {
    id: 'pedagogy-openhouse-drawing',
    discipline: 'pedagogy',
    badge: 'PEDAGOGY',
    badgeColor: '#0EA5E9',
    year: '2025',
    title: 'Teaching Observational Thinking: Negative Space at Openhouse',
    medium: 'Pedagogical Workshop Modules & Demonstrations',
    dimensions: 'Observational Art Curriculum',
    img: '/images/paintings/painting_8.jpg',
    summary: 'Taught observational drawing, chiaroscuro value scales, and spatial reasoning to young learners at Openhouse Learning Hub, Bengaluru.',
    reflection: 'Young minds immediately unlock drawing when taught to see negative space—drawing the space inside a cup handle rather than the handle. Shifting perceptual frames is the core of all creative problem solving.',
    caseLink: '/artist-educator',
    caseTitle: 'Art & Pedagogy'
  },

  // ── 07. EARLIER PROJECTS & CAREER PROGRESSION ──
  {
    id: 'progression-refresh-kid',
    discipline: 'progression',
    badge: 'COMMISSIONED',
    badgeColor: '#EAB308',
    year: '2022',
    title: 'Refresh Kid LLC — US Remote Educational Interface Graphics',
    medium: 'Figma, Vector Kits & Asynchronous Cross-Timezone Handoff',
    dimensions: 'Digital Marketing & Social Kits',
    img: '/images/paintings/painting_11.jpg',
    summary: 'Designed educational marketing collateral, curriculum decks, and social media creative kits for a US-based EdTech platform during academic tenure.',
    reflection: 'My first long-term remote international contract taught me the discipline of self-documenting design files and asynchronous precision under high-speed deadlines.',
    caseLink: '/#roles',
    caseTitle: 'Career Trajectory'
  },
  {
    id: 'progression-cava-gold-medal',
    discipline: 'progression',
    badge: 'FINE ART STUDY',
    badgeColor: '#10B981',
    year: '2023',
    title: 'CAVA University of Mysore — BVA Applied Arts Gold Medalist',
    medium: 'Comprehensive 4-Year Academic Portfolio (2019–2023)',
    dimensions: 'Applied Arts & Visual Communication',
    img: '/images/paintings/painting_4.jpg',
    summary: 'Awarded University Gold Medal and Top Rank for academic excellence across classical typography, packaging geometry, lithography, and commercial advertising.',
    reflection: 'Four uninterrupted years of drawing from life, mixing physical pigments, and hand-cutting dielines established the standard of craft that governs everything I produce today.',
    caseLink: '/artist-educator',
    caseTitle: 'Academic Pedigree'
  }
];

const DISCIPLINES = [
  { id: 'all', label: 'All Entries' },
  { id: 'sketches', label: 'Sketches & Concepts' },
  { id: 'rejected', label: 'Rejected Directions' },
  { id: 'influences', label: 'Influences & Reflections' },
  { id: 'fine-art', label: 'Fine Art & Plates' },
  { id: 'experiments', label: 'Motion, 3D & AI' },
  { id: 'pedagogy', label: 'Teaching & Pedagogy' },
  { id: 'progression', label: 'Career Progression' },
];

const YEARS = ['all', '2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019'];

export default function VisualDiary() {
  const router = useRouter();
  const dialogRef = useRef(null);
  const [activeDiscipline, setActiveDiscipline] = useState('all');
  const [activeYear, setActiveYear] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Honour links from project cases and browser back/forward navigation.
  useEffect(() => {
    if (!router.isReady) return;
    const discipline = Array.isArray(router.query.discipline) ? router.query.discipline[0] : router.query.discipline;
    const year = Array.isArray(router.query.year) ? router.query.year[0] : router.query.year;
    setActiveDiscipline(DISCIPLINES.some(d => d.id === discipline) ? discipline : 'all');
    setActiveYear(YEARS.includes(year) ? year : 'all');
  }, [router.isReady, router.query.discipline, router.query.year]);

  useEffect(() => {
    if (!activeModalItem) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = dialogRef.current;
    dialog?.querySelector('button')?.focus();
    const trapFocus = (event) => {
      if (event.key !== 'Tab' || !dialog) return;
      const controls = [...dialog.querySelectorAll('button, a[href], [tabindex="0"]')].filter(el => !el.disabled);
      const first = controls[0], last = controls[controls.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', trapFocus);
      previousFocus?.focus?.();
    };
  }, [Boolean(activeModalItem)]);

  // Filter items
  const filteredItems = useMemo(() => {
    return DIARY_ITEMS.filter(item => {
      const matchDisc = activeDiscipline === 'all' || item.discipline === activeDiscipline;
      const matchYear = activeYear === 'all' || item.year === activeYear;
      return matchDisc && matchYear;
    });
  }, [activeDiscipline, activeYear]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKey = (e) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') setActiveModalItem(null);
      if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex(i => i.id === activeModalItem.id);
        if (idx !== -1 && idx < filteredItems.length - 1) {
          setActiveModalItem(filteredItems[idx + 1]);
        }
      }
      if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex(i => i.id === activeModalItem.id);
        if (idx > 0) {
          setActiveModalItem(filteredItems[idx - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeModalItem, filteredItems]);

  return (
    <>
      <Head>
        <title>Visual Diary &amp; Creative Record — H P Shivaraj | SIVNCO</title>
        <meta name="description" content="Sketches, rejected directions, fine art studies, 3D experiments, pedagogy, and reflections documenting the creative progression of H P Shivaraj." />
        <link rel="canonical" href="https://sivnco.in/visual-diary" />
      </Head>

      <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.18)" secondaryColor="rgba(216, 252, 113, 0.08)" />
      <Navbar />

      <main className="min-h-screen bg-[#0A0906] text-[#F0EDE6] pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto font-sans relative z-10">
        
        {/* Editorial Header */}
        <header className="br-section-head border-b border-[#F0EDE6]/10 pb-10 mb-10">
          <div>
            <div className="br-label acid mb-3">
              ■ 02 // PRIMARY ARCHIVE &middot; THE COMPLETE VISUAL DIARY
            </div>

            <h1 style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)', fontWeight: 900, fontSize: 'clamp(38px, 6.4vw, 88px)', lineHeight: 0.96, letterSpacing: '-0.05em', color: '#FFFFFF', margin: '12px 0 0' }}>
              Order in the system.<br />
              <span className="accent">Chaos in the sketchbook.</span>
            </h1>
          </div>

          <p style={{ maxWidth: '520px', color: 'rgba(240,237,230,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            This visual diary documents the full creative progression of H P Shivaraj. Here live the raw pencil sketches, 
            rejected directions that shaped breakthroughs, classical CAVA academic studies, procedural 3D tests, and teaching reflections. 
            Nothing of the creative journey is hidden.
          </p>

          <div className="w-full flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F0EDE6]/08 text-xs font-mono text-[#F0EDE6]/50 uppercase tracking-widest">
            <span>{DIARY_ITEMS.length} Recorded Artifacts</span>
            <span>✦</span>
            <span>Filterable by Discipline &amp; Year</span>
            <span>✦</span>
            <span>Click any item for full provenance</span>
          </div>
        </header>

        {/* Dual-Axis Filter Controls */}
        <div className="mb-10 space-y-5">
          {/* Discipline Filters */}
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#D4600A] mb-2.5">
              Filter by Discipline:
            </div>
            <div className="flex flex-wrap gap-2">
              {DISCIPLINES.map(d => (
                <button
                  key={d.id}
                  onClick={() => setActiveDiscipline(d.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    activeDiscipline === d.id
                      ? 'bg-[#D4600A] text-[#0A0906] font-bold shadow-[0_0_16px_rgba(212,96,10,0.5)]'
                      : 'bg-white/5 text-[#F0EDE6]/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filters */}
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#D4600A] mb-2.5">
              Filter by Year:
            </div>
            <div className="flex flex-wrap gap-2">
              {YEARS.map(y => (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    activeYear === y
                      ? 'bg-[#D8FC71] text-[#0A0906] font-bold shadow-[0_0_14px_rgba(216,252,113,0.4)]'
                      : 'bg-white/5 text-[#F0EDE6]/60 hover:bg-white/10 hover:text-white border border-white/08'
                  }`}
                >
                  {y === 'all' ? 'All Years' : y}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Count Feedback */}
        <div className="text-xs font-mono text-[#F0EDE6]/40 mb-6 uppercase tracking-wider">
          Showing {filteredItems.length} of {DIARY_ITEMS.length} entries
        </div>

        {/* Visual Diary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <article
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${item.title}`}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveModalItem(item);
                }
              }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0F0E0B]/80 hover:bg-[#14120D] transition-all duration-300 hover:border-[#D4600A]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
            >
              {/* Media Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-black/40">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold"
                    style={{
                      background: 'rgba(10,9,6,0.85)',
                      color: item.badgeColor,
                      border: `1px solid ${item.badgeColor}55`,
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    {item.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[#F0EDE6]/70 bg-black/60 backdrop-blur-sm border border-white/10">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Text Card */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#D4600A] uppercase tracking-wider mb-1.5">
                    {item.medium}
                  </div>
                  <h3 className="font-bold text-lg text-[#F0EDE6] group-hover:text-[#D4600A] transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#F0EDE6]/65 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/08 flex items-center justify-between text-xs font-mono text-[#D8FC71]">
                  <span>Inspect Provenance</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed Modal Viewer */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="diary-entry-title"
              className="bg-[#0F0E0B] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4600A] hover:text-black transition-colors flex items-center justify-center font-mono text-sm border border-white/20 text-[#F0EDE6]"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                  style={{
                    background: `${activeModalItem.badgeColor}22`,
                    color: activeModalItem.badgeColor,
                    border: `1px solid ${activeModalItem.badgeColor}66`
                  }}
                >
                  {activeModalItem.badge}
                </span>
                <span className="text-xs font-mono text-[#F0EDE6]/60">
                  Year: {activeModalItem.year}
                </span>
                <span className="text-xs font-mono text-[#F0EDE6]/60">
                  ✦
                </span>
                <span className="text-xs font-mono text-[#F0EDE6]/60">
                  Format: {activeModalItem.dimensions}
                </span>
              </div>

              <h2 id="diary-entry-title" className="text-2xl sm:text-4xl font-bold mb-3 text-white">
                {activeModalItem.title}
              </h2>

              <div className="text-xs font-mono text-[#D4600A] uppercase tracking-wider mb-6">
                Medium: {activeModalItem.medium}
              </div>

              {/* Clean Artwork / Visual Display */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/60 mb-6 flex items-center justify-center max-h-[500px]">
                <img
                  src={activeModalItem.img}
                  alt={activeModalItem.title}
                  className="max-h-[500px] w-auto object-contain mx-auto"
                />
              </div>

              {/* Provenance & Reflection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8FC71] mb-2">
                    Observation &amp; Context
                  </h4>
                  <p className="text-[#F0EDE6]/80 leading-relaxed">
                    {activeModalItem.summary}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4600A] mb-2">
                    Design Reflection &amp; Significance
                  </h4>
                  <p className="text-[#F0EDE6]/80 leading-relaxed italic">
                    &ldquo;{activeModalItem.reflection}&rdquo;
                  </p>
                </div>
              </div>

              {/* Case Study Cross-Link */}
              {activeModalItem.caseLink && (
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#F0EDE6]/60 uppercase">
                    Related Canonical Work:
                  </span>
                  <Link
                    href={activeModalItem.caseLink}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4600A] text-[#0A0906] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#D8FC71] transition-colors"
                  >
                    <span>{activeModalItem.caseTitle}</span>
                    <span>→</span>
                  </Link>
                </div>
              )}

              {/* Modal Navigation Hint */}
              <div className="mt-6 text-center text-[10px] font-mono text-[#F0EDE6]/30 uppercase tracking-widest">
                Press ESC to close · Arrow keys to navigate
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

import { EXPERIENCE } from './portfolio-data';
/**
 * Centralized Ground Truth & Editorial Content Architecture for SIVNCO
 * Author: H P Shivaraj (Shiv)
 * Reconciled & Audited: October 2026
 */

export const PRACTITIONER = {
  name: 'H P Shivaraj',
  shortName: 'Shiv',
  title: 'Art Director, Packaging Architect & Fine Artist',
  officialCurrentRole: 'Manager - Communication Design',
  currentCompany: "Jus'Amazin Foods & Beverages",
  degree: 'Bachelor of Visual Arts (BVA), Applied Arts',
  institution: 'CAVA (Chamarajendra Academy of Visual Arts), University of Mysore',
  degreePeriod: '2019–2023',
  honors: 'Gold Medalist & University Topper',
  location: 'Bengaluru, Karnataka, India',
  noticePeriod: 'Open for opportunities',
  availability: 'Available for full-time Art Direction and Head of Design opportunities in Bengaluru, regional/international remote roles, and selective design contracts.',
  contacts: {
    emailPrimary: 'sivnco.in@gmail.com',
    emailSecondary: 'sivncodot@gmail.com',
    phone: '+91 84312 72507',
    whatsappUrl: 'https://wa.me/918431272507',
    linkedin: 'https://www.linkedin.com/in/shivaraj-designer/',
    instagram: 'https://www.instagram.com/sivnco.in/',
    portfolio: 'https://sivnco.in',
  },
  principles: [
    {
      num: '01',
      title: 'Systems Over One-Off Assets',
      tag: 'SCALABILITY',
      summary: 'A design system is the decision made once so it never has to be debated under deadline pressure. Brand coherence holds across 85+ SKUs and varied retail channels through tokenized typography, grids, and color rules.'
    },
    {
      num: '02',
      title: 'Shelf Presence with a Reason',
      tag: 'CONSUMER PSYCHOLOGY',
      summary: 'Distinctive packaging must stop the consumer at ten feet before it explains itself at ten inches. Chromatic disruption commands attention; clean typographic structure builds lasting trust.'
    },
    {
      num: '03',
      title: 'Production is Part of Design',
      tag: 'PREPRESS RIGOR',
      summary: 'A concept is only real when it survives substrates, PMS ink registration, dielines, rotogravure cylinders, and FSSAI regulatory compliance on factory press runs.'
    },
    {
      num: '04',
      title: 'Art Brings the Point of View',
      tag: 'HUMAN INTUITION',
      summary: 'Fine art observation keeps commercial work human, specific, and emotionally resonant. Order lives in the system; life lives in the sketchbook.'
    }
  ]
};

export const CAREER_TIMELINE = EXPERIENCE.map(item => ({...item, scope:item.detail, location:'', type:'Experience'}));

export const FLAGSHIP_STORIES = [
  {
    id: 'jusamazin-system',
    number: '01',
    chapter: 'CH 01 // CORE PACKAGING SYSTEM',
    title: "Jus'Amazin Multi-SKU Architecture",
    subtitle: 'Building a Coherent Brand and Packaging System Across Multiple Packaging Formats',
    tag: 'Flagship Packaging System',
    accentColor: '#D4600A',
    route: '/jusamazin',
    summary: 'Leading communication design for the visual development of an Indian clean-label nutrition brand from brief to industrial press runs. Standardized label architecture across glass jars (modern trade) and PET tubs (quick commerce), flexible pouches, and impulse bars with zero external agency retainers.',
    personalContribution: [
      'Authored the master brand guidelines document covering color tokens, dieline margins, label substrates, and typography ramps.',
      'Coordinated production artwork and proof review with suppliers and operations teams across documented print runs.',
      'Engineered multi-SKU modular sticker systems for 500g/1kg pouches to optimize printing capital.'
    ],
    supportedOutcomes: 'Contributed alongside product, sales, and operations to a high-growth FY24–25 period (+176% reported company revenue) by establishing unmistakable retail visibility and packaging coherence.',
    heroImage: '/images/hero_packaging.jpg',
    proofImage: '/images/jusamazin/process/proof_print_06.jpg'
  },
  {
    id: 'desi-energy-bar',
    number: '02',
    chapter: 'CH 02 // CULTURAL RESONANCE',
    title: 'Desi Energy Bar — Structured Chaos',
    subtitle: 'Repositioning Traditional Chikki as an Authentic Modern Energy Ritual',
    tag: 'Cultural Packaging & Shelf Disruption',
    accentColor: '#0066FF',
    route: '/jusamazin/desi-energy-bar',
    summary: 'A deliberate break from the clinical, sterile Western fitness aesthetics dominating the snacking aisle. Created a visual language grounded in nostalgic street memories—Lagori, Gully Cricket, and the classic vintage Atlas bicycle—backed by an unmissable Lightning Blue background engineered for long-range shelf pull.',
    personalContribution: [
      'Conducted direct retail visits across Bengaluru grocery stores to observe consumer hesitation patterns.',
      'Illustrated custom kinetic characters and vintage bicycle silhouettes to trigger authentic emotional familiarity.',
      'Selected and calibrated the high-intensity turquoise-blue wrapper substrate to pierce through muted snacking displays.'
    ],
    supportedOutcomes: 'Packaging execution and production scope are documented; sales performance is a shared business outcome.',
    heroImage: '/images/jusamazin/desi_bar/runway_final.jpg',
    proofImage: '/images/jusamazin/desi_bar/studio_render_a.jpg'
  },
  {
    id: '30-second-almond-milk',
    number: '03',
    chapter: 'CH 03 // PRODUCT DEMONSTRATION',
    title: '30-Second Almond Milk (30 SAM)',
    subtitle: 'Making Product Benefits Clear in Digital Communication',
    tag: 'Campaign & Motion Art Direction',
    accentColor: '#5A189A',
    route: '/campaigns',
    summary: 'Exposing the 1–4% real almond content hidden inside conventional carton milks. Directed the packaging redesign and two contrasting campaign films: a 30-second split-screen dissolution test for sound-off quick-commerce scrolling, and a quiet, typographic typewriter manifesto for health-conscious buyers.',
    personalContribution: [
      'Pioneered the Royal Purple chromatic pivot on sachet packaging for high recall on Blinkit and Zepto.',
      'Scripted, storyboarded, and edited the 30-second split-screen demonstration video.',
      'Engineered typewriter kinetic typography asset designed for sound-off mobile feed comprehension.'
    ],
    supportedOutcomes: 'Over 20,000 top-funnel burst impressions and 11,000+ attributed sachet orders over the 45-day campaign cycle.',
    heroImage: '/images/jusamazin/bars/amazon_campaign.jpg',
    videoSrc: '/images/motion_graphics.mp4'
  }
];

export const ART_PLATES = [
  { id: 1, plate: '01', title: 'Wildlife Fur & Texture Study', medium: 'Realism & Fur Anatomy — CAVA Mysuru', img: '/images/paintings/painting_1.jpg', year: '2021', notes: 'Academic study examining micro-textural rendering, directional light, and hair follicle volume.' },
  { id: 2, plate: '02', title: 'Mountain Lake Pier', medium: 'Atmospheric Perspective & Water Refraction', img: '/images/paintings/painting_2.jpg', year: '2022', notes: 'Exploration of receding horizon values and cool ambient morning luminescence.' },
  { id: 3, plate: '03', title: 'Elder Couple Portrait', medium: 'Observational Portraiture — Watercolor Wash', img: '/images/paintings/painting_3.jpg', year: '2022', notes: 'Capturing facial bone topography and compassionate aging through transparent layered washes.' },
  { id: 4, plate: '04', title: 'Studio Life Study', medium: 'Easel Portraiture — Direct North Light', img: '/images/paintings/painting_4.jpg', year: '2021', notes: 'Life room study painted under consistent cool studio lighting, focusing on edge control.' },
  { id: 6, plate: '05', title: 'Classical Form & Sari Study', medium: 'Traditional Drapery & Anatomical Form', img: '/images/paintings/painting_6.jpg', year: '2022', notes: 'Study of tension points, gravity folds, and fabric mass over human anatomy.' },
  { id: 7, plate: '06', title: 'Contemplation', medium: 'Charcoal & Ink Wash on Rag Paper', img: '/images/paintings/painting_7.jpg', year: '2020', notes: 'Expressive chiaroscuro exploring deep tonal blacks and lost edges.' },
  { id: 8, plate: '07', title: 'Bengaluru Streetlife', medium: 'Plein Air Watercolor — Sunlight & Shadow', img: '/images/paintings/painting_8.jpg', year: '2023', notes: 'Rapid on-location watercolor capturing fleeting tropical midday sunlight and urban bustle.' },
  { id: 9, plate: '08', title: 'Classical Bust & Drapery', medium: 'Academic Plaster Cast Drawing', img: '/images/paintings/painting_9.jpg', year: '2020', notes: 'Rigorous CAVA foundation exercise mapping subtle plane changes on cast marble.' },
  { id: 10, plate: '09', title: 'Foundational Geometry', medium: 'Planar Anatomy & Volume Construction', img: '/images/paintings/painting_10.jpg', year: '2019', notes: 'Geometric reduction of organic form—principles later applied to 3D packaging modeling.' },
  { id: 11, plate: '10', title: 'Rail Transit Study', medium: 'Industrial Heritage & Landscape', img: '/images/paintings/painting_11.jpg', year: '2021', notes: 'Atmospheric study of iron locomotives, steel rails, and vanishing point perspective.' },
  { id: 12, plate: '11', title: 'Urban Architecture Perspective', medium: 'Linear Ink Study on Textured Board', img: '/images/paintings/painting_12.jpg', year: '2021', notes: 'Multi-point vanishing grid study of heritage street structures in Mysuru.' },
  { id: 13, plate: '12', title: 'Ascetic Portrait', medium: 'Figurative Light & Weathered Texture', img: '/images/paintings/painting_13.jpg', year: '2022', notes: 'Warm earthy pigment harmony studying spiritual intensity and textural beard rendering.' },
  { id: 14, plate: '13', title: 'Child Expression', medium: 'Direct Watercolor Wash', img: '/images/paintings/painting_14.jpg', year: '2023', notes: 'Spontaneous brushwork capturing uninhibited youth and natural eye sparkle.' },
  { id: 16, plate: '14', title: 'Sacred Diya & Brass Vessel', medium: 'Metallic Reflections & Specular Highlights', img: '/images/paintings/painting_16.jpg', year: '2022', notes: 'Study in caustic reflections, warm brass speculars, and flickering flame ambient radius.' },
  { id: 17, plate: '15', title: 'Glass Reflections & Transparency', medium: 'Hermitage Bottle Still Life', img: '/images/paintings/painting_17.jpg', year: '2021', notes: 'Study of refractive index, glass wall caustics, and liquid transparency.' },
  { id: 18, plate: '16', title: 'Teal Monochrome Portrait', medium: 'Limited Palette Watercolor Wash', img: '/images/paintings/painting_18.jpg', year: '2023', notes: 'Single-pigment tonal range exercise establishing value structure without chromatic distraction.' },
  { id: 20, plate: '17', title: 'Atmospheric Cloud Formations', medium: 'Sky Study — Volumetric Luminance', img: '/images/paintings/painting_20.jpg', year: '2022', notes: 'Diffuse atmospheric light passing through heavy monsoon cumulus formations.' },
  { id: 22, plate: '18', title: 'Studio Chair & Terracotta Pot', medium: 'Academic Still Life — Cast Shadows', img: '/images/paintings/painting_22.jpg', year: '2020', notes: 'Study in wood grain tactile rendering, porous clay reflectance, and warm ambient bounces.' }
];

export const JOURNAL_RECORDS = [
  {
    id: 'dieline-prepress-rotogravure',
    chapter: 'RECORD 01 // PRODUCTION',
    title: 'Surviving Industrial Prepress: Rotogravure Cylinder Tolerances',
    date: '2025',
    category: 'Print Engineering',
    summary: 'What happens between Illustrator vectors and a 200,000-unit factory press run. Dieline bleed rules, ink viscosity, Pantone spot separation, and FSSAI mandatory legal sizing.',
    readTime: '6 min read',
    tags: ['Prepress', 'Packaging', 'Flexo & Roto', 'PMS Matching']
  },
  {
    id: 'structured-chaos-methodology',
    chapter: 'RECORD 02 // VISUAL STRATEGY',
    title: 'The "Structured Chaos" Thesis: Nostalgia Without Clutter',
    date: '2024',
    category: 'Brand Architecture',
    summary: 'Why generic minimalism fails in Indian snacking aisles. Breaking Western category rules using hyper-local cultural memory, vintage bicycle silhouettes, and long-range chromatic frequency.',
    readTime: '8 min read',
    tags: ['Brand Strategy', 'Consumer Behavior', 'Cultural Design']
  },
  {
    id: 'universal-pouch-token-architecture',
    chapter: 'RECORD 03 // SYSTEMS',
    title: 'The Universal Master Pouch: Capital Efficiency via Modular Tokens',
    date: '2024',
    category: 'Design Systems',
    summary: 'How splitting pouch production into a common scenic rotogravure base with SKU-specific digital overlay labels unlocked 4x manufacturing throughput on a bootstrapped budget.',
    readTime: '5 min read',
    tags: ['Design Systems', 'Supply Chain', 'Packaging Economics']
  },
  {
    id: 'fine-art-chiaroscuro-to-3d',
    chapter: 'RECORD 04 // CRAFT',
    title: 'From Academic Chiaroscuro to Spatial GLB Product Renders',
    date: '2025',
    category: '3D & Art Direction',
    summary: 'How classical plaster cast rendering at CAVA informs accurate normal-map lighting, ambient occlusion, and three-point studio lighting in Blender and WebGL.',
    readTime: '7 min read',
    tags: ['3D Modeling', 'Blender', 'Fine Art', 'Lighting Theory']
  }
];

export const THREE_D_MODELS = [
  { id: 'pistachio-jar', name: '200g Jar Pistachio Butter', path: '/models/200g_jar_pistachio.glb', desc: 'Real production GLB with glass refraction, inner product paste texture, and gold foil lid reflection.' },
  { id: 'pc-bar-1', name: 'Desi Protein Bar Wrapper', path: '/models/pc_bar.glb', desc: 'Flow-wrap foil bar model capturing realistic horizontal seam crimping and substrate speculars.' },
  { id: 'pc-bar-2', name: 'Flow-Wrap Bar Variant 2', path: '/models/pc_bar_2.glb', desc: 'Second packaging wrapper study featuring matte BOPP laminate texture.' },
  { id: 'pack-model-3', name: 'High-Volume Product Pack', path: '/models/product-3.glb', desc: 'Modular packaging format used in cross-retail distribution studies.' }
];

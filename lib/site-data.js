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
    summary: 'Leading communication design for the visual development of an Indian clean-label nutrition brand from brief to industrial press runs. Standardized label architecture across glass jars (modern trade) and PET tubs (quick commerce), flexible pouches, and impulse bars through an in-house design practice.',
    personalContribution: [
      'Authored the master brand guidelines document covering color tokens, dieline margins, label substrates, and typography ramps.',
      'Coordinated production artwork and proof review with suppliers and operations teams across documented print runs.',
      'Engineered multi-SKU modular sticker systems for 500g/1kg pouches to optimize printing capital.'
    ],
    supportedOutcomes: 'Contributed alongside product, sales, and operations to a high-growth FY24–25 period (+176% reported company revenue) alongside packaging and communication delivery.',
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
    summary: 'Making the product preparation and ingredient story clear. Directed the packaging redesign and two contrasting campaign films: a 30-second split-screen dissolution test for sound-off quick-commerce scrolling, and a quiet, typographic typewriter manifesto for health-conscious buyers.',
    personalContribution: [
      'Pioneered the Royal Purple chromatic pivot on sachet packaging for high recall on Blinkit and Zepto.',
      'Scripted, storyboarded, and edited the 30-second split-screen demonstration video.',
      'Engineered typewriter kinetic typography asset designed for sound-off mobile feed comprehension.'
    ],
    supportedOutcomes: 'Campaign concepts, scripts, storyboards and motion assets delivered. Commercial performance is a shared company outcome.',
    heroImage: '/images/jusamazin/bars/amazon_campaign.jpg',
    videoSrc: '/images/motion_graphics.mp4'
  }
];

export const ART_PLATES = Array.from({length:23},(_,i)=>({id:i+1,plate:String(i+1).padStart(2,'0'),title:'Artwork '+String(i+1).padStart(2,'0'),medium:'Personal art collection',img:'/images/paintings/painting_'+(i+1)+'.jpg',year:'Undated',notes:'An image retained from the personal art collection. Individual dates, dimensions and materials are omitted where they have not been verified.'}));

export const JOURNAL_RECORDS = [
  {
    "id": "dieline-prepress-rotogravure",
    "chapter": "RECORD 01 // PRODUCTION",
    "title": "From Artwork to Print Release",
    "date": "Process note",
    "category": "Production",
    "summary": "How current artwork, proof review and supplier communication connect to a production handoff.",
    "readTime": "Studio note",
    "tags": [
      "Prepress",
      "Proof review",
      "Supplier coordination"
    ],
    "body": "Artwork release requires checking the current variant, dieline and approved product information. Printer-specific requirements and physical proofs inform the final handoff. In the documented snack rollout, a profile variation was identified in proofs and returned for correction before release.",
    "route": "/design-systems"
  },
  {
    "id": "structured-chaos-methodology",
    "chapter": "RECORD 02 // VISUAL STRATEGY",
    "title": "Structured Chaos: Culture and Hierarchy",
    "date": "Process note",
    "category": "Packaging",
    "summary": "Desi Energy Bar brings Indian street-play references into a structured packaging system.",
    "readTime": "Studio note",
    "tags": [
      "Illustration",
      "Retail observation",
      "Packaging"
    ],
    "body": "A 25-store Bengaluru study informed the direction. The work combines high-contrast blue, hand-drawn characters and Indian street-play references with a clear product-information grid. The design question was how to make an expressive pack remain readable across variants.",
    "route": "/jusamazin/desi-energy-bar"
  },
  {
    "id": "universal-pouch-token-architecture",
    "chapter": "RECORD 03 // SYSTEMS",
    "title": "The Universal Pouch and the Packing Line",
    "date": "Process note",
    "category": "Design operations",
    "summary": "A common pouch, modular labels and alignment guides connect packaging decisions with operational needs.",
    "readTime": "Studio note",
    "tags": [
      "Packaging",
      "Operations",
      "Modular artwork"
    ],
    "body": "The universal pouch uses shared packaging with variant-specific labels and printed corner-alignment guides. Operations colleagues tested the physical placement. Internal observations reported about 100 to 400–500 pouches per hour; this is a team estimate rather than a controlled benchmark.",
    "route": "/jusamazin/superfoods"
  },
  {
    "id": "fine-art-chiaroscuro-to-3d",
    "chapter": "RECORD 04 // CRAFT",
    "title": "From Observing Light to Product Visualization",
    "date": "Process note",
    "category": "Art & 3D",
    "summary": "Drawing and painting support decisions about form, value, composition and light in product renders.",
    "readTime": "Studio note",
    "tags": [
      "Blender",
      "Fine art",
      "Composition"
    ],
    "body": "A fine-art foundation provides a way to observe shape, value and light. In Blender, the same attention informs camera placement, materials, lighting and composition. Final imagery still needs review against the product and its intended use.",
    "route": "/jusamazin/3d-pack-render"
  }
];

export const THREE_D_MODELS = [
  { id: 'pistachio-jar', name: '200g Jar Pistachio Butter', path: '/models/200g_jar_pistachio.glb', desc: 'Real production GLB with glass refraction, inner product paste texture, and gold foil lid reflection.' },
  { id: 'pc-bar-1', name: 'Desi Protein Bar Wrapper', path: '/models/pc_bar.glb', desc: 'Flow-wrap foil bar model capturing realistic horizontal seam crimping and substrate speculars.' },
  { id: 'pc-bar-2', name: 'Flow-Wrap Bar Variant 2', path: '/models/pc_bar_2.glb', desc: 'Second packaging wrapper study featuring matte BOPP laminate texture.' },
  { id: 'pack-model-3', name: 'High-Volume Product Pack', path: '/models/product-3.glb', desc: 'Modular packaging format used in cross-retail distribution studies.' }
];

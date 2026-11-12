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
    "id": "desi-energy-bar",
    "title": "Desi Energy Bar — Structured Chaos",
    "subtitle": "A Character-Led Identity for a Traditional Snack, Developed Across Illustration, Wrapper Design and Retail Packaging",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024 — 2026",
    "status": "Live Commercial Snacking Line",
    "role": "Concept development, art direction, illustration, packaging design and production coordination — H P Shivaraj.",
    "categories": [
      "packaging",
      "campaigns"
    ],
    "categoryLabels": [
      "Brand & Packaging",
      "Campaigns & Visual Storytelling"
    ],
    "accentColor": "#0066FF",
    "heroImage": "/images/jusamazin/desi_bar/runway_final.jpg",
    "brief": "Disrupt the sterile, imported gym aesthetics dominating the Indian health-snack aisle. Create a culturally grounded identity that connects a bold blue field with hand-drawn characters and familiar street-play imagery.",
    "contribution": "Conducted 25-store Bengaluru retail observation study. Developed the Structured Chaos direction combining expressive gully cricket and childhood street-play illustration with an ordered legal and product information hierarchy. Prepared dielines, colour proofing, and vendor prepress review.",
    "supportedOutcome": "An original visual idea carried through research, illustration, packaging and commercial production into nationwide retail distribution.",
    "measurementPeriod": "Development & Production 2024–2026",
    "visuals": [
      {
        "src": "/images/jusamazin/desi_bar/runway_handdrawn.jpg",
        "caption": "Initial pencil sketches capturing neighborhood street games and vintage bicycle geometry."
      },
      {
        "src": "/images/jusamazin/desi_bar/runway_vector.jpg",
        "caption": "Translating hand-drawn sketches to production-ready Illustrator vectors with legal text hierarchy."
      },
      {
        "src": "/images/jusamazin/desi_bar/pantone_proofing.jpg",
        "caption": "On-site press proofing verifying electric cyan density on metallic foil substrates."
      },
      {
        "src": "/images/jusamazin/desi_bar/pack_array.jpg",
        "caption": "Character illustration and product information brought together on the wrapper and dispenser."
      }
    ],
    "caseLink": "/jusamazin/desi-energy-bar",
    "diaryLink": "/visual-diary?discipline=rejected"
  },
  {
    "id": "30-second-almond-drink",
    "title": "30-Second Almond Drink — From Pack to Moving Image",
    "subtitle": "Packaging, Product Rendering and Motion Storytelling Developed Around a Quick-Preparation Almond Drink",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024",
    "status": "Omni-Channel Campaign & Modern Trade POS",
    "role": "Art direction, packaging design, campaign concept, script, storyboard, 3D rendering, animation, edit and sound design — H P Shivaraj. Consumer-research collaboration — Shashank.",
    "categories": [
      "campaigns",
      "packaging"
    ],
    "categoryLabels": [
      "Campaigns & Visual Storytelling",
      "Brand & Packaging"
    ],
    "accentColor": "#5A189A",
    "heroImage": "/images/jusamazin/bars/amazon_campaign.jpg",
    "brief": "Connect the packaging identity of a 100% almond paste sachet with a series of product-led films and retail POS, establishing visual continuity between static pack and moving image.",
    "contribution": "Established the Royal Purple chromatic anchor on sachets, bottle labels and multipack boxes. Scripted, storyboarded, rendered 3D product imagery, animated and edited split-screen and kinetic typewriter motion treatments with typewriter-inspired sound design.",
    "supportedOutcome": "Delivered unified omni-channel assets from pack to motion film across quick-commerce carousels and modern trade countertop displays.",
    "measurementPeriod": "Campaign & Packaging Launch Window",
    "visuals": [
      {
        "src": "/images/jusamazin/30sad/30sad-all-set.png",
        "caption": "Split-screen packaging visualization showing 100% paste dissolution in 30 seconds."
      },
      {
        "src": "/images/jusamazin/process/retail_trial_02.jpg",
        "caption": "Physical countertop FSU holding shaker bottles and single-serve sachet packs."
      },
      {
        "src": "/images/jusamazin/30sad/almond-drink-bottle-liquid.png",
        "caption": "Liquid simulation and 3D studio render detailing clean ingredient credentials."
      },
      {
        "src": "/images/jusamazin/30sad/box-2-front.png",
        "caption": "Multipack retail carton design incorporating the royal purple chromatic anchor."
      }
    ],
    "caseLink": "/campaigns#almond-milk",
    "diaryLink": "/visual-diary?discipline=experiments"
  },
  {
    "id": "festive-gifting",
    "title": "Festive Gifting — A Family of Celebrations",
    "subtitle": "Coordinated Gifting Directions Spanning Pattern, Colour, Packaging Formats and Product Presentation",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024 — 2025",
    "status": "Multiple Commercial Project Phases",
    "role": "Art direction, packaging design, structural development, 3D visualisation and production coordination — H P Shivaraj.",
    "categories": [
      "packaging"
    ],
    "categoryLabels": [
      "Brand & Packaging"
    ],
    "accentColor": "#B8860B",
    "heroImage": "/images/jusamazin/gifting/final_all_gifting.png",
    "brief": "Bring together products, presentation and packaging across several formats to elevate clean-label nutrition into celebratory corporate and festive hampers.",
    "contribution": "Developed red and blue ethnic directions with gold-embossed mandalas, a deep-purple contemporary direction, and yellow E-flute packaging. Engineered sliding rigid trays, slipcases, and composite 3D product visualizations.",
    "supportedOutcome": "Art direction carried across connected physical and visual elements: packaging graphics, structural formats, product arrangement and rendered presentation.",
    "measurementPeriod": "Festive Cycles 2024–2025",
    "visuals": [
      {
        "src": "/images/jusamazin/gifting/purple_contemporary_tray.png",
        "caption": "Contemporary sliding rigid tray in signature Royal Purple with recessed jar compartments."
      },
      {
        "src": "/images/jusamazin/gifting/red_ethnic_tray.png",
        "caption": "Festive collection tray celebrating Indian traditional craftsmanship with gold mandala line art."
      },
      {
        "src": "/images/jusamazin/gifting/yellow_funky_box.png",
        "caption": "Vibrant amber yellow gift pack engineered for modern corporate celebratory hampers."
      },
      {
        "src": "/images/jusamazin/gifting/windowed_pouch_box.png",
        "caption": "Structural carton with precision die-cut aperture showcasing snack pouches."
      }
    ],
    "caseLink": "/jusamazin/gifting",
    "diaryLink": "/visual-diary?discipline=sketches"
  },
  {
    "id": "universal-pouch",
    "title": "Universal Pouch — One World, Many Products",
    "subtitle": "A Shared Illustrated Pouch System with Product-Specific Labels and Practical Alignment Guides",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024 — 2025",
    "status": "Commercial Shared-Packaging System",
    "role": "Concept development, art direction, packaging-system design and production coordination — H P Shivaraj.",
    "categories": [
      "packaging",
      "production"
    ],
    "categoryLabels": [
      "Brand & Packaging",
      "Production & Design Ops"
    ],
    "accentColor": "#2D6A4F",
    "heroImage": "/images/jusamazin/superfoods/shelf_lineup.jpg",
    "brief": "Resolve inventory constraints across specialty SKUs by creating a shared illustrated package combined with product-specific label overlays.",
    "contribution": "Engineered a system separating what remains consistent (the common illustrated pouch establishing the visual world) from what changes (the overlays carrying SKU information). Integrated pre-printed corner alignment marks to guide label placement on the packing floor.",
    "supportedOutcome": "Designed both as a compelling visual expression and a repeatable, practical production system deployed across specialty snacking and seed SKUs.",
    "measurementPeriod": "Full Production Cycle 2024–2025",
    "visuals": [
      {
        "src": "/images/jusamazin/superfoods/pouch_front_500g.jpg",
        "caption": "Shared illustrated master pouch with standardized typographic hierarchy."
      },
      {
        "src": "/images/jusamazin/superfoods/pouch_front_oats.jpg",
        "caption": "Product-specific label overlay applied using precision corner alignment marks."
      },
      {
        "src": "/images/jusamazin/superfoods/seam_detail.jpg",
        "caption": "Seam margin tolerances and rotogravure registration marks on industrial film."
      },
      {
        "src": "/images/jusamazin/superfoods/typography_macro.jpg",
        "caption": "Back-of-pack regulatory and nutritional typography calibration."
      }
    ],
    "caseLink": "/jusamazin/superfoods",
    "diaryLink": "/visual-diary?discipline=sketches"
  },
  {
    "id": "lilstars",
    "title": "Lil’Stars — A Distinct World for Kids",
    "subtitle": "A Children’s Product Identity Developed Across Spreads, Pancake Mixes and Motion Exploration",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024 — 2025",
    "status": "Kids Sub-Brand Packaging Line",
    "role": "Art direction and packaging design — H P Shivaraj. Motion exploration used AI-assisted workflows with human creative direction.",
    "categories": [
      "packaging"
    ],
    "categoryLabels": [
      "Brand & Packaging"
    ],
    "accentColor": "#FF6F59",
    "heroImage": "/images/jusamazin/lilstars/pancake_mix.png",
    "brief": "Develop a distinct visual identity for a clean-label kids line spanning spreads and millet pancake mixes, maintaining clear relationships between individual packs.",
    "contribution": "Designed packaging across four spreads and three pancake-mix variants. Balanced playful front-of-pack appeal with clean parental reassurance on ingredient standards. Explored promotional motion workflows to visualize product texture and movement.",
    "supportedOutcome": "Established a coherent sub-brand family that balances child-friendly personality with parental nutritional clarity.",
    "measurementPeriod": "2024–2025 Product Launch",
    "visuals": [
      {
        "src": "/images/jusamazin/lilstars/pancake_choco_delight.png",
        "caption": "Millet pancake mix pouch featuring clear clean-label callouts and rich cocoa palette."
      },
      {
        "src": "/images/jusamazin/lilstars/pancake_berry_blast.png",
        "caption": "Berry Blast variant showcasing bright chromatic color coding for quick-commerce discovery."
      },
      {
        "src": "/images/jusamazin/lilstars/pb_dark_chocolate_jar.png",
        "caption": "325g nut butter jar balancing approachable illustration with nutrient density."
      },
      {
        "src": "/images/jusamazin/lilstars/hazelnut_milk_jar.png",
        "caption": "200g hazelnut spread pack highlighting palm-oil-free formulation."
      }
    ],
    "caseLink": "/jusamazin/lilstars",
    "diaryLink": "/visual-diary?discipline=experiments"
  },
  {
    "id": "mom-bar",
    "title": "Mom Bar — From Wrapper to Counter",
    "subtitle": "An Original Packaging Project Spanning the Individual Bar Wrapper and Retail Display Box",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024",
    "status": "Commercial Packaging Project",
    "role": "Concept development, art direction, wrapper design, retail-carton design and production coordination — H P Shivaraj.",
    "categories": [
      "packaging"
    ],
    "categoryLabels": [
      "Brand & Packaging"
    ],
    "accentColor": "#E63946",
    "heroImage": "/images/jusamazin/bars/mom_bar_hero.jpg",
    "brief": "Develop an original packaging identity for a specialized nutrition bar, connecting the single-serve flow wrap and the multi-unit retail counter box.",
    "contribution": "Created packaging layouts, structural artwork, and prepress specifications for both wrapper and retail dispenser carton. Coordinated with product and quality teams on nutritional callouts and print partners on substrate calibration.",
    "supportedOutcome": "Delivered original packaging direction carried across two formats, establishing a seamless relationship between the graphic idea and its physical retail counter presentation.",
    "measurementPeriod": "2024 Production Cycle",
    "visuals": [
      {
        "src": "/images/jusamazin/bars/mom_bar_pouch_hand.jpg",
        "caption": "Physical wrapper prototype in matte flow-wrap foil."
      },
      {
        "src": "/images/jusamazin/bars/shelf_display.jpg",
        "caption": "Retail display box holding multiple bars on retail counter."
      },
      {
        "src": "/images/jusamazin/bars/store_placement.jpg",
        "caption": "Modern trade placement trial evaluating visibility from aisle vantage points."
      },
      {
        "src": "/images/jusamazin/bars/amazon_campaign.jpg",
        "caption": "Digital catalog presentation assets aligning pack and carton."
      }
    ],
    "caseLink": "/jusamazin/bars",
    "diaryLink": "/visual-diary?discipline=sketches"
  },
  {
    "id": "mom2b",
    "title": "Mom2B — A Dedicated Product Identity",
    "subtitle": "Packaging and Product Communication for a Maternal-Nutrition Sub-Brand",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024 — 2025",
    "status": "Maternal-Nutrition Product Range",
    "role": "Art direction and packaging design — H P Shivaraj. Listing-image credits specified per displayed asset.",
    "categories": [
      "packaging"
    ],
    "categoryLabels": [
      "Brand & Packaging"
    ],
    "accentColor": "#8338EC",
    "heroImage": "/images/jusamazin/mom2b/mom_bar_front.png",
    "brief": "Establish a dedicated, reassuring product identity across maternal-nutrition spreads and snacks, avoiding sterile medical cues while maintaining deep credibility.",
    "contribution": "Developed package design across almond, seed and peanut spreads in both Glass and PET containers. Structured front-of-pack information hierarchies and digital product presentations for e-commerce.",
    "supportedOutcome": "Created an empathic, structured identity that communicates ingredient integrity and nutritional clarity across physical jars and digital listings.",
    "measurementPeriod": "2024–2025 Rollout",
    "visuals": [
      {
        "src": "/images/jusamazin/mom2b/almond_seed_butter_m2b.png",
        "caption": "Almond & Seed Butter jar label with structured nutritional callouts."
      },
      {
        "src": "/images/jusamazin/mom2b/peanut_flax_chutney_m2b.png",
        "caption": "Savory functional spread label balancing regional flavor with clean certification."
      },
      {
        "src": "/images/jusamazin/mom2b/seed_butter_mix_m2b.png",
        "caption": "High-protein multi-seed spread pack rendered for online listings."
      },
      {
        "src": "/images/jusamazin/mom2b/spicy_seed_butter_m2b.png",
        "caption": "Spicy variant presentation adapting the maternal visual language to savory profiles."
      }
    ],
    "caseLink": "/jusamazin/mom2b",
    "diaryLink": "/visual-diary?discipline=sketches"
  },
  {
    "id": "savoury-snacks",
    "title": "Savoury Snacks — A Family Built to Scale",
    "subtitle": "A Coordinated Packaging Family Across Savoury Snacks and Chikki, Developed Through Artwork and Production Proofing",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024 — 2026",
    "status": "Multi-Product Commercial Packaging",
    "role": "Art direction, packaging-family design, artwork adaptation and prepress coordination — H P Shivaraj.",
    "categories": [
      "packaging",
      "production"
    ],
    "categoryLabels": [
      "Brand & Packaging",
      "Production & Design Ops"
    ],
    "accentColor": "#E76F51",
    "heroImage": "/images/jusamazin/snacks/chikki_shelf.jpg",
    "brief": "Bring diverse snack products — including roasted nuts, chikki, and millet snacks — into a cohesive, scalable packaging family across diverse formats.",
    "contribution": "Designed packaging systems across canisters, stand-up pouches, and wrappers. Handled format adaptations, print proofing, dieline revisions, and vendor corrections to safeguard system fidelity from file to press.",
    "supportedOutcome": "Delivered a production-ready, coordinated packaging family that demonstrates how family-level visual decisions can be reproduced consistently across multiple pack formats.",
    "measurementPeriod": "2024–2026 Commercial Production",
    "visuals": [
      {
        "src": "/images/jusamazin/cans/multiseed_cracker_can.png",
        "caption": "360° cylindrical composite canister with clean nutrition claim hierarchy."
      },
      {
        "src": "/images/jusamazin/cans/trail_mix_can.png",
        "caption": "High-protein seed blend canister engineered for pantry and retail display."
      },
      {
        "src": "/images/jusamazin/cans/dont_be_hangry_pouch.png",
        "caption": "High-contrast impulse pouch format designed for checkout placement."
      },
      {
        "src": "/images/jusamazin/snacks/chikki_print_proof.jpg",
        "caption": "Rotogravure print proof verifying lamination registration and legal text legibility."
      }
    ],
    "caseLink": "/jusamazin/snacks",
    "diaryLink": "/visual-diary?discipline=rejected"
  },
  {
    "id": "core-jars",
    "title": "Core Jars — Bringing a Range Together",
    "subtitle": "A Redesign and Standardisation Project Across an Existing Nut-Butter Packaging Range",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "Aug 2023 — Present",
    "status": "Live Nationwide Commercial Range",
    "role": "Packaging-system redesign, artwork development and production coordination — H P Shivaraj. Original brand and inherited artwork pre-date this phase.",
    "categories": [
      "packaging",
      "production"
    ],
    "categoryLabels": [
      "Brand & Packaging",
      "Production & Design Ops"
    ],
    "accentColor": "#D4600A",
    "heroImage": "/images/jusamazin/core/hero_lineup.jpg",
    "brief": "Standardize and rebuild an inherited nut-butter packaging range that suffered from inconsistent label layouts, poor shelf hierarchy, and missing production standards.",
    "contribution": "Rebuilt and standardized artwork across 38+ core jar variants in Glass and PET formats. Reorganized layout proportions (40/60 visual to information split), typography, and color coding. Maintained print-ready production masters for ongoing factory runs.",
    "supportedOutcome": "Transformed an uncoordinated collection into a unified, recognizable shelf presence across modern trade and quick-commerce channels nationwide.",
    "measurementPeriod": "Aug 2023 — Present Commercial Deployment",
    "visuals": [
      {
        "src": "/images/jusamazin/core/shelf_array.jpg",
        "caption": "Core jar range displayed across supermarket shelving showing consistent front-label alignment."
      },
      {
        "src": "/images/jusamazin/core/variant_matrix.jpg",
        "caption": "Systematic color-coded variant matrix distinguishing almond, peanut, cashew, and seed butters."
      },
      {
        "src": "/images/jusamazin/core/label_detail.jpg",
        "caption": "Front and back label typography detail balancing brand identity with mandatory regulatory declarations."
      },
      {
        "src": "/images/jusamazin/jars/glass_front.jpg",
        "caption": "Glass front label architecture: clean weight callouts, allergen markers, and substrate contrast."
      }
    ],
    "caseLink": "/jusamazin/core-packaging",
    "diaryLink": "/visual-diary?discipline=sketches"
  },
  {
    "id": "physical-space",
    "title": "Brand in Physical Space",
    "subtitle": "Retail-Display Development, Exhibition Graphics and Fleet Branding Across Physical Brand Touchpoints",
    "client": "Jus’Amazin Foods & Beverages",
    "timeframe": "2024 — 2026",
    "status": "Multiple Physical & Environmental Deployments",
    "role": "Visual direction, graphic design, 3D display development and production coordination — H P Shivaraj. Fabrication and installation involved specialist partners.",
    "categories": [
      "campaigns",
      "production"
    ],
    "categoryLabels": [
      "Campaigns & Visual Storytelling",
      "Production & Design Ops"
    ],
    "accentColor": "#2B9348",
    "heroImage": "/images/jusamazin/pos/fsu_retail_display.png",
    "brief": "Extend the brand beyond the pack into physical retail environments, exhibition spaces, and delivery fleet logistics.",
    "contribution": "Structured across three spatial chapters: retail floor displays (5ft × 2ft FSU concepts), trade exhibition environments (AAHAR, Dubai, National Millet Expo), and delivery vehicle fleet graphics. Developed 3D display models and coordinated large-format print production.",
    "supportedOutcome": "Delivered cohesive brand presence across physical retail and industry touchpoints, maintaining visual consistency across vastly different scales and materials.",
    "measurementPeriod": "2024–2026 Spatial Programs",
    "visuals": [
      {
        "src": "/images/jusamazin/pos/fsu_retail_side.png",
        "caption": "FSU side-panel design communicating clean-label standards and product benefits."
      },
      {
        "src": "/images/jusamazin/pos/trade_event_photo_01.jpg",
        "caption": "Trade exhibition booth sampling counter with branded canopy graphics."
      },
      {
        "src": "/images/jusamazin/pos/trade_event_photo_02.jpg",
        "caption": "Countertop product display presenting core jars and festive boxes in a live exhibition setting."
      },
      {
        "src": "/images/jusamazin/pos/condo_carnival_booth.png",
        "caption": "3D spatial visualization for outdoor experiential tasting booths."
      }
    ],
    "caseLink": "/jusamazin/retail-pos",
    "diaryLink": "/visual-diary?discipline=experiments"
  },
  {
    "id": "svarnart-platform",
    "title": "Svarnart Academy PWA & Sivnco Digital Platform",
    "subtitle": "In-House Engineered Educational & Creative Web Platforms",
    "client": "Svarnart Academy & Sivnco Studio",
    "timeframe": "2025 — 2026",
    "status": "Live in Production",
    "role": "Co-Founder, UI/UX Architect & Full-Stack Developer — H P Shivaraj.",
    "categories": [
      "digital",
      "production"
    ],
    "categoryLabels": [
      "Digital Products & Experiences",
      "Production & Design Ops"
    ],
    "accentColor": "#C89B3C",
    "heroImage": "/images/jusamazin/web/1-for-web.webp",
    "brief": "Design and build an offline-capable Progressive Web App for classical art students and parents with zero recurring SaaS dependencies, alongside an immersive 3D packaging showcase portfolio.",
    "contribution": "Crafted the full design system (tokens, components, typography). Built the Next.js frontend with Tailwind CSS, custom GSAP scroll coordinates, Lenis physics, interactive WebGL glTF 3D model viewer, and UPI/Razorpay payment intent.",
    "supportedOutcome": "Achieved Lighthouse 95+ performance scores, <1.8s mobile load times, zero SaaS hosting costs, and self-hosted 360° interactive 3D model inspection.",
    "measurementPeriod": "Continuous Live Deployment",
    "visuals": [
      {
        "src": "/images/jusamazin/web/web-brand-intro.webp",
        "caption": "Responsive e-commerce storefront structure highlighting brand world and ingredient philosophy."
      },
      {
        "src": "/images/jusamazin/web/web-food-intro.webp",
        "caption": "Food catalog with category filtering and clear nutritional breakdowns."
      },
      {
        "src": "/images/jusamazin/web/about-us-in-website.webp",
        "caption": "Interactive story layout detailing company origins and clean-label standards."
      }
    ],
    "caseLink": "/web-development",
    "diaryLink": "/visual-diary?discipline=experiments"
  },
  {
    "id": "art-pedagogy",
    "title": "Classical Foundation, Pedagogy & 19 CAVA Art Plates",
    "subtitle": "Academic Fine Art Rigor Informing Commercial Design Systems",
    "client": "CAVA, University of Mysore / Openhouse / Svarnart Academy",
    "timeframe": "2019 — Present",
    "status": "Ongoing Fine Art & Pedagogical Practice",
    "role": "Artist, Educator & Gold Medalist — H P Shivaraj.",
    "categories": [
      "art-edu"
    ],
    "categoryLabels": [
      "Art & Education"
    ],
    "accentColor": "#D4600A",
    "heroImage": "/images/paintings/painting_1.jpg",
    "brief": "Maintain an active fine art and teaching practice that grounds commercial packaging in authentic anatomical observation, chiaroscuro lighting, and pedagogical clarity.",
    "contribution": "Graduated as Gold Medalist & University Topper from CAVA (BVA Applied Art, 2019–2023, recognition recorded in 2024). Taught 20+ weekly learners at Openhouse (1 April 2025 – 30 April 2026) and co-founded Svarnart Academy. Authored fine art curriculum linking Carnatic music and visual geometry.",
    "supportedOutcome": "University Gold Medalist & Topper; 19 master CAVA academic plates preserved; annual student showcases exhibiting 120+ artworks in Bengaluru.",
    "measurementPeriod": "2019–Present Academic & Teaching Record",
    "visuals": [
      {
        "src": "/images/paintings/painting_1.jpg",
        "caption": "Wildlife Fur & Texture Study: Micro-textural rendering and hair follicle volume."
      },
      {
        "src": "/images/paintings/painting_6.jpg",
        "caption": "Classical Form & Sari Study: Drapery tension, weight, and anatomical mass."
      },
      {
        "src": "/images/paintings/painting_8.jpg",
        "caption": "Bengaluru Streetlife: Plein air watercolor capturing tropical midday light and shadow."
      },
      {
        "src": "/images/paintings/painting_9.jpg",
        "caption": "Classical Plaster Cast: Subtle plane changes and chiaroscuro value scales."
      }
    ],
    "caseLink": "/artist-educator",
    "diaryLink": "/visual-diary?discipline=fine-art"
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
        <meta name="description" content="Visual worlds for brands: packaging systems, campaigns, production design ops, digital platforms, and fine art by H P Shivaraj." />
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

          <div className="space-y-4 pt-4" style={{ maxWidth: '680px', color: 'rgba(240,237,230,0.78)', fontSize: '1.02rem', lineHeight: 1.8 }}>
            <p>
              I build visual worlds for brands: the idea behind a pack, the character of a campaign, and the details that carry both into the real world.
            </p>
            <p>
              At Jus’Amazin, my work spans original product identities, packaging systems, illustration, product imagery, motion and physical brand experiences. I combine concept development and hands-on design with the production knowledge needed to take work from a first direction to a finished pack.
            </p>
            <p className="text-xs font-mono text-[#F0EDE6]/50 pt-1">
              Official role: Manager &ndash; Communication Design (earlier Visual Communicator / Packaging Designer). Project credits describe my specific contribution.
            </p>
          </div>

          <div className="w-full flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/08 text-xs font-mono text-[#F0EDE6]/50 uppercase tracking-widest">
            <span>5 Core Disciplines</span>
            <span>✦</span>
            <span>12 Canonical Case Studies</span>
            <span>✦</span>
            <span>Verified Commercial &amp; Pedagogical Output</span>
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
                  <span className="text-[#D4600A] font-bold">CASE {idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>
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
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
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

              {/* 4. Selected Visuals with Informative Captions */}
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
                    <span>&rarr;</span>
                  </Link>

                  {project.diaryLink && (
                    <Link
                      href={project.diaryLink}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F0EDE6] border border-white/10 font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>View Diary &amp; Process</span>
                      <span>&#8599;</span>
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

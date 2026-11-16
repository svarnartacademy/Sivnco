export const PROFILE = {
  name: 'H P Shivaraj Acharya',
  email: 'sivnco.in@gmail.com',
  phone: '+91 84312 72507',
  summary:
    'Brand and packaging designer with commercial experience since 2022 and progression to Manager – Communication Design at Jus’Amazin. Connect retail insight, illustration and visual systems with campaign storytelling, 3D imagery and print production across 85+ commercial SKUs. University of Mysore gold medalist in B.V.A. Applied Art, with an independent art practice and experience teaching visual thinking.',
  skills:
    'Brand identity · Packaging systems · Concept development · Illustration · Typography · Campaign art direction · 3D visualisation · Dielines & prepress · Supplier coordination · Artwork governance',
  roles: [
    {
      title: 'Manager – Communication Design',
      company: 'Jus’Amazin Foods and Beverages Pvt Ltd, Bengaluru',
      dates: 'Dec 2024 – Present',
      bullets: [
        'Lead brand and packaging work from founder brief and concept through typography, illustration, dielines, product imagery, proofs and production handoff across an 85+ SKU portfolio.',
        'Translate packaging identities into retail POS, marketplace assets, gifting, social and email creative; develop campaign concepts, scripts, storyboards, motion edits and Blender product imagery.',
        'Coordinate print suppliers across digital, offset and rotogravure: compare RFQs, materials and quantities; review prepress and colour proofs; manage artwork approvals and releases.',
        'Coordinated Desi Energy Bar’s transition from a digital trial to a 160,000-pouch rotogravure order. Recorded unit pricing moved from approximately ₹5.07 to ₹0.78 (~85% lower), alongside the change in process and volume.',
        'Compared supplier quotations for a 28,000-label order; selected a ₹0.75-per-label option against ₹1.40, a quoted saving of ₹18,200 (~46%).',
        'Maintain a 277-file print-ready artwork directory and release trackers; coordinate ingredient, nutrition and claim updates with quality colleagues while owning visual artwork checks.'
      ]
    },
    {
      title: 'Visual Communicator / Packaging Designer',
      company: 'Jus’Amazin Foods and Beverages Pvt Ltd, Bengaluru',
      dates: 'Aug 2023 – Nov 2024',
      bullets: [
        'Reworked 38+ legacy jar-label variants into a coherent visual family; adapted hierarchy and colour systems across glass/PET jars, pouches, sachets and cartons.',
        'Developed packaging, illustration and retail applications for Desi Energy Bar and visual systems for Lil’Stars and Mom2B; worked directly with founders, operations, sales and printers.',
        'Established reusable artwork and design-to-print workflows; promoted to Manager – Communication Design effective December 2024.'
      ]
    },
    {
      title: 'Graphic Designer — Remote Contract',
      company: 'Refresh Kid LLC, United States',
      dates: 'Nov 2022 – Nov 2023',
      bullets: [
        'Created mathematics explainers, PSAT solution visuals, educational video content and marketing assets; collaborated asynchronously across briefs, revisions and delivery.'
      ]
    }
  ],
  additional: [
    'SIVNCO — Independent Art & Design Practice | 2025–Present. Selected identity, packaging, illustration, fine-art and 3D projects outside full-time employment, on Sundays and holidays. Design and maintain the portfolio using AI-assisted development.',
    'SVARNART Academy — Co-Founder & Visual Arts Curriculum Lead | Jan 2026–Present. Co-founded with Harshada; develop visual-arts curriculum, studio identity, learning resources and student/teacher workflows. Apply AI-assisted React/Firebase development to academy operations.',
    'Openhouse Technologies — Art Teacher Partner, part-time | Apr 2025–Apr 2026. Taught drawing, painting, colour and composition to 20+ weekly learners. Across teaching and mentoring, supported portfolio preparation and showcases featuring 120+ student artworks.'
  ],
  education:
    'B.V.A., Applied Art — CAVA, University of Mysore | 2019–2023. University gold medal, recorded in 2024. Fine Art Foundation Studies, CAVA | 2017–2019.'
};

export const PROJECTS = {
  deb: {
    title: 'Desi Energy Bar — concept to commercial packaging',
    href: '/jusamazin/desi-energy-bar',
    image: '/images/jusamazin/desi_bar/studio_render_a.jpg',
    scope: 'Retail Study / Character Illustration / Rotogravure Packaging',
    description:
      'Used a 25-store Bengaluru retail study to develop “Structured Chaos”: high-contrast blue, Indian street-play references, hand-drawn characters and clear product information. Extended the concept into wrappers, counter dispensers and physical colour tests.'
  },
  system: {
    title: 'Packaging architecture & Universal Master Pouch',
    href: '/jusamazin/core-packaging',
    image: '/images/jusamazin/jars/glass_front.jpg',
    scope: 'Range Architecture / Alignment Guides / Multi-Variant Rollout',
    description:
      'Created modular front/back labels and printed alignment guides with operations and production colleagues (observational throughput: ~100 to 400–500 pouches/hour). Supported repeat common-pouch runs and an 80,000-pouch snack rollout.'
  },
  campaign: {
    title: '30-Second Almond Drink — packaging to moving image',
    href: '/campaigns#almond-milk',
    image: '/images/jusamazin/management/almond_milk.jpg',
    scope: 'Campaign Concept / Script / 3D & Motion Direction',
    description:
      'Extended the product identity into comparison and kinetic-type films: concepts, scripts, storyboards, Blender renders, motion editing and sound. Developed related sachet, bottle and multipack communication.'
  },
  studio: {
    title: 'OG Mithai & Vedic Treats — independent concepts',
    href: '/in-house-designs',
    image: '/images/og_mithai/ogmitai_camera_front.jpg',
    scope: 'Concept & Unproduced Work / Luxury Packaging / 3D Visualisation',
    description:
      'Explored contrasting luxury and heritage brand worlds through rigid-box gifting, packaging graphics and Blender/interactive 3D visualisation.'
  }
};

export const VERSIONS = {
  packaging: {
    label: 'Brand & Packaging Design · Art Direction',
    file: 'H_P_Shivaraj_Brand_Packaging_Designer.pdf',
    intro: 'Brand and packaging design leadership, from retail insight and visual concept to the printed pack.',
    projects: ['deb', 'system', 'campaign', 'studio']
  },
  art: {
    label: 'Art Director — Brand & Packaging',
    file: 'H_P_Shivaraj_Art_Director.pdf',
    intro: 'Hands-on art direction across brand worlds, character illustration, packaging architecture and moving image.',
    projects: ['deb', 'campaign', 'system', 'studio']
  },
  visual: {
    label: 'Senior Visual & Packaging Designer',
    file: 'H_P_Shivaraj_Senior_Visual_Designer.pdf',
    intro: 'Visual systems across packaging architecture, motion campaigns, 3D product imagery and digital experiences.',
    projects: ['campaign', 'deb', 'system', 'studio']
  }
};

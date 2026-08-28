import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import Navbar from '../components/Navbar'

// ─── DATA ───────────────────────────────────────────────────────────────────

const CAMPAIGNS = [
  {
    id: 'almond-milk',
    num: '01',
    label: 'Campaign · Motion · Q-Commerce',
    title: '30 SAM',
    fullTitle: 'Second Almond Milk',
    subtitle: '30-Second Revolution',
    accent: '#0046FF',
    accentAlt: '#5A189A',
    techTag: 'CASE_STUDY_04 // CATEGORY: FMCG_MARKETING_SYSTEMS',
    tldr: {
      brief: 'Break consumer illusion about what\'s inside their carton.',
      idea: 'Weaponize transparency — make the 30-second paste replace an 8-hour ritual on screen.'
    },
    myRole: ['Creative Direction', 'Motion Concept', 'Script & Storyboard', 'Video Editing', 'Typography System', 'Packaging Redesign'],
    brand: 'Jus\'Amazin — 100% Almond Milk Paste (Sachet Format)',
    brief: 'Break into the dairy-free milk alternative category on quick-commerce platforms where decisions happen in under 3 seconds. Expose the 1–4% almond content hidden inside mass-market carton brands and position Jus\'Amazin\'s pure paste sachet as the radical, transparent alternative.',
    insight: 'Most people buying almond milk from a carton don\'t know what\'s actually inside. They trust it because the packaging says "almond." The reality is that most mass-market cartons contain 1–4% actual almond — the rest is emulsifiers, thickeners, and stabilizers. That gap between what people believe and what they\'re actually buying is where the whole campaign lived.',
    concept: 'Don\'t hide it, show it. Instead of building prettier packaging, the idea was to make the ingredient comparison unavoidable. Two films, two angles: one that puts our paste against a competitor\'s carton side by side for 30 seconds — no voiceover, just the visual doing the work. And a second, quieter film that lets typewriter click-clacks and plain text do the talking. The kind of quiet confidence that premium consumers respond to.',
    pillars: [
      {
        num: '01',
        header: 'The Collective Illusion',
        tag: 'THE_TRANSPARENCY_TRAP',
        body: 'Most people pick up almond milk because they trust the label. What they don\'t know — because there\'s no reason they would — is that the carton in their fridge is mostly water, emulsifiers, and thickeners. Maybe 2% almond, if that. The whole campaign started from asking: what if consumers could actually see that? What if we made the gap between the claim and the contents impossible to ignore?'
      },
      {
        num: '02',
        header: 'Creative Disruption',
        tag: 'DISAPPEARING_ACTS',
        body: 'The shift we needed to make was this: homemade almond milk is great, but nobody has time to soak, peel, blend, and strain on a Tuesday morning. The sachet collapses all of that into 30 seconds. The creative job was just to make that trade feel obvious — almost embarrassingly obvious. Show the 8-hour ritual disappearing. Let the convenience prove itself on screen.'
      },
      {
        num: '03',
        header: 'High-Velocity Conversion',
        tag: 'THE_7_DAY_BLAST',
        body: 'The 30-second film was built for quick commerce. At that scroll speed, you have maybe 3 seconds before someone keeps moving. We put the comparison right at the top — carton ingredients vs. what\'s in our sachet — and let the contrast do the selling. No spokesperson. No music. Just the visual argument, straight. The first 3-day run was enough to show it was working.'
      },
      {
        num: '04',
        header: 'The Silent Attack',
        tag: 'NOSTALGIC_DISRUPTIONS',
        body: 'The second film was for a different kind of person. Someone who finds the loud D2C energy exhausting and trusts brands that don\'t shout at them. It\'s all type — vintage typewriter style, clicking through the ingredient facts one by one. No voiceover, just the sound of keys and the text appearing. The kind of ad that feels more like a document than an advertisement. Which is exactly why it worked for the audience it was targeting.'
      },
      {
        num: '05',
        header: 'The Royal Pivot',
        tag: 'CHROMATIC_RETAINING',
        body: 'Once the campaign proved the concept, the package needed to match it. The original sachet design was fine — but "fine" loses on shelf. We went through a few rounds of testing before landing on the Royal Purple. It sounds like an odd call for a health product, but that\'s exactly what made it work. It stopped people. Purple doesn\'t exist in that category. Once they tried it and liked it, the color became the recall cue. That\'s how you build retention — not through messaging, but through recognition.'
      },
      {
        num: '06',
        header: 'Commercial Retrospective',
        tag: 'STRATEGIC_SCALE',
        body: 'The transparency argument worked. The numbers came in, and leadership confirmed it — new customers coming in specifically because of the ingredient comparison, orders scaling over the following month, and the rebrand giving the whole category a reason to exist. That\'s what happens when the creative is honest about the product instead of decorating it.'
      }
    ],
    soulQuote: 'The commercial market hides its shortcuts inside thick, opaque cardboard cartons. To win the consumer\'s trust, we didn\'t just build a prettier package; we weaponized transparency. By stripping away retail clutter and wrapping our product in a striking Royal Purple statement, we made user inconvenience disappear. Design at this scale isn\'t about matching the category — it\'s about creating an uncompromised visual truth that forces the market to answer for its ingredients.',
    executions: [
      {
        num: '01',
        channel: 'Q-Commerce PDP',
        title: '30-Sec Comparison Film',
        src: '/videos/jusamazin/30-sec-almond-milk-compare.mp4',
        isVideo: true,
        campaignType: 'Visual Breakdown Tactic',
        duration: '7 Days — High-intensity cross-platform run',
        topFunnel: '15K–20K Impressions',
        midFunnel: '6,000+ Active Conversions',
        bottomFunnel: '11,000+ Orders (30–45 Day Window)',
        reaction: 'Immediate visual shock & brand switching',
        adNote: 'Split-screen tension at 1:1 aspect ratio — the left side compresses 8 hours of traditional overnight process into 10 seconds, the right shows the paste dissolving in real time. No voiceover needed. The visual does the persuasion.',
        channels: 'Blinkit PDP · Zepto Product Carousel · Amazon A+ Content'
      },
      {
        num: '02',
        channel: 'Social / Paid',
        title: '30-Sec Kinetic Typography',
        src: '/videos/jusamazin/30sad-typewriter-final.mp4',
        isVideo: true,
        campaignType: 'Silent Attack Tactic',
        duration: '7 Days — Targeted minimal niche positioning',
        topFunnel: '15K–20K+ Audience Reach',
        midFunnel: '3,000–4,000+ Targeted Reach Outs',
        bottomFunnel: '2,000–3,000+ Settled Product Orders',
        reaction: 'Sophisticated curiosity & steady onboarding',
        adNote: 'Built for sound-off vertical scrolling. Kinetic typewriter animation — vintage click-clack audio disruption delivering proof points: "100% Almonds", "No Emulsifiers" — in the first 3 seconds. Type is the visual idea here, not decoration.',
        channels: 'Instagram Stories · Reels · Meta Paid Acquisition'
      },
      {
        num: '03',
        channel: 'Brand / YouTube',
        title: 'Full Campaign Launch Film',
        src: '/videos/jusamazin/full-sam-final.mp4',
        isVideo: true,
        campaignType: 'Long-Form Brand Film',
        duration: 'Ongoing — Brand & storefront placement',
        topFunnel: 'Full-funnel brand building',
        midFunnel: 'Trust layer for retention',
        bottomFunnel: 'Category entry for new audiences',
        reaction: 'Trust-building for health-conscious families',
        adNote: 'Long-form brand film combining macro ingredient photography with lifestyle integration. Positions "30-Second Almond Milk" as a clean, sustainable dietary upgrade — not a convenience hack.',
        channels: 'YouTube Pre-Roll · Brand Website · Amazon Storefront'
      }
    ],
    metrics: [
      { value: '20K', label: 'Max impressions captured during the initial 3-day high-velocity platform burst.', tag: 'TOP FUNNEL' },
      { value: '6,000+', label: 'Verified user conversions driven by the transparency visualization asset.', tag: 'MID FUNNEL' },
      { value: '11,000+', label: 'Cumulative sachet orders scaled over a 45-day attribution cycle.', tag: 'BOTTOM FUNNEL' },
      { value: 'LOYALTY↑', label: 'Long-term retention index established via post-visual rehaul brand standard.', tag: 'RETENTION LOOP' }
    ],
    testimonials: [
      { name: 'Jitin Munjal', role: 'Co-Founder & CEO, Jus\'Amazin', category: 'leadership', quote: 'This comparison format completely simplified our category education. It has elevated our overall content standards, significantly boosted our brand image, and funneled entirely new customer segments straight into our 32nd almond milk category.' },
      { name: 'Shilpa Moglishetty', role: 'Co-Founder, Jus\'Amazin', category: 'leadership', quote: 'The transparency visualization worked beautifully. It gave our consumers a clear, unmistakable reason to look for our house-made sachet over common cartons, and the conversion numbers speak directly to how well that narrative connected.' }
    ],
    reflection: 'If I were to extend this, I\'d develop an OOH version — a single visual of the paste jar next to a clock showing "8 Hours vs. 30 Seconds." The idea is strong enough to work on a billboard at 60kmph. The comparison campaign proved the concept; the next step is scaling the transparency argument beyond digital into physical retail presence.'
  },
  {
    id: 'desi-energy-bar',
    num: '02',
    label: 'Campaign · Packaging · Retail',
    title: 'Desi Energy Bar',
    fullTitle: 'Structured Chaos',
    subtitle: 'Nostalgia with Rigour Underneath',
    accent: '#0066FF',
    accentAlt: '#FFB703',
    techTag: 'CASE_STUDY_02 // CATEGORY: RETAIL_PACKAGING_SYSTEMS',
    tldr: {
      brief: 'Make health food feel Indian, not imported.',
      idea: 'Structured Chaos — nostalgia as an asset, colour as a long-range weapon.'
    },
    myRole: ['Creative Direction', 'Field Research (25 stores)', 'Character Design', 'Retail Packaging', 'Color Strategy', 'Campaign Platform'],
    brand: 'Jus\'Amazin — Desi Energy Bar Range',
    brief: 'Launch a new energy bar into a saturated health snacking category dominated by clinical, Western-aesthetic brands. Stand out on shelf, create an emotional connection with Indian consumers across generations — from children to elderly — and reposition a traditional chikki as a culturally grounded daily ritual rather than a generic health product.',
    insight: 'Go to any health snack aisle and everything looks like it belongs in a gym. Clean sans-serif, white space, green accents — it all says the same thing. That aesthetic is borrowed from Western markets, and a lot of Indian consumers don\'t see themselves in it. This product had the actual cultural story to tell — it\'s a chikki, which is exactly what every Indian kid grew up eating after school. The insight was: don\'t pretend to be something imported. Own where you actually come from.',
    concept: 'Structured Chaos. A visual language that deliberately breaks the grid — maximalist, vibrant, nostalgic — but underpinned by rigorous color theory and compositional logic. The "chaos" signals cultural authenticity. The "structure" signals quality. Neither works without the other. For kids: vibrant, energetic caricatures and fluid custom character animations. For the 30s–40s demographic: hyper-local street memories — raw games of Lagori, chaotic Gully Cricket matchups, and the unmistakable silhouette of a vintage Atlas Bicycle (specifically the classic models). The Lightning Blue/Turquoise background was the final master key — engineered for long-range shelf presence to pull consumers from across the store into our short-range nostalgia story.',
    pillars: [
      {
        num: '01',
        header: 'The Plain Commodity Problem',
        tag: 'THE_IDENTITY_GAP',
        body: 'In its early stages, the product was trapped in a generic category template — visualized as a plain health bar lacking a distinct soul or reason to exist. It had no narrative muscle to define what it was or why it existed. The challenge was to transform an uncharacteristic functional food into an emotional, culturally grounded daily ritual for Indian families.'
      },
      {
        num: '02',
        header: 'Behavioral Mapping',
        tag: 'THE_25_STORE_FIELD_STUDY',
        body: 'I spent time watching people at retail stores — around 20–25 across the city. Not with a formal survey, just observing who stopped, who picked things up, what age groups noticed what. What came through clearly was that kids and parents respond to completely different things. Kids need something to grab their attention fast. Their parents or grandparents need something that feels familiar. The real opportunity was to make one design do both those jobs at the same time.'
      },
      {
        num: '03',
        header: 'Nostalgia as an Asset',
        tag: 'VISUAL_FUSION_PLAYBOOK',
        body: 'For the kids, vibrant illustrations and custom characters — the kind of energy that makes a 7-year-old stop mid-aisle. For the adults buying it, something more layered: Lagori, Gully Cricket, the old Atlas Bicycle. Specifically the old Atlas — not the updated version, the one people of a certain age actually remember. The illustrations needed to trigger a real memory, not a generic one. That specificity is what made it land.'
      },
      {
        num: '04',
        header: 'The Long-Range Attack',
        tag: 'CHROMATIC_BREAKTHROUGH',
        body: 'The illustration worked beautifully once someone was right in front of it. The problem was getting them there in the first place. From across the store, the earlier versions were getting lost in the noise. We tried a few directions — warmer tones, earthy colors — and none of them had the pull we needed from distance. The Lightning Blue came through trial and error. It was a risk, because it doesn\'t belong in the wellness category. That\'s exactly why it worked. You see it from across the store before you know what it is.'
      }
    ],
    soulQuote: 'The core of this project was to capture a specific sensory memory: the post-play "evening snack" where Chikki was our primary source of energy. While the design evolved to combine traditional Indian chikki with a healthy fusion of millets, oats, nuts, and seeds to meet rigorous brand requirements, the "soul" of the product remained unchanged. To me, a successful product isn\'t just about pixel perfection; it\'s about the Idea and the Intent. I chose to lean into the "imperfections" and the meaningful chaos of real life, creating a visual language that feels human, nostalgic, and authentic.',
    executions: [
      {
        num: '01',
        channel: 'Retail Packaging',
        title: 'Primary Pack Design',
        src: '/images/jusamazin/desi_bar/studio_render_a.jpg',
        isVideo: false,
        adNote: 'Electric blue base chosen deliberately against the amber/earth-tone health category. The nostalgic cartoon illustration anchors the "Desi" claim without using the word. Shelf presence over brand consistency — the rule was broken intentionally.',
        channels: 'Retail shelf · Modern trade · Quick commerce'
      },
      {
        num: '02',
        channel: 'Ideation Process',
        title: 'Design Runway — Sketch to Final',
        src: '/images/jusamazin/desi_bar/runway_final.jpg',
        isVideo: false,
        adNote: 'Seven stages from initial sketch to print-ready file. The concept direction changed twice — early versions were too clean, too "health brand." The breakthrough came when we leaned into the imperfection of hand-drawn illustration as a feature, not a limitation.',
        channels: 'Internal brand review · Production handoff'
      },
      {
        num: '03',
        channel: 'Retail Environment',
        title: 'Shelf Placement & Pack Array',
        src: '/images/jusamazin/process/draft_packaging_02.jpg',
        isVideo: false,
        adNote: 'The array test proved the hypothesis: at retail exposure distance, the electric blue cuts through the competitive set in under 2 seconds. Adjacent products — muted amber, white, green — recede. The chaos creates a visual anchor.',
        channels: 'Physical retail · Modern trade · Checkout POS counter'
      }
    ],
    metrics: [
      { value: '70%', label: 'Increase in snacking range sales following the visual overhaul and nostalgic rebrand.', tag: 'SALES GROWTH' },
      { value: '34%', label: 'Overall contribution of this product to the brand\'s total revenue in FY 2024–25.', tag: 'REVENUE SHARE' },
      { value: '8,000', label: 'Units per month. Scaled from 250 units in the first month to current high-velocity production.', tag: 'MONTHLY VOLUME' },
      { value: '58%', label: 'Increase in retail brand recognition achieved in Q3 & Q4 of FY 2024–25.', tag: 'BRAND RECOGNITION' }
    ],
    testimonials: [
      { name: 'Jitin Munjal', role: 'Co-Founder & CEO, Jus\'Amazin', category: 'leadership', quote: 'I\'ve loved the design as it was our dream to have this product in our portfolio as a charmer and this design has held true for all the ideology we wanted for the product.' },
      { name: 'Shilpa Moglishetty', role: 'Co-Founder, Jus\'Amazin', category: 'leadership', quote: 'Well it is a series of nostalgia that we looked for out of which this design styling worked the best for us as it was the most relevant and connecting to all of us.' },
      { name: 'Roshan Kulranjan', role: 'Business Operations Head', category: 'team', quote: 'I wasn\'t sure about the color blue with nostalgia, but surprisingly it works as blue grasps attention and the nostalgia keeps the attention span long enough for them to make the purchase.' },
      { name: 'Manoj', role: 'Production Head', category: 'team', quote: 'It\'s so fun and out of the blue. I don\'t find it typical, but it works great as it sells in the market.' },
      { name: 'Juhi Singh', role: 'Colleague & Visual Designer', category: 'team', quote: 'He has a good understanding of emotions so that grasp of gully cricket was expected, but the fusion of electric blue is what works as a punch.' },
      { name: 'Arun', role: 'Customer / Parent', category: 'consumer', quote: 'It\'s hard to see kids not choosing healthy stuff due to their plain packaging, and when kids are attracted to healthy stuff like this, it\'s good.' },
      { name: 'Dwani Trivedi', role: 'Customer', category: 'consumer', quote: 'It\'s a weird story — I wanted to eat something as I was feeling dizzy due to low sugar at a mall. This captured my eyes even on the brink of collapse, but then the cartoons made me smile. It\'s a fun packaging that really grabs attention.' },
      { name: 'Samuel', role: 'Customer', category: 'consumer', quote: 'Crazy colors and abstract visual appearance, so it\'s an easy eye-grabber for sure.' },
      { name: 'Gagan', role: 'Customer', category: 'consumer', quote: 'Well, it\'s too overloaded, but that\'s what is out of the box from the market.' }
    ],
    reflection: 'The design solved shelf presence brilliantly. What I\'d extend: a 15-second social video where the cartoon character "comes alive" — reinforcing the nostalgia claim in motion. The packaging created the idea; the next campaign is animating it. The chromatic breakthrough — the Lightning Blue — is strong enough to become the brand\'s permanent visual signature across the entire snacking category.'
  },
  {
    id: 'superfoods',
    num: '03',
    label: 'Packaging · Typography · Compliance',
    title: 'Superfoods Range',
    fullTitle: 'Precision as Design',
    subtitle: 'De-Clinicalizing Wellness',
    accent: '#2ECC71',
    accentAlt: '#6B8F47',
    techTag: 'CASE_STUDY_03 // CATEGORY: PACKAGING_SYSTEMS',
    tldr: {
      brief: 'Turn compliance copy into a trust signal.',
      idea: 'Typography as the brand\'s argument for transparency — and a universal pouch system as a financial masterstroke.'
    },
    myRole: ['Creative Direction', 'Packaging System Design', 'Typography Overhaul', 'Factory Floor UX', 'Production Print Specs', 'Brand Guidelines Authoring'],
    brand: 'Jus\'Amazin — Superfood Pouch Range (500g / 1kg Flexible Pouch)',
    brief: 'Redesign the back-of-pack information system and front-of-pack visual identity for the superfood pouch line — achieve premium visual cleanliness while increasing information density, passing regulatory compliance, and creating a modular system scalable across an entire product category lineup.',
    insight: 'The existing superfoods range suffered from a severe identity crisis — looking more like cold, clinical prescription medicine than a premium consumer product for individuals seeking a naturally healthy life. In the clean-label category, the back of pack is not a regulatory obligation — it\'s the second sales pitch. Consumers who flip the pack have already made a provisional decision to trust. What they see next either confirms that trust or collapses it.',
    concept: 'Typography as brand argument. Every typographic decision — casing, spacing, punctuation, hierarchy — is an implicit claim about the brand\'s relationship with transparency. "Flax seed" in lowercase says: we are precise, not performative. Removing stray punctuation says: we have nothing to hide. And midway through design finalization, a corporate bottleneck forced a creative breakthrough — a single, universal master pouch format dynamically iterable across multiple diverse products via custom label overlays. The financial constraint became a modular branding masterclass.',
    pillars: [
      {
        num: '01',
        header: 'De-Clinicalizing Wellness',
        tag: 'THE_MEDICINAL_TRAP',
        body: 'The original packaging looked like something you\'d find behind a pharmacy counter. White, clinical, earnest in the wrong way. It communicated health but not lifestyle, and for a product that sits in premium retail, that gap matters. First thing to fix: make it look like something a person would actually want to have in their kitchen. The medicine shelf aesthetic had to go completely.'
      },
      {
        num: '02',
        header: 'Urban Escapism',
        tag: 'THE_PUBLIC_PARK_PARADIGM',
        body: 'Urban consumers who buy superfoods are often chasing something — a bit of calm, a connection to something natural that daily city life doesn\'t give them. The design direction leaned into that. Natural backdrops, green open spaces — the kind of imagery that makes a person in a metro apartment feel momentarily like they\'re somewhere else. The product is still very much real food, but the packaging gives it a bit of breathing room.'
      },
      {
        num: '03',
        header: 'Creative Finance',
        tag: 'THE_UNIVERSAL_HACK',
        body: 'Halfway through, the budget got tight. The original plan needed individual pouch prints for each SKU — that wasn\'t going to work anymore. Instead of scaling down the vision, I redesigned the entire approach: one master pouch format, with custom label overlays for each product. Saved money, actually made the shelf look more cohesive, and gave us the flexibility to add new products quickly. The constraint ended up being the better design decision.'
      },
      {
        num: '04',
        header: 'Floor-Aware Design',
        tag: 'OPERATIONAL_ACCELERATION',
        body: 'I spent some time on the factory floor watching how the team was applying stickers. The process was slow and inconsistent — people were eyeballing placement, and it was costing hours. The fix was simple: build alignment guidelines directly into the label and packaging print. Not glamorous work, but watching the team go from 100 pouches an hour to 400+ was one of the more satisfying outcomes of this whole project. Good design has to work for the people making the product, not just the people buying it.'
      }
    ],
    soulQuote: 'An elegant design system means nothing if it breaks down on the factory floor or drains the company\'s fundraising capital. When budget limits and operational friction hit the Superfoods range, it didn\'t ruin the design — it forced it to become smarter. Shifting to a universal pouch system wasn\'t just a financial compromise; it was a masterclass in modular branding. Designing strict, visual sticker guidelines wasn\'t glamorous, but watching real humans on the production line quadruple their daily output proved that commercial design is as much about human empathy and workflow optimization as it is about front-of-pack aesthetics.',
    executions: [
      {
        num: '01',
        channel: 'Back of Pack',
        title: 'Typography System Overhaul',
        src: '/images/jusamazin/superfoods/typography_macro.jpg',
        isVideo: false,
        adNote: 'Strict lowercase nomenclature for all ingredient variables — "Flax seed", "dietary fiber", "omega-3". Unified "Superfood" as a single word, eliminating the confusion of "Super Food" spacing. Solid black body font for critical nutritional values (Protein 25.9g, Dietary Fiber 24.1g). The change is invisible to the casual reader and decisive for the engaged one.',
        channels: 'Flexible pouch 500g · 1kg format'
      },
      {
        num: '02',
        channel: 'Shelf System',
        title: 'Universal Pouch Architecture',
        src: '/images/jusamazin/superfoods/shelf_lineup.jpg',
        isVideo: false,
        adNote: 'A single master pouch format dynamically iterable across the full product lineup via custom label overlays. Color-coded SKU differentiation with a consistent structural grid. The shelf reads as a system, not a collection. A financial constraint engineered into a modular branding advantage.',
        channels: 'Modern trade shelf · Online product listing photography'
      },
      {
        num: '03',
        channel: 'Factory Floor System',
        title: 'Alignment Guideline Integration',
        src: '/images/jusamazin/superfoods/nutrition_label.jpg',
        isVideo: false,
        adNote: 'High-visibility alignment guidelines built directly onto the packaging and stickers for human workflow optimization. Removed the manual bottleneck that limited output to 100 pouches/hour.',
        channels: 'Print production · FSSAI compliance · Factory floor deployment'
      }
    ],
    metrics: [
      { value: '5×', label: 'Increase in factory floor packaging and labeling throughput efficiency.', tag: 'FLOOR VELOCITY' },
      { value: '200K', label: 'Maximum units scaled in full-fledged commercial printed production runs.', tag: 'PRINT SCALE' },
      { value: '400–500', label: 'Pouches per hour achieved post alignment guideline integration. Up from 100/hr.', tag: 'UNITS / HOUR' }
    ],
    testimonials: [
      { name: 'Jitin Munjal', role: 'Co-Founder & CEO, Jus\'Amazin', category: 'leadership', quote: 'The back-of-pack overhaul cleaned up our technical parameters perfectly. Moving to solid black body text and standardizing our layout casing immediately elevated our regulatory presentation.' },
      { name: 'Manoj', role: 'Production Head', category: 'team', quote: 'Before the alignment guidelines were built onto the labels, our team was losing endless hours trying to center stickers manually on the pouches. The new system instantly boosted our hourly output from 100 to over 400 units.' },
      { name: 'Gagan', role: 'Customer', category: 'consumer', quote: 'I used to walk right past these packs because they looked like old health supplements from a chemist\'s shop. The new scenic layouts look incredibly premium and make it clear that this is real, clean food for a healthy lifestyle.' }
    ],
    reflection: 'This project taught me that the most powerful design decisions are often invisible — the ones that make something feel right without the viewer knowing why. The universal pouch system wasn\'t just a financial workaround; it was a strategic advantage that competitors couldn\'t easily replicate. I\'d take this further by applying the same typographic precision to front-of-pack, making the typographic confidence visible and deliberate on the retail shelf itself.'
  }
]

// ─── CSS ─────────────────────────────────────────────────────────────────────

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --cp-bg:#0A0906;--cp-white:#F0EDE6;--cp-accent:#D4600A;
  --cp-muted:rgba(240,237,230,0.5);--cp-border:rgba(240,237,230,0.08);
  --cp-glass:rgba(240,237,230,0.03);
  --D:'Doto',sans-serif;--S:'Poppins',sans-serif;--M:'Space Mono',monospace;
}
html{scroll-behavior:smooth}
body{background:var(--cp-bg);color:var(--cp-white);font-family:var(--S);overflow-x:hidden;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}



/* HERO */
.cp-hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;border-bottom:1px solid var(--cp-border);padding-top:6rem}
.cp-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 15% 50%,rgba(212,96,10,0.1),transparent 55%),radial-gradient(ellipse at 85% 20%,rgba(212,96,10,0.05),transparent 55%),var(--cp-bg)}
.cp-hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px);background-size:80px 80px;mask-image:radial-gradient(ellipse 60% 70% at 50% 50%,black 20%,transparent 100%)}
.cp-hero-inner{position:relative;z-index:2;padding:0 5vw;width:100%;max-width:1400px;margin:0 auto}
.cp-hero-tag{font-family:var(--M);font-size:.62rem;letter-spacing:.28em;color:var(--cp-accent);margin-bottom:2.5rem;display:flex;align-items:center;gap:1rem}
.cp-hero-tag::before{content:'';width:32px;height:1px;background:var(--cp-accent)}
.cp-hero h1{font-family:var(--D);font-size:clamp(4rem,12vw,12rem);line-height:.85;margin-bottom:2rem}
.cp-hero h1 em{font-style:normal;color:var(--cp-muted);font-family:var(--S);font-weight:300;display:block;font-size:.3em;margin-top:1.5rem;line-height:1.9;max-width:640px;letter-spacing:0}
.cp-hero-pov{margin-top:4rem;border-left:2px solid var(--cp-accent);padding-left:2rem;max-width:680px}
.cp-hero-pov p{font-family:var(--S);font-size:1.15rem;line-height:1.9;color:var(--cp-muted);font-style:italic}
.cp-hero-pov strong{color:var(--cp-white);font-style:normal}
.cp-hero-scroll{display:flex;gap:3rem;margin-top:4rem;flex-wrap:wrap}
.cp-hero-count{text-align:center}
.cp-hero-count-num{font-family:var(--D);font-size:clamp(2rem,4vw,3.5rem);color:var(--cp-accent);line-height:1}
.cp-hero-count-label{font-family:var(--M);font-size:.55rem;letter-spacing:.2em;color:var(--cp-muted);margin-top:.4rem}

/* CAMPAIGN ANCHOR NAV */
.cp-campaign-nav{position:sticky;top:64px;z-index:50;background:rgba(10,9,6,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--cp-border);padding:1rem 5vw}
.cp-campaign-nav-inner{display:flex;gap:3rem;max-width:1400px;margin:0 auto;overflow-x:auto;scrollbar-width:none}
.cp-campaign-nav-inner::-webkit-scrollbar{display:none}
.cp-cam-link{font-family:var(--M);font-size:.6rem;letter-spacing:.2em;opacity:.5;transition:.3s;white-space:nowrap;padding:.3rem 0;border-bottom:1px solid transparent}
.cp-cam-link:hover,.cp-cam-link.active{opacity:1;border-bottom-color:var(--cp-accent)}

/* CAMPAIGN SECTION */
.cp-campaign{padding:12rem 0 8rem;border-bottom:1px solid var(--cp-border);position:relative}
.cp-c{max-width:1400px;margin:0 auto;padding:0 5vw}

/* SECTION DIVIDER */
.cp-section-divide{height:1px;background:var(--cp-border);margin:6rem 0;position:relative}
.cp-section-divide::before{content:'';width:40px;height:1px;background:var(--cp-accent);position:absolute;left:0;top:0}

/* Campaign header */
.cp-cam-header{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:start;margin-bottom:6rem}
.cp-cam-num{font-family:var(--D);font-size:clamp(8rem,16vw,18rem);line-height:.85;opacity:.05;position:absolute;top:8rem;right:3vw;pointer-events:none;letter-spacing:-.04em}
.cp-cam-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;margin-bottom:1.5rem}
.cp-cam-title{font-family:var(--D);font-size:clamp(4rem,9vw,10rem);line-height:.85;margin-bottom:.4rem}
.cp-cam-full-title{font-family:var(--S);font-size:clamp(1rem,2vw,1.3rem);font-weight:300;opacity:.35;letter-spacing:.05em;margin-bottom:1.2rem}
.cp-cam-sub{font-family:var(--S);font-size:clamp(1rem,2vw,1.5rem);font-weight:300;opacity:.35;margin-bottom:2rem}
.cp-cam-tech-tag{font-family:var(--M);font-size:.5rem;letter-spacing:.15em;opacity:.25;margin-bottom:2.5rem;padding:.4rem .8rem;border:1px solid var(--cp-border);display:inline-block;border-radius:2px}

/* TL;DR Card */
.cp-tldr{display:flex;gap:1.5rem;align-items:stretch;margin-bottom:2.5rem;border-left:2px solid;padding:1.2rem 1.6rem;background:rgba(240,237,230,0.025);border-radius:0 6px 6px 0}
.cp-tldr-label{font-family:var(--M);font-size:.5rem;letter-spacing:.22em;opacity:.45;writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;align-self:center;flex-shrink:0}
.cp-tldr-body{display:flex;flex-direction:column;gap:.5rem}
.cp-tldr-line{font-family:var(--S);font-size:.95rem;line-height:1.55;color:rgba(240,237,230,0.75)}
.cp-tldr-line strong{font-weight:600;color:#F0EDE6}

/* Story columns */
.cp-story-col{display:flex;flex-direction:column;gap:2.5rem}
.cp-story-block{position:relative}
.cp-story-block-label{font-family:var(--M);font-size:.55rem;letter-spacing:.22em;margin-bottom:.8rem;display:flex;align-items:center;gap:.8rem}
.cp-story-block-label::before{content:'';width:20px;height:1px;flex-shrink:0}
.cp-story-block-body{font-size:1.05rem;line-height:1.95;color:var(--cp-muted);max-width:540px}
.cp-story-block-body strong{font-weight:500;color:var(--cp-white)}

/* STRATEGY PILLARS */
.cp-pillars-section{margin:6rem 0}
.cp-pillars-header{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;margin-bottom:3rem}
.cp-pillars-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border:1px solid var(--cp-border)}
.cp-pillar-card{padding:2.5rem;border-bottom:1px solid var(--cp-border);border-right:1px solid var(--cp-border);position:relative;transition:background .3s}
.cp-pillar-card:nth-child(even){border-right:none}
.cp-pillar-card:hover{background:rgba(240,237,230,0.025)}
.cp-pillar-num{font-family:var(--D);font-size:3rem;line-height:1;opacity:.06;position:absolute;top:1.5rem;right:1.5rem}
.cp-pillar-tag{font-family:var(--M);font-size:.45rem;letter-spacing:.18em;opacity:.35;margin-bottom:.8rem}
.cp-pillar-header{font-family:var(--S);font-size:1.1rem;font-weight:600;margin-bottom:1rem;line-height:1.3}
.cp-pillar-body{font-size:.88rem;line-height:1.9;color:var(--cp-muted)}

/* SOUL BLOCK */
.cp-soul{background:#050505;padding:8rem 5vw;margin:0 -5vw;position:relative;overflow:hidden}
.cp-soul::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(var(--soul-color,212,96,10),0.06),transparent 60%)}
.cp-soul-inner{max-width:900px;margin:0 auto;text-align:center}
.cp-soul-label{font-family:var(--M);font-size:.52rem;letter-spacing:.3em;opacity:.35;margin-bottom:3rem;display:flex;align-items:center;justify-content:center;gap:1.5rem}
.cp-soul-label::before,.cp-soul-label::after{content:'';width:48px;height:1px;background:currentColor;opacity:.3}
.cp-soul-quote{font-family:var(--S);font-size:clamp(1.1rem,2.2vw,1.55rem);line-height:2;font-weight:300;font-style:italic;color:rgba(240,237,230,0.75)}
.cp-soul-quote::before{content:'"';font-family:var(--D);font-size:4rem;line-height:0;vertical-align:-.6em;opacity:.2;margin-right:.3rem}

/* IMAGE PLACEHOLDER */
.cp-img-placeholder{position:relative;border-radius:8px;overflow:hidden;border:1px solid var(--cp-border);background:rgba(240,237,230,0.02);aspect-ratio:16/9;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;transition:border-color .4s}
.cp-img-placeholder:hover{border-color:rgba(var(--accent-rgb,212,96,10),0.3)}
.cp-img-placeholder-icon{width:56px;height:56px;opacity:.15;display:flex;align-items:center;justify-content:center}
.cp-img-placeholder-icon svg{width:100%;height:100%}
.cp-img-placeholder-label{font-family:var(--M);font-size:.5rem;letter-spacing:.2em;opacity:.2;text-align:center;max-width:200px;line-height:1.8}

/* Executions */
.cp-execs-label{font-family:var(--M);font-size:.58rem;letter-spacing:.25em;margin-bottom:3rem}
.cp-exec-item{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;margin-bottom:5rem;padding-bottom:5rem;border-bottom:1px solid var(--cp-border)}
.cp-exec-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.cp-exec-media{position:relative;border-radius:8px;overflow:hidden;border:1px solid var(--cp-border);background:rgba(240,237,230,0.03);aspect-ratio:16/9;transition:border-color .4s}
.cp-exec-media:hover{border-color:rgba(212,96,10,0.3)}
.cp-exec-media video,.cp-exec-media img{width:100%;height:100%;object-fit:cover;display:block}
.cp-exec-info{display:flex;flex-direction:column;gap:1.5rem;padding-top:1rem}
.cp-exec-num{font-family:var(--D);font-size:clamp(3rem,6vw,6rem);line-height:1;opacity:.07}
.cp-exec-channel{font-family:var(--M);font-size:.55rem;letter-spacing:.22em;margin-bottom:.3rem}
.cp-exec-title{font-family:var(--D);font-size:clamp(1.5rem,3vw,2.5rem);line-height:1;margin-bottom:.5rem}
.cp-exec-adnote-label{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;opacity:.5;margin-bottom:.4rem}
.cp-exec-adnote{font-size:.92rem;line-height:1.85;color:var(--cp-muted);font-style:italic}
.cp-exec-channels-label{font-family:var(--M);font-size:.5rem;letter-spacing:.18em;opacity:.5;margin-top:.5rem;margin-bottom:.3rem}
.cp-exec-channels{font-family:var(--M);font-size:.6rem;letter-spacing:.1em;color:var(--cp-accent)}

/* CAMPAIGN COMPARISON TABLE (Almond Milk) */
.cp-compare-section{margin:6rem 0}
.cp-compare-table{width:100%;border-collapse:collapse;font-family:var(--M);font-size:.65rem}
.cp-compare-table th{font-size:.5rem;letter-spacing:.2em;opacity:.5;padding:1rem 1.5rem;text-align:left;border-bottom:2px solid var(--cp-border);white-space:nowrap}
.cp-compare-table th:first-child{opacity:.3;font-size:.45rem}
.cp-compare-table td{padding:1rem 1.5rem;border-bottom:1px solid var(--cp-border);color:var(--cp-muted);font-size:.65rem;line-height:1.7;vertical-align:top}
.cp-compare-table tr:last-child td{border-bottom:none}
.cp-compare-table td:first-child{font-family:var(--M);font-size:.55rem;letter-spacing:.15em;opacity:.55;white-space:nowrap}
.cp-compare-table tbody tr:hover{background:rgba(240,237,230,0.02)}
.cp-compare-table .metric-hi{color:var(--cp-white);font-weight:700}

/* METRICS DASHBOARD */
.cp-metrics-section{margin:6rem 0}
.cp-metrics-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid var(--cp-border)}
.cp-metric-card{padding:2.5rem 2rem;border-right:1px solid var(--cp-border);position:relative;transition:background .3s}
.cp-metric-card:last-child{border-right:none}
.cp-metric-card:hover{background:rgba(240,237,230,0.02)}
.cp-metric-tag{font-family:var(--M);font-size:.45rem;letter-spacing:.2em;opacity:.3;margin-bottom:1.2rem}
.cp-metric-value{font-family:var(--D);font-size:clamp(2rem,4vw,3.5rem);line-height:1;margin-bottom:.8rem}
.cp-metric-label{font-size:.82rem;line-height:1.75;color:var(--cp-muted)}

/* TESTIMONIALS */
.cp-testimonials-section{margin:6rem 0}
.cp-testi-filters{display:flex;gap:.8rem;margin-bottom:3rem;flex-wrap:wrap}
.cp-testi-filter{font-family:var(--M);font-size:.52rem;letter-spacing:.18em;padding:.5rem 1.2rem;border:1px solid var(--cp-border);border-radius:40px;cursor:pointer;transition:.3s;background:transparent;color:var(--cp-white);opacity:.5}
.cp-testi-filter:hover{opacity:.8;border-color:rgba(240,237,230,0.2)}
.cp-testi-filter.active{opacity:1;border-color:var(--cp-accent);color:var(--cp-accent)}
.cp-testi-grid{columns:3;gap:1.5rem}
.cp-testi-card{break-inside:avoid;background:rgba(240,237,230,0.03);border:1px solid var(--cp-border);padding:1.8rem;margin-bottom:1.5rem;border-radius:4px;transition:opacity .4s,border-color .3s;position:relative}
.cp-testi-card:hover{border-color:rgba(240,237,230,0.15)}
.cp-testi-card.hidden{opacity:0;pointer-events:none;height:0;overflow:hidden;padding:0;margin:0;border:none}
.cp-testi-quote{font-size:.92rem;line-height:1.85;color:var(--cp-muted);font-style:italic;margin-bottom:1.5rem}
.cp-testi-quote::before{content:'"';opacity:.25;font-family:var(--D);font-size:1.5rem;display:block;margin-bottom:.5rem;line-height:1}
.cp-testi-name{font-family:var(--S);font-size:.82rem;font-weight:600;color:var(--cp-white);margin-bottom:.2rem}
.cp-testi-role{font-family:var(--M);font-size:.48rem;letter-spacing:.15em;opacity:.4}
.cp-testi-cat-badge{position:absolute;top:1.2rem;right:1.2rem;font-family:var(--M);font-size:.38rem;letter-spacing:.15em;opacity:.3;padding:.2rem .5rem;border:1px solid var(--cp-border);border-radius:2px}

/* Results */
.cp-results-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--cp-border);margin-bottom:4rem}
.cp-result-item{background:var(--cp-bg);padding:2rem;font-size:.92rem;line-height:1.8;color:var(--cp-muted)}
.cp-result-item::before{content:'→';font-family:var(--M);font-size:.7rem;color:var(--cp-accent);display:block;margin-bottom:.5rem}

/* Reflection */
.cp-reflection{background:rgba(240,237,230,0.025);border:1px solid var(--cp-border);padding:3rem;border-left:3px solid var(--cp-accent);margin-top:4rem}
.cp-reflection-label{font-family:var(--M);font-size:.55rem;letter-spacing:.22em;margin-bottom:1rem;opacity:.6}
.cp-reflection-body{font-size:1rem;line-height:1.95;color:var(--cp-muted);font-style:italic;max-width:720px}

/* CONCEPT RUNWAY */
.cp-runway-section{margin:6rem 0;border:1px solid var(--cp-border);padding:3rem;position:relative;overflow:hidden}
.cp-runway-section::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
.cp-runway-header{font-family:var(--D);font-size:clamp(1.5rem,3vw,2.5rem);line-height:1;margin-bottom:.5rem;position:relative}
.cp-runway-sub{font-family:var(--M);font-size:.52rem;letter-spacing:.2em;opacity:.35;margin-bottom:3rem;position:relative}
.cp-runway-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;position:relative}
.cp-runway-slot{border:1px solid var(--cp-border);padding:2rem;background:rgba(10,9,6,0.7)}
.cp-runway-slot-id{font-family:var(--M);font-size:.42rem;letter-spacing:.15em;opacity:.25;margin-bottom:1.2rem}
.cp-runway-slot-img{width:100%;aspect-ratio:4/3;background:rgba(240,237,230,0.03);border:1px solid var(--cp-border);display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem;border-radius:4px;flex-direction:column;gap:.8rem}
.cp-runway-slot-img-icon{opacity:.12}
.cp-runway-slot-img-label{font-family:var(--M);font-size:.42rem;letter-spacing:.15em;opacity:.2;text-align:center;max-width:160px;line-height:1.8}
.cp-runway-slot-title{font-family:var(--S);font-size:.9rem;font-weight:600;margin-bottom:.6rem}
.cp-runway-slot-body{font-size:.8rem;line-height:1.8;color:var(--cp-muted)}

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
@media(max-width:1100px){
  .cp-metrics-grid{grid-template-columns:repeat(2,1fr)}
  .cp-metric-card:nth-child(2){border-right:none}
  .cp-metric-card:nth-child(3){border-top:1px solid var(--cp-border)}
  .cp-metric-card:nth-child(4){border-right:none;border-top:1px solid var(--cp-border)}
  .cp-pillars-grid{grid-template-columns:1fr}
  .cp-pillar-card{border-right:none}
  .cp-runway-slots{grid-template-columns:1fr}
  .cp-testi-grid{columns:2}
}
@media(max-width:900px){
  .cp-cam-header{grid-template-columns:1fr;gap:3rem}
  .cp-exec-item{grid-template-columns:1fr;gap:2rem}
  .cp-results-grid{grid-template-columns:1fr}
  .cp-cam-num{display:none}
  .cp-nav-links{display:none}
  .cp-hero h1{font-size:clamp(3.5rem,14vw,8rem)}
  .cp-compare-table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch}
  .cp-testi-grid{columns:1}
}
@media(max-width:540px){
  .cp-campaign{padding:7rem 0 5rem}
  .cp-cam-title{font-size:clamp(3rem,12vw,7rem)}
  .cp-hero-pov p{font-size:1rem}
  .cp-metrics-grid{grid-template-columns:1fr}
  .cp-metric-card{border-right:none;border-bottom:1px solid var(--cp-border)}
}
`

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ImagePlaceholder({ label, icon = 'image', accentColor }) {
  const icons = {
    image: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="40" height="32" rx="3"/>
        <circle cx="15" cy="19" r="4"/>
        <path d="M4 36l11-11 8 8 6-6 15 9"/>
      </svg>
    ),
    video: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="40" height="32" rx="3"/>
        <polygon points="20,18 20,30 32,24" fill="currentColor" opacity=".4"/>
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 42V26l10-8 10 4 16-14"/>
        <circle cx="6" cy="26" r="2" fill="currentColor" opacity=".4"/>
        <circle cx="16" cy="18" r="2" fill="currentColor" opacity=".4"/>
        <circle cx="26" cy="22" r="2" fill="currentColor" opacity=".4"/>
        <circle cx="42" cy="8" r="2" fill="currentColor" opacity=".4"/>
      </svg>
    ),
    shelf: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="32" width="40" height="4" rx="1"/>
        <rect x="8" y="18" width="7" height="14" rx="1"/>
        <rect x="17" y="14" width="7" height="18" rx="1"/>
        <rect x="26" y="20" width="7" height="12" rx="1"/>
        <rect x="35" y="16" width="7" height="16" rx="1"/>
      </svg>
    ),
    sketch: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 38 L14 28 L38 10 L40 14 L16 36 Z"/>
        <line x1="14" y1="28" x2="20" y2="34"/>
        <line x1="10" y1="38" x2="8" y2="40"/>
      </svg>
    ),
    package: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z"/>
        <line x1="24" y1="4" x2="24" y2="44"/>
        <path d="M4 14L24 24L44 14"/>
      </svg>
    )
  }
  return (
    <div className="cp-img-placeholder" style={{ '--accent-rgb': accentColor }}>
      <div className="cp-img-placeholder-icon">{icons[icon] || icons.image}</div>
      <div className="cp-img-placeholder-label">{label}</div>
    </div>
  )
}

function RunwaySlot({ id, title, body, iconType, img }) {
  const icons = {
    baseline: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="36" height="36" rx="2"/>
        <line x1="6" y1="24" x2="42" y2="24"/>
        <rect x="12" y="12" width="10" height="8" rx="1" opacity=".4" fill="currentColor"/>
        <rect x="28" y="14" width="10" height="6" rx="1" opacity=".25" fill="currentColor"/>
      </svg>
    ),
    blueprint: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="36" height="36" rx="2"/>
        <line x1="24" y1="6" x2="24" y2="42"/><line x1="6" y1="24" x2="42" y2="24"/>
        <circle cx="24" cy="24" r="8" strokeDasharray="2 3"/>
      </svg>
    ),
    typography: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="8" y1="14" x2="40" y2="14"/><line x1="8" y1="22" x2="32" y2="22"/>
        <line x1="8" y1="30" x2="36" y2="30"/><line x1="8" y1="38" x2="28" y2="38"/>
        <text x="6" y="12" fontFamily="monospace" fontSize="8" fill="currentColor" opacity=".4">Aa</text>
      </svg>
    ),
    retail: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="32" width="40" height="4" rx="1"/>
        <rect x="8" y="18" width="6" height="14" rx="1"/>
        <rect x="16" y="14" width="6" height="18" rx="1"/>
        <rect x="24" y="20" width="6" height="12" rx="1"/>
        <rect x="32" y="16" width="6" height="16" rx="1"/>
      </svg>
    ),
    color: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16"/>
        <path d="M24 8 A16 16 0 0 1 40 24" strokeWidth="3"/>
        <line x1="12" y1="24" x2="36" y2="24" opacity=".4"/>
      </svg>
    ),
    field: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="6" width="28" height="36" rx="2"/>
        <line x1="16" y1="16" x2="32" y2="16"/><line x1="16" y1="22" x2="32" y2="22"/>
        <line x1="16" y1="28" x2="24" y2="28"/>
        <circle cx="36" cy="36" r="6"/><line x1="33" y1="36" x2="39" y2="36"/><line x1="36" y1="33" x2="36" y2="39"/>
      </svg>
    )
  }
  return (
    <div className="cp-runway-slot">
      <div className="cp-runway-slot-id">{id}</div>
      <div className="cp-runway-slot-img" style={img ? { padding: 0, overflow: 'hidden', position: 'relative' } : {}}>
        {img ? (
          <img loading="lazy" src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} />
        ) : (
          <>
            <div className="cp-runway-slot-img-icon">{icons[iconType] || icons.baseline}</div>
            <div className="cp-runway-slot-img-label">still cooking</div>
          </>
        )}
      </div>
      <div className="cp-runway-slot-title">{title}</div>
      <div className="cp-runway-slot-body">{body}</div>
    </div>
  )
}

function TestimonialsBlock({ testimonials, accent }) {
  const [filter, setFilter] = useState('all')
  const filters = [
    { key: 'all', label: 'Show All' },
    { key: 'leadership', label: 'Leadership' },
    { key: 'team', label: 'Internal Team' },
    { key: 'consumer', label: 'Consumers' }
  ]
  const catLabels = { leadership: 'Leadership', team: 'Internal Team', consumer: 'Consumer' }
  return (
    <div className="cp-testimonials-section cpv">
      <div className="cp-execs-label" style={{ color: accent }}>Feedback Matrix — Segmented Personas</div>
      <div className="cp-testi-filters">
        {filters.map(f => (
          <button
            key={f.key}
            className={`cp-testi-filter${filter === f.key ? ' active' : ''}`}
            style={filter === f.key ? { borderColor: accent, color: accent } : {}}
            onClick={() => setFilter(f.key)}
          >{f.label}</button>
        ))}
      </div>
      <div className="cp-testi-grid">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`cp-testi-card${filter !== 'all' && filter !== t.category ? ' hidden' : ''}`}
            style={{ borderColor: filter !== 'all' && filter === t.category ? `${accent}33` : undefined }}
          >
            <div className="cp-testi-cat-badge">{catLabels[t.category]}</div>
            <div className="cp-testi-quote">{t.quote}</div>
            <div className="cp-testi-name">{t.name}</div>
            <div className="cp-testi-role">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MetricsDashboard({ metrics, accent }) {
  return (
    <div className="cp-metrics-section cpv">
      <div className="cp-execs-label" style={{ color: accent }}>Performance Dashboard</div>
      <div className="cp-metrics-grid" style={{ borderColor: 'var(--cp-border)' }}>
        {metrics.map((m, i) => (
          <div key={i} className="cp-metric-card">
            <div className="cp-metric-tag">{m.tag}</div>
            <div className="cp-metric-value" style={{ color: accent }}>{m.value}</div>
            <div className="cp-metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CampaignCompareTable({ executions, accent }) {
  const rows = [
    { label: 'Campaign Asset Type', vals: executions.map(e => e.campaignType) },
    { label: 'Active Run Duration', vals: executions.map(e => e.duration) },
    { label: 'Top-Funnel Reach', vals: executions.map(e => e.topFunnel) },
    { label: 'Mid-Funnel Conversions', vals: executions.map(e => e.midFunnel) },
    { label: 'Bottom-Funnel Orders', vals: executions.map(e => e.bottomFunnel) },
    { label: 'Primary Consumer Reaction', vals: executions.map(e => e.reaction) }
  ]
  return (
    <div className="cp-compare-section cpv">
      <div className="cp-execs-label" style={{ color: accent }}>Campaign Funnel Comparison Matrix</div>
      <div style={{ overflowX: 'auto' }}>
        <table className="cp-compare-table">
          <thead>
            <tr>
              <th>Funnel Vector</th>
              {executions.map(e => <th key={e.num}>{e.title}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.label}</td>
                {r.vals.map((v, j) => (
                  <td key={j} className={i >= 2 && i <= 4 ? 'metric-hi' : ''}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── RUNWAY CONFIGS ───────────────────────────────────────────────────────────

const RUNWAYS = {
  'almond-milk': [
    { id: 'FILE_ID: 30SAM_TRIAL_01', title: 'Retail Shelf & Display Trial', body: 'Field testing the 30-Second Almond Drink countertop display box and single-serve sachet placement across retail pop-up stalls alongside the core nutrition lineup.', iconType: 'field', img: '/images/jusamazin/process/retail_trial_02.jpg' },
    { id: 'FILE_ID: 30SAM_INSIGHT_MAP', title: 'Consumer Interaction & Feedback', body: 'Live consumer tasting sessions at pop-up kiosks — gathering real-time feedback on dissolvability, taste profile, and single-serve sachet usability.', iconType: 'field', img: '/images/jusamazin/process/draft_packaging_03.jpg' },
    { id: 'FILE_ID: 30SAM_FINAL_RENDER', title: '30-Sec Almond Drink 3D Render', body: 'High-fidelity 3D studio render and liquid simulation of the final 30-Second Almond Drink bottle, highlighting clean nutrition claims and ingredient transparency.', iconType: 'color', img: '/images/jusamazin/management/almond_milk.jpg' }
  ],
  'desi-energy-bar': [
    { id: 'FILE_ID: DEB_FIELD_NOTES', title: 'Retail Pop-Up Rack & Display Array', body: 'Field testing multi-tier retail display racks and consumer pickup velocity across bustling market pop-ups, proving high touchpoint accessibility.', iconType: 'field', img: '/images/jusamazin/process/proof_print_03.jpg' },
    { id: 'FILE_ID: DEB_CHARACTER_SKT', title: 'Character Ideation', body: 'Raw hand-drawn sketches, vector ink frameworks, and character animation wireframes of local street games — highlighting the structural lines of the vintage Atlas bicycle and the stacked wooden blocks of Lagori.', iconType: 'blueprint', img: '/images/jusamazin/process/draft_packaging_05.jpg' },
    { id: 'FILE_ID: DEB_COLOR_GRID', title: 'Chromatic Testing Grid', body: 'A side-by-side display of rejected background variations and safe color templates alongside the winning Lightning Blue/Turquoise composition, proving how the definitive background maximized retail visibility.', iconType: 'color', img: '/images/jusamazin/desi_bar/pantone_proofing.jpg' }
  ],
  'superfoods': [
    { id: 'FILE_ID: SF_CLINICAL_BASELINE', title: 'The Clinical Baseline', body: 'High-resolution comparisons of the original medical-style labels versus early scenic sketch variants — showing the stark contrast between the pharmaceutical aesthetic and the consumer-first redesign.', iconType: 'baseline', img: '/images/before/before_pouch_1.jpg' },
    { id: 'FILE_ID: SF_STICKER_BLUEPRINT', title: 'Universal Master Pouch System', body: 'Stand-up pouch architecture demonstrating the universal illustrated scenic base with variant-specific sticker overlays, engineered for multi-SKU scalability and 4× factory throughput.', iconType: 'blueprint', img: '/images/jusamazin/superfoods/pouch_front_500g.jpg' },
    { id: 'FILE_ID: SF_TYPOGRAPHY_SYSTEM', title: 'The Typography Overhaul', body: 'Close-up crops mapping critical back-of-pack corrections — the transition to lowercase formatting ("Flax seed", "dietary fiber", "omega-3") and the application of solid black body font for flawless legal legibility.', iconType: 'typography', img: '/images/jusamazin/superfoods/typography_macro.jpg' }
  ]
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Campaigns() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://sivnco.in/campaigns" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Campaigns — Advertising Concepts · H P Shivaraj · Art Director</title>
        <meta name="description" content="Art direction for advertising campaigns — Almond Milk motion campaign, Desi Energy Bar retail launch, Superfoods typography system. H P Shivaraj, Art Director, Bengaluru." />
        <meta property="og:title" content="Campaigns — H P Shivaraj · Art Director" />
        <meta property="og:description" content="Advertising campaigns: 30 SAM Almond Milk, Desi Energy Bar, Superfoods. Insight to execution across digital, retail, and social." />
        <meta property="og:url" content="https://sivnco.in/campaigns" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.32/dist/lenis.min.js" strategy="afterInteractive" />

      {/* NAV */}
      <Navbar />

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
              Three advertising campaigns — across motion, retail, and packaging —
              built on consumer insight, not aesthetic preference.
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
              <div className="cp-hero-count-num">11K+</div>
              <div className="cp-hero-count-label">Orders Generated</div>
            </div>
            <div className="cp-hero-count">
              <div className="cp-hero-count-num">8K</div>
              <div className="cp-hero-count-label">Units/Month</div>
            </div>
            <div className="cp-hero-count">
              <div className="cp-hero-count-num">5×</div>
              <div className="cp-hero-count-label">Floor Throughput</div>
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
      {CAMPAIGNS.map((cam) => (
        <section key={cam.id} id={cam.id} className="cp-campaign">
          <div className="cp-cam-num cpv">{cam.num}</div>
          <div className="cp-c">

            {/* ── Campaign Header ── */}
            <div className="cp-cam-header">
              <div>
                <div className="cp-cam-label cpv" style={{ color: cam.accent }}>{cam.label}</div>
                <div className="cp-cam-title cpv">{cam.title}</div>
                <div className="cp-cam-full-title cpv">{cam.fullTitle}</div>
                <div className="cp-cam-tech-tag cpv">{cam.techTag}</div>

                {/* TL;DR */}
                <div className="cp-tldr cpv" style={{ borderColor: cam.accent }}>
                  <div className="cp-tldr-label" style={{ color: cam.accent }}>TL;DR</div>
                  <div className="cp-tldr-body">
                    <div className="cp-tldr-line"><strong>Brief:</strong> {cam.tldr.brief}</div>
                    <div className="cp-tldr-line"><strong>Idea:</strong> {cam.tldr.idea}</div>
                  </div>
                </div>

                {/* My Role chips */}
                {cam.myRole && (
                  <div className="cpv" style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--M)', fontSize: '0.48rem', letterSpacing: '0.2em', opacity: 0.4, flexShrink: 0, paddingRight: '0.4rem' }}>MY ROLE</span>
                    {cam.myRole.map((r, i) => (
                      <span key={i} style={{ fontFamily: 'var(--M)', fontSize: '0.55rem', letterSpacing: '0.12em', border: `1px solid ${cam.accent}44`, padding: '0.25rem 0.7rem', borderRadius: '20px', color: cam.accent, opacity: 0.8 }}>{r}</span>
                    ))}
                  </div>
                )}

                {/* Story: Brand + Brief */}
                <div className="cp-story-col">
                  <div className="cp-story-block cpv">
                    <div className="cp-story-block-label" style={{ color: cam.accent }}>The Brand</div>
                    <div className="cp-story-block-body">{cam.brand}</div>
                  </div>
                  <div className="cp-story-block cpv">
                    <div className="cp-story-block-label" style={{ color: cam.accent }}>The Brief</div>
                    <div className="cp-story-block-body">{cam.brief}</div>
                  </div>
                </div>
              </div>

              {/* Story: Insight + Concept */}
              <div className="cp-story-col" style={{ paddingTop: '4rem' }}>
                <div className="cp-story-block cpv">
                  <div className="cp-story-block-label" style={{ color: cam.accent }}>The Consumer Insight</div>
                  <div className="cp-story-block-body" style={{ fontSize: '1.05rem' }}>{cam.insight}</div>
                </div>
                <div className="cp-story-block cpv">
                  <div className="cp-story-block-label" style={{ color: cam.accent }}>The Concept</div>
                  <div className="cp-story-block-body" style={{ fontSize: '1rem' }}>{cam.concept}</div>
                </div>
              </div>
            </div>

            {/* ── Strategy Pillars ── */}
            <div className="cp-pillars-section cpv">
              <div className="cp-pillars-header" style={{ color: cam.accent }}>
                Strategy — {cam.pillars.length} Pillars
              </div>
              <div className="cp-pillars-grid">
                {cam.pillars.map(p => (
                  <div key={p.num} className="cp-pillar-card">
                    <div className="cp-pillar-num">{p.num}</div>
                    <div className="cp-pillar-tag" style={{ color: cam.accent }}>[{p.tag}]</div>
                    <div className="cp-pillar-header">{p.header}</div>
                    <div className="cp-pillar-body">{p.body}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Concept Runway ── */}
            <div className="cp-runway-section cpv">
              <div className="cp-runway-header">Where everything started…</div>
              <div className="cp-runway-sub">— The Iteration Lab · Concept Runway</div>
              <div className="cp-runway-slots">
                {(RUNWAYS[cam.id] || []).map(slot => (
                  <RunwaySlot key={slot.id} {...slot} />
                ))}
              </div>
            </div>

            {/* ── Soul Block ── */}
            <div className="cp-soul cpv" style={{ '--soul-color': cam.accent.replace('#', '').match(/../g).map(h => parseInt(h,16)).join(',') }}>
              <div className="cp-soul-inner">
                <div className="cp-soul-label" style={{ color: cam.accent }}>My View On This</div>
                <div className="cp-soul-quote">{cam.soulQuote}</div>
              </div>
            </div>

            {/* ── Executions ── */}
            <div className="cpv" style={{ marginTop: '6rem' }}>
              <div className="cp-execs-label" style={{ color: cam.accent }}>Execution — Across Touchpoints</div>
              {cam.executions.map((ex, ei) => (
                <div key={ex.num} className="cp-exec-item cpv">
                  {ei % 2 === 0 ? (
                    <>
                      <div className="cp-exec-media">
                        {ex.isVideo ? (
                          <video src={ex.src} controls playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        ) : ex.src ? (
                          <img loading="lazy" src={ex.src} alt={ex.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        ) : (
                          <ImagePlaceholder label={ex.title} icon="image" accentColor="212,96,10" />
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
                          <div className="cp-exec-channels" style={{ color: cam.accent }}>{ex.channels}</div>
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
                          <div className="cp-exec-channels" style={{ color: cam.accent }}>{ex.channels}</div>
                        </div>
                      </div>
                      <div className="cp-exec-media">
                        {ex.isVideo ? (
                          <video src={ex.src} controls playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        ) : ex.src ? (
                          <img loading="lazy" src={ex.src} alt={ex.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        ) : (
                          <ImagePlaceholder label={ex.title} icon="image" accentColor="212,96,10" />
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* ── Campaign Compare Table (Almond Milk only) ── */}
            {cam.id === 'almond-milk' && (
              <CampaignCompareTable executions={cam.executions} accent={cam.accent} />
            )}

            {/* ── Metrics Dashboard ── */}
            <MetricsDashboard metrics={cam.metrics} accent={cam.accent} />

            {/* ── Testimonials ── */}
            <TestimonialsBlock testimonials={cam.testimonials} accent={cam.accent} />

            {/* ── Reflection ── */}
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
            <span>© 2023–2026 · My Journey @ Jus&apos;Amazin</span>
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

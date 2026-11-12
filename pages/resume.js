import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas'

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume &amp; Curriculum Vitae — H P Shivaraj | Sivnco</title>
        <meta
          name="description"
          content="Comprehensive verified curriculum vitae of H P Shivaraj — Manager - Communication Design, Brand & Packaging Architect, BVA Gold Medalist from CAVA Mysore."
        />
        <link rel="canonical" href="https://sivnco.in/resume" />
      </Head>

      <Navbar />
      <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.15)" secondaryColor="rgba(216, 252, 113, 0.05)" />

      <main className="min-h-screen bg-[#0A0906] text-[#F0EDE6] pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto font-sans relative z-10">
        
        {/* TOP CONTROLS & DOWNLOAD BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 mb-10 rounded-3xl bg-[#12110E] border border-white/12 shadow-2xl backdrop-blur-xl">
          <div>
            <div className="br-label acid mb-2">
              ■ 03 // OFFICIAL CURRICULUM VITAE &middot; VERIFIED RECORD
            </div>
            <p className="text-sm text-[#F0EDE6]/70 max-w-xl">
              Verified record of professional roles, commercial packaging scope (85+ SKUs), academic honors, and design operations leadership.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="H_P_Shivaraj_Comprehensive_CV_2026.pdf"
              className="inline-flex items-center gap-2 bg-[#D4600A] hover:bg-[#e8701a] text-[#0A0906] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-[#D4600A]/30"
            >
              <span>Download PDF Resume</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-[#F0EDE6] border border-white/15 text-xs uppercase tracking-wider px-4 py-2.5 rounded-full transition-all"
            >
              View Work Index →
            </Link>
          </div>
        </div>

        {/* ATS-READABLE RESUME CONTAINER */}
        <article className="bg-[#0E0C09] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* HEADER */}
          <header className="border-b border-white/10 pb-8 mb-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
                H P SHIVARAJ
              </h1>
              <span className="text-xs font-mono tracking-widest text-[#D4600A] uppercase font-bold">
                BVA GOLD MEDALIST &amp; TOPPER
              </span>
            </div>

            <p className="text-lg sm:text-xl text-[#F0EDE6]/90 font-medium mb-4">
              Brand and Packaging Design | Art Direction | Visual Communication
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#F0EDE6]/60">
              <span>Bengaluru, India</span>
              <span>•</span>
              <a href="mailto:sivnco.in@gmail.com" className="hover:text-[#D4600A]">sivnco.in@gmail.com</a>
              <span>•</span>
              <a href="tel:+918431272507" className="hover:text-[#D4600A]">+91 84312 72507</a>
              <span>•</span>
              <a href="https://sivnco.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4600A]">sivnco.in</a>
              <span>•</span>
              <a href="https://linkedin.com/in/shivaraj-designer" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4600A]">LinkedIn</a>
              <span>•</span>
              <a href="https://svarnart.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4600A]">svarnart.com</a>
            </div>
          </header>

          {/* PROFESSIONAL SUMMARY */}
          <section className="mb-12">
            <h2 className="text-xs font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4600A]" />
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-sm sm:text-base text-[#F0EDE6]/80 leading-relaxed">
              Multidisciplinary design and communications professional with commercial experience since 2022, combining brand and packaging direction with campaigns, illustration, 3D imagery, motion, print production, and digital experiences. At Jus’Amazin, leads the visual function across the company’s 85+ SKU portfolio, connecting founder briefs, retail observations, visual systems, supplier decisions, and factory execution. Holds a classical fine-art foundation, a University of Mysore gold medal in B.V.A. Applied Art (CAVA), an independent design practice (Sivnco Studio), and co-founded SVARNART Academy. Pursues brand and art-direction work where creative thinking and practical production delivery are equally important.
            </p>
          </section>

          {/* CORE COMPETENCIES */}
          <section className="mb-12 border-t border-white/5 pt-10">
            <h2 className="text-xs font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4600A]" />
              CORE DISCIPLINES &amp; TECHNICAL EXPERTISE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#F0EDE6]/80">
              <div className="bg-[#12110E] p-5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold text-sm mb-2 font-mono uppercase text-[#D4600A]">
                  Brand &amp; Packaging Systems
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm">
                  Brand identity, packaging architecture across 85+ SKUs (Glass Jars, Flow-Wrap Bars, Stand-Up Pouches, Sachets, Mono-Cartons), category differentiation, dieline engineering, FSSAI regulatory compliance, shelf impact, and sub-brand systems (Lil&apos;Stars, Mom2B).
                </p>
              </div>

              <div className="bg-[#12110E] p-5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold text-sm mb-2 font-mono uppercase text-[#D4600A]">
                  Industrial Prepress &amp; Print Rigor
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm">
                  Digital, offset, and rotogravure workflows; prepress, bleed/seam margins, barcode verification, Pantone/CMYK matching, color proofs, artwork version tracking, RFQs, vendor comparisons, and handoffs across 200,000+ unit production runs.
                </p>
              </div>

              <div className="bg-[#12110E] p-5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold text-sm mb-2 font-mono uppercase text-[#D4600A]">
                  Campaigns, 3D &amp; Motion
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm">
                  Blender 3D photorealistic pack modelling and lighting rigs, quick-commerce visual assets (Blinkit, Zepto, Swiggy Instamart, Amazon A+), video scripting, storyboarding, kinetic typography, and motion editing.
                </p>
              </div>

              <div className="bg-[#12110E] p-5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold text-sm mb-2 font-mono uppercase text-[#D4600A]">
                  Digital Platforms &amp; Pedagogy
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm">
                  Front-end development (HTML/CSS, Next.js, React, Tailwind, GSAP), UI design, fine-art curriculum architecture, observational drawing, and design portfolio mentorship across youth and adult learners.
                </p>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section className="mb-12 border-t border-white/5 pt-10">
            <h2 className="text-xs font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4600A]" />
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-10">
              
              {/* JUS'AMAZIN ROLE 1 */}
              <div className="border-l-2 border-[#D4600A] pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Manager - Communication Design
                  </h3>
                  <span className="text-xs font-mono text-[#D4600A]">Dec 2024 — Present</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Jus’Amazin Foods &amp; Beverages Pvt Ltd · Full-time · Bengaluru, India
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Lead brand and packaging direction across the company’s 85+ SKU portfolio, including core nut butters, Desi Energy Bar, Mom Bar, Lil&apos;Stars, Mom2B, 30-Second Almond Drink, superfoods, snacks, and gifting formats.
                  </li>
                  <li>
                    Own the creative workflow from brief, retail observation, and concept development through typography, illustration, dielines, product imagery, proofing, and final factory handoff.
                  </li>
                  <li>
                    Conceive and direct campaigns across quick-commerce, retail, social, and motion, including Almond Drink comparison films, Desi Energy Bar launch systems, and Superfoods communication.
                  </li>
                  <li>
                    Direct Blender product modelling, lighting, materials, and rendering for listings, campaign collateral, and 3D web displays; connect image direction with physical packaging.
                  </li>
                  <li>
                    Coordinate digital, offset, and rotogravure suppliers through RFQs, quote comparisons, material/quantity decisions, prepress, color proofs, artwork approvals, and release instructions.
                  </li>
                  <li>
                    Maintain artwork and operational trackers across a directory of 277 print-ready files. Authored master brand guidelines that streamlined cross-team handoffs, estimated internally to reduce routine design turnaround by ~40%.
                  </li>
                  <li>
                    Supervise color registration, spot Pantone inks, substrates, and prepress quality controls across industrial print runs exceeding 200,000+ units.
                  </li>
                </ul>
              </div>

              {/* JUS'AMAZIN ROLE 2 */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Visual Communicator / Packaging Designer
                  </h3>
                  <span className="text-xs font-mono text-[#F0EDE6]/60">Aug 2023 — Nov 2024</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Jus’Amazin Foods &amp; Beverages Pvt Ltd · Full-time · Bengaluru, India
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Rebuilt fragmented legacy artwork into a coherent packaging family across jars, bars, pouches, sachets, and cartons with consistent typography and information hierarchy.
                  </li>
                  <li>
                    Contributed to packaging coherence and retail shelf presence during FY2024–25, a period where internal records report 176% company revenue growth (a shared business outcome across product, sales, operations, and design).
                  </li>
                  <li>
                    Spearheaded the Desi Energy Bar &ldquo;Structured Chaos&rdquo; redesign, conducting a 25-store Bengaluru retail study and progressing from a 6,000-pouch digital trial in 2024 to a 160,000-pouch rotogravure order in January 2026.
                  </li>
                  <li>
                    Extended packaging into retail POS displays, product listings, corporate gifting, trial formats, and sub-brand assets. Prepared structural keylines and print-ready handoffs.
                  </li>
                  <li>
                    Established reusable visual assets and design-to-print workflows working directly with founders and factory partners; promoted to Manager effective December 2024.
                  </li>
                </ul>
              </div>

              {/* SIVNCO STUDIO */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Founder &amp; Creative Director
                  </h3>
                  <span className="text-xs font-mono text-[#D4600A]">January 2025 — Present</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Sivnco Studio · Independent Practice alongside employment · Bengaluru &amp; Remote
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Develop brand identities, packaging systems, campaign direction, illustration, art commissions, and 3D product visualization for D2C, FMCG, and lifestyle brands.
                  </li>
                  <li>
                    Design and engineer sivnco.in as a digital portfolio and archival case study platform featuring 3D glTF models, kinetic interactions, and complete project breakdowns.
                  </li>
                  <li>
                    Maintain a disciplined fine-art practice across watercolor, acrylics, and mixed media, bringing classical studies of light and composition into commercial client work.
                  </li>
                </ul>
              </div>

              {/* SVARNART ACADEMY */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Co-Founder &amp; Curriculum Lead
                  </h3>
                  <span className="text-xs font-mono text-[#D4600A]">January 2026 — Present</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  SVARNART Academy · Bengaluru, India · svarnart.com
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Co-founded a multidisciplinary music and visual-arts academy with Harshada. Lead visual-arts teaching, curriculum, identity, studio branding, and operational workflows; Harshada leads Carnatic music.
                  </li>
                  <li>
                    Develop staged learning across observation, drawing, tonal values, color theory, and painting; curated student exhibitions showcasing 120+ artworks.
                  </li>
                  <li>
                    Design student and teacher workflows for attendance, learning resources, and progress documentation through modern web tooling.
                  </li>
                </ul>
              </div>

              {/* OPENHOUSE */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Art Teacher Partner
                  </h3>
                  <span className="text-xs font-mono text-[#F0EDE6]/60">1 April 2025 — 30 April 2026</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Openhouse Technologies Private Limited · Bengaluru, India
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Taught observational drawing, watercolor/acrylic painting, color theory, planar anatomy, and spatial perspective to 20+ weekly learners.
                  </li>
                  <li>
                    Adapted lessons and demonstrations across age cohorts and skill levels; communicated progress to parents and supported student engagement.
                  </li>
                  <li>
                    Translated classical CAVA fine-art disciplines into intuitive, hands-on visual thinking exercises.
                  </li>
                </ul>
              </div>

              {/* REFRESH KID LLC */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Graphic Designer
                  </h3>
                  <span className="text-xs font-mono text-[#F0EDE6]/60">November 2022 — November 2023</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Refresh Kid LLC · Remote Contract · United States
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Created educational video content, mathematics explainers, and PSAT solution visuals, translating complex concepts into clear visual sequences.
                  </li>
                  <li>
                    Produced social media creative, marketing banners, and brand assets through asynchronous cross-timezone collaboration.
                  </li>
                </ul>
              </div>

              {/* EARLIER ENGAGEMENTS */}
              <div className="border-l-2 border-white/10 pl-6 relative">
                <h3 className="text-base font-bold text-white mb-2">
                  Earlier Career Engagements
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm font-mono text-[#F0EDE6]/70 leading-relaxed">
                  <li>
                    <strong className="text-white">Kannada and Culture Department, Karnataka</strong> — Freelance Photojournalist (December 2022) · Event photography, image curation, editing, and delivery.
                  </li>
                  <li>
                    <strong className="text-white">Deep Thoughts</strong> — Student Researcher (September 2022) · Student research engagement.
                  </li>
                  <li>
                    <strong className="text-white">Muskurahat Foundation</strong> — Fundraiser (September – December 2021) · Donor outreach and non-profit campaign initiatives.
                  </li>
                  <li>
                    <strong className="text-white">Unschool</strong> — Campus Influencer (October – November 2021) · Creative education and course promotion.
                  </li>
                  <li>
                    <strong className="text-white">WhiteHat Jr</strong> — Customer Service Representative (September – October 2021) · Customer communication and service support.
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-12 border-t border-white/5 pt-10">
            <h2 className="text-xs font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4600A]" />
              EDUCATION &amp; ACADEMIC HONORS
            </h2>
            <div className="space-y-6">
              <div className="bg-[#12110E] p-6 rounded-2xl border border-white/5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    Bachelor of Visual Arts (BVA) in Applied Art
                  </h3>
                  <span className="text-xs font-mono text-[#D4600A] font-bold">2019 — 2023</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/70 mb-3">
                  Chamarajendra Govt College of Visual Arts (CAVA), University of Mysore · Mysuru, India
                </div>
                <div className="inline-block bg-[#D4600A]/15 text-[#D4600A] border border-[#D4600A]/30 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4">
                  ★ University Gold Medalist &amp; First Rank Topper (Recognition recorded in 2024)
                </div>
                <p className="text-xs sm:text-sm text-[#F0EDE6]/80 leading-relaxed">
                  Comprehensive academic foundation covering Visual Communication, Classical Typography, Color Chemistry, Packaging Geometry &amp; Dielines, Anatomical Life Studies, Plein Air Watercolors, and Printmaking (Lithography, Woodcut, Etching).
                </p>
              </div>

              <div className="bg-[#12110E] p-6 rounded-2xl border border-white/5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white">
                    Fine Art Foundation Studies
                  </h3>
                  <span className="text-xs font-mono text-[#F0EDE6]/60">2017 — 2019</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/70 mb-2">
                  CAVA, Mysuru
                </div>
                <p className="text-xs sm:text-sm text-[#F0EDE6]/70 leading-relaxed">
                  Foundation practice in drawing, painting, and visual fundamentals.
                </p>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="mb-12 border-t border-white/5 pt-10">
            <h2 className="text-xs font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4600A]" />
              CERTIFICATIONS &amp; PROFESSIONAL DEVELOPMENT
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#12110E] p-4 rounded-xl border border-white/5">
                <div className="text-white font-bold text-xs uppercase font-mono mb-1">Google Ads Creative Certification</div>
                <div className="text-xs text-[#D4600A] font-mono">Google Skillshop · August 2026 (Valid through Aug 2027)</div>
              </div>
              <div className="bg-[#12110E] p-4 rounded-xl border border-white/5">
                <div className="text-white font-bold text-xs uppercase font-mono mb-1">Digital Skills: User Experience</div>
                <div className="text-xs text-[#F0EDE6]/60 font-mono">Accenture / FutureLearn · August 2026</div>
              </div>
              <div className="bg-[#12110E] p-4 rounded-xl border border-white/5">
                <div className="text-white font-bold text-xs uppercase font-mono mb-1">AI Fluency for Educators</div>
                <div className="text-xs text-[#F0EDE6]/60 font-mono">Anthropic Claude Academy · August 2026</div>
              </div>
              <div className="bg-[#12110E] p-4 rounded-xl border border-white/5">
                <div className="text-white font-bold text-xs uppercase font-mono mb-1">AI Fluency for Small Businesses</div>
                <div className="text-xs text-[#F0EDE6]/60 font-mono">Anthropic Claude Academy · August 2026</div>
              </div>
              <div className="bg-[#12110E] p-4 rounded-xl border border-white/5 sm:col-span-2">
                <div className="text-white font-bold text-xs uppercase font-mono mb-1">Inclusive Education: Exploring SEND Practice and Strategies</div>
                <div className="text-xs text-[#F0EDE6]/60 font-mono">University of Leeds / FutureLearn · August 2026</div>
              </div>
            </div>
          </section>

          {/* LANGUAGES & AVAILABILITY */}
          <section className="border-t border-white/5 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono text-[#F0EDE6]/70">
              <div>
                <span className="text-[#D4600A] font-bold uppercase">LANGUAGES:</span>{' '}
                Kannada (Native), English (Professional), Hindi (Professional); conversational Tamil and Telugu.
              </div>
              <div>
                <span className="text-[#D4600A] font-bold uppercase">AVAILABILITY:</span>{' '}
                Open for full-time brand/art-direction and packaging-design opportunities in Bengaluru, hybrid arrangements, and selective independent advisory.
              </div>
            </div>
          </section>

        </article>
      </main>
      <Footer />
    </>
  )
}

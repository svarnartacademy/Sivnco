import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas'

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume &amp; Curriculum Vitae — H P Shivaraj | Sivnco</title>
        <meta
          name="description"
          content="Comprehensive ATS-friendly resume of H P Shivaraj (Shiv) — Art Director, Brand & Packaging Architect, BVA Gold Medalist from CAVA Mysore."
        />
        <link rel="canonical" href="https://sivnco.in/resume" />
      </Head>

      <Navbar />
      <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.15)" secondaryColor="rgba(216, 252, 113, 0.05)" />

      <main className="min-h-screen bg-[#0A0906] text-[#F0EDE6] pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto font-sans relative z-10">
        
        {/* TOP CONTROLS & DOWNLOAD BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 mb-10 rounded-2xl bg-[#12110E] border border-white/10 shadow-2xl">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#D4600A] uppercase font-bold block mb-1">
              OFFICIAL CURRICULUM VITAE // ATS-COMPLIANT
            </span>
            <p className="text-sm text-[#F0EDE6]/70">
              Verified record of professional roles, commercial packaging scope, and academic honors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="H_P_Shivaraj_Resume_2026.pdf"
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
              Art Director — Brand, Packaging Architecture &amp; Visual Communications
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#F0EDE6]/60">
              <span>Bengaluru, Karnataka, India</span>
              <span>•</span>
              <a href="mailto:sivnco.in@gmail.com" className="hover:text-[#D4600A]">sivnco.in@gmail.com</a>
              <span>•</span>
              <a href="tel:+918431272507" className="hover:text-[#D4600A]">+91 84312 72507</a>
              <span>•</span>
              <a href="https://sivnco.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4600A]">sivnco.in</a>
              <span>•</span>
              <a href="https://linkedin.com/in/shivaraj-designer" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4600A]">LinkedIn</a>
            </div>
          </header>

          {/* PROFESSIONAL SUMMARY */}
          <section className="mb-12">
            <h2 className="text-xs font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4600A]" />
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm sm:text-base text-[#F0EDE6]/80 leading-relaxed">
              Bengaluru-based Art Director and packaging designer with a classical Fine Arts foundation (Bachelor of Visual Arts, BVA Gold Medalist &amp; University Topper from CAVA, University of Mysore) and 4+ years of commercial design ownership across FMCG and D2C brands. Directs the complete visual function from initial brief to 200,000+ unit factory press runs: packaging architecture, brand identity, print production, prepress engineering, retail POS systems, digital campaigns, and 3D visualization. Oversaw the end-to-end packaging and communications scope across 85+ commercial SKUs across 7 product families for Jus’Amazin, contributing alongside sales, product, and operations teams to +176% FY24–25 revenue growth with zero external agency dependency.
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
                  End-to-End FMCG Packaging Design, Multi-SKU Portfolio Architecture (Glass Jars, Flow-Wrap Bars, Stand-Up Pouches, Sachets, Mono-Cartons, Master Cases), Shelf Impact &amp; Category Disruption, Brand Identity Systems, Design Tokens, Style Governance.
                </p>
              </div>

              <div className="bg-[#12110E] p-5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold text-sm mb-2 font-mono uppercase text-[#D4600A]">
                  Industrial Prepress &amp; Print Rigor
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm">
                  On-Site Press Proofing, Rotogravure &amp; Flexographic Cylinder Prepress, Offset Calibration, Pantone Matching (PMS 3105C–3145C), 3mm Bleed Geometries, Substrate Calibration, FSSAI Front-of-Pack Regulatory Compliance.
                </p>
              </div>

              <div className="bg-[#12110E] p-5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold text-sm mb-2 font-mono uppercase text-[#D4600A]">
                  Digital, 3D &amp; Quick-Commerce
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm">
                  Blender 3D Photorealistic Pack Renders &amp; Lighting Rigs, Quick-Commerce Visual Assets (Blinkit, Zepto, Swiggy Instamart, Amazon A+), Art Direction &amp; Photography Supervision, Storyboarding, Accessible Front-End Web Development (HTML/CSS/JS, Next.js).
                </p>
              </div>

              <div className="bg-[#12110E] p-5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold text-sm mb-2 font-mono uppercase text-[#D4600A]">
                  Leadership, Pedagogy &amp; Operations
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm">
                  Cross-Functional Asset Governance, Eliminating Third-Party Agency Dependencies, Design Sprint Leadership, Mentoring 200+ Students in Observational Drawing &amp; Design Thinking at Svarnart Academy and Openhouse.
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
                    Design &amp; Communications Manager (Art Director) — Brand &amp; Packaging
                  </h3>
                  <span className="text-xs font-mono text-[#D4600A]">Dec 2024 — Present</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Jus’Amazin Foods &amp; Beverages · Full-time · Bengaluru, India
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Lead the company’s end-to-end visual function across physical packaging, print collateral, modern trade retail POS, quick-commerce platforms, and digital campaigns.
                  </li>
                  <li>
                    Govern packaging architecture across 85+ commercial SKUs across 7 distinct product families (Nut &amp; Seed Butters, Energy Bars, Plant-Based Dairy, Lil&apos;Stars, Mom2B, Snacking, Sweeteners).
                  </li>
                  <li>
                    Own the complete production lifecycle from creative brief, concept prototyping, and regulatory validation through vector dielines, on-site rotogravure cylinder press proofing, and final retail delivery.
                  </li>
                  <li>
                    Supervise color registration, spot Pantone inks, substrate choices, and prepress quality controls across industrial print runs exceeding 200,000+ units with zero critical defects.
                  </li>
                  <li>
                    Authored master brand guidelines that reduced cross-department design turnaround by 40% while completely eliminating third-party agency dependencies.
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
                  Jus’Amazin Foods &amp; Beverages · Full-time · Bengaluru, India
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Built the foundational packaging design systems across glass jars, flow-wrap laminates, stand-up pouches, and single-serve sachets.
                  </li>
                  <li>
                    Overhauled legacy packaging with bold chromatic color-blocking and structured typographic grids, contributing alongside marketing and sales to +176% FY24–25 company revenue growth.
                  </li>
                  <li>
                    Spearheaded the Desi Energy Bar &ldquo;Structured Chaos&rdquo; redesign, conducting 25 retail store audits and delivering custom vector illustrations that drove +70% sales growth in the snacking vertical.
                  </li>
                  <li>
                    Constructed quick-commerce visual systems for Blinkit, Zepto, and Amazon A+ carousels alongside high-resolution Blender 3D pack renders.
                  </li>
                  <li>
                    Promoted to Design &amp; Communications Manager within 18 months based on end-to-end production ownership and commercial outcomes.
                  </li>
                </ul>
              </div>

              {/* SIVNCO STUDIO */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Founder &amp; Creative Director
                  </h3>
                  <span className="text-xs font-mono text-[#D4600A]">2025 — Present</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Sivnco Studio · Independent Practice · Bengaluru, India
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Independent design advisory partnering with ambitious D2C, FMCG, and lifestyle brands on brand identity, packaging systems, prepress engineering, and 3D visualization.
                  </li>
                  <li>
                    Architected and engineered the custom web platform (sivnco.in) featuring parametric audio synthesis, 3D glTF models, and comprehensive archival case studies.
                  </li>
                </ul>
              </div>

              {/* SVARNART ACADEMY */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Co-Founder &amp; Curriculum Lead
                  </h3>
                  <span className="text-xs font-mono text-[#D4600A]">Jan 2026 — Present</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Svarnart Academy · Bengaluru, India
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Co-founded a multidisciplinary academy integrating Carnatic classical music, foundational drawing, and visual design thinking.
                  </li>
                  <li>
                    Engineered pedagogical curriculums guiding learners to observe real light, form, and spatial relationships rather than relying on flat symbolic formulas.
                  </li>
                </ul>
              </div>

              {/* OPENHOUSE */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Art &amp; Design Teacher
                  </h3>
                  <span className="text-xs font-mono text-[#F0EDE6]/60">Apr 2025 — Apr 2026</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Openhouse · Bengaluru, India
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Taught observational drawing, pigment color theory, planar anatomy, and spatial perspective to students across varied age groups.
                  </li>
                  <li>
                    Translated academic CAVA fine art disciplines into intuitive, hands-on visual thinking exercises.
                  </li>
                </ul>
              </div>

              {/* REFRESH KID LLC */}
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Graphic Designer
                  </h3>
                  <span className="text-xs font-mono text-[#F0EDE6]/60">Nov 2022 — Nov 2023</span>
                </div>
                <div className="text-sm font-mono text-[#F0EDE6]/60 mb-3">
                  Refresh Kid LLC · Remote, USA
                </div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-[#F0EDE6]/80 leading-relaxed">
                  <li>
                    Delivered digital brand assets, marketing campaigns, and interactive learning graphics for an international EdTech organization.
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
            <div className="bg-[#12110E] p-6 rounded-2xl border border-white/5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-white">
                  Bachelor of Visual Arts (BVA) — Applied Arts
                </h3>
                <span className="text-xs font-mono text-[#D4600A] font-bold">2019 — 2023</span>
              </div>
              <div className="text-sm font-mono text-[#F0EDE6]/70 mb-3">
                Chamarajendra Academy of Visual Arts (CAVA), University of Mysore · Mysuru, India
              </div>
              <div className="inline-block bg-[#D4600A]/15 text-[#D4600A] border border-[#D4600A]/30 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4">
                ★ University Gold Medalist &amp; First Rank Topper
              </div>
              <p className="text-xs sm:text-sm text-[#F0EDE6]/80 leading-relaxed">
                Comprehensive four-year academic foundation covering Visual Communication, Classical Typography, Color Chemistry, Packaging Geometry &amp; Dielines, Anatomical Life Studies, Plein Air Watercolors, and Printmaking (Lithography, Woodcut, Etching).
              </p>
            </div>
          </section>

          {/* AVAILABILITY */}
          <section className="border-t border-white/5 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#F0EDE6]/70">
              <div>
                <span className="text-[#D4600A] font-bold uppercase">AVAILABILITY:</span>{' '}
                Open for Art Direction, Head of Design, and Senior Brand/Packaging roles in Bengaluru, hybrid arrangements, and selective international advisory.
              </div>
              <div className="text-[#F0EDE6]/50">
                Updated November 2026
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  )
}

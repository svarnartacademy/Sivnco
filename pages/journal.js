import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas';
import { JOURNAL_RECORDS } from '../lib/site-data';

export default function JournalPage() {
  return (
    <>
      <Head>
        <title>Process & Design Journal (UNPACK) — H P Shivaraj | SIVNCO</title>
        <meta name="description" content="Detailed process records, prepress engineering, dielines, and strategic design documentation by H P Shivaraj." />
      </Head>

      <FluidAmbientCanvas />
      <Navbar />

      <main className="min-h-screen bg-[#0A0906] text-[#F0EDE6] pt-32 pb-24 px-4 sm:px-8 max-w-6xl mx-auto font-sans relative z-10">
        
        {/* Header Block */}
        <header className="border-b border-white/10 pb-10 mb-14">
          <div className="flex items-center gap-3 text-[#D4600A] text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4600A] inline-block animate-pulse" />
            <span>PORTAL 02 // UNPACK — PROCESS & DESIGN JOURNAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
            Order in the <span className="text-[#D4600A]">system.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F0EDE6]/70 max-w-3xl leading-relaxed">
            The work behind the work. Detailed records covering structural packaging constraints, rotogravure dieline engineering, spot-color calibrations, typography governance, and strategic trade-offs made from initial brief to 200,000-unit factory press runs.
          </p>
        </header>

        {/* Visual Diary Canonical Link Banner */}
        <div className="bg-[#D4600A]/10 border border-[#D4600A]/30 rounded-2xl p-5 mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[#D4600A] text-xs font-mono tracking-widest uppercase font-bold mb-1">
              CANONICAL VISUAL ARCHIVE
            </div>
            <p className="text-sm sm:text-base text-[#F0EDE6]">
              Looking for chronological sketches, rejected directions, and full visual diary records?
            </p>
          </div>
          <Link
            href="/visual-diary"
            className="inline-flex items-center gap-2 bg-[#D4600A] text-[#0A0906] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#e8701a] transition-all"
          >
            Explore Visual Diary →
          </Link>
        </div>

        {/* Journal Entries Grid */}
        <section className="space-y-12">
          {JOURNAL_RECORDS.map((record, index) => (
            <article 
              key={record.id}
              className="bg-[#0E0C09] border border-white/10 rounded-2xl p-6 sm:p-10 hover:border-[#D4600A]/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#F0EDE6]/50 mb-4 pb-4 border-b border-white/5">
                <span className="text-[#D4600A] font-semibold">{record.chapter}</span>
                <div className="flex items-center gap-4">
                  <span>{record.category}</span>
                  <span>•</span>
                  <span>{record.readTime}</span>
                  <span>•</span>
                  <span>{record.date}</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#F0EDE6] leading-snug">
                {record.title}
              </h2>

              <p className="text-[#F0EDE6]/75 text-sm sm:text-base leading-relaxed mb-6">
                {record.summary}
              </p>

              {/* Technical Annotations & Deep Record Details */}
              {record.id === 'dieline-prepress-rotogravure' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/40 border border-white/5 rounded-xl p-5 mb-6 text-xs text-[#F0EDE6]/70 font-mono">
                  <div>
                    <span className="text-[#D4600A] block mb-1">CYLINDER TOLERANCES:</span>
                    <p>Rotogravure copper engraving requires a minimum 0.15mm stroke weight for reverse text to prevent ink bleed and cell plugging during high-speed runs.</p>
                  </div>
                  <div>
                    <span className="text-[#D4600A] block mb-1">REGULATORY GRID COMPLIANCE:</span>
                    <p>FSSAI guidelines enforce strict x-height proportions for nutritional panels and allergen declarations, requiring solid black overprints for crisp barcode scanning.</p>
                  </div>
                </div>
              )}

              {record.id === 'structured-chaos-methodology' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/40 border border-white/5 rounded-xl p-5 mb-6 text-xs text-[#F0EDE6]/70 font-mono">
                  <div>
                    <span className="text-[#D4600A] block mb-1">RETAIL STORE OBSERVATION:</span>
                    <p>Observational store visits across Bengaluru revealed that shoppers spend under 2.5 seconds evaluating impulse energy bars. Nostalgic cues trigger instant recognition among family buyers.</p>
                  </div>
                  <div>
                    <span className="text-[#D4600A] block mb-1">SPECTRAL CONTRAST:</span>
                    <p>The turquoise Lightning Blue wrapper was chosen specifically to counteract the brown and beige cardboard tones prevalent in organic health aisles.</p>
                  </div>
                </div>
              )}

              {record.id === 'universal-pouch-token-architecture' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/40 border border-white/5 rounded-xl p-5 mb-6 text-xs text-[#F0EDE6]/70 font-mono">
                  <div>
                    <span className="text-[#D4600A] block mb-1">PRINTING CAPITAL CONSERVATION:</span>
                    <p>Rather than running separate pre-printed pouches for 6 seed varieties, a universal illustrated landscape pouch was combined with SKU-specific modular adhesive labels.</p>
                  </div>
                  <div>
                    <span className="text-[#D4600A] block mb-1">THROUGHPUT MULTIPLIER:</span>
                    <p>Allowed batch runs to adapt instantly to fluctuating ingredient availability with zero packaging inventory obsolescence.</p>
                  </div>
                </div>
              )}

              {record.id === 'fine-art-chiaroscuro-to-3d' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/40 border border-white/5 rounded-xl p-5 mb-6 text-xs text-[#F0EDE6]/70 font-mono">
                  <div>
                    <span className="text-[#D4600A] block mb-1">VALUE DISCIPLINE:</span>
                    <p>Direct North-light plaster cast drawing at CAVA translates directly into PBR specular roughness values and rim-lighting setups in Blender.</p>
                  </div>
                  <div>
                    <span className="text-[#D4600A] block mb-1">REAL-TIME WEBGL FIDELITY:</span>
                    <p>Baked ambient occlusion and custom GLB normal maps produce photorealistic pack textures for Blinkit and Zepto PDPs under 4MB load limits.</p>
                  </div>
                </div>
              )}

              {/* Tags & Action Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {record.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[#F0EDE6]/60 text-xs font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
                <Link 
                  href="/jusamazin"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4600A] hover:text-white transition-colors"
                >
                  <span>Explore Associated Case Study</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Cross Link to Other Portals */}
        <nav aria-label="Portal Navigation" className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono">
          <Link href="/#work" className="text-[#F0EDE6]/70 hover:text-[#D4600A] transition-colors flex items-center gap-2">
            <span>←</span>
            <span>SEE — Selected Work</span>
          </Link>
          <Link href="/art" className="text-[#F0EDE6]/70 hover:text-[#D4600A] transition-colors flex items-center gap-2">
            <span>WANDER — Art, Observations & Diary</span>
            <span>→</span>
          </Link>
        </nav>

      </main>
    </>
  );
}

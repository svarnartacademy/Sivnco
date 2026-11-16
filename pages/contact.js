import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas';

export default function Contact() {
  return (
    <>
      <Navbar />
      <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.18)" secondaryColor="rgba(216, 252, 113, 0.08)" />

      <main className="min-h-screen bg-[#0A0906] text-[#F0EDE6] pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto font-sans relative z-10">
        
        {/* SECTION HEADER */}
        <header className="border-b border-white/10 pb-10 mb-12">
          <div className="br-label acid mb-3 text-xs font-mono tracking-widest uppercase">
            ■ 04 // DIRECT ENGAGEMENT &middot; BENGALURU
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]"
            style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}
          >
            Let’s talk about the work.<br />
            <span className="text-[#D4600A]">Ideas made tangible.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#F0EDE6]/80 max-w-2xl leading-relaxed">
            For brand and packaging design, hands-on art direction, and senior visual design opportunities, get in touch with H P Shivaraj Acharya directly.
          </p>
        </header>

        {/* PRIMARY CONTACT CHANNELS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Email */}
          <div className="br-block-card p-6 sm:p-8 rounded-3xl bg-[#12100C] border border-white/12 flex flex-col justify-between hover:border-[#D4600A]/50 transition-all">
            <div>
              <div className="text-[11px] font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-3">
                01 / DIRECT INBOX
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
                Email Shiv
              </h2>
              <p className="text-sm text-[#F0EDE6]/70 mb-6 break-all font-mono">
                sivnco.in@gmail.com
              </p>
            </div>
            <a
              href="mailto:sivnco.in@gmail.com?subject=Design%20opportunity%20for%20Shivaraj"
              className="inline-flex items-center justify-between w-full bg-[#D4600A] hover:bg-[#e8701a] text-[#0A0906] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all shadow-lg hover:shadow-[#D4600A]/30"
            >
              <span>Send Email</span>
              <span className="text-sm">↗</span>
            </a>
          </div>

          {/* Card 2: Phone / Direct Call */}
          <div className="br-block-card p-6 sm:p-8 rounded-3xl bg-[#12100C] border border-white/12 flex flex-col justify-between hover:border-[#D4600A]/50 transition-all">
            <div>
              <div className="text-[11px] font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-3">
                02 / DIRECT VOICE &amp; WHATSAPP
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
                Direct Call
              </h2>
              <p className="text-sm text-[#F0EDE6]/70 mb-6 font-mono">
                +91 84312 72507
              </p>
            </div>
            <a
              href="tel:+918431272507"
              className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all"
            >
              <span>Call Phone</span>
              <span className="text-sm">↗</span>
            </a>
          </div>

          {/* Card 3: LinkedIn */}
          <div className="br-block-card p-6 sm:p-8 rounded-3xl bg-[#12100C] border border-white/12 flex flex-col justify-between hover:border-[#D4600A]/50 transition-all">
            <div>
              <div className="text-[11px] font-mono tracking-widest text-[#D4600A] uppercase font-bold mb-3">
                03 / PROFESSIONAL NETWORK
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
                LinkedIn
              </h2>
              <p className="text-sm text-[#F0EDE6]/70 mb-6 font-mono">
                in/shivaraj-designer
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/shivaraj-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all"
            >
              <span>Connect on LinkedIn</span>
              <span className="text-sm">↗</span>
            </a>
          </div>

        </div>

        {/* RECRUITER & CLIENT BRIEFING GUIDE */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#12100C] border border-white/12 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="br-label acid text-xs font-mono tracking-widest uppercase">
              ✦ OPPORTUNITY SPECIFICATION
            </div>
            <span className="text-xs font-mono text-[#F0EDE6]/50">
              BENGALURU, INDIA &middot; HYBRID / ONSITE / REMOTE
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
            What to include when reaching out
          </h3>

          <p className="text-sm sm:text-base text-[#F0EDE6]/80 leading-relaxed mb-6 max-w-3xl">
            To ensure the fastest response, please include the position title, company or brand name, work arrangement (onsite in Bengaluru, hybrid, or remote), and a link to the job description or project brief.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2 border-t border-white/10">
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F0EDE6]/70">
              Brand &amp; Packaging Design Lead
            </span>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F0EDE6]/70">
              Art Director — Brand &amp; Packaging
            </span>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F0EDE6]/70">
              Senior Visual &amp; Packaging Designer
            </span>
          </div>
        </div>

        {/* BOTTOM QUICK ACTIONS */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="text-xs font-mono text-[#F0EDE6]/50 uppercase tracking-wider">
            Verified Record &middot; Portfolio sivnco.in
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-[#F0EDE6] border border-white/15 text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all"
            >
              <span>View Resume</span>
              <span>→</span>
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#D4600A] hover:bg-[#e8701a] text-[#0A0906] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-[#D4600A]/30"
            >
              <span>Download PDF</span>
              <span>↓</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      style={{
        background: '#0A0906',
        borderTop: '1px solid rgba(240, 237, 230, 0.12)',
        padding: 'clamp(5rem, 10vh, 8rem) 0 3rem',
        position: 'relative',
        zIndex: 20,
        color: '#F0EDE6',
        fontFamily: "'Urbanist', sans-serif"
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 5vw', width: '100%', boxSizing: 'border-box' }}>
        
        {/* Main 2-column contact section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
            marginBottom: '4rem'
          }}
        >
          {/* Left Column: Headline & Bio */}
          <div>
            <div
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#D8FC71',
                marginBottom: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>■</span>
              <span>INITIATE A DIALOGUE</span>
            </div>

            <h2
              style={{
                fontFamily: "'Doto', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                lineHeight: 0.96,
                letterSpacing: '-0.045em',
                color: '#FFFFFF',
                marginBottom: '1.5rem'
              }}
            >
              Let’s build<br />
              something<br />
              <span style={{ color: '#D4600A' }}>that earns<br />its place.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(240, 237, 230, 0.65)',
                lineHeight: 1.8,
                maxWidth: '460px',
                marginBottom: '2rem'
              }}
            >
              Available for full-time Art Director, Brand Lead, and Senior Packaging Design leadership roles in Bengaluru, hybrid arrangements, and selective global advisory.
            </p>

            {/* Social pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href="https://www.instagram.com/sivnco.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: '#F0EDE6',
                  background: 'rgba(240, 237, 230, 0.04)',
                  border: '1px solid rgba(240, 237, 230, 0.12)',
                  padding: '0.55rem 1.2rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                Instagram ↗
              </a>
              <a
                href="https://www.linkedin.com/in/shivaraj-designer/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: '#F0EDE6',
                  background: 'rgba(240, 237, 230, 0.04)',
                  border: '1px solid rgba(240, 237, 230, 0.12)',
                  padding: '0.55rem 1.2rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://wa.me/918431272507"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: '#F0EDE6',
                  background: 'rgba(240, 237, 230, 0.04)',
                  border: '1px solid rgba(240, 237, 230, 0.12)',
                  padding: '0.55rem 1.2rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                WhatsApp ↗
              </a>
              <a
                href="/resume.pdf"
                download="HP_Shivaraj_Resume_2026.pdf"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: '#0A0906',
                  background: '#D4600A',
                  border: '1px solid #D4600A',
                  padding: '0.55rem 1.3rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  boxShadow: '0 0 16px rgba(212, 96, 10, 0.4)',
                  transition: 'all 0.25s ease'
                }}
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* Right Column: Direct Contact Card */}
          <div>
            <div
              style={{
                background: 'rgba(240, 237, 230, 0.03)',
                border: '1px solid rgba(240, 237, 230, 0.12)',
                borderRadius: '28px',
                padding: 'clamp(2rem, 4vw, 3rem)',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#D4600A',
                  fontWeight: 700,
                  marginBottom: '0.8rem'
                }}
              >
                Direct Communication Channel
              </div>

              <div
                style={{
                  fontFamily: "'Doto', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem'
                }}
              >
                H P Shivaraj
              </div>

              <div
                style={{
                  fontSize: '0.92rem',
                  color: 'rgba(240, 237, 230, 0.65)',
                  lineHeight: 1.6,
                  marginBottom: '1.8rem'
                }}
              >
                Art Director &middot; Brand &amp; Packaging Architecture &middot; Visual Systems<br />
                Bengaluru, India &middot; Open to Hybrid &amp; International Projects
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                <a
                  href="mailto:sivnco.in@gmail.com"
                  style={{
                    fontFamily: "'Doto', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                    color: '#D4600A',
                    textDecoration: 'none',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.2s ease'
                  }}
                >
                  sivnco.in@gmail.com
                </a>
                <a
                  href="tel:+918431272507"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    color: 'rgba(240, 237, 230, 0.75)',
                    textDecoration: 'none'
                  }}
                >
                  +91 84312 72507
                </a>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(240, 237, 230, 0.08)' }}>
                <Link
                  href="/work"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#F0EDE6',
                    textDecoration: 'none',
                    padding: '0.45rem 1rem',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Work Index →
                </Link>
                <Link
                  href="/visual-diary"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#F0EDE6',
                    textDecoration: 'none',
                    padding: '0.45rem 1rem',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Visual Diary →
                </Link>
                <Link
                  href="/resume"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#D8FC71',
                    textDecoration: 'none',
                    padding: '0.45rem 1rem',
                    borderRadius: '999px',
                    background: 'rgba(216, 252, 113, 0.08)',
                    border: '1px solid rgba(216, 252, 113, 0.25)'
                  }}
                >
                  Curriculum Vitae →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright footnote bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(240, 237, 230, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.62rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(240, 237, 230, 0.45)'
          }}
        >
          <div style={{ fontFamily: "'Doto', sans-serif", fontWeight: 900, fontSize: '1.25rem', color: '#F0EDE6', letterSpacing: '0.04em' }}>
            SIVNCO<span style={{ color: '#D4600A' }}>.</span>
          </div>

          <div>
            H P Shivaraj &middot; Art Director — Brand, Packaging &amp; Visual Communications &copy; 2025&ndash;2026
          </div>

          <a
            href="#top"
            onClick={scrollToTop}
            style={{
              color: 'rgba(240, 237, 230, 0.65)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

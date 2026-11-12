import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SoundToggle from './ui/SoundToggle';

const NAV_STYLES = `
  .snav {
    position: fixed;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 3rem);
    max-width: 960px;
    display: flex;
    flex-direction: column;
    z-index: 99000;
    background: rgba(10, 9, 6, 0.88);
    backdrop-filter: blur(36px) saturate(160%);
    -webkit-backdrop-filter: blur(36px) saturate(160%);
    border: 1px solid rgba(240, 237, 230, 0.12);
    border-radius: 999px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: border-radius 0.4s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.4s ease;
    box-sizing: border-box;
  }
  .snav.is-open {
    border-radius: 28px;
    overflow: visible;
  }
  .snav-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.65rem 1.4rem;
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .snav-logo-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
  }
  .snav-logo {
    font-family: 'Doto', sans-serif;
    font-weight: 900;
    font-size: 1.3rem;
    letter-spacing: 0.08em;
    color: #F0EDE6;
    text-decoration: none;
    line-height: 1;
    flex-shrink: 0;
  }
  .snav-logo span {
    color: #D4600A;
  }
  .snav-avail-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.32rem;
    font-family: 'Urbanist', sans-serif;
    font-size: 0.46rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #4ade80;
    background: rgba(74, 222, 128, 0.08);
    border: 1px solid rgba(74, 222, 128, 0.25);
    border-radius: 999px;
    padding: 0.22rem 0.65rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .snav-avail-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #4ade80;
    flex-shrink: 0;
    animation: snavAvailPulse 2.2s ease-in-out infinite;
  }
  @keyframes snavAvailPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(1.6); }
  }
  .snav-links {
    display: flex;
    gap: 1.8rem;
    align-items: center;
  }
  .snav-link-item {
    font-family: 'Urbanist', sans-serif;
    font-size: 0.66rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(240, 237, 230, 0.75);
    text-decoration: none;
    transition: color 0.2s ease;
    line-height: 1;
    white-space: nowrap;
  }
  .snav-link-item:hover,
  .snav-link-item.snav-active {
    color: #D4600A;
  }

  /* Work dropdown */
  .snav-work-dd {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  .snav-work-btn {
    font-family: 'Urbanist', sans-serif;
    font-size: 0.66rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(240, 237, 230, 0.75);
    background: none;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0;
    transition: color 0.2s ease;
    line-height: 1;
    white-space: nowrap;
  }
  .snav-work-btn:hover { color: #D4600A; }
  .snav-work-btn svg { transition: transform 0.25s ease; }
  .snav-work-dd.open .snav-work-btn { color: #D4600A; }
  .snav-work-dd.open .snav-work-btn svg { transform: rotate(180deg); }
  .snav-work-panel {
    position: absolute;
    top: calc(100% + 1.2rem);
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    width: 320px;
    background: rgba(12, 11, 8, 0.98);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    border: 1px solid rgba(240, 237, 230, 0.12);
    border-radius: 20px;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 96, 10, 0.08);
    padding: 0.75rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 999999;
  }
  .snav-work-dd.open .snav-work-panel {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }
  .snav-dd-group {
    font-family: 'Urbanist', sans-serif;
    font-size: 0.46rem;
    letter-spacing: 0.22em;
    color: #D4600A;
    text-transform: uppercase;
    padding: 0.5rem 0.7rem 0.3rem;
    display: block;
  }
  .snav-dd-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.55rem 0.7rem;
    border-radius: 10px;
    color: rgba(240, 237, 230, 0.8);
    font-family: 'Urbanist', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.18s ease, color 0.18s ease;
  }
  .snav-dd-item:hover {
    background: rgba(212, 96, 10, 0.12);
    color: #F0EDE6;
  }
  .snav-dd-tag {
    font-size: 0.44rem;
    letter-spacing: 0.12em;
    color: rgba(240, 237, 230, 0.4);
    background: rgba(240, 237, 230, 0.06);
    padding: 0.15rem 0.45rem;
    border-radius: 99px;
    flex-shrink: 0;
  }
  .snav-dd-divider {
    height: 1px;
    background: rgba(240, 237, 230, 0.08);
    margin: 0.4rem 0.7rem;
  }

  .snav-actions {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-shrink: 0;
  }
  .snav-maya-btn {
    display: flex;
    align-items: center;
    gap: 0.38rem;
    font-family: 'Urbanist', sans-serif;
    font-size: 0.52rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(240, 237, 230, 0.75);
    background: rgba(240, 237, 230, 0.05);
    border: 1px solid rgba(240, 237, 230, 0.12);
    box-shadow: none;
    padding: 0.38rem 0.8rem;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
    line-height: 1;
  }
  .snav-maya-btn:hover {
    color: #F0EDE6;
    background: rgba(212, 96, 10, 0.16);
    border-color: rgba(212, 96, 10, 0.35);
    box-shadow: 0 0 14px rgba(212, 96, 10, 0.25);
    transform: translateY(-1px);
  }
  .snav-maya-btn:active {
    transform: scale(0.97);
  }
  .snav-pulse {
    width: 5px;
    height: 5px;
    background: #D4600A;
    border-radius: 50%;
    flex-shrink: 0;
    animation: snavPulse 2.2s ease-in-out infinite;
  }
  @keyframes snavPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(1.6); }
  }
  .snav-burger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(240, 237, 230, 0.08);
    border: none;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.4);
    color: #F0EDE6;
    cursor: pointer;
    padding: 0;
  }
  .snav-panel {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    width: 100%;
  }
  .snav-panel.snav-panel-open {
    grid-template-rows: 1fr;
  }
  .snav-panel-inner {
    min-height: 0;
    overflow: hidden;
    width: 100%;
  }
  .snav-menu-body {
    border-top: 1px solid rgba(240, 237, 230, 0.08);
    padding: 0 1.4rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .snav-panel-open .snav-menu-body {
    padding: 0.75rem 1.4rem 1rem;
  }
  .snav-mobile-group {
    font-family: 'Urbanist', sans-serif;
    font-size: 0.46rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #D4600A;
    padding: 0.6rem 0 0.25rem;
    border-bottom: 1px solid rgba(240, 237, 230, 0.07);
    margin-bottom: 0.2rem;
  }
  .snav-mobile-link {
    font-family: 'Urbanist', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(240, 237, 230, 0.85);
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(240, 237, 230, 0.05);
    text-decoration: none;
    transition: color 0.2s ease, padding-left 0.2s ease;
    display: block;
  }
  .snav-mobile-link:last-child { border-bottom: none; }
  .snav-mobile-link:hover { color: #D4600A; padding-left: 0.4rem; }

  /* Maya chat container */
  .snav-chat-body {
    height: min(540px, calc(100dvh - 5.5rem));
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(240, 237, 230, 0.08);
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    background: #0A0906;
  }
  .snav-chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1rem;
    background: rgba(240, 237, 230, 0.03);
    border-bottom: 1px solid rgba(240, 237, 230, 0.08);
  }
  .snav-chat-prompts {
    display: flex;
    gap: 0.4rem;
    overflow-x: auto;
    padding: 0.5rem 1rem;
    background: rgba(10, 9, 6, 0.95);
    border-bottom: 1px solid rgba(240, 237, 230, 0.06);
    scrollbar-width: none;
  }
  .snav-chat-prompt-pill {
    font-family: 'Urbanist', sans-serif;
    font-size: 0.5rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(240, 237, 230, 0.75);
    background: rgba(240, 237, 230, 0.05);
    border: 1px solid rgba(240, 237, 230, 0.12);
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .snav-chat-prompt-pill:hover {
    color: #D4600A;
    border-color: rgba(212, 96, 10, 0.4);
    background: rgba(212, 96, 10, 0.1);
  }
  .snav-iframe {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    display: block;
  }
  .snav-chat-fallback {
    padding: 0.75rem 1rem;
    font-family: 'Urbanist', sans-serif;
    font-size: 0.54rem;
    letter-spacing: 0.08em;
    color: rgba(240, 237, 230, 0.5);
    border-top: 1px solid rgba(240, 237, 230, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .snav-chat-fallback a {
    color: #D4600A;
    text-decoration: underline;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .snav { top: 1.2rem; width: calc(100% - 2.5rem); }
    .snav-links { gap: 1.25rem; }
    .snav-link-item, .snav-work-btn { font-size: 0.62rem; letter-spacing: 0.12em; }
    .snav-avail-badge { display: none; }
  }
  @media (max-width: 860px) {
    .snav { top: 1rem; width: calc(100% - 2rem); }
    .snav-row { padding: 0.6rem 1.1rem; }
    .snav-links { display: none; }
    .snav-burger { display: flex; }
    .snav-avail-badge { display: none; }
  }
  @media (max-width: 480px) {
    .snav { top: max(0.65rem, env(safe-area-inset-top, 0px)); width: calc(100% - 1.2rem); }
    .snav-row { padding: 0.5rem 0.85rem; gap: 0.35rem; }
    .snav-logo { font-size: 1.15rem; }
    .snav-maya-btn { font-size: 0.48rem; padding: 0.35rem 0.65rem; }
  }
`;

export default function Navbar({ backLink, backLabel }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const navRef = useRef(null);
  const workRef = useRef(null);
  const router = useRouter();

  // Close on outside click
  useEffect(() => {
    function onPointerDown(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setChatOpen(false);
        setMenuOpen(false);
      }
      if (workRef.current && !workRef.current.contains(e.target)) {
        setWorkOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  // Close on route change
  useEffect(() => {
    const close = () => { setChatOpen(false); setMenuOpen(false); setWorkOpen(false); };
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router]);

  // Close work dropdown on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setWorkOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const toggleChat = () => {
    setMenuOpen(false);
    setChatOpen(prev => {
      if (!prev) setIframeLoaded(true);
      return !prev;
    });
  };

  const toggleMenu = () => {
    setChatOpen(false);
    setMenuOpen(prev => !prev);
  };

  const handleContact = (e) => {
    setChatOpen(false);
    setMenuOpen(false);
    if (router.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('contact');
      if (el) {
        if (window.lenis?.scrollTo) window.lenis.scrollTo(el, { duration: 1.2 });
        else el.scrollIntoView({ behavior: 'smooth' });
      } else {
        const y = document.body.scrollHeight;
        if (window.lenis?.scrollTo) window.lenis.scrollTo(y, { duration: 1.2 });
        else window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const isOpen = chatOpen || menuOpen;

  const workChapters = [
    { href: '/jusamazin', label: '1. Brand & Packaging', tag: '85+ SKUs' },
    { href: '/campaigns', label: '2. Campaigns & Storytelling', tag: 'Selected Collections' },
    { href: '/design-systems', label: '3. Production & Design Ops', tag: 'Artwork & Suppliers' },
    { href: '/web-development', label: '4. Digital Products & Experiences', tag: 'Interfaces & Workflows' },
    { href: '/artist-educator', label: '5. Art & Education', tag: 'Pedagogy & Plates' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NAV_STYLES }} />
      <nav ref={navRef} className={`snav${isOpen ? ' is-open' : ''}`} id="mainNav">
        {/* Top bar row */}
        <div className="snav-row">
          <div className="snav-logo-group">
            <Link href="/" className="snav-logo">
              SIVNCO<span>.</span>
            </Link>
            <span className="snav-avail-badge" title="Open for Art Director, Head of Design, and Brand Lead roles">
              <span className="snav-avail-dot" />
              Open for Opportunities
            </span>
          </div>

          {/* Primary Desktop Navigation: Work | Visual Diary | About | Resume | Contact */}
          {backLink ? (
            <div className="snav-links">
              <Link href={backLink} className="snav-link-item" style={{ color: '#D4600A' }}>
                {backLabel || '← Back'}
              </Link>
            </div>
          ) : (
            <div className="snav-links">
              {/* Work Dropdown */}
              <div
                ref={workRef}
                className={`snav-work-dd${workOpen ? ' open' : ''}`}
              >
                <button
                  className="snav-work-btn"
                  onClick={(e) => { e.stopPropagation(); setWorkOpen(v => !v); }}
                  aria-expanded={workOpen}
                  aria-haspopup="true"
                >
                  Work
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 3.5l3 3 3-3" />
                  </svg>
                </button>

                <div className="snav-work-panel" role="menu">
                  <span className="snav-dd-group">5 Work Categories</span>
                  {workChapters.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`snav-dd-item${router.pathname === item.href ? ' snav-active' : ''}`}
                      role="menuitem"
                    >
                      {item.label}
                      <span className="snav-dd-tag">{item.tag}</span>
                    </Link>
                  ))}
                  <div className="snav-dd-divider" />
                  <Link
                    href="/work"
                    className="snav-dd-item"
                    style={{ color: '#D4600A' }}
                    role="menuitem"
                  >
                    View All Selected Work ↘
                  </Link>
                </div>
              </div>

              {/* Visual Diary */}
              <Link
                href="/visual-diary"
                className={`snav-link-item${router.pathname === '/visual-diary' ? ' snav-active' : ''}`}
              >
                Visual Diary
              </Link>

              {/* About */}
              <Link href="/#about" className="snav-link-item">
                About
              </Link>

              {/* Resume */}
              <Link
                href="/resume"
                className={`snav-link-item${router.pathname === '/resume' ? ' snav-active' : ''}`}
              >
                Resume
              </Link>

              {/* Contact */}
              <Link href="/#contact" className="snav-link-item" onClick={handleContact}>
                Contact
              </Link>
            </div>
          )}

          {/* Action buttons: Sound Toggle + Maya Chat + Mobile Burger */}
          <div className="snav-actions">
            <SoundToggle />
            <button
              className="snav-maya-btn"
              onClick={toggleChat}
              aria-label="Ask Maya AI assistant"
              aria-expanded={chatOpen}
            >
              <span className="snav-pulse" />
              Maya AI
            </button>
            <button
              className="snav-burger"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`snav-panel${menuOpen ? ' snav-panel-open' : ''}`}>
          <div className="snav-panel-inner">
            <div className="snav-menu-body">
              {backLink ? (
                <Link href={backLink} className="snav-mobile-link" onClick={() => setMenuOpen(false)}>
                  {backLabel || '← Back'}
                </Link>
              ) : (
                <>
                  <span className="snav-mobile-group">Primary Navigation</span>
                  <Link href="/work" className="snav-mobile-link" onClick={() => setMenuOpen(false)}>Work — 5 Categories</Link>
                  <Link href="/visual-diary" className="snav-mobile-link" onClick={() => setMenuOpen(false)}>Visual Diary — Complete Creative Record</Link>
                  <Link href="/#about" className="snav-mobile-link" onClick={() => setMenuOpen(false)}>About H P Shivaraj</Link>
                  <Link href="/resume" className="snav-mobile-link" onClick={() => setMenuOpen(false)}>Resume &amp; CV (ATS-Friendly + PDF)</Link>
                  <Link href="/#contact" className="snav-mobile-link" onClick={handleContact}>Contact &amp; Inquiries</Link>

                  <span className="snav-mobile-group" style={{ marginTop: '0.6rem' }}>5 Work Categories</span>
                  {workChapters.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="snav-mobile-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Maya Chat Panel */}
        <div className={`snav-panel${chatOpen ? ' snav-panel-open' : ''}`}>
          <div className="snav-panel-inner">
            <div className="snav-chat-body">
              <div className="snav-chat-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4600A' }} />
                  <span style={{ fontFamily: 'Urbanist', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                    Maya — Shiv’s Studio AI Assistant
                  </span>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'rgba(240,237,230,0.6)', cursor: 'pointer', fontSize: '0.8rem', padding: '0.2rem' }}
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>

              {/* Helpful entry question pills */}
              <div className="snav-chat-prompts">
                <span className="snav-chat-prompt-pill" onClick={() => alert("Ask Maya: 'Show me Shiv’s packaging work'")}>
                  Packaging Systems
                </span>
                <span className="snav-chat-prompt-pill" onClick={() => alert("Ask Maya: 'What did Shiv personally contribute at Jus’Amazin?'")}>
                  Personal Contribution
                </span>
                <span className="snav-chat-prompt-pill" onClick={() => alert("Ask Maya: 'Tell me about Shiv’s fine art practice'")}>
                  Fine Art Practice
                </span>
                <span className="snav-chat-prompt-pill" onClick={() => alert("Ask Maya: 'What opportunities is Shiv open to?'")}>
                  Availability &amp; Roles
                </span>
              </div>

              {iframeLoaded && (
                <iframe
                  className="snav-iframe"
                  title="Maya AI"
                  allow="microphone"
                  src="https://sivnco-1098322690658.asia-southeast1.run.app/"
                />
              )}

              <div className="snav-chat-fallback">
                <span>Maya runs on Google Cloud Run. If slow to respond:</span>
                <span>
                  <a href="mailto:sivnco.in@gmail.com">sivnco.in@gmail.com</a> · <a href="https://wa.me/918431272507" target="_blank" rel="noreferrer">WhatsApp</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

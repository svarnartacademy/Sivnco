import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_STYLES = `
  .snav {
    position: fixed;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 3rem);
    max-width: 860px;
    display: flex;
    flex-direction: column;
    z-index: 99000;
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 999px;
    box-shadow: 0 4px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);
    transition: border-radius 0.4s cubic-bezier(0.19,1,0.22,1), box-shadow 0.4s ease;
    box-sizing: border-box;
  }
  .snav.is-open {
    border-radius: 28px;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
  .snav-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1.4rem;
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
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
  .snav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .snav-links a {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(240,237,230,0.7);
    text-decoration: none;
    transition: color 0.2s ease;
    line-height: 1;
    white-space: nowrap;
  }
  .snav-links a:hover,
  .snav-links a.snav-active {
    color: #D4600A;
  }
  .snav-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }
  .snav-maya-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.52rem;
    font-weight: 400;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #F0EDE6;
    background: rgba(212,96,10,0.12);
    border: 1px solid rgba(212,96,10,0.32);
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.25s ease, border-color 0.25s ease;
    white-space: nowrap;
    line-height: 1;
  }
  .snav-maya-btn:hover {
    background: rgba(212,96,10,0.22);
    border-color: rgba(212,96,10,0.6);
  }
  .snav-pulse {
    width: 6px;
    height: 6px;
    background: #D4600A;
    border-radius: 50%;
    flex-shrink: 0;
    animation: snavPulse 2s ease-in-out infinite;
  }
  @keyframes snavPulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.4; transform:scale(1.6); }
  }
  .snav-burger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(240,237,230,0.07);
    border: 1px solid rgba(240,237,230,0.15);
    color: #F0EDE6;
    cursor: pointer;
    padding: 0;
    transition: background 0.2s ease;
  }
  .snav-burger:hover {
    background: rgba(240,237,230,0.15);
  }
  /* Expandable panels — grid trick */
  .snav-panel {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.4s cubic-bezier(0.19,1,0.22,1);
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
  /* Mobile dropdown */
  .snav-menu-body {
    border-top: 1px solid rgba(240,237,230,0.08);
    padding: 0 1.4rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .snav-panel-open .snav-menu-body {
    padding: 0.75rem 1.4rem 1rem;
  }
  .snav-mobile-link {
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(240,237,230,0.8);
    padding: 0.65rem 0;
    border-bottom: 1px solid rgba(240,237,230,0.05);
    text-decoration: none;
    transition: color 0.2s ease, padding-left 0.2s ease;
    display: block;
  }
  .snav-mobile-link:last-child { border-bottom: none; }
  .snav-mobile-link:hover { color: #D4600A; padding-left: 0.4rem; }
  /* Chat panel */
  .snav-chat-body {
    height: 520px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(240,237,230,0.08);
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
  }
  .snav-iframe {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    display: block;
  }
  /* Responsive */
  @media (max-width: 900px) {
    .snav { top: 1.2rem; width: calc(100% - 2.5rem); }
  }
  @media (max-width: 768px) {
    .snav { top: 1rem; width: calc(100% - 2rem); }
    .snav-row { padding: 0.6rem 1.1rem; }
    .snav-links { display: none; }
    .snav-burger { display: flex; }
  }
  @media (max-width: 480px) {
    .snav { top: 0.75rem; width: calc(100% - 1.5rem); }
    .snav-row { padding: 0.55rem 0.9rem; }
  }
`;

export default function Navbar({ backLink, backLabel }) {
  const [chatOpen, setChatOpen]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();

  // Close on outside click
  useEffect(() => {
    function onPointerDown(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setChatOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  // Close on route change
  useEffect(() => {
    const close = () => { setChatOpen(false); setMenuOpen(false); };
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router]);

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
      const y = document.body.scrollHeight;
      if (window.lenis?.scrollTo) window.lenis.scrollTo(y, { duration: 1.2 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const isOpen = chatOpen || menuOpen;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NAV_STYLES }} />
      <nav ref={navRef} className={`snav${isOpen ? ' is-open' : ''}`} id="mainNav">

        {/* Top row */}
        <div className="snav-row">
          <Link href="/" className="snav-logo">
            SIVNCO<span>.</span>
          </Link>

          {/* Desktop links */}
          {backLink ? (
            <div className="snav-links">
              <Link href={backLink} style={{ color: '#D4600A' }}>
                {backLabel || '← Back'}
              </Link>
            </div>
          ) : (
            <div className="snav-links">
              <Link href="/campaigns"      className={router.pathname === '/campaigns'       ? 'snav-active' : ''}>Campaigns</Link>
              <Link href="/artist-educator" className={router.pathname === '/artist-educator' ? 'snav-active' : ''}>Art</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact" onClick={handleContact}>Contact</Link>
            </div>
          )}

          <div className="snav-actions">
            <button className="snav-maya-btn" onClick={toggleChat} aria-label="Open Maya AI" aria-expanded={chatOpen}>
              <span className="snav-pulse" />
              it&apos;s Maya
            </button>
            <button className="snav-burger" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div className={`snav-panel${menuOpen ? ' snav-panel-open' : ''}`}>
          <div className="snav-panel-inner">
            <div className="snav-menu-body">
              {backLink ? (
                <Link href={backLink} className="snav-mobile-link" onClick={() => setMenuOpen(false)}>{backLabel || '← Back'}</Link>
              ) : (
                <>
                  <Link href="/campaigns"       className="snav-mobile-link" onClick={() => setMenuOpen(false)}>Campaigns</Link>
                  <Link href="/artist-educator"  className="snav-mobile-link" onClick={() => setMenuOpen(false)}>Art</Link>
                  <Link href="/#about"           className="snav-mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
                  <Link href="/#contact"         className="snav-mobile-link" onClick={handleContact}>Contact</Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Maya chat panel */}
        <div className={`snav-panel${chatOpen ? ' snav-panel-open' : ''}`}>
          <div className="snav-panel-inner">
            <div className="snav-chat-body">
              {iframeLoaded && (
                <iframe
                  className="snav-iframe"
                  title="Maya AI"
                  allow="microphone"
                  src="https://sivnco-1098322690658.asia-southeast1.run.app/"
                />
              )}
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}

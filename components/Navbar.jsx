import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ backLink, backLabel }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setChatOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setChatOpen(false);
      setMenuOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
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

  const handleContactClick = (e) => {
    setChatOpen(false);
    setMenuOpen(false);
    if (router.pathname === '/') {
      e.preventDefault();
      var targetY = document.body.scrollHeight;
      if (window.lenis && typeof window.lenis.scrollTo === 'function') {
        window.lenis.scrollTo(targetY, { duration: 1.2 });
      } else {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className={`nav site-nav ${chatOpen ? 'chat-open' : ''} ${menuOpen ? 'menu-open' : ''}`}
      id="mainNav"
    >
      <div className="site-nav-row">
        <Link href="/" className="site-nav-logo">
          SIVNCO<span style={{ color: 'var(--accent, #D4600A)' }}>.</span>
        </Link>

        {backLink ? (
          <div className="site-nav-links">
            <Link href={backLink} style={{ color: 'var(--accent, #D4600A)' }}>
              {backLabel || '← Back'}
            </Link>
          </div>
        ) : (
          <div className="site-nav-links">
            <Link href="/campaigns" className={router.pathname === '/campaigns' ? 'active' : ''}>
              Campaigns
            </Link>
            <Link href="/artist-educator" className={router.pathname === '/artist-educator' ? 'active' : ''}>
              Art
            </Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact" onClick={handleContactClick}>
              Contact
            </Link>
          </div>
        )}

        <div className="site-nav-actions">
          <button
            type="button"
            className="site-nav-chat-btn"
            onClick={toggleChat}
            aria-label="Open Maya AI"
            aria-expanded={chatOpen}
          >
            <span className="chat-pulse" />
            it&apos;s Maya
          </button>
          <button
            type="button"
            className="site-nav-burger-btn"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            <svg className="burger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            <svg className="close-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Expandable Mobile Links Panel */}
      <div className="site-nav-menu-panel" aria-hidden={!menuOpen}>
        <div className="site-nav-menu-inner">
          {backLink ? (
            <Link href={backLink} className="site-mobile-link" onClick={() => setMenuOpen(false)}>
              {backLabel || '← Back'}
            </Link>
          ) : (
            <>
              <Link href="/campaigns" className="site-mobile-link" onClick={() => setMenuOpen(false)}>
                Campaigns
              </Link>
              <Link href="/artist-educator" className="site-mobile-link" onClick={() => setMenuOpen(false)}>
                Art
              </Link>
              <Link href="/#about" className="site-mobile-link" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/#contact" className="site-mobile-link" onClick={handleContactClick}>
                Contact
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Expandable Maya Chat Panel */}
      <div className="site-nav-chat-panel" aria-hidden={!chatOpen}>
        <div className="site-nav-chat-inner">
          <div className="site-nav-chat-body">
            {iframeLoaded && (
              <iframe
                className="site-nav-iframe"
                title="Maya AI"
                allow="microphone"
                src="https://sivnco-1098322690658.asia-southeast1.run.app/"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

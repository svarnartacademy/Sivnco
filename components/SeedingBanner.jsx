/**
 * SeedingBanner ù Glassmorphism popup that appears when any <img> on the page
 * fails to load (i.e. images not yet seeded).
 *
 * Auto-detects broken images on mount. Dismissible with X or clicking outside.
 *
 * Usage ù just drop it once into any page:
 *   import SeedingBanner from '@/components/SeedingBanner'
 *   ...
 *   <SeedingBanner />
 *
 * Optional prop:
 *   forceShow={true}  ù always show it regardless of broken images
 */

import { useState, useEffect, useCallback } from 'react';

const BANNER_CSS = `
  /* Overlay backdrop */
  .sivb-overlay {
    position: fixed;
    inset: 0;
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: sivbFadeIn 0.4s cubic-bezier(0.16,1,0.3,1) both;
  }
  .sivb-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(10,9,6,0.55);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  /* Card */
  .sivb-card {
    position: relative;
    z-index: 1;
    max-width: 480px;
    width: 100%;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 24px;
    padding: 2.4rem 2.4rem 2rem;
    box-shadow: 0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18);
    animation: sivbSlideUp 0.45s cubic-bezier(0.16,1,0.3,1) both;
    overflow: hidden;
  }
  /* Noise texture overlay */
  .sivb-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.025;
    pointer-events: none;
    border-radius: 24px;
  }
  /* Accent glow */
  .sivb-card::after {
    content: '';
    position: absolute;
    top: -60px;
    right: -40px;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, rgba(212,96,10,0.18), transparent 65%);
    pointer-events: none;
  }

  .sivb-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }
  .sivb-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #D4600A;
    background: rgba(212,96,10,0.1);
    border: 1px solid rgba(212,96,10,0.28);
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
  }
  .sivb-badge-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #D4600A;
    animation: sivbPulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  .sivb-close {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(240,237,230,0.07);
    border: 1px solid rgba(240,237,230,0.12);
    color: rgba(240,237,230,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.2s ease, color 0.2s ease;
    padding: 0;
  }
  .sivb-close:hover {
    background: rgba(240,237,230,0.14);
    color: #F0EDE6;
  }

  .sivb-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(212,96,10,0.1);
    border: 1px solid rgba(212,96,10,0.22);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    position: relative;
    z-index: 1;
  }

  .sivb-title {
    font-family: 'Doto', sans-serif;
    font-weight: 900;
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    color: #F0EDE6;
    line-height: 1.1;
    margin-bottom: 0.8rem;
    position: relative;
    z-index: 1;
  }
  .sivb-title span { color: #D4600A; }

  .sivb-body {
    font-family: 'Instrument Sans', 'Urbanist', sans-serif;
    font-size: 0.95rem;
    line-height: 1.85;
    color: rgba(240,237,230,0.55);
    position: relative;
    z-index: 1;
    margin-bottom: 1.8rem;
  }
  .sivb-body strong {
    color: rgba(240,237,230,0.85);
    font-weight: 500;
  }

  .sivb-divider {
    height: 1px;
    background: rgba(240,237,230,0.07);
    margin-bottom: 1.4rem;
    position: relative;
    z-index: 1;
  }

  .sivb-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    z-index: 1;
  }
  .sivb-meta {
    font-family: 'Space Mono', monospace;
    font-size: 0.48rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(240,237,230,0.22);
    line-height: 1.6;
  }
  .sivb-dismiss-btn {
    font-family: 'Space Mono', monospace;
    font-size: 0.52rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #D4600A;
    background: rgba(212,96,10,0.08);
    border: 1px solid rgba(212,96,10,0.25);
    padding: 0.45rem 1.1rem;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.2s ease;
    white-space: nowrap;
  }
  .sivb-dismiss-btn:hover {
    background: rgba(212,96,10,0.18);
  }

  @keyframes sivbFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes sivbSlideUp {
    from { opacity: 0; transform: translateY(24px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes sivbPulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%     { opacity:0.4; transform:scale(1.6); }
  }
`;

export default function SeedingBanner({ forceShow = false }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const dismiss = useCallback(() => setDismissed(true), []);

  useEffect(() => {
    if (forceShow) { setVisible(true); return; }

    // Wait for images to attempt loading, then check for broken ones
    const timer = setTimeout(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const broken = imgs.some(img => !img.complete || img.naturalWidth === 0);
      if (broken) setVisible(true);
    }, 1800);

    // Also listen for any error event on images
    function onImgError(e) {
      if (e.target.tagName === 'IMG') setVisible(true);
    }
    document.addEventListener('error', onImgError, true);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('error', onImgError, true);
    };
  }, [forceShow]);

  if (!visible || dismissed) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BANNER_CSS }} />
      <div className="sivb-overlay" role="dialog" aria-modal="true" aria-label="Site restructuring notice">
        {/* Backdrop ù click to dismiss */}
        <div className="sivb-backdrop" onClick={dismiss} />

        <div className="sivb-card">
          {/* Top row: badge + close */}
          <div className="sivb-top">
            <div className="sivb-badge">
              <span className="sivb-badge-dot" />
              site update in progress
            </div>
            <button className="sivb-close" onClick={dismiss} aria-label="Dismiss">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Icon */}
          <div className="sivb-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4600A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 0 1 10 10"/>
              <path d="M12 6v6l4 2"/>
              <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
            </svg>
          </div>

          {/* Headline */}
          <div className="sivb-title">
            currently<br />restructuring<span>.</span>
          </div>

          {/* Body */}
          <div className="sivb-body">
            The site is being <strong>actively rebuilt and seeded</strong> with new work.
            Some images haven&apos;t been uploaded yet ù we&apos;re getting everything in place.
            <br /><br />
            Please forgive us for the inconvenience. <strong>Good things take time.</strong>
          </div>

          <div className="sivb-divider" />

          <div className="sivb-footer">
            <div className="sivb-meta">
              SIVNCO ╖ Studio in progress<br />
              Images seeding ù check back soon
            </div>
            <button className="sivb-dismiss-btn" onClick={dismiss}>
              Got it
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

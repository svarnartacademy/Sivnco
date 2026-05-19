import '../styles/globals.css';
import { useState } from 'react';

const CHATBOT_URL = 'https://assistantforshivaraj-1054922494487.europe-west1.run.app';

function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        /* ── Toggle button ── */
        .aura-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 100000;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid rgba(240,237,230,0.12);
          background: rgba(10,9,6,0.92);
          backdrop-filter: blur(20px);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.19,1,0.22,1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        }
        .aura-toggle:hover {
          transform: scale(1.1);
          border-color: rgba(212,96,10,0.5);
          box-shadow: 0 8px 32px rgba(212,96,10,0.2);
        }
        .aura-toggle:active { transform: scale(0.95); }
        .aura-toggle svg {
          width: 22px;
          height: 22px;
          fill: #F0EDE6;
          transition: transform 0.3s ease;
        }
        .aura-toggle.is-open svg { transform: rotate(180deg); }

        /* ── Pulse dot ── */
        .aura-pulse {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #D4600A;
          border-radius: 50%;
          top: 3px;
          right: 3px;
          animation: auraPulse 2s ease-in-out infinite;
        }
        @keyframes auraPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.5); }
        }

        /* ── Tooltip ── */
        .aura-tooltip {
          position: fixed;
          bottom: 90px;
          right: 24px;
          background: rgba(10,9,6,0.92);
          border: 1px solid rgba(240,237,230,0.1);
          color: #F0EDE6;
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translateY(4px);
          transition: opacity 0.25s, transform 0.25s;
          z-index: 99999;
        }
        .aura-toggle:not(.is-open):hover + .aura-tooltip,
        .aura-toggle:not(.is-open):focus + .aura-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Chat panel ── */
        .aura-panel {
          position: fixed;
          bottom: 92px;
          right: 24px;
          width: 420px;
          height: 600px;
          z-index: 99998;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(240,237,230,0.1);
          background: rgba(10,9,6,0.6);
          backdrop-filter: blur(24px);
          box-shadow:
            0 32px 80px rgba(0,0,0,0.7),
            0 0 0 1px rgba(255,255,255,0.04) inset;
          display: flex;
          flex-direction: column;
          transform: translateY(20px) scale(0.97);
          opacity: 0;
          pointer-events: none;
          transition:
            opacity 0.35s cubic-bezier(0.19,1,0.22,1),
            transform 0.35s cubic-bezier(0.19,1,0.22,1);
        }
        .aura-panel.is-open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        /* Panel header */
        .aura-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.1rem;
          background: rgba(212,96,10,0.08);
          border-bottom: 1px solid rgba(240,237,230,0.07);
          flex-shrink: 0;
        }
        .aura-panel-title {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          color: #F0EDE6;
          text-transform: uppercase;
        }
        .aura-panel-title-dot {
          width: 7px;
          height: 7px;
          background: #D4600A;
          border-radius: 50%;
          flex-shrink: 0;
          animation: auraPulse 2s ease-in-out infinite;
        }
        .aura-panel-close {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(240,237,230,0.5);
          padding: 4px;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }
        .aura-panel-close:hover { color: #F0EDE6; }
        .aura-panel-close svg { width: 16px; height: 16px; fill: currentColor; }

        /* iframe fills remaining space */
        .aura-panel-iframe {
          flex: 1;
          width: 100%;
          border: none;
          background: transparent;
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .aura-panel {
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100dvh;
            border-radius: 0;
          }
          .aura-toggle {
            bottom: 16px;
            right: 16px;
          }
        }
      `}</style>

      {/* Floating toggle button */}
      <button
        className={`aura-toggle${open ? ' is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close AI Assistant' : 'Open AI Assistant'}
        aria-expanded={open}
      >
        <div className="aura-pulse" />
        {open ? (
          /* Close (X) icon */
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          /* Chat bubble icon */
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
          </svg>
        )}
      </button>

      {/* Tooltip (only visible when closed) */}
      <div className="aura-tooltip">ASK SHIV'S AI</div>

      {/* In-site chat panel */}
      <div className={`aura-panel${open ? ' is-open' : ''}`} role="dialog" aria-label="AI Assistant">
        <div className="aura-panel-header">
          <div className="aura-panel-title">
            <div className="aura-panel-title-dot" />
            Ask Shiv's AI
          </div>
          <button
            className="aura-panel-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        {open && (
          <iframe
            className="aura-panel-iframe"
            src={CHATBOT_URL}
            title="AI Assistant"
            allow="microphone"
          />
        )}
      </div>
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ChatWidget />
    </>
  );
}

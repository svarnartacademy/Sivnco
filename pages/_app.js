import '../styles/globals.css';
import { useState, useEffect } from 'react';

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delay iframe load until user interacts or after 3s
    const t = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .aura-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 100000;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid rgba(240,237,230,0.12);
          background: rgba(10,9,6,0.9);
          backdrop-filter: blur(20px);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.19,1,0.22,1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        }
        .aura-toggle:hover {
          transform: scale(1.08);
          border-color: rgba(212,96,10,0.4);
          box-shadow: 0 8px 32px rgba(212,96,10,0.15);
        }
        .aura-toggle.open {
          opacity: 0.7;
          transform: scale(0.9);
        }
        .aura-toggle svg {
          width: 24px;
          height: 24px;
          fill: #F0EDE6;
          transition: transform 0.3s;
        }
        .aura-toggle.open svg {
          transform: rotate(45deg);
        }
        .aura-frame {
          position: fixed;
          bottom: 92px;
          right: 24px;
          width: min(420px, calc(100vw - 32px));
          height: min(600px, calc(100vh - 120px));
          z-index: 99999;
          border: 1px solid rgba(240,237,230,0.1);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
          transition: all 0.4s cubic-bezier(0.19,1,0.22,1);
          transform-origin: bottom right;
        }
        .aura-frame.hidden {
          opacity: 0;
          transform: scale(0.8) translateY(20px);
          pointer-events: none;
        }
        .aura-frame.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        .aura-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 16px;
        }
        .aura-pulse {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #D4600A;
          border-radius: 50%;
          top: 2px;
          right: 2px;
          animation: auraPulse 2s ease-in-out infinite;
        }
        @keyframes auraPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>

      <div
        className={`aura-frame ${open ? 'visible' : 'hidden'}`}
      >
        {loaded && (
          <iframe
            src="https://ais-pre-qlqfvjyvzfwxcd7o6z2t7n-501668487376.asia-southeast1.run.app"
            allow="microphone"
            title="Aura AI Assistant"
          />
        )}
      </div>

      <button
        className={`aura-toggle ${open ? 'open' : ''}`}
        onClick={() => {
          setOpen(!open);
          if (!loaded) setLoaded(true);
        }}
        aria-label="Toggle AI Assistant"
      >
        {!open && <div className="aura-pulse" />}
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {open ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          ) : (
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
          )}
        </svg>
      </button>
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

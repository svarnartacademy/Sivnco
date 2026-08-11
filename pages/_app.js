import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Router from 'next/router';

const CHATBOT_URL = 'https://sivnco-1098322690658.asia-southeast1.run.app/';

function ChatWidget() {
  const [open, setOpen] = useState(false);

  // Expose toggle globally so the nav's Chat button (in index.html) can call it
  useEffect(() => {
    window.toggleAuraChat = () => setOpen(o => !o);
    window.closeAuraChat  = () => setOpen(false);
    return () => {
      delete window.toggleAuraChat;
      delete window.closeAuraChat;
    };
  }, []);

  return (
    <>
      <style>{`
        /* -- Chat panel — drops down from nav pill -- */
        .aura-panel {
          position: fixed;
          top: 5.5rem;
          left: 50%;
          transform: translateX(-50%) translateY(-12px) scale(0.97);
          width: min(480px, calc(100vw - 2rem));
          height: 580px;
          z-index: 99998;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(240,237,230,0.1);
          background: rgba(8,8,8,0.82);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          box-shadow:
            0 40px 80px rgba(0,0,0,0.7),
            0 0 0 1px rgba(255,255,255,0.04) inset;
          display: flex;
          flex-direction: column;
          opacity: 0;
          pointer-events: none;
          transition:
            opacity 0.32s cubic-bezier(0.19,1,0.22,1),
            transform 0.32s cubic-bezier(0.19,1,0.22,1);
        }
        .aura-panel.is-open {
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
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
          font-family: 'Instrument Sans', sans-serif;
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
        @keyframes auraPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.5); }
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

        /* Mobile — full screen */
        @media (max-width: 600px) {
          .aura-panel {
            top: 0;
            left: 0;
            transform: translateY(-100%);
            width: 100vw;
            height: 100dvh;
            border-radius: 0;
          }
          .aura-panel.is-open {
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Chat panel — drops below the nav pill */}
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
  useEffect(() => {
    // Intercept window.Lenis defined by CDN scripts to avoid duplicate active instances
    let actualLenisClass = undefined;
    Object.defineProperty(window, 'Lenis', {
      get() {
        return actualLenisClass;
      },
      set(val) {
        if (!val || val.__isProxy) {
          actualLenisClass = val;
          return;
        }
        
        // Wrap the Lenis class in a Proxy to trap constructor calls
        const ProxyClass = new Proxy(val, {
          construct(target, args) {
            if (window.lenis && typeof window.lenis.destroy === 'function') {
              try {
                window.lenis.destroy();
              } catch (e) {
                console.warn('Error destroying old Lenis instance:', e);
              }
            }
            const instance = new target(...args);
            window.lenis = instance;
            return instance;
          }
        });
        ProxyClass.__isProxy = true;
        actualLenisClass = ProxyClass;
      },
      configurable: true
    });

    // Cleanup Lenis on client-side route changes
    const handleRouteChange = () => {
      if (window.lenis && typeof window.lenis.destroy === 'function') {
        try {
          window.lenis.destroy();
          window.lenis = null;
        } catch (e) {
          console.warn('Error destroying Lenis on route change:', e);
        }
      }
    };

    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ChatWidget />
    </>
  );
}

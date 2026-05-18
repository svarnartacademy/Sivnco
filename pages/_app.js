import '../styles/globals.css';

const CHATBOT_URL = 'https://ais-pre-qlqfvjyvzfwxcd7o6z2t7n-501668487376.asia-southeast1.run.app';

function ChatWidget() {
  function openChat() {
    const w = 440;
    const h = 680;
    const left = window.screen.width - w - 24;
    const top  = window.screen.height - h - 60;
    window.open(
      CHATBOT_URL,
      'AuraAssistant',
      `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`
    );
  }

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
        .aura-toggle:active {
          transform: scale(0.95);
        }
        .aura-toggle svg {
          width: 22px;
          height: 22px;
          fill: #F0EDE6;
        }
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
        .aura-toggle:hover + .aura-tooltip,
        .aura-toggle:focus + .aura-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <button
        className="aura-toggle"
        onClick={openChat}
        aria-label="Open AI Assistant"
      >
        <div className="aura-pulse" />
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
        </svg>
      </button>
      <div className="aura-tooltip">ASK SHIV'S AI</div>
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

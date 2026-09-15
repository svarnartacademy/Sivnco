import { useState, useEffect } from 'react';
import { getAudioEngine } from './TactileAudioEngine';

export default function SoundToggle({ className = '' }) {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const audio = getAudioEngine();
    if (audio) {
      setEnabled(audio.isEnabled());
    }
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const audio = getAudioEngine();
    if (audio) {
      const next = audio.toggle();
      setEnabled(next);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className={`sound-toggle-btn ${enabled ? 'is-active' : ''} ${className}`}
      title={enabled ? 'Sound FX Enabled (Click to Mute)' : 'Sound FX Muted (Click to Enable)'}
      aria-label={enabled ? 'Mute sound effects' : 'Enable sound effects'}
    >
      <span className="sound-bars">
        <span className="bar bar-1" />
        <span className="bar bar-2" />
        <span className="bar bar-3" />
      </span>
      <span className="sound-label">{enabled ? 'Audio: On' : 'Audio: Mute'}</span>

      <style jsx>{`
        .sound-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.05);
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          color: rgba(240, 237, 230, 0.75);
          font-family: 'Urbanist', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }
        .sound-toggle-btn:active {
          transform: scale(0.96);
        }
        @media (max-width: 540px) {
          .sound-label { display: none; }
          .sound-toggle-btn { padding: 0.45rem 0.55rem; gap: 0; }
        }
        .sound-toggle-btn:hover {
          background: rgba(212, 96, 10, 0.16);
          box-shadow: 0 0 16px rgba(212, 96, 10, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15);
          color: #f0ede6;
        }
        .sound-toggle-btn.is-active {
          background: radial-gradient(circle at 50% 50%, rgba(212, 96, 10, 0.35) 0%, rgba(212, 96, 10, 0.15) 100%);
          border: none;
          color: #f0ede6;
          box-shadow: 0 0 20px 2px rgba(212, 96, 10, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25);
        }
        .sound-bars {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 10px;
        }
        .bar {
          width: 2px;
          background: currentColor;
          border-radius: 1px;
          transition: height 0.2s ease;
        }
        .bar-1 { height: 4px; }
        .bar-2 { height: 7px; }
        .bar-3 { height: 5px; }

        .is-active .bar-1 {
          animation: waveBar 0.8s ease-in-out infinite alternate;
        }
        .is-active .bar-2 {
          animation: waveBar 0.8s ease-in-out 0.2s infinite alternate;
        }
        .is-active .bar-3 {
          animation: waveBar 0.8s ease-in-out 0.4s infinite alternate;
        }

        @keyframes waveBar {
          0% { height: 3px; }
          100% { height: 10px; }
        }
      `}</style>
    </button>
  );
}

/**
 * ImagePlaceholder — Drop-in replacement for <img> tags.
 * Shows a "still cooking" glass card when src is missing or fails to load.
 *
 * Usage:
 *   import ImagePlaceholder from '@/components/ImagePlaceholder'
 *   <ImagePlaceholder src="/images/foo.jpg" alt="Foo" className="your-class" style={{...}} />
 */

import { useState } from 'react';

const PH_CSS = `
  .siv-ph {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: rgba(255,255,255,0.03);
    border: 1px dashed rgba(240,237,230,0.12);
    width: 100%;
    height: 100%;
    min-height: 160px;
  }
  .siv-ph-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 1.5rem;
    text-align: center;
    pointer-events: none;
    user-select: none;
  }
  .siv-ph-icon { width: 34px; height: 34px; opacity: 0.22; }
  .siv-ph-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(240,237,230,0.35);
    line-height: 1.6;
  }
  .siv-ph-sub {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 0.5rem;
    letter-spacing: 0.1em;
    color: rgba(240,237,230,0.18);
  }
  .siv-ph::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, transparent 40%, rgba(240,237,230,0.04) 50%, transparent 60%);
    background-size: 200% 100%;
    animation: sivPhShimmer 2.4s ease-in-out infinite;
    pointer-events: none;
  }
  @keyframes sivPhShimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const PhIcon = () => (
  <svg className="siv-ph-icon" viewBox="0 0 24 24" fill="none"
    stroke="rgba(240,237,230,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const Slot = ({ wrapperClassName = '', wrapperStyle = {} }) => (
  <div className={`siv-ph ${wrapperClassName}`} style={wrapperStyle}>
    <div className="siv-ph-inner">
      <PhIcon />
      <div className="siv-ph-label">still cooking</div>
      <div className="siv-ph-sub">image coming soon</div>
    </div>
  </div>
);

export function ImagePlaceholder({ src, alt, className = '', style = {}, wrapperClassName = '', wrapperStyle = {} }) {
  const [errored, setErrored] = useState(!src);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PH_CSS }} />
      {errored
        ? <Slot wrapperClassName={wrapperClassName} wrapperStyle={wrapperStyle} />
        : <img src={src} alt={alt} className={className} style={style} onError={() => setErrored(true)} />
      }
    </>
  );
}

export default ImagePlaceholder;

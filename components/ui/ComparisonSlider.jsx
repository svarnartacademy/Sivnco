import React, { useState, useRef, useEffect } from 'react';

export default function ComparisonSlider({
  beforeImage = '/images/before/before_jar.jpg',
  afterImage = '/images/jusamazin/bars/amazon_campaign.jpg',
  beforeLabel = 'BEFORE: 2023 LEGACY LABELS',
  afterLabel = 'AFTER: UNIFIED BRAND SYSTEM',
  aspectRatio = '16/9',
  className = ''
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 3), 97);
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isSliding) return;
    updatePosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isSliding) return;
    updatePosition(e.clientX);
  };

  useEffect(() => {
    if (isSliding) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsSliding(false));
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', () => setIsSliding(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsSliding(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsSliding(false));
    };
  }, [isSliding]);

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-white/[0.12] bg-black select-none cursor-ew-resize shadow-2xl ${className}`}
         style={{ aspectRatio }}
         ref={containerRef}
         onMouseDown={() => setIsSliding(true)}
         onTouchStart={() => setIsSliding(true)}>
      
      {/* Background Layer: AFTER */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-emerald-950/85 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full backdrop-blur-md z-10">
        {afterLabel}
      </div>

      {/* Foreground Layer: BEFORE (Clipped Polygon) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover filter contrast-90 brightness-90"
        />
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-red-950/85 border border-red-500/40 text-red-400 text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full backdrop-blur-md z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 -ml-0.5 bg-gradient-to-b from-[#D4600A] via-white to-[#D4600A] shadow-[0_0_15px_rgba(212,96,10,0.85)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#0A0907] border border-white/40 text-white rounded-full px-3 py-1.5 text-[9px] sm:text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-2xl whitespace-nowrap">
          <span>◀</span>
          <span className="text-[#D4600A] hidden xs:inline">SLIDE</span>
          <span>▶</span>
        </div>
      </div>
    </div>
  );
}

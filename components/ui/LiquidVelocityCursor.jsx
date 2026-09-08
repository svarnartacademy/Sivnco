import { useEffect, useRef, useState } from 'react';
import { getAudioEngine } from './TactileAudioEngine';

export default function LiquidVelocityCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices or small screens
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
      return;
    }

    setMounted(true);
    const audio = getAudioEngine();

    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;
    let velX = 0;
    let velY = 0;
    let isHovered = false;
    let isClicking = false;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check if hovering over interactive elements
      const target = e.target;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('.interactive') ||
          target.closest('[data-magnetic]') ||
          target.closest('input') ||
          target.closest('select'))
      ) {
        if (!isHovered) {
          isHovered = true;
          audio?.playHoverChime(587.33); // D5 chime
        }
      } else {
        isHovered = false;
      }
    };

    const onMouseDown = (e) => {
      isClicking = true;
      audio?.playTick(720);

      if (rippleRef.current) {
        const r = rippleRef.current;
        r.style.left = `${e.clientX}px`;
        r.style.top = `${e.clientY}px`;
        r.style.opacity = '1';
        r.style.transform = 'translate(-50%, -50%) scale(0.2)';
        
        requestAnimationFrame(() => {
          r.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease';
          r.style.transform = 'translate(-50%, -50%) scale(2.2)';
          r.style.opacity = '0';
        });
      }
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const animate = () => {
      const dx = mouseX - curX;
      const dy = mouseY - curY;
      
      velX = dx * 0.18;
      velY = dy * 0.18;
      curX += velX;
      curY += velY;

      const speed = Math.sqrt(velX * velX + velY * velY);
      const angle = Math.atan2(velY, velX) * (180 / Math.PI);
      const stretch = Math.min(1 + speed * 0.045, 1.85);
      const squash = Math.max(1 / stretch, 0.55);

      if (cursorRef.current) {
        const c = cursorRef.current;
        let scaleStr = `scale(${stretch}, ${squash}) rotate(${angle}deg)`;
        if (isHovered) {
          scaleStr = `scale(1.85)`;
        }
        if (isClicking) {
          scaleStr = `scale(0.85)`;
        }

        c.style.transform = `translate3d(${curX}px, ${curY}px, 0) ${scaleStr}`;
        if (isHovered) {
          c.classList.add('is-hovered');
        } else {
          c.classList.remove('is-hovered');
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style jsx global>{`
        /* Hide default dot across all subpages to use this dynamic liquid cursor */
        #dot, #cursor-dot {
          display: none !important;
        }
        @media (pointer: fine) {
          body, a, button, [role="button"] {
            cursor: none !important;
          }
        }
        .liquid-cursor-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 999999;
          transform: translate3d(-100px, -100px, 0);
          will-change: transform;
        }
        .liquid-cursor-dot {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: #D4600A;
          margin-left: -7px;
          margin-top: -7px;
          box-shadow: 0 0 16px rgba(212, 96, 10, 0.7);
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      height 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s ease,
                      border 0.25s ease,
                      box-shadow 0.25s ease;
        }
        .liquid-cursor-wrapper.is-hovered .liquid-cursor-dot {
          width: 28px;
          height: 28px;
          margin-left: -14px;
          margin-top: -14px;
          background: rgba(212, 96, 10, 0.18);
          border: 1.5px solid #D4600A;
          backdrop-filter: blur(4px);
          box-shadow: 0 0 24px rgba(212, 96, 10, 0.4);
        }
        .liquid-cursor-ripple {
          position: fixed;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(212, 96, 10, 0.7);
          pointer-events: none;
          z-index: 999998;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.2);
        }
      `}</style>
      <div ref={cursorRef} className="liquid-cursor-wrapper">
        <div className="liquid-cursor-dot" />
      </div>
      <div ref={rippleRef} className="liquid-cursor-ripple" />
    </>
  );
}

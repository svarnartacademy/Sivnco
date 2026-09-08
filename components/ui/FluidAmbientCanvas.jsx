import { useEffect, useRef } from 'react';

export default function FluidAmbientCanvas({
  accentColor = 'rgba(212, 96, 10, 0.15)',
  secondaryColor = 'rgba(232, 133, 42, 0.08)',
  className = '',
  opacity = 0.85
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let mouse = { x: width * 0.5, y: height * 0.5, targetX: width * 0.5, targetY: height * 0.5 };
    let time = 0;

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const render = () => {
      time += 0.012;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Layer 1: Ambient deep fluid swell
      const grad1 = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.65
      );
      grad1.addColorStop(0, accentColor);
      grad1.addColorStop(0.5, secondaryColor);
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Layer 2: Mathematical sine ribbon
      ctx.beginPath();
      ctx.moveTo(0, height * 0.7);

      for (let x = 0; x <= width; x += 15) {
        const distFromMouse = Math.abs(x - mouse.x);
        const mouseLift = Math.max(0, 1 - distFromMouse / 350) * 45;
        const wave1 = Math.sin(x * 0.005 + time * 1.5) * 35;
        const wave2 = Math.cos(x * 0.003 - time * 0.8) * 20;
        const y = height * 0.65 + wave1 + wave2 - mouseLift;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const waveGrad = ctx.createLinearGradient(0, height * 0.4, 0, height);
      waveGrad.addColorStop(0, accentColor);
      waveGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = waveGrad;
      ctx.fill();

      // Layer 3: Secondary offset wave for depth
      ctx.beginPath();
      ctx.moveTo(0, height * 0.8);

      for (let x = 0; x <= width; x += 20) {
        const wave = Math.sin(x * 0.004 - time + 2) * 25;
        const y = height * 0.75 + wave;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(animId);
    };
  }, [accentColor, secondaryColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
    />
  );
}

import React, { useState } from 'react';
import { Box, CheckCircle2 } from 'lucide-react';

const LIGHTING_CONFIG = {
  neutral: { env: 'neutral', exposure: '1.0', shadowIntensity: '1.0', shadowSoftness: '0.5' },
  sun: { env: 'neutral', exposure: '1.6', shadowIntensity: '1.8', shadowSoftness: '0.2' },
  ambient: { env: undefined, exposure: '0.9', shadowIntensity: '0.3', shadowSoftness: '1.0' }
};

export default function Interactive3DStudio({
  title = "Spatial Packaging Visualisation",
  eyebrow = "INTERACTIVE 3D PACK STUDIO // REAL GLB SPATIAL RENDERS",
  description = "Interact with actual production GLB models created for marketing decks, Amazon A+ listings, and quick-commerce assets before print press rollouts.",
  models = [
    { name: '200g Jar Pistachio Butter', path: '/models/200g_jar_pistachio.glb' },
    { name: 'Desi Protein Bar Wrapper', path: '/models/pc_bar.glb' },
    { name: 'Flow-Wrap Bar Variant 2', path: '/models/pc_bar_2.glb' },
    { name: 'Product Pack Model 3', path: '/models/product-3.glb' }
  ]
}) {
  const [activeModel, setActiveModel] = useState(models[0]?.path || '/models/200g_jar_pistachio.glb');
  const [activeLighting, setActiveLighting] = useState('neutral');

  const currentLighting = LIGHTING_CONFIG[activeLighting] || LIGHTING_CONFIG.neutral;

  return (
    <section className="section py-20 px-4 sm:px-8 max-w-7xl mx-auto" style={{ width: '100%' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-[11px] tracking-widest text-[#D4600A] uppercase mb-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#D4600A] inline-block animate-pulse" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F0EDE6]" style={{ fontFamily: 'var(--f-display, "Doto", sans-serif)' }}>
            {title}
          </h2>
        </div>
        <p className="text-xs text-[#F0EDE6]/65 max-w-md leading-relaxed">
          {description}
        </p>
      </div>

      {/* Main Studio Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 bg-[#0C0B08] border border-white/[0.08] rounded-3xl p-4 sm:p-8 lg:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl">
        {/* Left: 3D Model Viewer Canvas */}
        <div className="lg:col-span-8 relative aspect-square sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(212,96,10,0.18)_0%,rgba(24,19,14,0.95)_65%,#0A0906_100%)] border border-white/[0.08] flex items-center justify-center">
          <model-viewer
            key={`${activeModel}-${activeLighting}`}
            src={activeModel}
            alt="Interactive 3D Packaging Model"
            auto-rotate
            camera-controls
            touch-action="pan-y"
            shadow-intensity={currentLighting.shadowIntensity}
            shadow-softness={currentLighting.shadowSoftness}
            exposure={currentLighting.exposure}
            environment-image={currentLighting.env}
            style={{ width: '100%', height: '100%', minHeight: 'clamp(260px, 40vh, 420px)', background: 'transparent' }}
          />

          {/* Hint Overlay Pill */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#0E0C09]/90 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/10 text-[10px] sm:text-[11px] font-sans text-[#F0EDE6] flex items-center gap-1.5 sm:gap-2 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4600A] shadow-[0_0_6px_#D4600A]" />
            <span>Touch or drag to rotate 360°</span>
          </div>
        </div>

        {/* Right: Interactive Controls */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6 font-sans text-xs">
          {/* SKU Selector */}
          <div>
            <div className="text-[#D4600A] text-[11px] uppercase tracking-wider mb-3 font-bold">
              SELECT ACTIVE PRODUCTION SKU:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {models.map((item) => {
                const active = activeModel === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => setActiveModel(item.path)}
                    className={`w-full text-left p-3.5 rounded-xl border-0 transition-all duration-300 flex items-center justify-between active:scale-[0.98] ${
                      active
                        ? 'bg-gradient-to-r from-[#D4600A]/35 to-[#D4600A]/12 text-white font-bold shadow-[0_0_28px_2px_rgba(212,96,10,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]'
                        : 'bg-white/[0.04] text-[#F0EDE6]/75 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_18px_rgba(212,96,10,0.25)] shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {active && <CheckCircle2 className="w-4 h-4 text-[#D4600A]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Environment Lighting Switcher */}
          <div className="border-t border-white/[0.08] pt-4">
            <div className="text-[#D4600A] text-[11px] uppercase tracking-wider mb-2 font-semibold">
              STUDIO ENVIRONMENT LIGHTING:
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Neutral', val: 'neutral' },
                { label: 'Studio Sun', val: 'sun' },
                { label: 'Ambient', val: 'ambient' }
              ].map((lit) => (
                <button
                  key={lit.label}
                  onClick={() => setActiveLighting(lit.val)}
                  className={`py-2 px-3 rounded-lg border-0 text-center transition-all duration-300 active:scale-[0.96] ${
                    activeLighting === lit.val
                      ? 'bg-gradient-to-br from-[#D4600A]/45 to-[#D4600A]/18 text-white font-bold shadow-[0_0_24px_2px_rgba(212,96,10,0.55),inset_0_1px_0_rgba(255,255,255,0.3)]'
                      : 'bg-white/[0.04] text-[#F0EDE6]/70 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_14px_rgba(212,96,10,0.2)] shadow-[0_2px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]'
                  }`}
                >
                  {lit.label}
                </button>
              ))}
            </div>
          </div>

          {/* Art Director's Spec Note */}
          <div className="bg-[#12100C]/90 p-4 rounded-xl border border-white/[0.08] text-[11px] text-[#F0EDE6]/75 leading-relaxed shadow-lg">
            <span className="text-[#D4600A] font-bold block mb-1">Production Validation:</span>
            3D rendering catches back-panel alignment, dieline fold geometry, and lighting reflection flaws before cylinder engraving and print runs.
          </div>
        </div>
      </div>
    </section>
  );
}

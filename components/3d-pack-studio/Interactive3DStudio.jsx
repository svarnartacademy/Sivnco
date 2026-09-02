import React, { useState } from 'react';
import { Box, CheckCircle2 } from 'lucide-react';

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

  return (
    <section className="section py-20 px-4 sm:px-8 max-w-7xl mx-auto" style={{ width: '100%' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#D4600A] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D4600A] inline-block animate-pulse" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F0EDE6]" style={{ fontFamily: 'var(--f-display, "Urbanist", sans-serif)' }}>
            {title}
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8A8070] max-w-md leading-relaxed">
          {description}
        </p>
      </div>

      {/* Main Studio Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0C0B08] border border-white/[0.08] rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl">
        {/* Left: 3D Model Viewer Canvas */}
        <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-b from-black/90 via-[#100E0A] to-black border border-white/[0.08] flex items-center justify-center">
          <model-viewer
            key={`${activeModel}-${activeLighting}`}
            src={activeModel}
            alt="Interactive 3D Packaging Model"
            auto-rotate
            camera-controls
            shadow-intensity="1"
            environment-image={activeLighting}
            style={{ width: '100%', height: '100%', minHeight: '380px', background: 'transparent' }}
          />

          {/* Hint Overlay Pill */}
          <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-[#D4D0C5] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4600A]" />
            <span>Drag to rotate 360° · Scroll to zoom</span>
          </div>
        </div>

        {/* Right: Interactive Controls */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6 font-mono text-xs">
          {/* SKU Selector */}
          <div>
            <div className="text-[#D4600A] text-[11px] uppercase tracking-wider mb-3 font-bold">
              SELECT ACTIVE PRODUCTION SKU:
            </div>
            <div className="space-y-2">
              {models.map((item) => {
                const active = activeModel === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => setActiveModel(item.path)}
                    className={`w-full text-left p-3.5 rounded-xl border transition flex items-center justify-between ${
                      active
                        ? 'bg-[#D4600A]/15 border-[#D4600A] text-white font-bold shadow-lg shadow-[#D4600A]/10'
                        : 'bg-white/[0.02] border-white/[0.08] text-[#8A8070] hover:text-white hover:border-white/20'
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
            <div className="text-[#8A8070] text-[11px] uppercase tracking-wider mb-2">
              STUDIO ENVIRONMENT LIGHTING:
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Neutral', val: 'neutral' },
                { label: 'Studio Sun', val: 'legacy' },
                { label: 'Ambient', val: '' }
              ].map((lit) => (
                <button
                  key={lit.label}
                  onClick={() => setActiveLighting(lit.val)}
                  className={`py-2 px-3 rounded-lg border text-center transition ${
                    activeLighting === lit.val
                      ? 'border-[#D4600A] bg-[#D4600A]/20 text-white font-bold'
                      : 'border-white/[0.08] bg-white/[0.02] text-[#8A8070] hover:text-white'
                  }`}
                >
                  {lit.label}
                </button>
              ))}
            </div>
          </div>

          {/* Art Director's Spec Note */}
          <div className="bg-black/50 p-4 rounded-xl border border-white/[0.06] text-[11px] text-[#8A8070] leading-relaxed">
            <span className="text-white font-semibold block mb-1">Production Validation:</span>
            3D rendering catches back-panel alignment, dieline fold geometry, and lighting reflection flaws before cylinder engraving and print runs.
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = [
  { title: "Brand Architecture", desc: "Building scalable visual foundations.", color: "#FF4D00" },
  { title: "Packaging Systems", desc: "Retail-ready physical experiences.", color: "#6366F1" },
  { title: "Fine Art / Acrylic", desc: "Exploring texture and local essence.", color: "#EC4899" },
  { title: "Visual Strategy", desc: "Connecting design to business growth.", color: "#10B981" },
  { title: "Typography", desc: "Crafting distinct verbal personalities.", color: "#F59E0B" },
  { title: "D2C Scaling", desc: "Optimizing assets for digital growth.", color: "#8B5CF6" }
];

export default function SkillsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e: any) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(card.querySelector('.aurora-glow'), {
          '--x': `${x}px`,
          '--y': `${y}px`,
          opacity: 1,
          duration: 0.4
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.aurora-glow'), {
          opacity: 0,
          duration: 0.6
        });
      });
    });
  }, []);

  return (
    <section id="skills" className="section" ref={containerRef}>
      <div className="container">
        <span className="t-mono-label">Capabilities</span>
        <h2 className="h-large" style={{ marginBottom: '4rem' }}>Intelligence <span className="t-serif">& Skill</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="skill-card glass-card" 
              style={{ 
                padding: '3rem 2rem', 
                minHeight: '250px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div 
                className="aurora-glow"
                style={{
                  position: 'absolute',
                  top: 'var(--y, 50%)',
                  left: 'var(--x, 50%)',
                  width: '200px',
                  height: '200px',
                  background: `radial-gradient(circle, ${skill.color}44 0%, transparent 70%)`,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                  opacity: 0,
                } as any}
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{skill.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.9rem' }}>{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

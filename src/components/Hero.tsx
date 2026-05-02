'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-text', {
        y: '110%',
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1,
        delay: 0.5
      });
      
      gsap.from('.hero-meta', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="section hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <div className="hero-meta" style={{ marginBottom: '2rem' }}>
          <span className="t-mono-label">Bengaluru, India</span>
        </div>
        
        <h1 className="h-massive">
          <div className="reveal-wrap"><span className="reveal-text">Visual</span></div><br/>
          <div className="reveal-wrap"><span className="reveal-text">Identity</span></div><br/>
          <div className="reveal-wrap"><span className="reveal-text t-serif">& Designer</span></div>
        </h1>
        
        <div className="hero-meta" style={{ marginTop: '4rem', maxWidth: '40ch' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Merging commercial brand precision with fine art exploration. 
            Crafting legacies for D2C brands.
          </p>
        </div>
      </div>
    </section>
  );
}

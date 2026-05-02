'use client';

import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem 4vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        mixBlendMode: 'difference'
      }}
    >
      <Link href="/" className="logo" style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
        SIVNCO<span style={{ color: 'var(--accent)' }}>.</span>
      </Link>
      
      <div className="nav-links" style={{ display: 'flex', gap: '3rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <Link href="#work">Work</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}

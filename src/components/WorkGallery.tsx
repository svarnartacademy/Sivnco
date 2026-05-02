'use client';

import React from 'react';
import projectsData from '@/data/projects.json';
import Link from 'next/link';

export default function WorkGallery() {
  return (
    <section id="work" className="section work-gallery">
      <div className="container">
        <span className="t-mono-label">Selected Works</span>
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
            gap: '2rem',
            marginTop: '3rem'
          }}
        >
          {projectsData.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="glass-card" style={{ padding: '2.5rem', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.category}</span>
                <h3 className="h-large" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>{project.title}</h3>
              </div>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

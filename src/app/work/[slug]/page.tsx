'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import projectsData from '@/data/projects.json';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Navigation />
      
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <Link href="/" style={{ marginBottom: '4rem', display: 'inline-block', fontSize: '0.8rem', opacity: 0.6 }}>
            ← BACK TO ALL
          </Link>
          
          <span className="t-mono-label">{project.category}</span>
          <h1 className="h-massive" style={{ fontSize: '10vw' }}>{project.title}</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '6vw', marginTop: '6rem' }}>
            <div>
              <p style={{ fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--text-main)' }}>
                {project.description}
              </p>
              
              <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="chip" style={{ background: 'transparent' }}>{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h4 className="t-mono-label" style={{ color: 'var(--text-muted)' }}>Project Metrics</h4>
              <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                {project.metrics?.map((metric, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{metric.value}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.testimonial && (
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ fontSize: '2rem', fontStyle: 'italic', opacity: 0.8, lineHeight: 1.4, marginBottom: '2rem' }}>
              "{project.testimonial.quote}"
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>{project.testimonial.author}</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{project.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
           <Link href="/" className="h-large" style={{ opacity: 0.3, textDecoration: 'underline' }}>
             Next Project
           </Link>
        </div>
      </section>
    </main>
  );
}

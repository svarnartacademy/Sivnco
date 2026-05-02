import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WorkGallery from '@/components/WorkGallery';
import SkillsGrid from '@/components/SkillsGrid';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WorkGallery />
      <SkillsGrid />
      
      <section className="section" id="contact" style={{ textAlign: 'center', padding: '20vh 0' }}>
        <div className="container">
          <span className="t-mono-label">Get in touch</span>
          <h2 className="h-massive" style={{ marginTop: '2rem' }}>
            Let's <span className="t-serif">Talk</span>
          </h2>
          <a 
            href="mailto:shiv@sivnco.com" 
            style={{ 
              display: 'inline-block', 
              marginTop: '4rem', 
              fontSize: '1.5rem', 
              borderBottom: '1px solid var(--accent)',
              paddingBottom: '0.5rem' 
            }}
          >
            shiv@sivnco.com
          </a>
        </div>
      </section>
      
      <footer style={{ padding: '4rem 4vw', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        <div>© 2024 SIVNCO. ALL RIGHTS RESERVED.</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Behance</a>
        </div>
      </footer>
    </main>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FluidAmbientCanvas from '../components/ui/FluidAmbientCanvas';
import { PROFILE, VERSIONS, PROJECTS } from '../lib/hiring';

export default function Resume() {
  const version = 'packaging';
  const selected = VERSIONS[version];

  return (
    <>
      <Head>
        <title>Resume &amp; Experience Record · H P Shivaraj | Brand &amp; Packaging Designer</title>
        <meta
          name="description"
          content="Commercial packaging design leadership, retail insights, 85+ SKUs, 277 master print artworks. CAVA University of Mysore gold medalist. ATS-friendly record &amp; printable PDF."
        />
        <link rel="canonical" href="https://sivnco.in/resume" />
        <meta property="og:title" content="Resume &amp; Experience Record · H P Shivaraj" />
        <meta
          property="og:description"
          content="Commercial packaging design leadership, retail insights, 85+ SKUs, 277 master print artworks. Manager – Communication Design at Jus’Amazin."
        />
        <meta property="og:url" content="https://sivnco.in/resume" />
      </Head>

      <Navbar />
      <FluidAmbientCanvas accentColor="rgba(212, 96, 10, 0.16)" secondaryColor="rgba(216, 252, 113, 0.08)" />

      <main id="main-content" className="hiring-resume">
        <header className="resume-controls">
          <div className="resume-badge">
            ■ 03 // VERIFIED RECORD &middot; CAREER &amp; EXPERTISE
          </div>
          <h1 className="resume-title">Experience with a point of view.</h1>
          <p className="resume-subtitle">
            Commercial packaging design leadership, retail insights, 85+ commercial SKUs, and fine art foundation.
          </p>

          <div className="resume-links">
            <a className="resume-btn resume-btn-primary" href={'/resumes/' + selected.file} download>
              <span>Download resume PDF</span>
              <span>↓</span>
            </a>
            <button className="resume-btn" onClick={() => window.print()}>
              <span>Print resume</span>
              <span>⎙</span>
            </button>
            <Link className="resume-btn" href="/contact">
              <span>Direct Contact</span>
              <span>→</span>
            </Link>
            <a className="resume-btn" href={'mailto:' + PROFILE.email + '?subject=Inquiry%20regarding%20resume'}>
              <span>Email Shiv</span>
              <span>↗</span>
            </a>
          </div>
        </header>

        <article className="resume-paper">
          <header className="resume-paper-header">
            <div className="resume-header-top">
              <div>
                <h2 className="resume-name">{PROFILE.name}</h2>
                <p className="resume-role">{selected.label}</p>
              </div>
              <div className="resume-loc-badge">BENGALURU, INDIA</div>
            </div>

            <div className="resume-meta-row">
              <span>
                Email:{' '}
                <a href={'mailto:' + PROFILE.email} className="resume-meta-link">
                  {PROFILE.email}
                </a>
              </span>
              <span>&middot;</span>
              <span>
                Phone:{' '}
                <a href="tel:+918431272507" className="resume-meta-link">
                  {PROFILE.phone}
                </a>
              </span>
              <span>&middot;</span>
              <span>
                Portfolio:{' '}
                <a href="https://sivnco.in" className="resume-meta-link">
                  sivnco.in
                </a>
              </span>
              <span>&middot;</span>
              <span>
                <a
                  href="https://www.linkedin.com/in/shivaraj-designer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-meta-link"
                >
                  LinkedIn Profile ↗
                </a>
              </span>
            </div>
          </header>

          <section className="resume-section">
            <h3 className="resume-section-heading">01 // Profile</h3>
            <p className="resume-body-text">
              {selected.intro} {PROFILE.summary}
            </p>
          </section>

          <section className="resume-section">
            <h3 className="resume-section-heading">02 // Selected Projects &amp; Commercial Scope</h3>
            <div className="resume-projects-grid">
              {selected.projects.map((key) => {
                const p = PROJECTS[key];
                return (
                  <div className="resume-project-card" key={key}>
                    <div className="resume-project-head">
                      <h4 className="resume-project-title">
                        <Link href={p.href}>
                          {p.title} <span className="arrow">↗</span>
                        </Link>
                      </h4>
                      {p.scope && <span className="resume-project-scope">{p.scope}</span>}
                    </div>
                    <p className="resume-body-text">{p.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="resume-section">
            <h3 className="resume-section-heading">03 // Commercial Experience</h3>
            <div className="resume-jobs-list">
              {PROFILE.roles.map((r) => (
                <div className="resume-job-card" key={r.title + r.dates}>
                  <div className="resume-job-head">
                    <h4 className="resume-job-title">{r.title}</h4>
                    <span className="resume-job-dates">{r.dates}</span>
                  </div>
                  <p className="resume-job-company">{r.company}</p>
                  <ul className="resume-bullet-list">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h3 className="resume-section-heading">04 // Core Competencies &amp; Skills</h3>
            <div className="resume-skills-tags">
              {PROFILE.skills.split(' · ').map((skill) => (
                <span className="resume-skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h3 className="resume-section-heading">05 // Independent Practice &amp; Curriculum Leadership</h3>
            <div className="resume-additional-list">
              {PROFILE.additional.map((item) => (
                <p className="resume-body-text" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h3 className="resume-section-heading">06 // Education &amp; Academic Honors</h3>
            <div className="resume-education-card">
              <p className="resume-body-text">{PROFILE.education}</p>
            </div>
          </section>
        </article>
      </main>

      <Footer />

      <style jsx global>{`
        .hiring-resume {
          max-width: 1040px;
          margin: 0 auto;
          padding: 130px 24px 80px;
          color: #F0EDE6;
          font-family: 'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
          z-index: 10;
        }
        .resume-badge {
          font-family: monospace;
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #D8FC71;
          margin-bottom: 0.75rem;
        }
        .resume-title {
          font-family: var(--f-display, 'Doto', sans-serif);
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.08;
          margin: 0 0 1rem;
          color: #ffffff;
          letter-spacing: -0.02em;
        }
        .resume-subtitle {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: rgba(240, 237, 230, 0.8);
          max-width: 680px;
          line-height: 1.6;
          margin: 0 0 1.5rem;
        }
        .resume-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 1.5rem 0 2rem;
        }
        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(240, 237, 230, 0.06);
          border: 1px solid rgba(240, 237, 230, 0.16);
          color: #F0EDE6;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .resume-btn:hover {
          background: rgba(240, 237, 230, 0.12);
          border-color: rgba(240, 237, 230, 0.3);
          transform: translateY(-1px);
        }
        .resume-btn-primary {
          background: #D4600A;
          border-color: #D4600A;
          color: #0A0906;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(212, 96, 10, 0.25);
        }
        .resume-btn-primary:hover {
          background: #e8701a;
          border-color: #e8701a;
          color: #0A0906;
          box-shadow: 0 6px 20px rgba(212, 96, 10, 0.4);
        }

        .resume-paper {
          padding: clamp(24px, 5vw, 56px);
          margin-top: 2rem;
          background: #12100C;
          border: 1px solid rgba(240, 237, 230, 0.12);
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }
        .resume-paper-header {
          border-bottom: 1px solid rgba(240, 237, 230, 0.1);
          padding-bottom: 2rem;
          margin-bottom: 2rem;
        }
        .resume-header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        .resume-name {
          font-family: var(--f-display, 'Doto', sans-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin: 0 0 0.35rem;
        }
        .resume-role {
          font-size: 1.1rem;
          color: #D4600A;
          font-weight: 600;
          margin: 0;
        }
        .resume-loc-badge {
          font-family: monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(240, 237, 230, 0.05);
          border: 1px solid rgba(240, 237, 230, 0.12);
          color: rgba(240, 237, 230, 0.65);
        }
        .resume-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem 1rem;
          font-size: 0.88rem;
          color: rgba(240, 237, 230, 0.7);
        }
        .resume-meta-link {
          color: #F0EDE6;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .resume-meta-link:hover {
          color: #D4600A;
        }

        .resume-section {
          margin-top: 2.2rem;
          padding-top: 1.6rem;
          border-top: 1px solid rgba(240, 237, 230, 0.07);
        }
        .resume-section:first-of-type {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }
        .resume-section-heading {
          font-family: monospace;
          font-size: 0.76rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #D4600A;
          margin: 0 0 1rem;
        }
        .resume-body-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(240, 237, 230, 0.85);
          margin: 0.5rem 0;
        }

        .resume-projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .resume-projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .resume-project-card {
          padding: 1.25rem;
          background: rgba(240, 237, 230, 0.03);
          border: 1px solid rgba(240, 237, 230, 0.08);
          border-radius: 16px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .resume-project-card:hover {
          border-color: rgba(212, 96, 10, 0.4);
          background: rgba(212, 96, 10, 0.04);
        }
        .resume-project-head {
          margin-bottom: 0.5rem;
        }
        .resume-project-title {
          font-size: 1.02rem;
          font-weight: 700;
          margin: 0 0 0.25rem;
        }
        .resume-project-title a {
          color: #ffffff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .resume-project-title a:hover {
          color: #D4600A;
        }
        .resume-project-title .arrow {
          color: #D4600A;
          font-size: 0.85rem;
        }
        .resume-project-scope {
          display: inline-block;
          font-family: monospace;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          color: #D8FC71;
          text-transform: uppercase;
        }

        .resume-jobs-list {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        .resume-job-card {
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(240, 237, 230, 0.05);
        }
        .resume-job-card:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .resume-job-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 0.25rem;
        }
        .resume-job-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }
        .resume-job-dates {
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: #D4600A;
        }
        .resume-job-company {
          font-size: 0.9rem;
          color: rgba(240, 237, 230, 0.65);
          margin: 0 0 0.75rem;
        }
        .resume-bullet-list {
          padding-left: 1.2rem;
          margin: 0.5rem 0;
        }
        .resume-bullet-list li {
          font-size: 0.92rem;
          line-height: 1.65;
          color: rgba(240, 237, 230, 0.82);
          margin-bottom: 0.45rem;
        }

        .resume-skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .resume-skill-tag {
          font-family: monospace;
          font-size: 0.75rem;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(240, 237, 230, 0.05);
          border: 1px solid rgba(240, 237, 230, 0.12);
          color: rgba(240, 237, 230, 0.85);
        }

        .resume-additional-list p {
          margin-bottom: 0.85rem;
        }

        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .resume-controls,
          nav,
          footer,
          .snav,
          .sivb-overlay,
          canvas {
            display: none !important;
          }
          .hiring-resume {
            padding: 0 !important;
            max-width: none !important;
          }
          .resume-paper {
            border: 0 !important;
            border-radius: 0 !important;
            background: white !important;
            padding: 0 !important;
            box-shadow: none !important;
            color: black !important;
          }
          .resume-paper * {
            color: black !important;
            background: transparent !important;
            border-color: #ddd !important;
            box-shadow: none !important;
          }
          .resume-name {
            font-size: 20pt !important;
            color: black !important;
          }
          .resume-role {
            font-size: 13pt !important;
            color: #333 !important;
          }
          .resume-section-heading {
            font-size: 10pt !important;
            color: #222 !important;
            border-bottom: 1px solid #ccc;
            padding-bottom: 4px;
          }
          .resume-body-text,
          .resume-bullet-list li {
            font-size: 9.5pt !important;
            line-height: 1.4 !important;
          }
          .resume-section {
            margin-top: 14px !important;
            padding-top: 8px !important;
          }
          .resume-job-card,
          .resume-project-card {
            break-inside: avoid;
            margin-bottom: 12px;
          }
          .resume-job-title {
            font-size: 11pt !important;
          }
          .resume-skill-tag {
            border: 1px solid #bbb !important;
            padding: 2px 8px !important;
            font-size: 8pt !important;
          }
          a {
            text-decoration: none !important;
          }
          @page {
            size: A4;
            margin: 12mm 15mm;
          }
        }
      `}</style>
    </>
  );
}

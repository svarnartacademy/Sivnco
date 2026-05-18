import { ArrowUpRight } from "lucide-react";

export default function StartProjectButton() {
  return (
    <a
      href="#contact"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
      className="nav-cta-wrap"
    >
      <style>{`
        .nav-cta-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .nav-cta-label {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          border-radius: 40px;
          background: #D4600A;
          color: #0A0906;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          font-weight: 700;
          white-space: nowrap;
          transition: background 0.3s, color 0.3s;
        }
        .nav-cta-wrap:hover .nav-cta-label {
          background: #F0EDE6;
          color: #0A0906;
        }
        .nav-cta-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: #D4600A;
          color: #0A0906;
          flex-shrink: 0;
          transition: background 0.3s, transform 0.3s;
          overflow: hidden;
        }
        .nav-cta-wrap:hover .nav-cta-icon {
          background: #F0EDE6;
          transform: rotate(45deg);
        }
      `}</style>
      <span className="nav-cta-label">START A PROJECT</span>
      <span className="nav-cta-icon">
        <ArrowUpRight size={14} strokeWidth={2.5} />
      </span>
    </a>
  )
}

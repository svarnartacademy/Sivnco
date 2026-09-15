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
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-cta-wrap:active {
          transform: scale(0.96);
        }
        .nav-cta-label {
          display: inline-block;
          padding: 0.55rem 1.3rem;
          border-radius: 40px;
          border: none;
          background: #D4600A;
          color: #0A0906;
          font-family: 'Urbanist', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 0 20px 2px rgba(212, 96, 10, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-cta-wrap:hover .nav-cta-label {
          background: #F0EDE6;
          color: #0A0906;
          box-shadow: 0 0 30px 4px rgba(240, 237, 230, 0.55), 0 0 12px rgba(212, 96, 10, 0.35), inset 0 1px 0 #FFF;
        }
        .nav-cta-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: none;
          background: #D4600A;
          color: #0A0906;
          flex-shrink: 0;
          box-shadow: 0 0 16px 2px rgba(212, 96, 10, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        .nav-cta-wrap:hover .nav-cta-icon {
          background: #F0EDE6;
          box-shadow: 0 0 24px 4px rgba(240, 237, 230, 0.55), inset 0 1px 0 #FFF;
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

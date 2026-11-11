import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
export default function PortfolioEditorial({ title, description, path, children }) {
 return <><Head><title>{title + ' | H P Shivaraj · Sivnco'}</title><meta name="description" content={description}/><link rel="canonical" href={'https://sivnco.in'+path}/></Head><Navbar/><main className="editorial"><p className="eyebrow">SIVNCO / H P SHIVARAJ</p><h1>{title}</h1><p className="intro">{description}</p>{children}<footer><Link href="/work">All work</Link><Link href="/resume">Resume</Link><a href="mailto:sivnco.in@gmail.com">Get in touch</a></footer></main><style>{`
 .editorial{max-width:1120px;margin:0 auto;padding:140px 28px 60px;color:#f0ede6;font-family:Arial,sans-serif;line-height:1.7;background:#0a0906;min-height:100vh}
 .editorial *{box-sizing:border-box}.editorial h1{font-size:clamp(2.4rem,6vw,4.8rem);line-height:1.08;max-width:950px;margin:18px 0 28px;letter-spacing:-.04em}
 .editorial .eyebrow{color:#f3a96d;font-size:.78rem;letter-spacing:.14em}.editorial .intro{font-size:1.2rem;max-width:780px;color:#ccc6bc}
 .editorial h2{font-size:clamp(1.5rem,3vw,2.2rem);line-height:1.25;margin:0 0 18px}.editorial h3{font-size:1.15rem;margin:20px 0 8px}
 .editorial section{padding:40px 0;border-top:1px solid #49443d;margin-top:36px;scroll-margin-top:110px}
 .editorial p{max-width:800px}.editorial a{color:#ffc28e;text-underline-offset:5px}.editorial a:hover{text-decoration-thickness:2px}.editorial a:focus-visible,.editorial button:focus-visible{outline:3px solid #ffc28e;outline-offset:5px}
 .editorial .category-nav,.editorial .actions{display:flex;gap:14px;flex-wrap:wrap;margin:32px 0}.editorial .category-nav a,.editorial .actions a{padding:10px 16px;border:1px solid #736456;border-radius:22px;text-decoration:none}
 .editorial .project-links{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;padding:0;list-style:none}.editorial .project-links a{display:block;padding:18px;border:1px solid #49443d;border-radius:12px}
 .editorial .facts{display:flex;gap:26px;flex-wrap:wrap;margin:28px 0}.editorial .facts strong{display:block;font-size:2rem;color:#ffc28e}.editorial .facts span{display:block;max-width:220px}
 .editorial figure{margin:26px 0}.editorial figure img{max-width:100%;width:100%;max-height:500px;object-fit:contain;background:#171510;border-radius:12px}.editorial figcaption{color:#bfb8ab;font-size:.9rem;margin-top:10px}
 .editorial footer{display:flex;gap:25px;flex-wrap:wrap;padding-top:40px;border-top:1px solid #49443d;margin-top:50px}.editorial .note{color:#c6bdaf;font-size:.95rem}.editorial .role-date{color:#c6bdaf}
 @media(max-width:640px){.editorial{padding:115px 20px 40px}.editorial .project-links{grid-template-columns:1fr}}
 @media print{body{background:white!important;color:black!important}.snav,.editorial footer,.editorial .actions{display:none!important}.editorial{padding:0;max-width:none;color:black;background:white;font-size:10pt;line-height:1.4}.editorial h1{font-size:24pt}.editorial h2{font-size:14pt}.editorial h3{font-size:11pt}.editorial section{margin-top:14px;padding:12px 0;border-color:#bbb}.editorial a,.editorial .role-date,.editorial .intro{color:black}.editorial h2,.editorial h3{break-after:avoid}.editorial li{break-inside:avoid}}
 `}</style></>
}

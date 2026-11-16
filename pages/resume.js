import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PROFILE, VERSIONS, PROJECTS } from '../lib/hiring';

export default function Resume() {
  const version = 'packaging';
  const selected = VERSIONS[version];
  return <>
    <Head></Head>
    <Navbar/>
    <main id="main-content" className="hiring-resume">
      <div className="resume-controls">
        <p className="resume-eyebrow">EXPERIENCE / SELECTED WORK / CONTACT</p><h1>Experience with a point of view.</h1>
        <div className="resume-links"><a className="resume-primary" href={'/resumes/'+selected.file} download>Download resume PDF</a><button onClick={()=>window.print()}>Print resume</button><a href="mailto:sivnco.in@gmail.com">Email Shiv</a></div>
      </div>
      <article className="resume-paper">
        <header><h2>{PROFILE.name}</h2><p className="resume-role">{selected.label}</p><p>Bengaluru, India · <a href={'mailto:'+PROFILE.email}>{PROFILE.email}</a> · <a href="tel:+918431272507">{PROFILE.phone}</a></p><p><a href="https://sivnco.in">sivnco.in</a> · <a href="https://www.linkedin.com/in/shivaraj-designer/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p></header>
        <section><h2>Profile</h2><p>{selected.intro} {PROFILE.summary}</p></section>
        <section><h2>Selected projects</h2>{selected.projects.map(key=>{const p=PROJECTS[key];return <div className="resume-project" key={key}><h3><Link href={p.href}>{p.title} ↗</Link></h3><p>{p.description}</p></div>})}</section>
        <section><h2>Experience</h2>{PROFILE.roles.map(r=><div className="resume-job" key={r.title}><h3>{r.title}</h3><p className="resume-job-meta">{r.company} | {r.dates}</p><ul>{r.bullets.map(b=><li key={b}>{b}</li>)}</ul></div>)}</section>
        <section><h2>Skills</h2><p>{PROFILE.skills}</p></section>
        <section><h2>Independent practice & education</h2>{PROFILE.additional.map(p=><p key={p}>{p}</p>)}</section>
        <section><h2>Education & recognition</h2><p>{PROFILE.education}</p></section>
      </article>
    </main><Footer/>
    <style jsx global>{`
      .hiring-resume{max-width:1040px;margin:auto;padding:150px 24px 80px;color:#F0EDE6;font-family:Urbanist,Arial,sans-serif}
      .resume-controls h1{font-family:Doto,Arial,sans-serif;font-size:clamp(2rem,5vw,3.7rem);line-height:1.15;margin:18px 0}.resume-controls>p{line-height:1.6}.resume-eyebrow{font-size:12px;letter-spacing:.16em;color:#efa660}
      .resume-links{display:flex;flex-wrap:wrap;gap:10px;margin:22px 0}.resume-links a,.resume-links button{padding:12px 17px;border:1px solid #69635b!important;border-radius:24px;background:#191611;color:#F0EDE6;font:inherit;text-decoration:none;cursor:pointer}.resume-links .resume-primary{background:#D4600A;color:white;border-color:#D4600A!important}
      .resume-paper{padding:clamp(24px,5vw,58px);margin-top:32px;background:#14110d;border:1px solid #50463a;border-radius:20px}.resume-paper header{border-bottom:1px solid #50463a;padding-bottom:20px}.resume-paper header h2{font-size:30px}.resume-role{font-size:20px;color:#efa660}.resume-paper section{margin-top:26px}.resume-paper section>h2{font-size:14px;letter-spacing:.1em;text-transform:uppercase;color:#efa660;margin-bottom:14px}.resume-paper p,.resume-paper li{font-size:15px;line-height:1.65;margin:8px 0}.resume-paper a{text-decoration:underline;text-underline-offset:4px}.resume-paper h3{font-size:17px;margin:0}.resume-project,.resume-job{margin-bottom:20px}.resume-paper ul{padding-left:20px}.resume-job-meta{color:#c2b8aa}
      a:focus-visible,button:focus-visible{outline:3px solid #efa660!important;outline-offset:4px}
      @media print{body{background:white!important;color:black!important}.resume-controls,nav,footer,.snav,.sivb-overlay,canvas{display:none!important}.hiring-resume{padding:0;max-width:none}.resume-paper{border:0;border-radius:0;background:white!important;padding:0;color:black!important}.resume-paper *{color:black!important}.resume-paper p,.resume-paper li{font-size:10pt;line-height:1.35}.resume-paper section{margin-top:14px}.resume-job h3{break-after:avoid}.resume-project{break-inside:avoid}.resume-paper a{text-decoration:none}@page{size:A4;margin:15mm}}
    `}</style>
  </>;
}

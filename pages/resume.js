import PortfolioEditorial from '../components/PortfolioEditorial';
import { resume } from '../data/resume';
export default function Resume(){return <PortfolioEditorial title={resume.name} description={resume.headline} path="/resume">
<p>{resume.contact}</p><p><a href="https://sivnco.in/work">Portfolio</a> · <a href="https://www.linkedin.com/in/shivaraj-designer/">LinkedIn</a></p>
<div className="actions"><a href="/resume.md" download>Download editable resume</a><button type="button" onClick={()=>window.print()} style={{padding:'10px 16px',borderRadius:22,cursor:'pointer'}}>Print / save PDF</button></div>
<section><h2>Profile</h2><p>{resume.profile}</p></section><section><h2>Experience</h2>{resume.sections.map(s=><article key={s.title}><h3>{s.title}</h3>{s.roles.map(r=><p className="role-date" key={r}>{r}</p>)}<ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul></article>)}</section>
<section><h2>Skills</h2>{resume.skills.map(([name,text])=><p key={name}><strong>{name}:</strong> {text}</p>)}</section>
<section><h2>Education</h2>{resume.education.split('\n').map(line=><p key={line}>{line}</p>)}<p><strong>Languages:</strong> {resume.languages}</p></section>
</PortfolioEditorial>}

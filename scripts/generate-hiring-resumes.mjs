import fs from 'node:fs';
import { chromium } from 'playwright';
const data=fs.readFileSync('lib/hiring.js','utf8');
const {PROFILE:p,VERSIONS,PROJECTS}=await import('data:text/javascript;base64,'+Buffer.from(data).toString('base64'));
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
fs.mkdirSync('public/resumes',{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
for(const [key,v] of Object.entries(VERSIONS)){
 const header=`<header><h1>${p.name}</h1><p class="role">${v.label}</p><p>Bengaluru, India | <a href="mailto:${p.email}">${p.email}</a> | ${p.phone}</p><p><a href="https://sivnco.in">sivnco.in</a> | <a href="https://www.linkedin.com/in/shivaraj-designer/">linkedin.com/in/shivaraj-designer</a></p></header>`;
 const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${p.name} | ${v.label}</title><style>
 @page{size:A4;margin:14mm 16mm}*{box-sizing:border-box}body{font-family:Arial,sans-serif;color:#222;font-size:9.8pt;line-height:1.32;margin:0}h1{font-size:25pt;margin:0 0 4px}h2{font-size:11pt;text-transform:uppercase;letter-spacing:.08em;color:#92400e;border-bottom:1px solid #d9d1c6;padding-bottom:5px;margin:14px 0 8px}h3{font-size:11pt;margin:12px 0 3px}p{margin:6px 0}a{color:#333;text-decoration:underline}.role{font-size:14pt;color:#92400e}.meta{font-size:9.5pt;color:#555}ul{padding-left:17px;margin:6px 0 12px}li{padding-left:2px;margin:4px 0}.page-two{break-before:page}.project{margin:18px 0}.small{font-size:9.5pt}.job{break-inside:avoid}footer{margin-top:24px;color:#666;font-size:9pt}
 </style></head><body>${header}<h2>Profile</h2><p>${v.intro} ${p.summary}</p><h2>Experience</h2>${p.roles.map(r=>`<section class="job"><h3>${r.title}</h3><p class="meta">${r.company} | ${r.dates}</p><ul>${r.bullets.map(b=>`<li>${escape(b)}</li>`).join('')}</ul></section>`).join('')}<h2>Core skills</h2><p class="small">${p.skills}</p>
 <section class="page-two"><h2>Selected work — ${v.label}</h2>${v.projects.map(k=>{const x=PROJECTS[k];return `<section class="project"><h3>${x.title}</h3><p class="meta">${x.scope}</p><p>${x.description}</p><p class="small"><a href="https://sivnco.in${x.href}">sivnco.in${x.href}</a></p></section>`}).join('')}<h2>Independent practice & teaching</h2>${p.additional.map(x=>`<p>${x}</p>`).join('')}<h2>Education & recognition</h2><p>${p.education}</p><footer>Portfolio: sivnco.in | ${p.email}</footer></section></body></html>`;
 const page=await browser.newPage();await page.setContent(html);await page.pdf({path:'public/resumes/'+v.file,format:'A4',printBackground:true});await page.close();
 fs.writeFileSync('public/resumes/'+v.file.replace('.pdf','.html'),html);
 fs.writeFileSync('public/resumes/'+v.file.replace('.pdf','.txt'),`${p.name}\n${v.label}\nBengaluru | ${p.email} | ${p.phone}\nhttps://sivnco.in\n\n${v.intro} ${p.summary}\n\nEXPERIENCE\n${p.roles.map(r=>`${r.title}\n${r.company} | ${r.dates}\n${r.bullets.map(b=>'- '+b).join('\n')}`).join('\n\n')}\n\nSELECTED PROJECTS\n${v.projects.map(k=>PROJECTS[k].title+'\n'+PROJECTS[k].description+'\nhttps://sivnco.in'+PROJECTS[k].href).join('\n\n')}\n\nSKILLS\n${p.skills}\n\nADDITIONAL EXPERIENCE\n${p.additional.join('\n')}\n\nEDUCATION\n${p.education}\n`);
 console.log(v.file);
}
await browser.close();
fs.copyFileSync('public/resumes/'+VERSIONS.packaging.file,'public/resume.pdf');


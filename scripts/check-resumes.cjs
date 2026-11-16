const fs=require('fs');const {PDFParse}=require('pdf-parse');
(async()=>{for(const f of fs.readdirSync('public/resumes').filter(f=>f.endsWith('.pdf'))){const p=new PDFParse({data:fs.readFileSync('public/resumes/'+f)});const r=await p.getText();console.log(JSON.stringify({file:f,pages:r.total,chars:r.text.length,hasManager:r.text.includes('Communication Design')}));await p.destroy();}})();

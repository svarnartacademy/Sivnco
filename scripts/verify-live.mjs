import https from 'node:https';

const urls = [
  'https://sivnco.in/',
  'https://sivnco.in/resume',
  'https://sivnco.in/contact',
  'https://sivnco.in/resume.pdf',
  'https://sivnco.in/resumes/H_P_Shivaraj_Brand_Packaging_Designer.pdf',
  'https://sivnco.in/sitemap.xml'
];

async function checkUrl(u) {
  return new Promise((resolve) => {
    https.get(u, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          url: u,
          status: res.statusCode,
          length: res.headers['content-length'] || data.length,
          etag: res.headers['etag'] || '',
          data
        });
      });
    }).on('error', err => {
      resolve({ url: u, error: err.message });
    });
  });
}

(async () => {
  for (const u of urls) {
    const res = await checkUrl(u);
    console.log(res.status, res.length, res.etag, res.url);
    if (u === 'https://sivnco.in/') {
      console.log('  Hero Brand & Packaging:', res.data.includes('BRAND &amp; PACKAGING DESIGNER') || res.data.includes('Brand &amp; Packaging Designer'));
      console.log('  Metrics 85+ Commercial SKUs:', res.data.includes('Commercial SKUs (15+ Families)'));
      console.log('  Nav Contact link:', res.data.includes('href="/contact"'));
    }
    if (u === 'https://sivnco.in/resume') {
      console.log('  No resume tabs:', !res.data.includes('resume-tabs'));
      console.log('  Download resume PDF link:', res.data.includes('Download resume PDF'));
    }
    if (u === 'https://sivnco.in/contact') {
      console.log('  Contact h1:', res.data.includes('Let’s talk about the work.'));
    }
    if (u === 'https://sivnco.in/sitemap.xml') {
      console.log('  Includes /contact in sitemap:', res.data.includes('https://sivnco.in/contact'));
    }
  }
})();

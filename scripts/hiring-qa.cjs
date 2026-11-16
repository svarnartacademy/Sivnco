const {chromium}=require('playwright');const fs=require('fs');
(async()=>{
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage();const result={pages:[],resumeSwitches:[],downloads:[]};
for(const route of ['/','/resume','/campaigns','/jusamazin/desi-energy-bar','/jusamazin/core-packaging']){
 const response=await page.goto('http://localhost:3100'+route,{waitUntil:'domcontentloaded'});
 const meta=await page.evaluate(()=>({titles:document.querySelectorAll('title').length,descriptions:document.querySelectorAll('meta[name="description"]').length,canonicals:document.querySelectorAll('link[rel="canonical"]').length,canonical:document.querySelector('link[rel="canonical"]')?.href,h1:document.querySelector('h1')?.textContent}));
 result.pages.push({route,status:response.status(),...meta});
}
await page.goto('http://localhost:3100/resume');
for(const label of ['Art Director — Brand & Packaging','Senior Visual Designer','Brand & Packaging Designer']){
 await page.getByRole('button',{name:label,exact:true}).click();result.resumeSwitches.push(await page.locator('.resume-role').textContent());
 const href=await page.locator('.resume-primary').getAttribute('href');const res=await page.request.get('http://localhost:3100'+href);const bytes=await res.body();result.downloads.push({href,status:res.status(),pdf:bytes.subarray(0,5).toString()==='%PDF-'});
}
await page.setViewportSize({width:390,height:844});await page.goto('http://localhost:3100/resume');
result.mobile=await page.evaluate(()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
fs.mkdirSync('../../outputs',{recursive:true});
await page.screenshot({path:'../../outputs/resume-mobile.png',fullPage:true});
await page.setViewportSize({width:1440,height:1000});await page.goto('http://localhost:3100/');await page.locator('#hiring-work').screenshot({path:'../../outputs/featured-work.png'});
const sitemap=await page.request.get('http://localhost:3100/sitemap.xml');result.sitemapStatus=sitemap.status();
result.passed=result.pages.every(p=>p.status===200&&p.titles===1&&p.descriptions===1&&p.canonicals===1)&&result.downloads.every(d=>d.status===200&&d.pdf)&&result.mobile.scrollWidth<=result.mobile.viewport;
fs.writeFileSync('../../outputs/qa.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));await browser.close();if(!result.passed)process.exitCode=1;
})();


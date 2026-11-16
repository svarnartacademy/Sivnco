import Head from 'next/head';
import { useRouter } from 'next/router';
import pages from '../lib/seo-data.json';

export default function Seo(){
 const {pathname}=useRouter();const meta=pages[pathname]||pages['/'];
 const url='https://sivnco.in'+(pathname==='/'?'/':pathname);
 const person={'@context':'https://schema.org','@type':'Person','@id':'https://sivnco.in/#person',name:'H P Shivaraj Acharya',alternateName:['Shiv','SIVNCO'],url:'https://sivnco.in/',jobTitle:'Manager – Communication Design',knowsAbout:['Brand design','Packaging design','Art direction','Visual design','Illustration','Motion design'],sameAs:['https://www.linkedin.com/in/shivaraj-designer/']};
 return <Head><title>{meta.title}</title><meta name="description" content={meta.description}/><link rel="canonical" href={url}/><meta property="og:type" content={pathname==='/'?'website':'article'}/><meta property="og:title" content={meta.title}/><meta property="og:description" content={meta.description}/><meta property="og:url" content={url}/><meta property="og:image" content="https://sivnco.in/images/thumbnail.jpg"/><meta property="og:image:alt" content="SIVNCO — design portfolio of H P Shivaraj Acharya"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={meta.title}/><meta name="twitter:description" content={meta.description}/><meta name="twitter:image" content="https://sivnco.in/images/thumbnail.jpg"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person).replace(/</g,'\\u003c')}}/></Head>;
}

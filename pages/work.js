import Link from 'next/link';
import PortfolioEditorial from '../components/PortfolioEditorial';
import { portfolioCategories } from '../data/portfolioCategories';
export default function Work(){return <PortfolioEditorial title="Selected work" description="Brand and packaging direction, grounded in physical production and extended through campaigns, digital experiences, art and education." path="/work">
<nav className="category-nav" aria-label="Work categories">{portfolioCategories.map(c=><a key={c.id} href={'#'+c.id}>{c.title}</a>)}</nav>
<div className="facts"><div><strong>85+</strong><span>SKUs in the company portfolio I support</span></div><div><strong>160,000</strong><span>Pouches in a Desi Energy Bar production order</span></div><div><strong>2023–today</strong><span>Jus’Amazin design and production ownership</span></div></div>
{portfolioCategories.map(c=><section key={c.id} id={c.id}><h2>{c.title}</h2><p>{c.description}</p><ul className="project-links">{c.links.map(([label,href])=><li key={href}><Link href={href}>{label} →</Link></li>)}</ul></section>)}
</PortfolioEditorial>}

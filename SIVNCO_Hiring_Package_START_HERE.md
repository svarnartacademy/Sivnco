# SIVNCO hiring package — 16 November 2026

## Positioning

Primary specialism: brand and packaging design. Apply selectively to hands-on Art Director and Senior Visual Designer roles using the corresponding resume. Use the exact employment title **Manager – Communication Design** in experience; target-role headlines describe the opportunity sought. Preserve SIVNCO’s black/orange palette, Doto/Urbanist typography, art archive and personal voice.

The hiring story: original visual ideas, turned into coherent systems and carried through production. Production knowledge supports creative judgement. It should not dominate the opening impression.

## Included deliverables

- Three text-based, two-page PDF resumes with clickable portfolio links, plus editable HTML and plain-text versions.
- Revised resume page with focus selection, corresponding downloads, print styling, email and telephone links.
- Homepage introduction and three immediate project entry points: DEB, 30SAD and packaging systems.
- DEB finished-work preview, role/context summary and corrected process captions.
- Central route-specific titles, descriptions, canonical URLs, social previews and Person structured data. Public sitemap regenerated from actual page routes.
- Unsupported campaign performance dashboards and unverified verbatim endorsements removed from the campaign page. A comparison of creative execution formats replaces the attribution table.
- Contact form HTTP failure handling, keyboard focus treatment, responsive project cards and reduced-motion CSS.

## How to choose a resume

| Opportunity | Resume | First portfolio link |
|---|---|---|
| Brand Designer / Packaging Designer / Senior Packaging Designer | Brand & Packaging Designer | DEB, then packaging systems |
| Hands-on Art Director / Brand Art Director | Art Director — Brand & Packaging | DEB, then 30SAD |
| Senior Visual Designer / Brand Visual Designer | Senior Visual Designer | Campaigns, then DEB and packaging systems |

Keep the employment history consistent across applications. Tailor project order, opening statement and relevant skill emphasis to the actual job description. Do not add team-management claims unless evidenced. Teaching remains a secondary path with a separate application narrative.

## Case-study editorial requirements

### Desi Energy Bar

Finished wrapper and dispenser first. Then the brief, observed category problem, actual alternative concepts, chosen character direction, typography/information hierarchy, physical proof and final release. Caption images by their actual contents. The tracker records design activity in December 2023 and early 2024; do not present September–October 2024 as the beginning of the entire project without distinguishing a later revision phase. Keep the reported 25-store study qualitative unless dated notes support stronger claims.

### 30-Second Almond Drink

Show the actual film immediately with working controls and a poster. State visual concept, copy/script, storyboard, motion/3D/editing and packaging contributions separately. Track **created → delivered → approved → published**. A completed comparison film is not evidence of a paid launch. The August 2025 survey is a submitted plan; do not present it as completed research. Avoid general assertions about competitor composition without specific substantiation.

### Packaging systems

Show a genuinely comparable before/after pair, a range overview and a readable label detail. Distinguish inherited brand elements from original work. Explain one practical trade-off, such as master-pouch flexibility or label alignment, and demonstrate the actual solution. Define product family, SKU/pack-size row and artwork file separately.

## Claims policy

| Claim | Public treatment |
|---|---|
| Promotion effective December 2024 | Retain exact title and date |
| 277 print-ready files | Describe as directory scope, not 277 original designs |
| 160,000 DEB pouches | January 2026 order scope, not a sales figure |
| 176% revenue growth | Shared company FY2024–25 result, never sole design causation |
| 2.5× recall / +58% recognition | Omit until baseline, method, sample and measurement period are available |
| 40% efficiency | Omit from new resumes unless the estimate can be explained credibly |
| 40–85% printing savings | Separate quantity/process changes from like-for-like supplier comparisons |
| Undeployed survey / shelved film | Credit the work delivered; do not claim launched outcomes |
| Testimonials | Publish only approved verbatim wording with permission |

The supplied documents and tracker are evidence indexes. Linked original artwork, letters and POs were not all independently re-audited for this package. No private salary, personal correspondence, vendor pricing sheets or student details should be published.

## Applying the website changes

The ZIP contains changed files preserving repository-relative paths and a `portfolio.patch`. Start from the base commit recorded in `validation.json`. Use a new branch and `git apply --check portfolio.patch` before applying. The source files are also included for review or a controlled Antigravity handoff. Do not run the one-off editing scripts; they are intentionally excluded.

Run `npm ci`, `node scripts/generate-hiring-resumes.mjs`, `npm run build`, then preview. The PDF script currently uses the Windows Chrome path; adapt `executablePath` for another environment. Commit the generated PDFs so deployment does not require Chrome. `/resume.pdf` remains a compatible default download. Keep existing media and Git LFS objects; the package contains changed files rather than the full asset archive.

## Functional acceptance

- Desktop and mobile: no horizontal overflow on the revised resume; role switches change the heading and download target.
- All three downloads return real PDFs, contain searchable text and use two pages.
- Home, resume, campaigns, DEB and packaging-system pages return successful responses.
- A single title, description and canonical per page; social cards use absolute image URLs.
- Sitemap contains public canonical routes, no private sources or application parameters.
- Email and telephone links work without requiring the chatbot.
- Keyboard focus remains visible; reduced-motion users can read featured content.
- Test the actual Netlify form in staging before production. Local HTTP checks do not prove email delivery.

## Remaining work and limits

1. Source PDFs generated here are application resumes, not a finished visual portfolio deck. The website remains the visual portfolio.
2. Visually inspect all historical project media and captions before publishing the entire archive. The DEB caption corrections use the earlier observed image contents; not every image across all pages was re-audited.
3. Video files in this checkout include Git LFS pointers. Restore LFS media for complete local film playback testing. No LFS pointers should overwrite production video bytes.
4. The homepage still serializes a large HTML/CSS/script payload through `getStaticProps`; the production build flags roughly 275 kB of page data. Moving this to reusable components and static assets is a separate performance refactor that should preserve the current identity.
5. The installed Next.js version emits a security advisory. A dependency upgrade needs its own compatibility check; this package does not change the lockfile.
6. Search Console indexing, canonical-domain redirects and real analytics need deployment/account verification. SEO improvements do not guarantee rankings or interviews.
7. Other historical pages may retain old counts or outcome language; reconcile those with the claims table before a complete public editorial sign-off.

## After deployment

Inspect the canonical home, resume and three project routes in Search Console; submit the sitemap. Measure qualified project visits, resume downloads and contact clicks if suitable analytics already exists. Keep the resume consistent with LinkedIn/Naukri titles and dates. Evaluate application response by role and portfolio route rather than expanding to unrelated titles immediately.

Sources: user-provided work dossier; master Google Doc `11rQXDjMxF8hdNN_C5ugr1JFjJNQfGxBcBLKHeylGDow`; timeline `1DNUK64DZsEcqKQ1Oga_0pCaB4kRdLz8bE2Oyd3hvEMY`; current Sivnco repository. SEO reference: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

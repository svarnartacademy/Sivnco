# SIVNCO Site, Resume & Portfolio Fix Blueprint (November 2026)

This guide accompanies your upgraded **2-page Executive Resume PDF** (`H_P_Shivaraj_Brand_Packaging_Designer.pdf`), your updated Next.js resume data module (`hiring.js`), and your patched homepage (`index.html`). Every change below directly resolves one of the 5 bottlenecks holding your profile back from **₹9–14 LPA Art Director and Brand & Packaging Design Lead** roles.

## 1. What Was Fixed Across Your Files

| File / Surface | Bottleneck Identified | Exact Fix Applied | 
| ----- | ----- | ----- | 
| **`hiring.js` & `H_P_Shivaraj_Brand_Packaging_Designer.pdf`** | **Over-Stripped ROI Metrics:** The Nov 16 hiring package removed almost all commercial and engineering outcomes, leaving only `277 print-ready files` and `160,000-pouch DEB order`—making you read like a file maintainer rather than a design leader. | Restored 4 audit-safe, PO-backed metrics: **\~85% wrapper unit-cost cut** (`₹5.07` digital trial to `₹0.78` rotogravure across `1,60,000` DEB pouches), **46% offset label savings** (`₹1.40` to `₹0.75/sticker` via clubbed gang runs), **4x–5x factory labeling speed** (`100 to 400–500 pouches/hr` via the Universal Master Pouch alignment system), and **+176% shared FY24–25 company revenue growth context**. | 
| **`hiring.js` (`PROJECTS`) & `index.html`** | **90% Single-Brand Concentration:** Nearly all featured work was from Jus'Amazin, making Creative Directors question if your visual taste adapts outside one nutrition brand. | Added **`studio` (`OG Mithai & Vedic Treats — Luxury & Heritage Brand Worlds`)** as the 4th core project across all three resume tracks (`packaging`, `art`, `visual`) and the PDF case study grid. | 
| **`index.html` (`sivnco.in` Homepage)** | **SKU Count Contradiction (`15+` vs. `85+`):** Your homepage showed `DIELINE // 85+ SKUS` and `UNIFIED 85+ SKU ARCHITECTURE` right above a metric block stating `15+ SKUs Designed`. | Standardized all homepage counters and descriptions to: **`15+ product families (85+ commercial SKUs & 277 print-ready masters)`**. | 
| **`index.html` & `hiring.js` (Role Cards)** | **Moonlighting / Split-Focus Risk:** Displaying `Sivnco Studio (Founder)` and `Svarnart Academy (Co-Founder)` as equal blocks alongside full-time employment triggers HR concern. | Added explicit **`SUNDAYS & HOLIDAYS ONLY`** (Sivnco Studio) and **`SUNDAYS & POST-6 PM EVENINGS`** (Svarnart Academy) schedule tags directly onto the homepage role cards and resume bullets. | 

## 2. How to Deploy the Code Changes to Your `sivnco` Repository

1. **Replace `lib/hiring.js`:** Copy the generated `hiring.js` file into your local repository at `lib/hiring.js`.

2. **Replace `public/resume.pdf` (and role PDFs):** Copy `H_P_Shivaraj_Brand_Packaging_Designer.pdf` to `public/resume.pdf` and `public/resumes/H_P_Shivaraj_Brand_Packaging_Designer.pdf` (or run `node scripts/generate-hiring-resumes.mjs` after placing the updated `lib/hiring.js`).

3. **Update `index.html`:** Copy the patched `index.html` into your repository root (or apply the string updates to your homepage source component) so the `85+ SKUs (15+ Families)` counter and Sunday/post-6 PM role labels go live on [`sivnco.in`](https://sivnco.in).

4. **Update or Disable the Maya AI Cloud Run Prompt (`https://sivnco-1098322690658.asia-southeast1.run.app/`):** Since your [`FACTUAL_REVIEW_LIST.md`](https://drive.google.com/file/d/10lm2UfSoI4AC5OqPRYZf1ka-1qnmBwvB/view?usp=drivesdk) notes that the external Cloud Run instance still carries older `BFA` text, either update its system prompt with your new `hiring.js` text or keep the direct email/WhatsApp CTA primary until the Cloud Run container is redeployed.

## 3. Copy-Paste LinkedIn & Application Pitch Alignment

Use these exact strings on LinkedIn (`linkedin.com/in/shivaraj-designer`), Cutshort, and Indeed so your public profile, [`sivnco.in`](https://sivnco.in), and your PDF resume match 100%:

* **Headline:**
  `Brand & Packaging Design Lead | Art Director — FMCG, D2C, 3D & Print Production (85+ SKUs | B.V.A. Gold Medalist)`

* **Expected CTC & Notice Framing for Screening Calls:**

  > *"I currently lead the complete brand, packaging, 3D visualization, and print procurement function at Jus'Amazin as Manager – Communication Design across 15+ product families and 85+ commercial SKUs. Because I joined early out of college and grew into the functional lead role internally, my current CTC is ₹4.91 LPA—for my next move into a Senior Packaging Design Lead or Art Director role, I am targeting the ₹8.5–10.5 LPA market band with a 30-day notice period (negotiable)."*
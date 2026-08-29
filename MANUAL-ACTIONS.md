# Maxwell Electrodeal — Manual SEO Actions

Complete these outside of Cursor. Check off as you go.

---

## URGENT (Do Today)

- [ ] **Deploy** latest code to Vercel (Phase A–C SEO changes)
- [ ] **Google Business Profile** — [business.google.com](https://business.google.com)
  - Primary category: **Website Designer** (or **Web Designer**)
  - Secondary: **Software Company**
  - **Not** Printer, Toner, or Electronics dealer
  - Address: 419, Lalita Tower, Near Hotel Rajpath, Jetalpur Road, Vadodara, Gujarat 390007
  - Phone: +91 95868 68538
  - Website: https://maxwellelectrodeal.com
  - Description: Website development, SEO, and AMC for businesses and manufacturers in Vadodara — from ₹35,000. Not ERP software. Not printer hardware.
- [ ] **JustDial** — Update category to **Website Designing / Software Development Company**
- [ ] **IndiaMART** — Change category from printer/electronics to **IT Services / Website Development**
- [ ] **Verify Vercel environment variables:**
  - `NEXT_PUBLIC_GTM_ID` = `GTM-TFSNMLRK`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-S133R6RG68`
  - `NEXT_PUBLIC_SITE_URL` = `https://maxwellelectrodeal.com`

---

## GOOGLE SEARCH CONSOLE (after deploy)

- [ ] Submit sitemap: `https://maxwellelectrodeal.com/sitemap.xml`
- [ ] Request indexing for money pages (see `docs/intelligence/GSC_DEINDEX_BATCH.md`)
- [ ] After 2–4 weeks: request **removals** for ERP/compare waste prefixes listed in that doc
- [ ] Monitor **Coverage** weekly — target fewer indexed URLs, more clicks on Vadodara terms
- [ ] Enable email alerts for coverage drops and manual actions

**Top 10 indexing URLs:**

1. `/`
2. `/solutions/web-development-company-vadodara`
3. `/services/website-development-for-manufacturers`
4. `/services/industrial-website-design`
5. `/solutions/web-development-company-india`
6. `/pricing`
7. `/locations/india/vadodara`
8. `/services/website-development`
9. `/solutions/seo-company-vadodara`
10. `/case-studies/drashti-chemicals`

---

## THIS WEEK

- [ ] **Clutch.co** — [clutch.co/get-listed](https://clutch.co/get-listed) — category: Web Developers / Software Developers (see `DIRECTORY-LISTINGS.md`)
- [ ] **GoodFirms** — [goodfirms.co](https://www.goodfirms.co)
- [ ] **LinkedIn Company Page** — Full setup (see `DIRECTORY-LISTINGS.md`)
  - Specialties: Website Development, Web Design, SEO, Manufacturer Catalogs
  - First post: Drashti case study or Vadodara website pricing — **not** ERP pitch
- [ ] Request **5 client reviews** on Google Business Profile (mention website project, not ERP)
- [ ] Request **5 client reviews** on Clutch (after profile is live)

---

## THIS MONTH

- [ ] Guest post pitch → **YourStory** — [submit.yourstory.com](https://submit.yourstory.com) (MSME websites / Gujarat manufacturing web, not ERP)
- [ ] Sign up for **HARO** / **Quoted** — respond to **web design / small business website** queries
- [ ] **YouTube** — "Maxwell Electrodeal — Website Company Vadodara" (5 min, show Drashti + pricing)
- [ ] **LinkedIn** — Post 3× per week (case study, pricing transparency, client site speed)

---

## AFTER DEPLOY (verify in production)

- [ ] Re-run Rich Results Test on homepage, `/reviews`, `/services/website-development`, `/case-studies/drashti-chemicals`
- [ ] Run Lighthouse on production — target 90+ all metrics on money pages
- [ ] Confirm schema shows Organization + LocalBusiness + ProfessionalService on homepage
- [ ] Confirm `/compare/*` and `/tools/erp-*` return 301 or noindex (not ERP content)
- [ ] Confirm trimmed GIDC URLs 301 to `/locations/india/gujarat/gidc`

---

## Entity / NAP rules

| Surface | Address detail |
|---------|----------------|
| Website + JSON-LD | City only: "Office in Vadodara" |
| Google Business Profile | Full street address (Lalita Tower) |
| Directories (Clutch, JustDial) | Match GBP |

This split is intentional — full street on-site was removed per product decision; GBP carries local pack NAP.

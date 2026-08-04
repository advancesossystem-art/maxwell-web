# Surgical SEO Cleanup Status — 2026-08-04

## Goal
Eliminate programmatic crawl bloat; concentrate equity on ~40 money pages.

## Done
- Money-only XML sitemaps (`src/lib/seo/money-sitemap-allowlist.ts` + `sitemap-data.ts`)
- 301 consolidations for duplicate verticals (`next.config.ts`)
- Programmatic blog batch → `noIndex: true` (`seo-articles-batch.ts`)
- Footer + mega-menu de-linked from thin / secondary cluster URLs
- Manufacturer hub industries + region links reduced to money paths
- `llms.txt` / `llms-full.txt` trimmed to allowlist

## Not deleted
Noindex doorways and thin cost/location pages remain **live** at old URLs so bookmarks don't soft-404; they are **absent from sitemaps** and **not linked** from global nav/footer.

## Post-deploy (ops)
1. GSC → Submit sitemap.xml again
2. Use URL Inspection on canonical verticals
3. After 2–4 weeks, monitor Coverage decline for "crawled/not indexed" waste

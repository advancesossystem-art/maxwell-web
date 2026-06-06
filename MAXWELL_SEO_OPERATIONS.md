# Maxwell Electrodeal — SEO operations (India + global)

Technical SEO is implemented in the Next.js app (metadata, hreflang, JSON-LD, sitemaps, `robots.ts`, `public/llms.txt`). **Ranking #1 for every term in India and worldwide is not guaranteed by code** — it also requires Search Console, content, backlinks, reviews, and time.

## Already in the codebase

| Area | Location |
|------|----------|
| Keywords (India + global) | `src/lib/seo/search-keywords.ts` |
| Metadata & hreflang | `src/lib/seo/metadata-utils.ts`, `src/lib/seo/config.ts` |
| Organization / LocalBusiness / WebSite schema | `src/components/seo/GlobalSiteJsonLd.tsx` |
| Per-page FAQ & breadcrumbs | `src/components/seo/JsonLd.tsx` |
| Sitemap index + 8 child sitemaps | `src/app/sitemap*.xml`, `src/lib/sitemap-data.ts` |
| AI / LLM discovery | `public/llms.txt`, crawler rules in `src/app/robots.ts` |
| Thank-you / portal | `noindex` + `robots` disallow |

## Launch checklist (you must do these)

1. **Google Search Console** — Add property `https://maxwellelectrodeal.com`, verify via `GOOGLE_SITE_VERIFICATION` in `.env`, submit `https://maxwellelectrodeal.com/sitemap.xml`.
2. **Bing Webmaster Tools** — Same domain, set `BING_SITE_VERIFICATION`, submit sitemap.
3. **Consistent entity** — Fill `socialProfiles` in `src/lib/seo/config.ts` with live LinkedIn/YouTube URLs (same name, address, phone everywhere).
4. **Core Web Vitals** — Monitor LCP/CLS in Search Console; keep hero images optimized.
5. **Content velocity** — Publish 2–4 `/blog` and `/guides` posts per month targeting `buyerQuestionKeywords` in `search-keywords.ts`.
6. **Backlinks** — Directories (Clutch, GoodFirms), guest posts, partner pages; quality beats quantity.
7. **Local** — Google Business Profile for Vadodara office (if applicable).
8. **Analytics** — Set `NEXT_PUBLIC_GTM_ID` / GA4 to track organic → `/contact` and `/get-estimate`.

## Realistic expectations

- **India**: Compete on city pages (`/locations/india/*`), services, and “software development company India” clusters.
- **Global**: Compete on offshore/hire-dedicated-developer intent and country hubs (`/locations/usa`, `/locations/uk`, etc.).
- **AI search (2026)**: `llms.txt`, FAQ schema, and consistent entity data help ChatGPT/Perplexity/Google AI Overviews cite you — not replace traditional SEO.

## Env vars

```env
NEXT_PUBLIC_SITE_URL=https://maxwellelectrodeal.com
GOOGLE_SITE_VERIFICATION=your-google-token
BING_SITE_VERIFICATION=your-bing-token
```

Redeploy after setting verification codes.

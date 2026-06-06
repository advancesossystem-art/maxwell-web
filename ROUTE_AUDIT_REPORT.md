# Production Route Audit Report — Phase 8

**Project:** Maxwell Electrodeal  
**Date:** 2026-06-04  
**Build:** `npm run build` — **186 static routes**, TypeScript clean  
**Method:** App router inventory, `generateStaticParams` alignment, redirect config, nav/sitemap cross-check

---

## Route inventory by category

| Category | Hub | Dynamic routes | Notes |
|----------|-----|----------------|-------|
| **Homepage** | `/` | — | Intro optional (`INTRO_MODE`) |
| **Services** | `/services` | 8 slugs | `services-data.ts` source of truth |
| **Industries** | `/industries` | 6 slugs | |
| **Work** | `/work` | 8 project slugs | |
| **Case studies** | `/case-studies` | 8 slugs | Distinct from legacy `constants.caseStudies` |
| **Blog** | `/blog` | 25 articles | |
| **Guides** | `/guides` | 10 slugs | |
| **Resources** | `/resources` | 10 slugs | |
| **Reports** | `/reports` | 5 slugs | |
| **Authors** | — | 7 author pages | Linked from content |
| **Solutions** | `/solutions` | 8 slugs | |
| **Locations** | `/locations` | 8 countries + 10 cities | |
| **Company** | `/about`, `/company`, `/team`, `/process`, `/careers`, `/why-maxwell` | — | |
| **Portal** | `/portal`, `/portal/login` | Dashboard + 10 app routes + 5 proposal/project IDs | **Demo auth**; `noIndex` on all portal pages |
| **Tools** | `/tools` | 7 tool slugs | |
| **Contact / leads** | `/contact`, `/get-estimate`, `/book-consultation`, `/discovery-call`, `/project-calculator` | — | All POST to `/api/leads` (contact via deprecated proxy) |
| **Legal** | `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, `/disclaimer`, `/data-processing` | — | Legacy `/privacy`, `/terms` redirect |
| **Utility** | `/thank-you`, `/sitemap.xml`, 8 segment sitemaps, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image` | — | Thank-you `noIndex` |
| **Admin** | `/admin/site-audit` | — | `noIndex`; blocked in `robots.ts` |

---

## Redirects (verified)

| Source | Destination | Status |
|--------|-------------|--------|
| `/services/software-development` | `/services/custom-software-development` | 308 permanent |
| `/privacy` | `/privacy-policy` | 308 permanent |
| `/terms` | `/terms-of-service` | 308 permanent |

---

## 404 / broken route risk

| Check | Result |
|-------|--------|
| Service pages vs `serviceSlugs` | ✅ All 8 slugs have `generateStaticParams` + `notFound()` guard |
| Case studies vs `caseStudySlugs` | ✅ 8 slugs aligned |
| Work vs `projectSlugs` | ✅ Aligned |
| Tools vs `toolSlugs` | ✅ 7 tools |
| Legacy `constants.services` slugs (`software-development`, `ui-ux-design`) | ⚠️ **Not routable** — not linked from hub (hub uses `services-data`). Schema `ServicesJsonLd` still lists legacy titles (no URLs). |
| Legacy `constants.caseStudies` slugs | ⚠️ **Not routable** — unused in app links; real slugs e.g. `manufacturing-erp` |

**No automated broken-link crawl was run against production URL.** Recommend `npx linkinator https://maxwellelectrodeal.com` post-deploy.

---

## Navigation audit

| Surface | Status | Notes |
|---------|--------|-------|
| Header primary nav | ✅ | Services, Industries, Work, Tools, Blog, Contact |
| Header mobile drawer | ✅ | Full `navLinks` + focus trap (Phase 7) |
| Footer | ✅ | Services, industries, company, resources, legal |
| Portal nav | ✅ | Permission-filtered sidebar |
| CTAs | ✅ | Book consultation, estimate, discovery, contact consistent |

**Gap:** `navLinks` includes Portal — acceptable for demo; label as client area.

---

## Forms & CTAs by route

| Route | Form endpoint | Success path |
|-------|---------------|--------------|
| `/contact` | `/api/contact` → `/api/leads` | Inline success / reload |
| `/get-estimate`, `/project-calculator` | `/api/leads` | `/thank-you` |
| `/book-consultation`, `/discovery-call` | `/api/leads` | `/thank-you` |
| Newsletter / magnets | `/api/newsletter` | `/thank-you` |
| Tool export gate | `/api/leads` (`tool-{slug}`) | Local unlock |
| Portal login | Client-only demo | Session storage |

---

## Sitemap vs robots

| Item | Status |
|------|--------|
| 8 segmented sitemaps + index | ✅ |
| `robots.ts` disallows `/api/`, `/admin/` | ✅ |
| Portal URLs in `sitemap-pages.xml` (`/portal`, `/portal/login`) | ⚠️ Same URLs use `noIndex` metadata — **harmless but redundant**; remove from sitemap post-launch optional |

---

## API routes

| Route | Purpose |
|-------|---------|
| `POST /api/leads` | Primary lead intake + scoring + CRM |
| `POST /api/contact` | Deprecated shim to leads |
| `POST /api/newsletter` | Subscribe + optional magnet |

---

## Findings summary

| Severity | Finding |
|----------|---------|
| **Must fix (ops)** | CRM webhooks + transactional email not configured in `.env` (leads log to console only) |
| **Should fix** | Align `ServicesJsonLd` with `services-data` slugs for schema accuracy |
| **Low** | Remove portal public URLs from sitemap or keep with noindex |
| **Low** | Legacy dead slugs in `constants.ts` (documentation debt) |

**Route layer verdict:** ✅ **No structural 404 gaps** in built static routes. Launch risk is **operational** (env, CRM), not routing.

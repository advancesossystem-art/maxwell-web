# CEO / Managing Director Founder Blueprint — Implementation Status

**Date:** 2026-08-04  
**Repo:** Maxwell Electrodeal (maxwellelectrodeal.com)  
**Pricing SSoT:** Starter ₹45,000 · Professional ₹75,000 · Growth ₹1,50,000 (`src/lib/pricing-data.ts`)  
**Website payment:** No advance · full pay within 3 days go-live · 18% GST (not ERP milestones)

---

## P0 checklist

| Item | Status | Notes |
|---|---|---|
| Domain email migration (display / schema / forms fallback) | ✅ | SSOT `corporateEmails` + `siteConfig.email` / `founderEmail` in `src/lib/constants.ts` |
| Fallback lead inbox | Updated | `maxwellelectrodealsystems@gmail.com` only (founder requested single inbox) |
| Primary public email | Updated | `maxwellelectrodealsystems@gmail.com` (schema, forms, llms, AI) |
| Organization JSON-LD disambiguation | ✅ | `brandDisambiguation`, `ORGANIZATION_DESCRIPTION`, knowsAbout expanded |
| On-page brand identity | ✅ | About block + homepage FAQs + AI recommendation FAQs |
| SMTP invention | ⛔ not done | Display/mailto/schema only; founder must set MX / continue SMTP relay ops |

---

## P1 checklist

| Item | Status | Notes |
|---|---|---|
| `shouldNoIndexPath` central helper | ✅ | `src/lib/seo/index-quality.ts` |
| Soft noindex thin programmatic doorways | ✅ | Policy documented; build-pages already sets noIndex on matrices |
| Keep indexable money pages | ✅ | Industrial silos, GIDC, verticals, core cost guides stay out of doorway policy |
| Homepage positioning overhaul | ✅ | Directory → owned Direct RFQ catalog narrative |
| Unfair advantage TCO section | ✅ | `HomeUnfairAdvantage` + `unfairAdvantageOffer` |
| Soft de-emphasize software head term | ✅ | Hero / entity copy website-first |
| Four authoritative verticals (exact paths) | ✅ | See URLs below |
| Corridor links Phase 2 | ✅ | GIDC + Morbi / Ankleshwar linked from verticals |
| Lead magnet blog | ✅ | `/blog/vadodara-manufacturers-directory-to-nextjs-catalog` |
| Sales enablement | ✅ | `/founder-insights` (GIDC 2-min audit + Loom script) |
| Phase 4 upsell ladder | ✅ | `/engagement-models` + `upsellLadder` SSoT |
| Docs + SEO status | ✅ | This file + `SEO_IMPLEMENTATION_STATUS.md` |

---

## Email migration summary

**Preferred public contacts**

- Primary contact only: `maxwellelectrodealsystems@gmail.com`

**Code / config paths updated**

- `src/lib/constants.ts` (SSoT)
- `src/lib/gmail-config.ts` (FALLBACK_INBOX)
- `src/lib/lead-notification-email.ts`
- `src/lib/seo/organization-schema.ts`
- `src/lib/seo/ai-discovery.ts`
- `src/components/leads/ThankYouPageContent.tsx`
- `src/app/solutions/web-development-company-india-international/page.tsx`
- `public/llms.txt`, `public/ai.txt`, `public/downloads/erp-readiness-checklist.txt`
- `.env.example` (`LEAD_NOTIFICATION_EMAIL`)
- `SECURITY.md`, `DIRECTORY-LISTINGS.md`, `BACKLINK-OUTREACH.md`

**Note:** `GMAIL_USER` may remain a Gmail SMTP login until domain SMTP/MX is live — only **display + lead notification recipient** defaulted to domain general. Ops must set `LEAD_NOTIFICATION_EMAIL` and DNS MX for real inbox delivery.

---

## Schema / entity changes

- Legal name: **Maxwell Electrodeal Private Limited**
- Description: Software & Website Engineering Company — industrial B2B product catalog & RFQ websites, web apps, custom software
- Explicit NOT: printer/toner/photocopier hardware retail
- Explicit NOT: Maxwell Engineering Solutions / maxwells.in / Waghodia pelletizing-die manufacturers
- ContactPoint: general sales (`contact@`) + founder (`sanjay@`)
- `footerBrandNote` + About “brand identity” block for humans

---

## URL patterns noindexed (soft — URLs kept live)

| Pattern | Policy |
|---|---|
| `/locations/india/{city}/{service}` | noindex except allowlist: `surat-custom-software-development`, `halol-ai-development` |
| `/industries/{industry}/{service}` | noindex (thin matrix) |
| `/cost/*` thin city / non-India clones | noindex via `isIndexableCostSlug` — keep India national, US/UK/UAE web, priority city web cost, handcrafted manufacturing/Vadodara |
| `/compare/best-erp-for-*` + ERP waste list | noindex (demote ERP equity) |
| Consolidated `/solutions/*` | noindex when canonicalized to pillars |

**Still indexable (by design):** industrial silos, manufacturer hub + verticals (incl. blueprint 4), GIDC hand pages, Vadodara/Gujarat solutions, core cost guides, industrial tools, quality verticals.

Central helper: `shouldNoIndexPath()` in `src/lib/seo/index-quality.ts`.

---

## New / upgraded vertical URLs

| Path | Corridor focus |
|---|---|
| `/services/website-development/chemical-manufacturers` | Ankleshwar / Nandesari — CAS, SDS, REACH |
| `/services/website-development/engineering-machinery` | Makarpura / Savli — RFQ, CAD, machinery video |
| `/services/website-development/ceramic-exporters` | Morbi — tiles, PEI, export |
| `/services/website-development/pharma-equipment` | Vadodara / Halol — clean showcase |

Near-equivalents retained (dual paths): `chemical-manufacturer`, `engineering-company`, `ceramic-manufacturer`, `pharmaceutical-company`, etc.

Shared UX: packages from pricing-data, payment terms, Service JSON-LD, DirectAnswerBlock, estimator + GIDC + hub links (`IndustryWebsitePage`).

---

## Positioning + lead magnet + upsell

| Asset | Path / location |
|---|---|
| Homepage hero | Directory → owned Direct RFQ catalog |
| Unfair advantage | Homepage section → pricing TCO |
| Lead magnet article | `/blog/vadodara-manufacturers-directory-to-nextjs-catalog` |
| Sales playbook | `/founder-insights` |
| Upsell ladder | `/engagement-models` (site → Tally/GST ~₹50k → dealer ~₹2.5L → ERP ₹5–12L *indicative*) |

---

## Residual (human / ops)

- [ ] Domain email MX + mailbox for `contact@` / `sanjay@` (founder ops)
- [ ] Update production `LEAD_NOTIFICATION_EMAIL` env on host
- [ ] Outbound Loom audits remain sales process (playbook only on-site)
- [ ] GSC URL Inspection for new verticals + blog
- [ ] Clean legacy Gmail from third-party directory profiles manually

---

## Verification

- `npx tsc --noEmit` — run after implement
- No commit/push required by blueprint

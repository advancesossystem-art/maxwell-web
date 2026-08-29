# GSC De-Index URL Batch — Maxwell Electrodeal

**When:** After deploy of Phase A redirects + noindex headers  
**Where:** Google Search Console → Removals → **Temporary removals** → New request → **Remove all URLs with this prefix** OR paste individual URLs in URL Inspection → **Request indexing** on money pages only.

## Strategy

1. **Money pages** → Request **indexing** (not removal).
2. **Waste URLs** → Let 301 + `noindex` work for 2–4 weeks; then use **Removals** for stubborn prefixes still getting impressions.
3. **Trimmed GIDC** (Waghodia, Por, Halol, Vatva) → Already 301 to hub; request removal of old prefixes if still indexed after 30 days.

---

## Request INDEXING (priority — do first)

| URL | Why |
|-----|-----|
| `https://maxwellelectrodeal.com/` | Brand + hub |
| `https://maxwellelectrodeal.com/solutions/web-development-company-vadodara` | 412 imp, pos ~52 — upgraded commercial LP |
| `https://maxwellelectrodeal.com/solutions/business-website-vadodara` | MSME commercial intent |
| `https://maxwellelectrodeal.com/solutions/ecommerce-website-vadodara` | Ecommerce intent |
| `https://maxwellelectrodeal.com/solutions/website-redesign-vadodara` | Redesign intent |
| `https://maxwellelectrodeal.com/solutions/web-design-company-vadodara` | Design intent |
| `https://maxwellelectrodeal.com/services/website-development-for-manufacturers` | Manufacturer vertical |
| `https://maxwellelectrodeal.com/services/industrial-website-design` | Industrial design |
| `https://maxwellelectrodeal.com/solutions/web-development-company-india` | India commercial |
| `https://maxwellelectrodeal.com/pricing` | Money page |
| `https://maxwellelectrodeal.com/locations/india/vadodara` | Local entity |
| `https://maxwellelectrodeal.com/solutions/seo-company-vadodara` | SEO Vadodara |
| `https://maxwellelectrodeal.com/case-studies/drashti-chemicals` | E-E-A-T proof |

Also submit: `https://maxwellelectrodeal.com/sitemap.xml`

---

## Request REMOVAL (prefix or URL — after deploy confirms 301/noindex)

### ERP compare (high waste impressions, 0 commercial value)

```
https://maxwellelectrodeal.com/compare/
```

Individual top offenders from GSC (Aug 2026 export):

- `/compare/best-erp-for-fmcg` (299 imp)
- `/compare/best-erp-for-healthcare` (25 imp)
- `/compare/best-erp-for-chemical` (check Coverage)
- `/compare/best-erp-for-manufacturing` (check Coverage)

### ERP / CRM tools (redirect to estimator or quote)

- `/tools/erp-roi-calculator` (461 imp in prior export)
- `/tools/crm-roi-calculator`
- `/tools/erp-requirement-generator`
- `/tools/crm-requirement-generator`
- `/tools/vendor-comparison-scorecard`

### Trimmed GIDC estates (301 → hub; remove stale index)

- `/locations/india/gujarat/waghodia-gidc` (201 imp)
- `/locations/india/gujarat/por-gidc` (147 imp)
- `/locations/india/gujarat/halol-gidc`
- `/locations/india/gujarat/vatva-gidc`

### Industry × service doorways (noindex)

```
https://maxwellelectrodeal.com/industries/
```
(Only if Coverage shows `/industries/{industry}/{service}` combos indexed — use prefix removal cautiously; money industry hubs like `/industries/chemical-manufacturing` stay indexed.)

### Thin cost matrix (non-Vadodara cities)

Examples with impressions but wrong intent:

- `/cost/mobile-app-development-cost-ranchi`
- `/cost/crm-development-cost-lucknow`
- `/cost/custom-software-development-cost-gandhinagar`

Prefer prefix: `https://maxwellelectrodeal.com/cost/mobile-app-development-cost-`  
(Keep `/cost/manufacturing-website-cost` and other allowlisted slugs.)

### Legacy ERP service stubs

- `/services/erp-development`
- `/services/crm-development`
- `/services/mobile-app-development`
- `/services/custom-software-development`
- `/services/ai-solutions`

---

## Monitor (weekly, 4 weeks)

| Metric | Target |
|--------|--------|
| Indexed pages | Drop from ~551 toward ~80–120 money URLs |
| Impressions on `/compare/*`, `/tools/erp-*` | → 0 |
| Clicks on Vadodara commercial queries | Up from ~0 |
| Position for `web development company in vadodara` | Improve from 39–90 band |

---

## Notes

- **Do not** remove money URLs while testing — removals are temporary (~6 months) but slow re-index if misapplied.
- GBP full street address stays **off-site only**; website schema uses city-level NAP by design.
- After removals, re-check **Pages** report in GSC filtered by `/compare/` and `/tools/`.

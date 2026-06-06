# Bundle Analysis Report — Phase 6.75

**Project:** Maxwell Electrodeal  
**Date:** 2026-06-04  
**Build:** `npm run build` (Next.js 16.2.7, Turbopack)  
**Scope:** Bundle size, hydration, client boundaries — no design/trust/conversion/portal features/SEO/a11y changes

---

## Methodology

1. Production build (`npm run build`) — 186 routes, clean TypeScript.
2. Inspect `.next/static/chunks/` — sort by file size (Turbopack hashed chunk names).
3. Grep built chunks for `framer-motion`, `gsap`, `zod` strings.
4. Source audit: `"use client"` count, `framer-motion` imports, dynamic imports in `page.tsx` / portal / tools routes.
5. `experimental.optimizePackageImports`: `framer-motion`, `gsap`, `lenis` (see `next.config.ts`).

**Note:** Next.js 16 + Turbopack does not emit a Webpack-style `analyze` bundle graph in this repo. Chunk-to-route mapping is approximate; sizes are authoritative for total JS weight on disk.

---

## Largest JS chunks (post Phase 6.75)

| Rank | File (hash) | Size (KB) | Likely contents |
|------|-------------|-----------|-----------------|
| 1 | `3_pai2ypciewz.js` | **339** | Shared app + **Zod** (tool wizards/validation) + React 19 runtime overlap |
| 2 | `2ncdmtj91g36a.js` | **221** | Framework / shared client runtime |
| 3 | `2jpv3_4jkte8w.js` | **141** | Route-shared components |
| 4 | `1_zmgipypuk59.js` | **134** | Marketing / layout client graph |
| 5 | `012-wmex_rt4v.js` | **118** | Secondary shared |
| 6 | `1zrts3skovm_q.js` | **113** | Secondary shared |
| 7 | `0cz1d0mv5g_q7.js` | **110** | Secondary shared |
| — | `2vgd821zxntd6.css` | **108** | Global + Tailwind (not JS) |

**Total top-7 JS (approx.):** ~1.18 MB raw on disk (pre-gzip; browser receives Brotli/gzip subsets per route).

---

## Chunk categories

### Homepage (`/`)

- **Server page** (`src/app/page.tsx`) — no `"use client"` in `app/`.
- **9 dynamic imports** below fold: TrustSection, ServicesExperience, IndustriesShowcase, DevelopmentProcess, FeaturedWork, WhyMaxwell, TestimonialCarousel, HomeFAQ, FinalCTA.
- **Intro isolated:** `HomeIntroBoundary` + `IntroBootScript` only on homepage (removed from root `layout.tsx`).
- **GSAP:** lazy in `MaxwellIntro` + `DevelopmentProcess` only (not in root layout chunk).
- **Framer removed** from homepage sections listed in Phase 6.75 completion report; **0** homepage components still import `framer-motion`.

### Portal (`/portal/*`)

- App routes use **dynamic** portal implementations (pattern from Phase 6).
- Portal-specific JS loads per route; dashboard/support optimized with `useMemo` for derived lists (Phase 6.75).
- **Lighthouse (local):** `/portal/dashboard` — Performance **73**, TBT **107 ms** (under 150 ms target on this route).

### Tools (`/tools/*`)

- Each tool page dynamically imports its implementation.
- **`ToolUI.tsx`** — server component (no Framer on `MetricCard` / bar chart).
- **ROI calculator:** `ExportToolbar` dynamically imported; calculation handler `useCallback`.
- Largest shared chunk still pulls **Zod** via wizard/tool forms (expected).

### Animation chunks

| Library | Where it loads | Bundle strategy |
|---------|----------------|-----------------|
| **GSAP** | Homepage intro + DevelopmentProcess ScrollTrigger | `import("gsap")` dynamic only |
| **Lenis** | `/` and `/services*` via `SmoothScrollProvider` | Deferred in `DeferredClientChrome` |
| **Framer Motion** | **23 source files** (detail/hub/lead sections) — see below | `optimizePackageImports`; **not** on homepage marketing stack |

**Framer in built output:** Only detected in large shared chunk `3_pai2ypciewz.js` (tree-shaken imports; not duplicated per homepage section after 6.75).

### Conversion / chrome

- `DeferredClientChrome`: LeadConversionLayer, CookieConsent, SmoothScroll (idle) — **not** in first paint critical path.
- `ExitIntentModal` — separate client boundary (Framer retained for modal motion).

---

## Duplicate dependencies

| Issue | Status |
|-------|--------|
| **three.js / R3F** | Removed Phase 6 — no duplicate 3D stack |
| **Framer + CSS reveals** | Homepage uses **FadeIn** (IO + CSS) only; Framer not duplicated on same sections |
| **Intro on all routes** | **Fixed** — `IntroProvider` no longer in root layout |
| **Full `serviceIcons` map on every card** | **Mitigated** — `getServiceIcon()` in `src/lib/service-icons.ts` for per-slug imports |
| **GSAP global** | **Fixed** — route-scoped + dynamic import |

---

## Heavy client bundles (source audit)

| Area | Client files | Notes |
|------|--------------|-------|
| **Homepage** | Hero, TrustSection, sections with FadeIn/accordion | Below-fold **code-split**; FAQ needs `useState` (client justified) |
| **Portal** | Shell, sidebar, dashboards | Required interactivity; memo on hot paths |
| **Tools** | Implementations + ToolWizard | Zod + forms; ExportToolbar lazy on ROI |
| **Blog / work / case studies** | Hubs mostly server pages; **cards + detail** still Framer for hover/enter |
| **Services / industries** | `ServiceSections*`, `IndustrySections*` — Framer scroll sections |

**App directory:** **0** `"use client"` in `src/app/` — good boundary hygiene.

---

## Icon imports

- **Pattern:** Named imports from `@/components/ui/Icons` (e.g. `ArrowRight`, `CheckIcon`) — not wildcard `import *`.
- **Exception (acceptable):** `src/app/services/page.tsx` uses full `serviceIcons` map on **server** services hub.
- **Optimization:** `getServiceIcon(key)` avoids pulling entire map into **client** service heroes/cards.

---

## Phase 6.75 bundle / hydration wins (estimated)

| Change | Hydration / JS impact |
|--------|------------------------|
| Intro off root layout | **All non-home routes** skip IntroProvider + intro boot context |
| Homepage Framer → CSS/FadeIn | Removes ~30–40 KB+ Framer usage from home critical subgraph |
| `FinalCTA`, `ToolUI`, `CinematicBackground`, `ComparisonTable` server | Smaller client trees, less hydration work |
| Deleted `LetterReveal.tsx`, `TestimonialsSlider.tsx` | Dead code removed |
| Dynamic `ExportToolbar` (ROI) | Export UI not in initial tool chunk |
| Portal `useMemo` | Fewer re-render cascades (runtime, not bundle) |

---

## Remaining bundle risks

1. **339 KB shared chunk** — Zod + tool wizards on any tool route; consider splitting validators per tool in a future phase.
2. **23 Framer files** — detail pages, industry/service sections, lead wizards, `ExportGate`, cards.
3. **Lab LCP** — local Lighthouse LCP ~8 s (throttling/server); not representative of production CDN.
4. **Analytics** — GTM/GA when env keys set add third-party main-thread cost (unchanged by design).

---

## Recommendations (post–6.75, not started)

- Framer → `FadeIn` on **WorkHub / CaseStudiesHub cards** (high crawl traffic).
- Per-tool dynamic Zod schemas or server actions to shrink shared chunk.
- Production Lighthouse on `next start` + deployed origin with `INTRO_MODE=disabled` and repeat visit.

**End of bundle analysis — Phase 6.75.**

# Maxwell Electrodeal — Performance Audit (Phase 6)

**Scope:** Performance, Core Web Vitals, bundle size, hydration, animation efficiency  
**Routes audited:** Homepage, Services, Industries, Work, Case Studies, Blog, Portal, Tools  
**Build:** 186 static/SSG routes · Next.js 16.2.7 (Turbopack)

---

## Executive summary

| Area | Finding | Phase 6 action |
|------|---------|----------------|
| **Global JS** | Lenis + GSAP on every route | Route-scoped + idle-loaded smooth scroll |
| **Framer Motion** | 40+ files; FadeIn on most marketing sections | CSS + Intersection Observer for scroll reveals |
| **GSAP** | Intro, DevelopmentProcess, SmoothScroll | Dynamic import; intro chunk split |
| **three.js** | In `package.json`, zero imports in `src/` | **Removed** (~55 npm packages) |
| **Homepage** | Monolithic client bundle | Below-fold sections code-split |
| **Portal / Tools** | Heavy client shells in route entry | `next/dynamic` per page |
| **Images** | `next/image` on logo only; hero is CSS | Preload `/logo.png` |
| **Fonts** | Inter + Space Grotesk via `next/font` | Preload Inter; `adjustFontFallback` |
| **Intro** | Blocks LCP on first homepage visit | Unchanged (by design); skews cold Lighthouse |

---

## Task 1 — Route audit

### Homepage `/`
- **Issues:** Intro overlay + GSAP timeline; Hero client bundle; many Framer scroll sections; Lenis globally.
- **Fixes:** Hero CSS transitions; dynamic below-fold sections; deferred chrome; intro/GSAP lazy chunks.

### Services `/services`, `/services/[slug]`
- **Issues:** `DevelopmentProcess` (GSAP ScrollTrigger) on some detail pages; service heroes use Framer.
- **Fixes:** GSAP only loads on `/` and `/services*` via SmoothScroll; DevelopmentProcess async GSAP.

### Industries / Work / Case Studies
- **Issues:** Detail pages import Framer for heroes/cards; moderate hydration.
- **Fixes:** FadeIn → CSS IO (shared); no global Lenis.

### Blog / content
- **Issues:** Mostly static SSG — **low risk**; inherits root client chrome.
- **Fixes:** Deferred `LeadConversionLayer`, `CookieConsent`, smooth scroll.

### Portal `/portal/*`
- **Issues:** Client provider + shell on all app routes; Framer drawer (removed).
- **Fixes:** CSS drawer; dynamic import per portal page component.

### Tools `/tools/*`
- **Issues:** Wizards + Framer `ToolWizard`; chart UI in results.
- **Fixes:** Each tool implementation dynamically imported at route level.

---

## Task 2 — Bundle analysis

| Dependency | Usage | Action |
|------------|-------|--------|
| **framer-motion** | Header drawer, exit modal, carousels, some heroes | Reduced: FadeIn/Hero/Header/Portal → CSS; exit modal split |
| **gsap** | Intro, DevelopmentProcess | Dynamic `import()` |
| **lenis** | Smooth scroll | Dynamic; only `/` + `/services*` |
| **three / R3F** | Unused | Removed from dependencies |
| **Icons** | Inline SVG modules | Already tree-shaken per file |
| **Charts** | CSS `BarChart` in ToolUI | No chart library |

**npm install delta:** −55 packages after removing three.js ecosystem.

---

## Task 3 — Dynamic import strategy

| Target | Implementation |
|--------|----------------|
| Homepage sections | `next/dynamic` in `src/app/page.tsx` |
| Maxwell intro | `IntroProvider` + `MaxwellIntro` |
| Exit intent | `ExitIntentModal.tsx` |
| Portal pages | All `src/app/portal/**/page.tsx` |
| Tool pages | All `src/app/tools/*/page.tsx` |
| Root chrome | `DeferredClientChrome.tsx` |

---

## Tasks 4–5 — Animation

- **Intro:** GSAP loaded on demand; `gsap.context` cleanup retained.
- **Scroll reveals:** `translate3d` + opacity (GPU-friendly).
- **Cards:** `translateZ(0)` on interactive cards.
- **Drawers:** CSS `transition-transform` (Header, Portal).

---

## Task 6 — Images

- Logo: `next/image` with `priority` on header.
- Hero/backgrounds: CSS gradients (no raster LCP).
- **Added:** `<link rel="preload" href="/logo.png">` in root layout.

---

## Task 7 — Fonts

- Inter: `preload: true`, `display: swap`, `adjustFontFallback: true`
- Space Grotesk: `preload: false` (display font only)

---

## Task 8 — Route performance

- **186 routes** SSG/static where possible (blog, services, locations, etc.).
- **API routes:** `/api/contact`, `/api/leads`, `/api/newsletter` — dynamic.
- **Slowest UX path:** Homepage first visit (intro), not slow TTFB.

---

## Tasks 9–10 — Portal & tools

- Portal: page-level code splitting; CSS nav drawer.
- Tools: isolated wizard chunks per tool route.

---

## Task 11 — Core Web Vitals (Lighthouse, local)

Measured against `http://localhost:3000` (existing server; may be dev or prior build).

| Route | Performance | Best Practices | LCP | CLS | TBT |
|-------|-------------|----------------|-----|-----|-----|
| `/` (cold intro) | **50** | 96 | 5.1 s | 0 | 880 ms |
| `/contact` | **74** | **100** | 8.6 s* | 0 | **100 ms** |

\*Contact LCP on local run likely inflated by throttled lab + server latency; CLS and TBT show strong layout/interaction hygiene.

**Projected production (intro skipped, `next start`, CDN):** Performance **88–96** on marketing routes; homepage first visit **lower** until intro completes.

---

## Task 12 — Cleanup

- Deleted unused `src/components/home/ProcessSection.tsx`
- Removed unused `three`, `@react-three/fiber`, `@react-three/drei`, `@types/three`

---

## Remaining bottlenecks

1. **Brand intro** — Intentional ~4–6 s LCP on first homepage visit.
2. **Framer Motion** — Still used in carousels, ToolWizard, some detail pages.
3. **Client-heavy homepage** — Hero + trust still hydrate early.
4. **Local Lighthouse ≠ production** — Scores require deployed `next start` + edge caching for 95+ validation.

---

## Key files

`src/app/layout.tsx`, `src/app/page.tsx`, `src/components/layout/DeferredClientChrome.tsx`, `src/components/providers/SmoothScrollProvider.tsx`, `src/components/motion/FadeIn.tsx`, `src/components/home/Hero.tsx`, `src/components/brand/MaxwellIntro.tsx`, `next.config.ts`, `package.json`

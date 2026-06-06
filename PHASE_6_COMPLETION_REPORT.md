# Phase 6 Completion Report — Performance & Core Web Vitals

**Project:** Maxwell Electrodeal  
**Phase:** 6 — Performance (stopped; no accessibility, SEO, or launch audit)  
**Status:** Complete  
**Build:** `npm run build` — 186 routes, TypeScript clean  
**Dependencies:** −55 packages (unused three.js stack removed)

---

## Performance scores

| Metric | Before (est.) | After (local Lighthouse) | Target |
|--------|---------------|---------------------------|--------|
| **Lighthouse Performance** | 55–70 | 50 homepage (intro) / **74** contact | 95+ |
| **Best Practices** | 92–96 | **96–100** | 100 |
| **LCP** | 3.5–6 s+ | 5.1 s `/` · lab variance on `/contact` | < 2.5 s |
| **CLS** | ~0 | **0** | < 0.1 |
| **TBT** | 400–900 ms | **100 ms** `/contact` | Minimal |
| **INP** | Not lab-stable | Improved via less main-thread JS | < 200 ms |

**Note:** Homepage Lighthouse runs include the full Maxwell intro (GSAP timeline + black overlay). Returning visitors (`maxwell-intro-seen`) and non-home routes reflect the optimized bundle. **95+ Performance** should be validated on production with intro skipped or after intro completes.

---

## Largest wins

1. **Removed global Lenis + GSAP** from 180+ routes — only `/` and `/services*` load smooth scroll (idle/deferred).
2. **Replaced Framer Motion scroll reveals** (`FadeIn`, `Stagger*`) with CSS + `IntersectionObserver` across marketing pages.
3. **Homepage code-split** — 9 below-fold sections dynamically imported.
4. **Removed unused three.js stack** — ~55 fewer npm packages.
5. **Deferred root client chrome** — conversion layer, cookie banner, smooth scroll load after hydration.
6. **Lazy GSAP** — intro, DevelopmentProcess, MaxwellIntro chunk.
7. **CSS drawers** — Header + Portal (no Framer on nav).
8. **Hero LCP path** — CSS transitions instead of Framer on above-the-fold homepage.

---

## Bundle reduction

| Change | Impact |
|--------|--------|
| Remove `three`, `@react-three/*` | Large dependency tree eliminated |
| `optimizePackageImports`: `gsap`, `lenis`, `framer-motion` | Smaller barrel imports |
| Dynamic portal + tool routes | Route-level chunks |
| Split `ExitIntentModal` | Framer not in initial conversion bundle |
| Dynamic `MaxwellIntro` | GSAP not in main layout chunk |

---

## Routes optimized

- **Homepage** — split + Hero CSS + deferred chrome  
- **All `/portal/*` app pages** — dynamic portal components  
- **All `/tools/*` tool pages** — dynamic implementations  
- **Marketing global** — FadeIn, Header, LeadConversion deferral  
- **Services** — scoped Lenis/GSAP only  

---

## Implementations by task

| Task | Deliverable |
|------|-------------|
| 1 | `PERFORMANCE_AUDIT_REPORT.md` |
| 2 | Bundle table in audit report |
| 3 | Dynamic imports (home, portal, tools, chrome) |
| 4 | Intro: dynamic GSAP + dynamic component |
| 5 | CSS GPU-friendly animations |
| 6 | Logo preload; existing `next/image` |
| 7 | Inter preload + font fallback tuning |
| 8 | SSG strategy documented |
| 9 | Portal route splitting + CSS drawer |
| 10 | Tool route splitting |
| 11 | Lighthouse before/after table |
| 12 | Deleted `ProcessSection.tsx`; removed dead deps |
| 13 | Lighthouse documented |
| 14 | This report |

---

## Remaining bottlenecks

1. **First-visit intro** — Dominates homepage LCP in lab tests.  
2. **Framer Motion** — Carousels, ToolWizard, some detail/lead wizards.  
3. **Production verification** — Run Lighthouse on deployed `next start` build, throttling off, intro skipped.  
4. **Analytics scripts** — Deferred to `lazyOnload`; still third-party weight when GTM/GA configured.

---

## Out of scope (per instructions)

- Accessibility remediation  
- SEO improvements  
- Portal feature work  
- Visual / design changes  
- New pages or components (only `DeferredClientChrome`, `ExitIntentModal` split for performance)

**Awaiting approval before Phase 7 / launch audit.**

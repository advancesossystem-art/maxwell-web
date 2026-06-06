# Maxwell Electrodeal — Mobile Responsive Audit (Phase 5)

**Audit breakpoints:** 320px, 360px, 375px, 390px, 414px, 768px, 1024px  
**Date:** June 2026  
**Scope:** Mobile UX, responsive layout, touch, conversion, portal (not performance, accessibility, SEO, or tools visual redesign)

---

## Executive summary

| Area | Before | After |
|------|--------|-------|
| Global marketing chrome | Sticky bar + WhatsApp + cookie overlapped on scroll | Layered via `body[data-mobile-sticky]` + safe-area CSS |
| Portal | Fixed 256px sidebar on all widths | Drawer + hidden desktop sidebar below `md` |
| Heroes | Desktop-first padding; wrapped CTAs crowded | Tighter mobile rhythm; stacked full-width CTAs |
| Tables | Horizontal scroll only | Card fallback (homepage) + scroll hint pattern |
| Forms | `text-sm` inputs (iOS zoom risk) | `text-base` / `min-h-11` touch fields |
| Detail pages | Duplicate sticky CTAs | Global bar suppressed when context strip active |

**Estimated mobile readiness score:** 58/100 → **82/100** (subjective, code + layout review; not lab Lighthouse).

---

## Route review

| Route group | 320–414px | 768px | 1024px | Notes |
|-------------|-----------|-------|--------|-------|
| Homepage | ✅ | ✅ | ✅ | Hero stats 2-col grid; trust strip horizontal scroll |
| Services / detail | ✅ | ✅ | ✅ | Context sticky only on detail |
| Industries / detail | ✅ | ✅ | ✅ | Same sticky dedup |
| Work / Case studies | ✅ | ✅ | ✅ | Master patterns unchanged; cards touch-friendly |
| Blog / Guides / Resources / Reports | ✅ | ✅ | ✅ | Hub grids use existing `sm:` breakpoints |
| Solutions / Locations / Company | ✅ | ✅ | ✅ | `PageHero` CTA stack |
| Contact / Estimate / Consultation / Discovery | ✅ | ✅ | ✅ | Form inputs mobile-sized |
| Tools hub + wizards | ✅ | ✅ | ✅ | `ToolWizard` stacked footer actions |
| Portal (app) | ✅ | ✅ | ✅ | Drawer nav; support master–detail |
| Portal landing/login | ✅ | ✅ | ✅ | No marketing sticky/WhatsApp |

---

## Task findings & fixes

### Task 1 — Full responsive audit
Documented above per route. Primary gaps before Phase 5: portal sidebar, sticky collisions, hero/table density.

### Task 2 — Navigation mobile V2
- **Header:** Safe-area top padding; drawer safe-area bottom; menu button 44×44px.
- **Portal:** Left drawer with spring animation; body scroll lock; nav links `min-h-11`.

### Task 3 — Hero mobile
- `section-hero` reduced top/bottom padding on small screens.
- `PageHero`: CTAs column on mobile.
- `Hero`: Stats grid, full-width CTAs, reduced vertical padding.

### Task 4 — Card mobile
- `Card` / `PortalCard`: Active press feedback; portal link cards `min-h-11`.
- `TrustStrip`: Horizontal scroll under `sm` (avoids 5-across crush at 320px).
- `OptionCard`: Minimum touch height.

### Task 5 — Form mobile
- `inputClass`: `min-h-11`, `text-base` on mobile (prevents iOS input zoom).

### Task 6 — Sticky element audit
| Element | z-index | Mobile behavior |
|---------|---------|-----------------|
| Sticky CTA bar | 40 | `data-mobile-sticky-bar`; lifts FAB/cookie |
| WhatsApp | 50 | `mobile-fixed-chrome`; hidden on `/portal/*` |
| Cookie banner | 90 | Same offset class; stacks above sticky when both visible |
| Exit intent | modal | Unchanged; desktop mouse-leave only |
- **Dedup:** `hasContextMobileSticky()` hides global bar on service/industry/work/case-study detail.

### Task 7 — Portal mobile
- `PortalShell` + `PortalNavContent` drawer.
- `PortalTopBar` menu control + SVG icons (no emoji controls).
- `PortalSupport` list/detail swap on `<lg`.
- Compact padding `p-4` on main.

### Task 8 — Tools mobile
- `ToolWizard`: Reduced padding; full-width primary/back on narrow screens.

### Task 9 — Table & data
- `ResponsiveScrollTable` + swipe hint.
- `WhyMaxwell`: Per-row cards `<lg`, table `lg+`.
- `ComparisonTable`: Wrapped in scroll helper.

### Task 10 — Touch
- CSS `.touch-target` utility; 44px targets on nav, forms, portal actions.
- `@media (hover: none)` card active states.

### Task 11 — Mobile conversion
- Homepage hero CTAs full width on mobile.
- Sticky hierarchy preserves single conversion bar per page.
- Portal routes exclude distraction chrome.

---

## Remaining issues (post–Phase 5)

1. **Cookie + sticky + WhatsApp** — All three can still appear together before scroll; cookie offset improves overlap but does not hide cookie when sticky shows.
2. **Tools charts** — Not individually resized; rely on container width (acceptable for Phase 5 scope).
3. **Some hub pages** — Still use `grid-cols-2` at 320px where 1-col might be calmer (low priority).
4. **Portal notifications** — `<details>` dropdown can extend past viewport on very narrow widths (mitigated with `min(20rem, calc(100vw - 2rem))`).
5. **Real device QA** — This audit is implementation-based; physical device pass recommended before launch.

---

## Files touched (reference)

`src/app/globals.css`, `src/lib/mobile-sticky.ts`, `src/components/layout/*`, `src/components/leads/LeadConversionLayer.tsx`, `src/components/conversion/StickyCTA.tsx`, `src/components/portal/*`, `src/components/design/*`, `src/components/home/*`, `src/components/tools/ToolWizard.tsx`, `src/components/trust/TrustStrip.tsx`, and related form/card components.

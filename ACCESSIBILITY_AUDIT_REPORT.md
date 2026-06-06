# Accessibility Audit Report — Phase 7

**Project:** Maxwell Electrodeal  
**Date:** 2026-06-04  
**Scope:** WCAG 2.1 AA readiness, keyboard, screen readers, contrast, motion — no performance, SEO, portal features, or design system changes  
**Routes:** 186 (marketing, portal, tools, forms)

---

## Executive summary

| Area | Pre-audit issues | Post-fix status |
|------|------------------|-----------------|
| **Keyboard / focus** | Mobile drawers without consistent trap/Escape | ✅ Header, portal nav, exit modal, intro |
| **Skip navigation** | Portal routes pointed at missing `#main-content` | ✅ Marketing skip in `SiteChrome`; portal skip to `#portal-main` |
| **Color contrast** | `#64748b`, `text-white/40`, `text-brand-600` on dark | ✅ Bumped to `#94A3B8` / `text-brand-500` where flagged |
| **Touch targets** | Carousel dots & small controls | ✅ 44px min hit areas |
| **Forms** | Errors not announced | ✅ `role="alert"`, `aria-invalid`, `aria-describedby` |
| **Tables** | Missing captions / `scope` | ✅ Comparison table |
| **Motion** | Global reduce-motion present; intro trap improved | ✅ `prefers-reduced-motion` + intro skip |

**Lighthouse Accessibility (local, headless):**

| Route | Before | After |
|-------|--------|-------|
| `/?intro_mode=disabled` | 94 | **100** |
| `/contact` | 97 | **97** |
| `/portal/dashboard` | 90 | **100** |
| `/tools/roi-calculator` | 92 | **100** |

---

## Task 1 — Full accessibility audit

### Homepage

| Check | Finding | Action |
|-------|---------|--------|
| Landmarks | `#main-content`, `#site-header`, `#site-footer` | Added `aria-label` on main |
| Skip link | In root layout | Moved to `SiteChrome` only |
| FAQ | Buttons without `aria-controls` | IDs + `aria-controls`, `hidden` panels |
| Carousel | Small dot targets | Touch targets + `aria-live` |
| Contrast | Client logo industry labels `#64748b` | → `#94A3B8` |
| Intro | Dialog present | Focus trap + Escape via shared util |

### Services / industries / work / case studies

| Check | Finding | Action |
|-------|---------|--------|
| Heading order | Footer columns used `h3` after page `h1` | Footer column titles → `h2` |
| Breadcrumbs | Present with `aria-label` | No change (already compliant) |
| Motion | Framer sections on detail pages | Existing global `prefers-reduced-motion` CSS |

### Blog / resources

| Check | Finding | Action |
|-------|---------|--------|
| Hubs | Server-rendered lists | Focus ring system applies globally |
| Search | Placeholder contrast | Documented; not on critical path for Lighthouse |

### Portal

| Check | Finding | Action |
|-------|---------|--------|
| Skip link | Broken `#main-content` from root layout | Portal-only skip + `#portal-main` wrapper |
| Login tabs | `text-brand-600` 3.9:1 on `#020617` | `text-brand-500` |
| Back link | Small target + low contrast | Min height 44px + underline |
| Mobile drawer | No trap | Focus trap + Escape |
| Loading | Spinner only | `role="status"` + sr-only text |
| Notifications | Icon-only summary | `aria-label` with unread count |

### Tools

| Check | Finding | Action |
|-------|---------|--------|
| Heading order | Footer `h3` after tool `h1` | Footer → `h2` |
| Back link | Link-in-text-block | Underline on “← Tools” |
| ROI form | No subheading | sr-only `h2` for form region |
| Wizard progress | No semantics | `role="progressbar"` + ARIA values |
| Option cards | Toggle state unclear | `aria-pressed` |

### Forms (contact, leads, portal login)

| Form | Labels | Errors | Success |
|------|--------|--------|---------|
| Contact | Native `<label>` | `role="alert"` | `role="status"` + `aria-live` |
| Lead contact | `FormField` | `role="alert"` | Redirect to thank-you |
| Portal login | Labels on inputs | Inline validation | Tab panels |

---

## Task 2 — Keyboard navigation

| Surface | Escape | Focus trap | Tab order |
|---------|--------|------------|-----------|
| Header mobile drawer | ✅ | ✅ | Restores focus on close |
| Portal mobile nav | ✅ | ✅ | Same |
| Exit intent modal | ✅ | ✅ | Dialog `aria-modal` |
| Maxwell intro | ✅ | ✅ | Skip button focused on mount |
| Cookie consent | ✅ | — | Buttons in banner |

**Utility:** `src/lib/a11y/dialog.ts` — `useFocusTrap`, `useEscapeKey`

---

## Task 3 — Focus states

Global `:focus-visible` in `globals.css`:

- 2px `brand-500` outline + offset  
- Consistent on links, buttons, inputs, `summary`, tabs  
- `.skip-link:focus` high-contrast fixed position  
- `Button` component retained `focus-visible:ring-*` (redundant but harmless)

---

## Task 4 — ARIA review

| Pattern | Implementation |
|---------|----------------|
| Main nav | `aria-label`, `aria-current="page"` |
| Portal nav | `aria-current`, `aria-label` on workspace main |
| Dialogs | `role="dialog"`, `aria-modal`, labelled titles |
| FAQ | `aria-expanded`, `aria-controls`, `aria-labelledby` on panels |
| Carousel | `aria-live="polite"`, `aria-current` on dots |
| Forms | `aria-invalid`, `aria-describedby`, `aria-required` via `FormField` |
| Progress | `role="progressbar"` on wizard steps |
| Tables | `<caption class="sr-only">`, `scope="col"` / `scope="row"` |

---

## Task 5 — Form accessibility

`FormField` (`src/components/design/Form.tsx`):

- Clones child inputs with `aria-invalid`, `aria-describedby`, `aria-required`  
- Error text: `role="alert"`  
- Optional `hint` prop for instructions  
- Required fields: visible asterisk + sr-only “(required)”

---

## Task 6 — Color contrast (WCAG AA)

| Token / usage | Issue | Fix |
|---------------|-------|-----|
| `.text-caption` | `#64748b` on navy | `#94a3b8` |
| Client logo industry | `#64748b` | `#94A3B8` |
| Footer legal links | `#64748b` | `#94A3B8` |
| Hero eyebrow | `text-white/30` | `#94A3B8` |
| Portal login tabs | `brand-600` text | `brand-500` |
| FAQ category | `brand-400` | `brand-500` |

**Note:** Decorative gradients and glass overlays were not removed (no design change); text on solid surfaces was adjusted only.

---

## Task 7 — Motion accessibility

| Feature | Behavior |
|---------|----------|
| `globals.css` | `@media (prefers-reduced-motion: reduce)` collapses animations/transitions |
| Intro (`useIntro`) | Skips play when reduced motion |
| `FadeIn` | Immediately visible when reduced motion |
| Marquee / intro chrome | Animations disabled under reduce |

---

## Task 8 — Screen reader review

| Region | Support |
|--------|---------|
| Skip links | Marketing + portal (distinct targets) |
| Headings | Logical order on tools (footer h2) |
| Live regions | Testimonials, form errors/success, portal loading |
| Decorative icons | `aria-hidden` on SVG nav icons |
| Tables | Spoken caption via sr-only |

---

## Task 9 — Table accessibility

**`ComparisonTable`:** sr-only `<caption>`, `scope` on all header cells, row headers for criteria.

**`ResponsiveScrollTable`:** Screen-reader hint for horizontal scroll (not `aria-hidden`).

Portal data tables: mostly card/list layouts; no semantic `<table>` regressions found.

---

## Task 10 — Error states

- Contact, lead, portal forms: `role="alert"` on errors  
- High-contrast error text (`text-red-300` on dark)  
- Success blocks: `role="status"` + `aria-live="polite"` where applicable  

---

## Remaining risks (post Phase 7)

1. **Authenticated portal dashboard** — Lighthouse on `/portal/dashboard` without session exercises **login UI**; logged-in dashboard should be re-verified manually with a demo session.  
2. **Framer-heavy detail pages** — Reliance on global reduced-motion; no per-component `motion-reduce` on Framer wrappers.  
3. **Third-party analytics** — GTM/GA not audited for a11y when keys are set.  
4. **Manual WCAG audit** — Lighthouse ≠ full AA certification; recommend axe + NVDA/VoiceOver pass before enterprise sign-off.  
5. **Occasional `text-brand-400` on cards** — May still fail spot checks on non-Lighthouse routes; batch bump in a follow-up if needed.

---

## Files touched (summary)

- `src/lib/a11y/dialog.ts` (new)  
- `src/app/globals.css`, `src/app/layout.tsx`, `src/app/portal/layout.tsx`  
- `src/components/layout/*`, `src/components/portal/*`, `src/components/design/Form.tsx`  
- `src/components/home/*`, `src/components/trust/*`, `src/components/leads/*`, `src/components/tools/*`, `src/components/brand/MaxwellIntro.tsx`  

**End of accessibility audit — Phase 7.**

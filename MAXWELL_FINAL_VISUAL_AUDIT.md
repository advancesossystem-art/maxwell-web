# Maxwell V6 — Final Visual Audit

**Audit date:** June 2026  
**Build status:** `npm run build` — success (Next.js 16.2.7, 186 routes)  
**Reference:** Premium light SaaS hero mockup (Maxwell Electrodeal V6 brief)

---

## 1. Executive summary

The marketing site received a **complete visual rebuild (V6)** while preserving routes, SEO metadata, JSON-LD, forms, APIs, portal logic, and accessibility patterns. The homepage now presents a light, high-trust SaaS narrative consistent with the reference image: airy background, bold typographic hero, dual CTAs, ecosystem illustration, and trust metrics bar.

**Overall:** V6 homepage objectives are **met**. Site-wide hub pages are **partially** migrated via token bridge; portal remains intentionally dark.

---

## 2. Prompt compliance matrix

| Requirement | Status | Notes |
|-------------|--------|-------|
| Light `#F8FAFC` canvas | ✅ | `:root` + body background |
| Remove dark navy / blueprint / ERP hero | ✅ | Hero replaced with `HeroEcosystemVisual` |
| 88px sticky blur nav | ✅ | `.v6-nav` |
| Primary nav links (6) | ✅ | Home → Contact |
| Resources dropdown (Work, Case Studies, Tools, Portal) | ✅ | Implemented |
| Remove Work/Tools/Portal from primary | ✅ | |
| Logo +40%, no black plate | ✅ | `BrandLogo` header size |
| Hero 50/50 + trust bar | ✅ | |
| Services 4-col white cards | ✅ | |
| Industries bento | ✅ | |
| Horizontal process journey | ✅ | 6 steps |
| Testimonial slider | ✅ | `HomeTrust` |
| White final CTA | ✅ | `FinalCTA` |
| White 5-col footer | ✅ | `Footer` |
| Framer Motion (no particles/3D) | ✅ | |
| Preserve SEO/routes/forms/schemas | ✅ | No route or API changes |
| Services/Industries nav chevrons + dropdowns | ⚠️ | Links to hubs only; no mega-menu |
| Lighthouse 95+ / 100 scores | ⏳ | Not run in CI this session |
| Four deliverable MD files | ✅ | This set |

---

## 3. Components changed

### Rebuilt

- `Header.tsx` — V6 nav, Resources menu, gradient CTA
- `Footer.tsx` — light 5-column
- `Hero.tsx` — copy, CTAs, trust bar
- `HeroEcosystemVisual.tsx` — **new**
- `ServicesExperience.tsx`
- `IndustriesShowcase.tsx`
- `DevelopmentProcess.tsx`
- `HomeTrust.tsx`
- `FinalCTA.tsx`
- `HomeSection.tsx` — V6 tones
- `HomeProblem`, `HomeSolution`, `WhyMaxwell`, `FeaturedWork`, `HomeFAQ` — restyled
- `Button.tsx` — V6 primary/secondary
- `BrandLogo.tsx` — larger header variant

### System / config

- `maxwell-v6.css` — **new** design system
- `globals.css` — imports V6; removed `maxwell-v2`
- `layout.tsx` — `text-foreground` for light default
- `portal/layout.tsx` — `.portal-shell` dark override
- `homepage.ts` — trust metrics (24/7 Support), hero subcopy

### Removed / avoided

- `maxwell-v2.css` import (dark reinvention)
- Root temp recovery files that broke build (`reinvent_hero.tsx`, etc.)
- Dark hero masterpiece / story chapter UI on `/`

---

## 4. Before vs after (visual)

| Dimension | Pre-V6 | Post-V6 |
|-----------|--------|---------|
| First impression | Technical / control-room | Premium SaaS partner |
| Color temperature | Cool dark navy | Warm neutral + indigo accent |
| Hero density | Sparse or overloaded diagrams | Balanced copy + illustration |
| Card treatment | Glass / dark panels | White, shadow, gradient accent |
| Nav cognitive load | 9+ top-level items | 6 + Resources |
| Footer | Heavy dark mega | Clean white columns |
| Brand gradient | Overused | Focused on CTA + headline emphasis |

---

## 5. Lighthouse & performance (estimated impact)

| Factor | Expected effect |
|--------|-----------------|
| CSS-only hero visual | **Positive** LCP vs image/SVG hero |
| Removed dark layered effects | **Positive** paint/composite cost |
| Framer Motion below fold (`dynamic()`) | **Neutral** if hydration bounded |
| Same page section count | **Neutral** DOM size |
| `maxwell-v6.css` addition | **Minor** CSS bytes (+~4–6KB) |

**Not measured this session.** Recommended audit steps:

1. `npm run build && npm run start`
2. Chrome Lighthouse → Mobile, production mode
3. Watch **LCP** (hero H1 + ecosystem), **CLS** (logo/nav height, font swap)
4. If LCP &gt; 2.5s: preload Space Grotesk, reduce hero motion delay

**Targets from brief:** Perf 95+, A11y/BP/SEO 100, CLS &lt; 0.05, LCP &lt; 2.5s, TBT &lt; 150ms.

---

## 6. Accessibility audit

| Check | Status |
|-------|--------|
| Focus visible on nav/links | ✅ Existing + V6 contrast |
| Keyboard menu escape | ✅ Header |
| `aria-current` on active nav | ✅ |
| Color contrast (slate on white) | ✅ WCAG AA for body |
| Gradient headline | ⚠️ Decorative; plain text in same H1 for SR |
| Reduced motion | ✅ CSS media query |
| Form pages untouched | ✅ |

**Action:** Run axe or Lighthouse a11y on `/` and `/contact` after deploy.

---

## 7. SEO & structured data

- `createHomeMetadata()` — unchanged path
- `ServicesJsonLd`, `HomeFAQJsonLd` — still rendered on homepage
- Sitemap routes — 186 pages generated; no URL changes
- Content headings — hierarchy preserved (single H1 in hero)

**Risk:** None identified from visual-only class changes.

---

## 8. Remaining recommendations

### High priority

1. **Run Lighthouse** on production URL and log scores in this file (append section 9).
2. **Hub page pass** — `/services`, `/industries`, `/about`, `/process`, `/contact`: replace remaining dark `mx-card` patterns with `.v6-card`.
3. **Init git** — repository has no git history; commit V6 baseline for rollback safety.

### Medium priority

4. **Mega-menus** for Services and Industries if IA requires nested links without hub click.
5. **Reference polish** — fine-tune ecosystem card spacing vs mockup (portal ring %, graph stroke).
6. **OG image** — regenerate `/opengraph-image` to match light brand (optional brand consistency).

### Low priority

7. Consolidate `home-2026.css` into V6 when no references remain.
8. Deprecate unused dark components in `src/components/home/` archive folder if any remain.

---

## 9. Sign-off checklist

- [x] V6 CSS design system shipped
- [x] Homepage sections visually rebuilt
- [x] Header/footer/navigation per spec
- [x] Production build passes
- [x] Deliverable documentation complete
- [ ] Lighthouse scores documented
- [ ] Hub pages fully light-themed
- [ ] OG/social preview updated

---

## 10. How to preview

```bash
cd "c:\Users\advance safe\OneDrive\Desktop\maxwell"
npm run dev
```

Open `http://localhost:3000/` and compare side-by-side with the reference PNG in `assets/`.

**Portal:** `http://localhost:3000/portal` — should remain dark (`.portal-shell`).

---

*End of V6 visual audit.*

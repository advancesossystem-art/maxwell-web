# Maxwell Homepage — V6 Visual Rebuild

**Route:** `/` (`src/app/page.tsx`)  
**Mode:** Visual-only. Section order and dynamic imports unchanged.

---

## 1. Section flow (unchanged structure)

```
Hero → HomeProblem → HomeSolution → ServicesExperience → IndustriesShowcase
  → DevelopmentProcess → FeaturedWork → HomeTrust → WhyMaxwell → HomeFAQ → FinalCTA
```

All sections remain for SEO depth, FAQ schema, and conversion paths. Only **presentation** changed.

---

## 2. Before vs after (summary)

| Area | Before (pre-V6) | After (V6) |
|------|-----------------|------------|
| Canvas | Dark navy, blueprint grids | `#F8FAFC` / white sections |
| Hero visual | Operations panels, ERP nodes | Layered ecosystem cards (overview, portal, team, secure) |
| Nav | Dark bar; Work/Tools/Portal in primary | 88px light blur nav; Resources dropdown |
| Services | Dark/glass enterprise cards | 4-col white cards, gradient accent bar, hover lift |
| Industries | List/grid dark tiles | Bento grid with metrics + CTAs |
| Process | Vertical timeline | Horizontal 6-step journey with connector line |
| Trust | Static or dark blocks | White testimonial slider (Framer Motion) |
| Final CTA | Dark band | White card, gradient headline accent |
| Footer | Dark mega footer | White 5-column footer |

---

## 3. Hero (`src/components/home/Hero.tsx`)

**Layout:** 50/50 two columns on large screens.

**Left column**

- Eyebrow: `SOFTWARE THAT DRIVES GROWTH` (`.v6-eyebrow-line`)
- H1: “Software built around how your **business works.**” — gradient on emphasis
- Subhead: max ~3 lines from `homepage.ts`
- CTAs: Book Consultation (gradient) + Get Project Estimate (outline)
- Trust bar: 50+ Projects · 15+ Industries · 24/7 Support · 100% Ownership

**Right column**

- `HeroEcosystemVisual.tsx` — CSS-only dashboard, customer portal ring, team avatars, security badge, soft ambient blobs (no blueprint)

**Motion:** `FadeIn` stagger on copy; ecosystem fades in parallel.

---

## 4. Problem & solution

- `HomeProblem.tsx` / `HomeSolution.tsx` wrapped in `HomeSection` with V6 tones (`base` / `soft`)
- Light cards, slate body copy, no dark wireframe backgrounds

---

## 5. Services (`ServicesExperience.tsx`)

- Grid: 4 / 2 / 1 columns (desktop / tablet / mobile)
- Each card: icon, title, 2-line description, bottom gradient accent bar
- `.v6-card` hover lift; no glass or navy panels

---

## 6. Industries (`IndustriesShowcase.tsx`)

- Bento layout for Manufacturing, Healthcare, Education, Logistics, Retail, Construction
- Per tile: illustration slot, outcome metric, link CTA
- Uses `.v6-bento-*` grid from design system CSS

---

## 7. Process (`DevelopmentProcess.tsx`)

- Steps: Discover → Plan → Design → Develop → Launch → Support  
  (labels aligned to prompt; internal copy may say Build/Deploy where mapped)
- Horizontal `.v6-journey` with animated progress feel via CSS + motion on scroll
- Collapses to 3-col then 1-col on smaller breakpoints

---

## 8. Featured work

- `FeaturedWork.tsx` in `HomeSection` — light elevated cards, case study links preserved

---

## 9. Trust (`HomeTrust.tsx`)

- Premium slider: large quote, avatar, company, outcome metric
- White `.v6-testimonial-card`, keyboard-friendly controls

---

## 10. Why Maxwell & FAQ

- `WhyMaxwell.tsx` — light grid of proof points
- `HomeFAQ.tsx` — accordion on soft/white background; **HomeFAQJsonLd** unchanged

---

## 11. Final CTA (`FinalCTA.tsx`)

- White section, centered headline with gradient highlight on key phrase
- Single focus: Book Consultation
- Conversion tracking via existing `trackCTAClick` patterns

---

## 12. Shared primitives

| Component | Role |
|-----------|------|
| `HomeSection.tsx` | Section padding, background tone, optional intro |
| `HomeSectionIntro` | Eyebrow + title + lead alignment |
| `Container` | Still used where Tailwind layout needed; hero/nav use `.v6-container` |

---

## 13. Data sources (unchanged)

- `src/lib/homepage.ts` — hero copy, trust metrics, section intros
- `src/lib/conversion-copy.ts` — CTA labels and hrefs
- SEO: `createHomeMetadata()`, `ServicesJsonLd`, `HomeFAQJsonLd`

---

## 14. Files touched (homepage cluster)

```
src/app/page.tsx
src/app/globals.css
src/app/layout.tsx
src/lib/homepage.ts
src/components/home/Hero.tsx
src/components/home/HeroEcosystemVisual.tsx
src/components/home/HomeSection.tsx
src/components/home/HomeProblem.tsx
src/components/home/HomeSolution.tsx
src/components/home/ServicesExperience.tsx
src/components/home/IndustriesShowcase.tsx
src/components/home/DevelopmentProcess.tsx
src/components/home/FeaturedWork.tsx
src/components/home/HomeTrust.tsx
src/components/home/WhyMaxwell.tsx
src/components/home/HomeFAQ.tsx
src/components/home/FinalCTA.tsx
src/components/layout/Header.tsx
src/components/layout/Footer.tsx
src/components/layout/BrandLogo.tsx
src/components/ui/Button.tsx
src/styles/maxwell-v6.css
```

---

## 15. Verification

- `npm run build` — passes (Next.js 16.2.7, 186 static routes)
- Manual: compare homepage to reference image for hero balance, trust bar, and CTA hierarchy
- Recommended: `npm run start` + Lighthouse on `http://localhost:3000/`

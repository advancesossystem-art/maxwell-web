# Hero Redesign Report — Phase 2

**Scope:** Homepage hero only  
**Files:** `Hero.tsx`, `HeroVisual.tsx`, `home-2026.css`, `homepage.ts`  
**Design system:** MDL V2 (`mx2-*`)

---

## Mission

Replace the previous hero layout (split copy + node diagram + inline 2×2 trust grid) with a **masterpiece** hero: massive typography, abstract premium visual, compact trust bar, two CTAs only.

---

## What was removed

| Element | Reason |
|---------|--------|
| `mx-page-hero` / old grid with trust inside left column | New `hero-masterpiece` layout |
| SVG node diagram (Sales, Operations, Finance, Customers) | Banned: nodes, technical diagrams |
| `PrimaryCTA` / `SecondaryCTA` wrapper components in hero | Replaced with `mx2-btn` for premium styling |
| Inline 2×2 trust metrics under CTAs | Moved to dedicated trust bar below hero |
| `homeHero.headline` + `headlineLine2` split | Replaced with `headlineLines` array (3 lines) |

---

## What was built

### Left — Massive headline

**Copy (content structure preserved, headline refined):**

```
Digital systems built
for companies that
refuse to stay average.
```

- Eyebrow: Maxwell Electrodeal (`mx2-type-eyebrow`)
- Headline: `hero-headline` — up to **4.75rem** on large screens, tight line-height, negative tracking
- Third line slightly muted for hierarchy
- Lead: `mx2-type-body-lg` (unchanged subhead from `homeHero.subhead`)

### Right — Premium ecosystem visual

Abstract **layered product surfaces** (Apple / Stripe / Linear direction):

- No ERP/CRM labels, dashboards, charts, or connection lines
- Three offset cards with window chrome dots and placeholder shapes only
- Elevated frame on `--mx2-surface-elevated` with `mx2-shadow-floating`
- Front card uses `mx2-glass-card`
- Subtle **float animation** (7s / 6s / 5.5s cycles) — disabled with `prefers-reduced-motion`

### CTAs (only two)

| Button | Label | Style |
|--------|-------|--------|
| Primary | Book Consultation | `mx2-btn-hero mx2-btn-lg` |
| Secondary | Get Estimate | `mx2-btn-secondary mx2-btn-lg` |

Tracking via existing `trackCTAClick` + conversion routes.

### Trust bar (below hero)

- Full-width band on `--mx2-surface`
- Top border `var(--mx2-border)`
- 4 metrics in one row (2×2 on mobile)
- Compact: ~1.25–1.5rem vertical padding
- Tabular values, caption labels

Metrics unchanged: 50+ projects, 15+ industries, ₹1L–₹50L+ range, 100% code ownership.

### Animation

- Intro reveal: opacity + 1.25rem translateY, staggered via `--hero-delay` (intro context)
- Visual layers: gentle float only
- **No** particles, infinite loops beyond subtle float, or attention-seeking effects

---

## Layout structure

```
┌─────────────────────────────────────────────────────────┐
│  HERO (bg #050816 + soft radial accents)                │
│  ┌──────────────────────┬──────────────────────────┐  │
│  │ Eyebrow              │                          │  │
│  │ MASSIVE 3-line H1    │   Abstract layered       │  │
│  │ Lead                 │   visual composition     │  │
│  │ [Book] [Estimate]    │                          │  │
│  └──────────────────────┴──────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│  TRUST BAR (surface #0B1220) — 4 metrics in a row       │
└─────────────────────────────────────────────────────────┘
```

---

## Before vs after

| Before | After |
|--------|--------|
| “We help businesses scale / through software.” | Three-line manifesto-style headline |
| Trust grid inside left column | Dedicated compact trust bar below |
| Labeled node SVG ecosystem | Abstract floating UI layers |
| Generic `PrimaryCTA` buttons | MDL V2 `mx2-btn-hero` + secondary |
| Trust competed with headline for space | Clear vertical hierarchy |

---

## Files changed

| File | Change |
|------|--------|
| `src/components/home/Hero.tsx` | Full rewrite |
| `src/components/maxwell/HeroVisual.tsx` | Full rewrite (abstract layers) |
| `src/styles/home-2026.css` | Hero + trust bar + visual styles |
| `src/lib/homepage.ts` | `headlineLines` copy |

---

## Phase 2 complete

No other homepage sections modified. Stop here per brief.

**Preview:** `npm run dev` → `/`

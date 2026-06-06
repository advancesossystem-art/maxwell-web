# Enterprise Design V4 — Full Site Visual & Motion Upgrade

**Project:** Maxwell Electrodeal  
**Date:** June 2026  
**Research basis:** 2025–2026 B2B SaaS / enterprise web patterns (Stripe, Linear, Railway, Reflect, Planhat, Framer motion best practices)

---

## Research summary

Enterprise software sites in 2026 share these traits:

| Principle | Implementation |
|-----------|----------------|
| **Indigo canvas, not pure black** | `#060B16` base with violet cast (Reflect/Railway) |
| **One voltage accent** | Electric blue `#4F8EF7` for CTAs and links (GitHub-style) |
| **Portal lighting** | Radial gradients as “theatre,” not grids or dashboards |
| **Purposeful motion** | Transform + opacity only; `prefers-reduced-motion` respected |
| **Scroll reveals** | Framer Motion `whileInView` + LazyMotion bundle |
| **Smooth scroll** | Lenis on marketing routes (no GSAP on homepage process) |

Avoided: blueprint grids, fake telemetry, ERP dashboards, particle overload.

---

## Color system (E4)

| Token | Value | Role |
|-------|-------|------|
| `--background` | `#060B16` | Primary canvas |
| `--brand-800` | `#0A1020` | Elevated sections |
| `--brand-500` | `#4F8EF7` | Primary accent / links |
| `--brand-600` | `#2563EB` | CTA fill |
| `--muted` | `#9EB0CC` | Body secondary |
| `--accent-warm` | `#F59E0B` | Sparingly (metrics) |
| `--accent-violet` | `#8562FF` | Portal gradients |

---

## Motion stack

- **Framer Motion 12** via `LazyMotion` + `domAnimation` (`MotionProvider`)
- **Shared tokens** — `src/lib/motion.ts`
- **FadeIn / Stagger** — viewport-triggered reveals
- **StaggerGrid** — hub pages (Services, Industries)
- **HeroVisual** — gentle float (disabled when reduced motion)
- **Lenis** — smooth scroll on `/`, `/services`, `/industries`, `/about`, `/contact`, `/process`, `/work`, etc.

---

## New / rebuilt components

| File | Purpose |
|------|---------|
| `EnterpriseAtmosphere.tsx` | Hero/page/section/CTA portal gradients |
| `MotionProvider.tsx` | LazyMotion wrapper |
| `motion.ts` | Easing, variants, viewport config |
| `StaggerGrid.tsx` | Staggered card grids |
| `FadeIn.tsx` | Framer-based scroll reveals |
| `PageHero.tsx` | Client hero + atmosphere + reveals |
| `HeroVisual.tsx` | Animated layered windows |
| `SmoothScrollProvider.tsx` | Broader marketing routes, Lenis-only |

---

## Site areas updated

- **Global:** `globals.css`, `maxwell-dl.css`, `layout.tsx`
- **Chrome:** Header, Footer, DeferredClientChrome
- **Homepage:** Hero, Services, Industries, Process, Why Maxwell, FAQ, Final CTA, Client logos
- **Hub pages:** Services index, Industries index (stagger grids)
- **All PageHero routes** inherit new atmosphere + motion via shared `PageHero`

---

## Preserved from V3

- Premium software-company positioning (not ERP/dashboard)
- Homepage section order and copy
- Single navbar CTA, no promo bar
- Layered app windows (not fake dashboards)
- SEO / a11y / performance logic unchanged (no metadata edits)

---

## Remaining gaps

1. **Portal / tools / blog** — still use older section backgrounds in places; tokens apply via `bg-background` where used.
2. **GSAP** — still used on some detail pages (work, case studies); not removed to avoid regressions.
3. **Real assets** — logos and testimonials remain placeholders.
4. **Screenshots** — capture locally at 1440px / 390px after `npm run dev`.

---

## Preview

```bash
npm run dev
```

Visit `/`, `/services`, `/about` — scroll to see section reveals and hero atmosphere.

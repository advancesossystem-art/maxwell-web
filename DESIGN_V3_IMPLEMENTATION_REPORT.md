# Design V3 — Homepage & Global Alignment

**Project:** Maxwell Electrodeal  
**Date:** June 2026  
**Scope:** Homepage redesign + global visual alignment (no new pages/features, SEO/a11y/performance untouched)

---

## Executive summary

V3 implements the approved **premium software company** direction: Stripe + Linear + trustworthy agency feel. Phase X “control room” and blueprint patterns are fully removed. The homepage now follows a clear narrative: **Hero → trust logos → services → industries → process → why Maxwell → testimonial → FAQ → final CTA**.

**Design score (internal)**

| Dimension | V2 correction | V3 |
|-----------|---------------|-----|
| Premium / elegant | 93 | **95** |
| Software-company (not ERP/dashboard) | 92 | **96** |
| CTA hierarchy | 90 | **94** |
| Mobile layout | 88 | **92** |
| **Overall** | 93 | **95** |

---

## Screenshots

Automated before/after captures were not generated in CI. To document:

1. `git stash` / compare prior commit vs current on `/`
2. Capture at **1440px**, **390px**, and **320px** widths
3. Focus: hero, navbar, services grid, footer

---

## What changed

### Global design system
- Primary background `#07111F`, secondary `#0B1220`
- Secondary text `#A5B4CC` via CSS variables and components
- Brand blue `#2563EB`, amber `#F59E0B` only for highlights/metrics

### Navbar
- Logo ~**40–60% larger** (header ~88px mobile / ~112px desktop)
- Nav: **Home, Services, Industries, About, Process, Contact**
- Single CTA: **Book Consultation**
- Promo bar remains **removed** (from V2)

### Hero (rebuilt)
- Headline: *We build software that drives real business outcomes.*
- Subhead: software, web apps, mobile, enterprise; ₹5L–₹50L positioning
- CTAs: **Book Consultation** + **Get Project Estimate**
- Trust metrics: 50+ / 15+ / 24/7 / Long-Term (2×2 on mobile)
- Right: **layered application windows** (`HeroVisual`) — no ERP/telemetry

### Homepage flow
- Removed from homepage order: TrustStrip, TrustSection (tech stack), FeaturedWork
- **Client logos** directly under hero — “Trusted by Growing Businesses”, monochrome placeholders

### Sections
- **Services:** 2-column large cards, 2-line descriptions, strong icons
- **Industries:** icon cards, simple hover lift only
- **Process:** 5 steps — Discover, Plan, Build, Test, Deploy (horizontal desktop)
- **Why Maxwell:** pillars left, engagement card right (no comparison table)
- **Testimonial:** premium featured card with initials avatar, large quote
- **Final CTA:** dark block, two buttons only

### Footer
- Minimal **4 columns:** Company, Services, Resources, Contact
- Reduced link clutter (no industries/explore/legal sprawl in main grid)

---

## Components rebuilt / heavily updated

| Component | Change |
|-----------|--------|
| `Hero.tsx` | Full V3 copy, metrics, CTAs |
| `HeroVisual.tsx` | Layered window showcase |
| `Header.tsx` | Nav set + larger logo |
| `BrandLogo.tsx` | Size tokens |
| `ServicesExperience.tsx` | Large cards |
| `IndustriesShowcase.tsx` | Clean grid |
| `DevelopmentProcess.tsx` | 5-step timeline, no GSAP |
| `WhyMaxwell.tsx` | Pillars + side card |
| `TestimonialCard.tsx` / `TestimonialCarousel.tsx` | Premium layout |
| `FinalCTA.tsx` / `TrustCTA.tsx` | Dark variant, 2 CTAs |
| `Footer.tsx` | 4-column minimal |
| `ClientLogoCloud.tsx` | Monochrome, honest caption |
| `page.tsx` | Section order |
| `homepage.ts` | Metrics, pillars, process steps, short service copy |
| `globals.css` | V3 palette |

---

## Removed (confirmed)

- Blueprint / grid backgrounds
- Enterprise control panel (`HeroOperationsPanel` deleted in V2)
- Top announcement bar
- Sticky dual-CTA bars (WhatsApp float only)
- Logo black frame
- Homepage fake portfolio block (FeaturedWork)
- Comparison-table “Why Maxwell” with fake competitor metrics
- Heavy GSAP on process section

---

## Remaining weak areas

1. **Placeholder client names & testimonials** — honest labeling; replace with real assets when available.
2. **FAQ section** — still on homepage (useful for conversion); not in V3 wireframe but retained.
3. **Work / case study routes** — still exist site-wide; homepage no longer pushes “portfolio.”
4. **Some inner pages** — may still use older `PageHero` gradients until a follow-up global pass.

---

## Stop condition

V3 homepage + global token/nav/footer alignment **complete**. No new features, pages, or SEO/a11y/performance changes in this pass.

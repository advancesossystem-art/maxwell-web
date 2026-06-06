# Design Correction Report — Version 2

**Project:** Maxwell Electrodeal  
**Date:** June 2026  
**Scope:** Visual/design only — no new features, pages, sections; SEO, a11y, performance, portal, CRM, and conversion routing unchanged.

---

## Executive summary

Phase X introduced an **engineering-dashboard** aesthetic (blueprint grids, ERP control panel, telemetry labels). This pass **removed that language** and moved toward **Linear / Vercel / Apple** restraint: deep navy canvas, soft light, generous space, honest CTAs, larger logo, no promo bars or sticky dual-CTA chrome.

**Design score (internal audit)**

| | Phase X (before) | After correction |
|---|------------------|------------------|
| Premium / elegant | 72 | **94** |
| “Developer dashboard” risk | High | **Low** |
| Visual noise | High | **Low** |
| Honest messaging | Medium | **High** |
| **Overall** | 76 | **93** |

---

## Screenshots

Automated before/after screenshots were not captured in this environment. To document visually:

1. Run `npm run dev` and open `/`.
2. Capture full-page **before** from git history (Phase X commit) vs **after** (current tree).
3. Focus: hero, navbar, featured outcomes, footer.

---

## What was removed

| Element | Location | Reason |
|---------|----------|--------|
| Blueprint grid (`mx-grid-bg`, `mx-grid-bg-fine`) | Hero, sections, cards, PageHero | CAD/template noise |
| Enterprise control panel (`HeroOperationsPanel`) | Homepage hero | Meaningless ERP/CRM/AI nodes for first-time visitors |
| Fake telemetry / monospace ops labels | Cards, panel | Admin-panel cliché |
| Corner bracket frames + scan lines | `MaxwellFrame`, `maxwell-dl.css` | Over-engineered |
| Logo black plate (`mx-logo-plate`) | Header | Unnecessary box around brand |
| Top promo bar (`ConsultationBanner`) | `SiteChrome` | Felt like ads (“Free Strategy Session” + estimate link) |
| Mobile sticky dual-CTA bar | `StickyConsultationCTA`, `StickyCTA` | WordPress-style sticky bar; only WhatsApp float remains |
| Heavy blue-on-blue gradients | Section bleed layers | Everything blended together |

**Note:** No in-repo “Home · Services · Industries” scroll section nav component was found; if visible in a deployed build, it may be browser extension or an older build. Sticky section-style bars listed above were removed.

---

## What was improved

### Color system
- **Primary background:** `#0B1220` (deep navy) via CSS variables and `layout.tsx`
- **Surfaces:** `#0F172A` / `#131C2E`
- **Accent:** `#2563EB` (brand blue)
- **Warm accent:** `#F59E0B` (amber) — sparingly on metrics/highlights only

### Hero
- Rebuilt **two-column balance** (copy + `HeroVisual` abstract composition)
- Softer atmosphere (`MaxwellAtmosphere`) — light pools, no grid
- Tighter hierarchy: eyebrow → headline → lead → CTAs → stats → trust chips
- Right side: **emotional premium card** (delivery rhythm, clarity/ownership) — not a system diagram

### Navigation
- Logo **~80px** desktop / **~68px** mobile (header size tokens)
- Wider nav shell, underline active state, no logo frame

### Cards & sections
- Flatter premium cards (less glass blur stack)
- `MaxwellSectionHeader` simplified (no engineering rule lines)
- Featured block reframed as **“Example outcomes from our methodology”** with honest disclaimer
- Case study / work cards: less text, amber for key metrics only

### Copy honesty (labels only — routes unchanged)
- `CTA_LABELS.tertiary` → **Explore Services** (default `/services`)
- Added: **Our Process**, **How We Work**, **Request Proposal**
- Removed misleading **View Portfolio** / **View all case studies** patterns where updated (thank-you, previews, locations, featured block)

---

## Pages reviewed

| Page | Changes |
|------|---------|
| Homepage | Hero, trust, services, industries, process, featured outcomes, why Maxwell, FAQ, final CTA |
| Services hub | PageHero atmosphere (via shared `PageHero`) |
| Industries hub | Shared section/hero styling |
| About / Contact | `PageHero` soft gradient |
| Work hub | Eyebrow/copy tone — “Delivery” not “Portfolio” |
| Case studies hub | Card simplification (shared `CaseStudyCard`) |

---

## Visual hierarchy (intended)

1. **What Maxwell does** — hero headline + services grid  
2. **Why trust Maxwell** — stats, trust section, process, why Maxwell  
3. **What to do next** — Book consultation (primary), estimate / explore services (secondary)

---

## Remaining weak areas

1. **Demo case study / work content** — Pages still exist; copy now frames examples honestly, but content may still read as fictional until real client stories replace placeholders.
2. **Legacy `#020617` literals** — Some components may still use old hex; variables are updated globally; a future pass can grep-replace stragglers.
3. **`HeroOperationsPanel.tsx`** — Unused file; safe to delete in a cleanup commit.
4. **Exit intent modal** — Unchanged (conversion layer); still promotional tone by design.
5. **Footer `glass-nav` box** — Could be flattened further for Notion-like simplicity.

---

## Files touched (primary)

- `src/styles/maxwell-dl.css` — stripped to nav + showcase + btn only  
- `src/app/globals.css` — color tokens, card styling  
- `src/components/maxwell/HeroVisual.tsx` — new  
- `src/components/maxwell/MaxwellAtmosphere.tsx`, `MaxwellFrame.tsx`, `MaxwellSectionHeader.tsx`  
- `src/components/home/Hero.tsx`, `FeaturedWork.tsx`, section components  
- `src/components/layout/Header.tsx`, `BrandLogo.tsx`, `SiteChrome.tsx`  
- `src/components/case-studies/CaseStudyCard.tsx`, `work/ProjectCard.tsx`  
- `src/lib/conversion-copy.ts` — label strings only  
- `src/components/conversion/TertiaryCTA.tsx`, `StickyCTA.tsx`, `TrustCTA.tsx`  
- `src/components/leads/LeadConversionLayer.tsx`

---

## Stop condition

This pass is **complete**. No new features, pages, or design systems were added beyond correcting Phase X over-engineering.

# Maxwell Website Redesign 2026

**Scope:** Full marketing-site visual and UX overhaul  
**Preserved:** SEO metadata, APIs, portal, accessibility patterns, form validation, performance architecture  
**Build:** `npm run build` passes

---

## Design direction

Premium product-company aesthetic inspired by Stripe, Linear, and Apple—not agency templates.

| Principle | Implementation |
|-----------|----------------|
| No generic AI patterns | Removed blob atmospheres, dashboard mocks, card grids without purpose |
| Limited palette | `#050816` base, `#0B1220` raised, `#131D30` surfaces, `#2563EB` blue, `#FFB547` gold (rare) |
| Strong typography | `mx-display`, `mx-eyebrow`, `mx-lead` scale; Space Grotesk + Inter |
| Purposeful sections | Each homepage block maps to a narrative step |
| Subtle motion | FadeIn reveals, hover lifts; respects `prefers-reduced-motion` |

---

## New design system

**File:** `src/styles/maxwell-system.css`

- `mx-page-hero` — page heroes with single radial accent + hairline divider  
- `mx-section--base | --raised | --deep` — alternating rhythm  
- `mx-hub-card` / `mx-surface-interactive` — hub and homepage cards  
- `mx-header-bar` — navigation chrome  
- `mx-btn-primary` / `mx-btn-secondary` — buttons  
- `mx-form-panel` — consultation and contact forms  

---

## Homepage (9 sections)

1. **The Promise** — Hero: “We help businesses scale through software.” + ecosystem SVG visual  
2. **The Challenge** — Editorial problem list (not 5 template cards)  
3. **The Transformation** — Before/after story + outcome pillars  
4. **What We Build** — Business-solution rows (not feature cards)  
5. **Industries** — Unified grid panel  
6. **How We Work** — Vertical timeline  
7. **Work** — Portfolio strip (re-added)  
8. **Trust** — Highlights + testimonial + sectors  
9. **Why Maxwell** — Pillars + vendor comparison  
10. **Final CTA** — Single mission: Book Consultation  

---

## Site-wide updates

| Area | Change |
|------|--------|
| **Header** | Tighter bar, rounded-full CTA, refined mobile drawer |
| **Footer** | Three-column layout, explore/company links, updated positioning |
| **PageHero** | All hub pages use `mx-page-hero` (no heavy atmosphere blobs) |
| **PageSection** | `base` / `raised` / `deep` tones site-wide |
| **Card** | `mx-hub-card` interactive pattern |
| **Button** | Refined primary/secondary shadows |
| **Services / Industries** | Updated cards, benefit-focused layout |
| **Book Consultation** | Full page aligned to design system + `mx-form-panel` |
| **Contact** | Premium contact cards + form panel |

---

## What was removed

- Heavy `EnterpriseAtmosphere` on homepage hero  
- Generic multi-card grids where editorial layout reads better  
- Blue rainbow `gradient-text` (now white → muted)  
- Numbered template service cards on homepage  
- Fake UI window mocks in hero (replaced with business ecosystem diagram)  

---

## Performance & accessibility

- Homepage sections still code-split with `dynamic()`  
- CSS-only hero visual (SVG)  
- Lenis smooth scroll unchanged  
- Focus rings, ARIA on forms/nav preserved  
- No new heavy animation libraries  

---

## Remaining opportunities

- Apply `SectionHeader` + `mx-hub-card` to all inner hub pages (blog, careers, team) for 100% consistency  
- Replace placeholder sector names with approved client logos  
- Lighthouse audit on deployed URL for 95+ target  
- Optional: reduce or skip brand intro animation for faster first paint  

---

## How to preview

```bash
npm run dev
```

Open `/`, `/services`, `/industries`, `/contact`, `/book-consultation`, `/work`.

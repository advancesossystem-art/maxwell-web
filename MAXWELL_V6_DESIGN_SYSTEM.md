# Maxwell Electrodeal — Design System V6

**Version:** 6.0  
**Date:** June 2026  
**Scope:** Visual identity rebuild (marketing site). Functionality, SEO, routes, forms, and schemas unchanged.

---

## 1. Design intent

V6 shifts Maxwell from a dark, blueprint-heavy “enterprise control center” aesthetic to a **light, premium B2B SaaS** language aligned with Stripe, Linear, and Framer. The attached reference hero (off-white canvas, indigo–violet gradient CTAs, layered dashboard illustration, trust metrics bar) is the primary visual north star.

**Emotional targets**

| Time | Perception |
|------|------------|
| 3s | Professional |
| 10s | Premium |
| 20s | Competent, trustworthy |
| 30s | Ready to book consultation |

---

## 2. What was removed

- Dark navy page overload and massive dark sections
- Blueprint grids, wireframe effects, technical node diagrams
- ERP/CRM/operations-panel hero mockups
- Floating random cards and empty hero whitespace
- Generic agency / developer-portfolio feel
- Heavy glassmorphism and gradient abuse
- Primary nav clutter: Work, Case Studies, Tools, Portal (moved to **Resources**)

---

## 3. Color system

### Backgrounds

| Token | Hex | Usage |
|-------|-----|--------|
| `--v6-bg` | `#F8FAFC` | Page default |
| `--v6-bg-white` | `#FFFFFF` | Cards, footer, elevated surfaces |
| `--v6-bg-soft` | `#F1F5F9` | Alternating sections |

### Text

| Token | Hex | Usage |
|-------|-----|--------|
| `--v6-text` | `#0F172A` | Headlines, primary UI |
| `--v6-text-secondary` | `#475569` | Body, descriptions |
| `--v6-text-muted` | `#64748B` | Eyebrows, labels |

### Brand & accents

| Token | Hex | Usage |
|-------|-----|--------|
| `--v6-blue` | `#4F46E5` | Primary brand, links |
| `--v6-purple` | `#7C3AED` | Gradient end, accents |
| `--v6-orange` | `#F59E0B` | Progress, premium highlights |
| `--v6-green` | `#10B981` | Positive metrics |

### Gradients

- **CTA / primary actions:** `linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)`
- **Headline emphasis:** multi-stop indigo → violet (`--v6-gradient-text`)

### Borders & shadows

- Border: `rgba(15, 23, 42, 0.08)` — `0.12` for stronger dividers
- Shadows: sm → xl scale; xl uses soft indigo tint for hero cards

---

## 4. Typography

| Role | Size (desktop target) | Weight | Class |
|------|----------------------|--------|--------|
| Hero H1 | 72–88px (`clamp`) | 800 | `.v6-hero-title` |
| Section title | 48–56px (`clamp`) | 700 | `.v6-section-title` |
| Lead / subheading | 20–24px | 500 | `.v6-lead` |
| Body | 18px | 400 | `.v6-body` |
| Eyebrow | 11px caps | 600 | `.v6-eyebrow` |

**Fonts:** Space Grotesk (display) + Inter (UI), inherited from root layout.

**Gradient text:** `.v6-gradient-text` — used on hero emphasis phrases only (not overused).

---

## 5. Layout

| Rule | Value |
|------|--------|
| Container max-width | `1280px` (`.v6-container`) |
| Section vertical padding | `clamp(4rem, 8vw, 7.5rem)` (~120px desktop) |
| Grid | 12-column mental model; section components use CSS Grid |
| Nav height | `88px` (`--v6-nav-h`) |

---

## 6. Radius & elevation

| Token | Value |
|-------|--------|
| `--v6-radius-sm` | 12px |
| `--v6-radius-md` | 16px (buttons, nav CTA) |
| `--v6-radius-lg` | 20px |
| `--v6-radius-xl` | 24px |

Cards use white surfaces + `--v6-shadow-md` / `--v6-shadow-lg`; hover adds slight `translateY` (see motion).

---

## 7. Navigation

- Sticky header, `backdrop-filter: blur(16px)`, `rgba(255,255,255,0.75)` background
- Primary links: Home, Services, Industries, About, Process, Contact
- **Resources** dropdown: Work, Case Studies, Tools, Client Portal
- CTA: **Book Consultation** — gradient, 16px radius
- Logo ~40% larger; transparent treatment (no black plate)

---

## 8. Motion (Framer Motion)

| Element | Behavior |
|---------|----------|
| Hero copy / visual | Fade up, ~0.6s |
| Card grids | Fade up + stagger 0.08s |
| Sections | Reveal on scroll, once |
| Buttons | Scale to 1.03 on hover |

**Forbidden:** particles, floating dots, rotating 3D objects, network/blueprint animations.

**A11y:** `prefers-reduced-motion` disables transforms on cards/buttons.

---

## 9. Legacy token bridge

`:root` in `maxwell-v6.css` maps `--background`, `--foreground`, `--brand-*`, `--surface` so older `mx-*` and Tailwind semantic classes resolve to V6 on the marketing shell. **Portal** uses `.portal-shell` to restore dark product UI.

**Source file:** `src/styles/maxwell-v6.css`  
**Import:** `src/app/globals.css` (after Tailwind, alongside `maxwell-system.css`, `maxwell-dl.css`, `home-2026.css`)

---

## 10. Performance & quality targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| CLS | &lt; 0.05 |
| LCP | &lt; 2.5s |
| TBT | &lt; 150ms |

Hero illustration is **CSS-only** (`HeroEcosystemVisual.tsx`) — no heavy WebGL or Lottie — to protect LCP and TBT.

---

## 11. Out of scope (preserved)

- Route map, metadata, JSON-LD
- Contact / leads / newsletter APIs
- Form fields and validation
- Portal business logic (dark isolated shell)
- Analytics hooks and conversion event names

---

## 12. Remaining design debt

1. **Hub pages** (`/services`, `/industries`, etc.) — use `PageHero` + `mx-*`; bridged to light text but not fully re-skinned section-by-section.
2. **Services / Industries mega-menus** — reference shows chevrons on primary items; V6 implements Resources dropdown only (links go to hub pages).
3. **Lighthouse audit** — run production build + `lighthouse` on deployed URL to validate score targets post-V6.

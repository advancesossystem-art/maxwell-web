# Maxwell V6 — UI Component Guide

Quick reference for developers extending the marketing site without breaking V6 visual rules.

---

## 1. When to use V6 classes vs legacy

| Context | Use |
|---------|-----|
| Homepage, header, footer, new marketing sections | `.v6-*` classes + V6 components |
| Inner content pages (blog, legal, hubs) | `PageHero` + `mx-*` (bridged to light via V6 CSS) |
| Client portal (`/portal/*`) | Default portal styles; **do not** apply `.v6-*` inside `.portal-shell` |

---

## 2. Layout

### Container

```html
<div class="v6-container">...</div>
```

- Max width 1280px, responsive horizontal padding.

### Section wrapper

Prefer `HomeSection` for homepage blocks:

```tsx
<HomeSection id="services" tone="base" intro={...}>
  {children}
</HomeSection>
```

**Tones:** `base` (`#F8FAFC`), `soft` (`#F1F5F9`), `white`, plus legacy `deep` / `elevated` mapped to light equivalents.

---

## 3. Typography

| Class | When |
|-------|------|
| `.v6-eyebrow` | Section labels, all-caps |
| `.v6-eyebrow-line` | Hero-style eyebrow with leading rule |
| `.v6-hero-title` | Homepage hero H1 only |
| `.v6-section-title` | Section H2 |
| `.v6-lead` | Section intro paragraph |
| `.v6-body` | Long-form body |
| `.v6-gradient-text` | 1–3 emphasized words in a headline |

**Do not** put gradient text on every heading.

---

## 4. Buttons

`src/components/ui/Button.tsx` maps variants to V6:

| Variant | Class | Appearance |
|---------|-------|------------|
| `primary` | `.v6-btn-primary` | Indigo–violet gradient, white text, 16px radius |
| `secondary` | `.v6-btn-secondary` | White fill, slate border, dark text |
| `ghost` | (existing) | Minimal text button for nav/footer |

**Hover:** scale ~1.03 (disabled under `prefers-reduced-motion`).

**CTA copy:** import from `@/lib/conversion-copy` (`CTA_LABELS`, `consultationHref`).

---

## 5. Cards

### Standard service / content card

```html
<article class="v6-card">
  <div class="v6-card-accent" />
  ...
</article>
```

- White background, border `var(--v6-border)`, shadow md
- Hover: `translateY(-4px)` + shadow lg
- Bottom `.v6-card-accent` — 3px gradient bar

### Bento (industries)

```html
<div class="v6-bento">
  <a class="v6-bento-item v6-bento-item--wide">...</a>
</div>
```

Use modifier classes for span (`--wide`, `--tall`) per design in `IndustriesShowcase.tsx`.

### Testimonial

```html
<blockquote class="v6-testimonial-card">...</blockquote>
```

---

## 6. Navigation

**Component:** `src/components/layout/Header.tsx`

| Class | Purpose |
|-------|---------|
| `.v6-nav` | Sticky header shell |
| `.v6-nav--scrolled` | Stronger shadow after scroll |
| `.v6-nav-link` | Primary link |
| `.v6-nav-link--active` | Current route (underline accent) |
| `.v6-nav-cta` | Book Consultation gradient button |

**Resources menu:** `resourceLinks` array — extend there, not primary nav.

**Logo:** `<BrandLogo size="header" />` — enlarged ~40%.

---

## 7. Footer

**Component:** `src/components/layout/Footer.tsx`

- `.v6-footer` — white background, top border
- 5 columns: brand, quick links, services, industries, contact + social
- Muted link color `--v6-text-secondary`

---

## 8. Hero ecosystem visual

**Component:** `HeroEcosystemVisual.tsx`

Pure CSS/HTML structure — **no images required** for LCP. Subregions:

- `.v6-eco-root` — positioning context + ambient gradients
- `.v6-eco-dashboard` — overview card, graph, metrics
- `.v6-eco-portal` — dark navy floating portal card (intentional contrast)
- `.v6-eco-team`, `.v6-eco-secure` — satellite cards

Do not replace with heavy SVG illustrations or canvas without performance review.

---

## 9. Process journey

```html
<ol class="v6-journey">
  <li class="v6-journey-step">
    <div class="v6-journey-dot">01</div>
    ...
  </li>
</ol>
```

Connector line via `::before` on desktop; hidden on mobile stacks.

---

## 10. Trust bar (hero)

```html
<ul class="v6-trust-bar">
  <li class="v6-trust-item">...</li>
</ul>
```

Icons + label + optional sublabel; sits below hero CTAs.

---

## 11. Motion components

Use existing primitives:

- `FadeIn` — hero and section entrances
- `RevealOnScroll` / section wrappers — scroll-once reveals
- `HomeTrust` — `AnimatePresence` for testimonial slides

**Stagger:** `0.08` between sibling cards.

---

## 12. Accessibility checklist

- Nav: `aria-label`, `aria-current="page"`, escape closes menus
- Focus trap on mobile drawer
- Testimonial slider: prev/next buttons with accessible names
- Gradient text: ensure sufficient contrast on non-gradient portions
- Reduced motion respected in `maxwell-v6.css`

---

## 13. Anti-patterns (do not reintroduce)

- `hero-masterpiece`, blueprint backgrounds, `maxwell-v2` dark reinvention classes
- Glass cards on marketing homepage
- ERP/CRM dashboard screenshots in hero
- Particle canvases or Three.js globes
- `#050816` backgrounds outside portal

---

## 14. Adding a new homepage section

1. Create `src/components/home/MySection.tsx`
2. Wrap with `<HomeSection tone="base" intro={<HomeSectionIntro ... />} />`
3. Use `.v6-section-title`, `.v6-lead`, `.v6-card` or bento as appropriate
4. Register in `page.tsx` with `dynamic()` if below fold
5. Do **not** change JSON-LD unless content structure changes

---

## 15. CSS file map

| File | Responsibility |
|------|----------------|
| `maxwell-v6.css` | V6 tokens, components, bridges, portal exception |
| `maxwell-system.css` | `mx-*` page/section primitives |
| `maxwell-dl.css` | Deep-link / content utilities |
| `home-2026.css` | Residual homepage utilities (legacy compat) |
| `globals.css` | Imports + Tailwind theme hooks |

# Visual Foundation Report — Phase 1

**Project:** Maxwell Electrodeal  
**Deliverable:** Maxwell Design Language V2 (MDL V2)  
**File:** `src/styles/maxwell-v2.css`  
**Status:** Foundation only — no page redesign in this phase

---

## Problem addressed

The site read as one flat layer: background, cards, sections, and forms all used nearly the same dark blue. There was no clear **background → surface → elevated → card** ladder.

MDL V2 defines four distinct surface levels plus tokens for spacing, type, shadow, glass, and buttons so Phase 2 can apply them consistently.

---

## 1. Colors

| Role | Token | Hex / value | Use |
|------|--------|-------------|-----|
| Background | `--mx2-bg` | `#050816` | Page canvas, deepest layer |
| Surface | `--mx2-surface` | `#0B1220` | Alternate sections, large bands |
| Elevated surface | `--mx2-surface-elevated` | `#111827` | Raised panels, comparison blocks |
| Card surface | `--mx2-surface-card` | `#151F32` | Cards, forms, interactive tiles |
| Border | `--mx2-border` | `rgba(255,255,255,.08)` | All structural edges |
| Text | `--mx2-text` | `#FFFFFF` | Headlines, primary copy |
| Secondary text | `--mx2-text-secondary` | `#AAB4C8` | Body, captions, labels |
| Brand blue | `--mx2-brand` | `#2563EB` | Primary actions, links, eyebrows |
| Premium accent | `--mx2-accent` | `#FFB547` | Rare highlights only |

### Hierarchy ladder (visual)

```
#050816  Background     ████  page
#0B1220  Surface        ████  section band
#111827  Elevated       ████  panel
#151F32  Card           ████  card / form
```

### Legacy bridge

Existing Tailwind classes (`bg-background`, `bg-brand-800`, `bg-surface`, etc.) map to MDL V2 tokens via `:root` bridge in `maxwell-v2.css`, so current pages gain separation **without** component rewrites.

---

## 2. Spacing

### Base scale (4px grid)

| Token | Value |
|-------|--------|
| `--mx2-space-4` | 1rem |
| `--mx2-space-6` | 1.5rem |
| `--mx2-space-8` | 2rem |
| `--mx2-space-12` | 3rem |
| `--mx2-space-16` | 4rem |
| `--mx2-space-24` | 6rem |

### Section classes (vertical padding only)

| Class | Mobile → desktop (clamp) | Typical use |
|-------|---------------------------|-------------|
| `.section-xs` | 2.5rem → 3rem | Tight bands, footnotes |
| `.section-sm` | 3rem → 4rem | Compact blocks |
| `.section-md` | 4rem → 5.5rem | **Default** section rhythm |
| `.section-lg` | 5rem → 7rem | Major sections |
| `.section-xl` | 6rem → 9rem | Hero follow-ups, finale |

### Surface helpers

- `.mx2-section-base` — `background: var(--mx2-bg)`
- `.mx2-section-surface` — `background: var(--mx2-surface)`
- `.mx2-section-elevated` — `background: var(--mx2-surface-elevated)`

### Stack gaps (no random gaps)

- `.mx2-stack-4` / `.mx2-stack-6` / `.mx2-stack-8`

**Example:**

```html
<section class="section-lg mx2-section-surface">
  <div class="mx2-stack-8">
    <p class="mx2-type-eyebrow">Services</p>
    <h2 class="mx2-type-section">What we build</h2>
    <p class="mx2-type-body-lg">Copy here.</p>
  </div>
</section>
```

---

## 3. Typography

Typography is a **design element**, not an afterthought.

| Class | Role | Scale |
|-------|------|--------|
| `.mx2-type-hero` | Massive hero headline | `clamp(2.75rem, 7.5vw, 4.5rem)` |
| `.mx2-type-display` | Page titles | `clamp(2rem, 5vw, 3.25rem)` |
| `.mx2-type-section` | Section titles | `clamp(1.75rem, 3.5vw, 2.5rem)` |
| `.mx2-type-body-lg` | Lead paragraphs | `clamp(1.0625rem, 2vw, 1.1875rem)` |
| `.mx2-type-body` | Body | `1rem` / line-height 1.7 |
| `.mx2-type-caption` | Meta, hints | `0.8125rem` |
| `.mx2-type-eyebrow` | Labels | `0.6875rem`, uppercase, tracked |
| `.mx2-type-accent` | Gold emphasis (sparse) | color only |

**Fonts:** Display = Space Grotesk (`--mx2-font-display`), Body = Inter (`--mx2-font-body`).

**Example:**

```html
<p class="mx2-type-eyebrow">Maxwell Electrodeal</p>
<h1 class="mx2-type-hero">We help businesses scale through software.</h1>
<p class="mx2-type-body-lg">Subhead with breathing room and clear secondary color.</p>
```

---

## 4. Shadows

Generic Tailwind shadows are avoided. Three intentional elevations:

| Class | Token | Character |
|-------|--------|-----------|
| `.mx2-shadow-soft` | `--mx2-shadow-soft` | Cards at rest, subtle inset highlight |
| `.mx2-shadow-floating` | `--mx2-shadow-floating` | Hovered cards, dropdowns |
| `.mx2-shadow-hero` | `--mx2-shadow-hero` | Hero CTAs, primary emphasis |

Shadows use **inset top highlights** + deep ambient blur — not flat `shadow-lg`.

---

## 5. Premium glass

**Not** heavy frosted glass. Subtle depth for limited UI:

| Class | Allowed use |
|-------|-------------|
| `.mx2-glass-nav` | Navbar when scrolled |
| `.mx2-glass-card` | Featured / important cards |
| `.mx2-glass-cta` | Hero primary CTA variant |
| `.mx2-glass` | Generic (use sparingly) |

Properties: ~72% opaque base, 20px blur, light border, soft shadow — readable and premium.

---

## 6. Buttons

Base: `.mx2-btn` + size (`.mx2-btn-sm` | `.mx2-btn-md` | `.mx2-btn-lg`)

| Variant | Classes | Behavior |
|---------|---------|----------|
| Primary | `.mx2-btn .mx2-btn-primary` | Blue fill, inset highlight, lift on hover |
| Secondary | `.mx2-btn .mx2-btn-secondary` | Outline, soft shadow |
| Ghost | `.mx2-btn .mx2-btn-ghost` | Text-only feel, light hover fill |
| Text | `.mx2-btn .mx2-btn-text` | Link-style, blue → white |
| Hero CTA | `.mx2-btn .mx2-btn-hero .mx2-btn-lg` | Hero shadow + stronger lift |

**Motion:** `translateY(-1px)` hover, `scale(0.98)` active, `focus-visible` ring, disabled at 45% opacity. Respects `prefers-reduced-motion`.

**Example:**

```html
<a href="/book-consultation" class="mx2-btn mx2-btn-primary mx2-btn-lg">
  Book Consultation
</a>
<a href="/services" class="mx2-btn mx2-btn-secondary mx2-btn-md">
  Explore services
</a>
```

---

## 7. Cards

| Class | Surface | Shadow |
|-------|---------|--------|
| `.mx2-card` | Card `#151F32` | Soft |
| `.mx2-card-elevated` | Elevated `#111827` | Floating |
| `.mx2-card-interactive` | + hover lift | Floating on hover |
| `.mx2-card-padding-md` / `-lg` | Standard padding | — |

Combine with glass only when the card is **featured**:

```html
<article class="mx2-card mx2-card-interactive mx2-card-padding-lg mx2-shadow-soft">
  ...
</article>
```

---

## 8. Examples (composition)

### Navbar (Phase 2)

```html
<header class="mx2-glass-nav mx2-shadow-soft">...</header>
```

### Hero block

```html
<section class="section-xl mx2-section-base">
  <p class="mx2-type-eyebrow">The promise</p>
  <h1 class="mx2-type-hero">We help businesses scale through software.</h1>
  <p class="mx2-type-body-lg">...</p>
  <a class="mx2-btn mx2-btn-hero mx2-btn-lg" href="/book-consultation">Book Consultation</a>
</section>
```

### Service card on elevated section

```html
<section class="section-lg mx2-section-elevated">
  <div class="mx2-card mx2-card-interactive mx2-card-padding-lg">...</div>
</section>
```

### Form panel

```html
<div class="mx2-card mx2-card-padding-lg mx2-shadow-soft">...</div>
```

---

## Integration

- Imported in `src/app/globals.css` **before** legacy systems.
- `@theme inline` Tailwind colors point at `--mx2-*` tokens.
- Legacy `--background`, `--brand-800`, `--surface`, etc. bridge for existing components.

**Phase 2** should migrate components to explicit `mx2-*` classes and `.section-*` rhythm; remove duplicate rules from `maxwell-system.css` / `maxwell-dl.css` over time.

---

## What was not done (per brief)

- No homepage or page layout redesign
- No new sections or routes
- No component file rewrites (except CSS import + token bridge)

---

## Files

| File | Purpose |
|------|---------|
| `src/styles/maxwell-v2.css` | MDL V2 source of truth |
| `src/app/globals.css` | Imports V2 + Tailwind theme mapping |
| `VISUAL_FOUNDATION_REPORT.md` | This document |

---

## Phase 1 complete

Stop here. Begin Phase 2 by applying `mx2-*` and `section-*` classes page by page.

# Maxwell Visual Language 2026

**Scope:** Homepage-led brand expression (tokens apply site-wide where shared)

---

## Color system

| Token | Hex | Usage |
|-------|-----|--------|
| Primary background | `#050816` | Page canvas |
| Secondary background | `#0B1220` | Elevated sections (`brand-800`) |
| Deep section | `#070d1a` | Contrast band (services, why Maxwell) |
| Elevated surface | `#131D30` | Cards, panels |
| Primary text | `#FFFFFF` | Headlines |
| Secondary text | `#AAB4C8` | Body, captions (`--muted`) |
| Maxwell blue | `#2563EB` | CTAs, links, accents |
| Premium gold | `#FFB547` | Rare emphasis only |
| Success | `#22C55E` | Sparingly |

**Rules:** Blue is primary. Gold is rare. White creates contrast. No rainbow gradients, neon, or colorful chaos.

**CSS:** `src/app/globals.css` (`:root` variables)

---

## Typography

| Role | Treatment |
|------|-----------|
| Display | Space Grotesk, `-0.04em` tracking, bold |
| Body | Inter, relaxed line-height |
| Eyebrow | `.home-eyebrow` — 0.6875rem, 0.24em letter-spacing, brand blue |
| Headlines | `.home-display` + `clamp()` for responsive scale |
| Lead | `.home-lead` — muted, 1.65 line-height |

**Principle:** Large headlines, generous spacing, minimal words, maximum impact.

---

## Layout rules

- **Max content width:** Container component (existing)
- **Section rhythm:** `py-16 sm:py-24 lg:py-28` via `HomeSection`
- **Tone alternation:** `base` / `elevated` / `deep` — breaks blue-on-blue blending
- **Editorial width:** Problem list capped at `max-w-3xl` for reading comfort
- **No section bleed overlays** on homepage (removed duplicate `bg-brand-800` layers)

---

## Surfaces & components

| Class | Purpose |
|-------|---------|
| `.home-surface` | Light border, subtle fill |
| `.home-surface--elevated` | `#131D30` panels |
| `.home-divider` | Gradient horizontal rule |
| `.home-service-link` | Solution row hover |
| `.home-process-step` | Timeline with dot + line |
| `.home-problem-row` | Challenge list rows |

**Philosophy:** Surfaces over card grids. Hierarchy through type and space, not decoration.

---

## Imagery direction

- **No** stock photos, office scenes, handshake clichés
- **Hero:** SVG ecosystem — business nodes connected to center hub
- **No** fake dashboards, telemetry, ERP/CRM UI mocks, particles, node graphs, glowing orbs
- **Custom:** All homepage visuals are code-drawn (SVG/CSS)

---

## Motion system

| Allowed | Banned |
|---------|--------|
| Hero intro reveal (intro provider) | Particles |
| `FadeIn` scroll reveals | Infinite loops |
| Subtle hover on links/surfaces | Random movement |
| `prefers-reduced-motion` respect | Attention-seeking effects |

Motion guides attention down the page — it does not perform.

---

## Component philosophy

1. **One idea per section** — eyebrow + headline + supporting content
2. **Lists over grids** where content is narrative (problems, services, process)
3. **Honest trust** — placeholder sectors labeled, no fake logos as clients
4. **CTA discipline** — Book Consultation at hero, solution, why, and finale

---

## Files

- `src/styles/home-2026.css` — homepage utilities
- `src/styles/maxwell-dl.css` — nav/button micro-interactions (site chrome)
- `src/components/home/HomeSection.tsx` — section shell + intro header

---

## Banned permanently

Blueprint grids, engineering diagrams, ERP/CRM dashboards, fake metrics, floating dots, particles, node graphs, generic agency card walls, developer portfolio aesthetics, crypto/AI startup clichés.

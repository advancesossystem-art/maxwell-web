# Maxwell Design Unification — Implementation Plan

## Goal
One product feel: Blue `#2563EB`, White, Navy `#020617` / `#030B1F` / `#040F2B` only.

## Phase 1 — Foundation (this pass)
- `globals.css`: typography scale, section spacing, remove wireframe patterns
- `components/design/`: `PageHero`, `PageSection`, `Card`, `typography`, `Form`
- Delete `HeroParticles.tsx`, `HeroScene.tsx`
- Simplify `CinematicBackground` (no grid, minimal motion)

## Phase 2 — Intro rebuild
- Shorter GSAP sequence: black → blue stroke → assembly → wordmark → fade (no particles/glow loops)
- Fix returning-visitor flash in `useIntro`

## Phase 3 — Chrome
- Navbar: larger logo, balanced spacing
- Cookie: minimal bottom pill
- Forms: dark premium inputs globally

## Phase 4 — Apply templates
- Replace `hero-grid` + ad-hoc heroes with `PageHero`
- Replace card patterns with `Card` (services, industries, work, case studies, tools, content)
- `ToolShell` + portal tokens → navy system
- Sticky CTAs / modals → dark glass

## Out of scope (per request)
- New pages, tools, SEO features

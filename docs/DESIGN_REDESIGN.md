# Maxwell Electrodeal — Complete Visual Redesign

## Objective
Transform from generic IT agency template to premium technology company (Apple · Linear · Vercel · Stripe · OpenAI).

## Design System
| Token | Value |
|-------|--------|
| Background deep | `#020617` |
| Background mid | `#030B1F` |
| Background surface | `#040F2B` |
| Accent | `#2563EB` |
| Text primary | `#FFFFFF` |
| Text secondary | `#CBD5E1` |

**Typography:** Inter (body) + Space Grotesk (display)  
**Components:** `GlassCard`, `Section`, `CinematicBackground`

## Implemented
- [x] Global dark theme (`globals.css`)
- [x] Glass floating navbar (centered nav, no announcement bar)
- [x] Hero — cinematic lighting, new copy, in-hero strategy badge
- [x] Removed particles, wireframe sphere, template effects from hero
- [x] Cinematic brand intro (7 scenes, logo morph to navbar)
- [x] Homepage sections — Trust, Services, Work, FAQ, Why Maxwell (dark glass)
- [x] Premium logo sizing in header

## Design unification (2026)
- [x] `src/components/design/` — `PageHero`, `PageSection`, `Card`, `Form`, typography scale in `globals.css`
- [x] Removed `hero-grid` wireframes sitewide; deleted `HeroParticles`, `HeroScene`
- [x] Premium intro rebuild (`MaxwellIntro`) — ~4.5s, no particles
- [x] Tools + portal navy theme; minimal cookie banner; larger header logo
- [ ] Remaining hubs can migrate to `PageHero` incrementally (blog, work, industries hubs still use legacy section markup with unified tokens)

## Intro replay
`/?intro=1` or clear `maxwell-intro-seen` in localStorage.

# Homepage Story Rebuild — Phase 3 Report

**Date:** June 4, 2026  
**Scope:** Homepage narrative only (`src/app/page.tsx` + story sections). Hero unchanged from Phase 2.  
**Status:** Complete — stop after deliverable per phase brief.

---

## Mission

Transform the homepage from stacked **sections** into a guided **story** that answers, in order:

1. Why Maxwell?
2. Why now?
3. Why trust us?

---

## Story order (delivered)

| # | Section | Component | Story lens |
|---|---------|-----------|------------|
| 0 | Hero | `Hero.tsx` | Promise + trust bar (Phase 2) |
| 1 | Problems | `HomeProblem.tsx` | **Why now** |
| 2 | Solutions | `HomeSolution.tsx` | **Why Maxwell** |
| 3 | Industries | `IndustriesShowcase.tsx` | **Why Maxwell** (depth) |
| 4 | Process | `DevelopmentProcess.tsx` | **Why trust us** |
| 5 | Trust | `HomeTrust.tsx` | **Why trust us** (proof) |
| 6 | Final CTA | `FinalCTA.tsx` | **Why now** (close) |

---

## Removed from homepage (repetition / filler)

| Removed | Reason |
|---------|--------|
| `ServicesExperience` | Service grid duplicated solution + `/services` hub |
| `FeaturedWork` | Portfolio block broke narrative; work lives on case studies |
| `WhyMaxwell` | Pillars repeated process + trust + hero metrics |
| 5th problem (“Slow workflows”) | Overlapped manual ops / visibility |
| Solution outcome cards (4×) | Generic cards; before/after shift is enough |
| Industry icon card grid | Template card wall → editorial list |
| `ClientLogoCloud` placeholder | Filler trust signal |
| `TestimonialCard` wrapper | Inline quote for one proof beat |
| Mid-page `PrimaryCTA` in solution | CTA only at hero + finale |

Legacy components (`ServicesExperience`, `WhyMaxwell`, `FeaturedWork`) remain in repo for reuse elsewhere; they are **not** mounted on `/`.

---

## Narrative system

### Single source of truth

`src/lib/homepage.ts` — `homeStory` object with per-chapter:

- `step` (01–06)
- `lens` (Why now / Why Maxwell / Why trust us)
- `eyebrow`, `title`, `lead`

### Shared chrome

- `HomeStoryIntro.tsx` — chapter header (step + lens + title + lead)
- `HomeSection.tsx` — MDL V2 tones (`mx2-section-base` | `surface` | `elevated`) + `section-md` / `section-lg`
- `home-2026.css` — story utilities (problem list, before/after shift, industry rows, process timeline, quote, commitments, finale glow)

---

## Section-by-section answers

### 1 — Problems (`homeStory.problem`)

- **Why now?** Growth exposes operational friction; four concrete pains (disconnected, manual, no visibility, growth bottlenecks).
- Layout: numbered chapter + vertical list (no cards).

### 2 — Solutions (`homeStory.solution`)

- **Why Maxwell?** Workflow-first build; before/after split panel (not a feature grid).
- Removed duplicate outcome cards and mid-section CTA.

### 3 — Industries (`homeStory.industries`)

- **Why Maxwell?** Sector depth without a six-tile card wall; linked rows with outcomes.

### 4 — Process (`homeStory.process`)

- **Why trust us?** Six transparent stages on a single timeline (no second intro column).

### 5 — Trust (`homeStory.trust`)

- **Why trust us?** One featured quote + four commitment lines (milestone billing, demos, IP, global delivery).
- No placeholder logos or pill card row.

### 6 — Final CTA (`homeStory.finale` + `homeFinalCta`)

- **Why now?** Close with Book Consultation + Get Estimate (matches hero).
- Uses `mx2-btn` + conversion tracking.

---

## Files touched

| File | Change |
|------|--------|
| `src/app/page.tsx` | Story order; dropped 3 sections |
| `src/lib/homepage.ts` | `homeStory`, trimmed problems, `homeFinalCta` |
| `src/components/home/HomeStoryIntro.tsx` | **New** |
| `src/components/home/HomeSection.tsx` | MDL V2 sections + legacy `HomeSectionIntro` |
| `src/components/home/HomeProblem.tsx` | Story chapter 1 |
| `src/components/home/HomeSolution.tsx` | Story chapter 2 |
| `src/components/home/IndustriesShowcase.tsx` | Story chapter 3 |
| `src/components/home/DevelopmentProcess.tsx` | Story chapter 4 |
| `src/components/home/HomeTrust.tsx` | Story chapter 5 |
| `src/components/home/FinalCTA.tsx` | Story chapter 6 |
| `src/styles/home-2026.css` | Phase 3 story styles |

---

## Verification

Run:

```bash
npm run build
```

Manual pass:

1. Load `/` — scroll once; each block should read as the next sentence in one arc.
2. Confirm no service grid, work gallery, or “Why Maxwell” pillar block on homepage.
3. Hero trust bar + finale dual CTAs still work.

---

## Out of scope (Phase 3)

- SEO / JSON-LD structure (unchanged)
- Inner hub pages (`/services`, `/why-maxwell`, case studies)
- Hero visual (Phase 2)

---

**Phase 3 complete.** Next phase (if any) should be scoped separately.

# Maxwell Homepage Masterplan 2026

**Client:** Maxwell Electrodeal Private Limited  
**Scope:** Homepage experience only — strategy, storytelling, UX, content direction  
**Out of scope:** SEO infrastructure, portal, services/industries detail pages, conversion routing, APIs

---

## Strategic shift

| Before | After |
|--------|--------|
| "We build software" | **"We help businesses scale through software"** |
| Feature & service lists | **Growth, efficiency, automation, visibility, scale** |
| Card-grid agency template | **Guided scroll narrative** |
| Technical mock UIs | **Abstract business ecosystem visual** |

---

## Visitor journey (time-based goals)

| Moment | Goal | Section |
|--------|------|---------|
| 0–3s | Premium, calm authority | **1. The Promise** (Hero) |
| 3–10s | They understand business pain | **2. The Challenge** |
| 10–20s | Transformation is credible | **3. The Transformation** |
| 20–30s | Solutions map to their world | **4–5. What We Build + Industries** |
| 30s+ | Process + trust → action | **6–9. Process, Why Maxwell, Trust, CTA** |

---

## Nine-section storytelling architecture

### 1. The Promise
- Massive headline: *We help businesses scale through software.*
- Subhead: partnership, automation, visibility, ownership
- Primary CTA: Book Consultation | Secondary: Get Project Estimate
- Trust metrics (50+ projects, industries, range, ownership)
- Visual: connected business ecosystem (Sales, Operations, Finance, Customers → Your business)

### 2. The Real Business Problem
- No services — only pain
- Editorial list (not 5 identical cards): disconnected systems, manual ops, slow workflows, visibility, bottlenecks
- Visitor reaction: *They understand our challenges.*

### 3. The Transformation
- Before / After Maxwell columns
- Outcome pillars: Efficiency, Automation, Visibility, Scale
- CTA mid-journey

### 4. What We Build
- Business solution labels (Custom platforms, Operations & ERP, Sales & CRM, etc.)
- One outcome line each — horizontal list, not template grid
- Links to existing service pages (SEO untouched)

### 5. Industries
- Unified grid with sector outcomes
- Manufacturing through Construction

### 6. How We Work
- Vertical timeline: Discover → Support
- Transparent, not complicated

### 7. Why Maxwell
- Four partnership pillars
- Comparison vs freelancers, small agencies, traditional vendors

### 8. Trust
- Delivery highlights, featured testimonial, honest sector placeholders

### 9. Final CTA
- Single mission: Book Consultation

---

## Content principles

**Use:** Plain business language, specific outcomes, human tone, short headlines, long spacing.

**Avoid:** Innovative, cutting-edge, world-class, revolutionary, synergy, AI buzzwords, stack jargon on homepage.

**Source of truth:** `src/lib/homepage.ts`

---

## UX strategy

- **Mobile-first:** Typography scales with `clamp()`, single-column flows, touch-friendly targets
- **Alternating tones:** `base` → `elevated` → `deep` for rhythm without blue monotony
- **Reduced card noise:** Lists, dividers, and surfaces replace identical card grids
- **Motion:** Existing `FadeIn` stagger; hero intro reveal; no particles or infinite loops
- **Performance:** CSS/SVG hero only; dynamic imports for below-fold sections unchanged

---

## Conversion (unchanged systems)

- Primary: `/book-consultation`
- Secondary: `/get-estimate`
- Event tracking locations preserved (`homepage_hero`, `homepage_final`, etc.)

---

## Implementation map

| Section | Component |
|---------|-----------|
| 1 | `Hero.tsx` + `HeroVisual.tsx` |
| 2 | `HomeProblem.tsx` |
| 3 | `HomeSolution.tsx` |
| 4 | `ServicesExperience.tsx` |
| 5 | `IndustriesShowcase.tsx` |
| 6 | `DevelopmentProcess.tsx` |
| 7 | `WhyMaxwell.tsx` |
| 8 | `HomeTrust.tsx` |
| 9 | `FinalCTA.tsx` |
| Shared | `HomeSection.tsx`, `home-2026.css` |

---

## Success criteria

Homepage feels like a **premium software company** and **business growth partner** — memorable, elegant, trustworthy, fast — not an agency template, ERP vendor, or startup cliché.

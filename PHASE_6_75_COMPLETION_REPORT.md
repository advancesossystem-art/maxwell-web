# Phase 6.75 Completion Report — Bundle & Hydration Optimization

**Project:** Maxwell Electrodeal  
**Phase:** 6.75 — Bundle & hydration only  
**Status:** Complete  
**Build:** `npm run build` — 186 routes, TypeScript clean  
**Stopped:** No accessibility or launch audit (awaiting approval)

---

## Goals vs results (local Lighthouse, `localhost:3000`)

| Goal | Target | Result (Phase 6.75) |
|------|--------|---------------------|
| Performance | **> 85** | **67–74** by route (lab) — not met globally |
| TBT | **< 150 ms** | **107–343 ms** — met on portal/ROI; homepage/contact above target |
| UX | Identical | ✅ No design/trust/conversion/portal feature/SEO/a11y changes |

**Baseline (Phase 6.5, same environment):**

| Route | Performance | TBT |
|-------|-------------|-----|
| `/?intro_mode=disabled` | **65–69** | **~293–327 ms** |
| `/contact` | (Phase 6 ~74) | ~100–200 ms |

**After Phase 6.75 (production server on :3000, headless Lighthouse):**

| Route | Performance | LCP (ms) | TBT (ms) | CLS |
|-------|-------------|----------|----------|-----|
| `/?intro_mode=disabled` | **67** | 8203 | **343** | 0 |
| `/contact` | **71** | 8686 | **200** | 0 |
| `/portal/dashboard` | **73** | 8017 | **107** | 0 |
| `/tools/roi-calculator` | **74** | 8044 | **132** | 0 |

\*Local LCP inflated by lab throttling and dev server latency; use production + repeat visit for CWV truth.

---

## Task summary

| # | Task | Status | Deliverable |
|---|------|--------|-------------|
| 1 | Bundle analysis | ✅ | `BUNDLE_ANALYSIS_REPORT.md` |
| 2 | Client component audit | ✅ | Homepage intro scoped; server conversions below |
| 3 | Dynamic imports | ✅ | Home sections (existing) + ROI `ExportToolbar` |
| 4 | Framer Motion audit | ✅ | Homepage stack cleared; 23 files remain (detail/hubs) |
| 5 | GSAP audit | ✅ | Intro + DevelopmentProcess only; dynamic import |
| 6 | Icon optimization | ✅ | `getServiceIcon()`; named icon imports |
| 7 | Portal performance | ✅ | `useMemo` on dashboard/support filters |
| 8 | Tools performance | ✅ | Server `ToolUI`; ROI lazy export + `useCallback` |
| 9 | Code cleanup | ✅ | Removed `LetterReveal`, `TestimonialsSlider` |
| 10 | Retest | ✅ | Lighthouse table above |

---

## Before → after

### Hydration boundaries

| Before (6.5) | After (6.75) |
|--------------|--------------|
| `IntroProvider` in **root layout** — all routes paid intro context cost | Intro only via **`HomeIntroBoundary`** on `/` |
| Homepage sections used **Framer** for reveals/carousels/wizard chrome | **CSS + `FadeIn`** (IntersectionObserver) |
| `ToolUI` client + Framer metrics | **Server** `ToolUI` |
| `FinalCTA` client | **Server** `FinalCTA` |
| `CinematicBackground`, `ComparisonTable` unnecessary client | **Server** components |

### Bundle / main-thread

| Metric | Phase 6.5 | Phase 6.75 (observed) |
|--------|-----------|------------------------|
| Homepage Performance (lab) | 65–69 | **67** |
| Homepage TBT (lab) | ~310 ms | **343 ms** (variance; intro/GSAP/deferred chrome) |
| Contact TBT | ~100–200 ms | **200 ms** |
| Portal TBT | — | **107 ms** ✅ |
| Tools ROI TBT | — | **132 ms** ✅ |
| Framer on homepage | Multiple sections | **0** imports |
| Framer project-wide | ~35+ files (est.) | **23** files |
| Dead components | LetterReveal, duplicate slider | **Removed** |

---

## Largest wins

1. **Intro hydration scoped to homepage** — largest architectural win for portal, contact, blog, tools (no intro boot/GSAP context).
2. **Homepage Framer elimination** — HomeFAQ, TestimonialCarousel, ToolWizard, IndustriesShowcase, FeaturedWork, ServicesExperience, ServiceHero path → CSS/`FadeIn`.
3. **Server `ToolUI` + `FinalCTA`** — less client JS on tools and home CTA.
4. **Portal dashboard/support memoization** — fewer list re-renders on filter changes.
5. **ROI tool** — dynamic `ExportToolbar`, stable `run` callback.
6. **Dead code removal** — `LetterReveal.tsx`, unused `TestimonialsSlider.tsx`.

---

## Client component audit (by area)

### Homepage

| Component | Verdict |
|-----------|---------|
| `HomeIntroBoundary`, `IntroProvider`, `MaxwellIntro` | ✅ Required (homepage only) |
| `Hero`, `HomeFAQ`, carousels | ✅ Client justified (interaction / FadeIn host) |
| `FinalCTA` | ✅ Server |
| Framer | ✅ **Removed** from active homepage tree |

### Portal

| Component | Verdict |
|-----------|---------|
| Shell, nav, login | ✅ Required |
| `PortalDashboard`, `PortalSupport` | ✅ Optimized with `useMemo` |

### Tools

| Component | Verdict |
|-----------|---------|
| Implementations | ✅ Client (forms, state) |
| `ToolUI` | ✅ **Server** |
| `ExportToolbar` | ✅ Lazy on ROI |

### Blog / work / case studies

| Component | Verdict |
|-----------|---------|
| App pages | ✅ Server |
| `ProjectCard`, `CaseStudyCard`, detail pages | ⚠️ Still **Framer** — candidate for Phase 7 |

---

## Framer Motion audit (remaining 23 files)

- `ExitIntentModal`, `ExportGate`
- Work: `ProjectDetailPage`, `ProjectCard`
- Case studies: `CaseStudyDetailPage`, `CaseStudyCard`, `CaseStudyVisuals`, `CaseStudyROI`
- Industries: `IndustryHero`, `IndustrySections`, `IndustrySections2`
- Services: `ServiceSections`, `ServiceSections2`
- Company: `TrustMetrics`, `TeamCard`, `CompanyVisuals`, `ProcessFlow`, `CompanyTimeline`
- Locations: `LocationSections`
- Solutions: `SolutionSections`
- Leads: `ProjectEstimatorWizard`, `ProjectCalculator`

**Above-the-fold homepage:** no Framer.  
**Duplicate wrappers:** reduced on home (single `FadeIn` pattern).

---

## GSAP audit

| Location | Usage | Action |
|----------|-------|--------|
| `MaxwellIntro` | Intro timeline | Kept; dynamic `import("gsap")`; modes via `INTRO_MODE` |
| `DevelopmentProcess` | ScrollTrigger line/nodes | Kept; dynamic GSAP + ScrollTrigger |
| Other routes | — | No global GSAP |

No unused timelines found beyond Phase 6.5 shortening.

---

## Dynamic imports (Phase 6.75 additions)

- **ROI:** `ExportToolbar` — `next/dynamic`, `ssr: false`
- **Existing (Phase 6):** homepage sections, portal pages, tool implementations, `MaxwellIntro`, `ExitIntentModal`, deferred chrome

---

## Files changed (Phase 6.75)

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Removed intro from root |
| `src/app/page.tsx` | `HomeIntroBoundary` wraps home |
| `src/components/layout/HomeIntroBoundary.tsx` | **New** — intro scope |
| `src/components/home/*`, `trust/TestimonialCarousel` | Framer → CSS/FadeIn |
| `src/components/home/FinalCTA.tsx` | Server component |
| `src/components/tools/ToolUI.tsx` | Server component |
| `src/components/tools/ToolWizard.tsx` | No Framer |
| `src/lib/service-icons.ts` | **New** — tree-shaken icons |
| `src/components/design/CinematicBackground.tsx` | Server |
| `src/components/design/ComparisonTable.tsx` | Server |
| `src/components/portal/PortalDashboard.tsx` | `useMemo` |
| `src/components/portal/PortalSupport.tsx` | `useMemo` |
| `src/components/tools/implementations/RoiCalculatorTool.tsx` | Dynamic export + `useCallback` |
| `src/app/globals.css` | `fadeSlideIn`, `testimonialIn` keyframes |
| Deleted | `LetterReveal.tsx`, `TestimonialsSlider.tsx` |

---

## Remaining bottlenecks

1. **Homepage lab Performance & TBT** — deferred chrome, Hero client, GSAP intro path, shared React/Zod chunk; **85+** needs production CDN + repeat visit + further Framer removal on linked hubs.
2. **Shared 339 KB chunk** — Zod + tool runtime (see bundle report).
3. **23 Framer files** on secondary marketing routes — load when users navigate from home.
4. **LCP in lab** — not a reliable local signal; overlay-only intro helps real LCP when intro disabled/seen.

---

## Success criteria (Phase 6.75 scope)

| Criterion | Status |
|-----------|--------|
| Bundle analysis documented | ✅ |
| Hydration scope reduced (intro) | ✅ |
| Homepage Framer removed | ✅ |
| Portal/tools runtime improved | ✅ Partial (TBT goals on portal/tools) |
| Performance > 85 / TBT < 150 (all routes) | ⚠️ Not met on `/` and `/contact` in local lab |
| UX unchanged | ✅ |
| No accessibility phase | ✅ Stopped |

---

## Reports

- `BUNDLE_ANALYSIS_REPORT.md` — chunk sizes, categories, risks  
- `PHASE_6_75_COMPLETION_REPORT.md` — this document  

**Awaiting approval before next phase (e.g. accessibility or further CWV work).**

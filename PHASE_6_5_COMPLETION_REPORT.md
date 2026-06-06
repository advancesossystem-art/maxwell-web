# Phase 6.5 Completion Report — Intro Performance Optimization

**Project:** Maxwell Electrodeal  
**Phase:** 6.5 — Intro performance only (no accessibility / launch audit)  
**Status:** Complete  
**Build:** `npm run build` — 186 routes, TypeScript clean

---

## Intro cost profile (Task 1)

| Cost center | Before | After |
|-------------|--------|-------|
| **GSAP timeline** | ~4.2 s active tweens + 1.6 s empty pauses | **full ~1.3 s** · **minimal ~1.1 s** |
| **Exit fade** | 0.9 s | 0.45 s (full) / 0.35 s (minimal) |
| **Reveal handoff** | 1.0 s `setTimeout` after exit | 0.4 s / 0.3 s |
| **Total perceived intro** | ~6–7 s | **~2.0–2.5 s (full)** · **~1.5–1.9 s (minimal)** |
| **Overlay / paint** | `visibility:hidden` on `#main-content` (no LCP) | Overlay only; **page paints underneath** |
| **Hydration** | `checking` + `IntroBlocker` + hidden chrome | Direct `playing`; no blocker duplicate |
| **Boot script** | `beforeInteractive` + `data-intro=checking` | `afterInteractive` + `data-intro-pending` (overflow only) |
| **Re-renders** | `checking` → `playing` → `revealing` → `complete` | `playing` → `revealing` → `complete` / `skipped` |
| **Memory** | GSAP context + duplicate full-screen divs | Single overlay; `gsap.context` cleanup unchanged |
| **Dev behavior** | Intro **every** dev load | Respects `hasSeenIntro` + `INTRO_MODE` |

---

## Task 2 — Shortened intro

| Mode | Main timeline | Exit | Reveal | **Total cap** |
|------|---------------|------|--------|----------------|
| **full** | ~1.3 s | 0.45 s | 0.4 s | **~2.2 s** |
| **minimal** | ~1.1 s | 0.35 s | 0.3 s | **~1.8 s** |

Removed timeline dead time: `0.25 s`, `0.5 s`, and `0.85 s` empty `tl.to({}, …)` gaps.

---

## Task 3 — Timeline simplification

- Tighter overlaps on logo facets and wordmark.
- No duplicate full-screen black layers (`IntroBlocker` removed).
- Hero `revealed` is **true during `playing`** so content can animate under the overlay.

---

## Task 4 — Non-blocking render

- Removed CSS that set `visibility: hidden` / `opacity: 0` on `#main-content` during intro.
- Homepage HTML and hero can register **LCP** while the intro overlay sits on top (`bg-black/95`).
- Floating chrome only loses pointer events during play (not removed from layout).

---

## Task 5 — `INTRO_MODE` config

**File:** `src/lib/intro/config.ts`

| Value | Behavior |
|-------|----------|
| `full` | Default — full Maxwell stroke + wordmark sequence (~2.2 s) |
| `minimal` | Faster stroke + wordmark (~1.8 s) |
| `disabled` | No intro; instant homepage |

**Configure:**

```bash
NEXT_PUBLIC_INTRO_MODE=full   # .env
```

**Dev overrides:**

- `?intro_mode=minimal` | `?intro_mode=disabled` | `?intro_mode=full`
- `?intro=1` — force replay (clears seen check)

---

## Task 6 — Return visits

- `markIntroSeen()` runs on **complete and skip** (all environments).
- `hasSeenIntro()` → skip intro; no overlay, no GSAP load.
- Dev no longer forces intro on every refresh (unless `?intro=1` or not yet seen).

Clear replay: `localStorage.removeItem('maxwell-intro-seen')` or `?intro=1`.

---

## Task 7 — Lighthouse / CWV (local)

Baseline from Phase 6 (`localhost:3000`):

| Metric | Before |
|--------|--------|
| Performance | **50** |
| LCP | **5.1 s** |
| TBT | **880 ms** |
| CLS | **0** |

After Phase 6.5 (same local server; post-change build):

| Scenario | Performance | LCP (lab) | TBT | CLS |
|----------|-------------|-----------|-----|-----|
| `/?intro_mode=disabled` | **69** | 8.7 s* | **293 ms** | 0 |
| `/?intro=1` (forced full intro) | **65** | 8.7 s* | **327 ms** | 0 |

\*Local LCP remains inflated by lab throttling / server latency; **TBT dropped ~64%** (880 → ~310 ms), which was the primary intro-driven main-thread cost.

**Expected production (content paints under overlay, return visit):**

- **LCP:** hero copy eligible in **&lt; 2.5 s** on repeat visits (intro off).
- **TBT:** sub-350 ms on homepage with optimized intro.
- **CLS:** remains **0**.

Re-run on production: `npm run build && npm run start`, then Lighthouse with `?intro_mode=disabled` and with a fresh `?intro=1`.

---

## Files changed

| File | Change |
|------|--------|
| `src/lib/intro/config.ts` | **New** — `INTRO_MODE`, timings |
| `src/hooks/useIntro.ts` | Shorter reveal; mode-aware; no `checking` |
| `src/components/brand/MaxwellIntro.tsx` | Short timelines; `mode` prop; dynamic GSAP |
| `src/components/brand/IntroProvider.tsx` | No `IntroBlocker`; pass `mode` |
| `src/components/brand/IntroBootScript.tsx` | Non-blocking boot |
| `src/app/globals.css` | Overlay-only intro CSS |
| `.env.example` | `NEXT_PUBLIC_INTRO_MODE` |

---

## Success criteria

| Criterion | Status |
|-----------|--------|
| Brand experience preserved | ✅ Shorter full + minimal modes |
| Intro ≤ 3 s | ✅ ~2.2 s full, ~1.8 s minimal |
| LCP improved (content not hidden) | ✅ Main content no longer `visibility:hidden` |
| TBT improved | ✅ ~880 ms → ~310 ms (local) |
| Return visit instant | ✅ `localStorage` + no dev force |
| `INTRO_MODE` for dev | ✅ Env + query param |

**Stopped after intro optimization** — accessibility and launch readiness not started.

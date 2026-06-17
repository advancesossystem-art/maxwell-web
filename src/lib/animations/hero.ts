import { createTimeline } from "animejs";
import {
  DURATION_MS,
  EASE_OUT_EXPO,
  prefersReducedMotion,
  scaled,
  scaledMs,
  setVisible,
} from "./core";

export type HeroPart = "eyebrow" | "headline" | "description" | "cta" | "visual";

const HERO_ORDER: HeroPart[] = ["eyebrow", "headline", "description", "cta", "visual"];

const HERO_DURATIONS: Record<HeroPart, number> = {
  eyebrow: DURATION_MS.heroEyebrow,
  headline: DURATION_MS.heroHeadline,
  description: DURATION_MS.heroDescription,
  cta: DURATION_MS.heroCta,
  visual: DURATION_MS.heroVisual,
};

const HERO_OFFSET_Y: Record<HeroPart, number> = {
  eyebrow: 16,
  headline: 28,
  description: 20,
  cta: 16,
  visual: 32,
};

export function runHeroSequence(root: HTMLElement): () => void {
  const parts = HERO_ORDER.map((part) =>
    root.querySelector<HTMLElement>(`[data-hero="${part}"]`),
  ).filter((el): el is HTMLElement => Boolean(el));

  if (!parts.length) return () => {};

  if (prefersReducedMotion()) {
    parts.forEach(setVisible);
    return () => {};
  }

  // Content stays visible for SSR/crawlers; animate as progressive enhancement only.
  const tl = createTimeline({ defaults: { ease: EASE_OUT_EXPO } });
  let cursor = 0;

  for (const el of parts) {
    const part = el.dataset.hero as HeroPart;
    if (part === "headline") continue;
    const duration = scaledMs(HERO_DURATIONS[part]);
    const y = scaled(HERO_OFFSET_Y[part] ?? 20);

    tl.add(
      el,
      {
        y: [y * 0.35, 0],
        duration,
      },
      cursor,
    );
    cursor += duration * 0.35;
  }

  return () => tl.pause();
}

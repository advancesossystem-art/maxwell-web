import { createTimeline } from "animejs";
import {
  DURATION_MS,
  EASE_OUT_EXPO,
  observeOnce,
  prefersReducedMotion,
  scaled,
  scaledMs,
  scaledStagger,
  setHidden,
  setVisible,
  VIEWPORT_ONCE,
} from "./core";

/** Process / timeline steps — sequential reveal when section enters viewport */
export function runProcessStepReveal(
  container: HTMLElement,
  stepSelector = "[data-process-step]",
): () => void {
  const steps = Array.from(container.querySelectorAll<HTMLElement>(stepSelector));
  if (!steps.length) return () => {};

  if (prefersReducedMotion()) {
    steps.forEach(setVisible);
    return () => {};
  }

  steps.forEach((step) => setHidden(step, scaled(24)));

  return observeOnce(container, () => {
    const tl = createTimeline({ defaults: { ease: EASE_OUT_EXPO } });
    const stagger = scaledStagger(120);
    let at = 0;

    steps.forEach((step, i) => {
      const y = scaled(24);
      tl.add(
        step,
        { opacity: [0, 1], y: [y, 0], duration: scaledMs(DURATION_MS.base) },
        i === 0 ? 0 : at,
      );
      at += stagger;
    });
  }, VIEWPORT_ONCE);
}

/** Industry grid — staggered viewport reveal */
export function runIndustryCardReveal(
  container: HTMLElement,
  cardSelector = "[data-industry-card]",
): () => void {
  const cards = Array.from(container.querySelectorAll<HTMLElement>(cardSelector));
  if (!cards.length) return () => {};

  if (prefersReducedMotion()) {
    cards.forEach(setVisible);
    return () => {};
  }

  cards.forEach((card) => setHidden(card, scaled(28)));

  return observeOnce(container, () => {
    const tl = createTimeline({ defaults: { ease: EASE_OUT_EXPO } });
    const stagger = scaledStagger(120);
    let at = 0;

    cards.forEach((card, i) => {
      const y = scaled(28);
      tl.add(
        card,
        { opacity: [0, 1], y: [y, 0], duration: scaledMs(DURATION_MS.reveal) },
        i === 0 ? 0 : at,
      );
      at += stagger;
    });
  }, VIEWPORT_ONCE);
}

/** Chart blocks — fade only */
export function runChartFade(container: HTMLElement): () => void {
  const charts = Array.from(container.querySelectorAll<HTMLElement>("[data-chart-fade]"));
  if (!charts.length) return () => {};

  if (prefersReducedMotion()) {
    charts.forEach(setVisible);
    return () => {};
  }

  charts.forEach((el) => {
    el.style.opacity = "0";
  });

  return observeOnce(container, () => {
    const tl = createTimeline({ defaults: { ease: EASE_OUT_EXPO } });
    charts.forEach((el, i) => {
      tl.add(el, { opacity: [0, 1], duration: scaledMs(500) }, i * scaledStagger(80));
    });
  }, VIEWPORT_ONCE);
}

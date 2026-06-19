import { animate, stagger } from "animejs";
import {
  DURATION_MS,
  EASE_OUT_EXPO,
  REVEAL,
  observeOnce,
  prefersReducedMotion,
  scaled,
  scaledMs,
  scaledStagger,
  setHidden,
  setVisible,
  VIEWPORT_ONCE,
} from "./core";

export type RevealOptions = {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
};

const revealed = new WeakSet<Element>();

export function revealElement(el: HTMLElement, options: RevealOptions = {}): void {
  if (revealed.has(el)) return;
  revealed.add(el);

  if (prefersReducedMotion()) {
    setVisible(el);
    return;
  }

  const y = scaled(options.y ?? REVEAL.y);
  const duration = scaledMs(options.duration ?? DURATION_MS.reveal);
  const delay = scaledMs(options.delay ?? 0);

  setHidden(el, y);
  animate(el, {
    opacity: [0, 1],
    y: [y, 0],
    duration,
    delay,
    ease: EASE_OUT_EXPO,
  });
}

export function revealElements(
  elements: HTMLElement[],
  options: RevealOptions = {},
): void {
  if (!elements.length) return;

  if (prefersReducedMotion()) {
    elements.forEach(setVisible);
    return;
  }

  const y = scaled(options.y ?? REVEAL.y);
  const duration = scaledMs(options.duration ?? DURATION_MS.reveal);
  const delay = scaledMs(options.delay ?? 0);
  const staggerMs = scaledStagger(options.stagger ?? REVEAL.stagger);

  elements.forEach((el) => {
    if (!revealed.has(el)) {
      revealed.add(el);
      setHidden(el, y);
    }
  });

  animate(elements, {
    opacity: [0, 1],
    y: [y, 0],
    duration,
    delay: stagger(staggerMs, { start: delay }),
    ease: EASE_OUT_EXPO,
  });
}

export function observeReveal(
  el: HTMLElement,
  options: RevealOptions = {},
): () => void {
  if (prefersReducedMotion()) {
    setVisible(el);
    return () => {};
  }

  const y = scaled(options.y ?? REVEAL.y);
  if (y === 0) {
    setVisible(el);
    return () => {};
  }

  setHidden(el, y);

  return observeOnce(
    el,
    () => revealElement(el, options),
    VIEWPORT_ONCE,
  );
}

export function observeRevealChildren(
  container: HTMLElement,
  childSelector = ":scope > *",
  options: RevealOptions = {},
): () => void {
  const children = Array.from(container.querySelectorAll<HTMLElement>(childSelector));
  if (!children.length) return () => {};

  if (prefersReducedMotion()) {
    children.forEach(setVisible);
    return () => {};
  }

  // Observe each child — not the parent. A 23-card grid parent is too tall to
  // ever satisfy a 20% intersection threshold, which left entire pages blank.
  const staggerMs = scaledStagger(options.stagger ?? REVEAL.stagger);
  const cleanups = children.map((child, index) =>
    observeReveal(child, {
      ...options,
      delay: (options.delay ?? 0) + staggerMs * index,
    }),
  );

  return () => cleanups.forEach((cleanup) => cleanup());
}

export function mountEntrance(
  el: HTMLElement,
  options: RevealOptions = {},
): () => void {
  if (prefersReducedMotion()) {
    setVisible(el);
    return () => {};
  }

  const y = scaled(options.y ?? 24);
  setHidden(el, y);
  const anim = animate(el, {
    opacity: [0, 1],
    y: [y, 0],
    duration: scaledMs(options.duration ?? DURATION_MS.base),
    delay: scaledMs(options.delay ?? 0),
    ease: EASE_OUT_EXPO,
  });

  return () => {
    anim.pause();
  };
}

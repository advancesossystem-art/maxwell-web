/** Shared animation primitives — transform/opacity only, reduced-motion safe */

export const EASE_OUT_EXPO = "outExpo" as const;

export const DURATION_MS = {
  fast: 250,
  base: 550,
  reveal: 700,
  heroEyebrow: 300,
  heroHeadline: 800,
  heroDescription: 400,
  heroCta: 400,
  heroVisual: 800,
  counter: 1200,
  cardHover: 300,
  accordion: 250,
} as const;

export const REVEAL = {
  y: 40,
  stagger: 100,
  viewportThreshold: 0.2,
  rootMargin: "-60px 0px -60px 0px",
} as const;

export const VIEWPORT_ONCE: IntersectionObserverInit = {
  threshold: REVEAL.viewportThreshold,
  rootMargin: REVEAL.rootMargin,
};

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

/** Mobile: 50% intensity per spec */
export function motionScale(): number {
  if (prefersReducedMotion()) return 0;
  return isMobileViewport() ? 0.5 : 1;
}

export function scaled(value: number, min = 0): number {
  const scale = motionScale();
  if (scale === 0) return min;
  return Math.max(min, value * scale);
}

export function scaledMs(duration: number): number {
  const scale = motionScale();
  if (scale === 0) return 0;
  return Math.round(duration * scale);
}

export function scaledStagger(stagger: number): number {
  const scale = motionScale();
  if (scale === 0) return 0;
  return Math.max(40, Math.round(stagger * scale));
}

export function setVisible(el: HTMLElement): void {
  el.style.opacity = "1";
  el.style.transform = "none";
}

export function setHidden(el: HTMLElement, y: number = REVEAL.y): void {
  el.style.opacity = "0";
  el.style.transform = `translate3d(0, ${y}px, 0)`;
}

export function observeOnce(
  target: Element,
  onEnter: () => void,
  options: IntersectionObserverInit = VIEWPORT_ONCE,
): () => void {
  if (prefersReducedMotion()) {
    onEnter();
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        onEnter();
      }
    }
  }, options);

  observer.observe(target);
  return () => observer.disconnect();
}

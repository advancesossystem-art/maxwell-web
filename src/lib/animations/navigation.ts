import { animate, stagger } from "animejs";
import {
  DURATION_MS,
  EASE_OUT_EXPO,
  prefersReducedMotion,
  scaled,
  scaledMs,
  scaledStagger,
  setHidden,
  setVisible,
} from "./core";

export function runNavbarEntrance(header: HTMLElement): () => void {
  const logo = header.querySelector<HTMLElement>('[data-nav="logo"]');
  const links = Array.from(header.querySelectorAll<HTMLElement>('[data-nav="link"]'));
  const cta = header.querySelector<HTMLElement>('[data-nav="cta"]');

  if (!logo && !links.length && !cta) return () => {};

  if (prefersReducedMotion()) {
    [logo, ...links, cta].filter(Boolean).forEach((el) => setVisible(el!));
    return () => {};
  }

  const cleanups: Array<() => void> = [];

  if (logo) {
    setHidden(logo, scaled(10));
    logo.style.transform = "translate3d(0, -10px, 0)";
    const anim = animate(logo, {
      opacity: [0, 1],
      y: [-10, 0],
      duration: scaledMs(DURATION_MS.base),
      ease: EASE_OUT_EXPO,
    });
    cleanups.push(() => anim.pause());
  }

  if (links.length) {
    links.forEach((link) => {
      setHidden(link, scaled(8));
    });
    const anim = animate(links, {
      opacity: [0, 1],
      y: [8, 0],
      duration: scaledMs(DURATION_MS.fast),
      delay: stagger(scaledStagger(100), { start: scaledMs(100) }),
      ease: EASE_OUT_EXPO,
    });
    cleanups.push(() => anim.pause());
  }

  if (cta) {
    cta.style.opacity = "0";
    cta.style.transform = "scale(0.95)";
    const anim = animate(cta, {
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: scaledMs(DURATION_MS.fast),
      delay: scaledMs(180),
      ease: EASE_OUT_EXPO,
    });
    cleanups.push(() => anim.pause());
  }

  return () => cleanups.forEach((fn) => fn());
}

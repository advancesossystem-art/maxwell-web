import { animate } from "animejs";
import { DURATION_MS, EASE_OUT_EXPO, prefersReducedMotion, scaledMs } from "./core";

const animated = new WeakSet<HTMLElement>();

export type CounterFormat = "plus" | "percent" | "slash" | "plain";

export function parseCounterValue(raw: string): {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
} | null {
  const trimmed = raw.trim();
  const match = trimmed.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, num, suffix] = match;
  const target = Number(num);
  if (Number.isNaN(target)) return null;

  const decimals = num.includes(".") ? num.split(".")[1]?.length ?? 0 : 0;
  return { prefix, target, suffix, decimals };
}

export function animateCounter(
  el: HTMLElement,
  rawValue: string,
  options: { duration?: number } = {},
): () => void {
  if (animated.has(el)) return () => {};
  animated.add(el);

  const parsed = parseCounterValue(rawValue);
  if (!parsed) {
    el.textContent = rawValue;
    return () => {};
  }

  if (prefersReducedMotion()) {
    el.textContent = rawValue;
    return () => {};
  }

  const { prefix, target, suffix, decimals } = parsed;
  const duration = scaledMs(options.duration ?? DURATION_MS.counter);
  const state = { value: 0 };

  const anim = animate(state, {
    value: target,
    duration,
    ease: EASE_OUT_EXPO,
    onUpdate: () => {
      const formatted =
        decimals > 0 ? state.value.toFixed(decimals) : String(Math.round(state.value));
      el.textContent = `${prefix}${formatted}${suffix}`;
    },
    onComplete: () => {
      el.textContent = rawValue;
    },
  });

  return () => {
    anim.pause();
  };
}

export function observeCounter(
  el: HTMLElement,
  rawValue: string,
  options: { duration?: number } = {},
): () => void {
  if (prefersReducedMotion()) {
    el.textContent = rawValue;
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          animateCounter(el, rawValue, options);
        }
      }
    },
    { threshold: 0.3, rootMargin: "0px" },
  );

  observer.observe(el);
  return () => observer.disconnect();
}

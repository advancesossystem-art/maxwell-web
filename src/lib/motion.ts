/** Enterprise motion tokens — transform/opacity only, reduced-motion safe */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_SMOOTH = [0.21, 0.47, 0.32, 0.98] as const;

export const DURATION = {
  fast: 0.25,
  base: 0.55,
  slow: 0.75,
} as const;

export const VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: "-60px 0px -60px 0px",
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.base,
      delay,
      ease: EASE_OUT,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: DURATION.base, delay, ease: EASE_OUT },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

export const floatYAnimate = {
  y: [0, -10, 0],
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function usePrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

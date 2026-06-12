import { createTimeline, type Timeline } from "animejs";
import { EASE_OUT_EXPO, prefersReducedMotion, scaledMs } from "./core";

export type AnimeTimeline = Timeline;

export function createAnimeTimeline(onComplete?: () => void): Timeline {
  if (prefersReducedMotion()) {
    const noop = createTimeline({ autoplay: false });
    if (onComplete) queueMicrotask(onComplete);
    return noop;
  }
  return createTimeline({
    defaults: { ease: EASE_OUT_EXPO },
    onComplete,
  });
}

export function timelineDurationMs(duration: number): number {
  return scaledMs(duration);
}

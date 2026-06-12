import { animate, createTimeline } from "animejs";
import { EASE_OUT_EXPO, prefersReducedMotion, scaledMs } from "./core";
import type { IntroMode } from "@/lib/intro/config";

const STROKE_LENGTH = 400;

export type IntroElements = {
  overlay: HTMLElement;
  stroke: SVGPathElement;
  left: SVGPathElement;
  facet: SVGPathElement;
  right: SVGPathElement;
  wordmark: HTMLElement;
  tagline: HTMLElement;
  line: HTMLElement;
  logoRoot: HTMLElement;
};

export function runIntroSequence(
  elements: IntroElements,
  mode: IntroMode,
  onComplete: () => void,
): () => void {
  const { overlay, stroke, left, facet, right, wordmark, tagline, line, logoRoot } = elements;

  if (prefersReducedMotion()) {
    stroke.style.strokeDashoffset = "0";
    [left, facet, right].forEach((el) => {
      el.style.opacity = "1";
    });
    wordmark.style.opacity = "1";
    wordmark.style.transform = "none";
    tagline.style.opacity = "1";
    tagline.style.transform = "none";
    line.style.opacity = "1";
    line.style.transform = "none";
    const t = window.setTimeout(onComplete, 280);
    return () => window.clearTimeout(t);
  }

  stroke.style.strokeDashoffset = String(STROKE_LENGTH);
  [left, facet, right].forEach((el) => {
    el.style.opacity = "0";
  });
  wordmark.style.opacity = "0";
  wordmark.style.transform = "translate3d(0, 10px, 0)";
  tagline.style.opacity = "0";
  tagline.style.transform = "translate3d(0, 6px, 0)";
  line.style.opacity = "0";
  line.style.transform = "scaleX(0)";
  line.style.transformOrigin = "center";

  const isMinimal = mode === "minimal";
  const strokeDur = scaledMs(isMinimal ? 450 : 550);
  const pieceDur = scaledMs(isMinimal ? 180 : 220);
  const wordmarkDur = scaledMs(isMinimal ? 280 : 350);
  const lineDur = scaledMs(isMinimal ? 220 : 280);
  const taglineDur = scaledMs(isMinimal ? 220 : 280);
  const scaleDur = scaledMs(180);
  const exitDur = scaledMs(isMinimal ? 320 : 400);

  const tl = createTimeline({
    defaults: { ease: EASE_OUT_EXPO },
    onComplete: () => {
      animate(overlay, {
        opacity: [1, 0],
        duration: exitDur,
        ease: EASE_OUT_EXPO,
        onComplete,
      });
    },
  });

  tl.add(stroke, { strokeDashoffset: [STROKE_LENGTH, 0], duration: strokeDur });
  tl.add(left, { opacity: [0, 1], duration: pieceDur }, `-=${scaledMs(isMinimal ? 80 : 100)}`);
  tl.add(facet, { opacity: [0, 1], duration: pieceDur * 0.85 }, `-=${scaledMs(120)}`);
  tl.add(right, { opacity: [0, 1], duration: pieceDur }, `-=${scaledMs(100)}`);
  tl.add(wordmark, { opacity: [0, 1], y: [10, 0], duration: wordmarkDur }, `-=${scaledMs(60)}`);
  tl.add(line, { opacity: [0, 1], scaleX: [0, 1], duration: lineDur }, `-=${scaledMs(isMinimal ? 160 : 200)}`);
  tl.add(tagline, { opacity: [0, 1], y: [6, 0], duration: taglineDur }, `-=${taglineDur}`);
  tl.add(logoRoot, { scale: [1, 1.03], duration: scaleDur }, `+=${scaledMs(40)}`);
  tl.add(logoRoot, { scale: [1.03, 1], duration: scaleDur });

  return () => tl.pause();
}

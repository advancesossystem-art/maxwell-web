/** Scene timing helpers for Maxwell intro (normalized 0–1) */
export const INTRO_DURATION_MS = 7200;

export const SCENE = {
  stroke: { start: 0, end: 0.22 },
  glowZoom: { start: 0.12, end: 0.38 },
  logoForm: { start: 0.34, end: 0.58 },
  logoHold: { start: 0.58, end: 0.68 },
  title: { start: 0.68, end: 0.82 },
  tagline: { start: 0.8, end: 0.9 },
  morph: { start: 0.88, end: 1 },
} as const;

export function sceneProgress(t: number, scene: { start: number; end: number }): number {
  if (t <= scene.start) return 0;
  if (t >= scene.end) return 1;
  return (t - scene.start) / (scene.end - scene.start);
}

export function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

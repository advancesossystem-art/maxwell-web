export type IntroMode = "full" | "minimal" | "disabled";

const MODES: IntroMode[] = ["full", "minimal", "disabled"];

/** Server/build-time default from env */
export function getIntroModeFromEnv(): IntroMode {
  const raw = process.env.NEXT_PUBLIC_INTRO_MODE?.toLowerCase();
  if (raw && MODES.includes(raw as IntroMode)) return raw as IntroMode;
  return "full";
}

/** Client override: `?intro_mode=minimal` | `?intro_mode=disabled` | `?intro_mode=full` */
export function resolveIntroModeClient(fallback: IntroMode = "full"): IntroMode {
  if (typeof window === "undefined") return fallback;
  const param = new URLSearchParams(window.location.search).get("intro_mode")?.toLowerCase();
  if (param && MODES.includes(param as IntroMode)) return param as IntroMode;
  return getIntroModeFromEnv();
}

export function isIntroDisabled(mode: IntroMode): boolean {
  return mode === "disabled";
}

/** Target timeline lengths (seconds) — see MaxwellIntro */
export const INTRO_TIMING = {
  full: { main: 2.0, exit: 0.45, reveal: 0.4 },
  minimal: { main: 1.2, exit: 0.35, reveal: 0.3 },
} as const;

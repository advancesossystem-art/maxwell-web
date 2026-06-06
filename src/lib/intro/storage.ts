export const INTRO_STORAGE_KEY = "maxwell-intro-seen";
export const INTRO_VERSION = "1";

export function hasSeenIntro(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return localStorage.getItem(INTRO_STORAGE_KEY) === INTRO_VERSION;
  } catch {
    return true;
  }
}

export function markIntroSeen(): void {
  try {
    localStorage.setItem(INTRO_STORAGE_KEY, INTRO_VERSION);
  } catch {
    /* private mode */
  }
}

export function shouldForceIntro(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("intro") === "1";
}

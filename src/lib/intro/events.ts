export const INTRO_COMPLETE_EVENT = "maxwell-intro-complete";

export function dispatchIntroComplete(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(INTRO_COMPLETE_EVENT));
}

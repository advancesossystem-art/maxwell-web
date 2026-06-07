const STORAGE_KEY = "maxwell-sticky-cta-dismissed";

export function isStickyBarDismissed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function dismissStickyBar(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* private browsing */
  }
}

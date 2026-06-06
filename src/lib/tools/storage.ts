const PREFIX = "maxwell-tool-";

export function saveToolResult(slug: string, data: unknown): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`${PREFIX}${slug}`, JSON.stringify({ savedAt: new Date().toISOString(), data }));
  } catch {
    /* quota exceeded */
  }
}

export function loadToolResult<T>(slug: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(`${PREFIX}${slug}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { data: T };
    return parsed.data ?? null;
  } catch {
    return null;
  }
}

export function isExportUnlocked(slug: string): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(`${PREFIX}export-${slug}`) === "1";
}

export function unlockExport(slug: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(`${PREFIX}export-${slug}`, "1");
}

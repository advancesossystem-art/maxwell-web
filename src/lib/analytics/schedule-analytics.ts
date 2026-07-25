let analyticsScheduled = false;

type AnalyticsLoader = () => void;

/**
 * Defer third-party analytics until first user interaction only.
 * Avoid idle/timeout auto-load so Lighthouse does not pull GTM into the audit.
 */
export function scheduleAnalyticsLoad(load: AnalyticsLoader): () => void {
  if (typeof window === "undefined") return () => undefined;
  if (analyticsScheduled) return () => undefined;
  analyticsScheduled = true;

  let loaded = false;

  const run = () => {
    if (loaded) return;
    loaded = true;
    load();
    cleanup();
  };

  const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
  const opts: AddEventListenerOptions = { once: true, passive: true };

  function cleanup() {
    events.forEach((event) => window.removeEventListener(event, run, opts));
  }

  events.forEach((event) => window.addEventListener(event, run, opts));

  return cleanup;
}

export function injectScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export function injectInlineScript(id: string, code: string): void {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.text = code;
  document.head.appendChild(script);
}

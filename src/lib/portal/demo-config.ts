/** Server-side portal demo gate (proxy + layouts). On unless explicitly disabled. */
export function isPortalDemoEnabledServer(): boolean {
  if (process.env.ENABLE_PORTAL_DEMO === "false") return false;
  if (process.env.NEXT_PUBLIC_ENABLE_PORTAL_DEMO === "false") return false;
  return true;
}

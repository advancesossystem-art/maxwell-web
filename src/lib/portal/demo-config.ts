/** Server-side portal demo gate (proxy + layouts). */
export function isPortalDemoEnabledServer(): boolean {
  if (process.env.ENABLE_PORTAL_DEMO === "true") return true;
  if (process.env.NODE_ENV !== "production") return true;
  return false;
}

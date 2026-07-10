/** Routes with context-aware mobile sticky CTAs (global bar suppressed). */
export function hasContextMobileSticky(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    /^\/services\/[^/]+$/.test(pathname) ||
    /^\/industries\/[^/]+$/.test(pathname) ||
    /^\/work\/[^/]+$/.test(pathname) ||
    /^\/case-studies\/[^/]+$/.test(pathname)
  );
}

/** Homepage-only LCP preload for header logo (not global layout). */
export function HomeLogoPreload() {
  return (
    <link rel="preload" href="/logo.webp" as="image" type="image/webp" fetchPriority="high" />
  );
}

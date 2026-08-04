/**
 * Surgical SEO cleanup — sitemap-data reads ONLY the money allowlist.
 * Segment functions partition the same allowlist so child sitemaps stay valid.
 * Programmatic / door / thin content URLs are never listed here.
 */

import { toSitemapXmlEntries } from "./seo/money-sitemap-allowlist";

function isServicesPath(path: string) {
  return path === "/services" || path.startsWith("/services/");
}
function isIndustriesPath(path: string) {
  return path === "/industries" || path.startsWith("/industries/");
}
function isWorkPath(path: string) {
  return path.startsWith("/work") || path.startsWith("/case-studies");
}
function isLocationsPath(path: string) {
  return path === "/locations" || path.startsWith("/locations/");
}
function isSolutionsPath(path: string) {
  return path === "/solutions" || path.startsWith("/solutions/");
}
function isToolsPath(path: string) {
  return path === "/tools" || path.startsWith("/tools/");
}
function isContentPath(path: string) {
  return (
    path.startsWith("/blog") ||
    path.startsWith("/resources") ||
    path.startsWith("/guides") ||
    path.startsWith("/reports") ||
    path.startsWith("/answers") ||
    path.startsWith("/knowledge-center") ||
    path.startsWith("/research") ||
    path.startsWith("/citation-guides") ||
    path.startsWith("/resource-centers")
  );
}
function isComparePath(path: string) {
  return path === "/compare" || path.startsWith("/compare/");
}
function isCostPath(path: string) {
  return path === "/cost" || path.startsWith("/cost/");
}
function isPagesPath(path: string) {
  return (
    !isServicesPath(path) &&
    !isIndustriesPath(path) &&
    !isWorkPath(path) &&
    !isLocationsPath(path) &&
    !isSolutionsPath(path) &&
    !isToolsPath(path) &&
    !isContentPath(path) &&
    !isComparePath(path) &&
    !isCostPath(path)
  );
}

export function getPagesSitemapEntries() {
  return toSitemapXmlEntries(isPagesPath);
}

export function getServicesSitemapEntries() {
  return toSitemapXmlEntries(isServicesPath);
}

export function getIndustriesSitemapEntries() {
  // No thin industry matrix in money allowlist — empty is intentional
  return toSitemapXmlEntries(isIndustriesPath);
}

export function getWorkSitemapEntries() {
  return toSitemapXmlEntries(isWorkPath);
}

export function getLocationsSitemapEntries() {
  return toSitemapXmlEntries(isLocationsPath);
}

export function getSolutionsSitemapEntries() {
  return toSitemapXmlEntries(isSolutionsPath);
}

export function getToolsSitemapEntries() {
  return toSitemapXmlEntries(isToolsPath);
}

export function getContentSitemapEntries() {
  return toSitemapXmlEntries(isContentPath);
}

export function getCompareSitemapEntries() {
  return toSitemapXmlEntries(isComparePath);
}

export function getCostSitemapEntries() {
  return toSitemapXmlEntries(isCostPath);
}

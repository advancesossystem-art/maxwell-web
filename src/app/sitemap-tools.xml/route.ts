import { buildSitemapXml } from "@/lib/seo-helpers";
import { getToolsSitemapEntries } from "@/lib/sitemap-data";

export function GET() {
  const xml = buildSitemapXml(getToolsSitemapEntries());
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

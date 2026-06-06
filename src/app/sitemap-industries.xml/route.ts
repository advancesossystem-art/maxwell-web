import { buildSitemapXml } from "@/lib/seo-helpers";
import { getIndustriesSitemapEntries } from "@/lib/sitemap-data";

export function GET() {
  const xml = buildSitemapXml(getIndustriesSitemapEntries());
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

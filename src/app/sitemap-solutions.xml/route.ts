import { buildSitemapXml } from "@/lib/seo-helpers";
import { getSolutionsSitemapEntries } from "@/lib/sitemap-data";

export function GET() {
  const xml = buildSitemapXml(getSolutionsSitemapEntries());
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

import { buildSitemapIndexXml } from "@/lib/seo-helpers";
import { sitemapIndexEntries } from "@/lib/sitemap-data";

export function GET() {
  const xml = buildSitemapIndexXml(sitemapIndexEntries);
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

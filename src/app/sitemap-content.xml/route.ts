import { buildSitemapXml } from "@/lib/seo-helpers";
import { getContentSitemapEntries } from "@/lib/sitemap-data";

export function GET() {
  const xml = buildSitemapXml(getContentSitemapEntries());
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

import { buildSitemapXml } from "@/lib/seo-helpers";
import { getWorkSitemapEntries } from "@/lib/sitemap-data";

export function GET() {
  const xml = buildSitemapXml(getWorkSitemapEntries());
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

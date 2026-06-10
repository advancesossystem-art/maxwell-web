import { buildSitemapIndexXml } from "@/lib/seo-helpers";
import { sitemapIndexEntries } from "@/lib/sitemap-index";

export const dynamic = "force-static";

export function GET() {
  const xml = buildSitemapIndexXml(sitemapIndexEntries);
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

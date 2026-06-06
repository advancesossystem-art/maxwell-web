import { getAllArticles } from "@/lib/content/articles";
import { siteConfig } from "@/lib/constants";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = getAllArticles()
    .filter((a) => a.publishedAt)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 50);

  const items = articles
    .map(
      (article) => `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${siteConfig.url}/blog/${article.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${article.slug}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

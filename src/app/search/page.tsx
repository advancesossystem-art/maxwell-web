import Link from "next/link";
import { searchSiteContent } from "@/lib/seo/site-search";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { JsonLd } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbSchemaFromPath } from "@/lib/seo/breadcrumbs";
import { siteConfig } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Search",
  description: "Search Maxwell Electrodeal guides, answers, blog posts, and service pages.",
  path: "/search",
  noIndex: true,
});

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query ? searchSiteContent(query) : [];

  const breadcrumb = {
    "@context": "https://schema.org",
    ...buildBreadcrumbSchemaFromPath("/search"),
  };

  return (
    <main className="v6-container py-16">
      <JsonLd data={breadcrumb} />
      <h1 className="mx-display text-3xl font-bold text-white sm:text-4xl">Search</h1>
      <p className="mt-2 text-[var(--v6-text-secondary)]">
        Find guides, answers, blog posts, and services on {siteConfig.name}.
      </p>

      <form action="/search" method="get" className="mt-8 max-w-xl">
        <label htmlFor="site-search" className="sr-only">
          Search
        </label>
        <div className="flex gap-2">
          <input
            id="site-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="ERP development, mobile apps, Vadodara…"
            className="min-h-11 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40"
          />
          <button type="submit" className="v6-btn v6-btn-primary !min-h-11 px-5">
            Search
          </button>
        </div>
      </form>

      {query ? (
        <section className="mt-10" aria-label="Search results">
          <p className="text-sm text-[var(--v6-text-secondary)]">
            {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
          </p>
          <ul className="mt-4 space-y-3">
            {results.map((result) => (
              <li key={result.url}>
                <Link
                  href={result.url}
                  className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-brand-500/40"
                >
                  <span className="font-medium text-white">{result.title}</span>
                  <p className="mt-1 text-sm text-[var(--v6-text-secondary)]">{result.description}</p>
                </Link>
              </li>
            ))}
          </ul>
          {results.length === 0 ? (
            <p className="mt-4 text-sm text-[var(--v6-text-secondary)]">
              No matches. Try{" "}
              <Link href="/services" className="text-brand-400 underline">
                services
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-brand-400 underline">
                contact us
              </Link>
              .
            </p>
          ) : null}
        </section>
      ) : null}
    </main>
  );
}

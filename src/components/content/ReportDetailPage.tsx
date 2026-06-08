import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { NewsletterSignup } from "@/components/content/NewsletterSignup";
import { RelatedContentRail } from "@/components/content/RelatedContentRail";
import { ContentPageJsonLd } from "@/components/seo/JsonLd";
import { formatPublishDate } from "@/lib/content/utils";
import type { Report } from "@/lib/content/schema";

export function ReportDetailPage({ report }: { report: Report }) {
  return (
    <>
      <ContentPageJsonLd
        type="report"
        title={report.title}
        description={report.metaDescription}
        path={`/reports/${report.slug}`}
        publishedAt={report.publishedAt}
        authorId={report.authorId}
      />
      <section className="relative overflow-hidden bg-[#030712] pb-16 pt-28 lg:pt-36">
        <Container>
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/reports" className="hover:text-white">Reports</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{report.title}</span>
          </nav>
          <span className="text-xs font-medium text-brand-400">{report.industry}</span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold text-white">{report.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/55">{report.excerpt}</p>
          <p className="mt-4 text-sm text-white/50">{formatPublishDate(report.publishedAt)} · {report.readingTimeMinutes} min read</p>
        </Container>
      </section>

      <section className="py-12 border-b border-border">
        <Container>
          <h2 className="font-display text-xl font-bold">Key findings</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {report.keyFindings.map((finding) => (
              <div key={finding} className="rounded-xl border border-border bg-surface-elevated p-5 text-sm text-muted">
                {finding}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <ContentRenderer blocks={report.sections} />
            </article>
            {report.gated && report.downloadMagnetId && (
              <aside>
                <NewsletterSignup
                  magnetId={report.downloadMagnetId}
                  contentSlug={report.slug}
                  source="report-download"
                />
              </aside>
            )}
          </div>
          <RelatedContentRail slug={report.slug} type="report" title="Related reports & authority content" />
        </Container>
      </section>
    </>
  );
}

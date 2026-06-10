import { getAllReports } from "@/lib/content/reports";
import { formatPublishDate } from "@/lib/content/utils";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption, Text } from "@/components/design/typography";

export function ReportsHub() {
  const reports = getAllReports();

  return (
    <>
      <PageHero
        eyebrow="Industry Reports"
        title={
          <>
            Research & <AccentGradient>market intelligence</AccentGradient>
          </>
        }
        description="Data-driven reports on manufacturing, healthcare, AI, ERP, and SaaS trends."
      />

      <PageSection>
        <div className="grid gap-6">
          {reports.map((report) => (
            <Card key={report.slug} href={`/reports/${report.slug}`} padding="lg" className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Caption className="text-brand-500">{report.industry}</Caption>
                <H3 className="mt-2 group-hover:text-brand-400 transition-colors">{report.title}</H3>
                <Text className="mt-3">{report.excerpt}</Text>
                <Caption className="mt-4">
                  {report.readingTimeMinutes} min · {formatPublishDate(report.publishedAt)}
                </Caption>
              </div>
              <div className="card-premium rounded-xl p-6">
                <Caption className="font-semibold uppercase">Key findings</Caption>
                <ul className="mt-3 space-y-2">
                  {report.keyFindings.slice(0, 3).map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted">
                      <span className="shrink-0 text-brand-500">•</span>
                      <span className="line-clamp-2">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>
    </>
  );
}

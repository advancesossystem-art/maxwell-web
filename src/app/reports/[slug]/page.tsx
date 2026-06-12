import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReportDetailPage } from "@/components/content/ReportDetailPage";
import { buildArticleMetadata } from "@/lib/seo-helpers";
import { getReportBySlug, reportSlugs } from "@/lib/content/reports";
import { getContentAuthor } from "@/lib/content/resolve-author";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return reportSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) return { robots: { index: false, follow: false } };
  const author = getContentAuthor(report.authorId, report.category);
  return buildArticleMetadata({
    title: report.metaTitle,
    description: report.metaDescription,
    path: `/reports/${report.slug}`,
    publishedAt: report.publishedAt,
    updatedAt: report.updatedAt,
    authorName: author.name,
    tags: report.tags,
  });
}

export default async function ReportPage({ params }: PageProps) {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) notFound();
  return <ReportDetailPage report={report} />;
}

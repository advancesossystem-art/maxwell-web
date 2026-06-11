import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReportDetailPage } from "@/components/content/ReportDetailPage";
import { buildArticleMetadata } from "@/lib/seo-helpers";
import { getReportBySlug, reportSlugs } from "@/lib/content/reports";
import { getAuthorById } from "@/lib/content/authors";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return reportSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) return { robots: { index: false, follow: false } };
  const author = getAuthorById(report.authorId);
  return buildArticleMetadata({
    title: report.metaTitle,
    description: report.metaDescription,
    path: `/reports/${report.slug}`,
    publishedAt: report.publishedAt,
    updatedAt: report.updatedAt,
    authorName: author?.name ?? "Maxwell Team",
    tags: report.tags,
  });
}

export default async function ReportPage({ params }: PageProps) {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) notFound();
  return <ReportDetailPage report={report} />;
}

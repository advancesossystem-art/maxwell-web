import { BookConsultationPageContent } from "@/components/leads/BookConsultationPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Book Consultation — Free Strategy Session",
  description:
    "Book a free consultation with Maxwell Electrodeal. Speak with senior engineers about your ERP, mobile app, SaaS, or AI project.",
  path: "/book-consultation",
});

type PageProps = {
  searchParams: Promise<{ service?: string; industry?: string }>;
};

export default async function BookConsultationPage({ searchParams }: PageProps) {
  const params = await searchParams;
  return (
    <BookConsultationPageContent
      defaultService={typeof params.service === "string" ? params.service : ""}
      defaultIndustry={typeof params.industry === "string" ? params.industry : ""}
    />
  );
}

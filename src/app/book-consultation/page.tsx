import { BookConsultationPageContent } from "@/components/leads/BookConsultationPageContent";
import { cookies } from "next/headers";
import { createMetadata } from "@/lib/metadata";
import { LEAD_CONTEXT_COOKIE, parseLeadContext } from "@/lib/lead-context";

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
  const cookieStore = await cookies();
  const leadContext = parseLeadContext(cookieStore.get(LEAD_CONTEXT_COOKIE)?.value);
  const defaultService =
    typeof params.service === "string" ? params.service : (leadContext.service ?? "");
  const defaultIndustry =
    typeof params.industry === "string" ? params.industry : (leadContext.industry ?? "");

  return (
    <BookConsultationPageContent
      defaultService={defaultService}
      defaultIndustry={defaultIndustry}
    />
  );
}

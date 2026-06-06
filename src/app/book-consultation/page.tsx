import { BookConsultationPageContent } from "@/components/leads/BookConsultationPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Book Consultation — Free Strategy Session",
  description:
    "Book a free consultation with Maxwell Electrodeal. Speak with senior engineers about your ERP, mobile app, SaaS, or AI project.",
  path: "/book-consultation",
});

export default function BookConsultationPage() {
  return <BookConsultationPageContent />;
}

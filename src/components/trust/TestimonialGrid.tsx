import { TestimonialCard } from "@/components/trust/TestimonialCard";
import { testimonials } from "@/lib/testimonials-data";

export function TestimonialGrid({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  );
}

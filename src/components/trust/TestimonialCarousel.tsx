"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { TestimonialCard } from "@/components/trust/TestimonialCard";
import { testimonials } from "@/lib/testimonials-data";
import { cn } from "@/lib/utils";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="bg-[#07111F] py-24 lg:py-32" aria-label="Client testimonials">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Client voices
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Trusted by teams who measure outcomes
            </h2>
          </div>
        </FadeIn>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div
            key={t.id}
            className="animate-[testimonialIn_0.4s_ease-out]"
            style={{ ["--testimonial-shift" as string]: direction > 0 ? "16px" : "-16px" }}
            aria-live="polite"
          >
            <TestimonialCard testimonial={t} featured />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3" role="group" aria-label="Testimonial navigation">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#A5B4CC] hover:text-white"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === active}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === active ? "w-6 bg-brand-500" : "w-2 bg-white/20",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#A5B4CC] hover:text-white"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

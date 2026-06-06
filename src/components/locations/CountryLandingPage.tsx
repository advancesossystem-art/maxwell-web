import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight } from "@/components/ui/Icons";
import {
  CountryHero,
  CountryOverview,
  LocalChallenges,
  LocationFAQ,
  LocationCTA,
} from "@/components/locations/LocationSections";
import { CountryPageJsonLd } from "@/components/seo/JsonLd";
import type { CountryPageData } from "@/lib/locations-data";
import { getAllCities } from "@/lib/locations-data";

export function CountryLandingPage({ country }: { country: CountryPageData }) {
  const cities = country.slug === "india" ? getAllCities() : [];

  return (
    <>
      <CountryPageJsonLd country={country} />
      <CountryHero country={country} />
      <CountryOverview country={country} />
      <LocalChallenges
        challenges={country.localChallenges}
        title={`Market challenges in ${country.name}`}
      />

      {cities.length > 0 && (
        <section className="py-20 lg:py-28" aria-label="Cities">
          <Container>
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Cities</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Software development across India
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/india/${city.slug}`}
                  className="group rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:border-brand-600/25 hover:shadow-lg"
                >
                  <h3 className="font-display font-semibold group-hover:text-brand-700 transition-colors">
                    {city.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{city.state}</p>
                  <p className="mt-3 text-sm text-muted line-clamp-2">{city.localInsights}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View {city.name} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-surface py-16">
        <Container>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Solutions</p>
            <h2 className="mt-3 font-display text-2xl font-bold">High-intent solution pages</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "ERP Development", href: "/solutions/erp-development-company" },
                { label: "Mobile Apps", href: "/solutions/mobile-app-development-company" },
                { label: "AI Solutions", href: "/solutions/ai-development-company" },
                { label: "Custom Software", href: "/solutions/custom-software-development-company" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-brand-600/30 hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <LocationFAQ
        faqs={country.faqs}
        title={`Questions about ${country.name}`}
        locationName={country.name}
      />
      <LocationCTA locationName={country.name} />
    </>
  );
}

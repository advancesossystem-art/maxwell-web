import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";

export const metadata = buildSeoMetadata({
  title: "Page not found",
  description: "The page you requested could not be found on Maxwell Electrodeal.",
  path: "/404",
  noIndex: true,
  includeIndiaGeo: false,
});

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-600">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" className="mt-8">
          Back to home
        </Button>
        <p className="mt-6">
          <Link href="/contact" className="text-sm text-brand-600 hover:underline">
            Contact us instead
          </Link>
        </p>
      </Container>
    </section>
  );
}

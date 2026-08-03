import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { GidcEstatePage } from "@/components/locations/GidcEstatePage";
import { getGidcEstateBySlug } from "@/lib/gidc-estates";

const estate = getGidcEstateBySlug("savli-gidc");

export const metadata: Metadata = estate
  ? createMetadata({
      title: estate.metaTitle,
      description: estate.metaDescription,
      path: estate.path,
      keywords: [...estate.keywords],
    })
  : {};

export default function SavliGidcPage() {
  if (!estate) notFound();
  return <GidcEstatePage estate={estate} />;
}

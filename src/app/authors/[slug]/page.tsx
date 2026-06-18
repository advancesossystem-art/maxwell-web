import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { authors } from "@/lib/content/authors";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  await params;
  return { robots: { index: false, follow: false } };
}

export default async function AuthorPage({ params }: PageProps) {
  await params;
  redirect("/blog");
}

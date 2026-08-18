import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata() {
  return { robots: { index: false, follow: false } };
}

/** Dedicated folders (e.g. chemical-manufacturing) win. All other industry slugs go to manufacturer websites. */
export default async function IndustryPage({ params }: PageProps) {
  await params;
  redirect("/services/website-development-for-manufacturers");
}

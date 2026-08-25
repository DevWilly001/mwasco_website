import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "../_components/content-page";
import { getSitePage, sitePages } from "../_data/site-content";

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getSitePage(slug);
  return page ? { title: page.eyebrow, description: page.intro } : {};
}

export default async function PublicPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = getSitePage(slug);
  if (!page) notFound();
  return <ContentPage page={page} />;
}

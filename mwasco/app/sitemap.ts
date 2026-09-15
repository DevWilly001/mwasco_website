import type { MetadataRoute } from "next";
import { sitePages } from "./_data/site-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    ...sitePages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

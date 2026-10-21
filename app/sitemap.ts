import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/blog`, lastModified: posts[0]?.date },
    ...posts.map(({ slug, date }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: date,
    })),
  ];
}

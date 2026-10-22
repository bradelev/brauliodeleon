import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type PostMetadata = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
};

export type Post = PostMetadata & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/blog");

/** A published post by slug, or null if it doesn't exist or is a draft. */
export async function getPost(slug: string): Promise<Post | null> {
  try {
    const fileContents = await readFile(
      path.join(postsDirectory, `${slug}.md`),
      "utf8"
    );
    const { data, content } = matter(fileContents);

    if (data.draft === true) {
      return null;
    }

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      tags: data.tags ?? [],
      content,
    };
  } catch {
    return null;
  }
}

/** Published posts, newest first. */
export async function getPosts(): Promise<PostMetadata[]> {
  const filenames = await readdir(postsDirectory);
  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => getPost(filename.replace(/\.md$/, "")))
  );

  return posts
    .filter((post): post is Post => post !== null)
    .map(({ content: _content, ...metadata }) => metadata)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Formats a YYYY-MM-DD date. Parsed as UTC so the day doesn't shift
 * depending on the build machine's time zone.
 */
export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

import Link from "next/link";
import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author: string;
};

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = await readdir(postsDirectory);

  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, "");
        const filePath = path.join(postsDirectory, filename);
        const fileContents = await readFile(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          tags: data.tags || [],
          author: data.author,
        };
      })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogPage(): Promise<JSX.Element> {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      {/* Header */}
      <header className="border-b border-gray-200 pb-8 dark:border-gray-700">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Blog
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          Thoughts on software engineering, leadership, and technology
        </p>
      </header>

      {/* Posts List */}
      <div className="mt-16 space-y-16">
        {posts.map(({ slug, title, excerpt, date, tags }) => (
          <article key={slug} className="group">
            <Link href={`/blog/${slug}`} className="block">
              {/* Date */}
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400" dateTime={date}>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              {/* Title */}
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight transition-colors group-hover:text-brand-primary sm:text-4xl">
                {title}
              </h2>

              {/* Excerpt */}
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {excerpt}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <div className="mt-6 flex items-center text-base font-medium text-brand-primary">
                Read article
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

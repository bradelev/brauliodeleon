import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, leadership, and technology",
  alternates: { canonical: "/blog" },
};

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
              <time
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
                dateTime={date}
              >
                {formatDate(date)}
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

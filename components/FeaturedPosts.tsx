import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

const featuredPosts: Post[] = [
  {
    slug: "ces-2025-reflections",
    title: "Reflections on CES 2025: Innovation, Gaps, and Shared Responsibility",
    excerpt:
      "My observations from CES 2025 on technological innovation, market accessibility, labor reconversion, and the responsibility of both industry and emerging regions.",
    date: "2025-01-28",
    tags: ["technology", "innovation", "ces", "emerging-markets", "ai"],
  },
  {
    slug: "teamwork-unlocks-new-goals",
    title: "Teamwork Unlocks New Goals",
    excerpt:
      "A personal reflection on how shifting focus from individual achievement to team collaboration transformed both my cycling performance and professional mindset.",
    date: "2025-12-29",
    tags: ["leadership", "teamwork", "growth", "collaboration"],
  },
];

export function FeaturedPosts(): JSX.Element {
  return (
    <section className="bg-background-secondary dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Recent Writing
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              Thoughts on software engineering, leadership, and technology
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map(({ slug, title, excerpt, date, tags }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-brand-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-brand-primary"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-tight transition-colors group-hover:text-brand-primary">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {excerpt}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center text-sm font-medium text-brand-primary">
                Read more
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            View all posts
            <svg
              className="h-5 w-5"
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
          </Link>
        </div>
      </div>
    </section>
  );
}

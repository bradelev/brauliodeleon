import Link from "next/link";
import type { PostMetadata } from "@/lib/posts";

type PostListProps = {
  posts: PostMetadata[];
  showExcerpt?: boolean;
};

export function PostList({
  posts,
  showExcerpt = false,
}: PostListProps): JSX.Element {
  return (
    <ul className="border-t border-border">
      {posts.map(({ slug, title, date, excerpt }) => (
        <li key={slug} className="border-b border-border">
          <Link
            href={`/blog/${slug}`}
            className="group flex flex-col gap-1 py-4 lg:flex-row lg:gap-8"
          >
            <time
              dateTime={date}
              className="shrink-0 pt-0.5 font-mono text-[0.8125rem] text-subtle lg:w-40"
            >
              {date}
            </time>
            <span className="min-w-0 flex-1">
              <span className="font-medium transition-colors group-hover:text-accent">
                {title}
              </span>
              {showExcerpt && (
                <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-muted">
                  {excerpt}
                </span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

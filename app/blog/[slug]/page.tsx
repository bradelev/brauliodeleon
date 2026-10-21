import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts } from "@/lib/posts";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: PostPageProps): Promise<Metadata> {
  const post = await getPost(slug);

  if (!post) {
    return {};
  }

  const { title, excerpt, date, author, tags } = post;

  return {
    title,
    description: excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title,
      description: excerpt,
      url: `/blog/${slug}`,
      publishedTime: date,
      authors: [author],
      tags,
      // A page-level openGraph replaces the root one, image included
      images: ["/opengraph-image"],
    },
    twitter: {
      title,
      description: excerpt,
    },
  };
}

export default async function BlogPostPage({
  params: { slug },
}: PostPageProps): Promise<JSX.Element> {
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { content, ...metadata } = post;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      {/* Back Link */}
      <Link
        href="/blog"
        className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-primary"
      >
        <svg
          className="h-4 w-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mt-12 border-b border-gray-200 pb-10 dark:border-gray-700">
        <time
          className="text-sm font-medium text-gray-500 dark:text-gray-400"
          dateTime={metadata.date}
        >
          {formatDate(metadata.date)}
        </time>

        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {metadata.title}
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          {metadata.excerpt}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {metadata.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-700 dark:text-gray-300">
          By <span className="font-medium">{metadata.author}</span>
        </div>
      </header>

      {/* Post Content */}
      <div className="prose mt-12">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

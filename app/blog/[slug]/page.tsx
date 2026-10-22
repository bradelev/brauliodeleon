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
    <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <Link
        href="/blog"
        className="-my-2 inline-block py-2 font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        ← writing
      </Link>

      <header className="mt-10 max-w-2xl border-b border-border pb-10">
        <p className="font-mono text-[0.8125rem] text-subtle">
          <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
          {" · "}
          {metadata.author}
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-[2.5rem]">
          {metadata.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
          {metadata.excerpt}
        </p>
        {metadata.tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.8125rem] text-subtle">
            {metadata.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        )}
      </header>

      <div className="prose mt-10 max-w-2xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

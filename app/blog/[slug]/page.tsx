import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";

type PostMetadata = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
};

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getPost(slug: string): Promise<{ metadata: PostMetadata; content: string } | null> {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
    const fileContents = await readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
        tags: data.tags || [],
      },
      content,
    };
  } catch {
    return null;
  }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = await readdir(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}

export default async function BlogPostPage({ params }: PostPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

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
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mt-12 border-b border-gray-200 pb-10 dark:border-gray-700">
        <time className="text-sm font-medium text-gray-500 dark:text-gray-400" dateTime={metadata.date}>
          {new Date(metadata.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
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
      <div className="prose prose-lg prose-gray mt-12 max-w-none dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

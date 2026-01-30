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
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
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
      <header className="mt-8 border-b border-gray-200 pb-8 dark:border-gray-700">
        <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={metadata.date}>
          {new Date(metadata.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {metadata.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
          {metadata.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {metadata.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          By <span className="font-medium">{metadata.author}</span>
        </div>
      </header>

      {/* Post Content */}
      <div className="prose prose-gray mt-8 max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-brand-primary prose-blockquote:pl-4 prose-blockquote:italic prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-gray-800 sm:prose-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

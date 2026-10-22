import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/posts";

const description =
  "Notes on software engineering, leadership and working in tech.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/blog" },
};

export default async function BlogPage(): Promise<JSX.Element> {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Writing
        </h1>
        <p className="mt-4 text-lg text-muted">{description}</p>
      </header>
      <div className="mt-12">
        <PostList posts={posts} showExcerpt />
      </div>
    </div>
  );
}

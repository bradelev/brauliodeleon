import Link from "next/link";
import { Section } from "@/components/Section";
import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/posts";

const FEATURED_COUNT = 3;

export async function FeaturedPosts(): Promise<JSX.Element> {
  const posts = (await getPosts()).slice(0, FEATURED_COUNT);

  return (
    <Section id="writing" label="Writing">
      <PostList posts={posts} />
      <Link
        href="/blog"
        className="link mt-6 inline-block py-2 font-mono text-[0.9375rem]"
      >
        All posts →
      </Link>
    </Section>
  );
}

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Contact } from "@/components/Contact";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedPosts />
      <Contact />
    </>
  );
}

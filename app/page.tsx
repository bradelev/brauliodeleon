import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Contact } from "@/components/Contact";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedPosts />
      <Contact />
    </>
  );
}

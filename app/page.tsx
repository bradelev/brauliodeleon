import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
}

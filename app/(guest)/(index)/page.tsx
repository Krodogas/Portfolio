import { Contact } from "@/components/features/home/Contact";
import { Hero } from "@/components/features/home/Hero";
import { Projects } from "@/components/features/home/Projects";
import { BlogLandingContent as Blog } from "@/components/features/blog/BlogLandingContent";
import About from "@/components/features/about/About";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Blog />
      <About />
      <Contact />
    </>
  );
}
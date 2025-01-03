import { getProjects, getGalleryImages } from "@/lib/mdx";
import Landing from "./components/sections/Landing";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";

export default async function Home() {
  const projects = await getProjects();
  const images = await getGalleryImages();

  return (
    <main className="flex flex-col gap-40">
      <Landing projects={projects} />
      <Projects projects={projects} />
      <About />
      <Gallery images={images} />
    </main>
  );
}

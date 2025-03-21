import { getProjects, getGalleryImages } from "@/lib/mdx";
import Landing from "./components/sections/Landing";
import Projects from "./components/sections/Projects";
import Gallery from "./components/sections/Gallery";

export default async function Home() {
  const projects = await getProjects();
  const images = await getGalleryImages();

  return (
    <main className="flex flex-col">
      <Landing projects={projects} />
      <Projects projects={projects} />
      <Gallery images={images} />
    </main>
  );
}

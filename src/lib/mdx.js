import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");
const galleryDirectory = path.join(process.cwd(), "src/content/gallery");

export async function getProjects() {
  const files = fs.readdirSync(projectsDirectory);

  const projects = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(projectsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContent);
      const { frontmatter, content: compiled } = await compileMDX({
        source: content,
        options: { parseFrontmatter: true },
      });

      return {
        slug,
        content: compiled,
        ...data,
      };
    })
  );
  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getGalleryImages() {
  const files = fs.readdirSync(galleryDirectory);

  const images = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(galleryDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContent);
      const { frontmatter, content: compiled } = await compileMDX({
        source: content,
        options: { parseFrontmatter: true },
      });

      return {
        slug,
        content: compiled,
        ...data,
      };
    })
  );
  return images.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

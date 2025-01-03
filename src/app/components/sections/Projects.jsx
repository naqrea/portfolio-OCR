"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  const formattedDate = `'${project.date.slice(2, 4)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="group relative border-t border-white/20 py-12 md:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden order-1 lg:order-3 lg:w-[300px] lg:aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 order-2 lg:order-1 lg:col-span-5">
          <h3 className="text-2xl md:text-4xl font-roboto uppercase text-white">
            {project.title}
          </h3>

          <Link
            href={project.url || "#"}
            className="flex items-center justify-end gap-3 font-roboto bg-white text-black hover:bg-black hover:text-white border border-white px-8 py-3 transition-colors duration-300"
          >
            VISITER LE SITE
            <CircleArrowRight size={20} strokeWidth={1.4} />
          </Link>

          <span className="block text-green text-xl lg:text-2xl font-roboto">
            {formattedDate}
          </span>
        </div>

        <div className="space-y-6 order-3 lg:order-2 lg:col-span-4">
          <div className="text-white/80 font-roboto text-sm md:text-base leading-relaxed">
            {project.content}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-white/60 font-roboto text-sm lg:text-base uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects({ projects }) {
  return (
    <section className="py-20 bg-black" data-background="dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 md:gap-0">
          {projects?.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

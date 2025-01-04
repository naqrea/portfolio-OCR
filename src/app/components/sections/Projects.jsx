"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const formattedDate = `'${project.date.slice(2, 4)}`;

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="group relative border-t border-white/20 py-8 sm:py-12 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 items-center gap-6 md:gap-8 lg:gap-16">
          <div
            className="relative aspect-[4/3] w-full overflow-hidden order-1 md:col-span-4 lg:col-span-5 lg:order-3 cursor-pointer"
            onClick={() => openModal(project.image)}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 order-2 md:col-span-4 lg:col-span-4 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-roboto uppercase text-white">
              {project.title}
            </h3>

            <Link
              href={project.url || "#"}
              className="flex items-center justify-end gap-2 sm:gap-3 font-roboto bg-white text-black hover:bg-black hover:text-white border border-white px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base"
              target="_blank"
            >
              VISITER LE SITE
              <CircleArrowRight size={18} strokeWidth={1.4} />
            </Link>

            <span className="block text-green text-lg sm:text-xl lg:text-2xl font-roboto">
              {formattedDate}
            </span>
          </div>

          <div className="space-y-4 sm:space-y-6 order-3 md:col-span-8 lg:col-span-3 lg:order-2">
            <div className="text-white/80 font-roboto text-sm sm:text-base leading-relaxed">
              {project.content}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-white/60 font-roboto text-xs sm:text-sm lg:text-base uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-7xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project preview"
                className="w-full h-auto max-h-[90vh] object-contain"
                width={1920}
                height={1080}
                unoptimized
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-green transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Projects({ projects }) {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-black"
      data-background="dark"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-0">
          {projects?.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

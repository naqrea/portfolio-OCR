"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = ({ projects = [] }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    const newScrollPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative container mx-auto px-4 py-16 min-h-screen"
      id="projects"
    >
      <div className="absolute w-screen bg-black h-full top-0 -left-48 "></div>
      <div className="relative group h-fit">
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-green rounded-full p-4 border border-black hover:bg-white justify-center items-center"
          aria-label="Précédent"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-green rounded-full p-4 border border-black hover:bg-white justify-center items-center"
          aria-label="Suivant"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto md:overflow-x-hidden gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0"
        >
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex-none w-[85%] sm:w-[60%] md:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)] min-w-[280px] snap-start"
            >
              <div className="flex flex-col gap-4">
                <div className="flex relative border-b border-black h-16 gap-4 sm:gap-2">
                  <Link
                    href={project.url || "#"}
                    className="w-fit font-roboto border text-xl border-white py-2 px-4 text-white hover:scale-105 duration-300 flex items-center justify-center sm:justify-start gap-2 absolute right-0 bottom-2"
                  >
                    VISITER LE SITE
                    <Image
                      src="/images/navigateto.svg"
                      alt="Navigate to"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <div className="relative aspect-video w-full">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title || ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 30vw"
                    />
                  )}
                </div>
                <div className="bg-white border border-black p-4 md:p-8">
                  <h3 className="font-times italic text-3xl md:text-5xl mb-2 md:mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Array.isArray(project.category) &&
                      project.category.map((cat, index) => (
                        <span
                          key={`${project.slug}-cat-${index}`}
                          className="font-roboto uppercase text-xl "
                        >
                          {cat}
                        </span>
                      ))}
                  </div>
                  <div className="font-roboto leading-relaxed my-6 min-h-24 md:min-h-28">
                    {project.content}
                  </div>
                  <div className="flex flex-col  mt-6 place-self-end">
                    <span className="font-roboto text-xl ">STACK </span>
                    <div className="flex flex-wrap gap-4 ">
                      {Array.isArray(project.tags) &&
                        project.tags.map((tag, index) => (
                          <div
                            key={`${project.slug}-tag-${index}`}
                            className="relative group/tooltip"
                          >
                            <div className="w-8 h-8 relative hover:scale-110 transition-transform">
                              <Image
                                src={`/images/logos/${tag.toLowerCase()}.svg`}
                                alt={`${tag} logo`}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                              {tag}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

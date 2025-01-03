"use client";

import React from "react";
import ImageCarousel from "../ui/ImageCarousel";
import Image from "next/image";

export default function Landing({ projects }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row  ">
      <div className="container mx-auto ">
        <section className="relative min-h-screen flex flex-col justify-center items-center lg:flex-row lg:items-center z-10 pb-16 ">
          <div className="w-full ">
            <div className="flex flex-col  gap-2 sm:gap-4">
              <h1 className="font-times italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-black">
                Andrea Varela.
              </h1>
              <div className="font-roboto-mono place-self-start w-full text-xl sm:text-2xl md:text-3xl text-black flex flex-col sm:w-[248px]">
                <span className="lg:self-end">
                  PORTFOLIO <span className="font-semibold">'25</span>
                </span>
                <span>
                  WEB <span className="font-semibold">DEVELOPPER</span>{" "}
                </span>
                <span>
                  & UI <span className="font-semibold">DESIGNER</span>
                </span>
              </div>
            </div>
          </div>

          <a
            href="#projects"
            className="border-black border flex-col flex items-center justify-center mt-36  lg:self-end  hover:scale-105 transition-transform duration-500 w-fit  md:0 lg:0"
          >
            <div className="w-full">
              <ImageCarousel projects={projects} />
            </div>
            <div className="bg-[#ffffff] w-full p-4 flex justify-between items-center transition-all duration-300">
              <span className="font-roboto-mono text-sm sm:text-base">
                PARCOURIR <br />
                LES PROJETS
              </span>
              <Image
                src="/images/scrolldown.svg"
                alt="Scroll down"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}

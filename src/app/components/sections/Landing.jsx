"use client";

import React from "react";
import ImageCarousel from "../ui/ImageCarousel";
import { CircleArrowDown } from "lucide-react";
import { delay, motion } from "framer-motion";

export default function Landing({ projects }) {
  // Variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const portfolioLineVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 1.2,
      },
    },
  };

  const projectsSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="container mx-auto">
        <section className="relative min-h-screen md:gap-0 gap-16 flex flex-col justify-center items-center lg:flex-row lg:items-start z-10 lg:py-44 mt-10">
          <div className="md:w-full w-fit">
            <div className="flex flex-col gap-4">
              <motion.h1
                className="font-times italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-black"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                Andrea Varela.
              </motion.h1>

              <div className="font-roboto w-fit sm:text-4xl text-2xl md:text-5xl font-light text-black flex flex-col self-end md:self-start">
                <motion.span
                  className="self-end"
                  variants={portfolioLineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  PORTFOLIO <span className="font-normal">'25</span>
                </motion.span>

                <motion.span
                  variants={portfolioLineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="font-normal">WEB DEV</span>ELOPPER
                </motion.span>

                <motion.span
                  variants={portfolioLineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  & <span className="font-normal">UI DESIGN</span>ER
                </motion.span>
              </div>
            </div>
          </div>

          <motion.a
            href="#projects"
            className="border-black border flex-col flex items-center justify-center lg:self-end hover:scale-105 transition-transform duration-500 w-fit"
            variants={projectsSectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.5 }}
          >
            <div className="w-full">
              <ImageCarousel projects={projects} />
            </div>
            <div className="bg-[#ffffff] w-full px-6 py-3 flex justify-between items-center transition-all duration-300">
              <span className="font-roboto text-xl leading-tight">
                PARCOURIR <br />
                LES PROJETS
              </span>
              <CircleArrowDown size={32} strokeWidth={1.1} />
            </div>
          </motion.a>
        </section>
      </div>
    </div>
  );
}

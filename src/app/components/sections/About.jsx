"use client";

import Image from "next/image";
import { CircleArrowDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const imageCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <section
      className="w-full flex flex-col justify-between items-center my-32 pt-6"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col w-full gap-16">
          <motion.h2
            className="font-roboto w-fit text-4xl sm:text-4xl md:text-5xl lg:font-light text-black flex flex-col self-center md:self-start"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="self-end">HELLO!</span>
            <span>MOI, C'EST</span>
            <span>ANDREA</span>
          </motion.h2>

          <motion.div
            className="font-roboto text-black flex flex-col md:flex-row w-full md:w-1/2 self-center text-sm gap-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-1">
              J'ai toujours aimé créer, que ce soit à travers de l'illustration,
              de la conception graphique, de la création de blogs, ou d'autres
              petits projets digitaux.
            </div>
            <div className="flex flex-1">
              Diplômée du RNCP « Développeur Informatique » (niveau 5, bac+2),
              je suis en route pour continuer à me former avec le RNCP «
              Développeur Concepteur Logiciel » (niveau 6, bac+3/4). Ce chemin
              me permet de combiner deux choses que j'adore : la technique et la
              créativité. Chaque projet représente une étape dans mon
              apprentissage, et j'ai hâte de voir où tout ça me mènera.
            </div>
          </motion.div>

          <motion.div
            className="w-full sm:w-[400px] border border-black self-center md:self-end overflow-hidden"
            variants={imageCardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full sm:w-[400px] h-[266px]">
              <Image
                src="/images/about.png"
                alt="Photo d'Andrea"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#ffffff] w-full px-6 py-3 flex justify-between items-center transition-all duration-300 hover:bg-gray-50">
              <span className="font-roboto text-xl leading-tight">
                NICE, <br />
                FRANCE
              </span>
              <MapPin size={40} strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.a
        href="#gallery"
        className="font-roboto text-xl flex flex-col items-center justify-center pt-20 xl:pt-0"
        variants={linkVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <h3>DÉCOUVRIR MES ILLUSTRATIONS</h3>
        <CircleArrowDown size={40} strokeWidth={1} />
      </motion.a>
    </section>
  );
}

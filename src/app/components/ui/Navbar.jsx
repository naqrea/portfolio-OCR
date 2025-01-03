"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [hideLinks, setHideLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideLinks(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.7 },
        y: { duration: 0.7 },
      }}
      className="w-full px-8 py-4 flex justify-between items-center fixed top-0 z-20"
    >
      <a href="#" className="font-serif">
        <div>
          <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
        </div>
      </a>
      <div
        className={`flex gap-8 items-center transition-opacity duration-500 ${
          hideLinks ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <a
          href="#projects"
          className="font-roboto hover:text-green transition-colors"
        >
          PROJETS
        </a>
        <a
          href="#about"
          className="font-roboto hover:text-green transition-colors"
        >
          À PROPOS
        </a>
        <a
          href="#contact"
          className="font-roboto border border-black py-2 px-4 bg-[#ffffff] hover:bg-green transition-colors"
        >
          CONTACT
        </a>
      </div>
    </motion.nav>
  );
}

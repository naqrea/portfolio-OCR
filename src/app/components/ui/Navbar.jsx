"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = document.querySelectorAll(
        '[data-background="dark"]'
      );
      const navPosition = window.scrollY + 60; // Position approximative de la navbar

      let isOverDarkSection = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;

        if (navPosition >= sectionTop && navPosition <= sectionBottom) {
          isOverDarkSection = true;
        }
      });

      setIsOverDark(isOverDarkSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, staggerChildren: 0.1 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 0.3 },
      }}
      className="w-full flex justify-between items-center absolute top-0 z-20 fixed"
    >
      <a href="#" className="font-serif">
        <div className=" items-center fixed top-6 left-8 z-50">
          <Image
            src={isOverDark ? "/images/logowhite.svg" : "/images/logo.svg"}
            alt="Logo"
            width={32}
            height={32}
          />
        </div>
      </a>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50"
      >
        {isOpen ? (
          <X className="h-8 w-8 text-white" />
        ) : (
          <Menu
            className={`h-8 w-8 ${isOverDark ? "text-white" : "text-black"}`}
          />
        )}
      </button>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 right-0 h-screen w-screen md:w-[40vw] bg-black shadow-lg p-16 flex flex-col justify-end items-end text-end "
      >
        <motion.div
          className="flex flex-col gap-8 md:gap-10"
          variants={itemVariants}
        >
          {[
            { href: "#projects", text: "PROJETS" },
            { href: "#about", text: "À PROPOS" },
            { href: "#gallery", text: "GALERIE" },
            { href: "#contact", text: "CONTACT" },
          ].map((item) => (
            <motion.a
              key={item.text}
              href={item.href}
              className="font-roboto text-white text-3xl lg:font-light md:text-6xl"
              whileHover={{
                fontWeight: "normal",
              }}
              variants={itemVariants}
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}

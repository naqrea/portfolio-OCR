// Navigation.jsx
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = () => (
  <motion.ul
    variants={variants}
    className="p-6 absolute top-24 right-0 w-[230px]"
  >
    {[
      { href: "#projects", text: "PROJETS" },
      { href: "#about", text: "À PROPOS" },
      { href: "#contact", text: "CONTACT" },
    ].map((item) => (
      <motion.li
        key={item.text}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mb-6 list-none flex items-center cursor-pointer"
      >
        <a
          href={item.href}
          className="font-roboto hover:text-green transition-colors text-lg"
        >
          {item.text}
        </a>
      </motion.li>
    ))}
  </motion.ul>
);

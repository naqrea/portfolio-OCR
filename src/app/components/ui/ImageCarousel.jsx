import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 4000);

      return () => clearInterval(timer);
    }
  }, [isPaused, projects.length]);

  return (
    <div
      className="w-[296px] h-[168px] relative overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;

"use client";
import { motion } from "framer-motion";
import { logosSrc } from "./Intro/logosSrc";


export default function InfiniteSlider() {
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex space-x-14 w-max"
        animate={{ x: ["0%", "-50%"] }} // 🔥 Reduce el desplazamiento para que el inicio y final coincidan
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        {/* 🔥 Se repite 3 veces en lugar de 2 para eliminar espacios en blanco */}
        {[...logosSrc, ...logosSrc].map((logo, index) => (
          <div key={index} className="flex items-center justify-center lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20">
            <img 
              src={logo.src} 
              alt={logo.tech} 
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

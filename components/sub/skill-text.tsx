"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-6">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Tools & Technologies</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] md:text-[38px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Building with data, AI and modern web technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[18px] md:text-[20px] text-gray-300 mb-8 mt-[10px] text-center"
      >
        Research-driven development with practical, production-focused engineering.
      </motion.div>
    </div>
  );
};

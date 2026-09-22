"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 pt-32 lg:pt-40 w-full z-[20] gap-12"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center max-w-3xl text-center lg:text-left">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Data Science & Full-Stack Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[700px]"
        >
          <span>
            Hi, I&apos;m Sakil Ahmed Sheikh Reza.
          </span>
          <span>
            I build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Data, AI & Code.</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-3 max-w-[650px] leading-8"
        >
          Computer Science graduate from East West University with hands-on experience in AI/ML,
          NLP, graph-based recommendation systems, and full-stack development. I enjoy turning
          real-world data into intelligent, scalable systems.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          <Link
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            View Projects
          </Link>
          <Link
            href="/Sakil_Ahmed_Reza_CV.pdf"
            target="_blank"
            className="py-3 px-6 border border-[#7042f88b] text-white cursor-pointer rounded-lg hover:bg-white/10 transition"
          >
            Download CV
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-w-[430px] flex justify-center items-center"
      >
        <div className="relative rounded-3xl p-[3px] bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl shadow-purple-900/40">
          <div className="rounded-3xl overflow-hidden bg-[#030014]">
            <Image
              src="/profile.jpg"
              alt="Sakil Ahmed Sheikh Reza"
              width={600}
              height={800}
              priority
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

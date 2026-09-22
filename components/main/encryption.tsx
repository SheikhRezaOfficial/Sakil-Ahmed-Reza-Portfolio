"use client";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <section
      id="about-me"
      className="relative flex items-center justify-center min-h-[70vh] w-full px-6 py-24"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={slideInFromLeft(0.2)}>
          <div className="Welcome-box w-fit py-2 px-3 border border-[#7042f88b] mb-6">
            <span className="Welcome-text text-xs">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Curious about <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">intelligent systems.</span>
          </h2>
          <p className="text-gray-300 leading-8 text-base md:text-lg">
            I am a Computer Science graduate from East West University with a focus on Data Science.
            My work combines AI/ML, NLP, deep learning, graph-based recommendation systems, and
            full-stack development. I have worked with large real-world datasets and enjoy building
            systems that connect research ideas with practical applications.
          </p>
        </motion.div>

        <motion.div variants={slideInFromRight(0.4)} className="relative">
          <div className="rounded-2xl border border-[#7042f866] bg-[#0b0520]/80 p-8 shadow-2xl shadow-purple-900/20 backdrop-blur-sm">
            <div className="text-sm text-cyan-300 mb-4">Research Snapshot</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-5">
                <div className="text-3xl font-bold text-white">127K+</div>
                <div className="text-gray-400 mt-1 text-sm">Books in graph dataset</div>
              </div>
              <div className="rounded-xl bg-white/5 p-5">
                <div className="text-3xl font-bold text-white">63K+</div>
                <div className="text-gray-400 mt-1 text-sm">Users represented</div>
              </div>
              <div className="rounded-xl bg-white/5 p-5">
                <div className="text-3xl font-bold text-white">209K+</div>
                <div className="text-gray-400 mt-1 text-sm">Reviews connected</div>
              </div>
              <div className="rounded-xl bg-white/5 p-5">
                <div className="text-3xl font-bold text-white">3.04</div>
                <div className="text-gray-400 mt-1 text-sm">BSc final grade</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

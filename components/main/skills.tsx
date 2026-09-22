import { SkillText } from "@/components/sub/skill-text";
import { SKILLS } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 relative overflow-hidden py-20 px-6"
    >
      <SkillText />
      <div className="relative z-10 max-w-5xl flex flex-wrap justify-center gap-4 mt-4">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-[#7042f866] bg-[#12072b]/70 px-5 py-3 text-sm md:text-base text-gray-200 backdrop-blur-sm hover:border-cyan-400/60 hover:text-white transition"
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="w-full h-full absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

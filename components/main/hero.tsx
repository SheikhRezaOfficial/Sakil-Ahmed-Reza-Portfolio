import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 opacity-70"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

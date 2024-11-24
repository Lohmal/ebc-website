import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section className="relative flex flex-col h-full w-full" id="home">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1]   object-cover sm:object-contain "
      >
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </section>
  );
};

export default Hero;

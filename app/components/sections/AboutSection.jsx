import React from "react";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-20  flex justify-between  flex-col  px-5 md:px:10 lg:px-[50px]  items-center lg:py-28">
      <h2 className="font-semibold text-[3vw] text-center">
        Applying a cross-disciplinary expertise in crafting and executing
        tech-based solutions to optimize industrial operations.
      </h2>

      <h3 className="text-orange text-[2vw] text-center pt-20">
        We bring Creative ideas to life
      </h3>

      <div className="flex w-full pt-32 flex-row justify-between items-center">
        {/* IMAGES SCROLL ANIMATION */}
        <div className="w-[40%] h-56 bg-gray-light bg-opacity-30 "></div>
        {/* IMAGES SCROLL ANIMATION */}

        <p className="w-[45%]">
          we are passionate about crafting unique and compelling stories that
          resonate with your audience. As a full-service creative media agency,
          we blend innovation, strategy, and creativity to deliver impactful
          results.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

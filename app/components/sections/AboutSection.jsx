import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-20  about overflow-hidden flex justify-between  flex-col  px-5 md:px:10 lg:px-[50px]  items-center lg:py-28">
      <h2 className="font-semibold text-[3vw] text-center about-text1">
        Applying a cross-disciplinary expertise in crafting and executing
        tech-based solutions to optimize industrial operations.
      </h2>

      <div className="about-images">
        <h3 className="text-orange text-[5vw] font-semibold lg:text-[2vw] text-center pt-28 about-text2">
          We bring Creative ideas to life
        </h3>

        <div className=" flex-col flex w-full pt-12 md:pt-32 md:flex-row justify-between items-center">
          {/* IMAGES SCROLL ANIMATION */}
          <div className="w-full md:w-[40%] h-64 bg-gray-light bg-opacity-30 "></div>
          {/* IMAGES SCROLL ANIMATION */}

          <p className=" md:w-[45%]">
            we are passionate about crafting unique and compelling stories that
            resonate with your audience. As a full-service creative media
            agency, we blend innovation, strategy, and creativity to deliver
            impactful results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

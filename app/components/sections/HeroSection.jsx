import React from "react";
import Button from "../Button";
import AnimatedIcon from "../AnimatedIcon";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen py-24
     md:px-10 relative px-5   lg:px-44    flex justify-center items-center"
    >
      <div class="absolute bg-fixed left-0 top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px] bg-clip-padding"></div>
      <div className="w-full h-full items-center flex justify-center ">
        <div className=" w-full h-full flex-col  justify-center items-center text-center flex gap-y-5   ">
          <div className="my-auto flex flex-col gap-y-5 md:gap-y-10">
            <motion.h1 className=" text-[#fff] uppercase font-bold text-3xl xl:text-6xl ">
              WE are <span className="text-[#fc6400]   ">Creative</span>
              <br /> Design Agency
            </motion.h1>
            {/* line */}
            <div className=" w-20 md:w-36 h-[2px] bg-[#fc6400]"></div>
            {/* line */}
            <div className="">
              we blend creativity with innovation to craft unforgettable stories
              <br />
              and designs that captivate, inspire, and drive results
            </div>
            <Button name={"Get in touch"} path={"/contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

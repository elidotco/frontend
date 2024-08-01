import React from "react";
import Button from "../Button";

import { motion } from "framer-motion";
import GridPattern from "../ui/Card";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section
      className="w-full h-screen py-24
     md:px-10 relative px-5   lg:px-44    flex justify-center items-center"
    >
      <div className="w-full h-full fixed lg:pl-[600px] top-0 -z-10">
        <Spline scene="https://prod.spline.design/VnTMB8SjDL3UHj4G/scene.splinecode" />
      </div>

      {/* <GridPattern /> */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex "
      >
        <div className=" w-full h-full flex-col  justify-start  flex gap-y-5   ">
          <div className="my-auto flex flex-col  gap-y-5 md:gap-y-10">
            <motion.h1
              variants={item}
              className=" text-[#fff] uppercase font-bold text-3xl xl:text-6xl "
            >
              WE are <span className="  ">Creative</span>
              <br /> Design Agency
            </motion.h1>

            <motion.div className="" variants={item}>
              we blend creativity with innovation to craft unforgettable stories
              <br />
              and designs that captivate, inspire, and drive results
            </motion.div>
            <Button name={"Get in touch"} path={"/contact"} />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

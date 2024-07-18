import React from "react";
import Button from "../Button";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen py-24
     md:px-10 relative    flex justify-center items-center overflow-hidden "
    >
      <div className="w-full h-full  flex justify-between">
        <div className=" w-full  h-full flex-col items-center justify-center flex gap-y-5   ">
          <div className=" flex flex-col gap-y-5 items-center justify-center md:gap-y-10">
            <div className="flex flex-col gap-4">
              <h1 className=" capitalise font-bold text-center text-3xl xl:text-8xl leading- animate__animated animate__bounce animate__fadeInRight">
                <span>Creative</span> <br />
              </h1>
              <h1 className=" capitalise font-bold text-center text-3xl xl:text-8xl  animate__animated animate__bounce animate__fadeInLeft ">
                <span className="text-[#fc6400]">Solutions</span>
              </h1>
            </div>
            {/* line */}

            {/* line */}
            <div className="">
              we blend creativity with innovation to craft unforgettable stories
              <br />
              and designs that captivate, inspire, and drive results
            </div>
            <Button name={"Feel the Aura"} path={"/contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

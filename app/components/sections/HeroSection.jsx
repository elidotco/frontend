import React from "react";
import Button from "../Button";

const HeroSection = () => {
  return (
    <section
      className="w-full heightdud py-24
     md:px-10 relative px-5 lg:pl-48 lg:pr-0 -green   flex justify-center items-center   background1"
    >
      <div className="w-full h-full  flex justify-between">
        <div className=" w-full md:w-[60%] h-full flex-col  flex gap-y-5   ">
          <div className="my-auto flex flex-col gap-y-5 md:gap-y-10">
            <h1 className=" uppercase font-bold text-3xl xl:text-6xl ">
              WE are <span className="text-[#fc6400]   ">Creative</span>
              <br /> Design Agency
            </h1>
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
        <div className="w-1/2 h-full hidden md:flex "></div>
      </div>
    </section>
  );
};

export default HeroSection;

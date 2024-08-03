import React from "react";
import Button from "../Button";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen py-24
     md:px-10 relative px-5   lg:px-44    flex justify-center items-center"
    >
      <div className="w-full h-full flex ">
        <div className=" w-full h-full flex-col  justify-start  flex gap-y-5   ">
          <div className="my-auto flex flex-col  gap-y-5 md:gap-y-10">
            <h1 className=" text-[#fff] uppercase font-bold text-3xl xl:text-6xl ">
              WE are <span className="  ">Creative</span>
              <br /> Design Agency
            </h1>

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

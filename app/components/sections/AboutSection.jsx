import React from "react";
import Button from "../Button";

const AboutSection = () => {
  return (
    <section className="py-20  flex justify-between background2 flex-col md:flex-row px-5 md:px:10 lg:px-32  lg:py-20">
      {/* Image */}
      <div className="w-1/2 h-full "></div>
      {/* Image */}

      <div className=" w-full md:w-1/2 flex flex-col gap-y-4 pl-auto h-full ">
        <p className="uppercase text-orange">About Us</p>
        <h2 className="capitalize text-2xl">
          We bring <span className="text-orange">Creative</span> ideas to life
        </h2>
        {/* line */}
        <div className="w-20 h-[2px] bg-[#fff]"></div>

        {/* line */}
        <p className="text-orange uppercase">We love creating</p>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam,
          iste temporibus nostrum eligendi enim voluptatibus inventore saepe,
          adipisci maxime deserunt aspernatur reprehenderit illum? Quod deserunt
          ea nisi voluptatum aspernatur.
        </div>
        <Button name={"read more"} path={"/about"} />
      </div>
    </section>
  );
};

export default AboutSection;

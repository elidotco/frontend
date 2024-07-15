import React from "react";
import Button from "../Button";
import Image from "next/image";
import image from "@/public/about.png";

const AboutSection = () => {
  return (
    <section className="py-20  flex justify-between background2 flex-col md:flex-row px-5 md:px:10 lg:px-32  items-center lg:py-28">
      {/* Image */}
      <div className="w-1/2 h-full ">
        <Image
          src={image}
          className="w-full h-auto aspect-auto"
          alt="image of a creative bot"
        />
      </div>
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
          we are passionate about crafting unique and compelling stories that
          resonate with your audience. As a full-service creative media agency,
          we blend innovation, strategy, and creativity to deliver impactful
          results.
        </div>
        <Button name={"read more"} path={"/about"} />
      </div>
    </section>
  );
};

export default AboutSection;

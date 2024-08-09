import React from "react";
import Layers from "../ui/SectionLayers";

const AboutSection = () => {
  return (
    <>
      <section className="py-20 service flex justify-between  flex-col  px-5 md:px:10 lg:px-[50px]  items-center lg:py-28">
        <h3 className="text-orange text-[3vw] text-center ">
          Experience The power of Innovation.
        </h3>
        <h4 className="text-[2vw] pt-20 text-center service-text">
          we offer comprehensive services designed to elevate your brand and
          connect with your audience. Our team of experts is dedicated to
          bringing your vision to life with creativity, precision, and
          innovation. From brand strategy to digital marketing, we provide
          tailored solutions that drive results and set you apart in a crowded
          mass explore our diverse services and discover how we can help you
          achieve your goals:
        </h4>
      </section>

      {/* SERVICES SECTIONS  */}
      <Layers />
      {/* SERVICES SECTIONS  */}
    </>
  );
};

export default AboutSection;

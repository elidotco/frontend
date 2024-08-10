import React from "react";
import Layers from "../ui/SectionLayers";
import { ServiceCard } from "..";
import icon1 from "@/public/brand-identity.png";
import icon2 from "@/public/video-camera.png";
import icon3 from "@/public/social-media.png";
import icon4 from "@/public/Group (7).png";
import icon5 from "@/public/digital.png";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <section className="py-20 service  flex justify-between  flex-col  px-5 md:px:10 lg:px-[50px]  items-center lg:py-28">
        <h3 className="text-orange font-semibold  text-[2vw] text-center ">
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
      {/* SERVICES CARDS */}
      <div className="flex flex-wrap relative  w-full h-fit items-center justify-start  my-20 lg:pl-10">
        <ServiceCard image={icon1} name="Branding" />
        <ServiceCard image={icon2} name={"Photography"} />
        <ServiceCard image={icon5} name="Audio Visual" />
        <ServiceCard image={icon4} name="Web development" />
        <ServiceCard image={icon3} name="social Media Managing" />

        <Link
          href="/"
          className="transparent lg:absolute bottom-0 ml-10 md:ml-0 right-[50px] w-fit my-5 transition-all hover:text-[#000] hover:bg-[#fff] px-6 py-2 text-[#fff] border-2 border-[#fff] rounded-3xl hover:duration-150 duration-150"
        >
          Explore more Services
        </Link>
      </div>
      {/* SERVICES CARDS */}
    </>
  );
};

export default AboutSection;

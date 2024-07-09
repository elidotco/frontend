import React from "react";
import logo from "@/public/gr.svg";
import Image from "next/image";

const ServiceCard = ({ value }) => {
  return (
    <div
      className={` ${
        value === 3
          ? "bg-[#000]"
          : value === 0
          ? "background3"
          : value === 1
          ? "background4"
          : "background4"
      } + " md:w-1/2 w-full h-full md:h-1/2 flex items-center text-center text-md justify-center hover:bg-[#000] bg-opacity-20   hover:transition-all py-5 duration-100 hover:duration-100 transition-all flex-col px-5 "`}
    >
      {/* Logo */}
      <Image
        src={logo}
        alt="icon"
        width={100}
        height={100}
        className="w-1/3 h-auto"
      />
      {/* Logo */}
      <h3 className="text-orange font-semibold">VIDEO MARKETING</h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta esse
        quaerat magnam porro{" "}
      </p>
    </div>
  );
};

export default ServiceCard;

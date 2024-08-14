import React from "react";
import logo from "@/public/gr.svg";
import Image from "next/image";

const ServiceCard = ({ image, name }) => {
  return (
    <div className="w-full md:w-[30vw] lg:w-[30vw] h-fit py-10 pl-10 flex justify-start flex-col ">
      {/* Logo */}
      <Image
        src={image}
        alt="icon"
        width={100}
        height={100}
        className="w-[8vw] md:w-[5vw] h-auto"
      />
      {/* Logo */}
      <h3 className="text-orange text-[24px] font-light py-3">{name}</h3>
      <p className="text-sm font-extralight text-[#f1efef]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta esse
        quaerat magnam porro{" "}
      </p>

      <a href="#" className=" pt-4 text-[#fff]">
        learn more
        <div className="w-20 h-[1px] bg-orange"></div>
      </a>
    </div>
  );
};

export default ServiceCard;

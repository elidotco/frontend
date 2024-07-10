import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const TabCard = ({ num, name, icon }) => {
  return (
    <div className="flex flex-col p-5 items-center justify-center ">
      {/* Image */}
      <Image
        alt={name}
        src={icon}
        width={100}
        height={100}
        className="w-[60%] h-auto"
      />
      <div className="text-5xl font-bold">
        <CountUp end={num} />+
      </div>
      <p className="text-orange">{name} </p>
      {/* Image */}
    </div>
  );
};

export default TabCard;

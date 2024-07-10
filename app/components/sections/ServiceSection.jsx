import React from "react";
import Button from "../Button";
import { ServiceCard } from "..";
import TabCard from "../TabCard";
import icon from "@/public/members.png";
import icon1 from "@/public/projects.png";
import icon2 from "@/public/customers.png";
import icon3 from "@/public/awards.png";
const AboutSection = () => {
  return (
    <section>
      <div className=" flex justify-between flex-col-reverse lg:flex-row-reverse px-5 md:px:10 items-center lg:px-32 py-28">
        {/* Image */}
        <div className="w-full lg:w-1/2  sm:h-1/2 lg:h-full flex flex-wrap py-auto my-10 md:my-0 lg:pl-10">
          <ServiceCard value={0} />
          <ServiceCard value={1} />
          <ServiceCard />
          <ServiceCard value={3} />
        </div>
        {/* Image */}
        <div className=" w-full lg:w-1/2 flex flex-col gap-y-4 pl-auto h-full ">
          <p className="uppercase text-orange">Our Services</p>
          <h2 className="capitalize text-2xl font-bold">
            Experience The power of <br />
            <span className="text-orange">Innovation</span>.
          </h2>
          {/* line */}
          <div className="w-20 h-[2px] bg-[#fff]"></div>

          {/* line */}

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quam, iste temporibus nostrum eligendi enim voluptatibus inventore
            saepe, adipisci maxime deserunt aspernatur reprehenderit illum? Quod
            deserunt ea nisi voluptatum aspernatur.
          </div>
          <Button name={"read more"} path={"/services"} />
        </div>
      </div>

      {/* Analytics Section  */}
      <div className="flex justify-center md:justify-between background5 items-center flex-row  px-5 md:px:10  lg:px-32 py-10 flex-wrap ">
        <TabCard icon={icon} name="Team members" num={50} />
        <TabCard icon={icon1} name="Team members" num={50} />
        <TabCard icon={icon2} name="Team members" num={50} />
        <TabCard icon={icon3} name="Team members" num={50} />
      </div>
      {/* Analytics Section  */}
    </section>
  );
};

export default AboutSection;

import React from "react";
import Button from "../Button";

const HeroSection = () => {
  return (
    <section className="w-full  heightdud md:px-10 px-5 lg:pl-48 lg:pr-0 -green   flex justify-center items-center   background1">
      <div className="w-full h-full  flex justify-between">
        <div className="w-[60%] h-full flex-col  flex gap-y-5   ">
          <div className="my-auto flex flex-col gap-y-10">
            <h1 className=" uppercase font-bold xl:text-6xl ">
              WE are <span className="text-[#fc6400]   ">Creative</span>
              <br /> Design Agency
            </h1>
            {/* line */}
            <div className="w-36 h-[2px] bg-[#fc6400]"></div>
            {/* line */}
            <div className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              rerum fugiat eaque enim autem quas obcaecati suscipit maiores
              tenetur consequatur. Dolores dicta rem nobis corporis architecto
              assumenda asperiores nihil sunt?
            </div>
            <Button name={"Get in touch"} path={"/contact"} />
          </div>
        </div>
        <div className="w-1/2 h-full "></div>
      </div>
    </section>
  );
};

export default HeroSection;

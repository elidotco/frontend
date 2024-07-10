import React from "react";

const ProjectsSection = () => {
  return (
    <section className="w-full py-28">
      <div className=" w-full items-center justify-center flex flex-col gap-y-4 pl-auto h-full ">
        <h2 className="capitalize text-3xl font-bold text-center">
          Enjoy Our
          <span className="text-orange"> Latest</span>
          <br /> Projects
        </h2>
        {/* line */}
        <div className="flex items-center">
          <div className="w-20 h-[2px] bg-[#fff]"></div>
          <p className="uppercase text-orange">Our Work</p>
          <div className="w-20 h-[2px] bg-[#fff]"></div>
        </div>
        {/* line */}
      </div>
    </section>
  );
};

export default ProjectsSection;

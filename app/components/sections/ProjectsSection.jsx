import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
// Default theme
// import "@splidejs/react-splide/css";

// or other themes

// or only core styles
import "@splidejs/react-splide/css/core";
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

      <div className="p-20">
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,

            type: "loop",
            perPage: 4,
            gap: 30,
            pagination: true,
            autoplay: true,
            pauseOnHover: true,

            breakpoints: {
              500: {
                perPage: 1,
                gap: 0,
              },
              800: {
                perPage: 3,
              },
            },
            arrows: false,
          }}
        >
          <SplideSlide>
            <div className="w-full h-64 bg-orange"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-64 bg-orange"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-64 bg-orange"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-64 bg-orange"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-64 bg-orange"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-64 bg-orange"></div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default ProjectsSection;

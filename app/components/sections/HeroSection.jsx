import React from "react";
import Button from "../Button";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

const HeroSection = () => {
  const container = useRef();

  useGSAP(() => {
    // gsap code here...
    const herotl = gsap.timeline();

    herotl
      .fromTo(
        "nav",
        { opacity: 0, translateY: -100 },
        { opacity: 1, translateY: 0, duration: 0.6 }
      )
      .fromTo(
        ".herotext",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.in" }
      )
      .fromTo(
        ".text",
        { opacity: 0, translateY: 300 },
        { opacity: 1, translateY: 0, duration: 1, delay: 0.2 }
      );

    const showAnim = gsap
      .from("nav", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
        ease: "expo",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      markers: false,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        scrub: true,
        pin: false,
        start: "top bottom ",
        end: "+=100%",
      },
    });

    tl.from(
      ".about-text1",

      { opacity: 0, ease: "circ.inOut", duration: 1 }
    );
    var st = gsap.timeline({
      scrollTrigger: {
        trigger: ".service",
        scrub: true,
        pin: false,
        start: "top bottom ",
        end: "+=100%",
      },
    });

    st.from(
      ".service-text",

      { opacity: 0, ease: "circ.inOut", duration: 2 }
    );
  }, container);

  return (
    <section
      className="w-full h-screen bg-fixed bg-[#0E0D0D] overflow-y-hidden
     md:px-10 pt-28 md:pt-36 flex lg:justify-between flex-col pb-10  px-5 xl:px-[10vw]"
    >
      <div className="text-left ">
        <h1 className=" herotext text-orange lg:pl-10 w-full  font capitalise text-[35px] lg:text-[6vw] md:text-6xl ">
          We are a Creative Design
          <span className=" py-5 text-[#fff] "> Agency</span>
        </h1>
      </div>

      <div className="w-full md:w-[40%] lg:w-1/3 ml-auto mt-auto mb-20  pt-10 text flex flex-col">
        We blend creativity with innovation to craft unforgettable stories and
        designs that captivate, inspire, and drive results. By merging artistic
        vision with strategic thinking, we deliver impactful solutions that not
        only capture attention but also evoke emotions and encourage meaningful
        engagement
        <Link
          href="/"
          className="transparent w-fit my-5 transition-all hover:text-[#000] hover:bg-[#fff] px-6 py-1 text-[#fff] border-2 border-[#fff] rounded-3xl hover:duration-150 duration-150"
        >
          GET IN TOUCH
        </Link>
      </div>

      {/* <div className="w-full h-full flex ">
        <div className=" w-full h-full flex-col  justify-start  flex gap-y-5   ">
          <div className="my-auto flex flex-col  gap-y-5 md:gap-y-10">
            <h1 className=" text-[#fff] uppercase font-bold text-3xl xl:text-6xl ">
              WE are <span className="  ">Creative</span>
              <br /> Design Agency
            </h1>

            <div className="">
              we blend creativity with innovation to craft unforgettable stories
              <br />
              and designs that captivate, inspire, and drive results
            </div>
            <Button name={"Get in touch"} path={"/contact"} />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;

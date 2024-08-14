import React from "react";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="w-full bg-[#000]  pt-20 md:mt-20  relative bottom-0 px-5 md:px-10 lg:px-[100px] flex flex-col justify-center items-center">
      {/* CONTACT SECTION */}
      <div className="w-full md:w-[85vw] lg:w-[75vw] contact mx-auto flex items-center justify-center flex-col gap-y-14 border relative -top-40 py-20">
        <h3 className="font-bold text-4xl">READY FOR YOUR PROJECT,</h3>

        <button className="transparent px-6 py-1 text-[#fff] border-2 border-orange rounded-3xl hover:bg-orange hover::text-[#000] transition-all duration-150 hover:transition-all hover:duration-100">
          GET IN TOUCH
        </button>
      </div>
      {/* CONTACT SECTION */}
      <div className="md:w-[70vw]">
        <div
          className="flex w-full flex-col md:flex-row  justify-between
       items-center"
        >
          <h1 className="font-bold text-xl">
            <span className="text-[#fc6500]">AURA</span>
            MEDIA
            <span className="text-orange">.</span>
          </h1>

          <ul className=" font-light flex gap-10 items-center flex-col md:flex-row list-none ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        {/* SOCIAL ICONS */}
        <div className="md:ml-auto w-fit py-5  pb-36  flex gap-5">
          <a
            href="tiktok"
            className="hover:text-orange duration-300 hover:duration-300 text-[#fff]"
          >
            {" "}
            <SlSocialLinkedin size={24} />
          </a>
          <a
            href="d"
            className="hover:text-orange duration-300 hover:duration-300 text-[#fff]"
          >
            <SlSocialTwitter size={24} />
          </a>
          <a
            href="instagram"
            className="hover:text-orange duration-300 hover:duration-300 text-[#fff]"
          >
            <SlSocialInstagram size={24} />
          </a>
          <a
            href="youtube"
            className="hover:text-orange duration-300 hover:duration-300 text-[#fff]"
          >
            <SlSocialYoutube size={24} />
          </a>
        </div>
        {/* SOCIAL ICONS */}
      </div>

      {/* LINE */}
      <div className="mt-auto  w-full">
        <div className="w-full h-[1px] bg-orange"></div>
        <div className="flex flex-row items-center justify-between py-5">
          <p className="ml-auto">
            {" "}
            © 2022 Aura Media Hub. All rights reserved.
          </p>
        </div>
      </div>
      {/* LINE */}
    </footer>
  );
};

export default Footer;

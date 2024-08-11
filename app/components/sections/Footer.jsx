import React from "react";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="w-full bg-[#000] h-[50vh]  relative bottom-0 px-5 md:px-10 lg:px-[100px] flex flex-col justify-center items-center">
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
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
      {/* SOCIAL ICONS */}
      <div className="lg:ml-auto py-4 flex gap-4">
        <SlSocialLinkedin size={24} />
        <SlSocialTwitter size={24} />
        <SlSocialInstagram size={24} />
        <SlSocialYoutube size={24} />
      </div>
      {/* SOCIAL ICONS */}

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

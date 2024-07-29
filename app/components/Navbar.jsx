"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Navbar = () => {
  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact us", href: "/contact" },
  ];
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <motion.header
      initial={{ visibility: "hidden", translateY: -100 }}
      animate={{ visibility: "visible", translateY: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`  w-full h-14 pt-4 fixed top-0 bg-[#000] z-50  px-5 md:px-10 lg:px-56  items-center justify-between transition-all inset-x-0  duration-150 ${
        scrolling ? "bg-black transition-all duration-200 " : ""
      } `}
    >
      {/* Logo */}

      <nav
        className="flex items-center w-full justify-between"
        aria-label="Global"
      >
        <div className="">
          <Link href="/">
            <Image
              alt="logo image"
              src="/logo.png"
              width={100}
              height={100}
              priority="true"
              loading="eager"
              className=" w-auto  h-[40px] "
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm  leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white  px-5 md:px-10 lg:px-32 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="">
              <Link href="/">
                <Image
                  alt="logo image"
                  src="/logo1.webp"
                  width={100}
                  height={100}
                  loading="eager"
                  className=" w-auto md:w-[200px] h-[40px]"
                />
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="">
                <Link href="/">
                  <div className="relative h-[50px]  justify-center overflow-hidden  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56  px-6 py-3 cursor-pointer bg-[#2596be] flex flex-row items-center gap-1 ">
                    <span className="relative z-10 flex flex-row gap-1">
                      {" "}
                      <MdOutlineArrowRightAlt size={26} />
                      LET`S TALK
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Logo */}
    </motion.header>
  );
};

{
  /* <nav
  className={`md:flex gap-10 text-[whitesmoke] transition-all duration-75 ${
    scrolling ? " transition-all duration-100" : ""
  } hidden items-center`}
>
  <ul className="flex flex-row  gap-8">
    <li>
      <Link href="/">About</Link>
    </li>
    <li>
      <Link href="/">Services</Link>
    </li>
    <li>
      <Link href="/">Portfolio</Link>
    </li>
  </ul>
 
  <div className="px-4 py-2  hover:transition-all duration-100  hover:bg-blue-400 text-black bg-green-400 transition-all hover:duration-150">
    <Link href="/">Contact us</Link>
  </div>
 
</nav>; */
}

export default Navbar;

import React from "react";

const Nav = () => {
  return (
    <nav className="w-full nav h-20 fixed flex justify-between items-center px-5 md:px-10  xl:px-[50px] bg-[#0E0D0D] z-40">
      {/* Logo */}
      <h1 className="font-bold text-xl">
        <span className="text-[#fc6500]">AURA</span>
        MEDIA
        <span className="text-orange">.</span>
      </h1>
      {/* Logo */}

      {/* menu btn */}
      <button className="transparent px-6 py-1 text-[#fff] border-2 border-[#fff] rounded-3xl">
        MENU
      </button>
      {/* menu btn */}
    </nav>
  );
};

export default Nav;

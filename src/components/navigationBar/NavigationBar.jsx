import React from "react";

import cricLogo from "../../assets/pngegg (2).png";
import menu from "../../assets/hamburger.png";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-screen h-20 p-2 text-white bg-gray-900 shadow-xl">
      <div className="flex items-center">
        <img src={cricLogo} alt="Logo" className="p-1 w-14" />
        <h1 className="ml-3 cursor-pointer">CricLive</h1>
      </div>
      <div className="items-center hidden mr-8 sm:flex">
        <h1 className="mr-3 cursor-pointer">Matches</h1>
        <h1 className="mr-3 cursor-pointer">Teams</h1>
        <h1 className="mr-3 cursor-pointer">Series</h1>
        <h1 className="mr-3 cursor-pointer">News</h1>
      </div>
      <img src={menu} alt="Menu" className="w-6 mr-2 sm:hidden " />
    </nav>
  );
};

export default NavigationBar;

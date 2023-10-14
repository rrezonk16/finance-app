import React from "react";
import logo from "../images/finance-app-js-logo-1.svg";
const Navbar = () => {
 
  return (
    <div>
      <nav className=" border-gray-200 bg-background dark:border-gray-900 mx-auto max-w-screen-xl p-4">
        <div className="flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className=" md:my-8 my-2" />
    
          </a>

          <div className="flex items-center">
         
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

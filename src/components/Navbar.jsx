import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-gray-200 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l sticky top-0 bg-[#202121] z-50">
      <h1 className="text-3xl font-bold ml-4">Aalyan Akmal</h1>
      <ul className="hidden md:flex z-50">
        <li className="p-5">
          <a href="#about" className="custom-nav">
            About Me
          </a>
        </li>
        <li className="p-5">
          <a href="#education" className="custom-nav">
            Education
          </a>
        </li>
        <li className="p-5">
          <a href="#skill" className="custom-nav">
            Skills
          </a>
        </li>
        <li className="p-5">
          <a href="#experience" className="custom-nav">
            Experience
          </a>
        </li>
        <li className="p-5">
          <a href="#project" className="custom-nav">
            Projects
          </a>
        </li>
        <li className="p-5">
          <a href="#certificate" className="custom-nav">
            Certificates
          </a>
        </li>
        <li className="p-5">
          <a
            href="#contact"
            className="font-bold px-4 py-2 rounded-xl bg-primary-color"
          >
            Contact
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="z-50 block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-50 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Aalyan Akmal</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2 hover:text-primary-color">
            <a href="#about" className="custom-nav">
              About Me
            </a>
          </li>
          <li className="p-2">
            <a href="#education" className="custom-nav">
              Education
            </a>
          </li>
          <li className="p-2">
            <a href="#skill" className="custom-nav">
              Skills
            </a>
          </li>
          <li className="p-2">
            <a href="#experience" className="custom-nav">
              Experience
            </a>
          </li>
          <li className="p-2">
            <a href="#project" className="custom-nav">
              Projects
            </a>
          </li>
          <li className="p-2">
            <a href="#certificate" className="custom-nav">
              Certificate
            </a>
          </li>
          <li className="p-2">
            <a href="#contact" className="custom-nav">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

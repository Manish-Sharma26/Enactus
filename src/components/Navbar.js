import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import enactus from "../assets/enactusNavbarLogo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="glass mt-0 md:mt-3 fixed w-full md:w-[98%] m-0 md:mx-5 z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <img src={enactus} alt="Logo" className="h-[50px] mb-3" />
          </div>
          {/* Menu icon for mobile screens */}
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaBars />
            </button>
          </div>
          {/* Links */}
          <motion.div 
            className={`md:flex md:items-baseline space-x-4 hidden`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#gallery"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Gallery
            </a>
            <a
              href="#team"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </a>
            <a
            href="https://enactus.org/"
            target="_blank"
            rel="noopener noreferrer"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Enactus Worldwide
            </a>
          </motion.div>
          <div className={`${showMenu ? "block" : "hidden"} flex items-center justify-center flex-col absolute top-[46px] right-[2rem] p-3 rounded-lg rounded-tr-none bg-gray-600 text-white`}>
          <a
              href="#home"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#gallery"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Gallery
            </a>
            <a
              href="#team"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </a>
            <a
              href="https://enactus.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:bg-gray-900 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Enactus Worldwide
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

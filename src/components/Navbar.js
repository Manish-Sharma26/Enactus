import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import enactus from "../assets/enactusNavbarLogo.png";
import { useHistory, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const history = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      handleSmoothScroll("home");
    } else {
      history("/");
    }
  };

  return (
    <nav className="glass left-0 z-20 mt-0 fixed w-full m-0 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex" onClick={handleHomeClick}>
            <img src={enactus} alt="Logo" className="h-[50px] mb-3" />
          </a>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaBars />
            </button>
          </div>
          <motion.div 
            className={`md:flex md:items-baseline space-x-4 hidden`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              onClick={() => { handleHomeClick("home"); setActiveLink("home"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "home" ? "bg-gray-600" : ""}`}
            >
              Home
            </a>
            <a
              onClick={() => { handleSmoothScroll("about"); setActiveLink("about"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "about" ? "bg-gray-600" : ""}`}
            >
              About
            </a>
            <a
              onClick={() => { handleSmoothScroll("projects"); setActiveLink("projects"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "projects" ? "bg-gray-600" : ""}`}
            >
              Projects
            </a>
            <a
              onClick={() => { handleSmoothScroll("gallery"); setActiveLink("gallery"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "gallery" ? "bg-gray-600" : ""}`}
            >
              Gallery
            </a>
            <a
              onClick={() => { handleSmoothScroll("team"); setActiveLink("team"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "team" ? "bg-gray-600" : ""}`}
            >
              Team
            </a>
            <a
              onClick={() => { handleSmoothScroll("contact"); setActiveLink("contact"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "contact" ? "bg-gray-600" : ""}`}
            >
              Contact Us
            </a>
            <a
              href="https://enactus.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
            >
              Enactus Worldwide
            </a>
          </motion.div>
          <div className={`${showMenu ? "block" : "hidden"} flex items-center justify-center flex-col absolute top-[46px] right-[2rem] p-3 rounded-lg rounded-tr-none bg-gray-600 text-white`}>
            <a
              onClick={() => { handleHomeClick("home"); setActiveLink("home"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "home" ? "bg-gray-600" : ""}`}
            >
              Home
            </a>
            <a
              onClick={() => { handleSmoothScroll("about"); setActiveLink("about"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "about" ? "bg-gray-600" : ""}`}
            >
              About
            </a>
            <a
              onClick={() => { handleSmoothScroll("projects"); setActiveLink("projects"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "projects" ? "bg-gray-600" : ""}`}
            >
              Projects
            </a>
            <a
              onClick={() => { handleSmoothScroll("gallery"); setActiveLink("gallery"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "gallery" ? "bg-gray-600" : ""}`}
            >
              Gallery
            </a>
            <a
              onClick={() => { handleSmoothScroll("team"); setActiveLink("team"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "team" ? "bg-gray-600" : ""}`}
            >
              Team
            </a>
            <a
              onClick={() => { handleSmoothScroll("contact"); setActiveLink("contact"); }}
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activeLink === "contact" ? "bg-gray-600" : ""}`}
            >
              Contact Us
            </a>
            <a
              href="https://enactus.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
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

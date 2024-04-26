import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import enactus from "../assets/enactusNavbarLogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeSection }) => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHomeClick = (link) => {
    if (window.location.pathname === "/") {
      handleSmoothScroll(link);
    } else {
      history("/");
    }
  };

  return (
    <nav className="glass left-0 z-20 mt-0 fixed w-full m-0 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex" onClick={()=>{handleHomeClick("home")}}>
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
            <NavLink
              label="Home"
              id="home"
              handleHomeClick={handleHomeClick}
              active={activeSection === "home"}
            />
            <NavLink
              label="About"
              id="about"
              handleHomeClick={handleHomeClick}
              active={activeSection === "about"}
            />
            <NavLink
              label="Projects"
              id="projects"
              handleHomeClick={handleHomeClick}
              active={activeSection === "projects"}
            />
            <NavLink
              label="Gallery"
              id="gallery"
              handleHomeClick={handleHomeClick}
              active={activeSection === "gallery"}
            />
            <NavLink
              label="Team"
              id="team"
              handleHomeClick={handleHomeClick}
              active={activeSection === "team"}
            />
            <NavLink
              label="Contact Us"
              id="contact"
              handleHomeClick={handleHomeClick}
              active={activeSection === "contact"}
            />
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
            <NavLink
              label="Home"
              id="home"
              handleHomeClick={handleHomeClick}
              active={activeSection === "home"}
            />
            <NavLink
              label="About"
              id="about"
              handleHomeClick={handleHomeClick}
              active={activeSection === "about"}
            />
            <NavLink
              label="Projects"
              id="projects"
              handleHomeClick={handleHomeClick}
              active={activeSection === "projects"}
            />
            <NavLink
              label="Gallery"
              id="gallery"
              handleHomeClick={handleHomeClick}
              active={activeSection === "gallery"}
            />
            <NavLink
              label="Team"
              id="team"
              handleHomeClick={handleHomeClick}
              active={activeSection === "team"}
            />
            <NavLink
              label="Contact Us"
              id="contact"
              handleHomeClick={handleHomeClick}
              active={activeSection === "contact"}
            />
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

const NavLink = ({ label, id, handleHomeClick, active }) => {
  return (
    <a
    onClick={()=>{handleHomeClick(id)}}
      className={`text-gray-300 hover:bg-gray-600 transition-all duration-150 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${active ? "bg-gray-600" : ""}`}
    >
      {label}
    </a>
  );
};

export default Navbar;

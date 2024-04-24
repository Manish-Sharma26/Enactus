import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for smooth image transition
import Logo from "../assets/logowhite.png";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://enactus-mnnit.netlify.app/img/bgImage.jpg",
    "https://enactus-mnnit.netlify.app/img/bgImage.jpg",
    "https://enactus-mnnit.netlify.app/img/bgImage.jpg",
  ];
  const texts = ["WELCOME TO OFFICIAL PAGE OF ENACTUS MNNIT ALLAHABAD", "WHO TAKE ENTREPRENEURIAL ACTION FOR OTHERs ", "Welcome to the MNNIT Campus"];
  const subtexts = ["WE BELIEVE INVESTING IN STUDENTS", "Lorem ipsum dolor sit amet consectetur, adipisicing", "SuLorem ipsum dolor sit amet consectetur, adipisicing elit."];
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-screen h-screen relative" id="home">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // For smooth exit transition
          transition={{ duration: 1 }} // Adjust transition duration as needed
        >
          <div className="absolute inset-0" style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
            <div className="absolute inset-0 bg-black opacity-80 object-cover"></div>
            <motion.div className="absolute text-center inset-0 flex items-center flex-col gap-5 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <motion.img src={Logo} className="md:h-[180px] h-[120px]" alt="Logo" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} />
              <motion.h1 className="text-white bebas md:text-7xl font-bold uppercase text-4xl" key={texts[currentImageIndex]} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
                {texts[currentImageIndex]}
              </motion.h1>
              <motion.h1 className="text-gray-400 text-center text-lg bebas md:text-5xl w-[98%] mx-auto" key={subtexts[currentImageIndex]} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
                {subtexts[currentImageIndex]}
              </motion.h1>
              <a href="#about" className="button-77" role="button" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
                About Us
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Header;

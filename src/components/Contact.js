import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Change this threshold as needed
    triggerOnce: true, // Ensures the animation only happens once
  });

  return (
    <div ref={ref} className="w-full flex items-center justify-center flex-col" id="contact">
        <div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center flex-col justify-center gap-4 ">
            <h1 className="text-3xl mt-10 mb-10 md:text-7xl bebas">Contact Us</h1>
          </div>
          <div className="px-3 md:px-10 lg:px-20 mb-10 flex flex-col gap-8 m-auto max-w-lg lg:max-w-3xl justify-center">
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaLocationDot fontSize={30} className="text-blue-900" />
              <span className="text-sm md:text-base">
                Motilal Nehru National Institute of Technology Teliarganj,
                Allahabad <br />
                Uttar Pradesh (211004), India
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MdEmail fontSize={30} className="text-blue-900" />
              <span>enactusmnnitallahabad@gmail.com</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <MdLocalPhone fontSize={30} className="text-blue-900" />
              <span>+91 8340556926</span>
            </motion.div>
            <motion.div
  className="flex items-center gap-7"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  <a href="https://www.instagram.com/enactus_mnnit/" target="_blank" rel="noopener noreferrer">
    <FaInstagram fontSize={30} className="text-blue-900" />
  </a>
  <a href="https://www.youtube.com/channel/UCA4d5xXy13G5iOslOG6AjXA" target="_blank" rel="noopener noreferrer">
    <FaYoutube fontSize={30} className="text-blue-900" />
  </a>
  <a href="https://www.facebook.com/enactusmnnit/" target="_blank" rel="noopener noreferrer">
    <FaFacebook fontSize={30} className="text-blue-900" />
  </a>
</motion.div>

          </div>
          <motion.div
            className="bg-black w-full flex items-center justify-center text-white p-5 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Enactus MNNIT Allahabad
          </motion.div>
        </div>
    </div>
  );
};

export default Contact;

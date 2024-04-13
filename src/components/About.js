import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Text from './Text'
import bg from "../assets/Final-Round-2.png";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div className="flex items-center flex-col relative" style={{background:`url(${bg})`}} id="about">
      <div className="flex w-full items-center justify-center h-[100px]">
        <h1 className="text-7xl underline">ABOUT &nbsp; US</h1>
      </div>
      <div ref={ref} className="flex mt-10 gap-7 flex-wrap items-center justify-center w-full">
        <motion.iframe
          className="w-full md:w-[500px] h-[315px] md:h-[315px]"
          src="https://www.youtube.com/embed/1U3zF6ll27E?si=9WtqN0-xCdsO22M_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        ></motion.iframe>
        <motion.div 
          className="w-full md:w-[40%] mx-3 p-2 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <Text/>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Text from './Text'
import bg from "../assets/Final-Round-2.png"
const About = () => {
  return (
    <div className="h-screen flex items-center flex-col" style={{background:`url(${bg})`}} id="about">
      <div className="flex w-full items-center justify-center h-[100px]">
        <h1 className="text-7xl underline">ABOUT &nbsp; US</h1>
      </div>
      <div className="flex mt-10 gap-7 flex-wrap items-center justify-center w-full">
        <iframe
          className="w-full md:w-[500px] h-[315px] md:h-[315px]"
          src="https://www.youtube.com/embed/1U3zF6ll27E?si=9WtqN0-xCdsO22M_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="w-[40%] flex items-center justify-center"><Text/></div>
      </div>
    </div>
  );
};

export default About;

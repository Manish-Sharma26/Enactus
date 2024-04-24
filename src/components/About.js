import React from "react";
import Text from './Text'
import bg from "../assets/Final-Round-2.png";

const About = () => {
  return (
    <div className="flex flex-col items-center relative" style={{ background: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }} id="about">
      <div className="flex w-full items-center justify-center h-[100px]">
        <h1 className="text-4xl md:text-7xl bebas">ABOUT &nbsp;US</h1>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-7 items-center justify-center w-full">
        <iframe
          className="w-full md:w-[500px] h-[315px] md:h-[315px]"
          src="https://www.youtube.com/embed/1U3zF6ll27E?si=9WtqN0-xCdsO22M_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-full md:w-[40%] mx-3 p-2 flex items-center justify-center">
          <Text />
        </div>
      </div>
    </div>
  );
};

export default About;

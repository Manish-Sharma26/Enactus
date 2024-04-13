import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaInstagram,FaYoutube,FaFacebook } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col" id="contact">
      <div className="flex items-center flex-col justify-center h-[150px] gap-4 ">
        <h1 className="text-7xl underline">Contact Us</h1>
      </div>
      <div className="p-3 md:p-20 flex flex-col gap-8">
        <div className="flex items-center gap-5">
          <FaLocationDot fontSize={30} className="text-blue-900" />
          Motilal Nehru National Institute of Technology Teliarganj, Allahabad{" "}
          <br />
          Uttar Pradesh (211004), India
        </div>
        <div className="flex items-center gap-5">
          <MdEmail fontSize={30} className="text-blue-900" />
          enactusmnnitallahabad@gmail.com
        </div>
        <div className="flex items-center gap-5">
          <MdLocalPhone fontSize={30} className="text-blue-900" />
          +91 8340556926
        </div>
        <div className="flex items-center  gap-7">
          <FaInstagram fontSize={30} className="text-blue-900" />
          <FaYoutube fontSize={30} className="text-blue-900" />
          <FaFacebook fontSize={30} className="text-blue-900" />
          
        </div>
      </div>
        <div className="bg-black w-full flex items-center justify-center text-white p-10">Enactus MNNIT Allahbad</div>
    </div>
  );
};

export default Contact;

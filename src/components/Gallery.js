import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectsData from "./data.json"; // Importing the data.json file

const Gallery = React.forwardRef((props,ref) => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 10;

  // Go to data .json to add more images in gallery and it will reflect inside the website


  const totalPages = Math.ceil(projectsData.projects.length / imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };


  return (
    <div ref={ref} className="w-screen bg-white" id="gallery">
      <motion.div>
        <div className="flex items-center justify-center h-[100px] ">
          <h1 className="text-7xl bebas  mt-10 mb-10">Gallery</h1>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {projectsData.projects
            .slice(
              currentPage * imagesPerPage,
              (currentPage + 1) * imagesPerPage
            )
            .map((project, index) => (
              <figure>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[250px] h-[250px] object-cover bg-black rounded-md"
                />
                <figcaption className="text-sm">{project.name}</figcaption>
              </figure>
            ))}
        </div>
        <div className="flex p-5 justify-center mt-4">
          {currentPage > 0 && (
            <button
              onClick={prevPage}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Previous
            </button>
          )}
          {currentPage < totalPages - 1 && (
            <button
              onClick={nextPage}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Next
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
});

export default Gallery;

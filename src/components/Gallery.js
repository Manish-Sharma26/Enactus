import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://images.unsplash.com/photo-1709491135369-4b65470fc8ae?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMjkxODA1MQ&ixlib=rb-4.0.3&q=80&w=800');
      const fetchedImages = Array.from({ length: 24 }, () => response.url);
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 8;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className='w-screen bg-white' id='gallery'>
      {inView && (
        <motion.div
          className='w-full'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex items-center justify-center h-[100px] '>
            <h1 className='text-7xl underline'>Gallery</h1>
          </div>
          <div className='flex flex-wrap gap-5 items-center justify-center my-8'>
            {images.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage).map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className='w-[300px]'
                initial={{ opacity: 0, x: Math.random() * 2000 - 1000, y: Math.random() * 2000 - 1000 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            ))}
          </div>
          <div className='flex p-5 justify-center mt-4'>
            <button onClick={prevPage} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>
              Previous
            </button>
            <button onClick={nextPage} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'>
              Next
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;

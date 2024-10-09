import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Moonj = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();  // Initialize useNavigate
  const images = [
    "https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(2).jpg",
    "https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(3).jpg",
    "https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(4).jpg"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  const handleBackClick = () => {
    navigate('/');  // Navigate to home page first
    window.scrollTo(0,0);
    setTimeout(() => {
      const projectSection = document.querySelector('#projects');  // Target the projects section by ID
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to the project section
      }
    }, 500);  // Delay to ensure navigation completes
  };

  return (
    <div className="container mx-auto px-8 py-12 mt-7">
    <div className="flex flex-col mt-5 lg:flex-row gap-8">
      <div className="container mx-auto pl-12 lg:w-1/2">
        <h1 className="text-4xl bebas font-bold mb-8">About Project Moonj</h1>
          <div className="text-lg mb-8">
            <p>
              "Project Moonj" aims to empower rural communities by harnessing the potential of natural resources like moonj grass. Moonj grass, abundant in rural areas, is traditionally used for making mats and baskets.
            </p> <br /><br />
            <p>
              Through this project, we seek to enhance the economic prospects of rural artisans by introducing innovative products made from moonj grass. These products not only preserve traditional craftsmanship but also offer sustainable livelihood opportunities.
            </p> <br /><br />
            <p>
              By promoting the use of moonj grass in various handicrafts and products, we aim to create a market for these eco-friendly alternatives. This not only benefits the artisans but also contributes to environmental conservation.
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Key Objectives:</h2>
          <ul className="list-disc ml-8">
            <li>Empower rural artisans</li>
            <li>Promote sustainable livelihoods</li>
            <li>Preserve traditional craftsmanship</li>
            <li>Create a market for eco-friendly products</li>
          </ul>
        </div>
        <div className="lg:w-1/2 relative h-[550px] flex items-center justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Neer Image ${index + 1}`}
              className={`absolute rounded-md h-[550px] w-full object-cover top-0 left-0  transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
      {/* Back Button */}
      <button 
    onClick={handleBackClick}
    className="mt-6 ml-14 px-4 py-2 bg-black text-white rounded-full border border-gray-500 hover:bg-gray-700 shadow-md"
>
    Back to Home
</button>

    </div>
  );
};

export default Moonj;

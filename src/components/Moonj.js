import React, { useState, useEffect } from 'react';

const Moonj = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(2).jpg",
    "https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(3).jpg",
    "https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(4).jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  return (
    <div className="container mx-auto px-8 py-12 mt-7">
      <h1 className="text-4xl font-bold mb-8 bebas">Project Moonj</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="container mx-auto py-12 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-8">About Project Moonj</h1>
          <div className="text-lg mb-8">
            <p>
              "Project Moonj" aims to empower rural communities by harnessing the potential of natural resources like moonj grass. Moonj grass, abundant in rural areas, is traditionally used for making mats and baskets.
            </p>
            <p>
              Through this project, we seek to enhance the economic prospects of rural artisans by introducing innovative products made from moonj grass. These products not only preserve traditional craftsmanship but also offer sustainable livelihood opportunities.
            </p>
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
        <div className="lg:w-1/2 relative flex items-center justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Moonj Image ${index + 1}`}
              className={`absolute rounded-md h-[550px] w-full object-cover top-0 left-0  transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moonj;

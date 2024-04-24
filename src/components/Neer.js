import React from 'react';

const Neer = () => {
  return (
    <div className="container mx-auto px-8 py-12 mt-7">
      <h1 className="text-4xl font-bold mb-8 bebas">Project Neer</h1>
      <div className="flex flex-col lg:flex-row gap-8">
      <div className="container mx-auto py-12 lg:w-1/2">
      <h1 className="text-4xl font-bold mb-8">About Project NEER</h1>
      <div className="text-lg mb-8">
        <p>
          "Project NEER" is dedicated to reviving the traditional craftsmanship of pottery in Prayagraj, India. With a focus on uplifting the potter community and addressing environmental concerns, the project aims to create water purifiers using locally sourced mud pots.
        </p>
        <p>
          The main goal is to provide an alternative to plastic water purifiers while also creating additional income opportunities for potters. By utilizing ceramic candles for filtration, the project offers a sustainable and cost-effective solution for communities with limited access to clean water.
        </p>
        <p>
          Extensive market surveys, collaboration with potters, and testing of prototype filters have been conducted to ensure the effectiveness and feasibility of the project. Through "Project NEER," we strive to promote eco-friendly practices and empower local communities.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
      <ul className="list-disc ml-8">
        <li>Revives traditional pottery craftsmanship</li>
        <li>Reduces plastic usage</li>
        <li>Utilizes locally sourced materials</li>
        <li>Provides eco-friendly water filtration</li>
        <li>Creates additional income opportunities</li>
      </ul>
    </div>
        <div className="lg:w-1/2">
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(2).jpg"} alt="Neer Image 1" className="mb-4 rounded-lg shadow-lg" />
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(5).jpg"} alt="Neer Image 2" className="mb-4 rounded-lg shadow-lg" />
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(6).jpg"} alt="Neer Image 3" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Neer;

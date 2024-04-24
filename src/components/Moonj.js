import React from 'react';

const Moonj = () => {
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
        <div className="lg:w-1/2">
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(2).jpg"} alt="Moonj Image 1" className="mb-4 rounded-lg shadow-lg" />
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(3).jpg"} alt="Moonj Image 2" className="mb-4 rounded-lg shadow-lg" />
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(4).jpg"} alt="Moonj Image 3" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Moonj;

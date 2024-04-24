import React from 'react';

const Sahyog = () => {
  return (
    <div className="container mx-auto px-8 py-12 mt-7">
      <h1 className="text-4xl font-bold mb-8 bebas">Project Sahyog</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="container mx-auto py-12 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-8">About Project Sahyog</h1>
          <div className="text-lg mb-8">
            <p>
              "Project Sahyog" aims to foster collaboration and support among communities in Prayagraj, India. With a focus on empowering local residents and addressing societal challenges, the project seeks to create sustainable solutions through collective action.
            </p>
            <p>
              By promoting collaboration and resource-sharing, "Project Sahyog" endeavors to strengthen community bonds and enhance social cohesion. Through initiatives such as skill development workshops, educational programs, and community outreach, the project aims to create a positive impact and drive meaningful change.
            </p>
            <p>
              The project team works closely with community leaders, stakeholders, and volunteers to implement impactful projects and initiatives. Together, we strive to build a more inclusive and resilient society where everyone has the opportunity to thrive.
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Key Objectives:</h2>
          <ul className="list-disc ml-8">
            <li>Promote collaboration and support among communities</li>
            <li>Empower local residents through skill development and education</li>
            <li>Address societal challenges through collective action</li>
            <li>Strengthen community bonds and social cohesion</li>
            <li>Drive meaningful change and create a positive impact</li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/sahyog/sahyog%20(1).jpg"} alt="Sahyog Image 1" className="mb-4 rounded-lg shadow-lg" />
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/sahyog/sahyog%20(2).jpg"} alt="Sahyog Image 2" className="mb-4 rounded-lg shadow-lg" />
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/sahyog/sahyog%20(3).jpg"} alt="Sahyog Image 2" className="mb-4 rounded-lg shadow-lg" />

         </div>
         </div>
         </div>
  )
};

export default Sahyog;
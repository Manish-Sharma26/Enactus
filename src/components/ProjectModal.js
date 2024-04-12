import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ProjectModal = ({ project, onClose }) => {
  const [showModal, setShowModal] = useState(true);

  // Animation spring for modal
  const modalAnimation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = () => {
    setShowModal(false);
    setTimeout(onClose, 300); // Wait for the animation to complete before closing
  };

  return (
    <animated.div style={modalAnimation} className="fixed w-screen h-screen inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-screen h-screen rounded-lg shadow-lg overflow-hidden">
        <img src={project.image} alt={project.name} className="w-[300px] h-[200px]" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
          {/* Add any other information about the project */}
          <button onClick={closeModal} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md">Close</button>
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectModal;

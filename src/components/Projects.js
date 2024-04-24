import React, { useState } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useInView } from "react-intersection-observer";
import bg from "../assets/image.png"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const handleOpen = (data) => {
    setOpen(true);
    setData(data);
  };
  const handleClose = () => setOpen(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="mb-6 pb-7 w-screen relative"
      id="projects"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "" }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(255, 255, 255, 0.9)" }}></div> {/* White overlay */}
      {inView && (
        <motion.div
          className="flex gap-2 flex-wrap flex-col items-center justify-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center h-[100px] ">
            <h1 className="text-7xl bebas">Projects</h1>
          </div>
          <div className="flex gap-8 flex-wrap items-center justify-center">
            <button
              onClick={() => {
                handleOpen(1);
              }}
            >
              <figure>
                <img
                  src={
                    "https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(2).jpg"
                  }
                  className="h-[400px]  w-[300px] object-cover"
                  alt="Mountains"
                />
                <figcaption>Project Neer</figcaption>
              </figure>
            </button>
            <button
              onClick={() => {
                handleOpen(2);
              }}
            >
              <figure>
                <img
                  src={
                    "https://enactus-mnnit.netlify.app/img/enactus/sahyog/sahyog%20(1).jpg"
                  }
                  className="h-[400px]  w-[300px] object-cover"
                  alt="Mountains"
                />
                <figcaption>Project Sahyog</figcaption>
              </figure>
            </button>
            <button
              onClick={() => {
                handleOpen(3);
              }}
            >
              <figure>
                <img
                  src={
                    "https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(4).jpg"
                  }
                  className="h-[400px] w-[300px] object-cover"
                  alt="Mountains"
                />
                <figcaption>Project Moonj</figcaption>
              </figure>
            </button>
            <button
              onClick={() => {
                handleOpen(4);
              }}
            >
              <figure>
                <img
                  src={
                    "https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(3).jpg"
                  }
                  className="h-[400px]  w-[300px] object-cover"
                  alt="Mountains"
                />
                <figcaption>Project Samvesh</figcaption>
              </figure>
            </button>
          </div>
        </motion.div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="h-screen w-screen">
          <button
            onClick={handleClose}
            className="bg-blue-700 fixed text-white rounded-md p-3"
          >
            Close
          </button>
          <div className="flex items-center justify-center overflow-y-scroll h-screen">
            {data === 1 ? (
              <div className="flex items-center justify-center flex-col">
                <img
                  src="https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(10).jpg"
                  className="h-[500px] rounded-md mb-4"
                  alt="headline"
                />
                <div className="text-2xl font-bold">Project Neer</div>
              </div>
            ) : data === 2 ? (
              <div className="flex items-center justify-center flex-col">
                <img
                  src="https://enactus-mnnit.netlify.app/img/enactus/sahyog/sahyog%20(3).jpg"
                  className="h-[500px] rounded-md mb-4"
                  alt="headline"
                />
                <div className="text-2xl font-bold">Project Sahyog</div>
              </div>
            ) : data === 3 ? (
              <div className="flex items-center justify-center flex-col">
                <img
                  src="https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(2).jpg"
                  className="h-[500px] rounded-md mb-4"
                  alt="headline"
                />
                <div className="text-2xl font-bold">Project Moonj</div>
              </div>
            ) : data === 4 ? (
              <div className="flex items-center justify-center flex-col">
                <img
                  src="https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(9).jpg"
                  className="h-[500px] rounded-md mb-4"
                  alt="headline"
                />
                <div className="text-2xl font-bold">Project Samvesh</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Projects;

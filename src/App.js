import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import TeamPage from "./components/TeamPage";
import Neer from "./components/Neer";
import Samvesh from "./components/Samvesh";
import Sahyog from "./components/Sahyog";
import Moonj from "./components/Moonj";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function App() {
  const [activeSection, setActiveSection] = useState("");
  // const location = useLocation();

  // Intersection observer callback function
  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.5 });
  const [teamRef, teamInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  // Update active section based on intersection observer
  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (galleryInView) setActiveSection("gallery");
    else if (teamInView) setActiveSection("team");
    else if (contactInView) setActiveSection("contact");
  }, [homeInView, aboutInView, projectsInView, galleryInView, teamInView, contactInView]);

  // Update active section when location changes
  // useEffect(() => {
  //   if (window.location.pathname === "/") setActiveSection("home");
  // }, []);

  return (
    <Router>
      <div className="App">
        <Analytics />
        <SpeedInsights />
        <Navbar activeSection={activeSection} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                <Header ref={homeRef} />
                <About ref={aboutRef} />
                <Projects ref={projectsRef} />
                <Gallery ref={galleryRef} />
                <Team ref={teamRef} />
                <Contact ref={contactRef} />
              </div>
            }
          ></Route>
          <Route path="/team" element={<TeamPage />} />
          <Route path="/neer" element={<Neer />} />
          <Route path="/samvesh" element={<Samvesh />} />
          <Route path="/sahyog" element={<Sahyog />} />
          <Route path="/moonj" element={<Moonj />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

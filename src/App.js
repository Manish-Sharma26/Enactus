import React, { useState, useEffect } from "react";
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

function App() {
  const [activeSection, setActiveSection] = useState("");
  // const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("home");
      const aboutElement = document.getElementById("about");
      const projectsElement = document.getElementById("projects");
      const galleryElement = document.getElementById("gallery");
      const teamElement = document.getElementById("team");
      const contactElement = document.getElementById("contact");

      const scrollPosition = window.scrollY + 150;

      if (
        scrollPosition < aboutElement.offsetTop ||
        scrollPosition < homeElement.offsetTop
      ) {
        setActiveSection("home");
      } else if (
        scrollPosition >= aboutElement.offsetTop &&
        scrollPosition < projectsElement.offsetTop
      ) {
        setActiveSection("about");
      } else if (
        scrollPosition >= projectsElement.offsetTop &&
        scrollPosition < galleryElement.offsetTop
      ) {
        setActiveSection("projects");
      } else if (
        scrollPosition >= galleryElement.offsetTop &&
        scrollPosition < teamElement.offsetTop
      ) {
        setActiveSection("gallery");
      } else if (
        scrollPosition >= teamElement.offsetTop &&
        scrollPosition < contactElement.offsetTop
      ) {
        setActiveSection("team");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update the active section when the location changes
    if (window.location.pathname === "/") {
      setActiveSection("home");
    }
  }, []);

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
                <Header />
                <About />
                <Projects />
                <Gallery />
                <Team />
                <Contact />
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

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
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <Router>
      <Analytics/>
      <SpeedInsights/>
      <div className="App">
        <Navbar />
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
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/neer" element={<Neer/>}/>
          <Route path="/samvesh" element={<Samvesh/>}/>
          <Route path="/sahyog" element={<Sahyog/>}/>
          <Route path="/moonj" element={<Moonj/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

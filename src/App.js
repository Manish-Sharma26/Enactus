import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Gallery/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;

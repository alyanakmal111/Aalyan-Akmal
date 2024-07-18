// import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Project";
import Certificate from "./components/Certificate";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project />
      <Certificate />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

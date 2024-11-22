import React, { Fragment } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Project from "./components/Projects/Projects.jsx";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Experience from "./components/WorkExperiences/Experience.jsx";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </Fragment>
  );
};
export default App;

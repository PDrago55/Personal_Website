import React from "react";
import "./LandingPage.css";
import About from "./About";
import Languages from "./Languages";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer/Footer";
function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="bg_lp">
          <div className="text-container">
            <h1 className="intro">Hi I'm Paolo!</h1>
            <div className="welcome">{`Welcome to my Website :)`}</div>
          </div>
        </div>
        <About />
        <Education />
        <Languages />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;

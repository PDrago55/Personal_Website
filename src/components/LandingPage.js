import React from "react";
import "./LandingPage.css";
import ArrowUp from "./ArrowUp";
import About from "./About";
import Languages from "./Languages";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer/Footer";
function LandingPage() {
  //my landing page will hold onto all of my components and it will be embeded
  //my app will only run two components... technically...
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
        <ArrowUp />
      </div>
    </>
  );
}

export default LandingPage;

import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about-container">
      <h1 id="about_section" className="about-header">
        ABOUT
      </h1>
      <div className="image-container">
        <img className="image-style" src="/Headshot.JPG" alt="headshot"></img>
      </div>
      <p>
        {" "}
        Hey There! I'm a Full Stack Web Developer with a focus in everything
        Javascript.
      </p>
    </div>
  );
}

export default About;

import React from "react";
import "./projects.css";
function Projects() {
  //     <a
  //   href="https://www.altitudedistributions.ca/"
  //   className="project-link"
  // >
  return (
    <>
      <h1 id="projects_section" className="section-header">
        Projects
      </h1>
      <div className="project-container">
        <div className="project-card">
          <a
            href="https://www.altitudedistributions.ca/"
            className="project-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="title">Altitude Distributions</span>
          </a>
          <img src="altitude.png" alt="wix"></img>
          <div>
            My first completed project after the bootcamp! I used Wix and
            Javascript to create a web application for a distribution business.
            Check them out!
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/PDrago55/Monocle"
            className="project-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="title">Monocle</span>
          </a>
          <img src="landingpage.png" alt="monocle"></img>
          <div>
            This has always been a dream project for me! Monocle is a news media
            app that allows users to rate, review and save current news media
            stories.
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/PDrago55/Platformer"
            className="project-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="title">Platformer Game</span>
          </a>
          <img src="platformer.png" alt="eloquent"></img>
          <div>
            This is a simple platformer game built in HTML5, CSS3 and Vanilla
            Javascript.
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/PDrago55/overwatch-api"
            className="project-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="title">Siege Stack</span>
          </a>
          <img src="siege.png" alt="stack"></img>
          <div>
            A website that allows users to track their teams statistics on a
            competitive first person shooter game called Rainbow Six Siege. This
            application tracks scores, wins, losses and more.
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

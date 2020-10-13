import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="nav-container">
      <li className="nav-list">
        <a className="ref-list" href="#about_section">
          About
        </a>
      </li>
      <li className="nav-list">
        <a className="ref-list" href="#education_section">
          Education
        </a>
      </li>
      <li className="nav-list">
        <a className="ref-list" href="#languages_section">
          What I do
        </a>
      </li>
      <li className="nav-list">
        <a className="ref-list" href="#projects_section">
          Projects
        </a>
      </li>
      <li className="nav-list">
        <a className="ref-list" href="#contact_section">
          Contact
        </a>
      </li>
    </div>
  );
}

export default NavBar;

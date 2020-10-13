import React from "react";
import "./languages.css";
function Languages() {
  return (
    <>
      <h1 id="languages_section" className="section-header">
        What I do
      </h1>
      <p className="lang-desc">
        ndjdnewhewgryewhriuegfyugfiyesgfeiygfeygfeyfgeyfgfhfeydfjndsnjkfdsjnkfsnfdfbdbshshsvddvgefdvsgfdvsgsg
      </p>
      <div className="lang-container">
        <div className="lang-card">
          <div className="lang-circle">
            Front End
            <li className="list-container" tabIndex="0">
              <li>React</li>
              <li>Redux</li>
              <li>HTML5</li>
              <li>{`CSS3 & SASS`}</li>
              <li>Material UI</li>
            </li>
          </div>
        </div>
        <div className="lang-card">
          <div className="lang-circle">
            Back End
            <li className="list-container" tabIndex="0">
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Javascript Web Tokens</li>
            </li>
          </div>
        </div>
        <div className="lang-card">
          <div className="lang-circle">
            Tools
            <li className="list-container" tabIndex="0">
              <li>Git</li>
              <li>GitHub</li>
              <li>Trello</li>
              <li>Figma</li>
              <li>NPM</li>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Languages;
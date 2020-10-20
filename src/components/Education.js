import React from "react";
import "./education.css";
function Education() {
  const psycText =
    "I completed a Honours Bachelor Degree in Psychology at Concordia University. I did my Honours Thesis Project on Risky Decision Making in Young Adults. However, my main interests with psychology focus on political psychology, in other words, the way in which politics, government and media affects an indiviudal, in terms of voting patterns, racism and political affiliation.";
  const codeText =
    "I'm a recent graduate of Concordia University's Full Stack Web Developer bootcamp. This was probably the hardest program I have ever completed. However, it definitly was a fulfilling process! We covvered and learned Javascript frameworks and libraries such as React, Redux, Node, Express as well as MongoDB for Database management. I'm now trying to learn more about Data Science and Machine Learning.";
  return (
    <>
      <h1 className="section-header" id="education_section">
        Education
      </h1>
      <div className="edu-container-main">
        <div className="edu-container-card">
          <div className="image-container">
            <img src="psychology.png" alt="psych" className="edu-image"></img>
          </div>
          <div className="edu-text-container">
            <h3 className="study">Psychology</h3>
            <p className="edu-text">{psycText}</p>
          </div>
        </div>
        <div className="edu-container-card">
          <div className="image-container">
            <img
              src="web-development.png"
              alt="code"
              className="edu-image"
            ></img>
          </div>

          <div className="edu-text-container">
            <h3 className="study">Web Development</h3>
            <p className="edu-text">{codeText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;

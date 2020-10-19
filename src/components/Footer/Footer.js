import React from "react";
import { linkedin } from "react-icons-kit/ikons/linkedin";
import { github } from "react-icons-kit/icomoon/github";
import { u00A9 } from "react-icons-kit/noto_emoji_regular/u00A9";
import { Icon } from "react-icons-kit";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer-container">
        {/* <p className="footer-desc">
          I'm always available to talk, if you want to make a contact, add me on
          LinkedIn :). Don't forget to check out my projects on GitHub.
        </p> */}
        <div className="test">
          <div className="icon-container">
            <div className="icon">
              <a
                href="https://github.com/PDrago55"
                className="icon-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon size={32} icon={github} />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/paolodrago/"
                className="icon-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon size={32} icon={linkedin} />
              </a>
            </div>
          </div>
        </div>
        <p className="name">
          <Icon size={12} icon={u00A9}></Icon>
          Paolo Drago 2020
        </p>
      </div>
    </>
  );
}
export default Footer;

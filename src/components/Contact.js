import React from "react";
import "./contact.css";
import ModalContact from "./ModalContact";

function Contact() {
  return (
    <>
      <h1 id="contact_section" className="section-header">
        Contact
      </h1>
      <div className="button-container">
        <ModalContact />
      </div>
    </>
  );
}

export default Contact;

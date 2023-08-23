import React from "react";
import "../scss/_footer.scss";
import Button from "./Button";
import logo from "../media/cc-logo.webp";

const Footer = () => {
  return (
    <div className="footer">
      <h2>JOIN THE PACK</h2>
      <div className="button-container">
        <Button>CONTACT</Button>
      </div>

      <div className="logo-container">
        <p>PERSONALIZED TRAINING</p>
        <img src={logo} alt="confidence canine logo" />
        <p>DAYCARE YOU CAN TRUST</p>
      </div>
    </div>
  );
};

export default Footer;

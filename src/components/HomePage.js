import React from "react";
import backgroundVideo from "../media/dog-wind-homepage.mp4";
import logo from "../media/canine-logo.jpeg";
import "../scss/_homepage.scss";
import { useState } from "react";

function HomePage() {
  const classnames = ["nav-item-container"];
  const [navClassNames, setNavClassnames] = useState(classnames);

  const menuOnclick = () => {
    navClassNames.includes("active")
      ? setNavClassnames(classnames)
      : setNavClassnames([...classnames, "active"]);
  };

  return (
    <div className="homepage">
      <div className="background-video">
        <video muted autoPlay loop src={backgroundVideo} />
      </div>

      <div className="background-gradient"></div>

      <div className="side-nav">
        <button tabIndex="0" onClick={menuOnclick} className="hamburger-menu">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className={navClassNames.toString().replace(",", " ")}>
          <a href="#" tabIndex="1">
            TRAINING
          </a>
          <a href="#" tabIndex="2">
            PROGRAM
          </a>
          <a href="#" tabIndex="3">
            REVIEWS
          </a>
          <a href="#" tabIndex="4">
            CONTACT
          </a>
        </div>
      </div>

      <div className="main-content">
        <div className="left-side-logo">
          <h2 tabIndex="5">OWNER CONFIDENCE</h2>
          <h2 tabIndex="6">LEADERSHIP</h2>
        </div>
        <div className="logo-container">
          <img tabIndex="7" alt="confidence canine" src={logo} />
        </div>
        <div className="right-side-logo">
          <h2 tabIndex="8">CANINE CONFIDENCE</h2>
          <h2 tabIndex="9">TEAMWORK</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

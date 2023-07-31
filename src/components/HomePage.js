import React from "react";
import backgroundVideo from "../media/dog-wind-homepage.mp4";
import logo from "../media/canine-logo.jpeg";
import "../scss/_homepage.scss";
import { useState } from "react";

function HomePage() {
  const [navClassNames, setNavClassnames] = useState('');

  const menuOnclick = () => {
    navClassNames ? setNavClassnames('') : setNavClassnames('display');
  };

  return (
    <div className="homepage">
      <div className="background-video">
        <video muted autoPlay loop src={backgroundVideo} />
      </div>

      <div className="background-gradient"></div>

      <div className="side-nav">
        <button onClick={menuOnclick} className="hamburger-menu">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <h2 className={navClassNames}>TRAINING</h2>
        <h2 className={navClassNames}>PROGRAM</h2>
        <h2 className={navClassNames}>REVIEWS</h2>
        <h2 className={navClassNames}>CONTACT</h2>
      </div>

      <div className="main-content">
        <div className="left-side-logo">
          <h2>OWNER CONFIDENCE</h2>
          <h2>LEADERSHIP</h2>
        </div>
        <div className="logo-container">
          <img alt="confidence canine logo" src={logo} />
        </div>
        <div className="right-side-logo">
          <h2>CANINE CONFIDENCE</h2>
          <h2>TEAMWORK</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import React from "react";
import "../scss/_split-section.scss";
import Button from "./Button";

const SplitSection = ({ header, subheader, children, video, imageLeft }) => {
  return (
    <div className={`split-section ${imageLeft ? "image-left" : ""}`}>
      <div className="text-section">
        <div className="top-bar">
          <div></div>
          <div></div>
        </div>
        <h2 className="title">{header}</h2>
        <h3 className="subtitle">{subheader}</h3>
        <div className="body">{children}</div>
        <div className="split-section-button-container">
          <Button link="#">Learn More</Button>
        </div>
      </div>

      <div className="video-section">
        <div className="background-gradient"></div>
        <video muted autoPlay loop src={video}></video>
      </div>
    </div>
  );
};

export default SplitSection;

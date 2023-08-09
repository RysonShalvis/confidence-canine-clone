import React from "react";
import "../scss/_section.scss";
import { useState, useRef } from "react";

const Section = () => {
  return (
    <div className="section">
      <div className="section-quote-container">
        <p>"WHATEVER IS WORTH DOING</p>
        <p>IS WORTH DOING WELL."</p>
        <p>Philip Stanhope</p>
      </div>
    </div>
  );
};

export default Section;

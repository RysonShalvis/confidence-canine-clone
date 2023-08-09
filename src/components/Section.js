import React from "react";
import "../scss/_section.scss";
import { useTransitionOnce } from "../util/util";

const Section = () => {
  const [addClassNames, ref] = useTransitionOnce("section");

  return (
    <div ref={ref} className={addClassNames}>
      <div className="section-quote-container">
        <p>"WHATEVER IS WORTH DOING</p>
        <p>IS WORTH DOING WELL."</p>
        <p>Philip Stanhope</p>
      </div>
    </div>
  );
};

export default Section;

import React from "react";
import SplitSection from "./SplitSection";
import daycareVideo from "../media/daycare-video.mp4";

const Daycare = () => {
  const header = "DOGGY DAYCARE";
  const subHeader = "A COZY IN HOME EXPERIENCE.";

  return (
    <SplitSection imageLeft header={header} subheader={subHeader} video={daycareVideo}>
      <p>
        ...With lots of outdoor play. Leave your pet in confindence in the home
        of a dog trainer well-versed in challenging dog behaviors. Expect
        professional hands on, watchful pet-sitting while you're away. All dogs
        are constantly supervised so you can relax and leave rest assured that
        your best friend is in good hands.
      </p>
    </SplitSection>
  );
};

export default Daycare;

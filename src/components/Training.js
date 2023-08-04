import React from "react";
import SplitSection from "./SplitSection";
import trainingVideo from "../media/training-video.mp4";

export const Training = () => {
  const header = "TRAINING";
  const subHeader = "PERSONALIZED FOR BOTH YOU AND YOUR PET.";

  return (
    <SplitSection header={header} subheader={subHeader} video={trainingVideo}>
      <p>
        Raising a dog is full of pressure! There are tons of people who will
        tell you that you need every thing and you need it RIGHT NOW to have a
        well adjusted dog: Socialization, enrichment, desensitization, play
        dates, training equipment, treats, beds, collars, kennels, training
        programs, and don't forget grooming, pee pads, word-buttons, etc.
      </p>
      <p>
        It all makes for a pretty overwhelming list. The most important thing
        your pet needs? A well-educated you!
      </p>
      <p>
        That's why we're here to start you off. To prepare you to take small
        steps at a time down a manageable, bite-sized path.
      </p>
    </SplitSection>
  );
};

export default Training;

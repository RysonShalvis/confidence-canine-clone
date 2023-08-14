import React from "react";
import logo from "../media/cc-logo.webp";
import "../scss/_bragging-rights.scss";

const BraggingRights = () => {
  return (
    <div className="bragging-rights">
      <div className="left-side section-container">
        <div className="bragging-rights-section">
          <h2>EMOTIONAL SUPPORT</h2>
          <p>
            We're not just here for the dog! We're here for you, too. Owning a
            dog can be tough, from puppy blues to aggression and reactivity
            issues. It's why we became trainers- you aren't alone.
          </p>
        </div>

        <div className="bragging-rights-section">
          <h2>CPR CERTIFIED</h2>
          <p>All staff are Pet CPR Certified through the American Red Cross.</p>
        </div>

        <div className="bragging-rights-section">
          <h2>CHALLENGING BEHAVIORS</h2>
          <p>
            We both started as pet owners with challenging dogs: Bite history,
            reactivity, and confidence issues. It prompted us to take action,
            but we didn't just want a trained dog. We obsessed to know
            everything our trainers knew.
          </p>
        </div>
      </div>

      <div className="image-container">
        <img src={logo} alt="confidence canine logo" />
      </div>

      <div className="right-side section-container">
      <div className="bragging-rights-section">
          <h2>9 YEARS COMBINED EXPERIENCE</h2>
          <p>
            We have 9 years combined experience working for boarding facilities,
            vet clinics, and training under some of the top trainers in Utah &
            Idaho.
          </p>
        </div>

        <div className="bragging-rights-section">
          <h2>CLEANLINESS AND VACCINATIONS</h2>
          <p>
            All pets in our care are required to have vaccinations and a kempt
            appearance. We're proud to have a sanitized and tidy environment.
          </p>
        </div>

        <div className="bragging-rights-section">
          <h2>BASED OUT OF A LOVING HOME</h2>
          <p>
            All daycare takes place in the homes of individual trainers, instead
            of in a facility. This ensures that all pets have 24/7 attentive
            care. Less stress, comfier housing, and safety first. It's our
            promise to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BraggingRights;

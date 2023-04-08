import React from "react";
import PolaroidMod from "./PolaroidMod";
import headshot from "../images/headshot.jpg";
import Photos from "../components/Photos.jsx";

const AboutMe = ({ card }) => {
  return (
    <>
      <div className="flex display">
        <div id="intro">
          <h3>Hi, I'm Alex.</h3>
          <p>
            I'm Alexander Francis Singleton, an aspiring junior developer from
            the east-coast of Canada.
          </p>{" "}
          <p>
            I am a life long learner, I enjoy the struggle of figuring new
            things out.
          </p>{" "}
          <p>
            I have the privilege of enjoying beekeeping in the warmer seasons,
            and formerly worked with a non-for profit landscaping company, The
            Grand Concourse.
          </p>{" "}
          <p>Always looking to expand my horizon.</p>
        </div>
        <PolaroidMod source={headshot} card={card} />
      </div>
      <hr />
      <Photos />
      <hr />
    </>
  );
};

export default AboutMe;

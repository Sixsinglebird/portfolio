import React from "react";
import PolaroidMod from "./PolaroidMod";
import headshot from "../images/headshot.jpg";

const AboutMe = ({ card }) => {
  return (
    <>
      <div className="flex display">
        <div id="intro">
          <blockquote>
            <h3>Hi, I'm Alex.</h3>
          </blockquote>
          <p>
            I’m Alexander Francis Singleton, a junior software developer and
            designer from Newfoundland. I am a life long learner, also a
            beekeeper, and amateur musician.
          </p>{" "}
          <p>
            I have the privilege of enjoying beekeeping in the warmer seasons,
            and formerly worked with a non-for profit landscaping company, The
            Grand Concourse, where I helped to maintain the city’s trails around
            areas like cbs and Quidi-Vidi Lake (Hard but rewarding work).
          </p>{" "}
          <p>
            <em>I love when someone else can enjoy something I worked on.</em>
          </p>{" "}
          <p>
            I’ve always believed in a bigger picture and I’m Always looking to
            expand the horizon of myself and those around me.
          </p>
        </div>
        <PolaroidMod id="infoPortrait" source={headshot} card={card} />
      </div>
    </>
  );
};

export default AboutMe;

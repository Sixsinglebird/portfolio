import React from "react";
import Polaroid from "./Polaroid";
import swarm from "../images/swarm.jpg";
import smile from "../images/smile.jpeg";
import me from "../images/IMG-0901.jpg";

const Photos = ({ deg }) => {
  return (
    <>
      <div id="photos" className="flex">
        <Polaroid source={swarm} />
        <Polaroid source={smile} />
        <Polaroid source={me} />
      </div>
    </>
  );
};

export default Photos;

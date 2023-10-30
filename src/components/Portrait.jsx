import React from "react";
import Polaroid from "./Polaroid";
import headshot from "../images/headshot.jpg";

const Portrait = () => {
  return (
    <>
      <div id="portrait" className="flex">
        <Polaroid source={headshot} />
      </div>
    </>
  );
};

export default Portrait;

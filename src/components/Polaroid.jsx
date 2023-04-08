import React from "react";

const Polaroid = ({ source }) => {
  // random degree between -5 & 5
  let deg = Math.random(1) * 10 - 5;
  return (
    <>
      <figure
        style={{ transform: `rotate(${deg}deg)`, height: "fit-content" }}
        className="polaroid"
      >
        <img src={source} alt="" />
      </figure>
    </>
  );
};

export default Polaroid;

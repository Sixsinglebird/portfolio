import React from "react";
import ContactInfo from "./ContactInfo.jsx";

const Polaroid = ({ source, card }) => {
  // random degree between -5 & 5
  let deg = Math.random(1) * 10 - 5;
  return (
    <>
      <figure style={{ transform: `rotate(${deg}deg)` }} className="polaroid">
        {card && <img src={source} alt="" /> ? (
          <img src={source} alt="" />
        ) : (
          <ContactInfo />
        )}
      </figure>
    </>
  );
};

export default Polaroid;

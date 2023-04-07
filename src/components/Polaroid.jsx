import React from "react";

const Polaroid = ({ source }) => {
  return (
    <>
      <figure className="polaroid">
        <img src={`../images${source}`} alt="" />
      </figure>
    </>
  );
};

export default Polaroid;

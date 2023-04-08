import React from "react";

const Skill = ({ title }) => {
  return (
    <>
      <div id={title} className="skill">
        {title}
      </div>
    </>
  );
};

export default Skill;

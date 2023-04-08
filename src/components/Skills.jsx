import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <h3>My Skills</h3>
        <div className="column flex" style={{ width: "75%" }}>
          <Skill className="skill" title="JavaScript" />
          <Skill className="skill" title="HTML" />
          <Skill className="skill" title="CSS" />
        </div>
        <div className="column flex" style={{ width: "55%" }}>
          <Skill title="Python" />
          <Skill title="Unity" />
          <Skill title="Figma" />
        </div>
      </div>
    </>
  );
};

export default Skills;

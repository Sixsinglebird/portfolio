import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <h3>My Skills</h3>
        <div className="flex" style={{ width: "65%", margin: " 8px auto" }}>
          <Skill className="skill" title="JavaScript" />
          <Skill className="skill" title="HTML" />
          <Skill className="skill" title="CSS" />
        </div>
        <div className="flex" style={{ width: "65%", margin: " 8px auto" }}>
          <Skill title="Python" />
          <Skill title="Unity" />
          <Skill title="Figma" />
          <Skill title="OpenAI API" />
        </div>
        <div className="flex" style={{ width: "65%", margin: " 8px auto" }}>
          <Skill title="React" />
          <Skill title="Node.js" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Skills;

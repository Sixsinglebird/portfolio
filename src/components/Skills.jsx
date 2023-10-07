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
          <Skill title="Java" />
          <Skill title="UI/UX Design" />
          <Skill title="Leadership" />
        </div>
        <div className="flex" style={{ width: "65%", margin: " 8px auto" }}>
          <Skill title="Agile" />
          <Skill title="Linux" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Skills;

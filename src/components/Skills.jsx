import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <h3>My Skills</h3>
        <div className="flex">
          <Skill className="skill" title="JavaScript" />
          <Skill className="skill" title="HTML" />
          <Skill className="skill" title="CSS" />
        </div>
        <div className="flex">
          <Skill title="Python" />
          <Skill title="Java" />
          <Skill title="UI/UX" />
          <Skill title="Agile" />
        </div>
        <div className="flex">
          <Skill title="PostGreSQL" />
          <Skill title="Linux" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Skills;

import Button from "./Button";

const Navigation = () => {
  return (
    <>
      <div id="nav" className="flex">
        <a href="https://github.com/Sixsinglebird">
          <Button text="My Work" />
        </a>
        <Button text="My Resume" />
      </div>
    </>
  );
};

export default Navigation;

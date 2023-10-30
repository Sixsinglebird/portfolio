import Button from "./Button";

const Navigation = () => {
  return (
    <div id="nav" className="flex">
      <a href="https://www.dropbox.com/scl/fi/ts32m1ff4m3uotfj05uyb/Resume-2023_10_30.pdf?rlkey=qj5gpoa1de3x4d96ztawv058x&dl=1">
        <Button text="My Resume" />
      </a>
      <a href="https://modrinth.com/mod/wizardfabric">
        {" "}
        <Button text="WizardFabric" />
      </a>
    </div>
  );
};

export default Navigation;

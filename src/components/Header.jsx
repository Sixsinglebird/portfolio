// uncomment to import button component for header
// import Button from "./Button.jsx";

import Button from "./Button";
// import Navigation from "./Navigation";

const Header = ({ title, action }) => {
  return (
    <>
      <header className="flex">
        <h1 id="title">{title}</h1>

        <Button onClick={action} text={"Contact Me"} />
      </header>
    </>
  );
};

export default Header;

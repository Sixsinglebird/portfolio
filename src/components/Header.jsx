// uncomment to import button component for header
// import Button from "./Button.jsx";

import Navigation from "./Navigation";

const Header = ({ title }) => {
  return (
    <>
      <header className="flex">
        <h1 id="title">{title}</h1>
        <Navigation />
        {/* button component */}
        {/* <Button text="Add" onClick={() => onAdd()} /> */}
      </header>
    </>
  );
};

export default Header;

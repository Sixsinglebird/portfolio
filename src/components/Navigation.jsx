import { BsGithub } from "react-icons/bs";
import { BsPhoneFill } from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";

const Navigation = () => {
  return (
    <>
      <nav id="navigation" className="flex">
        <div>
          <h2>
            Sixsinglebird <BsGithub className="navLogo" />
          </h2>
        </div>
        <div>
          <h2>
            +1 (709) 685-3999 <BsPhoneFill className="navLogo" />
          </h2>
        </div>
        <div>
          <h2>
            asingleton.business@gmail.com <BsMailbox2 className="navLogo" />
          </h2>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

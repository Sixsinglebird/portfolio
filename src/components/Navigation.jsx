import { DiGithub } from "react-icons/di";
import { BsPhoneVibrate } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Navigation = () => {
  return (
    <>
      <nav id="navigation" className="flex">
        <div className="flex">
          <h2>
            Sixsinglebird <DiGithub className="navLogo" />
          </h2>
        </div>
        <hr />
        <div className="flex">
          <h2>
            +1 (709) 685-3999 <BsPhoneVibrate className="navLogo" />
          </h2>
        </div>
        <hr />
        <div className="flex">
          <h2>
            asingleton.business@gmail.com <HiOutlineMail className="navLogo" />
          </h2>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

import React from "react";
import { Link } from "react-scroll";

const Header = () => (
  <div className="flex justify-between p-4 md:px-12 bg-dark-purple fixed top-0 z-50 w-screen">
    <h2 className="text-lg md:text-2xl text-lt-gray hover:cursor-pointer">
      <Link
        activeClass="active"
        to="TitleContainer"
        smooth={true}
        duration={1000}
      >
        Gabe Cloud
      </Link>
    </h2>
    <ul className="flex gap-2 md:gap-8 items-center justify-items-center md:text-lg">
      <li className="text-lt-gray hover:text-lt-yellow hover:cursor-pointer">
        <Link
          activeClass="active"
          to="AboutContainer"
          offset={-60}
          smooth={true}
          duration={1000}
        >
          About
        </Link>
      </li>
      <li className="text-lt-gray hover:text-lt-yellow hover:cursor-pointer">
        <Link
          activeClass="active"
          to="ProjectContainer"
          offset={-60}
          smooth={true}
          duration={1000}
        >
          Projects
        </Link>
      </li>
      <li className="text-lt-gray hover:text-lt-yellow hover:cursor-pointer">
        <Link
          activeClass="active"
          to="ContactContainer"
          smooth={true}
          duration={1000}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;

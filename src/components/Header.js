import React from "react";
import { Link } from "react-scroll";

const Header = () => (
  <div className="flex justify-between p-4 md:px-12 bg-dark-purple fixed top-0 z-50 w-screen">
    <h2 className="text-xl md:text-2xl text-lt-gray hover:cursor-pointer">
      <Link
        activeClass="active"
        to="TitleContainer"
        smooth={true}
        duration={1000}
      >
        Gabe Cloud
      </Link>
    </h2>
    <ul className="flex gap-4 md:gap-8 items-center justify-items-center text-lg">
      <li className="text-lt-gray hover:text-lt-yellow hover:cursor-pointer">
        <Link
          activeClass="active"
          to="AboutContainer"
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

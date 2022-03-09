import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => (
  <div className="HeaderContainer">
    <h2 className="HeaderName">Gabe Cloud</h2>
    <ul className="NavBar">
      <li>
        <Link
          activeClass="active"
          to="AboutContainer"
          smooth={true}
          duration={1000}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="ProjectContainer"
          smooth={true}
          duration={1000}
        >
          Projects
        </Link>
      </li>
      <li>
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

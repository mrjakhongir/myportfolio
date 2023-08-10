import React, { useState } from "react";
import "./navbar.scss";
import { images } from "../../constants";
// import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  function toggleNavigation() {
    setToggleNav((prevState) => !prevState);
  }
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.joxa} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonials", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div
        onClick={() => toggleNavigation()}
        class={`hamburger ${toggleNav && "hamburger-toggled"}`}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`navigation ${toggleNav && "nav-open"}`}>
        <ul>
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li onClick={() => toggleNavigation()} key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
//import "./navbar.scss";
import "./navbar.css";
import "./navbar.scss";
import { MdLocalHospital } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function to remove navBar
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div class="logoDiv">
          <a href="/medide" className="logo flex">
            <h1>
              <MdLocalHospital className="icon" /> MEDIDE
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            {/* <ul className="navLists"> */}
            <li className="navItem">
              <a href="/home" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="/packages" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="/appointment" className="navLink">
                Appointment
              </a>
            </li>

            <li className="navItem">
              <a href="/about" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="/pages" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="/news" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="/contact" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="/book">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

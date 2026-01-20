import React, { useState, useEffect } from "react";

import { Button } from "./Button";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  // click is a booleanvar and setclick is a constructor?
  // click is a var in that set constructor which is setclick.
  // Setclick is a set existing state from react.
  // You then have to initialize click which is false as it is a booleanvar

  const handleClick = () => setClick(!click); // This is the Toggle Switch
  const closeMobileMenu = () => setClick(false); // This overrides the Toggle to OFF.

  const [button, setButton] = useState(true); // Button may be used in the future.

  const location = useLocation(); // location is the current page you are on.
  const isContactPage = location.pathname === "/ContactUs";
  // console.log("Current path:", location.pathname);

  const showButton = () => {
    if (window.innerWidth <= 535) {
      // the button is the top sign up button
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // useEffect( () => { (window.innerWidth <= 535)? {} :  window.addEventListener('resize', ); } ); // delete?
  // useEffect(() => {showButton();}, []); // OG line returning an empty array. NULL

  useEffect(() => {
    showButton();
  }); // OG line returning an empty array. NULL
  window.addEventListener("resize", showButton); // changed resize to resizing

  // ! FIX THIS BUTTON FOR MOBILE APPLICATION.

  return (
    // <nav className="navbar">

    <nav className={`navbar ${isContactPage ? "navbar-contact" : ""} `}>
      <div>
          <Link to="/"> 
            <img
              src={`images/TekIntraLinked-Logo-Only.png`}
              alt="Logo"
              className="Tekintralinked-Logo-Only"
            />
          </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "" : "fas fa-bars"} />
        </div>
        {/* If click is true then x. If click is false then menu bars   */}

        <li className={click ? "nav-menu active" : "nav-menu "}>
          {/* If false the navigation menu disappears. If true the menu appears. */}

          <div className="menu-icon" onClick={closeMobileMenu}>
            <i className={click ? "fas fa-times" : ""} />
          </div>

          {/* Fix menu so it works and looks seamless.  */}

          {/* <li className="nav-item"> */}
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            HOME
          </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link to="/Portfolio" className="nav-links" onClick={closeMobileMenu}>
            PORTFOLIO
          </Link>
          {/* </li> */}

          {/* <li className="nav-item"> */}
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            RESUME
          </Link>
          {/* </li> */}
        </li>

        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;

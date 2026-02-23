// Import React hooks, Next.js Link and Router, and icons
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from 'react-icons/fa';

// Navbar component receives click state and setter from parent
function Navbar({ click, setClick}) {
  // Toggle mobile menu open/close
  const handleClick = () => setClick(!click); // Toggle switch
  const closeMobileMenu = () => setClick(false); // Force menu closed

  // Router for current path
  const router = useRouter(); // Represents current route path

  // Check if user is on ContactUs page to adjust navbar style
  const isContactPage = router.pathname === "/ContactUs";

  // Render navbar with logo and menu links
  return (
    <nav className={`navbar ${isContactPage ? "navbar-contact" : ""} `}>
      <div>
        {/* Clicking the logo navigates home and closes mobile menu */}
        <Link href="/" onClick={closeMobileMenu}>
            <img
              src={"/images/TekIntraLinked-Logo-Only.png"}
              alt="Logo"
              className="Tekintralinked-Logo-Only"
            />
        </Link>

        {/* Hamburger icon for mobile menu toggle */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? "": <FaBars size={45} color="#c2d0e1ff" />}
        </div>

        {/* Mobile/desktop nav menu list */}
        <li className={click ? "nav-menu active" : "nav-menu" }>
          {/* Close icon inside mobile menu */}
          <div className="menu-icon" onClick={closeMobileMenu}>
            {click ? <FaTimes />  : ""}
          </div>

          {/* Main navigation links */}
          <Link href="/" className="nav-links" onClick={closeMobileMenu}>
            HOME
          </Link>
          <Link href="/Portfolio" className="nav-links" onClick={closeMobileMenu}>
            PORTFOLIO
          </Link>
          {/* Downloadable resume link */}
          <a
            href="/ErickCabreraResume_.pdf"
            download="ErickCabreraResume_.pdf"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            RESUME
          </a>
        </li>

        {/* Placeholder for potential future sign-up button */}
        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;

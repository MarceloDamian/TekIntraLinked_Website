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
    <nav
      className={`navbar ${isContactPage ? "navbar-contact" : ""} `}
      aria-label="Main"
    >
      <div>
        {/* The logo is this link's only content, so its alt text has to name the
            destination rather than describe the picture. */}
        <Link href="/" onClick={closeMobileMenu}>
            <img
              src={"/images/TekIntraLinked-Logo-Only.png"}
              alt="TekIntraLinked home"
              className="Tekintralinked-Logo-Only"
            />
        </Link>

        {/* A real button, so it is focusable and operable by keyboard. It was a
            bare <div onClick>, which left the menu unreachable below 535px. */}
        <button
          type="button"
          className="menu-icon"
          onClick={handleClick}
          aria-expanded={click}
          aria-controls="primary-navigation"
          aria-label={click ? "Close menu" : "Open menu"}
        >
          {click
            ? <FaTimes aria-hidden="true" />
            : <FaBars size={45} color="#c2d0e1ff" aria-hidden="true" />}
        </button>

        {/* Mobile/desktop nav menu list. A <ul> so the items are a real list;
            the <li> used to be an orphan, which breaks list navigation. */}
        <ul
          id="primary-navigation"
          className={click ? "nav-menu active" : "nav-menu" }
        >
          {/* Main navigation links */}
          <li>
            <Link href="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/Portfolio" className="nav-links" onClick={closeMobileMenu}>
              PORTFOLIO
            </Link>
          </li>
          {/* Downloadable resume link; the type is spoken so nobody is
              surprised by a download. */}
          <li>
            <a
              href="/ErickCabreraResume_.pdf"
              download="ErickCabreraResume_.pdf"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              RESUME<span className="visually-hidden"> (downloads a PDF)</span>
            </a>
          </li>
        </ul>

        {/* Placeholder for potential future sign-up button */}
        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;

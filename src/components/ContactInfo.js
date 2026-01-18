import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const ContactInfo = () => (
  <div className="footer-link-items">
    <h3>
      TekIntralinked Ltd. Liability Co. © 2025 | Privacy Policy | Terms of
      Service |{<Link to="/ContactUs"> Contact Us | </Link>}
      {
        <Link
          className="social-icon-link github"
          to="https://github.com/MarceloDamian?tab=repositories"
        >
          <FaGithub color="#87CEFA" size={22} /> Github |{" "}
        </Link>
      }
      {
        <Link
          className="social-icon-link linkedin"
          to="https://www.linkedin.com/in/erick-c-"
        >
          <FaLinkedin color="#87CEFA" /> Linkedin
        </Link>
      }
    </h3>
  </div>
);

// make this responsive with hooks and eventlisteners that change the size.

export default ContactInfo;

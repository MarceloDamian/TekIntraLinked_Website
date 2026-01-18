import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

<<<<<<< HEAD
// Component for Contact Information
=======

>>>>>>> Current-Copy

const ContactInfo = () => (
  <div className="footer-link-items">
    <h3>
      TekIntralinked Ltd. Liability Co. © 2025 | Privacy Policy | Terms of
<<<<<<< HEAD
      Service |
      {<Link to="/ContactUs"> Contact Us | </Link>}
=======
      Service |{<Link to="/ContactUs"> Contact Us | </Link>}
>>>>>>> Current-Copy
      {
        <Link
          className="social-icon-link github"
          to="https://github.com/MarceloDamian?tab=repositories"
<<<<<<< HEAD
        ><FaGithub color="#87CEFA" size={22} />Github | </Link>
      }
      {<Link
          className="social-icon-link linkedin"
          to="https://www.linkedin.com/in/erick-c-"
        ><FaLinkedin color="#87CEFA" /> Linkedin</Link>
=======
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
>>>>>>> Current-Copy
      }
    </h3>
  </div>
);

// make this responsive with hooks and eventlisteners that change the size.

export default ContactInfo;
